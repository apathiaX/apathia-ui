(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("@apathia/apathia.button"), require("@apathia/apathia.twind"), require("@apathia/apathia.form"), require("@apathia/apathia.icon"), require("@apathia/apathia.input"), require("@apathia/apathia.custom-render"), require("@apathia/apathia.alert"), require("@apathia/apathia.modal"), require("@apathia/apathia.confirm"), require("@apathia/apathia.upload"), require("@apathia/apathia.select"), require("@apathia/apathia.radio"), require("@apathia/apathia.table"), require("@apathia/apathia.checkbox"), require("@apathia/apathia.loading"), require("@apathia/apathia.hooks"), require("@apathia/apathia.collapse")) : typeof define === "function" && define.amd ? define(["exports", "@apathia/apathia.button", "@apathia/apathia.twind", "@apathia/apathia.form", "@apathia/apathia.icon", "@apathia/apathia.input", "@apathia/apathia.custom-render", "@apathia/apathia.alert", "@apathia/apathia.modal", "@apathia/apathia.confirm", "@apathia/apathia.upload", "@apathia/apathia.select", "@apathia/apathia.radio", "@apathia/apathia.table", "@apathia/apathia.checkbox", "@apathia/apathia.loading", "@apathia/apathia.hooks", "@apathia/apathia.collapse"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.apathia = {}, global.button, global.twind, global.form, global.icon, global.input, global["custom-render"], global.alert, global.modal, global.confirm, global.upload, global.select, global.radio, global.table, global.checkbox, global.loading, global.hooks, global.collapse));
})(this, function(exports2, apathia_button, apathia_twind, apathia_form, apathia_icon, apathia_input, apathia_customRender, apathia_alert, apathia_modal, apathia_confirm, apathia_upload, apathia_select, apathia_radio, apathia_table, apathia_checkbox, apathia_loading, apathia_hooks, apathia_collapse) {
  "use strict";
  for (const k in apathia_button) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_button[k]
      });
  }
  for (const k in apathia_twind) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_twind[k]
      });
  }
  for (const k in apathia_form) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_form[k]
      });
  }
  for (const k in apathia_icon) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_icon[k]
      });
  }
  for (const k in apathia_input) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_input[k]
      });
  }
  for (const k in apathia_customRender) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_customRender[k]
      });
  }
  for (const k in apathia_alert) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_alert[k]
      });
  }
  for (const k in apathia_modal) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_modal[k]
      });
  }
  for (const k in apathia_confirm) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_confirm[k]
      });
  }
  for (const k in apathia_upload) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_upload[k]
      });
  }
  for (const k in apathia_select) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_select[k]
      });
  }
  for (const k in apathia_radio) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_radio[k]
      });
  }
  for (const k in apathia_table) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_table[k]
      });
  }
  for (const k in apathia_checkbox) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_checkbox[k]
      });
  }
  for (const k in apathia_loading) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_loading[k]
      });
  }
  for (const k in apathia_hooks) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_hooks[k]
      });
  }
  for (const k in apathia_collapse) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => apathia_collapse[k]
      });
  }
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
