import { SetupContext, Ref } from 'vue';
import type { ModalProps } from './types';
export declare function createModal(props: ModalProps, ctx: SetupContext<('close' | 'update:modelValue')[]>): {
    shadeRef: Ref<HTMLElement | null>;
    modalRef: Ref<HTMLElement | null>;
    widthStyle: string;
    close: () => void;
    isTemplate: boolean;
};
