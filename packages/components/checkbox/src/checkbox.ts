import { tw, css, apply, style } from '@apathia/theme'

export const getCheckboxStyles = () => ({
  wrapper: style`inline-flex mr-2 p-0 list-none cursor-pointer items-center text-sm`,
  disabledWrapper: style`text-fill-accent cursor-not-allowed`,
  checkbox: style`relative inline-block p-0 whitespace-nowrap outline-none align-middle`,
  inner: tw(
    style`relative block w-4 h-4 top-0 left-0 bg-fill-white border border-fill-accent rounded outline-none`,
    css`
      transition: all 0.3s;
      &::after {
        content: '';
        display: table;
        position: absolute;
        width: 5px;
        height: 9px;
        top: 1px;
        left: 5px;
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(0);
        transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
      }
    `,
  ),

  checkedBlueBorder: style`bg-brand-primary border-brand-primary`,
  // check mark
  checkedAfter: tw(css`
    &::after {
      transform: rotate(45deg) scale(1);
      transition: all 0.15s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    }
  `),
  // intermediate state
  intermediateAfter: tw(css`
    &::after {
      transform: rotate(90deg) scale(1);
      border-bottom: 0;
    }
  `),
  disabledInner: tw(
    style`bg-fill-gray border-fill-accent cursor-not-allowed outline-none`,
    css`
      &::after {
        ${apply`border-fill-accent`}
      }
    `,
  ),
  ring: style`focus:ring-2 focus:ring-brand-primary`,
  input: style`hidden`,
  contentWrap: style`mx-1`,
})
