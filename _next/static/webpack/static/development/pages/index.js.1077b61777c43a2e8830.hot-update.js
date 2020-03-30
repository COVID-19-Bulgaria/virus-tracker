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










var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      totalsData = _useState2[0],
      setTotalsData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      dateCasesData = _useState3[0],
      setDateCasesData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      dateDiffCasesData = _useState4[0],
      setDateDiffCasesData = _useState4[1];

  var prepareChartData = function prepareChartData(dataset) {
    if (dataset == null) return;
    return Object.fromEntries(Object.entries(dataset).map(function (entry) {
      return [entry[0], entry[1].cases];
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData = function fetchData() {
      var totalsDataset, dateCasesDataset, dateDiffCasesDataset, response, parsedResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/TotalsDataset.json'));

            case 3:
              totalsDataset = _context.sent;
              _context.t0 = setTotalsData;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(totalsDataset.json());

            case 7:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);
              _context.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateCasesDataset.json'));

            case 11:
              dateCasesDataset = _context.sent;
              _context.t2 = setDateCasesData;
              _context.next = 15;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dateCasesDataset.json());

            case 15:
              _context.t3 = _context.sent;
              (0, _context.t2)(_context.t3);
              _context.next = 19;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateDiffCasesDataset.json'));

            case 19:
              dateDiffCasesDataset = _context.sent;
              _context.t4 = setDateDiffCasesData;
              _context.next = 23;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dateDiffCasesDataset.json());

            case 23:
              _context.t5 = _context.sent;
              (0, _context.t4)(_context.t5);
              setIsLoading(false);
              _context.next = 36;
              break;

            case 28:
              _context.prev = 28;
              _context.t6 = _context["catch"](0);
              response = _context.t6.response;

              if (!response) {
                _context.next = 36;
                break;
              }

              _context.next = 34;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 34:
              parsedResponse = _context.sent;
              console.log(parsedResponse.message);

            case 36:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 28]], Promise);
    };

    fetchData();
  }, []);
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
      lineNumber: 71
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
      lineNumber: 72
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "d-sm-flex align-items-center justify-content-between my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("h1", {
    className: "h3 mb-0 text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "\u041D\u0430\u0447\u0430\u043B\u043E")), isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    animation: "border",
    variant: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
    variant: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0430 \u0430\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F:\xA0", __jsx(react_moment__WEBPACK_IMPORTED_MODULE_5___default.a, {
    format: "DD.MM.YYYY \u0433. \u0432 HH:mm \u0447.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, totalsData.timestamp)), __jsx(_components_CasesOverview__WEBPACK_IMPORTED_MODULE_7__["default"], {
    infected: totalsData.infected,
    cured: totalsData.cured,
    fatal: totalsData.fatal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "shadow mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
    className: "py-3 d-flex flex-row align-items-center justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "\u0425\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043D\u0430 \u0437\u0430\u0440\u0430\u0437\u0430\u0442\u0430")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_components_CasesLineChart__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: lineChartData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "shadow mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
    className: "py-3 d-flex flex-row align-items-center justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u0434\u043D\u0438")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_components_CasesBarChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: barChartData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }))))))));
};

Index.getInitialProps = function _callee() {
  var totalsDataset, totalsData, dateCasesDataset, dateCasesData, dateDiffCasesDataset, dateDiffCasesData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/TotalsDataset.json'));

        case 2:
          totalsDataset = _context2.sent;
          _context2.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(totalsDataset.json());

        case 5:
          totalsData = _context2.sent;
          _context2.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateCasesDataset.json'));

        case 8:
          dateCasesDataset = _context2.sent;
          _context2.next = 11;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dateCasesDataset.json());

        case 11:
          dateCasesData = _context2.sent;
          _context2.next = 14;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateDiffCasesDataset.json'));

        case 14:
          dateDiffCasesDataset = _context2.sent;
          _context2.next = 17;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dateDiffCasesDataset.json());

        case 17:
          dateDiffCasesData = _context2.sent;
          return _context2.abrupt("return", {
            totalsData: totalsData,
            dateCasesData: dateCasesData,
            dateDiffCasesData: dateDiffCasesData
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1077b61777c43a2e8830.hot-update.js.map