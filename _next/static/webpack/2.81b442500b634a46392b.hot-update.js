webpackHotUpdate(2,{

/***/ "./simulations/Person.js":
/*!*******************************!*\
  !*** ./simulations/Person.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _DiseaseState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiseaseState */ "./simulations/DiseaseState.js");




var Person = /*#__PURE__*/function () {
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Person, null, [{
    key: "defaultRadius",
    get: function get() {
      return 5;
    }
  }, {
    key: "speed",
    get: function get() {
      return 1;
    }
  }]);

  function Person(_ref) {
    var x = _ref.x,
        y = _ref.y,
        horizontalSpeed = _ref.horizontalSpeed,
        verticalSpeed = _ref.verticalSpeed,
        radius = _ref.radius,
        state = _ref.state,
        _ref$canMove = _ref.canMove,
        canMove = _ref$canMove === void 0 ? true : _ref$canMove,
        p5 = _ref.p5;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Person);

    this.x = x;
    this.y = y;
    this.state = state;
    this.canMove = canMove;
    this.p5 = p5;
    this.horizontalSpeed = horizontalSpeed !== undefined ? horizontalSpeed : p5.random(-1, 1) * Person.speed;
    this.verticalSpeed = verticalSpeed !== undefined ? verticalSpeed : p5.random(-1, 1) * Person.speed;
    this.radius = radius !== undefined ? radius : Person.defaultRadius;
    this.infectedTime = 0;
    this.willSurvive = true;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Person, [{
    key: "render",
    value: function render() {
      this.p5.fill(this.state.color);
      this.p5.noStroke();
      this.p5.ellipse(this.x, this.y, this.radius);
    }
  }, {
    key: "canMove",
    value: function canMove() {
      return this.canMove && this.state !== _DiseaseState__WEBPACK_IMPORTED_MODULE_2__["default"].FATAL;
    }
  }, {
    key: "move",
    value: function move() {
      if (!this.canMove()) return;

      if (this.x - this.radius < 0 && this.horizontalSpeed < 0 || this.x + this.radius > this.p5.width && this.horizontalSpeed > 0) {
        this.horizontalSpeed *= -1;
      }

      if (this.y - this.radius < 0 && this.verticalSpeed < 0 || this.y + this.radius > this.p5.height && this.verticalSpeed > 0) {
        this.verticalSpeed *= -1;
      }

      this.x += this.horizontalSpeed;
      this.y += this.verticalSpeed;
    }
  }, {
    key: "infect",
    value: function infect() {
      var willSurvive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_2__["default"].INFECTED) return false;
      this.state = _DiseaseState__WEBPACK_IMPORTED_MODULE_2__["default"].INFECTED;
      this.willSurvive = willSurvive;
      return true;
    }
  }]);

  return Person;
}();

/* harmony default export */ __webpack_exports__["default"] = (Person);

/***/ })

})
//# sourceMappingURL=2.81b442500b634a46392b.hot-update.js.map