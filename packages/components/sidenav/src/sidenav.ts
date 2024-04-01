import {
  css,
  generateColor,
  generateInteractionColor,
  style,
} from '@apathia/theme'

export const getSideNavStyles = () => {
  const baseSidenav = `block duration-100 ${generateColor(
    'text',
    'text',
    'regular',
  )} py-4 relative`
  return {
    sidenavClass: style`${baseSidenav} min-h-full`,
    sidenavMiniClass: style`${baseSidenav} w-12 min-h-full`,
    sidenavInputWrap: style`px-4`,
    sidenavInput: style`${generateColor(
      'bg',
      'bg',
      'ground',
    )} px-2 my-2 bg-opacity-30 rounded h-9 ${generateColor(
      'text',
      'text',
      'secondary',
    )} ${generateColor(
      'placeholder',
      'text',
      'placeholder',
    )} ${generateInteractionColor(
      ['focus'],
      [
        generateColor('bg', 'bg', 'secondary'),
        generateColor('text', 'text', 'secondary'),
      ],
    )}`,
  }
}

export const getSideNodeStyles = () => {
  return {
    sidenodeIconClass: style`w-4 h-4`,
    sidenodeRowClass: style`flex items-center gap-6 cursor-pointer duration-300 px-3 py-6 h-8 overflow-hidden ${generateInteractionColor(
      ['hover'],
      [
        generateColor('bg', 'primary', 'hover'),
        generateColor('text', 'text', 'white'),
      ],
    )}`,
    // sidenodeRowActive: style`bg-fill-primary text-content-white rounded-l-md border-brand-primary`,
    sidenodeRowActive: style`${generateColor(
      'bg',
      'primary',
      'active',
    )} ${generateColor('text', 'text', 'white')} ${generateColor(
      'border',
      'primary',
      'default',
    )}`,
    sidenodeRowParentActive: style`${generateColor(
      'text',
      'primary',
      'default',
    )}`,
    sidenodeTurn: style`rotate-180 duration-300`,
    sidenodeExpand: style`text-xs duration-300`,
    sidenodeText: style`flex-grow text-sm font-medium text-left truncate`,
    sidenodeIcon: style`w-8 h-4 px-2`,
    sidenodeIconMini: style`px-0`,
    sidenodeChildren: style`text-xs ${generateColor(
      'bg',
      'primary',
      'fill',
    )} transition-all duration-500`,
  }
}
