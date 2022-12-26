import { defineComponent, resolveComponent, openBlock, createElementBlock, createVNode, createBlock, normalizeClass, withCtx, createTextVNode, toDisplayString, h } from "vue";
import { BaseButton } from "@apathia/apathia.button";
import { CustomRender } from "@apathia/apathia.custom-render";
import { apply, tw } from "@apathia/apathia.twind";
import { useModal } from "@apathia/apathia.modal";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "Confirm",
  components: {
    BaseButton,
    CustomRender
  },
  props: {
    render: {
      type: [String, Function]
    },
    renderFooter: {
      type: [String, Function]
    },
    confirmText: {
      type: String,
      default: "\u786E\u8BA4"
    },
    cancelText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    confirm: {
      type: Function,
      required: true
    },
    cancel: {
      type: Function,
      required: true
    },
    btnPosition: {
      type: String,
      default: "right"
    }
  },
  setup(props) {
    return {
      btnLayout: initStyle(props.btnPosition)
    };
  }
});
function initStyle(pos) {
  const baseLayout = apply`mt-4 flex`;
  const position = {
    left: apply`justify-start`,
    center: apply`justify-center`,
    right: apply`justify-end`
  };
  return tw`${baseLayout} ${position[pos] || position.left}`;
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CustomRender = resolveComponent("CustomRender");
  const _component_BaseButton = resolveComponent("BaseButton");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_CustomRender, { render: _ctx.render }, null, 8, ["render"]),
    _ctx.renderFooter ? (openBlock(), createBlock(_component_CustomRender, {
      key: 0,
      render: _ctx.renderFooter,
      confirm: _ctx.confirm,
      cancel: _ctx.cancel
    }, null, 8, ["render", "confirm", "cancel"])) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(_ctx.btnLayout)
    }, [
      createVNode(_component_BaseButton, {
        secondary: "",
        onClick: _ctx.cancel
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_BaseButton, {
        primary: "",
        onClick: _ctx.confirm
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.confirmText), 1)
        ]),
        _: 1
      }, 8, ["onClick"])
    ], 2))
  ]);
}
var Confirm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
const defaultOptions = {
  title: "",
  render: "",
  confirmText: "\u786E\u8BA4",
  cancelText: "\u53D6\u6D88",
  btnPosition: "right"
};
function useConfirm() {
  const { modal, remove } = useModal();
  function confirm(options) {
    const _a = Object.assign(Object.assign({}, defaultOptions), options), { render, renderFooter, confirmText, cancelText, btnPosition } = _a, modalOptions = __rest(_a, ["render", "renderFooter", "confirmText", "cancelText", "btnPosition"]);
    const confirmOptions = {
      render,
      renderFooter,
      confirmText,
      cancelText,
      btnPosition
    };
    return new Promise((resolve, reject) => {
      function doConfirm() {
        resolve(null);
        remove();
      }
      function doCancel() {
        reject();
        remove();
      }
      modal(Object.assign(Object.assign({ showClose: false, width: 450 }, modalOptions), { render: () => h(Confirm, Object.assign(Object.assign({}, confirmOptions), { confirm: doConfirm, cancel: doCancel })) }));
    });
  }
  return { confirm, remove };
}
export { Confirm, useConfirm };
