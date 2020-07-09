webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PositiveTestsPercentageChart.js":
/*!****************************************************!*\
  !*** ./components/PositiveTestsPercentageChart.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartkick */ "./node_modules/react-chartkick/dist/react-chartkick.esm.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/useTranslation.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "/Users/Veselin/Work/virus-tracker/components/PositiveTestsPercentageChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var PositiveTestsPercentageChart = function PositiveTestsPercentageChart(props) {
  var data = props.data,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["data"]);

  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6___default()(),
      t = _useTranslation.t;

  return __jsx(react_chartkick__WEBPACK_IMPORTED_MODULE_4__["ColumnChart"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    data: data,
    xtitle: t('home:charts.positive_tests_percentage_barchart.xtitle'),
    ytitle: t('home:charts.positive_tests_percentage_barchart.ytitle'),
    colors: ['#4e73df'],
    download: {
      background: '#ffffff',
      filename: 'COVID-19-PositiveTestsPercentageChart'
    }
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }));
};

PositiveTestsPercentageChart.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PositiveTestsPercentageChart);

/***/ })

})
//# sourceMappingURL=index.js.aeacb3c574a98f10ad55.hot-update.js.map