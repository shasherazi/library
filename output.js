/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Ubuntu', sans-serif;\\n}\\n\\nh1,\\nh2,\\nh3 {\\n  font-family: 'Roboto', sans-serif;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\n.nav {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  height: 40px;\\n  padding: 10px 0;\\n  background-color: #eee;\\n}\\n\\n.nav-logo-img {\\n  height: 40px;\\n}\\n\\n.nav-links-list {\\n  display: flex;\\n  list-style: none;\\n  gap: 16px;\\n}\\n\\n.nav-links-link {\\n  text-decoration: none;\\n  color: #000;\\n}\\n\\n.nav-links-link:hover {\\n  color: #869aa4;\\n  text-decoration: underline;\\n}\\n\\n.books {\\n  padding: 20px;\\n  gap: 20px;\\n  word-break: break-word;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\\n}\\n\\n.book-div {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 20px;\\n  border: 1px solid #eee;\\n  border-radius: 5px;\\n  box-shadow: 2px 5px 10px #ddd;\\n}\\n\\n.book-div:hover {\\n  box-shadow: 2px 5px 50px #bbb;\\n}\\n\\n.main-heading {\\n  margin: 20px 0 0 20px;\\n}\\n\\n.main-books-counter {\\n  font-weight: 400;\\n  font-size: 1rem;\\n}\\n\\n.book-title {\\n  margin: auto 0 0 0;\\n}\\n\\n.book-author {\\n  margin: 0;\\n}\\n\\n.like-and-comment {\\n  display: flex;\\n  gap: 10px;\\n  margin: 5px 0;\\n  align-items: center;\\n  font-size: 16px;\\n}\\n\\n.comment-btn {\\n  width: 100%;\\n  height: 40px;\\n  border: none;\\n  border-radius: 5px;\\n  background-color: #eee;\\n  font-size: 16px;\\n  cursor: pointer;\\n}\\n\\n.comment-btn:hover {\\n  background-color: #ddd;\\n}\\n\\n.like-container {\\n  display: flex;\\n  align-items: center;\\n  gap: 5px;\\n  white-space: nowrap;\\n  cursor: pointer;\\n}\\n\\n.like-btn.filled {\\n  color: #fa3e3e;\\n}\\n\\n.like-btn:hover {\\n  font-size: 20px;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.footer {\\n  text-align: center;\\n  width: 100%;\\n  color: #555;\\n  font-size: 0.7rem;\\n}\\n\\n.pop {\\n  border-radius: 10px;\\n  display: flex;\\n  flex-direction: column;\\n  box-shadow: 5px 5px 500px black;\\n  position: fixed;\\n  top: 50%;\\n  bottom: 50%;\\n  left: 5%;\\n  right: 5%;\\n  margin: auto;\\n  z-index: 1;\\n  background: white;\\n  height: 90vh;\\n}\\n\\n.container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.book-details {\\n  display: flex;\\n  flex: 1;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 5%;\\n  padding: 20px;\\n  justify-content: space-around;\\n}\\n\\n.description * {\\n  min-width: 50%;\\n}\\n\\n.details h1 {\\n  text-align: center;\\n}\\n\\n.show-comments {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  flex: 1;\\n}\\n\\n.comments {\\n  background-color: #eee;\\n  padding: 16px;\\n  margin: 0 16px;\\n  max-height: 70px;\\n  word-break: break-word;\\n  overflow-y: scroll;\\n}\\n\\n.comments-heading {\\n  margin: 0;\\n}\\n\\n.com-count {\\n  font-size: 1rem;\\n  font-weight: 400;\\n}\\n\\n.com-item {\\n  list-style: none;\\n  margin: 10px 0;\\n}\\n\\n.myform {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 0 50px;\\n}\\n\\n.myform * {\\n  margin: 10px 0;\\n  border-radius: 5px;\\n  width: 100%;\\n}\\n\\ninput,\\ntextarea {\\n  line-height: 30px;\\n  border: 1px solid #ddd;\\n  padding: 5px;\\n}\\n\\ntextarea {\\n  resize: none;\\n}\\n\\ninput:focus,\\ntextarea:focus {\\n  outline: none;\\n  border: 1px solid #aaa;\\n}\\n\\n.inactive {\\n  display: none;\\n}\\n\\n.noflow {\\n  overflow-y: hidden;\\n}\\n\\n.closeBtn {\\n  align-self: flex-end;\\n  padding: 10px 15px;\\n  font-size: 1.5rem;\\n  cursor: pointer;\\n}\\n\\n.closeBtn:hover {\\n  color: #f11;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://library/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://library/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://library/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/logo.png */ \"./src/assets/images/logo.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <link rel=\\\"shortcut icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" type=\\\"image/x-icon\\\" />\\n    <!-- Google fonts -->\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\" />\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin />\\n    <link\\n      href=\\\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&family=Ubuntu:wght@400;500;700&display=swap\\\"\\n      rel=\\\"stylesheet\\\"\\n    />\\n    <!-- Google fonts -->\\n    <!-- Font awesome -->\\n    <\" + \"script\\n      src=\\\"https://kit.fontawesome.com/79b3da0f3c.js\\\"\\n      crossorigin=\\\"anonymous\\\"\\n      ><\" + \"/script>\\n      <!-- Font awesome -->\\n    <title>Library</title>\\n  </head>\\n  <body>\\n    <header class=\\\"header\\\">\\n      <nav class=\\\"nav\\\">\\n        <div class=\\\"nav-logo\\\">\\n          <a href=\\\"#\\\" class=\\\"nav-logo-link\\\">\\n            <img\\n              src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"\\n              alt=\\\"logo\\\"\\n              class=\\\"nav-logo-img\\\"\\n            />\\n          </a>\\n        </div>\\n        <div class=\\\"nav-links\\\">\\n          <ul class=\\\"nav-links-list\\\">\\n            <li class=\\\"nav-links-item\\\">\\n              <a href=\\\"#\\\" class=\\\"nav-links-link\\\">Home</a>\\n            </li>\\n            <li class=\\\"nav-links-item\\\">\\n              <a href=\\\"#\\\" class=\\\"nav-links-link\\\">Books</a>\\n            </li>\\n            <li class=\\\"nav-links-item\\\">\\n              <a href=\\\"#\\\" class=\\\"nav-links-link\\\">Contact</a>\\n            </li>\\n          </ul>\\n      </nav>\\n    </header>\\n    <section id=\\\"pop-up\\\" class=\\\"pop inactive\\\"></section>\\n    <main class=\\\"main\\\">\\n        <h1 class=\\\"main-heading\\\">Books <span class=\\\"main-books-counter\\\"></span></h1>\\n        <section class=\\\"books\\\"></section>\\n    </main>\\n    <footer class=\\\"footer\\\">\\n        Created by Microverse under CC License\\n    </footer>\\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://library/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://library/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://library/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/eventListeners.js */ \"./src/modules/eventListeners.js\");\n/* harmony import */ var _modules_renderBooks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderBooks.js */ \"./src/modules/renderBooks.js\");\n/* harmony import */ var _modules_counters_booksCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/counters/booksCounter.js */ \"./src/modules/counters/booksCounter.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://library/./src/index.js?");

