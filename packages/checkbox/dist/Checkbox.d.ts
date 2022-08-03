import { Ref } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ArrayConstructor)[];
        default: boolean;
    };
    trueValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    falseValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    inputEl: Ref<null>;
    isChecked: import("vue").ComputedRef<boolean>;
    handleChange: () => void;
    disableInput: Ref<boolean>;
    styles: {
        wrapper: string;
        disabledWrapper: string;
        checkbox: string;
        inner: string;
        checkedBlueBorder: string;
        checkedAfter: string;
        indeterAfter: string;
        disabledInner: string;
        ring: string;
        input: string;
        contentWrap: string;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ArrayConstructor)[];
        default: boolean;
    };
    trueValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    falseValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean | unknown[];
    trueValue: string | number | boolean;
    falseValue: string | number | boolean;
    value: string | number;
    disabled: boolean;
    indeterminate: boolean;
}>;
export default _default;
