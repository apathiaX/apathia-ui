<template>
  <div class="container">
    <VirtualList
      ref="virtualListRef"
      :list="list"
      itemKey="id"
      :buffer="2"
      :minSize="40"
      footerStyle="height: 40px;"
      @toTop="loadTop"
      @toBottom="loadBottom"
      @itemResize="handleItemResize"
    >
      <template #header v-if="page > 1">
        <div class="load-container">
          <ap-icon class="loading-icon"> <Loading /></ap-icon>
          <div>加载中...</div>
        </div>
      </template>
      <template #default="{ itemData, index }">
        <div class="row-item">
          <div class="row-title">{{ itemData.name }}</div>
          <div>{{ itemData.index }} '-' {{ itemData.text }}</div>
        </div>
      </template>
      <template #footer v-if="page < 10">
        <div class="load-container">
          <ap-icon class="loading-icon"> <Loading /></ap-icon>
          <div>加载中...</div>
        </div>
      </template>
    </VirtualList>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { VirtualList } from '@apathia/virtual-list'
import { Loading } from '@apathia/icons-vue'
import { faker } from '@faker-js/faker'
import { nextTick } from 'vue'

const list = ref<{ index: number; id: string; name: string; text: string }[]>(
  [],
)
const virtualListRef = ref<InstanceType<typeof VirtualList>>()
const loading = ref(false)
const abortTop = ref(false)
const abortBottom = ref(false)
const page = ref(10)
const pageSize = ref(50)
const renderBegin = computed(() => {
  return virtualListRef.value?.reactiveData.renderBegin || 0
})
const renderEnd = computed(() => {
  return virtualListRef.value?.reactiveData.renderEnd || 0
})

const getList = (pageSize: number, start: number, time: number, p = false) => {
  const getNewList = () => {
    const newList: { index: number; id: string; name: string; text: string }[] =
      []
    for (let i = 0; i < pageSize; i++) {
      newList.push({
        index: start + i,
        id: faker.string.nanoid(),
        name: faker.person.fullName(),
        text: faker.lorem.paragraph(),
      })
    }
    return newList
  }

  if (p) {
    return getNewList()
  }
  return new Promise<any[]>(resolve => {
    const newList = getNewList()
    setTimeout(() => {
      resolve(newList)
    }, time)
  })
}

const loadTop = async () => {
  abortBottom.value = true
  if (loading.value || page.value <= 1) {
    if (!loading.value) abortBottom.value = false
    return
  }
  loading.value = true
  const newList = await getList(
    pageSize.value,
    pageSize.value * (page.value - 2),
    1000,
  )
  if (renderEnd.value >= pageSize.value) {
    loading.value = false
    if (abortTop.value) {
      abortBottom.value = false
      await loadBottom()
    }
    return
  }
  list.value = newList.concat(list.value.slice(0, pageSize.value))

  nextTick(() => {
    virtualListRef.value?.addedList2Top(newList)
    page.value -= 1
    loading.value = false
  })
}

const loadBottom = async () => {
  abortTop.value = true
  if (loading.value || page.value >= 10) {
    if (!loading.value) abortTop.value = false
    return
  }
  loading.value = true
  const newList = await getList(
    pageSize.value,
    pageSize.value * (page.value + 1),
    1000,
  )
  if (renderBegin.value < pageSize.value) {
    loading.value = false
    if (abortBottom.value) {
      abortTop.value = false
      await loadTop()
    }
    return
  }
  const delRows = list.value.splice(0, pageSize.value)
  list.value = list.value.concat(newList)
  abortTop.value = false
  nextTick(() => {
    virtualListRef.value?.deletedList2Top(delRows)
    page.value += 1
    loading.value = false
  })
}

let isFirst = true
const handleItemResize = () => {
  if (isFirst) {
    isFirst = false
    requestAnimationFrame(() => {
      virtualListRef.value?.scrollToBottom()
    })
  }
}

const init = () => {
  const pageList = getList(
    pageSize.value,
    pageSize.value * (page.value - 1),
    0,
    true,
  ) as { index: number; id: string; name: string; text: string }[]
  const cacheList = getList(
    pageSize.value,
    pageSize.value * page.value,
    0,
    true,
  ) as { index: number; id: string; name: string; text: string }[]
  list.value = [...pageList, ...cacheList]
}

init()
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
