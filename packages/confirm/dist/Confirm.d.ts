import { PropType } from 'vue';
import type { RenderCustom } from '@apathia/apathia.custom-render';
declare const _default: import("vue").DefineComponent<{
    render: {
        type: PropType<RenderCustom<Record<string, any>>>;
    };
    renderFooter: {
        type: PropType<RenderCustom<{
            confirm?: ((...args: any) => any) | undefined;
            cancel?: ((...args: any) => any) | undefined;
        }>>;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    confirm: {
        type: FunctionConstructor;
        required: true;
    };
    cancel: {
        type: FunctionConstructor;
        required: true;
    };
    btnPosition: {
        type: PropType<"left" | "center" | "right">;
        default: string;
    };
}, {
    btnLayout: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    render: {
        type: PropType<RenderCustom<Record<string, any>>>;
    };
    renderFooter: {
        type: PropType<RenderCustom<{
            confirm?: ((...args: any) => any) | undefined;
            cancel?: ((...args: any) => any) | undefined;
        }>>;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    confirm: {
        type: FunctionConstructor;
        required: true;
    };
    cancel: {
        type: FunctionConstructor;
        required: true;
    };
    btnPosition: {
        type: PropType<"left" | "center" | "right">;
        default: string;
    };
}>>, {
    confirmText: string;
    cancelText: string;
    btnPosition: "left" | "center" | "right";
}>;
export default _default;
