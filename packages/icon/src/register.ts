import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faInfoCircle,
  faExclamationTriangle,
  faExclamation,
  faCheck,
  faTimes,
  faChevronCircleDown,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronCircleUp,
  faSearch,

  // table start
  faSpinner,
  faPlus,
  faMinus,
  faSortAmountDown,
  faSortAmountUp,
  faChevronDown,
  faChevronUp,
  // table end

  // transfer
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  // transfer

  // upload
  faArrowDown,
  // upload,

  // Collapse
  faCaretRight,
  // Collapse

  // ImgPreview
  faEye,
  // ImgPreview

  // Image
  faRedoAlt,
  faUndoAlt,
  faCopy,
  // Image
} from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

// 使用图标前需要先注册
// https://github.com/FortAwesome/vue-fontawesome
library.add(
  faUserSecret,
  faInfoCircle,
  faExclamationTriangle,
  faExclamation,
  faQuestionCircle,
  faCheck,
  faTimes,
  faChevronCircleDown,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronCircleUp,
  faSearch,

  faSpinner,
  faPlus,
  faMinus,
  faSortAmountDown,
  faSortAmountUp,
  faChevronDown,
  faChevronUp,

  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,

  faArrowDown,

  faCaretRight,

  faEye,

  faRedoAlt,
  faUndoAlt,
  faCopy,
)
