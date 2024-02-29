<template>
  <div class="button-wrapper">
    <div class="button-row">
      <ap-button>default</ap-button>
      <ap-button primary>primary</ap-button>
      <ap-button success>success</ap-button>
      <ap-button danger>danger</ap-button>
      <ap-button info>info</ap-button>
      <ap-button warning>warning</ap-button>
    </div>
    <div class="button-row">
      <ap-button plain>plain</ap-button>
      <ap-button primary plain>primary</ap-button>
      <ap-button success plain>success</ap-button>
      <ap-button danger plain>danger</ap-button>
      <ap-button info plain>info</ap-button>
      <ap-button warning plain>warning</ap-button>
    </div>
    <div class="button-row">
      <ap-button round>default</ap-button>
      <ap-button primary round>primary</ap-button>
      <ap-button success round>success</ap-button>
      <ap-button danger round>danger</ap-button>
      <ap-button info round>info</ap-button>
      <ap-button warning round>warning</ap-button>
    </div>

    <div class="button-row">
      <ap-button circle>
        <template #icon>
          <User />
        </template>
      </ap-button>
      <ap-button primary circle>
        <template #icon>
          <Bell />
        </template>
      </ap-button>
      <ap-button success circle>
        <template #icon>
          <Lock />
        </template>
      </ap-button>
      <ap-button danger circle>
        <template #icon>
          <User />
        </template>
      </ap-button>
      <ap-button info circle>
        <template #icon>
          <ChatSquare />
        </template>
      </ap-button>
      <ap-button warning circle>
        <template #icon>
          <Warning />
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
  gap: 10px;
}
.button-row {
  display: flex;
  gap: 10px;
}
</style>
