import type { Ref, SetupContext } from 'vue';
import { PaginationConfiger, PaginationEvent, PaginationProps } from './types';
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
