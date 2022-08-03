(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("twind/css"), require("twind/sheets"), require("twind/colors"), require("twind"), require("lodash-es"), require("vue")) : typeof define === "function" && define.amd ? define(["exports", "twind/css", "twind/sheets", "twind/colors", "twind", "lodash-es", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.twind = {}, global["twind/css"], global["twind/sheets"], global["twind/colors"], global.twind, global["lodash-es"], global.Vue));
})(this, function(exports2, css, sheets, colors, twind, lodashEs, vue) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k in e) {
        if (k !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  const css__namespace = /* @__PURE__ */ _interopNamespace(css);
  const sheets__namespace = /* @__PURE__ */ _interopNamespace(sheets);
  const colors__namespace = /* @__PURE__ */ _interopNamespace(colors);
  const twind__namespace = /* @__PURE__ */ _interopNamespace(twind);
  const defaultTheme = {
    theme: {
      colors: {
        black: "#000",
        white: "#fff",
        transparent: "transparent",
        red: {
          100: colors__namespace.red["100"],
          300: colors__namespace.red["300"],
          500: colors__namespace.red["500"],
          700: colors__namespace.red["700"],
          900: colors__namespace.red["900"]
        },
        yellow: {
          100: colors__namespace.yellow["100"],
          300: colors__namespace.yellow["300"],
          500: colors__namespace.yellow["500"],
          700: colors__namespace.yellow["700"],
          900: colors__namespace.yellow["900"]
        },
        green: {
          100: colors__namespace.green["100"],
          300: colors__namespace.green["300"],
          500: colors__namespace.green["500"],
          700: colors__namespace.green["700"],
          900: colors__namespace.green["900"]
        },
        gray: {
          50: colors__namespace.coolGray["50"],
          100: colors__namespace.coolGray["100"],
          300: colors__namespace.coolGray["300"],
          500: colors__namespace.coolGray["500"],
          700: colors__namespace.coolGray["700"],
          900: colors__namespace.coolGray["900"]
        },
        brand: {
          100: colors__namespace.blue["100"],
          300: colors__namespace.blue["300"],
          500: colors__namespace.blue["500"],
          700: colors__namespace.blue["700"],
          900: colors__namespace.blue["900"]
        }
      },
      zIndex: {
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        modal: "900",
        popper: "910",
        dropdown: "950",
        alert: "999"
      }
    }
  };
  function setupApathiaTwindTheme(getConfig) {
    const { setup } = twind__namespace;
    setup(lodashEs.merge(defaultTheme, getConfig ? getConfig({
      twind: twind__namespace,
      sheets: sheets__namespace,
      colors: colors__namespace,
      css: css__namespace
    }) : {}));
  }
  const style = (...args) => {
    if (process.env.NODE_ENV !== "production") {
      if (args.length > 0 && !Array.isArray(args[0]) && typeof args[0] === "string" && args[0].includes("=>")) {
        console.warn(
          "\u8BF7\u4F7F\u7528\u6A21\u7248\u5B57\u7B26\u4E32\u8C03\u7528 style`a b ${css`a`}`, \u4E0D\u8981\u7528 style(`a b ${css`a`}`)\u3002"
        );
      }
    }
    return twind.tw(twind.apply(...args));
  };
  const getComputedStyle = (refs, func) => {
    return vue.computed(() => {
      const unrefProps = Object.keys(refs).reduce((acc, key) => {
        acc[key] = vue.unref(refs[key]);
        return acc;
      }, {});
      return func.call(null, unrefProps);
    });
  };
  Object.defineProperty(exports2, "animation", {
    enumerable: true,
    get: () => css.animation
  });
  Object.defineProperty(exports2, "apply", {
    enumerable: true,
    get: () => css.apply
  });
  Object.defineProperty(exports2, "css", {
    enumerable: true,
    get: () => css.css
  });
  Object.defineProperty(exports2, "keyframes", {
    enumerable: true,
    get: () => css.keyframes
  });
  Object.defineProperty(exports2, "tw", {
    enumerable: true,
    get: () => css.tw
  });
  exports2.getComputedStyle = getComputedStyle;
  exports2.setupApathiaTwindTheme = setupApathiaTwindTheme;
  exports2.style = style;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
