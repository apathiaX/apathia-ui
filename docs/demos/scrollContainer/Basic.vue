<template>
  <div style="height: 200px; width: 400px; border: 1px solid pink">
    <ap-scroll-container :size="7">
      <ul>
        <li v-for="i in 20" :key="i">
          {{ data }}
        </li>
      </ul>
    </ap-scroll-container>
  </div>
</template>

<script lang="ts" setup>
const data = new Array(20).fill('a').join(',')
</script>
