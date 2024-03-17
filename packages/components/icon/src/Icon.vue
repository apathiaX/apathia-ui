<template>
  <i :class="iconStyle" :style="styles()" v-bind="$attrs">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { isString } from '@apathia/shared'
import type { IconProps } from './types'
import { css, tw } from '@apathia/theme';

defineOptions({
  name: 'ApIcon',
  inheritAttrs: false,
})

const props = defineProps<IconProps>()

const styles = () => {
  if (!props.color && !props.size) return {}

  return {
    fontSize: props.size
      ? isString(props.size)
        ? props.size
        : `${props.size}px`
      : undefined,
    color: props.color || undefined,
    width: '1em',
    height: '1em',
  }
}

const iconStyle = tw(css`svg{ height: 1em; width: 1em; }`)
</script>
