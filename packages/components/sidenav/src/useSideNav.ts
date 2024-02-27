import { ref, computed, onMounted, watch, SetupContext } from 'vue'
import { useToggle } from '@apathia/shared'
import type {
  SideNavNode,
  SideNavEmits,
  SideNavProps,
  SideNavUseReturn,
} from './types'

export default function useSideNav(
  props: SideNavProps,
  emit: SetupContext<SideNavEmits>['emit'],
): SideNavUseReturn {
  const filteredMenu = ref<SideNavNode[]>([])
  const scrollTop = ref(0)
  const filterKeyMap = computed(() =>
    createKeyMap(props.menuList as SideNavNode[]),
  )

  filteredMenu.value = props.menuList as SideNavNode[]

  const [isHover, toggleHover] = useToggle(false)
  const showMini = computed(() => (props.mini ? !isHover.value : false))

  function createKeyMap(menu: SideNavNode[], parentNode?: SideNavNode) {
    let keyMap = {} as Record<string, SideNavNode>

    for (const node of menu) {
      keyMap[node.text || ''] = parentNode || node
      if (node.children) {
        keyMap = {
          ...keyMap,
          ...createKeyMap(node.children, parentNode || node),
        }
      }
    }

    return keyMap
  }

  onMounted(() => {
    setTimeout(() => {
      // TODO 优化虚拟滚动条
      scrollTop.value = scrollToExpand()
    }, 400)
  })

  function onInput(event: InputEvent) {
    const { value } = event.target as HTMLInputElement
    filteredMenu.value =
      value === ''
        ? (props.menuList as SideNavNode[])
        : filterMenu(filterKeyMap.value, value)
  }

  function getSidenavInputProps() {
    return {
      onInput,
    }
  }

  // function getScrollContainerProps() {
  //   return scrollTop.value ? { scrollTop: scrollTop.value } : {}
  // }

  function getContainerProps() {
    return {
      onMouseenter: toggleHover,
      onMouseleave: toggleHover,
    }
  }

  watch(
    () => showMini.value,
    () => {
      emit('minChange', showMini.value)
    },
  )

  return {
    getContainerProps,
    getSidenavInputProps,
    filteredMenu,
    showMini,
  }
}

function filterMenu(
  keyMap: Record<string, SideNavNode>,
  keyword: string,
): SideNavNode[] {
  const keyWordList = Object.keys(keyMap)
  return keyWordList.filter(x => x.includes(keyword)).map(y => keyMap[y])
}

function scrollToExpand() {
  const containerHeight = window.innerHeight
  const el = document.querySelector('#expandSideNode')
  if (!el) return 0
  const scrollTop = (el as HTMLElement).offsetTop - containerHeight / 2
  return scrollTop >= 0 ? scrollTop : 0
}
