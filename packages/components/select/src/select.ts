import { generateColor, style } from '@apathia/theme'

export const getSelectStyles = ({
  disabled,
  active,
  focused,
  clearable,
  size,
}: {
  disabled?: boolean
  active?: boolean
  focused?: boolean
  clearable?: boolean
  size?: 'sm' | 'md' | 'lg'
}): {
  wrapper: string[]
  dropdown: string[]
  optionList: string[]
  clearable: string[]
  input: string[]
  arrow: string[]
  tips: string[]
  dropdownWrapper: string[]
} => {
  const baseStyle = {
    wrapper: style`flex relative border border-solid rounded`,
    disabled: style`cursor-not-allowed`,
    input: style`flex-1 rounded py-1.5 pl-2 outline-none cursor-pointer`,
    focused: style`select-none`,
    arrow: style`absolute inset-y-0 right-0 flex items-center p-2 duration-700 transition-all ease-linear`,
    clearIcon: style`hidden absolute w-3.5 h-3.5 rounded-full top-2.5 right-7 items-center cursor-pointer`,
    clearable: style`block`,
    dropdownWrapper: style`py-1`,
    dropDownContainer: style`z-dropdown block h-0 py-2 absolute border border-solid rounded opacity-0 transition duration-200 overflow-y-hidden`,
    dropdownContainerShow: style`h-auto opacity-100`,
    optionList: style`max-h-56 overflow-auto focus:outline-none`,
    tips: style`ml-3 py-2 ${generateColor(
      'text',
      'text',
      'secondary',
    )} text-center mr-2`,
    arrowActive: style`rotate-180`,
  }

  const sizeStyle = {
    sm: style`h-6 text-ss`,
    md: style`h-8 text-xs`,
    lg: style`h-10 text-sm`,
    input: {
      sm: style`text-ss`,
      md: style`text-xs`,
      lg: style`text-sm`,
    },
  }

  const color = {
    wrapper: style`${generateColor(
      'border',
      'border',
      'secondary',
    )} bg-transparent`,
    disabled: style`${generateColor('bg', 'bg', 'secondary')} ${generateColor(
      'border',
      'border',
      'disabled',
    )} ${generateColor('text', 'text', 'disabled')} ${generateColor(
      'text',
      'text',
      'disabled',
    )}`,
    active: style`${generateColor('border', 'primary', 'active')}`,
    dropdown: style`${generateColor('bg', 'bg', 'primary')} ${generateColor(
      'border',
      'border',
      'secondary',
    )}`,
    arrow: style`${generateColor('text', 'text', 'regular')}`,
  }

  const wrapperStyle = [baseStyle.wrapper, sizeStyle[size!]]
  const dropdownStyle = [
    baseStyle.dropDownContainer,
    color.dropdown,
    sizeStyle[size!],
  ]
  const clear = [baseStyle.clearIcon]
  const input = [baseStyle.input, sizeStyle.input[size!]]
  const arrow = [baseStyle.arrow, sizeStyle[size!], color.arrow]

  if (disabled) {
    wrapperStyle.push(...[baseStyle.disabled, color.disabled])
    input.push(baseStyle.disabled)
  } else {
    wrapperStyle.push(active ? color.active : color.wrapper)
  }

  if (active) {
    dropdownStyle.push(baseStyle.dropdownContainerShow)
    arrow.push(baseStyle.arrowActive)
  }

  if (clearable) {
    clear.push(baseStyle.clearable)
  }

  if (focused) {
    input.push(baseStyle.focused)
  }

  return {
    wrapper: wrapperStyle,
    dropdown: dropdownStyle,
    optionList: [baseStyle.optionList],
    clearable: clear,
    input,
    arrow,
    tips: [baseStyle.tips],
    dropdownWrapper: [baseStyle.dropdownWrapper],
  }
}

export const getOptionsStyles = () => {
  return {
    wrapper: style`block ${generateColor(
      'text',
      'text',
      'default',
    )} cursor-pointer select-none relative flex items-center py-2 pl-3 pr-9 truncate outline-none`,
    selected: style`font-bold ${generateColor('text', 'primary', 'active')}`,
    focused: style`${generateColor('text', 'primary', 'hover')} ${generateColor(
      'bg',
      'bg',
      'secondary',
    )}`,
    text: style`overflow-hidden overflow-ellipsis whitespace-nowrap`,
    checkMark: style`absolute right-4 ${generateColor(
      'text',
      'primary',
      'default',
    )}`,
    focusMark: style`${generateColor('text', 'text', 'white')}`,
    disabled: style`${generateColor(
      'text',
      'text',
      'disabled',
    )} cursor-not-allowed`,
  }
}
