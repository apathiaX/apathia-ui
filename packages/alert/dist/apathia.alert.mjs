import { defineComponent, onMounted, createVNode, createTextVNode, h, TransitionGroup, ref, inject } from "vue";
import { style, tw, apply } from "@apathia/apathia.twind";
import { mountComponent } from "@apathia/apathia.shared";
import { Icon } from "@apathia/apathia.icon";
const iconClassMap = {
  info: ["fa", "info-circle"],
  warning: ["fa", "exclamation-triangle"],
  success: ["fa", "check"],
  danger: ["fa", "exclamation"],
  default: ["fa", "info-circle"]
};
const BaseAlert = defineComponent({
  name: "Alert",
  props: {
    type: {
      type: String,
      default: "default"
    },
    duration: {
      type: Number,
      default: 3e3
    },
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    iconClass: {
      type: Array,
      default: () => []
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    render: {
      type: Function
    }
  },
  emits: ["close"],
  setup(props, {
    emit
  }) {
    const {
      layout,
      iconWrap,
      delIcon,
      contentClass,
      titleClass,
      messageClass
    } = initStyle(props.type);
    let timer;
    function close() {
      clearTimer();
      emit("close");
    }
    function clearTimer() {
      clearTimeout(timer);
    }
    function resetTimer() {
      if (props.duration) {
        clearTimer();
        timer = setTimeout(close, props.duration);
      }
    }
    onMounted(resetTimer);
    const iconClass = props.iconClass.length > 0 ? props.iconClass : iconClassMap[props.type];
    const renderIcon = props.showIcon && (iconClass === null || iconClass === void 0 ? void 0 : iconClass.length) ? createVNode("div", {
      "class": iconWrap
    }, [createVNode(Icon, {
      "name": iconClass
    }, null)]) : null;
    const renderDelIcon = props.duration === 0 && props.showClose ? createVNode("span", {
      "class": delIcon,
      "onClick": close
    }, [createTextVNode("\u2715")]) : null;
    const rendercontent = createVNode("p", {
      "class": contentClass
    }, [props.title && createVNode("p", {
      "class": titleClass
    }, [props.title]), props.message && createVNode("p", {
      "class": messageClass
    }, [props.message])]);
    const render = props.render ? props.render({
      close
    }) : [renderIcon, rendercontent, renderDelIcon];
    return () => createVNode("div", {
      "class": layout,
      "onMouseenter": clearTimer,
      "onMouseleave": resetTimer
    }, [render]);
  }
});
function initStyle(type) {
  const Theme = {
    info: {
      layout: style`bg-gray-100 text-gray-700 bg-opacity-90 border(1 gray-300)`
    },
    danger: {
      layout: style`bg-red-100 text-red-700 bg-opacity-90 border(1 red-300)`
    },
    success: {
      layout: style`bg-green-100 text-green-700 bg-opacity-90 border(1 green-300)`
    },
    warning: {
      layout: style`bg-yellow-100 text-yellow-700 bg-opacity-90 border(1 yellow-300)`
    },
    default: {
      layout: style`bg-brand-100 text-brand-700 bg-opacity-90 border(1 brand-300)`
    }
  };
  const theme = Theme[type] || Theme.default;
  const layout = tw`${theme.layout} ${apply`p-2.5 rounded-md flex mt-2 duration-300`}`;
  const iconWrap = style`flex-shrink-0 w-4 mr-2`;
  const delIcon = style`ml-2 cursor-pointer hover:(text-red-500)`;
  const contentClass = style`inline-block font-normal flex-grow break-all`;
  const titleClass = style`text-lg`;
  const messageClass = style`text-xs leading-normal`;
  return {
    layout,
    iconWrap,
    delIcon,
    contentClass,
    titleClass,
    messageClass
  };
}
const AlertContainer = defineComponent({
  name: "AlertContainer",
  props: {
    alertList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["remove"],
  setup(props, {
    emit
  }) {
    const remove2 = (index) => emit("remove", index);
    const rootClass = style`left-1/2 -translate-x-1/2 w-96 fixed z-alert top-1` + " alert-open";
    const transitionGroupClass = {
      "enter-from-class": tw`opacity-0`,
      "leave-to-class": tw`opacity-0`,
      "leave-active-class": tw`absolute w-full`
    };
    return () => h("div", {
      class: rootClass
    }, [h(TransitionGroup, Object.assign(Object.assign({}, transitionGroupClass), {
      tag: "div"
    }), {
      default: () => props.alertList.map((option) => h(BaseAlert, Object.assign(Object.assign({}, option.props), {
        key: option.id,
        onClose: () => {
          remove2(option.id);
        }
      })))
    })]);
  }
});
const alertList = ref([]);
const remove = (id) => {
  const index = alertList.value.findIndex((item) => item.id === id);
  alertList.value.splice(index, 1);
};
const getID = () => `${Date.now()}`;
const Alert = (props) => {
  const id = getID();
  alertList.value.push({
    props,
    id
  });
  if (!document.querySelector(".apathia-alert")) {
    const alertContainerDom = document.createElement("div");
    alertContainerDom.className = "apathia-alert";
    document.body.appendChild(alertContainerDom);
    mountComponent(h(AlertContainer, {
      alertList: alertList.value,
      onRemove: remove
    }), alertContainerDom);
  }
};
Alert.closeAll = () => alertList.value = [];
Alert.info = (title, message, props) => Alert(Object.assign({
  type: "info",
  title,
  message
}, props));
Alert.warning = (title, message, props) => Alert(Object.assign({
  type: "warning",
  title,
  message
}, props));
Alert.danger = (title, message, props) => Alert(Object.assign({
  type: "danger",
  title,
  message
}, props));
Alert.success = (title, message, props) => Alert(Object.assign({
  type: "success",
  title,
  message
}, props));
Alert.default = (title, message, props) => Alert(Object.assign({
  type: "default",
  title,
  message
}, props));
const alertKey = "apathia-toast";
function toastInstall(app, injectKey) {
  app.provide(injectKey || alertKey, Alert);
  app.config.globalProperties.$toast = Alert;
}
function useToast(key) {
  return inject(key || alertKey);
}
export {
  Alert as toast,
  toastInstall,
  useToast
};
