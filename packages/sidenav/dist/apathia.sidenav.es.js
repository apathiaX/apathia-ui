import { defineComponent, computed, watch, resolveComponent, openBlock, createElementBlock, renderSlot, unref, createElementVNode, normalizeClass, createBlock, resolveDynamicComponent, createCommentVNode, withDirectives, toDisplayString, vShow, createVNode, withCtx, Fragment, renderList, ref, onMounted, mergeProps } from "vue";
import { style } from "@apathia/apathia.twind";
import { useToggle } from "@apathia/apathia.hooks";
import { Icon } from "@apathia/apathia.icon";
import { ArrowDown } from "@apathia/apathia.icon-svg";
const _hoisted_1 = ["id"];
const _hoisted_2 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SideNode",
  props: {
    node: { default: () => ({}) },
    mini: { type: Boolean, default: false },
    activeKey: { default: "" },
    selectHandler: { type: Function, default: () => {
    } },
    keyField: { default: "key" }
  },
  setup(__props) {
    const props = __props;
    function initStyle() {
      return {
        sidenodeIconClass: style`w-4 h-4`,
        sidenodeRowClass: style`flex items-center cursor-pointer duration-300 px-3 py-6 h-8 overflow-hidden border-r-4 border-transparent hover:bg-brand-fill`,
        sidenodeRowActive: style`bg-brand-fill text-brand-primary border-brand-primary`,
        sidenodeRowParentActive: style`text-brand-primary`,
        sidenodeTurn: style`rotate-180 duration-300`,
        sidenodeExpand: style`text-xs duration-300`,
        sidenodeText: style`flex-grow text-sm font-medium text-left truncate`,
        sidenodeIcon: style`w-8 h-4 px-2`,
        sidenodeIconMini: style`px-0`,
        sidenodeChildren: style`text-xs bg-brand-light transition-all duration-500 list-none`
      };
    }
    function isParent(nodes, current, key) {
      return platMenu(nodes).some((n) => n[key] === current);
    }
    function platMenu(nodes) {
      return nodes.reduce(
        (res, cur) => cur.children ? [...res, ...platMenu(cur.children), cur] : [...res, cur],
        []
      );
    }
    const styles = initStyle();
    const isActiveParent = computed(
      () => props.node.children ? isParent(props.node.children, props.activeKey, props.keyField) : false
    );
    const isActiveItem = computed(() => props.activeKey === props.node[props.keyField]);
    const [expand, toggleExpand, setExpand] = useToggle(!!isActiveParent.value);
    const iconClass = computed(() => `${styles.sidenodeIcon} ${props.mini ? styles.sidenodeIconMini : ""}`);
    const rowClass = computed(
      () => `${styles.sidenodeRowClass} ${isActiveParent.value ? styles.sidenodeRowParentActive : ""} ${props.activeKey === props.node[props.keyField] ? styles.sidenodeRowActive : ""}`
    );
    watch(
      () => props.activeKey,
      () => {
        if (isActiveParent.value)
          setExpand(expand.value);
      }
    );
    const clickHandler = () => {
      if (props.node.children) {
        toggleExpand();
      } else {
        props.selectHandler(props.node);
      }
    };
    return (_ctx, _cache) => {
      const _component_ArrowUp = resolveComponent("ArrowUp");
      const _component_SideNode = resolveComponent("SideNode", true);
      return openBlock(), createElementBlock("li", null, [
        renderSlot(_ctx.$slots, "default", {
          mini: __props.mini,
          activeParent: unref(isActiveParent),
          expand: unref(expand),
          activeItem: unref(isActiveItem),
          onClick: clickHandler,
          node: __props.node
        }, () => [
          createElementVNode("div", {
            id: unref(isActiveItem) ? "expandSideNode" : void 0,
            class: normalizeClass(unref(rowClass)),
            onClick: clickHandler
          }, [
            createElementVNode("span", {
              class: normalizeClass(__props.node.icon ? unref(iconClass) : "")
            }, [
              renderSlot(_ctx.$slots, "icon", {}, () => [
                __props.node.icon ? (openBlock(), createBlock(resolveDynamicComponent(__props.node.icon), { key: 0 })) : createCommentVNode("", true)
              ])
            ], 2),
            withDirectives(createElementVNode("span", {
              class: normalizeClass(unref(styles).sidenodeText)
            }, toDisplayString(__props.node.text), 3), [
              [vShow, !__props.mini]
            ]),
            withDirectives(createVNode(unref(Icon), {
              class: normalizeClass(unref(styles).sidenodeIconClass)
            }, {
              default: withCtx(() => [
                unref(expand) ? (openBlock(), createBlock(unref(ArrowDown), { key: 0 })) : (openBlock(), createBlock(_component_ArrowUp, { key: 1 }))
              ]),
              _: 1
            }, 8, ["class"]), [
              [vShow, __props.node.children && !__props.mini]
            ])
          ], 10, _hoisted_1)
        ]),
        __props.node.children && !__props.mini ? (openBlock(), createElementBlock("div", _hoisted_2, [
          withDirectives(createElementVNode("ul", {
            class: normalizeClass(unref(styles).sidenodeChildren)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.node.children, (item, index) => {
              return openBlock(), createBlock(_component_SideNode, {
                key: index,
                node: item,
                "active-key": __props.activeKey,
                "select-handler": __props.selectHandler,
                "key-field": __props.keyField
              }, {
                default: withCtx(({
                  mini: miniValue,
                  activeParent: activeParentValue,
                  expand: expandValue,
                  activeItem: activeItemValue,
                  onClick: handleClick,
                  node: nodeValue
                }) => [
                  renderSlot(_ctx.$slots, "default", {
                    mini: miniValue,
                    activeParent: activeParentValue,
                    expand: expandValue,
                    activeItem: activeItemValue,
                    onClick: handleClick,
                    node: nodeValue
                  })
                ]),
                _: 2
              }, 1032, ["node", "active-key", "select-handler", "key-field"]);
            }), 128))
          ], 2), [
            [vShow, unref(expand)]
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
function useSideNav(props, emit) {
  const filteredMenu = ref([]);
  const scrollTop = ref(0);
  const filterKeyMap = computed(() => createKeyMap(props.menuList));
  filteredMenu.value = props.menuList;
  const [isHover, toggleHover] = useToggle(false);
  const showMini = computed(() => props.mini ? !isHover.value : false);
  function createKeyMap(menu, parentNode) {
    let keyMap = {};
    for (const node of menu) {
      keyMap[node.text || ""] = parentNode || node;
      if (node.children) {
        keyMap = Object.assign(Object.assign({}, keyMap), createKeyMap(node.children, parentNode || node));
      }
    }
    return keyMap;
  }
  onMounted(() => {
    setTimeout(() => {
      scrollTop.value = scrollToExpand();
    }, 400);
  });
  function onInput(event) {
    const { value } = event.target;
    filteredMenu.value = value === "" ? props.menuList : filterMenu(filterKeyMap.value, value);
  }
  function getSidenavInputProps() {
    return {
      onInput
    };
  }
  function getContainerProps() {
    return {
      onMouseenter: toggleHover,
      onMouseleave: toggleHover
    };
  }
  watch(() => showMini.value, () => {
    emit("minChange", showMini.value);
  });
  return {
    getContainerProps,
    getSidenavInputProps,
    filteredMenu,
    showMini
  };
}
function filterMenu(keyMap, keyword) {
  const keyWordList = Object.keys(keyMap);
  return keyWordList.filter((x) => x.includes(keyword)).map((y) => keyMap[y]);
}
function scrollToExpand() {
  const containerHeight = window.innerHeight;
  const el = document.querySelector("#expandSideNode");
  if (!el)
    return 0;
  const scrollTop = el.offsetTop - containerHeight / 2;
  return scrollTop >= 0 ? scrollTop : 0;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SideNav",
  props: {
    menuList: { default: () => [] },
    activeKey: { default: "" },
    mini: { type: Boolean, default: false },
    search: { type: Boolean, default: false },
    keyField: { default: "key" }
  },
  emits: ["select", "minChange"],
  setup(__props, { emit }) {
    const props = __props;
    function initStyle() {
      const baseSidenav = "block duration-100 text-content-secondary py-4 relative";
      return {
        sidenavClass: style`${baseSidenav} min-h-full`,
        sidenavMiniClass: style`${baseSidenav} w-12 min-h-full`,
        sidenavInputWrap: style`px-4`,
        sidenavInput: style`bg-fill-accent px-2 my-2 bg-opacity-30 h-9 outline-none text-content-accent rounded placeholder-content-neutral w-full focus:(bg-fill-gray text-content-primary)`
      };
    }
    const {
      getContainerProps,
      getSidenavInputProps,
      filteredMenu,
      showMini
    } = useSideNav(props, emit);
    const styles = initStyle();
    const selectNode = (node) => emit("select", node);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", mergeProps({
        class: unref(showMini) ? unref(styles).sidenavMiniClass : unref(styles).sidenavClass
      }, { ...unref(getContainerProps)() }), [
        renderSlot(_ctx.$slots, "menuTop"),
        withDirectives(createElementVNode("div", {
          class: normalizeClass(unref(styles).sidenavInputWrap)
        }, [
          createElementVNode("input", mergeProps({ ...unref(getSidenavInputProps)() }, {
            placeholder: "search",
            class: unref(styles).sidenavInput
          }), null, 16)
        ], 2), [
          [vShow, __props.search && !unref(showMini)]
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredMenu), (node) => {
          return openBlock(), createBlock(_sfc_main$1, {
            key: node[__props.activeKey],
            node,
            "active-key": __props.activeKey,
            "key-field": __props.keyField,
            mini: unref(showMini),
            "select-handler": selectNode
          }, {
            default: withCtx(({
              mini: miniValue,
              activeParent: activeParentValue,
              expand: expandValue,
              activeItem: activeItemValue,
              onClick: clickHandler,
              node: nodeValue
            }) => [
              renderSlot(_ctx.$slots, "default", {
                mini: miniValue,
                activeParent: activeParentValue,
                expand: expandValue,
                activeItem: activeItemValue,
                onClick: clickHandler,
                node: nodeValue
              })
            ]),
            _: 2
          }, 1032, ["node", "active-key", "key-field", "mini"]);
        }), 128)),
        renderSlot(_ctx.$slots, "menuBottom")
      ], 16);
    };
  }
});
export { _sfc_main as SideNav };
