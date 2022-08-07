# Introduction

# Apathia

基于 vue3 + typescript + css-in-js 的组件库

## 特点

- :fire: 使用typescript编写，类型完整
- :rainbow: 可自定义的全局样式
- :rocket:  css-in-js 方便快捷
- :hammer_and_wrench:  包含常用的composition api

# 安装使用

## 全部安装

```bash
# yarn
yarn add @apathia/apathia

# npm
npm install @apathia/apathia
```

## 部分安装

Apathia 采用monorepo的形式，每个组件都是独立的package，独立发布，如果只想使用一个，可以只安装一个。如

```bash
yarn add @apathia/apathia.button
```

Apathia 里包含了一些列常用的 hooks，这些hooks在一个包中，也可以独立安装

```bash
yarn add @apathia/apathia.hook
```