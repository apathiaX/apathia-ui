import { RenderFn } from '@apathia/apathia.custom-render';
export declare type AlertType = 'info' | 'warning' | 'danger' | 'success' | 'default';
interface AlertProps {
    type?: AlertType;
    duration?: number;
    title?: string;
    message?: string;
    showIcon?: boolean;
    showClose?: boolean;
    render?: RenderFn<{
        close?: (...args: any) => any;
    }>;
}
declare const AlertType: readonly ["info", "warning", "danger", "success", "default"];
interface BaseAlerter {
    (props: AlertProps): void;
    closeAll: () => void;
}
export declare type Alerter = {
    [K in typeof AlertType[number]]: (title: string, message?: string, props?: Omit<AlertProps, 'type' | 'title' | 'message'>) => void;
} & BaseAlerter;
declare const Alert: Alerter;
export default Alert;
