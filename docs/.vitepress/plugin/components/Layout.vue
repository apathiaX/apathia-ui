<template>
  <div
    ref="demoBlock"
    :class="[
      'demo-block',
      blockClass,
      customClass ? customClass : '',
      { hover },
    ]"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div class="source">
      <slot name="preview"></slot>
    </div>
    <div ref="meta" class="meta">
      <div
        ref="highlight"
        class="highlight"
        @mouseenter="codeHover = true"
        @mouseleave="codeHover = false"
      >
        <transition name="slide-fade">
          <div v-if="codeHover" class="action">
            <i class="reset" @click.stop="resetCode">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
                />
              </svg>
            </i>
            <button class="copy" @click.stop="onCopy"></button>
          </div>
        </transition>
        <div v-if="!codeHover" class="highlight-lang">{{ lang }}</div>
        <slot name="editor"></slot>
      </div>
    </div>
    <div
      ref="control"
      :class="[
        'demo-block-control',
        { 'is-fixed': fixedControl, 'is-expanded': isExpanded },
      ]"
      @click="onClickControl"
    >
      <transition name="arrow-slide">
        <i
          :class="[
            'control-icon',
            {
              'icon-caret-down': !isExpanded,
              'icon-caret-up': isExpanded,
              hovering: hover,
            },
          ]"
        ></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hover" class="control-text">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { toast } from 'apathia-ui'
import { useClipboard, useThrottleFn } from '@vueuse/core'

const demoProps = defineProps<{
  customClass: string
  lang: string
  code: string
  resetCode: () => void
}>()
const { copy } = useClipboard()
const data = useData()
const route = useRoute()

const hover = ref<boolean>(false)
const codeHover = ref<boolean>(false)
const fixedControl = ref<boolean>(false)
const isExpanded = ref<boolean>(false)
const highlight = ref<HTMLElement | null>(null)
const meta = ref<HTMLElement | null>(null)
const control = ref<HTMLElement | null>(null)
const demoBlock = ref<HTMLElement | null>(null)

watch(isExpanded, val => {
  // meta.value!.style.height = val ? `${codeAreaHeight.value + 1}px` : '0'
  meta.value!.style.height = val ? `fit-content` : '0'
  if (!val) {
    fixedControl.value = false
    control.value!.style.left = '0'
    control.value!.style.width = 'auto'
    removeScrollHandler()
    return
  }
  setTimeout(() => {
    window.addEventListener('scroll', scrollHandler)
    window.addEventListener('resize', scrollHandler)
    _scrollHandler()
  }, 300)
})

onBeforeUnmount(() => {
  removeScrollHandler()
})

const _scrollHandler = () => {
  const { top, bottom, left } = meta.value!.getBoundingClientRect()
  const innerHeight = window.innerHeight || document.body.clientHeight
  fixedControl.value = bottom > innerHeight && top + 44 <= innerHeight
  control.value!.style.left = fixedControl.value ? `${left}px` : '0'
  const dv = fixedControl.value ? 1 : 2
  control.value!.style.width = `${demoBlock.value!.offsetWidth - dv}px`
}
const scrollHandler = useThrottleFn(_scrollHandler, 200)
const removeScrollHandler = () => {
  window.removeEventListener('scroll', scrollHandler)
  window.removeEventListener('resize', scrollHandler)
}
watch(
  () => route.path,
  path => {
    pathArr.value = path.split('/')
  },
)

