import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    expand: {
        type: PropType<boolean>;
        default: boolean;
    };
    duration: {
        type: PropType<number>;
        default: number;
    };
    header: {
        type: PropType<string>;
        default: string;
    };
    showArrow: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    handleClick: () => void;
    show: import("vue").Ref<boolean>;
    toggleShow: () => void;
    styles: {
        headerClass: string;
        rollClass: string;
        headerDisableClass: string;
        icon: string;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    expand: {
        type: PropType<boolean>;
        default: boolean;
    };
    duration: {
        type: PropType<number>;
        default: number;
    };
    header: {
        type: PropType<string>;
        default: string;
    };
    showArrow: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    duration: number;
    header: string;
    expand: boolean;
    showArrow: boolean;
    disabled: boolean;
}>;
export default _default;
