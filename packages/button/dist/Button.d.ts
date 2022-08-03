import { Ref } from 'vue';
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    href: {
        type: StringConstructor;
    };
    to: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    primary: {
        type: BooleanConstructor;
        default: boolean;
    };
    secondary: {
        type: BooleanConstructor;
        default: boolean;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    danger: {
        type: BooleanConstructor;
        default: boolean;
    };
    info: {
        type: BooleanConstructor;
        default: boolean;
    };
    warning: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    hollow: {
        type: BooleanConstructor;
        default: boolean;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    large: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
}, {
    getButtonProps: () => {
        disabled: boolean;
        onclick: Function;
        ondblclick: Function;
        onmousedown: Function;
        onmouseup: Function;
    };
    disableButton: Ref<boolean>;
    tagType: import("vue").ComputedRef<string | Record<string, any>>;
    styles: {
        base: string;
        primary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
        secondary: string;
        active: string;
        hollow: string;
        plain: string;
        small: string;
        large: string;
        disabled: string;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    href: {
        type: StringConstructor;
    };
    to: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    primary: {
        type: BooleanConstructor;
        default: boolean;
    };
    secondary: {
        type: BooleanConstructor;
        default: boolean;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    danger: {
        type: BooleanConstructor;
        default: boolean;
    };
    info: {
        type: BooleanConstructor;
        default: boolean;
    };
    warning: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    hollow: {
        type: BooleanConstructor;
        default: boolean;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    large: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>, {
    small: boolean;
    primary: boolean;
    secondary: boolean;
    success: boolean;
    danger: boolean;
    info: boolean;
    warning: boolean;
    active: boolean;
    hollow: boolean;
    plain: boolean;
    large: boolean;
    disabled: boolean;
}>;
export default _default;
