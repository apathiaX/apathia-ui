import {
  css,
  generateColor,
  generateInteractionColor,
  style,
} from '@apathia/theme'

export const getTabStyles = ({ underline }: { underline: boolean }) => {
  const baseStyle = {
    outContainer: style`p-1 overflow-hidden text-lg`,
    container: style`flex`,
    baseTab: style`font-medium m-1 py-2 px-4 cursor-pointer duration-300`,
    tab: style`rounded`,
    underlineTab: style`${css`
      border-bottom: 2px solid;
    `}`,
  }

  const colorStyle = {
    tab: style`${generateColor(
      'text',
      'text',
      'secondary',
    )} ${generateInteractionColor(
      ['hover'],
      [generateColor('text', 'primary', 'hover')],
    )}`,
    tabActive: style`${generateColor(
      'bg',
      'primary',
      'active',
    )} ${generateColor('text', 'text', 'white')}`,
    underlineTab: style`${css`
      border-bottom: 2px solid transparent !important;
    `} ${generateInteractionColor(
      ['hover'],
      [generateColor('text', 'primary', 'hover')],
    )}`,
    underlineTabActive: style`${generateColor(
      'text',
      'primary',
      'active',
    )} ${generateColor('border', 'primary', 'active')}`,
  }

  const tab = [baseStyle.baseTab]
  const tabColor: string[] = []
  const activeTab: string[] = []
  if (underline) {
    tab.push(baseStyle.underlineTab)
    tabColor.push(colorStyle.underlineTab)
    activeTab.push(colorStyle.underlineTabActive)
  } else {
    tab.push(baseStyle.tab)
    tabColor.push(colorStyle.tab)
    activeTab.push(colorStyle.tabActive)
  }

  return {
    outContainer: [baseStyle.outContainer],
    container: [baseStyle.container],
    tab,
    activeTab,
    tabColor,
  }
}
