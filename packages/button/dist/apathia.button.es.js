import { defineComponent, toRefs, computed, openBlock, createBlock, resolveDynamicComponent, mergeProps, withCtx, renderSlot } from "vue";
import { useInjectProp } from "@apathia/apathia.hooks";
import { style, css } from "@apathia/apathia.twind";
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
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "BaseButton",
  props: {
    tag: { type: [String, Object] },
    href: { type: String },
    primary: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    danger: { type: Boolean, default: false },
    info: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    pink: { type: Boolean, defult: false },
    active: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    hollow: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    disabled: { type: Boolean, default: void 0 }
  },
  setup(props, ctx) {
    const { tag, href, disabled } = toRefs(props);
    const disableButton = useInjectProp(
      "FormDisabled",
      false,
      disabled
    );
    const tagType = computed(() => {
      if (href && href.value) {
        return "a";
      }
      return tag && tag.value ? tag.value : "button";
    });
    const userProps = { disabled: disableButton };
    const { getButtonProps } = useButton(userProps, ctx);
    const styles = getButtonStyles();
    const btnClass = computed(() => {
      const themeString = props.primary && "primary" || props.pink && "pink" || props.success && "success" || props.danger && "danger" || props.info && "info" || props.warning && "warning" || "primary";
      return [
        styles.themeStyles.base,
        styles.themeStyles[themeString],
        props.small ? styles.size.small : "",
        props.large ? styles.size.large : "",
        props.hollow ? `${styles.hollow.base} ${styles.hollow[themeString]}` : "",
        props.plain ? styles.plain[themeString] : "",
        props.active ? styles.active[themeString] : "",
        props.disabled ? `${styles.disabled.base} ${styles.disabled[themeString]}` : "",
        props.round ? styles.size.round : ""
      ];
    });
    return {
      getButtonProps,
      disableButton,
      tagType,
      btnClass
    };
  }
});
const getButtonStyles = () => {
  const themeStyles = {
    base: style`inline-block border-0 no-underline rounded-md py-btn-md-y px-2 transition focus:outline-none duration-500 ease select-none text-base mr-2 whitespace-nowrap text-base text-center ${css`
        min-width: 3.75rem;
      `}`,
    primary: style`bg-brand-primary text-content-white hover:bg-brand-hover active:bg-brand-active`,
    pink: style`bg-pink-primary text-content-white hover:bg-pink-hover active:bg-pink-active`,
    success: style`bg-success-primary text-content-white hover:bg-success-hover active:bg-success-active`,
    danger: style`bg-error-primary text-content-white hover:bg-error-hover active:bg-error-active`,
    warning: style`bg-warning-primary text-content-white hover:bg-warning-hover active:bg-warning-active`,
    info: style`bg-info-primary text-content-accent hover:bg-info-hover active:bg-info-active`
  };
  const activeStyles = {
    primary: style`bg-brand-active`,
    pink: style`bg-pink-active`,
    success: style`bg-success-active`,
    danger: style`bg-error-active`,
    warning: style`bg-warning-active`,
    info: style`bg-fill-neutral`,
    secondary: style`border-brand-active text-brand-active`
  };
  const disableStyles = {
    base: style`cursor-not-allowed`,
    primary: style`bg-brand-forbid`,
    pink: style`bg-pink-forbid`,
    success: style`bg-success-forbid`,
    danger: style`bg-error-forbid`,
    warning: style`bg-warning-forbid`,
    info: style`bg-fill-gray`
  };
  const hollowStyles = {
    base: style`bg-fill-white border`,
    primary: style`text-brand-primary hover:text-content-white`,
    pink: style`text-pink-primary hover:text-content-white`,
    success: style`text-success-primary hover:text-content-white`,
    danger: style`text-error-primary hover:text-content-white`,
    warning: style`text-warning-primary hover:text-content-white`,
    info: style`text-content-accent hover:bg-success-primary hover:text-content-primary`
  };
  const plainStyles = {
    primary: style`bg-brand-light text-brand-primary hover:text-content-white`,
    pink: style`bg-pink-light text-pink-primary hover:text-content-white`,
    success: style`bg-success-light text-success-primary hover:text-content-white`,
    danger: style`bg-error-light text-error-primary hover:text-content-white`,
    warning: style`bg-warning-light text-warning-primary hover:text-content-white`,
    info: style`bg-fill-light text-content-accent hover:text-content-primary`
  };
  const sizeStyles = {
    small: style`text-sm font-medium py-btn-sm-y ${css`
        min-width: 3.5rem;
      `}`,
    large: style`text-base py-btn-lg-y ${css`
        width: 4rem;
      `}`,
    round: style`rounded-full`
  };
  return {
    themeStyles,
    active: activeStyles,
    disabled: disableStyles,
    hollow: hollowStyles,
    plain: plainStyles,
    size: sizeStyles
  };
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tagType), mergeProps({ ..._ctx.getButtonProps() }, {
    class: _ctx.btnClass,
    href: _ctx.href
  }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "href"]);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Button as BaseButton, useButton };
