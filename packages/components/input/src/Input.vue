<template>
  <div v-if="type === 'textarea'">
    <textarea
      ref="inputRef"
      :class="styles.textarea"
      v-model="inputVal"
      v-bind="attrs"
      :disabled="!!disableInput"
      :rows="rows"
      @input="handleInput"
      @blur="() => (activeVal = false)"
      @focus="() => (activeVal = true)"
    />
  </div>
  <div
    v-else
    :class="[...styles.container, attrs.class]"
    :style="(attrs.style as StyleValue)"
  >
    <div v-if="withPrepend" :class="styles.prepend">
      <slot name="prepend"></slot>
    </div>
    <div :class="styles.wrapper">
      <span v-if="prefixIcon || slots.prefix" :class="styles.icon">
        <slot name="prefix">
          <component :is="prefixIcon" />
        </slot>
      </span>
      <input
        ref="inputRef"
        v-model="inputVal"
        v-bind="attrs"
        :type="type"
        :class="[...styles.input, inputClass]"
        :disabled="!!disableInput"
        :placeholder="placeholder"
        @input="handleInput"
        @blur="() => (activeVal = false)"
        @focus="() => (activeVal = true)"
      />
      <span :class="styles.icon">
        <ApIcon
          v-if="showClearIcon"
          :class="[styles.clearableIcon, search ? styles.clearWithSuffix : '']"
          @click.stop="clear"
        >
          <CloseIcon />
        </ApIcon>
        <ApIcon v-if="search" :class="styles.suffixBtn" @click="onSearch">
          <SearchIcon />
        </ApIcon>
        <slot name="suffix">
          <component v-if="suffixIcon" :is="suffixIcon" />
        </slot>
      </span>
    </div>
    <div v-if="withAppend" :class="styles.append">
      <slot name="append"></slot>
    </div>
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
import { getComputedStyle } from '@apathia/theme'
import CloseIcon from '../icons/CloseIcon.vue'
import SearchIcon from '../icons/SearchIcon.vue'
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
  placeholder: '',
  size: 'md',
  rows: 3,
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

const attrs = useAttrs()

const inputVal = computed({
  get: () => props.modelValue as string,
  set: (val: string) => {
    const strWidth = stringwidth(val)
    const value = props.formatter && props.parser ? props.parser(val) : val
    if (props.maxWords !== undefined && strWidth > 2 * props.maxWords) {
      if (inputRef.value) {
        const processedValue = getStringByWords(value, props.maxWords * 2)
        inputRef.value.value = props.formatter
          ? props.formatter(processedValue)
          : processedValue
      }
      return
    }
    emit('update:modelValue', props.formatter ? props.formatter(value) : value)
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

const styles = getComputedStyle(
  {
    withAppend,
    withPrepend,
    disabled: disableInput,
    active: activeVal,
    size: props.size,
  },
  getInputStyles,
)
</script>
