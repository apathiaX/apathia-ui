export declare const Triggers: readonly ["click", "hover"];
export declare type TriggerType = typeof Triggers[number];
export declare type Node = {
    label: string;
    value: string | number;
    fullpath: (string | number)[];
    fullname: string[];
    fullkey: string;
    disabled: boolean;
    leaf: boolean;
    children?: Node[];
};
export declare type ValueType = string | number | Array<string | number> | Array<Array<string | number>>;
export interface CascaderProps {
    modelValue: ValueType;
    placeholder: string;
    emitPath: boolean;
    disabled?: boolean;
    clearable: boolean;
    showAllLevels: boolean;
    autoFocus?: boolean;
    changeOnSelect: boolean;
    separator: string;
    data: Array<Record<string, any>>;
    trigger: TriggerType;
    fieldNames: Record<'label' | 'value' | 'children', string>;
    multiple: boolean;
    height?: string | number;
    search: boolean;
}
export interface NodeProps {
    nodes: Node[];
    focus: boolean;
    showAllLevels: boolean;
    separator: string;
    placeholder: string;
    clearable: boolean;
    search: boolean;
}
