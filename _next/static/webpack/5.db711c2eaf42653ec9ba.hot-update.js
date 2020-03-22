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
    className: "jsx-3272032906" + " " + (showReplay && 'overlay' || ""),
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
    id: "3272032906",
    __self: this
  }, ".overlay canvas{opacity:0.2;}canvas.simulation{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9za2V0Y2hlcy9JbW11bml0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRlMsQUFHeUIsQUFJRCxXQUNiLENBSkEiLCJmaWxlIjoiL1VzZXJzL1Zlc2VsaW4vV29yay92aXJ1cy10cmFja2VyL3NpbXVsYXRpb25zL3NrZXRjaGVzL0ltbXVuaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUDUgZnJvbSAncDUnO1xuaW1wb3J0IHsgc2V0dXBDYW52YXMsIGhhbmRsZUludGVyYWN0aW9ucyB9IGZyb20gJy4uL1NrZXRjaEhlbHBlcnMnO1xuaW1wb3J0IFBlcnNvbiBmcm9tICcuLi9QZXJzb24nO1xuaW1wb3J0IERpc2Vhc2VTdGF0ZSBmcm9tICcuLi9EaXNlYXNlU3RhdGUnO1xuaW1wb3J0IFJlcGxheSBmcm9tICcuLi9SZXBsYXknO1xuXG5jb25zdCBJbW11bml0eSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYmFja2dyb3VuZENvbG9yLFxuICAgIG1heEZyYW1lQ291bnQsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjYW52YXNXaWR0aCA9IDMwMDtcbiAgY29uc3QgY2FudmFzSGVpZ2h0ID0gMTAwO1xuXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBbc2hvd1JlcGxheSwgc2V0U2hvd1JlcGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoYW5kbGVSZXBsYXksIHNldEhhbmRsZVJlcGxheV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHNrZXRjaCA9IChwKSA9PiB7XG4gICAgbGV0IHBvcHVsYXRpb24gPSBbXTtcblxuICAgIGNvbnN0IHNldHVwUG9wdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgIHBvcHVsYXRpb25bMF0gPSBuZXcgUGVyc29uKHtcbiAgICAgICAgeDogMTAwLFxuICAgICAgICB5OiA0OCxcbiAgICAgICAgaG9yaXpvbnRhbFNwZWVkOiAxLFxuICAgICAgICB2ZXJ0aWNhbFNwZWVkOiAwLFxuICAgICAgICByYWRpdXM6IDMwLFxuICAgICAgICBzdGF0ZTogRGlzZWFzZVN0YXRlLklORkVDVEVELFxuICAgICAgICBwNTogcCxcbiAgICAgIH0pO1xuXG4gICAgICBwb3B1bGF0aW9uWzFdID0gbmV3IFBlcnNvbih7XG4gICAgICAgIHg6IDE3MCxcbiAgICAgICAgeTogNDgsXG4gICAgICAgIGhvcml6b250YWxTcGVlZDogMCxcbiAgICAgICAgdmVydGljYWxTcGVlZDogMCxcbiAgICAgICAgcmFkaXVzOiAzMCxcbiAgICAgICAgc3RhdGU6IERpc2Vhc2VTdGF0ZS5DVVJFRCxcbiAgICAgICAgcDU6IHAsXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgIHBvcHVsYXRpb24gPSBbXTtcbiAgICAgIHNldHVwUG9wdWxhdGlvbigpO1xuICAgICAgc2V0U2hvd1JlcGxheShmYWxzZSk7XG4gICAgICBwLmZyYW1lQ291bnQgPSAtMTtcbiAgICAgIHAubG9vcCgpO1xuICAgIH07XG5cbiAgICBwLnNldHVwID0gKCkgPT4ge1xuICAgICAgc2V0dXBDYW52YXMocCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XG4gICAgICBzZXR1cFBvcHVsYXRpb24oKTtcbiAgICAgIHNldEhhbmRsZVJlcGxheSgoKSA9PiBpbml0aWFsaXplKTtcbiAgICB9O1xuXG4gICAgcC5kcmF3ID0gKCkgPT4ge1xuICAgICAgaWYgKHAuZnJhbWVDb3VudCA9PT0gbWF4RnJhbWVDb3VudCkge1xuICAgICAgICBwLm5vTG9vcCgpO1xuICAgICAgICBzZXRTaG93UmVwbGF5KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBwLmJhY2tncm91bmQoYmFja2dyb3VuZENvbG9yKTtcblxuICAgICAgcG9wdWxhdGlvbi5mb3JFYWNoKChwZXJzb24pID0+IHtcbiAgICAgICAgcGVyc29uLm1vdmUoKTtcbiAgICAgICAgaGFuZGxlSW50ZXJhY3Rpb25zKHAsIHBlcnNvbiwgcG9wdWxhdGlvbik7XG4gICAgICAgIHBlcnNvbi5yZW5kZXIoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgbmV3IFA1KHNrZXRjaCwgY29udGFpbmVyUmVmLmN1cnJlbnQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiaW1tdW5pdHlcIiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXtzaG93UmVwbGF5ICYmICdvdmVybGF5J30gc3R5bGU9e3sgbWF4V2lkdGg6IGNhbnZhc1dpZHRoLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgIDxSZXBsYXkgc2hvdz17c2hvd1JlcGxheX0gb25DbGljaz17aGFuZGxlUmVwbGF5fSAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm92ZXJsYXkgY2FudmFzIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYW52YXMuc2ltdWxhdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSW1tdW5pdHkucHJvcFR5cGVzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1heEZyYW1lQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5JbW11bml0eS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmMnLFxuICBtYXhGcmFtZUNvdW50OiA1MDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbW11bml0eTtcbiJdfQ== */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/sketches/Immunity.js */"));
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
//# sourceMappingURL=5.db711c2eaf42653ec9ba.hot-update.js.map