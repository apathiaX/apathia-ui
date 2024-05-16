import {
  computed,
  nextTick,
  ref,
  shallowRef,
  watch,
  type ExtractPropTypes,
  type PropType,
  type SetupContext,
} from 'vue'
import { VirtualList } from '@apathia/virtual-list'
import type {
  ITreeNode,
  ITreeInfo,
  TreeNodeData,
  TreeData,
  TreeKey,
  ITreeOptionProps,
} from './types'

// enums
export enum TreeOptionsEnum {
  KEY = 'id',
  LABEL = 'label',
  CHILDREN = 'children',
}

// emits
export const NODE_CLICK = 'node-click'
export const NODE_EXPAND = 'node-expand'
export const NODE_COLLAPSE = 'node-collapse'
export const CURRENT_CHANGE = 'current-change'

export const TreeEmits = {
  [NODE_CLICK]: (data: TreeNodeData, node: ITreeNode, e: MouseEvent) =>
    data && node && e,
  [NODE_EXPAND]: (data: TreeNodeData, node: ITreeNode) => data && node,
  [NODE_COLLAPSE]: (data: TreeNodeData, node: ITreeNode) => data && node,
  [CURRENT_CHANGE]: (data: TreeNodeData, node: ITreeNode) => data && node,
}

export const TreeProps = {
  data: {
    type: Array as PropType<TreeData>,
    required: true,
    default: () => [],
  },
  props: {
    type: Object as PropType<ITreeOptionProps>,
    default: () => ({ children: 'children', label: 'label', value: 'value' }),
  },
  defaultExpandedKeys: {
    type: Array as PropType<TreeKey[]>,
    default: () => [],
  },
  indent: {
    type: Number,
    default: 16,
  },
  currentNodeKey: {
    type: [String, Number] as PropType<TreeKey>,
    default: '',
  },
  minSize: {
    type: Number,
    default: 10,
  },
  expandOnClickNode: {
    type: Boolean,
    default: true,
  },
}

export const TreeNodeEmits = {
  click: (node: ITreeNode, e: MouseEvent) => node && e,
}

export const useTree = (
  props: ExtractPropTypes<typeof TreeProps>,
  emits: SetupContext<typeof TreeEmits>['emit'],
) => {
  const virListRef = ref<InstanceType<typeof VirtualList> | null>(null)
  const expandedKeysSet = ref<Set<TreeKey>>(new Set(props.defaultExpandedKeys))
  const tree = shallowRef<ITreeInfo | undefined>()
  const currentKey = ref<TreeKey>()

  const flattenList = computed(() => {
    const expandedKeys = expandedKeysSet.value
    const flattenNodes: ITreeNode[] = []
    const nodes = (tree.value && tree.value.treeNodes) || []
    function traverse() {
      const stack: ITreeNode[] = []
      for (let i = nodes.length - 1; i >= 0; --i) {
        stack.push(nodes[i])
      }
      while (stack.length) {
        const node = stack.pop()
        if (!node) continue
        flattenNodes.push(node)
        if (expandedKeys.has(node.key)) {
          const children = node.children
          if (children) {
            const length = children.length
            for (let i = length - 1; i >= 0; --i) {
              stack.push(children[i])
            }
          }
        }
      }
    }
    traverse()
    return flattenNodes
  })

  const valueKey = computed(() => {
    return props.props?.value || TreeOptionsEnum.KEY
  })
  const childrenKey = computed(() => {
    return props.props?.children || TreeOptionsEnum.CHILDREN
  })
  const labelKey = computed(() => {
    return props.props?.label || TreeOptionsEnum.LABEL
  })

  const getKey = (node: TreeNodeData) => (!node ? '' : node[valueKey.value])
  const getChildren = (node: TreeNodeData) =>
    !node ? [] : node[childrenKey.value]
  const getLabel = (node: TreeNodeData) => (!node ? '' : node[labelKey.value])

  const createTree = (data: TreeData): ITreeInfo => {
    const treeNodesMap = new Map<TreeKey, ITreeNode>()
    const flat = (nodes: TreeData, level: number = 1, parent?: ITreeNode) => {
      const currNodes: ITreeNode[] = []
      for (const rawNode of nodes) {
        const children = getChildren(rawNode)
        const key = getKey(rawNode)
        const label = getLabel(rawNode)
        const node: ITreeNode = {
          data: rawNode,
          key,
          parent,
          level,
          label,
          isLeaf: !children || children.length === 0,
        }
        if (children && children.length) {
          node.children = flat(children, level + 1, node)
        }
        currNodes.push(node)
        treeNodesMap.set(key, node)
      }
      return currNodes
    }
    const treeNodes = flat(data)
    return {
      treeNodes,
      treeNodesMap,
    }
  }

  const expandNode = (node: ITreeNode) => {
    emits(NODE_COLLAPSE, node.data, node)
    expandedKeysSet.value.add(node.key)
  }

  const collapseNode = (node: ITreeNode) => {
    emits(NODE_EXPAND, node.data, node)
    expandedKeysSet.value.delete(node.key)
  }

  const toggleExpand = (node: ITreeNode) => {
    if (!virListRef.value) return
    const { offset: preOffset } = virListRef.value.reactiveData
    const expandedKeys = expandedKeysSet.value
    if (expandedKeys.has(node.key)) {
      collapseNode(node)
    } else {
      expandNode(node)
    }
    nextTick(() => {
      if (virListRef.value) virListRef.value.scrollToOffset(preOffset)
    })
  }

  const setTreeData = (data: TreeData) => {
    tree.value = createTree(data)
  }

  const isExpanded = (node: ITreeNode) => {
    return expandedKeysSet.value.has(node.key)
  }

  const isCurrent = (node: ITreeNode) => {
    return !!currentKey.value && currentKey.value === node.key
  }

  const onClickTreeNode = (node: ITreeNode, e: MouseEvent) => {
    emits(NODE_CLICK, node.data, node, e)
    if (!isCurrent(node)) {
      emits(CURRENT_CHANGE, node.data, node)
      currentKey.value = node.key
    }
    if (props.expandOnClickNode) {
      toggleExpand(node)
    }
  }

  const getCurrentNode = (data: TreeKey | TreeNodeData) => {
    const key = typeof data === 'object' && data !== null ? getKey(data) : data
    return tree.value?.treeNodesMap.get(key)
  }

  const getCurrentKey = () => {
    return currentKey.value
  }

  const setCurrentKey = (key: TreeKey) => {
    currentKey.value = key
  }

  const setExpandedKeys = (keys: TreeKey[]) => {
    expandedKeysSet.value = new Set(keys)
  }

  watch(
    () => props.data,
    (data: TreeData) => {
      setTreeData(data)
      if (!virListRef.value) return
      virListRef.value.forceUpdate()
    },
    {
      immediate: true,
    },
  )

  watch(
    () => props.currentNodeKey,
    key => {
      currentKey.value = key
    },
    {
      immediate: true,
    },
  )

  return {
    virListRef,
    tree,

    flattenList,

    toggleExpand,
    expandNode,
    collapseNode,
    onClickTreeNode,
    isExpanded,
    isCurrent,
    getCurrentNode,
    getCurrentKey,
    setCurrentKey,
    setExpandedKeys,
  }
}
