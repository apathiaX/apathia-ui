(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("@apathia/apathia.button"), require("@apathia/apathia.twind"), require("@apathia/apathia.form"), require("@apathia/apathia.icon"), require("@apathia/apathia.input"), require("@apathia/apathia.custom-render"), require("@apathia/apathia.alert"), require("@apathia/apathia.modal"), require("@apathia/apathia.confirm"), require("@apathia/apathia.upload"), require("@apathia/apathia.select"), require("@apathia/apathia.radio"), require("@apathia/apathia.checkbox"), require("@apathia/apathia.loading"), require("@apathia/apathia.hooks"), require("@apathia/apathia.collapse"), require("@apathia/apathia.table"), require("@apathia/apathia.pagination"), require("@apathia/apathia.popper"), require("@apathia/apathia.datepicker")) : typeof define === "function" && define.amd ? define(["exports", "@apathia/apathia.button", "@apathia/apathia.twind", "@apathia/apathia.form", "@apathia/apathia.icon", "@apathia/apathia.input", "@apathia/apathia.custom-render", "@apathia/apathia.alert", "@apathia/apathia.modal", "@apathia/apathia.confirm", "@apathia/apathia.upload", "@apathia/apathia.select", "@apathia/apathia.radio", "@apathia/apathia.checkbox", "@apathia/apathia.loading", "@apathia/apathia.hooks", "@apathia/apathia.collapse", "@apathia/apathia.table", "@apathia/apathia.pagination", "@apathia/apathia.popper", "@apathia/apathia.datepicker"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.apathia = {}, global.button, global.twind, global.form, global.icon, global.input, global["custom-render"], global.alert, global.modal, global.confirm, global.upload, global.select, global.radio, global.checkbox, global.loading, global.hooks, global.collapse, global.table, global.pagination, global.popper, global.datepicker));
})(this, function(exports2, apathia_button, apathia_twind, apathia_form, apathia_icon, apathia_input, apathia_customRender, apathia_alert, apathia_modal, apathia_confirm, apathia_upload, apathia_select, apathia_radio, apathia_checkbox, apathia_loading, apathia_hooks, apathia_collapse, apathia_table, apathia_pagination, apathia_popper, apathia_datepicker) {
  "use strict";
  Object.keys(apathia_button).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_button[k];
        }
      });
  });
  Object.keys(apathia_twind).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_twind[k];
        }
      });
  });
  Object.keys(apathia_form).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_form[k];
        }
      });
  });
  Object.keys(apathia_icon).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_icon[k];
        }
      });
  });
  Object.keys(apathia_input).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_input[k];
        }
      });
  });
  Object.keys(apathia_customRender).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_customRender[k];
        }
      });
  });
  Object.keys(apathia_alert).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_alert[k];
        }
      });
  });
  Object.keys(apathia_modal).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_modal[k];
        }
      });
  });
  Object.keys(apathia_confirm).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_confirm[k];
        }
      });
  });
  Object.keys(apathia_upload).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_upload[k];
        }
      });
  });
  Object.keys(apathia_select).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_select[k];
        }
      });
  });
  Object.keys(apathia_radio).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_radio[k];
        }
      });
  });
  Object.keys(apathia_checkbox).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_checkbox[k];
        }
      });
  });
  Object.keys(apathia_loading).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_loading[k];
        }
      });
  });
  Object.keys(apathia_hooks).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_hooks[k];
        }
      });
  });
  Object.keys(apathia_collapse).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_collapse[k];
        }
      });
  });
  Object.keys(apathia_table).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_table[k];
        }
      });
  });
  Object.keys(apathia_pagination).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_pagination[k];
        }
      });
  });
  Object.keys(apathia_popper).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_popper[k];
        }
      });
  });
  Object.keys(apathia_datepicker).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_datepicker[k];
        }
      });
  });
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
