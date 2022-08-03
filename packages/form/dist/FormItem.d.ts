import { StyleValue } from 'vue';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    prop: {
        type: StringConstructor;
    };
    labelAlign: {
        type: PropType<string>;
        validator: (val: string) => boolean;
    };
    labelPosition: {
        type: PropType<string>;
        validator: (val: string) => boolean;
    };
    label: {
        type: StringConstructor;
    };
    required: {
        type: BooleanConstructor;
    };
    offset: {
        type: BooleanConstructor;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
    };
    inline: {
        type: BooleanConstructor;
        default: undefined;
    };
    contentClass: {
        type: StringConstructor;
    };
}, {
    styles: {
        container: string;
        flex: string;
        inlineFlex: string;
        labelBlock: string;
        labelInline: string;
        labelAlignTop: string;
        labelAlignCenter: string;
        labelAlignBottom: string;
        labelRequired: string;
        content: string;
    };
    containerClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    lableClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    labelStyle: import("vue").ComputedRef<StyleValue>;
    realLabelAlign: import("vue").ComputedRef<string | import("vue").ComputedRef<string> | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prop: {
        type: StringConstructor;
    };
    labelAlign: {
        type: PropType<string>;
        validator: (val: string) => boolean;
    };
    labelPosition: {
        type: PropType<string>;
        validator: (val: string) => boolean;
    };
    label: {
        type: StringConstructor;
    };
    required: {
        type: BooleanConstructor;
    };
    offset: {
        type: BooleanConstructor;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
    };
    inline: {
        type: BooleanConstructor;
        default: undefined;
    };
    contentClass: {
        type: StringConstructor;
    };
}>>, {
    required: boolean;
    offset: boolean;
    inline: boolean;
}>;
export default _default;
