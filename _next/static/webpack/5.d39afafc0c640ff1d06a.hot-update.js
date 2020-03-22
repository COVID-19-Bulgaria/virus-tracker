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
  });
  return __jsx("div", {
    id: "immunity",
    ref: containerRef,
    style: {
      maxWidth: canvasWidth,
      position: 'relative'
    },
    className: "jsx-4032735562" + " " + (showReplay && 'overlay' || ""),
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
    id: "4032735562",
    __self: this
  }, ".overlay.jsx-4032735562 canvas.jsx-4032735562{opacity:0.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9za2V0Y2hlcy9JbW11bml0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRlMsQUFHeUIsWUFDZCIsImZpbGUiOiIvVXNlcnMvVmVzZWxpbi9Xb3JrL3ZpcnVzLXRyYWNrZXIvc2ltdWxhdGlvbnMvc2tldGNoZXMvSW1tdW5pdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQNSBmcm9tICdwNSc7XG5pbXBvcnQgeyBzZXR1cENhbnZhcywgaGFuZGxlSW50ZXJhY3Rpb25zIH0gZnJvbSAnLi4vU2tldGNoSGVscGVycyc7XG5pbXBvcnQgUGVyc29uIGZyb20gJy4uL1BlcnNvbic7XG5pbXBvcnQgRGlzZWFzZVN0YXRlIGZyb20gJy4uL0Rpc2Vhc2VTdGF0ZSc7XG5pbXBvcnQgUmVwbGF5IGZyb20gJy4uL1JlcGxheSc7XG5cbmNvbnN0IEltbXVuaXR5ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgbWF4RnJhbWVDb3VudCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNhbnZhc1dpZHRoID0gMzAwO1xuICBjb25zdCBjYW52YXNIZWlnaHQgPSAxMDA7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtzaG93UmVwbGF5LCBzZXRTaG93UmVwbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hhbmRsZVJlcGxheSwgc2V0SGFuZGxlUmVwbGF5XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgc2tldGNoID0gKHApID0+IHtcbiAgICBsZXQgcG9wdWxhdGlvbiA9IFtdO1xuXG4gICAgY29uc3Qgc2V0dXBQb3B1bGF0aW9uID0gKCkgPT4ge1xuICAgICAgcG9wdWxhdGlvblswXSA9IG5ldyBQZXJzb24oe1xuICAgICAgICB4OiAxMDAsXG4gICAgICAgIHk6IDQ4LFxuICAgICAgICBob3Jpem9udGFsU3BlZWQ6IDEsXG4gICAgICAgIHZlcnRpY2FsU3BlZWQ6IDAsXG4gICAgICAgIHJhZGl1czogMzAsXG4gICAgICAgIHN0YXRlOiBEaXNlYXNlU3RhdGUuSU5GRUNURUQsXG4gICAgICAgIHA1OiBwLFxuICAgICAgfSk7XG5cbiAgICAgIHBvcHVsYXRpb25bMV0gPSBuZXcgUGVyc29uKHtcbiAgICAgICAgeDogMTcwLFxuICAgICAgICB5OiA0OCxcbiAgICAgICAgaG9yaXpvbnRhbFNwZWVkOiAwLFxuICAgICAgICB2ZXJ0aWNhbFNwZWVkOiAwLFxuICAgICAgICByYWRpdXM6IDMwLFxuICAgICAgICBzdGF0ZTogRGlzZWFzZVN0YXRlLkNVUkVELFxuICAgICAgICBwNTogcCxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgcG9wdWxhdGlvbiA9IFtdO1xuICAgICAgc2V0dXBQb3B1bGF0aW9uKCk7XG4gICAgICBzZXRTaG93UmVwbGF5KGZhbHNlKTtcbiAgICAgIHAuZnJhbWVDb3VudCA9IC0xO1xuICAgICAgcC5sb29wKCk7XG4gICAgfTtcblxuICAgIHAuc2V0dXAgPSAoKSA9PiB7XG4gICAgICBzZXR1cENhbnZhcyhwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIHNldHVwUG9wdWxhdGlvbigpO1xuICAgICAgc2V0SGFuZGxlUmVwbGF5KCgpID0+IGluaXRpYWxpemUpO1xuICAgIH07XG5cbiAgICBwLmRyYXcgPSAoKSA9PiB7XG4gICAgICBpZiAocC5mcmFtZUNvdW50ID09PSBtYXhGcmFtZUNvdW50KSB7XG4gICAgICAgIHAubm9Mb29wKCk7XG4gICAgICAgIHNldFNob3dSZXBsYXkodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHAuYmFja2dyb3VuZChiYWNrZ3JvdW5kQ29sb3IpO1xuXG4gICAgICBwb3B1bGF0aW9uLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgICAgICBwZXJzb24ubW92ZSgpO1xuICAgICAgICBoYW5kbGVJbnRlcmFjdGlvbnMocCwgcGVyc29uLCBwb3B1bGF0aW9uKTtcbiAgICAgICAgcGVyc29uLnJlbmRlcigpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICBuZXcgUDUoc2tldGNoLCBjb250YWluZXJSZWYuY3VycmVudCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImltbXVuaXR5XCIgcmVmPXtjb250YWluZXJSZWZ9IGNsYXNzTmFtZT17c2hvd1JlcGxheSAmJiAnb3ZlcmxheSd9IHN0eWxlPXt7IG1heFdpZHRoOiBjYW52YXNXaWR0aCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICA8UmVwbGF5IHNob3c9e3Nob3dSZXBsYXl9IG9uQ2xpY2s9e2hhbmRsZVJlcGxheX0gLz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm92ZXJsYXkgY2FudmFzIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSW1tdW5pdHkucHJvcFR5cGVzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1heEZyYW1lQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5JbW11bml0eS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmMnLFxuICBtYXhGcmFtZUNvdW50OiAzMDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbW11bml0eTtcbiJdfQ== */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/sketches/Immunity.js */"));
};

Immunity.propTypes = {
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  maxFrameCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
Immunity.defaultProps = {
  backgroundColor: '#f8f9fc',
  maxFrameCount: 300
};
/* harmony default export */ __webpack_exports__["default"] = (Immunity);

/***/ })

})
//# sourceMappingURL=5.d39afafc0c640ff1d06a.hot-update.js.map