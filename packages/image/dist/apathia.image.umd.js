(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@apathia/apathia.twind"), require("@apathia/apathia.icon"), require("@apathia/apathia.alert"), require("@apathia/apathia.shared")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@apathia/apathia.twind", "@apathia/apathia.icon", "@apathia/apathia.alert", "@apathia/apathia.shared"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.image = {}, global.Vue, global.twind, global.icon, global.alert, global.shared));
})(this, function(exports2, vue, apathia_twind, apathia_icon, apathia_alert, apathia_shared) {
  "use strict";
  const _hoisted_1 = ["src", "alt"];
  const _hoisted_2 = ["onClick"];
  const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("path", { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" }, null, -1);
  const _hoisted_4 = [
    _hoisted_3
  ];
  const _hoisted_5 = /* @__PURE__ */ vue.createElementVNode("p", null, "\u52A0\u8F7D\u5931\u8D25", -1);
  const _hoisted_6 = [
    _hoisted_5
  ];
  const _hoisted_7 = ["src", "alt", "onMousedown", "onMousemove", "onMouseup"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Image",
    props: {
      src: null,
      alt: { default: "img" },
      width: null,
      height: null,
      preview: { type: Boolean, default: true }
    },
    setup(__props) {
      const props = __props;
      const flash = apathia_twind.keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
      const flashCss = apathia_twind.css({
        animation: "0.5s ease",
        animationName: flash
      });
      const styles = {
        imgWrap: apathia_twind.style`relative inline-block`,
        img: apathia_twind.style`w-full h-auto align-middle bg-fill-gray`,
        mask: apathia_twind.style`
      absolute inset-0 cursor-pointer
      bg-fill-primary bg-opacity-50 opacity-0 transition-all
      text-content-white flex justify-center items-center text-center
      hover:opacity-100
    `,
        maskIcon: apathia_twind.style`inline-block fill-current`,
        transitionClass: {
          "leave-to-class": apathia_twind.tw`opacity-0`
        },
        duration: apathia_twind.tw`duration-500`,
        shadeClass: apathia_twind.style`z-50 fixed inset-0 h-full bg-fill-gray bg-opacity-50 overflow-auto ${flashCss}`,
        options: apathia_twind.style`
      m-0 p-0 absolute w-full
      flex flex-row-reverse items-center
      text-content-white bg-fill-white bg-opacity-10
      pointer-events-auto z-10
    `,
        optionIcons: apathia_twind.style`p-3 ml-4 text-xl cursor-pointer`,
        optionIconsSize: apathia_twind.style`text-lg`,
        previewImgWrap: apathia_twind.style`fixed inset-0 flex justify-center items-center`,
        previewImg: apathia_twind.style`max-w-full max-h-full cursor-grab select-none transition-all bg-fill-gray`,
        error: apathia_twind.style`flex justify-center items-center bg-fill-light text-fill-gray text-xs`,
        errorHidden: apathia_twind.style`hidden`,
        hoverEnlarge: apathia_twind.style`hover:text-lg transition-all`
      };
      const mask = vue.ref(false);
      const previewImage = vue.computed(() => {
        if (!props.src.includes("hdslb.com/bfs"))
          return props.src;
        const suffix = props.width && props.height ? `${props.width}x${props.height}` : props.width ? `${props.width}x0` : props.height ? `0x${props.height}` : "160x100";
        const path = props.src.replace(/^https?:/, "");
        return apathia_shared.resizeImage(path, suffix);
      });
      const toPx = (val) => {
        if (!val)
          return;
        const [num] = (val + "").split("px");
        return num + "px";
      };
      const imgStyle = vue.computed(() => {
        const width = toPx(props.width);
        const height = toPx(props.height);
        if (width) {
          return { width };
        } else if (height) {
          return { height };
        } else {
          return { width: "160px" };
        }
      });
      const imgErrorStyle = vue.computed(() => {
        const width = toPx(props.width);
        const height = toPx(props.height);
        if (width && height) {
          return { width, height };
        } else {
          return {
            width: width ? width : "160px",
            height: height ? height : "100px"
          };
        }
      });
      const isError = vue.ref(false);
      const handleError = () => {
        isError.value = true;
      };
      const clearOptions = () => {
        scaleTimes.value = 1;
        rotateAngle.value = 0;
        translate.x = 0;
        translate.y = 0;
      };
      const handleClickCopyLocation = () => {
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.setAttribute("value", props.src);
        input.select();
        if (document.execCommand("copy"))
          apathia_alert.toast.success("\u590D\u5236\u56FE\u7247\u5730\u5740\u6210\u529F");
        document.body.removeChild(input);
      };
      const handleClickOpenMash = () => {
        const body = document.querySelector("body");
        if (body) {
          body.style.overflowY = "hidden";
          mask.value = true;
        }
      };
      const handleClickCloseMask = () => {
        const body = document.querySelector("body");
        if (body) {
          body.style.overflowY = "auto";
          mask.value = false;
        }
        clearOptions();
      };
      const scaleTimes = vue.ref(1);
      const handleClickZoomIn = () => {
        scaleTimes.value += 0.25;
      };
      const handleClickZoomOut = () => {
        if (scaleTimes.value >= 1)
          scaleTimes.value -= 0.25;
      };
      const rotateAngle = vue.ref(0);
      const handleClickTurnLeft = () => {
        rotateAngle.value -= 90;
      };
      const handleClickTurnRight = () => {
        rotateAngle.value += 90;
      };
      const translate = vue.shallowReactive({
        x: 0,
        y: 0
      });
      let downPosition = null;
      const handleMouseDown = (e) => {
        downPosition = {
          downX: e.clientX - translate.x,
          downY: e.clientY - translate.y
        };
      };
      const handleMouseMove = (e) => {
        if (downPosition) {
          const { downX, downY } = downPosition;
          translate.x = e.clientX - downX;
          translate.y = e.clientY - downY;
        }
      };
      const handleMouseUp = () => {
        downPosition = null;
      };
      const handleMouseWheel = (e) => {
        let direction = e.deltaY > 0 ? "down" : "up";
        if (direction === "up") {
          handleClickZoomIn();
        } else {
          handleClickZoomOut();
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass([styles.imgWrap, { [styles.errorHidden]: isError.value }])
          }, [
            vue.createElementVNode("img", {
              src: vue.unref(previewImage),
              alt: __props.alt,
              class: vue.normalizeClass(styles.img),
              style: vue.normalizeStyle(vue.unref(imgStyle)),
              onError: handleError
            }, null, 46, _hoisted_1),
            __props.preview ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass(styles.mask),
              onClick: handleClickOpenMash
            }, [
              vue.createElementVNode("span", {
                class: vue.normalizeClass(styles.hoverEnlarge),
                onClick: vue.withModifiers(handleClickCopyLocation, ["stop"])
              }, [
                vue.createVNode(vue.unref(apathia_icon.Icon), {
                  name: ["fa", "copy"],
                  class: vue.normalizeClass(styles.maskIcon)
                }, null, 8, ["class"]),
                vue.createTextVNode("\xA0\u590D\u5236\u5730\u5740")
              ], 10, _hoisted_2),
              vue.createTextVNode(" \xA0\xA0 "),
              vue.createElementVNode("span", {
                class: vue.normalizeClass(styles.hoverEnlarge)
              }, [
                (vue.openBlock(), vue.createElementBlock("svg", {
                  focusable: "false",
                  "data-icon": "eye",
                  width: "1.2em",
                  height: "1.2em",
                  viewBox: "64 64 896 896",
                  class: vue.normalizeClass(styles.maskIcon)
                }, _hoisted_4, 2)),
                vue.createTextVNode(" \u9884\u89C8 ")
              ], 2)
            ], 2)) : vue.createCommentVNode("", true)
          ], 2),
          isError.value ? vue.renderSlot(_ctx.$slots, "error", { key: 0 }, () => [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(styles.error),
              style: vue.normalizeStyle(vue.unref(imgErrorStyle))
            }, _hoisted_6, 6)
          ]) : vue.createCommentVNode("", true),
          (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
            vue.createVNode(vue.Transition, vue.normalizeProps(vue.guardReactiveProps(styles.transitionClass)), {
              default: vue.withCtx(() => [
                mask.value ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  class: vue.normalizeClass(styles.duration),
                  onMousewheelPassive: handleMouseWheel
                }, [
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass(styles.shadeClass),
                    onClick: handleClickCloseMask
                  }, [
                    vue.createElementVNode("ul", {
                      class: vue.normalizeClass(styles.options),
                      onClick: _cache[0] || (_cache[0] = (e) => e.stopPropagation())
                    }, [
                      vue.createElementVNode("li", {
                        class: vue.normalizeClass(styles.optionIcons),
                        onClick: handleClickCloseMask
                      }, [
                        vue.createVNode(vue.unref(apathia_icon.Icon), { name: ["fa", "times"] })
                      ], 2),
                      vue.createElementVNode("li", {
                        class: vue.normalizeClass(styles.optionIcons),
                        onClick: handleClickZoomIn
                      }, [
                        vue.createVNode(vue.unref(apathia_icon.Icon), { name: ["fa", "plus"] })
                      ], 2),
                      vue.createElementVNode("li", {
                        class: vue.normalizeClass(styles.optionIcons),
                        onClick: handleClickZoomOut
                      }, [
                        vue.createVNode(vue.unref(apathia_icon.Icon), { name: ["fa", "minus"] })
                      ], 2),
                      vue.createElementVNode("li", {
                        class: vue.normalizeClass([styles.optionIcons, styles.optionIconsSize]),
                        onClick: handleClickTurnRight
                      }, [
                        vue.createVNode(vue.unref(apathia_icon.Icon), { name: ["fa", "redo-alt"] })
                      ], 2),
                      vue.createElementVNode("li", {
                        class: vue.normalizeClass([styles.optionIcons, styles.optionIconsSize]),
                        onClick: handleClickTurnLeft
                      }, [
                        vue.createVNode(vue.unref(apathia_icon.Icon), { name: ["fa", "undo-alt"] })
                      ], 2)
                    ], 2),
                    vue.createElementVNode("div", {
                      class: vue.normalizeClass(styles.previewImgWrap),
                      style: vue.normalizeStyle(`transform: translate3d(${vue.unref(translate).x}px, ${vue.unref(translate).y}px, 0px) scale3d(${scaleTimes.value}, ${scaleTimes.value}, 1) rotate(${rotateAngle.value}deg)`)
                    }, [
                      vue.createElementVNode("img", {
                        src: __props.src,
                        alt: __props.alt,
                        class: vue.normalizeClass(styles.previewImg),
                        onMousedown: vue.withModifiers(handleMouseDown, ["prevent"]),
                        onMousemove: vue.withModifiers(handleMouseMove, ["prevent"]),
                        onMouseup: vue.withModifiers(handleMouseUp, ["prevent"]),
                        onClick: _cache[1] || (_cache[1] = (e) => e.stopPropagation())
                      }, null, 42, _hoisted_7)
                    ], 6)
                  ], 2)
                ], 34)) : vue.createCommentVNode("", true)
              ]),
              _: 1
            }, 16)
          ]))
        ], 64);
      };
    }
  });
  exports2.Image = _sfc_main;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
