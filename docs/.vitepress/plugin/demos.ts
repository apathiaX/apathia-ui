import type { App } from 'vue'

export const getAllDemos = async (app: App) => {
  // @ts-ignore
  const demoContext = await import.meta.glob('../../demos/**/*.vue', {
    eager: true,
  })
  const demosMap = new Map()
  Object.keys(demoContext).forEach(key => {
    const name = key.split('/')[3]
    const demoName = key.split('/')[4].replace('.vue', '')
    demosMap.set(`${name}-${demoName}`, demoContext[key].default)
  })
  app.provide('demos', demosMap)
}
