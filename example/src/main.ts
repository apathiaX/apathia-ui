import { createApp } from 'vue'
// @ts-ignore
import {
  setupApathiaTwindTheme,
  Tailwind,
  toastInstall,
  modalInstall,
} from '@apathia/apathia'
import './style.css'
import App from './App.vue'
import Card from './components/Card.vue'
import * as comp from '../../packages/icon-svg/src'

const app = createApp(App).component('Card', Card)

for (const [key, component] of Object.entries(comp)) {
  app.component(key, component)
}

setupApathiaTwindTheme(({ twind, css, colors }: Tailwind) => {
  app.config.globalProperties.tw = twind.tw
  app.config.globalProperties.apply = css.apply
  app.config.globalProperties.css = css.css

  return {
    theme: {
      colors: {
        brand: {
          100: colors.blue['100'],
          300: colors.blue['300'],
          500: colors.blue['500'],
          700: colors.blue['700'],
          900: colors.blue['900'],
        },
      },
    },
  }
})

app.use(toastInstall)
app.use(modalInstall)

app.mount('#app')
