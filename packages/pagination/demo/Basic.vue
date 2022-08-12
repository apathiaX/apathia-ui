<template>
  <Pagination :options="paginationOptions" @page-change="pageChange" />

  <p>当前在第{{ paginationOptions.currentPage }}页</p>
</template>

<script>
import { reactive, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const paginationOptions = reactive({
      currentPage: 1,
      totalItems: 53,
      pageSize: 10,
      jumpPage: true,
    })

    const pageChange = page => {
      paginationOptions.currentPage = page
    }

    return {
      paginationOptions,
      pageChange,
    }
  },
})
</script>
