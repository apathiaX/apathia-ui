<template>
  <ul
    :class="showMini ? styles.sidenavMiniClass : styles.sidenavClass"
    v-bind="{ ...getContainerProps() }"
  >
    <slot name="menuTop"></slot>
    <div v-show="search && !showMini" :class="styles.sidenavInputWrap">
      <input
        v-bind="{ ...getSidenavInputProps() as InputHTMLAttributes}"
        placeholder="search"
        :class="styles.sidenavInput"
      />
    </div>

    <SideNode
      v-for="node in filteredMenu"
      :key="node[activeKey]"
      :node="node"
      :active-key="activeKey"
      :key-field="keyField"
      :mini="showMini"
      :select-handler="selectNode"
    >
      <template
        #default="{
          mini: miniValue,
          activeParent: activeParentValue,
          expand: expandValue,
          activeItem: activeItemValue,
          onClick: clickHandler,
          node: nodeValue,
        }"
      >
        <slot
          :mini="miniValue"
          :activeParent="activeParentValue"
          :expand="expandValue"
          :activeItem="activeItemValue"
          :onClick="clickHandler"
          :node="nodeValue"
        ></slot>
      </template>
    </SideNode>

    <slot name="menuBottom"></slot>
  </ul>
</template>

<script setup lang="ts">
import { InputHTMLAttributes, withDefaults } from 'vue'
import { style } from '@apathia/theme'
import SideNode from './SideNode.vue'
import type { SideNavNode, SideNavEmits, SideNavProps } from './types'
import useSideNav from './useSideNav'

defineOptions({
  name: 'ApSideNav',
})

function initStyle() {
  const baseSidenav = 'block duration-100 text-content-secondary py-4 relative'
  return {
    sidenavClass: style`${baseSidenav} min-h-full`,
    sidenavMiniClass: style`${baseSidenav} w-12 min-h-full`,
    sidenavInputWrap: style`px-4`,
    sidenavInput: style`bg-fill-accent px-2 my-2 bg-opacity-30 h-9 outline-none text-content-accent rounded placeholder-content-neutral w-full focus:(bg-fill-gray text-content-primary)`,
  }
}

const props = withDefaults(defineProps<SideNavProps>(), {
  menuList: () => [],
  activeKey: '',
  mini: false,
  search: false,
  keyField: 'key',
})

const emit = defineEmits<SideNavEmits>()

const {
  getContainerProps,
  getSidenavInputProps,
  filteredMenu,
  showMini,
  // getScrollContainerProps,
} = useSideNav(props, emit)
const styles = initStyle()

const selectNode = (node: SideNavNode) => emit('select', node)
</script>
