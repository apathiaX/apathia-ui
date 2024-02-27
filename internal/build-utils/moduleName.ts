import { PKG_NAME, PKG_PREFIX } from '../constant'

export const moduleNameRewrite = () => {
  return id => {
    return id.replaceAll(`${PKG_PREFIX}/`, `${PKG_NAME}/`)
  }
}
