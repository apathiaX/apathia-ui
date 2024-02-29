<template>
  <div class="button-wrapper">
    <div class="button-row">
      <div class="button-label">small:</div>
      <ap-button primary small>small</ap-button>
      <ap-button primary plain small>small</ap-button>
      <ap-button circle small>
        <template #icon>
          <User />
        </template>
      </ap-button>
    </div>
    <div class="button-row">
      <div class="button-label">default:</div>
      <ap-button primary>default</ap-button>
      <ap-button primary plain>default</ap-button>
      <ap-button circle>
        <template #icon>
          <User />
        </template>
      </ap-button>
    </div>
    <div class="button-row">
      <div class="button-label">large:</div>
      <ap-button primary large>large</ap-button>
      <ap-button primary plain large>large</ap-button>
      <ap-button circle large>
        <template #icon>
          <User />
        </template>
      </ap-button>
    </div>
  </div>
</template>

<style scoped>
.button-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.button-label {
  width: 60px;
}
.button-row {
  display: flex;
  gap: 20px;
}
</style>
