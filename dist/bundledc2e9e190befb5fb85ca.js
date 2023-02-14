/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/template.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/template.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\r\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  padding: 20px;\r\n}\r\n\r\n.actionBox {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.actions .ipInput {\r\n  width: 250px;\r\n  text-align: center;\r\n  outline: none;\r\n  border: 2px solid rgb(182, 188, 206);\r\n}\r\n\r\n.actions .maskSelect {\r\n  text-align: center;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.actions .calculateBtn {\r\n  background: none;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n\r\n  transition: all 200ms ease;\r\n}\r\n\r\n.actions .calculateBtn:hover {\r\n  background: rgb(179, 189, 216);\r\n}\r\n\r\n.actions .calculateBtn:active {\r\n  transform: scale(97%);\r\n}\r\n\r\n.actions .ipInput,\r\n.maskSelect,\r\n.calculateBtn {\r\n  height: 40px;\r\n  padding: 6px;\r\n  border-radius: 5px;\r\n  border: 2px solid rgb(182, 188, 206);\r\n  box-shadow: 1.5px 2px 2px black;\r\n}\r\n\r\n.infoContainer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 36px 12px;\r\n  min-width: 320px;\r\n  max-width: 900px;\r\n}\r\n\r\n.infoBox {\r\n  text-align: center;\r\n  min-width: 200px;\r\n  border: 2px solid rgb(182, 188, 206);\r\n  border-radius: 5px;\r\n  padding: 0.8rem;\r\n  opacity: 0;\r\n  box-shadow: 1.5px 2px 2px black;\r\n  user-select: none;\r\n  position: relative;\r\n  cursor: pointer;\r\n\r\n  transition: all 200ms ease;\r\n}\r\n\r\n.infoBox.copied {\r\n  border: 2px solid rgb(71, 241, 71);\r\n  box-shadow: 1.5px 2px 10px rgb(71, 241, 71);\r\n}\r\n\r\n.infoBox:not(.copied)::after {\r\n  content: \"Copy\";\r\n  width: 50px;\r\n  position: absolute;\r\n  left: 50%;\r\n  bottom: -35px;\r\n  transform: translateX(-50%);\r\n  opacity: 0;\r\n  transition: all 200ms ease;\r\n}\r\n\r\n.infoBox:not(.copied):hover {\r\n  background: rgb(182, 188, 206);\r\n}\r\n\r\n.infoBox:hover::after {\r\n  opacity: 1;\r\n}\r\n\r\n.infoBox p {\r\n  text-transform: uppercase;\r\n  font-weight: 800;\r\n}\r\n\r\n.infoBox .value {\r\n  font-weight: 600;\r\n  border-bottom: 3px solid black;\r\n  padding: 0 4px;\r\n}\r\n\r\n@keyframes slideInTop {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(-20px);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/template.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB;sDACoD;AACtD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,uBAAuB;EACvB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;;EAEhB,0BAA0B;AAC5B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;;EAGE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;EACf,UAAU;EACV,+BAA+B;EAC/B,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;;EAEf,0BAA0B;AAC5B;;AAEA;EACE,kCAAkC;EAClC,2CAA2C;AAC7C;;AAEA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,2BAA2B;EAC3B,UAAU;EACV,0BAA0B;AAC5B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,8BAA8B;EAC9B,cAAc;AAChB;;AAEA;EACE;IACE,UAAU;IACV,4BAA4B;EAC9B;;EAEA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\r\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  padding: 20px;\r\n}\r\n\r\n.actionBox {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.actions .ipInput {\r\n  width: 250px;\r\n  text-align: center;\r\n  outline: none;\r\n  border: 2px solid rgb(182, 188, 206);\r\n}\r\n\r\n.actions .maskSelect {\r\n  text-align: center;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.actions .calculateBtn {\r\n  background: none;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n\r\n  transition: all 200ms ease;\r\n}\r\n\r\n.actions .calculateBtn:hover {\r\n  background: rgb(179, 189, 216);\r\n}\r\n\r\n.actions .calculateBtn:active {\r\n  transform: scale(97%);\r\n}\r\n\r\n.actions .ipInput,\r\n.maskSelect,\r\n.calculateBtn {\r\n  height: 40px;\r\n  padding: 6px;\r\n  border-radius: 5px;\r\n  border: 2px solid rgb(182, 188, 206);\r\n  box-shadow: 1.5px 2px 2px black;\r\n}\r\n\r\n.infoContainer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 36px 12px;\r\n  min-width: 320px;\r\n  max-width: 900px;\r\n}\r\n\r\n.infoBox {\r\n  text-align: center;\r\n  min-width: 200px;\r\n  border: 2px solid rgb(182, 188, 206);\r\n  border-radius: 5px;\r\n  padding: 0.8rem;\r\n  opacity: 0;\r\n  box-shadow: 1.5px 2px 2px black;\r\n  user-select: none;\r\n  position: relative;\r\n  cursor: pointer;\r\n\r\n  transition: all 200ms ease;\r\n}\r\n\r\n.infoBox.copied {\r\n  border: 2px solid rgb(71, 241, 71);\r\n  box-shadow: 1.5px 2px 10px rgb(71, 241, 71);\r\n}\r\n\r\n.infoBox:not(.copied)::after {\r\n  content: \"Copy\";\r\n  width: 50px;\r\n  position: absolute;\r\n  left: 50%;\r\n  bottom: -35px;\r\n  transform: translateX(-50%);\r\n  opacity: 0;\r\n  transition: all 200ms ease;\r\n}\r\n\r\n.infoBox:not(.copied):hover {\r\n  background: rgb(182, 188, 206);\r\n}\r\n\r\n.infoBox:hover::after {\r\n  opacity: 1;\r\n}\r\n\r\n.infoBox p {\r\n  text-transform: uppercase;\r\n  font-weight: 800;\r\n}\r\n\r\n.infoBox .value {\r\n  font-weight: 600;\r\n  border-bottom: 3px solid black;\r\n  padding: 0 4px;\r\n}\r\n\r\n@keyframes slideInTop {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(-20px);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/template.css":
/*!*********************************!*\
  !*** ./src/styles/template.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_template_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./template.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/template.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_template_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_template_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_template_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_template_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/build.js":
/*!**********************!*\
  !*** ./src/build.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "build": () => (/* binding */ build),
/* harmony export */   "mask": () => (/* binding */ mask),
/* harmony export */   "setMask": () => (/* binding */ setMask)
/* harmony export */ });
const infoContainer = document.querySelector(".infoContainer");
const ipInput = document.querySelector(".ipInput");

