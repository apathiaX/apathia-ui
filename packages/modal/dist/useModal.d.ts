import { App } from 'vue';
import { ModalProps } from './types';
declare type ModalUtils = {
    modal: (props: ModalProps) => void;
    remove: (isEsc?: boolean) => void;
};
export declare function modalInstall(app: App, injectKey?: string): void;
export declare function useModal(key?: string): ModalUtils;
export {};
