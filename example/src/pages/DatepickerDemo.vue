<template>
  <div>
    <button @click="resetTime">reset time</button>
    <p @click="resetTime()">{{ time }}</p>
    <Card title="基础用法">
      <Datepicker v-model="time" />
      <p>{{ form }}</p>
      <DatepickerGroup
        v-model:start-time="form.stime"
        v-model:end-time="form.etime"
        date-format="Y-m-d H:i:S"
      />
    </Card>

    <Card title="其他用法">
      <DatepickerGroup
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

<script>
import { Datepicker, DatepickerGroup } from '@apathia/apathia'

export default {
  components: {
    Datepicker,
    DatepickerGroup,
  },

  data() {
    return {
      form: {
        stime: '2021-06-16 02:45:50',
        etime: '',
        start_time: 0,
        end_time: 0,
      },
      time: '',
    }
  },

  methods: {
    resetTime() {
      this.form.start_time = 0
      this.form.stime = ''
      this.form.end_time = 0
      this.form.etime = ''
    },
  },
}
</script>
