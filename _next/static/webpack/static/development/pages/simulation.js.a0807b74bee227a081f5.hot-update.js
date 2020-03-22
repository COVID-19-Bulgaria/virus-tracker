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
    className: "text-center",
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
  }, __jsx("i", {
    className: "fas fa-smile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), "\xA0", unaffected), ' ', __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    variant: "warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-radiation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), "\xA0", infected), ' ', __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    variant: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-notes-medical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), "\xA0", cured));
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
//# sourceMappingURL=simulation.js.a0807b74bee227a081f5.hot-update.js.map