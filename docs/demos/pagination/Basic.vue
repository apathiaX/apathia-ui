<template>
  <p>当前在第{{ paginationOptions.currentPage }}页</p>
  <ap-pagination :options="paginationOptions" @page-change="pageChange" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const paginationOptions = reactive({
  currentPage: 1,
  totalItems: 33,
  pageSize: 10,
  jumpPage: true,
})

const pageChange = page => {
  paginationOptions.currentPage = page
}
</script>
