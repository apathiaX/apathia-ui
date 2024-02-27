<template>
  <p>nav: {{ nav }}</p>

  <Navbar v-model="nav" :list="list" type="underline" />
</template>

<script>
import { ref, defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const nav = ref(1)
    const list = reactive([
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
      nav,
      list,
    }
  },
})
</script>
