import stringwidth from "string-width";
import { defineComponent, ref, computed, toRef, nextTick, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createCommentVNode, createElementVNode, withDirectives, mergeProps, vModelDynamic, createBlock, withModifiers } from "vue";
import { apply, style, tw } from "@apathia/apathia.twind";
import { useInjectProp, useAttrs } from "@apathia/apathia.hooks";
import { Icon } from "@apathia/apathia.icon";
const getStyles = () => {
  const prependAndAppend = apply`text(gray-500 sm) px-3 inline-flex items-center border border-gray-300 bg-gray-100`;
  const commonIcon = apply`absolute self-center px-1 text-gray-300`;
  const interactiveIcon = apply`${commonIcon}cursor-pointer hover:(text-gray-700)`;
  return {
    inputContainer: style`relative flex w-full`,
    inputWrapper: style`relative flex flex-grow-1`,
    input: style`w-full block border border-gray-300 shadow-sm rounded-md text-sm py-2 px-3 outline-none focus:(bg-white border-brand-500)`,
    withPrefix: style`pl-9`,
    withPrepend: style`rounded-l-none`,
    withAppend: style`rounded-r-none`,
    withSuffix: style`pr-9`,
    withSuffixAndClear: style`pr-14`,
    disabled: style`bg-gray-100`,
    prepend: tw`${prependAndAppend}${apply`rounded-l-md border-r-0`}`,
    clearableIcon: tw`${interactiveIcon}${apply`right-2 px-0`}`,
    clearWithSuffix: tw`${interactiveIcon}${apply`right-7`}`,
    append: tw`${prependAndAppend}${apply`rounded-r-md border-l-0`}`,
    suffixBtn: tw`${interactiveIcon}${apply`right-2 px-0`}`
  };
};
const _sfc_main = defineComponent({
  name: "Input",
  components: {
    Icon
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    inputClass: {
      type: [String, Object],
      default: ""
    },
    search: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    maxwords: {
      type: Number
    }
  },
  emits: ["update:modelValue", "input", "search"],
  setup(props, ctx) {
    const inputRef = ref(null);
    const withPrepend = computed(() => ctx.slots.prepend !== void 0);
    const withAppend = computed(() => ctx.slots.append !== void 0);
    const disableInput = useInjectProp("FormDisabled", false, toRef(props, "disabled"));
    const showClearIcon = computed(() => props.clearable && props.modelValue && !disableInput.value);
    const attrs = useAttrs();
    const inputVal = computed({
      get: () => props.modelValue,
      set: (val) => {
        const strWidth = stringwidth(val);
        if (props.maxwords !== void 0 && strWidth > 2 * props.maxwords) {
          if (inputRef.value) {
            inputRef.value.value = getStringByWords(val, props.maxwords * 2);
          }
          return;
        }
        ctx.emit("update:modelValue", val);
      }
    });
    const handleInput = (e) => {
      ctx.emit("input", e);
    };
    const getStringByWords = (str, width) => {
      let totalCnt = 0;
      let res = "";
      for (const char of str) {
        totalCnt += stringwidth(char);
        if (totalCnt > width) {
          return res;
        }
        res += char;
      }
      return res;
    };
    const onSearch = (e) => {
      e.preventDefault();
      if (inputRef.value) {
        inputRef.value.focus();
      }
      ctx.emit("search", props.modelValue);
    };
    const clear = () => {
      ctx.emit("update:modelValue", "");
      nextTick(() => {
        if (inputRef.value) {
          inputRef.value.dispatchEvent(new Event("input"));
        }
      });
    };
    const styles = getStyles();
    return {
      inputRef,
      inputVal,
      handleInput,
      attrs,
      withPrepend,
      withAppend,
      disableInput,
      showClearIcon,
      onSearch,
      clear,
      styles
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = ["type", "disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.styles.inputContainer, _ctx.$attrs.class]),
    style: normalizeStyle(_ctx.attrs.style)
  }, [
    _ctx.withPrepend ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(_ctx.styles.prepend)
    }, [
      renderSlot(_ctx.$slots, "prepend")
    ], 2)) : createCommentVNode("", true),
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.inputWrapper)
    }, [
      withDirectives(createElementVNode("input", mergeProps({
        ref: "inputRef",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.inputVal = $event)
      }, _ctx.attrs, {
        type: _ctx.type,
        class: [
          {
            [_ctx.styles.input]: true,
            [_ctx.styles.withPrepend]: _ctx.withPrepend,
            [_ctx.styles.withSuffix]: _ctx.search || _ctx.showClearIcon,
            [_ctx.styles.withSuffixAndClear]: _ctx.search && _ctx.showClearIcon,
            [_ctx.styles.withAppend]: _ctx.withAppend,
            [_ctx.styles.disabled]: !!_ctx.disableInput
          },
          _ctx.inputClass
        ],
        disabled: !!_ctx.disableInput,
        onInput: _cache[1] || (_cache[1] = (...args) => _ctx.handleInput && _ctx.handleInput(...args))
      }), null, 16, _hoisted_1), [
        [vModelDynamic, _ctx.inputVal]
      ]),
      _ctx.showClearIcon ? (openBlock(), createBlock(_component_Icon, {
        key: 0,
        class: normalizeClass([_ctx.styles.clearableIcon, _ctx.search ? _ctx.styles.clearWithSuffix : ""]),
        name: ["fa", "times"],
        onClick: withModifiers(_ctx.clear, ["stop"])
      }, null, 8, ["class", "onClick"])) : createCommentVNode("", true),
      _ctx.search ? (openBlock(), createBlock(_component_Icon, {
        key: 1,
        class: normalizeClass(_ctx.styles.suffixBtn),
        name: ["fa", "search"],
        onClick: _ctx.onSearch
      }, null, 8, ["class", "onClick"])) : createCommentVNode("", true)
    ], 2),
    _ctx.withAppend ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(_ctx.styles.append)
    }, [
      renderSlot(_ctx.$slots, "append")
    ], 2)) : createCommentVNode("", true)
  ], 6);
}
const Input = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Input
};
