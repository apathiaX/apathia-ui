import type { Ref, ComputedRef } from 'vue';
import type { ValueType, SelectState, OptionRegister, OptionRemover } from './types';
export declare function useOption(userProps: {
    value: Ref<number | string | boolean>;
    disabled: Ref<boolean>;
    register: OptionRegister;
    unregister: OptionRemover;
    updateRegister: OptionRegister;
    selectState: SelectState;
    changeHandler: (value: ValueType, label: string, isInnerChange?: boolean) => void;
    isSameValue: (newVal: ValueType, oldVal: ValueType) => boolean;
    focus: (uid: number, focusedEl?: HTMLElement) => void;
    compoId: number;
}): {
    isSelected: Ref<boolean>;
    isHidden: Ref<boolean>;
    isFocused: ComputedRef<boolean>;
    getRootProps: () => Record<string, unknown>;
};
