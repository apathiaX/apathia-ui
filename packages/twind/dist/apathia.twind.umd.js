(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("twind/css"), require("twind/sheets"), require("twind/colors"), require("twind"), require("lodash"), require("vue")) : typeof define === "function" && define.amd ? define(["exports", "twind/css", "twind/sheets", "twind/colors", "twind", "lodash", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.twind = {}, global["twind/css"], global["twind/sheets"], global["twind/colors"], global.twind, global.lodash, global.Vue));
})(this, function(exports2, css, sheets, colors, twind, lodash, vue) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e[k];
            }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var css__namespace = /* @__PURE__ */ _interopNamespace(css);
  var sheets__namespace = /* @__PURE__ */ _interopNamespace(sheets);
  var colors__namespace = /* @__PURE__ */ _interopNamespace(colors);
  var twind__namespace = /* @__PURE__ */ _interopNamespace(twind);
  const defaultTheme = {
    theme: {
      colors: {
        brand: {
          primary: "#00AEEC",
          hover: "#24C1F9",
          active: "#0090C4",
          forbid: "rgba(0, 174, 236, 0.5)",
          light: "#EFFBFF"
        },
        content: {
          primary: "#18191C",
          accent: "#61666D",
          secondary: "#9499A0",
          neutral: "#C9CCD0",
          white: "#FFFFFF",
          link: "#008AC5"
        },
        fill: {
          primary: "#61666D",
          accent: "#9499A0",
          secondary: "#C9CCD0",
          neutral: "#E3E5E7",
          gray: "#F1F2F3",
          light: "#F6F7F8",
          white: "#FFF"
        },
        line: {
          primary: "#C9CCD0",
          accent: "#E3E5E7",
          secondary: "#F1F2F3"
        },
        pink: {
          primary: "#FF6699",
          hover: "#FF70A3",
          active: "#E15584",
          forbid: "rgba(255, 102, 153, 0.5)",
          light: "#FFF7F9"
        },
        success: {
          primary: "#2AC864",
          hover: "#3CE47A",
          active: "#009A29",
          forbid: "rgba(42, 200, 100, 0.5)",
          light: "#E8FFEA"
        },
        warning: {
          primary: "#FF7F24",
          hover: "#FF9A2E",
          active: "#D25F00",
          forbid: "rgba(255, 127, 36, 0.5)",
          light: "#FFF7E8"
        },
        error: {
          primary: "#F85A54",
          hover: "#FF7873",
          active: "#D94640",
          forbid: "rgba(248, 90, 84, 0.5)",
          light: "#FFECE8"
        },
        info: {
          primary: "#F1F2F3",
          hover: "#F6F7F8",
          active: "#E3E5E7",
          forbid: "rgba(241, 242, 243, 0.5)",
          light: "#FFFFFF"
        },
        transparent: "transparent"
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.125rem" }],
        sm: ["0.8125rem", { lineHeight: "1.25rem" }],
        base: ["0.875rem", { lineHeight: "1.375rem" }],
        lg: ["1rem", { lineHeight: "1.5rem" }],
        xl: ["1.125rem", { lineHeight: "1.625rem" }],
        "2xl": ["1.5rem", { lineHeight: "2.25rem" }]
      },
      boxShadow: {
        sm: "0px 1px 2px rgba(0, 0, 0, 0.3);",
        DEFAULT: "0px 0px 2px rgba(0, 0, 0, 0.04), 0px 4px 10px rgba(0, 0, 0, 0.08)",
        md: "0px 0px 4px rgba(0, 0, 0, 0.06), 0px 12px 20px rgba(0, 0, 0, 0.1)",
        lg: "0px 0px 6px rgba(0, 0, 0, 0.08), 0px 20px 30px rgba(0, 0, 0, 0.12)",
        none: "none"
      },
      padding: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        "btn-sm-y": "0.25rem",
        "btn-md-y": "0.3125rem",
        "btn-lg-y": "0.4375rem"
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
    setup(lodash.merge(defaultTheme, getConfig ? getConfig({
      twind: twind__namespace,
      sheets: sheets__namespace,
      colors: colors__namespace,
      css: css__namespace
    }) : {}));
  }
  const style = (...args) => {
    if (args.length > 0 && !Array.isArray(args[0]) && typeof args[0] === "string" && args[0].includes("=>")) {
      console.warn(
        "\u8BF7\u4F7F\u7528\u6A21\u7248\u5B57\u7B26\u4E32\u8C03\u7528 style`a b ${css`a`}`, \u4E0D\u8981\u7528 style(`a b ${css`a`}`)\u3002"
      );
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
    get: function() {
      return css.animation;
    }
  });
  Object.defineProperty(exports2, "apply", {
    enumerable: true,
    get: function() {
      return css.apply;
    }
  });
  Object.defineProperty(exports2, "css", {
    enumerable: true,
    get: function() {
      return css.css;
    }
  });
  Object.defineProperty(exports2, "keyframes", {
    enumerable: true,
    get: function() {
      return css.keyframes;
    }
  });
  Object.defineProperty(exports2, "tw", {
    enumerable: true,
    get: function() {
      return css.tw;
    }
  });
  exports2.getComputedStyle = getComputedStyle;
  exports2.setupApathiaTwindTheme = setupApathiaTwindTheme;
  exports2.style = style;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
