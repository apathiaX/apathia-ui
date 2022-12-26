<template>
  <p>current nav: {{ nav }}</p>

  <Navbar v-model="nav" :list="list" trigger="click" :disabled-parent="false" />
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

type NavNode = {
  value: string | number
  label: string
  disabled?: boolean
  iconClass?: string
  children?: NavNode[]
}

export default defineComponent({
  setup() {
    const nav = ref<number>(1)
    const list = reactive<Array<NavNode>>([
      {
        label: 'nav1',
        value: 1,
      },
      {
        label: 'nav2',
        value: 2,
      },
      {
        label: 'nav3',
        value: 3,
        children: [
          {
            label: '二级1',
            value: '3-1',
          },
          {
            label: '二级2',
            value: '3-2',
          },
          {
            label: '二级3',
            value: '3-3',
          },
        ],
      },
    ])

    return {
      list,
      nav
    }
  }
})
</script>
