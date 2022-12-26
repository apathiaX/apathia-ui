(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@apathia/apathia.icon"), require("@apathia/apathia.hooks"), require("@apathia/apathia.twind"), require("@apathia/apathia.shared")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@apathia/apathia.icon", "@apathia/apathia.hooks", "@apathia/apathia.twind", "@apathia/apathia.shared"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.collapse = {}, global.Vue, global.icon, global.hooks, global.twind, global.shared));
})(this, function(exports2, vue, apathia_icon, apathia_hooks, apathia_twind, apathia_shared) {
  "use strict";
  function useTransition(props) {
    function onEnter(el) {
      setHeight(el, "0px");
      setTransition(el, props.duration);
      apathia_shared.raf(() => {
        setHeight(el, `${el.scrollHeight}px`);
      });
    }
    function onLeave(el) {
      setHeight(el, `${el.scrollHeight}px`);
      setTransition(el, props.duration);
      apathia_shared.raf(() => {
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
  var CollapseTransition$1 = vue.defineComponent({
    name: "CollapseTransition",
    props: {
      duration: {
        type: Number,
        default: 400
      }
    },
    setup(props, { slots }) {
      const { getTransitionProps } = useTransition(props);
      return () => vue.h(vue.Transition, getTransitionProps(), slots);
    }
  });
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = vue.defineComponent({
    name: "Collapse",
    components: {
      CollapseTransition: CollapseTransition$1,
      Icon: apathia_icon.Icon
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
      const [show, toggleShow, setShow] = apathia_hooks.useToggle(props.expand);
      const styles = initStyle();
      vue.watch(
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
    const headerClass = apathia_twind.style`flex items-center h-10 leading-10 bg-fill-light rounded cursor-pointer`;
    const rollClass = apathia_twind.style`rotate-90 translate-y-0.5 duration-300`;
    const headerDisableClass = apathia_twind.style`cursor-not-allowed`;
    const icon = apathia_twind.style`mx-2 transition`;
    return {
      headerClass,
      rollClass,
      headerDisableClass,
      icon
    };
  }
  const _hoisted_1 = { key: 0 };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Icon = vue.resolveComponent("Icon");
    const _component_CollapseTransition = vue.resolveComponent("CollapseTransition");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.renderSlot(_ctx.$slots, "toggleHeader", {
        show: _ctx.show,
        toggleShow: _ctx.toggleShow
      }, () => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass([_ctx.styles.headerClass, _ctx.disabled ? _ctx.styles.headerDisableClass : ""]),
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
        }, [
          _ctx.showArrow ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
            vue.createVNode(_component_Icon, {
              name: ["fa", "caret-right"],
              class: vue.normalizeClass(_ctx.styles.icon),
              style: vue.normalizeStyle({ transform: `rotate(${_ctx.show ? 90 : 0}deg)` })
            }, null, 8, ["class", "style"])
          ])) : vue.createCommentVNode("", true),
          vue.renderSlot(_ctx.$slots, "header", {}, () => [
            vue.createElementVNode("div", null, vue.toDisplayString(_ctx.header), 1)
          ])
        ], 2)
      ]),
      vue.createVNode(_component_CollapseTransition, { duration: _ctx.duration }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", null, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 512), [
            [vue.vShow, _ctx.show]
          ])
        ]),
        _: 3
      }, 8, ["duration"])
    ], 64);
  }
  var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  var CollapseTransition = vue.defineComponent({
    name: "CollapseTransition",
    props: {
      duration: {
        type: Number,
        default: 400
      }
    },
    setup(props, { slots }) {
      const { getTransitionProps } = useTransition(props);
      return () => vue.h(vue.Transition, getTransitionProps(), slots);
    }
  });
  exports2.Collapse = Collapse;
  exports2.CollapseTransition = CollapseTransition;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
