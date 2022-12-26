<template>
  <BaseButton primary @click="add">添加</BaseButton>
  <BaseButton
    :pink="!tagsDisabled"
    :danger="tagsDisabled"
    @click="tagsDisabled = !tagsDisabled"
  >
    {{ tagsDisabled ? '启用' : '禁用' }}
  </BaseButton>
  <Form :disabled="tagsDisabled">
    <Tags v-model="defaultTags" closable />
  </Form>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
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

    return {
      defaultTags,
      tagsDisabled,
      add
    }
  }
}
</script>
