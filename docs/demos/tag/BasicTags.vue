<template>
  <ap-tags v-model="defaultTags" closable />
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
</script>
