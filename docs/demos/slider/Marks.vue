<template>
  <ap-slider
    v-model="verticalSteps"
    show-steps
    show-tooltip
    vertical
    :step="10"
    :max="100"
    :min="0"
    :height="500"
    :marks="marks"
  />
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { Marker } from 'apathia-ui'

const verticalSteps = ref<number>(0)
const marks = reactive<Marker>({
  100: {
    label: '满分',
    style: {
      color: 'red',
    },
  },
  50: {
    label: '一半',
    style: {
      color: 'green',
    },
  },
  40: {
    label: '40',
    style: {
      color: 'skyblue',
    },
  },
})
</script>
