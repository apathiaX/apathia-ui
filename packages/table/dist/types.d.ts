import type { CSSProperties } from 'vue';
import type { RenderCustom, RenderFn } from '@apathia/apathia.custom-render';
export declare type DataItem = Record<string, unknown> & {
    [rowKey: string]: string | number;
};
export interface Button {
    text: string;
    className?: string;
    onClick: (arg: {
        row?: DataItem;
        rowIndex?: number;
        colIndex?: number;
    }) => void;
}
export interface FilterOptions {
    enabled: boolean;
    styleClass: string;
    placeholder?: string;
    filterValue: '';
    filterDownItems: Array<{
        label: string;
        value: string | number;
    }>;
    filterFn: (data: DataItem, filterString: string) => boolean;
}
interface BaseColumn {
    title: RenderCustom;
    width?: number | string;
    align?: 'left' | 'right' | 'center';
    className?: string;
    colSpan?: number;
    filterOptions?: FilterOptions;
    fixed?: 'left' | 'right';
    when?: () => boolean;
}
interface SortColumn extends BaseColumn {
    sortable: true;
    prop: string;
}
interface IndexColumn extends BaseColumn {
    type: 'index';
}
interface ExpandColumn extends BaseColumn {
    type: 'expand';
}
interface SelectionColumn extends BaseColumn {
    type: 'selection';
    disabledWhen?: (arg: {
        rowIndex: number;
        row: DataItem;
    }) => boolean;
}
interface FieldColumn extends BaseColumn {
    field: string;
}
interface RenderColumn extends BaseColumn {
    render: RenderFn<{
        row?: DataItem;
        colIndex?: number;
        rowIndex?: number;
    }>;
}
interface ButtonColumn extends BaseColumn {
    buttons: (arg: {
        row?: DataItem;
        rowIndex?: number;
        colIndex?: number;
    }) => Button[];
}
export declare type Column = FieldColumn | ButtonColumn | RenderColumn | ButtonColumn | SelectionColumn | IndexColumn | SortColumn | ExpandColumn;
export declare type HeaderClassNamesGenerator = () => string;
export declare type HeaderStylesGenerator = () => string | CSSProperties | undefined;
export declare type ClassNamesGenerator<T> = {
    (p: T): string;
};
export declare type StylesGenerator<T> = {
    (p: T): string | CSSProperties | undefined;
};
export declare type Order = 'asc' | 'desc';
export interface Sorter {
    order: Order;
    prop: string;
}
export interface Expander {
    rowExpandable: (p: {
        row: DataItem;
        rowIndex: number;
    }) => boolean;
    expandRowRender: RenderFn<{
        row?: DataItem;
        rowIndex?: number;
    }>;
}
export interface GoPager {
    num: number;
    size: number;
    total: number;
}
export interface LegacyPager {
    current_page: number;
    page_size: number;
    total_items: number;
}
export declare type ResponsePager = GoPager | LegacyPager;
export {};
