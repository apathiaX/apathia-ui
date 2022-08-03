<template>
  <div>
    <Select
      v-model="demo"
      filterable
      remote
      clearable
      @query-change="queryChange"
    >
      <Option v-for="i in list" :key="i" :value="i">
        use slot here
        <p :label="'label=' + i">{{ i }}</p>
        <p :label="'label=' + i">
          <img
            src="http://uat-manager.bilibili.co/v2/static/img/logo.c7fe4713.svg"
            width="20"
            height="20"
            alt=""
          />
        </p>
        <p :label="'label=' + i">😊🥺😉😍😘😚😜😂😝😳😁😣😢😭😰</p>
      </Option>
    </Select>

    {{ demo }}
  </div>
</template>

<script>
import { ref, defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const demo = ref('')
    const list = reactive([
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
    ])
    const queryChange = val => {
      if (val) {
        list.splice(0, 1, val)
        // list改变要带remote 否则filterstr有问题
      }
    }
    return {
      demo,
      list,
      queryChange,
    }
  },
})
</script>
