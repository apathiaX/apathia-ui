import * as sheets from 'twind/sheets'
import * as colors from 'twind/colors'
import * as css from 'twind/css'
import * as twind from 'twind'
import type { Configuration } from 'twind'
import type { Twind, TwindColor, TwindCss, TwindSheets } from './types'
import { merge } from 'lodash-es'
import { defaultTheme } from './defaultTheme'

export interface Tailwind {
  twind: Omit<Twind, 'setup'>
  sheets: TwindSheets
  colors: TwindColor
  css: TwindCss
}

// 自定义主题
export function setupApathiaTwindTheme(
  getConfig?: (t: Tailwind) => Configuration,
): void {
  const { setup } = twind
  setup(
    merge(
      defaultTheme,
      getConfig
        ? getConfig({
            twind,
            sheets,
            colors,
            css,
          })
        : {},
    ),
  )
}
