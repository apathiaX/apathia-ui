<template>
  <div>
    <Card title="基础用法">
      <BaseButton primary round>aaa</BaseButton>
    </Card>

    <Card title="其他用法">
      <BaseButton success circle>b</BaseButton>
    </Card>
    <BaseButton large primary>cc</BaseButton>
  </div>
</template>

<script setup>
import { BaseButton } from '@apathia/apathia'
</script>
