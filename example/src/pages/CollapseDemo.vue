<template>
  <div>
    <Card title="基础用法">
      <ap-collapse
        :expand="expand"
        :duration="+duration"
        :header="header"
        :show-arrow="showArrow"
        :disabled="disabled"
      >
        <p>测试 collapse</p>
        <p>测试 collapse</p>
        <p>测试 collapse</p>
        <p>测试 collapse</p>
        <p>测试 collapse</p>
        <p>测试 collapse</p>
      </ap-collapse>
    </Card>

    <Card title="header slot">
      <ap-collapse :show-arrow="false">
        <template #header>
          <li>这是一个 li 标签</li>
        </template>
        <p>Header slot</p>
        <p>Header slot</p>
        <p>Header slot</p>
        <p>Header slot</p>
      </ap-collapse>
    </Card>

    <Card title="Header slot">
      <ap-collapse :show-arrow="false">
        <template #Header="{ show, toggleShow }">
          <span>{{ show.value }}</span>
          <br />
          <button @click="toggleShow">toggleShow</button>
        </template>
        <p>Header slot</p>
        <p>Header slot</p>
        <p>Header slot</p>
        <p>Header slot</p>
      </ap-collapse>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ApCollapse } from 'apathia-ui'

const expand = ref(false)
const duration = ref(400)
const header = ref('header')
const showArrow = ref(true)
const disabled = ref(false)
</script>
