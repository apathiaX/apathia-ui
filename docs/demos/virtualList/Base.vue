<template>
  <div class="container">
    <VirtualList :list="list" itemKey="id" :minSize="40">
      <template #default="{ itemData, index }">
        <div class="row-item">
          #{{ index }} - {{ itemData.id }} - {{ itemData.text }}
        </div>
      </template>
    </VirtualList>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { VirtualList } from '@apathia/virtual-list'
import { getList, Item } from '../../utils'

const list = ref<Item[]>([])

onMounted(() => {
  list.value = getList(1000)
})
</script>

<style>
.container {
  height: 400px;
}
.row-item {
  min-height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
}
</style>
