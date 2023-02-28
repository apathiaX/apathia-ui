import { MaybePromise } from "@apathia/apathia.shared";
export interface UploadProps {
    modelValue: string[] | string;
    valid: boolean;
    draggable: boolean;
    headers: Record<string, string>;
    action: string;
    name: string;
    inputDisabled: boolean;
    noInput: boolean;
    buttonName: string;
    withCredentials: boolean;
    multiple: boolean;
    data: Record<string, string> | ((file: File) => Record<string, string>);
    limit: number;
    filesize: string | number;
    accept: string;
    disabled: boolean;
    onBeforeEachUpload: (file: File) => MaybePromise<File>;
    onBeforeAllUpload: (files: FileList | null) => MaybePromise<boolean>;
    onAfterEachUpload: (url: string, file: File) => MaybePromise<string>;
    onError: (...args: unknown[]) => void;
    resolveUrl: (p: unknown) => MaybePromise<string>;
    checkUrl: (url: string) => MaybePromise<boolean>;
    https: boolean;
}
