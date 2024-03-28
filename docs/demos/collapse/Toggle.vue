<template>
  <ap-collapse>
    <template #toggleHeader="{ show, toggleShow }">
      <div class="toggle-header" @click="toggleShow()">
        <div>点击展开</div>
        <ap-icon
          :style="{
            transform: `rotate(${show ? 90 : 0}deg)`,
            transition: 'all 400ms',
          }"
        >
          <ArrowRight />
        </ap-icon>
      </div>
    </template>
    <p>
      当你重新踏上旅途之后，一定要记得旅途本身的意义。提瓦特的飞鸟、诗和城邦，女皇、愚人和怪物……都是你旅途的一部分。终点并不意味着一切，在抵达终点之前，用你的眼睛，多多观察这个世界吧……
    </p>
  </ap-collapse>
</template>

<style scoped>
.toggle-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
  padding: 10px 0;
  cursor: pointer;
  color: #303133;
  font-size: 13px;
}
</style>
