# Tag

标签

`分为 Tag 和 Tags 两种标签`

## Tag 用法

### 基础用法

`tag` 内容可以通过默认插槽的方式或者 `text` 属性指定

:::demo

<<< @/../packages/tag/demo/Basic.vue

:::

### 带边框的tag

使用 `hollow` 属性加上边框

:::demo

<<< @/../packages/tag/demo/Hollow.vue

:::

## Tags 用法

### 基础用法

通过 `v-model` 可以绑定tags的值，可以添加或者删除，默认是不可删除，可以通过将 `closable` 设置为 `true` 开启

:::demo

<<< @/../packages/tag/demo/tags/Basic.vue

:::

### 组件联动

可以通过外部控制 `Tags` 组件内的显示内容

:::demo

<<< @/../packages/tag/demo/tags/Manual.vue

:::


## Props | Tag

| prop      |     说明     |           类型 | 默认值 |
| --------- | :----------: | -------------: | -----: |
| success | 使用success主题 | boolean | false |
| primary | 使用primary主题 | boolean | false |
| danger | 使用danger主题 | boolean | false |
| warning | 使用warning主题 | boolean | false |
| hollow | hollow模式 | boolean | false |
| text  |  内容,也可以用 slot  |  string |     '' |
| iconClass |  图标     |   string |     '' |
| closable  |  是否可以关闭  |   boolean |  false |

## Slots | Tag
| name | 参数 |   说明       |
| ---- | ------- | ------------- |
| default | 无 | 默认tag的显示 |

## Props | Tags

| prop      |     说明     |           类型 | 默认值 |
| --------- | :----------: | -------------: | -----: |
| modelValue | tag值，可以是字符串数组，也可以是对象数组，type属性为'success'\|'danger'\|'warning'\|'primary', 以及closeable, text, iconClass属性 | string[]\|object[] | - |
| success | 使用success主题 | boolean | false |
| primary | 使用primary主题 | boolean | false |
| danger | 使用danger主题 | boolean | false |
| warning | 使用warning主题 | boolean | false |
| hollow | hollow模式 | boolean | false |
| showTag | 从单个modelValue值获取显示的字符串 | function | (str) => str
| handleTag | 新增tag时，将输入变成tag时的方法 | function | (str) => str

## Events | Tags
| 事件名称 |  说明   | 回调参数 |
| ---- | ------ | ----- |
| update:modelValue | 更新tags列表 |  TagItem[]|
| change | tags列表发生改变时触发 | (tags: TagItem[]) => void |

## Slots | Tags
| name | 参数 |   说明       |
| ---- | ------- | ------------- |
| create | 无 | 添加tag元素的按钮 |
