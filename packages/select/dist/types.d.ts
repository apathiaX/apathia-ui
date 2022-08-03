export declare type ValueType = number | string | boolean | Record<string, any>;
export declare enum Direction {
    UP = "up",
    DOWN = "down"
}
export declare type Option = {
    value: ValueType;
    label: string;
    disabled: boolean;
};
export declare type SelectState = {
    label: string;
    remote: boolean;
    value: ValueType;
    valueKey: string;
    filterStr: string;
    optionIds: number[];
    optionMap: Record<string, Option>;
    focusId: number;
    pendingFocusId: number;
    innerChange: boolean;
    indeed: boolean;
};
export declare type OptionRegister = (disabled: boolean, uid: number, value: ValueType, label: string) => void;
export declare type OptionRemover = (uid: number) => void;
