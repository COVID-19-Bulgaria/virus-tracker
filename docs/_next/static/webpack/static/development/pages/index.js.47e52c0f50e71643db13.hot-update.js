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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BaseLayout */ "./components/BaseLayout.js");
/* harmony import */ var _components_CasesOverview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CasesOverview */ "./components/CasesOverview.js");
/* harmony import */ var _components_CasesLineChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CasesLineChart */ "./components/CasesLineChart.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Index = function Index() {
  var data = [{
    name: 'Заразени',
    data: {
      // https://www.bnr.bg/post/101237668/potvardeni-sa-dva-sluchaa-na-koronavirus-v-balggaria
      // 27-годишен мъж от Плевен и на 75-годишна жена от Габрово
      '2020-03-08': 2,
      '2020-03-09': 2,
      // https://nova.bg/news/view/2020/03/10/280816/%D0%B8%D0%B7%D0%B2%D1%8A%D0%BD%D1%80%D0%B5%D0%B4%D0%BD%D0%BE-%D0%BA%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81%D1%8A%D1%82-%D1%81%D1%82%D0%B8%D0%B3%D0%BD%D0%B0-%D1%81%D0%BE%D1%84%D0%B8%D1%8F-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/
      '2020-03-10': 2,
      // https://btvnovinite.bg/bulgaria/sedmi-bolen-ot-koronavirus-u-nas.html
      '2020-03-11': 1,
      // https://nova.bg/news/view/2020/03/12/281028/%D0%B8%D0%B7%D0%B2%D1%8A%D0%BD%D1%80%D0%B5%D0%B4%D0%BD%D0%BE-%D0%BD%D0%BE%D0%B2%D0%B8-9-%D1%81%D0%BB%D1%83%D1%87%D0%B0%D1%8F-%D0%BD%D0%B0-%D0%BA%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81-%D1%83-%D0%BD%D0%B0%D1%81/
      // https://nova.bg/news/view/2020/03/12/281060/%D0%B8%D0%B7%D0%B2%D1%8A%D0%BD%D1%80%D0%B5%D0%B4%D0%BD%D0%BE-%D0%BD%D0%BE%D0%B2%D0%B8-7-%D1%81%D0%BB%D1%83%D1%87%D0%B0%D1%8F-%D0%BD%D0%B0-%D0%BA%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81-%D0%BE%D0%B1%D1%89%D0%BE-%D1%81%D1%82%D0%B0%D0%B2%D0%B0%D1%82-23-%D0%B2-%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D0%B8%D1%8F/
      '2020-03-12': 16
    }
  }, {
    name: 'Излекувани',
    data: {
      '2020-03-08': 0,
      '2020-03-09': 0,
      '2020-03-10': 0,
      '2020-03-11': 0,
      '2020-03-12': 0
    }
  }, {
    name: 'Жертви',
    data: {
      '2020-03-08': 0,
      '2020-03-09': 0,
      '2020-03-10': 0,
      // https://www.economic.bg/bg/news/12/parvi-smarten-sluchaj-ot-koronavirusa-v-balgariya.html
      '2020-03-11': 1,
      '2020-03-12': 0
    }
  }];
  return __jsx(_components_BaseLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "d-sm-flex align-items-center justify-content-between mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h1", {
    className: "h3 mb-0 text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u041D\u0430\u0447\u0430\u043B\u043E")), __jsx(_components_CasesOverview__WEBPACK_IMPORTED_MODULE_3__["default"], {
    infected: 23,
    cured: 0,
    fatal: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_components_CasesLineChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.47e52c0f50e71643db13.hot-update.js.map