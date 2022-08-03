<template>
  <div :class="styles.container">
    <h2 v-if="props.title" :class="styles.title">{{ props.title }}</h2>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import { tw, apply } from '@apathia/apathia'

interface Props {
  title?: string
}

const props = defineProps<Props>()

const styles = {
  container: tw`${apply`border border rounded-md border-gray-300 p-4 m-5 hover:(shadow-md)`}`,
  title: tw`${apply`text-lg font-semibold font-sans text-gray-900 mb-2`}`,
}
</script>
