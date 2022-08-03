import * as css from "twind/css";
import { animation, apply, css as css2, keyframes, tw } from "twind/css";
import * as sheets from "twind/sheets";
import * as colors from "twind/colors";
import * as twind from "twind";
import { tw as tw2, apply as apply2 } from "twind";
import { merge } from "lodash-es";
import { computed, unref } from "vue";
const defaultTheme = {
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      transparent: "transparent",
      red: {
        100: colors.red["100"],
        300: colors.red["300"],
        500: colors.red["500"],
        700: colors.red["700"],
        900: colors.red["900"]
      },
      yellow: {
        100: colors.yellow["100"],
        300: colors.yellow["300"],
        500: colors.yellow["500"],
        700: colors.yellow["700"],
        900: colors.yellow["900"]
      },
      green: {
        100: colors.green["100"],
        300: colors.green["300"],
        500: colors.green["500"],
        700: colors.green["700"],
        900: colors.green["900"]
      },
      gray: {
        50: colors.coolGray["50"],
        100: colors.coolGray["100"],
        300: colors.coolGray["300"],
        500: colors.coolGray["500"],
        700: colors.coolGray["700"],
        900: colors.coolGray["900"]
      },
      brand: {
        100: colors.blue["100"],
        300: colors.blue["300"],
        500: colors.blue["500"],
        700: colors.blue["700"],
        900: colors.blue["900"]
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
  const { setup } = twind;
  setup(merge(defaultTheme, getConfig ? getConfig({
    twind,
    sheets,
    colors,
    css
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
  return tw2(apply2(...args));
};
const getComputedStyle = (refs, func) => {
  return computed(() => {
    const unrefProps = Object.keys(refs).reduce((acc, key) => {
      acc[key] = unref(refs[key]);
      return acc;
    }, {});
    return func.call(null, unrefProps);
  });
};
export {
  animation,
  apply,
  css2 as css,
  getComputedStyle,
  keyframes,
  setupApathiaTwindTheme,
  style,
  tw
};
