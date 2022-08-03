import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: PropType<boolean>;
        default: undefined;
    };
    inline: {
        type: PropType<boolean>;
        default: boolean;
    };
    labelWidth: {
        type: PropType<string | number>;
        default: number;
    };
    labelPosition: {
        type: PropType<string>;
        validate: (value: string) => boolean;
        default: string;
    };
    labelAlign: {
        type: PropType<string>;
        validator: (val: string) => boolean;
        default: string;
    };
}, {
    styles: {
        form: string;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: PropType<boolean>;
        default: undefined;
    };
    inline: {
        type: PropType<boolean>;
        default: boolean;
    };
    labelWidth: {
        type: PropType<string | number>;
        default: number;
    };
    labelPosition: {
        type: PropType<string>;
        validate: (value: string) => boolean;
        default: string;
    };
    labelAlign: {
        type: PropType<string>;
        validator: (val: string) => boolean;
        default: string;
    };
}>>, {
    disabled: boolean;
    inline: boolean;
    labelWidth: string | number;
    labelPosition: string;
    labelAlign: string;
}>;
export default _default;