/***/ }),

/***/ "./src/modules/counters/booksCounter.js":
/*!**********************************************!*\
  !*** ./src/modules/counters/booksCounter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst booksCounter = () => document.querySelectorAll('.book-div').length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (booksCounter);\n\n//# sourceURL=webpack://library/./src/modules/counters/booksCounter.js?");

/***/ }),

/***/ "./src/modules/eventListeners.js":
/*!***************************************!*\
  !*** ./src/modules/eventListeners.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _counters_booksCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counters/booksCounter.js */ \"./src/modules/counters/booksCounter.js\");\n/* harmony import */ var _getBooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBooks.js */ \"./src/modules/getBooks.js\");\n/* harmony import */ var _involvementAPI_getLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./involvementAPI/getLikes.js */ \"./src/modules/involvementAPI/getLikes.js\");\n/* harmony import */ var _involvementAPI_renderLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./involvementAPI/renderLikes.js */ \"./src/modules/involvementAPI/renderLikes.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _renderBooks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderBooks.js */ \"./src/modules/renderBooks.js\");\n\n\n\n\n\n\n\nconst booksSection = document.querySelector('.books');\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  const books = await (0,_getBooks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  books.results.forEach((book) => {\n    (0,_renderBooks_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(book);\n  });\n  (0,_involvementAPI_renderLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  document.querySelector('.main-books-counter').textContent = `(${(0,_counters_booksCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()})`;\n  const btn = document.querySelectorAll('.comment-btn');\n  (0,_popup_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(btn, books.results);\n});\n\nbooksSection.addEventListener('click', async (e) => {\n  if (e.target.closest('.like-container')) {\n    const bookId = e.target.closest('.book-div').querySelector('.book-id').textContent;\n    e.target.closest('.like-container').querySelector('.empty').classList.add('hidden');\n    e.target.closest('.like-container').querySelector('.filled').classList.remove('hidden');\n    await (0,_involvementAPI_getLikes_js__WEBPACK_IMPORTED_MODULE_2__.addLike)(bookId);\n    (0,_involvementAPI_renderLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n});\n\n//# sourceURL=webpack://library/./src/modules/eventListeners.js?");

