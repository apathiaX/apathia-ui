import { Instance } from '@popperjs/core';
import type { RenderCustom } from '@apathia/apathia.custom-render';
declare type TriggerType = 'click' | 'hover' | 'focus' | 'manual';
export declare const placement: readonly ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"];
export declare type Placement = typeof placement[number];
export declare type PopperInstance = Instance;
export interface PopperProps {
    distance: number;
    skidding: number;
    trigger: TriggerType;
    dark: boolean;
    placement: Placement;
    content: string | number;
    transitionClass: object;
    showArrow: boolean;
    delay: number;
    disabled: boolean;
    modelValue: boolean;
    popperClass: string;
    appendToBody: boolean;
    render: RenderCustom;
    target: HTMLElement;
    delayClose: number;
}
export {};
