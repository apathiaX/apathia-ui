(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@apathia/apathia.twind"), require("@apathia/apathia.hooks"), require("@apathia/apathia.shared")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@apathia/apathia.twind", "@apathia/apathia.hooks", "@apathia/apathia.shared"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.button = {}, global.Vue, global.twind, global.hooks, global.shared));
})(this, function(exports2, vue, apathia_twind, apathia_hooks, apathia_shared) {
  "use strict";
  function useButton(userProps, ctx) {
    const { disabled } = userProps;
    const { onclick = apathia_shared.noop, ondblclick = apathia_shared.noop, onmousedown = apathia_shared.noop, onmouseup = apathia_shared.noop } = ctx.attrs;
    const getButtonProps = () => ({
      disabled: !!disabled.value,
      onclick: !disabled.value && apathia_shared.isFunction(onclick) ? onclick : apathia_shared.noop,
      ondblclick: !disabled.value && apathia_shared.isFunction(ondblclick) ? ondblclick : apathia_shared.noop,
      onmousedown: !disabled.value && apathia_shared.isFunction(onmousedown) ? onmousedown : apathia_shared.noop,
      onmouseup: !disabled.value && apathia_shared.isFunction(onmouseup) ? onmouseup : apathia_shared.noop
    });
    return {
      getButtonProps
    };
  }
  const _sfc_main = vue.defineComponent({
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
      const { tag, href, disabled } = vue.toRefs(props);
      const disableButton = apathia_hooks.useInjectProp("FormDisabled", false, disabled);
      const tagType = vue.computed(() => {
        if (href && href.value) {
          return "a";
        }
        return tag && tag.value ? tag.value : "button";
      });
      const userProps = { disabled: disableButton };
      const { getButtonProps } = useButton(userProps, ctx);
      const styles = {
        base: apathia_twind.style`inline-block border no-underline rounded-md px-4 py-2 transition duration-500 ease select-none focus:outline-none hover:shadow-lg text-sm mr-2 whitespace-nowrap`,
        primary: apathia_twind.style`border-brand-500 bg-brand-500 text-white hover:bg-brand-700`,
        success: apathia_twind.style`border-green-500 bg-green-500 text-white hover:bg-green-700`,
        danger: apathia_twind.style`border-red-500 bg-red-500 text-white hover:bg-red-700`,
        warning: apathia_twind.style`border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-700`,
        info: apathia_twind.style`border-gray-500 bg-gray-500 text-white hover:bg-gray-700`,
        secondary: apathia_twind.style`border-gray-500 bg-gray-500 text-gray-300 hover:bg-gray-700`,
        active: apathia_twind.tw`${apathia_twind.css`
        filter: brightness(1.1) contrast(150%);
      `}`,
        hollow: apathia_twind.style`bg-clip-text text-opacity-0`,
        plain: apathia_twind.style`border-0 hover:shadow-none`,
        small: apathia_twind.style`text-xs font-medium`,
        large: apathia_twind.style`text-xl`,
        disabled: apathia_twind.style`cursor-not-allowed opacity-50`
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
    return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tagType), vue.mergeProps({ ..._ctx.getButtonProps() }, {
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
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "href", "to"]);
  }
  const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  exports2.BaseButton = Button;
  exports2.useButton = useButton;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
