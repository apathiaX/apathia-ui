import { Ref } from 'vue';
/**
 * 水平方向隐藏滚动条, 实现滚动.
 * * 需要将容器设置 overflow-hidden
 * @returns content ref
 */
export declare function useScrollX(translate?: boolean): {
    contentRef: Ref<HTMLElement | null>;
};
