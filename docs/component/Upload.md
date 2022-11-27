# Upload 上传

通过点击或者拖拽上传文件

## 基础用法

指定上传路径

:::demo

<<< @/../packages/upload/demo/Basic.vue

:::

## 上传多张图片

通过指定 `multiple` 为 true 可以允许上传多张图片

:::demo

<<< @/../packages/upload/demo/Multiple.vue

:::

## 拖拽上传多个文件

通过指定 `draggable` 为 true 可以允许拖拽上传

:::demo

<<< @/../packages/upload/demo/Draggable.vue

:::

## Upload Props

| 参数               | 类型          | 是否必传 | 说明                                                                                                                                                                            | 默认值     |
| ------------------ | ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| modelValue         | array/string  | 是       | 上传地址的值，如果 multiple 是 true，则是数组，否则是单个字符串                                                                                                                 | -          |
| valid              | boolean       | 否       | 上传资源是否符合要求                                                                                                                                                            | false      |
| draggable          | boolean       | 否       | 设置为 true 允许拖拽上传                                                                                                                                                        | false      |
| headers            | object        | 否       | 上传时需要附带的 http 请求头                                                                                                                                                    | false      |
| action             | string        | 是       | 上传地址                                                                                                                                                                        | -          |
| name               | string        | 否       | 上传时文件的名字，FormData 的 key 键名                                                                                                                                          | 'file'     |
| data               | object        | 否       | 上传时需要额外添加到 FormData 的 k-v 对                                                                                                                                         | -          |
| inputDisabled      | boolean       | 否       | input 输入框禁止输入                                                                                                                                                            | false      |
| noInput            | boolean       | 否       | 不显示输入框                                                                                                                                                                    | false      |
| buttonName         | string        | 否       | 上传按钮的名字                                                                                                                                                                  | '上传'     |
| withCredentials    | boolean       | 否       | http 请求是否开发 withCredentials，跨域时设置为 true 才会带上 cookie                                                                                                            | false      |
| multiple           | boolean       | 否       | 是否支持多文件上传                                                                                                                                                              | false      |
| limit              | number        | 否       | multiple 为 true 事，最多支持几个文件                                                                                                                                           | 5          |
| filesize           | string/number | 否       | 文件最大的大小，单位与 File.size 一致                                                                                                                                           | -          |
| accept             | string        | 否       | 可上传的文件类型，与 input 标签的 accept 一致                                                                                                                                   | 'image/\*' |
| disabled           | boolean       | 否       | 禁止上传文件                                                                                                                                                                    | false      |
| onBeforeEachUpload | function      | 否       | 在每个文件上传前调用 参数是选中的 File 对象，通过返回 File/Promise\<File\>来继续上传，通过抛出出错误来阻止上传                                                                  | -          |
| onBeforeAllUpload  | function      | 否       | 在每次文件上传前调用 参数是选中的 FileList 对象，通过返回 true/Promise\<true\>来继续上传，通过返回 false/Promise\<false\>/Promise.reject()来阻止上传                            | -          |
| onAfterEachUpload  | function      | 否       | 在每个文件上传完调用， 参数是选中的文件上传后返回的 url 地址和文件对象，返回 true/Promise\<true\>，值会被当成有效的值；返回 false/Promise\<false\>/Promise.reject()文件会被丢弃 | -          |
| onError            | function      | 否       | 在上传出错时调用                                                                                                                                                                | -          |
| resolveUrl         | function      | 否       | 从 http 请求（就是 action 那个地址）响应拿到图片地址，返回一个字符串作为图片地址                                                                                                | -          |
| checkUrl           | function      | 否       | 用来检查 url 是否合法的方法，因为有时候组件是有初始值的，需要这个方法来检查一下 url 是否符合要求                                                                                | -          |

## Upload 事件

| 事件名称          | 说明                       | 回调参数                                                                            |
| ----------------- | -------------------------- | ----------------------------------------------------------------------------------- |
| update:modelValue | 文件的路径的更新操作       | 文件路径改变后的值                                                                  |
| update:valid      | 更新需要上传的文件是否正确 | modelValue 有值时，会触发该事件，结果是该 url 是否符合要求，比如 url 对应的文件大小 |

## Upload 插槽

| 插槽名称 | 说明                             | 参数 |
| -------- | -------------------------------- | ---- |
| drag     | 允许拖拽上传时，拖拽区域的显示。 | -    |
| button   | 点击上传时，上传按钮的显示内容   | -    |
