import { apply, css, generateColor, style, tw } from '@apathia/theme'

export const getRadioStyle = () => {
  return {
    wrapper: style`inline-flex mr-2 p-0 list-none cursor-pointer items-center text-sm`,
    wrapperDisabled: style`${generateColor(
      'text',
      'text',
      'disabled',
    )} cursor-not-allowed`,
    radio: style`relative inline-block m-0 p-0 whitespace-nowrap align-middle`,
    inner: tw(
      style`relative block w-4 h-4 top-0 left-0 bg-transparent border border-solid ${generateColor(
        'border',
        'border',
        'default',
      )} outline-none`,
      css`
        border-radius: 100px;
        transition: all 0.3s;
        &::after {
          content: '';
          position: absolute;
          display: table;
          left: 3px;
          top: 3px;
          ${apply`w-2 h-2 ${generateColor('bg', 'primary', 'default')} rounded`}
          opacity: 0;
          transform: scale(0);
          transition: all 0.15s cubic-bezier(0.78, 0.14, 0.15, 0.86);
        }
      `,
    ),
    innerSelected: tw(
      style`${generateColor('border', 'primary', 'default')}`,
      css`
        &::after {
          opacity: 1;
          transform: scale(0.875);
          transition: all 0.15s cubic-bezier(0.78, 0.14, 0.15, 0.86);
        }
      `,
    ),
    innerDisabled: style`${generateColor(
      'bg',
      'info',
      'disabled',
    )} ${generateColor(
      'border',
      'border',
      'disabled',
    )} cursor-not-allowed outline-none`,
    innerSelectedDisabled: tw(
      css`
        &::after {
          opacity: 1;
          transform: scale(0.875);
          transition: all 0.15s cubic-bezier(0.78, 0.14, 0.15, 0.86);
        }
      `,
      css`
        &::after {
          ${apply`w-2 h-2 ${generateColor(
            'bg',
            'primary',
            'disabled',
          )} rounded`}
        }
      `,
    ),
    ring: style`focus:(ring-2 ${generateColor('ring', 'primary', 'default')})`,
    input: style`hidden`,
    contentWrap: style`mx-1`,
  }
}
