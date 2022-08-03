import { App } from 'vue';
import { Alerter } from './AlertFn';
export declare function toastInstall(app: App, injectKey: string): void;
export declare function useToast(key?: string): Alerter;
