webpackHotUpdate(4,{

/***/ "./simulations/sketches/NoRestrictionsSketch.js":
/*!******************************************************!*\
  !*** ./simulations/sketches/NoRestrictionsSketch.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfectionSketch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfectionSketch */ "./simulations/sketches/InfectionSketch.js");
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Person */ "./simulations/Person.js");
/* harmony import */ var _DiseaseState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DiseaseState */ "./simulations/DiseaseState.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/simulations/sketches/NoRestrictionsSketch.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable no-param-reassign */




var NoRestrictionsSketch = function NoRestrictionsSketch() {
  var setupPopulation = function setupPopulation(p5, population, size, statistics) {
    population[0] = new _Person__WEBPACK_IMPORTED_MODULE_2__["default"]({
      x: p5.random(_Person__WEBPACK_IMPORTED_MODULE_2__["default"].defaultRadius, p5.width - _Person__WEBPACK_IMPORTED_MODULE_2__["default"].defaultRadius),
      y: p5.random(_Person__WEBPACK_IMPORTED_MODULE_2__["default"].defaultRadius, p5.height - _Person__WEBPACK_IMPORTED_MODULE_2__["default"].defaultRadius),
      radius: 10,
      state: _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED,
      p5: p5
    });
    statistics.infected += 1;

    for (var i = 1; i < size; i += 1) {
      population[i] = new _Person__WEBPACK_IMPORTED_MODULE_2__["default"]({
        x: p5.random(_Person__WEBPACK_IMPORTED_MODULE_2__["default"].defaultRadius, p5.width - _Person__WEBPACK_IMPORTED_MODULE_2__["default"].defaultRadius),
        y: p5.random(_Person__WEBPACK_IMPORTED_MODULE_2__["default"].defaultRadius, p5.height - _Person__WEBPACK_IMPORTED_MODULE_2__["default"].defaultRadius),
        radius: 10,
        state: _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED,
        p5: p5
      });
      statistics.unaffected += 1;
    }
  };

  return __jsx(_InfectionSketch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "no-restrictions",
    setupPopulation: setupPopulation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NoRestrictionsSketch);

/***/ })

})
//# sourceMappingURL=4.56890037dd512261fbe2.hot-update.js.map