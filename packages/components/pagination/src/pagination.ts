import { generateColor, generateInteractionColor, style } from '@apathia/theme'

export const getPaginationStyles = () => {
  const baseStyle = {
    wrapper: style`relative ${generateColor(
      'bg',
      'bg',
      'primary',
    )} py-3 flex items-center justify-between`,
    container: style`relative z-0 inline-flex items-center text-base`,

    item: style`relative inline-flex flex-shrink-0 mx-1 px-btn-lg-y py-px border border-solid ${generateColor(
      'border',
      'border',
      'secondary',
    )} rounded ${generateColor('bg', 'bg', 'primary')} ${generateColor(
      'text',
      'text',
      'regular',
    )} ${generateInteractionColor(
      ['hover'],
      [
        generateColor('bg', 'primary', 'hover'),
        generateColor('text', 'text', 'white'),
        generateColor('border', 'primary', 'hover'),
      ],
    )} cursor-pointer select-none`,

    active: style`${generateColor('text', 'text', 'white')} ${generateColor(
      'bg',
      'primary',
      'hover',
    )}  ${generateColor('border', 'primary', 'hover')}`,
    itemDisabled: style`cursor-not-allowed pointer-events-none ${generateColor(
      'text',
      'text',
      'disabled',
    )} ${generateColor('border', 'border', 'disabled')} ${generateColor(
      'bg',
      'bg',
      'ground',
    )}`,
    numberBtn: style`outline-none`,
    jump: style`relative z-0 overflow-hidden inline-flex items-center -space-x-px text-base border border-solid ${generateColor(
      'border',
      'border',
      'secondary',
    )} rounded`,
    jumpInput: style`outline-none text-center w-8 px-btn-lg-y py-px border-0 rounded`,
    jumpBtn: style`text-center w-14  px-btn-lg-y py-px border-0 ${generateColor(
      'bg',
      'bg',
      'primary',
    )} cursor-pointer ${generateInteractionColor(
      ['hover'],
      [
        generateColor('bg', 'primary', 'hover'),
        generateColor('text', 'text', 'white'),
      ],
    )}`,
    count: style`px-4`,
    pages: style`pr-1`,
  }

  return {
    wrapper: [baseStyle.wrapper],
    container: [baseStyle.container],
    count: [baseStyle.count],
    active: baseStyle.active,
    disabled: baseStyle.itemDisabled,
    item: baseStyle.item,
    numberBtn: baseStyle.numberBtn,
    jumpContainer: [baseStyle.jump],
    jumpInput: [baseStyle.jumpInput],
    jumpBtn: [baseStyle.jumpBtn],
    pages: [baseStyle.pages],
  }
}
