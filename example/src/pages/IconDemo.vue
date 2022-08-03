<template>
  <div>
    <Card title="基础用法">
      <Icon :name="['fa', 'copy']" />
    </Card>

    <Card title="其他用法">
      <Icon :name="['fa', 'user-secret']" />
    </Card>
  </div>
</template>

<script setup>
import { Icon } from '@apathia/apathia'
// name的参数传递为 Array 第一个参数为‘fa’ 第二个元素为icon图标名称
// 同时支持原生的fontawsome的所有属性
// FIX: docs:https://fontawesome.com/docs/web/use-with/vue/add-icons
</script>
