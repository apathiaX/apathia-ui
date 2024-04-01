<template>
  <ap-button primary @click="add" small>添加</ap-button>
  <ap-button
    :pink="!tagsDisabled"
    :danger="tagsDisabled"
    @click="tagsDisabled = !tagsDisabled"
    small
  >
    {{ tagsDisabled ? '启用' : '禁用' }}
  </ap-button>
  <ap-form :disabled="tagsDisabled">
    <ap-tags v-model="defaultTags" closable />
  </ap-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const defaultTags = ref([
  '蒸羊羔',
  '蒸熊掌',
  '蒸鹿尾儿',
  '烧花鸭',
  '烧雏鸡',
  '烧子鹅',
  '卤猪',
  '卤鸭',
  '酱鸡',
  '腊肉',
  '松花小肚儿',
])
const tagsDisabled = ref<boolean>(false)
const add = () => {
  const str = `${Math.random()}`.slice(2, 7).toString()
  defaultTags.value.unshift(str)
}
</script>
