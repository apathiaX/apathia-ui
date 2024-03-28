<template>
  <slot name="toggleHeader" :show="show" :toggle-show="toggleShow">
    <div :class="styles.header" @click="handleClick">
      <span
        v-if="showArrow"
        :class="styles.arrow"
        :style="{ transform: `rotate(${show ? 90 : 0}deg)` }"
      >
        <ApIcon :class="styles.icon">
          <ArrowRight />
        </ApIcon>
      </span>
      <slot name="header">
        <div>{{ header }}</div>
      </slot>
    </div>
  </slot>
  <CollapseTransition :duration="duration">
    <div v-show="show">
      <slot></slot>
    </div>
  </CollapseTransition>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { ApIcon } from '@apathia/components/icon'
import { useToggle } from '@apathia/shared'
import { getComputedStyle } from '@apathia/theme'
import { getCollapseStyle } from './collapse'
import CollapseTransition from './CollapseTransition'
import type { CollapseProps } from './types'
import ArrowRight from '../icon/Arrow.vue'

defineOptions({
  name: 'ApCollapse',
})

const props = withDefaults(defineProps<CollapseProps>(), {
  expand: true,
  duration: 400,
  header: 'header',
  showArrow: true,
  disabled: false,
})

const [show, toggleShow, setShow] = useToggle(props.expand)
const styles = getComputedStyle(
  {
    disabled: props.disabled,
  },
  getCollapseStyle,
)

watch(
  () => props.expand,
  (val: boolean) => setShow(val),
)

const handleClick = () => {
  if (!props.disabled) {
    toggleShow()
  }
}
</script>
