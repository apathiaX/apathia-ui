import { defineComponent, h } from "vue";
const CustomRender = defineComponent({
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
    return () => typeof props.render !== void 0 && typeof props.render === "function" ? props.render(attrs) : h(props.as, attrs, {
      default: () => {
        var _a;
        return props.render || ((_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      }
    });
  }
});
export {
  CustomRender
};
