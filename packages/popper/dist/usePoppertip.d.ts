import type { RenderFn } from '@apathia/apathia.custom-render';
import Popper from './Popper.vue';
interface PopperPropType {
    render: RenderFn;
    target: HTMLElement;
    modelValue: boolean;
    delayClose: number;
    distance?: number;
    skidding?: number;
    dark?: boolean;
    placement?: string;
    transitionClass?: Record<string, any>;
    showArrow?: boolean;
    disabled?: boolean;
    popperClass?: string;
}
export declare function usePoppertip(): {
    popper: (props: PopperPropType) => void;
};
export default Popper;
