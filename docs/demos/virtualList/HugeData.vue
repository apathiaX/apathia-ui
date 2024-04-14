<template>
  <ap-button primary @click="genData">加载数据</ap-button>
  <div class="container">
    <VirtualList :list="list" itemKey="id" :buffer="2" :minSize="40">
      <template #default="{ itemData, index }">
        <div class="row-item">#{{ index }} - {{ itemData.text }}</div>
      </template>
      <template #empty>
        <div class="empty">
          <div v-if="!loading" style="display: flex; gap: 10px">
            <ap-icon>
              <Document />
            </ap-icon>
            列表为空
          </div>
          <div v-else style="display: flex; gap: 10px">
            <ap-icon class="loading-icon"><Loading /></ap-icon>
            数据加载中...
          </div>
        </div>
      </template>
    </VirtualList>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { toast } from 'apathia-ui'
import { VirtualList } from '@apathia/virtual-list'
import { Document, Loading } from '@apathia/icons-vue'
// @ts-ignore
import url from './100w.zip'
import JSZip from 'jszip'

const list = ref<{ index: number; id: string; text: string }[]>([])
const loading = ref(false)

const genData = async () => {
  loading.value = true
  toast.primary('数据加载中...')
  fetch(url)
    .then(res => {
      if (res.status === 200 || res.status === 0) {
        return Promise.resolve(res.blob())
      } else {
        return Promise.reject(new Error(res.statusText))
      }
    })
    .then(JSZip.loadAsync)
    .then(async zip => {
      const data = await zip.file(`data.json`)?.async('string')
      if (data) {
        list.value = JSON.parse(data)
        toast.success('数据加载成功')
      }
      loading.value = false
    })
}
</script>

<style>
.container {
  height: 500px;
  border: 1px solid var(--vp-c-border);
  border-radius: 5px;
  margin-top: 10px;
}
.row-item {
  min-height: 40px;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
}
.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 10px;
  font-size: 20px;
}

.loading-icon {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}
</style>
