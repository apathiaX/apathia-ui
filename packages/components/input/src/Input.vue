<template>
  <div
    :class="[
      {
        [styles.inputContainer]: true,
        [styles.active]: activeVal,
        [styles.disabled]: !!disableInput,
      },
      $attrs.class,
    ]"
    :style="($attrs.style as StyleValue)"
  >
    <span v-if="withPrepend" :class="styles.prepend">
      <slot name="prepend"></slot>
    </span>
    <div :class="styles.inputWrapper">
      <input
        ref="inputRef"
        v-model="inputVal"
        v-bind="attrs"
        :type="type"
        :class="[
          {
            [styles.input]: true,
            [styles.disabled]: !!disableInput,
          },
          inputClass,
        ]"
        :disabled="!!disableInput"
        @input="handleInput"
        @blur="() => (activeVal = false)"
        @focus="() => (activeVal = true)"
      />
      <ApIcon
        v-if="showClearIcon"
        :class="[styles.clearableIcon, search ? styles.clearWithSuffix : '']"
        @click.stop="clear"
      >
        <Close />
      </ApIcon>
      <ApIcon v-if="search" :class="styles.suffixBtn" @click="onSearch">
        <Search />
      </ApIcon>
    </div>
    <span v-if="withAppend" :class="styles.append">
      <slot name="append"></slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
import stringwidth from 'string-width'
import {
  computed,
  toRef,
  ref,
  nextTick,
  useSlots,
  useAttrs,
  StyleValue,
} from 'vue'
import { useInjectProp } from '@apathia/shared'
import { ApIcon } from '@apathia/components/icon'
import { Close, Search } from '@apathia/icons-vue'
import { getInputStyles } from './input'
import type { InputEmits, InputProps } from './types'

defineOptions({
  name: 'ApInput',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  modelValue: '',
  inputClass: '',
  search: false,
  clearable: false,
  disabled: undefined,
})

const emit = defineEmits<InputEmits>()

const slots = useSlots()

const inputRef = ref<HTMLInputElement | null>(null)
const activeVal = ref<boolean>(false)

const withPrepend = computed(() => slots.prepend !== undefined)
const withAppend = computed(() => slots.append !== undefined)
const disableInput = useInjectProp(
  'FormDisabled',
  false,
  toRef(props, 'disabled'),
)
const showClearIcon = computed(
  () => props.clearable && props.modelValue && !disableInput.value,
)

// excludes style and class
const attrs = useAttrs()

const inputVal = computed({
  get: () => props.modelValue as string,
  set: (val: string) => {
    const strWidth = stringwidth(val)
    if (props.maxWords !== undefined && strWidth > 2 * props.maxWords) {
      if (inputRef.value) {
        inputRef.value.value = getStringByWords(val, props.maxWords * 2)
      }
      return
    }
    emit('update:modelValue', val)
  },
})
const handleInput = (e: Event) => {
  emit('input', e)
}

const getStringByWords = (str: string, width: number) => {
  let totalCnt = 0
  let res = ''
  for (const char of str) {
    totalCnt += stringwidth(char)
    if (totalCnt > width) {
      return res
    }
    res += char
  }
  return res
}

const onSearch = () => {
  if (inputRef.value) {
    inputRef.value.focus()
  }
  emit('search', props.modelValue)
}
const clear = () => {
  emit('update:modelValue', '')
  nextTick(() => {
    if (inputRef.value) {
      // 手动出发输入事件
      inputRef.value.dispatchEvent(new Event('input'))
    }
  })
}

const styles = getInputStyles()
</script>
