import { isRef, computed, unref, defineComponent, toRefs, inject, ref, openBlock, createElementBlock, normalizeClass, createElementVNode, withKeys, renderSlot, createCommentVNode, provide } from "vue";
import { noop } from "lodash";
import { style, css, tw, apply } from "@apathia/apathia.twind";
import { useInjectProp } from "@apathia/apathia.hooks";
function useRadio(userProps, ctx) {
  const { disabled, modelValue, value, groupState, changeHandler, inputEl } = userProps;
  let isSelected;
  if (isRef(groupState)) {
    isSelected = computed(() => unref(groupState).value === value.value);
  } else {
    isSelected = computed(() => modelValue.value === value.value);
  }
  const select = () => {
    if (disabled.value) {
      return;
    }
    ctx.emit("update:modelValue", value.value);
    const input = inputEl && unref(inputEl);
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
const _sfc_main$1 = defineComponent({
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
    const { value, modelValue } = toRefs(props);
    const groupState = inject("groupState", null);
    const changeHandler = inject("changeHandler", noop);
    const isDisabled = computed(() => {
      if (props.disabled !== void 0) {
        return props.disabled;
      }
      return isRef(groupState) ? groupState.value.disabled : false;
    });
    const inputEl = ref(null);
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
      wrapper: style`inline-flex mr-2 p-0 list-none cursor-pointer items-center text-sm ${css`
        line-height: 38px;
      `}`,
      wrapperDisabled: style`text-gray-300 cursor-not-allowed`,
      radio: style`relative inline-block m-0 p-0 whitespace-nowrap align-middle`,
      inner: tw(
        style`relative block w-4 h-4 top-0 left-0 bg-white border border-gray-500 outline-none`,
        css`
          border-radius: 100px;
          transition: all 0.3s;
          &::after {
            content: '';
            position: absolute;
            display: table;
            width: 8px;
            height: 8px;
            left: 3px;
            top: 3px;
            border-radius: 4px;
            ${apply`bg-brand-500`}
            opacity: 0;
            transform: scale(0);
            transition: all 0.15s cubic-bezier(0.78, 0.14, 0.15, 0.86);
          }
        `
      ),
      innerSelected: tw(
        style`border-brand-300`,
        css`
          &::after {
            opacity: 1;
            transform: scale(0.875);
            transition: all 0.15s cubic-bezier(0.78, 0.14, 0.15, 0.86);
          }
        `
      ),
      innerDisabled: style`bg-gray-100 border-gray-300 cursor-not-allowed outline-none`,
      innerSelectedDisabled: tw(css`
        &::after {
          opacity: 1;
          transform: scale(0.875);
          transition: all 0.15s cubic-bezier(0.78, 0.14, 0.15, 0.86);
        }
      `),
      ring: style`focus:ring-2 focus:ring-brand-500`,
      input: style`hidden`,
      contentWrap: style`mx-1`
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
  return openBlock(), createElementBlock("label", {
    class: normalizeClass({ [_ctx.styles.wrapper]: true, [_ctx.styles.wrapperDisabled]: _ctx.isDisabled })
  }, [
    createElementVNode("span", {
      class: normalizeClass({ [_ctx.styles.radio]: true })
    }, [
      createElementVNode("input", {
        type: "radio",
        tabindex: "0",
        class: normalizeClass({ [_ctx.styles.input]: true }),
        value: _ctx.value,
        checked: _ctx.isSelected,
        disabled: _ctx.isDisabled,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onKeydown: [
          _cache[1] || (_cache[1] = withKeys((...args) => _ctx.handleChange && _ctx.handleChange(...args), ["space"])),
          _cache[2] || (_cache[2] = withKeys((...args) => _ctx.handleChange && _ctx.handleChange(...args), ["enter"]))
        ]
      }, null, 42, _hoisted_1),
      createElementVNode("span", {
        ref: "inputEl",
        class: normalizeClass({
          [_ctx.styles.inner]: true,
          [_ctx.styles.innerDisabled]: _ctx.isDisabled,
          [_ctx.styles.innerSelected]: _ctx.isSelected && !_ctx.isDisabled,
          [_ctx.styles.innerSelectedDisabled]: _ctx.isDisabled && _ctx.isSelected,
          [_ctx.styles.ring]: !_ctx.isDisabled
        }),
        tabindex: "-1"
      }, null, 2)
    ], 2),
    _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(_ctx.styles.contentWrap)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)) : createCommentVNode("", true)
  ], 2);
}
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = defineComponent({
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
    const { modelValue, disabled } = toRefs(props);
    const isDisabled = useInjectProp("FormDisabled", false, disabled);
    const groupState = computed(() => ({
      value: modelValue.value,
      disabled: isDisabled.value
    }));
    provide("groupState", groupState);
    provide("changeHandler", (val) => {
      ctx.emit("update:modelValue", val);
      ctx.emit("change", val);
    });
    return {};
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var RadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Radio, RadioGroup };
