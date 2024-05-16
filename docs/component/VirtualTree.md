# Virtual Tree

虚拟树形组件

## 基础用法

基础的树形结构展示，传入 `data` 即可
::: demo
<<< @/demos/virtual-tree/Basic.vue
:::

## 自定义节点内容

节点的内容支持自定义，可以在配置节点的内容和显示图标

::: demo
<<< @/demos/virtual-tree/Custom.vue
:::

## 高阶自定义

支持虚拟树任意内容的自定义

::: demo
<<< @/demos/virtual-tree/Advance.vue
:::

## Props

| prop                |                 说明                 |          类型 | 默认值 |
| ------------------- | :----------------------------------: | ------------: | -----: |
| data                |               展示数据               |    TreeData[] |      - |
| props               |               配置选项               |        Object |      - |
| defaultExpandedKeys |     默认展开的节点的 key 的数组      |      string[] |     [] |
| indent              |  相邻级节点间的水平缩进，单位为像素  |        Number |     16 |
| currentNodeKey      |            当前选中的节点            | String Number |      - |
| minSize             |          自定义节点最小高度          |        Number |     10 |
| expandOnClickNode   | 是否在点击节点的时候展开或者收缩节点 |       Boolean |   true |

## Slots

| 插槽名称     | 说明     | 参数 |
| ------------ | -------- | ---- |
| header       | 顶部     | -    |
| footer       | 底部     | -    |
| stickyFooter | 粘性底部 | -    |
| stickyHeader | 粘性顶部 | -    |
| icon         | 图标     | -    |
| content      | 节点内容 | -    |
| empty        | 空态     | -    |

## Events

| 事件名称       | 说明                         | 回调参数                                             |
| -------------- | ---------------------------- | ---------------------------------------------------- |
| node-click     | 当节点被点击的时候触发       | (data: TreeNodeData, node: ITreeNode, e: MouseEvent) |
| node-expand    | 节点被展开时触发的事件       | (data: TreeNodeData, node: ITreeNode)                |
| node-collapse  | 节点被收起时触发的事件       | (data: TreeNodeData, node: ITreeNode)                |
| current-change | 当前选中节点变化时触发的事件 | (data: TreeNodeData, node: ITreeNode)                |
