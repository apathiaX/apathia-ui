import { Ref, ComputedRef } from 'vue';
import type { SideNode as Node, SideNavProps } from './types';
export default function useSideNav(props: SideNavProps, emit: (event: 'select' | 'minChange', ...args: any[]) => void): {
    getContainerProps: () => {
        onMouseenter: () => void;
        onMouseleave: () => void;
    };
    getSidenavInputProps: () => {
        onInput: (event: InputEvent) => void;
    };
    filteredMenu: Ref<Node[]>;
    showMini: ComputedRef<boolean>;
};
