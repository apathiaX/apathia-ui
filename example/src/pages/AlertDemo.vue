<template>
  <Card title="test">
    <p @click="open('info')">info</p>
    <p @click="open('danger')">danger</p>
    <p @click="open('success')">success</p>
    <p @click="open('warning')">warning</p>
    <p @click="open('default')">default</p>
  </Card>
  <Card title="render">
    <p @click="openRender">render</p>
  </Card>
  <Card title="自定义icon">
    <p @click="open('default', { iconClass: ['fa', 'user-secret'] })">
      自定义icon
    </p>
  </Card>
  <Card title="手动关闭 & 延迟世界呢">
    <p @click="open('danger', { duration: 0 })">手动关闭</p>
    <p @click="open('default', { duration: 5000 })">延迟5s</p>
  </Card>
  <Card title="不显示icon">
    <p @click="open('success')">显示icon</p>
    <p @click="open('success', { showIcon: false })">不显示icon</p>
  </Card>
</template>

<script setup>
import { h } from 'vue'
import { toast } from '@apathia/apathia'

function open(type, config) {
  toast[type](
    '这里是title',
    '这里是内容,这里是内容,这里是内容,这里是内容,这里是内容,这里是内容,',
    config,
  )
}
function openRender() {
  toast({
    type: 'success',
    duration: 0,
    render: ({ close }) => h('div', { onClick: close }, '点我关闭'),
  })
}
</script>
