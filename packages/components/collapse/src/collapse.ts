import { style } from '@apathia/theme'

export function getCollapseStyle() {
  const headerClass = style`flex items-center h-10 leading-10 bg-fill-light rounded cursor-pointer`
  const rollClass = style`rotate-90 translate-y-0.5 duration-300`
  const headerDisableClass = style`cursor-not-allowed`
  const icon = style`mx-2 transition`

  return {
    headerClass,
    rollClass,
    headerDisableClass,
    icon,
  }
}
