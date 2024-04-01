<template>
  <div ref="tagContainerRef" :class="styles.container" @click="handleClick">
    <div :class="styles.wrap">
      <div ref="contentRef" :class="styles.nodes">
        <template v-if="nodes.length">
          <div v-for="node in nodes" :key="node.fullKey" :class="styles.tag">
            <span>{{
              showAllLevels
                ? node.fullName.join(separator)
                : node.fullName[node.fullName.length - 1]
            }}</span>
            <span>
              <ApIcon
                size="xs"
                :class="styles.nodeRemove"
                @click.stop="removeOne(node)"
              >
                <Close />
              </ApIcon>
            </span>
          </div>
        </template>
        <div v-else-if="!(search && showSearch)" :class="styles.placeholder">
          {{ placeholder }}
        </div>
      </div>

      <input
        v-show="search && showSearch"
        ref="iptRef"
        v-model="searchInput"
        :class="styles.search"
        @input="onSearchInput"
      />
    </div>

    <ApIcon
      v-if="clearable && nodes.length"
      size="12"
      :class="styles.clearIcon"
      @click.stop="clear"
    >
      <Close />
    </ApIcon>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref } from 'vue'
import { ApIcon } from '@apathia/components/icon'
import { useScrollX, onClickOutside } from '@apathia/shared'
import { getComputedStyle } from '@apathia/theme'
import type { CascaderNode, NodeProps } from './types'
import Close from '../icon/Close.vue'
import { getNodeStyles } from './cascader'

defineOptions({
  name: 'ApNode',
})

const props = withDefaults(defineProps<NodeProps>(), {
  nodes: () => [],
  focus: false,
  showAllLevels: false,
  separator: '/',
  placeholder: '',
  clearable: false,
  // TODO: search?
  search: false,
})

const emit = defineEmits(['clear', 'remove', 'update:focus', 'search-change'])

const styles = getComputedStyle(
  { focus: props.focus, disabled: props.disabled },
  getNodeStyles,
)

const searchInput = ref<string>('')
const onSearchInput = (e: Event) => {
  emit('search-change', (e.target as HTMLInputElement).value)
  console.log(e)
}

const showSearch = ref<boolean>(false)
const clear = () => {
  emit('clear')
}

const removeOne = (node: CascaderNode) => {
  emit('remove', node)
}

const handleClick = () => {
  if (props.disabled) return
  showSearch.value = true
  emit('update:focus', !props.focus)
}

const tagContainerRef = ref<HTMLDivElement | null>(null)

onClickOutside(tagContainerRef, () => {
  showSearch.value = false
  searchInput.value = ''
  emit('search-change', '')
  emit('update:focus', false)
})

const { contentRef } = useScrollX(false)
</script>
