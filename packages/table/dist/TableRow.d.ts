import { PropType } from "vue";
import type { Column, DataItem, Expander, ClassNamesGenerator, StylesGenerator } from "./types";
declare const _default: import("vue").DefineComponent<{
    columns: {
        type: PropType<Column[]>;
        required: true;
    };
    row: {
        type: PropType<DataItem>;
        required: true;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: {
        type: BooleanConstructor;
    };
    rowClassName: {
        type: PropType<ClassNamesGenerator<{
            row: DataItem;
            rowIndex: number;
        }>>;
    };
    rowStyle: {
        type: PropType<StylesGenerator<{
            row: DataItem;
            rowIndex: number;
        }>>;
    };
    cellClassName: {
        type: PropType<ClassNamesGenerator<{
            row: DataItem;
            col: Column;
            colIndex: number;
            rowIndex: number;
        }>>;
    };
    cellStyle: {
        type: PropType<StylesGenerator<{
            row: DataItem;
            col: Column;
            colIndex: number;
            rowIndex: number;
        }>>;
    };
    cellSpan: {
        type: PropType<(c: {
            row: DataItem;
            col: Column;
            rowIndex: number;
            colIndex: number;
        }) => [number, number]>;
        default: () => number[];
    };
    highlightCurrentRow: {
        type: BooleanConstructor;
    };
    rowKey: {
        type: StringConstructor;
        default: string;
    };
    rowIndex: {
        type: NumberConstructor;
        default: number;
    };
    currentActiveRow: {
        type: NumberConstructor;
        default: number;
    };
    expand: {
        type: PropType<Expander>;
        default: () => {};
    };
}, {
    selectedMap: import("vue").WritableComputedRef<Record<string, boolean>>;
    rowClasses: string;
    rowStyles: string | import("vue").CSSProperties;
    expandable: import("vue").ComputedRef<boolean>;
    expandActive: import("vue").Ref<boolean>;
    cols: import("vue").ComputedRef<({
        tdClasses: {
            [x: string]: boolean;
        };
        tdAttrs: Record<string, unknown>;
        field: string;
        title: import("@apathia/apathia.custom-render").RenderCustom<Record<string, any>>;
        width?: string | number | undefined;
        align?: "left" | "right" | "center" | undefined;
        className?: string | undefined;
        colSpan?: number | undefined;
        filterOptions?: import("./types").FilterOptions | undefined;
        fixed?: "left" | "right" | undefined;
        when?: (() => boolean) | undefined;
    } | {
        tdClasses: {
            [x: string]: boolean;
        };
        tdAttrs: Record<string, unknown>;
        buttons: (arg: {
            row?: DataItem | undefined;
            rowIndex?: number | undefined;
            colIndex?: number | undefined;
        }) => import("./types").Button[];
        title: import("@apathia/apathia.custom-render").RenderCustom<Record<string, any>>;
        width?: string | number | undefined;
        align?: "left" | "right" | "center" | undefined;
        className?: string | undefined;
        colSpan?: number | undefined;
        filterOptions?: import("./types").FilterOptions | undefined;
        fixed?: "left" | "right" | undefined;
        when?: (() => boolean) | undefined;
    } | {
        tdClasses: {
            [x: string]: boolean;
        };
        tdAttrs: Record<string, unknown>;
        render: import("@apathia/apathia.custom-render").RenderFn<{
            row?: DataItem | undefined;
            colIndex?: number | undefined;
            rowIndex?: number | undefined;
        }>;
        title: import("@apathia/apathia.custom-render").RenderCustom<Record<string, any>>;
        width?: string | number | undefined;
        align?: "left" | "right" | "center" | undefined;
        className?: string | undefined;
        colSpan?: number | undefined;
        filterOptions?: import("./types").FilterOptions | undefined;
        fixed?: "left" | "right" | undefined;
        when?: (() => boolean) | undefined;
    } | {
        tdClasses: {
            [x: string]: boolean;
        };
        tdAttrs: Record<string, unknown>;
        type: "selection";
        disabledWhen?: ((arg: {
            rowIndex: number;
            row: DataItem;
        }) => boolean) | undefined;
        title: import("@apathia/apathia.custom-render").RenderCustom<Record<string, any>>;
        width?: string | number | undefined;
        align?: "left" | "right" | "center" | undefined;
        className?: string | undefined;
        colSpan?: number | undefined;
        filterOptions?: import("./types").FilterOptions | undefined;
        fixed?: "left" | "right" | undefined;
        when?: (() => boolean) | undefined;
    } | {
        tdClasses: {
            [x: string]: boolean;
        };
        tdAttrs: Record<string, unknown>;
        type: "index";
        title: import("@apathia/apathia.custom-render").RenderCustom<Record<string, any>>;
        width?: string | number | undefined;
        align?: "left" | "right" | "center" | undefined;
        className?: string | undefined;
        colSpan?: number | undefined;
        filterOptions?: import("./types").FilterOptions | undefined;
        fixed?: "left" | "right" | undefined;
        when?: (() => boolean) | undefined;
    } | {
        tdClasses: {
            [x: string]: boolean;
        };
        tdAttrs: Record<string, unknown>;
        sortable: true;
        prop: string;
        title: import("@apathia/apathia.custom-render").RenderCustom<Record<string, any>>;
        width?: string | number | undefined;
        align?: "left" | "right" | "center" | undefined;
        className?: string | undefined;
        colSpan?: number | undefined;
        filterOptions?: import("./types").FilterOptions | undefined;
        fixed?: "left" | "right" | undefined;
        when?: (() => boolean) | undefined;
    } | {
        tdClasses: {
            [x: string]: boolean;
        };
        tdAttrs: Record<string, unknown>;
        type: "expand";
        title: import("@apathia/apathia.custom-render").RenderCustom<Record<string, any>>;
        width?: string | number | undefined;
        align?: "left" | "right" | "center" | undefined;
        className?: string | undefined;
        colSpan?: number | undefined;
        filterOptions?: import("./types").FilterOptions | undefined;
        fixed?: "left" | "right" | undefined;
        when?: (() => boolean) | undefined;
    } | null)[]>;
    clickRow: (e: Event, rowIndex: number) => void;
    handleRowMouseUp: (e: Event) => void;
    toggleExpand: () => void;
    styles: {
        row: string;
        cell: string;
        fixedColumnLeft: string;
        fixedColumnRight: string;
        borderd: string;
        stripedRow: string;
        activeRow: string;
        whiteRow: string;
        cellBtnsWrap: string;
        fadeEnd: string;
        fadeActive: string;
    };
    get: {
        <TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): TObject[TKey];
        <TObject_1 extends object, TKey_1 extends keyof TObject_1>(object: TObject_1 | null | undefined, path: TKey_1 | [TKey_1]): TObject_1[TKey_1] | undefined;
        <TObject_2 extends object, TKey_2 extends keyof TObject_2, TDefault>(object: TObject_2 | null | undefined, path: TKey_2 | [TKey_2], defaultValue: TDefault): TDefault | Exclude<TObject_2[TKey_2], undefined>;
        <TObject_3 extends object, TKey1 extends keyof TObject_3, TKey2 extends keyof TObject_3[TKey1]>(object: TObject_3, path: [TKey1, TKey2]): TObject_3[TKey1][TKey2];
        <TObject_4 extends object, TKey1_1 extends keyof TObject_4, TKey2_1 extends keyof TObject_4[TKey1_1]>(object: TObject_4 | null | undefined, path: [TKey1_1, TKey2_1]): TObject_4[TKey1_1][TKey2_1] | undefined;
        <TObject_5 extends object, TKey1_2 extends keyof TObject_5, TKey2_2 extends keyof TObject_5[TKey1_2], TDefault_1>(object: TObject_5 | null | undefined, path: [TKey1_2, TKey2_2], defaultValue: TDefault_1): TDefault_1 | Exclude<TObject_5[TKey1_2][TKey2_2], undefined>;
        <TObject_6 extends object, TKey1_3 extends keyof TObject_6, TKey2_3 extends keyof TObject_6[TKey1_3], TKey3 extends keyof TObject_6[TKey1_3][TKey2_3]>(object: TObject_6, path: [TKey1_3, TKey2_3, TKey3]): TObject_6[TKey1_3][TKey2_3][TKey3];
        <TObject_7 extends object, TKey1_4 extends keyof TObject_7, TKey2_4 extends keyof TObject_7[TKey1_4], TKey3_1 extends keyof TObject_7[TKey1_4][TKey2_4]>(object: TObject_7 | null | undefined, path: [TKey1_4, TKey2_4, TKey3_1]): TObject_7[TKey1_4][TKey2_4][TKey3_1] | undefined;
        <TObject_8 extends object, TKey1_5 extends keyof TObject_8, TKey2_5 extends keyof TObject_8[TKey1_5], TKey3_2 extends keyof TObject_8[TKey1_5][TKey2_5], TDefault_2>(object: TObject_8 | null | undefined, path: [TKey1_5, TKey2_5, TKey3_2], defaultValue: TDefault_2): TDefault_2 | Exclude<TObject_8[TKey1_5][TKey2_5][TKey3_2], undefined>;
        <TObject_9 extends object, TKey1_6 extends keyof TObject_9, TKey2_6 extends keyof TObject_9[TKey1_6], TKey3_3 extends keyof TObject_9[TKey1_6][TKey2_6], TKey4 extends keyof TObject_9[TKey1_6][TKey2_6][TKey3_3]>(object: TObject_9, path: [TKey1_6, TKey2_6, TKey3_3, TKey4]): TObject_9[TKey1_6][TKey2_6][TKey3_3][TKey4];
        <TObject_10 extends object, TKey1_7 extends keyof TObject_10, TKey2_7 extends keyof TObject_10[TKey1_7], TKey3_4 extends keyof TObject_10[TKey1_7][TKey2_7], TKey4_1 extends keyof TObject_10[TKey1_7][TKey2_7][TKey3_4]>(object: TObject_10 | null | undefined, path: [TKey1_7, TKey2_7, TKey3_4, TKey4_1]): TObject_10[TKey1_7][TKey2_7][TKey3_4][TKey4_1] | undefined;
        <TObject_11 extends object, TKey1_8 extends keyof TObject_11, TKey2_8 extends keyof TObject_11[TKey1_8], TKey3_5 extends keyof TObject_11[TKey1_8][TKey2_8], TKey4_2 extends keyof TObject_11[TKey1_8][TKey2_8][TKey3_5], TDefault_3>(object: TObject_11 | null | undefined, path: [TKey1_8, TKey2_8, TKey3_5, TKey4_2], defaultValue: TDefault_3): TDefault_3 | Exclude<TObject_11[TKey1_8][TKey2_8][TKey3_5][TKey4_2], undefined>;
        <T>(object: import("lodash").NumericDictionary<T>, path: number): T;
        <T_1>(object: import("lodash").NumericDictionary<T_1> | null | undefined, path: number): T_1 | undefined;
        <T_2, TDefault_4>(object: import("lodash").NumericDictionary<T_2> | null | undefined, path: number, defaultValue: TDefault_4): T_2 | TDefault_4;
        <TDefault_5>(object: null | undefined, path: import("lodash").PropertyPath, defaultValue: TDefault_5): TDefault_5;
        (object: null | undefined, path: import("lodash").PropertyPath): undefined;
        (object: any, path: import("lodash").PropertyPath, defaultValue?: any): any;
    };
    classNames2props: (str?: string | undefined) => Record<string, boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "row-click"[], "row-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<Column[]>;
        required: true;
    };
    row: {
        type: PropType<DataItem>;
        required: true;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: {
        type: BooleanConstructor;
    };
    rowClassName: {
        type: PropType<ClassNamesGenerator<{
            row: DataItem;
            rowIndex: number;
        }>>;
    };
    rowStyle: {
        type: PropType<StylesGenerator<{
            row: DataItem;
            rowIndex: number;
        }>>;
    };
    cellClassName: {
        type: PropType<ClassNamesGenerator<{
            row: DataItem;
            col: Column;
            colIndex: number;
            rowIndex: number;
        }>>;
    };
    cellStyle: {
        type: PropType<StylesGenerator<{
            row: DataItem;
            col: Column;
            colIndex: number;
            rowIndex: number;
        }>>;
    };
    cellSpan: {
        type: PropType<(c: {
            row: DataItem;
            col: Column;
            rowIndex: number;
            colIndex: number;
        }) => [number, number]>;
        default: () => number[];
    };
    highlightCurrentRow: {
        type: BooleanConstructor;
    };
    rowKey: {
        type: StringConstructor;
        default: string;
    };
    rowIndex: {
        type: NumberConstructor;
        default: number;
    };
    currentActiveRow: {
        type: NumberConstructor;
        default: number;
    };
    expand: {
        type: PropType<Expander>;
        default: () => {};
    };
}>> & {
    "onRow-click"?: ((...args: any[]) => any) | undefined;
}, {
    border: boolean;
    stripe: boolean;
    cellSpan: (c: {
        row: DataItem;
        col: Column;
        rowIndex: number;
        colIndex: number;
    }) => [number, number];
    highlightCurrentRow: boolean;
    rowKey: string;
    rowIndex: number;
    currentActiveRow: number;
    expand: Expander;
}>;
export default _default;
