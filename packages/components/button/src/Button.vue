<template>
  <component
    v-bind="{ ...getButtonProps() }"
    :is="tagType"
    :class="btnClass"
    :href="href"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <i v-else>
        <svg
          :class="styles.themeStyles.loading"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </i>
    </template>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { toRefs, computed, type Ref, useAttrs } from 'vue'
import { useInjectProp } from '@apathia/shared'
import useBaseButton from './useButton'
import { getButtonStyles } from './button'
import type { ButtonProps } from './types'

defineOptions({
  name: 'ApButton',
})

const props = defineProps<ButtonProps>()
const attrs = useAttrs()

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

const { getButtonProps } = useBaseButton(userProps, attrs)

const styles = getButtonStyles()

const btnClass = computed(() => {
  const type = props.plain
    ? 'plain'
    : props.text
    ? 'text'
    : props.href
    ? 'href'
    : 'default'

  const themeString =
    (props.primary && 'primary') ||
    (props.success && 'success') ||
    (props.danger && 'danger') ||
    (props.info && 'info') ||
    (props.warning && 'warning') ||
    'default'

  const classList: string[] = [styles.themeStyles.base]

  if (props.disabled) {
    classList.push(
      ...[
        styles.themeStyles.disabled,
        styles.color['disabled'][type][themeString],
      ],
    )
  } else {
    classList.push(styles.color['default'][type][themeString])
    if (props.text) {
      classList.push(styles.interaction.text)
    } else {
      classList.push(
        styles.interaction[type as 'plain' | 'default' | 'href'][themeString],
      )
    }
  }

  if (props.circle) {
    const size = props.small ? 'small' : props.large ? 'large' : 'default'
    classList.push(`${styles.circle[size]}`)
  }

  return [
    ...classList,
    props.small ? styles.size.small : '',
    props.large ? styles.size.large : '',
    props.round ? styles.themeStyles.round : '',
    props.icon ? styles.themeStyles.icon : '',
  ]
})
</script>
