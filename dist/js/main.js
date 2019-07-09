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
eval("\n\nfunction Observer() {\n  var observer = document.getElementsByClassName('observer')[0];\n  var sclera = observer.getElementsByClassName('observer__sclera')[0];\n  var iris = sclera.getElementsByClassName('observer__iris')[0];\n  var pupil = iris.getElementsByClassName('observer__pupil')[0];\n  var maxMoveIris = 55;\n  var maxMovePupil = 15;\n  var maxScaleIris = 0.13;\n  var mouseX, mouseY, eyeCenterX, eyeCenterY, difference, differencePercentage, windowWidth, windowHeight;\n\n  function init() {\n    setVars();\n    bindEvents();\n  }\n\n  function setVars() {\n    getEyePosition();\n    getWindowSize();\n  }\n\n  function bindEvents() {\n    observer.addEventListener('mousemove', handleMouseMove);\n    window.addEventListener('resize', handleWindowResize);\n  }\n\n  function handleWindowResize() {\n    getEyePosition();\n    getWindowSize();\n  }\n\n  function getWindowSize() {\n    windowWidth = window.innerWidth;\n    windowHeight = window.innerHeight;\n  }\n\n  function handleMouseMove(e) {\n    getMousePosition(e);\n    setIrisOffset();\n    setPupilOffset();\n  }\n\n  function setPupilOffset() {\n    var offsetX = maxMovePupil / 100 * differencePercentage.x - 50;\n    var offsetY = maxMovePupil / 100 * differencePercentage.y - 50;\n    pupil.style.transform = 'translate(' + offsetX + '%, ' + offsetY + '%)';\n  }\n\n  function setIrisOffset() {\n    var offsetX = maxMoveIris / 100 * differencePercentage.x - 50;\n    var offsetY = maxMoveIris / 100 * differencePercentage.y - 50;\n    var translate = 'translate(' + offsetX + '%, ' + offsetY + '%)';\n    var scaleX = maxScaleIris / 100 * differencePercentage.x > 0 ? 1 - maxScaleIris / 100 * differencePercentage.x : 1 - maxScaleIris / 100 * differencePercentage.x * -1;\n    var scaleY = maxScaleIris / 100 * differencePercentage.y > 0 ? 1 - maxScaleIris / 100 * differencePercentage.y : 1 - maxScaleIris / 100 * differencePercentage.y * -1;\n    var scale = ' scaleX(' + scaleX + ')';\n    scale += ' scaleY(' + scaleY + ')';\n    iris.style.transform = translate + scale;\n  }\n\n  function getMousePosition(e) {\n    mouseX = e.clientX;\n    mouseY = e.clientY;\n    difference = {\n      x: mouseX - eyeCenterX,\n      y: mouseY - eyeCenterY\n    };\n    differencePercentage = {\n      x: 100 / eyeCenterX * difference.x,\n      y: 100 / eyeCenterY * difference.y\n    };\n  }\n\n  function getEyePosition() {\n    var eyeBox = sclera.getBoundingClientRect();\n    eyeCenterX = eyeBox.left + eyeBox.width / 2;\n    eyeCenterY = eyeBox.top + eyeBox.height / 2;\n  }\n\n  init();\n}\n\nObserver();\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ })

/******/ });