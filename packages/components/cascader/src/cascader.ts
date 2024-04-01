import {
  style,
  css,
  generateColor,
  generateInteractionColor,
} from '@apathia/theme'

export const getCascaderStyles = () => {
  const baseStyle = {
    dropdown: style`absolute z-dropdown`,
    panelContainer: style`flex mt-1${generateColor(
      'bg',
      'bg',
      'primary',
    )} rounded shadow`,
    scrollWrap: style`${css`
      border-right: 1px solid;
    `} ${generateColor('border', 'border', 'secondary')} overflow-hidden w-48`,
    panel: style`overflow-scroll ${css`
      width: calc(100% + 28px);
      height: calc(100% + 38px);
    `}`,
    node: style`relative h-12 px-2 flex items-center cursor-pointer mt-2 whitespace-nowrap overflow-hidden overflow-ellipsis ${generateInteractionColor(
      ['hover'],
      [generateColor('bg', 'bg', 'secondary')],
    )} text-sm`,
    nodeDisabled: style`${generateColor(
      'text',
      'text',
      'disabled',
    )} ${generateInteractionColor(
      ['hover'],
      [generateColor('bg', 'bg', 'primary')],
    )} cursor-not-allowed`,
    nodeActive: style`${generateColor(
      'text',
      'primary',
      'active',
    )} ${generateColor('bg', 'primary', 'fill')} ${generateInteractionColor(
      ['hover'],
      [generateColor('bg', 'primary', 'fill')],
    )} text-base`,
    checkbox: style`h-auto pl-1`,
    icon: style`absolute right-4 text-sm`,
  }
  return {
    dropdown: [baseStyle.dropdown],
    scrollWrap: [baseStyle.scrollWrap],
    panelContainer: [baseStyle.panelContainer],
    panel: [baseStyle.panel],
    node: baseStyle.node,
    nodeDisabled: baseStyle.nodeDisabled,
    nodeActive: baseStyle.nodeActive,
    checkbox: [baseStyle.checkbox],
    icon: [baseStyle.icon],
  }
}

export const getNodeStyles = ({
  focus,
  disabled,
}: {
  focus: boolean
  disabled: boolean
}) => {
  const baseStyle = {
    container: style`w-full relative flex h-8  border border-solid ${generateColor(
      'border',
      'border',
      'secondary',
    )}  rounded ${generateColor('bg', 'bg', 'primary')} text-sm items-center`,
    wrap: style`h-full w-full overflow-hidden`,
    active: style`${generateColor('border', 'primary', 'active')}`,
    nodes: style`w-full flex-1 flex-nowrap whitespace-nowrap py-btn-md-y px-1.5 overflow-x-hidden ${css`
      height: calc(100% + 17px);
    `}`,
    search: style`flex-1 outline-none`,
    tag: style`rounded inline-flex text-xs  ${generateColor(
      'text',
      'text',
      'regular',
    )} items-center py-1 px-1.5 ${generateColor(
      'bg',
      'bg',
      'secondary',
    )} h-5 mr-1 gap-1 flex-shrink-0`,
    nodeRemove: style`p-1.5 ${generateColor(
      'text',
      'text',
      'regular',
    )} ${generateInteractionColor(
      ['hover'],
      [generateColor('text', 'text', 'secondary')],
    )} cursor-pointer`,
    clearIcon: style`absolute right-2 top-1/2 -translate-y-2/4 cursor-pointer ml-2 ${generateColor(
      'text',
      'text',
      'secondary',
    )} ${generateInteractionColor(
      ['hover'],
      [generateColor('text', 'primary', 'hover')],
    )}`,
    placeholder: style`${generateColor('text', 'text', 'placeholder')}`,
    disabled: style`cursor-not-allowed ${generateColor(
      'text',
      'text',
      'disabled',
    )} ${generateColor('bg', 'bg', 'secondary')} ${generateColor(
      'border',
      'border',
      'disabled',
    )}`,
  }
  const container = [baseStyle.container]
  if (disabled) {
    container.push(baseStyle.disabled)
  } else if (focus) {
    container.push(baseStyle.active)
  }
  return {
    container,
    wrap: [baseStyle.wrap],
    nodes: [baseStyle.nodes],
    tag: [baseStyle.tag],
    nodeRemove: [baseStyle.nodeRemove],
    clearIcon: [baseStyle.clearIcon],
    search: [baseStyle.search],
    placeholder: [baseStyle.placeholder],
  }
}
