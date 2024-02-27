import { style, css } from '@apathia/theme'

export const getCascaderStyles = () => ({
  dropdown: style`absolute z-dropdown`,
  panelContainer: style`flex mt-1 border border-line-accent rounded bg-content-white shadow`,
  scrollWrap: style`border-r border-line-accent overflow-hidden w-48 last-child:border-r-0 `,
  panel: style`overflow-scroll ${css`
    width: calc(100% + 28px);
    height: calc(100% + 38px);
  `}`,
  node: style`relative h-12 px-2 flex items-center cursor-pointer mt-2 whitespace-nowrap overflow-hidden overflow-ellipsis hover:(bg-fill-light rounded) text-sm`,
  nodeDisabled: style`text-content-neutral cursor-not-allowed`,
  nodeActive: style`text-brand-active text-base`,
  checkbox: style`h-auto pl-1`,
  icon: style`absolute right-4 text-sm`,
})
