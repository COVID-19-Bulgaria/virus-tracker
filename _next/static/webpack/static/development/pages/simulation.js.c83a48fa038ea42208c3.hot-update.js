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
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/pages/simulation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Transmission = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../simulations/sketches/Transmission */ "./simulations/sketches/Transmission.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../simulations/sketches/Transmission */ "./simulations/sketches/Transmission.js")];
    },
    modules: ['../simulations/sketches/Transmission']
  }
});
var Immunity = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../simulations/sketches/Immunity */ "./simulations/sketches/Immunity.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../simulations/sketches/Immunity */ "./simulations/sketches/Immunity.js")];
    },
    modules: ['../simulations/sketches/Immunity']
  }
});
var Infection = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../simulations/sketches/Infection */ "./simulations/sketches/Infection.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../simulations/sketches/Infection */ "./simulations/sketches/Infection.js")];
    },
    modules: ['../simulations/sketches/Infection']
  }
});

var Simulation = function Simulation() {
  return __jsx(_components_BaseLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(Transmission, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(Immunity, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(Infection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Simulation);

/***/ })

})
//# sourceMappingURL=simulation.js.c83a48fa038ea42208c3.hot-update.js.map