import '@apathia/vitepress-theme/dist/styles/index.css'
import DefaultTheme from 'vitepress/theme'
import './resetcss/normalize.css'
import { registerComponents } from './register'
import { setupApathiaTwindTheme } from '../../../packages/twind/src/index'
import  * as apathia from '../../../packages/apathia'
import './resetcss/color.css'

const { toastInstall, modalInstall } = apathia

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    registerComponents(ctx.app)
    setupApathiaTwindTheme(() => ({
      preflight: false,
    }))

    ctx.app.use(toastInstall)
    ctx.app.use(modalInstall)    
  }
}