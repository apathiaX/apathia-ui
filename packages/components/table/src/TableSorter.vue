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
import { ApIcon } from '@apathia/components/icon'
import type { TableSortEmits, TableSortProps } from './types'
import { SortUp, SortDown } from '@apathia/icons-vue'
import { getSortStyles } from './table'

defineOptions({
  name: 'ApTableSorter',
})

const props = defineProps<TableSortProps>()

const emit = defineEmits<TableSortEmits>()

const styles = getSortStyles()
const active = computed(() => props.prop === props.sort.prop)

function sortChange() {
  const newOrder = active.value && props.sort.order === 'desc' ? 'asc' : 'desc'
  emit('sort-change', { prop: props.prop, order: newOrder })
}
</script>
