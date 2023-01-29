/// <reference types="lodash" />
import { Ref, SetupContext } from 'vue';
import { SelectValueType, Option, UserProps } from './types';
export default function useSelect(userProps: UserProps, ctx: SetupContext): {
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
    toggleDropdown: () => void;
    register: (disabledOption: boolean, uid: number, value: SelectValueType, labelStr: string) => void;
    unregister: (uid: number) => void;
    updateRegister: (disabledVal: boolean, uid: number, value: SelectValueType, labelStr: string) => void;
    focus: (uid: number, focusedEl?: HTMLElement | undefined) => void;
    clear: () => void;
    isSameValue: (newVal: SelectValueType, oldVal: SelectValueType) => boolean;
    keyHandler: (event: KeyboardEvent) => void;
    changeHandler: (value: SelectValueType, labelStr: string, isInnerChange?: boolean) => void;
    filterHandler: import("lodash").DebouncedFunc<() => void>;
    filterStr: Ref<string>;
    selectState: {
        label: string;
        remote: boolean;
        value: SelectValueType;
        valueKey: string;
        filterStr: string;
        optionIds: number[];
        optionMap: Record<string, Option>;
        focusId: number;
        pendingFocusId: number;
        innerChange: boolean;
        indeed: boolean;
    };
    active: Ref<boolean>;
    isEmpty: import("vue").ComputedRef<boolean>;
    isRemote: Ref<boolean>;
    inputFocused: Ref<boolean>;
    finalPlaceholder: import("vue").ComputedRef<string>;
    isNoResult: import("vue").ComputedRef<boolean>;
    rootEl: Ref<HTMLElement | null>;
    inputEl: Ref<HTMLElement | null>;
};
