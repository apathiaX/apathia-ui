<script lang="ts" setup>
import { VirtualList } from '@apathia/virtual-list'
import TreeNode from './TreeNode.vue'
import { TreeEmits, TreeProps, useTree } from './useTree'
import { ITreeNode } from './types'
import { getVirtualTreeStyles } from './tree'

defineOptions({
  name: 'ApVirtualTree',
})

const props = defineProps(TreeProps)

const emits = defineEmits(TreeEmits)

const {
  virListRef,
  flattenList,
  onClickTreeNode,
  isExpanded,
  isCurrent,
  expandNode,
  getCurrentNode,
  getCurrentKey,
  setCurrentKey,
  collapseNode,
  setExpandedKeys,
  toggleExpand,
} = useTree(props, emits)

const styles = getVirtualTreeStyles()

defineExpose({
  expandNode,
  getCurrentNode,
  getCurrentKey,
  setCurrentKey,
  collapseNode,
  setExpandedKeys,
  toggleExpand,
})
</script>

<template>
  <div :class="styles.container">
    <VirtualList
      ref="virListRef"
      :list="flattenList"
      :min-size="minSize"
      itemKey="key"
    >
      <template #default="{ itemData }">
        <TreeNode
          v-if="flattenList.length > 0"
          :node="(itemData as ITreeNode)"
          :expanded="isExpanded(itemData as ITreeNode)"
          :current="isCurrent(itemData as ITreeNode)"
          :indent="indent"
          :toggleExpand="toggleExpand"
          @click="onClickTreeNode"
        >
          <template #default="{ node, data, expanded }">
            <slot :node="node" :data="data" :expanded="expanded" />
          </template>
          <template #content="{ node }">
            <slot name="content" :node="node" />
          </template>
          <template #icon="{ node, expanded }">
            <slot name="icon" :node="node" :expanded="expanded"></slot>
          </template>
        </TreeNode>

        <div v-else>
          <slot name="empty" />
        </div>
      </template>
      <template #header>
        <slot name="header" />
      </template>
      <template #footer>
        <slot name="footer" />
      </template>
      <template #stickyHeader>
        <slot name="stickyHeader" />
      </template>
      <template #stickyFooter>
        <slot name="stickyFooter" />
      </template>
      <template #empty>
        <slot name="empty" />
      </template>
    </VirtualList>
  </div>
</template>
