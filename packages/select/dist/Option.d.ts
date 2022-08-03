import { SelectState } from './types';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    updateRegister: import("./types").OptionRegister;
    selectState: SelectState;
    isSameValue: (newValue: import("./types").ValueType, oldValue: import("./types").ValueType) => boolean;
    focus: (uid: number, el?: HTMLElement | undefined) => void;
    getRootProps: () => Record<string, unknown>;
    isSelected: import("vue").Ref<boolean>;
    isHidden: import("vue").Ref<boolean>;
    isFocused: import("vue").ComputedRef<boolean>;
    styles: {
        wrapper: string;
        selected: string;
        focused: string;
        text: string;
        checkMark: string;
        focusMark: string;
        disabled: string;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    disabled: boolean;
}>;
export default _default;
