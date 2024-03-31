import {
  css,
  generateColor,
  generateInteractionColor,
  style,
} from '@apathia/theme'

export const getUploadStyles = () => ({
  trigger: style`flex items-start border-0`,
  drag: style`group flex justify-center ${generateColor(
    'text',
    'text',
    'regular',
  )} py-4 flex-col items-center ${generateColor(
    'bg',
    'bg',
    'secondary',
  )} ${generateColor('border', 'bg', 'ground')}
      border(2 dashed) rounded cursor-pointer ${generateInteractionColor(
        ['hover'],
        [
          generateColor('border', 'primary', 'hover'),
          generateColor('text', 'text', 'secondary'),
        ],
      )}
      ${css({ 'min-height': '4rem', 'min-width': '5rem' })}`,
  dragging: style`${generateColor(
    'border',
    'primary',
    'hover',
  )} rounded-md ${generateColor('text', 'primary', 'default')}`,
  disabled: style`cursor-not-allowed ${generateInteractionColor(
    ['hover'],
    [
      generateColor('text', 'text', 'disabled'),
      generateColor('border', 'primary', 'active'),
    ],
  )} hover:border(& dashed)`,
  clickText: style`${generateColor(
    'text',
    'primary',
    'default',
  )} ${generateInteractionColor(
    ['group-hover'],
    [generateColor('text', 'primary', 'active')],
  )}`,
  fileIcon: style`block ${generateColor(
    'text',
    'text',
    'secondary',
  )} ${generateInteractionColor(
    ['group-hover'],
    [generateColor('text', 'text', 'regular')],
  )} ${css`
    width: 1.5rem !important;
  `}`,
})
