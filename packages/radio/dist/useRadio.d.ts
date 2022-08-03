import { Ref } from 'vue';
import type { SetupContext } from 'vue';
interface groupData {
    value: string | number | boolean;
    disabled: boolean;
}
interface UserProps {
    disabled: Ref<boolean>;
    modelValue: Ref<string | number | boolean>;
    value: Ref<string | number | boolean>;
    groupState: Ref<groupData> | null;
    changeHandler: (val: string | number | boolean) => void;
    inputEl: Ref<HTMLInputElement | null>;
}
export default function (userProps: UserProps, ctx: SetupContext): {
    isSelected: Ref<boolean>;
    handleChange: () => void;
};
export {};
