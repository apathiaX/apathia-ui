import type { SetupContext, Ref } from 'vue';
interface UserProps {
    disabled: Ref<boolean>;
}
export default function useButton(userProps: UserProps, ctx: SetupContext): {
    getButtonProps: () => {
        disabled: boolean;
        onclick: Function;
        ondblclick: Function;
        onmousedown: Function;
        onmouseup: Function;
    };
};
export {};
