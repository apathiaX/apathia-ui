import flatpickr from 'flatpickr';
declare type PluginConfig = {
    clearIcon?: string;
    confirmIcon?: string;
    confirmText?: string;
    clearText?: string;
    showAlways?: boolean;
    theme?: string;
};
declare function confirmDatePlugin(pluginConfig: PluginConfig): (fp: flatpickr.Instance) => {
    onChange?: ((_: any, dateStr: string) => true | void) | undefined;
    onKeyDown(_: any, __: any, ___: any, e: KeyboardEvent): void;
    onReady(): void;
};
export default confirmDatePlugin;
