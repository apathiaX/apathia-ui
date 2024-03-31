import { apply, css, style } from '@apathia/theme'
import { PlacementType } from './types'

export const defaultArrowStyles = () => ({
  'enter-active-class': style`transition-opacity duration-200`,
  'leave-active-class': style`transition-opacity duration-200`,
  'enter-from-class': style`opacity-0`,
  'leave-to-class': style`opacity-0`,
})

const placeMap = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
}
const placeArr = Object.keys(placeMap) as Array<keyof typeof placeMap>

const borderMap = {
  top: 'left',
  bottom: 'right',
  left: 'bottom',
  right: 'top',
}

export const getPopperStyle = ({
  dark,
  placement,
}: {
  dark: boolean
  placement: PlacementType
}): {
  arrow: string[]
  popper: string[]
  content: string[]
} => {
  const placementArr = placeArr.reduce<Record<PlacementType, any>>(
    (acc, cur) => {
      acc[cur] = css`{
      ${placeMap[cur]}: -5px;
        &:before {
          border-${borderMap[cur]}-color: transparent;
          border-${cur}-color: transparent;
        }
    }`
      return acc
    },
    {} as Record<PlacementType, any>,
  )
  const baseStyle = {
    popper: style`inline-block`,
    arrow: style`absolute z-0 ${css`
      width: 10px;
      height: 10px;
      &:before {
        ${apply`
        absolute inset-0 z-0 box-border transform rotate-45 
        border-solid border ${
          dark
            ? 'border-border-dark-secondary bg-bg-dark-primary'
            : 'border-border-light-secondary bg-bg-light-primary'
        }
      `}
        content: ' ';
        width: 10px;
        height: 10px;
      }
    `} ${placementArr[placement]}`,
    content: style`max-w-md box-border rounded border-solid border shadow break-all p-3 z-50 ${
      dark
        ? 'border-border-dark-secondary bg-bg-dark-primary text-text-light-white'
        : 'border-border-light-secondary bg-bg-light-primary text-text-dark-secondary'
    } text(justify sm)`,
  }

  return {
    popper: [baseStyle.popper],
    arrow: [baseStyle.arrow],
    content: [baseStyle.content],
  }
}
