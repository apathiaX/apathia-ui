import flatpickr from 'flatpickr';
export declare type DateFormatType = 'Y-m' | 'Y-m-d' | 'Y-m-d H:i' | 'Y-m-d H:i:S' | 'Y-m-d H:i:s' | 'Y-m-d h:i:s';
export declare type RangeItem = [string | number, string | number];
export declare type RangeConfig = {
    [key: string]: RangeItem;
};
export declare type RangeChange = (v: RangeItem) => void;
export interface GroupProps {
    startTime: string | number;
    endTime: string | number;
    dateFormat: DateFormatType;
    timestamp: boolean;
    disabled: boolean;
    startDateOptions: flatpickr.Options.Options;
    endDateOptions: flatpickr.Options.Options;
    range: RangeConfig;
}
