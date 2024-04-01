<template>
  <div
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
  </div>
</template>

<script setup lang="ts">
import { InputHTMLAttributes, withDefaults } from 'vue'
import SideNode from './SideNode.vue'
import type { SideNavNode, SideNavEmits, SideNavProps } from './types'
import useSideNav from './useSideNav'
import { getSideNavStyles } from './sidenav'

defineOptions({
  name: 'ApSideNav',
})

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
const styles = getSideNavStyles()

const selectNode = (node: SideNavNode) => emit('select', node)
</script>
