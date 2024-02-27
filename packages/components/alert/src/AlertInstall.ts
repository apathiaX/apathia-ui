import { App, inject } from 'vue'
import { Alerter } from './AlertFn'
import Alert from './AlertFn'

const alertKey = 'apathia-toast'

export function toastInstall(app: App, injectKey?: string) {
  app.provide(injectKey || alertKey, Alert)
  app.config.globalProperties.$toast = Alert
}

export function useToast(key?: string): Alerter {
  return inject(key || alertKey)!
}
