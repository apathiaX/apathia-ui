import stringwidth from "string-width";
import { defineComponent, ref, computed, toRef, nextTick, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createCommentVNode, createElementVNode, withDirectives, mergeProps, vModelDynamic, createBlock, withModifiers, withCtx, createVNode } from "vue";
import { useInjectProp, useAttrs } from "@apathia/apathia.hooks";
import { apply, style, tw } from "@apathia/apathia.twind";
import { Icon } from "@apathia/apathia.icon";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
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
    const activeVal = ref(false);
    const withPrepend = computed(() => ctx.slots.prepend !== void 0);
    const withAppend = computed(() => ctx.slots.append !== void 0);
    const disableInput = useInjectProp("FormDisabled", false, toRef(props, "disabled"));
    const showClearIcon = computed(
      () => props.clearable && props.modelValue && !disableInput.value
    );
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
    const onSearch = () => {
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
      activeVal,
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
const getStyles = () => {
  const prependAndAppend = apply`text(content-accent sm) px-2 inline-flex items-center bg-fill-gray`;
  const commonIcon = apply`absolute self-center text-fill-secondary`;
  const interactiveIcon = apply`${commonIcon}cursor-pointer hover:(text-fill-accent)`;
  return {
    inputContainer: style`relative flex w-full h-8 border rounded border-line-accent bg-content-white shadow`,
    inputWrapper: style`relative flex rounded flex-grow-1 bg-content-white`,
    input: style`w-full h-full rounded block text-sm outline-none py-1.5 pl-2`,
    withPrefix: style`pl-9`,
    disabled: style(
      "cursor-not-allowed pointer-events-none bg-info-forbid placeholder-content-secondary text-content-neutral"
    ),
    active: style`border-brand-primary`,
    prepend: tw`${prependAndAppend}${apply`rounded-l border-r-0`}`,
    clearableIcon: tw`${interactiveIcon}${apply`right-2`}`,
    clearWithSuffix: tw`${interactiveIcon}${apply`right-8`}`,
    append: tw`${prependAndAppend}${apply`rounded-r`}`,
    suffixBtn: tw`${interactiveIcon}${apply`right-2`}`
  };
};
const _hoisted_1 = ["type", "disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Close = resolveComponent("Close");
  const _component_Icon = resolveComponent("Icon");
  const _component_Search = resolveComponent("Search");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      {
        [_ctx.styles.inputContainer]: true,
        [_ctx.styles.active]: _ctx.activeVal,
        [_ctx.styles.disabled]: !!_ctx.disableInput
      },
      _ctx.$attrs.class
    ]),
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
            [_ctx.styles.disabled]: !!_ctx.disableInput
          },
          _ctx.inputClass
        ],
        disabled: !!_ctx.disableInput,
        onInput: _cache[1] || (_cache[1] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
        onBlur: _cache[2] || (_cache[2] = () => _ctx.activeVal = false),
        onFocus: _cache[3] || (_cache[3] = () => _ctx.activeVal = true)
      }), null, 16, _hoisted_1), [
        [vModelDynamic, _ctx.inputVal]
      ]),
      _ctx.showClearIcon ? (openBlock(), createBlock(_component_Icon, {
        key: 0,
        class: normalizeClass([_ctx.styles.clearableIcon, _ctx.search ? _ctx.styles.clearWithSuffix : ""]),
        onClick: withModifiers(_ctx.clear, ["stop"])
      }, {
        default: withCtx(() => [
          createVNode(_component_Close)
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : createCommentVNode("", true),
      _ctx.search ? (openBlock(), createBlock(_component_Icon, {
        key: 1,
        class: normalizeClass(_ctx.styles.suffixBtn),
        onClick: _ctx.onSearch
      }, {
        default: withCtx(() => [
          createVNode(_component_Search)
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : createCommentVNode("", true)
    ], 2),
    _ctx.withAppend ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(_ctx.styles.append)
    }, [
      renderSlot(_ctx.$slots, "append")
    ], 2)) : createCommentVNode("", true)
  ], 6);
}
var Input = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Input };
