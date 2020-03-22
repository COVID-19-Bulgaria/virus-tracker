webpackHotUpdate(5,{

/***/ "./simulations/sketches/Immunity.js":
/*!******************************************!*\
  !*** ./simulations/sketches/Immunity.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SketchHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SketchHelpers */ "./simulations/SketchHelpers.js");
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Person */ "./simulations/Person.js");
/* harmony import */ var _DiseaseState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DiseaseState */ "./simulations/DiseaseState.js");
/* harmony import */ var _Physics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Physics */ "./simulations/Physics.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/simulations/sketches/Immunity.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Immunity = function Immunity(props) {
  var canvasWidth = props.canvasWidth,
      canvasHeight = props.canvasHeight,
      backgroundColor = props.backgroundColor;
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var sketch = function sketch(p) {
    var population = [];

    var setupPopulation = function setupPopulation() {
      population[0] = new _Person__WEBPACK_IMPORTED_MODULE_4__["default"]({
        x: 100,
        y: 48,
        horizontalSpeed: 1,
        verticalSpeed: 0,
        radius: 30,
        state: _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].INFECTED,
        p5: p
      });
      population[1] = new _Person__WEBPACK_IMPORTED_MODULE_4__["default"]({
        x: 170,
        y: 48,
        horizontalSpeed: 0,
        verticalSpeed: 0,
        radius: 30,
        state: _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].CURED,
        p5: p
      });
    };

    p.setup = function () {
      Object(_SketchHelpers__WEBPACK_IMPORTED_MODULE_3__["setupCanvas"])(p, canvasWidth, canvasHeight);
      setupPopulation();
    };

    p.draw = function () {
      p.background(backgroundColor);
      population.forEach(function (person) {
        person.move();
        population.forEach(function (other) {
          if (other === person) return;
          if (other.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].FATAL) return;

          if (Object(_Physics__WEBPACK_IMPORTED_MODULE_6__["checkCollision"])(person, other)) {
            Object(_Physics__WEBPACK_IMPORTED_MODULE_6__["changeDirections"])(person, other);
            if (person.state === other.state) return;
            if (person.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].CURED || other.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].CURED) return;
            person.state = _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].INFECTED;
            other.state = _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].INFECTED;
          }
        });
        person.render();
      });
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // eslint-disable-next-line no-new
    new p5__WEBPACK_IMPORTED_MODULE_2___default.a(sketch, containerRef.current);
  });
  return __jsx("div", {
    id: "immunity",
    ref: containerRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  });
};

Immunity.propTypes = {
  canvasWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  canvasHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Immunity.defaultProps = {
  canvasWidth: 300,
  canvasHeight: 100,
  backgroundColor: '#f8f9fc'
};
/* harmony default export */ __webpack_exports__["default"] = (Immunity);

/***/ })

})
//# sourceMappingURL=5.b70e13ee4c093dab8b0e.hot-update.js.map