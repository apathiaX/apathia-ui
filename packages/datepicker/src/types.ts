import flatpickr from 'flatpickr'

export type DateFormatType =
  | 'Y-m'
  | 'Y-m-d'
  | 'Y-m-d H:i'
  | 'Y-m-d H:i:S'
  | 'Y-m-d H:i:s'
  | 'Y-m-d h:i:s'

export type RangeItem = [string | number, string | number]

export type RangeConfig = {
  [key: string]: RangeItem
}

export type RangeChange = (v: RangeItem) => void

export interface GroupProps {
  startTime: string | number
  endTime: string | number
  dateFormat: DateFormatType
  timestamp: boolean
  disabled: boolean
  startDateOptions: flatpickr.Options.Options
  endDateOptions: flatpickr.Options.Options
  range: RangeConfig
}