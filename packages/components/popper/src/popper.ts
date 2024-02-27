import { tw } from '@apathia/theme'

export const defaultArrowStyles = () => ({
  'enter-active-class': tw`transition-opacity duration-200`,
  'leave-active-class': tw`transition-opacity duration-200`,
  'enter-from-class': tw`opacity-0`,
  'leave-to-class': tw`opacity-0`,
})
