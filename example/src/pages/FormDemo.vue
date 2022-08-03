<template>
  <div>
    <Card title="基础用法">
      <Form inline>
        <FormItem label-width="100">
          <template #label> label </template>
          add
        </FormItem>
        <FormItem label-position="right">
          <template #label> label </template>
          bdd
        </FormItem>
      </Form>
    </Card>

    <Card title="其他用法">
      <Form>
        <FormItem label="test">
          <div>得到的</div>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script setup>
import { Form, FormItem } from '@apathia/apathia'
// label的使用方法： 1、formItem中定义label属性 2、使用slot插槽 命名插槽 label
// 设置inline后 labelWidth依然生效
</script>
