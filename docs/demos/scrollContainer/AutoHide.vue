<template>
  <div style="height: 200px; border: 1px solid pink">
    <ap-scroll-container :size="7" auto-hide>
      <ul>
        <li v-for="i in 20" :key="i">
          {{ i }}
        </li>
      </ul>
    </ap-scroll-container>
  </div>
</template>
