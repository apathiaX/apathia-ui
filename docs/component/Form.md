# Form 表单

表单主要提供统一的格式和表单的布局，可以通过设置表单的属性，统一表单内元素的样式

## 基础用法

:::demo

<<< @/demos/form/Basic.vue

:::

## 行内表单

当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

> 通过设置 inline 属性,可以让表单域变为行内的表单域。

::: demo
<<< @/demos/form/Inline.vue
:::

## 对齐方式

根据你们的设计情况，来选择最佳的标签对齐方式。

通过设置 label-position 属性可以改变表单域标签的位置，可选值为 top、left， 当设为 top 时标签会置于表单域的顶部
::: demo
<<< @/demos/form/Align.vue
:::

## props

### `Form` props

Form 组件可以设置一些属性，这些属性会影响到 Form 组件下所有的表单

| name          | 类型                          | 是否必传 | 说明                                | 默认值    |
| ------------- | ----------------------------- | -------- | ----------------------------------- | --------- |
| disabled      | boolean                       | 否       | disabled 所有表单输入               | undefined |
| inline        | boolean                       | 否       | inline 模式所有的 FormItem 将在一行 | false     |
| labelWidth    | number/string                 | 否       | label 的宽度，传数字自动加 `px`     | 80        |
| labelPosition | 'left', 'right', 'top'        | 否       | 控制`FormItem`label 的位置          | 'left'    |
| labelAlign    | 'top' \| 'center' \| 'bottom' | 否       | FormItem 里 label 的垂直方向的对齐  | 'top'     |

### `FormItem` props

如果`FormItem` 中声明了和 `Form`同样的 props，将会覆盖 `Form` 的 props

| name          | 类型                          | 是否必传 | 说明                                                        | 默认值    |
| ------------- | ----------------------------- | -------- | ----------------------------------------------------------- | --------- |
| prop          | string                        | 否       | 用来做表单校验(待完善)                                      | undefined |
| required      | boolean                       | 否       | 是否必填                                                    | false     |
| offset        | boolean                       | 否       | 在 label 为空时，labelPosition 不为 top 时 label 占用的宽度 | false     |
| labelWidth    | number/string                 | 否       | label 的宽度，传数字自动加 `px`                             | 80        |
| inline        | boolean                       | 否       | inline 模式所有的 FormItem 将在一行                         | false     |
| labelPosition | 'left', 'right', 'top'        | 否       | 控制`FormItem`label 的位置                                  | 'left'    |
| contentClass  | string                        | 否       | 设置 FormItem 除了 label 之外的容器的 class                 | ''        |
| labelAlign    | 'top' \| 'center' \| 'bottom' | 否       | FormItem 里 label 的垂直方向的对齐                          | 'top'     |

`FormItem` 的 `labelWidth`, `inline`, `labelPosition`可以覆盖`Form`的配置

::: tip
如果在 `Form` 上设置了 `disabled = true`属性，使用 `Form`下面的所有 apathia 表单（如 Input, Checkbox)都会被 disabled， 除非你在 表单组件上设置 disabled 属性，默认表单组件的 `props` 优先级高于 `form`
:::

```html
<form disabled>
  <FormItem>
    <input :disabled="false" />
    <!-- won't be disabled -->
  </FormItem>

  <FormItem>
    <input />
    <!-- will be disabled -->
  </FormItem>
</form>
```

## slots

| 插槽名称 | 说明                                      | 参数 |
| -------- | ----------------------------------------- | ---- |
| default  | 显示内容                                  | -    |
| label    | 内容 label，如果提供，将会覆盖 label prop | -    |
