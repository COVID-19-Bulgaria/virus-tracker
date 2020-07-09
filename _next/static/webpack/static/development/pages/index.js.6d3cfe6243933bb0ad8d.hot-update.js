webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages_/index.js":
/*!*************************!*\
  !*** ./pages_/index.js ***!
  \*************************/
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
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/useTranslation.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_BaseLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BaseLayout */ "./components/BaseLayout.js");
/* harmony import */ var _components_CasesOverview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CasesOverview */ "./components/CasesOverview.js");
/* harmony import */ var _components_CasesLineChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CasesLineChart */ "./components/CasesLineChart.js");
/* harmony import */ var _components_CasesBarChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CasesBarChart */ "./components/CasesBarChart.js");
/* harmony import */ var _components_CasesPieChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CasesPieChart */ "./components/CasesPieChart.js");
/* harmony import */ var _components_ActiveCasesLineChart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ActiveCasesLineChart */ "./components/ActiveCasesLineChart.js");
/* harmony import */ var _components_PositiveTestsPercentageChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PositiveTestsPercentageChart */ "./components/PositiveTestsPercentageChart.js");


var _this = undefined,
    _jsxFileName = "/Users/Veselin/Work/virus-tracker/pages_/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable react/jsx-wrap-multilines */














var Index = function Index() {
  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6___default()(),
      t = _useTranslation.t;

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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      dateActiveCasesData = _useState5[0],
      setDateActiveCasesData = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      datePositiveTestsPercentageData = _useState6[0],
      setDatePositiveTestsPercentageData = _useState6[1];

  var prepareChartData = function prepareChartData(dataset, dataAttribute) {
    if (dataset == null) return [];
    return Object.fromEntries(Object.entries(dataset).map(function (entry) {
      return [entry[0], entry[1][dataAttribute]];
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData = function fetchData() {
      var totalsDataset, dateCasesDataset, dateDiffCasesDataset, dateActiveCasesDataset, datePositiveTestsPercentageDataset;
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
              _context.next = 27;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateActiveCasesDataset.json'));

            case 27:
              dateActiveCasesDataset = _context.sent;
              _context.t6 = setDateActiveCasesData;
              _context.next = 31;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dateActiveCasesDataset.json());

            case 31:
              _context.t7 = _context.sent;
              (0, _context.t6)(_context.t7);
              _context.next = 35;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DatePositiveTestsDataset.json'));

            case 35:
              datePositiveTestsPercentageDataset = _context.sent;
              _context.t8 = setDatePositiveTestsPercentageData;
              _context.next = 39;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(datePositiveTestsPercentageDataset.json());

            case 39:
              _context.t9 = _context.sent;
              (0, _context.t8)(_context.t9);
              setIsLoading(false);
              _context.next = 46;
              break;

            case 44:
              _context.prev = 44;
              _context.t10 = _context["catch"](0);

            case 46:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 44]], Promise);
    };

    fetchData();
  }, []);
  var lineChartData = [{
    name: t('home:charts.infected'),
    data: prepareChartData(dateCasesData.infected, 'cases')
  }, {
    name: t('home:charts.cured'),
    data: prepareChartData(dateCasesData.cured, 'cases')
  }, {
    name: t('home:charts.fatal'),
    data: prepareChartData(dateCasesData.fatal, 'cases')
  }];
  var barChartData = [{
    name: t('home:charts.infected'),
    data: prepareChartData(dateDiffCasesData.infected, 'cases')
  }, {
    name: t('home:charts.cured'),
    data: prepareChartData(dateDiffCasesData.cured, 'cases')
  }, {
    name: t('home:charts.fatal'),
    data: prepareChartData(dateDiffCasesData.fatal, 'cases')
  }];
  var activeCasesLineChartData = prepareChartData(dateActiveCasesData.active, 'cases');
  var positiveTestsPercentageBarChartData = prepareChartData(datePositiveTestsPercentageData, 'percentage');
  return __jsx(_components_BaseLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    title: t('home:seo.title'),
    description: t('home:seo.description'),
    openGraph: {
      images: [{
        url: "https://coronavirus-bulgaria.org/static/images/open_graph_linechart.png?v=".concat("development"),
        width: 1200,
        height: 630,
        alt: t('home:charts.cases_linechart.title')
      }]
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-sm-flex align-items-center justify-content-between my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "h3 mb-0 text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, t('home:page_title'))), isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    animation: "border",
    variant: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 22
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
    variant: "info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, t('home:last_updated'), "\xA0", __jsx(react_moment__WEBPACK_IMPORTED_MODULE_5___default.a, {
    parse: "YYYY-MM-DD HH:mm:ss ZZ",
    format: t('common:date_format'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, totalsData.timestamp)), __jsx(_components_CasesOverview__WEBPACK_IMPORTED_MODULE_8__["default"], {
    totalsData: totalsData,
    dateDiffCasesData: dateDiffCasesData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "shadow mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
    className: "py-3 d-flex flex-row align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 23
    }
  }, t('home:charts.cases_linechart.title'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, __jsx(_components_CasesLineChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: lineChartData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 23
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "shadow mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
    className: "py-3 d-flex flex-row align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 23
    }
  }, t('home:charts.cases_barchart.title'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx(_components_CasesBarChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: barChartData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 23
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "shadow mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
    className: "py-3 d-flex flex-row align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 23
    }
  }, t('home:charts.active_cases_linechart.title'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, __jsx(_components_ActiveCasesLineChart__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: activeCasesLineChartData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 23
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "shadow mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
    className: "py-3 d-flex flex-row align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 23
    }
  }, t('home:charts.cases_piechart.title'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, __jsx(_components_CasesPieChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
    infected: totalsData.infected,
    cured: totalsData.cured,
    fatal: totalsData.fatal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 23
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "shadow mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
    className: "py-3 d-flex flex-row align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 23
    }
  }, t('home:charts.positive_tests_percentage_barchart.title'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, __jsx(_components_PositiveTestsPercentageChart__WEBPACK_IMPORTED_MODULE_13__["default"], {
    data: positiveTestsPercentageBarChartData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 23
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.6d3cfe6243933bb0ad8d.hot-update.js.map