(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@apathia/apathia.twind"), require("@apathia/apathia.icon"), require("@apathia/apathia.alert"), require("@apathia/apathia.shared")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@apathia/apathia.twind", "@apathia/apathia.icon", "@apathia/apathia.alert", "@apathia/apathia.shared"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.image = {}, global.Vue, global.twind, global.icon, global.alert, global.shared));
})(this, function(exports2, vue, apathia_twind, apathia_icon, apathia_alert, apathia_shared) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$7 = {
    name: "Close"
  };
  const _hoisted_1$7 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$7 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  }, null, -1);
  const _hoisted_3$7 = [
    _hoisted_2$7
  ];
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
  }
  var Close = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6]]);
  const _sfc_main$6 = {
    name: "CopyDocument"
  };
  const _hoisted_1$6 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$6 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
  }, null, -1);
  const _hoisted_3$6 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
  }, null, -1);
  const _hoisted_4$1 = [
    _hoisted_2$6,
    _hoisted_3$6
  ];
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$6, _hoisted_4$1);
  }
  var CopyDocument = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5]]);
  const _sfc_main$5 = {
    name: "Minus"
  };
  const _hoisted_1$5 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$5 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
  }, null, -1);
  const _hoisted_3$5 = [
    _hoisted_2$5
  ];
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
  }
  var Minus = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
  const _sfc_main$4 = {
    name: "Plus"
  };
  const _hoisted_1$4 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$4 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  }, null, -1);
  const _hoisted_3$4 = [
    _hoisted_2$4
  ];
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
  }
  var Plus = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
  const _sfc_main$3 = {
    name: "RefreshLeft"
  };
  const _hoisted_1$3 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$3 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
  }, null, -1);
  const _hoisted_3$3 = [
    _hoisted_2$3
  ];
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
  }
  var RefreshLeft = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
  const _sfc_main$2 = {
    name: "RefreshRight"
  };
  const _hoisted_1$2 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
  }, null, -1);
  const _hoisted_3$2 = [
    _hoisted_2$2
  ];
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
  }
  var RefreshRight = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
  const _sfc_main$1 = {
    name: "View"
  };
  const _hoisted_1$1 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$1 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  }, null, -1);
  const _hoisted_3$1 = [
    _hoisted_2$1
  ];
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
  }
  var View = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  const _hoisted_1 = ["src", "alt"];
  const _hoisted_2 = ["onClick"];
  const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("p", null, "\u52A0\u8F7D\u5931\u8D25", -1);
  const _hoisted_4 = [
    _hoisted_3
  ];
  const _hoisted_5 = ["src", "alt", "onMousedown", "onMousemove", "onMouseup"];
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
      text-content-white flex justify-center items-center text-center text-sm
      hover:opacity-100
    `,
        iconText: apathia_twind.style`ml-1`,
        iconGap: apathia_twind.style`ml-4`,
        maskIcon: apathia_twind.style`inline-block fill-current text-xs`,
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
                  class: vue.normalizeClass(styles.maskIcon),
                  size: 10
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(CopyDocument))
                  ]),
                  _: 1
                }, 8, ["class"]),
                vue.createElementVNode("i", {
                  class: vue.normalizeClass(styles.iconText)
                }, "\u590D\u5236\u5730\u5740", 2)
              ], 10, _hoisted_2),
              vue.createElementVNode("span", {
                class: vue.normalizeClass([styles.hoverEnlarge, styles.iconGap])
              }, [
                vue.createVNode(vue.unref(apathia_icon.Icon), {
                  class: vue.normalizeClass(styles.maskIcon),
                  size: 10
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(View))
                  ]),
                  _: 1
                }, 8, ["class"]),
                vue.createElementVNode("i", {
                  class: vue.normalizeClass(styles.iconText)
                }, "\u9884\u89C8", 2)
              ], 2)
            ], 2)) : vue.createCommentVNode("", true)
          ], 2),
          isError.value ? vue.renderSlot(_ctx.$slots, "error", { key: 0 }, () => [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(styles.error),
              style: vue.normalizeStyle(vue.unref(imgErrorStyle))
            }, _hoisted_4, 6)
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
                        vue.createVNode(vue.unref(apathia_icon.Icon), null, {
                          default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(Close))
                          ]),
                          _: 1
                        })
                      ], 2),
                      vue.createElementVNode("li", {
                        class: vue.normalizeClass(styles.optionIcons),
                        onClick: handleClickZoomIn
                      }, [
                        vue.createVNode(vue.unref(apathia_icon.Icon), null, {
                          default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(Plus))
                          ]),
                          _: 1
                        })
                      ], 2),
                      vue.createElementVNode("li", {
                        class: vue.normalizeClass(styles.optionIcons),
                        onClick: handleClickZoomOut
                      }, [
                        vue.createVNode(vue.unref(apathia_icon.Icon), null, {
                          default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(Minus))
                          ]),
                          _: 1
                        })
                      ], 2),
                      vue.createElementVNode("li", {
                        class: vue.normalizeClass([styles.optionIcons, styles.optionIconsSize]),
                        onClick: handleClickTurnRight
                      }, [
                        vue.createVNode(vue.unref(apathia_icon.Icon), null, {
                          default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(RefreshRight))
                          ]),
                          _: 1
                        })
                      ], 2),
                      vue.createElementVNode("li", {
                        class: vue.normalizeClass([styles.optionIcons, styles.optionIconsSize]),
                        onClick: handleClickTurnLeft
                      }, [
                        vue.createVNode(vue.unref(apathia_icon.Icon), null, {
                          default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(RefreshLeft))
                          ]),
                          _: 1
                        })
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
                      }, null, 42, _hoisted_5)
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
