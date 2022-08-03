import { MaybeElementRef } from '@apathia/apathia.shared';
export declare function useResizeObserver(target: MaybeElementRef, callback: ResizeObserverCallback, options?: ResizeObserverOptions): {
    isSupported: boolean;
    stop: () => void;
};
