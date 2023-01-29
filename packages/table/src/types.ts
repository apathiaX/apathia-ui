import type { CSSProperties } from 'vue'
// @ts-ignore
import type { RenderCustom, RenderFn } from '@apathia/apathia.custom-render'

export type DataItem = Record<string, unknown> & {
  [rowKey: string] : string | number
}

export interface Button {
  text: string
  className?: string
  onClick: (arg: {
    row?: DataItem
    rowIndex?: number
    colIndex?: number
  }) => void
}

// TODO: fileter?
export interface FilterOptions {
  enabled: boolean
  styleClass: string
  placeholder?: string // for input
  filterValue: '' // initial value
  filterDownItems: Array<{ label: string; value: string | number }>
  filterFn: (data: DataItem, filterString: string) => boolean
}

interface BaseColumn {
  // TODO? rename label, 类型抽象
  title: RenderCustom
  width?: number | string
  align?: 'left' | 'right' | 'center'
  className?: string
  colSpan?: number
  // TODO?
  filterOptions?: FilterOptions
  fixed?: 'left' | 'right' // 是否固定列
  when?: () => boolean
}

interface SortColumn extends BaseColumn {
  sortable: true
  prop: string // 排序使用的字段
}
interface IndexColumn extends BaseColumn {
  type: 'index'
}
interface ExpandColumn extends BaseColumn {
  type: 'expand'
}
interface SelectionColumn extends BaseColumn {
  type: 'selection'
  disabledWhen?: (arg: { rowIndex: number; row: DataItem }) => boolean
}
interface FieldColumn extends BaseColumn {
  field: string
}
interface RenderColumn extends BaseColumn {
  render: RenderFn<{ row?: DataItem; colIndex?: number; rowIndex?: number }>
}
interface ButtonColumn extends BaseColumn {
  buttons: (arg: {
    row?: DataItem
    rowIndex?: number
    colIndex?: number
  }) => Button[]
}

export type Column =
  | FieldColumn
  | ButtonColumn
  | RenderColumn
  | ButtonColumn
  | SelectionColumn
  | IndexColumn
  | SortColumn
  | ExpandColumn

export type HeaderClassNamesGenerator = () => string

export type HeaderStylesGenerator = () => string | CSSProperties | undefined

export type ClassNamesGenerator<T> = {
  (p: T): string
}
export type StylesGenerator<T> = {
  (p: T): string | CSSProperties | undefined
}

export type Order = 'asc' | 'desc'
export interface Sorter {
  order: Order
  prop: string
}

export interface Expander {
  rowExpandable: (p: { row: DataItem; rowIndex: number }) => boolean
  expandRowRender: RenderFn<{ row?: DataItem; rowIndex?: number }>
}

// go style
export interface GoPager {
  num: number
  size: number
  total: number
}

/* eslint-disable camelcase */
// php style
export interface LegacyPager {
  current_page: number
  page_size: number
  total_items: number
}

export type ResponsePager = GoPager | LegacyPager

interface Pagination {
  // 当前在第几页
  currentPage: number
  // 总共有多少页
  totalItems: number
  // 每一页的数量
  pageSize: number
  // 总共有多少页
  totalPages: number
  // 分页中最多显示最近多少页
  maxLength: number
  // todo ?
  // 居中显示
  keepMiddle: boolean
  // todo ?
  directionBtns: boolean
  // 设置文字
  previousText: string
  nextText: string
  firstText: string
  lastText: string
  totalCount: boolean
  boundaryBtns: boolean
  // 自定义总量的渲染
  totalTemplate: (total: number) => string
  jumpPage: boolean
}
