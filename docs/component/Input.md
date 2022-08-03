# Input

输入框

## 基础用法

:::demo

<<< @/../packages/input/demo/Basic.vue

:::

## 输入框禁用

disabled

:::demo

<<< @/../packages/input/demo/Disabled.vue

:::

## 显示搜索按钮并触发搜索事件

search

:::demo

<<< @/../packages/input/demo/Search.vue

:::

## 显示清除按钮

clearable

:::demo

<<< @/../packages/input/demo/Clearable.vue

:::

## 增加前缀和后缀

:::demo

<<< @/../packages/input/demo/Prepend.vue

:::

## props

| prop       |       说明       |    类型 | 默认值 |
| ---------- | :--------------: | ------: | -----: |
| type       |    原生 type     |  string |   text |
| modelValue |      绑定值      |  string,number |   无 |
| inputClass |  input 的 class  |  string |     '' |
| search     |     是否搜索     | boolean |  false |
| clearable  | 是否显示清除按钮 | boolean |  false |
| disabled   |       禁用       | boolean |  false |
| maxwords   | 最长的字长数，一个英文等于0.5字长，一个中文等于1个字长 | number |  无 |

## slots

input slots 如下，使用方法见上前后缀

> prepend 前缀

> append 后缀

## events

> input: 输入时触发. 参数为 e. e 是 input 的原生 event

> search: 点击搜索按钮时触发. 参数为 value. value 是 input 的值
