export declare type SideNode = {
    text?: string;
    icon?: string[];
    children?: Node[];
    [k: string]: any;
};
export interface SideNavProps {
    menuList?: Node[];
    activeKey?: string;
    mini?: boolean;
    search?: boolean;
    keyField?: keyof Node;
}
