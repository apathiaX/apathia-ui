import { defineComponent, useAttrs, toRef, computed, openBlock, createElementBlock, Fragment, withDirectives, createElementVNode, mergeProps, isRef, unref, vModelText, createTextVNode } from "vue";
import { useInjectProp } from "@apathia/apathia.hooks";
import { style } from "@apathia/apathia.twind";
const _hoisted_1 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Textarea",
  props: {
    modelValue: null,
    disabled: { type: Boolean, default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const getStyles = () => ({
      commonTextarea: style`block border border-line-accent rounded pt-2 px-2 text-sm outline-none focus:(bg-fill-white border-brand-primary)`,
      fullWidth: style`w-full`
    });
    const attr = useAttrs();
    const disableInput = useInjectProp(
      "FormDisabled",
      false,
      toRef(props, "disabled")
    );
    const styles = getStyles();
    const classes = computed(() => ({
      [styles.commonTextarea]: true,
      [styles.fullWidth]: attr.cols === void 0
    }));
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const attrs = computed(() => ({
      ...attr,
      rows: attr.rows === void 0 ? "3" : attr.rows
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives(createElementVNode("textarea", mergeProps({
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(inputValue) ? inputValue.value = $event : null),
          disabled: !!unref(disableInput),
          class: unref(classes)
        }, unref(attrs)), null, 16, _hoisted_1), [
          [vModelText, unref(inputValue)]
        ]),
        createTextVNode(" 11111 ")
      ], 64);
    };
  }
});
export { _sfc_main as Textarea };
