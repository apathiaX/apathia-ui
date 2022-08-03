import { RendererElement } from 'vue';
declare type TransitionProps = {
    duration: number;
};
export declare function useTransition(props: TransitionProps): {
    getTransitionProps: () => {
        onEnter: (el: RendererElement) => void;
        onLeave: (el: RendererElement) => void;
        onAfterEnter: typeof resetStyle;
        onAfterLeave: typeof resetStyle;
    };
};
declare function resetStyle(el: RendererElement): void;
export {};
