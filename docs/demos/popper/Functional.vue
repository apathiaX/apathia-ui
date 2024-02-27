<template>
  <ap-button @click="showPopper">函数式调用</ap-button>
  <ap-button ref="popperRef">Target</ap-button>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { usePoppertip } from 'apathia-ui'

const { popper } = usePoppertip()
const popperRef = ref<HTMLElement | null>(null)

const showPopper = () => {
  popper({
    target: popperRef.value,
    render: () => (
      <div>
        <div>Function Title</div>
        <div>Function Content</div>
        <div>Function Content</div>
        <div>Function Content</div>
        <div>Function Content</div>
      </div>
    ),
  })
}
</script>
