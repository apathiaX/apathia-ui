<template>
  <colgroup>
    <col v-for="(item, index) in colsProp" :key="index" v-bind="item" />
  </colgroup>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import type { Column } from './types'

interface ColProp {
  style?: string
  colspan?: string
  align?: string
}

export default defineComponent({
  name: 'ColGroup',

  props: {
    cols: {
      type: Array as PropType<Column[]>,
      required: true,
    },
  },

  setup(props) {
    const colsProp = computed(() =>
      props.cols.map(col => {
        const res = {} as ColProp
        if (col.width !== undefined) {
          res.style = `width: ${col.width}px; min-width: ${col.width}px`
        }
        if (col.colSpan) res.colspan = `${col.colSpan}`
        if (col.align) res.align = col.align
        return res
      }),
    )

    return {
      colsProp,
    }
  },
})
</script>
