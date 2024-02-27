<template>
  <div class="menu-container">
    <ap-side-nav
      :menu-list="menu"
      :active-key="activeKey"
      key-field="path"
      @select="select"
    >
      <template #menuTop>
        <ap-button primary>This is menu Top</ap-button>
      </template>
      <template #default="{ expand, onClick, node }">
        <div class="menu-rowClass" @click="onClick">
          <span v-show="!hiddenVal">{{ node.text }}</span>
          <span v-show="node.children && !hiddenVal" class="menu-text">
            ({{ expand }})
          </span>
        </div>
      </template>

      <template #menuBottom>
        <div style="color: green">
          <ap-button pink>This is menu buttom</ap-button>
        </div>
      </template>
    </ap-side-nav>
    <div>
      <div class="menu-content">Content</div>
      <div>current path: {{ activeKey }}</div>
      <div>current menu: {{ title }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { SideNavNode } from 'apathia-ui'

const menu = ref<SideNavNode[]>([
  {
    text: 'Navigator One',
    children: [
      {
        path: '/navigator_1/item_1',
        auth: 'WORKBENCH_TODO',
        text: 'item one',
      },
      {
        path: '/navigator_1/item_2',
        auth: 'WORKBENCH_TODO',
        text: 'item two',
      },
      {
        path: '/navigator_1/item_3',
        auth: 'WORKBENCH_TODO',
        text: 'item three',
      },
    ],
  },
  {
    text: 'Navigator Two',
    children: [
      {
        path: '/navigator_2/item_1',
        auth: 'WORKBENCH_TODO',
        text: 'item one',
      },
      {
        path: '/navigator_2/item_2',
        auth: 'WORKBENCH_TODO',
        text: 'item two',
      },
      {
        path: '/navigator_2/item_3',
        auth: 'WORKBENCH_TODO',
        text: 'item three',
      },
    ],
  },
  {
    text: 'Navigator Tree',
    path: '/navigator_3',
  },
  {
    text: 'Navigator Four',
    path: '/navigator_4',
  },
  {
    text: 'Navigator Five',
    path: '/navigator_5',
  },
])

const activeKey = ref<string>('')
const title = ref<string>('')
const hiddenVal = ref<boolean>(false)

const select = (node: SideNavNode) => {
  title.value = node.text!
  activeKey.value = node.path
}
</script>

<style scoped>
.menu-container {
  height: 50vh;
  display: flex;
}
.menu-rowClass {
  line-height: 18px;
  font-size: 18px;
  margin: 15px 0;
  color: skyblue;
}
.menu-text {
  color: rgb(235, 135, 220);
}
.menu-content {
  font-size: 24px;
  margin-left: 150px;
}
</style>
