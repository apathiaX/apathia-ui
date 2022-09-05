(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@apathia/apathia.twind"), require("@apathia/apathia.hooks")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@apathia/apathia.twind", "@apathia/apathia.hooks"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.checkbox = {}, global.Vue, global.twind, global.hooks));
})(this, function(exports2, vue, apathia_twind, apathia_hooks) {
  "use strict";
  function useCheckbox(userProps, ctx) {
    const { disabled, modelValue, trueValue, falseValue, value, inputEl } = userProps;
    const isArrayCheckbox = vue.computed(() => Array.isArray(modelValue.value));
    const arrayTrueValue = vue.computed(() => typeof value.value !== "undefined" ? value.value : trueValue.value);
    const isChecked = vue.computed(() => {
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
      const input = inputEl && vue.unref(inputEl);
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
  const _sfc_main = vue.defineComponent({
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
      const inputEl = vue.ref(null);
      const { modelValue, trueValue, falseValue, value, disabled } = vue.toRefs(props);
      const disableInput = apathia_hooks.useInjectProp(
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
        wrapper: apathia_twind.style`inline-flex mr-2 p-0 list-none cursor-pointer items-center text-sm`,
        disabledWrapper: apathia_twind.style`text-fill-accent cursor-not-allowed`,
        checkbox: apathia_twind.style`relative inline-block p-0 whitespace-nowrap outline-none align-middle`,
        inner: apathia_twind.tw(
          apathia_twind.style`relative block w-4 h-4 top-0 left-0 bg-fill-white border border-fill-accent rounded outline-none`,
          apathia_twind.css`
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
        checkedBlueBorder: apathia_twind.style`bg-brand-primary border-brand-primary`,
        checkedAfter: apathia_twind.tw(apathia_twind.css`
        &::after {
          transform: rotate(45deg) scale(1);
          transition: all 0.15s cubic-bezier(0.12, 0.4, 0.29, 1.46);
        }
      `),
        indeterAfter: apathia_twind.tw(apathia_twind.css`
        &::after {
          transform: rotate(90deg) scale(1);
          border-bottom: 0;
        }
      `),
        disabledInner: apathia_twind.tw(
          apathia_twind.style`bg-fill-gray border-fill-accent cursor-not-allowed outline-none`,
          apathia_twind.css`
          &::after {
            ${apathia_twind.apply`border-fill-accent`}
          }
        `
        ),
        ring: apathia_twind.style`focus:ring-2 focus:ring-brand-primary`,
        input: apathia_twind.style`hidden`,
        contentWrap: apathia_twind.style`mx-1`
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
    return vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass({ [_ctx.styles.wrapper]: true, [_ctx.styles.disabledWrapper]: _ctx.disableInput })
    }, [
      vue.createElementVNode("span", {
        class: vue.normalizeClass({ [_ctx.styles.checkbox]: true })
      }, [
        vue.createElementVNode("input", {
          type: "checkbox",
          class: vue.normalizeClass({ [_ctx.styles.input]: true }),
          checked: _ctx.isChecked,
          disabled: _ctx.disableInput,
          value: _ctx.trueValue,
          onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.handleChange && _ctx.handleChange(...args), ["stop"])),
          onKeydown: [
            _cache[1] || (_cache[1] = vue.withKeys((...args) => _ctx.handleChange && _ctx.handleChange(...args), ["space"])),
            _cache[2] || (_cache[2] = vue.withKeys((...args) => _ctx.handleChange && _ctx.handleChange(...args), ["enter"]))
          ]
        }, null, 42, _hoisted_1),
        vue.createElementVNode("span", {
          ref: "inputEl",
          class: vue.normalizeClass({
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
      _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 0,
        class: vue.normalizeClass(_ctx.styles.contentWrap)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2)) : vue.createCommentVNode("", true)
    ], 2);
  }
  var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  exports2.Checkbox = Checkbox;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
