/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.box {\\r\\n  width: 80%;\\r\\n  background-color: #fff;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  border: 1px solid rgb(90, 69, 184);\\r\\n  padding: 0;\\r\\n  box-shadow: 10px 5px 10px rgb(128, 92, 131);\\r\\n  border-radius: 10px;\\r\\n  border-bottom-left-radius: 0;\\r\\n  border-bottom-right-radius: 0;\\r\\n  box-sizing: border-box;\\r\\n  border-spacing: 0;\\r\\n}\\r\\n\\r\\n.box > h1 {\\r\\n  margin: 15px;\\r\\n  color: rgb(104, 15, 159);\\r\\n  border-bottom: 1px solid rgb(80, 2, 116);\\r\\n}\\r\\n\\r\\n.todo-input {\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  border: 1px solid rgb(193, 193, 193);\\r\\n  border-left-style: none;\\r\\n  border-right-style: none;\\r\\n}\\r\\n\\r\\n.todos {\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  border-bottom: 1px solid rgb(193, 193, 193);\\r\\n  padding-bottom: 2px;\\r\\n  padding-top: 2px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.todo-check {\\r\\n  width: 10%;\\r\\n  height: 50%;\\r\\n  border: 1px solid rgb(193, 193, 193);\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.todo-desc {\\r\\n  margin: 0;\\r\\n  height: 100%;\\r\\n  width: 82%;\\r\\n  border: 1px solid rgb(193, 193, 193);\\r\\n}\\r\\n\\r\\n.checked {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.fa-bars {\\r\\n  font-size: 16px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  width: 10%;\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.clear-button {\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  background-color: #fff;\\r\\n  color: rgb(193, 193, 193);\\r\\n  font-size: 16px;\\r\\n  cursor: pointer;\\r\\n  box-sizing: content-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  bottom: 0;\\r\\n}\\r\\n\\r\\n.clear-button:hover {\\r\\n  background-color: rgb(112, 18, 244);\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.clear-border {\\r\\n  border-style: none;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  background-color: rgb(91, 175, 198);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n  /* stylelint-disable-next-line csstree/validator */\\r\\n  accent-color: rgb(117, 13, 187);\\r\\n}\\r\\n\\r\\n.todo-desc:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.trash-btn {\\r\\n  background: transparent;\\r\\n  border: none;\\r\\n  display: none;\\r\\n  width: 10%;\\r\\n  height: 100%;\\r\\n  cursor: pointer;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.fa-trash,\\r\\n.fa-bars {\\r\\n  font-size: 18px;\\r\\n  color: rgb(79, 5, 108);\\r\\n  margin-right: 5px;\\r\\n}\\r\\n\\r\\n.todos:hover .todo-desc {\\r\\n  background-color: rgb(152, 202, 216);\\r\\n}\\r\\n\\r\\n.todos:hover {\\r\\n  background-color: rgb(152, 202, 216);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/addTodo.js":
/*!***************************!*\
  !*** ./src/js/addTodo.js ***!
  \***************************/
/***/ ((module) => {

eval("function addAnItem(info, todos) {\r\n  todos.push(info);\r\n  return todos;\r\n}\r\n\r\nmodule.exports = addAnItem;\n\n//# sourceURL=webpack://webpack/./src/js/addTodo.js?");

/***/ }),

/***/ "./src/js/checkTodo.js":
/*!*****************************!*\
  !*** ./src/js/checkTodo.js ***!
  \*****************************/
/***/ ((module) => {

eval("function checkTodo(i, todos) {\r\n  todos[i].completed = !todos[i].completed;\r\n  return todos;\r\n}\r\n\r\nmodule.exports = checkTodo;\n\n//# sourceURL=webpack://webpack/./src/js/checkTodo.js?");

/***/ }),

/***/ "./src/js/clearAllCompleted.js":
/*!*************************************!*\
  !*** ./src/js/clearAllCompleted.js ***!
  \*************************************/
/***/ ((module) => {

eval("function clearAllCompleted(todos) {\r\n  todos = todos.filter((todo) => todo.completed !== true);\r\n  let i = 0;\r\n  todos.forEach((todo) => {\r\n    todo.index = i + 1;\r\n    i += 1;\r\n  });\r\n  return todos;\r\n}\r\n\r\nmodule.exports = clearAllCompleted;\n\n//# sourceURL=webpack://webpack/./src/js/clearAllCompleted.js?");

/***/ }),

/***/ "./src/js/deleteTodo.js":
/*!******************************!*\
  !*** ./src/js/deleteTodo.js ***!
  \******************************/
/***/ ((module) => {

eval("function deleteAnItem(i, todos) {\r\n  const temp = [...todos];\r\n  todos.splice(i, 1);\r\n\r\n  if (todos === temp) {\r\n    throw new Error('Error deleting item');\r\n  }\r\n  return todos;\r\n}\r\n\r\nmodule.exports = deleteAnItem;\n\n//# sourceURL=webpack://webpack/./src/js/deleteTodo.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/js/todo.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deleteTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTodo.js */ \"./src/js/deleteTodo.js\");\n/* harmony import */ var _deleteTodo_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deleteTodo_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _addTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodo.js */ \"./src/js/addTodo.js\");\n/* harmony import */ var _addTodo_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_addTodo_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _updateTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateTodo.js */ \"./src/js/updateTodo.js\");\n/* harmony import */ var _updateTodo_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_updateTodo_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _checkTodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkTodo.js */ \"./src/js/checkTodo.js\");\n/* harmony import */ var _checkTodo_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_checkTodo_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _clearAllCompleted_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clearAllCompleted.js */ \"./src/js/clearAllCompleted.js\");\n/* harmony import */ var _clearAllCompleted_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clearAllCompleted_js__WEBPACK_IMPORTED_MODULE_4__);\n/* eslint-dsibale no-loop-func, no-func-assign, no-class-assign */\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst addInput = document.querySelector('.todo-input');\r\nlet todos = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : [];\r\nlet index = todos.length;\r\nconst todoDiv = document.querySelector('.todo-list');\r\nconst clearBtn = document.querySelector('.clear-button');\r\n\r\nconst render = () => {\r\n  if (todos !== null) {\r\n    todoDiv.innerHTML = '';\r\n    todos.forEach((todo) => {\r\n      const check = todo.completed === true ? 'checked' : '';\r\n      todoDiv.innerHTML += `\r\n        <div class=\"todos\">\r\n          <input type=\"checkbox\" class=\"todo-check \" value=\"${todo.completed}\" ${check}>\r\n          <input type=\"text\" class=\"todo-desc clear-border ${check}\" value=\"${todo.desc}\">\r\n          <i class=\"fa-solid fa-bars\"></i>\r\n          <button type=\"button\" class=\"trash-btn\"><i class=\"fa fa-trash\"></i></button>\r\n        </div>\r\n      `;\r\n    });\r\n  }\r\n  for (let i = 0; i < todoDiv.querySelectorAll('.todos').length; i += 1) {\r\n    //  update checked status\r\n    const todoRow = todoDiv.querySelectorAll('.todos')[i];\r\n    todoRow.querySelector('.todo-check').addEventListener('click', () => {\r\n      const result = _checkTodo_js__WEBPACK_IMPORTED_MODULE_3___default()(i, todos);\r\n      localStorage.setItem('todos', JSON.stringify(result));\r\n      render();\r\n    });\r\n\r\n    //  change color and icon on input focus\r\n\r\n    todoRow.addEventListener('focusin', () => {\r\n      todoRow.classList.add('active');\r\n      todoRow.querySelector('.todo-desc').classList.add('active');\r\n      todoRow.querySelector('.trash-btn').style.display = 'block';\r\n      todoRow.querySelector('.fa-bars').style.display = 'none';\r\n    });\r\n\r\n    todoRow.querySelector('.trash-btn').addEventListener('click', () => {\r\n      const updTodo = _deleteTodo_js__WEBPACK_IMPORTED_MODULE_0___default()(i, todos);\r\n      for (let a = i; a < updTodo.length; a += 1) {\r\n        updTodo[a].index -= 1;\r\n      }\r\n      index -= 1;\r\n      localStorage.setItem('todos', JSON.stringify(updTodo));\r\n      render();\r\n    });\r\n\r\n    todoRow.addEventListener('focusout', (e) => {\r\n      const parent = todoRow;\r\n      const leavingParent = !parent.contains(e.relatedTarget);\r\n      if (leavingParent) {\r\n        todoRow.classList.remove('active');\r\n        todoRow.querySelector('.todo-desc').classList.remove('active');\r\n        todoRow.querySelector('.fa-bars').style.display = 'flex';\r\n        todoRow.querySelector('.trash-btn').style.display = 'none';\r\n      }\r\n    });\r\n    //  update description\r\n    todoRow.querySelector('.todo-desc').addEventListener('change', (e) => {\r\n      const result = _updateTodo_js__WEBPACK_IMPORTED_MODULE_2___default()(i, todos, e.target.value);\r\n      localStorage.setItem('todos', JSON.stringify(result));\r\n    });\r\n  }\r\n};\r\naddInput.addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter') {\r\n    if (addInput.value !== '') {\r\n      const todoVal = addInput.value;\r\n      addInput.value = '';\r\n      index += 1;\r\n      const updTodo = _addTodo_js__WEBPACK_IMPORTED_MODULE_1___default()({ index: index, desc: todoVal, completed: false }, todos);\r\n      localStorage.setItem('todos', JSON.stringify(updTodo));\r\n      render();\r\n    }\r\n  }\r\n});\r\n\r\nclearBtn.addEventListener('click', () => {\r\n  /* eslint-disable prefer-const */\r\n  todos = _clearAllCompleted_js__WEBPACK_IMPORTED_MODULE_4___default()(todos);\r\n  index = todos.length;\r\n  localStorage.setItem('todos', JSON.stringify(todos));\r\n  render();\r\n});\r\n\r\nwindow.onload = render();\n\n//# sourceURL=webpack://webpack/./src/js/todo.js?");

/***/ }),

/***/ "./src/js/updateTodo.js":
/*!******************************!*\
  !*** ./src/js/updateTodo.js ***!
  \******************************/
/***/ ((module) => {

eval("function updateTodo(i, todos, newDesc) {\r\n  todos[i].desc = newDesc;\r\n  return todos;\r\n}\r\n\r\nmodule.exports = updateTodo;\n\n//# sourceURL=webpack://webpack/./src/js/updateTodo.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);