webpackHotUpdate("static/development/pages/open-graph-linechart.js",{

/***/ "./components/OpenGraph/CasesLineChartImage.js":
/*!*****************************************************!*\
  !*** ./components/OpenGraph/CasesLineChartImage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CasesLineChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CasesLineChart */ "./components/CasesLineChart.js");

var _jsxFileName = "/Users/Veselin/Work/virus-tracker/components/OpenGraph/CasesLineChartImage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var CasesLineChartImage = function CasesLineChartImage(_ref) {
  var dateCasesData = _ref.dateCasesData;

  var prepareChartData = function prepareChartData(dataset) {
    return Object.fromEntries(Object.entries(dataset).map(function (entry) {
      return [entry[0], entry[1].cases];
    }));
  };

  console.log(dateCasesData);
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
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "chart-container align-items-center",
    noGutters: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
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
      lineNumber: 22
    },
    __self: this
  }, __jsx(_CasesLineChart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: lineChartData,
    width: "1059px",
    height: "600px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/sb-admin-2.min.css",
    className: "jsx-856858223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "856858223",
    __self: this
  }, "body{margin:0;padding:0;}.chart-container{width:1200px;height:630px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9jb21wb25lbnRzL09wZW5HcmFwaC9DYXNlc0xpbmVDaGFydEltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCUyxBQUdzQixBQUtJLFNBSkgsSUFLRyxNQUpmLE9BS0EiLCJmaWxlIjoiL1VzZXJzL1Zlc2VsaW4vV29yay92aXJ1cy10cmFja2VyL2NvbXBvbmVudHMvT3BlbkdyYXBoL0Nhc2VzTGluZUNoYXJ0SW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQ2FzZXNMaW5lQ2hhcnQgZnJvbSAnLi4vQ2FzZXNMaW5lQ2hhcnQnO1xuXG5jb25zdCBDYXNlc0xpbmVDaGFydEltYWdlID0gKHsgZGF0ZUNhc2VzRGF0YSB9KSA9PiB7XG4gIGNvbnN0IHByZXBhcmVDaGFydERhdGEgPSAoZGF0YXNldCkgPT4gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKGRhdGFzZXQpLm1hcCgoZW50cnkpID0+IFtlbnRyeVswXSwgZW50cnlbMV0uY2FzZXNdKSxcbiAgKTtcblxuICBjb25zb2xlLmxvZyhkYXRlQ2FzZXNEYXRhKTtcblxuICBjb25zdCBsaW5lQ2hhcnREYXRhID0gW1xuICAgIHsgbmFtZTogJ9CX0LDRgNCw0LfQtdC90LgnLCBkYXRhOiBwcmVwYXJlQ2hhcnREYXRhKGRhdGVDYXNlc0RhdGEuaW5mZWN0ZWQpIH0sXG4gICAgeyBuYW1lOiAn0JjQt9C70LXQutGD0LLQsNC90LgnLCBkYXRhOiBwcmVwYXJlQ2hhcnREYXRhKGRhdGVDYXNlc0RhdGEuY3VyZWQpIH0sXG4gICAgeyBuYW1lOiAn0JbQtdGA0YLQstC4JywgZGF0YTogcHJlcGFyZUNoYXJ0RGF0YShkYXRlQ2FzZXNEYXRhLmZhdGFsKSB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPFJvdyBjbGFzc05hbWU9XCJjaGFydC1jb250YWluZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgbm9HdXR0ZXJzPlxuICAgICAgPENvbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDU5cHgnLCBoZWlnaHQ6ICc2MDBweCcgfX0+XG4gICAgICAgICAgPENhc2VzTGluZUNoYXJ0IGRhdGE9e2xpbmVDaGFydERhdGF9IHdpZHRoPVwiMTA1OXB4XCIgaGVpZ2h0PVwiNjAwcHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29sPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9zYi1hZG1pbi0yLm1pbi5jc3NcIiAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jaGFydC1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG5cbkNhc2VzTGluZUNoYXJ0SW1hZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYXRlQ2FzZXNEYXRhc2V0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9DT1ZJRC0xOS1CdWxnYXJpYS9jb3ZpZC1kYXRhYmFzZS9tYXN0ZXIvQnVsZ2FyaWEvRGF0ZUNhc2VzRGF0YXNldC5qc29uJyk7XG4gIGNvbnN0IGRhdGVDYXNlc0RhdGEgPSBhd2FpdCBkYXRlQ2FzZXNEYXRhc2V0Lmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGVDYXNlc0RhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXNlc0xpbmVDaGFydEltYWdlO1xuIl19 */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/components/OpenGraph/CasesLineChartImage.js */"));
};

CasesLineChartImage.getInitialProps = function _callee() {
  var dateCasesDataset, dateCasesData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateCasesDataset.json'));

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

/* harmony default export */ __webpack_exports__["default"] = (CasesLineChartImage);

/***/ })

})
//# sourceMappingURL=open-graph-linechart.js.0205c3decf8b3ac78366.hot-update.js.map