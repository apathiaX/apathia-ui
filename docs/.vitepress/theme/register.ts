import { apply, tw, css } from '@apathia/theme'
import Demo from '../plugin/components/Demo.vue'
import DemoBlock from '../plugin/components/DemoBlock.vue'

import * as AllIcons from '@apathia/icons-vue/src/components'
import IconList from '../components/IconList.vue'
import { App } from 'vue'
import { getAllDemos } from '../plugin/demos'

export function registerComponents(app: App) {
  // 获取所有 demo 的 vue 组件
  getAllDemos(app)
  // vitepress插件
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)

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
