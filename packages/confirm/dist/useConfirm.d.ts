import type { RenderCustom } from '@apathia/apathia.custom-render';
declare type ConfirmProps = {
    render: string | RenderCustom;
    renderFooter?: RenderCustom<{
        confirm?: (...args: any) => any;
        cancel?: (...args: any) => any;
    }>;
    confirmText?: string;
    cancelText?: string;
    btnPosition?: 'left' | 'right' | 'center';
};
declare type ModalProps = {
    modelValue?: boolean;
    title?: string;
    subTitle?: string;
    render?: RenderCustom;
    top?: number | string;
    width?: number | string;
    showClose?: boolean;
    maskClosable?: boolean;
    keyboard?: boolean;
    beforeClose?: () => boolean;
    onClose?: () => void;
};
export declare function useConfirm(): {
    confirm: (options: ConfirmProps & ModalProps) => Promise<unknown>;
    remove: (isEsc?: boolean | undefined) => void;
};
export {};
