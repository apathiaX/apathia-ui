<template>
  <div>
    支持 esc 按键关闭 | 点击蒙层关闭(默认关闭)
    <Card title="函数式调用">
      <BaseButton @click="open()">open</BaseButton>
    </Card>

    <Card title="模板调用">
      <BaseButton @click="show = !show">模板调用</BaseButton>
      <Modal
        v-model="show"
        title="模板调用"
        sub-title="测试模板调用"
        mask-closable
        @close="close"
      >
        <BaseButton @click="remove">点我关闭</BaseButton>
      </Modal>
    </Card>

    <Card title="自定义宽度">
      <Input v-model="width" />
      <BaseButton @click="() => open({ width: +width })">自定义宽度</BaseButton>
    </Card>

    <Card title="自定义顶部距离">
      <Input v-model="top" />
      <BaseButton @click="() => open({ top: +top })">自定义顶部距离</BaseButton>
    </Card>
    <Card title="不显示close按钮">
      <BaseButton @click="() => open({ showClose: false })">
        不显示close按钮(可用 esc 关闭 | 或者自己画按钮关闭)
      </BaseButton>
    </Card>

    <Card title="多层嵌套">
      <BaseButton @click="show1 = !show1">open第一层</BaseButton>
      <Modal v-model="show1">
        <BaseButton @click="show2 = !show2">open第二层</BaseButton>
        <Modal v-model="show2" :width="500" :top="150">
          第二层
          <BaseButton @click="remove">点我关闭</BaseButton>
        </Modal>
      </Modal>
    </Card>
    <Card title="不允许 esc 关闭">
      <BaseButton @click="() => open({ keyboard: false })"
        >不允许 esc 关闭</BaseButton
      >
    </Card>
    <Card title="允许点击蒙层关闭">
      <BaseButton @click="() => open({ maskClosable: true })">
        允许点击蒙层关闭
      </BaseButton>
    </Card>
    <Card title="接管关闭">
      <BaseButton @click="() => open({ beforeClose, maskClosable: true })">
        接管关闭(会阻断 x 号, esc, 点击蒙层, 不会阻断手动改变
        model(针对模板用法))
      </BaseButton>
    </Card>
    <Card title="二次确认">
      <div :class="tw`flex`">
        <span>title</span><Input v-model="title" /> <span>content</span
        ><Input v-model="content" /> <span>confirmText</span
        ><Input v-model="confirmText" /> <span>cancelText</span
        ><Input v-model="cancelText" /> <span>btnPosition</span
        ><Input v-model="btnPosition" />
      </div>
      <BaseButton @click="openConfirm">二次确认</BaseButton>
    </Card>
    <Card title="二次确认 renderContent">
      <BaseButton @click="openRenderConfirm">二次确认</BaseButton>
    </Card>
    <Card title="二次确认 renderFooter">
      <BaseButton @click="openRenderConfirm2">二次确认</BaseButton>
    </Card>
  </div>
</template>

<script setup>
import {
  Modal,
  Input,
  useConfirm,
  useModal,
  BaseButton,
} from '@apathia/apathia'
import { ref, h } from 'vue'
const { modal, remove } = useModal()
const { confirm } = useConfirm()

const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
const widthShow = ref(false)
const width = ref(640)
const top = ref(60)

const title = ref('title')
const content = ref('content')
const confirmText = ref('确认')
const cancelText = ref('取消')
const btnPosition = ref('left')

function open(props) {
  modal({
    title: title,
    subTitle: '测试函数调用',
    render: 'hhhhhhhh',
    onClose: close,
    ...props,
  })
}

function openConfirm() {
  confirm({
    title: title.value,
    render: content.value,
    confirmText: confirmText.value,
    cancelText: cancelText.value,
    btnPosition: btnPosition.value,
  })
    .then(() => {
      console.log('确认')
    })
    .catch(() => {
      console.log('取消')
    })
}

function openRenderConfirm() {
  confirm({
    title: 'renderContent',
    render: () => h(Input),
    width: 600,
  })
    .then(() => {
      console.log('确认')
    })
    .catch(() => {
      console.log('取消')
    })
}

function openRenderConfirm2() {
  confirm({
    title: 'renderFooter',
    render: '测试RenderFooter',
    renderFooter: ({ cancel }) => h('span', { onClick: cancel }, 'cancel'),
  })
    .then(() => {
      console.log('确认')
    })
    .catch(() => {
      console.log('取消')
    })
}

function close() {
  console.log('close')
}

function beforeClose() {
  console.log('阻止关闭')
  return false
}
</script>
