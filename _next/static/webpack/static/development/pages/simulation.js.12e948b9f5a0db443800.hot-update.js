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
  var unaffected = _ref.unaffected,
      infected = _ref.infected,
      cured = _ref.cured;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    variant: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "\u041D\u0435\u0437\u0430\u0441\u0435\u0433\u043D\u0430\u0442\u0438 -", unaffected), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    variant: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\u0417\u0430\u0440\u0430\u0437\u0435\u043D\u0438 -", infected), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    variant: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\u0418\u0437\u043B\u0435\u043A\u0443\u0432\u0430\u043D\u0438 -", cured));
};

SimulationCounters.propTypes = {
  unaffected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  infected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cured: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SimulationCounters);

/***/ }),

/***/ "./pages/simulation.js":
/*!*****************************!*\
  !*** ./pages/simulation.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BaseLayout */ "./components/BaseLayout.js");
/* harmony import */ var _components_SimulationCounters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SimulationCounters */ "./components/SimulationCounters.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/pages/simulation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var TransmissionSketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../simulations/sketches/TransmissionSketch */ "./simulations/sketches/TransmissionSketch.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../simulations/sketches/TransmissionSketch */ "./simulations/sketches/TransmissionSketch.js")];
    },
    modules: ['../simulations/sketches/TransmissionSketch']
  }
});
var ImmunitySketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../simulations/sketches/ImmunitySketch */ "./simulations/sketches/ImmunitySketch.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../simulations/sketches/ImmunitySketch */ "./simulations/sketches/ImmunitySketch.js")];
    },
    modules: ['../simulations/sketches/ImmunitySketch']
  }
});
var NoRestrictionsSketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../simulations/sketches/NoRestrictionsSketch */ "./simulations/sketches/NoRestrictionsSketch.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../simulations/sketches/NoRestrictionsSketch */ "./simulations/sketches/NoRestrictionsSketch.js")];
    },
    modules: ['../simulations/sketches/NoRestrictionsSketch']
  }
});
var StayHomeSketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../simulations/sketches/StayHomeSketch */ "./simulations/sketches/StayHomeSketch.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../simulations/sketches/StayHomeSketch */ "./simulations/sketches/StayHomeSketch.js")];
    },
    modules: ['../simulations/sketches/StayHomeSketch']
  }
});

var Simulation = function Simulation() {
  return __jsx(_components_BaseLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(TransmissionSketch, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(ImmunitySketch, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(NoRestrictionsSketch, {
    countersComponent: _components_SimulationCounters__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(StayHomeSketch, {
    stayHomePercentage: 0.6,
    countersComponent: _components_SimulationCounters__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Simulation);

/***/ })

})
//# sourceMappingURL=simulation.js.12e948b9f5a0db443800.hot-update.js.map