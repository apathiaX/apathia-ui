import { Ref } from 'vue';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
}, {
    inputEl: Ref<null>;
    isDisabled: import("vue").ComputedRef<boolean>;
    isSelected: Ref<boolean>;
    handleChange: () => void;
    styles: {
        wrapper: string;
        wrapperDisabled: string;
        radio: string;
        inner: string;
        innerSelected: string;
        innerDisabled: string;
        innerSelectedDisabled: string;
        ring: string;
        input: string;
        contentWrap: string;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    value: string | number | boolean;
    modelValue: string | number | boolean;
    disabled: boolean;
}>;
export default _default;
