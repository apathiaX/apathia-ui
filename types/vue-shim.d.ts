declare module '*.vue' {
  import { ComponentOptions } from 'vue'

  const component: ComponentOptions
  export default component
}

declare module '@'
// declare module '@apathia/apathia.alert'
// declare module '@apathia/apathia.table'
// declare module '@apathia/apathia.image'
// declare module '@apathia/apathia.transfer'

declare type Timeout = ReturnType<typeof setTimeout>
declare type Interval = ReturnType<typeof setInterval>

declare type Props<T> = T extends new () => { $props: infer P } ? P : never
