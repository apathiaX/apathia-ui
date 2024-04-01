<template>
  <div :class="styles.stopWrap">
    <div
      v-for="(count, index) in stepCount + 1"
      :key="index"
      :class="styles.stop"
      :style="{
        [vertical ? 'bottom' : 'left']: `${(1 / stepCount) * index * 100}%`,
      }"
    >
      <span
        :class="styles.stopText"
        :style="(marks[getValueByStep(count - 1)] || {}).style"
      >
        {{ (marks[getValueByStep(count - 1)] || {}).label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import type { StopProps } from './types'
import { getComputedStyle } from '@apathia/theme'
import { getStopStyles } from './slider'

defineOptions({
  name: 'ApSliderStop',
})

const props = withDefaults(defineProps<StopProps>(), {
  marks: () => ({}),
})

const stepCount = computed(() => (props.max - props.min) / props.step)
const getValueByStep = (s: number) => props.min + props.step * s

const styles = getComputedStyle({ vertical: props.vertical }, getStopStyles)
</script>
