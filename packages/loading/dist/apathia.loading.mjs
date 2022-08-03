import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass } from "vue";
import { style } from "@apathia/apathia.twind";
const _sfc_main = defineComponent({
  name: "Loading",
  setup() {
    const styles = getStyles();
    return {
      styles
    };
  }
});
const getStyles = () => ({
  spinnerItem: style`after:bg-brand-500`
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "lds-spinner" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.spinnerItem)
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.spinnerItem)
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.spinnerItem)
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.spinnerItem)
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.spinnerItem)
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.spinnerItem)
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.spinnerItem)
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.spinnerItem)
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.spinnerItem)
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.spinnerItem)
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.spinnerItem)
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.styles.spinnerItem)
    }, null, 2)
  ]);
}
const Loading = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Loading
};
