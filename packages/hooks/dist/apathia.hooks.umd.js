(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@apathia/apathia.shared"), require("vue-router"), require("lodash-es")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@apathia/apathia.shared", "vue-router", "lodash-es"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.hooks = {}, global.Vue, global.shared, global["vue-router"], global["lodash-es"]));
})(this, function(exports2, vue, apathia_shared, vueRouter, lodashEs) {
  "use strict";
  function useInjectProp(injectKey, injectDefault, propRef) {
    const injectValue = vue.inject(injectKey, injectDefault);
    const finalValue = vue.computed(() => {
      return propRef && vue.unref(propRef) !== void 0 ? vue.unref(propRef) : vue.unref(injectValue);
    });
    return finalValue;
  }
  const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
  const LISTENER_PREFIX = /^on[A-Z]/;
  function useAttrs(params = {}) {
    const { excludeListeners = false, excludeKeys = [] } = params;
    const instance = vue.getCurrentInstance();
    const attrs = vue.shallowRef({});
    const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
    if (!instance) {
      console.warn("[useAttrs]\u53EA\u80FD\u5728setup\u65B9\u6CD5\u4E2D\u4F7F\u7528");
      return attrs;
    }
    instance.attrs = vue.reactive(instance.attrs);
    vue.watchEffect(() => {
      const res = Object.entries(instance.attrs).reduce((acm, [key, val]) => {
        if (!allExcludeKeys.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))) {
          acm[key] = val;
        }
        return acm;
      }, {});
      attrs.value = res;
    });
    return attrs;
  }
  function useEventListener(...args) {
    let target;
    let event;
    let listener;
    let options;
    if (typeof args[0] === "string") {
      [event, listener, options] = args;
      target = window;
    } else {
      [target, event, listener, options] = args;
    }
    let stop = apathia_shared.noop;
    if (!target) {
      return stop;
    }
    if (vue.isRef(target) && vue.unref(target) === null) {
      vue.onMounted(() => {
        const el = vue.unref(target);
        if (!el) {
          return;
        }
        el.addEventListener(event, listener, options);
        stop = () => {
          el.removeEventListener(event, listener, options);
        };
      });
    } else {
      const el = vue.unref(target);
      el.addEventListener(event, listener, options);
      stop = () => {
        el.removeEventListener(event, listener, options);
      };
    }
    if (vue.getCurrentInstance()) {
      vue.onUnmounted(stop);
    }
    return stop;
  }
  function onClickOutside(target, handler) {
    const shouldListen = vue.ref(true);
    const listener = (event) => {
      const el = apathia_shared.unrefElement(target);
      if (!el || el === event.target || event.composedPath().includes(el) || !shouldListen.value)
        return;
      handler(event);
    };
    const cleanup = [
      useEventListener(window, "click", listener, {
        passive: true,
        capture: true
      }),
      useEventListener(window, "pointerdown", (e) => {
        const el = apathia_shared.unrefElement(target);
        shouldListen.value = !!el && !e.composedPath().includes(el);
      }, { passive: true })
    ];
    const stop = () => cleanup.forEach((fn) => fn());
    return stop;
  }
  function useResizeObserver(target, callback, options = {}) {
    let observer;
    const isSupported = window && "ResizeObserver" in window;
    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = void 0;
      }
    };
    const stopWatch = vue.watch(() => apathia_shared.unrefElement(target), (el) => {
      cleanup();
      if (isSupported && window && el) {
        observer = new ResizeObserver(callback);
        observer === null || observer === void 0 ? void 0 : observer.observe(el, options);
      }
    }, { immediate: true, flush: "post" });
    const stop = () => {
      cleanup();
      stopWatch();
    };
    vue.onUnmounted(stop);
    return {
      isSupported,
      stop
    };
  }
  function useToggle(initial) {
    const res = vue.ref(!!initial);
    const toggle = () => {
      res.value = !res.value;
    };
    const setShow = (value) => {
      res.value = value;
    };
    return [res, toggle, setShow];
  }
  function baseMerge(obj = {}, source, nullSafe = false) {
    if (source == null) {
      return obj;
    }
    const result = {};
    Object.keys(obj).forEach((key) => {
      let val = source[key];
      const useObjVal = nullSafe ? val == null : val === void 0;
      if (useObjVal) {
        val = obj[key];
      }
      result[key] = lodashEs.cloneDeep(val);
    });
    return result;
  }
  function useRouteFetch(filter, fetchData, reduceFilter) {
    const router = vueRouter.useRouter();
    const route = vueRouter.useRoute();
    const reactiveFilter = vue.reactive(baseMerge(filter, route.query));
    const stopWatch = vue.watch(() => [route.query, route.params], ([query]) => {
      updateFilter(query, reactiveFilter, reduceFilter);
      fetchData(route);
    }, { immediate: true });
    vueRouter.onBeforeRouteLeave(() => {
      stopWatch();
    });
    function setQuery(query = {}) {
      const pushRoute = {
        path: route.path,
        query: Object.assign(Object.assign({}, query), { r: new Date().valueOf() })
      };
      router.push(pushRoute);
    }
    function refetch() {
      fetchData(route);
    }
    function resetFilter() {
      Object.keys(filter).forEach((key) => {
        reactiveFilter[key] = filter[key];
      });
    }
    return {
      filter: reactiveFilter,
      setQuery,
      route,
      refetch,
      resetFilter,
      stopWatch
    };
  }
  function updateFilter(query, filter, reduceFilter) {
    if (query == null) {
      return;
    }
    Object.keys(vue.toRaw(filter)).forEach((key) => {
      const val = query[key] == null ? filter[key] : query[key];
      if (reduceFilter) {
        filter[key] = reduceFilter(key, val);
      } else {
        filter[key] = val;
      }
    });
  }
  function useScrollX(translate = true) {
    const contentRef = vue.ref(null);
    let stop = null;
    const listenerWheel = () => {
      if (stop) {
        stop();
      }
      const el = contentRef.value;
      const clientWidth = (el === null || el === void 0 ? void 0 : el.clientWidth) || 0;
      const scrollWidth = (el === null || el === void 0 ? void 0 : el.scrollWidth) || 0;
      if (el && scrollWidth > clientWidth) {
        stop = useEventListener(el, "wheel", wheel, { passive: true });
      }
      if (el && scrollWidth <= clientWidth) {
        if (el)
          el.style.transform = "";
      }
    };
    vue.onUpdated(listenerWheel);
    vue.onMounted(listenerWheel);
    useEventListener("resize", lodashEs.debounce(listenerWheel, 400));
    function getCurrentTranslate() {
      var _a, _b;
      if (translate) {
        const res = /\d+/.exec(((_a = contentRef.value) === null || _a === void 0 ? void 0 : _a.style.transform) || "");
        return res ? +res : 0;
      }
      return ((_b = contentRef.value) === null || _b === void 0 ? void 0 : _b.scrollLeft) || 0;
    }
    function setTranslate(value) {
      const el = contentRef.value;
      if (!el)
        return;
      if (translate) {
        el.style.transform = `translateX(-${value}px)`;
      } else {
        el.scrollLeft = value;
      }
    }
    function wheel(e) {
      const el = contentRef.value;
      const clientWidth = (el === null || el === void 0 ? void 0 : el.clientWidth) || 0;
      const scrollWidth = (el === null || el === void 0 ? void 0 : el.scrollWidth) || 0;
      const maxTranslate = scrollWidth - clientWidth;
      const speed = e.deltaY < 0 ? e.deltaY : -e.deltaY;
      const step = parseInt(`${clientWidth / 3e3 * speed}`, 10);
      const currTranslate = getCurrentTranslate();
      let finalTranslate = currTranslate;
      if (e.deltaY < 0)
        finalTranslate = currTranslate - step < 0 ? 0 : currTranslate - step;
      if (e.deltaY > 0)
        finalTranslate = currTranslate + step > maxTranslate ? maxTranslate : currTranslate + step;
      setTranslate(finalTranslate);
    }
    return {
      contentRef
    };
  }
  exports2.baseMerge = baseMerge;
  exports2.onClickOutside = onClickOutside;
  exports2.useAttrs = useAttrs;
  exports2.useEventListener = useEventListener;
  exports2.useInjectProp = useInjectProp;
  exports2.useResizeObserver = useResizeObserver;
  exports2.useRouteFetch = useRouteFetch;
  exports2.useScrollX = useScrollX;
  exports2.useToggle = useToggle;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
