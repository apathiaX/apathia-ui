<template>
  <ap-form-item>
    <ap-button :href="link">default</ap-button>
    <ap-button primary :href="link">primary</ap-button>
    <ap-button success :href="link">success</ap-button>
    <ap-button danger :href="link">danger</ap-button>
    <ap-button info :href="link">info</ap-button>
    <ap-button warning :href="link">warning</ap-button>
  </ap-form-item>
</template>

<script setup lang="ts">
const link = 'http://www.baidu.com'
</script>
