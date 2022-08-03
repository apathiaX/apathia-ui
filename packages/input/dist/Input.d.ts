declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    inputClass: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    search: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    maxwords: {
        type: NumberConstructor;
    };
}, {
    inputRef: import("vue").Ref<HTMLInputElement | null>;
    inputVal: import("vue").WritableComputedRef<string>;
    handleInput: (e: Event) => void;
    attrs: import("vue").ShallowRef<{}>;
    withPrepend: import("vue").ComputedRef<boolean>;
    withAppend: import("vue").ComputedRef<boolean>;
    disableInput: import("vue").ComputedRef<boolean | import("vue").ComputedRef<boolean> | undefined>;
    showClearIcon: import("vue").ComputedRef<boolean | "" | 0>;
    onSearch: (e: MouseEvent) => void;
    clear: () => void;
    styles: {
        inputContainer: string;
        inputWrapper: string;
        input: string;
        withPrefix: string;
        withPrepend: string;
        withAppend: string;
        withSuffix: string;
        withSuffixAndClear: string;
        disabled: string;
        prepend: string;
        clearableIcon: string;
        clearWithSuffix: string;
        append: string;
        suffixBtn: string;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "search")[], "update:modelValue" | "input" | "search", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    inputClass: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    search: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    maxwords: {
        type: NumberConstructor;
    };
}>> & {
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    search: boolean;
    modelValue: string | number;
    inputClass: string | Record<string, any>;
    clearable: boolean;
    disabled: boolean;
}>;
export default _default;
