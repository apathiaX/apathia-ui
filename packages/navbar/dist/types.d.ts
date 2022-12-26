export declare type NavNode = {
    value: string | number;
    label: string;
    disabled?: boolean;
    iconClass?: string;
    children?: NavNode[];
};
export declare type ThemeType = 'underline' | 'default';
export interface NavbarProps {
    type?: ThemeType;
    modelValue?: string | number;
    list: NavNode[];
    trigger?: string;
    disabledParent?: boolean;
}
