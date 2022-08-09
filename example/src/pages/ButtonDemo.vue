<template>
  <div>
    <Card title="基础用法">
      <BaseButton large primary round>aaa</BaseButton>
    </Card>

    <Card title="其他用法">
      <BaseButton success circle>b</BaseButton>
    </Card>
    <BaseButton large primary :href="'http://www.baidu.com'">cc</BaseButton>
  </div>
</template>

<script setup>
import { BaseButton } from '@apathia/apathia'
</script>
