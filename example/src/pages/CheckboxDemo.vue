<template>
  <div>
    <Card title="基础用法">
      <ap-checkbox v-model="base"> ap-checkbox </ap-checkbox>
    </Card>
    <Card title="没有任何子节点">
      <div class="box">
        <ap-checkbox v-model="base" />
      </div>
    </Card>
    <Card title="disabled">
      <ap-checkbox v-model="disabled"> disabled:{{ disabled }} </ap-checkbox>
      <ap-checkbox v-model="base" :disabled="disabled"> disabled </ap-checkbox>
    </Card>
    <Card title="indeterminate">
      <ap-checkbox v-model="indeterminate">
        indeterminate:{{ indeterminate }}
      </ap-checkbox>
      <p>base{{ base }}</p>
      <ap-checkbox v-model="base" :indeterminate="indeterminate">
        indeterminate
      </ap-checkbox>
      <ap-checkbox
        v-model="base"
        :disabled="disabled"
        :indeterminate="indeterminate"
      >
        disabled
      </ap-checkbox>
    </Card>
    <Card title="array">
      <ap-checkbox v-model="ary" value="hello">hello</ap-checkbox>
      <ap-checkbox v-model="ary" value="world">world</ap-checkbox>
      <p>{{ ary }}</p>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ApCheckbox } from 'apathia-ui'

const base = ref(false)
const disabled = ref(true)
const indeterminate = ref(true)

const ary = ref([])
</script>
