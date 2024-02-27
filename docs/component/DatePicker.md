# DatePicker

时间选择器

> 日期时间选择器基于[datepicker](https://flatpickr.js.org/)

## Datepicker

### 基础用法

默认是日期时间选择框
:::demo

<<< @/demos/datepicker/Basic.vue

:::

### 时间戳模式

日期时间选择框,绑定值为秒级时间戳
:::demo

<<< @/demos/datepicker/Timestamp.vue

:::

### 日期选择框

通过 dateFormat 控制日期格式
:::demo

<<< @/demos/datepicker/DateFormat.vue

:::

### 时间选择框

通过 dateFormat 控制日期格式
:::demo

<<< @/demos/datepicker/DateFormatTime.vue

:::

### 更多用法

设置最大值和最小值
:::demo

<<< @/demos/datepicker/MaxMin.vue

:::

### 完整 options

更多的用法详见 flatpickr 示例和文档 [datepicker 文档](https://flatpickr.js.org/)

### props

| prop       |             说明             |              类型 |        默认值 |
| ---------- | :--------------------------: | ----------------: | ------------: |
| modelValue |         model 绑定值         |     string,number |            无 |
| dateFormat | 对应 options 里的 dateFormat |            string | 'Y-m-d H:i:S' |
| timestamp  |       是否是时间戳模式       |           boolean |         false |
| options    |             配置             | flatpickr.options |            {} |
| disabled   |             禁用             |           boolean |         false |

### events

> change: 改变时触发。需要注意接受的参数为 { dateStr, value, }. dateStr 是时间字符串，value 为实际绑定的值(时间戳模式下不一样)。

## DatePickerGroup

### 基础用法 | DatePickerGroup

默认也是日期时间选择框
:::demo

<<< @/demos/datepicker/group/Basic.vue

:::

### 时间戳 | DatePickerGroup

时间戳用法同上
:::demo

<<< @/demos/datepicker/group/Timestamp.vue

:::

### props | DatePickerGroup

| prop         |             说明             |              类型 |        默认值 |
| ------------ | :--------------------------: | ----------------: | ------------: |
| startTime    |        开始时间绑定值        |     string,number |            无 |
| endTime      |        结束时间绑定值        |     string,number |            无 |
| dateFormat   | 对应 options 里的 dateFormat |            string | 'Y-m-d H:i:S' |
| timestamp    |       是否是时间戳模式       |           boolean |         false |
| startOptions |         开始时间配置         | flatpickr.options |            {} |
| endOptions   |         结束时间配置         | flatpickr.options |            {} |
| disabled     |             禁用             |           boolean |         false |
