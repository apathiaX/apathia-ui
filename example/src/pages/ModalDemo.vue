<template>
  <div>
    支持 esc 按键关闭 | 点击蒙层关闭(默认关闭)
    <Card title="函数式调用">
      <ap-button @click="open()">open</ap-button>
    </Card>

    <Card title="模板调用">
      <ap-button @click="show = !show">模板调用</ap-button>
      <ap-modal
        v-model="show"
        title="模板调用"
        sub-title="测试模板调用"
        mask-closable
        @close="close"
      >
        <ap-button @click="remove">点我关闭</ap-button>
      </ap-modal>
    </Card>

    <Card title="自定义宽度">
      <ap-input v-model="width" />
      <ap-button @click="() => open({ width: +width })">自定义宽度</ap-button>
    </Card>

    <Card title="自定义顶部距离">
      <ap-input v-model="top" />
      <ap-button @click="() => open({ top: +top })">自定义顶部距离</ap-button>
    </Card>
    <Card title="不显示close按钮">
      <ap-button @click="() => open({ showClose: false })">
        不显示close按钮(可用 esc 关闭 | 或者自己画按钮关闭)
      </ap-button>
    </Card>

    <Card title="多层嵌套">
      <ap-button @click="show1 = !show1">open第一层</ap-button>
      <ap-modal v-model="show1">
        <ap-button @click="show2 = !show2">open第二层</ap-button>
        <ap-modal v-model="show2" :width="500" :top="150">
          第二层
          <ap-button @click="remove">点我关闭</ap-button>
        </ap-modal>
      </ap-modal>
    </Card>
    <Card title="不允许 esc 关闭">
      <ap-button @click="() => open({ keyboard: false })"
        >不允许 esc 关闭</ap-button
      >
    </Card>
    <Card title="允许点击蒙层关闭">
      <ap-button @click="() => open({ maskClosable: true })">
        允许点击蒙层关闭
      </ap-button>
    </Card>
    <Card title="接管关闭">
      <ap-button @click="() => open({ beforeClose, maskClosable: true })">
        接管关闭(会阻断 x 号, esc, 点击蒙层, 不会阻断手动改变
        model(针对模板用法))
      </ap-button>
    </Card>
    <Card title="二次确认">
      <div :class="tw`flex`">
        <span>title</span><ap-input v-model="title" /> <span>content</span
        ><ap-input v-model="content" /> <span>confirmText</span
        ><ap-input v-model="confirmText" /> <span>cancelText</span
        ><ap-input v-model="cancelText" /> <span>btnPosition</span
        ><ap-input v-model="btnPosition" />
      </div>
      <ap-button @click="openConfirm">二次确认</ap-button>
    </Card>
    <Card title="二次确认 renderContent">
      <ap-button @click="openRenderConfirm">二次确认</ap-button>
    </Card>
    <Card title="二次确认 renderFooter">
      <ap-button @click="openRenderConfirm2">二次确认</ap-button>
    </Card>
  </div>
</template>

<script setup>
import { ApModal, ApInput, useConfirm, useModal, ApButton } from 'apathia-ui'
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
    render: () => h(ApInput),
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
