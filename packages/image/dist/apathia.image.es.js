import { defineComponent, ref, computed, shallowReactive, openBlock, createElementBlock, Fragment, createElementVNode, normalizeClass, unref, normalizeStyle, withModifiers, createVNode, createCommentVNode, renderSlot, createBlock, Teleport, Transition, normalizeProps, guardReactiveProps, withCtx, createTextVNode } from "vue";
import { keyframes, css, style, tw } from "@apathia/apathia.twind";
import { Icon } from "@apathia/apathia.icon";
import { toast } from "@apathia/apathia.alert";
import { resizeImage } from "@apathia/apathia.shared";
const _hoisted_1 = ["src", "alt"];
const _hoisted_2 = ["onClick"];
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\xA0\u590D\u5236\u5730\u5740");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \xA0\xA0 ");
const _hoisted_5 = /* @__PURE__ */ createElementVNode("path", { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" }, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u9884\u89C8 ");
const _hoisted_8 = /* @__PURE__ */ createElementVNode("p", null, "\u52A0\u8F7D\u5931\u8D25", -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = ["src", "alt", "onMousedown", "onMousemove", "onMouseup"];
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const flash = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
    const flashCss = css({
      animation: "0.5s ease",
      animationName: flash
    });
    const styles = {
      imgWrap: style`relative inline-block`,
      img: style`w-full h-auto align-middle bg-fill-gray`,
      mask: style`
      absolute inset-0 cursor-pointer
      bg-fill-primary bg-opacity-50 opacity-0 transition-all
      text-content-white flex justify-center items-center text-center
      hover:opacity-100
    `,
      maskIcon: style`inline-block fill-current`,
      transitionClass: {
        "leave-to-class": tw`opacity-0`
      },
      duration: tw`duration-500`,
      shadeClass: style`z-50 fixed inset-0 h-full bg-fill-gray bg-opacity-50 overflow-auto ${flashCss}`,
      options: style`
      m-0 p-0 absolute w-full
      flex flex-row-reverse items-center
      text-content-white bg-fill-white bg-opacity-10
      pointer-events-auto z-10
    `,
      optionIcons: style`p-3 ml-4 text-xl cursor-pointer`,
      optionIconsSize: style`text-lg`,
      previewImgWrap: style`fixed inset-0 flex justify-center items-center`,
      previewImg: style`max-w-full max-h-full cursor-grab select-none transition-all bg-fill-gray`,
      error: style`flex justify-center items-center bg-fill-light text-fill-gray text-xs`,
      errorHidden: style`hidden`,
      hoverEnlarge: style`hover:text-lg transition-all`
    };
    const mask = ref(false);
    const previewImage = computed(() => {
      if (!props.src.includes("hdslb.com/bfs"))
        return props.src;
      const suffix = props.width && props.height ? `${props.width}x${props.height}` : props.width ? `${props.width}x0` : props.height ? `0x${props.height}` : "160x100";
      const path = props.src.replace(/^https?:/, "");
      return resizeImage(path, suffix);
    });
    const toPx = (val) => {
      if (!val)
        return;
      const [num] = (val + "").split("px");
      return num + "px";
    };
    const imgStyle = computed(() => {
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
    const imgErrorStyle = computed(() => {
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
    const isError = ref(false);
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
        toast.success("\u590D\u5236\u56FE\u7247\u5730\u5740\u6210\u529F");
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
    const scaleTimes = ref(1);
    const handleClickZoomIn = () => {
      scaleTimes.value += 0.25;
    };
    const handleClickZoomOut = () => {
      if (scaleTimes.value >= 1)
        scaleTimes.value -= 0.25;
    };
    const rotateAngle = ref(0);
    const handleClickTurnLeft = () => {
      rotateAngle.value -= 90;
    };
    const handleClickTurnRight = () => {
      rotateAngle.value += 90;
    };
    const translate = shallowReactive({
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
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          class: normalizeClass([styles.imgWrap, { [styles.errorHidden]: isError.value }])
        }, [
          createElementVNode("img", {
            src: unref(previewImage),
            alt: __props.alt,
            class: normalizeClass(styles.img),
            style: normalizeStyle(unref(imgStyle)),
            onError: handleError
          }, null, 46, _hoisted_1),
          __props.preview ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(styles.mask),
            onClick: handleClickOpenMash
          }, [
            createElementVNode("span", {
              class: normalizeClass(styles.hoverEnlarge),
              onClick: withModifiers(handleClickCopyLocation, ["stop"])
            }, [
              createVNode(unref(Icon), {
                name: ["fa", "copy"],
                class: normalizeClass(styles.maskIcon)
              }, null, 8, ["class"]),
              _hoisted_3
            ], 10, _hoisted_2),
            _hoisted_4,
            createElementVNode("span", {
              class: normalizeClass(styles.hoverEnlarge)
            }, [
              (openBlock(), createElementBlock("svg", {
                focusable: "false",
                "data-icon": "eye",
                width: "1.2em",
                height: "1.2em",
                viewBox: "64 64 896 896",
                class: normalizeClass(styles.maskIcon)
              }, _hoisted_6, 2)),
              _hoisted_7
            ], 2)
          ], 2)) : createCommentVNode("", true)
        ], 2),
        isError.value ? renderSlot(_ctx.$slots, "error", { key: 0 }, () => [
          createElementVNode("div", {
            class: normalizeClass(styles.error),
            style: normalizeStyle(unref(imgErrorStyle))
          }, _hoisted_9, 6)
        ]) : createCommentVNode("", true),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, normalizeProps(guardReactiveProps(styles.transitionClass)), {
            default: withCtx(() => [
              mask.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(styles.duration),
                onMousewheelPassive: handleMouseWheel
              }, [
                createElementVNode("div", {
                  class: normalizeClass(styles.shadeClass),
                  onClick: handleClickCloseMask
                }, [
                  createElementVNode("ul", {
                    class: normalizeClass(styles.options),
                    onClick: _cache[0] || (_cache[0] = (e) => e.stopPropagation())
                  }, [
                    createElementVNode("li", {
                      class: normalizeClass(styles.optionIcons),
                      onClick: handleClickCloseMask
                    }, [
                      createVNode(unref(Icon), { name: ["fa", "times"] })
                    ], 2),
                    createElementVNode("li", {
                      class: normalizeClass(styles.optionIcons),
                      onClick: handleClickZoomIn
                    }, [
                      createVNode(unref(Icon), { name: ["fa", "plus"] })
                    ], 2),
                    createElementVNode("li", {
                      class: normalizeClass(styles.optionIcons),
                      onClick: handleClickZoomOut
                    }, [
                      createVNode(unref(Icon), { name: ["fa", "minus"] })
                    ], 2),
                    createElementVNode("li", {
                      class: normalizeClass([styles.optionIcons, styles.optionIconsSize]),
                      onClick: handleClickTurnRight
                    }, [
                      createVNode(unref(Icon), { name: ["fa", "redo-alt"] })
                    ], 2),
                    createElementVNode("li", {
                      class: normalizeClass([styles.optionIcons, styles.optionIconsSize]),
                      onClick: handleClickTurnLeft
                    }, [
                      createVNode(unref(Icon), { name: ["fa", "undo-alt"] })
                    ], 2)
                  ], 2),
                  createElementVNode("div", {
                    class: normalizeClass(styles.previewImgWrap),
                    style: normalizeStyle(`transform: translate3d(${unref(translate).x}px, ${unref(translate).y}px, 0px) scale3d(${scaleTimes.value}, ${scaleTimes.value}, 1) rotate(${rotateAngle.value}deg)`)
                  }, [
                    createElementVNode("img", {
                      src: __props.src,
                      alt: __props.alt,
                      class: normalizeClass(styles.previewImg),
                      onMousedown: withModifiers(handleMouseDown, ["prevent"]),
                      onMousemove: withModifiers(handleMouseMove, ["prevent"]),
                      onMouseup: withModifiers(handleMouseUp, ["prevent"]),
                      onClick: _cache[1] || (_cache[1] = (e) => e.stopPropagation())
                    }, null, 42, _hoisted_10)
                  ], 6)
                ], 2)
              ], 34)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 16)
        ]))
      ], 64);
    };
  }
});
export { _sfc_main as Image };
