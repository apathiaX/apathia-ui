<template>
  <li>
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
        <span v-show="!mini" :class="styles.sidenodeText">
          {{ node.text }}
        </span>
        <Icon v-show="node.children && !mini" :class="expandClass">
          <ArrowDown />
        </Icon>
      </div>
    </slot>

    <!-- <CollapseTransition v-if="node.children && !mini"> -->
    <div v-if="node.children && !mini">
      <ul v-show="expand" :class="styles.sidenodeChildren">
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
      </ul>
    </div>
    <!-- </CollapseTransition> -->
  </li>
</template>

<script setup lang="ts">
import { computed, watch, withDefaults } from "vue";
import { useToggle } from "@apathia/apathia.hooks";
import { Icon } from "@apathia/apathia.icon";
import { style } from "@apathia/apathia.twind";
import type { SideNode as Node } from "./types";
import { ArrowDown } from "../../icon-svg";

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
    sidenodeRowClass: style`flex items-center cursor-pointer duration-300 px-3 py-6 h-8 overflow-hidden border-l-4 border-transparent hover:(bg-fill-primary)`,
    sidenodeRowActive: style`bg-fill-primary text-content-white border-brand-primary`,
    sidenodeRowParentActive: style`text-brand-primary`,
    sidenodeTurn: style`rotate-180 duration-300`,
    sidenodeExpand: style`text-xs duration-300`,
    sidenodeText: style`flex-grow text-sm font-medium text-left pl-4 truncate`,
    sidenodeChildren: style`text-xs list-none`,
  };
}

const props = withDefaults(defineProps<SideNavProps>(), {
  node: () => ({}),
  mini: false,
  activeKey: "",
  selectHandler: () => {},
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
const expandClass = computed(
  () =>
    `${styles.sidenodeExpand} v-icon-chevron-down ${
      expand.value ? styles.sidenodeTurn : ""
    }`
);
const rowClass = computed(
  () =>
    `${styles.sidenodeRowClass} ${
      isActiveParent.value ? styles.sidenodeRowParentActive : ""
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
