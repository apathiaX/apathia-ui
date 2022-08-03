# 安装使用

## 全部安装

```bash
# yarn
yarn add @apathia/apathia

# npm
npm install @apathia/apathia
```

::: tip
本文档之后均以yarn为例
:::

## 部分安装

Apathia 采用monorepo的形式，每个组件都是独立的package，独立发布，如果只想使用一个，可以只安装一个。如

```bash
yarn add @apathia/apathia.button
```

Apathia 里包含了一些列常用的 hooks，这些hooks在一个包中，也可以独立安装

```bash
yarn add @apathia/apathia.hook
```

## 设置全局样式

Apathia 内部使用 [twind](https://github.com/tw-in-js/twind) （一个tailwinds 的css-in-js方案），因此可以允许您配置 tailwinds 主题。配置项目参考 [tailwinds]()。具体可以参考 主题配置。
