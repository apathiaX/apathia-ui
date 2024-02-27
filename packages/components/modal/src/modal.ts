import { tw, css, keyframes, style } from '@apathia/theme'

export function getModalStyle() {
  const slidein = keyframes`
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `
  const slideinCss = css({
    animation: '0.5s ease',
    animationName: slidein,
    animationFillMode: 'forwards',
  })

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

  const shadeClass = style`fixed inset-0 h-full bg-fill-gray bg-opacity-50 overflow-auto ${flashCss}`
  const modalClass = style`mx-auto rounded bg-fill-white mb-8 -translate-y-5 ${slideinCss}`
  const modalHeaderClass = style`flex justify-between p-4 rounded-t text-content-primary border(b solid fill-neutral)`
  const modalContentClass = style`p-4`
  const delIconClass = style`font-medium self-start ml-3 cursor-pointer hover:(text-error-primary)`
  const titleClass = tw`text-lg`
  const subTitleClass = tw`text-content-accent text-sm mt-0.5`
  const transitionClass = {
    'leave-to-class': tw`opacity-0`,
  }
  const durationClass = tw`duration-500`

  return {
    shadeClass,
    modalClass,
    modalHeaderClass,
    delIconClass,
    modalContentClass,
    titleClass,
    subTitleClass,
    transitionClass,
    durationClass,
  }
}