const maskMultiplication = 8;
let mask = 24;

// DONE
const calculateMask = () => {
  const octets = ipInput.value.split(".");
  let fulfilledOctets = Math.floor(mask / maskMultiplication);
  let initialOctetValue = 128;
  let octetValue = initialOctetValue;

  for (let i = 0; i < 4; i++) {
    if (i < fulfilledOctets) {
      octets[i] = 255;
    } else {
      if (maskMultiplication * fulfilledOctets >= mask) {
        octets[i] = 0;
      } else {
        for (let j = maskMultiplication * fulfilledOctets; j < mask; j++) {
          octets[i] = octetValue;
          initialOctetValue /= 2;
          octetValue += initialOctetValue;
        }

        fulfilledOctets++;
      }
    }
  }

  return `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
};

// DONE
const calculateNetwork = () => {
  const octets = ipInput.value.split(".");
  let fulfilledOctets = Math.floor(mask / maskMultiplication);
  let initialOctetValue = 255;
  let jumps = 0;

  for (let i = 0; i < 4; i++) {
    if (i < fulfilledOctets) {
      continue;
    } else {
      if (maskMultiplication * fulfilledOctets >= mask) {
        octets[i] = 0;
      } else {
        for (let k = maskMultiplication * fulfilledOctets; k < mask; k++) {
          initialOctetValue /= 2;
          jumps = Math.ceil(initialOctetValue);
        }

        for (let j = jumps; j <= 255; j += jumps) {
          if (octets[i] > j && octets[i] < j + jumps) {
            octets[i] = j;
            break;
          }

          if (octets[i] < jumps) {
            octets[i] = 0;
            break;
          }
        }

        fulfilledOctets++;
      }
    }
  }

  return `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
};

// DONE
const calculateWildcard = () => {
  const octets = ipInput.value.split(".");
  let fulfilledOctets = Math.floor(mask / maskMultiplication);
  let initialOctetValue = 255;
  let jumps = 0;

  for (let i = 0; i < 4; i++) {
    if (i < fulfilledOctets) {
      octets[i] = 0;
      continue;
    } else {
      if (maskMultiplication * fulfilledOctets >= mask) {
        octets[i] = 255;
      } else {
        for (let k = maskMultiplication * fulfilledOctets; k < mask; k++) {
          initialOctetValue /= 2;
          jumps = Math.ceil(initialOctetValue);
        }

        for (let j = jumps; j <= 255; j += jumps) {
          octets[i] = 255 - j;
        }

        fulfilledOctets++;
      }
    }
  }

  return `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
};

// DONE
const calculateBroadcast = () => {
  const octets = ipInput.value.split(".");
  let fulfilledOctets = Math.floor(mask / maskMultiplication);
  let initialOctetValue = 255;
  let jumps = 0;

  for (let i = 0; i < 4; i++) {
    if (i < fulfilledOctets) {
      continue;
    } else {
      if (maskMultiplication * fulfilledOctets >= mask) {
        octets[i] = 255;
      } else {
        for (let k = maskMultiplication * fulfilledOctets; k < mask; k++) {
          initialOctetValue /= 2;
          jumps = Math.ceil(initialOctetValue);
        }

        for (let j = jumps - 1; j <= 255; j += jumps) {
          if (octets[i] < jumps) {
            octets[i] = j;
            break;
          }

          if (octets[i] <= j && octets[i] < j + jumps) {
            octets[i] = j;
            break;
          }
        }
        fulfilledOctets++;
      }
    }
  }

  return `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
};

