import { SetupContext, Ref, WritableComputedRef, ComputedRef } from 'vue';
import type { Column, DataItem } from './types';
declare type Event = 'update:selected' | 'update:selectedKeys';
export interface TableMultiSelectedHelper {
    selectedMap: WritableComputedRef<Record<string, boolean>>;
    allSelected: WritableComputedRef<boolean>;
    indeterminate: ComputedRef<boolean>;
    toggleItem: (i: DataItem) => void;
    toggleAllSelected: () => void;
    shiftToggle: (range: DataItem[]) => void;
}
export declare function useTableSelected(data: Readonly<Ref<DataItem[]>>, selectedKeys: Ref<Array<number | string>>, selected: Ref<DataItem[]>, key: Ref<string>, columns: Ref<Column[]>, ctx: SetupContext<Event[]>): TableMultiSelectedHelper;
export {};
