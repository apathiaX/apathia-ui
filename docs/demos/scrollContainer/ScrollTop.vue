<template>
  <div style="height: 200px; border: 1px solid pink">
    <ap-scroll-container v-model:scrollTop="scrollTop" :size="7">
      <ul>
        <li v-for="i in 20" :key="i">
          {{ i }}
        </li>
      </ul>
    </ap-scroll-container>
  </div>
  <p>
    scrollTop:
    <ap-input v-model.number="scrollTop" />
  </p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const scrollTop = ref(0)
</script>
