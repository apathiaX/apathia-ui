import { defineComponent, provide, computed, openBlock, createElementBlock, normalizeClass, renderSlot, toRef, normalizeStyle, createTextVNode, toDisplayString, createCommentVNode, createElementVNode } from "vue";
import { style, apply, css, tw } from "@apathia/apathia.twind";
import { useInjectProp } from "@apathia/apathia.hooks";
const FORM_DISABLE_KEY = "FormDisabled";
const FORM_LABEL_WIDTH_KEY = "FormLabelWidth";
const FORM_LABEL_ALIGN_KEY = "FormItemAlign";
const FORM_LABEL_POSITION_KEY = "FormLabelPosition";
const FORM_ITEM_INLINE_KEY = "FormItemInline";
const POSITION = ["left", "right", "top"];
const ALIGN = ["top", "center", "bottom"];
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
  name: "Form",
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: [Number, String],
      default: 80
    },
    labelPosition: {
      type: String,
      validate: (value) => POSITION.includes(value),
      default: "left"
    },
    labelAlign: {
      type: String,
      validator: (val) => ALIGN.includes(val),
      default: "top"
    }
  },
  setup(props) {
    provide(
      FORM_ITEM_INLINE_KEY,
      computed(() => props.inline)
    );
    provide(
      FORM_DISABLE_KEY,
      computed(() => !!props.disabled)
    );
    provide(
      FORM_LABEL_WIDTH_KEY,
      computed(() => props.labelWidth)
    );
    provide(
      FORM_LABEL_POSITION_KEY,
      computed(() => props.labelPosition)
    );
    provide(
      FORM_LABEL_ALIGN_KEY,
      computed(() => props.labelAlign)
    );
    const styles = getFromStyle();
    return {
      styles
    };
  }
});
const getFromStyle = () => ({
  form: style`mb-2`
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.styles.form)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Form = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = defineComponent({
  name: "FormItem",
  props: {
    prop: {
      type: String
    },
    labelAlign: {
      type: String,
      validator: (val) => ALIGN.includes(val)
    },
    labelPosition: {
      type: String,
      validator: (val) => POSITION.includes(val)
    },
    label: {
      type: String
    },
    required: {
      type: Boolean
    },
    offset: {
      type: Boolean
    },
    labelWidth: {
      type: [Number, String]
    },
    inline: {
      type: Boolean,
      default: void 0
    },
    contentClass: {
      type: String
    }
  },
  setup(props) {
    const styles = getFormItemStyle();
    const realLabelPosition = useInjectProp(
      FORM_LABEL_POSITION_KEY,
      "left",
      toRef(props, "labelPosition")
    );
    const realLabelAlign = useInjectProp(
      FORM_LABEL_ALIGN_KEY,
      "top",
      toRef(props, "labelAlign")
    );
    const realLabelWidth = useInjectProp(
      FORM_LABEL_WIDTH_KEY,
      80,
      toRef(props, "labelWidth")
    );
    const realFormItemInline = useInjectProp(
      FORM_ITEM_INLINE_KEY,
      false,
      toRef(props, "inline")
    );
    const containerClasses = computed(() => ({
      [styles.container]: true,
      [styles.inlineFlex]: realLabelPosition.value !== "top" && !!realFormItemInline.value,
      [styles.flex]: realLabelPosition.value !== "top" && !realFormItemInline.value
    }));
    const parseWidth = (width) => {
      if (typeof width === "undefined" || width === "") {
        return "auto";
      }
      if (typeof width === "number") {
        return `${width}px`;
      }
      return /^\d+$/.test(width) ? `${width}px` : width;
    };
    const labelStyle = computed(() => ({
      width: parseWidth(realLabelWidth.value),
      display: realLabelPosition.value === "top" ? "block" : "",
      "text-align": realLabelPosition.value === "right" ? "right" : "left",
      "margin-bottom": realLabelPosition.value === "top" ? "0.5rem" : ""
    }));
    const lableClasses = computed(() => ({
      [styles.labelBlock]: realLabelPosition.value === "top",
      [styles.labelInline]: realLabelPosition.value !== "top",
      [styles.labelAlignTop]: realLabelAlign.value === "top",
      [styles.labelAlignCenter]: realLabelAlign.value === "center",
      [styles.labelAlignBottom]: realLabelAlign.value === "bottom",
      [styles.labelRequired]: props.required
    }));
    return {
      styles,
      containerClasses,
      lableClasses,
      labelStyle,
      realLabelAlign
    };
  }
});
const getFormItemStyle = () => {
  const label = apply`text-sm text-content-primary`;
  const mark = css`
      &:before {
        content: '*';
        ${apply`text-error-primary align-top`}
      }
    `;
  return {
    container: style`mb-2 ml-2`,
    flex: style`flex`,
    inlineFlex: style`inline-flex mr-2 last:mr-0`,
    labelBlock: style`w-full ${label}`,
    labelInline: style`mr-2 flex-shrink-0 ${label}`,
    labelAlignTop: style`self-start`,
    labelAlignCenter: style`self-center`,
    labelAlignBottom: style`self-end`,
    labelRequired: tw`${mark}`,
    content: style`flex-auto`
  };
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.containerClasses)
  }, [
    _ctx.label || _ctx.offset || _ctx.$slots.label ? (openBlock(), createElementBlock("label", {
      key: 0,
      class: normalizeClass(_ctx.lableClasses),
      style: normalizeStyle(_ctx.labelStyle)
    }, [
      renderSlot(_ctx.$slots, "label", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ])
    ], 6)) : createCommentVNode("", true),
    createElementVNode("div", {
      class: normalizeClass([_ctx.styles.content, _ctx.contentClass])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 2);
}
var FormItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Form, FormItem };
