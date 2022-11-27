<template>
  <Form>
    <FormItem>
      <Input v-model="inputVal1">
       <template #prepend>Http://</template>
     </Input>
    </FormItem>
    <FormItem>
      <Input v-model="inputVal2">
       <template #append>.com</template>
     </Input>
    </FormItem>
    <FormItem>
      <Input v-model="inputVal3">
       <template #prepend>
         <Select v-model="selectVal1">
           <Option value="">请选择</Option>
           <Option value="baidu">baidu</Option>
           <Option value="google">google</Option>
         </Select>
       </template>
       <template #append>
         <Icon :name="['fa', 'search']"/>
       </template>
     </Input>
    </FormItem>
    <FormItem>
      <Input v-model="inputVal4">
       <template #prepend>
         <Icon :name="['fa', 'search']"/>
       </template>
       <template #append>
         <Select v-model="selectVal2">
           <Option value="">请选择</Option>
           <Option value="baidu">baidu</Option>
           <Option value="google">google</Option>
         </Select>
       </template>
     </Input>
    </FormItem>
  </Form>
 </template>
 
 <script setup>
 import { ref } from 'vue'
 
 const inputVal1 = ref('')
 const inputVal2 = ref('')
 const inputVal3 = ref('')
 const inputVal4 = ref('')
 
 const selectVal1 = ref('')
 const selectVal2 = ref('')
 </script>
 