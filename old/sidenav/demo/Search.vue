<template>
  <div style="height: 50vh; display: flex">
    <SideNav
      :menu-list="menu"
      :active-key="activeKey"
      key-field="path"
      search
      @select="select"
    />
    <div>
      <div style="font-size: 24px; margin-left: 150px">Content</div>
      <div>current path: {{ activeKey }}</div>
      <div>current menu: {{ title }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

type Node = {
  text: string
  icon?: string[]
  children?: Node[]
  [k: string]: any
}

export default defineComponent({
  setup() {
    const menu = ref<Node[]>([
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

    const select = (node: Node) => {
      title.value = node.text
      activeKey.value = node.path
    }
    return {
      menu,
      activeKey,
      title,
      select
    }
  }
})
</script>
