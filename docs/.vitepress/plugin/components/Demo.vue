<template>
  <slot name="description"></slot>
  <vue-live
    :code="demoCode"
    :layout="Layout"
    :requires="{
      'apathia-ui': ApathiaUI,
      '@apathia/icons-vue': ApathiaIcon,
    }"
    :layout-props="{
      ...demoProps,
      resetCode: handleResetCode,
    }"
    jsx
  />
</template>

<script setup lang="ts">
import * as ApathiaUI from 'apathia-ui'
import * as ApathiaIcon from '@apathia/icons-vue'
import { VueLive } from 'vue-live'
import Layout from './Layout.vue'
import { ref } from 'vue'

const demoProps = defineProps<{
  customClass: string
  lang: string
  code: string
}>()

const originCode = decodeURIComponent(demoProps.code)
  .replace(/<ClientOnly>/g, '')
  .replace(/<\/ClientOnly>/g, '')

const demoCode = ref(
  decodeURIComponent(demoProps.code)
    .replace(/<ClientOnly>/g, '')
    .replace(/<\/ClientOnly>/g, ''),
)

const handleResetCode = () => {
  demoCode.value = originCode + ' '
}
</script>
