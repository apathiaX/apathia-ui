<template>
  <div class="container">
    <VirtualList :list="list" itemKey="id" :buffer="2" :minSize="40" horizontal>
      <template #default="{ itemData, index }">
        <div class="row-item">
          <div>#{{ index }}</div>
          <div>{{ itemData.text }}</div>
        </div>
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
      text: faker.commerce.department(),
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
  overflow: hidden;
  border: 1px solid var(--vp-c-border);
  border-radius: 5px;
}
.row-item {
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  border-right: 1px solid #ccc;
  padding: 0 10px;
}
</style>
