export declare type TagType = 'success' | 'primary' | 'danger' | 'warning';
export declare type TagItem = string | {
    type?: TagType;
    closeable?: boolean;
    iconClass?: string;
    [k: string]: any;
};
export interface TagsProps {
    modelValue: TagItem[];
    primary?: boolean;
    success?: boolean;
    danger?: boolean;
    warning?: boolean;
    hollow?: boolean;
    closable: boolean;
    showTag: (tag: TagItem) => string;
    handleTag: (str: string) => TagItem;
    disabled: boolean;
}
export interface TagProps {
    text: string;
    iconClass: string;
    primary?: boolean;
    success?: boolean;
    danger?: boolean;
    warning?: boolean;
    hollow?: boolean;
    closable: boolean;
}
