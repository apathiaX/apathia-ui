<script lang="ts" setup>
import { IScrollBarProps, IScrollbarEmit, IScrollbarEmitFn } from './type'
import { useScrollbar } from './useScrollbar'

const props = withDefaults(defineProps<IScrollBarProps>(), {
  scrollFrom: 0,
  direction: 'vertical',
})

const emits = defineEmits<IScrollbarEmit>()

const emitFn: IScrollbarEmitFn = {
  scroll: (distance: number) => {
    emits('scroll', distance)
  },
  startScroll: (startOffset: number) => {
    emits('start-scroll', startOffset)
  },
  endScroll: (endOffset: number) => {
    emits('end-scroll', endOffset)
  },
}

const {
  trackStyle,
  trickRef,
  thumbRef,
  thumbStyle,
  onThumbDown,
  onClickTrack,
} = useScrollbar(props, emitFn)
</script>

<template>
  <div
    ref="trickRef"
    :style="trackStyle"
    class="scrollbar-container"
    @click="onClickTrack"
  >
    <div
      ref="thumbRef"
      class="scrollbar-item"
      :style="thumbStyle"
      @mousedown="onThumbDown"
      @touchstart="onThumbDown"
    ></div>
  </div>
</template>

<style scoped>
.scrollbar-item {
  position: absolute;
  border-radius: 5px;
  z-index: 11;
  opacity: 0.3;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
}
</style>