// DONE
const calculateFirstHost = () => {
  const octets = ipInput.value.split(".");
  let fulfilledOctets = Math.floor(mask / maskMultiplication);
  let initialOctetValue = 255;
  let jumps = 0;

  for (let i = 0; i < 4; i++) {
    if (i < fulfilledOctets) {
      continue;
    } else {
      if (maskMultiplication * fulfilledOctets >= mask) {
        octets[i] = 0;
      } else {
        for (let k = maskMultiplication * fulfilledOctets; k < mask; k++) {
          initialOctetValue /= 2;
          jumps = Math.ceil(initialOctetValue);
        }

        for (let j = jumps; j <= 255; j += jumps) {
          if (octets[i] < jumps) {
            octets[i] = 0;
            break;
          }

          if (octets[i] >= j && octets[i] < j + jumps) {
            octets[i] = j;
            break;
          }
        }

        fulfilledOctets++;
      }
    }
  }

  if (octets[3] == 0 || octets[3] == 1) {
    octets[3] = 0;
  }

  if (mask == 32 && octets[3] == 255) {
    octets[3] = 255;
  }

  const fourthOctet =
    mask !== 32
      ? parseInt(octets[3]) + 1
      : parseInt(octets[3]) % 2 === 0
      ? parseInt(octets[3]) + 1
      : octets[3];

  return `${octets[0]}.${octets[1]}.${octets[2]}.${fourthOctet}`;
};

// DONE
const calculateLastHost = () => {
  const octets = ipInput.value.split(".");
  let fulfilledOctets = Math.floor(mask / maskMultiplication);
  let initialOctetValue = 255;
  let jumps = 0;

  for (let i = 0; i < 4; i++) {
    if (i < fulfilledOctets) {
      continue;
    } else {
      if (maskMultiplication * fulfilledOctets >= mask) {
        octets[i] = 255;
      } else {
        for (let k = maskMultiplication * fulfilledOctets; k < mask; k++) {
          initialOctetValue /= 2;
          jumps = Math.ceil(initialOctetValue);
        }

        for (let j = jumps - 1; j <= 255; j += jumps) {
          if (octets[i] <= j && octets[i] < j + jumps) {
            octets[i] = j;
            break;
          }
        }

        fulfilledOctets++;
      }
    }
  }

  if (mask == 32 && octets[3] == 255) {
    octets[3] = 255;
  }

  return `${octets[0]}.${octets[1]}.${octets[2]}.${
    mask !== 32 ? octets[3] - 1 : octets[3]
  }`;
};

// DONE
const isSecured = () => {
  let secured = true;
  const octets = ipInput.value.split(".");

  if (octets.length !== 4) secured = false;

  octets.forEach((octet) => {
    if (
      isNaN(octet) ||
      octet.length > 3 ||
      octet.length <= 0 ||
      octet < 0 ||
      octet > 255
    )
      secured = false;
  });

  return secured;
};

// DONE
const build = () => {
  if (!ipInput.value) return;
  if (!isSecured()) return;

  const numberOfHosts = Math.pow(2, 32 - mask) - 2;

  const info = {
    ip_address: ipInput.value,
    mask: calculateMask(),
    wildcard: calculateWildcard(),
    network: calculateNetwork(),
    broadcast: calculateBroadcast(),
    first_host: calculateFirstHost(),
    last_host: calculateLastHost(),
    number_of_hosts: numberOfHosts < 0 ? 1 : numberOfHosts,
  };

  let i = 0;

  infoContainer.innerHTML = "";
  for (const [k, v] of Object.entries(info)) {
    const infoBox = document.createElement("div");
    infoBox.classList.add("infoBox");
    infoBox.addEventListener("click", () => {
      navigator.clipboard.writeText(v);

      infoBox.classList.add("copied");
      setTimeout(() => {
        infoBox.classList.remove("copied");
      }, 1500);
    });
    infoBox.style.animation = `200ms ease-in-out ${
      i * 40
    }ms forwards slideInTop`;

    const pKey = document.createElement("p");
    pKey.innerHTML = `${k.replaceAll("_", " ")}`;

    const spanValue = document.createElement("span");
    spanValue.classList.add("value");
    spanValue.innerHTML = v;

    infoBox.append(pKey, spanValue);

    infoContainer.append(infoBox);
    i++;
  }
};

const setMask = (newMask) => {
  mask = Number(newMask);
};




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build */ "./src/build.js");
/* harmony import */ var _styles_template_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/template.css */ "./src/styles/template.css");



const maskSelect = document.querySelector(".maskSelect");
const calculateBtn = document.querySelector(".calculateBtn");

const prepare = () => {
  for (let i = 1; i <= 32; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;

    maskSelect.append(option);
  }

  maskSelect.value = _build__WEBPACK_IMPORTED_MODULE_0__.mask;
};

calculateBtn.addEventListener("click", _build__WEBPACK_IMPORTED_MODULE_0__.build);

maskSelect.addEventListener("change", (e) => (0,_build__WEBPACK_IMPORTED_MODULE_0__.setMask)(e.target.value));

document.addEventListener("DOMContentLoaded", prepare);

})();

/******/ })()
;
//# sourceMappingURL=bundledc2e9e190befb5fb85ca.js.map