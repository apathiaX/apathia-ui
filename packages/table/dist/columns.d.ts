import { Ref } from 'vue';
import type { Column } from './types';
interface RealColumns {
    realColumns: Ref<Column[]>;
    containerRef: Ref<HTMLElement | null>;
}
export declare function useTableColumns(props: {
    columns: Column[];
    [x: string]: unknown;
}): RealColumns;
export {};
