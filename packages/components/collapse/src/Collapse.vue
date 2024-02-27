<template>
  <slot name="toggleHeader" :show="show" :toggle-show="toggleShow">
    <div
      :class="[styles.headerClass, disabled ? styles.headerDisableClass : '']"
      @click="handleClick"
    >
      <span
        v-if="showArrow"
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
import CollapseTransition from './CollapseTransition'
import { ArrowRight } from '@apathia/icons-vue'
import { getCollapseStyle } from './collapse'
import type { CollapseProps } from './types'

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
const styles = getCollapseStyle()

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
