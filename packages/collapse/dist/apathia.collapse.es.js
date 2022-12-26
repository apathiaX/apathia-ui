import { defineComponent, h, Transition, watch, resolveComponent, openBlock, createElementBlock, Fragment, renderSlot, createElementVNode, normalizeClass, createVNode, normalizeStyle, createCommentVNode, toDisplayString, withCtx, withDirectives, vShow } from "vue";
import { Icon } from "@apathia/apathia.icon";
import { useToggle } from "@apathia/apathia.hooks";
import { style } from "@apathia/apathia.twind";
import { raf } from "@apathia/apathia.shared";
function useTransition(props) {
  function onEnter(el) {
    setHeight(el, "0px");
    setTransition(el, props.duration);
    raf(() => {
      setHeight(el, `${el.scrollHeight}px`);
    });
  }
  function onLeave(el) {
    setHeight(el, `${el.scrollHeight}px`);
    setTransition(el, props.duration);
    raf(() => {
      setHeight(el, "0px");
    });
  }
  const getTransitionProps = () => ({
    onEnter,
    onLeave,
    onAfterEnter: resetStyle,
    onAfterLeave: resetStyle
  });
  return {
    getTransitionProps
  };
}
function setTransition(el, time) {
  el.style.transition = `height ${time}ms`;
  el.style.overflow = "hidden";
}
function setHeight(el, height) {
  el.style.height = height;
}
function resetStyle(el) {
  el.style.height = "";
  el.style.transition = "";
  el.style.overflow = "";
}
var CollapseTransition$1 = defineComponent({
  name: "CollapseTransition",
  props: {
    duration: {
      type: Number,
      default: 400
    }
  },
  setup(props, { slots }) {
    const { getTransitionProps } = useTransition(props);
    return () => h(Transition, getTransitionProps(), slots);
  }
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "Collapse",
  components: {
    CollapseTransition: CollapseTransition$1,
    Icon
  },
  props: {
    expand: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 400
    },
    header: {
      type: String,
      default: "header"
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const [show, toggleShow, setShow] = useToggle(props.expand);
    const styles = initStyle();
    watch(
      () => props.expand,
      (val) => setShow(val)
    );
    const handleClick = () => {
      if (!props.disabled) {
        toggleShow();
      }
    };
    return {
      handleClick,
      show,
      toggleShow,
      styles
    };
  }
});
function initStyle() {
  const headerClass = style`flex items-center h-10 leading-10 bg-fill-light rounded cursor-pointer`;
  const rollClass = style`rotate-90 translate-y-0.5 duration-300`;
  const headerDisableClass = style`cursor-not-allowed`;
  const icon = style`mx-2 transition`;
  return {
    headerClass,
    rollClass,
    headerDisableClass,
    icon
  };
}
const _hoisted_1 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_CollapseTransition = resolveComponent("CollapseTransition");
  return openBlock(), createElementBlock(Fragment, null, [
    renderSlot(_ctx.$slots, "toggleHeader", {
      show: _ctx.show,
      toggleShow: _ctx.toggleShow
    }, () => [
      createElementVNode("div", {
        class: normalizeClass([_ctx.styles.headerClass, _ctx.disabled ? _ctx.styles.headerDisableClass : ""]),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        _ctx.showArrow ? (openBlock(), createElementBlock("span", _hoisted_1, [
          createVNode(_component_Icon, {
            name: ["fa", "caret-right"],
            class: normalizeClass(_ctx.styles.icon),
            style: normalizeStyle({ transform: `rotate(${_ctx.show ? 90 : 0}deg)` })
          }, null, 8, ["class", "style"])
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "header", {}, () => [
          createElementVNode("div", null, toDisplayString(_ctx.header), 1)
        ])
      ], 2)
    ]),
    createVNode(_component_CollapseTransition, { duration: _ctx.duration }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", null, [
          renderSlot(_ctx.$slots, "default")
        ], 512), [
          [vShow, _ctx.show]
        ])
      ]),
      _: 3
    }, 8, ["duration"])
  ], 64);
}
var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var CollapseTransition = defineComponent({
  name: "CollapseTransition",
  props: {
    duration: {
      type: Number,
      default: 400
    }
  },
  setup(props, { slots }) {
    const { getTransitionProps } = useTransition(props);
    return () => h(Transition, getTransitionProps(), slots);
  }
});
export { Collapse, CollapseTransition };
