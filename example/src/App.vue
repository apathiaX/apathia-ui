<script setup lang="ts">
import { tw, apply } from 'twind'
import { computed, onMounted, ref, watchEffect } from 'vue'
import demos from './demos'

const name = ref<string>(localStorage.getItem('component-name') || 'Select')

const currentComponent = computed(() => {
  const comp = demos.find(d => d.name === name.value)
  return comp?.component
})

const getStyle = () => ({
  contentWrap: tw`${apply`w-full h-screen flex flex-col`}`,
  pageWrapper: tw`${apply`text-center w-full p-2 mt-12 flex-1`}`,
  headTitle: tw`${apply`flex justify-center items-center gap-2`}`,
  headerIcon: tw`w-6 h-6`,
  pageHeader: tw`${apply`fixed flex justify-between items-center w-full px-5 py-2 font-bold text-xl  bg-fill-gray`}`,
})

watchEffect(() => {
  localStorage.setItem('component-name', name.value)
})

const styles = getStyle()
</script>

<template>
  <div :class="styles.contentWrap">
    <div :class="styles.pageHeader">
      <div :class="styles.headTitle">
        <img src="/logo.png" :class="styles.headerIcon" />
        <span>Playground</span>
      </div>
      <div>{{ name || '请选择组件' }}</div>
      <div>
        <ap-select v-model="name">
          <ap-option value="">请选择</ap-option>
          <ap-option v-for="item in demos" :key="item.name" :value="item.name">
            {{ item.name }}
          </ap-option>
        </ap-select>
      </div>
    </div>
    <div :class="styles.pageWrapper">
      <component :is="currentComponent" />
      <div v-if="!currentComponent">请选择组件</div>
    </div>
  </div>
</template>
