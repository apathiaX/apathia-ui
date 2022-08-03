import * as sheets from 'twind/sheets';
import * as colors from 'twind/colors';
import * as css from 'twind/css';
import * as twind from 'twind';
export declare type TwindColor = typeof colors;
export declare type TwindCss = typeof css;
export declare type TwindSheets = typeof sheets;
export declare type Twind = Omit<typeof twind, 'setup'>;
