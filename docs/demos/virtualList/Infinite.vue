<template>
  <div class="container">
    <VirtualList
      :list="list"
      itemKey="id"
      :buffer="2"
      :minSize="40"
      footerStyle="height: 40px;"
      @toBottom="loadMore"
    >
      <template #default="{ itemData, index }">
        <div class="row-item">
          <div class="row-title">{{ index }} - {{ itemData.name }}</div>
          <div>{{ itemData.text }}</div>
        </div>
      </template>
      <template #footer>
        <div class="load-container">
          <ap-icon class="loading-icon"> <Loading /></ap-icon>
          <div>加载中...</div>
        </div>
      </template>
    </VirtualList>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { VirtualList } from '@apathia/virtual-list'
import { Loading } from '@apathia/icons-vue'
import { faker } from '@faker-js/faker'

const list = ref<{ index: number; id: string; name: string; text: string }[]>(
  [],
)

const getList = (count: number, start = 0, time = 0) => {
  return new Promise<any[]>(resolve => {
    const newList: { index: number; id: string; name: string; text: string }[] =
      []
    for (let i = 0; i < count; i++) {
      newList.push({
        index: i,
        id: faker.string.nanoid(),
        name: faker.person.fullName(),
        text: faker.lorem.paragraph(),
      })
    }
    setTimeout(() => {
      resolve(newList)
    }, time)
  })
}

const loadMore = async () => {
  const newList = await getList(200, list.value.length, 1000)
  list.value = [...list.value, ...newList]
}

onMounted(async () => {
  list.value = await getList(200)
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
  flex-direction: column;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
}
.row-title {
  width: 100%;
  font-size: 19px;
  font-weight: 600;
  padding: 8px 4px;
}
.load-container {
  height: 100%;
  width: 100%;
  display: flex;
  color: var(--vp-c-brand-1);
  gap: 10px;
  align-items: center;
  justify-content: center;
}
.loading-icon {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}
</style>
