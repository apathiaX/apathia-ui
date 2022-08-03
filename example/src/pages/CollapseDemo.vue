<template>
  <div>
    <Card title="基础用法">
      <Collapse
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
      </Collapse>
    </Card>

    <Card title="header slot">
      <Collapse :show-arrow="false">
        <template #header>
          <li>这是一个 li 标签</li>
        </template>
        <p>Header slot</p>
        <p>Header slot</p>
        <p>Header slot</p>
        <p>Header slot</p>
      </Collapse>
    </Card>

    <Card title="Header slot">
      <Collapse :show-arrow="false">
        <template #Header="{ show, toggleShow }">
          <span>{{ show.value }}</span>
          <br />
          <button @click="toggleShow">toggleShow</button>
        </template>
        <p>Header slot</p>
        <p>Header slot</p>
        <p>Header slot</p>
        <p>Header slot</p>
      </Collapse>
    </Card>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Input, Collapse } from '@apathia/apathia'

export default {
  components: {
    Collapse,
    Input,
  },

  setup() {
    const expand = ref(false)
    const duration = ref(400)
    const header = ref('header')
    const showArrow = ref(true)
    const disabled = ref(false)

    return {
      expand,
      duration,
      header,
      showArrow,
      disabled,
    }
  },
}
</script>
