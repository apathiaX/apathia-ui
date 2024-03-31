import { apply, css, generateColor, style, tw } from '@apathia/theme'

export const getFormItemStyle = () => {
  const label = apply`text-sm`
  const mark = css`
    &:before {
      content: '*';
      ${apply`${generateColor('text', 'danger', 'default')} align-top`}
    }
  `
  return {
    container: style`mb-2 ml-2`,
    flex: style`flex`,
    inlineFlex: style`inline-flex mr-2 last:mr-0`,
    labelBlock: style`w-full ${label}`,
    labelInline: style`mr-2 flex-shrink-0 ${label}`,
    labelAlignTop: style`self-start`,
    labelAlignCenter: style`self-center`,
    labelAlignBottom: style`self-end`,
    labelRequired: tw`${mark}`,
    content: style`flex-auto`,
  }
}

export const getFromStyle = () => ({
  form: style`mb-2`,
})
