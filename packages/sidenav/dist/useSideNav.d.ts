import type { SideNavProps } from './types';
export default function useSideNav(props: SideNavProps): {
    getContainerProps: () => {
        onMouseenter: () => void;
        onMouseleave: () => void;
    };
    getSidenavInputProps: () => {
        onInput: (event: InputEvent) => void;
    };
    getScrollContainerProps: () => {
        scrollTop: number;
    } | {
        scrollTop?: undefined;
    };
    filteredMenu: import("vue").Ref<{
        [x: string]: any;
        text?: string | undefined;
        icon?: string[] | undefined;
        children?: globalThis.Node[] | undefined;
    }[]>;
    showMini: import("vue").ComputedRef<boolean>;
};
