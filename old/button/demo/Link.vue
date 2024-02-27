<template>
  <FormItem>
    <BaseButton :href="link">default</BaseButton>
    <BaseButton primary :href="link">primary</BaseButton>
    <BaseButton secondary :href="link">secondary</BaseButton>
    <BaseButton success :href="link">success</BaseButton>
    <BaseButton danger :href="link">danger</BaseButton>
    <BaseButton info :href="link">info</BaseButton>
    <BaseButton warning :href="link">warning</BaseButton>
  </FormItem>
</template>

<script setup>
const link = 'http://www.baidu.com'
</script>
