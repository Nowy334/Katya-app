/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_outfitClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/outfitClass */ \"./src/js/models/outfitClass.js\");\n/* harmony import */ var _views_outfitView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/outfitView */ \"./src/js/views/outfitView.js\");\n\n\n\nvar toggleModal = function toggleModal() {\n  document.querySelector('.modal').classList.toggle('modal-hidden');\n  document.querySelector('.inp-name').value = '';\n};\n\ndocument.querySelector('.btn-add').addEventListener('click', toggleModal);\ndocument.querySelector('.modal-close-bar').addEventListener('click', toggleModal);\ndocument.querySelector('.btn-save').addEventListener('click', function () {\n  toggleModal();\n  controlOutfit();\n});\nvar state = {};\n\nvar controlOutfit = function controlOutfit() {\n  var query = document.querySelector('.inp-name').value;\n\n  if (query) {\n    state.outfits = new _models_outfitClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"](query);\n    Object(_views_outfitView__WEBPACK_IMPORTED_MODULE_1__[\"renderResults\"])(state.outfits);\n  }\n};\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/outfitClass.js":
/*!**************************************!*\
  !*** ./src/js/models/outfitClass.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Outfit; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Outfit = /*#__PURE__*/function () {\n  function Outfit(name) {\n    _classCallCheck(this, Outfit);\n\n    this.name = name;\n  }\n\n  _createClass(Outfit, [{\n    key: \"timer\",\n    value: function timer() {}\n  }]);\n\n  return Outfit;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/models/outfitClass.js?");

/***/ }),

/***/ "./src/js/views/outfitView.js":
/*!************************************!*\
  !*** ./src/js/views/outfitView.js ***!
  \************************************/
/*! exports provided: renderResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderResults\", function() { return renderResults; });\nvar renderResults = function renderResults(obj) {\n  var markup = \"\\n   <div class = \\\"outfit\\\">\\n        <h3>\".concat(obj.name, \"</h3>\\n    </div>\\n   \");\n  document.querySelector('.container-outfits').insertAdjacentHTML('afterbegin', markup);\n};\n\n//# sourceURL=webpack:///./src/js/views/outfitView.js?");

/***/ })

/******/ });