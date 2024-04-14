<template>
  <div class="operate-container">
    <ap-form :labelWidth="100">
      <ap-form-item label="滚动到指定位置:">
        <div style="display: flex; gap: 30px">
          <ap-input
            v-model="offset"
            placeholder="滚动偏移量"
            style="width: 50px"
          />
          <ap-button primary @click="scroll2Offset">滚动到指定偏移量</ap-button>
          <ap-input
            v-model="targetIndex"
            placeholder="滚动目标index"
            style="width: 50px"
          />
          <ap-button primary @click="scroll2Index">滚动到指定下标</ap-button>
        </div>
      </ap-form-item>
      <ap-form-item label="显示指定内容:">
        <div style="display: flex; gap: 30px">
          <ap-input
            v-model="showIndex"
            placeholder="显示指定下标"
            style="width: 50px"
          />
          <div>
            <ap-button @click="go2Prev">上一个</ap-button>
            <ap-button @click="go2Next">下一个</ap-button>
          </div>
          <ap-button primary @click="showItem">显示指定下标</ap-button>
        </div>
      </ap-form-item>
      <ap-form-item label="滚动指令:">
        <ap-button primary @click="scroll2Top">滚动到顶部</ap-button>
        <ap-button primary @click="scroll2Bottom">滚动到底部</ap-button>
      </ap-form-item>
    </ap-form>
  </div>
  <div class="container">
    <VirtualList
      ref="virtualListRef"
      :list="list"
      itemKey="id"
      :buffer="2"
      :minSize="40"
    >
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

const virtualListRef = ref<InstanceType<typeof VirtualList>>()
const offset = ref(0)
const targetIndex = ref(0)
const showIndex = ref(0)

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

const scroll2Offset = () => {
  virtualListRef.value?.scrollToOffset(offset.value)
}

const scroll2Index = () => {
  virtualListRef.value?.scrollToIndex(targetIndex.value)
}

const showItem = () => {
  virtualListRef.value?.scrollIntoView(showIndex.value)
}

const scroll2Top = () => {
  virtualListRef.value?.scrollToTop()
}

const scroll2Bottom = () => {
  virtualListRef.value?.scrollToBottom()
}

const go2Prev = () => {
  if (showIndex.value < 0) {
    return
  }
  showIndex.value--
  virtualListRef.value?.scrollIntoView(showIndex.value)
}

const go2Next = () => {
  if (showIndex.value > list.value.length - 1) {
    return
  }
  showIndex.value++
  virtualListRef.value?.scrollIntoView(showIndex.value)
}

onMounted(() => {
  list.value = getList(1000)
})
</script>

<style>
.operate-container {
  display: flex;
  justify-content: space-between;
}
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
