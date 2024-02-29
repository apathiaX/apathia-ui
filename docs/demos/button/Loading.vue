<template>
  <div class="button-wrapper">
    <ap-button primary loading> 加载中 </ap-button>
    <ap-button primary loading>
      <template #loading>
        <Loading />
      </template>
      加载中
    </ap-button>
  </div>
</template>

<style scoped>
.button-wrapper {
  display: flex;
  gap: 20px;
}
</style>
