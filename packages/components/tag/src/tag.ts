import { generateColor, generateInteractionColor, style } from '@apathia/theme'

export const getTagStyle = () => {
  const size = style`text-xs`
  const theme = {
    default: style`${generateColor('bg', 'bg', 'secondary')} ${generateColor(
      'text',
      'text',
      'regular',
    )}`,
    primary: style`${generateColor('bg', 'primary', 'fill')} ${generateColor(
      'text',
      'primary',
      'default',
    )}`,
    success: style`${generateColor('bg', 'success', 'fill')}  ${generateColor(
      'text',
      'success',
      'default',
    )}`,
    danger: style`${generateColor('bg', 'danger', 'fill')}  ${generateColor(
      'text',
      'danger',
      'default',
    )}`,
    warning: style`${generateColor('bg', 'warning', 'fill')}  ${generateColor(
      'text',
      'warning',
      'default',
    )}`,
  }

  const hollow = style`border border-solid bg-opacity-40`
  const icon = style`inline-block`
  const layout = style`inline-flex items-center mr-1 px-1.5 py-1 rounded cursor-default`
  const delIcon = style`inline-block cursor-pointer ml-1.5 ${generateInteractionColor(
    ['hover'],
    [generateColor('text', 'primary', 'hover')],
  )}`

  return {
    theme,
    layout,
    delIcon,
    icon,
    size,
    hollow,
  }
}

export const getTagsStyle = () => {
  const tagClass = style`duration-300 my-1`
  const inputWrap = style`inline-block w-20 m-1`
  const addBtn = style`w-20 text-xs inline-flex justify-center`
  const list = style`inline-block`

  return {
    list,
    addBtn,
    tagClass,
    inputWrap,
  }
}
