<template>
  <div :class="styles.container">
    <h2 v-if="props.title" :class="styles.title">{{ props.title }}</h2>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { tw, apply } from 'apathia-ui'

interface Props {
  title?: string
}

const props = defineProps<Props>()

const styles = {
  container: tw`${apply`border border rounded border-line-accent p-4 m-5 hover:(shadow)`}`,
  title: tw`${apply`text-lg font-semibold font-sans text-content-primary mb-2`}`,
}
</script>
