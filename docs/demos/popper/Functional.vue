<template>
  <ap-button @click="showPopper">函数式调用</ap-button>
  <ap-button ref="popperRef">Target</ap-button>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { usePopperTip } from 'apathia-ui'

const { popper } = usePopperTip()
const popperRef = ref<HTMLElement | null>(null)

const showPopper = () => {
  popper({
    target: popperRef.value,
    render: () =>
      h('div', [
        h('div', 'Functional Title'),
        h('div', 'Functional Content'),
        h('div', 'Functional Content'),
        h('div', 'Functional Content'),
      ]),
  })
}
</script>
