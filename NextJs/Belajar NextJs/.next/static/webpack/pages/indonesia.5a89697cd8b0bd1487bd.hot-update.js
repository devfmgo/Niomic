webpackHotUpdate_N_E("pages/indonesia",{

/***/ "./util/library.js":
/*!*************************!*\
  !*** ./util/library.js ***!
  \*************************/
/*! exports provided: sum, getAllMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllMonth\", function() { return getAllMonth; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n * Berfungsi untuk menampilkan data covid19 secara global\n * maupun indonesia\n */\nvar sum = function sum(key, props) {\n  if (props.isGlobal == false) {\n    switch (key) {\n      case 'Confirmed':\n        return props.data[0].positif;\n\n      case 'Recovered':\n        return props.data[0].sembuh;\n\n      case 'Deaths':\n        return props.data[0].meninggal;\n\n      case 'Active':\n        return props.data[0].dirawat;\n\n      default:\n        return 0;\n    }\n  } else {\n    switch (key) {\n      case 'Confirmed':\n        return props.data.reduce(function (sum, a) {\n          return sum + a.attributes.Confirmed;\n        }, 0);\n\n      case 'Recovered':\n        return props.data.reduce(function (sum, a) {\n          return sum + a.attributes.Recovered;\n        }, 0);\n\n      case 'Deaths':\n        return props.data.reduce(function (sum, a) {\n          return sum + a.attributes.Deaths;\n        }, 0);\n\n      case 'Active':\n        return props.data.reduce(function (sum, a) {\n          return sum + a.attributes.Active;\n        }, 0);\n\n      default:\n        return 0;\n    }\n  }\n};\nvar getAllMonth = function getAllMonth(props) {\n  var monthEng = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'];\n  var nowDate = new Date();\n  var day = null;\n  var month = null;\n  var year = null;\n  var label = [];\n  var positif = [];\n  var sembuh = [];\n  var meninggal = [];\n  var active = [];\n  var data = [];\n\n  var _iterator = _createForOfIteratorHelper(props.statistik),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var value = _step.value;\n      nowDate = new Date(value.Date);\n      day = nowDate.getDate();\n      month = nowDate.getMonth();\n      year = nowDate.getYear();\n      label.push(day + \" \" + monthEng[Math.abs(month)]);\n      active.push(value.Active);\n      sembuh.push(value.Recovered);\n      meninggal.push(value.Deaths);\n      positif.push(value.Confirmed);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  data = {\n    label: label,\n    active: active,\n    sembuh: sembuh,\n    meninggal: meninggal,\n    positif: positif\n  };\n  return data;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9saWJyYXJ5LmpzPzI0NmQiXSwibmFtZXMiOlsic3VtIiwia2V5IiwicHJvcHMiLCJpc0dsb2JhbCIsImRhdGEiLCJwb3NpdGlmIiwic2VtYnVoIiwibWVuaW5nZ2FsIiwiZGlyYXdhdCIsInJlZHVjZSIsImEiLCJhdHRyaWJ1dGVzIiwiQ29uZmlybWVkIiwiUmVjb3ZlcmVkIiwiRGVhdGhzIiwiQWN0aXZlIiwiZ2V0QWxsTW9udGgiLCJtb250aEVuZyIsIm5vd0RhdGUiLCJEYXRlIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwibGFiZWwiLCJhY3RpdmUiLCJzdGF0aXN0aWsiLCJ2YWx1ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldFllYXIiLCJwdXNoIiwiTWF0aCIsImFicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFVQyxHQUFWLEVBQWNDLEtBQWQsRUFBb0I7QUFDbkMsTUFBSUEsS0FBSyxDQUFDQyxRQUFOLElBQWtCLEtBQXRCLEVBQTZCO0FBQ3pCLFlBQVFGLEdBQVI7QUFDSSxXQUFLLFdBQUw7QUFDSSxlQUFPQyxLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFYLEVBQWNDLE9BQXJCOztBQUNKLFdBQUssV0FBTDtBQUNJLGVBQU9ILEtBQUssQ0FBQ0UsSUFBTixDQUFXLENBQVgsRUFBY0UsTUFBckI7O0FBQ0osV0FBSyxRQUFMO0FBQ0ksZUFBT0osS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBWCxFQUFjRyxTQUFyQjs7QUFDSixXQUFLLFFBQUw7QUFDSSxlQUFPTCxLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFYLEVBQWNJLE9BQXJCOztBQUNKO0FBQ0ksZUFBTyxDQUFQO0FBVlI7QUFZSCxHQWJELE1BYUs7QUFDRCxZQUFRUCxHQUFSO0FBQ0ksV0FBSyxXQUFMO0FBQ0ksZUFBT0MsS0FBSyxDQUFDRSxJQUFOLENBQVdL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LFdBQU8sRUFBR0E7QUFMUixHQUFOO0FBT0EsU0FBT0QsSUFBUDtBQUNILENBL0JNIiwiZmlsZSI6Ii4vdXRpbC9saWJyYXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCZXJmdW5nc2kgdW50dWsgbWVuYW1waWxrYW4gZGF0YSBjb3ZpZDE5IHNlY2FyYSBnbG9iYWxcbiAqIG1hdXB1biBpbmRvbmVzaWFcbiAqL1xuZXhwb3J0IGNvbnN0IHN1bSA9IGZ1bmN0aW9uIChrZXkscHJvcHMpe1xuICAgIGlmIChwcm9wcy5pc0dsb2JhbCA9PSBmYWxzZSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnQ29uZmlybWVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5wb3NpdGlmO1xuICAgICAgICAgICAgY2FzZSAnUmVjb3ZlcmVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5zZW1idWg7XG4gICAgICAgICAgICBjYXNlICdEZWF0aHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLm1lbmluZ2dhbDtcbiAgICAgICAgICAgIGNhc2UgJ0FjdGl2ZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0uZGlyYXdhdDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ0NvbmZpcm1lZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sYSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5Db25maXJtZWQ7XG4gICAgICAgICAgICAgICAgfSwwIClcbiAgICAgICAgICAgIGNhc2UgJ1JlY292ZXJlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sYSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5SZWNvdmVyZWQ7XG4gICAgICAgICAgICAgICAgfSwwIClcbiAgICAgICAgICAgIGNhc2UgJ0RlYXRocyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sYSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5EZWF0aHM7XG4gICAgICAgICAgICAgICAgfSwwIClcbiAgICAgICAgICAgIGNhc2UgJ0FjdGl2ZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sYSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5BY3RpdmU7XG4gICAgICAgICAgICAgICAgfSwwIClcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiBleHBvcnQgY29uc3QgZ2V0QWxsTW9udGggPSBmdW5jdGlvbihwcm9wcyl7XG4gICAgIGNvbnN0IG1vbnRoRW5nID0gWydKYW4nLCdGZWInLCdNYXInLCdBcHInLCdKdW4nLCdKdWwnLCdBdWcnLCdTZXAnLCdPY3QnLCdOb3YnLCdEZXMnXVxuICAgICBsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgIGxldCBkYXkgPSBudWxsO1xuICAgICBsZXQgbW9udGggPSBudWxsO1xuICAgICBsZXQgeWVhciA9IG51bGw7XG4gICAgIGxldCBsYWJlbCA9IFtdO1xuICAgICBsZXQgcG9zaXRpZiA9IFtdO1xuICAgICBsZXQgc2VtYnVoID0gW107XG4gICAgIGxldCBtZW5pbmdnYWwgPSBbXTtcbiAgICAgbGV0IGFjdGl2ZSA9IFtdO1xuICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICBmb3IgKGxldCB2YWx1ZSBvZiBwcm9wcy5zdGF0aXN0aWspIHtcbiAgICAgICAgIG5vd0RhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5EYXRlKTtcbiAgICAgICAgIGRheSA9bm93RGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICBtb250aCA9IG5vd0RhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgIHllYXIgPSBub3dEYXRlLmdldFllYXIoKTtcbiAgICAgICAgIGxhYmVsLnB1c2goZGF5ICsgXCIgXCIgKyBtb250aEVuZ1tNYXRoLmFicyhtb250aCldKVxuICAgICAgICAgYWN0aXZlLnB1c2godmFsdWUuQWN0aXZlKTtcbiAgICAgICAgIHNlbWJ1aC5wdXNoKHZhbHVlLlJlY292ZXJlZCk7XG4gICAgICAgICBtZW5pbmdnYWwucHVzaCh2YWx1ZS5EZWF0aHMpO1xuICAgICAgICAgcG9zaXRpZi5wdXNoKHZhbHVlLkNvbmZpcm1lZCk7XG4gICAgIH0gXG4gICAgIGRhdGE9IHtcbiAgICAgICAgIGxhYmVsIDpsYWJlbCxcbiAgICAgICAgIGFjdGl2ZSA6IGFjdGl2ZSxcbiAgICAgICAgIHNlbWJ1aCA6IHNlbWJ1aCxcbiAgICAgICAgIG1lbmluZ2dhbCA6IG1lbmluZ2dhbCxcbiAgICAgICAgIHBvc2l0aWYgOiBwb3NpdGlmXG4gICAgIH1cbiAgICAgcmV0dXJuIGRhdGE7XG4gfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/library.js\n");

/***/ })

})