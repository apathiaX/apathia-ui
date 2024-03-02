<script setup lang="ts">
import { computed, onMounted, withDefaults } from 'vue'
import type { AlertProps } from './types'
import { CustomRender } from '@apathia/shared'
import { ApIcon } from '@apathia/components/icon'
import { getAlertStyle, iconMap } from './alert'

defineOptions({
  name: 'ApAlert',
})

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  duration: 3000,
  title: '',
  message: '',
  effect: 'light',
  showIcon: false,
  showClose: false,
})

const emit = defineEmits(['close'])

const {
  layout,
  iconWrap,
  delIcon,
  contentClass,
  titleClass,
  messageClass,
  colorStyle,
} = getAlertStyle()

const layoutStyle = computed(() => {
  const effect = props.effect || 'light'
  return `${colorStyle[effect][props.type]} ${layout}`
})
let timer: any

function close() {
  clearTimer()
  emit('close')
}
function clearTimer() {
  clearTimeout(timer)
}
function resetTimer() {
  if (props.duration) {
    clearTimer()
    timer = setTimeout(close, props.duration)
  }
}

onMounted(resetTimer)
</script>

<template>
  <div :class="layoutStyle" @mouseenter="clearTimer" @mouseleave="resetTimer">
    <template v-if="!render">
      <div v-if="showIcon" :class="iconWrap">
        <slot name="icon">
          <ApIcon :size="title ? 24 : 16">
            <component :is="iconMap[type]" />
          </ApIcon>
        </slot>
      </div>
      <div :class="contentClass">
        <p v-if="title" :class="titleClass">
          {{ title }}
        </p>
        <p v-if="message" :class="messageClass">
          {{ message }}
        </p>
      </div>
      <span v-if="showClose" :class="delIcon[effect]" @click="close">
        <slot name="close">✕</slot>
      </span>
    </template>
    <template v-else>
      <CustomRender :render="() => render && render({ close })" />
    </template>
  </div>
</template>
