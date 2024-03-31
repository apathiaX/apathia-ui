<template>
  <ap-popper placement="right" trigger="hover" :show-arrow="false">
    <ap-button plain>Click</ap-button>
    <template #content>
      <div class="content">
        <div>是否确认删除？</div>
        <div>
          <ap-button primary small>确认</ap-button>
          <ap-button small>取消</ap-button>
        </div>
      </div>
    </template>
  </ap-popper>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
