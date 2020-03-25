webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_BaseLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BaseLayout */ "./components/BaseLayout.js");
/* harmony import */ var _components_CasesOverview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CasesOverview */ "./components/CasesOverview.js");
/* harmony import */ var _components_CasesLineChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CasesLineChart */ "./components/CasesLineChart.js");
/* harmony import */ var _db_TotalsDataset_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../db/TotalsDataset.json */ "./db/TotalsDataset.json");
var _db_TotalsDataset_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/TotalsDataset.json */ "./db/TotalsDataset.json", 1);
/* harmony import */ var _db_DateCasesDataset_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../db/DateCasesDataset.json */ "./db/DateCasesDataset.json");
var _db_DateCasesDataset_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/DateCasesDataset.json */ "./db/DateCasesDataset.json", 1);
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Index = function Index() {
  var prepareChartData = function prepareChartData(dataset) {
    return Object.fromEntries(Object.entries(dataset).map(function (entry) {
      return [entry[0], entry[1].cases];
    }));
  };

  var lineChartData = [{
    name: 'Заразени',
    data: prepareChartData(_db_DateCasesDataset_json__WEBPACK_IMPORTED_MODULE_7__.infected)
  }, {
    name: 'Излекувани',
    data: prepareChartData(_db_DateCasesDataset_json__WEBPACK_IMPORTED_MODULE_7__.cured)
  }, {
    name: 'Жертви',
    data: prepareChartData(_db_DateCasesDataset_json__WEBPACK_IMPORTED_MODULE_7__.fatal)
  }];
  return __jsx(_components_BaseLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
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
      lineNumber: 28
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "d-sm-flex align-items-center justify-content-between my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h1", {
    className: "h3 mb-0 text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\u041D\u0430\u0447\u0430\u043B\u043E")), __jsx(_components_CasesOverview__WEBPACK_IMPORTED_MODULE_4__["default"], {
    infected: _db_TotalsDataset_json__WEBPACK_IMPORTED_MODULE_6__.infected,
    cured: _db_TotalsDataset_json__WEBPACK_IMPORTED_MODULE_6__.cured,
    fatal: _db_TotalsDataset_json__WEBPACK_IMPORTED_MODULE_6__.fatal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "shadow mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
    className: "py-3 d-flex flex-row align-items-center justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u0425\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043D\u0430 \u0437\u0430\u0440\u0430\u0437\u0430\u0442\u0430")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_components_CasesLineChart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: lineChartData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5e66dd271fe6c6e29618.hot-update.js.map