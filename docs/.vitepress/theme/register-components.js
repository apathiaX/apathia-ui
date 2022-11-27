import Demo from '@apathia/vitepress-theme/dist/components/Demo.vue'
import DemoBlock from '@apathia/vitepress-theme/dist/components/DemoBlock.vue'

import { tw, apply, css } from '@apathia/apathia.twind'

import * as comp from '../../../packages/apathia/src/export.ts'

export function registerComponents(app) {
  // vitepress插件
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)

  Object.keys(comp).forEach(name => {
    if (typeof comp[name] === 'object') {
      app.component(name, comp[name]) // 注册 组件
    } else {
      app.config.globalProperties[name] = comp[name] // 注册  方法
    }
  })

  app.config.globalProperties['cssInJs'] = {
    css,
    tw,
    apply
  }
}
