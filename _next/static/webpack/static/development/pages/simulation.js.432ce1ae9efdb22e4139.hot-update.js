webpackHotUpdate("static/development/pages/simulation.js",{

/***/ "./components/SimulationCounters.js":
/*!******************************************!*\
  !*** ./components/SimulationCounters.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/components/SimulationCounters.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SimulationCounters = function SimulationCounters(_ref) {
  var counters = _ref.counters;
  var unaffected = counters.unaffected,
      infected = counters.infected,
      cured = counters.cured;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    variant: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u041D\u0435\u0437\u0430\u0441\u0435\u0433\u043D\u0430\u0442\u0438 -", unaffected), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    variant: "warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\u0417\u0430\u0440\u0430\u0437\u0435\u043D\u0438 -", infected), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    variant: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\u0418\u0437\u043B\u0435\u043A\u0443\u0432\u0430\u043D\u0438 -", cured));
};

SimulationCounters.propTypes = {
  counters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    unaffected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    infected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    cured: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SimulationCounters);

/***/ })

})
//# sourceMappingURL=simulation.js.432ce1ae9efdb22e4139.hot-update.js.map