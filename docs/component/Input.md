# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

:::demo

<<< @/demos/input/Basic.vue

:::

## 输入框禁用

通过 `disabled` 属性指定是否禁用 input 组件

:::demo

<<< @/demos/input/Disabled.vue

:::

## 显示搜索按钮并触发搜索事件

通过 `search` 属性指定是否进行搜索，通过`Search`事件可以获取搜索的值

:::demo

<<< @/demos/input/Search.vue

:::

## 显示清除按钮

使用 `clearable` 属性即可得到一个可一键清空的输入框

:::demo

<<< @/demos/input/Clearable.vue

:::

## 格式化输入

使用 `formatter` 属性指定一个格式化函数来对输入值进行格式化，同时配合 `parser` 属性指定一个解析函数来对已格式化的值进行解析。

:::demo

<<< @/demos/input/Formatter.vue

:::

## 复合型输入框

可以在输入框中前置或后置一个元素，通常是标签或按钮。

可通过 slot 来指定在 Input 中的前置或者后置的内容。
:::demo

<<< @/demos/input/Prepend.vue

:::

## 最大输入长度

使用 maxWords 属性, 来控制输入内容的最大字数。

:::demo

<<< @/demos/input/MaxLength.vue

:::

## 文本框

用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 `input` 元素转换为原生的 `textarea` 元素。<br/>

文本域高度可通过 `rows` 属性控制

:::demo
<<< @/demos/input/Textarea.vue
:::

## Input Props

| prop        |                            说明                            |                              类型 | 默认值 |
| ----------- | :--------------------------------------------------------: | --------------------------------: | -----: |
| type        |                         原生 type                          |                'text', 'textarea' |   text |
| modelValue  |                           绑定值                           |                     string,number |     无 |
| inputClass  |                       input 的 class                       |                            string |     '' |
| search      |                          是否搜索                          |                           boolean |  false |
| clearable   |                      是否显示清除按钮                      |                           boolean |  false |
| disabled    |                            禁用                            |                           boolean |  false |
| maxWords    | 最长的字长数，一个英文等于 0.5 字长，一个中文等于 1 个字长 |                            number |     无 |
| placeholder |                        输入提示文字                        |                            string |     '' |
| formatter   |                    指定输入值的输入格式                    | (val: string \| number) => string |     无 |
| parser      |               指定从格式化器输入中提取的值。               |           (val: string) => string |     无 |
| rows        |          输入框行数，仅 type 为 'textarea' 时有效          |                            number |      3 |
| size        |                        输入框的尺寸                        |                  'sm', 'md' ,'lg' |   'md' |
| prefixIcon  |                       自定义前缀图标                       |                         Component |     无 |
| suffixIcon  |                       自定义后缀图标                       |                         Component |     无 |

## Input 插槽

input slots 如下，使用方法见上前后缀

| 名称    |      说明      |
| ------- | :------------: |
| prepend | 输入框前置内容 |
| append  | 输入框后置内容 |
| prefix  | 输入框前部内容 |
| suffix  | 输入框后部内容 |

## Input 事件

| 名称   |      说明      |            参数            |
| ------ | :------------: | :------------------------: |
| input  | 输入框前置内容 | e. e 是 input 的原生 event |
| search | 输入框后置内容 | value. value 是 input 的值 |
