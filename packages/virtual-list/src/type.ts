export interface IVirtualListProps<
  T extends Record<string, string> = Record<string, any>,
> {
  list: T[]
  itemKey: string | number
  minSize: number
  scrollDistance?: number
  fixed?: boolean
  buffer?: number
  bufferTop?: number
  bufferBottom?: number
  horizontal?: boolean
  fixSelection?: boolean
  start?: number
  offset?: number
  listStyle?: string
  listClass?: string
  itemStyle?: string
  itemClass?: string
  headerClass?: string
  headerStyle?: string
  footerClass?: string
  footerStyle?: string
  stickyHeaderClass?: string
  stickyHeaderStyle?: string
  stickyFooterClass?: string
  stickyFooterStyle?: string

  renderControl?: (begin: number, end: number) => { begin: number; end: number }
}

export interface IVirtualListEmit<
  T extends Record<string, string> = Record<string, any>,
> {
  (event: 'scroll', offset: number): void
  (event: 'toTop', item: T): void
  (event: 'toBottom', item: T): void
  (event: 'itemResize', id: string, newSize: number): void
}

export interface VirtualListEmitFn<
  T extends Record<string, string> = Record<string, any>,
> {
  scroll?: (offset: number) => void
  toTop?: (item: T) => void
  toBottom?: (item: T) => void
  itemResize?: (id: string, newSize: number) => void
}

export interface ReactiveData {
  views: number

  // 滚动距离
  offset: number
  // 不包含插槽的高度
  listTotalSize: number
  // 虚拟占位尺寸，是从0到renderBegin的尺寸
  virtualSize: number
  // 可视区的起始下标
  inViewBegin: number
  // 可视区的结束下标
  inViewEnd: number

  // buffer的起始下标
  renderBegin: number
  // buffer的结束下标
  renderEnd: number

  bufferTop: number
  bufferBottom: number
}

export interface SlotSize {
  clientSize: number
  headerSize: number
  footerSize: number
  stickyHeaderSize: number
  stickyFooterSize: number
}

export interface IObserverItemProps {
  id?: string | number
  resizeObserver?: ResizeObserver
}
