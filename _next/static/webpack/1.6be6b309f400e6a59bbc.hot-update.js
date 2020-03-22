webpackHotUpdate(1,{

/***/ "./simulations/sketches/StayHomeSketch.js":
/*!************************************************!*\
  !*** ./simulations/sketches/StayHomeSketch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _InfectionSketch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfectionSketch */ "./simulations/sketches/InfectionSketch.js");
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Person */ "./simulations/Person.js");
/* harmony import */ var _DiseaseState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DiseaseState */ "./simulations/DiseaseState.js");


var _jsxFileName = "/Users/Veselin/Work/virus-tracker/simulations/sketches/StayHomeSketch.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* eslint-disable no-param-reassign */





var StayHomeSketch = function StayHomeSketch(props) {
  var stayHomePercentage = props.stayHomePercentage,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["stayHomePercentage"]);

  var setupPopulation = function setupPopulation(p5, population, size, statistics) {
    population[0] = new _Person__WEBPACK_IMPORTED_MODULE_5__["default"]({
      x: p5.random(_Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius, p5.width - _Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius),
      y: p5.random(_Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius, p5.height - _Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius),
      radius: 10,
      state: _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].INFECTED,
      p5: p5
    });
    statistics.infected += 1;

    for (var i = 1; i < size; i += 1) {
      population[i] = new _Person__WEBPACK_IMPORTED_MODULE_5__["default"]({
        x: p5.random(_Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius, p5.width - _Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius),
        y: p5.random(_Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius, p5.height - _Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius),
        radius: 10,
        state: _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].UNAFFECTED,
        staysHome: p5.random(0, 1) <= stayHomePercentage,
        p5: p5
      });
      statistics.unaffected += 1;
    }
  };

  return __jsx(_InfectionSketch__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "stay-home",
    setupPopulation: setupPopulation
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

StayHomeSketch.propTypes = {
  stayHomePercentage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};
StayHomeSketch.defaultProps = {
  stayHomePercentage: 0.4
};
/* harmony default export */ __webpack_exports__["default"] = (StayHomeSketch);

/***/ })

})
//# sourceMappingURL=1.6be6b309f400e6a59bbc.hot-update.js.map