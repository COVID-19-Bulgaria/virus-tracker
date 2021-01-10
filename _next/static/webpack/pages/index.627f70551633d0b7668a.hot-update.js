webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ActiveCasesLineChart.js":
/*!********************************************!*\
  !*** ./components/ActiveCasesLineChart.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartkick */ \"./node_modules/react-chartkick/dist/react-chartkick.esm.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chartjs-adapter-date-fns */ \"./node_modules/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.js\");\n/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-translate/useTranslation */ \"./node_modules/next-translate/useTranslation.js\");\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/veselinstoyanov/Work/coronavirus-bulgaria.org/virus-tracker/components/ActiveCasesLineChart.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar ActiveCasesLineChart = function ActiveCasesLineChart(props) {\n  _s();\n\n  var data = props.data,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props, [\"data\"]);\n\n  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_8___default()(),\n      t = _useTranslation.t;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_chartkick__WEBPACK_IMPORTED_MODULE_5__[\"LineChart\"], _objectSpread({\n    data: data,\n    xtitle: t('home:charts.active_cases_linechart.xtitle'),\n    ytitle: t('home:charts.active_cases_linechart.ytitle'),\n    colors: ['#f6c23e', '#1cc88a', '#e74a3b'],\n    download: {\n      background: '#ffffff',\n      filename: 'COVID-19-Bulgaria_ActiveCasesLineChart'\n    },\n    library: {\n      scales: {\n        xAxes: [{\n          type: 'time',\n          time: {\n            displayFormats: {\n              datetime: 'MMM d, yyyy, h:mm:ss aaaa',\n              millisecond: 'h:mm:ss.SSS aaaa',\n              second: 'h:mm:ss aaaa',\n              minute: 'h:mm aaaa',\n              hour: 'ha',\n              day: 'MMM d',\n              week: 'PP',\n              month: 'MMM yyyy',\n              quarter: 'qqq - yyyy',\n              year: 'yyyy'\n            }\n          }\n        }]\n      }\n    }\n  }, rest), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ActiveCasesLineChart, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function () {\n  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_8___default.a];\n});\n\n_c = ActiveCasesLineChart;\nActiveCasesLineChart.propTypes = {\n  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveCasesLineChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveCasesLineChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3RpdmVDYXNlc0xpbmVDaGFydC5qcz8zY2FjIl0sIm5hbWVzIjpbIkFjdGl2ZUNhc2VzTGluZUNoYXJ0IiwicHJvcHMiLCJkYXRhIiwicmVzdCIsInVzZVRyYW5zbGF0aW9uIiwidCIsImJhY2tncm91bmQiLCJmaWxlbmFtZSIsInNjYWxlcyIsInhBeGVzIiwidHlwZSIsInRpbWUiLCJkaXNwbGF5Rm9ybWF0cyIsImRhdGV0aW1lIiwibWlsbGlzZWNvbmQiLCJzZWNvbmQiLCJtaW51dGUiLCJob3VyIiwiZGF5Iiwid2VlayIsIm1vbnRoIiwicXVhcnRlciIsInllYXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDOUJDLElBRDhCLEdBQ1pELEtBRFksQ0FDOUJDLElBRDhCO0FBQUEsTUFDckJDLElBRHFCLHNHQUNaRixLQURZOztBQUFBLHdCQUV4Qkcsb0VBQWMsRUFGVTtBQUFBLE1BRTlCQyxDQUY4QixtQkFFOUJBLENBRjhCOztBQUl0QyxzQkFDRSxxRUFBQyx5REFBRDtBQUNFLFFBQUksRUFBRUgsSUFEUjtBQUVFLFVBQU0sRUFBRUcsQ0FBQyxDQUFDLDJDQUFELENBRlg7QUFHRSxVQUFNLEVBQUVBLENBQUMsQ0FBQywyQ0FBRCxDQUhYO0FBSUUsVUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsQ0FKVjtBQUtFLFlBQVEsRUFBRTtBQUFFQyxnQkFBVSxFQUFFLFNBQWQ7QUFBeUJDLGNBQVEsRUFBRTtBQUFuQyxLQUxaO0FBTUUsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRTtBQUNOQyxhQUFLLEVBQUUsQ0FBQztBQUNOQyxjQUFJLEVBQUUsTUFEQTtBQUVOQyxjQUFJLEVBQUU7QUFDSkMsMEJBQWMsRUFBRTtBQUNkQyxzQkFBUSxFQUFFLDJCQURJO0FBRWRDLHlCQUFXLEVBQUUsa0JBRkM7QUFHZEMsb0JBQU0sRUFBRSxjQUhNO0FBSWRDLG9CQUFNLEVBQUUsV0FKTTtBQUtkQyxrQkFBSSxFQUFFLElBTFE7QUFNZEMsaUJBQUcsRUFBRSxPQU5TO0FBT2RDLGtCQUFJLEVBQUUsSUFQUTtBQVFkQyxtQkFBSyxFQUFFLFVBUk87QUFTZEMscUJBQU8sRUFBRSxZQVRLO0FBVWRDLGtCQUFJLEVBQUU7QUFWUTtBQURaO0FBRkEsU0FBRDtBQUREO0FBREQ7QUFOWCxLQTJCTW5CLElBM0JOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStCRCxDQW5DRDs7R0FBTUgsb0I7VUFFVUksb0U7OztLQUZWSixvQjtBQXFDTkEsb0JBQW9CLENBQUN1QixTQUFyQixHQUFpQztBQUMvQnJCLE1BQUksRUFBRXNCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFEsQ0FBakM7QUFJZTFCLG1GQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BY3RpdmVDYXNlc0xpbmVDaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluZUNoYXJ0IH0gZnJvbSAncmVhY3QtY2hhcnRraWNrJztcbmltcG9ydCAnY2hhcnQuanMnO1xuaW1wb3J0ICdjaGFydGpzLWFkYXB0ZXItZGF0ZS1mbnMnO1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJztcblxuY29uc3QgQWN0aXZlQ2FzZXNMaW5lQ2hhcnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkYXRhLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmVDaGFydFxuICAgICAgZGF0YT17ZGF0YX1cbiAgICAgIHh0aXRsZT17dCgnaG9tZTpjaGFydHMuYWN0aXZlX2Nhc2VzX2xpbmVjaGFydC54dGl0bGUnKX1cbiAgICAgIHl0aXRsZT17dCgnaG9tZTpjaGFydHMuYWN0aXZlX2Nhc2VzX2xpbmVjaGFydC55dGl0bGUnKX1cbiAgICAgIGNvbG9ycz17WycjZjZjMjNlJywgJyMxY2M4OGEnLCAnI2U3NGEzYiddfVxuICAgICAgZG93bmxvYWQ9e3sgYmFja2dyb3VuZDogJyNmZmZmZmYnLCBmaWxlbmFtZTogJ0NPVklELTE5LUJ1bGdhcmlhX0FjdGl2ZUNhc2VzTGluZUNoYXJ0JyB9fVxuICAgICAgbGlicmFyeT17e1xuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgICAgZGlzcGxheUZvcm1hdHM6IHtcbiAgICAgICAgICAgICAgICBkYXRldGltZTogJ01NTSBkLCB5eXl5LCBoOm1tOnNzIGFhYWEnLFxuICAgICAgICAgICAgICAgIG1pbGxpc2Vjb25kOiAnaDptbTpzcy5TU1MgYWFhYScsXG4gICAgICAgICAgICAgICAgc2Vjb25kOiAnaDptbTpzcyBhYWFhJyxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICdoOm1tIGFhYWEnLFxuICAgICAgICAgICAgICAgIGhvdXI6ICdoYScsXG4gICAgICAgICAgICAgICAgZGF5OiAnTU1NIGQnLFxuICAgICAgICAgICAgICAgIHdlZWs6ICdQUCcsXG4gICAgICAgICAgICAgICAgbW9udGg6ICdNTU0geXl5eScsXG4gICAgICAgICAgICAgICAgcXVhcnRlcjogJ3FxcSAtIHl5eXknLFxuICAgICAgICAgICAgICAgIHllYXI6ICd5eXl5JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfV0sXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKTtcbn07XG5cbkFjdGl2ZUNhc2VzTGluZUNoYXJ0LnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlQ2FzZXNMaW5lQ2hhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ActiveCasesLineChart.js\n");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/af/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/af/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/af/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/af/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/af/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/af/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-DZ/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-DZ/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-DZ/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-DZ/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-DZ/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-DZ/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-MA/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-MA/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-MA/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-MA/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-MA/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-MA/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-SA/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-SA/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-SA/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-SA/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-SA/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ar-SA/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/az/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/az/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/az/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/az/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/az/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/az/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/be/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/be/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/be/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/be/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/be/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/be/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bg/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bg/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bg/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bg/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bg/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bg/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bn/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bn/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bn/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bn/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bn/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ca/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ca/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ca/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ca/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ca/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ca/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/cs/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/cs/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/cs/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/cs/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/cs/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/cs/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/cy/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/cy/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/cy/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/cy/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/cy/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/cy/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/da/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/da/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/da/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/da/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/da/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/da/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/de/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/de/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/de/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/de/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/de/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/de/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/el/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/el/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/el/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/el/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/el/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/el/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-AU/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-AU/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-CA/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-CA/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-CA/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-GB/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-GB/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-IN/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-IN/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-NZ/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-NZ/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eo/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eo/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eo/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eo/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eo/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eo/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/es/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/es/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/es/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/es/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/es/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/es/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/et/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/et/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/et/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/et/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/et/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/et/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eu/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eu/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eu/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eu/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eu/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eu/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fa-IR/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fa-IR/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fa-IR/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fa-IR/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fa-IR/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fa-IR/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fi/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fi/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fi/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fi/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fi/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fi/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr-CA/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr-CA/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr-CH/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr-CH/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr-CH/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr-CH/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr-CH/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr-CH/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gd/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gd/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gd/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gd/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gd/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gd/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gl/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gl/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gl/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gl/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gl/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gl/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gu/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gu/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gu/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gu/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gu/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/gu/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/he/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/he/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/he/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/he/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/he/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/he/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hi/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hi/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hi/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hi/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hi/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hi/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hr/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hr/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hr/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hr/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hr/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hr/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hu/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hu/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hu/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hu/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hu/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hu/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hy/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hy/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hy/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hy/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hy/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hy/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/id/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/id/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/id/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/id/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/id/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/id/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/is/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/is/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/is/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/is/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/is/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/is/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/it/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/it/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/it/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/it/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/it/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/it/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ja/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ja/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ja/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ja/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ja/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ja/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ka/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ka/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ka/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ka/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ka/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ka/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/kk/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/kk/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/kk/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/kk/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/kk/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/kk/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/kn/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/kn/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/kn/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/kn/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/kn/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/kn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ko/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ko/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ko/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ko/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ko/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ko/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lb/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lb/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lb/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lb/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lb/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lb/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lt/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lt/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lt/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lt/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lt/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lt/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lv/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lv/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lv/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lv/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lv/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lv/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/mk/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/mk/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/mk/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/mk/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/mk/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/mk/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ms/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ms/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ms/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ms/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ms/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ms/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/mt/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/mt/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/mt/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/mt/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/mt/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/mt/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nb/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nb/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nb/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nb/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nb/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nb/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl-BE/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl-BE/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl-BE/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl-BE/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl-BE/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl-BE/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nn/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nn/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nn/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nn/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nn/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pl/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pl/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pl/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pl/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pl/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pl/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt-BR/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt-BR/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt-BR/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt-BR/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt-BR/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt-BR/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ro/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ro/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ro/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ro/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ro/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ro/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ru/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sk/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sk/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sk/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sk/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sk/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sk/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sl/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sl/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sl/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sl/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sl/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sl/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sr-Latn/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sr-Latn/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sr-Latn/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sr-Latn/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sr-Latn/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sr-Latn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sr/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sr/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sr/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sr/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sr/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sr/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sv/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sv/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sv/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sv/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sv/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sv/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ta/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ta/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ta/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ta/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ta/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ta/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/te/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/te/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/te/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/te/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/te/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/te/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/th/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/th/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/th/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/th/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/th/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/th/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/tr/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/tr/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/tr/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/tr/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/tr/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/tr/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ug/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ug/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ug/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ug/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ug/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ug/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uk/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uk/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uk/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uk/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uk/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uk/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uz/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uz/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uz/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uz/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uz/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uz/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/vi/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-CN/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-CN/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-CN/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-CN/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-CN/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-CN/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-TW/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-TW/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-TW/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-TW/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-TW/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-TW/index.js":
false

})