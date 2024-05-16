export type TreeNodeData = Record<string, any>
export type TreeKey = string | number
export type TreeData = TreeNodeData[]

export interface ITreeNode {
  key: TreeKey
  level: number
  parent?: ITreeNode
  children?: ITreeNode[]
  data: TreeNodeData
  disabled?: boolean
  label?: string
  isLeaf?: boolean
}

export interface ITreeOptionProps {
  children?: string
  label?: string
  value?: string
  disabled?: string
}

export interface ITreeInfo {
  treeNodesMap: Map<TreeKey, ITreeNode>
  treeNodes: ITreeNode[]
}
