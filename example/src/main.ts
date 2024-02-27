import { createApp } from 'vue'
import {
  toastInstall,
  modalInstall,
  setupApathiaTwindTheme,
  Apathia,
} from 'apathia-ui'
// import './style.css'
import App from './App.vue'
import Card from './components/Card.vue'
import * as comp from '@apathia/icons-vue'

const app = createApp(App).component('Card', Card)

app.use(Apathia)

for (const [key, component] of Object.entries(comp)) {
  app.component(key, component)
}

setupApathiaTwindTheme(({ twind, css, colors }) => {
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
