import { tw, apply } from '@apathia/theme'

export function getConfirmStyle(pos: 'left' | 'center' | 'right') {
  const baseLayout = apply`mt-4 flex`

  const position = {
    left: apply`justify-start`,
    center: apply`justify-center`,
    right: apply`justify-end`,
  }

  return tw`${baseLayout} ${position[pos] || position.left}`
}
