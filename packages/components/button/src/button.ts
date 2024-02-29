import { style, generateColor, generateInteractionColor } from '@apathia/theme'
import { ButtonThemeType } from './types'

const interactionTemplate = (type: ButtonThemeType) =>
  `${generateInteractionColor(
    ['hover', 'active'],
    [
      generateColor('bg', type, 'hover'),
      generateColor('border', type, 'hover'),
    ],
  )}`

const interactionPlainTemplate = (type: ButtonThemeType) =>
  `${generateInteractionColor(
    ['hover', 'active'],
    [
      generateColor('text', 'text', 'white'),
      generateColor('bg', type, 'default'),
    ],
  )}`

const disabledTemplate = (type: ButtonThemeType) =>
  `${generateColor('bg', type, 'disabled')} ${generateColor(
    'text',
    'text',
    'white',
  )}`

const plainTemplate = (type: ButtonThemeType) =>
  `border border-solid ${generateColor('bg', type, 'fill')} ${generateColor(
    'text',
    type,
    'default',
  )} ${generateColor('border', type, 'default')} ${generateInteractionColor(
    ['hover'],
    [generateColor('text', 'text', 'white')],
  )}`

const disabledPlainTemplate = (type: ButtonThemeType) =>
  `border border-solid ${generateColor('bg', type, 'fill')} ${generateColor(
    'text',
    type,
    'disabled',
  )} ${generateColor('border', type, 'disabled')}`

const hrefTemplate = (type: ButtonThemeType) =>
  `${generateInteractionColor(
    ['hover', 'active'],
    [generateColor('text', type, 'disabled')],
  )}`

const colorTemplate = (type: ButtonThemeType) =>
  `${generateColor('bg', type, 'default')} ${generateColor(
    'border',
    type,
    'default',
  )} border border-solid`

