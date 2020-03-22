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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_BaseLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BaseLayout */ "./components/BaseLayout.js");
/* harmony import */ var _components_SimulationCounters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SimulationCounters */ "./components/SimulationCounters.js");
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
  return __jsx(_components_BaseLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "d-sm-flex align-items-center justify-content-between my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    className: "h3 mb-0 text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u0417\u0430\u0449\u043E \u0434\u0430 \u043E\u0441\u0442\u0430\u043D\u0435\u043C \u0432\u043A\u044A\u0449\u0438?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(TransmissionSketch, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(ImmunitySketch, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(NoRestrictionsSketch, {
    CountersComponent: _components_SimulationCounters__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(StayHomeSketch, {
    stayHomePercentage: 0.6,
    CountersComponent: _components_SimulationCounters__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Simulation);

/***/ })

})
//# sourceMappingURL=simulation.js.bba6817faadc96820b26.hot-update.js.map