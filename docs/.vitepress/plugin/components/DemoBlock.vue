<template>
  <div class="demo-block" :class="[customClass ? customClass : '']">
    <div class="source">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { customClass } = defineProps<{
  customClass: string
}>()
</script>

<style scoped>
.demo-block {
  margin: 10px 0;
}
.demo-block .source {
  border: solid 1px var(--demo-block-border);
  border-radius: 3px;
  box-sizing: border-box;
  padding: 24px;
  transition: 0.2s;
}
</style>
