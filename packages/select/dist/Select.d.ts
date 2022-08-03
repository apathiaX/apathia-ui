import { PropType } from 'vue';
import { ValueType } from './types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<ValueType>;
        required: true;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    isLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
}, {
    filterStr: import("vue").Ref<string>;
    updateRegister: (disabledVal: boolean, uid: number, value: ValueType, labelStr: string) => void;
    selectState: {
        label: string;
        remote: boolean;
        value: ValueType;
        valueKey: string;
        filterStr: string;
        optionIds: number[];
        optionMap: Record<string, import("./types").Option>;
        focusId: number;
        pendingFocusId: number;
        innerChange: boolean;
        indeed: boolean;
    };
    changeHandler: (value: ValueType, labelStr: string, isInnerChange?: boolean) => void;
    register: (disabledOption: boolean, uid: number, value: ValueType, labelStr: string) => void;
    unregister: (uid: number) => void;
    focus: (uid: number, focusedEl?: HTMLElement | undefined) => void;
    clear: () => void;
    isSameValue: (newVal: ValueType, oldVal: ValueType) => boolean;
    active: import("vue").Ref<boolean>;
    isEmpty: import("vue").ComputedRef<boolean>;
    inputFocused: import("vue").Ref<boolean>;
    isNoResult: import("vue").ComputedRef<boolean>;
    isRemote: import("vue").Ref<boolean>;
    disableSelect: import("vue").ComputedRef<boolean | import("vue").ComputedRef<boolean> | undefined>;
    getRootProps: () => {
        disabled: boolean;
        ref: (el: HTMLElement) => void;
        onClick: () => void;
        onKeydown: (event: KeyboardEvent) => void;
    };
    getInputProps: () => {
        type: string;
        tabindex: string;
        value: string;
        placeholder: string;
        disabled: boolean;
        readonly: boolean;
        ref: (el: HTMLInputElement) => void;
        onInput: (event: InputEvent) => void;
        onFocus: () => void;
        onBlur: () => void;
    };
    getDropdownProps: () => {
        style: {
            width: string;
        };
        ref: (el: HTMLElement) => void;
    };
    styles: {
        selectWrapper: string;
        disabled: string;
        active: string;
        inputSelected: string;
        focused: string;
        arrow: string;
        clearableIcon: string;
        clearable: string;
        dropdownContainer: string;
        dropdownContainerShow: string;
        optionList: string;
        tips: string;
    };
    rootEl: import("vue").Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "input" | "native-change" | "query-change")[], "update:modelValue" | "change" | "input" | "native-change" | "query-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<ValueType>;
        required: true;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    isLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    "onNative-change"?: ((...args: any[]) => any) | undefined;
    "onQuery-change"?: ((...args: any[]) => any) | undefined;
}, {
    valueKey: string;
    placeholder: string;
    filterable: boolean;
    clearable: boolean;
    emptyText: string;
    disabled: boolean;
    maxHeight: string | number;
    isLoading: boolean;
    placement: string;
}>;
export default _default;
