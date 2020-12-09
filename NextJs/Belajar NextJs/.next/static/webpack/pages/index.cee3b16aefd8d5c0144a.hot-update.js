webpackHotUpdate_N_E("pages/index",{

/***/ "./util/library.js":
/*!*************************!*\
  !*** ./util/library.js ***!
  \*************************/
/*! exports provided: sum, getAllMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllMonth\", function() { return getAllMonth; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n * Berfungsi untuk menampilkan data covid19 secara global\n * maupun indonesia\n */\nvar sum = function sum(key, props) {\n  if (props.isGlobal == false) {\n    switch (key) {\n      case 'Confirmed':\n        return props.data[0].positif;\n\n      case 'Recovered':\n        return props.data[0].sembuh;\n\n      case 'Deaths':\n        return props.data[0].meninggal;\n\n      case 'Active':\n        return props.data[0].dirawat;\n\n      default:\n        return 0;\n    }\n  } else {\n    switch (key) {\n      case 'Confirmed':\n        return props.data.reduce(function (sum, a) {\n          return sum + a.attributes.Confirmed;\n        }, 0);\n\n      case 'Recovered':\n        return props.data.reduce(function (sum, a) {\n          return sum + a.attributes.Recovered;\n        }, 0);\n\n      case 'Deaths':\n        return props.data.reduce(function (sum, a) {\n          return sum + a.attributes.Deaths;\n        }, 0);\n\n      case 'Active':\n        return props.data.reduce(function (sum, a) {\n          return sum + a.attributes.Active;\n        }, 0);\n\n      default:\n        return 0;\n    }\n  }\n};\nvar getAllMonth = function getAllMonth(props) {\n  var monthEng = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'];\n  var nowDate = new Date();\n  var day = null;\n  var year = null;\n  var label = [];\n  var positif = [];\n  var meninggal = [];\n  var data = [];\n\n  var _iterator = _createForOfIteratorHelper(props.statistik),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var value = _step.value;\n      nowDate = new Date(value.Date);\n      day = newData.getDate();\n      month = newData.getMonth();\n      year = newData.getYear();\n      label.push(day + \" \" + monthEng[Math.abs(month)]);\n      active.push(value.Active);\n      sembuh.push(value.Recovered);\n      meninggal.push(value.Deaths);\n      positif.push(value.Confirmed);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9saWJyYXJ5LmpzPzI0NmQiXSwibmFtZXMiOlsic3VtIiwia2V5IiwicHJvcHMiLCJpc0dsb2JhbCIsImRhdGEiLCJwb3NpdGlmIiwic2VtYnVoIiwibWVuaW5nZ2FsIiwiZGlyYXdhdCIsInJlZHVjZSIsImEiLCJhdHRyaWJ1dGVzIiwiQ29uZmlybWVkIiwiUmVjb3ZlcmVkIiwiRGVhdGhzIiwiQWN0aXZlIiwiZ2V0QWxsTW9udGgiLCJtb250aEVuZyIsIm5vd0RhdGUiLCJEYXRlIiwiZGF5IiwieWVhciIsImxhYmVsIiwic3RhdGlzdGlrIiwidmFsdWUiLCJuZXdEYXRhIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXRZZWFyIiwicHVzaCIsIk1hdGgiLCJhYnMiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBVUMsR0FBVixFQUFjQyxLQUFkLEVBQW9CO0FBQ25DLE1BQUlBLEtBQUssQ0FBQ0MsUUFBTixJQUFrQixLQUF0QixFQUE2QjtBQUN6QixZQUFRRixHQUFSO0FBQ0ksV0FBSyxXQUFMO0FBQ0ksZUFBT0MsS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBWCxFQUFjQyxPQUFyQjs7QUFDSixXQUFLLFdBQUw7QUFDSSxlQUFPSCxLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFYLEVBQWNFLE1BQXJCOztBQUNKLFdBQUssUUFBTDtBQUNJLGVBQU9KLEtBQUssQ0FBQ0UsSUFBTixDQUFXLENBQVgsRUFBY0csU0FBckI7O0FBQ0osV0FBSyxRQUFMO0FBQ0ksZUFBT0wsS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBWCxFQUFjSSxPQUFyQjs7QUFDSjtBQUNJLGVBQU8sQ0FBUDtBQVZSO0FBWUgsR0FiRCxNQWFLO0FBQ0QsWUFBUVAsR0FBUjtBQUNJLFdBQUssV0FBTDtBQUNJLGVBQU9DLEtBQUssQ0FBQ0UsSUFBTixDQUFXSyxNQUFYLENBQWtCLFVBQUNULEdBQUQsRUFBS1UsQ0FBTCxFQUFTO0FBQzlCLGlCQUFPVixHQUFHLEdBQUdVLENBQUMsQ0FBQ0MsVUFBRixDQUFhQyxTQUExQjtBQUNILFNBRk0sRUFFTCxDQUZLLENBQVA7O0FBR0osV0FBSyxXQUFMO0FBQ0ksZUFBT1YsS0FBSyxDQUFDRSxJQUFOLENBQVdLLE1BQVgsQ0FBa0IsVUFBQ1QsR0FBRCxFQUFLVSxDQUFMLEVBQVM7QUFDOUIsaUJBQU9WLEdBQUcsR0FBR1UsQ0FBQyxDQUFDQyxVQUFGLENBQWFFLFNBQTFCO0FBQ0gsU0FGTSxFQUVMLENBRkssQ0FBUDs7QUFHSixXQUFLLFFBQUw7QUFDSSxlQUFPWCxLQUFLLENBQUNFLElBQU4sQ0FBV0ssTUFBWCxDQUFrQixVQUFDVCxHQUFELEVBQUtVLENBQUwsRUFBUztBQUM5QixpQkFBT1YsR0FBRyxHQUFHVSxDQUFDLENBQUNDLFVBQUYsQ0FBYUcsTUFBMUI7QUFDSCxTQUZNLEVBRUwsQ0FGSyxDQUFQOztBQUdKLFdBQUssUUFBTDtBQUNJLGVBQU9aLEtBQUssQ0FBQ0UsSUFBTixDQUFXSyxNQUFYLENBQWtCLFVBQUNULEdBQUQsRUFBS1UsQ0FBTCxFQUFTO0FBQzlCLGlCQUFPVixHQUFHLEdBQUdVLENBQUMsQ0FBQ0MsVUFBRixDQUFhSSxNQUExQjtBQUNILFNBRk0sRUFFTCxDQUZLLENBQVA7O0FBR0o7QUFDSSxlQUFPLENBQVA7QUFsQlI7QUFvQkg7QUFDSixDQXBDTTtBQXNDQyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFTZCxLQUFULEVBQWU7QUFDdEMsTUFBTWUsUUFBUSxHQUFHLENBQUMsS0FBRCxFQUFPLEtBQVAsRUFBYSxLQUFiLEVBQW1CLEtBQW5CLEVBQXlCLEtBQXpCLEVBQStCLEtBQS9CLEVBQXFDLEtBQXJDLEVBQTJDLEtBQTNDLEVBQWlELEtBQWpELEVBQXVELEtBQXZELEVBQTZELEtBQTdELENBQWpCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQUlDLElBQUosRUFBZDtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlqQixPQUFPLEdBQUcsRUFBZDtBQUNBLE1BQUlFLFNBQVMsR0FBRyxFQUFoQjtBQUNBLE1BQUlILElBQUksR0FBRyxFQUFYOztBQVJzQyw2Q0FTcEJGLEtBQUssQ0FBQ3FCLFNBVGM7QUFBQTs7QUFBQTtBQVN0Qyx3REFBbUM7QUFBQSxVQUExQkMsS0FBMEI7QUFDL0JOLGFBQU8sR0FBRyxJQUFJQyxJQUFKLENBQVNLLEtBQUssQ0FBQ0wsSUFBZixDQUFWO0FBQ0FDLFNBQUcsR0FBRUssT0FBTyxDQUFDQyxPQUFSLEVBQUw7QUFDQUMsV0FBSyxHQUFHRixPQUFPLENBQUNHLFFBQVIsRUFBUjtBQUNBUCxVQUFJLEdBQUdJLE9BQU8sQ0FBQ0ksT0FBUixFQUFQO0FBQ0FQLFdBQUssQ0FBQ1EsSUFBTixDQUFXVixHQUFHLEdBQUcsR0FBTixHQUFZSCxRQUFRLENBQUNjLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxLQUFULENBQUQsQ0FBL0I7QUFDQU0sWUFBTSxDQUFDSCxJQUFQLENBQVlOLEtBQUssQ0FBQ1QsTUFBbEI7QUFDQVQsWUFBTSxDQUFDd0IsSUFBUCxDQUFZTixLQUFLLENBQUNYLFNBQWxCO0FBQ0FOLGVBQVMsQ0FBQ3VCLElBQVYsQ0FBZU4sS0FBSyxDQUFDVixNQUFyQjtBQUNBVCxhQUFPLENBQUN5QixJQUFSLENBQWFOLEtBQUssQ0FBQ1osU0FBbkI7QUFDSDtBQW5CcUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9CekMsQ0FwQk0iLCJmaWxlIjoiLi91dGlsL2xpYnJhcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJlcmZ1bmdzaSB1bnR1ayBtZW5hbXBpbGthbiBkYXRhIGNvdmlkMTkgc2VjYXJhIGdsb2JhbFxuICogbWF1cHVuIGluZG9uZXNpYVxuICovXG5leHBvcnQgY29uc3Qgc3VtID0gZnVuY3Rpb24gKGtleSxwcm9wcyl7XG4gICAgaWYgKHByb3BzLmlzR2xvYmFsID09IGZhbHNlKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdDb25maXJtZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnBvc2l0aWY7XG4gICAgICAgICAgICBjYXNlICdSZWNvdmVyZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnNlbWJ1aDtcbiAgICAgICAgICAgIGNhc2UgJ0RlYXRocyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0ubWVuaW5nZ2FsO1xuICAgICAgICAgICAgY2FzZSAnQWN0aXZlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5kaXJhd2F0O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnQ29uZmlybWVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSxhKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLkNvbmZpcm1lZDtcbiAgICAgICAgICAgICAgICB9LDAgKVxuICAgICAgICAgICAgY2FzZSAnUmVjb3ZlcmVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSxhKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLlJlY292ZXJlZDtcbiAgICAgICAgICAgICAgICB9LDAgKVxuICAgICAgICAgICAgY2FzZSAnRGVhdGhzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSxhKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLkRlYXRocztcbiAgICAgICAgICAgICAgICB9LDAgKVxuICAgICAgICAgICAgY2FzZSAnQWN0aXZlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSxhKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLkFjdGl2ZTtcbiAgICAgICAgICAgICAgICB9LDAgKVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIGV4cG9ydCBjb25zdCBnZXRBbGxNb250aCA9IGZ1bmN0aW9uKHByb3BzKXtcbiAgICAgY29uc3QgbW9udGhFbmcgPSBbJ0phbicsJ0ZlYicsJ01hcicsJ0FwcicsJ0p1bicsJ0p1bCcsJ0F1ZycsJ1NlcCcsJ09jdCcsJ05vdicsJ0RlcyddXG4gICAgIGxldCBub3dEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgbGV0IGRheSA9IG51bGw7XG4gICAgIGxldCB5ZWFyID0gbnVsbDtcbiAgICAgbGV0IGxhYmVsID0gW107XG4gICAgIGxldCBwb3NpdGlmID0gW107XG4gICAgIGxldCBtZW5pbmdnYWwgPSBbXTtcbiAgICAgbGV0IGRhdGEgPSBbXTtcbiAgICAgZm9yIChsZXQgdmFsdWUgb2YgcHJvcHMuc3RhdGlzdGlrKSB7XG4gICAgICAgICBub3dEYXRlID0gbmV3IERhdGUodmFsdWUuRGF0ZSk7XG4gICAgICAgICBkYXkgPW5ld0RhdGEuZ2V0RGF0ZSgpO1xuICAgICAgICAgbW9udGggPSBuZXdEYXRhLmdldE1vbnRoKCk7XG4gICAgICAgICB5ZWFyID0gbmV3RGF0YS5nZXRZZWFyKCk7XG4gICAgICAgICBsYWJlbC5wdXNoKGRheSArIFwiIFwiICsgbW9udGhFbmdbTWF0aC5hYnMobW9udGgpXSlcbiAgICAgICAgIGFjdGl2ZS5wdXNoKHZhbHVlLkFjdGl2ZSk7XG4gICAgICAgICBzZW1idWgucHVzaCh2YWx1ZS5SZWNvdmVyZWQpO1xuICAgICAgICAgbWVuaW5nZ2FsLnB1c2godmFsdWUuRGVhdGhzKTtcbiAgICAgICAgIHBvc2l0aWYucHVzaCh2YWx1ZS5Db25maXJtZWQpO1xuICAgICB9IFxuIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/library.js\n");

/***/ })

})