import { PropType } from 'vue';
import type { RenderCustom } from '@apathia/apathia.custom-render';
import { showScrollbar } from './helper';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    subTitle: {
        type: PropType<string>;
        default: string;
    };
    render: {
        type: PropType<RenderCustom<Record<string, any>>>;
        default: () => null;
    };
    top: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    maskClosable: {
        type: PropType<boolean>;
        default: boolean;
    };
    keyboard: {
        type: PropType<boolean>;
        default: boolean;
    };
    beforeClose: {
        type: PropType<() => boolean>;
        default: () => boolean;
    };
}, {
    shadeRef: import("vue").Ref<HTMLElement | null>;
    modalRef: import("vue").Ref<HTMLElement | null>;
    widthStyle: string;
    close: () => void;
    showScrollbar: typeof showScrollbar;
    isTemplate: boolean;
    shadeClass: string;
    modalClass: string;
    modalHeaderClass: string;
    delIconClass: string;
    modalContentClass: string;
    titleClass: string;
    subTitleClass: string;
    transitionClass: {
        'leave-to-class': string;
    };
    durationClass: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:modelValue")[], "close" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    subTitle: {
        type: PropType<string>;
        default: string;
    };
    render: {
        type: PropType<RenderCustom<Record<string, any>>>;
        default: () => null;
    };
    top: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    maskClosable: {
        type: PropType<boolean>;
        default: boolean;
    };
    keyboard: {
        type: PropType<boolean>;
        default: boolean;
    };
    beforeClose: {
        type: PropType<() => boolean>;
        default: () => boolean;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    render: RenderCustom<Record<string, any>>;
    modelValue: boolean;
    title: string;
    subTitle: string;
    top: string | number;
    width: string | number;
    showClose: boolean;
    maskClosable: boolean;
    keyboard: boolean;
    beforeClose: () => boolean;
}>;
export default _default;
export declare function initStyle(): {
    shadeClass: string;
    modalClass: string;
    modalHeaderClass: string;
    delIconClass: string;
    modalContentClass: string;
    titleClass: string;
    subTitleClass: string;
    transitionClass: {
        'leave-to-class': string;
    };
    durationClass: string;
};
