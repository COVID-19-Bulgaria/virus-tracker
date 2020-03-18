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
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "map-container align-items-center",
    noGutters: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '1059px',
      height: '600px'
    },
    className: "jsx-2659496106" + " " + "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_CasesLineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: lineChartData,
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
  }, "body{margin:0;padding:0;}.map-container{width:1200px;height:630px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9jb21wb25lbnRzL09wZW5HcmFwaC9DYXNlc0xpbmVDaGFydEltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCUyxBQUdzQixBQUtJLFNBSkgsSUFLRyxNQUpmLE9BS0EiLCJmaWxlIjoiL1VzZXJzL1Zlc2VsaW4vV29yay92aXJ1cy10cmFja2VyL2NvbXBvbmVudHMvT3BlbkdyYXBoL0Nhc2VzTGluZUNoYXJ0SW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IENhc2VzTGluZUNoYXJ0IGZyb20gJy4uL0Nhc2VzTGluZUNoYXJ0JztcbmltcG9ydCBEYXRlQ2FzZXNEYXRhc2V0IGZyb20gJy4uLy4uL2RiL0RhdGVDYXNlc0RhdGFzZXQuanNvbic7XG5cbmNvbnN0IENhc2VzTGluZUNoYXJ0SW1hZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHByZXBhcmVDaGFydERhdGEgPSAoZGF0YXNldCkgPT4gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKGRhdGFzZXQpLm1hcCgoZW50cnkpID0+IFtlbnRyeVswXSwgZW50cnlbMV0uY2FzZXNdKSxcbiAgKTtcblxuICBjb25zdCBsaW5lQ2hhcnREYXRhID0gW1xuICAgIHsgbmFtZTogJ9CX0LDRgNCw0LfQtdC90LgnLCBkYXRhOiBwcmVwYXJlQ2hhcnREYXRhKERhdGVDYXNlc0RhdGFzZXQuaW5mZWN0ZWQpIH0sXG4gICAgeyBuYW1lOiAn0JjQt9C70LXQutGD0LLQsNC90LgnLCBkYXRhOiBwcmVwYXJlQ2hhcnREYXRhKERhdGVDYXNlc0RhdGFzZXQuY3VyZWQpIH0sXG4gICAgeyBuYW1lOiAn0JbQtdGA0YLQstC4JywgZGF0YTogcHJlcGFyZUNoYXJ0RGF0YShEYXRlQ2FzZXNEYXRhc2V0LmZhdGFsKSB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPFJvdyBjbGFzc05hbWU9XCJtYXAtY29udGFpbmVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIG5vR3V0dGVycz5cbiAgICAgIDxDb2w+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiIHN0eWxlPXt7IHdpZHRoOiAnMTA1OXB4JywgaGVpZ2h0OiAnNjAwcHgnIH19PlxuICAgICAgICAgIDxDYXNlc0xpbmVDaGFydCBkYXRhPXtsaW5lQ2hhcnREYXRhfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29sPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9zYi1hZG1pbi0yLm1pbi5jc3NcIiAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tYXAtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlc0xpbmVDaGFydEltYWdlO1xuIl19 */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/components/OpenGraph/CasesLineChartImage.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CasesLineChartImage);

/***/ })

})
//# sourceMappingURL=open-graph-linechart.js.2ccba21f7bb4f8a945b7.hot-update.js.map