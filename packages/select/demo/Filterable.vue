<template>
  <div>
    <p>
      你输入的是：
      <span style="color: red">{{ showData }}</span>
    </p>
    <Select v-model="selectVal" filterable @query-change="handleChange">
      <Option v-for="item in states" :value="item" :key="item">{{ item }}</Option>
      <template #no-result> 没有搜索结果</template>
      <template #loading>正在加载</template>
    </Select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selectVal = ref('')
const showData = ref('')
const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
const handleChange = val => {
  showData.value = val
}
</script>
