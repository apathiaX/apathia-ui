import { inject, computed, unref, getCurrentInstance, shallowRef, reactive, watchEffect, isRef, onMounted, onUnmounted, ref, watch } from "vue";
import { noop, unrefElement } from "@apathia/apathia.shared";
function useInjectProp(injectKey, injectDefault, propRef) {
  const injectValue = inject(injectKey, injectDefault);
  const finalValue = computed(() => {
    return propRef && unref(propRef) !== void 0 ? unref(propRef) : unref(injectValue);
  });
  return finalValue;
}
const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
function useAttrs(params = {}) {
  const { excludeListeners = false, excludeKeys = [] } = params;
  const instance = getCurrentInstance();
  const attrs = shallowRef({});
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
  if (!instance) {
    console.warn("[useAttrs]\u53EA\u80FD\u5728setup\u65B9\u6CD5\u4E2D\u4F7F\u7528");
    return attrs;
  }
  instance.attrs = reactive(instance.attrs);
  watchEffect(() => {
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
  let stop = noop;
  if (!target) {
    return stop;
  }
  if (isRef(target) && unref(target) === null) {
    onMounted(() => {
      const el = unref(target);
      if (!el) {
        return;
      }
      el.addEventListener(event, listener, options);
      stop = () => {
        el.removeEventListener(event, listener, options);
      };
    });
  } else {
    const el = unref(target);
    el.addEventListener(event, listener, options);
    stop = () => {
      el.removeEventListener(event, listener, options);
    };
  }
  if (getCurrentInstance()) {
    onUnmounted(stop);
  }
  return stop;
}
function onClickOutside(target, handler) {
  const shouldListen = ref(true);
  const listener = (event) => {
    const el = unrefElement(target);
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
      const el = unrefElement(target);
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
  const stopWatch = watch(() => unrefElement(target), (el) => {
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
  onUnmounted(stop);
  return {
    isSupported,
    stop
  };
}
function useToggle(initial) {
  const res = ref(!!initial);
  const toggle = () => {
    res.value = !res.value;
  };
  const setShow = (value) => {
    res.value = value;
  };
  return [res, toggle, setShow];
}
export { onClickOutside, useAttrs, useEventListener, useInjectProp, useResizeObserver, useToggle };
