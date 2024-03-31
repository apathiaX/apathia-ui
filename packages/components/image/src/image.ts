import { css, generateColor, keyframes, style, tw } from '@apathia/theme'

export const getTransitionClass = () => ({
  'leave-to-class': tw`opacity-0`,
})

export const getImageStyle = ({
  isError,
}: {
  isError: boolean
}): Record<string, string | any> => {
  // css
  const flash = keyframes`
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    `
  const flashCss = css({
    animation: '0.5s ease',
    animationName: flash,
  })

  const baseStyle = {
    wrapper: style`relative inline-block`,
    mask: style`
      absolute inset-0 cursor-pointer
      ${generateColor('bg', 'bg', 'top')} bg-opacity-60 opacity-0 transition-all
      ${generateColor(
        'text',
        'text',
        'white',
      )} flex justify-center items-center text-center text-sm
      hover:opacity-100
    `,
    img: style`w-full h-auto align-middle ${generateColor(
      'bg',
      'bg',
      'secondary',
    )}`,
    iconText: style`ml-1`,
    iconGap: style`ml-4`,
    maskIcon: style`inline-block fill-current text-xs`,
    duration: tw`duration-500`,
    shadeClass: style`z-50 fixed inset-0 h-full ${generateColor(
      'bg',
      'bg',
      'ground',
    )} bg-opacity-50 overflow-auto ${flashCss}`,
    options: style`
      m-0 p-0 absolute w-full
      flex items-center
      ${generateColor('text', 'text', 'regular')} bg-opacity-100
      pointer-events-auto z-10 justify-center
    `,
    optionContainer: style`flex flex-row-reverse items-center justify-center  ${generateColor(
      'bg',
      'bg',
      'ground',
    )} rounded`,
    optionIcons: style`p-3 ml-4 text-xl cursor-pointer`,
    optionIconsSize: style`text-lg`,
    previewImgWrap: style`fixed inset-0 flex justify-center items-center`,
    previewImg: style`max-w-full max-h-full cursor-grab select-none transition-all ${generateColor(
      'bg',
      'bg',
      'ground',
    )}`,
    error: style`flex justify-center items-center ${generateColor(
      'bg',
      'bg',
      'primary',
    )} ${generateColor('text', 'text', 'regular')} text-xs`,
    errorHidden: style`hidden`,
    hoverEnlarge: style`hover:text-lg transition-all`,
  }

  const wrapper = [baseStyle.wrapper]

  if (isError) {
    wrapper.push(baseStyle.errorHidden)
  }

  return {
    wrapper,
    img: [baseStyle.img],
    mask: [baseStyle.mask],
    iconText: [baseStyle.iconText],
    iconGap: [baseStyle.iconGap],
    maskIcon: [baseStyle.maskIcon],
    duration: [baseStyle.duration],
    shadeClass: [baseStyle.shadeClass],
    options: [baseStyle.options],
    optionContainer: [baseStyle.optionContainer],
    optionIcons: [baseStyle.optionIcons],
    optionIconsSize: [baseStyle.optionIconsSize],
    previewImgWrap: [baseStyle.previewImgWrap],
    previewImg: [baseStyle.previewImg],
    error: [baseStyle.error],
    hoverEnlarge: [baseStyle.hoverEnlarge],
  }
}
