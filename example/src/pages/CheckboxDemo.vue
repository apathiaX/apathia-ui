<template>
  <div>
    <Card title="基础用法">
      <Checkbox v-model="base"> Checkbox </Checkbox>
    </Card>
    <Card title="没有任何子节点">
      <div class="box">
        <Checkbox v-model="base" />
      </div>
    </Card>
    <Card title="disabled">
      <Checkbox v-model="disabled"> disabled:{{ disabled }} </Checkbox>
      <Checkbox v-model="base" :disabled="disabled"> disabled </Checkbox>
    </Card>
    <Card title="indeterminate">
      <Checkbox v-model="indeterminate">
        indeterminate:{{ indeterminate }}
      </Checkbox>
      <p>base{{ base }}</p>
      <Checkbox v-model="base" :indeterminate="indeterminate">
        indeterminate
      </Checkbox>
      <Checkbox
        v-model="base"
        :disabled="disabled"
        :indeterminate="indeterminate"
      >
        disabled
      </Checkbox>
    </Card>
    <Card title="array">
      <Checkbox v-model="ary" value="hello">hello</Checkbox>
      <Checkbox v-model="ary" value="world">world</Checkbox>
      <p>{{ ary }}</p>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox } from '@apathia/apathia'

const base = ref(false)
const disabled = ref(true)
const indeterminate = ref(true)

const ary = ref([])
</script>
