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
      <component v-if="demoComp" :is="demoComp"></component>
      <!-- <slot /> -->
    </div>
    <div ref="meta" class="meta">
      <div v-if="$slots.description" ref="description" class="description">
        <slot name="description" />
      </div>
      <div
        ref="highlight"
        class="highlight"
        @mouseenter="codeHover = true"
        @mouseleave="codeHover = false"
      >
        <transition name="slide-fade">
          <button v-if="codeHover" class="copy" @click.stop="onCopy"></button>
        </transition>
        <div v-if="!codeHover" class="highlight-lang">{{ lang }}</div>
        <slot name="highlight" />
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
import {
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  getCurrentInstance,
  type ComponentInternalInstance,
  inject,
} from 'vue'
import { useClipboard, useThrottleFn } from '@vueuse/core'

const { proxy } = getCurrentInstance() as ComponentInternalInstance

const demoProps = defineProps<{
  customClass: string
  sourceCode: string
  lang: string
  path: string
}>()
const { copy } = useClipboard()
const data = useData()
const route = useRoute()

const hover = ref<boolean>(false)
const codeHover = ref<boolean>(false)
const fixedControl = ref<boolean>(false)
const isExpanded = ref<boolean>(false)
const highlight = ref<HTMLElement | null>(null)
const description = ref<HTMLElement | null>(null)
const meta = ref<HTMLElement | null>(null)
const control = ref<HTMLElement | null>(null)
const demoBlock = ref<HTMLElement | null>(null)

watch(isExpanded, val => {
  meta.value!.style.height = val ? `${codeAreaHeight.value + 1}px` : '0'
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

onMounted(() => {
  nextTick(() => {
    if (!description.value) {
      highlight.value!.style.width = '100%'
    }
  })
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
  if (description.value) {
    return description.value.clientHeight + highlight.value!.clientHeight + 20
  }
  return highlight.value!.clientHeight
})
// Copy
const onCopy = async () => {
  try {
    copy(demoProps.sourceCode)
    proxy!.$toast.success(locale.value['copy-success-text'], '', {
      showClose: false,
    })
  } catch (err) {
    proxy!.$toast.danger(locale.value['copy-failed-text'], '', {
      showClose: false,
    })
  }
}

const demos = inject<Map<string, any>>('demos')

const demoComp = computed(() => {
  const splitPath = demoProps.path.split('/')
  const name = splitPath[splitPath.length - 2]
  const compName = `${name}-${splitPath[splitPath.length - 1].split('.')[0]}`
  return demos?.get(compName)
})
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
  overflow: hidden;
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
.description {
  border: solid 1px var(--demo-block-border);
  border-radius: 3px;
  padding: 20px;
  box-sizing: border-box;
  line-height: 26px;
  color: var(--vp-c-text);
  word-break: break-word;
  margin: 10px 10px 6px 10px;
  background-color: var(--demo-block-description-bg);
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
.copy {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 3;
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
.copy:hover {
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
