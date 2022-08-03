<template>
  <div>
    <Card title="基础用法">
      <CustomRender render="hello" />
    </Card>

    <Card title="基础用法 as修改标签">
      <CustomRender render="render content in span element" as="a" />
    </Card>

    <Card title="自定义render">
      <CustomRender :render="titleRender" :m="3" n="abc" />
    </Card>

    <Card title="使用as指定组件">
      <CustomRender :as="BaseButton" small primary> 点击 </CustomRender>
    </Card>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { BaseButton, CustomRender } from '@apathia/apathia'

const titleRender = ({ m, n }) =>
  h('h1', {}, `content render with render function ${m}${n}`)
</script>
