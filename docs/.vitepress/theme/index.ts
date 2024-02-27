import '../plugin/style/index.css'
import DefaultTheme from 'vitepress/theme'
import './resetcss/normalize.css'
import { registerComponents } from './register'
import {
  Apathia,
  toastInstall,
  modalInstall,
  setupApathiaTwindTheme,
} from 'apathia-ui'
import './resetcss/color.css'
import '../plugin/style/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    registerComponents(ctx.app)
    setupApathiaTwindTheme(() => ({
      preflight: false,
      important: true,
    }))

    ctx.app.use(toastInstall)
    ctx.app.use(modalInstall)
    ctx.app.use(Apathia)
  },
}
