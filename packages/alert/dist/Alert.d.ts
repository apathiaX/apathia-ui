import { PropType } from 'vue';
import type { AlertType } from './AlertFn';
import { RenderFn } from '@apathia/apathia.custom-render';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<AlertType>;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    iconClass: {
        type: PropType<string[]>;
        default: () => never[];
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    render: {
        type: PropType<RenderFn<Record<"close", (...args: any) => any>>>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<AlertType>;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    iconClass: {
        type: PropType<string[]>;
        default: () => never[];
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    render: {
        type: PropType<RenderFn<Record<"close", (...args: any) => any>>>;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    type: AlertType;
    duration: number;
    title: string;
    message: string;
    iconClass: string[];
    showIcon: boolean;
    showClose: boolean;
}>;
export default _default;
