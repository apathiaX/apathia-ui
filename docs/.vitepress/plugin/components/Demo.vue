<template>
  <slot name="description"></slot>
  <vue-live
    :code="demoCode"
    :layout="Layout"
    :requires="{
      'apathia-ui': ApathiaUI,
      '@apathia/icons-vue': ApathiaIcon,
      '@apathia/virtual-list': ApVirtualList,
      '@faker-js/faker': Faker,
      './Item.vue': Item,
      './100w.zip': data,
      jszip: JSZip,
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
import * as ApVirtualList from '@apathia/virtual-list'
import * as Faker from '@faker-js/faker'
import { VueLive } from 'vue-live'
import JSZip from 'jszip'
import Layout from './Layout.vue'
import { ref } from 'vue'
import Item from '../../../demos/virtualList/Item.vue'
// @ts-ignore
import data from '../../../demos/virtualList/100w.zip?url'

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

let updateFlag = false
const handleResetCode = () => {
  updateFlag = !updateFlag
  if (updateFlag) {
    demoCode.value = originCode + ' '
  } else {
    demoCode.value = originCode
  }
}
</script>
