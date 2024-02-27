<template>
  <div>
    <Card title="基础用法">
      <Upload
        v-model="file1"
        action="/api/admin/articles/images"
        name="file"
        :headers="headers"
        :resolve-url="resolveLocation"
      />
      <p>{{ file1 }}</p>
    </Card>

    <Card title="其他用法">
      <Upload
        v-model="file2s"
        :multiple="true"
        action="/x/admin/creative/material/upload"
        https
        :resolve-url="resolveLocation"
      />
      <p v-for="(file, index) in file2s" :key="index">{{ file }}</p>
    </Card>

    <Card title="drag">
      <Upload
        v-model="file3"
        :draggable="true"
        action="/x/admin/creative/material/upload"
        :resolve-url="resolveLocation"
      />
      <p>{{ file3 }}</p>
    </Card>

    <Card title="drag + multiple">
      <Upload
        v-model="file4s"
        :draggable="true"
        :multiple="true"
        action="/x/admin/creative/material/upload"
        :resolve-url="resolveLocation"
      />
      <p v-for="(file, index) in file4s" :key="index">{{ file }}</p>
    </Card>

    <Card title="点击上传自定义上传按钮">
      <Upload
        v-model="file5"
        action="/x/admin/creative/material/upload"
        :resolve-url="resolveLocation"
      >
        <template #button>
          <span
            style="background-color: #ccc; color: white; white-space: nowrap"
          >
            点击
          </span>
        </template>
      </Upload>
      <p>{{ file5 }}</p>
    </Card>

    <Card title="拖拽上传自定义上传">
      <Upload
        v-model="file6"
        :draggable="true"
        action="/x/admin/creative/material/upload"
        :resolve-url="resolveLocation"
      >
        <template #drag>
          <div
            style="
              background-color: #ccc;
              color: white;
              padding: 1.5rem;
              text-align: center;
            "
          >
            拖入文件或者点击上传
          </div>
        </template>
      </Upload>
      <p>{{ file6 }}</p>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ApUpload as Upload } from 'apathia-ui'
const file1 = ref('')
const file2s = ref([])
const file3 = ref('')
const file4s = ref([])
const file5 = ref('')
const file6 = ref('')

const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkYThhOWE1NDM0YjI0NWE3OGJjNDIwMWQ5MzM1NDM2YyIsInN1YiI6IjEwMTQiLCJpc3MiOiJodWF3ZWltaWFuIn0.keqe99z709uRQB7o0Wrc19af1iz_xf0fZN6zEsGiLmg',
}

const resolveLocation = resp => {
  return resp.data
}
</script>
