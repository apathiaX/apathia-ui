<script lang="ts" setup>
import { useObserverItem } from '../hook/useObserver'
import { IObserverItemProps } from '../type'

const props = defineProps<IObserverItemProps>()

const { itemRefEl } = useObserverItem(props)
</script>

<template>
  <div ref="itemRefEl" :data-id="id">
    <slot></slot>
  </div>
</template>
