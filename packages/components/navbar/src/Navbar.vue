<template>
  <div :class="styles.wrapper">
    <div ref="contentRef" :class="styles.layoutContainer">
      <div
        v-for="nav in list"
        :key="nav.value"
        :class="`${styles.layoutNav} ${
          isActive(nav) || isActiveParent(nav) ? styles.activeNav : ''
        }`"
        @click="parentBindClick(nav)"
      >
        <template v-if="!nav.children">
          <span
            v-if="nav.iconClass"
            :class="`${nav.iconClass} ${styles.icon}`"
          ></span>
          <slot name="label" :nav="nav">
            <span>{{ nav.label }}</span>
          </slot>
        </template>

        <template v-else>
          <ApPopper
            placement="bottom"
            trigger="hover"
            :popper-class="styles.childNavClass.popper"
            :show-arrow="false"
          >
            <span v-if="nav.iconClass" :class="nav.iconClass"></span>
            <slot name="label" :nav="nav">
              <span>{{ nav.label }}</span>
            </slot>
            <template #content>
              <div
                v-for="childNav in nav.children"
                :key="childNav.value"
                :class="`${styles.childNavClass.nav} ${
                  isActive(childNav) ? styles.childNavClass.activeNav : ''
                }`"
                @click="handle(childNav)"
              >
                <span
                  v-if="childNav.iconClass"
                  :class="`${childNav.iconClass} ${styles.icon}`"
                ></span>
                <slot name="label" :nav="childNav">
                  <span>{{ childNav.label }}</span>
                </slot>
              </div>
            </template>
          </ApPopper>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, withDefaults } from 'vue'
import { noop, useScrollX } from '@apathia/shared'
import { ApPopper } from '@apathia/components/popper'
import type { NavNode, NavbarProps } from './types'
import { getNavbarStyles } from './navbar'

defineOptions({
  name: 'ApNavbar',
})

const props = withDefaults(defineProps<NavbarProps>(), {
  type: 'default',
  modelValue: '',
  trigger: 'hover',
  disabledParent: true,
})

const emit = defineEmits(['update:modelValue', 'change'])

function isParent(nodes: NavNode[], text: string | number) {
  return text && platMenu(nodes).some(n => n.value === text)
}

function platMenu(nodes: NavNode[]): NavNode[] {
  return nodes.reduce<NavNode[]>((acc, cur) => {
    if (cur.children && Array.isArray(cur.children) && cur.children.length) {
      return acc.concat(platMenu(cur.children))
    }
    return acc.concat(cur)
  }, [])
}

const { modelValue } = toRefs(props)
const { contentRef } = useScrollX()
const styles = getNavbarStyles(props.type)

function isActive(nav: NavNode) {
  return nav.value === modelValue.value
}

function isActiveParent(nav: NavNode) {
  return nav.children && isParent(nav.children, modelValue.value)
}

function handle(nav: NavNode) {
  emit('update:modelValue', nav.value)
  emit('change', nav)
}

function parentBindClick(nav: NavNode) {
  if (!nav.children || (nav.children && !props.disabledParent)) {
    handle(nav)
  } else {
    noop()
  }
}
</script>
