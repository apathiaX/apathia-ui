import '@apathia/vitepress-theme/theme/styles/index.css'
// import 'vitepress-theme-demoblock/theme/styles/index.css'
import './resetcss/normalize.css'
import Theme from 'vitepress/dist/client/theme-default'
import { registerComponents } from './register-components'
import { setupApathiaTwindTheme } from '../../../packages/twind/src/index'
import  * as apathia from '../../../packages/apathia'

const { toastInstall, modalInstall } = apathia

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app)
    setupApathiaTwindTheme(() => ({
      preflight: false,
    }))

    app.use(toastInstall)
    app.use(modalInstall)    
  }
}