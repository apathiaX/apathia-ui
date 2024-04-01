<template>
  <nav :class="styles.wrapper">
    <div :class="styles.container">
      <div v-if="innerOptions.totalCount" :class="styles.count">
        <slot name="total" :totalItems="totalItems" :totalPages="totalPages">
          共 {{ totalItems }} 条数据
        </slot>
      </div>
      <div
        v-if="innerOptions.boundaryBtn"
        :class="{
          [styles.item]: true,
          [styles.disabled]: innerOptions.currentPage === 1,
        }"
        @click="selectPage(1)"
      >
        {{ innerOptions.firstText }}
      </div>
      <div
        v-if="innerOptions.directionBtn"
        :class="{
          [styles.item]: true,
          [styles.disabled]: innerOptions.currentPage === 1,
        }"
        @click="selectPage(innerOptions.currentPage - 1)"
      >
        {{ innerOptions.previousText }}
      </div>
      <div
        v-for="(page, index) in pages"
        :key="index"
        :ref="(el) => setPageBtnRef(el as HTMLLIElement)"
        :class="{
          [styles.item]: true,
          [styles.numberBtn]: true,
          [styles.active]: page.number === innerOptions.currentPage,
        }"
        @click="selectPage(page.number)"
      >
        {{ page.text }}
      </div>

      <div
        v-if="innerOptions.directionBtn"
        :class="{
          [styles.item]: true,
          [styles.disabled]:
            innerOptions.currentPage === totalPages ||
            innerOptions.totalItems === 0,
        }"
        @click="selectPage(innerOptions.currentPage + 1)"
      >
        {{ innerOptions.nextText }}
      </div>
      <div
        v-if="innerOptions.boundaryBtn"
        :class="{
          [styles.item]: true,
          [styles.disabled]:
            innerOptions.currentPage === totalPages ||
            innerOptions.totalItems === 0,
        }"
        @click="selectPage(totalPages)"
      >
        {{ innerOptions.lastText }}
      </div>

      <div v-if="innerOptions.jumpPage" :class="styles.jumpContainer">
        <input
          v-model="jumpTo"
          :class="styles.jumpInput"
          @keyup.enter="selectPage(jumpTo)"
        />
        <span :class="styles.pages">/ {{ totalPages }}</span>
        <span :class="styles.jumpBtn" @click="selectPage(jumpTo)"> 跳页 </span>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { usePagination } from './usePagination'
import type { PaginationProps, PaginationEmits } from './types'
import { getPaginationStyles } from './pagination'

defineOptions({
  name: 'ApPagination',
})

const props = defineProps<PaginationProps>()

const emit = defineEmits<PaginationEmits>()

const {
  jumpTo,
  pages,
  totalPages,
  totalItems,
  selectPage,
  setPageBtnRef,
  innerOptions,
} = usePagination(props, emit)

const styles = getPaginationStyles()
</script>
