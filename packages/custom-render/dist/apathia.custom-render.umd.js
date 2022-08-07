(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["custom-render"] = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  var CustomRender = vue.defineComponent({
    name: "Render",
    inheritAttrs: false,
    props: {
      render: {
        type: [Function, String]
      },
      as: {
        type: [String, Object],
        default: "span"
      }
    },
    setup(props, { attrs, slots }) {
      return () => typeof props.render !== void 0 && typeof props.render === "function" ? props.render(attrs) : vue.h(props.as, attrs, {
        default: () => {
          var _a;
          return props.render || ((_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        }
      });
    }
  });
  exports2.CustomRender = CustomRender;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
