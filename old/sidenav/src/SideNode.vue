<template>
  <li>
    <slot :mini="mini" :activeParent="isActiveParent" :expand="expand" :activeItem="isActiveItem" :onClick="clickHandler"
      :node="node">
      <div :id="isActiveItem ? 'expandSideNode' : undefined" :class="rowClass" @click="clickHandler">
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
        <Icon v-show="node.children && !mini" :class="styles.sidenodeIconClass">
          <ArrowDown v-if="expand" />
          <ArrowUp v-else />
        </Icon>
      </div>
    </slot>

    <div v-if="node.children && !mini">
      <ul v-show="expand" :class="styles.sidenodeChildren">
        <SideNode v-for="(item, index) in node.children" :key="index" :node="item" :active-key="activeKey"
          :select-handler="selectHandler" :key-field="keyField">
          <template #default="{
              mini: miniValue,
              activeParent: activeParentValue,
              expand: expandValue,
              activeItem: activeItemValue,
              onClick: handleClick,
              node: nodeValue,
            }">
            <slot :mini="miniValue" :activeParent="activeParentValue" :expand="expandValue" :activeItem="activeItemValue"
              :onClick="handleClick" :node="nodeValue"></slot>
          </template>
        </SideNode>
      </ul>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed, shallowRef, watch, withDefaults } from "vue";
import { useToggle } from "@apathia/apathia.hooks";
import { Icon } from "@apathia/apathia.icon";
import { style } from "@apathia/apathia.twind";
import type { SideNode as Node } from "./types";
import { ArrowDown } from "@apathia/apathia.icon-svg";

interface SideNavProps {
  node?: Node;
  mini?: boolean;
  activeKey?: string;
  selectHandler?: Function;
  keyField?: keyof Node;
}

function initStyle() {
  return {
    sidenodeIconClass: style`w-4 h-4`,
    sidenodeRowClass: style`flex items-center cursor-pointer duration-300 px-3 py-6 h-8 overflow-hidden border-r-4 border-transparent hover:bg-brand-fill`,
    // sidenodeRowActive: style`bg-fill-primary text-content-white rounded-l-md border-brand-primary`,
    sidenodeRowActive: style`bg-brand-fill text-brand-primary border-brand-primary`,
    sidenodeRowParentActive: style`text-brand-primary`,
    sidenodeTurn: style`rotate-180 duration-300`,
    sidenodeExpand: style`text-xs duration-300`,
    sidenodeText: style`flex-grow text-sm font-medium text-left truncate`,
    sidenodeIcon: style`w-8 h-4 px-2`,
    sidenodeIconMini: style`px-0`,
    sidenodeChildren: style`text-xs bg-brand-light transition-all duration-500 list-none`,
  };
}

const props = withDefaults(defineProps<SideNavProps>(), {
  node: () => ({}),
  mini: false,
  activeKey: "",
  selectHandler: () => { },
  keyField: "key",
});

function isParent(nodes: Node[], current: string, key: keyof Node) {
  return platMenu(nodes).some((n: Node) => n[key] === current);
}

function platMenu(nodes: Node[]): Node[] {
  return nodes.reduce<Node[]>(
    (res, cur) =>
      cur.children ? [...res, ...platMenu(cur.children), cur] : [...res, cur],
    []
  );
}

const styles = initStyle();

const isActiveParent = computed(() =>
  props.node.children
    ? isParent(props.node.children, props.activeKey, props.keyField)
    : false
);
const isActiveItem = computed(() => props.activeKey === props.node[props.keyField]);
const [expand, toggleExpand, setExpand] = useToggle(!!isActiveParent.value);
// const expandClass = computed(
//   () =>
//     `${styles.sidenodeExpand} ${styles.sidenodeIconClass} ${expand.value ? styles.sidenodeTurn : ""
//     }`
// );
const iconClass = computed(() => `${styles.sidenodeIcon} ${props.mini ? styles.sidenodeIconMini : ""}`)
const rowClass = computed(
  () =>
    `${styles.sidenodeRowClass} ${isActiveParent.value ? styles.sidenodeRowParentActive : ""
    } ${props.activeKey === props.node[props.keyField] ? styles.sidenodeRowActive : ""}`
);

watch(
  () => props.activeKey,
  () => {
    if (isActiveParent.value) setExpand(expand.value);
  }
);

const clickHandler = () => {
  if (props.node.children) {
    toggleExpand();
  } else {
    props.selectHandler(props.node);
  }
};
</script>
