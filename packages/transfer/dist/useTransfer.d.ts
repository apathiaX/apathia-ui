import type { ComputedRef, SetupContext } from 'vue';
import type { DataItem, Props, Key, TargetOrder } from './types';
interface TransferProps {
    modelValue: Key[];
    data: Array<Record<string, string | boolean | number>>;
    filterable?: boolean;
    filterPlaceholder?: string;
    filterMethod?: (word: string, option: DataItem) => boolean;
    targetOrder?: TargetOrder;
    titles?: [string, string];
    propKeys: Props;
    leftDefaultChecked?: Key[];
    rightDefaultChecked?: Key[];
}
declare type EmitEvent = 'update:modelValue' | 'select' | 'remove';
declare const _default: (userProps: Readonly<ComputedRef<TransferProps>>, emit: SetupContext<EmitEvent[]>['emit']) => {
    selectedSource: import("vue").Ref<Key[]>;
    selectedTarget: import("vue").Ref<Key[]>;
    processedData: ComputedRef<{
        value: Key;
        label: string;
        disabled: boolean;
    }[]>;
    valueMap: ComputedRef<Record<string, DataItem>>;
    source: ComputedRef<{
        value: Key;
        label: string;
        disabled: boolean;
    }[]>;
    target: ComputedRef<DataItem[]>;
    resolve: (oldValue: Key[], addValue: Key[]) => Key[];
    addAll: () => void;
    removeAll: () => void;
    addSelected: () => void;
    removeSelected: () => void;
};
export default _default;
