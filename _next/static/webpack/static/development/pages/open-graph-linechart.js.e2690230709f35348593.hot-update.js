webpackHotUpdate("static/development/pages/open-graph-linechart.js",{

/***/ "./components/OpenGraph/CasesLineChartImage.js":
/*!*****************************************************!*\
  !*** ./components/OpenGraph/CasesLineChartImage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CasesLineChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CasesLineChart */ "./components/CasesLineChart.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/components/OpenGraph/CasesLineChartImage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var CasesLineChartImage = function CasesLineChartImage() {
  var prepareChartData = function prepareChartData(dataset) {
    return Object.fromEntries(Object.entries(dataset).map(function (entry) {
      return [entry[0], entry[1].cases];
    }));
  };

  var dateCasesDataset = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateCasesDataset.json');
  var dateCasesData = dateCasesDataset.json();
  var lineChartData = [{
    name: 'Заразени',
    data: prepareChartData(dateCasesData.infected)
  }, {
    name: 'Излекувани',
    data: prepareChartData(dateCasesData.cured)
  }, {
    name: 'Жертви',
    data: prepareChartData(dateCasesData.fatal)
  }];
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "chart-container align-items-center",
    noGutters: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '1059px',
      height: '600px'
    },
    className: "jsx-856858223" + " " + "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_CasesLineChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: lineChartData,
    width: "1059px",
    height: "600px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/sb-admin-2.min.css",
    className: "jsx-856858223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "856858223",
    __self: this
  }, "body{margin:0;padding:0;}.chart-container{width:1200px;height:630px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9jb21wb25lbnRzL09wZW5HcmFwaC9DYXNlc0xpbmVDaGFydEltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCUyxBQUdzQixBQUtJLFNBSkgsSUFLRyxNQUpmLE9BS0EiLCJmaWxlIjoiL1VzZXJzL1Zlc2VsaW4vV29yay92aXJ1cy10cmFja2VyL2NvbXBvbmVudHMvT3BlbkdyYXBoL0Nhc2VzTGluZUNoYXJ0SW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQ2FzZXNMaW5lQ2hhcnQgZnJvbSAnLi4vQ2FzZXNMaW5lQ2hhcnQnO1xuXG5jb25zdCBDYXNlc0xpbmVDaGFydEltYWdlID0gKCkgPT4ge1xuICBjb25zdCBwcmVwYXJlQ2hhcnREYXRhID0gKGRhdGFzZXQpID0+IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICBPYmplY3QuZW50cmllcyhkYXRhc2V0KS5tYXAoKGVudHJ5KSA9PiBbZW50cnlbMF0sIGVudHJ5WzFdLmNhc2VzXSksXG4gICk7XG5cbiAgY29uc3QgZGF0ZUNhc2VzRGF0YXNldCA9IGZldGNoKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQ09WSUQtMTktQnVsZ2FyaWEvY292aWQtZGF0YWJhc2UvbWFzdGVyL0J1bGdhcmlhL0RhdGVDYXNlc0RhdGFzZXQuanNvbicpO1xuICBjb25zdCBkYXRlQ2FzZXNEYXRhID0gZGF0ZUNhc2VzRGF0YXNldC5qc29uKCk7XG5cbiAgY29uc3QgbGluZUNoYXJ0RGF0YSA9IFtcbiAgICB7IG5hbWU6ICfQl9Cw0YDQsNC30LXQvdC4JywgZGF0YTogcHJlcGFyZUNoYXJ0RGF0YShkYXRlQ2FzZXNEYXRhLmluZmVjdGVkKSB9LFxuICAgIHsgbmFtZTogJ9CY0LfQu9C10LrRg9Cy0LDQvdC4JywgZGF0YTogcHJlcGFyZUNoYXJ0RGF0YShkYXRlQ2FzZXNEYXRhLmN1cmVkKSB9LFxuICAgIHsgbmFtZTogJ9CW0LXRgNGC0LLQuCcsIGRhdGE6IHByZXBhcmVDaGFydERhdGEoZGF0ZUNhc2VzRGF0YS5mYXRhbCkgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxSb3cgY2xhc3NOYW1lPVwiY2hhcnQtY29udGFpbmVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIG5vR3V0dGVycz5cbiAgICAgIDxDb2w+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiIHN0eWxlPXt7IHdpZHRoOiAnMTA1OXB4JywgaGVpZ2h0OiAnNjAwcHgnIH19PlxuICAgICAgICAgIDxDYXNlc0xpbmVDaGFydCBkYXRhPXtsaW5lQ2hhcnREYXRhfSB3aWR0aD1cIjEwNTlweFwiIGhlaWdodD1cIjYwMHB4XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbD5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3Mvc2ItYWRtaW4tMi5taW4uY3NzXCIgLz5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlc0xpbmVDaGFydEltYWdlO1xuIl19 */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/components/OpenGraph/CasesLineChartImage.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CasesLineChartImage);

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false

})
//# sourceMappingURL=open-graph-linechart.js.e2690230709f35348593.hot-update.js.map