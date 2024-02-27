import type { App } from 'vue'
import components from './components'

export const INSTALL_KEY = Symbol('APATHIA_INSTALL_KEY')

const Apathia = {
  install(app: App) {
    if (app[INSTALL_KEY]) return
    app[INSTALL_KEY] = true
    for (const comp of components) {
      app.component(comp.name, comp)
    }
  },
}

export default Apathia
