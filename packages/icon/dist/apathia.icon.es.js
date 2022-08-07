import { defineComponent, computed, h } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faInfoCircle, faExclamationTriangle, faExclamation, faCheck, faTimes, faChevronCircleDown, faChevronCircleLeft, faChevronCircleRight, faChevronCircleUp, faSearch, faSpinner, faPlus, faMinus, faSortAmountDown, faSortAmountUp, faChevronDown, faChevronUp, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faArrowDown, faCaretRight, faEye, faRedoAlt, faUndoAlt, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
library.add(faUserSecret, faInfoCircle, faExclamationTriangle, faExclamation, faQuestionCircle, faCheck, faTimes, faChevronCircleDown, faChevronCircleLeft, faChevronCircleRight, faChevronCircleUp, faSearch, faSpinner, faPlus, faMinus, faSortAmountDown, faSortAmountUp, faChevronDown, faChevronUp, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faArrowDown, faCaretRight, faEye, faRedoAlt, faUndoAlt, faCopy);
var Icon = defineComponent({
  name: "Icon",
  components: {
    FontAwesomeIcon
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
    const key = computed(() => props.name[props.name.length - 1]);
    return () => h(FontAwesomeIcon, Object.assign(Object.assign({}, attrs), {
      icon: props.name,
      key: key.value
    }));
  }
});
export { Icon };
