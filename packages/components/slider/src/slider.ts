import {
  css,
  generateColor,
  generateInteractionColor,
  style,
} from '@apathia/theme'

export const getSliderStyles = ({
  vertical,
  dragging,
}: {
  vertical: boolean
  dragging: boolean
}) => {
  const baseStyle = {
    sliderWrap: style`text-2xl`,
    slider: style`relative h-2 box-border inline-block`,
    sliderX: style`py-2 w-full`,
    sliderY: style`px-2`,
    track: style`absolute ${generateColor(
      'bg',
      'bg',
      'secondary',
    )} rounded transition ${generateInteractionColor(
      ['hover'],
      [generateColor('bg', 'bg', 'ground')],
    )}`,
    trackX: style`h-1 w-full`,
    trackY: style`w-1 h-full`,
    trackHover: style`${generateColor('bg', 'bg', 'ground')}`,
    steps: style`relative rounded ${generateColor(
      'bg',
      'primary',
      'default',
    )} ${generateInteractionColor(
      ['hover'],
      [generateColor('bg', 'primary', 'hover')],
    )}`,
    stepsX: style`h-1`,
    stepsY: style`w-1 absolute bottom-0`,
    stepsHover: style`${generateColor('bg', 'primary', 'active')}`,
    button: style`${generateInteractionColor(
      ['hover'],
      [generateColor('border', 'primary', 'hover')],
    )} ${generateColor(
      'border',
      'primary',
      'default',
    )} border(2 solid) h-4 w-4 ${generateColor(
      'bg',
      'bg',
      'primary',
    )} rounded-lg cursor-pointer ${css`
      z-index: 1;
    `}`,
    popperWrap: style`absolute`,
    buttonHover: style`${generateColor('bg', 'primary', 'hover')}`,
    buttonX: style`-translate-x-1/2 ${css`
      top: 2px;
    `}`,
    buttonY: style`translate-y-1/2 ${css`
      left: 2px;
    `}`,
  }

  const slider = [baseStyle.slider]
  const track = [baseStyle.track]
  const steps = [baseStyle.steps]
  const popper = [baseStyle.popperWrap]
  const button = [baseStyle.button]
  if (vertical) {
    slider.push(baseStyle.sliderY)
    track.push(baseStyle.trackY)
    steps.push(baseStyle.stepsY)
    popper.push(baseStyle.buttonY)
  } else {
    slider.push(baseStyle.sliderX)
    track.push(baseStyle.trackX)
    steps.push(baseStyle.stepsX)
    popper.push(baseStyle.buttonX)
  }

  if (dragging) {
    track.push(baseStyle.trackHover)
    steps.push(baseStyle.stepsHover)
    button.push(baseStyle.buttonHover)
  }
  return {
    sliderWrap: [baseStyle.sliderWrap],
    slider,
    track,
    steps,
    popper,
    button,
  }
}

export const getStopStyles = ({ vertical }: { vertical: boolean }) => {
  const baseStyle = {
    stopWrap: style`absolute`,
    stopWrapX: style`w-full h-1 top-2`,
    stopWrapY: style`h-full w-1`,
    stop: style`w-1 h-1 absolute inline-block ${generateColor(
      'bg',
      'bg',
      'primary',
    )} rounded-full`,
    stopX: style``,
    stopY: style``,
    stopText: style`inline-block whitespace-nowrap`,
    stopTextX: style`-translate-x-1/2 pt-3`,
    stopTextY: style`-translate-y-1/2 pl-3`,
  }
  const stopWrap = [baseStyle.stopWrap]
  const stop = [baseStyle.stop]
  const stopText = [baseStyle.stopText]
  if (vertical) {
    stopWrap.push(baseStyle.stopWrapY)
    stop.push(baseStyle.stopY)
    stopText.push(baseStyle.stopTextY)
  } else {
    stopWrap.push(baseStyle.stopWrapX)
    stop.push(baseStyle.stopX)
    stopText.push(baseStyle.stopTextX)
  }
  return {
    stopWrap,
    stop,
    stopText,
  }
}
