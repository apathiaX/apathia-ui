<template>
  <div>
    <!-- <TransitionGroup tag="ul" name="transition-primary" :class="styles.list"> -->
    <Tag
      v-for="(tag, index) in tagList"
      v-bind="tag.theme"
      :key="tag.text"
      :class="tag.className"
      :icon-class="tag.iconClass"
      :closable="tag.closable"
      :text="tag.text"
      :hollow="hollow"
      @close="handleClose(tag, index)"
    />
    <div v-if="isAdding" key="tag-inGroupWrap" :class="styles.inputWrap">
      <ApInput
        v-model="tagText"
        size="sm"
        @keyup.enter="handleAppend"
        @blur="toggleAdding(false)"
      />
    </div>
    <ApButton
      v-else
      key="tag-btn"
      primary
      small
      :disabled="disabledTags"
      :class="styles.addBtn"
      @click="handleStartAdd()"
    >
      <slot name="create">+</slot>
    </ApButton>
    <!-- </TransitionGroup> -->
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, toRef, withDefaults } from 'vue'
import { cloneDeep } from 'lodash-es'
import { ApButton } from '@apathia/components/button'
import { ApInput } from '@apathia/components/input'
import { useToggle, useInjectProp } from '@apathia/shared'
import Tag from './Tag.vue'
import type { TagItem, TagsEmits, TagsProps } from './types'
import { getTagsStyle } from './tag'

defineOptions({
  name: 'ApTags',
})

provide('WithinTags', true)

const props = withDefaults(defineProps<TagsProps>(), {
  closable: false,
  showTag: (tag: TagItem) => tag as string,
  handleTag: (str: string) => str,
  disabled: undefined,
})

const emit = defineEmits<TagsEmits>()

const styles = getTagsStyle()

const [isAdding, , toggleAdding] = useToggle(false)
const tagText = ref('')

const disabledTags = useInjectProp(
  'FormDisabled',
  false,
  toRef(props, 'disabled'),
)

function handleStartAdd() {
  if (disabledTags.value) return
  toggleAdding(true)
}

function handleAppend() {
  const tags = [props.handleTag(tagText.value), ...cloneDeep(props.modelValue)]
  emit('update:modelValue', tags)
  emit('change', tags)
  tagText.value = ''
  toggleAdding(false)
}
const handleClose = (tag: TagItem, index: number) => {
  const tags = cloneDeep(props.modelValue)
  tags.splice(index, 1)
  emit('update:modelValue', tags)
  emit('change', tags)
}

const getCloseable = (tag: TagItem) =>
  typeof tag !== 'string' && tag.closable !== undefined
    ? tag.closable
    : props.closable

const getTheme = (tag: TagItem) =>
  typeof tag !== 'string' && tag.type !== undefined
    ? { [tag.type]: true }
    : {
        default: !(
          props.success ||
          props.primary ||
          props.danger ||
          props.warning
        ),
        success: props.success,
        primary: props.primary,
        danger: props.danger,
        warning: props.warning,
      }

const getIconClass = (tag: TagItem) =>
  typeof tag !== 'string' && tag.iconClass !== undefined ? tag.iconClass : ''

const tagList = computed(() =>
  props.modelValue.map(tag => ({
    className: styles.tagClass,
    text: props.showTag(tag),
    iconClass: getIconClass(tag),
    theme: getTheme(tag),
    closable: getCloseable(tag),
  })),
)
</script>
