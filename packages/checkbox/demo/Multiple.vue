<template>
  <p>你喜欢吃的水果:</p>
  <div>
    <span style="margin-right: 5px" v-for="item in likes" :key="item">{{map[item]}}</span>
  </div>

  <Checkbox v-model="likes" value="apple">苹果🍎</Checkbox>
  <Checkbox v-model="likes" value="banana">香蕉🍌</Checkbox>
  <Checkbox v-model="likes" value="pear">梨🍐</Checkbox>
</template>

<script setup>
import { ref } from 'vue'
const map ={
  'apple': '苹果🍎',
  'banana': '香蕉🍌',
  'pear': '梨🍐'
}
const likes = ref([])

</script>
