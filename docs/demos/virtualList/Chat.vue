<template>
  <div class="container">
    <VirtualList
      ref="virtualListRef"
      :list="list"
      itemKey="id"
      :buffer="2"
      :minSize="40"
      @itemResize="handleItemResize"
    >
      <template #default="{ itemData, index }">
        <div
          class="chat-container"
          :class="itemData.self ? 'chat-container--self' : ''"
        >
          <div class="row-item" :class="itemData.self ? 'row-item--self' : ''">
            <div style="width: 35px; height: 35px">
              <img :src="itemData.avatar" style="border-radius: 50%" />
            </div>
            <div
              class="row-item-content"
              :class="itemData.self ? 'row-item-content--self' : ''"
            >
              <div
                class="chat-name"
                :class="itemData.self ? 'chat-name--self' : ''"
              >
                {{ itemData.name }}
              </div>
              <div class="chat-content">{{ itemData.text }}</div>
            </div>
          </div>
        </div>
      </template>
      <template #stickyFooter>
        <div class="send-msg">
          <ap-input v-model="msg" @keyup.enter="sendMsg" />
          <ap-button primary @click="sendMsg">发送</ap-button>
        </div>
      </template>
    </VirtualList>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { VirtualList } from '@apathia/virtual-list'
import { toast } from 'apathia-ui'
import { faker } from '@faker-js/faker'

const list = ref<
  {
    index: number
    id: string
    name: string
    avatar: string
    text: string
    self: boolean
  }[]
>([])

const virtualListRef = ref<InstanceType<typeof VirtualList>>()

const getList = (count: number) => {
  const newList: {
    index: number
    id: string
    name: string
    avatar: string
    text: string
    self: boolean
  }[] = []
  for (let i = 0; i < count; i++) {
    newList.push({
      index: i,
      id: faker.string.nanoid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      text: faker.lorem.text(),
      self: false,
    })
  }
  return newList
}

const msg = ref('')
const avatar = faker.image.avatar()
const name = faker.person.fullName()
const sendMsg = () => {
  if (!msg) {
    toast.warning('请输入内容')
    return
  }
  list.value.push({
    index: list.value.length,
    id: faker.string.nanoid(),
    name,
    avatar,
    text: msg.value,
    self: true,
  })
  msg.value = ''
  virtualListRef.value?.scrollToBottom()
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

onMounted(() => {
  list.value = getList(50)
})
</script>

<style>
.container {
  height: 500px;
  border: 1px solid var(--vp-c-border);
  border-radius: 5px;
  padding: 10px;
}
.row-item {
  display: flex;
  width: 90%;
  padding: 10px;
  gap: 10px;
  align-items: self-start;
}
.row-item--self {
  flex-direction: row-reverse;
}
.chat-name {
  font-size: 12px;
}
.chat-name--self {
  text-align: right;
}
.row-item-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.row-item-content--self {
  align-items: flex-end;
}
.chat-content {
  padding: 10px;
  border-radius: 10px;
  opacity: 0.8;
  width: fit-content;
  background-color: var(--vp-c-brand-1);
}
.chat-container {
  display: flex;
}
.chat-container--self {
  justify-content: flex-end;
}
.send-msg {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: var(--vp-c-bg);
}
</style>
