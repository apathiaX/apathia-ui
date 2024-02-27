<script setup lang="ts">
import { defineComponent, onMounted, withDefaults } from 'vue'
import type { AlertType } from './types'
import { style, apply, tw } from '@apathia/theme'
import { RenderFn, CustomRender } from '@apathia/shared'
import { ApIcon } from '@apathia/components/icon'
import {
  CircleCloseFilled,
  InfoFilled,
  SuccessFilled,
  WarningFilled,
  Notification,
} from '@apathia/icons-vue'

defineOptions({
  name: 'ApAlert',
})

interface AlertProps {
  type?: AlertType
  duration?: number
  title?: string
  message?: string
  showIcon?: boolean
  showClose?: boolean
  render?: RenderFn<Record<'close', (...args: any) => any>>
}

const iconMap: Record<AlertType, ReturnType<typeof defineComponent>> = {
  info: InfoFilled,
  warning: WarningFilled,
  success: SuccessFilled,
  danger: CircleCloseFilled,
  default: Notification,
}

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'default',
  duration: 3000,
  title: '',
  message: '',
  showIcon: true,
  showClose: true,
})

const emit = defineEmits(['close'])

function initAlertStyle(type: AlertType) {
  const Theme = {
    info: {
      layout: style`bg-fill-light text-fill-primary`,
    },
    danger: {
      layout: style`bg-error-light text-error-primary`,
    },
    success: {
      layout: style`bg-success-light text-success-primary`,
    },
    warning: {
      layout: style`bg-warning-light text-warning-primary`,
    },
    default: {
      layout: style`bg-brand-light text-brand-primary`,
    },
  }

  const theme = Theme[type] || Theme.default
  const layout = tw`${
    theme.layout
  } ${apply`p-2.5 rounded flex mt-2 duration-300`}`
  const iconWrap = style`flex-shrink-0 w-4 mr-3 mt-0.5`
  const delIcon = style`ml-2 cursor-pointer hover:(text-error-active)`
  const contentClass = style`inline-block font-normal flex-grow break-all`
  const titleClass = style`text-lg`
  const messageClass = style`text-xs leading-normal`

  return {
    layout,
    iconWrap,
    delIcon,
    contentClass,
    titleClass,
    messageClass,
  }
}

const { layout, iconWrap, delIcon, contentClass, titleClass, messageClass } =
  initAlertStyle(props.type)
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
  <div :class="layout" @mouseenter="clearTimer" @mouseleave="resetTimer">
    <template v-if="!render">
      <div v-if="showIcon" :class="iconWrap">
        <slot name="icon">
          <ApIcon :size="20">
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
      <span v-if="showClose" :class="delIcon" @click="close"> ✕ </span>
    </template>
    <template v-else>
      <CustomRender :render="() => render && render({ close })" />
    </template>
  </div>
</template>
