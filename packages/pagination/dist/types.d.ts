import { Ref } from "vue";
export declare type PaginationConfiger = {
    currentPage: number;
    totalItems: number;
    pageSize: number;
    totalPages: number;
    maxLength: number;
    keepMiddle: boolean;
    directionBtns: boolean;
    previousText: string;
    nextText: string;
    boundaryBtns: boolean;
    firstText: string;
    lastText: string;
    totalCount: boolean;
    jumpPage: boolean;
    [x: string]: any;
};
export interface PaginationProps {
    options: Ref<Partial<PaginationConfiger>>;
}
export declare type PageItem = {
    number: number;
    text: string | number;
};
export declare type PaginationEvent = 'page-change';
