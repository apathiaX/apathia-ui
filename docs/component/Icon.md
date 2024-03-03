# Icon 图标

常用 Icon 图标

## 使用说明

基于 `Element-plus`, 提供了常用的图标组件。

### 使用默认图标组件，需要先安装 `svg` 图标库

```shell
# NPM
$ npm install @apathia/icons-vue

# YARN
$ yarn add @apathia/icons-vue

# pnpm
$ pnpm install @apathia/icons-vue
```

### 全局注册

导入所有图标并进行全局注册

```ts
// main.ts

import * as ApathiaIcons from '@apathia/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ApathiaIcons)) {
  app.component(key, component)
}
```

## 基础用法

可以单独使用 `icon-svg` 中的图标，也可以使用结合 `Icon` 组件进行属性设置

::: danger 组件名称
如果与其他组件发生命名冲突时可以通过设置别名解决
:::

::: demo
<<< @/demos/icon/Basic.vue
:::

## 自定义 svg

可以通过插槽传入自定义 svg 图标

::: demo
<<< @/demos/icon/Custom.vue
:::

## 图标列表

<IconList/>

## Icon Props

| 参数 | 类型                         | 是否必传 | 说明     | 默认值 |
| ---- | ---------------------------- | -------- | -------- | ------ |
| size | string 、 number             | 否       | 图标大小 | -      |
| size | Pick<CSSProperties, 'color'> | 否       | 图标颜色 | -      |

## Icon Slots

| 插槽名称 | 说明     | 参数 |
| -------- | -------- | ---- |
| default  | 图标内容 | -    |
