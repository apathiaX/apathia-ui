import { Ref, ComponentPublicInstance } from 'vue';
export declare type RefType = Ref<HTMLElement | null>;
export declare type ElementType = RefType | ComponentPublicInstance | HTMLElement;
export declare const isHTMLElement: (val: unknown) => val is HTMLElement;
export declare const isRefType: (val: unknown) => val is RefType;
export declare const isRefBoolean: (val: unknown) => val is Ref<boolean>;
export declare const getArrowStyle: (color: string, bgc: string, borderc: string) => {
    arrowBase: string;
    content: string;
};
