import {
  css,
  keyframes,
  style,
  generateColor,
  generateInteractionColor,
} from '@apathia/theme'

export function getModalStyle() {
  const slideIn = keyframes`
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `
  const slideInCss = css({
    animation: '0.5s ease',
    animationName: slideIn,
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

  const baseStyle = {
    shade: style`fixed inset-0 h-full overflow-auto ${flashCss}`,
    modal: style`mx-auto rounded mb-8 -translate-y-5 ${slideInCss}`,
    header: style`flex justify-between p-4 rounded-t text-xl`,
    content: style`px-4 pb-4 text-sm`,
    delIcon: style`font-medium self-start ml-3 cursor-pointer`,
    title: style`text-lg`,
    subTitle: style`text-sm mt-0.5`,
    transitionClass: {
      'leave-to-class': style`opacity-0`,
    },
    duration: style`duration-500`,
  }

  const color = {
    shade: style`${generateColor('bg', 'bg', 'ground')} ${generateColor(
      'text',
      'text',
      'default',
    )} bg-opacity-60 dark:bg-opacity-60`,
    modal: style`${generateColor('bg', 'bg', 'primary')}`,
    delIcon: style`${generateColor(
      'text',
      'text',
      'regular',
    )} ${generateInteractionColor(
      ['hover'],
      [generateColor('text', 'primary', 'hover')],
    )}`,
    content: style`${generateColor('text', 'text', 'regular')}`,
  }

  return {
    shade: [baseStyle.shade, color.shade],
    modal: [baseStyle.modal, color.modal],
    header: [baseStyle.header],
    delIcon: [baseStyle.delIcon, color.delIcon],
    content: [baseStyle.content, color.content],
    title: [baseStyle.title],
    subTitle: [baseStyle.subTitle],
    transitionClass: [baseStyle.transitionClass],
    duration: [baseStyle.duration],
  }
}
