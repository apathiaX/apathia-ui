import { Ref } from "vue";
export interface CheckboxProps {
    disabled: Ref<boolean>;
    modelValue: Ref<string | number | boolean | Array<unknown>>;
    trueValue: Ref<string | number | boolean>;
    falseValue: Ref<string | number | boolean>;
    value: Ref<string | number | undefined>;
    indeterminate: Ref<boolean>;
}
