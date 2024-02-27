<template>
  <div>
    <button @click="resetTime">reset time</button>
    <p @click="resetTime()">{{ time }}</p>
    <Card title="基础用法">
      <ap-datepicker v-model="time" />
      <p>{{ form }}</p>
      <ap-datepicker-group
        v-model:start-time="form.startTime"
        v-model:end-time="form.endTime"
        date-format="Y-m-d H:i:S"
      />
    </Card>

    <Card title="其他用法">
      <ap-datepicker-group
        v-model:start-time="form.start_time"
        v-model:end-time="form.end_time"
        :start-date-options="{
          minDate: new Date(),
          defaultHour: 23,
          defaultMinute: 33,
        }"
        timestamp
      />
    </Card>
  </div>
</template>

<script setup>
import { ApDatepicker, ApDatepickerGroup } from 'apathia-ui'

const from = ref({
  startTime: '2021-06-16 02:45:50',
  endTime: '',
  start_time: 0,
  end_time: 0,
})
const time = ref('')
const resetTime = () => {
  this.form.start_time = 0
  this.form.startTime = ''
  this.form.end_time = 0
  this.form.endTime = ''
}
</script>
