import { AsyncComponentLoader, defineAsyncComponent } from 'vue'

interface Demo {
  name: string
  component: typeof defineAsyncComponent
}

// Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块
const modules = import.meta.glob('./pages/*.vue')
const demos: Array<Demo> = []
for (const path in modules) {
  const cName = path.match(/pages\/(.*)Demo.vue/)
  demos.push({
    name: cName ? cName[1] : '',
    component: defineAsyncComponent(modules[path] as AsyncComponentLoader),
  })
}

export default demos
