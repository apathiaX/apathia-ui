<template>
  <div
    ref="tagContainerRef"
    :class="{
      [styles.container]: true,
      [styles.active]: focus,
    }"
    @click="handleClick"
  >
    <div :class="styles.wrap">
      <div ref="contentRef" :class="styles.nodes">
        <template v-if="nodes.length">
          <div v-for="node in nodes" :key="node.fullKey" :class="styles.tag">
            <span>{{
              showAllLevels
                ? node.fullName.join(separator)
                : node.fullName[node.fullName.length - 1]
            }}</span>
            <span :class="styles.iconWrap">
              <ApIcon
                :stroke-width="2"
                size="xs"
                fill="red"
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
import { style, css } from '@apathia/theme'
import type { CascaderNode, NodeProps } from './types'
import { Close } from '@apathia/icons-vue'

defineOptions({
  name: 'ApNode',
})

const getNodeStyles = () => {
  return {
    container: style`w-full relative flex shadow h-8 border rounded border-line-accent bg-content-white text-sm items-center`,
    wrap: style`h-full w-full overflow-hidden`,
    active: style`border-brand-primary`,
    nodes: style`w-full flex-1 flex-nowrap whitespace-nowrap py-btn-md-y px-1.5 overflow-x-hidden ${css`
      height: calc(100% + 17px);
    `}`,
    search: style`flex-1 outline-none`,
    tag: style`rounded inline-flex text-xs text-content-accent items-center py-1 pl-1.5 bg-fill-light h-5 mr-1 flex-shrink-0`,
    iconWrap: style`h-4 w-4 inline-flex items-center justify-center rounded-full ml-1`,
    nodeRemove: style`p-1.5 text-content-accent hover:(text-content-primary) cursor-pointer`,
    clearIcon: style`absolute right-2 top-1/2 -translate-y-2/4 cursor-pointer ml-2 text-content-neutral hover:(text-content-primary)`,
    placeholder: style`text-content-secondary`,
  }
}

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

const styles = getNodeStyles()

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
