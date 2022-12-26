<template>
  <div style="height: 200px; border: 1px solid pink">
    <ScrollContainer :size="7" auto-hide>
      <ul>
        <li v-for="i in 20" :key="i">
          {{ i }}
        </li>
      </ul>
    </ScrollContainer>
  </div>
</template>
