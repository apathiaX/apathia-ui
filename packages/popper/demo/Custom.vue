<template>
  <Popper placement="right" trigger="hover" :show-arrow="false">
    <BaseButton plain>Click</BaseButton>
    <template #content>
      <div>Custom Render Content</div>
      <div>
        <BaseButton small>确认</BaseButton>
        <BaseButton info small>取消</BaseButton>
      </div>
    </template>
  </Popper>
</template>
