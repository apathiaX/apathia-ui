import {
  apply,
  css,
  generateColor,
  generateInteractionColor,
  style,
  tw,
} from '@apathia/theme'

export const getScrollBarStyle = () => {
  return {
    track: style`transition-opacity`,
    slide: style`${generateColor(
      'bg',
      'bg',
      'ground',
    )} ${generateInteractionColor(
      ['hover'],
      [generateColor('bg', 'bg', 'top')],
    )} hover:opacity-30 cursor-pointer`,
  }
}

export const getScrollContainerStyle = () => {
  const scrollbar = apply`absolute bottom-0 right-0`
  return {
    scrollContainer: style`relative h-full overflow-hidden${css`
      &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
      }
    `}`,
    scrollbarY: tw`${scrollbar}${apply`top-0`}`,
    scrollbarX: tw`${scrollbar}${apply`left-0`}`,
  }
}
