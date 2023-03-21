import { isString } from './../../shared/src/types';
import { computed, ref, watch } from "vue"
import { DataItem, TreeProps } from "./types"

export const useTree = (props: TreeProps) => {
    const selectedKeys = ref(props.defaultCheckedKeys || [])
    const selectedMap = computed(() => {
        const temp = new Map<number|string, number|string>()
        for (const id of selectedKeys.value) {
            temp.set(id, id)
        }
        return temp
    })

    const processData = (data: DataItem[]) => {
        const res = data.map(item => {
            item.checked = selectedMap.value.has(item.id as number | string) || item.children?.every(child => selectedMap.value.has(child.id as number | string))
            item.indeterminate = !selectedMap.value.has(item.id as number | string) && item?.children?.some((child: DataItem) => selectedMap.value.has(child.id as string | number))
            if (item.children && item.children.length > 0) {
                item.children = processData(item.children)
            }
            return item
        })
        return res
    }

    const treeData = ref<DataItem[]>(props.showCheckBox ? processData(props.data) : props.data)

    watch(() => selectedKeys.value, () => {
        treeData.value = processData(treeData.value)
    })

    return {
        treeData,
        selectedKeys,
        selectedMap
    }
}