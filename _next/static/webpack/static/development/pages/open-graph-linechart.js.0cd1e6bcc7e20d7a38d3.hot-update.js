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
/* harmony import */ var _CasesLineChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CasesLineChart */ "./components/CasesLineChart.js");
/* harmony import */ var _db_DateCasesDataset_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../db/DateCasesDataset.json */ "./db/DateCasesDataset.json");
var _db_DateCasesDataset_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../db/DateCasesDataset.json */ "./db/DateCasesDataset.json", 1);
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/components/OpenGraph/CasesLineChartImage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var CasesLineChartImage = function CasesLineChartImage() {
  var prepareChartData = function prepareChartData(dataset) {
    return Object.fromEntries(Object.entries(dataset).map(function (entry) {
      return [entry[0], entry[1].cases];
    }));
  };

  var lineChartData = [{
    name: 'Заразени',
    data: prepareChartData(_db_DateCasesDataset_json__WEBPACK_IMPORTED_MODULE_4__.infected)
  }, {
    name: 'Излекувани',
    data: prepareChartData(_db_DateCasesDataset_json__WEBPACK_IMPORTED_MODULE_4__.cured)
  }, {
    name: 'Жертви',
    data: prepareChartData(_db_DateCasesDataset_json__WEBPACK_IMPORTED_MODULE_4__.fatal)
  }];
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "map-container align-content-center align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_CasesLineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: lineChartData,
    width: "100%",
    height: "90%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/sb-admin-2.min.css",
    className: "jsx-2659496106",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2659496106",
    __self: this
  }, "body{margin:0;padding:0;}.map-container{width:1200px;height:630px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9jb21wb25lbnRzL09wZW5HcmFwaC9DYXNlc0xpbmVDaGFydEltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCUyxBQUdzQixBQUtJLFNBSkgsSUFLRyxNQUpmLE9BS0EiLCJmaWxlIjoiL1VzZXJzL1Zlc2VsaW4vV29yay92aXJ1cy10cmFja2VyL2NvbXBvbmVudHMvT3BlbkdyYXBoL0Nhc2VzTGluZUNoYXJ0SW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgQ2FzZXNMaW5lQ2hhcnQgZnJvbSAnLi4vQ2FzZXNMaW5lQ2hhcnQnO1xuaW1wb3J0IERhdGVDYXNlc0RhdGFzZXQgZnJvbSAnLi4vLi4vZGIvRGF0ZUNhc2VzRGF0YXNldC5qc29uJztcblxuY29uc3QgQ2FzZXNMaW5lQ2hhcnRJbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgcHJlcGFyZUNoYXJ0RGF0YSA9IChkYXRhc2V0KSA9PiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgT2JqZWN0LmVudHJpZXMoZGF0YXNldCkubWFwKChlbnRyeSkgPT4gW2VudHJ5WzBdLCBlbnRyeVsxXS5jYXNlc10pLFxuICApO1xuXG4gIGNvbnN0IGxpbmVDaGFydERhdGEgPSBbXG4gICAgeyBuYW1lOiAn0JfQsNGA0LDQt9C10L3QuCcsIGRhdGE6IHByZXBhcmVDaGFydERhdGEoRGF0ZUNhc2VzRGF0YXNldC5pbmZlY3RlZCkgfSxcbiAgICB7IG5hbWU6ICfQmNC30LvQtdC60YPQstCw0L3QuCcsIGRhdGE6IHByZXBhcmVDaGFydERhdGEoRGF0ZUNhc2VzRGF0YXNldC5jdXJlZCkgfSxcbiAgICB7IG5hbWU6ICfQltC10YDRgtCy0LgnLCBkYXRhOiBwcmVwYXJlQ2hhcnREYXRhKERhdGVDYXNlc0RhdGFzZXQuZmF0YWwpIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJtYXAtY29udGFpbmVyIGFsaWduLWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8Q29sPlxuICAgICAgICAgIDxDYXNlc0xpbmVDaGFydCBkYXRhPXtsaW5lQ2hhcnREYXRhfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI5MCVcIiAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9zYi1hZG1pbi0yLm1pbi5jc3NcIiAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tYXAtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlc0xpbmVDaGFydEltYWdlO1xuIl19 */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/components/OpenGraph/CasesLineChartImage.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CasesLineChartImage);

/***/ })

})
//# sourceMappingURL=open-graph-linechart.js.0cd1e6bcc7e20d7a38d3.hot-update.js.map