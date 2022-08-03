<template>
  <div>
    <Card title="基础用法">
      <Select v-model="demo1">
        <Option v-for="i in 66" :key="i" :value="i">{{ i }}</Option>
      </Select>
      <p>{{ demo1 }}</p>
    </Card>
    <Card title="disabled">
      <Select v-model="demo1" disabled>
        <Option v-for="i in 66" :key="i" :value="i">{{ i }}</Option>
      </Select>
      <Select v-model="demo1">
        <Option v-for="i in 20" :key="i" :value="i" :disabled="i < 10">
          {{ i }}
        </Option>
      </Select>
    </Card>
    <Card title="filterable">
      <Select v-model="demo2" filterable>
        <Option v-for="i in 66" :key="i" :value="i">{{ i }}</Option>
        <template #no-result> 没有搜索结果（这是slot） </template>
      </Select>
      {{ demo2 }}
    </Card>
    <Card
      title="filterable+
        clearable+@query-change"
    >
      <Select v-model="demo3" filterable clearable @query-change="queryChange">
        <Option v-for="i in list" :key="i" :value="i">{{ i }}</Option>
      </Select>
      {{ demo3 }}
    </Card>
    <Card title="test">
      <Select v-model="demo4" filterable clearable @query-change="queryChange">
        <Option v-for="i in list" :key="i" :value="i">
          use slot here
          <p :label="'label=' + i">{{ i }}</p>
          <p :label="'label=' + i">
            <img
              src="https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0515%2Fbfedfd18j00qadpg00014c000hs00b4c.jpg&thumbnail=660x2147483647&quality=80&type=jpg"
              width="20"
              height="20"
              alt=""
            />
          </p>
          <p :label="'label=' + i">😊🥺😉😍😘😚😜😂😝😳😁😣😢😭😰</p>
        </Option>
      </Select>
      {{ demo4 }}
    </Card>
    <BaseButton @click="getRemote">get remote options</BaseButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select, Option, BaseButton } from '@apathia/apathia'

const demo1 = ref(1)
const demo2 = ref(2)
const demo3 = ref(3)
const demo4 = ref(4)
const list = ref([
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
])

function queryChange(val) {
  if (val) {
    list.value.splice(0, 1, val)
    // list改变要带remote 否则filterstr有问题
  }
}
function getRemote() {
  list.value.push(0, 1, 3)
}
</script>
