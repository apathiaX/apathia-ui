import * as sheets from 'twind/sheets'
import * as colors from 'twind/colors'
import * as css from 'twind/css'
import * as twind from 'twind'

export type TwindColor = typeof colors
export type TwindCss = typeof css
export type TwindSheets = typeof sheets
export type Twind = Omit<typeof twind, 'setup'>
