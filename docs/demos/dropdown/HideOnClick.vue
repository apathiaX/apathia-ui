<template>
  <ap-dropdown placement="top" :hide-on-click="false">
    <ap-button primary>请点击</ap-button>
    <template #dropdown>
      <ap-dropdown-item
        v-for="(item, index) in list"
        :key="index"
        :active="isSame(item.value, select)"
        :disabled="item.value === 3"
        @click="changeSelect(item.value)"
      >
        <span>{{ item.label }}</span>
      </ap-dropdown-item>
    </template>
  </ap-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

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
</script>
