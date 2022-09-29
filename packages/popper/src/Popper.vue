<template>
  <div
    v-if="!target"
    v-bind="{ ...getTargetProps(), ...$attrs }"
    :class="styles.popper"
  >
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
      v-bind="{ ...getContentProps() }"
      :class="`${styles.content} ${popperClass}`"
    >
      <CustomRender :render="render" />
      <div
        v-show="showArrow"
        v-bind="{ ...getArrowProps() }"
        :class="styles.arrowBase"
      ></div>
    </div>
  </transition>
  <teleport v-else to=".apathia-popper" :disabled="!appendToBody">
    <transition v-bind="transitionClass" @after-leave="handleAfterHide">
      <div
        v-if="hasMounted"
        v-show="visibility"
        v-bind="{ ...getContentProps() }"
        :class="`${styles.content} ${popperClass}`"
      >
        <slot name="content">
          {{ content }}
        </slot>
        <div
          v-if="showArrow"
          v-bind="{ ...getArrowProps() }"
          :class="styles.arrowBase"
        ></div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, watch } from 'vue'
import { tw } from '@apathia/apathia.twind'
import type { RenderCustom } from '@apathia/apathia.custom-render'
import { CustomRender } from '@apathia/apathia.custom-render'
import { usePopper } from './usePopper'
import { placement } from './types'
import type { TriggerType, Placement } from './types'
import { Instance as PopperInstance } from '@popperjs/core'

const defaultArrowStyles = () => ({
  'enter-active-class': tw`transition-opacity duration-200`,
  'leave-active-class': tw`transition-opacity duration-200`,
  'enter-from-class': tw`opacity-0`,
  'leave-to-class': tw`opacity-0`,
})

export default defineComponent({
  name: 'Popper',

  components: { CustomRender },

  inheritAttrs: false,

  props: {
    distance: {
      type: Number as PropType<number>,
      default: 15,
    },
    skidding: {
      type: Number as PropType<number>,
      default: 0,
    },
    trigger: {
      type: String as PropType<TriggerType>,
      validator: (value: string) =>
        ['click', 'hover', 'focus', 'manual'].indexOf(value) !== -1,
      default: 'click',
    },
    dark: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    placement: {
      type: String as PropType<Placement>,
      validator: (value: Placement) => placement.indexOf(value) !== -1,
      default: 'top',
    },
    content: {
      type: String as PropType<string | number>,
    },
    transitionClass: {
      type: Object,
      default: defaultArrowStyles,
    },
    showArrow: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    delay: {
      type: Number as PropType<number>,
      default: 300,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    popperClass: {
      type: String as PropType<string>,
      default: '',
    },
    appendToBody: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    render: {
      type: [String, Function] as PropType<RenderCustom>,
      default: undefined,
    },
    target: {
      type: Object as PropType<HTMLElement>,
      default: undefined,
    },
    delayClose: {
      type: Number as PropType<number>,
      default: undefined,
    },
  },

  emits: ['update:modelValue', 'hide', 'show', 'afterHide'],

  setup(props, context) {
    const { emit, expose } = context
    const {
      visibility,
      getArrowStyle,
      hasMounted,
      getContentProps,
      getArrowProps,
      getTargetProps,
      show,
      close,
      update,
    } = usePopper(props, {
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

    expose({
      update,
    })

    if (
      props.trigger === 'manual' ||
      props.trigger === 'hover' ||
      props.trigger === 'click'
    ) {
      watch(
        () => props.modelValue,
        val => {
          if (val !== undefined && !props.disabled) {
            if (val) {
              show()
            } else {
              close()
            }
          }
        },
      )
    }

    const handleAfterHide = () => {
      emit('afterHide')
    }

    const getArrowStyles = (dark: boolean) => {
      if (dark) {
        return getArrowStyle(
          'content-white',
          'content-primary',
          'content-primary',
        )
      }
      return getArrowStyle('content-accent', 'fill-white', 'fill-light')
    }
    const styles = computed(() => ({
      popper: tw`inline-block`,
      ...getArrowStyles(props.dark),
    }))

    return {
      getContentProps,
      getArrowProps,
      getTargetProps,
      visibility,
      styles,
      hasMounted,
      handleAfterHide,
    }
  },
})
</script>
