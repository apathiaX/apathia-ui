import { generateColor, generateInteractionColor, style } from '@apathia/theme'

export const getTransferStyles = () => ({
  transfer: style`flex`,
  panel: style`min-w-transfer`,
  buttonWrapper: style`self-center text-center mx-4`,
  button: style`w-12 my-0.5 flex justify-center`,
})

export const getPanelStyles = () => ({
  panel: style`border border-solid ${generateColor(
    'border',
    'border',
    'secondary',
  )} rounded`,
  titleBar: style`flex justify-between items-center ${generateColor(
    'bg',
    'bg',
    'ground',
  )} py-4 px-2 text-xs`,
  title: style`font-medium`,
  counter: style`w-14 text-right`,
  filter: style`m-2`,
  list: style`h-80`, // 2.5 * 8
  item: style`text-base p-2 ${generateInteractionColor(
    ['hover'],
    [generateColor('bg', 'bg', 'ground')],
  )} transition-all duration-300 ease-in text-left`,
  checkbox: style`mr-2`,
  disabledCheckbox: style`cursor-not-allowed`,
})