/***/ }),

/***/ "./src/modules/getBooks.js":
/*!*********************************!*\
  !*** ./src/modules/getBooks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://gutendex.com/';\nconst booksEndpoint = 'books/';\nconst booksRange = '20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35';\n\nconst getBooks = async () => {\n  const response = await fetch(`${url}${booksEndpoint}?ids=${booksRange}`);\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBooks);\n\n//# sourceURL=webpack://library/./src/modules/getBooks.js?");

/***/ }),

/***/ "./src/modules/involvementAPI/addcomment.js":
/*!**************************************************!*\
  !*** ./src/modules/involvementAPI/addcomment.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((button, username, sc, bookId) => {\n  button.addEventListener('click', async (e) => {\n    e.preventDefault();\n    bookId = bookId.toString();\n    const uname = username.value.trim();\n    const points = sc.value.trim();\n    if (uname && points) {\n      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/od3GdNureT5rfbsZ7PgU/comments/', {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: bookId,\n          username: uname,\n          comment: points,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      });\n    }\n    username.value = '';\n    sc.value = '';\n  });\n});\n\n//# sourceURL=webpack://library/./src/modules/involvementAPI/addcomment.js?");

/***/ }),

/***/ "./src/modules/involvementAPI/getLikes.js":
/*!************************************************!*\
  !*** ./src/modules/involvementAPI/getLikes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst id = 'od3GdNureT5rfbsZ7PgU';\n\nconst getLikes = async () => {\n  const response = await fetch(`${url}apps/${id}/likes/`);\n  return response.json();\n};\n\nconst addLike = async (bookId) => {\n  const response = await fetch(`${url}apps/${id}/likes/`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: bookId,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return response;\n};\n\n\n\n//# sourceURL=webpack://library/./src/modules/involvementAPI/getLikes.js?");

/***/ }),

/***/ "./src/modules/involvementAPI/getcomment.js":
/*!**************************************************!*\
  !*** ./src/modules/involvementAPI/getcomment.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst comments = async (bookId) => {\n  bookId = bookId.toString();\n  const coms = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/od3GdNureT5rfbsZ7PgU/comments?item_id=${bookId}`);\n  const res = coms.json();\n  return res;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);\n\n//# sourceURL=webpack://library/./src/modules/involvementAPI/getcomment.js?");

/***/ }),

