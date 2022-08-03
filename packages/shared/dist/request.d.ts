/**
 * lite version from https://github.com/element-plus/element-plus/blob/dev/packages/upload/src/ajax.ts
 */
declare type Method = 'PUT' | 'POST' | 'PUT' | 'DELETE';
interface RequestOptions {
    headers?: Record<string, string>;
    withCredentials?: boolean;
    onProgress?: (e: UploadProgressEvent) => void;
}
interface UploadProgressEvent extends ProgressEvent {
    percent: number;
}
export declare function request<T>(method: Method, url: string, data?: Document | Blob | FormData | string, options?: RequestOptions): Promise<T>;
export {};
