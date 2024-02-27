<template>
  <Pagination :options="paginationOptions" @page-change="pageChange" />

  <p>当前在第{{ paginationOptions.currentPage }}页</p>
</template>

<script setup>
import { reactive } from 'vue'
const paginationOptions = reactive({
  currentPage: 1,
  totalItems: 53,
  pageSize: 10,
  jumpPage: true,
})

const pageChange = page => {
  paginationOptions.currentPage = page
}
</script>
