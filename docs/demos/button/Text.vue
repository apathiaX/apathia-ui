<template>
  <div class="button-wrapper">
    <div class="button-row">
      <ap-button text>default</ap-button>
      <ap-button primary text>primary</ap-button>
      <ap-button success text>success</ap-button>
      <ap-button danger text>danger</ap-button>
      <ap-button info text>info</ap-button>
      <ap-button warning text>warning</ap-button>
    </div>
    <div class="button-row">
      <ap-button text bg>default</ap-button>
      <ap-button primary text bg>primary</ap-button>
      <ap-button success text bg>success</ap-button>
      <ap-button danger text bg>danger</ap-button>
      <ap-button info text bg>info</ap-button>
      <ap-button warning text bg>warning</ap-button>
    </div>
  </div>
</template>

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
