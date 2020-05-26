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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!*********************************!*\
  !*** ./example/src/js/app-b.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgs_smiley_surprised_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svgs/smiley-surprised.svg */ 6);
/* harmony import */ var _svgs_smiley_surprised_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_svgs_smiley_surprised_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svgs_popcorn_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svgs/popcorn.svg */ 7);
/* harmony import */ var _svgs_popcorn_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svgs_popcorn_svg__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),
/* 6 */
/*!***********************************************!*\
  !*** ./example/src/svgs/smiley-surprised.svg ***!
  \***********************************************/
/***/ (function(module, exports) {

"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Calque_1\"\n\txmlns=\"http://www.w3.org/2000/svg\"\n\txmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 41 40\" style=\"enable-background:new 0 0 41 40;\" xml:space=\"preserve\">\n\t<style type=\"text/css\">\n\t.st0{fill:#FFD93B;}\n\t.st1{fill:#F4C534;}\n\t.st2{fill:#3E4347;}\n\t.st3{fill:#FFFFFF;}\n\t.st4{fill:#5A5F63;}\n\t.st5{fill:#E9B02C;}\n</style>\n\t<title>surprised</title>\n\t<desc>Created with Sketch.</desc>\n\t<g id=\"Parcours-tests-utilisateurs\">\n\t\t<g id=\"Recuperation-de-grille\" transform=\"translate(-779.000000, -558.000000)\">\n\t\t\t<g id=\"Group-4\" transform=\"translate(536.000000, 518.000000)\">\n\t\t\t\t<g id=\"surprised\" transform=\"translate(243.215686, 40.000000)\">\n\t\t\t\t\t<circle id=\"Oval\" class=\"st0\" cx=\"20\" cy=\"20\" r=\"20\"/>\n\t\t\t\t\t<path id=\"Path\" class=\"st1\" d=\"M40,20c0,11-9,20-20,20c-6.3,0-11.9-2.9-15.6-7.4C7.9,35.3,12.2,37,17,37c11,0,20-8.9,20-20\n\t\t\t\t\tc0-4.8-1.7-9.1-4.4-12.6C37.1,8.1,40,13.7,40,20z\"/>\n\t\t\t\t\t<circle id=\"Oval_1_\" class=\"st2\" cx=\"20\" cy=\"31.2\" r=\"3.5\"/>\n\t\t\t\t\t<path id=\"Path_1_\" class=\"st3\" d=\"M31.3,19.5c0,2.5-2,4.5-4.5,4.5s-4.5-2-4.5-4.5c0-2.5,2-4.5,4.5-4.5S31.3,17,31.3,19.5z\"/>\n\t\t\t\t\t<circle id=\"Oval_2_\" class=\"st2\" cx=\"26.7\" cy=\"19.5\" r=\"2.1\"/>\n\t\t\t\t\t<path id=\"Path_2_\" class=\"st4\" d=\"M27.9,19.3c-0.2,0.1-0.5,0-0.7-0.2c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.1,0.5,0,0.7,0.2\n\t\t\t\t\tC28,18.9,28,19.2,27.9,19.3z\"/>\n\t\t\t\t\t<path id=\"Path_3_\" class=\"st5\" d=\"M32.4,13.8c0.1,0.7,0.1,1.5-0.1,2.1c-0.9-2.5-3.4-4-6.1-3.5l0,0c-1,0.2-1.5-1.1-0.6-1.6\n\t\t\t\t\tc0.7-0.4,1.4-0.7,2.3-0.7C30,10.1,32,11.7,32.4,13.8z\"/>\n\t\t\t\t\t<path id=\"Path_4_\" class=\"st3\" d=\"M8.7,19.5c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5c0-2.5-2-4.5-4.5-4.5S8.7,17,8.7,19.5z\"/>\n\t\t\t\t\t<circle id=\"Oval_3_\" class=\"st2\" cx=\"13.3\" cy=\"19.5\" r=\"2.1\"/>\n\t\t\t\t\t<path id=\"Path_5_\" class=\"st4\" d=\"M12.1,19.3c0.2,0.1,0.5,0,0.7-0.2c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.1-0.5,0-0.7,0.2\n\t\t\t\t\tC11.9,18.9,12,19.2,12.1,19.3z\"/>\n\t\t\t\t\t<path id=\"Path_6_\" class=\"st5\" d=\"M7.6,13.8c-0.1,0.7-0.1,1.5,0.1,2.1c0.9-2.5,3.4-4,6.1-3.5l0,0c1,0.2,1.5-1.1,0.6-1.6\n\t\t\t\t\tc-0.7-0.4-1.4-0.7-2.3-0.7C10,10.1,8,11.7,7.6,13.8z\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n</svg>\n"

/***/ }),
/* 7 */
/*!**************************************!*\
  !*** ./example/src/svgs/popcorn.svg ***!
  \**************************************/
/***/ (function(module, exports) {

"<svg\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n\t<path d=\"M15.4 4.5c-2 0-3.6 1.6-3.6 3.6 0 .5.4.9.9.9s.9-.4.9-.9c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c0 .5.4.9.9.9s.9-.4.9-.9c0-2-1.6-3.6-3.6-3.6z\"/>\n\t<path d=\"M29.1 9c0-1.3-.9-2.5-2.1-2.8-.4-2.4-2.4-4.2-4.9-4.2-.6 0-1.2.1-1.8.3C19.4.9 17.9 0 16.1 0c-1.8 0-3.3.9-4.2 2.3-.6-.2-1.2-.3-1.8-.3-2.5 0-4.5 1.8-4.9 4.2C4 6.5 3.1 7.7 3.1 9c0 .7.3 1.4.7 1.9-.5.5-.9 1.3-.9 2.1 0 .2 0 .4.1.6l3.2 16C6.4 31 7.7 32 9.1 32h13.8c1.4 0 2.7-1 2.9-2.4l3.2-16c0-.2.1-.4.1-.6 0-.8-.3-1.5-.8-2 .5-.5.8-1.2.8-2zM9 30c-.5 0-.9-.3-1-.8l-3.2-16V13c0-.5.4-1 1-1H9v.1L10 30H9zm6 0h-3v-.1L11 12h4v18zm5 0h-3V12h4l-1 18zm7-16.8l-3.2 16c-.1.5-.5.8-1 .8H22l1-17.9V12h3c.6 0 1 .5 1 1v.2zM26 10H6c-.6 0-1-.4-1-1s.4-1 1-1c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7 0-1.7 1.3-3 3-3 .6 0 1.2.2 1.7.5.3.2.6.2.9.1.3-.1.5-.3.6-.6.4-1.2 1.5-2 2.8-2 1.3 0 2.4.8 2.8 2 .1.3.3.5.6.6.3.1.6.1.9-.1.5-.3 1.1-.5 1.7-.5 1.7 0 3 1.3 3 3 0 .3.1.5.3.7.2.2.4.3.7.3.6 0 1 .4 1 1s-.4 1-1 1z\"/>\n</svg>"

/***/ })
/******/ ]);