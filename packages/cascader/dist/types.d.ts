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
