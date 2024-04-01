<template>
  <thead :class="styles.thead">
    <tr :class="headerRowClasses" :style="headerRowStyles">
      <th
        v-for="(col, index) in headerCols"
        :key="index"
        :class="{
          [styles.th]: true,
          [styles.fixed]: fixedHeader || col?.fixed,
          [styles.fixedHeader]: fixedHeader,
          [styles.fixedColumnLeft]: col?.fixed === 'left',
          [styles.fixedColumnRight]: col?.fixed === 'right',
          [styles.thBordered]: border,
          [col?.thAttrs.class!]: true,
        }"
        :colspan="col?.thAttrs.colspan"
        :style="col?.thAttrs.style"
        scope="col"
      >
        <ApCheckbox
          v-if="col?.type === 'selection'"
          :model-value="allSelected"
          :indeterminate="indeterminate"
          @update:modelValue="toggleAllSelected()"
        />
        <template v-else-if="col?.title">
          <CustomRender
            v-if="typeof col.title === 'function'"
            :render="col.title"
          />
          <span v-else>{{ col.title }}</span>
        </template>

        <ApTableSorter
          v-if="col?.sortable"
          :sort="sort"
          :prop="col?.prop || ''"
          @sortChange="handleColumnSortChange"
        />
      </th>
    </tr>
  </thead>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { CustomRender } from '@apathia/shared'
import { ApCheckbox } from '@apathia/components/checkbox'
import ApTableSorter from './TableSorter.vue'
import type {
  TableSorterType,
  TableMultiSelectedHelper,
  TableHeaderProps,
  TableHeaderEmits,
} from './types'
import { toStyleObject, toRealWidth } from './utils'
import { getTableHeaderStyles } from './table'

const props = withDefaults(defineProps<TableHeaderProps>(), {
  border: false,
  fixedHeader: false,
  sort: () => ({ prop: 'id', order: 'asc' }),
})

const emit = defineEmits<TableHeaderEmits>()

const styles = getTableHeaderStyles()

const { allSelected, toggleAllSelected, indeterminate } = inject(
  'TableMultiSelected',
) as TableMultiSelectedHelper

const handleColumnSortChange = ({ prop, order }: TableSorterType) => {
  emit('sort-change', {
    prop,
    order,
  })
}

const headerRowClasses = props.headerRowClassName?.() || ''
const headerRowStyles = props.headerRowStyle?.()

const headerCols = computed(() =>
  props.columns
    .map((column, colIndex) => {
      const { width, align = 'center', colSpan, fixed } = column

      if (colSpan === 0) return null

      if ('sortable' in column && column.sortable && !column.prop) {
        console.warn('[Table] 如果有排序，必须在prop字段中声明排序使用的字段')
        return null
      }

      const cellClassNames = props.headerCellClassName?.({ colIndex }) || ''
      const cellStyles = {
        ...toStyleObject(props.headerCellStyle?.({ colIndex })),
        width: toRealWidth(width),
        textAlign: align,
        zIndex:
          fixed && props.fixedHeader
            ? 30
            : fixed && !props.fixedHeader
            ? 20
            : !fixed && props.fixedHeader
            ? 10
            : 0,
      }

      return {
        ...column,
        thAttrs: {
          class: cellClassNames,
          colspan: colSpan,
          style: cellStyles,
        },
      }
    })
    .filter(v => v !== null),
)
</script>
