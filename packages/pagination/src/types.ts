import { Ref } from "vue"

export type PaginationConfiger = {
    currentPage: number
    totalItems: number
    pageSize: number
    totalPages: number
    maxLength: number
    keepMiddle: boolean
    directionBtns: boolean
    previousText: string
    nextText: string
    boundaryBtns: boolean
    firstText: string
    lastText: string
    totalCount: boolean
    jumpPage: boolean
    // ?? only to avoid type warning
    [x: string]: any
}
  
export interface PaginationProps {
    options: Ref<Partial<PaginationConfiger>>
}
  
export type PageItem = {
    number: number
    text: string | number
}
  
export type PaginationEvent = 'page-change'