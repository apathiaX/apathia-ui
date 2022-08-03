import { MaybeRef } from '@apathia/apathia.shared';
declare type WindowOrDocumentEventMap = WindowEventMap & DocumentEventMap;
export declare function useEventListener<Event extends keyof WindowEventMap>(event: Event, listener: (this: Window, ev: WindowEventMap[Event]) => void, options?: AddEventListenerOptions): () => void;
export declare function useEventListener<Event extends keyof WindowOrDocumentEventMap>(target: HTMLElement | Window, event: Event, listener: (this: Window, ev: WindowOrDocumentEventMap[Event]) => void, options?: AddEventListenerOptions): () => void;
export declare function useEventListener<T extends HTMLElement, Event extends keyof DocumentEventMap>(target: MaybeRef<T | null>, event: Event, listener: (this: Window, ev: DocumentEventMap[Event]) => void, options?: AddEventListenerOptions): () => void;
export {};
