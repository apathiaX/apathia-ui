<template>
  <div>
    <slot
      :mini="mini"
      :activeParent="isActiveParent"
      :expand="expand"
      :activeItem="isActiveItem"
      :onClick="clickHandler"
      :node="node"
    >
      <div
        :id="isActiveItem ? 'expandSideNode' : undefined"
        :class="rowClass"
        @click="clickHandler"
      >
        <span :class="node.icon ? iconClass : ''">
          <slot name="icon">
            <template v-if="node.icon">
              <component :is="node.icon" />
            </template>
          </slot>
        </span>
        <span v-show="!mini" :class="styles.sidenodeText">
          {{ node.text }}
        </span>
        <ApIcon
          v-show="node.children && !mini"
          :class="styles.sidenodeIconClass"
        >
          <ArrowDown v-if="expand" />
          <ArrowUp v-else />
        </ApIcon>
      </div>
    </slot>

    <div v-if="node.children && !mini">
      <div v-show="expand" :class="styles.sidenodeChildren">
        <SideNode
          v-for="(item, index) in node.children"
          :key="index"
          :node="item"
          :active-key="activeKey"
          :select-handler="selectHandler"
          :key-field="keyField"
        >
          <template
            #default="{
              mini: miniValue,
              activeParent: activeParentValue,
              expand: expandValue,
              activeItem: activeItemValue,
              onClick: handleClick,
              node: nodeValue,
            }"
          >
            <slot
              :mini="miniValue"
              :activeParent="activeParentValue"
              :expand="expandValue"
              :activeItem="activeItemValue"
              :onClick="handleClick"
              :node="nodeValue"
            ></slot>
          </template>
        </SideNode>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { computed, watch, withDefaults } from 'vue'
import { useToggle } from '@apathia/shared'
import { ApIcon } from '@apathia/components/icon'
import type { SideNavNode, SideNavNodeProps } from './types'
import { ArrowDown } from '@apathia/icons-vue'
import { getSideNodeStyles } from './sidenav'

defineOptions({
  name: 'ApSideNavNode',
})

const props = withDefaults(defineProps<SideNavNodeProps>(), {
  node: () => ({}),
  mini: false,
  activeKey: '',
  selectHandler: () => {},
  keyField: 'key',
})

function isParent(
  nodes: SideNavNode[],
  current: string,
  key: keyof SideNavNode,
) {
  return platMenu(nodes).some((n: SideNavNode) => n[key] === current)
}

function platMenu(nodes: SideNavNode[]): SideNavNode[] {
  return nodes.reduce<SideNavNode[]>(
    (res, cur) =>
      cur.children ? [...res, ...platMenu(cur.children), cur] : [...res, cur],
    [],
  )
}

const styles = getSideNodeStyles()

const isActiveParent = computed(() =>
  props.node.children
    ? isParent(props.node.children, props.activeKey, props.keyField)
    : false,
)
const isActiveItem = computed(
  () => props.activeKey === props.node[props.keyField],
)
const [expand, toggleExpand, setExpand] = useToggle(!!isActiveParent.value)
// const expandClass = computed(
//   () =>
//     `${styles.sidenodeExpand} ${styles.sidenodeIconClass} ${expand.value ? styles.sidenodeTurn : ""
//     }`
// );
const iconClass = computed(
  () => `${styles.sidenodeIcon} ${props.mini ? styles.sidenodeIconMini : ''}`,
)
const rowClass = computed(
  () =>
    `${styles.sidenodeRowClass} ${
      isActiveParent.value ? styles.sidenodeRowParentActive : ''
    } ${
      props.activeKey === props.node[props.keyField]
        ? styles.sidenodeRowActive
        : ''
    }`,
)

watch(
  () => props.activeKey,
  () => {
    if (isActiveParent.value) setExpand(expand.value)
  },
)

const clickHandler = () => {
  if (props.node.children) {
    toggleExpand()
  } else {
    props.selectHandler(props.node)
  }
}
</script>
