import { Component, ComputedRef, Ref } from 'vue'

export type SideNavNode = {
  text?: string
  icon?: Component
  children?: SideNavNode[]
  [k: string]: any
}

export interface SideNavProps {
  menuList?: SideNavNode[]
  activeKey?: string
  mini?: boolean
  search?: boolean
  keyField?: keyof SideNavNode
}

export interface SideNavNodeProps {
  node?: SideNavNode
  mini?: boolean
  activeKey?: string
  selectHandler?: Function
  keyField?: keyof SideNavNode
}

export interface SideNavUseReturn {
  getContainerProps: () => {
    onMouseenter: () => void
    onMouseleave: () => void
  }
  getSidenavInputProps: () => {
    onInput: (event: InputEvent) => void
  }
  filteredMenu: Ref<SideNavNode[]>
  showMini: ComputedRef<boolean>
}

export type SideNavEmits = {
  select: [node: SideNavNode]
  minChange: [isMini: boolean]
}
