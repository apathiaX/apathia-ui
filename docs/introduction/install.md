# 安装使用

## 全部安装

```bash
# yarn
yarn add apathia-ui

# npm
npm install apathia-ui

# pnpm
pnpm install apathia-ui

```

::: tip
本文档之后均以 pnpm 为例
:::

## 部分安装

Apathia UI 里包含了一些列常用的 hooks，这些 hooks 在一个包中，也可以独立安装

```bash
pnpm i @apathia/apathia.hook
```

## 设置全局样式

Apathia 内部使用 [twind](https://github.com/tw-in-js/twind) （一个 tailwinds 的 css-in-js 方案），因此可以允许您配置 tailwinds 主题。配置项目参考 [tailwinds]()。具体可以参考 主题配置。
