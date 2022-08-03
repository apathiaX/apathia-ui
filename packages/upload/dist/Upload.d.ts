import { PropType } from 'vue';
import { MaybePromise } from '@apathia/apathia.shared';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string | string[]>;
        required: true;
    };
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    headers: {
        type: PropType<Record<string, string>>;
        default: () => {};
    };
    action: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    inputDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    noInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonName: {
        type: StringConstructor;
        default: string;
    };
    withCredentials: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
    };
    data: {
        type: PropType<Record<string, string> | ((file: File) => Record<string, string>)>;
        default: () => {};
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
    filesize: {
        type: (StringConstructor | NumberConstructor)[];
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    onBeforeEachUpload: {
        type: PropType<(file: File) => MaybePromise<File>>;
    };
    onBeforeAllUpload: {
        type: PropType<(files: FileList | null) => MaybePromise<boolean>>;
    };
    onAfterEachUpload: {
        type: PropType<(url: string, file: File) => MaybePromise<string>>;
    };
    onError: {
        type: PropType<(...args: unknown[]) => void>;
    };
    resolveUrl: {
        type: PropType<(p: unknown) => MaybePromise<string>>;
        default: (p: unknown) => string;
    };
    checkUrl: {
        type: PropType<(url: string) => MaybePromise<boolean>>;
        default: (url: string) => boolean;
    };
    https: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    containerRef: import("vue").Ref<HTMLDivElement | null>;
    inputRef: import("vue").Ref<HTMLInputElement | null>;
    disableUpload: import("vue").ComputedRef<boolean>;
    handleTriggerClick: () => void;
    handleFileChange: (e: Event) => void;
    handleUrlInput: (value: string) => Promise<void>;
    styles: {
        trigger: string;
        drag: string;
        draging: string;
        disabled: string;
        clickText: string;
        fileIcon: string;
    };
    uploadButtonStyles: import("vue").ComputedRef<{
        margin: string;
        whiteSpace: string;
    }>;
    containerClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    dragContainerClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:valid")[], "update:modelValue" | "update:valid", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<string | string[]>;
        required: true;
    };
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    headers: {
        type: PropType<Record<string, string>>;
        default: () => {};
    };
    action: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    inputDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    noInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonName: {
        type: StringConstructor;
        default: string;
    };
    withCredentials: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
    };
    data: {
        type: PropType<Record<string, string> | ((file: File) => Record<string, string>)>;
        default: () => {};
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
    filesize: {
        type: (StringConstructor | NumberConstructor)[];
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    onBeforeEachUpload: {
        type: PropType<(file: File) => MaybePromise<File>>;
    };
    onBeforeAllUpload: {
        type: PropType<(files: FileList | null) => MaybePromise<boolean>>;
    };
    onAfterEachUpload: {
        type: PropType<(url: string, file: File) => MaybePromise<string>>;
    };
    onError: {
        type: PropType<(...args: unknown[]) => void>;
    };
    resolveUrl: {
        type: PropType<(p: unknown) => MaybePromise<string>>;
        default: (p: unknown) => string;
    };
    checkUrl: {
        type: PropType<(url: string) => MaybePromise<boolean>>;
        default: (url: string) => boolean;
    };
    https: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:valid"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    data: Record<string, string> | ((file: File) => Record<string, string>);
    valid: boolean;
    draggable: boolean;
    headers: Record<string, string>;
    inputDisabled: boolean;
    noInput: boolean;
    buttonName: string;
    withCredentials: boolean;
    multiple: boolean;
    limit: number;
    accept: string;
    disabled: boolean;
    resolveUrl: (p: unknown) => MaybePromise<string>;
    checkUrl: (url: string) => MaybePromise<boolean>;
    https: boolean;
}>;
export default _default;
