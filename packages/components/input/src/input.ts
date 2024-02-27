import { style, apply, tw } from '@apathia/theme'

export const getInputStyles = () => {
  const prependAndAppend = apply`text(content-accent sm) px-2 inline-flex items-center bg-fill-gray`
  const commonIcon = apply`absolute self-center text-fill-secondary`
  const interactiveIcon = apply`${commonIcon}cursor-pointer hover:(text-fill-accent)`

  return {
    inputContainer: style`relative flex w-full h-8 border rounded border-line-accent bg-content-white shadow`,
    inputWrapper: style`relative flex rounded flex-grow-1 bg-content-white`,
    input: style`w-full h-full rounded block text-sm outline-none py-1.5 pl-2`,

    withPrefix: style`pl-9`,
    disabled: style(
      'cursor-not-allowed pointer-events-none bg-info-forbid placeholder-content-secondary text-content-neutral',
    ),
    active: style`border-brand-primary`,

    prepend: tw`${prependAndAppend}${apply`rounded-l border-r-0`}`,

    clearableIcon: tw`${interactiveIcon}${apply`right-2`}`,
    clearWithSuffix: tw`${interactiveIcon}${apply`right-8`}`,
    append: tw`${prependAndAppend}${apply`rounded-r`}`,

    suffixBtn: tw`${interactiveIcon}${apply`right-2`}`,
  }
}
