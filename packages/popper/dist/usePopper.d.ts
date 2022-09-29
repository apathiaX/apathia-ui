import { ComponentPublicInstance } from 'vue';
import { Instance as PopperInstance, Placement } from '@popperjs/core';
import type { RefType } from './util';
interface Option {
    placement: Placement;
    skidding: number;
    distance: number;
    trigger: string;
    delay: number;
    disabled: boolean;
    component?: ComponentPublicInstance;
    showArrow?: boolean;
    modelValue?: boolean;
    target?: HTMLElement | RefType;
    delayClose?: number;
}
interface EmitOption {
    emitVisible: (val: boolean) => void;
    emitHide: (val: boolean, instance: PopperInstance | null) => void;
    emitShow: (val: boolean, instance: PopperInstance | null) => void;
}
export declare function usePopper(option: Option, emitOption: EmitOption): {
    getContentProps: () => {
        ref: (el: HTMLElement) => void;
    };
    getArrowProps: () => {
        ref: (el: HTMLElement) => void;
    };
    getTargetProps: () => {
        ref: (el: HTMLElement) => void;
    };
    update: () => void;
    instance: PopperInstance | null;
    initPopper: () => void;
    detachPopper: () => void;
    visibility: import("vue").Ref<boolean>;
    getArrowStyle: (color: string, bgc: string, borderc: string) => {
        arrowBase: string;
        content: string;
    };
    hasMounted: import("vue").Ref<boolean>;
    show: () => void;
    close: () => void;
};
export {};
