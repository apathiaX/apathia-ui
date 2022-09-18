(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@apathia/apathia.twind"), require("@apathia/apathia.loading"), require("@apathia/apathia.custom-render"), require("@apathia/apathia.checkbox"), require("@apathia/apathia.icon"), require("lodash"), require("@apathia/apathia.button"), require("@apathia/apathia.hooks")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@apathia/apathia.twind", "@apathia/apathia.loading", "@apathia/apathia.custom-render", "@apathia/apathia.checkbox", "@apathia/apathia.icon", "lodash", "@apathia/apathia.button", "@apathia/apathia.hooks"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.table = {}, global.Vue, global.twind, global.loading, global["custom-render"], global.checkbox, global.icon, global.lodash, global.button, global.hooks));
})(this, function(exports2, vue, apathia_twind, apathia_loading, apathia_customRender, apathia_checkbox, apathia_icon, lodash, apathia_button, apathia_hooks) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$4 = vue.defineComponent({
    name: "GridSorter",
    components: {
      Icon: apathia_icon.Icon
    },
    props: {
      sort: {
        type: Object,
        required: true
      },
      prop: {
        type: String,
        required: true
      }
    },
    emits: ["sort-change"],
    setup(props, { emit }) {
      const styles = getStyles$3();
      const active = vue.computed(() => props.prop === props.sort.prop);
      function sortChange() {
        const newOrder = active.value && props.sort.order === "desc" ? "asc" : "desc";
        emit("sort-change", { prop: props.prop, order: newOrder });
      }
      return {
        styles,
        active,
        sortChange
      };
    }
  });
  const getStyles$3 = () => ({
    arrowWrap: apathia_twind.style`inline-block pl-px`,
    arrow: apathia_twind.style`text-content-neutral cursor-pointer`,
    arrowIcon: apathia_twind.style`h-3.5 w-3.5 align-middle`,
    active: apathia_twind.style`text-content-accent`
  });
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Icon = vue.resolveComponent("Icon");
    return vue.openBlock(), vue.createElementBlock("span", {
      class: vue.normalizeClass(_ctx.styles.arrowWrap)
    }, [
      vue.createElementVNode("span", {
        class: vue.normalizeClass({
          [_ctx.styles.arrow]: true,
          [_ctx.styles.active]: _ctx.active
        }),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.sortChange && _ctx.sortChange(...args))
      }, [
        vue.createVNode(_component_Icon, {
          name: [
            "fa",
            _ctx.sort.order === "asc" ? "sort-amount-up" : "sort-amount-down"
          ]
        }, null, 8, ["name"])
      ], 2)
    ], 2);
  }
  var TableSorter = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
  function toStyleObject(value) {
    if (!value) {
      return {};
    }
    if (typeof value === "string") {
      return value.split(";").reduce((acc, item) => {
        if (item) {
          const [key, val] = item.split(":");
          acc[key.trim()] = val.trim();
          return acc;
        }
        return acc;
      }, {});
    }
    return value;
  }
  function toRealWidth(width) {
    if (!width)
      return "";
    return typeof width === "number" || /^\d+$/.test(width) ? `${width}px` : width;
  }
  var _sfc_main$3 = vue.defineComponent({
    name: "TableHeader",
    components: {
      CustomRender: apathia_customRender.CustomRender,
      TableSorter,
      Checkbox: apathia_checkbox.Checkbox
    },
    props: {
      columns: {
        type: Array,
        required: true
      },
      border: {
        type: Boolean,
        default: false
      },
      headerRowClassName: {
        type: Function
      },
      headerRowStyle: {
        type: Function
      },
      headerCellClassName: {
        type: Function
      },
      headerCellStyle: {
        type: Function
      },
      sort: {
        type: Object,
        default: () => ({
          sort: "id",
          order: "asc"
        })
      },
      fixedHeader: {
        type: Boolean
      }
    },
    emits: ["sort-change", "check-all-change"],
    setup(props, {
      emit
    }) {
      var _a, _b;
      const styles = getStyles$2();
      const {
        allSelected,
        toggleAllSelected,
        indeterminate
      } = vue.inject("TableMultiSelected");
      const handleColumnSortChange = ({
        prop,
        order
      }) => {
        emit("sort-change", {
          prop,
          order
        });
      };
      const headerRowClasses = ((_a = props.headerRowClassName) === null || _a === void 0 ? void 0 : _a.call(props)) || "";
      const headerRowStyles = (_b = props.headerRowStyle) === null || _b === void 0 ? void 0 : _b.call(props);
      const headerCols = vue.computed(() => props.columns.map((column, colIndex) => {
        var _a2, _b2;
        const {
          width,
          align = "center",
          colSpan,
          fixed
        } = column;
        if (colSpan === 0)
          return null;
        if ("sortable" in column && column.sortable && !column.prop) {
          console.warn("[Table] \u5982\u679C\u6709\u6392\u5E8F\uFF0C\u5FC5\u987B\u5728prop\u5B57\u6BB5\u4E2D\u58F0\u660E\u6392\u5E8F\u4F7F\u7528\u7684\u5B57\u6BB5");
          return null;
        }
        const cellClassNames = ((_a2 = props.headerCellClassName) === null || _a2 === void 0 ? void 0 : _a2.call(props, {
          colIndex
        })) || "";
        const cellStyles = Object.assign(Object.assign({}, toStyleObject((_b2 = props.headerCellStyle) === null || _b2 === void 0 ? void 0 : _b2.call(props, {
          colIndex
        }))), {
          width: toRealWidth(width),
          textAlign: align,
          zIndex: fixed && props.fixedHeader ? 30 : fixed && !props.fixedHeader ? 20 : !fixed && props.fixedHeader ? 10 : 0
        });
        return Object.assign(Object.assign({}, column), {
          thAttrs: {
            class: cellClassNames,
            colspan: colSpan,
            style: cellStyles
          }
        });
      }).filter((v) => v !== null));
      return {
        styles,
        headerRowClasses,
        headerRowStyles,
        headerCols,
        allSelected,
        indeterminate,
        handleColumnSortChange,
        toggleAllSelected
      };
    }
  });
  const getStyles$2 = () => {
    const borderRight = apathia_twind.css`
    border-right: 1px solid rgb(0 0 0 / 12%);
  `;
    const borderLeft = apathia_twind.css`
    border-left: 1px solid rgb(0 0 0 / 12%);
  `;
    return {
      headerWrap: apathia_twind.style`overflow-hidden`,
      thead: apathia_twind.style`bg-fill-light`,
      th: apathia_twind.style`text(left content-accent) text-sm font-normal px-2 py-3 border-dashed border bg-fill-gray tracking-wider break-words box-border leading-normal ${apathia_twind.css`
      ${apathia_twind.apply("border-fill-gray")};
      border-width: 1px 1px 1px 0;
      border-style: solid;
      &:first-child {
        border-left-width: 1px;
      }
    `}`,
      thBordered: apathia_twind.style`border-line-accent`,
      fixed: apathia_twind.style`sticky`,
      fixedHeader: apathia_twind.style`top-0`,
      fixedColumnLeft: apathia_twind.style`left-0 ${borderRight}`,
      fixedColumnRight: apathia_twind.style`right-0 ${borderLeft}`
    };
  };
  const _hoisted_1$2 = ["colspan"];
  const _hoisted_2$2 = { key: 1 };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Checkbox = vue.resolveComponent("Checkbox");
    const _component_CustomRender = vue.resolveComponent("CustomRender");
    const _component_TableSorter = vue.resolveComponent("TableSorter");
    return vue.openBlock(), vue.createElementBlock("thead", {
      class: vue.normalizeClass(_ctx.styles.thead)
    }, [
      vue.createElementVNode("tr", {
        class: vue.normalizeClass(_ctx.headerRowClasses),
        style: vue.normalizeStyle(_ctx.headerRowStyles)
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.headerCols, (col, index) => {
          return vue.openBlock(), vue.createElementBlock("th", {
            key: index,
            class: vue.normalizeClass({
              [_ctx.styles.th]: true,
              [_ctx.styles.fixed]: _ctx.fixedHeader || (col == null ? void 0 : col.fixed),
              [_ctx.styles.fixedHeader]: _ctx.fixedHeader,
              [_ctx.styles.fixedColumnLeft]: (col == null ? void 0 : col.fixed) === "left",
              [_ctx.styles.fixedColumnRight]: (col == null ? void 0 : col.fixed) === "right",
              [_ctx.styles.thBordered]: _ctx.border,
              [col == null ? void 0 : col.thAttrs.class]: true
            }),
            colspan: col == null ? void 0 : col.thAttrs.colspan,
            style: vue.normalizeStyle(col == null ? void 0 : col.thAttrs.style),
            scope: "col"
          }, [
            (col == null ? void 0 : col.type) === "selection" ? (vue.openBlock(), vue.createBlock(_component_Checkbox, {
              key: 0,
              "model-value": _ctx.allSelected,
              indeterminate: _ctx.indeterminate,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.toggleAllSelected())
            }, null, 8, ["model-value", "indeterminate"])) : (col == null ? void 0 : col.title) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              typeof col.title === "function" ? (vue.openBlock(), vue.createBlock(_component_CustomRender, {
                key: 0,
                render: col.title
              }, null, 8, ["render"])) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$2, vue.toDisplayString(col.title), 1))
            ], 64)) : vue.createCommentVNode("", true),
            (col == null ? void 0 : col.sortable) ? (vue.openBlock(), vue.createBlock(_component_TableSorter, {
              key: 2,
              sort: _ctx.sort,
              prop: (col == null ? void 0 : col.prop) || "",
              onSortChange: _ctx.handleColumnSortChange
            }, null, 8, ["sort", "prop", "onSortChange"])) : vue.createCommentVNode("", true)
          ], 14, _hoisted_1$2);
        }), 128))
      ], 6)
    ], 2);
  }
  var TableHeader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
  var _sfc_main$2 = vue.defineComponent({
    name: "TableRow",
    components: {
      CustomRender: apathia_customRender.CustomRender,
      Icon: apathia_icon.Icon,
      BaseButton: apathia_button.BaseButton,
      Checkbox: apathia_checkbox.Checkbox
    },
    props: {
      columns: {
        type: Array,
        required: true
      },
      row: {
        type: Object,
        required: true
      },
      border: {
        type: Boolean,
        default: false
      },
      stripe: {
        type: Boolean
      },
      rowClassName: {
        type: Function
      },
      rowStyle: {
        type: Function
      },
      cellClassName: {
        type: Function
      },
      cellStyle: {
        type: Function
      },
      cellSpan: {
        type: Function,
        default: () => [1, 1]
      },
      highlightCurrentRow: {
        type: Boolean
      },
      rowKey: {
        type: String,
        default: "id"
      },
      rowIndex: {
        type: Number,
        default: 0
      },
      currentActiveRow: {
        type: Number,
        default: 0
      },
      expand: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ["row-click"],
    setup(props, ctx) {
      var _a, _b;
      const styles = getStyles$1();
      const rowClasses = ((_a = props.rowClassName) === null || _a === void 0 ? void 0 : _a.call(props, {
        row: props.row,
        rowIndex: props.rowIndex
      })) || "";
      const rowStyles = ((_b = props.rowStyle) === null || _b === void 0 ? void 0 : _b.call(props, {
        row: props.row,
        rowIndex: props.rowIndex
      })) || "";
      const {
        selectedMap
      } = vue.inject("TableMultiSelected");
      const isRowActiveStyle = vue.computed(() => props.highlightCurrentRow && props.currentActiveRow === props.rowIndex);
      const expandable = vue.computed(() => {
        var _a2, _b2;
        return typeof props.expand.expandRowRender === "function" && !!((_b2 = (_a2 = props.expand).rowExpandable) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, {
          row: props.row,
          rowIndex: props.rowIndex
        }));
      });
      const expandActive = vue.ref(false);
      const toggleExpand = () => {
        expandActive.value = !expandActive.value;
      };
      let cancelClick = false;
      const clickRow = (e, rowIndex) => {
        if (cancelClick)
          return;
        ctx.emit("row-click", e, rowIndex, props.row);
      };
      const handleRowMouseUp = (e) => {
        const selection = window.getSelection();
        if (selection && selection.type === "Range" && selection.focusNode && selection.anchorNode && selection.anchorNode.nodeType !== Node.ELEMENT_NODE && selection.anchorNode.nodeType === selection.focusNode.nodeType) {
          cancelClick = true;
          e.stopPropagation();
        } else {
          cancelClick = false;
        }
      };
      const cols = vue.computed(() => props.columns.map((col, colIndex) => {
        var _a2, _b2, _c;
        const [rowSpan, colSpan] = (_a2 = props.cellSpan) === null || _a2 === void 0 ? void 0 : _a2.call(props, {
          row: props.row,
          col,
          rowIndex: props.rowIndex,
          colIndex
        });
        if (colSpan === 0 || rowSpan === 0) {
          return null;
        }
        const cellClassName = ((_b2 = props.cellClassName) === null || _b2 === void 0 ? void 0 : _b2.call(props, {
          row: props.row,
          col,
          rowIndex: props.rowIndex,
          colIndex
        })) || "";
        const cellStyles = Object.assign(Object.assign({}, toStyleObject((_c = props.cellStyle) === null || _c === void 0 ? void 0 : _c.call(props, {
          row: props.row,
          col,
          rowIndex: props.rowIndex,
          colIndex
        }))), {
          textAlign: col.align || "center",
          width: toRealWidth(col.width)
        });
        const tdAttrs = {
          style: cellStyles
        };
        if (colSpan !== 1)
          tdAttrs.colSpan = colSpan;
        if (rowSpan !== 1)
          tdAttrs.rowSpan = rowSpan;
        const tdClasses = {
          [styles.cell]: true,
          [styles.borderd]: props.border,
          [styles.fixedColumnLeft]: col.fixed === "left",
          [styles.fixedColumnRight]: col.fixed === "right",
          [styles.activeRow]: isRowActiveStyle.value,
          [styles.stripedRow]: props.stripe && props.rowIndex % 2 === 1,
          [styles.whiteRow]: !(isRowActiveStyle.value || props.stripe && props.rowIndex % 2 === 1),
          [cellClassName]: true
        };
        return Object.assign(Object.assign({}, col), {
          tdClasses,
          tdAttrs
        });
      }).filter(Boolean));
      const classNames2props = (str) => {
        if (!str) {
          return {
            primary: true
          };
        }
        return str.split(" ").filter((v) => !!v).reduce((acc, v) => {
          acc[v] = true;
          return acc;
        }, {});
      };
      return {
        selectedMap,
        rowClasses,
        rowStyles,
        expandable,
        expandActive,
        cols,
        clickRow,
        handleRowMouseUp,
        toggleExpand,
        styles,
        get: lodash.get,
        classNames2props
      };
    }
  });
  const getStyles$1 = () => {
    const borderRight = apathia_twind.css`
    border-right: 1px solid rgb(0 0 0 / 12%);
  `;
    const borderLeft = apathia_twind.css`
    border-left: 1px solid rgb(0 0 0 / 12%);
  `;
    return {
      row: apathia_twind.style`hover:(bg-fill-light) transition`,
      cell: apathia_twind.style`px-2 py-3 border(b solid line-accent) break-words text-sm`,
      fixedColumnLeft: apathia_twind.style`sticky z-20 left-0 ${borderRight}`,
      fixedColumnRight: apathia_twind.style`sticky z-20 right-0 ${borderLeft}`,
      borderd: apathia_twind.style`border(r solid line-accent)`,
      stripedRow: apathia_twind.style`bg-fill-light`,
      activeRow: apathia_twind.style`bg-brand-hover`,
      whiteRow: apathia_twind.style`bg-fill-white`,
      cellBtnsWrap: apathia_twind.style`inline-flex flex-wrap ${apathia_twind.css`
      --gap: 0.25rem;
      --column-gap: var(--gap);
      --row-gap: var(--gap);
      margin: calc(var(--row-gap) / -2) calc(var(--column-gap) / -2);
      & > * {
        margin: calc(var(--row-gap) / 2) calc(var(--column-gap) / 2);
      }
    `}`,
      fadeEnd: apathia_twind.style`opacity-0`,
      fadeActive: apathia_twind.style`transition-all duration-100`
    };
  };
  const _hoisted_1$1 = { key: 0 };
  const _hoisted_2$1 = { key: 1 };
  const _hoisted_3$1 = { key: 0 };
  const _hoisted_4$1 = ["colspan"];
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Checkbox = vue.resolveComponent("Checkbox");
    const _component_Icon = vue.resolveComponent("Icon");
    const _component_BaseButton = vue.resolveComponent("BaseButton");
    const _component_CustomRender = vue.resolveComponent("CustomRender");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("tr", {
        class: vue.normalizeClass({
          [_ctx.styles.row]: true,
          [_ctx.rowClasses]: true,
          [_ctx.styles.stripedRow]: _ctx.stripe && _ctx.rowIndex % 2 === 1
        }),
        style: vue.normalizeStyle(_ctx.rowStyles),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.clickRow($event, _ctx.rowIndex)),
        onMouseUp: _cache[1] || (_cache[1] = (...args) => _ctx.handleRowMouseUp && _ctx.handleRowMouseUp(...args))
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.cols, (col, colIndex) => {
          return vue.openBlock(), vue.createElementBlock("td", vue.mergeProps({
            key: colIndex,
            class: col == null ? void 0 : col.tdClasses
          }, col == null ? void 0 : col.tdAttrs), [
            col && "type" in col ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              col.type === "index" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$1, vue.toDisplayString(_ctx.rowIndex + 1), 1)) : col.type === "selection" ? (vue.openBlock(), vue.createBlock(_component_Checkbox, {
                key: 1,
                "model-value": !!_ctx.selectedMap[_ctx.row[_ctx.rowKey]],
                disabled: col.disabledWhen ? !!col.disabledWhen({ row: _ctx.row, rowIndex: _ctx.rowIndex }) : false
              }, null, 8, ["model-value", "disabled"])) : col.type === "expand" && _ctx.expandable ? (vue.openBlock(), vue.createBlock(_component_Icon, {
                key: 2,
                name: ["fa", _ctx.expandActive ? "minus" : "plus"],
                onClick: _ctx.toggleExpand
              }, null, 8, ["name", "onClick"])) : vue.createCommentVNode("", true)
            ], 64)) : col && "field" in col ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$1, vue.toDisplayString(_ctx.get(_ctx.row, col.field, "")), 1)) : col && "buttons" in col ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 2,
              class: vue.normalizeClass(_ctx.styles.cellBtnsWrap)
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(col.buttons({
                row: _ctx.row,
                rowIndex: _ctx.rowIndex,
                colIndex
              }), (button, buttonIndex) => {
                return vue.openBlock(), vue.createBlock(_component_BaseButton, vue.mergeProps({
                  key: buttonIndex,
                  small: ""
                }, _ctx.classNames2props(button.className), {
                  onClick: ($event) => button.onClick({
                    row: _ctx.row,
                    rowIndex: _ctx.rowIndex,
                    colIndex
                  })
                }), {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(button.text), 1)
                  ]),
                  _: 2
                }, 1040, ["onClick"]);
              }), 128))
            ], 2)) : col && "render" in col ? (vue.openBlock(), vue.createBlock(_component_CustomRender, {
              key: 3,
              render: col.render,
              row: _ctx.row,
              "col-index": colIndex,
              "row-index": _ctx.rowIndex
            }, null, 8, ["render", "row", "col-index", "row-index"])) : vue.createCommentVNode("", true)
          ], 16);
        }), 128))
      ], 38),
      vue.createVNode(vue.Transition, {
        "enter-from-class": _ctx.styles.fadeEnd,
        "enter-active-class": _ctx.styles.fadeActive,
        "leave-active-class": _ctx.styles.fadeActive,
        "leave-to-class": _ctx.styles.fadeEnd
      }, {
        default: vue.withCtx(() => [
          _ctx.expandable && _ctx.expandActive ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_3$1, [
            vue.createElementVNode("td", {
              colspan: _ctx.columns.length
            }, [
              vue.createVNode(_component_CustomRender, {
                render: _ctx.expand.expandRowRender,
                row: _ctx.row,
                "row-index": _ctx.rowIndex
              }, null, 8, ["render", "row", "row-index"])
            ], 8, _hoisted_4$1)
          ])) : vue.createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["enter-from-class", "enter-active-class", "leave-active-class", "leave-to-class"])
    ], 64);
  }
  var TableRow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
  const _sfc_main$1 = vue.defineComponent({
    name: "TableBody",
    components: {
      TableRow
    },
    inheritAttrs: false,
    props: {
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      current: {
        type: [String, Number],
        default: -1
      },
      highlightCurrentRow: {
        type: Boolean
      },
      rowKey: {
        type: String,
        default: "id"
      }
    },
    emits: ["current-change"],
    setup(props, { emit }) {
      const currentRowIndex = vue.computed({
        get: () => {
          return props.data.findIndex((i) => i[props.rowKey] === props.current);
        },
        set: (rowIndex) => {
          emit("current-change", props.data[rowIndex]);
        }
      });
      const { selectedMap, toggleItem, shiftToggle } = vue.inject(
        "TableMultiSelected"
      );
      const multiSelected = vue.computed(
        () => props.columns.findIndex(
          (col) => "type" in col && col.type === "selection"
        ) > -1
      );
      const shiftIndex = vue.ref(-1);
      const normalIndex = vue.ref(-1);
      const clickRow = (e, rowIndex, row) => {
        currentRowIndex.value = rowIndex;
        if (!multiSelected.value) {
          return;
        }
        if (e.shiftKey) {
          shiftIndex.value = rowIndex;
          if (normalIndex.value === shiftIndex.value) {
            toggleItem(row);
            normalIndex.value = rowIndex;
            return;
          }
          let range = [];
          if (normalIndex.value < shiftIndex.value) {
            const start = props.data.slice(normalIndex.value, shiftIndex.value + 1).findIndex((item) => !!selectedMap.value[`${item[props.rowKey]}`]) + normalIndex.value;
            range = props.data.slice(start, shiftIndex.value + 1);
          } else if (normalIndex.value > shiftIndex.value) {
            const start = selectedMap.value[`${row[`${props.rowKey}`]}`] ? shiftIndex.value + 1 : shiftIndex.value;
            range = props.data.slice(start, normalIndex.value + 1);
          }
          shiftToggle(range);
        } else {
          toggleItem(row);
        }
        normalIndex.value = rowIndex;
      };
      return {
        clickRow,
        currentRowIndex
      };
    }
  });
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TableRow = vue.resolveComponent("TableRow");
    return vue.openBlock(), vue.createElementBlock("tbody", null, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.data, (row, rowIndex) => {
        return vue.openBlock(), vue.createBlock(_component_TableRow, vue.mergeProps(_ctx.$attrs, {
          key: row[_ctx.rowKey],
          row,
          "row-key": _ctx.rowKey,
          columns: _ctx.columns,
          "highlight-current-row": _ctx.highlightCurrentRow,
          "row-index": rowIndex,
          "current-active-row": _ctx.currentRowIndex,
          onRowClick: _ctx.clickRow
        }), null, 16, ["row", "row-key", "columns", "highlight-current-row", "row-index", "current-active-row", "onRowClick"]);
      }), 128))
    ]);
  }
  var TableBody = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
  function useTableColumns(props) {
    const tableWidth = vue.ref(0);
    const containerRef = vue.ref(null);
    const updateTableWidth = () => {
      var _a;
      tableWidth.value = ((_a = containerRef.value) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
    };
    apathia_hooks.useEventListener("resize", updateTableWidth);
    vue.onMounted(updateTableWidth);
    vue.onUpdated(updateTableWidth);
    const realColumns = vue.ref([]);
    const resolveColumns = () => {
      const unsureColumnCount = props.columns.filter((col) => col.width === void 0).length;
      const definedColumnTotalWidth = props.columns.reduce((acc, col) => col.width !== void 0 ? acc + parseInt(col.width + "", 10) : acc, 0);
      const noCalcWidth = unsureColumnCount === props.columns.length;
      const columnWidth = (tableWidth.value - definedColumnTotalWidth) / unsureColumnCount;
      realColumns.value = props.columns.filter((col) => col.when ? col.when() : true).map((col) => {
        col.align = col.align || "center";
        return col.width || noCalcWidth ? col : Object.assign(Object.assign({}, col), { width: columnWidth });
      });
    };
    vue.watch(() => tableWidth.value, resolveColumns, { flush: "post" });
    vue.watch([
      ...props.columns.filter((col) => col.when && typeof col.when === "function").map((col) => col.when),
      () => props.columns
    ], resolveColumns, { immediate: true });
    return {
      realColumns,
      containerRef
    };
  }
  function useTableSelected(data, selectedKeys, selected, key, columns, ctx) {
    const disabledKeyMap = vue.computed(() => {
      const [selectionColumn] = columns.value.filter((col) => "type" in col && col.type === "selection");
      if (!selectionColumn || !("disabledWhen" in selectionColumn) || typeof selectionColumn.disabledWhen !== "function")
        return {};
      return data.value.filter((item, index) => selectionColumn.disabledWhen({ row: item, rowIndex: index })).reduce((map, item) => {
        map[`${item[key.value]}`] = true;
        return map;
      }, {});
    });
    const checkableCount = vue.computed(() => {
      return data.value.length - Object.keys(disabledKeyMap.value).length;
    });
    const selectedMap = vue.computed({
      get: () => {
        if (selected.value && selected.value.length) {
          return selected.value.reduce((acc, cur) => {
            acc[`${cur[key.value]}`] = true;
            return acc;
          }, {});
        } else if (selectedKeys.value && selectedKeys.value.length) {
          return selectedKeys.value.reduce((acc, key2) => {
            acc[key2] = true;
            return acc;
          }, {});
        } else {
          return {};
        }
      },
      set: (checkedMap) => {
        const selectedItems = data.value.filter((item) => checkedMap[`${item[key.value]}`] && !disabledKeyMap.value[`${item[key.value]}`]);
        ctx.emit("update:selected", selectedItems);
        ctx.emit("update:selectedKeys", selectedItems.map((item) => item[key.value]));
      }
    });
    const allSelected = vue.computed({
      get() {
        return data.value.length === 0 || checkableCount.value === 0 ? false : selected.value.length === checkableCount.value;
      },
      set(value) {
        if (value) {
          selectedMap.value = data.value.reduce((acc, item) => {
            acc[`${item[key.value]}`] = true;
            return acc;
          }, {});
        } else {
          selectedMap.value = {};
        }
      }
    });
    const toggleItem = (item) => {
      const identify = `${item[`${key.value}`]}`;
      selectedMap.value = Object.assign(Object.assign({}, selectedMap.value), { [identify]: !selectedMap.value[identify] });
    };
    const toggleAllSelected = () => {
      allSelected.value = !allSelected.value;
    };
    const shiftToggle = (range) => {
      const rangeAllChecked = range.every((i) => selectedMap.value[`${i[key.value]}`]);
      selectedMap.value = Object.assign(Object.assign({}, selectedMap.value), range.reduce((acc, cur) => {
        acc[`${cur[key.value]}`] = !rangeAllChecked;
        return acc;
      }, {}));
    };
    const indeterminate = vue.computed(() => {
      const intersection = data.value.filter((item) => {
        return selectedMap.value[`${item[key.value]}`];
      });
      return intersection.length > 0 && !allSelected.value;
    });
    return {
      selectedMap,
      allSelected,
      indeterminate,
      toggleItem,
      toggleAllSelected,
      shiftToggle
    };
  }
  const _sfc_main = vue.defineComponent({
    name: "Table",
    components: {
      TableHeader,
      TableBody,
      Loading: apathia_loading.Loading
    },
    props: {
      data: {
        type: Array,
        required: true
      },
      columns: {
        type: Array,
        required: true
      },
      stripe: {
        type: Boolean,
        default: false
      },
      border: {
        type: Boolean,
        default: false
      },
      headerRowClassName: {
        type: Function
      },
      headerRowStyle: {
        type: Function
      },
      headerCellClassName: {
        type: Function
      },
      headerCellStyle: {
        type: Function
      },
      rowClassName: {
        type: Function
      },
      rowStyle: {
        type: Function
      },
      cellClassName: {
        type: Function
      },
      cellStyle: {
        type: Function
      },
      cellSpan: {
        type: Function,
        default: () => [1, 1]
      },
      height: {
        type: Number
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      showData: {
        type: Boolean,
        default: true
      },
      rowKey: {
        type: String,
        default: "id"
      },
      highlightCurrentRow: {
        type: Boolean,
        default: true
      },
      current: {
        type: [String, Number],
        default: -1
      },
      currentSelected: {
        type: Object,
        default: null
      },
      selected: {
        type: Array,
        default: () => []
      },
      selectedKeys: {
        type: Array,
        default: () => []
      },
      sort: {
        type: Object,
        default: () => ({})
      },
      expand: {
        type: Object,
        default: () => ({})
      },
      loading: {
        type: Boolean
      },
      scroll: {
        type: Object,
        default: () => ({})
      }
    },
    emits: [
      "update:selected",
      "update:selectedKeys",
      "update:current",
      "update:currentSelected",
      "sort-change"
    ],
    setup(props, ctx) {
      const styles = getStyles();
      const currentId = vue.computed(
        () => props.currentSelected ? props.currentSelected[props.rowKey] : props.current
      );
      const { data, selected, selectedKeys, rowKey, columns } = vue.toRefs(props);
      const tableMultiSelected = useTableSelected(
        data,
        selectedKeys,
        selected,
        rowKey,
        columns,
        ctx
      );
      const tableStyle = vue.computed(() => ({
        minWidth: props.scroll.width ? `${props.scroll.width}px` : "",
        minHeight: props.scroll.height ? `${props.scroll.height}px` : ""
      }));
      vue.provide("TableMultiSelected", tableMultiSelected);
      const { containerRef, realColumns } = useTableColumns(props);
      const fixedHeader = vue.computed(() => props.height !== 0);
      vue.watch(
        () => props.data,
        () => {
          tableMultiSelected.selectedMap.value = {};
        }
      );
      function onCurrentChange(item) {
        ctx.emit("update:current", item[rowKey.value]);
        ctx.emit("update:currentSelected", item);
      }
      return {
        containerRef,
        realColumns,
        tableStyle,
        fixedHeader,
        styles,
        currentId,
        onCurrentChange,
        tableMultiSelected
      };
    }
  });
  const getStyles = () => ({
    container: apathia_twind.style`shadow relative overflow-auto border(b line-accent)`,
    table: apathia_twind.style`min-w-full w-full table-fixed divide-y divide-line-accent text(sm left) leading-normal rounded box-border m-0 p-0 ${apathia_twind.css(
      { "border-collapse": "separate", "border-spacing": 0 }
    )}`
  });
  const _hoisted_1 = { key: 1 };
  const _hoisted_2 = { style: { "height": "55px", "text-align": "center" } };
  const _hoisted_3 = ["colspan"];
  const _hoisted_4 = /* @__PURE__ */ vue.createElementVNode("p", null, "\u6CA1\u6709\u6570\u636E", -1);
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TableHeader = vue.resolveComponent("TableHeader");
    const _component_Loading = vue.resolveComponent("Loading");
    const _component_TableBody = vue.resolveComponent("TableBody");
    return vue.openBlock(), vue.createElementBlock("div", {
      ref: "containerRef",
      class: vue.normalizeClass(_ctx.styles.container),
      style: vue.normalizeStyle({
        "max-height": _ctx.fixedHeader ? `${_ctx.height}px` : "auto"
      })
    }, [
      vue.createElementVNode("table", vue.mergeProps({
        class: _ctx.styles.table,
        style: _ctx.tableStyle
      }, _ctx.$attrs), [
        _ctx.showHeader ? (vue.openBlock(), vue.createBlock(_component_TableHeader, {
          key: 0,
          columns: _ctx.realColumns,
          border: _ctx.border,
          "header-row-class-name": _ctx.headerRowClassName,
          "header-row-style": _ctx.headerRowStyle,
          "header-cell-class-name": _ctx.headerCellClassName,
          "header-cell-style": _ctx.headerCellStyle,
          sort: _ctx.sort,
          "fixed-header": _ctx.fixedHeader,
          onSortChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("sort-change", $event))
        }, null, 8, ["columns", "border", "header-row-class-name", "header-row-style", "header-cell-class-name", "header-cell-style", "sort", "fixed-header"])) : vue.createCommentVNode("", true),
        _ctx.data.length === 0 || _ctx.loading ? (vue.openBlock(), vue.createElementBlock("tbody", _hoisted_1, [
          vue.createElementVNode("tr", _hoisted_2, [
            vue.createElementVNode("td", {
              colspan: _ctx.realColumns.length
            }, [
              _ctx.loading ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }, () => [
                vue.createVNode(_component_Loading)
              ]) : _ctx.data.length === 0 ? vue.renderSlot(_ctx.$slots, "empty", { key: 1 }, () => [
                _hoisted_4
              ]) : vue.createCommentVNode("", true)
            ], 8, _hoisted_3)
          ])
        ])) : vue.createCommentVNode("", true),
        _ctx.data.length && !_ctx.loading && _ctx.showData ? (vue.openBlock(), vue.createBlock(_component_TableBody, {
          key: 2,
          columns: _ctx.realColumns,
          data: _ctx.data,
          border: _ctx.border,
          stripe: _ctx.stripe,
          "row-class-name": _ctx.rowClassName,
          "row-style": _ctx.rowStyle,
          "cell-class-name": _ctx.cellClassName,
          "cell-style": _ctx.cellStyle,
          "cell-span": _ctx.cellSpan,
          current: _ctx.currentId,
          "highlight-current-row": _ctx.highlightCurrentRow,
          "row-key": _ctx.rowKey,
          expand: _ctx.expand,
          onCurrentChange: _ctx.onCurrentChange
        }, null, 8, ["columns", "data", "border", "stripe", "row-class-name", "row-style", "cell-class-name", "cell-style", "cell-span", "current", "highlight-current-row", "row-key", "expand", "onCurrentChange"])) : vue.createCommentVNode("", true)
      ], 16)
    ], 6);
  }
  var Table = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  function createTable(cols, shallowData = false) {
    const columns = vue.shallowRef(cols);
    const setColumns = (value) => {
      columns.value = value;
    };
    const getColmns = () => columns.value;
    const loading = vue.ref(false);
    const data = shallowData ? vue.shallowRef([]) : vue.ref([]);
    const setData = (newData) => {
      if (Array.isArray(newData)) {
        data.value = newData;
      } else {
        loading.value = true;
        newData().then((value) => {
          data.value = value;
        }).catch((err) => {
          console.error(err);
        }).finally(() => {
          loading.value = false;
        });
      }
    };
    const getData = () => data.value;
    const pagination = vue.ref({
      currentPage: 1,
      totalItems: 0,
      pageSize: 10,
      totalPages: 0,
      maxLength: 7,
      keepMiddle: true,
      directionBtns: true,
      previousText: "\u4E0A\u4E00\u9875",
      nextText: "\u4E0B\u4E00\u9875",
      boundaryBtns: true,
      firstText: "\u9996\u9875",
      lastText: "\u672B\u9875",
      totalCount: true,
      jumpPage: false,
      totalTemplate(totalItems) {
        return `\u5171 ${totalItems} \u6761\u6570\u636E`;
      }
    });
    const getPagination = () => pagination.value;
    const setPagination = (pager) => {
      pagination.value.currentPage = pager.num;
      pagination.value.totalItems = pager.total;
      pagination.value.pageSize = pager.size;
    };
    const updatePager = (pager) => {
      if (!pager) {
        setPagination({
          num: 1,
          size: 0,
          total: 0
        });
      } else if ("num" in pager) {
        setPagination(pager);
      } else {
        setPagination({
          num: pager.current_page,
          size: pager.page_size,
          total: pager.total_items
        });
      }
    };
    const getCurrentPage = () => pagination.value.currentPage;
    const showPagination = vue.ref(true);
    const triggerPagination = (value) => {
      showPagination.value = value;
    };
    const showData = vue.ref(true);
    const triggerData = (value) => {
      showData.value = value;
    };
    const showHeader = vue.ref(true);
    const triggerHeader = (value) => {
      showHeader.value = value;
    };
    const tableOptions = vue.computed(() => ({
      data: vue.unref(data),
      loading: vue.unref(loading),
      columns: vue.unref(columns),
      pagination: vue.unref(pagination),
      showPagination: vue.unref(showPagination),
      showData: vue.unref(showData),
      showHeader: vue.unref(showHeader)
    }));
    const tools = {
      setColumns,
      getColmns,
      setData,
      getData,
      getPagination,
      setPagination,
      updatePager,
      getCurrentPage,
      triggerPagination,
      triggerData,
      triggerHeader
    };
    return [tableOptions, tools];
  }
  exports2.Table = Table;
  exports2.createTable = createTable;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
