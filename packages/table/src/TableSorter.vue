<template>
  <span :class="styles.arrowWrap">
    <span
      :class="{
        [styles.arrow]: true,
        [styles.active]: active,
      }"
      @click="sortChange"
    >
      <Icon
        :name="[
          'fa',
          sort.order === 'asc' ? 'sort-amount-up' : 'sort-amount-down',
        ]"
      />
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
// @ts-ignore
import { style } from '@apathia/apathia.twind'
// @ts-ignore
import { Icon } from '@apathia/apathia.icon'
import type { Sorter } from './types'

export default defineComponent({
  name: 'GridSorter',

  components: {
    Icon,
  },

  props: {
    sort: {
      type: Object as PropType<Sorter>,
      required: true,
    },
    prop: {
      type: String as PropType<string>,
      required: true,
    },
  },

  emits: ['sort-change'],

  setup(props, { emit }) {
    const styles = getStyles()
    const active = computed(() => props.prop === props.sort.prop)

    function sortChange() {
      const newOrder =
        active.value && props.sort.order === 'desc' ? 'asc' : 'desc'
      emit('sort-change', { prop: props.prop, order: newOrder })
    }
    return {
      styles,
      active,
      sortChange,
    }
  },
})

const getStyles = () => ({
  arrowWrap: style`ml-1`,
  arrow: style`text-gray-300 cursor-pointer h-3`,
  arrowUp: style`-mb-px`,
  arrowDown: style`-mt-px`,
  active: style`text-gray-700`,
})
</script>
