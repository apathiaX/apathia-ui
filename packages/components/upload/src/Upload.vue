<template>
  <div
    v-bind="$attrs"
    ref="containerRef"
    :class="containerClasses"
    :draggable="draggable"
  >
    <div v-if="draggable" @click="handleTriggerClick">
      <slot name="drag">
        <div :class="dragContainerClasses">
          <ApIcon :size="50">
            <UploadFilled />
          </ApIcon>
          <p>
            将文件拖入此处或者
            <span :class="styles.clickText">点击选择</span>
          </p>
        </div>
      </slot>
    </div>
    <template v-else>
      <ApInput
        v-if="!multiple && !noInput"
        :model-value="inputVal"
        :disabled="inputDisabled || disableUpload"
        style="display: inline-block"
        clearable
        @update:modelValue="handleUrlInput"
      />
      <div style="display: inline-block" @click="handleTriggerClick">
        <slot name="button">
          <ApButton
            primary
            :disabled="disableUpload"
            :style="uploadButtonStyles"
          >
            {{ buttonName }}
          </ApButton>
        </slot>
      </div>
    </template>
  </div>
  <input
    ref="inputRef"
    type="file"
    :multiple="multiple"
    :accept="accept"
    style="display: none"
    @change="handleFileChange"
  />
</template>

<script lang="ts" setup>
import { computed, inject, ref, watch } from 'vue'
import { toast } from '@apathia/components/alert'
import { ApButton } from '@apathia/components/button'
import { ApInput } from '@apathia/components/input'
import { ApIcon } from '@apathia/components/icon'
import { promiseWrapper, request } from '@apathia/shared'
import { useDragDrop } from './useDragDrop'
import { sizeFormat } from './utils'
import { UploadFilled } from '@apathia/icons-vue'
import type { UploadEmits, UploadProps } from './types'
import { getUploadStyles } from './upload'

defineOptions({
  name: 'ApUpload',
})

const props = withDefaults(defineProps<UploadProps>(), {
  valid: false,
  draggable: false,
  headers: () => ({}),
  name: 'file',
  inputDisabled: false,
  noInput: false,
  buttonName: '上传',
  withCredentials: false,
  multiple: false,
  data: () => ({}),
  limit: 5,
  filesize: undefined,
  accept: 'image/*',
  disabled: false,
  onBeforeEachUpload: undefined,
  onBeforeAllUpload: undefined,
  onAfterEachUpload: undefined,
  onError: undefined,
  resolveUrl: (p: unknown) =>
    (p as { data: { location: string } }).data.location,
  checkUrl: (url: string) => !!url,
  https: false,
})

const inputVal = computed(() =>
  Array.isArray(props.modelValue) ? props.modelValue[0] : props.modelValue,
)

const emit = defineEmits<UploadEmits>()

const styles = getUploadStyles()
const formDisabled = inject('FormDisabled', ref(false))
const containerRef = ref<HTMLDivElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)

watch(
  [() => props.modelValue, () => props.multiple],
  async ([value, multiple]) => {
    if (!value) return

    if (Array.isArray(value) && !multiple) {
      // incorrect modelValue
      console.warn('[Upload] value should not be an array if multiple is false')
      emit('update:valid', false)
    } else if (!Array.isArray(value) && multiple) {
      // incorrect modelValue
      console.warn('[Upload] value should be an array if multiple is true')
      emit('update:valid', false)
    } else {
      // correct modelValue, then checking if value is all valid
      const needValidateUrls = (multiple ? value : [value]) as string[]

      const [urlsValid, checkErr] = await promiseWrapper(
        Promise.all(needValidateUrls.map(url => props.checkUrl(url))),
      )
      if (checkErr || !urlsValid) {
        emit('update:valid', false)
        return
      }

      emit('update:valid', urlsValid.every(Boolean))
    }
  },
  { immediate: true },
)

const disableUpload = computed(() => {
  const isBeyondLimit = props.multiple
    ? props.modelValue.length >= props.limit
    : false
  return props.disabled || formDisabled.value || isBeyondLimit
})

