webpackHotUpdate(5,{

/***/ "./simulations/SketchHelpers.js":
/*!**************************************!*\
  !*** ./simulations/SketchHelpers.js ***!
  \**************************************/
/*! exports provided: setupCanvas, handleInteractions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupCanvas", function() { return setupCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleInteractions", function() { return handleInteractions; });
/* harmony import */ var _DiseaseState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiseaseState */ "./simulations/DiseaseState.js");
/* harmony import */ var _Physics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Physics */ "./simulations/Physics.js");
/* eslint-disable no-param-reassign */



var setupCanvas = function setupCanvas(p5, width, height) {
  var canvas = p5.createCanvas(width, height);
  canvas["class"]('simulation');
};

var handleInteractions = function handleInteractions(p5, person, population) {
  var statistics = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var mortalityRate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  population.forEach(function (other) {
    if (other === person) return;
    if (person.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_0__["default"].FATAL || other.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_0__["default"].FATAL) return;

    if (Object(_Physics__WEBPACK_IMPORTED_MODULE_1__["checkCollision"])(person, other)) {
      Object(_Physics__WEBPACK_IMPORTED_MODULE_1__["changeDirections"])(person, other);
      if (person.state === other.state) return;
      if (person.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_0__["default"].CURED || other.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_0__["default"].CURED) return;

      if (statistics === null) {
        person.infect();
        other.infect();
      } else {
        if (person.infect(p5.random(0, 1) > mortalityRate)) {
          statistics.infected += 1;
          statistics.unaffected -= 1;
        }

        if (other.infect(p5.random(0, 1) > mortalityRate)) {
          statistics.infected += 1;
          statistics.unaffected -= 1;
        }
      }
    }
  });
};



/***/ })

})
//# sourceMappingURL=5.c30c37bedcbc4ad8714b.hot-update.js.map