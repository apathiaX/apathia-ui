(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("lodash"), require("@apathia/apathia.twind"), require("@apathia/apathia.hooks")) : typeof define === "function" && define.amd ? define(["exports", "vue", "lodash", "@apathia/apathia.twind", "@apathia/apathia.hooks"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.radio = {}, global.Vue, global.lodash, global.twind, global.hooks));
})(this, function(exports2, vue, lodash, apathia_twind, apathia_hooks) {
  "use strict";
  function useRadio(userProps, ctx) {
    const { disabled, modelValue, value, groupState, changeHandler, inputEl } = userProps;
    let isSelected;
    if (vue.isRef(groupState)) {
      isSelected = vue.computed(() => vue.unref(groupState).value === value.value);
    } else {
      isSelected = vue.computed(() => modelValue.value === value.value);
    }
    const select = () => {
      if (disabled.value) {
        return;
      }
      ctx.emit("update:modelValue", value.value);
      const input = inputEl && vue.unref(inputEl);
      input && input.focus();
      ctx.emit("change", value.value);
      changeHandler(value.value);
    };
    return {
      isSelected,
      handleChange: select
    };
  }
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$1 = vue.defineComponent({
    name: "Radio",
    props: {
      value: {
        type: [String, Number, Boolean],
        default: false
      },
      modelValue: {
        type: [String, Number, Boolean],
        default: false
      },
      disabled: {
        type: Boolean,
        default: void 0
      }
    },
    emits: ["update:modelValue", "change"],
    setup(props, ctx) {
      const { value, modelValue } = vue.toRefs(props);
      const groupState = vue.inject("groupState", null);
      const changeHandler = vue.inject("changeHandler", lodash.noop);
      const isDisabled = vue.computed(() => {
        if (props.disabled !== void 0) {
          return props.disabled;
        }
        return vue.isRef(groupState) ? groupState.value.disabled : false;
      });
      const inputEl = vue.ref(null);
      const userProps = {
        value,
        modelValue,
        disabled: isDisabled,
        groupState,
        changeHandler,
        inputEl
      };
      const { isSelected, handleChange } = useRadio(
        userProps,
        ctx
      );
      const styles = {
        wrapper: apathia_twind.style`inline-flex mr-2 p-0 list-none cursor-pointer items-center text-sm`,
        wrapperDisabled: apathia_twind.style`text-content-neutral cursor-not-allowed`,
        radio: apathia_twind.style`relative inline-block m-0 p-0 whitespace-nowrap align-middle`,
        inner: apathia_twind.tw(
          apathia_twind.style`relative block w-4 h-4 top-0 left-0 bg-content-white border border-fill-accent outline-none`,
          apathia_twind.css`
          border-radius: 100px;
          transition: all 0.3s;
          &::after {
            content: '';
            position: absolute;
            display: table;
            left: 3px;
            top: 3px;
            ${apathia_twind.apply`w-2 h-2 bg-brand-primary rounded`}
            opacity: 0;
            transform: scale(0);
            transition: all 0.15s cubic-bezier(0.78, 0.14, 0.15, 0.86);
          }
        `
        ),
        innerSelected: apathia_twind.tw(
          apathia_twind.style`border-brand-hover`,
          apathia_twind.css`
          &::after {
            opacity: 1;
            transform: scale(0.875);
            transition: all 0.15s cubic-bezier(0.78, 0.14, 0.15, 0.86);
          }
        `
        ),
        innerDisabled: apathia_twind.style`bg-info-forbid border-line-accent cursor-not-allowed outline-none`,
        innerSelectedDisabled: apathia_twind.tw(apathia_twind.css`
        &::after {
          opacity: 1;
          transform: scale(0.875);
          transition: all 0.15s cubic-bezier(0.78, 0.14, 0.15, 0.86);
        }
      `),
        ring: apathia_twind.style`focus:ring-2 focus:ring-brand-primary`,
        input: apathia_twind.style`hidden`,
        contentWrap: apathia_twind.style`mx-1`
      };
      return {
        inputEl,
        isDisabled,
        isSelected,
        handleChange,
        styles
      };
    }
  });
  const _hoisted_1 = ["value", "checked", "disabled"];
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass({ [_ctx.styles.wrapper]: true, [_ctx.styles.wrapperDisabled]: _ctx.isDisabled })
    }, [
      vue.createElementVNode("span", {
        class: vue.normalizeClass({ [_ctx.styles.radio]: true })
      }, [
        vue.createElementVNode("input", {
          type: "radio",
          tabindex: "0",
          class: vue.normalizeClass({ [_ctx.styles.input]: true }),
          value: _ctx.value,
          checked: _ctx.isSelected,
          disabled: _ctx.isDisabled,
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
          onKeydown: [
            _cache[1] || (_cache[1] = vue.withKeys((...args) => _ctx.handleChange && _ctx.handleChange(...args), ["space"])),
            _cache[2] || (_cache[2] = vue.withKeys((...args) => _ctx.handleChange && _ctx.handleChange(...args), ["enter"]))
          ]
        }, null, 42, _hoisted_1),
        vue.createElementVNode("span", {
          ref: "inputEl",
          class: vue.normalizeClass({
            [_ctx.styles.inner]: true,
            [_ctx.styles.innerDisabled]: _ctx.isDisabled,
            [_ctx.styles.innerSelected]: _ctx.isSelected && !_ctx.isDisabled,
            [_ctx.styles.innerSelectedDisabled]: _ctx.isDisabled && _ctx.isSelected,
            [_ctx.styles.ring]: !_ctx.isDisabled
          }),
          tabindex: "-1"
        }, null, 2)
      ], 2),
      _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 0,
        class: vue.normalizeClass(_ctx.styles.contentWrap)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2)) : vue.createCommentVNode("", true)
    ], 2);
  }
  var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
  const _sfc_main = vue.defineComponent({
    name: "RadioGroup",
    props: {
      modelValue: {
        type: [String, Number, Boolean],
        default: false
      },
      disabled: {
        type: Boolean,
        default: void 0
      }
    },
    emits: ["update:modelValue", "change"],
    setup(props, ctx) {
      const { modelValue, disabled } = vue.toRefs(props);
      const isDisabled = apathia_hooks.useInjectProp("FormDisabled", false, disabled);
      const groupState = vue.computed(() => ({
        value: modelValue.value,
        disabled: isDisabled.value
      }));
      vue.provide("groupState", groupState);
      vue.provide("changeHandler", (val) => {
        ctx.emit("update:modelValue", val);
        ctx.emit("change", val);
      });
      return {};
    }
  });
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  var RadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  exports2.Radio = Radio;
  exports2.RadioGroup = RadioGroup;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
