import { AppContext, VNode } from 'vue';
export declare function mountComponent(vNode: VNode, element: Element | string, appContext?: AppContext): {
    vNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    destroy: () => void;
    el: Element | null;
};
