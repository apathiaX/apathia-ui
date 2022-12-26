import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, normalizeStyle, createElementVNode, toDisplayString, ref, reactive, toRef, onMounted, createBlock, createCommentVNode, withCtx, createTextVNode } from "vue";
import { Popper } from "@apathia/apathia.popper";
import { useInjectProp, useToggle, useEventListener } from "@apathia/apathia.hooks";
import { style, css } from "@apathia/apathia.twind";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Stop",
  props: {
    step: null,
    min: null,
    max: null,
    vertical: { type: Boolean },
    marks: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const getStopStyles = () => ({
      stopWrap: style`absolute`,
      stopWrapX: style`w-full h-1 top-2`,
      stopWrapY: style`h-full w-1`,
      stop: style`w-1 h-1 absolute inline-block bg-fill-white rounded-full`,
      stopX: style``,
      stopY: style``,
      stopText: style`inline-block whitespace-nowrap`,
      stopTextX: style`-translate-x-1/2 pt-3`,
      stopTextY: style`-translate-y-1/2 pl-3`
    });
    const stepCount = computed(() => (props.max - props.min) / props.step);
    const getValueByStep = (s) => props.min + props.step * s;
    const styles = getStopStyles();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(styles).stopWrap, __props.vertical ? unref(styles).stopWrapY : unref(styles).stopWrapX])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(stepCount) + 1, (count, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: normalizeClass([unref(styles).stop, __props.vertical ? unref(styles).stopY : unref(styles).stopX]),
            style: normalizeStyle({
              [__props.vertical ? "bottom" : "left"]: `${1 / unref(stepCount) * index * 100}%`
            })
          }, [
            createElementVNode("span", {
              class: normalizeClass([
                unref(styles).stopText,
                __props.vertical ? unref(styles).stopTextY : unref(styles).stopTextX
              ]),
              style: normalizeStyle((__props.marks[getValueByStep(count - 1)] || {}).style)
            }, toDisplayString((__props.marks[getValueByStep(count - 1)] || {}).label), 7)
          ], 6);
        }), 128))
      ], 2);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Slider",
  props: {
    modelValue: null,
    disabled: { type: Boolean },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    showSteps: { type: Boolean },
    showTooltip: { type: Boolean, default: true },
    formatTooltip: { type: Function, default: (cur) => cur },
    range: { type: Boolean },
    valueRange: null,
    marks: { default: () => ({}) },
    vertical: { type: Boolean },
    height: null
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const getSliderStyles = () => ({
      sliderWrap: style`text-2xl`,
      slider: style`group relative h-2 box-border inline-block`,
      sliderX: style`py-2 w-full`,
      sliderY: style`px-2`,
      track: style`absolute bg-fill-gray rounded transition group-hover:bg-fill-secondary`,
      trackX: style`h-1 w-full`,
      trackY: style`w-1 h-full`,
      trackHover: style`bg-fill-secondary`,
      steps: style`relative rounded bg-brand-primary group-hover:bg-brand-active`,
      stepsX: style`h-1`,
      stepsY: style`w-1 absolute bottom-0`,
      stepsHover: style`bg-brand-active`,
      button: style`group-hover:border-brand-active border(2 solid brand-primary) h-4 w-4 bg-fill-white rounded-lg cursor-pointer ${css`
      z-index: 1;
    `}`,
      popperWrap: style`absolute`,
      buttonHover: style`border-brand-active`,
      buttonX: style`-translate-x-1/2${css`
      top: 2px;
    `}`,
      buttonY: style`translate-y-1/2${css`
      left: 2px;
    `}`
    });
    const isTouchEvent = (e) => e.type.startsWith("touch");
    const styles = getSliderStyles();
    const trackRef = ref(null);
    const moveRange = reactive(
      {
        clientX: [0, 0],
        clientY: [0, 0]
      }
    );
    const disableDrag = useInjectProp("Form", false, toRef(props, "disabled"));
    const buttonRef = ref(null);
    const buttonSize = ref(0);
    const popperRef = ref(null);
    const popperVisble = ref(false);
    onMounted(() => {
      if (trackRef.value) {
        const { x, y, height, width } = trackRef.value.getBoundingClientRect();
        moveRange.clientX = props.vertical ? [0, 0] : [x, x + width];
        moveRange.clientY = props.vertical ? [y, y + height] : [0, 0];
      }
      if (buttonRef.value) {
        buttonSize.value = buttonRef.value.offsetWidth;
      }
    });
    const [draging, , setDraging] = useToggle(false);
    const btnEndStyle = computed(() => {
      const value = `${((props.modelValue - props.min) / props.max - props.min) * 100}%`;
      return props.vertical ? { bottom: value } : { left: value };
    });
    const sliderStyle = computed(
      () => props.vertical ? { height: `${props.height}px` } : {}
    );
    const stepsStyle = computed(() => {
      const value = `${((props.modelValue - props.min) / props.max - props.min) * 100}%`;
      return props.vertical ? { height: value } : { width: value };
    });
    const stopFns = [];
    const startDrag = (e) => {
      if (disableDrag.value) {
        return;
      }
      e.preventDefault();
      setDraging(true);
      stopFns.push(useEventListener(window, "mousemove", handleDragging));
      stopFns.push(useEventListener(window, "touchmove", handleDragging));
      stopFns.push(useEventListener(window, "mouseup", stopDrag));
      stopFns.push(useEventListener(window, "touchend", stopDrag));
      stopFns.push(useEventListener(window, "contextmenu", stopDrag));
    };
    const stopDrag = () => {
      setDraging(false);
      stopFns.forEach((fn) => fn && fn());
      popperVisble.value = false;
    };
    const resolveValueInRange = (targetPos, posRange) => {
      const valueRange = [props.min, props.max];
      const step = props.step;
      const totalPixels = posRange[1] - posRange[0];
      const stepPixels = totalPixels / ((valueRange[1] - valueRange[0]) / step);
      const deltaPixel = targetPos - posRange[0];
      let result = props.vertical ? props.max : props.min;
      const stepFn = (cur) => props.vertical ? cur - step : cur + step;
      let beginPixel = 0;
      while (beginPixel <= totalPixels) {
        if (beginPixel <= deltaPixel && deltaPixel <= beginPixel + stepPixels) {
          break;
        }
        beginPixel += stepPixels;
        result = stepFn(result);
      }
      return deltaPixel - beginPixel > beginPixel + stepPixels - deltaPixel ? stepFn(result) : result;
    };
    const getFinalValue = (position) => {
      const trackEl = trackRef.value;
      if (!trackEl) {
        return 0;
      }
      const rect = trackEl.getBoundingClientRect();
      const positionRange = props.vertical ? [rect.y, rect.y + rect.height] : [rect.x, rect.x + rect.width];
      if (!props.vertical && position.clientX >= positionRange[1] || props.vertical && position.clientY <= positionRange[0]) {
        return props.max;
      }
      if (!props.vertical && position.clientX <= positionRange[0] || props.vertical && position.clientY >= positionRange[1]) {
        return props.min;
      }
      return resolveValueInRange(
        props.vertical ? position.clientY : position.clientX,
        positionRange
      );
    };
    const handleDragging = (e) => {
      if (draging.value) {
        handleTrackClick(e);
        if (popperRef.value && popperRef.value.update && typeof popperRef.value.update === "function") {
          popperRef.value && popperRef.value.update();
        }
        popperVisble.value = true;
      }
    };
    const handleTrackClick = (e) => {
      if (!disableDrag.value) {
        const value = getFinalValue(getClientPosition(e));
        let valueInRange = true;
        if (props.valueRange !== void 0) {
          const [rangeMin = props.min, rangeMax = props.max] = props.valueRange;
          valueInRange = value >= rangeMin && value <= rangeMax;
        }
        if (valueInRange) {
          emit("update:modelValue", value);
        }
      }
    };
    const getClientPosition = (e) => {
      let clientX;
      let clientY;
      if (isTouchEvent(e)) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      return {
        clientX,
        clientY
      };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(styles).sliderWrap)
      }, [
        createElementVNode("div", {
          class: normalizeClass({
            [unref(styles).slider]: true,
            [unref(styles).sliderX]: !__props.vertical,
            [unref(styles).sliderY]: __props.vertical
          }),
          style: normalizeStyle(unref(sliderStyle)),
          onClick: handleTrackClick
        }, [
          createElementVNode("div", {
            ref_key: "trackRef",
            ref: trackRef,
            class: normalizeClass({
              [unref(styles).track]: true,
              [unref(styles).trackX]: !__props.vertical,
              [unref(styles).trackY]: __props.vertical,
              [unref(styles).trackHover]: unref(draging)
            })
          }, null, 2),
          createElementVNode("div", {
            class: normalizeClass({
              [unref(styles).steps]: true,
              [unref(styles).stepsX]: !__props.vertical,
              [unref(styles).stepsY]: __props.vertical,
              [unref(styles).stepsHover]: unref(draging)
            }),
            style: normalizeStyle(unref(stepsStyle))
          }, null, 6),
          __props.showSteps ? (openBlock(), createBlock(_sfc_main$1, {
            key: 0,
            step: __props.step,
            min: __props.min,
            max: __props.max,
            vertical: __props.vertical,
            marks: __props.marks
          }, null, 8, ["step", "min", "max", "vertical", "marks"])) : createCommentVNode("", true),
          __props.showTooltip ? (openBlock(), createBlock(unref(Popper), {
            key: 1,
            ref_key: "popperRef",
            ref: popperRef,
            modelValue: popperVisble.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => popperVisble.value = $event),
            dark: "",
            placement: __props.vertical ? "right" : "bottom",
            trigger: "hover",
            class: normalizeClass([unref(styles).popperWrap, __props.vertical ? unref(styles).buttonY : unref(styles).buttonX]),
            style: normalizeStyle(unref(btnEndStyle))
          }, {
            content: withCtx(() => [
              createTextVNode(toDisplayString(__props.formatTooltip(__props.modelValue)), 1)
            ]),
            default: withCtx(() => [
              createElementVNode("div", {
                ref_key: "buttonRef",
                ref: buttonRef,
                class: normalizeClass([unref(styles).button, unref(draging) ? unref(styles).buttonHover : ""]),
                onMousedown: startDrag
              }, null, 34)
            ]),
            _: 1
          }, 8, ["modelValue", "placement", "class", "style"])) : createCommentVNode("", true)
        ], 6)
      ], 2);
    };
  }
});
export { _sfc_main as Slider };
