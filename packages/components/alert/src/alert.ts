import { defineComponent } from 'vue'
import { AlertType } from './types'
import { Info, Success, Warning, Notice, Close } from '../icons'
import { generateColor, style } from '@apathia/theme'

export const iconMap: Record<AlertType, ReturnType<typeof defineComponent>> = {
  info: Info,
  warning: Warning,
  success: Success,
  danger: Close,
  primary: Notice,
}

const colorTemplate = (type: AlertType) =>
  `${generateColor('bg', type, 'fill')} ${generateColor(
    'text',
    type,
    'default',
  )}`

const colorDarkTemplate = (type: AlertType) =>
  `${generateColor('bg', type, 'default')} ${generateColor(
    'text',
    'text',
    'white',
  )}`

export const getAlertStyle = () => {
  const colorStyle = {
    light: {
      info: style`${colorTemplate('info')}`,
      danger: style`${colorTemplate('danger')}`,
      success: style`${colorTemplate('success')}`,
      warning: style`${colorTemplate('warning')}`,
      primary: style`${colorTemplate('primary')}`,
    },
    dark: {
      info: style`${colorDarkTemplate('info')}`,
      danger: style`${colorDarkTemplate('danger')}`,
      success: style`${colorDarkTemplate('success')}`,
      warning: style`${colorDarkTemplate('warning')}`,
      primary: style`${colorDarkTemplate('primary')}`,
    },
  }

  const layout = style`p-2 rounded flex items-center mt-2 duration-300`
  const iconWrap = style`flex-shrink-0 mr-2 mt-0.5`
  const delIcon = {
    light: style`ml-2 text-sm cursor-pointer ${generateColor(
      'text',
      'text',
      'secondary',
    )} opacity-30`,
    dark: style`ml-2 text-sm cursor-pointer ${generateColor(
      'text',
      'text',
      'white',
    )}`,
  }
  const contentClass = style`flex flex-col justify-center gap-1 font-normal flex-grow break-all px-1`
  const titleClass = style`text-lg`
  const messageClass = style`text-sm`

  return {
    layout,
    iconWrap,
    delIcon,
    contentClass,
    titleClass,
    messageClass,
    colorStyle,
  }
}
