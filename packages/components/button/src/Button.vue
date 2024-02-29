<template>
  <component
    v-bind="{ ...getButtonProps() }"
    :is="tagType"
    :class="btnClass"
    :href="href"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <ap-icon v-else :class="loadingClass">
        <component v-if="loadingIcon" :is="loadingIcon"></component>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            style="opacity: 0.25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            style="opacity: 0.75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </ap-icon>
    </template>
    <ap-icon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </ap-icon>
    <span v-if="$slots.default" :class="loading || icon ? iconTextClass : ''">
      <slot></slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { ApIcon } from '@apathia/components'
import useBaseButton from './useButton'
import type { ButtonProps } from './types'

defineOptions({
  name: 'ApButton',
})

const props = defineProps<ButtonProps>()

const { getButtonProps, btnClass, tagType, loadingClass, iconTextClass } =
  useBaseButton(props)
</script>
