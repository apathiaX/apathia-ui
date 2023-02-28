import { ComputedRef } from 'vue';
import { TriggerType, Placement } from '@apathia/apathia.popper';
export interface DropdownInstance {
    hideOnClick?: ComputedRef<boolean>;
}
export interface DropdownProps {
    delay: number;
    disabled: boolean;
    label: string;
    trigger: TriggerType;
    placement: Placement;
    hideOnClick: boolean;
}
