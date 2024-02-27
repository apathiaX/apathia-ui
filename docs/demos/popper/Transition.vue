<template>
  <ap-popper
    placement="bottom"
    dark
    :transition-class="getStyles()"
    :delay-close="1000"
  >
    <ap-button>Click</ap-button>
    <template #content>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
    </template>
  </ap-popper>
</template>

<script lang="ts" setup>
import { css, apply, tw } from 'apathia-ui'

const getStyles = () => {
  const placementTransition = css`
    ${apply`transform scale-y-100 opacity-100`}
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
    &[data-popper-placement^='top'] {
      transform-origin: center bottom;
    }
  `
  const active = tw`${apply(placementTransition)}`
  const state = tw`opacity-0 transform scale-y-0`
  return {
    'enter-active-class': active,
    'leave-active-class': active,
    'enter-from-class': state,
    'leave-to-class': state,
  }
}
</script>
