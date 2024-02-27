<template>
  <div style="height: 200px; width: 400px; border: 1px solid pink">
    <ap-scroll-container :size="7">
      <ul>
        <li v-for="i in 20" :key="i">
          {{ new Array(100).fill('a').join(',') }}
        </li>
      </ul>
    </ap-scroll-container>
  </div>
</template>
