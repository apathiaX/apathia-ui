<template>
  <thead :class="styles.thead">
    <tr :class="headerRowClasses" :style="headerRowStyles">
      <th v-for="(col, index) in headerCols" :key="index" :class="{
        [styles.th]: true,
        [styles.fixed]: fixedHeader || col?.fixed,
        [styles.fixedHeader]: fixedHeader,
        [styles.fixedColumnLeft]: col?.fixed === 'left',
        [styles.fixedColumnRight]: col?.fixed === 'right',
        [styles.thBordered]: border,
        [col?.thAttrs.class]: true,
      }" :colspan="col?.thAttrs.colspan" :style="col?.thAttrs.style" scope="col">
        <Checkbox v-if="col?.type === 'selection'" :model-value="allSelected" :indeterminate="indeterminate"
          @update:modelValue="toggleAllSelected()" />
        <template v-else-if="col?.title">
          <CustomRender v-if="typeof col.title === 'function'" :render="col.title" />
          <span v-else>{{ col.title }}</span>
        </template>

        <TableSorter v-if="col?.sortable" :sort="sort" :prop="col?.prop || ''" @sortChange="handleColumnSortChange" />
      </th>
    </tr>
  </thead>
</template>

<script lang="tsx">
import { computed, defineComponent, PropType, inject } from 'vue'
import { style, css, apply } from '@apathia/apathia.twind'
import { CustomRender } from '@apathia/apathia.custom-render'
import { Checkbox } from '@apathia/apathia.checkbox'
import TableSorter from './TableSorter.vue'
import type {
  Column,
  Sorter,
  HeaderClassNamesGenerator,
  HeaderStylesGenerator,
  ClassNamesGenerator,
  StylesGenerator,
} from './types'
import type { TableMultiSelectedHelper } from './useTableSelected'
import { toStyleObject, toRealWidth } from './utils'

export default defineComponent({
  name: 'TableHeader',

  components: {
    CustomRender,
    TableSorter,
    Checkbox,
  },

  props: {
    columns: {
      type: Array as PropType<Column[]>,
      required: true,
    },
    border: {
      type: Boolean,
      default: false,
    },
    headerRowClassName: {
      type: Function as PropType<HeaderClassNamesGenerator>,
    },
    headerRowStyle: {
      type: Function as PropType<HeaderStylesGenerator>,
    },

    headerCellClassName: {
      type: Function as PropType<ClassNamesGenerator<{ colIndex: number }>>,
    },
    headerCellStyle: {
      type: Function as PropType<StylesGenerator<{ colIndex: number }>>,
    },

    sort: {
      type: Object as PropType<Sorter>,
      default: () => ({ sort: 'id', order: 'asc' }),
    },

    fixedHeader: {
      type: Boolean,
    },
  },

  emits: ['sort-change', 'check-all-change'],

  setup(props, { emit }) {
    const styles = getStyles()

    const { allSelected, toggleAllSelected, indeterminate } = inject(
      'TableMultiSelected',
    ) as TableMultiSelectedHelper

    const handleColumnSortChange = ({
      prop,
      order,
    }: {
      prop: string
      order: 'desc' | 'asc'
    }) => {
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
            console.warn(
              '[Table] 如果有排序，必须在prop字段中声明排序使用的字段',
            )
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

    return {
      styles,

      headerRowClasses,
      headerRowStyles,
      headerCols,
      allSelected,
      indeterminate,

      handleColumnSortChange,
      toggleAllSelected,
    }
  },
})

const getStyles = () => {
  const borderRight = css`
    border-right: 1px solid rgb(0 0 0 / 12%);
  `
  const borderLeft = css`
    border-left: 1px solid rgb(0 0 0 / 12%);
  `

  return {
    headerWrap: style`overflow-hidden`,
    thead: style`bg-fill-light`,
    th: style`text(left content-accent) text-sm font-normal px-2 py-3 border-dashed border bg-fill-gray tracking-wider break-words box-border leading-normal ${css`
      ${apply('border-fill-gray')};
      border-width: 1px 1px 1px 0;
      border-style: solid;
      &:first-child {
        border-left-width: 1px;
      }
    `}`,
    thBordered: style`border-line-accent`,
    fixed: style`sticky`,
    fixedHeader: style`top-0`,
    fixedColumnLeft: style`left-0 ${borderRight}`,
    fixedColumnRight: style`right-0 ${borderLeft}`,
  }
}
</script>
