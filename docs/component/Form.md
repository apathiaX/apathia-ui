# Form, FormItem

表单
表单和表单项

## 基础用法

:::demo

<<< @/../packages/form/demo/Basic.vue

:::

## props

### `Form` props

Form组件可以设置一些属性，这些属性会影响到Form组件下所有的表单

| name |  类型   | 是否必传 |   说明       | 默认值 |
| ---- | ------ | ----- | ------------- | ----- |
| disabled | boolean | 否 | disabled所有表单输入 | undefined |
| inline | boolean | 否 | inline模式所有的FormItem将在一行 | false |
| labelWidth | number/string | 否 | label的宽度，传数字自动加 `px` | 80 |
| labelPosition | 'left', 'right', 'top' | 否 | 控制`FormItem`label的位置 |  'left' |
| labelAlign | 'top' \| 'center' \| 'bottom' | 否 | FormItem里 label的垂直方向的对齐 | 'top' |

### `FormItem` props

如果`FormItem` 中声明了和 `Form`同样的props，将会覆盖 `Form` 的props

| name |  类型   | 是否必传 |   说明       | 默认值 |
| ---- | ------ | ----- | ------------- | ----- |
| prop | string | 否 | 用来做表单校验(待完善) | undefined |
| required | boolean | 否 | 是否必填 | false |
| offset | boolean | 否 | 在label为空时，labelPosition不为top时label占用的宽度 | false |
| labelWidth | number/string | 否 | label的宽度，传数字自动加 `px` | 80 |
| inline | boolean | 否 | inline模式所有的FormItem将在一行 | false |
| labelPosition | 'left', 'right', 'top' | 否 | 控制`FormItem`label的位置 | 'left' |
| contentClass | string | 否 | 设置FormItem除了label之外的容器的class | '' |
| labelAlign | 'top' \| 'center' \| 'bottom' | 否 | FormItem里 label的垂直方向的对齐 | 'top' |

`FormItem` 的 `labelWidth`, `inline`, `labelPosition`可以覆盖`Form`的配置

::: tip
如果在 `Form` 上设置了 `disabled = true`属性，使用 `Form`下面的所有 helm-ui表单（如Input, Checkbox)都会被disabled， 除非你在 表单组件上再传一个 disabled
:::

```html
<Form disabled>
  <FormItem>
    <Input :disabled="false"> <!-- won't be disabled -->
  </FormItem>

  <FormItem>
    <NumberInput /> <!-- will be disabled -->
  </FormItem>
</Form>
```

## slots

| 插槽名称 |  说明   | 参数 |
| ---- | ------ | ----- |
| default | 显示内容 | - |
| label | 内容label，如果提供，将会覆盖label prop | - |
