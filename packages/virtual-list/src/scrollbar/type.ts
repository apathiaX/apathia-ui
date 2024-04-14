export interface IScrollBarProps {
  clientSize: number
  listSize: number
  scrollFrom?: number
  direction?: 'vertical' | 'horizontal'
  onScroll?: (distance: number) => void
  bgColor?: string
}

export interface RenderThumbStyleParams {
  bar: {
    size: 'height' | 'width'
    axis?: 'X' | 'Y'
  }
  size?: string
  move?: number
  direction?: 'vertical' | 'horizontal'
}

export interface IEmitFn<T = any> {
  scroll?: (offset: number) => void
  toTop?: (item: T) => void
  toBottom?: (item: T) => void
  itemResize?: (id: string, newSize: number) => void
}

export interface IScrollbarEmit {
  (e: 'scroll', distance: number): void
  (e: 'start-scroll', startOffset: number): void
  (e: 'end-scroll', endOffset: number): void
}

export interface IScrollbarEmitFn {
  scroll: (offset: number) => void
  startScroll: (startOffset: number) => void
  endScroll: (endOffset: number) => void
}
