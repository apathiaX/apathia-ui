<template>
  <div class="button-wrapper">
    <div class="button-row">
      <ap-button disabled>default</ap-button>
      <ap-button primary disabled>primary</ap-button>
      <ap-button success disabled>success</ap-button>
      <ap-button danger disabled>danger</ap-button>
      <ap-button info disabled>info</ap-button>
      <ap-button warning disabled>warning</ap-button>
    </div>
    <div class="button-row">
      <ap-button plain disabled>plain</ap-button>
      <ap-button primary plain disabled>primary</ap-button>
      <ap-button success plain disabled>success</ap-button>
      <ap-button danger plain disabled>danger</ap-button>
      <ap-button info plain disabled>info</ap-button>
      <ap-button warning plain disabled>warning</ap-button>
    </div>
    <div class="button-row">
      <ap-button text disabled>text</ap-button>
      <ap-button primary text disabled>primary</ap-button>
      <ap-button success text disabled>success</ap-button>
      <ap-button danger text disabled>danger</ap-button>
      <ap-button info text disabled>info</ap-button>
      <ap-button warning text disabled>warning</ap-button>
    </div>
    <div class="button-row">
      <ap-button disabled :href="link">default</ap-button>
      <ap-button disabled primary :href="link">primary</ap-button>
      <ap-button disabled success :href="link">success</ap-button>
      <ap-button disabled danger :href="link">danger</ap-button>
      <ap-button disabled info :href="link">info</ap-button>
      <ap-button disabled warning :href="link">warning</ap-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const link = 'http://www.baidu.com'
</script>

<style scoped>
.button-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.button-row {
  display: flex;
  gap: 10px;
}
</style>
