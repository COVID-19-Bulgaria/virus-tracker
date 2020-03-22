webpackHotUpdate(5,{

/***/ "./simulations/sketches/Immunity.js":
/*!******************************************!*\
  !*** ./simulations/sketches/Immunity.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SketchHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SketchHelpers */ "./simulations/SketchHelpers.js");
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Person */ "./simulations/Person.js");
/* harmony import */ var _DiseaseState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DiseaseState */ "./simulations/DiseaseState.js");
/* harmony import */ var _Replay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Replay */ "./simulations/Replay.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/simulations/sketches/Immunity.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable no-param-reassign */








var Immunity = function Immunity(props) {
  var backgroundColor = props.backgroundColor,
      maxFrameCount = props.maxFrameCount;
  var canvasWidth = 300;
  var canvasHeight = 100;
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showReplay = _useState[0],
      setShowReplay = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      handleReplay = _useState2[0],
      setHandleReplay = _useState2[1];

  var sketch = function sketch(p) {
    var population = [];

    var setupPopulation = function setupPopulation() {
      population[0] = new _Person__WEBPACK_IMPORTED_MODULE_5__["default"]({
        x: 100,
        y: 48,
        horizontalSpeed: 1,
        verticalSpeed: 0,
        radius: 30,
        state: _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].INFECTED,
        p5: p
      });
      population[1] = new _Person__WEBPACK_IMPORTED_MODULE_5__["default"]({
        x: 170,
        y: 48,
        horizontalSpeed: 0,
        verticalSpeed: 0,
        radius: 30,
        state: _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].CURED,
        p5: p
      });
    };

    var initialize = function initialize() {
      population = [];
      setupPopulation();
      setShowReplay(false);
      p.frameCount = -1;
      p.loop();
    };

    p.setup = function () {
      Object(_SketchHelpers__WEBPACK_IMPORTED_MODULE_4__["setupCanvas"])(p, canvasWidth, canvasHeight);
      setupPopulation();
      setHandleReplay(function () {
        return initialize;
      });
    };

    p.draw = function () {
      if (p.frameCount === maxFrameCount) {
        p.noLoop();
        setShowReplay(true);
      }

      p.background(backgroundColor);
      population.forEach(function (person) {
        person.move();
        Object(_SketchHelpers__WEBPACK_IMPORTED_MODULE_4__["handleInteractions"])(p, person, population);
        person.render();
      });
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // eslint-disable-next-line no-new
    new p5__WEBPACK_IMPORTED_MODULE_3___default.a(sketch, containerRef.current);
  }, []);
  return __jsx("div", {
    id: "immunity",
    ref: containerRef,
    style: {
      maxWidth: canvasWidth,
      position: 'relative'
    },
    className: "jsx-2938334223" + " " + (showReplay && 'overlay' || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_Replay__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: showReplay,
    onClick: handleReplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2938334223",
    __self: this
  }, ".overlay canvas{opacity:0.2;}canvas.simulation{width:100% !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9za2V0Y2hlcy9JbW11bml0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRlMsQUFHeUIsQUFJVSxZQUh4QixVQUlBIiwiZmlsZSI6Ii9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9za2V0Y2hlcy9JbW11bml0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFA1IGZyb20gJ3A1JztcbmltcG9ydCB7IHNldHVwQ2FudmFzLCBoYW5kbGVJbnRlcmFjdGlvbnMgfSBmcm9tICcuLi9Ta2V0Y2hIZWxwZXJzJztcbmltcG9ydCBQZXJzb24gZnJvbSAnLi4vUGVyc29uJztcbmltcG9ydCBEaXNlYXNlU3RhdGUgZnJvbSAnLi4vRGlzZWFzZVN0YXRlJztcbmltcG9ydCBSZXBsYXkgZnJvbSAnLi4vUmVwbGF5JztcblxuY29uc3QgSW1tdW5pdHkgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGJhY2tncm91bmRDb2xvcixcbiAgICBtYXhGcmFtZUNvdW50LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2FudmFzV2lkdGggPSAzMDA7XG4gIGNvbnN0IGNhbnZhc0hlaWdodCA9IDEwMDtcblxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW3Nob3dSZXBsYXksIHNldFNob3dSZXBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFuZGxlUmVwbGF5LCBzZXRIYW5kbGVSZXBsYXldID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBza2V0Y2ggPSAocCkgPT4ge1xuICAgIGxldCBwb3B1bGF0aW9uID0gW107XG5cbiAgICBjb25zdCBzZXR1cFBvcHVsYXRpb24gPSAoKSA9PiB7XG4gICAgICBwb3B1bGF0aW9uWzBdID0gbmV3IFBlcnNvbih7XG4gICAgICAgIHg6IDEwMCxcbiAgICAgICAgeTogNDgsXG4gICAgICAgIGhvcml6b250YWxTcGVlZDogMSxcbiAgICAgICAgdmVydGljYWxTcGVlZDogMCxcbiAgICAgICAgcmFkaXVzOiAzMCxcbiAgICAgICAgc3RhdGU6IERpc2Vhc2VTdGF0ZS5JTkZFQ1RFRCxcbiAgICAgICAgcDU6IHAsXG4gICAgICB9KTtcblxuICAgICAgcG9wdWxhdGlvblsxXSA9IG5ldyBQZXJzb24oe1xuICAgICAgICB4OiAxNzAsXG4gICAgICAgIHk6IDQ4LFxuICAgICAgICBob3Jpem9udGFsU3BlZWQ6IDAsXG4gICAgICAgIHZlcnRpY2FsU3BlZWQ6IDAsXG4gICAgICAgIHJhZGl1czogMzAsXG4gICAgICAgIHN0YXRlOiBEaXNlYXNlU3RhdGUuQ1VSRUQsXG4gICAgICAgIHA1OiBwLFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICBwb3B1bGF0aW9uID0gW107XG4gICAgICBzZXR1cFBvcHVsYXRpb24oKTtcbiAgICAgIHNldFNob3dSZXBsYXkoZmFsc2UpO1xuICAgICAgcC5mcmFtZUNvdW50ID0gLTE7XG4gICAgICBwLmxvb3AoKTtcbiAgICB9O1xuXG4gICAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICAgIHNldHVwQ2FudmFzKHAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuICAgICAgc2V0dXBQb3B1bGF0aW9uKCk7XG4gICAgICBzZXRIYW5kbGVSZXBsYXkoKCkgPT4gaW5pdGlhbGl6ZSk7XG4gICAgfTtcblxuICAgIHAuZHJhdyA9ICgpID0+IHtcbiAgICAgIGlmIChwLmZyYW1lQ291bnQgPT09IG1heEZyYW1lQ291bnQpIHtcbiAgICAgICAgcC5ub0xvb3AoKTtcbiAgICAgICAgc2V0U2hvd1JlcGxheSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcC5iYWNrZ3JvdW5kKGJhY2tncm91bmRDb2xvcik7XG5cbiAgICAgIHBvcHVsYXRpb24uZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgIHBlcnNvbi5tb3ZlKCk7XG4gICAgICAgIGhhbmRsZUludGVyYWN0aW9ucyhwLCBwZXJzb24sIHBvcHVsYXRpb24pO1xuICAgICAgICBwZXJzb24ucmVuZGVyKCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgIG5ldyBQNShza2V0Y2gsIGNvbnRhaW5lclJlZi5jdXJyZW50KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImltbXVuaXR5XCIgcmVmPXtjb250YWluZXJSZWZ9IGNsYXNzTmFtZT17c2hvd1JlcGxheSAmJiAnb3ZlcmxheSd9IHN0eWxlPXt7IG1heFdpZHRoOiBjYW52YXNXaWR0aCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICA8UmVwbGF5IHNob3c9e3Nob3dSZXBsYXl9IG9uQ2xpY2s9e2hhbmRsZVJlcGxheX0gLz5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5vdmVybGF5IGNhbnZhcyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FudmFzLnNpbXVsYXRpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSW1tdW5pdHkucHJvcFR5cGVzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1heEZyYW1lQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5JbW11bml0eS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmMnLFxuICBtYXhGcmFtZUNvdW50OiA1MDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbW11bml0eTtcbiJdfQ== */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/sketches/Immunity.js */"));
};

Immunity.propTypes = {
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  maxFrameCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
Immunity.defaultProps = {
  backgroundColor: '#f8f9fc',
  maxFrameCount: 500
};
/* harmony default export */ __webpack_exports__["default"] = (Immunity);

/***/ })

})
//# sourceMappingURL=5.fdb7ed174eaf68c60c62.hot-update.js.map