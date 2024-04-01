import type { CSSProperties, ComputedRef, Ref, WritableComputedRef } from 'vue'
import type { RenderCustom, RenderFn } from '@apathia/shared'

export type DataItem = {
  [rowKey: string]: string | number
}

export interface TableButton {
  text: string
  className?: string
  onClick: (arg: {
    row?: DataItem
    rowIndex?: number
    colIndex?: number
  }) => void
}

// TODO: filter?
export interface FilterOptions {
  enabled: boolean
  styleClass: string
  placeholder?: string // for input
  filterValue: '' // initial value
  filterDownItems: Array<{ label: string; value: string | number }>
  filterFn: (data: DataItem, filterString: string) => boolean
}

interface BaseColumn {
  type?: string
  // TODO? rename label, 类型抽象
  title: RenderCustom
  width?: number | string
  align?: 'left' | 'right' | 'center'
  className?: string
  colSpan?: number
  // TODO?
  filterOptions?: FilterOptions
  fixed?: 'left' | 'right' // 是否固定列
  sortable?: boolean
  prop?: string
  when?: () => boolean
  disabledWhen?: (arg: { rowIndex: number; row: DataItem }) => boolean
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
  }) => TableButton[]
}

export type TableColumn =
  | FieldColumn
  | ButtonColumn
  | RenderColumn
  | ButtonColumn
  | SelectionColumn
  | IndexColumn
  | SortColumn
  | ExpandColumn

export interface RealColumns {
  realColumns: Ref<TableColumn[]>
  containerRef: Ref<HTMLElement | null>
}
export type HeaderClassNamesGenerator = () => string

export type HeaderStylesGenerator = () => string | CSSProperties | undefined

export type ClassNamesGenerator<T> = {
  (p: T): string
}
export type StylesGenerator<T> = {
  (p: T): string | CSSProperties | undefined
}

export type Order = 'asc' | 'desc'
export interface TableSorterType {
  order: Order
  prop: string
}

export interface Expander {
  rowExpandable: (p: { row: DataItem; rowIndex: number }) => boolean
  expandRowRender: RenderFn<{ row?: DataItem; rowIndex?: number }>
}

export interface ResponsePager {
  num: number
  size: number
  total: number
}

export interface PaginationItem {
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
  directionBtn: boolean
  // 设置文字
  previousText: string
  nextText: string
  firstText: string
  lastText: string
  totalCount: boolean
  boundaryBtn: boolean
  // 自定义总量的渲染
  totalTemplate: (total: number) => string
  jumpPage: boolean
}

export interface TableProps {
  data: DataItem[]
  columns: TableColumn[]
  stripe?: boolean
  border?: boolean
  headerRowClassName?: HeaderClassNamesGenerator
  headerRowStyle?: HeaderStylesGenerator
  headerCellClassName?: ClassNamesGenerator<{ colIndex: number }>
  headerCellStyle?: StylesGenerator<{ colIndex: number }>
  rowClassName?: ClassNamesGenerator<{ row: DataItem; rowIndex: number }>
  rowStyle?: StylesGenerator<{ row: DataItem; rowIndex: number }>
  cellClassName?: ClassNamesGenerator<{
    row: DataItem
    rowIndex: number
    colIndex: number
  }>
  cellStyle?: StylesGenerator<{
    row: DataItem
    rowIndex: number
    colIndex: number
  }>
  cellSpan?: (c?: {
    row: DataItem
    col: TableColumn
    rowIndex: number
    colIndex: number
  }) => [number, number]
  height?: number
  showHeader?: boolean
  showData?: boolean
  rowKey?: string
  highlightCurrentRow?: boolean
  current?: string | number
  currentSelected?: DataItem | null
  selected?: DataItem[]
  selectedKeys?: (string | number)[]
  sort?: TableSorterType
  expand?: Expander
  loading?: boolean
  scroll?: Partial<{ width: number; height: number }>
}

export type TableEmits = {
  'update:current': [current: DataItem['rowKey']]
  'update:selected': [selected: DataItem[]]
  'update:currentSelected': [item: DataItem]
  'update:selectedKeys': [selectedKeys: (string | number)[]]
  'sort-change': [sort: TableSorterType]
}

export type TableSelectEmits = Pick<
  TableEmits,
  'update:selected' | 'update:selectedKeys'
>

export type TableBodyEmits = {
  'current-change': [current: DataItem]
}

export interface TableMultiSelectedHelper {
  selectedMap: WritableComputedRef<Record<string, boolean>>
  allSelected: WritableComputedRef<boolean>
  indeterminate: ComputedRef<boolean>
  toggleItem: (i: DataItem) => void
  toggleAllSelected: () => void
  shiftToggle: (range: DataItem[]) => void
}

export interface TableBodyProps {
  columns: TableColumn[]
  data: DataItem[]
  current?: string | number
  highlightCurrentRow?: boolean
  rowKey?: string
}

export interface TableHeaderProps {
  columns: TableColumn[]
  border?: boolean
  headerRowClassName?: HeaderClassNamesGenerator
  headerRowStyle?: HeaderStylesGenerator
  headerCellClassName?: ClassNamesGenerator<{ colIndex: number }>
  headerCellStyle?: StylesGenerator<{ colIndex: number }>
  sort?: TableSorterType
  fixedHeader?: boolean
}

export type TableHeaderEmits = Pick<TableEmits, 'sort-change'>

export interface TableRowProps {
  columns: TableColumn[]
  row: DataItem
  border?: boolean
  stripe?: boolean
  rowClassName?: ClassNamesGenerator<{ row: DataItem; rowIndex: number }>
  rowStyle?: StylesGenerator<{ row: DataItem; rowIndex: number }>
  cellClassName?: ClassNamesGenerator<{
    row: DataItem
    col: TableColumn
    colIndex: number
    rowIndex: number
  }>
  cellStyle?: StylesGenerator<{
    row: DataItem
    col: TableColumn
    colIndex: number
    rowIndex: number
  }>
  cellSpan?: (c: {
    row: DataItem
    col: TableColumn
    rowIndex: number
    colIndex: number
  }) => [number, number]
  highlightCurrentRow?: boolean
  rowKey?: string
  rowIndex?: number
  currentActiveRow?: number
  expand?: Partial<Expander>
}

export type TableRowEmits = {
  'row-click': [e: Event, rowIndex: number, row: DataItem]
}

export interface TableSortProps {
  sort: TableSorterType
  prop: string
}

export type TableSortEmits = Pick<TableEmits, 'sort-change'>
