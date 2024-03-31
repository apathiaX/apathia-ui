import {
  css,
  generateColor,
  generateInteractionColor,
  style,
} from '@apathia/theme'

export const getTransitionClass = () => ({
  'enter-from-class': style`transform opacity-0 scale-95`,
  'enter-active-class': style`transition ease-out duration-100`,
  'enter-to-class': style`transform opacity-100 scale-100`,
  'leave-from-class': style`transform opacity-100 scale-100`,
  'leave-active-class': style`transition ease-in duration-75`,
  'leave-to-class': style`transform opacity-0 scale-95`,
})

export const getDropdownStyle = ({
  divide,
}: {
  divide: boolean
}): {
  popper: string[]
  divide: string[]
  iconClass: string[]
  baseButton: string[]
  container: string[]
} => {
  const baseStyle = {
    popper: style`max-w-7xl rounded shadow-lg ${generateColor(
      'bg',
      'bg',
      'primary',
    )}`,
    divide: style`border-b border-solid ${generateColor(
      'border',
      'bg',
      'ground',
    )} py-0`,
    iconClass: style`text-sm`,
    baseButton: style`flex items-center text-sm gap-1 m-0 cursor-pointer`,
    container: style`py-2`,
  }

  const popper = [baseStyle.popper]

  if (divide) {
    popper.push(baseStyle.divide)
  }

  return {
    popper,
    divide: [baseStyle.divide], // 用于判断是否需要添加分割线
    iconClass: [baseStyle.iconClass],
    baseButton: [baseStyle.baseButton],
    container: [baseStyle.container],
  }
}

export const getDropdownGroupStyle = () => {
  const container = style`py-1 ${css`
    border-bottom: 1px solid;
  `} ${generateColor('border', 'bg', 'ground')}`
  return {
    container: [container],
  }
}

export const getDropdownItemStyle = ({
  disabled,
  active,
}: {
  disabled: boolean
  active: boolean
}) => {
  const baseStyle = {
    menuItem: style`block -mx-3 px-2 py-2 text-sm ${generateColor(
      'bg',
      'bg',
      'primary',
    )} ${generateColor('text', 'text', 'secondary')} cursor-pointer`,
    active: style`${generateColor('text', 'primary', 'active')}`,
    disabled: style`${generateColor(
      'text',
      'text',
      'disabled',
    )} ${generateInteractionColor(
      ['hover'],
      [generateColor('bg', 'bg', 'primary')],
    )} cursor-not-allowed`,
  }
  const itemStyle = [baseStyle.menuItem]
  if (disabled) {
    itemStyle.push(baseStyle.disabled)
  } else {
    itemStyle.push(
      style` ${generateInteractionColor(
        ['hover'],
        [
          generateColor('bg', 'primary', 'fill'),
          generateColor('text', 'primary', 'hover'),
        ],
      )}`,
    )
  }
  if (!disabled && active) {
    itemStyle.push(baseStyle.active)
  }
  return { item: itemStyle }
}
