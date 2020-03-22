webpackHotUpdate(4,{

/***/ "./simulations/sketches/NoRestrictionsSketch.js":
/*!******************************************************!*\
  !*** ./simulations/sketches/NoRestrictionsSketch.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InfectionSketch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfectionSketch */ "./simulations/sketches/InfectionSketch.js");
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Person */ "./simulations/Person.js");
/* harmony import */ var _DiseaseState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DiseaseState */ "./simulations/DiseaseState.js");

var _jsxFileName = "/Users/Veselin/Work/virus-tracker/simulations/sketches/NoRestrictionsSketch.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable no-param-reassign */




var NoRestrictionsSketch = function NoRestrictionsSketch(props) {
  var setupPopulation = function setupPopulation(p5, population, size, statistics) {
    population[0] = new _Person__WEBPACK_IMPORTED_MODULE_3__["default"]({
      x: p5.random(_Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius, p5.width - _Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius),
      y: p5.random(_Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius, p5.height - _Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius),
      radius: 10,
      state: _DiseaseState__WEBPACK_IMPORTED_MODULE_4__["default"].INFECTED,
      p5: p5
    });
    statistics.infected += 1;

    for (var i = 1; i < size; i += 1) {
      population[i] = new _Person__WEBPACK_IMPORTED_MODULE_3__["default"]({
        x: p5.random(_Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius, p5.width - _Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius),
        y: p5.random(_Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius, p5.height - _Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius),
        radius: 10,
        state: _DiseaseState__WEBPACK_IMPORTED_MODULE_4__["default"].UNAFFECTED,
        p5: p5
      });
      statistics.unaffected += 1;
    }
  };

  return __jsx(_InfectionSketch__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "no-restrictions",
    setupPopulation: setupPopulation
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NoRestrictionsSketch);

/***/ })

})
//# sourceMappingURL=4.dfec3e701fb6ec0bf700.hot-update.js.map