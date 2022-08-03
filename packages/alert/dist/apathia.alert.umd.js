(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@apathia/apathia.twind"), require("@apathia/apathia.shared"), require("@apathia/apathia.icon")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@apathia/apathia.twind", "@apathia/apathia.shared", "@apathia/apathia.icon"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.alert = {}, global.Vue, global.twind, global.shared, global.icon));
})(this, function(exports2, vue, apathia_twind, apathia_shared, apathia_icon) {
  "use strict";
  const iconClassMap = {
    info: ["fa", "info-circle"],
    warning: ["fa", "exclamation-triangle"],
    success: ["fa", "check"],
    danger: ["fa", "exclamation"],
    default: ["fa", "info-circle"]
  };
  const BaseAlert = vue.defineComponent({
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
      vue.onMounted(resetTimer);
      const iconClass = props.iconClass.length > 0 ? props.iconClass : iconClassMap[props.type];
      const renderIcon = props.showIcon && (iconClass === null || iconClass === void 0 ? void 0 : iconClass.length) ? vue.createVNode("div", {
        "class": iconWrap
      }, [vue.createVNode(apathia_icon.Icon, {
        "name": iconClass
      }, null)]) : null;
      const renderDelIcon = props.duration === 0 && props.showClose ? vue.createVNode("span", {
        "class": delIcon,
        "onClick": close
      }, [vue.createTextVNode("\u2715")]) : null;
      const rendercontent = vue.createVNode("p", {
        "class": contentClass
      }, [props.title && vue.createVNode("p", {
        "class": titleClass
      }, [props.title]), props.message && vue.createVNode("p", {
        "class": messageClass
      }, [props.message])]);
      const render = props.render ? props.render({
        close
      }) : [renderIcon, rendercontent, renderDelIcon];
      return () => vue.createVNode("div", {
        "class": layout,
        "onMouseenter": clearTimer,
        "onMouseleave": resetTimer
      }, [render]);
    }
  });
  function initStyle(type) {
    const Theme = {
      info: {
        layout: apathia_twind.style`bg-gray-100 text-gray-700 bg-opacity-90 border(1 gray-300)`
      },
      danger: {
        layout: apathia_twind.style`bg-red-100 text-red-700 bg-opacity-90 border(1 red-300)`
      },
      success: {
        layout: apathia_twind.style`bg-green-100 text-green-700 bg-opacity-90 border(1 green-300)`
      },
      warning: {
        layout: apathia_twind.style`bg-yellow-100 text-yellow-700 bg-opacity-90 border(1 yellow-300)`
      },
      default: {
        layout: apathia_twind.style`bg-brand-100 text-brand-700 bg-opacity-90 border(1 brand-300)`
      }
    };
    const theme = Theme[type] || Theme.default;
    const layout = apathia_twind.tw`${theme.layout} ${apathia_twind.apply`p-2.5 rounded-md flex mt-2 duration-300`}`;
    const iconWrap = apathia_twind.style`flex-shrink-0 w-4 mr-2`;
    const delIcon = apathia_twind.style`ml-2 cursor-pointer hover:(text-red-500)`;
    const contentClass = apathia_twind.style`inline-block font-normal flex-grow break-all`;
    const titleClass = apathia_twind.style`text-lg`;
    const messageClass = apathia_twind.style`text-xs leading-normal`;
    return {
      layout,
      iconWrap,
      delIcon,
      contentClass,
      titleClass,
      messageClass
    };
  }
  const AlertContainer = vue.defineComponent({
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
      const rootClass = apathia_twind.style`left-1/2 -translate-x-1/2 w-96 fixed z-alert top-1` + " alert-open";
      const transitionGroupClass = {
        "enter-from-class": apathia_twind.tw`opacity-0`,
        "leave-to-class": apathia_twind.tw`opacity-0`,
        "leave-active-class": apathia_twind.tw`absolute w-full`
      };
      return () => vue.h("div", {
        class: rootClass
      }, [vue.h(vue.TransitionGroup, Object.assign(Object.assign({}, transitionGroupClass), {
        tag: "div"
      }), {
        default: () => props.alertList.map((option) => vue.h(BaseAlert, Object.assign(Object.assign({}, option.props), {
          key: option.id,
          onClose: () => {
            remove2(option.id);
          }
        })))
      })]);
    }
  });
  const alertList = vue.ref([]);
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
      apathia_shared.mountComponent(vue.h(AlertContainer, {
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
    return vue.inject(key || alertKey);
  }
  exports2.toast = Alert;
  exports2.toastInstall = toastInstall;
  exports2.useToast = useToast;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
