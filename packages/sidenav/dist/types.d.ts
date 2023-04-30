import { Component } from 'vue';
export declare type SideNode = {
    text?: string;
    icon?: Component;
    children?: SideNode[];
    [k: string]: any;
};
export interface SideNavProps {
    menuList?: SideNode[];
    activeKey?: string;
    mini?: boolean;
    search?: boolean;
    keyField?: keyof SideNode;
}
