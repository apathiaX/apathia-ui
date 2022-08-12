<template>
  <div
    ref="containerRef"
    :class="styles.container"
    :style="{
      'max-height': fixedHeader ? `${height}px` : 'auto',
    }"
  >
    <ColGroup :cols="realColumns" />

    <table :class="styles.table" :style="tableStyle" v-bind="$attrs">
      <TableHeader
        v-if="showHeader"
        :columns="realColumns"
        :border="border"
        :header-row-class-name="headerRowClassName"
        :header-row-style="headerRowStyle"
        :header-cell-class-name="headerCellClassName"
        :header-cell-style="headerCellStyle"
        :sort="sort"
        :fixed-header="fixedHeader"
        @sortChange="$emit('sort-change', $event)"
      />

      <template v-if="data.length === 0 || loading">
        <tbody>
          <tr style="height: 55px; text-align: center">
            <td :colspan="realColumns.length">
              <template v-if="loading">
                <slot name="loading">
                  <Loading />
                </slot>
              </template>
              <template v-else-if="data.length === 0">
                <slot name="empty">
                  <p>没有数据</p>
                </slot>
              </template>
            </td>
          </tr>
        </tbody>
      </template>

      <TableBody
        v-if="data.length && !loading && showData"
        :columns="realColumns"
        :data="data"
        :border="border"
        :stripe="stripe"
        :row-class-name="rowClassName"
        :row-style="rowStyle"
        :cell-class-name="cellClassName"
        :cell-style="cellStyle"
        :cell-span="cellSpan"
        :current="currentId"
        :highlight-current-row="highlightCurrentRow"
        :row-key="rowKey"
        :expand="expand"
        @currentChange="onCurrentChange"
      />
    </table>
  </div>
</template>

<script lang="ts">
import {
  watch,
  computed,
  defineComponent,
  PropType,
  SetupContext,
  provide,
  toRefs,
} from 'vue'
import { style, css } from '@apathia/apathia.twind'
import { Loading } from '@apathia/apathia.loading'
import TableHeader from './TableHeader.vue'
import TableBody from './TableBody.vue'
import { useTableColumns } from './columns'
import { useTableSelected } from './useTableSelected'
import ColGroup from './Colgroup.vue'
import type {
  Column,
  Pagination,
  Sorter,
  HeaderClassNamesGenerator,
  HeaderStylesGenerator,
  ClassNamesGenerator,
  StylesGenerator,
  Expander,
  DataItem,
} from './types'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default defineComponent({
  name: 'Table',

  components: {
    TableHeader,
    TableBody,
    ColGroup,
    Loading,
  },

  props: {
    data: {
      type: Array as PropType<DataItem[]>,
      required: true,
    },
    columns: {
      type: Array as PropType<Column[]>,
      required: true,
    },
    stripe: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },

    /* -- 自定义样式 -- */
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

    rowClassName: {
      type: Function as PropType<
        ClassNamesGenerator<{ row: DataItem; rowIndex: number }>
      >,
    },
    rowStyle: {
      type: Function as PropType<
        StylesGenerator<{ row: DataItem; rowIndex: number }>
      >,
    },

    cellClassName: {
      type: Function as PropType<
        ClassNamesGenerator<{
          row: DataItem
          col: Column
          colIndex: number
          rowIndex: number
        }>
      >,
    },
    cellStyle: {
      type: Function as PropType<
        StylesGenerator<{
          row: DataItem
          col: Column
          colIndex: number
          rowIndex: number
        }>
      >,
    },
    /* -- 自定义样式 -- */

    cellSpan: {
      type: Function as PropType<
        (c: {
          row: DataItem
          col: Column
          rowIndex: number
          colIndex: number
        }) => [number, number]
      >,
      default: () => [1, 1],
    },

    height: {
      type: Number,
    },

    pagination: {
      type: Object as PropType<Pagination>,
      default: () => ({}),
    },

    /* -- UI trigger -- */
    showHeader: {
      type: Boolean,
      default: true,
    },
    showData: {
      type: Boolean,
      default: true,
    },
    showPagination: {
      type: Boolean,
      default: true,
    },
    /* -- UI trigger -- */

    // 排序key
    rowKey: {
      type: String,
      default: 'id',
    },
    highlightCurrentRow: {
      type: Boolean,
      default: true,
    },
    // 单选 item[rowKey]
    current: {
      type: [String, Number],
      default: -1,
    },
    // 单选
    currentSelected: {
      type: Object,
      default: null,
    },
    // 多选
    selected: {
      type: Array as PropType<unknown> as PropType<DataItem[]>,
      default: () => [],
    },
    selectedKeys: {
      type: Array as PropType<unknown> as PropType<Array<number | string>>,
      default: () => [],
    },

    /* 排序 */
    sort: {
      type: Object as PropType<Sorter>,
      default: () => ({}),
    },
    /* 排序 */

    expand: {
      type: Object as PropType<Expander>,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
    },
    scroll: {
      type: Object as PropType<Partial<{ width: number; height: number }>>,
      default: () => ({}),
    },
  },

  emits: [
    'update:selected',
    'update:selectedKeys',
    'update:current',
    'update:currentSelected',
    'sort-change',
  ],

  setup(props, ctx) {
    const styles = getStyles()

    const currentId = computed(() =>
      props.currentSelected
        ? props.currentSelected[props.rowKey]
        : props.current,
    )

    // 多选
    const { data, selected, selectedKeys, rowKey, columns } = toRefs(props)
    const tableMultiSelected = useTableSelected(
      data,
      selectedKeys,
      selected,
      rowKey,
      columns,
      ctx as SetupContext<Array<'update:selected' | 'update:selectedKeys'>>,
    )

    const tableStyle = computed(() => ({
      minWidth: props.scroll.width ? `${props.scroll.width}px` : '',
      minHeight: props.scroll.height ? `${props.scroll.height}px` : '',
    }))

    provide('TableMultiSelected', tableMultiSelected)

    const { containerRef, realColumns } = useTableColumns(props)
    const fixedHeader = computed(() => props.height !== 0)

    watch(
      () => props.data,
      () => {
        tableMultiSelected.selectedMap.value = {}
      },
    )

    function onCurrentChange(item: DataItem) {
      ctx.emit('update:current', item[rowKey.value])
      ctx.emit('update:currentSelected', item)
    }

    return {
      containerRef,
      realColumns,
      tableStyle,

      fixedHeader,

      styles,
      currentId,
      onCurrentChange,
      tableMultiSelected,
    }
  },
})

const getStyles = () => ({
  container: style`shadow relative overflow-auto border(b gray-300)`,
  table: style`min-w-full w-full table-fixed divide-y divide-gray-300 text(sm left) leading-normal rounded-sm box-border m-0 p-0 ${css(
    { 'border-collapse': 'separate', 'border-spacing': 0 },
  )}`,
})
</script>
