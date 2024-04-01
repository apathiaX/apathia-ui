import {
  apply,
  css,
  generateColor,
  generateInteractionColor,
  style,
} from '@apathia/theme'
import { ThemeType } from './types'

export const getNavbarStyles = (type: ThemeType) => {
  const radius = css`
    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-radius: 0 4px 4px 0;
    }
  `
  const Theme = {
    default: {
      nav: apply`${generateColor(
        'bg',
        'bg',
        'secondary',
      )} ${generateInteractionColor(
        ['hover'],
        [generateColor('bg', 'bg', 'ground')],
      )} ${apply`${radius}`}`,
      activeNav: apply`${generateColor(
        'bg',
        'primary',
        'active',
      )} ${generateInteractionColor(
        ['hover'],
        [generateColor('bg', 'primary', 'hover')],
      )} ${generateColor('text', 'text', 'white')} ${apply`${radius}`}`,
    },
    underline: {
      nav: apply`border-transparent border-b-2 mx-1 ${generateInteractionColor(
        ['hover'],
        [generateColor('text', 'primary', 'hover')],
      )}`,
      activeNav: apply`${generateColor(
        'text',
        'primary',
        'active',
      )} ${generateColor('border', 'primary', 'active')} ${css`
        border-bottom: 2px solid;
      `} ${generateInteractionColor(
        ['hover'],
        [
          generateColor('text', 'primary', 'hover'),
          generateColor('border', 'primary', 'hover'),
        ],
      )}`,
    },
  }
  const theme = Theme[type] || Theme.default

  const primaryLayout = apply`block text-center text-sm cursor-pointer px-4 py-1.5 transition duration-300`

  const wrapper = style`overflow-hidden`
  const layoutContainer = style`flex items-center py-2 ${generateColor(
    'text',
    'text',
    'secondary',
  )}`
  const layoutNav = style`${theme.nav} ${primaryLayout}`
  const activeNav = style`${theme.activeNav}`
  const icon = style`mr-1`

  const childNavClass = {
    popper: style`p-0 rounded overflow-hidden`,
    nav: `${style`px-4 py-1.5  ${css`
      border-radius: 0 !important;
    `}`} ${layoutNav}`,
    activeNav: `${activeNav} ${style`${css`
      border-radius: 0 !important;
    `}`}`,
  }

  return {
    wrapper,
    layoutContainer,
    layoutNav,
    activeNav,
    icon,
    childNavClass,
  }
}
