<template>
  <div :class="styles.wrapper">
    <img
      :src="previewImage"
      :alt="alt"
      :class="styles.img"
      :style="imgStyle"
      @error="handleError"
    />
    <!-- 蒙层 -->
    <div v-if="preview" :class="styles.mask" @click="handleClickOpenMash">
      <!-- <span :class="styles.hoverEnlarge" @click.stop="handleClickCopyLocation">
        <ApIcon :class="styles.maskIcon" :size="10">
          <CopyDocument />
        </ApIcon>
        <i :class="styles.iconText">复制地址</i>
      </span>
      <span :class="[styles.hoverEnlarge, styles.iconGap]">
        <ApIcon :class="styles.maskIcon" :size="10">
          <View />
        </ApIcon>
        <i :class="styles.iconText">预览</i>
      </span> -->
    </div>
  </div>

  <!-- 图片加载失败占位 -->
  <slot v-if="isError" name="error">
    <div :class="styles.error" :style="imgErrorStyle">
      <p>加载失败</p>
    </div>
  </slot>

  <!-- 预览 -->
  <Teleport to="body">
    <Transition v-bind="transitionClass">
      <div
        v-if="mask"
        :class="styles.duration"
        @mousewheel.passive="handleMouseWheel"
      >
        <div :class="styles.shadeClass" @click="handleClickCloseMask">
          <div :class="styles.options">
            <ul
              :class="styles.optionContainer"
              @click="e => e.stopPropagation()"
            >
              <!-- 关闭 -->
              <li :class="styles.optionIcons" @click="handleClickCloseMask">
                <ApIcon>
                  <Close />
                </ApIcon>
              </li>
              <!-- 放大 -->
              <li :class="styles.optionIcons" @click="handleClickZoomIn">
                <ApIcon>
                  <Plus />
                </ApIcon>
              </li>
              <!-- 缩小 -->
              <li :class="styles.optionIcons" @click="handleClickZoomOut">
                <ApIcon>
                  <Minus />
                </ApIcon>
              </li>
              <!-- 右转90度 -->
              <li
                :class="[styles.optionIcons, styles.optionIconsSize]"
                @click="handleClickTurnRight"
              >
                <ApIcon>
                  <RefreshRight />
                </ApIcon>
              </li>
              <!-- 左转90度 -->
              <li
                :class="[styles.optionIcons, styles.optionIconsSize]"
                @click="handleClickTurnLeft"
              >
                <ApIcon>
                  <RefreshLeft />
                </ApIcon>
              </li>
            </ul>
          </div>
          <div
            :class="styles.previewImgWrap"
            :style="`transform: translate3d(${translate.x}px, ${translate.y}px, 0px) scale3d(${scaleTimes}, ${scaleTimes}, 1) rotate(${rotateAngle}deg)`"
          >
            <img
              :src="src"
              :alt="alt"
              :class="styles.previewImg"
              @mousedown.prevent="handleMouseDown"
              @mousemove.prevent="handleMouseMove"
              @mouseup.prevent="handleMouseUp"
              @click="e => e.stopPropagation()"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, shallowReactive, withDefaults } from 'vue'
import { ApIcon } from '@apathia/components/icon'
import { resizeImage } from '@apathia/shared'
import { getComputedStyle } from '@apathia/theme'
import type { ImageProps } from './types'
import { getImageStyle, getTransitionClass } from './image'
import Close from '../icon/Close.vue'
import Plus from '../icon/Plus.vue'
import Minus from '../icon/Minus.vue'
import RefreshLeft from '../icon/RefreshLeft.vue'
import RefreshRight from '../icon/RefreshRight.vue'

defineOptions({
  name: 'ApImage',
})

const props = withDefaults(defineProps<ImageProps>(), {
  alt: 'img',
  preview: true,
})

const mask = ref(false) // 是否显示预览蒙层

// 计算缩略图 url
const previewImage = computed(() => {
  const suffix =
    props.width && props.height
      ? `${props.width}x${props.height}`
      : props.width
      ? `${props.width}x0`
      : props.height
      ? `0x${props.height}`
      : '160x100'
  const path = props.src.replace(/^https?:/, '')

  return resizeImage(path, suffix)
})

// 转px格式
const toPx = (val?: number | string) => {
  if (!val) return
  const [num] = (val + '').split('px')
  return num + 'px'
}

// 缩略图尺寸。为保证图片宽高比，只需设置一个属性
const imgStyle = computed(() => {
  const width = toPx(props.width)
  const height = toPx(props.height)
  if (width) {
    // 设置了 width，用 width
    return { width }
  } else if (height) {
    // 只设置了 height，用 height
    return { height }
  } else {
    // 默认值
    return { width: '160px' }
  }
})

// 图片占位尺寸，宽高都需设置
const imgErrorStyle = computed(() => {
  const width = toPx(props.width)
  const height = toPx(props.height)
  if (width && height) {
    return { width, height }
  } else {
    return {
      width: width ? width : '160px',
      height: height ? height : '100px',
    }
  }
})

const isError = ref(false)

// 图片加载失败
const handleError = () => {
  isError.value = true
}

const clearOptions = () => {
  scaleTimes.value = 1
  rotateAngle.value = 0
  translate.x = 0
  translate.y = 0
}

// 复制图片地址
// const handleClickCopyLocation = () => {
//   const input = document.createElement('input')
//   document.body.appendChild(input)
//   input.setAttribute('value', props.src)
//   input.select()
//   if (document.execCommand('copy')) toast.success('复制图片地址成功')
//   document.body.removeChild(input)
// }

// 蒙层
const handleClickOpenMash = () => {
  const body = document.querySelector('body')
  if (body) {
    body.style.overflowY = 'hidden'
    mask.value = true
  }
}
const handleClickCloseMask = () => {
  const body = document.querySelector('body')
  if (body) {
    body.style.overflowY = 'auto'
    mask.value = false
  }
  // 清一下 options
  clearOptions()
}

// Options
// - 缩放
const scaleTimes = ref(1)
const handleClickZoomIn = () => {
  // 放大
  scaleTimes.value += 0.25
}
const handleClickZoomOut = () => {
  // 缩小 最小为原大小的0.75
  if (scaleTimes.value >= 1) scaleTimes.value -= 0.25
}

// - 旋转
const rotateAngle = ref(0)
const handleClickTurnLeft = () => {
  // 向左旋转90度
  rotateAngle.value -= 90
}
const handleClickTurnRight = () => {
  // 向右旋转90度
  rotateAngle.value += 90
}

// 平移 拖拽图片
const translate = shallowReactive({
  x: 0, // 向右平移
  y: 0, // 向下平移
})
let downPosition: null | Record<string, number> = null
const handleMouseDown = (e: MouseEvent) => {
  downPosition = {
    downX: e.clientX - translate.x, // 要处理一下上次的平移
    downY: e.clientY - translate.y,
  }
}
const handleMouseMove = (e: MouseEvent) => {
  if (downPosition) {
    const { downX, downY } = downPosition
    translate.x = e.clientX - downX
    translate.y = e.clientY - downY
  }
}
const handleMouseUp = () => {
  downPosition = null
}

// 鼠标滚轮事件 缩放
const handleMouseWheel = (e: WheelEvent) => {
  let direction = e.deltaY > 0 ? 'down' : 'up'
  if (direction === 'up') {
    // 滑轮向上滚动
    handleClickZoomIn()
  } else {
    // 滑轮向下滚动
    handleClickZoomOut()
  }
}

const styles = getComputedStyle({ isError: isError.value }, getImageStyle)
const transitionClass = getTransitionClass()
</script>
