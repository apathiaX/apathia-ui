(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@apathia/apathia.twind"), require("@apathia/apathia.shared"), require("@apathia/apathia.custom-render"), require("@apathia/apathia.icon")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@apathia/apathia.twind", "@apathia/apathia.shared", "@apathia/apathia.custom-render", "@apathia/apathia.icon"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.alert = {}, global.Vue, global.twind, global.shared, global["custom-render"], global.icon));
})(this, function(exports2, vue, apathia_twind, apathia_shared, apathia_customRender, apathia_icon) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$5 = {
    name: "CircleCloseFilled"
  };
  const _hoisted_1$4 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$4 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
  }, null, -1);
  const _hoisted_3$4 = [
    _hoisted_2$4
  ];
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
  }
  var CircleCloseFilled = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
  const _sfc_main$4 = {
    name: "InfoFilled"
  };
  const _hoisted_1$3 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$3 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
  }, null, -1);
  const _hoisted_3$3 = [
    _hoisted_2$3
  ];
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
  }
  var InfoFilled = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
  const _sfc_main$3 = {
    name: "Notification"
  };
  const _hoisted_1$2 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
  }, null, -1);
  const _hoisted_3$2 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
  }, null, -1);
  const _hoisted_4 = [
    _hoisted_2$2,
    _hoisted_3$2
  ];
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, _hoisted_4);
  }
  var Notification = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
  const _sfc_main$2 = {
    name: "SuccessFilled"
  };
  const _hoisted_1$1 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$1 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  }, null, -1);
  const _hoisted_3$1 = [
    _hoisted_2$1
  ];
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
  }
  var SuccessFilled = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
  const _sfc_main$1 = {
    name: "WarningFilled"
  };
  const _hoisted_1 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
  }, null, -1);
  const _hoisted_3 = [
    _hoisted_2
  ];
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, _hoisted_3);
  }
  var WarningFilled = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  const __default__ = vue.defineComponent({
    name: "Alert"
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: {
      type: { default: "default" },
      duration: { default: 3e3 },
      title: { default: "" },
      message: { default: "" },
      showIcon: { type: Boolean, default: true },
      showClose: { type: Boolean, default: true },
      render: null
    },
    emits: ["close"],
    setup(__props, { emit }) {
      const props = __props;
      const iconMap = {
        info: InfoFilled,
        warning: WarningFilled,
        success: SuccessFilled,
        danger: CircleCloseFilled,
        default: Notification
      };
      function initAlertStyle(type) {
        const Theme = {
          info: {
            layout: apathia_twind.style`bg-fill-light text-fill-primary`
          },
          danger: {
            layout: apathia_twind.style`bg-error-light text-error-primary`
          },
          success: {
            layout: apathia_twind.style`bg-success-light text-success-primary`
          },
          warning: {
            layout: apathia_twind.style`bg-warning-light text-warning-primary`
          },
          default: {
            layout: apathia_twind.style`bg-brand-light text-brand-primary`
          }
        };
        const theme = Theme[type] || Theme.default;
        const layout2 = apathia_twind.tw`${theme.layout} ${apathia_twind.apply`p-2.5 rounded flex mt-2 duration-300`}`;
        const iconWrap2 = apathia_twind.style`flex-shrink-0 w-4 mr-3 mt-0.5`;
        const delIcon2 = apathia_twind.style`ml-2 cursor-pointer hover:(text-error-active)`;
        const contentClass2 = apathia_twind.style`inline-block font-normal flex-grow break-all`;
        const titleClass2 = apathia_twind.style`text-lg`;
        const messageClass2 = apathia_twind.style`text-xs leading-normal`;
        return {
          layout: layout2,
          iconWrap: iconWrap2,
          delIcon: delIcon2,
          contentClass: contentClass2,
          titleClass: titleClass2,
          messageClass: messageClass2
        };
      }
      const {
        layout,
        iconWrap,
        delIcon,
        contentClass,
        titleClass,
        messageClass
      } = initAlertStyle(props.type);
      let timer;
      function close() {
        clearTimer();
        emit("close");
      }
      function clearTimer() {
        clearTimeout(timer);
      }
      function resetTimer() {
        if (props.duration) {
          clearTimer();
          timer = setTimeout(close, props.duration);
        }
      }
      vue.onMounted(resetTimer);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(vue.unref(layout)),
          onMouseenter: clearTimer,
          onMouseleave: resetTimer
        }, [
          !__props.render ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            __props.showIcon ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass(vue.unref(iconWrap))
            }, [
              vue.renderSlot(_ctx.$slots, "icon", {}, () => [
                vue.createVNode(vue.unref(apathia_icon.Icon), { size: 20 }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(iconMap[__props.type])))
                  ]),
                  _: 1
                })
              ])
            ], 2)) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", {
              class: vue.normalizeClass(vue.unref(contentClass))
            }, [
              __props.title ? (vue.openBlock(), vue.createElementBlock("p", {
                key: 0,
                class: vue.normalizeClass(vue.unref(titleClass))
              }, vue.toDisplayString(__props.title), 3)) : vue.createCommentVNode("", true),
              __props.message ? (vue.openBlock(), vue.createElementBlock("p", {
                key: 1,
                class: vue.normalizeClass(vue.unref(messageClass))
              }, vue.toDisplayString(__props.message), 3)) : vue.createCommentVNode("", true)
            ], 2),
            vue.createElementVNode("span", {
              class: vue.normalizeClass(vue.unref(delIcon)),
              onClick: close
            }, " \u2715 ", 2)
          ], 64)) : (vue.openBlock(), vue.createBlock(vue.unref(apathia_customRender.CustomRender), {
            key: 1,
            render: () => __props.render && __props.render({ close })
          }, null, 8, ["render"]))
        ], 34);
      };
    }
  });
  const AlertContainer = vue.defineComponent({
    name: "AlertContainer",
    props: {
      alertList: {
        type: Array,
        default: () => []
      }
    },
    emits: ["remove"],
    setup(props, {
      emit
    }) {
      const remove2 = (index) => emit("remove", index);
      const rootClass = apathia_twind.style`left-1/2 -translate-x-1/2 w-96 fixed z-alert top-1` + " alert-open";
      const transitionGroupClass = {
        "enter-from-class": apathia_twind.tw`opacity-0`,
        "leave-to-class": apathia_twind.tw`opacity-0`,
        "leave-active-class": apathia_twind.tw`absolute w-full`
      };
      return () => vue.h("div", {
        class: rootClass
      }, [vue.h(vue.TransitionGroup, Object.assign(Object.assign({}, transitionGroupClass), {
        tag: "div"
      }), {
        default: () => props.alertList.map((option) => vue.h(_sfc_main, Object.assign(Object.assign({}, option.props), {
          key: option.id,
          onClose: () => {
            remove2(option.id);
          }
        })))
      })]);
    }
  });
  const alertList = vue.ref([]);
  const remove = (id) => {
    const index = alertList.value.findIndex((item) => item.id === id);
    alertList.value.splice(index, 1);
  };
  const getID = () => `${Date.now()}`;
  const Alert = (props) => {
    const id = getID();
    alertList.value.push({
      props,
      id
    });
    if (!document.querySelector(".apathia-alert")) {
      const alertContainerDom = document.createElement("div");
      alertContainerDom.className = "apathia-alert";
      document.body.appendChild(alertContainerDom);
      apathia_shared.mountComponent(vue.h(AlertContainer, {
        alertList: alertList.value,
        onRemove: remove
      }), alertContainerDom);
    }
  };
  Alert.closeAll = () => alertList.value = [];
  Alert.info = (title, message, props) => Alert(Object.assign({
    type: "info",
    title,
    message
  }, props));
  Alert.warning = (title, message, props) => Alert(Object.assign({
    type: "warning",
    title,
    message
  }, props));
  Alert.danger = (title, message, props) => Alert(Object.assign({
    type: "danger",
    title,
    message
  }, props));
  Alert.success = (title, message, props) => Alert(Object.assign({
    type: "success",
    title,
    message
  }, props));
  Alert.default = (title, message, props) => Alert(Object.assign({
    type: "default",
    title,
    message
  }, props));
  const alertKey = "apathia-toast";
  function toastInstall(app, injectKey) {
    app.provide(injectKey || alertKey, Alert);
    app.config.globalProperties.$toast = Alert;
  }
  function useToast(key) {
    return vue.inject(key || alertKey);
  }
  exports2.toast = Alert;
  exports2.toastInstall = toastInstall;
  exports2.useToast = useToast;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
