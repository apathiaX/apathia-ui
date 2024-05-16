<script lang="ts" setup>
import { TreeNodeEmits } from './useTree'
import type { ITreeNode } from './types'

const props = defineProps<{
  node: ITreeNode
  expanded: boolean
  current: boolean
  indent: number
  toggleExpand: (node: ITreeNode) => void
}>()
const emit = defineEmits(TreeNodeEmits)

const handleClick = (e: MouseEvent) => {
  emit('click', props.node, e)
}
</script>

<template>
  <div @click.stop="handleClick">
    <slot :node="node" :data="node.data" :expanded="expanded">
      <div
        :class="{
          'virt-tree-item-container': true,
          'virt-tree-item-container--current': current,
        }"
        :style="{ paddingLeft: `${(node.level - 1) * indent}px` }"
      >
        <template v-if="$slots.icon">
          <slot name="icon" :node="node" :expanded="expanded">
            <div
              v-if="!node.isLeaf"
              :class="`virt-tree-icon ${
                expanded ? 'virt-tree-icon--expanded' : ''
              }`"
              @click="toggleExpand(node)"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5632 7.72544L10.539 13.2587C10.2728 13.6247 9.72696 13.6247 9.46073 13.2587L5.43658 7.72544C5.11611 7.28479 5.43088 6.66666 5.97573 6.66666L14.024 6.66666C14.5689 6.66666 14.8837 7.28479 14.5632 7.72544Z"
                  fill="#6B7075"
                />
              </svg>
            </div>
          </slot>
        </template>
        <slot name="content" :node="node">
          <div class="virt-tree-node-content">{{ node.label }}</div>
        </slot>
      </div>
    </slot>
  </div>
</template>

<style scoped>
.virt-tree-item-container {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 4px;
  border-radius: 1px 1px 0 0;
  cursor: pointer;
  &:hover {
    background-color: #f5f7fa;
    color: rgb(96, 98, 102);
  }
}

.virt-tree-item-container > .virt-tree-icon {
  transform: rotate(-90deg);
  transition: all 0.5s ease;
}
.virt-tree-icon.virt-tree-icon--expanded {
  transform: rotate(0deg);
}
.virt-tree-node-content {
  flex: 1;
}

.virt-tree-item-container--current {
  background-color: #f5f7fa;
  color: rgb(96, 98, 102);
}
</style>
