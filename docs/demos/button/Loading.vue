<template>
  <div class="button-wrapper">
    <ap-button primary loading> 加载中 </ap-button>
    <ap-button primary loading>
      <template #loading>
        <Loading />
      </template>
      加载中
    </ap-button>
    <ap-button primary loading :loading-icon="Star"> </ap-button>
  </div>
</template>

<script lang="ts" setup>
import { Star } from '@apathia/icons-vue'
</script>

<style scoped>
.button-wrapper {
  display: flex;
  gap: 20px;
}
</style>
