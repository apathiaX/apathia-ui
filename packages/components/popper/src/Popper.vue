<template>
  <div v-if="!target" v-bind="$attrs" ref="targetRef" :class="styles.popper">
    <slot></slot>
  </div>
  <transition
    v-if="render"
    v-bind="transitionClass"
    @after-leave="handleAfterHide"
  >
    <div
      v-if="hasMounted"
      v-show="visibility"
      ref="contentRef"
      :class="[...styles.content, popperClass]"
    >
      <CustomRender :render="render" />
      <div v-show="showArrow" ref="arrowRef" :class="styles.arrow"></div>
    </div>
  </transition>
  <teleport v-else to=".apathia-popper" :disabled="!appendToBody">
    <transition v-bind="transitionClass" @after-leave="handleAfterHide">
      <div
        v-if="hasMounted"
        v-show="visibility"
        ref="contentRef"
        :class="[...styles.content, popperClass]"
      >
        <slot name="content">
          {{ content }}
        </slot>
        <div v-if="showArrow" ref="arrowRef" :class="styles.arrow"></div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { CustomRender } from '@apathia/shared'
import { usePopper } from './usePopper'
import type { PopperEmits, PopperProps } from './types'
import { defaultArrowStyles, getPopperStyle } from './popper'
import { Instance as PopperInstance } from '@popperjs/core'
import { getComputedStyle } from '@apathia/theme'

defineOptions({
  name: 'ApPopper',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<PopperProps>(), {
  distance: 15,
  skidding: 0,
  trigger: 'click',
  dark: false,
  placement: 'top',
  content: undefined,
  transitionClass: defaultArrowStyles,
  showArrow: true,
  delay: 300,
  disabled: false,
  modelValue: undefined,
  popperClass: '',
  appendToBody: true,
  render: undefined,
  target: undefined,
  delayClose: undefined,
})

const emit = defineEmits<PopperEmits>()
const { contentRef, arrowRef, targetRef, visibility, hasMounted, update } =
  usePopper(props, {
    emitVisible: (val: boolean) => {
      emit('update:modelValue', val)
    },
    emitHide: (val: boolean, instance: PopperInstance | null) => {
      emit('hide', val, instance)
    },
    emitShow: (val: boolean, instance: PopperInstance | null) => {
      emit('show', val, instance)
    },
  })

defineExpose({
  update,
})

const handleAfterHide = () => {
  emit('afterHide')
}

const styles = getComputedStyle(
  { dark: props.dark, placement: props.placement },
  getPopperStyle,
)
</script>
