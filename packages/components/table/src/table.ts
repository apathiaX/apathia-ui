import {
  css,
  generateColor,
  generateInteractionColor,
  style,
} from '@apathia/theme'

export const getTableStyles = () => ({
  container: style`shadow relative overflow-auto ${css`
    border-bottom: 1px solid;
  `} ${generateColor('border', 'border', 'secondary')}`,
  table: style`min-w-full w-full table-fixed divide-y ${generateColor(
    'divide',
    'border',
    'secondary',
  )} text(sm left) leading-normal rounded box-border m-0 p-0 ${css({
    'border-collapse': 'separate',
    'border-spacing': 0,
  })}`,
})

export const getTableHeaderStyles = () => {
  const borderRight = css`
    border-right: 1px solid rgb(0 0 0 / 12%);
  `
  const borderLeft = css`
    border-left: 1px solid rgb(0 0 0 / 12%);
  `

  return {
    headerWrap: style`overflow-hidden`,
    thead: style`${generateColor('bg', 'bg', 'ground')}`,
    th: style`text-left ${generateColor(
      'text',
      'text',
      'secondary',
    )} text-sm font-normal px-2 py-3 border-dashed border ${generateColor(
      'bg',
      'bg',
      'secondary',
    )} tracking-wider break-words box-border leading-normal ${css`
      border-width: 1px 1px 1px 0;
      border-style: solid;
      &:first-child {
        border-left-width: 1px;
      }
    `} ${generateColor('border', 'border', 'secondary')}`,
    thBordered: style`${generateColor('border', 'border', 'secondary')}`,
    fixed: style`sticky`,
    fixedHeader: style`top-0`,
    fixedColumnLeft: style`left-0 ${borderRight}`,
    fixedColumnRight: style`right-0 ${borderLeft}`,
  }
}

export const getTableRowStyles = () => {
  const borderRight = css`
    border-right: 1px solid rgb(0 0 0 / 12%);
  `
  const borderLeft = css`
    border-left: 1px solid rgb(0 0 0 / 12%);
  `

  return {
    row: style`${generateInteractionColor(
      ['hover'],
      [generateColor('bg', 'bg', 'ground')],
    )} transition`,
    cell: style`px-2 py-3 ${css`
      border-bottom: 1px solid;
    `} ${generateColor('border', 'border', 'secondary')} break-words text-sm`,
    fixedColumnLeft: style`sticky z-20 left-0 ${borderRight}`,
    fixedColumnRight: style`sticky z-20 right-0 ${borderLeft}`,
    bordered: style`${css`
      border-right: 1px solid;
    `} ${generateColor('border', 'border', 'secondary')}`,
    stripedRow: style`${generateColor('bg', 'bg', 'secondary')}`,
    activeRow: style`${generateColor('bg', 'primary', 'active')}`,
    whiteRow: style`${generateColor('bg', 'bg', 'primary')}`,
    cellBtnsWrap: style`inline-flex flex-wrap ${css`
      --gap: 0.25rem;
      --column-gap: var(--gap);
      --row-gap: var(--gap);
      margin: calc(var(--row-gap) / -2) calc(var(--column-gap) / -2);
      & > * {
        margin: calc(var(--row-gap) / 2) calc(var(--column-gap) / 2);
      }
    `}`,

    fadeEnd: style`opacity-0`,
    fadeActive: style`transition-all duration-100`,
  }
}

export const getSortStyles = () => ({
  arrowWrap: style`inline-block pl-px align-middle`,
  arrow: style`${generateColor('text', 'text', 'regular')} cursor-pointer`,
  arrowIcon: style`h-3.5 w-3.5 align-middle`,
  active: style`${generateColor('text', 'text', 'secondary')}`,
})
