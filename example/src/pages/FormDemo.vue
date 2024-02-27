<template>
  <div>
    <Card title="基础用法">
      <ap-form inline>
        <ap-form-item label-width="100">
          <template #label> label </template>
          add
        </ap-form-item>
        <ap-form-item label-position="right">
          <template #label> label </template>
          bdd
        </ap-form-item>
      </ap-form>
    </Card>

    <Card title="其他用法">
      <ap-form>
        <ap-form-item label="test">
          <div>得到的</div>
        </ap-form-item>
      </ap-form>
    </Card>
  </div>
</template>

<script setup>
import { ApForm, ApFormItem } from 'apathia-ui'
// label的使用方法： 1、form-item中定义label属性 2、使用slot插槽 命名插槽 label
// 设置inline后 labelWidth依然生效
</script>
