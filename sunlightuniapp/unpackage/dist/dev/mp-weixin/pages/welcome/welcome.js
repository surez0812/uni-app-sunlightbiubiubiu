(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/welcome/welcome"],{

/***/ 66:
/*!****************************************************************************************************************************!*\
  !*** /Users/surezhang/work/BaZiWebsite/CascadeProjects/uniapp/sunlightuniapp/main.js?{"page":"pages%2Fwelcome%2Fwelcome"} ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _welcome = _interopRequireDefault(__webpack_require__(/*! ./pages/welcome/welcome.vue */ 67));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_welcome.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 67:
/*!*********************************************************************************************************!*\
  !*** /Users/surezhang/work/BaZiWebsite/CascadeProjects/uniapp/sunlightuniapp/pages/welcome/welcome.vue ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _welcome_vue_vue_type_template_id_614d9068___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.vue?vue&type=template&id=614d9068& */ 68);
/* harmony import */ var _welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.vue?vue&type=script&lang=js& */ 70);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.vue?vue&type=style&index=0&lang=scss& */ 52);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 44);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _welcome_vue_vue_type_template_id_614d9068___WEBPACK_IMPORTED_MODULE_0__["render"],
  _welcome_vue_vue_type_template_id_614d9068___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _welcome_vue_vue_type_template_id_614d9068___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/welcome/welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/*!****************************************************************************************************************************************!*\
  !*** /Users/surezhang/work/BaZiWebsite/CascadeProjects/uniapp/sunlightuniapp/pages/welcome/welcome.vue?vue&type=template&id=614d9068& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_template_id_614d9068___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./welcome.vue?vue&type=template&id=614d9068& */ 69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_template_id_614d9068___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_template_id_614d9068___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_template_id_614d9068___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_template_id_614d9068___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 69:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/surezhang/work/BaZiWebsite/CascadeProjects/uniapp/sunlightuniapp/pages/welcome/welcome.vue?vue&type=template&id=614d9068& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.birth &&
    _vm.todayAdvice.bazi.birth.year
      ? _vm.getWuxingColor(
          _vm.tianganWuxing[_vm.todayAdvice.bazi.birth.year.text[0]]
        )
      : null
  var m1 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.birth &&
    _vm.todayAdvice.bazi.birth.year
      ? _vm.getWuxingColor(
          _vm.dizhiWuxing[_vm.todayAdvice.bazi.birth.year.text[1]]
        )
      : null
  var m2 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.birth &&
    _vm.todayAdvice.bazi.birth.month
      ? _vm.getWuxingColor(
          _vm.tianganWuxing[_vm.todayAdvice.bazi.birth.month.text[0]]
        )
      : null
  var m3 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.birth &&
    _vm.todayAdvice.bazi.birth.month
      ? _vm.getWuxingColor(
          _vm.dizhiWuxing[_vm.todayAdvice.bazi.birth.month.text[1]]
        )
      : null
  var m4 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.birth &&
    _vm.todayAdvice.bazi.birth.day
      ? _vm.getWuxingColor(
          _vm.tianganWuxing[_vm.todayAdvice.bazi.birth.day.text[0]]
        )
      : null
  var m5 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.birth &&
    _vm.todayAdvice.bazi.birth.day
      ? _vm.getWuxingColor(
          _vm.dizhiWuxing[_vm.todayAdvice.bazi.birth.day.text[1]]
        )
      : null
  var m6 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.birth &&
    _vm.todayAdvice.bazi.birth.hour
      ? _vm.getWuxingColor(
          _vm.tianganWuxing[_vm.todayAdvice.bazi.birth.hour.text[0]]
        )
      : null
  var m7 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.birth &&
    _vm.todayAdvice.bazi.birth.hour
      ? _vm.getWuxingColor(
          _vm.dizhiWuxing[_vm.todayAdvice.bazi.birth.hour.text[1]]
        )
      : null
  var m8 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.today &&
    _vm.todayAdvice.bazi.today.year
      ? _vm.getWuxingColor(
          _vm.tianganWuxing[_vm.todayAdvice.bazi.today.year.text[0]]
        )
      : null
  var m9 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.today &&
    _vm.todayAdvice.bazi.today.year
      ? _vm.getWuxingColor(
          _vm.dizhiWuxing[_vm.todayAdvice.bazi.today.year.text[1]]
        )
      : null
  var m10 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.today &&
    _vm.todayAdvice.bazi.today.month
      ? _vm.getWuxingColor(
          _vm.tianganWuxing[_vm.todayAdvice.bazi.today.month.text[0]]
        )
      : null
  var m11 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.today &&
    _vm.todayAdvice.bazi.today.month
      ? _vm.getWuxingColor(
          _vm.dizhiWuxing[_vm.todayAdvice.bazi.today.month.text[1]]
        )
      : null
  var m12 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.today &&
    _vm.todayAdvice.bazi.today.day
      ? _vm.getWuxingColor(
          _vm.tianganWuxing[_vm.todayAdvice.bazi.today.day.text[0]]
        )
      : null
  var m13 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.today &&
    _vm.todayAdvice.bazi.today.day
      ? _vm.getWuxingColor(
          _vm.dizhiWuxing[_vm.todayAdvice.bazi.today.day.text[1]]
        )
      : null
  var m14 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.today &&
    _vm.todayAdvice.bazi.today.hour
      ? _vm.getWuxingColor(
          _vm.tianganWuxing[_vm.todayAdvice.bazi.today.hour.text[0]]
        )
      : null
  var m15 =
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi &&
    _vm.todayAdvice.bazi.today &&
    _vm.todayAdvice.bazi.today.hour
      ? _vm.getWuxingColor(
          _vm.dizhiWuxing[_vm.todayAdvice.bazi.today.hour.text[1]]
        )
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1,
        m2: m2,
        m3: m3,
        m4: m4,
        m5: m5,
        m6: m6,
        m7: m7,
        m8: m8,
        m9: m9,
        m10: m10,
        m11: m11,
        m12: m12,
        m13: m13,
        m14: m14,
        m15: m15,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 70:
