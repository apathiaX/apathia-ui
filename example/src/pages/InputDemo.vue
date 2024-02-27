<template>
  <div>
    <Card title="基础用法">
      <ap-input v-model="inputVal" clearable @input="handleInput">
        <template #prepend>http://</template>
        <template #append>.com</template>
      </ap-input>
    </Card>

    <Card title="其他用法">
      <ap-input v-model="searchVal" search clearable @search="handleSearch" />
    </Card>
  </div>
</template>

<script setup>
import { ApInput } from 'apathia-ui'
import { ref } from 'vue'
const inputVal = ref('')
const searchVal = ref('')
const handleSearch = val => {
  console.log(val)
}

const handleInput = e => {
  console.log(e)
}
</script>
