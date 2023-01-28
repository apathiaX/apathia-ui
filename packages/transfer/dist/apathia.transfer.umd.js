(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@apathia/apathia.icon"), require("@apathia/apathia.button"), require("lodash-es"), require("@apathia/apathia.scroll-container"), require("@apathia/apathia.input"), require("@apathia/apathia.checkbox"), require("@apathia/apathia.twind")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@apathia/apathia.icon", "@apathia/apathia.button", "lodash-es", "@apathia/apathia.scroll-container", "@apathia/apathia.input", "@apathia/apathia.checkbox", "@apathia/apathia.twind"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.transfer = {}, global.Vue, global.icon, global.button, global["lodash-es"], global["scroll-container"], global.input, global.checkbox, global.twind));
})(this, function(exports2, vue, apathia_icon, apathia_button, lodashEs, apathia_scrollContainer, apathia_input, apathia_checkbox, apathia_twind) {
  "use strict";
  var useTransfer = (userProps, emit) => {
    const selectedSource = vue.ref([]);
    const selectedTarget = vue.ref([]);
    const processedData = vue.computed(() => userProps.value.data.map((cur) => ({
      value: cur[userProps.value.propKeys.value],
      label: cur[userProps.value.propKeys.label],
      disabled: cur[userProps.value.propKeys.disabled]
    })));
    const valueMap = vue.computed(() => processedData.value.reduce((acc, cur) => {
      acc[`${cur.value}`] = cur;
      return acc;
    }, {}));
    const source = vue.computed(() => processedData.value.filter((cur) => !userProps.value.modelValue.includes(cur.value)));
    const target = vue.computed(() => {
      const res = userProps.value.modelValue.map((v) => valueMap.value[v]);
      const valid = res.filter((cur) => typeof cur !== "undefined");
      if (res.length !== valid.length) {
        console.warn("[Transfer] invalid value");
      }
      return valid;
    });
    const resolve = (oldValue, addValue) => {
      if (userProps.value.targetOrder === "unshift")
        return addValue.concat(oldValue);
      if (userProps.value.targetOrder === "push")
        return oldValue.concat(addValue);
      const all = oldValue.concat(addValue);
      return processedData.value.filter(({ value }) => all.includes(value)).map(({ value }) => value);
    };
    const addAll = () => {
      const added = source.value.filter((cur) => !cur.disabled).map((cur) => cur.value);
      emit("update:modelValue", resolve(userProps.value.modelValue, added));
      emit("select", added);
      selectedSource.value = [];
    };
    const removeAll = () => {
      emit("update:modelValue", []);
      emit("remove", userProps.value.modelValue);
      selectedSource.value = [];
    };
    const addSelected = () => {
      emit("update:modelValue", resolve(userProps.value.modelValue, selectedSource.value));
      emit("select", selectedSource.value);
      selectedSource.value = [];
    };
    const removeSelected = () => {
      emit("update:modelValue", userProps.value.modelValue.filter((cur) => !selectedTarget.value.includes(cur)));
      emit("remove", selectedTarget.value);
      selectedTarget.value = [];
    };
    return {
      selectedSource,
      selectedTarget,
      processedData,
      valueMap,
      source,
      target,
      resolve,
      addAll,
      removeAll,
      addSelected,
      removeSelected
    };
  };
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "Panel",
    props: {
      modelValue: null,
      data: null,
      filterable: { type: Boolean },
      filterPlaceholder: { default: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9" },
      defaultChecked: { default: () => [] },
      filterMethod: { type: Function, default: (searchWords, option) => option.label.includes(searchWords) },
      title: null
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const getPanelStyles = () => ({
        panel: apathia_twind.tw`${apathia_twind.apply`border-line-accent border rounded`}`,
        titleBar: apathia_twind.tw`${apathia_twind.apply`flex justify-between items-center bg-fill-light py-4 px-2 text-xs`}`,
        title: apathia_twind.tw`${apathia_twind.apply`font-medium`}`,
        counter: apathia_twind.tw`${apathia_twind.apply`w-14 text-right`}`,
        filter: apathia_twind.tw`${apathia_twind.apply`m-2`}`,
        list: apathia_twind.tw`${apathia_twind.apply`h-80`}`,
        item: apathia_twind.tw`${apathia_twind.apply`text-base p-2 hover:(bg-fill-light) transition-all duration-300 ease-in text-left`}`,
        checkbox: apathia_twind.tw`${apathia_twind.apply`mr-2`}`,
        disabledCheckbox: apathia_twind.tw`${apathia_twind.apply`cursor-not-allowed`}`
      });
      const checkAll = vue.ref(false);
      const indeterminate = vue.ref(false);
      const searchWords = vue.ref("");
      const checked = vue.ref({});
      const filterList = vue.computed(() => {
        if (!props.filterable)
          return props.data;
        return props.data.filter(
          (cur) => searchWords.value ? props.filterMethod(searchWords.value, cur) : true
        );
      });
      const checkedLength = vue.computed(
        () => Object.entries(checked.value).filter(([, value]) => value).length
      );
      const checkableLength = vue.computed(
        () => filterList.value.filter((cur) => !cur.disabled).length
      );
      const setChecked = (c) => {
        checked.value = props.data.reduce((acc, cur) => {
          if (c.includes(cur.value)) {
            acc[cur.value] = true;
          }
          return acc;
        }, {});
        emit(
          "update:modelValue",
          Object.entries(checked.value).filter(([, value]) => value).map(([key]) => key)
        );
      };
      const onCheckAllChange = (value) => {
        emit(
          "update:modelValue",
          value ? filterList.value.filter((cur) => !cur.disabled).map((cur) => cur.value) : []
        );
      };
      const onSearchInput = lodashEs.debounce(function handleInput(value) {
        searchWords.value = value;
        const validKeys = filterList.value.map((cur) => cur.value);
        emit(
          "update:modelValue",
          Object.entries(checked.value).filter(([key, val]) => val && validKeys.includes(key)).map(([key]) => key)
        );
      }, 500);
      const onItemCheckChange = (isChecked, itemValue) => {
        const newChecked = {
          ...checked.value,
          [itemValue]: isChecked
        };
        emit(
          "update:modelValue",
          Object.entries(newChecked).filter(([, value]) => value).map(([key]) => key)
        );
      };
      vue.watch(
        () => props.modelValue,
        (value) => {
          checked.value = filterList.value.reduce((acc, cur) => {
            acc[cur.value] = value.includes(cur.value);
            return acc;
          }, {});
          if (checkedLength.value !== 0) {
            checkAll.value = checkedLength.value === checkableLength.value;
            indeterminate.value = !checkAll.value;
          } else {
            checkAll.value = false;
            indeterminate.value = false;
          }
        },
        { immediate: true }
      );
      vue.watch(
        () => props.defaultChecked,
        (value) => {
          if (value.length) {
            setChecked(value);
          }
        },
        { immediate: true }
      );
      const styles = getPanelStyles();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(vue.unref(styles).panel)
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(styles).titleBar)
          }, [
            vue.createVNode(vue.unref(apathia_checkbox.Checkbox), {
              modelValue: checkAll.value,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => checkAll.value = $event),
                onCheckAllChange
              ],
              indeterminate: indeterminate.value
            }, null, 8, ["modelValue", "indeterminate"]),
            vue.createElementVNode("span", {
              class: vue.normalizeClass(vue.unref(styles).title)
            }, vue.toDisplayString(__props.title), 3),
            vue.createElementVNode("span", {
              class: vue.normalizeClass(vue.unref(styles).counter)
            }, vue.toDisplayString(vue.unref(checkedLength)) + " / " + vue.toDisplayString(__props.data.length), 3)
          ], 2),
          __props.filterable ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(vue.unref(styles).filter)
          }, [
            vue.createVNode(vue.unref(apathia_input.Input), {
              "model-value": searchWords.value,
              placeholder: __props.filterPlaceholder,
              suffix: "v-icon-search",
              "onUpdate:modelValue": vue.unref(onSearchInput)
            }, null, 8, ["model-value", "placeholder", "onUpdate:modelValue"])
          ], 2)) : vue.createCommentVNode("", true),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(styles).list)
          }, [
            vue.createVNode(vue.unref(apathia_scrollContainer.ScrollContainer), {
              size: 5,
              "hide-horizontal": ""
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", null, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(filterList), (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("div", {
                      key: index,
                      class: vue.normalizeClass(vue.unref(styles).item)
                    }, [
                      vue.createVNode(vue.unref(apathia_checkbox.Checkbox), {
                        "model-value": !!checked.value[item.value],
                        class: vue.normalizeClass({
                          [vue.unref(styles).checkbox]: true,
                          [vue.unref(styles).disabledCheckbox]: item.disabled
                        }),
                        disabled: item.disabled,
                        "onUpdate:modelValue": ($event) => onItemCheckChange($event, item.value)
                      }, {
                        default: vue.withCtx(() => [
                          vue.renderSlot(_ctx.$slots, "item", {
                            option: item,
                            index
                          }, () => [
                            vue.createElementVNode("span", null, vue.toDisplayString(item.label), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["model-value", "class", "disabled", "onUpdate:modelValue"])
                    ], 2);
                  }), 128))
                ])
              ]),
              _: 3
            })
          ], 2)
        ], 2);
      };
    }
  });
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    name: "ArrowLeft"
  };
  const _hoisted_1$2 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
  }, null, -1);
  const _hoisted_3$2 = [
    _hoisted_2$2
  ];
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
  }
  var ArrowLeft = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
  const _sfc_main$2 = {
    name: "ArrowRight"
  };
  const _hoisted_1$1 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$1 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  }, null, -1);
  const _hoisted_3$1 = [
    _hoisted_2$1
  ];
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
  }
  var ArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
  const _sfc_main$1 = {
    name: "DArrowLeft"
  };
  const _hoisted_1 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
  }, null, -1);
  const _hoisted_3 = [
    _hoisted_2
  ];
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, _hoisted_3);
  }
  var DArrowLeft = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Transfer",
    props: {
      modelValue: null,
      data: null,
      filterable: { type: Boolean },
      filterPlaceholder: { default: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9" },
      filterMethod: { type: Function, default: (word, option) => option.label.indexOf(word) > -1 },
      targetOrder: { default: "original" },
      titles: { default: () => ["\u5217\u88681", "\u5217\u88682"] },
      propKeys: { default: () => ({
        value: "value",
        label: "label",
        disabled: "disabled"
      }) },
      leftDefaultChecked: { default: () => [] },
      rightDefaultChecked: { default: () => [] }
    },
    emits: ["update:modelValue", "select", "remove"],
    setup(__props, { emit }) {
      const props = __props;
      const getTranferStyles = () => ({
        transfer: apathia_twind.tw`${apathia_twind.apply`flex`}`,
        panel: apathia_twind.tw`${apathia_twind.apply`w-48`}`,
        buttonWrapper: apathia_twind.tw`${apathia_twind.apply`self-center text-center mx-4`}`,
        button: apathia_twind.tw`${apathia_twind.apply`w-12 my-0.5`}`
      });
      const userProps = vue.computed(() => ({
        modelValue: props.modelValue,
        data: props.data,
        filterable: props.filterable,
        filterPlaceholder: props.filterPlaceholder,
        filterMethod: props.filterMethod,
        targetOrder: props.targetOrder,
        titles: props.titles,
        propKeys: props.propKeys,
        leftDefaultChecked: props.leftDefaultChecked,
        rightDefaultChecked: props.rightDefaultChecked
      }));
      const {
        selectedSource,
        selectedTarget,
        source,
        target,
        addAll,
        removeAll,
        addSelected,
        removeSelected
      } = useTransfer(userProps, emit);
      const styles = getTranferStyles();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(vue.unref(styles).transfer)
        }, [
          vue.createVNode(_sfc_main$4, {
            modelValue: vue.unref(selectedSource),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(selectedSource) ? selectedSource.value = $event : null),
            class: vue.normalizeClass(vue.unref(styles).panel),
            data: vue.unref(source),
            filterable: __props.filterable,
            "filter-placeholder": __props.filterPlaceholder,
            "filter-method": __props.filterMethod,
            title: __props.titles[0],
            "default-checked": __props.leftDefaultChecked
          }, {
            item: vue.withCtx(({ option, index }) => [
              vue.renderSlot(_ctx.$slots, "source-item", {
                option,
                index
              })
            ]),
            _: 3
          }, 8, ["modelValue", "class", "data", "filterable", "filter-placeholder", "filter-method", "title", "default-checked"]),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(styles).buttonWrapper)
          }, [
            vue.createElementVNode("div", null, [
              vue.createVNode(vue.unref(apathia_button.BaseButton), {
                small: "",
                class: vue.normalizeClass(vue.unref(styles).button),
                disabled: vue.unref(source).length === 0,
                onClick: vue.unref(addAll)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(apathia_icon.Icon), null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(DArrowLeft))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["class", "disabled", "onClick"])
            ]),
            vue.createElementVNode("div", null, [
              vue.createVNode(vue.unref(apathia_button.BaseButton), {
                small: "",
                class: vue.normalizeClass(vue.unref(styles).button),
                disabled: vue.unref(selectedSource).length === 0,
                onClick: vue.unref(addSelected)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(apathia_icon.Icon), null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(ArrowRight))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["class", "disabled", "onClick"])
            ]),
            vue.createElementVNode("div", null, [
              vue.createVNode(vue.unref(apathia_button.BaseButton), {
                small: "",
                class: vue.normalizeClass(vue.unref(styles).button),
                disabled: vue.unref(selectedTarget).length === 0,
                onClick: vue.unref(removeSelected)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(apathia_icon.Icon), null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(ArrowLeft))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["class", "disabled", "onClick"])
            ]),
            vue.createElementVNode("div", null, [
              vue.createVNode(vue.unref(apathia_button.BaseButton), {
                small: "",
                class: vue.normalizeClass(vue.unref(styles).button),
                disabled: vue.unref(target).length === 0,
                onClick: vue.unref(removeAll)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(apathia_icon.Icon), null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(DArrowLeft))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["class", "disabled", "onClick"])
            ])
          ], 2),
          vue.createVNode(_sfc_main$4, {
            modelValue: vue.unref(selectedTarget),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(selectedTarget) ? selectedTarget.value = $event : null),
            class: vue.normalizeClass(vue.unref(styles).panel),
            data: vue.unref(target),
            filterable: __props.filterable,
            "filter-placeholder": __props.filterPlaceholder,
            "filter-method": __props.filterMethod,
            title: __props.titles[1],
            "default-checked": __props.rightDefaultChecked
          }, {
            item: vue.withCtx(({ option, index }) => [
              vue.renderSlot(_ctx.$slots, "source-item", {
                option,
                index
              })
            ]),
            _: 3
          }, 8, ["modelValue", "class", "data", "filterable", "filter-placeholder", "filter-method", "title", "default-checked"])
        ], 2);
      };
    }
  });
  exports2.Transfer = _sfc_main;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
