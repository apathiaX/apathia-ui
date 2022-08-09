<template>
  <component
    v-bind="{ ...getButtonProps() }"
    :is="tagType"
    :class="{
      [styles.base]: true,
      [styles.primary]: primary,
      [styles.secondary]: secondary,
      [styles.success]: success,
      [styles.danger]: danger,
      [styles.info]: info,
      [styles.warning]: warning,
      [styles.active]: active,
      [styles.plain]: plain,
      [styles.small]: small,
      [styles.large]: large,
      [styles.round]: round,
      [styles.disabled]: disableButton,
    }"
    :href="href"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { toRefs, defineComponent, computed, Ref } from 'vue'
// @ts-ignore
import { css, style, tw } from '@apathia/apathia.twind'
// @ts-ignore
import { useInjectProp } from '@apathia/apathia.hooks'
import useBaseButton from './useButton'

export default defineComponent({
  name: 'BaseButton',

  props: {
    tag: { type: [String, Object] },
    href: { type: String },
    primary: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    danger: { type: Boolean, default: false },
    info: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    disabled: { type: Boolean, default: undefined },
  },
  setup(props, ctx) {
    const { tag, href, disabled } = toRefs(props)
    // 被form等其他组件包裹的时候 通过provide设置disabled进行禁用
    const disableButton = useInjectProp(
      'FormDisabled',
      false,
      disabled,
    ) as Ref<boolean>

    // 按钮类型
    const tagType = computed(() => {
      if (href && href.value) {
        return 'a'
      }
      return tag && tag.value ? tag.value : 'button'
    })
    const userProps = { disabled: disableButton }

    const { getButtonProps } = useBaseButton(userProps, ctx)

    const styles = {
      base: style`inline-block border no-underline rounded-md px-4 py-2 transition duration-500 ease select-none focus:outline-none hover:shadow-lg text-sm mr-2 whitespace-nowrap`,
      primary: style`border-brand-500 bg-brand-500 text-white hover:bg-brand-700`,
      success: style`border-green-500 bg-green-500 text-white hover:bg-green-700`,
      danger: style`border-red-500 bg-red-500 text-white hover:bg-red-700`,
      warning: style`border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-700`,
      info: style`border-gray-500 bg-gray-500 text-white hover:bg-gray-700`,
      secondary: style`border-gray-500 bg-gray-500 text-gray-300 hover:bg-gray-700`,
      active: tw`${css`
        filter: brightness(1.1) contrast(150%);
      `}`,
      plain: style`border-0 hover:shadow-none`,
      small: style`text-xs font-medium`,
      large: style`text-xl`,
      round: style`rounded-full`,
      disabled: style`cursor-not-allowed opacity-50`,
    }

    return {
      getButtonProps,
      disableButton,
      tagType,
      styles,
    }
  },
})
</script>
