<script setup lang="ts">
import clipboardCopy from 'clipboard-copy'
import { getCurrentInstance, ref, shallowRef } from 'vue'
import * as AllIcons from '@apathia/icons-vue/src/components'
import IconCategories from './IconList.json'
import type { ComponentInternalInstance, DefineComponent } from 'vue'

type CategoriesItem = {
  name: string
  icons: DefineComponent[]
}

const { proxy } = getCurrentInstance() as ComponentInternalInstance

const copyIcon = ref(true)

const copyContent = async content => {
  try {
    await clipboardCopy(content)
    proxy!.$toast({
      type: 'success',
      message: '复制成功',
      showClose: true,
    })
  } catch {
    proxy!.$toast({
      type: 'danger',
      message: '复制失败',
      showClose: true,
    })
  }
}
const copySvgIcon = async (name, refs) => {
  if (copyIcon.value) {
    await copyContent(`<ap-icon><${name} /></ap-icon>`)
  } else {
    const content = refs[name]?.[0].querySelector('svg')?.outerHTML ?? ''
    await copyContent(content)
  }
}

const categories = shallowRef<CategoriesItem[]>([])
const iconMap = new Map(Object.entries(AllIcons))
IconCategories.categories.forEach(o => {
  const result: CategoriesItem = {
    name: o.name,
    icons: [],
  }
  o.items.forEach(i => {
    const icon = iconMap.get(i)
    if (icon) {
      result.icons.push(icon)
      iconMap.delete(i)
    }
  })
  categories.value.push(result)
})
categories.value.push({ name: 'Other', icons: Array.from(iconMap.values()) })
</script>

<template>
  <div class="demo-switch">
    {{ copyIcon ? '复制图标代码' : '复制SVG代码' }}
    <ap-switch v-model="copyIcon"></ap-switch>
  </div>
  <div v-for="item in categories" :key="item.name" class="demo-icon-item">
    <div class="demo-icon-title">{{ item.name }}</div>
    <ul class="demo-icon-list">
      <div
        v-for="component in item.icons"
        :key="component.name"
        :ref="component.name"
        class="icon-item"
        @click="copySvgIcon(component.name, $refs)"
      >
        <span class="demo-svg-icon">
          <ap-icon :size="20">
            <component :is="component" />
          </ap-icon>
          <span class="icon-name">{{ component.name }}</span>
        </span>
      </div>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.demo-switch {
  text-align: right;
  font-size: 12px;
}
.demo-icon {
  &-item {
    margin-top: 24px;
  }
  &-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
  }
  &-list {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border-top: 1px solid #f1f2f3;
    border-left: 1px solid #f1f2f3;
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    .icon-item {
      text-align: center;
      height: 90px;
      font-size: 13px;
      border-right: 1px solid #f1f2f3;
      border-bottom: 1px solid #f1f2f3;
      &:hover {
        background-color: #effbff;
        color: #9499a0;
      }
      .demo-svg-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;
        .icon-name {
          margin-top: 8px;
        }
      }
    }
  }
}
</style>
