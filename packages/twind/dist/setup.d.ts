import type { Configuration } from 'twind';
import type { Twind, TwindColor, TwindCss, TwindSheets } from './types';
export interface Tailwind {
    twind: Omit<Twind, 'setup'>;
    sheets: TwindSheets;
    colors: TwindColor;
    css: TwindCss;
}
export declare function setupApathiaTwindTheme(getConfig?: (t: Tailwind) => Configuration): void;
