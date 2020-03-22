webpackHotUpdate("static/development/pages/simulation.js",{

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
    CountersComponent: _components_SimulationCounters__WEBPACK_IMPORTED_MODULE_3__["default"],
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
//# sourceMappingURL=simulation.js.a12dabe735d93ca88edd.hot-update.js.map