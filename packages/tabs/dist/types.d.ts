export declare type TabItem = string | number | {
    [k: string]: any;
};
export interface TabsProps {
    modelValue: string | number;
    list: Array<TabItem>;
    underline?: boolean;
    showLabel?: Function;
}
