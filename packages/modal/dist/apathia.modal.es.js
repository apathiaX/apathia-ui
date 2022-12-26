import { ref, watch, nextTick, defineComponent, resolveComponent, openBlock, createBlock, Teleport, createVNode, Transition, mergeProps, withCtx, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, renderSlot, toDisplayString, createCommentVNode, withDirectives, vShow, h, TransitionGroup, inject } from "vue";
import { keyframes, css, style, tw } from "@apathia/apathia.twind";
import { CustomRender } from "@apathia/apathia.custom-render";
import { useEventListener, onClickOutside } from "@apathia/apathia.hooks";
import { mountContainerDom, mountComponent } from "@apathia/apathia.shared";
const modalStack = [];
let stopListener = () => {
};
function popModalStack() {
  modalStack.pop();
}
function tryCloseLastModal(isEsc) {
  if (modalStack.length > 0) {
    const lastModal = modalStack[modalStack.length - 1];
    if (lastModal.props.beforeClose && !lastModal.props.beforeClose())
      return;
    if (!lastModal.props.keyboard && isEsc)
      return;
    lastModal === null || lastModal === void 0 ? void 0 : lastModal.close();
    if (modalStack.length === 0)
      stopListener();
  }
}
function pushModal(modal) {
  modalStack.push(modal);
  if (modalStack.length === 1) {
    stopListener = useEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        tryCloseLastModal(true);
      }
    });
  }
}
function showScrollbar$1() {
  if (typeof window === "undefined")
    return;
  if (modalStack.length === 0) {
    document.body.style.overflow = "auto";
    document.body.style.width = "auto";
  }
}
function hideScrollbar() {
  if (typeof window === "undefined")
    return;
  const html = document.documentElement;
  if (html.scrollHeight - html.clientHeight > 0) {
    document.body.style.overflow = "hidden";
    document.body.style.width = "calc(100% - 15px)";
  }
}
function showScrollbar() {
  if (typeof window === "undefined")
    return;
  if (modalStack.length === 0) {
    document.body.style.overflow = "auto";
    document.body.style.width = "auto";
  }
}
function createModal(props, ctx) {
  const shadeRef = ref(null);
  const modalRef = ref(null);
  const widthStyle = getWidthStyle(props.width, props.top);
  const isTemplate = !!ctx.slots.default;
  mountContainerDom("modal");
  function templateClose() {
    if (props.beforeClose && props.beforeClose()) {
      ctx.emit("update:modelValue", false);
      popModalStack();
    }
  }
  function functionClose() {
    if (props.beforeClose && props.beforeClose()) {
      ctx.emit("close");
      popModalStack();
    }
  }
  const close = isTemplate ? templateClose : functionClose;
  function bindClickOutside() {
    if (props.maskClosable === false)
      return;
    function handleClose() {
      if (props.beforeClose && props.beforeClose()) {
        close();
      }
    }
    nextTick(() => {
      onClickOutside(modalRef, handleClose);
    });
  }
  watch(() => props.modelValue, (show) => {
    if (show) {
      pushModal({ close, props });
      hideScrollbar();
      bindClickOutside();
      if (shadeRef.value) {
        shadeRef.value.scrollTop = 0;
      }
    } else {
      ctx.emit("close");
    }
  });
  return {
    shadeRef,
    modalRef,
    widthStyle,
    close,
    isTemplate
  };
}
function getWidthStyle(width, top) {
  return `
    width: ${width}${typeof width === "number" ? "px" : ""};
    margin-top: ${top}${typeof top === "number" ? "px" : ""};
  `;
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "Modal",
  components: {
    CustomRender
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    render: {
      type: [String, Function],
      default: () => null
    },
    renderHeader: {
      type: [String, Function],
      default: () => null
    },
    top: {
      type: [Number, String],
      default: 60
    },
    width: {
      type: [Number, String],
      default: 640
    },
    showClose: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    beforeClose: {
      type: Function,
      default: () => true
    }
  },
  emits: ["close", "update:modelValue"],
  setup(props, ctx) {
    const { shadeRef, modalRef, widthStyle, close, isTemplate } = createModal(
      props,
      ctx
    );
    return {
      ...initStyle(),
      shadeRef,
      modalRef,
      widthStyle,
      close,
      showScrollbar: showScrollbar$1,
      isTemplate
    };
  }
});
function initStyle() {
  const slidein = keyframes`
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;
  const slideinCss = css({
    animation: "0.5s ease",
    animationName: slidein,
    animationFillMode: "forwards"
  });
  const flash = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;
  const flashCss = css({
    animation: "0.5s ease",
    animationName: flash
  });
  const shadeClass = style`fixed inset-0 h-full bg-fill-gray bg-opacity-50 overflow-auto ${flashCss}`;
  const modalClass = style`mx-auto rounded bg-fill-white mb-8 -translate-y-5 ${slideinCss}`;
  const modalHeaderClass = style`flex justify-between p-4 rounded-t text-content-primary border(b solid fill-neutral)`;
  const modalContentClass = style`p-4`;
  const delIconClass = style`font-medium self-start ml-3 cursor-pointer hover:(text-error-primary)`;
  const titleClass = tw`text-lg`;
  const subTitleClass = tw`text-content-accent text-sm mt-0.5`;
  const transitionClass = {
    "leave-to-class": tw`opacity-0`
  };
  const durationClass = tw`duration-500`;
  return {
    shadeClass,
    modalClass,
    modalHeaderClass,
    delIconClass,
    modalContentClass,
    titleClass,
    subTitleClass,
    transitionClass,
    durationClass
  };
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CustomRender = resolveComponent("CustomRender");
  return _ctx.isTemplate ? (openBlock(), createBlock(Teleport, {
    key: 0,
    to: ".apathia-modal"
  }, [
    createVNode(Transition, mergeProps(_ctx.transitionClass, { onAfterLeave: _ctx.showScrollbar }), {
      default: withCtx(() => [
        _ctx.modelValue ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.durationClass)
        }, [
          createElementVNode("div", {
            ref: "shadeRef",
            class: normalizeClass(_ctx.shadeClass)
          }, [
            createElementVNode("div", {
              ref: "modalRef",
              style: normalizeStyle(_ctx.widthStyle),
              class: normalizeClass(_ctx.modalClass)
            }, [
              createElementVNode("div", {
                class: normalizeClass(_ctx.modalHeaderClass)
              }, [
                renderSlot(_ctx.$slots, "header", { close: _ctx.close }, () => [
                  createElementVNode("div", null, [
                    createElementVNode("p", {
                      class: normalizeClass(_ctx.titleClass)
                    }, toDisplayString(_ctx.title), 3),
                    _ctx.subTitle ? (openBlock(), createElementBlock("p", {
                      key: 0,
                      class: normalizeClass(_ctx.subTitleClass)
                    }, toDisplayString(_ctx.subTitle), 3)) : createCommentVNode("", true)
                  ]),
                  _ctx.showClose ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(_ctx.delIconClass),
                    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args))
                  }, "\u2715", 2)) : createCommentVNode("", true)
                ])
              ], 2),
              createElementVNode("div", {
                class: normalizeClass(_ctx.modalContentClass)
              }, [
                renderSlot(_ctx.$slots, "default", { close: _ctx.close })
              ], 2)
            ], 6)
          ], 2)
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["onAfterLeave"])
  ])) : withDirectives((openBlock(), createElementBlock("div", {
    key: 1,
    ref: "shadeRef",
    class: normalizeClass(_ctx.shadeClass)
  }, [
    createElementVNode("div", {
      ref: "modalRef",
      style: normalizeStyle(_ctx.widthStyle),
      class: normalizeClass(_ctx.modalClass)
    }, [
      _ctx.renderHeader ? (openBlock(), createBlock(_component_CustomRender, {
        key: 0,
        render: _ctx.renderHeader
      }, null, 8, ["render"])) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(_ctx.modalHeaderClass)
      }, [
        createElementVNode("div", null, [
          createElementVNode("p", {
            class: normalizeClass(_ctx.titleClass)
          }, toDisplayString(_ctx.title), 3),
          _ctx.subTitle ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: normalizeClass(_ctx.subTitleClass)
          }, toDisplayString(_ctx.subTitle), 3)) : createCommentVNode("", true)
        ]),
        _ctx.showClose ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(_ctx.delIconClass),
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.close && _ctx.close(...args))
        }, "\u2715", 2)) : createCommentVNode("", true)
      ], 2)),
      createElementVNode("div", {
        class: normalizeClass(_ctx.modalContentClass)
      }, [
        createVNode(_component_CustomRender, { render: _ctx.render }, null, 8, ["render"])
      ], 2)
    ], 6)
  ], 2)), [
    [vShow, _ctx.modelValue]
  ]);
}
var Modal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const modalDefaultProps = {
  modelValue: false,
  title: "Title",
  subTitle: "",
  top: 60,
  width: 640,
  showClose: true,
  maskClosable: false,
  keyboard: true,
  render: ""
};
const ModalContainer = defineComponent({
  name: "ModalContainer",
  props: {
    modalList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["remove"],
  setup(props, { emit }) {
    const remove = (id) => emit("remove", id);
    const transitionGroupClass = {
      "enter-from-class": tw`opacity-0`,
      "enter-active-class": tw`duration-500`,
      "leave-to-class": tw`opacity-0`,
      "leave-active-class": tw`duration-500`
    };
    return () => h(TransitionGroup, Object.assign(Object.assign({}, transitionGroupClass), { onAfterLeave: showScrollbar, tag: "div" }), {
      default() {
        return props.modalList.map((option) => h("div", { key: option.id }, h(Modal, Object.assign(Object.assign({}, option.props), { onClose: () => {
          var _a, _b;
          remove(option.id);
          (_b = (_a = option.props).onClose) === null || _b === void 0 ? void 0 : _b.call(_a);
        } }))));
      }
    });
  }
});
const modalList = ref([]);
const getID = () => `${Date.now()}`;
const removeModal = (id) => {
  const index = modalList.value.findIndex((item) => item.id === id);
  modalList.value.splice(index, 1);
};
const addModal = (props) => {
  const id = getID();
  const modalInstance = ref({ props: Object.assign(Object.assign({}, modalDefaultProps), props), id });
  modalList.value.push(modalInstance.value);
  nextTick(() => {
    modalInstance.value.props.modelValue = true;
  });
};
const modalKey = "apathia-modal";
function modalInstall(app, injectKey) {
  const appContext = app._context;
  mountContainerDom("modal");
  mountComponent(h(ModalContainer, {
    modalList: modalList.value,
    onRemove: removeModal
  }), ".apathia-modal", appContext);
  function open(props) {
    addModal(props);
    hideScrollbar();
  }
  const modalUtils = {
    modal: open,
    remove: tryCloseLastModal
  };
  app.provide(injectKey || modalKey, modalUtils);
  app.config.globalProperties.$modal = open;
  app.config.globalProperties.$removeModal = tryCloseLastModal;
}
function useModal(key) {
  return inject(key || modalKey);
}
export { Modal, modalInstall, useModal };
