(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@apathia/apathia.twind")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@apathia/apathia.twind"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.loading = {}, global.Vue, global.twind));
})(this, function(exports2, vue, apathia_twind) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = vue.defineComponent({
    name: "Loading",
    setup() {
      const styles = getStyles();
      return {
        styles
      };
    }
  });
  const getStyles = () => ({
    spinnerItem: apathia_twind.style`after:bg-brand-500`
  });
  const _hoisted_1 = { class: "lds-spinner" };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.styles.spinnerItem)
      }, null, 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.styles.spinnerItem)
      }, null, 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.styles.spinnerItem)
      }, null, 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.styles.spinnerItem)
      }, null, 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.styles.spinnerItem)
      }, null, 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.styles.spinnerItem)
      }, null, 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.styles.spinnerItem)
      }, null, 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.styles.spinnerItem)
      }, null, 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.styles.spinnerItem)
      }, null, 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.styles.spinnerItem)
      }, null, 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.styles.spinnerItem)
      }, null, 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.styles.spinnerItem)
      }, null, 2)
    ]);
  }
  var Loading = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  exports2.Loading = Loading;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
