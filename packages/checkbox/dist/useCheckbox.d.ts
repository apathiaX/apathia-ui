import { ComputedRef } from 'vue';
import type { Ref, SetupContext } from 'vue';
interface UserProps {
    disabled: Ref<boolean>;
    modelValue: Ref<string | number | boolean | Array<unknown>>;
    trueValue: Ref<string | number | boolean>;
    falseValue: Ref<string | number | boolean>;
    value: Ref<string | number | undefined>;
    inputEl: Ref<HTMLInputElement | null>;
}
export default function useCheckbox(userProps: UserProps, ctx: SetupContext): {
    isChecked: ComputedRef<boolean>;
    handleChange: () => void;
};
export {};
