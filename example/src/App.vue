<script setup lang="ts">
import { tw, apply } from 'twind'
import { css } from 'twind/css'
import { computed, ref } from 'vue'
import demos from './demos'
// @ts-ignore
import { Select, Option } from '@apathia/apathia'
import * as apathia from '@apathia/apathia'

const name = ref<string>('Select')

const currentComponent = computed(() => {
  const comp = demos.find(d => d.name === name.value)
  return comp?.component
})

const getStyle = () => ({
  pageWrapper: tw`${apply`text-center my-10 w-40 ${css`
    margin: 2rem auto;
  `}`}`,
})

const styles = getStyle()
</script>

<template>
  <div>
    <h1>Apathia</h1>
  </div>
  <div :class="styles.pageWrapper">
    <Select v-model="name">
      <Option value="">请选择</Option>
      <Option v-for="item in demos" :key="item.name" :value="item.name">
        {{ item.name }}
      </Option>
    </Select>
  </div>
  <component :is="currentComponent" />
</template>

<style lang="scss" scoped></style>
