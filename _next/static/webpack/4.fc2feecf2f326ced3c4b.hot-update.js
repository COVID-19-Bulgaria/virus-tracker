webpackHotUpdate(4,{

/***/ "./simulations/Statistics.js":
/*!***********************************!*\
  !*** ./simulations/Statistics.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Statistics = /*#__PURE__*/function () {
  function Statistics(_ref) {
    var _ref$unaffected = _ref.unaffected,
        unaffected = _ref$unaffected === void 0 ? 0 : _ref$unaffected,
        _ref$infected = _ref.infected,
        infected = _ref$infected === void 0 ? 0 : _ref$infected,
        _ref$cured = _ref.cured,
        cured = _ref$cured === void 0 ? 0 : _ref$cured,
        _ref$fatal = _ref.fatal,
        fatal = _ref$fatal === void 0 ? 0 : _ref$fatal;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Statistics);

    this.unaffectedValue = unaffected;
    this.infectedValue = infected;
    this.curedValue = cured;
    this.fatalValue = fatal;
    this.unaffectedTimelineValue = [];
    this.infectedTimelineValue = [];
    this.curedTimelineValue = [];
    this.fatalTimelineValue = [];
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Statistics, [{
    key: "recordTimelines",
    value: function recordTimelines() {
      this.unaffectedTimelineValue.push(this.unaffectedValue + this.curedValue);
      this.infectedTimelineValue.push(this.infectedValue);
      this.curedTimelineValue.push(this.curedValue);
      this.fatalTimelineValue.push(this.fatalValue);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.unaffectedValue = 0;
      this.infectedValue = 0;
      this.curedValue = 0;
      this.fatalValue = 0;
      this.unaffectedTimelineValue = [];
      this.infectedTimelineValue = [];
      this.curedTimelineValue = [];
      this.fatalTimelineValue = [];
    }
  }, {
    key: "counters",
    value: function counters() {
      return {
        unaffected: this.unaffectedValue,
        infected: this.infectedValue,
        cured: this.curedValue,
        fatal: this.fatalValue
      };
    }
  }, {
    key: "timelines",
    value: function timelines() {
      return {
        unaffectedTimeline: this.unaffectedTimelineValue,
        infectedTimeline: this.infectedTimelineValue,
        curedTimeline: this.curedTimelineValue,
        fatalTimeline: this.fatalTimelineValue
      };
    }
  }, {
    key: "unaffected",
    get: function get() {
      return this.unaffectedValue;
    },
    set: function set(unaffected) {
      this.unaffectedValue = unaffected;
    }
  }, {
    key: "infected",
    get: function get() {
      return this.infectedValue;
    },
    set: function set(infected) {
      this.infectedValue = infected;
    }
  }, {
    key: "cured",
    get: function get() {
      return this.curedValue;
    },
    set: function set(cured) {
      this.curedValue = cured;
    }
  }, {
    key: "fatal",
    get: function get() {
      return this.fatalValue;
    },
    set: function set(fatal) {
      this.fatalValue = fatal;
    }
  }, {
    key: "unaffectedTimeline",
    get: function get() {
      return this.unaffectedTimelineValue;
    }
  }, {
    key: "infectedTimeline",
    get: function get() {
      return this.infectedTimelineValue;
    }
  }, {
    key: "curedTimeline",
    get: function get() {
      return this.curedTimelineValue;
    }
  }, {
    key: "fatalTimeline",
    get: function get() {
      return this.fatalTimelineValue;
    }
  }]);

  return Statistics;
}();

/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ })

})
//# sourceMappingURL=4.fc2feecf2f326ced3c4b.hot-update.js.map