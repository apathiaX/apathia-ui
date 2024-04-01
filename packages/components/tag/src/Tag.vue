<template>
  <div
    :class="{
      ...themeClasses,
      [styles.size]: true,
      [styles.layout]: true,
    }"
  >
    <span
      v-if="iconClass"
      :class="{
        [iconClass]: true,
        [styles.icon]: true,
      }"
    ></span>
    <slot>
      {{ text }}
    </slot>
    <span
      v-if="closable && !formDisabled && withinTags"
      :class="styles.delIcon"
      @click="handleClose"
    >
      ✕
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, withDefaults } from 'vue'
import type { TagProps } from './types'
import { getTagStyle } from './tag'

defineOptions({
  name: 'ApTag',
})

const props = withDefaults(defineProps<TagProps>(), {
  text: '',
  iconClass: '',
  closable: false,
})

const emit = defineEmits(['close'])

const styles = getTagStyle()
const formDisabled = inject('FormDisabled', false)
const withinTags = inject('WithinTags', false)

const handleClose = () => {
  emit('close')
}

const themeClasses = computed(() => ({
  [styles.theme.default]: !(
    props.primary ||
    props.success ||
    props.danger ||
    props.warning
  ),
  [styles.theme.primary]: props.primary,
  [styles.theme.success]: props.success,
  [styles.theme.danger]: props.danger,
  [styles.theme.warning]: props.warning,
  [styles.hollow]: props.hollow,
}))
</script>
