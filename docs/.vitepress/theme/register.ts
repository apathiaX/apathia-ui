import { apply, tw, css } from '@apathia/theme'
import Demo from '../plugin/components/Demo.vue'

import * as AllIcons from '@apathia/icons-vue/src/components'
import IconList from '../components/IconList.vue'
import { App } from 'vue'

export function registerComponents(app: App) {
  // vitepress插件
  app.component('Demo', Demo)

  for (const [key, component] of Object.entries(AllIcons)) {
    app.component(key, component)
  }

  app.component('IconList', IconList)

  app.config.globalProperties['cssInJs'] = {
    css,
    tw,
    apply,
  }
}