export const getButtonStyles = () => {
  const themeStyles = {
    base: style`inline-flex items-center h-8 no-underline rounded-md py-2 px-4 transition focus:outline-none duration-500 ease select-none text-base text-text-light-white mr-2 whitespace-nowrap text-base text-center`,
    disabled: style`cursor-not-allowed`,
    round: style`rounded-full`,
    circle: style`rounded-full p-2`,
    icon: style`${generateColor('text', 'text', 'default')}`,
    loading: style`animate-spin`,
    iconText: style`ml-2`,
    bg: style`${generateColor('bg', 'bg', 'ground')} ${generateInteractionColor(
      ['hover', 'active'],
      [generateColor('bg', 'bg', 'secondary')],
    )}`,
  }

  const interactionStyles = {
    default: {
      default: style`${generateInteractionColor(
        ['hover', 'active'],
        [
          generateColor('bg', 'primary', 'fill'),
          generateColor('border', 'primary', 'hover'),
          generateColor('text', 'primary', 'default'),
        ],
      )}`,
      primary: style`${interactionTemplate('primary')}`,
      success: style`${interactionTemplate('success')}`,
      danger: style`${interactionTemplate('danger')}`,
      warning: style`${interactionTemplate('warning')}`,
      info: style`${interactionTemplate('info')}`,
    },
    text: style`${generateInteractionColor(
      ['hover', 'active'],
      [generateColor('bg', 'bg', 'ground')],
    )}`,
    plain: {
      default: style`${generateInteractionColor(
        ['hover', 'active'],
        [
          generateColor('text', 'primary', 'default'),
          generateColor('border', 'primary', 'default'),
        ],
      )}`,
      primary: style`${interactionPlainTemplate('primary')}`,
      success: style`${interactionPlainTemplate('success')}`,
      danger: style`${interactionPlainTemplate('danger')}`,
      warning: style`${interactionPlainTemplate('warning')}`,
      info: style`${interactionPlainTemplate('info')}`,
    },
    href: {
      default: style`${generateInteractionColor(
        ['hover', 'active'],
        [generateColor('text', 'text', 'disabled')],
      )}`,
      primary: style`${hrefTemplate('primary')}`,
      success: style`${hrefTemplate('success')}`,
      danger: style`${hrefTemplate('danger')}`,
      warning: style`${hrefTemplate('warning')}`,
      info: style`${hrefTemplate('info')}`,
    },
  }

  const sizeStyles = {
    default: style`text-base h-8`,
    small: style`text-xs h-6 py-1 px-2`,
    large: style`text-base h-10 py-3 px-6`,
  }

  const colorStyle = {
    default: {
      default: {
        default: style`${generateColor('bg', 'bg', 'primary')} ${generateColor(
          'text',
          'text',
          'default',
        )} ${generateColor('border', 'border', 'default')} border border-solid`,
        primary: style`${colorTemplate('primary')}`,
        success: style`${colorTemplate('success')}`,
        danger: style`${colorTemplate('danger')}`,
        warning: style`${colorTemplate('warning')}`,
        info: style`${colorTemplate('info')}`,
      },
      plain: {
        default: style`${generateColor('bg', 'bg', 'primary')} ${generateColor(
          'text',
          'text',
          'default',
        )} ${generateColor('border', 'border', 'default')} border border-solid`,
        primary: style`${plainTemplate('primary')}`,
        success: style`${plainTemplate('success')}`,
        danger: style`${plainTemplate('danger')}`,
        warning: style`${plainTemplate('warning')}`,
        info: style`${plainTemplate('info')}`,
      },
      text: {
        default: style`${generateColor('text', 'text', 'secondary')}`,
        primary: style`${generateColor('text', 'primary', 'default')}`,
        success: style`${generateColor('text', 'success', 'default')}`,
        danger: style`${generateColor('text', 'danger', 'default')}`,
        warning: style`${generateColor('text', 'warning', 'default')}`,
        info: style`${generateColor('text', 'info', 'default')}`,
      },
      href: {
        default: style`${generateColor('text', 'text', 'secondary')}`,
        primary: style`${generateColor('text', 'primary', 'default')}`,
        success: style`${generateColor('text', 'success', 'default')}`,
        danger: style`${generateColor('text', 'danger', 'default')}`,
        warning: style`${generateColor('text', 'warning', 'default')}`,
        info: style`${generateColor('text', 'info', 'default')}`,
      },
    },
    disabled: {
      default: {
        default: style`${generateColor(
          'text',
          'text',
          'disabled',
        )} ${generateColor('border', 'border', 'default')} border border-solid`,
        primary: style`${disabledTemplate('primary')}`,
        success: style`${disabledTemplate('success')}`,
        danger: style`${disabledTemplate('danger')}`,
        warning: style`${disabledTemplate('warning')}`,
        info: style`${disabledTemplate('info')}`,
      },
      plain: {
        default: style`${generateColor(
          'text',
          'text',
          'disabled',
        )} ${generateColor('border', 'border', 'default')} border border-solid`,
        primary: style`${disabledPlainTemplate('primary')}`,
        success: style`${disabledPlainTemplate('success')}`,
        danger: style`${disabledPlainTemplate('danger')}`,
        warning: style`${disabledPlainTemplate('warning')}`,
        info: style`${disabledPlainTemplate('info')}`,
      },
      text: {
        default: style`${generateColor('text', 'text', 'disabled')}`,
        primary: style`${generateColor('text', 'primary', 'disabled')}`,
        success: style`${generateColor('text', 'success', 'disabled')}`,
        danger: style`${generateColor('text', 'danger', 'disabled')}`,
        warning: style`${generateColor('text', 'warning', 'disabled')}`,
        info: style`${generateColor('text', 'info', 'disabled')}`,
      },
      href: {
        default: style`${generateColor('text', 'text', 'disabled')}`,
        primary: style`${generateColor('text', 'primary', 'disabled')}`,
        success: style`${generateColor('text', 'success', 'disabled')}`,
        danger: style`${generateColor('text', 'danger', 'disabled')}`,
        warning: style`${generateColor('text', 'warning', 'disabled')}`,
        info: style`${generateColor('text', 'info', 'disabled')}`,
      },
    },
  }

  const circleStyles = {
    default: style`rounded-full p-2`,
    small: style`rounded-full p-1`,
    large: style`rounded-full p-3`,
  }

  return {
    themeStyles: themeStyles,
    size: sizeStyles,
    interaction: interactionStyles,
    color: colorStyle,
    circle: circleStyles,
  }
}
