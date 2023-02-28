export declare type Key = string | number;
export declare type TransferDataItem = {
    value: Key;
    label: string;
    disabled: boolean;
};
export declare type TargetOrder = 'original' | 'push' | 'unshift';
export declare type Props = {
    value: string;
    label: string;
    disabled: string;
};
export declare type Checked = Key[];
export declare type CheckedMap = Record<Key, boolean>;
export interface TransferProps {
    modelValue: Key[];
    data: Array<Record<string, string | boolean | number>>;
    filterable?: boolean;
    filterPlaceholder?: string;
    filterMethod?: (word: string, option: TransferDataItem) => boolean;
    targetOrder?: TargetOrder;
    titles?: [string, string];
    propKeys?: Props;
    leftDefaultChecked?: Key[];
    rightDefaultChecked?: Key[];
}