/***/ "./src/modules/involvementAPI/renderLikes.js":
/*!***************************************************!*\
  !*** ./src/modules/involvementAPI/renderLikes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/involvementAPI/getLikes.js\");\n\n\nconst renderLikes = async () => {\n  const likes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n  const likesContainer = document.querySelectorAll('.likes');\n  likesContainer.forEach((like) => {\n    const bookId = like.parentElement.parentElement.parentElement.firstElementChild.textContent;\n    const bookLikes = likes.filter((item) => parseInt(item.item_id, 10) === parseInt(bookId, 10));\n    like.textContent = bookLikes.length === 0 ? 0 : bookLikes[0].likes;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderLikes);\n\n//# sourceURL=webpack://library/./src/modules/involvementAPI/renderLikes.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementAPI_addcomment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI/addcomment.js */ \"./src/modules/involvementAPI/addcomment.js\");\n/* harmony import */ var _involvementAPI_getcomment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementAPI/getcomment.js */ \"./src/modules/involvementAPI/getcomment.js\");\n\n\n\nconst body = document.querySelector('body');\nconst pop = document.querySelector('.pop');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((button, books) => {\n  button.forEach((btn) => {\n    btn.addEventListener('click', async () => {\n      body.classList.add('noflow');\n      pop.innerHTML = '';\n      pop.classList.remove('inactive');\n      const par = btn.parentElement.parentElement;\n      const title = par.querySelector('.book-title').innerHTML;\n      const currBook = books.filter((book) => book.title === title);\n      const fillcoms = await (0,_involvementAPI_getcomment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(currBook[0].id);\n      const closebtn = document.createElement('a');\n      closebtn.classList.add('closeBtn');\n      closebtn.innerHTML = '<i class=\"fa-solid fa-xmark\"></i>';\n      pop.appendChild(closebtn);\n      const template = document.createElement('div');\n      template.classList.add('container');\n      template.innerHTML = `\n      <div class=\"book-details\">\n        <img src=\"${currBook[0].formats['image/jpeg']}\" alt=\"${currBook.title}\">\n        <div class=\"details\">\n            <h1>${currBook[0].title}</h1>\n            <div class=\"description\">\n                <p><strong>Author:</strong> ${currBook[0].authors.length === 0 ? 'N/A' : currBook[0].authors[0].name}</p>\n                <p><strong>Bookshelves:</strong> ${currBook[0].bookshelves}</p>\n                <p><strong>Subjects:</strong> ${currBook[0].subjects}</p>\n            </div>\n        </div>\n      </div>\n      <div class=\"show-comments\">\n        <h1 class=\"comments-heading\">Comments<span class=\"com-count\">(0)</span></h1>\n        <ul class=\"comments\"></ul>\n        <form class=\"myform\">\n            <h1>Add a Comment</h1>\n            <input id=\"name\" type=\"text\" placeholder=\"Your name\" required>\n            <textarea id=\"areatext\" cols=\"30\" rows=\"5\" placeholder=\"Insights\" required></textarea>\n            <button id=\"submit\" class=\"comment-btn\">Add Comment</button>\n        </form>\n      </div>`;\n      pop.appendChild(template);\n\n      // fill commments\n      const mycoms = document.querySelector('.comments');\n      if (fillcoms.length > 0) {\n        fillcoms.forEach((com) => {\n          const link = document.createElement('li');\n          link.classList.add('com-item');\n          link.innerHTML = `${com.creation_date} ${com.username} : ${com.comment}`;\n          mycoms.appendChild(link);\n        });\n      }\n\n      // Display No of Comments\n      const count = document.querySelector('.com-count');\n      if (fillcoms.length > 0) {\n        count.innerHTML = `(${fillcoms.length})`;\n      } else {\n        count.innerHTML = '(0)';\n      }\n\n      // add comment\n      const comBtn = document.querySelector('#submit');\n      const inp = document.querySelector('#name');\n      const text = document.querySelector('#areatext');\n      (0,_involvementAPI_addcomment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(comBtn, inp, text, currBook[0].id);\n\n      // close pop up\n      const close = document.querySelector('.closeBtn > i');\n      close.addEventListener('click', () => {\n        pop.classList.add('inactive');\n        body.classList.remove('noflow');\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack://library/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/renderBooks.js":
/*!************************************!*\
  !*** ./src/modules/renderBooks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst bookSection = document.querySelector('.books');\n\nconst renderBooks = (book) => {\n  const bookDiv = document.createElement('div');\n  bookDiv.classList.add('book-div');\n  bookDiv.innerHTML = `\n        <p class=\"book-id hidden\">${book.id}</p>\n        <img src=\"${book.formats['image/jpeg']}\" alt=\"${book.title}\">\n        <h2 class=\"book-title\">${book.title}</h2>\n        <p class=\"book-author\">${book.authors.length === 0 ? 'N/A' : book.authors[0].name}</p>\n        <div class=\"like-and-comment\">\n            <button class=\"comment-btn\">\n                <a href=\"#pop-up\">\n                  Comment <i class=\"fa-solid fa-comments\"></i>\n                </a>\n            </button>\n            <div class=\"like-container\">\n                <i class=\"fa-regular fa-heart empty like-btn\"></i>\n                <i class=\"fa-solid fa-heart filled hidden like-btn\"></i>\n                <p class=\"likes\">0</p>\n            </div>\n        </div>\n    `;\n  bookSection.appendChild(bookDiv);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBooks);\n\n//# sourceURL=webpack://library/./src/modules/renderBooks.js?");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fdec76ec23868ccc6df5.png\";\n\n//# sourceURL=webpack://library/./src/assets/images/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;