const { dragging } = useDragDrop(
  containerRef,
  disableUpload,
  (files?: FileList) => {
    if (files) {
      uploadFiles(files)
    }
  },
)

const containerClasses = computed(() => ({
  [styles.trigger]: !props.draggable,
}))
const dragContainerClasses = computed(() => ({
  [styles.drag]: props.draggable,
  [styles.dragging]: props.draggable && dragging.value,
  [styles.disabled]: props.draggable && disableUpload.value,
}))
const uploadButtonStyles = computed(() => ({
  margin: `0 0 0 ${!props.multiple && !props.noInput ? '0.25rem' : '0'}`,
  whiteSpace: 'nowrap',
}))

const uploadFiles = async (files: FileList | null) => {
  if (!checkFileCount(files)) {
    return
  }

  const [allowUploadAllRes, uploadAllErr] = await promiseWrapper(
    props.onBeforeAllUpload
      ? props.onBeforeAllUpload(files)
      : Promise.resolve(true),
  )
  if (uploadAllErr || !allowUploadAllRes) {
    return
  }

  // upload one by one
  const fileArr = Array.prototype.slice.call(files)
  for (const file of fileArr) {
    // eslint-disable-next-line no-await-in-loop
    const [processedFile, processErr] = await promiseWrapper<File>(
      props.onBeforeEachUpload
        ? props.onBeforeEachUpload(file)
        : Promise.resolve(file),
    )
    if (processErr || !processedFile) {
      console.error(processErr || new Error('[Upload] invalid file'))
      return
    }

    // check file size
    if (props.filesize && processedFile.size > props.filesize) {
      const filesizeText = sizeFormat(props.filesize, 0)
      toast.danger(`文件大小不能超过${filesizeText}`, {
        title: '错误',
      })
      return
    }

    // eslint-disable-next-line no-await-in-loop
    await upload(processedFile)
  }
}

const upload = async (file: File) => {
  if (inputRef.value) {
    inputRef.value.value = ''
  }

  const resp = await request('POST', props.action, buildFormData(file), {
    ...props.headers,
    withCredentials: props.withCredentials,
  })

  let [url, urlErr] = await promiseWrapper(props.resolveUrl(resp))
  if (urlErr || url === null) {
    props.onError?.(urlErr)
    return
  }

  if (props.https) {
    url = url.replace(/^https?/, 'https')
  }

  const [urlRes, processErr] = await promiseWrapper(
    props.onAfterEachUpload
      ? props.onAfterEachUpload(url, file)
      : Promise.resolve(url),
  )
  if (processErr || urlRes === null) {
    props.onError?.(processErr)
    return
  }

  emit(
    'update:modelValue',
    props.multiple ? (props.modelValue.concat(urlRes) as string[]) : urlRes,
  )
}

const buildFormData = (file: File) => {
  const data = {
    ...(typeof props.data === 'function' ? props.data(file) : props.data),
    [props.name]: file,
  }

  return Object.keys(data).reduce((fd, key) => {
    if (data[key] !== '') {
      fd.append(key, data[key])
    }
    return fd
  }, new FormData())
}

const handleTriggerClick = () => {
  if (disableUpload.value) return

  if (inputRef.value) {
    inputRef.value.value = ''
    inputRef.value.click()
  }
}
const handleFileChange = (e: Event) => {
  const { files } = e.target as HTMLInputElement

  uploadFiles(files)
}

const checkFileCount = (files: FileList | null): boolean => {
  if (!files || !files.length) {
    return false
  }
  if (props.multiple) {
    if (props.modelValue.length + files.length > props.limit) {
      console.warn('[Upload] files count exceed')
      return false
    }
    return true
  }
  if (files.length > 1) {
    console.warn('[Upload] only one file allowed')
    return false
  }
  return true
}

const handleUrlInput = async (value: string | number) => {
  emit('update:modelValue', value as string)

  if (!props.checkUrl) {
    return
  }

  const [urlValid, urlErr] = await promiseWrapper(
    props.checkUrl(value as string),
  )
  if (urlErr || !urlValid) {
    emit('update:modelValue', '')
    return
  }
}
</script>
