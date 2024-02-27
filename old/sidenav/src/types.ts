import { Component, ComputedRef, Ref, ShallowRef } from 'vue'

export type SideNode = {
  text?: string
  icon?: Component
  children?: SideNode[]
  [k: string]: any
}

export interface SideNavProps {
  menuList?: SideNode[]
  activeKey?: string
  mini?: boolean
  search?: boolean
  keyField?: keyof SideNode
}

export interface ISideNavReturn {
  getContainerProps: () => {
    onMouseenter: () => void
    onMouseleave: () => void
  }
  getSidenavInputProps: () => {
    onInput: (event: InputEvent) => void
  }
  filteredMenu: Ref<SideNode[]>
  showMini: ComputedRef<boolean>
}
