webpackHotUpdate_N_E("pages/indonesia",{

/***/ "./components/Dashboard/Grafik.js":
/*!****************************************!*\
  !*** ./components/Dashboard/Grafik.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-number-format */ \"./node_modules/react-number-format/dist/react-number-format.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/muhamadfikri/Developer/Learning/NextJs/Belajar NextJs/components/Dashboard/Grafik.js\",\n    _this = undefined;\n\n\n\n\n\nvar _require = __webpack_require__(/*! ../../util/library */ \"./util/library.js\"),\n    sum = _require.sum,\n    getAllMonth = _require.getAllMonth;\n\nvar Grafik = function Grafik(props) {\n  var dataCovid = null;\n  var data = null;\n\n  if (!props.isGlobal) {\n    var _ref;\n\n    dataCovid = getAllMonth(props);\n    data = {\n      labels: dataCovid.label,\n      datasets: [(_ref = {\n        label: \"Jumlah Positif\",\n        fill: false,\n        lineTension: 0.1,\n        backgroundColor: 'rgba(229,56,50,0.4)',\n        borderColor: 'rgba(229,56,56,1)',\n        borderCapStyle: 'butt',\n        borderDash: [],\n        borderDashOffset: 0.0,\n        borderJoinStyle: 'miter',\n        pointBorderColor: 'rgba(229,56,56,1)',\n        pointBackgroundColor: '#fff',\n        pointBorderWidth: 1,\n        pointHoverRadius: 10,\n        pointHoverBackgroundColor: 'rgba(229,56,56,1)',\n        pointHoverBorderColor: 'rgba(220,220,220,1)'\n      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"pointBorderWidth\", 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"pointHitRadius\", 10), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"data\", dataCovid), _ref)]\n    };\n  }\n\n  var dataPie = {\n    labels: ['Positif', 'Sembuh', 'Meninggal'],\n    datasets: [{\n      data: [sum('Confirmed', props), sum('Recovered', props), sum('Deaths', props)],\n      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],\n      pointHoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56']\n    }]\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"row mb-5\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"col-lg-12 col-md-12 col-sm-12 col-xl-12\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"card overflow-hidden bg-white\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"card-header\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n            className: \"card-title\",\n            children: props.isGlobal ? \"Statistik Virus Corona Di Dunia\" : \"Virus Corona Di Indonesia\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"card-body\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"chart-wrapper\",\n            children: props.isGlobal ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__[\"Pie\"], {\n              data: dataPie\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 29\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__[\"Line\"], {\n              data: data,\n              width: 100,\n              height: 50\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"row mt-6\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"col text-center\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n                className: \"font-weight-normal mt-2\",\n                children: \"Positif\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n                className: \"mb-1\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_number_format__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                  value: sum('Confirmed', props),\n                  displayType: 'text',\n                  thousandSeparator: \",\",\n                  decimalSeparator: \".\",\n                  defaultValue: 0\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 54\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                className: \"mb-0 text-muted\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n                  className: \"text-lg font-weight-700\",\n                  children: \"Orang\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 79,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"col text-center\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n                className: \"font-weight-normal mt-2\",\n                children: \"Sembuh\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n                className: \"mb-1\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_number_format__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                  value: sum('Recovered', props),\n                  displayType: 'text',\n                  thousandSeparator: \",\",\n                  decimalSeparator: \".\",\n                  defaultValue: 0\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 89,\n                  columnNumber: 54\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                className: \"mb-0 text-muted\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n                  className: \"text-lg font-weight-700\",\n                  children: \"Orang\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 91,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"col text-center\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n                className: \"font-weight-normal mt-2\",\n                children: \"Meninggal\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n                className: \"mb-1\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_number_format__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                  value: sum('Deaths', props),\n                  displayType: 'text',\n                  thousandSeparator: \",\",\n                  decimalSeparator: \".\",\n                  defaultValue: 0\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 102,\n                  columnNumber: 33\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                className: \"mb-0 text-muted\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n                  className: \"text-lg font-weight-700\",\n                  children: \"Orang\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 105,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 104,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Grafik;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grafik);\n\nvar _c;\n\n$RefreshReg$(_c, \"Grafik\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvR3JhZmlrLmpzPzMzYjYiXSwibmFtZXMiOlsicmVxdWlyZSIsInN1bSIsImdldEFsbE1vbnRoIiwiR3JhZmlrIiwicHJvcHMiLCJkYXRhQ292aWQiLCJkYXRhIiwiaXNHbG9iYWwiLCJsYWJlbHMiLCJsYWJlbCIsImRhdGFzZXRzIiwiZmlsbCIsImxpbmVUZW5zaW9uIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJDYXBTdHlsZSIsImJvcmRlckRhc2giLCJib3JkZXJEYXNoT2Zmc2V0IiwiYm9yZGVySm9pblN0eWxlIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRCb3JkZXJXaWR0aCIsInBvaW50SG92ZXJSYWRpdXMiLCJwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwiZGF0YVBpZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztlQUMyQkEsbUJBQU8sQ0FBRSw2Q0FBRixDO0lBQTNCQyxHLFlBQUFBLEc7SUFBS0MsVyxZQUFBQSxXOztBQUNaLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBUztBQUNwQixNQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFFQSxNQUFJLENBQUNGLEtBQUssQ0FBQ0csUUFBWCxFQUFxQjtBQUFBOztBQUNqQkYsYUFBUyxHQUFDSCxXQUFXLENBQUNFLEtBQUQsQ0FBckI7QUFDQUUsUUFBSSxHQUFHO0FBQ0hFLFlBQU0sRUFBRUgsU0FBUyxDQUFDSSxLQURmO0FBRUhDLGNBQVEsRUFBQztBQUVERCxhQUFLLEVBQUMsZ0JBRkw7QUFHREUsWUFBSSxFQUFHLEtBSE47QUFJREMsbUJBQVcsRUFBQyxHQUpYO0FBS0RDLHVCQUFlLEVBQUMscUJBTGY7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QUE7QUFBQSx1QkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZESCxDQS9HRDs7S0FBTUQsTTtBQWlIU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZC9HcmFmaWsuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmUsUGllfSBmcm9tICdyZWFjdC1jaGFydGpzLTInXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gJ3JlYWN0LW51bWJlci1mb3JtYXQnXG5jb25zdCB7c3VtLCBnZXRBbGxNb250aH0gPSByZXF1aXJlIChcIi4uLy4uL3V0aWwvbGlicmFyeVwiKVxuY29uc3QgR3JhZmlrID0gKHByb3BzKT0+e1xuICAgIGxldCBkYXRhQ292aWQgPSBudWxsO1xuICAgIGxldCBkYXRhID0gbnVsbDtcblxuICAgIGlmICghcHJvcHMuaXNHbG9iYWwpIHtcbiAgICAgICAgZGF0YUNvdmlkPWdldEFsbE1vbnRoKHByb3BzKTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGxhYmVscyA6ZGF0YUNvdmlkLmxhYmVsLFxuICAgICAgICAgICAgZGF0YXNldHM6W1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCJKdW1sYWggUG9zaXRpZlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxsIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOjAuMSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOidyZ2JhKDIyOSw1Niw1MCwwLjQpJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6J3JnYmEoMjI5LDU2LDU2LDEpJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6J2J1dHQnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoOltdLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OjAuMCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOidtaXRlcicsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6J3JnYmEoMjI5LDU2LDU2LDEpJyxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6JyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOjEsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6MTAsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6J3JnYmEoMjI5LDU2LDU2LDEpJyxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOidyZ2JhKDIyMCwyMjAsMjIwLDEpJyxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDoyLFxuICAgICAgICAgICAgICAgICAgICBwb2ludEhpdFJhZGl1czoxMCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUNvdmlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YVBpZSA9e1xuICAgICAgICBsYWJlbHM6W1xuICAgICAgICAgICAgJ1Bvc2l0aWYnLFxuICAgICAgICAgICAgJ1NlbWJ1aCcsXG4gICAgICAgICAgICAnTWVuaW5nZ2FsJ1xuICAgICAgICBdLFxuICAgICAgICBkYXRhc2V0czpbe1xuICAgICAgICAgICAgZGF0YTpbc3VtKCdDb25maXJtZWQnLHByb3BzKSxzdW0oJ1JlY292ZXJlZCcscHJvcHMpLHN1bSgnRGVhdGhzJyxwcm9wcyldLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlsnI2ZmNjM4NCcsJyMzNmEyZWInLCcjZmZjZTU2J10sXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOltcbiAgICAgICAgICAgICAgICAnI2ZmNjM4NCcsJyMzNmEyZWInLCcjZmZjZTU2J1xuICAgICAgICAgICAgXVxuXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBdXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhsLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc0dsb2JhbCA/IFwiU3RhdGlzdGlrIFZpcnVzIENvcm9uYSBEaSBEdW5pYVwiOlwiVmlydXMgQ29yb25hIERpIEluZG9uZXNpYVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWUgZGF0YT17ZGF0YVBpZX0vPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhfSB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9zaXRpZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPjxOdW1iZXJGb3JtYXQgdmFsdWU9e3N1bSgnQ29uZmlybWVkJyxwcm9wcyl9IGRpc3BsYXlUeXBlPXsndGV4dCd9IHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn0gZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9IGRlZmF1bHRWYWx1ZT17MH0vPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXdlaWdodC03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcmFuZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtbm9ybWFsIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbWJ1aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPjxOdW1iZXJGb3JtYXQgdmFsdWU9e3N1bSgnUmVjb3ZlcmVkJyxwcm9wcyl9IGRpc3BsYXlUeXBlPXsndGV4dCd9IHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn0gZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9IGRlZmF1bHRWYWx1ZT17MH0vPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXdlaWdodC03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcmFuZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtbm9ybWFsIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbmluZ2dhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0IHZhbHVlPXtzdW0oJ0RlYXRocycscHJvcHMpfSBkaXNwbGF5VHlwZT17J3RleHQnfSB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9IGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifSBkZWZhdWx0VmFsdWU9ezB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtd2VpZ2h0LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yYW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyYWZpazsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Dashboard/Grafik.js\n");

/***/ })

})