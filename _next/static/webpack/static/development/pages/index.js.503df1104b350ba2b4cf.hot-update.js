webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BaseLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BaseLayout */ "./components/BaseLayout.js");
/* harmony import */ var _components_CasesOverview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CasesOverview */ "./components/CasesOverview.js");
/* harmony import */ var _components_CasesLineChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CasesLineChart */ "./components/CasesLineChart.js");
/* harmony import */ var _components_CasesBarChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CasesBarChart */ "./components/CasesBarChart.js");

var _jsxFileName = "/Users/Veselin/Work/virus-tracker/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Index = function Index(_ref) {
  var totalsData = _ref.totalsData,
      dateCasesData = _ref.dateCasesData,
      dateDiffCasesData = _ref.dateDiffCasesData;

  var prepareChartData = function prepareChartData(dataset) {
    return Object.fromEntries(Object.entries(dataset).map(function (entry) {
      return [entry[0], entry[1].cases];
    }));
  };

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
  var barChartData = [{
    name: 'Заразени',
    data: prepareChartData(dateDiffCasesData.infected)
  }, {
    name: 'Излекувани',
    data: prepareChartData(dateDiffCasesData.cured)
  }, {
    name: 'Жертви',
    data: prepareChartData(dateDiffCasesData.fatal)
  }];
  return __jsx(_components_BaseLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    openGraph: {
      images: [{
        url: "https://coronavirus-bulgaria.org/static/images/open_graph_linechart.png?v=".concat("development"),
        width: 1200,
        height: 630,
        alt: 'Хронология на заразата'
      }]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "d-sm-flex align-items-center justify-content-between my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h1", {
    className: "h3 mb-0 text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\u041D\u0430\u0447\u0430\u043B\u043E")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0430 \u0430\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F:\xA0", __jsx(react_moment__WEBPACK_IMPORTED_MODULE_5___default.a, {
    format: "DD.MM.YYYY - HH:mm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, totalsData.timestamp)), __jsx(_components_CasesOverview__WEBPACK_IMPORTED_MODULE_7__["default"], {
    infected: totalsData.infected,
    cured: totalsData.cured,
    fatal: totalsData.fatal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "shadow mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
    className: "py-3 d-flex flex-row align-items-center justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u0425\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043D\u0430 \u0437\u0430\u0440\u0430\u0437\u0430\u0442\u0430")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_components_CasesLineChart__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: lineChartData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "shadow mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
    className: "py-3 d-flex flex-row align-items-center justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u0434\u043D\u0438")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_components_CasesBarChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: barChartData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })))))));
};

Index.getInitialProps = function _callee() {
  var totalsDataset, totalsData, dateCasesDataset, dateCasesData, dateDiffCasesDataset, dateDiffCasesData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/TotalsDataset.json'));

        case 2:
          totalsDataset = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(totalsDataset.json());

        case 5:
          totalsData = _context.sent;
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateCasesDataset.json'));

        case 8:
          dateCasesDataset = _context.sent;
          _context.next = 11;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dateCasesDataset.json());

        case 11:
          dateCasesData = _context.sent;
          _context.next = 14;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateDiffCasesDataset.json'));

        case 14:
          dateDiffCasesDataset = _context.sent;
          _context.next = 17;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dateDiffCasesDataset.json());

        case 17:
          dateDiffCasesData = _context.sent;
          return _context.abrupt("return", {
            totalsData: totalsData,
            dateCasesData: dateCasesData,
            dateDiffCasesData: dateDiffCasesData
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.503df1104b350ba2b4cf.hot-update.js.map