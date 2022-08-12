import { shallowReactive, ref, onBeforeUpdate, onUpdated, computed, watch, defineComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, createCommentVNode, Fragment, renderList, renderSlot, createTextVNode, withDirectives, withKeys, vModelText } from "vue";
import { style } from "@apathia/apathia.twind";
import { mergeWithDefault } from "@apathia/apathia.shared";
const DEFAULT_OPTIONS = {
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
  jumpPage: false
};
function usePagination(props, ctx) {
  const realOptions = shallowReactive(mergeWithDefault(DEFAULT_OPTIONS, props.options.value));
  const jumpTo = ref("1");
  const prevPage = ref(0);
  const init = ref(false);
  const pages = ref([]);
  const btnsRef = ref([]);
  const setPageBtnRef = (el) => {
    btnsRef.value.push(el);
  };
  onBeforeUpdate(() => {
    btnsRef.value = [];
  });
  onUpdated(() => {
    updateButtonFocus(realOptions.currentPage);
  });
  const totalItems = computed(() => {
    if (typeof realOptions.totalItems === "number") {
      return realOptions.totalItems;
    }
    return 0;
  });
  const totalPages = computed(() => {
    const options = realOptions;
    if (totalItems.value === 0) {
      return 0;
    }
    return Math.ceil(totalItems.value / options.pageSize);
  });
  const selectPage = (newPage) => {
    const pageNumber = Number(newPage) || 1;
    if (realOptions.currentPage === pageNumber) {
      return;
    }
    if (prevPage.value == null) {
      prevPage.value = realOptions.currentPage;
    }
    realOptions.currentPage = pageNumber;
    prevPage.value = pageNumber;
    ctx.emit("page-change", pageNumber, totalPages.value);
    handlePageChange(pageNumber);
  };
  const handlePageChange = (pageNumber) => {
    const limit = realOptions.maxLength;
    if (limit === void 0 || pageNumber === 0) {
      return;
    }
    const keepMiddle2 = realOptions.keepMiddle;
    if (pageNumber === 1 && prevPage.value > limit) {
      pages.value = initPagesArray(keepMiddle2, totalPages.value, pageNumber, limit);
      init.value = true;
      return;
    }
    if (keepMiddle2 && limit < totalPages.value) {
      pages.value = updatePagesArray(keepMiddle2, totalPages.value, pageNumber, limit);
      return;
    }
    const start = (Math.ceil(prevPage.value / limit) - 1) * limit + 1;
    const end = Math.min(start + limit - 1, totalPages.value);
    if (pageNumber < start || pageNumber > end) {
      pages.value = updatePagesArray(keepMiddle2, totalPages.value, pageNumber, limit);
    }
  };
  const updateButtonFocus = (pageNumber = 1) => {
    const pageIndex = pages.value.findIndex((page) => page.number === pageNumber);
    const btns = btnsRef.value;
    if (btns && btns[pageIndex]) {
      btns[pageIndex].focus();
    }
  };
  const keepMiddle = !!realOptions.keepMiddle;
  prevPage.value = realOptions.currentPage;
  watch(() => props.options.value, (optionsVal) => {
    Object.keys(optionsVal).forEach((key) => {
      if (optionsVal[key] !== void 0) {
        switch (key) {
          case "currentPage":
          case "totalItems":
          case "pageSize":
          case "totalPages":
          case "maxLength":
            realOptions[key] = Number(optionsVal[key]);
            break;
          default:
            realOptions[key] = optionsVal[key];
            break;
        }
      }
    });
  }, { immediate: true });
  watch(() => realOptions, (optionsVal) => {
    Object.keys(optionsVal).forEach((key) => {
      if (optionsVal[key] !== void 0) {
        switch (key) {
          case "currentPage":
          case "totalItems":
          case "pageSize":
          case "totalPages":
          case "maxLength":
            realOptions[key] = Number(optionsVal[key]);
            break;
          default:
            realOptions[key] = optionsVal[key];
            break;
        }
      }
    });
  }, { immediate: true });
  watch(() => totalPages.value, () => {
    pages.value = initPagesArray(keepMiddle, totalPages.value, realOptions.currentPage, realOptions.maxLength);
    init.value = true;
  }, { immediate: true });
  watch(() => realOptions.currentPage, (page) => {
    if (init.value === true) {
      init.value = false;
      return;
    }
    if (page === prevPage.value)
      return;
    if (page > 1 && page > totalPages.value) {
      selectPage(totalPages.value);
      return;
    }
    prevPage.value = page;
    handlePageChange(page);
  });
  watch(() => jumpTo.value, (val) => {
    if (val === "") {
      return;
    }
    let newValue = Number(String(val).replace(/[^0-9]/gi, ""));
    if (newValue > 0 && newValue <= totalPages.value) {
      newValue = Math.ceil(newValue);
    } else {
      newValue = newValue <= 0 ? 1 : totalPages.value;
    }
    jumpTo.value = String(newValue);
  });
  return {
    jumpTo,
    pages,
    totalPages,
    totalItems,
    selectPage,
    setPageBtnRef,
    innerOptions: realOptions
  };
}
function createPage(number, text) {
  return {
    number,
    text
  };
}
function initPagesArray(keepMiddle, totalPages, currentPage, limit) {
  const pages = [];
  let number;
  let start = 1;
  let end = totalPages;
  if (!currentPage) {
    return pages;
  }
  if (keepMiddle && currentPage > limit) {
    start = Math.max(currentPage - Math.floor(limit / 2), 1);
    end = start + limit - 1;
    if (end > totalPages) {
      end = totalPages;
      start = end - limit + 1;
      if (start < 1) {
        start = 1;
      }
    }
  } else {
    start = (Math.ceil(currentPage / limit) - 1) * limit + 1;
    end = Math.min(start + limit - 1, totalPages);
  }
  for (number = start; number <= end; number++) {
    pages.push(createPage(number, number));
  }
  if (totalPages > end && !keepMiddle) {
    pages.push(createPage(number, "..."));
  }
  return pages;
}
function updatePagesArray(keepMiddle, totalPages, currentPage, limit) {
  const pages = [];
  let number;
  let start = 1;
  let end;
  if (keepMiddle) {
    start = Math.max(currentPage - Math.floor(limit / 2), 1);
    end = start + limit - 1;
    if (end > totalPages) {
      end = totalPages;
      start = end - limit + 1;
    }
  } else {
    start = (Math.ceil(currentPage / limit) - 1) * limit + 1;
    end = Math.min(start + limit - 1, totalPages);
  }
  for (number = start; number <= end; number++) {
    pages.push(createPage(number, number));
  }
  if (keepMiddle) {
    return pages;
  }
  if (limit <= 0) {
    return pages;
  }
  if (start > 1) {
    pages.unshift(createPage(start - 1, "..."));
  }
  if (end < totalPages) {
    pages.push(createPage(end + 1, "..."));
  }
  return pages;
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "Pagination",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  emits: ["page-change"],
  setup(props, ctx) {
    const options = computed(() => ({ ...props.options }));
    const userProps = {
      options
    };
    const {
      jumpTo,
      pages,
      totalPages,
      totalItems,
      selectPage,
      setPageBtnRef,
      innerOptions
    } = usePagination(userProps, ctx);
    const styles = {
      wrapper: style`relative bg-white py-3 flex items-center justify-between`,
      ul: style`relative z-0 inline-flex items-center -space-x-px text-sm font-medium`,
      item: style`relative inline-flex px-2 py-2 border border-gray-300 bg-white text-gray-700 
      cursor-pointer select-none hover:bg-brand-500 hover:text-white`,
      first: style`rounded-l-md flex-shrink-0`,
      last: style`rounded-r-md flex-shrink-0`,
      prev: style`flex-shrink-0`,
      next: style`flex-shrink-0`,
      active: style`text-white bg-brand-500 border-brand-300 outline-none`,
      itemDisabled: style`cursor-not-allowed pointer-events-none text-gray-500 bg-gray-100 border-gray-300`,
      numberBtn: style`outline-none px-4 py-2`,
      jump: style`relative z-0 inline-flex items-center -space-x-px text-sm font-medium border border-gray-300 rounded-md`,
      jumpInput: style`outline-none text-center w-14 py-2 border-0 text-brand-500 rounded-l-md`,
      jumpBtn: style`text-center w-14 py-2 border-0 bg-white text-gray-700 rounded-r-md
      cursor-pointer hover:bg-brand-500 hover:text-white`,
      count: style`px-4`
    };
    return {
      jumpTo,
      pages,
      selectPage,
      setPageBtnRef,
      innerOptions,
      totalPages,
      totalItems,
      styles
    };
  }
});
const _hoisted_1 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("nav", {
    class: normalizeClass(_ctx.styles.wrapper)
  }, [
    createElementVNode("ul", {
      class: normalizeClass(_ctx.styles.ul)
    }, [
      _ctx.innerOptions.boundaryBtns ? (openBlock(), createElementBlock("li", {
        key: 0,
        class: normalizeClass({
          [_ctx.styles.item]: true,
          [_ctx.styles.first]: true,
          [_ctx.styles.itemDisabled]: _ctx.innerOptions.currentPage === 1
        }),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.selectPage(1))
      }, toDisplayString(_ctx.innerOptions.firstText), 3)) : createCommentVNode("", true),
      _ctx.innerOptions.directionBtns ? (openBlock(), createElementBlock("li", {
        key: 1,
        class: normalizeClass({
          [_ctx.styles.item]: true,
          [_ctx.styles.prev]: true,
          [_ctx.styles.itemDisabled]: _ctx.innerOptions.currentPage === 1
        }),
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.selectPage(_ctx.innerOptions.currentPage - 1))
      }, toDisplayString(_ctx.innerOptions.previousText), 3)) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pages, (page, index) => {
        return openBlock(), createElementBlock("li", {
          key: index,
          ref_for: true,
          ref: _ctx.setPageBtnRef,
          class: normalizeClass({
            [_ctx.styles.item]: true,
            [_ctx.styles.numberBtn]: true,
            [_ctx.styles.active]: page.number === _ctx.innerOptions.currentPage
          }),
          onClick: ($event) => _ctx.selectPage(page.number)
        }, toDisplayString(page.text), 11, _hoisted_1);
      }), 128)),
      _ctx.innerOptions.directionBtns ? (openBlock(), createElementBlock("li", {
        key: 2,
        class: normalizeClass({
          [_ctx.styles.item]: true,
          [_ctx.styles.next]: true,
          [_ctx.styles.itemDisabled]: _ctx.innerOptions.currentPage === _ctx.totalPages || _ctx.innerOptions.totalItems === 0
        }),
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.selectPage(_ctx.innerOptions.currentPage + 1))
      }, toDisplayString(_ctx.innerOptions.nextText), 3)) : createCommentVNode("", true),
      _ctx.innerOptions.boundaryBtns ? (openBlock(), createElementBlock("li", {
        key: 3,
        class: normalizeClass({
          [_ctx.styles.item]: true,
          [_ctx.styles.last]: true,
          [_ctx.styles.itemDisabled]: _ctx.innerOptions.currentPage === _ctx.totalPages || _ctx.innerOptions.totalItems === 0
        }),
        onClick: _cache[3] || (_cache[3] = ($event) => _ctx.selectPage(_ctx.totalPages))
      }, toDisplayString(_ctx.innerOptions.lastText), 3)) : createCommentVNode("", true),
      _ctx.innerOptions.totalCount ? (openBlock(), createElementBlock("li", {
        key: 4,
        class: normalizeClass(_ctx.styles.count)
      }, [
        renderSlot(_ctx.$slots, "total", {
          totalItems: _ctx.totalItems,
          totalPages: _ctx.totalPages
        }, () => [
          createTextVNode(" \u5171 " + toDisplayString(_ctx.totalItems) + " \u6761\u6570\u636E ", 1)
        ])
      ], 2)) : createCommentVNode("", true),
      _ctx.innerOptions.jumpPage ? (openBlock(), createElementBlock("li", {
        key: 5,
        class: normalizeClass({
          [_ctx.styles.jump]: true
        })
      }, [
        withDirectives(createElementVNode("input", {
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.jumpTo = $event),
          class: normalizeClass({
            [_ctx.styles.jumpInput]: true
          }),
          onKeyup: _cache[5] || (_cache[5] = withKeys(($event) => _ctx.selectPage(_ctx.jumpTo), ["enter"]))
        }, null, 34), [
          [vModelText, _ctx.jumpTo]
        ]),
        createElementVNode("span", {
          class: normalizeClass({
            [_ctx.styles.jumpBtn]: true
          }),
          onClick: _cache[6] || (_cache[6] = ($event) => _ctx.selectPage(_ctx.jumpTo))
        }, " \u8DF3\u9875 ", 2)
      ], 2)) : createCommentVNode("", true)
    ], 2)
  ], 2);
}
var Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Pagination };
