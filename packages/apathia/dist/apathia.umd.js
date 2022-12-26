(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("@apathia/apathia.button"), require("@apathia/apathia.twind"), require("@apathia/apathia.form"), require("@apathia/apathia.icon"), require("@apathia/apathia.input"), require("@apathia/apathia.custom-render"), require("@apathia/apathia.alert"), require("@apathia/apathia.modal"), require("@apathia/apathia.confirm"), require("@apathia/apathia.upload"), require("@apathia/apathia.select"), require("@apathia/apathia.radio"), require("@apathia/apathia.checkbox"), require("@apathia/apathia.loading"), require("@apathia/apathia.hooks"), require("@apathia/apathia.collapse"), require("@apathia/apathia.table"), require("@apathia/apathia.pagination"), require("@apathia/apathia.popper"), require("@apathia/apathia.datepicker"), require("@apathia/apathia.affix"), require("@apathia/apathia.cascader"), require("@apathia/apathia.dropdown"), require("@apathia/apathia.tag"), require("@apathia/apathia.switch"), require("@apathia/apathia.image"), require("@apathia/apathia.navbar"), require("@apathia/apathia.sidenav"), require("@apathia/apathia.slider"), require("@apathia/apathia.transfer"), require("@apathia/apathia.scroll-container"), require("@apathia/apathia.textarea"), require("@apathia/apathia.tabs")) : typeof define === "function" && define.amd ? define(["exports", "@apathia/apathia.button", "@apathia/apathia.twind", "@apathia/apathia.form", "@apathia/apathia.icon", "@apathia/apathia.input", "@apathia/apathia.custom-render", "@apathia/apathia.alert", "@apathia/apathia.modal", "@apathia/apathia.confirm", "@apathia/apathia.upload", "@apathia/apathia.select", "@apathia/apathia.radio", "@apathia/apathia.checkbox", "@apathia/apathia.loading", "@apathia/apathia.hooks", "@apathia/apathia.collapse", "@apathia/apathia.table", "@apathia/apathia.pagination", "@apathia/apathia.popper", "@apathia/apathia.datepicker", "@apathia/apathia.affix", "@apathia/apathia.cascader", "@apathia/apathia.dropdown", "@apathia/apathia.tag", "@apathia/apathia.switch", "@apathia/apathia.image", "@apathia/apathia.navbar", "@apathia/apathia.sidenav", "@apathia/apathia.slider", "@apathia/apathia.transfer", "@apathia/apathia.scroll-container", "@apathia/apathia.textarea", "@apathia/apathia.tabs"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.apathia = {}, global.button, global.twind, global.form, global.icon, global.input, global["custom-render"], global.alert, global.modal, global.confirm, global.upload, global.select, global.radio, global.checkbox, global.loading, global.hooks, global.collapse, global.table, global.pagination, global.popper, global.datepicker, global.affix, global.cascader, global.dropdown, global.tag, global["switch"], global.image, global.navbar, global.sidenav, global.slider, global.transfer, global["scroll-container"], global.textarea, global.tabs));
})(this, function(exports2, apathia_button, apathia_twind, apathia_form, apathia_icon, apathia_input, apathia_customRender, apathia_alert, apathia_modal, apathia_confirm, apathia_upload, apathia_select, apathia_radio, apathia_checkbox, apathia_loading, apathia_hooks, apathia_collapse, apathia_table, apathia_pagination, apathia_popper, apathia_datepicker, apathia_affix, apathia_cascader, apathia_dropdown, apathia_tag, apathia_switch, apathia_image, apathia_navbar, apathia_sidenav, apathia_slider, apathia_transfer, apathia_scrollContainer, apathia_textarea, apathia_tabs) {
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
  Object.keys(apathia_affix).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_affix[k];
        }
      });
  });
  Object.keys(apathia_cascader).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_cascader[k];
        }
      });
  });
  Object.keys(apathia_dropdown).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_dropdown[k];
        }
      });
  });
  Object.keys(apathia_tag).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_tag[k];
        }
      });
  });
  Object.keys(apathia_switch).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_switch[k];
        }
      });
  });
  Object.keys(apathia_image).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_image[k];
        }
      });
  });
  Object.keys(apathia_navbar).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_navbar[k];
        }
      });
  });
  Object.keys(apathia_sidenav).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_sidenav[k];
        }
      });
  });
  Object.keys(apathia_slider).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_slider[k];
        }
      });
  });
  Object.keys(apathia_transfer).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_transfer[k];
        }
      });
  });
  Object.keys(apathia_scrollContainer).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_scrollContainer[k];
        }
      });
  });
  Object.keys(apathia_textarea).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_textarea[k];
        }
      });
  });
  Object.keys(apathia_tabs).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return apathia_tabs[k];
        }
      });
  });
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
