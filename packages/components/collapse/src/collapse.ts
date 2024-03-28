import { generateColor, style } from '@apathia/theme'

export const getCollapseStyle = ({ disabled }: { disabled: boolean }) => {
  const baseStyle = {
    header: style`flex items-center h-10 leading-10 text-sm border border-solid rounded cursor-pointer`,
    disabled: style`cursor-not-allowed border-none`,
    arrow: style`px-2 ease-in-out duration-300 transition-transform`,
    icon: style`mx-2 transition duration-100`,
  }

  const color = {
    default: style`${generateColor('bg', 'bg', 'transparent')} ${generateColor(
      'border',
      'border',
      'secondary',
    )}`,
    disabled: style`${generateColor('bg', 'bg', 'secondary')} ${generateColor(
      'text',
      'text',
      'disabled',
    )}`,
  }

  const header = [baseStyle.header]
  if (disabled) {
    header.push(...[baseStyle.disabled, color.disabled])
  } else {
    header.push(color.default)
  }

  return {
    header,
    icon: [baseStyle.icon],
    arrow: [baseStyle.arrow],
  }
}
