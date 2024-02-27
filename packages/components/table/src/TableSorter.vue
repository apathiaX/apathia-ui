<template>
  <span :class="styles.arrowWrap">
    <span
      :class="{
        [styles.arrow]: true,
        [styles.active]: active,
      }"
      @click="sortChange"
    >
      <ApIcon :size="14">
        <SortUp v-if="sort.order === 'asc'" />
        <SortDown v-else />
      </ApIcon>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { style } from '@apathia/theme'
import { ApIcon } from '@apathia/components/icon'
import type { TableSortEmits, TableSortProps } from './types'
import { SortUp, SortDown } from '@apathia/icons-vue'

defineOptions({
  name: 'ApTableSorter',
})

const props = defineProps<TableSortProps>()

const emit = defineEmits<TableSortEmits>()

const getStyles = () => ({
  arrowWrap: style`inline-block pl-px align-middle`,
  arrow: style`text-content-neutral cursor-pointer`,
  arrowIcon: style`h-3.5 w-3.5 align-middle`,
  active: style`text-content-accent`,
})
const styles = getStyles()
const active = computed(() => props.prop === props.sort.prop)

function sortChange() {
  const newOrder = active.value && props.sort.order === 'desc' ? 'asc' : 'desc'
  emit('sort-change', { prop: props.prop, order: newOrder })
}
</script>
./types