/*!**********************************************************************************************************************************!*\
  !*** /Users/surezhang/work/BaZiWebsite/CascadeProjects/uniapp/sunlightuniapp/pages/welcome/welcome.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./welcome.vue?vue&type=script&lang=js& */ 71);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/surezhang/work/BaZiWebsite/CascadeProjects/uniapp/sunlightuniapp/pages/welcome/welcome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 28));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 31));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      userInfo: {},
      weatherInfo: {},
      todayAdvice: {},
      loading: true,
      todayDate: new Date().toLocaleDateString(),
      tianganWuxing: {
        '甲': '木',
        '乙': '木',
        '丙': '火',
        '丁': '火',
        '戊': '土',
        '己': '土',
        '庚': '金',
        '辛': '金',
        '壬': '水',
        '癸': '水'
      },
      dizhiWuxing: {
        '子': '水',
        '丑': '土',
        '寅': '木',
        '卯': '木',
        '辰': '土',
        '巳': '火',
        '午': '火',
        '未': '土',
        '申': '金',
        '酉': '金',
        '戌': '土',
        '亥': '水'
      }
    };
  },
  onLoad: function onLoad() {
    this.initData();

    // 调试五行类名
    console.log('五行类名测试:');
    console.log('木:', this.getWuxingClass('木'));
    console.log('火:', this.getWuxingClass('火'));
    console.log('土:', this.getWuxingClass('土'));
    console.log('金:', this.getWuxingClass('金'));
    console.log('水:', this.getWuxingClass('水'));
  },
  onShow: function onShow() {
    // 页面显示时刷新数据
    this.refreshData();
  },
  methods: {
    refreshData: function refreshData() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var db, userInfoRes, targetRecord, newUserInfo, sortedData;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // 获取最新的用户信息
                db = uniCloud.database();
                console.log('开始查询最新用户信息...');

                // 直接获取所有记录
                _context.next = 5;
                return db.collection('user_info').get();
              case 5:
                userInfoRes = _context.sent;
                if (!(userInfoRes.result.data && userInfoRes.result.data.length > 0)) {
                  _context.next = 17;
                  break;
                }
                // 手动查找ID为 "67be6402f2949cf72166b325" 的记录
                targetRecord = userInfoRes.result.data.find(function (record) {
                  return record._id === "67be6402f2949cf72166b325";
                });
                if (targetRecord) {
                  newUserInfo = targetRecord;
                } else {
                  // 如果找不到特定ID的记录，则使用排序后的第一条
                  console.log('未找到目标记录，使用排序后的第一条');

                  // 客户端排序，确保获取最新记录
                  sortedData = userInfoRes.result.data.sort(function (a, b) {
                    // 确保数值比较，将字符串转换为数字
                    var dateA = typeof a.create_date === 'string' ? parseInt(a.create_date) : a.create_date;
                    var dateB = typeof b.create_date === 'string' ? parseInt(b.create_date) : b.create_date;
                    return dateB - dateA;
                  });
                  newUserInfo = sortedData[0];
                }

                // 检查生日信息是否有变化
                if (!(_this.userInfo.birthday !== newUserInfo.birthday || _this.userInfo.birthTime !== newUserInfo.birthTime)) {
                  _context.next = 15;
                  break;
                }
                console.log('生日信息已更新，旧信息:', _this.userInfo.birthday, _this.userInfo.birthTime, '新信息:', newUserInfo.birthday, newUserInfo.birthTime);
                _this.userInfo = newUserInfo;

                // 重新获取今日建议
                if (!_this.userInfo.birthday) {
                  _context.next = 15;
                  break;
                }
                _context.next = 15;
                return _this.getTodayAdvice();
              case 15:
                _context.next = 18;
                break;
              case 17:
                console.log('未找到用户信息记录');
              case 18:
                _context.next = 23;
                break;
              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](0);
                console.error('刷新数据失败:', _context.t0);
              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 20]]);
      }))();
    },
    initData: function initData() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var db, userInfoRes, targetRecord, sortedData;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                // 获取用户信息
                db = uniCloud.database();
                console.log('初始化：开始查询用户信息...');

                // 直接获取所有记录
                _context2.next = 5;
                return db.collection('user_info').get();
              case 5:
                userInfoRes = _context2.sent;
                if (!(userInfoRes.result.data && userInfoRes.result.data.length > 0)) {
                  _context2.next = 20;
                  break;
                }
                // 手动查找ID为 "67be6402f2949cf72166b325" 的记录
                targetRecord = userInfoRes.result.data.find(function (record) {
                  return record._id === "67be6402f2949cf72166b325";
                });
                if (targetRecord) {
                  _this2.userInfo = targetRecord;
                } else {
                  // 如果找不到特定ID的记录，则使用排序后的第一条
                  console.log('未找到目标记录，使用排序后的第一条');

                  // 客户端排序，确保获取最新记录
                  sortedData = userInfoRes.result.data.sort(function (a, b) {
                    // 确保数值比较，将字符串转换为数字
                    var dateA = typeof a.create_date === 'string' ? parseInt(a.create_date) : a.create_date;
                    var dateB = typeof b.create_date === 'string' ? parseInt(b.create_date) : b.create_date;
                    return dateB - dateA;
                  });
                  _this2.userInfo = sortedData[0];
                }
                console.log('初始化：生日信息:', _this2.userInfo.birthday, _this2.userInfo.birthTime);

                // 获取今日建议
                if (!_this2.userInfo.birthday) {
                  _context2.next = 15;
                  break;
                }
                _context2.next = 13;
                return _this2.getTodayAdvice();
              case 13:
                _context2.next = 16;
                break;
              case 15:
                console.log('初始化：生日信息不完整，无法获取今日建议');
              case 16:
                _context2.next = 18;
                return _this2.getLocation();
              case 18:
                _context2.next = 22;
                break;
              case 20:
                // 如果没有用户信息，跳转到生日设置页面
                uni.showToast({
                  title: '请先设置生日信息',
                  icon: 'none',
                  duration: 2000
                });
                setTimeout(function () {
                  uni.navigateTo({
                    url: '/pages/birthday/birthday'
                  });
                }, 1000);
              case 22:
                _context2.next = 28;
                break;
              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](0);
                console.error('初始化数据失败:', _context2.t0);
                uni.showToast({
                  title: '数据加载失败',
                  icon: 'none'
                });
              case 28:
                _context2.prev = 28;
                _this2.loading = false;
                return _context2.finish(28);
              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 24, 28, 31]]);
      }))();
    },
    getTodayAdvice: function getTodayAdvice() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var res, error;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!_this3.userInfo.birthday || !_this3.userInfo.birthTime)) {
                  _context3.next = 3;
                  break;
                }
                console.log('没有生日信息，无法获取建议');
                return _context3.abrupt("return");
              case 3:
                _context3.prev = 3;
                console.log('开始获取今日建议，参数:', {
                  birthday: _this3.userInfo.birthday,
                  birthTime: _this3.userInfo.birthTime
                });
                _context3.next = 7;
                return uniCloud.callFunction({
                  name: 'getTodayAdvice',
                  data: {
                    birthday: _this3.userInfo.birthday,
                    birthTime: _this3.userInfo.birthTime
                  }
                });
              case 7:
                res = _context3.sent;
                console.log('今日建议响应:', res);
                if (res.result && res.result.success) {
                  console.log('获取到今日建议:', res.result.data);
                  _this3.todayAdvice = res.result.data;

                  // 调试五行数据
                  if (_this3.todayAdvice.bazi && _this3.todayAdvice.bazi.birth) {
                    console.log('出生年干支五行:', _this3.todayAdvice.bazi.birth.year);
                    console.log('出生月干支五行:', _this3.todayAdvice.bazi.birth.month);
                    console.log('出生日干支五行:', _this3.todayAdvice.bazi.birth.day);
                    console.log('出生时干支五行:', _this3.todayAdvice.bazi.birth.hour);
                  }
                } else {
                  error = res.result ? res.result.error : '未知错误';
                  console.error('获取今日建议失败:', error);
                  uni.showToast({
                    title: '获取今日建议失败',
                    icon: 'none',
                    duration: 2000
                  });
                }
                _context3.next = 16;
                break;
              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](3);
                console.error('获取今日建议失败:', _context3.t0);
                uni.showToast({
                  title: '获取今日建议失败，请重试',
                  icon: 'none',
                  duration: 2000
                });
              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 12]]);
      }))();
    },
    getLocation: function getLocation() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var locationRes, weatherRes, error;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return uni.authorize({
                  scope: 'scope.userLocation'
                });
              case 3:
                _context4.next = 5;
                return uni.getLocation({
                  type: 'gcj02'
                });
              case 5:
                locationRes = _context4.sent;
                console.log('获取到位置信息:', locationRes);
                if (!(!locationRes.latitude || !locationRes.longitude)) {
                  _context4.next = 10;
                  break;
                }
                console.error('位置信息不完整');
                throw new Error('获取位置信息失败');
              case 10:
                _context4.next = 12;
                return uniCloud.callFunction({
                  name: 'getWeather',
                  data: {
                    latitude: Number(locationRes.latitude),
                    longitude: Number(locationRes.longitude)
                  }
                });
              case 12:
                weatherRes = _context4.sent;
                console.log('天气响应:', weatherRes);
                if (!(weatherRes.result && weatherRes.result.success && weatherRes.result.now)) {
                  _context4.next = 19;
                  break;
                }
                _this4.weatherInfo = weatherRes.result;
                console.log('成功获取天气信息:', _this4.weatherInfo);
                _context4.next = 23;
                break;
              case 19:
                error = weatherRes.result ? weatherRes.result.error : '未知错误';
                console.error('获取天气失败:', error);
                // 使用默认位置重试
                _context4.next = 23;
                return _this4.getWeatherWithDefaultLocation();
              case 23:
                _context4.next = 30;
                break;
              case 25:
                _context4.prev = 25;
                _context4.t0 = _context4["catch"](0);
                console.log('获取位置或天气失败：', _context4.t0);
                // 位置获取失败时，使用默认位置
                _context4.next = 30;
                return _this4.getWeatherWithDefaultLocation();
              case 30:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 25]]);
      }))();
    },
    getWeatherWithDefaultLocation: function getWeatherWithDefaultLocation() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var weatherRes, error;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                console.log('使用默认位置获取天气');
                _context5.next = 4;
                return uniCloud.callFunction({
                  name: 'getWeather',
                  data: {
                    // 显式传入默认位置信息
                    latitude: 39.90960456049752,
                    longitude: 116.3972282409668,
                    city: '北京市'
                  }
                });
              case 4:
                weatherRes = _context5.sent;
                console.log('默认位置天气响应:', weatherRes);
                if (weatherRes.result && weatherRes.result.success && weatherRes.result.now) {
                  _this5.weatherInfo = weatherRes.result;
                  console.log('成功获取默认位置天气信息:', _this5.weatherInfo);
                } else {
                  error = weatherRes.result ? weatherRes.result.error : '未知错误';
                  console.error('获取默认位置天气失败:', error);
                  uni.showToast({
                    title: error.includes('API') ? '天气服务暂时不可用' : '获取天气信息失败',
                    icon: 'none',
                    duration: 2000
                  });
                }
                _context5.next = 13;
                break;
              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                console.error('获取天气失败:', _context5.t0);
                uni.showToast({
                  title: '获取天气信息失败',
                  icon: 'none',
                  duration: 2000
                });
              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }))();
    },
    getElementalPouch: function getElementalPouch() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var _this6$weatherInfo, _this6$weatherInfo$no, _this6$weatherInfo2, birthParts, birthTimeParts, yearGanzhi, monthGanzhi, dayGanzhi, hourGanzhi, baziData, requestData, res, _res$result$data, _res$result$data2, id, _res$result, errorMsg;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(!_this6.userInfo.birthday || !_this6.userInfo.birthTime)) {
                  _context6.next = 3;
                  break;
                }
                uni.showToast({
                  title: '请先设置生日信息',
                  icon: 'none'
                });
                return _context6.abrupt("return");
              case 3:
                _context6.prev = 3;
                uni.showLoading({
                  title: '获取元气锦囊中...'
                });

                // 输出 todayAdvice 对象结构
                console.log('todayAdvice 对象:', JSON.stringify(_this6.todayAdvice));

                // 解析生日信息
                birthParts = _this6.userInfo.birthday.split('-');
                birthTimeParts = _this6.userInfo.birthTime.split(':'); // 获取八字信息
                yearGanzhi = '甲子';
                monthGanzhi = '乙丑';
                dayGanzhi = '丙寅';
                hourGanzhi = '丁卯'; // 如果有八字信息，则使用
                try {
                  if (_this6.todayAdvice && _this6.todayAdvice.bazi && _this6.todayAdvice.bazi.birth) {
                    baziData = _this6.todayAdvice.bazi.birth; // 年柱
                    if (baziData.year && baziData.year.text) {
                      if (typeof baziData.year.text === 'string') {
                        yearGanzhi = baziData.year.text;
                      } else if (Array.isArray(baziData.year.text)) {
                        yearGanzhi = baziData.year.text.join('');
                      } else if (baziData.year.text[0] && baziData.year.text[1]) {
                        yearGanzhi = baziData.year.text[0] + baziData.year.text[1];
                      }
                    }

                    // 月柱
                    if (baziData.month && baziData.month.text) {
                      if (typeof baziData.month.text === 'string') {
                        monthGanzhi = baziData.month.text;
                      } else if (Array.isArray(baziData.month.text)) {
                        monthGanzhi = baziData.month.text.join('');
                      } else if (baziData.month.text[0] && baziData.month.text[1]) {
                        monthGanzhi = baziData.month.text[0] + baziData.month.text[1];
                      }
                    }

                    // 日柱
                    if (baziData.day && baziData.day.text) {
                      if (typeof baziData.day.text === 'string') {
                        dayGanzhi = baziData.day.text;
                      } else if (Array.isArray(baziData.day.text)) {
                        dayGanzhi = baziData.day.text.join('');
                      } else if (baziData.day.text[0] && baziData.day.text[1]) {
                        dayGanzhi = baziData.day.text[0] + baziData.day.text[1];
                      }
                    }

                    // 时柱
                    if (baziData.hour && baziData.hour.text) {
                      if (typeof baziData.hour.text === 'string') {
                        hourGanzhi = baziData.hour.text;
                      } else if (Array.isArray(baziData.hour.text)) {
                        hourGanzhi = baziData.hour.text.join('');
                      } else if (baziData.hour.text[0] && baziData.hour.text[1]) {
                        hourGanzhi = baziData.hour.text[0] + baziData.hour.text[1];
                      }
                    }
                  } else {
                    console.log('没有八字信息，使用默认干支');
                    yearGanzhi = '甲子';
                    monthGanzhi = '乙丑';
                    dayGanzhi = '丙寅';
                    hourGanzhi = '丁卯';
                  }
                } catch (error) {
                  console.error('处理八字信息时出错:', error);
                  yearGanzhi = '甲子';
                  monthGanzhi = '乙丑';
                  dayGanzhi = '丙寅';
                  hourGanzhi = '丁卯';
                }
                console.log('准备调用元气锦囊云函数，用户生日:', _this6.userInfo.birthday);
                console.log('八字信息:', {
                  yearGanzhi: yearGanzhi,
                  monthGanzhi: monthGanzhi,
                  dayGanzhi: dayGanzhi,
                  hourGanzhi: hourGanzhi
                });

                // 准备请求数据
                requestData = {
                  birth_date: _this6.userInfo.birthday,
                  gender: _this6.userInfo.gender || '男',
                  year_ganzhi: yearGanzhi,
                  month_ganzhi: monthGanzhi,
                  day_ganzhi: dayGanzhi,
                  hour_ganzhi: hourGanzhi,
                  weather: ((_this6$weatherInfo = _this6.weatherInfo) === null || _this6$weatherInfo === void 0 ? void 0 : (_this6$weatherInfo$no = _this6$weatherInfo.now) === null || _this6$weatherInfo$no === void 0 ? void 0 : _this6$weatherInfo$no.text) || '晴',
                  location: ((_this6$weatherInfo2 = _this6.weatherInfo) === null || _this6$weatherInfo2 === void 0 ? void 0 : _this6$weatherInfo2.city) || '北京'
                }; // 如果有用户ID，则添加到请求中
                if (_this6.userInfo._id) {
                  requestData.user_id = _this6.userInfo._id;
                }
                console.log('元气锦囊请求数据:', JSON.stringify(requestData));
                _context6.next = 20;
                return uniCloud.callFunction({
                  name: 'getElementalPouch',
                  data: {
                    data: requestData
                  }
                });
              case 20:
                res = _context6.sent;
                console.log('元气锦囊响应结果:', JSON.stringify(res));
                uni.hideLoading();
                if (res.result && (res.result.status === 'success' || res.result.code === 0)) {
                  // 导航到元气锦囊详情页面
                  id = ((_res$result$data = res.result.data) === null || _res$result$data === void 0 ? void 0 : _res$result$data.id) || ((_res$result$data2 = res.result.data) === null || _res$result$data2 === void 0 ? void 0 : _res$result$data2._id);
                  if (id) {
                    uni.navigateTo({
                      url: '/pages/elemental-pouch/detail?id=' + id
                    });
                  } else {
                    uni.showToast({
                      title: '获取元气锦囊成功，但缺少ID',
                      icon: 'none'
                    });
                  }
                } else {
                  errorMsg = ((_res$result = res.result) === null || _res$result === void 0 ? void 0 : _res$result.message) || '获取元气锦囊失败';
                  uni.showToast({
                    title: errorMsg,
                    icon: 'none'
                  });
                }
                _context6.next = 31;
                break;
              case 26:
                _context6.prev = 26;
                _context6.t0 = _context6["catch"](3);
                uni.hideLoading();
                console.error('获取元气锦囊失败:', _context6.t0);
                uni.showToast({
                  title: '获取元气锦囊失败，请重试',
                  icon: 'none'
                });
              case 31:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[3, 26]]);
      }))();
    },
    getWuxingClass: function getWuxingClass(wuxing) {
      console.log('获取五行类名，输入:', wuxing, '类型:', (0, _typeof2.default)(wuxing));
      if (!wuxing) {
        console.log('五行为空');
        return 'none';
      }

      // 确保输入是字符串
      var wuxingStr = String(wuxing).trim();
      switch (wuxingStr) {
        case '木':
          return 'wuxing-mu';
        case '火':
          return 'wuxing-huo';
        case '土':
          return 'wuxing-tu';
        case '金':
          return 'wuxing-jin';
        case '水':
          return 'wuxing-shui';
        default:
          console.log('未匹配到五行:', wuxingStr);
          return 'none';
      }
    },
    getWuxingColor: function getWuxingColor(wuxing) {
      console.log('获取五行颜色，输入:', wuxing, '类型:', (0, _typeof2.default)(wuxing));
      if (!wuxing) {
        console.log('五行为空');
        return '';
      }

      // 确保输入是字符串
      var wuxingStr = String(wuxing).trim();
      switch (wuxingStr) {
        case '木':
          return '#4CD964';
        // 果冻绿
        case '火':
          return '#FF6B6B';
        // 果冻红
        case '土':
          return '#A0522D';
        // 棕色果冻色
        case '金':
          return '#FFD700';
        // 金色果冻色
        case '水':
          return '#56CCF2';
        // 果冻浅蓝
        default:
          console.log('未匹配到五行:', wuxingStr);
          return '';
      }
    },
    goToEditBirthday: function goToEditBirthday() {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                uni.navigateTo({
                  url: '/pages/birthday/birthday'
                });
              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27)["uniCloud"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 52:
/*!*******************************************************************************************************************************************!*\
  !*** /Users/surezhang/work/BaZiWebsite/CascadeProjects/uniapp/sunlightuniapp/pages/welcome/welcome.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./welcome.vue?vue&type=style&index=0&lang=scss& */ 53);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/surezhang/work/BaZiWebsite/CascadeProjects/uniapp/sunlightuniapp/pages/welcome/welcome.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[66,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/welcome/welcome.js.map