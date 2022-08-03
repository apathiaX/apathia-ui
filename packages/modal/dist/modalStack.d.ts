import { ModalProps } from './types';
interface ModalInstance {
    props: ModalProps;
    close: () => void;
}
export declare const modalStack: ModalInstance[];
export declare function popModalStack(): void;
export declare function tryCloseLastModal(isEsc?: boolean): void;
export declare function pushModal(modal: ModalInstance): void;
export {};
