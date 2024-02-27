<template>
  <div style="height: 200px; border: 1px solid pink">
    <ScrollContainer v-model:scrollTop="scrollTop" :size="7">
      <ul>
        <li v-for="i in 20" :key="i">
          {{ i }}
        </li>
      </ul>
    </ScrollContainer>
  </div>
  <p>
    scrollTop:
    <Input v-model.number="scrollTop" />
  </p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const scrollTop = ref(0)

    return {
      scrollTop,
    }
  },
})
</script>
