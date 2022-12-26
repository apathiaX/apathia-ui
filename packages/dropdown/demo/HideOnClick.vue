<template>
  <Dropdown placement="top" :hide-on-click="false">
    <BaseButton primary>请点击</BaseButton>
    <template #dropdown>
      <DropdownItem
        v-for="(item, index) in list"
        :key="index"
        :active="isSame(item.value, select)"
        :disabled="item.value === 3"
        @click="changeSelect(item.value)"
      >
        <span>{{ item.label }}</span>
      </DropdownItem>
    </template>
  </Dropdown>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const list = ref([
      {
        value: 1,
        label: '熊熊勇闯异世界1',
      },
      {
        value: 2,
        label: '熊熊勇闯异世界',
      },
      {
        value: 3,
        label: '熊熊异世界',
      },
      {
        value: 4,
        label: '熊熊勇闯异世界2',
      },
    ])
    let select = ref(0)

    const changeSelect = value => {
      select.value = value
    }

    const isSame = (a, b) => {
      return a === b
    }

    return {
      list,
      select,
      isSame,
      changeSelect,
    }
  },
})
</script>
