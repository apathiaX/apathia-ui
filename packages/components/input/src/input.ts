import { style, generateColor } from '@apathia/theme'

export const getInputStyles = ({
  disabled,
  active,
  withPrepend,
  withAppend,
  size,
}: {
  disabled?: boolean
  active: boolean
  withPrepend: boolean
  withAppend: boolean
  size: 'sm' | 'md' | 'lg'
}): {
  container: string[]
  input: string[]
  wrapper: string[]
  prepend: string[]
  append: string[]
  icon: string[]
  textarea: string[]
} => {
  const prependAndAppend = style`${generateColor(
    'text',
    'text',
    'regular',
  )} inline-flex px-2 items-center ${generateColor('bg', 'bg', 'secondary')}`

  const baseStyle = {
    container: style`relative flex w-full`,
    wrapper: style`relative flex flex-grow-1 py-1.5 px-2.5`,
    input: style`w-full h-full block outline-none`,
    'input-empty': style`rounded`,
    'input-prepend': style`rounded-r`,
    'input-append': style`rounded-l`,
    'input-all': style`rounded-none`,
    prepend: style`rounded-l text-center shadow-input-light-prepend dark:shadow-input-dark-prepend`,
    append: style`rounded-r text-center shadow-input-light-append dark:shadow-input-dark-append`,
    disabled: style`cursor-not-allowed`,
    icon: style`flex items-center cursor-pointer gap-1`,
  }

  const sizeStyle = {
    sm: style`h-6 text-xs`,
    md: style`h-8 text-sm`,
    lg: style`h-10 text-sm`,
  }

  const color = {
    container: style`${generateColor('text', 'text', 'regular')}`,
    wrapper: style`shadow-input-light dark:shadow-input-dark hover:shadow-input-light-hover dark:hover:shadow-input-dark-hover ${generateColor(
      'bg',
      'bg',
      'primary',
    )}`,
    active: style`shadow-input-active-light dark:shadow-input-active-dark bg-transparent`,
    disabled: style`${generateColor(
      'text',
      'text',
      'disabled',
    )} ${generateColor(
      'bg',
      'bg',
      'secondary',
    )} shadow-input-light-disabled dark:shadow-input-dark-disabled`,
  }

  const containerStyle = [baseStyle.container, color.container, sizeStyle[size]]
  const wrapperStyle = [baseStyle.wrapper]
  const inputStyle = [baseStyle.input]
  const textareaStyle = [
    baseStyle.container,
    baseStyle.wrapper,
    color.container,
    baseStyle['input-empty'],
  ]
  if (disabled) {
    inputStyle.push(baseStyle.disabled)
    wrapperStyle.push(color.disabled)
    textareaStyle.push(color.disabled)
  } else if (active) {
    wrapperStyle.push(color.active)
    textareaStyle.push(color.active)
  } else {
    wrapperStyle.push(color.wrapper)
    textareaStyle.push(color.wrapper)
  }

  if (withPrepend && withAppend) {
    wrapperStyle.push(baseStyle['input-all'])
  } else if (withAppend && !withPrepend) {
    wrapperStyle.push(baseStyle['input-append'])
  } else if (withPrepend && !withAppend) {
    wrapperStyle.push(baseStyle['input-prepend'])
  } else {
    wrapperStyle.push(baseStyle['input-empty'])
  }

  return {
    container: containerStyle,
    wrapper: wrapperStyle,
    input: inputStyle,
    append: [prependAndAppend, baseStyle.append],
    prepend: [prependAndAppend, baseStyle.prepend],
    icon: [baseStyle.icon],
    textarea: textareaStyle,
  }
}
