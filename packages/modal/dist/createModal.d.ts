import { SetupContext } from 'vue';
import type { ModalProps } from './types';
export declare function createModal(props: ModalProps, ctx: SetupContext<('close' | 'update:modelValue')[]>): {
    shadeRef: import("vue").Ref<HTMLElement | null>;
    modalRef: import("vue").Ref<HTMLElement | null>;
    widthStyle: string;
    close: () => void;
    isTemplate: boolean;
};
