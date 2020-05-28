(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\nconst config = {\n    gwKey: 'wugou4s1fl2ii5sbbgog9001',\n    requestUrl: '/distribute'\n}\n\n//# sourceURL=webpack:///./src/config/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logUpload */ \"./src/logUpload.js\");\n/*\n * @Description: \n * @Author: cooky\n * @Date: 2020-05-14 17:31:55\n * @LastEditors: cooky\n * @LastEditTime: 2020-05-27 20:24:41\n */ \n\nconst GlobalError = {\n  install (Vue, {url, logType, success, fail}) {\n    this.apiUrl = url\n    this.logType = logType\n    this.successCallBack = success\n    this.failCallBack = fail\n    this.initVueEvent(Vue)\n    this.initGlobalEvent()\n  },\n  init ({url, logType, success, fail}) {\n    this.apiUrl = url\n    this.logType = logType\n    this.successCallBack = success\n    this.failCallBack = fail\n    this.initGlobalEvent()\n  },\n  initGlobalEvent () {\n    // 当 Promise 被 reject 并且没有得到处理理的时候，会触发 unhandledrejection 事件。所以可以对此事件进⾏行行监听，将错误信息捕获上报。\n    // 异步事件没有进行try catch捕获，也会触发unhandledrejection事件\n    window.addEventListener('unhandledrejection', e => {\n      throw e.reason // reason是error对象， 此处抛出错误，在error事件中统一处理\n    })\n    // 当发⽣生 JavaScript 运⾏行行时错误（包括处理理程序中引发的语法错误和异常）时，使⽤用接⼝口 ErrorEvent 的 error 事件将在 window 被触发，并被 window.onerror() 调⽤用\n    window.addEventListener('error', args => {\n      console.log('error event: ', args)\n      if (args.message === 'Script error.') {\n        return\n      }\n      this.error(args.error)\n      return true\n    }, true)\n  },\n  initVueEvent (Vue) {\n    Vue.config.errorHandler = this.error.bind(this)\n    Vue.prototype.$throw = this.error.bind(this)\n  },\n  error (err, { type = 'code', errorCode = 203001 } = {}) {\n    const errorParams = {\n      type,\n      errorMsg: err.message,\n      errorCode,\n      stack: err.stack,\n    }\n    if (typeof console !== 'undefined' && typeof console.error === 'function') {\n      console.error(err.stack, errorParams)\n    }\n    Object(_logUpload__WEBPACK_IMPORTED_MODULE_0__[\"uploadLog\"])({stackInfo: errorParams, logType: this.logType}, this.apiUrl, this.successCallBack, this.failCallBack)\n  }\n}\nwindow.GlobalError = GlobalError\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalError);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logUpload.js":
/*!**************************!*\
  !*** ./src/logUpload.js ***!
  \**************************/
/*! exports provided: uploadLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadLog\", function() { return uploadLog; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config/index.js\");\n/*\r\n * @Description: 日志上报接口\r\n * @Author: cooky\r\n * @Date: 2020-05-14 17:33:03\r\n * @LastEditors: cooky\r\n * @LastEditTime: 2020-05-27 20:19:59\r\n */ \r\n\r\n\r\nfunction uploadLog ({stackInfo, ext, logType, levelName = 'ERROR'}, url = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].requestUrl,  successCallBack, failCallBack) {\r\n  const parameter = {\r\n    act_id: '1404',\r\n    log_type: logType,\r\n    stack_info: [{ ...stackInfo, level_name: levelName }],\r\n    ext\r\n  }\r\n  // post(url, parameter)\r\n  ajax({\r\n        type: 'post',\r\n        data: parameter,\r\n        url,\r\n        headers: {\r\n          'Gw-key': _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].gwKey\r\n        },\r\n        success: successCallBack,\r\n        fail: failCallBack\r\n      })\r\n}\r\n// export function post(url, parameter) {\r\n//     var XMLHttpRequest = window.__oXMLHttpRequest_ || window.XMLHttpRequest;\r\n//     if (typeof XMLHttpRequest === 'function') {\r\n//       try {\r\n//         var xhr = new XMLHttpRequest();\r\n//         xhr.open(\"POST\", url, !0)\r\n//         xhr.setRequestHeader(\"Content-Type\", \"application/json;charset=UTF-8\")\r\n//         xhr.setRequestHeader(\"Gw-key\", config.gwKey)\r\n//         xhr.send(JSON.stringify(parameter))\r\n//       } catch (e) {\r\n//         console.error('Failed to log, POST请求失败', e)\r\n//       }\r\n//     } else {\r\n//       console.error('Failed to log, 浏览器不支持XMLHttpRequest')\r\n//     }\r\n//   }\r\nfunction ajax(options) {\r\n    options = options || {};\r\n    options.type = (options.type || \"GET\").toUpperCase();\r\n    options.dataType = \"json\";\r\n    var params = formatParams(options.data);\r\n\r\n    if (window.XMLHttpRequest) {\r\n       var xhr = new XMLHttpRequest();\r\n    } else { \r\n       var xhr = new ActiveXObject('Microsoft.XMLHTTP');\r\n    }\r\n\r\n    xhr.onreadystatechange = function () {\r\n       if (xhr.readyState == 4) {\r\n           var status = xhr.status;\r\n           if (status >= 200 && status < 300) {\r\n               options.success && options.success(xhr.responseText, xhr.responseXML);\r\n           } else {\r\n               options.fail && options.fail(status);\r\n           }\r\n       }\r\n    }\r\n\r\n    if (options.type == \"GET\") {\r\n       xhr.open(\"GET\", options.url + \"?\" + params, true);\r\n       xhr.send(null);\r\n    } else if (options.type == \"POST\") {\r\n       xhr.open(\"POST\", options.url, true);\r\n       xhr.setRequestHeader(\"Content-Type\", \"application/json;charset=UTF-8\")\r\n       Object.keys(options.headers).forEach(key => {\r\n         xhr.setRequestHeader(key, options.headers[key])\r\n       })\r\n       //设置表单提交时的内容类型\r\n      //  xhr.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\r\n       xhr.send(JSON.stringify(options.data));\r\n    }\r\n}\r\n/*\r\n*格式化参数\r\n*/\r\nfunction formatParams(data) {\r\n  var arr = [];\r\n  for (var name in data) {\r\n      arr.push(encodeURIComponent(name) + \"=\" + encodeURIComponent(data[name]));\r\n  }\r\n  arr.push((\"v=\" + Math.random()).replace(\".\",\"\"));\r\n  return arr.join(\"&\");\r\n}\n\n//# sourceURL=webpack:///./src/logUpload.js?");

/***/ })

/******/ });
});