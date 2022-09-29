<template>
  <Popper placement="left" trigger="hover" :show-arrow="false">
    <BaseButton>Click</BaseButton>
    <template #content>
      <div>Custom Render Content</div>
      <div>
        <BaseButton primary>确认</BaseButton>
        <BaseButton>取消</BaseButton>
      </div>
    </template>
  </Popper>
</template>
