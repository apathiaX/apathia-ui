import type { Ref, SetupContext } from 'vue';
declare type PaginationConfiger = {
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
interface PaginationProps {
    options: Ref<Partial<PaginationConfiger>>;
}
declare type PaginationEvent = 'page-change';
export declare function usePagination(props: PaginationProps, ctx: SetupContext<PaginationEvent[]>): {
    jumpTo: Ref<string>;
    pages: Ref<{
        number: number;
        text: string | number;
    }[]>;
    totalPages: import("vue").ComputedRef<number>;
    totalItems: import("vue").ComputedRef<number>;
    selectPage: (newPage: string | number) => void;
    setPageBtnRef: (el: HTMLElement) => void;
    innerOptions: import("vue").ShallowReactive<PaginationConfiger>;
};
export {};
