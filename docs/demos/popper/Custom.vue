<template>
  <ap-popper placement="right" trigger="hover" :show-arrow="false">
    <ap-button plain>Click</ap-button>
    <template #content>
      <div>Custom Render Content</div>
      <div>
        <ap-button small>确认</ap-button>
        <ap-button info small>取消</ap-button>
      </div>
    </template>
  </ap-popper>
</template>
