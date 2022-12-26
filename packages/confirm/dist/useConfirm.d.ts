import { ConfirmProps } from './types';
import type { ModalProps } from '@apathia/apathia.modal';
export declare function useConfirm(): {
    confirm: (options: ConfirmProps & ModalProps) => Promise<unknown>;
    remove: (isEsc?: boolean | undefined) => void;
};
