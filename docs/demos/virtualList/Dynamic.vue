<template>
  <div class="container">
    <VirtualList :list="list" itemKey="id" :buffer="2" :minSize="40">
      <template #default="{ itemData, index }">
        <div class="row-item">#{{ index }} - {{ itemData.text }}</div>
      </template>
    </VirtualList>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { VirtualList } from '@apathia/virtual-list'
import { faker } from '@faker-js/faker'

const list = ref<{ index: number; id: string; text: string }[]>([])

const getList = (count: number) => {
  const newList: { index: number; id: string; text: string }[] = []
  for (let i = 0; i < count; i++) {
    newList.push({
      index: i,
      id: faker.string.nanoid(),
      text: faker.lorem.sentences(),
    })
  }
  return newList
}

onMounted(() => {
  list.value = getList(1000)
})
</script>

<style>
.container {
  height: 500px;
  border: 1px solid var(--vp-c-border);
  border-radius: 5px;
}
.row-item {
  min-height: 40px;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
}
</style>
