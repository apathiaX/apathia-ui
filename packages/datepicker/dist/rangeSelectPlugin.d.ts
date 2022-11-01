import flatpickr from 'flatpickr';
export declare type RangeItem = [string | number, string | number];
export declare type RangeConfig = {
    [key: string]: RangeItem;
};
declare type RangeChange = (v: RangeItem) => void;
export default function (range: RangeConfig, change: RangeChange): (fp: flatpickr.Instance) => {
    readonly onKeyDown: () => void;
    readonly onReady: () => void;
};
export {};
