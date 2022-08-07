import { computed, unref, defineComponent, ref, toRefs, openBlock, createElementBlock, normalizeClass, createElementVNode, withModifiers, withKeys, renderSlot, createCommentVNode } from "vue";
import { style, css, tw, apply } from "@apathia/apathia.twind";
import { useInjectProp } from "@apathia/apathia.hooks";
function useCheckbox(userProps, ctx) {
  const { disabled, modelValue, trueValue, falseValue, value, inputEl } = userProps;
  const isArrayCheckbox = computed(() => Array.isArray(modelValue.value));
  const arrayTrueValue = computed(() => typeof value.value !== "undefined" ? value.value : trueValue.value);
  const isChecked = computed(() => {
    if (isArrayCheckbox.value) {
      const valArr = modelValue.value;
      return valArr.indexOf(arrayTrueValue.value) > -1;
    }
    return trueValue.value === modelValue.value;
  });
  const handleChange = () => {
    if (disabled.value) {
      return;
    }
    let newValue;
    if (isArrayCheckbox.value) {
      const valArr = modelValue.value;
      const valueTrue = arrayTrueValue.value;
      newValue = valArr.slice();
      const index = newValue.indexOf(valueTrue);
      if (index > -1) {
        newValue.splice(index, 1);
      } else {
        newValue.push(valueTrue);
      }
    } else {
      newValue = trueValue.value;
      if (isChecked.value) {
        newValue = falseValue.value;
      }
    }
    ctx.emit("update:modelValue", newValue);
    const input = inputEl && unref(inputEl);
    if (input) {
      input.focus();
    }
    ctx.emit("change", newValue);
  };
  return {
    isChecked,
    handleChange
  };
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "Checkbox",
  props: {
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    value: {
      type: [String, Number],
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, ctx) {
    const inputEl = ref(null);
    const { modelValue, trueValue, falseValue, value, disabled } = toRefs(props);
    const disableInput = useInjectProp(
      "FormDisabled",
      false,
      disabled
    );
    const userProps = {
      modelValue,
      trueValue,
      falseValue,
      value,
      disabled: disableInput,
      inputEl
    };
    const { isChecked, handleChange } = useCheckbox(
      userProps,
      ctx
    );
    const styles = {
      wrapper: style`inline-flex mr-2 p-0 list-none cursor-pointer items-center text-sm ${css`
        line-height: 38px;
        height: 38px;
      `}`,
      disabledWrapper: style`text-gray-500 cursor-not-allowed`,
      checkbox: style`relative inline-block p-0 whitespace-nowrap outline-none align-middle`,
      inner: tw(
        style`relative block w-4 h-4 top-0 left-0 bg-white border border-gray-500 rounded outline-none`,
        css`
          transition: all 0.3s;
          &::after {
            content: '';
            display: table;
            position: absolute;
            width: 5px;
            height: 9px;
            top: 1px;
            left: 5px;
            border: 2px solid #fff;
            border-top: 0;
            border-left: 0;
            transform: rotate(45deg) scale(0);
            transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
          }
        `
      ),
      checkedBlueBorder: style`bg-brand-500 border-brand-500`,
      checkedAfter: tw(css`
        &::after {
          transform: rotate(45deg) scale(1);
          transition: all 0.15s cubic-bezier(0.12, 0.4, 0.29, 1.46);
        }
      `),
      indeterAfter: tw(css`
        &::after {
          transform: rotate(90deg) scale(1);
          border-bottom: 0;
        }
      `),
      disabledInner: tw(
        style`bg-gray-100 border-gray-500 cursor-not-allowed outline-none`,
        css`
          &::after {
            ${apply`border-gray-500`}
          }
        `
      ),
      ring: style`focus:ring-2 focus:ring-brand-500`,
      input: style`hidden`,
      contentWrap: style`mx-1`
    };
    return {
      inputEl,
      isChecked,
      handleChange,
      disableInput,
      styles
    };
  }
});
const _hoisted_1 = ["checked", "disabled", "value"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass({ [_ctx.styles.wrapper]: true, [_ctx.styles.disabledWrapper]: _ctx.disableInput })
  }, [
    createElementVNode("span", {
      class: normalizeClass({ [_ctx.styles.checkbox]: true })
    }, [
      createElementVNode("input", {
        type: "checkbox",
        class: normalizeClass({ [_ctx.styles.input]: true }),
        checked: _ctx.isChecked,
        disabled: _ctx.disableInput,
        value: _ctx.trueValue,
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleChange && _ctx.handleChange(...args), ["stop"])),
        onKeydown: [
          _cache[1] || (_cache[1] = withKeys((...args) => _ctx.handleChange && _ctx.handleChange(...args), ["space"])),
          _cache[2] || (_cache[2] = withKeys((...args) => _ctx.handleChange && _ctx.handleChange(...args), ["enter"]))
        ]
      }, null, 42, _hoisted_1),
      createElementVNode("span", {
        ref: "inputEl",
        class: normalizeClass({
          [_ctx.styles.inner]: true,
          [_ctx.styles.disabledInner]: _ctx.disableInput,
          [_ctx.styles.checkedBlueBorder]: !_ctx.disableInput && (_ctx.isChecked || _ctx.indeterminate),
          [_ctx.styles.checkedAfter]: _ctx.isChecked && !_ctx.indeterminate,
          [_ctx.styles.indeterAfter]: !_ctx.isChecked && _ctx.indeterminate,
          [_ctx.styles.ring]: !_ctx.disableInput
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
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Checkbox };
