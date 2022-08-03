# Upload

上传

上传组件一共有 最基础的Upload组件，用于上传到BFS的普通上传组件 BfsUpload, 以及上传到BFS的图片上传组件 BfsImageUpload。BfsUpload 和 BfsImageUpload都是对 Upload的二次封装。

## Upload/

### 基础用法 | Upload

指定上传路径

:::demo

<<< @/../packages/upload/demo/Basic.vue

:::

### 上传多张图片

通过指定 `multiple` 为 true 可以允许上传多张图片

:::demo

<<< @/../packages/upload/demo/Multiple.vue

:::

### 拖拽上传多个文件

通过指定 `draggable` 为 true 可以允许拖拽上传

:::demo

<<< @/../packages/upload/demo/Draggable.vue

:::

### props

| 参数 |  类型   | 是否必传 |   说明       | 默认值 |
| ---- | ------ | ----- | ------------- | ----- |
| modelValue | array/string | 是 | 上传地址的值，如果multiple是true，则是数组，否则是单个字符串 | - |
| valid | boolean | 否 | 上传资源是否符合要求 | false |
| draggable | boolean | 否 | 设置为true允许拖拽上传 | false |
| headers | object | 否 | 上传时需要附带的http 请求头 | false |
| action | string | 是 | 上传地址 | - |
| name | string | 否 | 上传时文件的名字，FormData的key键名 | 'file' |
| data | object | 否 | 上传时需要额外添加到FormData的k-v对 | - |
| inputDisabled | boolean | 否 | input输入框禁止输入 | false |
| noInput | boolean | 否 | 不显示输入框 | false |
| buttonName | string | 否 | 上传按钮的名字 | '上传' |
| withCredentials | boolean | 否 | http请求是否开发withCredentials，跨域时设置为true才会带上cookie | false |
| multiple | boolean | 否 | 是否支持多选 | false |
| limit | number | 否 | multiple为true事，最多支持几个问天 | 5 |
| filesize | string/number | 否 | 文件最大的大小，单位与File.size一致 | - |
| accept | string | 否 | 可上传的文件类型，与input标签的accept一致 | 'image/*' |
| disabled | boolean | 否 | multiple为true事，最多支持几个问天 | 5 |
| onBeforeEachUpload | function | 否 | 在每个文件上传前调用 参数是选中的File对象，通过返回File/Promise\<File\>来继续上传，通过抛出出错误来阻止上传 | - |
| onBeforeAllUpload | function | 否 | 在每文件上传前调用 参数是选中的FileList对象，通过返回true/Promise\<true\>来继续上传，通过返回false/Promise\<false\>/Promise.reject()来阻止上传 | - |
| onAfterEachUpload | function | 否 | 在每个文件上传完调用， 参数是选中的文件的url地址，返回true/Promise\<true\>，值会被当成有效的值；返回false/Promise\<false\>/Promise.reject()文件会被丢弃 | - |
| onError | function | 否 | 在上传出错时调用 | - |
| resolveUrl | function | 否 | 从http请求（就是action那个地址）响应拿到图片地址，返回一个字符串作为图片地址 | - |
| checkUrl | function | 否 | 用来检查url是否合法的方法，因为有时候组件是有初始值的，需要这个方法来检查一下url是否符合要求 | - |

### events

| 事件名称 |  说明   | 回调参数 |
| ---- | ------ | ----- |
| update:modelValue | 图片上传时触发更新 | 新的值 |
| update:valid | 图片 | modelValue有值时，会触发该事件，结果是该url是否符合要求，比如url对应的文件大小 |

### slots

| 插槽名称 |  说明   | 参数 |
| ---- | ------ | ----- |
| drag | 允许拖拽上传时，拖拽区域的显示。 | - |
| button | 点击上传时，上传按钮的显示内容 | - |

