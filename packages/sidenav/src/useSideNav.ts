import { ref, computed, onMounted } from 'vue'
import { useToggle } from '@apathia/apathia.hooks'
import type { SideNode as Node, SideNavProps } from './types'

export default function useSideNav(props: SideNavProps) {
  const filteredMenu = ref<Node[]>([])
  const scrollTop = ref(0)
  const filterKeyMap = computed(() => createKeyMap(props.menuList as Node[]))

  filteredMenu.value = props.menuList as Node[]

  const [isHover, toggleHover] = useToggle(false)
  const showMini = computed(() => (props.mini ? !isHover.value : false))

  function createKeyMap(menu: Node[], parentNode?: Node) {
    let keyMap = {} as Record<string, Node>

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
      // TODO 听风优化虚拟滚动条
      scrollTop.value = scrollToExpand()
    }, 400)
  })

  function onInput(event: InputEvent) {
    const { value } = event.target as HTMLInputElement
    filteredMenu.value =
      value === '' ? props.menuList as Node[] : filterMenu(filterKeyMap.value, value)
  }

  function getSidenavInputProps() {
    return {
      onInput,
    }
  }

  function getScrollContainerProps() {
    return scrollTop.value ? { scrollTop: scrollTop.value } : {}
  }

  function getContainerProps() {
    return {
      onMouseenter: toggleHover,
      onMouseleave: toggleHover,
    }
  }

  return {
    getContainerProps,
    getSidenavInputProps,
    getScrollContainerProps,
    filteredMenu,
    showMini,
  }
}

function filterMenu(keyMap: Record<string, Node>, keyword: string): Node[] {
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
