<script lang="ts" setup>
import { onMounted, shallowRef } from 'vue'
import { TreeData } from 'apathia-ui'

const data = shallowRef<TreeData>([])

const treeProps = {
  value: 'id',
  label: 'name',
}

onMounted(() => {
  data.value = Array.from({ length: 400 }).map((_, i) => ({
    id: String(i),
    name: `Node-${i}`,
    children: Array.from({ length: 3 }).map((_, index) => ({
      id: `${i}-${index}`,
      name: `Node-${i}-${index}`,
      children: Array.from({ length: 2 }).map((_, indexChild) => ({
        id: `${i}-${index}-${indexChild}`,
        name: `Node-${i}-${index}-${indexChild}`,
      })),
    })),
  }))
})
</script>

<template>
  <div style="width: 100%; height: 300px; overflow: hidden">
    <ap-virtual-tree :data="data" :props="treeProps"></ap-virtual-tree>
  </div>
</template>
