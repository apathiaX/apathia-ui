import { defineComponent, toRefs, computed, openBlock, createBlock, resolveDynamicComponent, mergeProps, withCtx, renderSlot } from "vue";
import { style, tw, css } from "@apathia/apathia.twind";
import { useInjectProp } from "@apathia/apathia.hooks";
import { isFunction, noop } from "@apathia/apathia.shared";
function useButton(userProps, ctx) {
  const { disabled } = userProps;
  const { onclick = noop, ondblclick = noop, onmousedown = noop, onmouseup = noop } = ctx.attrs;
  const getButtonProps = () => ({
    disabled: !!disabled.value,
    onclick: !disabled.value && isFunction(onclick) ? onclick : noop,
    ondblclick: !disabled.value && isFunction(ondblclick) ? ondblclick : noop,
    onmousedown: !disabled.value && isFunction(onmousedown) ? onmousedown : noop,
    onmouseup: !disabled.value && isFunction(onmouseup) ? onmouseup : noop
  });
  return {
    getButtonProps
  };
}
const _sfc_main = defineComponent({
  name: "BaseButton",
  props: {
    tag: { type: [String, Object] },
    href: { type: String },
    to: { type: [String, Object] },
    primary: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    danger: { type: Boolean, default: false },
    info: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    hollow: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    disabled: { type: Boolean, default: void 0 }
  },
  setup(props, ctx) {
    const { tag, href, disabled } = toRefs(props);
    const disableButton = useInjectProp("FormDisabled", false, disabled);
    const tagType = computed(() => {
      if (href && href.value) {
        return "a";
      }
      return tag && tag.value ? tag.value : "button";
    });
    const userProps = { disabled: disableButton };
    const { getButtonProps } = useButton(userProps, ctx);
    const styles = {
      base: style`inline-block border no-underline rounded-md px-4 py-2 transition duration-500 ease select-none focus:outline-none hover:shadow-lg text-sm mr-2 whitespace-nowrap`,
      primary: style`border-brand-500 bg-brand-500 text-white hover:bg-brand-700`,
      success: style`border-green-500 bg-green-500 text-white hover:bg-green-700`,
      danger: style`border-red-500 bg-red-500 text-white hover:bg-red-700`,
      warning: style`border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-700`,
      info: style`border-gray-500 bg-gray-500 text-white hover:bg-gray-700`,
      secondary: style`border-gray-500 bg-gray-500 text-gray-300 hover:bg-gray-700`,
      active: tw`${css`
        filter: brightness(1.1) contrast(150%);
      `}`,
      hollow: style`bg-clip-text text-opacity-0`,
      plain: style`border-0 hover:shadow-none`,
      small: style`text-xs font-medium`,
      large: style`text-xl`,
      disabled: style`cursor-not-allowed opacity-50`
    };
    return {
      getButtonProps,
      disableButton,
      tagType,
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tagType), mergeProps({ ..._ctx.getButtonProps() }, {
    class: {
      [_ctx.styles.base]: true,
      [_ctx.styles.primary]: _ctx.primary,
      [_ctx.styles.secondary]: _ctx.secondary,
      [_ctx.styles.success]: _ctx.success,
      [_ctx.styles.danger]: _ctx.danger,
      [_ctx.styles.info]: _ctx.info,
      [_ctx.styles.warning]: _ctx.warning,
      [_ctx.styles.active]: _ctx.active,
      [_ctx.styles.hollow]: _ctx.hollow || _ctx.plain,
      [_ctx.styles.plain]: _ctx.plain,
      [_ctx.styles.small]: _ctx.small,
      [_ctx.styles.large]: _ctx.large,
      [_ctx.styles.disabled]: _ctx.disableButton
    },
    href: _ctx.href,
    to: _ctx.to
  }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "href", "to"]);
}
const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Button as BaseButton,
  useButton
};
