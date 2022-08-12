<template>
  <nav :class="styles.wrapper">
    <ul :class="styles.ul">
      <li
        v-if="innerOptions.boundaryBtns"
        :class="{
          [styles.item]: true,
          [styles.first]: true,
          [styles.itemDisabled]: innerOptions.currentPage === 1,
        }"
        @click="selectPage(1)"
      >
        {{ innerOptions.firstText }}
      </li>
      <li
        v-if="innerOptions.directionBtns"
        :class="{
          [styles.item]: true,
          [styles.prev]: true,
          [styles.itemDisabled]: innerOptions.currentPage === 1,
        }"
        @click="selectPage(innerOptions.currentPage - 1)"
      >
        {{ innerOptions.previousText }}
      </li>
      <li
        v-for="(page, index) in pages"
        :key="index"
        :ref="setPageBtnRef"
        :class="{
          [styles.item]: true,
          [styles.numberBtn]: true,
          [styles.active]: page.number === innerOptions.currentPage,
        }"
        @click="selectPage(page.number)"
      >
        {{ page.text }}
      </li>

      <li
        v-if="innerOptions.directionBtns"
        :class="{
          [styles.item]: true,
          [styles.next]: true,
          [styles.itemDisabled]:
            innerOptions.currentPage === totalPages ||
            innerOptions.totalItems === 0,
        }"
        @click="selectPage(innerOptions.currentPage + 1)"
      >
        {{ innerOptions.nextText }}
      </li>
      <li
        v-if="innerOptions.boundaryBtns"
        :class="{
          [styles.item]: true,
          [styles.last]: true,
          [styles.itemDisabled]:
            innerOptions.currentPage === totalPages ||
            innerOptions.totalItems === 0,
        }"
        @click="selectPage(totalPages)"
      >
        {{ innerOptions.lastText }}
      </li>

      <li v-if="innerOptions.totalCount" :class="styles.count">
        <slot name="total" :totalItems="totalItems" :totalPages="totalPages">
          共 {{ totalItems }} 条数据
        </slot>
      </li>
      <li
        v-if="innerOptions.jumpPage"
        :class="{
          [styles.jump]: true,
        }"
      >
        <input
          v-model="jumpTo"
          :class="{
            [styles.jumpInput]: true,
          }"
          @keyup.enter="selectPage(jumpTo)"
        />
        <span
          :class="{
            [styles.jumpBtn]: true,
          }"
          @click="selectPage(jumpTo)"
        >
          跳页
        </span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { style } from '@apathia/apathia.twind'
import { usePagination } from './usePagination'

export default defineComponent({
  name: 'Pagination',

  props: {
    options: {
      type: Object,
      required: true,
    },
  },

  emits: ['page-change'],

  setup(props, ctx) {
    const options = computed(() => ({ ...props.options }))

    const userProps = {
      options,
    }

    const {
      jumpTo,
      pages,
      totalPages,
      totalItems,
      selectPage,
      setPageBtnRef,
      innerOptions,
    } = usePagination(userProps, ctx)

    const styles = {
      wrapper: style`relative bg-white py-3 flex items-center justify-between`,
      ul: style`relative z-0 inline-flex items-center -space-x-px text-sm font-medium`,

      item: style`relative inline-flex px-2 py-2 border border-gray-300 bg-white text-gray-700 
      cursor-pointer select-none hover:bg-brand-500 hover:text-white`,

      first: style`rounded-l-md flex-shrink-0`,
      last: style`rounded-r-md flex-shrink-0`,
      prev: style`flex-shrink-0`,
      next: style`flex-shrink-0`,
      active: style`text-white bg-brand-500 border-brand-300 outline-none`,
      itemDisabled: style`cursor-not-allowed pointer-events-none text-gray-500 bg-gray-100 border-gray-300`,
      numberBtn: style`outline-none px-4 py-2`,
      jump: style`relative z-0 inline-flex items-center -space-x-px text-sm font-medium border border-gray-300 rounded-md`,
      jumpInput: style`outline-none text-center w-14 py-2 border-0 text-brand-500 rounded-l-md`,
      jumpBtn: style`text-center w-14 py-2 border-0 bg-white text-gray-700 rounded-r-md
      cursor-pointer hover:bg-brand-500 hover:text-white`,
      count: style`px-4`,
    }

    return {
      jumpTo,
      pages,
      selectPage,
      setPageBtnRef,
      innerOptions,
      totalPages,
      totalItems,
      styles,
    }
  },
})
</script>
