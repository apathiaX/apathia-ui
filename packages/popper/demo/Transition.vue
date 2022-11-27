<template>
  <Popper
    placement="bottom"
    dark
    :transition-class="getStyles()"
    :delay-close="1000"
  >
    <BaseButton>Click</BaseButton>
    <template #content>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
    </template>
  </Popper>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const { css, tw, apply } = proxy.cssInJs // 不用全局绑定，import上面的注释
const getStyles = () => {
  const placementTranstion = css`
    ${apply`transform scale-y-100 opacity-100`}
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
    &[data-popper-placement^='top'] {
      transform-origin: center bottom;
    }
  `
  const active = tw`${apply(placementTranstion)}`
  const state = tw`opacity-0 transform scale-y-0`
  return {
    'enter-active-class': active,
    'leave-active-class': active,
    'enter-from-class': state,
    'leave-to-class': state,
  }
}
</script>
