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
    <ap-virtual-tree :data="data" :props="treeProps">
      <template #default="{ node }">
        <div class="node-content">
          <div style="width: 344px; padding: 0 16px 0 16px">
            col-1 {{ node.label }}
          </div>
          <div style="width: 140px; padding: 0 16px 0 16px">
            <ap-button primary plain>{{ node.label }}</ap-button>
          </div>
          <div style="width: 236px; padding: 0 16px 0 16px">
            col-3 <ap-tag warning>{{ node.label }}</ap-tag>
          </div>
        </div>
      </template>
      <template #stickyHeader>
        <div class="tree-header">
          <div style="width: 344px; padding: 0 16px 0 16px">Header-1</div>
          <div style="width: 140px; padding: 0 16px 0 16px">Header-2</div>
          <div style="width: 236px; padding: 0 16px 0 16px">Header-3</div>
        </div>
      </template>
      <template #empty>
        <div style="padding: 16px">暂无数据</div>
      </template>
    </ap-virtual-tree>
  </div>
</template>

<style scoped>
.tree-header {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(230, 232, 234, 1);
  background-color: rgba(249, 249, 249, 1);
  height: 40px;
  font-size: 14px;
  color: rgba(85, 91, 97, 1);
}
.node-content {
  display: flex;
  align-items: center;
  padding: 5px;
}
</style>