const pathArr = ref(route.path.split('/'))
const component = computed(
  () => pathArr.value[pathArr.value.length - 1].split('.')[0],
)
const blockClass = computed(() => {
  return `demo-${component.value}`
})
// Expand
const onClickControl = () => {
  isExpanded.value = !isExpanded.value
  hover.value = isExpanded.value
}
const locale = computed(() => {
  return (
    // data.theme.value.demoBlock?.[data.localePath.value] ?? {
    //   'hide-text': '隐藏代码',
    //   'show-text': '显示代码',
    //   'copy-button-text': '复制代码片段',
    //   'copy-success-text': '复制成功',
    //   'copy-failed-text': '复制失败',
    // }
    {
      'hide-text': '隐藏代码',
      'show-text': '显示代码',
      'copy-success-text': '复制成功',
      'copy-failed-text': '复制失败',
    }
  )
})
const controlText = computed(() => {
  return isExpanded.value
    ? locale.value['hide-text']
    : locale.value['show-text']
})
const codeAreaHeight = computed(() => {
  return highlight.value!.clientHeight
})
// Copy
const onCopy = async () => {
  try {
    copy(demoProps.code)
    toast.success(locale.value['copy-success-text'])
  } catch (err) {
    toast.danger(locale.value['copy-failed-text'])
  }
}
</script>
<style scoped>
:global(.vp-doc .demo-block div[class*='language-']) {
  border-radius: 0 !important;
}
.demo-block {
  margin: 10px 0;
  border: solid 1px var(--demo-block-border);
  border-radius: 6px;
  transition: 0.2s;
}
.demo-block.hover {
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
}
html.dark .demo-block.hover {
  box-shadow: unset;
}
.source {
  box-sizing: border-box;
  padding: 24px;
  transition: 0.2s;
  overflow: auto;
}
.meta {
  border-top: solid 1px var(--demo-block-border);
  background-color: var(--vp-c-bg);
  overflow: hidden;
  height: 0;
  transition: height 0.2s;
}
.demo-block-control {
  border-top: solid 1px var(--demo-block-border);
  height: 44px;
  box-sizing: border-box;
  background-color: var(--demo-block-control-bg);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: var(--demo-block-control);
  cursor: pointer;
  position: relative;
}
.demo-block-control.is-expanded {
  margin-top: -2px;
}
.demo-block-control.is-fixed {
  position: sticky;
  bottom: 0;
  width: calc(100% - 20rem - 3rem - 12.5rem - 1px);
  border-right: solid 1px var(--demo-block-border);
  z-index: 2;
}
.demo-block-control .control-icon {
  display: inline-block;
  font-size: 16px;
  line-height: 44px;
  transition: 0.3s;
}
.demo-block-control .control-icon.hovering {
  transform: translateX(-40px);
}
.demo-block-control .control-text {
  position: absolute;
  transform: translateX(-30px);
  font-size: 14px;
  line-height: 44px;
  font-weight: 500;
  transition: 0.3s;
  display: inline-block;
}
.demo-block-control:hover {
  color: var(--vp-c-brand);
  background-color: var(--demo-block-control-bg-hover);
}
.demo-block-control .text-slide-enter,
.demo-block-control .text-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
.demo-block-control .control-button {
  padding: 13px 0;
  color: var(--vp-c-brand);
  font-size: 14px;
  font-weight: 500;
  margin: 0 10px;
}
.demo-block-control .control-button-wrap {
  line-height: 43px;
  position: absolute;
  top: 0;
  right: 0;
  padding-left: 5px;
  padding-right: 25px;
}
.highlight {
  position: relative;
}
.highlight .highlight-lang {
  position: absolute;
  top: 2px;
  right: 8px;
  font-size: 12px;
  color: var(--vp-code-lang-color);
  z-index: 2;
}
.action {
  position: absolute;
  display: flex;
  gap: 8px;
  top: 12px;
  right: 12px;
  z-index: 3;
}
.copy {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid var(--vp-code-copy-code-border-color);
  cursor: pointer;
  background-color: var(--vp-code-copy-code-bg);
  background-image: var(--vp-icon-copy);
  background-position: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  transition: border-color 0.25s, background-color 0.25s, opacity 0.25s;
}
.reset {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid var(--vp-code-copy-code-border-color);
  cursor: pointer;
  color: var(--vp-code-lang-color);
  background-color: var(--vp-code-copy-code-bg);
  transition: border-color 0.25s, background-color 0.25s, opacity 0.25s;
}
.copy:hover,
.reset:hover {
  border-color: var(--vp-code-copy-code-hover-border-color);
  background-color: var(--vp-code-copy-code-hover-bg);
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
<style>
.highlight div[class*='language-'] {
  margin: 0 !important;
}
</style>
