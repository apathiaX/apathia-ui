import { noop, isFunction, useInjectProp } from '@apathia/shared'
import { computed, useAttrs } from 'vue'
import type { ButtonProps } from './types'
import { getButtonStyles } from './button'

export default function useButton(props: ButtonProps) {
  const attrs = useAttrs()
  const disabled = useInjectProp(
    'disabled',
    false,
    computed(() => props.disabled),
  )

  const href = computed(() => props.href)
  const tag = computed(() => props.tag)

  // 按钮类型
  const tagType = computed(() => {
    if (href && href.value) {
      return 'a'
    }
    return tag && tag.value ? tag.value : 'button'
  })
  // 没有自定义事件时默认值为空函数x
  const {
    onclick = noop,
    ondblclick = noop,
    onmousedown = noop,
    onmouseup = noop,
  } = attrs

  const getButtonProps = () => ({
    disabled: !!disabled.value,
    onclick: !disabled.value && isFunction(onclick) ? onclick : noop,
    ondblclick: !disabled.value && isFunction(ondblclick) ? ondblclick : noop,
    onmousedown:
      !disabled.value && isFunction(onmousedown) ? onmousedown : noop,
    onmouseup: !disabled.value && isFunction(onmouseup) ? onmouseup : noop,
  })

  const styles = getButtonStyles()

  const btnClass = computed(() => {
    const type =
      (props.plain && 'plain') ||
      (props.text && 'text') ||
      (props.href && 'href') ||
      'default'

    const themeString =
      (props.primary && 'primary') ||
      (props.success && 'success') ||
      (props.danger && 'danger') ||
      (props.info && 'info') ||
      (props.warning && 'warning') ||
      'default'

    const size =
      (props.small && 'small') || (props.large && 'large') || 'default'

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
        const textClass = props.bg
          ? [styles.interaction.text, styles.themeStyles.bg]
          : [styles.interaction.text]
        classList.push(...textClass)
      } else {
        classList.push(
          styles.interaction[type as 'plain' | 'default' | 'href'][themeString],
        )
      }
    }

    return [
      ...classList,
      styles.size[size],
      props.circle ? styles.circle[size] : '',
      props.round ? styles.themeStyles.round : '',
      props.icon && themeString === 'default' ? styles.themeStyles.icon : '',
    ]
  })

  return {
    btnClass,
    tagType,
    loadingClass: styles.themeStyles.loading,
    iconTextClass: styles.themeStyles.iconText,

    getButtonProps,
  }
}
