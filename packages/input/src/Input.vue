<template>
  <div :class="[styles.inputContainer, $attrs.class]" :style="attrs.style">
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
            [styles.withPrepend]: withPrepend,
            [styles.withSuffix]: search || showClearIcon,
            [styles.withSuffixAndClear]: search && showClearIcon,
            [styles.withAppend]: withAppend,
            [styles.disabled]: !!disableInput,
          },
          inputClass,
        ]"
        :disabled="!!disableInput"
        @input="handleInput"
      />
      <Icon
        v-if="showClearIcon"
        :class="[styles.clearableIcon, search ? styles.clearWithSuffix : '']"
        :name="['fa', 'times']"
        @click.stop="clear"
      />
      <Icon
        v-if="search"
        :class="styles.suffixBtn"
        :name="['fa', 'search']"
        @click="onSearch"
      />
    </div>
    <span v-if="withAppend" :class="styles.append">
      <slot name="append"></slot>
    </span>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import stringwidth from 'string-width'
import { computed, defineComponent, toRef, ref, nextTick } from 'vue'
// @ts-ignore
import { style, apply, tw } from '@apathia/apathia.twind'
// @ts-ignore
import { useAttrs, useInjectProp } from '@apathia/apathia.hooks'
// @ts-ignore
import { Icon } from '@apathia/apathia.icon'

const getStyles = () => {
  const prependAndAppend = apply`text(gray-500 sm) px-3 inline-flex items-center border border-gray-300 bg-gray-100`
  const commonIcon = apply`absolute self-center px-1 text-gray-300`
  const interactiveIcon = apply`${commonIcon}cursor-pointer hover:(text-gray-700)`

  return {
    inputContainer: style`relative flex w-full`,
    inputWrapper: style`relative flex flex-grow-1`,
    input: style`w-full block border border-gray-300 shadow-sm rounded-md text-sm py-2 px-3 outline-none focus:(bg-white border-brand-500)`,

    withPrefix: style`pl-9`,
    withPrepend: style`rounded-l-none`, // 取消左边框
    withAppend: style`rounded-r-none`, // 取消右边框
    withSuffix: style`pr-9`,
    withSuffixAndClear: style`pr-14`,
    disabled: style`bg-gray-100`,

    prepend: tw`${prependAndAppend}${apply`rounded-l-md border-r-0`}`,

    clearableIcon: tw`${interactiveIcon}${apply`right-2 px-0`}`,
    clearWithSuffix: tw`${interactiveIcon}${apply`right-7`}`,
    append: tw`${prependAndAppend}${apply`rounded-r-md border-l-0`}`,

    suffixBtn: tw`${interactiveIcon}${apply`right-2 px-0`}`,
  }
}

export default defineComponent({
  name: 'Input',

  components: {
    Icon,
  },

  inheritAttrs: false,

  props: {
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    inputClass: {
      type: [String, Object],
      default: '',
    },
    search: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: undefined,
    },
    maxwords: {
      type: Number,
    },
  },

  emits: ['update:modelValue', 'input', 'search'],

  setup(props, ctx) {
    const inputRef = ref<HTMLInputElement | null>(null)

    const withPrepend = computed(() => ctx.slots.prepend !== undefined)
    const withAppend = computed(() => ctx.slots.append !== undefined)
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
        if (props.maxwords !== undefined && strWidth > 2 * props.maxwords) {
          if (inputRef.value) {
            inputRef.value.value = getStringByWords(val, props.maxwords * 2)
          }
          return
        }
        ctx.emit('update:modelValue', val)
      },
    })
    const handleInput = (e: Event) => {
      ctx.emit('input', e)
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

    const onSearch = (e: MouseEvent) => {
      e.preventDefault()
      if (inputRef.value) {
        inputRef.value.focus()
      }
      ctx.emit('search', props.modelValue)
    }
    const clear = () => {
      ctx.emit('update:modelValue', '')
      nextTick(() => {
        if (inputRef.value) {
          // 手动出发输入事件
          inputRef.value.dispatchEvent(new Event('input'))
        }
      })
    }

    const styles = getStyles()

    return {
      inputRef,
      inputVal,
      handleInput,
      attrs,
      withPrepend,
      withAppend,
      disableInput,
      showClearIcon,

      onSearch,
      clear,

      styles,
    }
  },
})
</script>
