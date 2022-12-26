<template>
  <Slider
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

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

type Marker = Record<
  number,
  Partial<{ label: string; style: Record<string, any> }>
>
 export default defineComponent({
  setup() {
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

    return {
      verticalSteps,
      marks
    }
  }
 })
</script>
