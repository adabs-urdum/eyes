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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction Observer(initials) {\n  var observer = document.getElementsByClassName('observer')[0];\n  var eyes = observer.getElementsByClassName('observer__sclera');\n  var maxMoveIris = initials.maxMoveIris;\n  var maxMovePupil = initials.maxMovePupil;\n  var maxScaleIris = initials.maxScaleIris;\n  var threshold = initials.threshold;\n\n  function Eye(sclera, i) {\n    var _this = this;\n\n    this.constructor = function (sclera, i) {\n      _this.sclera = sclera;\n      _this.iris = sclera.getElementsByClassName('observer__iris')[0];\n      _this.pupil = _this.iris.getElementsByClassName('observer__pupil')[0];\n\n      _this.getEyePosition();\n\n      _this.bindEvents();\n    };\n\n    this.bindEvents = function () {\n      window.addEventListener('mousemove', _this.handleMouseMove);\n    };\n\n    this.getMousePosition = function (e) {\n      _this.difference = {\n        x: e.clientX - _this.eyeCenterX,\n        y: e.clientY - _this.eyeCenterY\n      };\n      _this.differencePercentage = {\n        x: _this.difference.x,\n        y: _this.difference.y\n      };\n    };\n\n    this.handleMouseMove = function (e) {\n      _this.getMousePosition(e);\n\n      _this.setIrisOffset();\n\n      _this.setPupilOffset();\n    };\n\n    this.setPupilOffset = function () {\n      var offsetX = maxMovePupil / 100 * _this.differencePercentage.x - 50;\n      var offsetY = maxMovePupil / 100 * _this.differencePercentage.y - 50;\n      _this.pupil.style.transform = 'translate(' + offsetX + '%, ' + offsetY + '%)';\n    };\n\n    this.setIrisOffset = function () {\n      var offsetX = maxMoveIris / 100 * _this.differencePercentage.x;\n      var offsetY = maxMoveIris / 100 * _this.differencePercentage.y;\n      var translate = 'translate(' + offsetX + '%, ' + offsetY + '%)';\n      var scaleX = maxScaleIris / 100 * _this.differencePercentage.x > 0 ? 1 - maxScaleIris / 100 * _this.differencePercentage.x : 1 - maxScaleIris / 100 * _this.differencePercentage.x * -1;\n      var scaleY = maxScaleIris / 100 * _this.differencePercentage.y > 0 ? 1 - maxScaleIris / 100 * _this.differencePercentage.y : 1 - maxScaleIris / 100 * _this.differencePercentage.y * -1;\n      var scale = ' scaleX(' + scaleX + ')';\n      scale += ' scaleY(' + scaleY + ')';\n      _this.iris.style.transform = translate + scale;\n    };\n\n    this.getEyePosition = function () {\n      var eyeBox = _this.sclera.getBoundingClientRect();\n\n      _this.eyeCenterX = eyeBox.left + eyeBox.width / 2;\n      _this.eyeCenterY = eyeBox.top + eyeBox.height / 2;\n    };\n\n    this.constructor(sclera);\n  }\n\n  var windowWidth, windowHeight, i;\n\n  function init() {\n    setVars();\n    bindEvents();\n    var i = 0;\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = eyes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var sclera = _step.value;\n        var eye = new Eye(sclera, i);\n        i += 1;\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n  }\n\n  function setVars() {\n    getWindowSize();\n  }\n\n  function bindEvents() {\n    window.addEventListener('resize', handleWindowResize);\n  }\n\n  function handleWindowResize() {\n    getWindowSize();\n  }\n\n  function getWindowSize() {\n    windowWidth = window.innerWidth;\n    windowHeight = window.innerHeight;\n  }\n\n  init();\n}\n\nObserver({\n  maxMoveIris: 55,\n  maxMovePupil: 15,\n  maxScaleIris: 0.13,\n  threshold: 100\n});\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ })

/******/ });