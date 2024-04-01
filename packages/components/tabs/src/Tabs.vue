<template>
  <div :class="styles.outContainer">
    <div ref="contentRef" :class="styles.container">
      <div
        v-for="(tab, index) in list"
        :key="index"
        :class="
          modelValue === tab
            ? [...styles.tab, ...styles.activeTab]
            : [...styles.tab, ...styles.tabColor]
        "
        @click="changeNav(tab)"
      >
        {{ showLabel(tab) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import { useScrollX } from '@apathia/shared'
import { getComputedStyle } from '@apathia/theme'
import { TabItem, TabsEmits, TabsProps } from './types'
import { getTabStyles } from './tabs'

defineOptions({
  name: 'ApTabs',
})

const props = withDefaults(defineProps<TabsProps>(), {
  underline: false,
  showLabel: (tab: TabItem) => tab,
})

const emit = defineEmits<TabsEmits>()

const styles = getComputedStyle({ underline: props.underline }, getTabStyles)
const { contentRef } = useScrollX()

function changeNav(tab: TabItem) {
  emit('update:modelValue', tab)
  emit('navChange', tab)
}
</script>
