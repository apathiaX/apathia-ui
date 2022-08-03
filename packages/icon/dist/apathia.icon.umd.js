(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@fortawesome/vue-fontawesome"), require("@fortawesome/fontawesome-svg-core"), require("@fortawesome/free-solid-svg-icons"), require("@fortawesome/free-regular-svg-icons")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@fortawesome/vue-fontawesome", "@fortawesome/fontawesome-svg-core", "@fortawesome/free-solid-svg-icons", "@fortawesome/free-regular-svg-icons"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.icon = {}, global.Vue, global["@fortawesome/vue-fontawesome"], global["@fortawesome/fontawesome-svg-core"], global["@fortawesome/free-solid-svg-icons"], global["@fortawesome/free-regular-svg-icons"]));
})(this, function(exports2, vue, vueFontawesome, fontawesomeSvgCore, freeSolidSvgIcons, freeRegularSvgIcons) {
  "use strict";
  fontawesomeSvgCore.library.add(freeSolidSvgIcons.faUserSecret, freeSolidSvgIcons.faInfoCircle, freeSolidSvgIcons.faExclamationTriangle, freeSolidSvgIcons.faExclamation, freeRegularSvgIcons.faQuestionCircle, freeSolidSvgIcons.faCheck, freeSolidSvgIcons.faTimes, freeSolidSvgIcons.faChevronCircleDown, freeSolidSvgIcons.faChevronCircleLeft, freeSolidSvgIcons.faChevronCircleRight, freeSolidSvgIcons.faChevronCircleUp, freeSolidSvgIcons.faSearch, freeSolidSvgIcons.faSpinner, freeSolidSvgIcons.faPlus, freeSolidSvgIcons.faMinus, freeSolidSvgIcons.faSortAmountDown, freeSolidSvgIcons.faSortAmountUp, freeSolidSvgIcons.faChevronDown, freeSolidSvgIcons.faChevronUp, freeSolidSvgIcons.faAngleDoubleLeft, freeSolidSvgIcons.faAngleDoubleRight, freeSolidSvgIcons.faAngleLeft, freeSolidSvgIcons.faAngleRight, freeSolidSvgIcons.faArrowDown, freeSolidSvgIcons.faCaretRight, freeSolidSvgIcons.faEye, freeSolidSvgIcons.faRedoAlt, freeSolidSvgIcons.faUndoAlt, freeSolidSvgIcons.faCopy);
  const Icon = vue.defineComponent({
    name: "Icon",
    components: {
      FontAwesomeIcon: vueFontawesome.FontAwesomeIcon
    },
    props: {
      name: {
        type: Array,
        default: () => []
      }
    },
    setup(props, {
      attrs
    }) {
      const key = vue.computed(() => props.name[props.name.length - 1]);
      return () => vue.h(vueFontawesome.FontAwesomeIcon, Object.assign(Object.assign({}, attrs), {
        icon: props.name,
        key: key.value
      }));
    }
  });
  exports2.Icon = Icon;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
