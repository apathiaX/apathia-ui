<template>
  <div class="container">
    <VirtualList :list="list" itemKey="id" :buffer="2" :minSize="40" fixed>
      <template #default="{ itemData, index }">
        <div class="row-item">#{{ index }} {{ itemData.name }}</div>
      </template>
    </VirtualList>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { VirtualList } from '@apathia/virtual-list'
import { faker } from '@faker-js/faker'

const list = ref<{ index: number; id: string; name: string }[]>([])

const getList = (count: number) => {
  const newList: { index: number; id: string; name: string }[] = []
  for (let i = 0; i < count; i++) {
    newList.push({
      index: i,
      id: faker.string.nanoid(),
      name: faker.person.fullName(),
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
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
}
</style>
