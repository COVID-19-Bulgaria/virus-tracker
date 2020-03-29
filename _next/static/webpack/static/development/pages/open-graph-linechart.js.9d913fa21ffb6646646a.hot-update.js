webpackHotUpdate("static/development/pages/open-graph-linechart.js",{

/***/ "./pages/open-graph-linechart.js":
/*!***************************************!*\
  !*** ./pages/open-graph-linechart.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_OpenGraph_CasesLineChartImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/OpenGraph/CasesLineChartImage */ "./components/OpenGraph/CasesLineChartImage.js");

var _jsxFileName = "/Users/Veselin/Work/virus-tracker/pages/open-graph-linechart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var OpenGraphLineChart = function OpenGraphLineChart(_ref) {
  var dateCasesData = _ref.dateCasesData;
  var shouldRender = "development" === 'development';
  return shouldRender ? __jsx(_components_OpenGraph_CasesLineChartImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dateCasesData: dateCasesData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }) : __jsx(next_error__WEBPACK_IMPORTED_MODULE_3___default.a, {
    statusCode: 404,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
};

OpenGraphLineChart.getInitialProps = function _callee() {
  var dateCasesDataset, dateCasesData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateCasesDataset.json'));

        case 2:
          dateCasesDataset = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dateCasesDataset.json());

        case 5:
          dateCasesData = _context.sent;
          return _context.abrupt("return", {
            dateCasesData: dateCasesData
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (OpenGraphLineChart);

/***/ })

})
//# sourceMappingURL=open-graph-linechart.js.9d913fa21ffb6646646a.hot-update.js.map