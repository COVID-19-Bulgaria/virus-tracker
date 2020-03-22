webpackHotUpdate(2,{

/***/ "./simulations/sketches/RulesSketch.js":
/*!*********************************************!*\
  !*** ./simulations/sketches/RulesSketch.js ***!
  \*********************************************/
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
/* harmony import */ var _Replay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Replay */ "./simulations/Replay.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/simulations/sketches/RulesSketch.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable no-param-reassign */






var RulesSketch = function RulesSketch(props) {
  var id = props.id,
      backgroundColor = props.backgroundColor,
      maxFrameCount = props.maxFrameCount,
      setupPopulation = props.setupPopulation;
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

    var initialize = function initialize() {
      population = [];
      setupPopulation(p, population);
      setShowReplay(false);
      p.frameCount = -1;
      p.loop();
    };

    p.setup = function () {
      Object(_SketchHelpers__WEBPACK_IMPORTED_MODULE_4__["setupCanvas"])(p, canvasWidth, canvasHeight);
      setupPopulation(p, population);
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

    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && p.frameCount < maxFrameCount) {
        p.loop();
      } else {
        p.noLoop();
      }
    });
    observer.observe(containerRef.current);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // eslint-disable-next-line no-new
    new p5__WEBPACK_IMPORTED_MODULE_3___default.a(sketch, containerRef.current);
  }, []);
  return __jsx("div", {
    id: id,
    ref: containerRef,
    style: {
      maxWidth: canvasWidth,
      position: 'relative'
    },
    className: "jsx-2008471908" + " " + (showReplay && 'overlay' || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_Replay__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: showReplay,
    onClick: handleReplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2008471908",
    __self: this
  }, ".overlay canvas{opacity:0.2;}canvas.simulation{width:100% !important;height:auto !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9za2V0Y2hlcy9SdWxlc1NrZXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRVMsQUFHeUIsQUFJVSxZQUh4QixVQUl5Qix1QkFDekIiLCJmaWxlIjoiL1VzZXJzL1Zlc2VsaW4vV29yay92aXJ1cy10cmFja2VyL3NpbXVsYXRpb25zL3NrZXRjaGVzL1J1bGVzU2tldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUDUgZnJvbSAncDUnO1xuaW1wb3J0IHsgc2V0dXBDYW52YXMsIGhhbmRsZUludGVyYWN0aW9ucyB9IGZyb20gJy4uL1NrZXRjaEhlbHBlcnMnO1xuaW1wb3J0IFJlcGxheSBmcm9tICcuLi9SZXBsYXknO1xuXG5jb25zdCBSdWxlc1NrZXRjaCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgYmFja2dyb3VuZENvbG9yLFxuICAgIG1heEZyYW1lQ291bnQsXG4gICAgc2V0dXBQb3B1bGF0aW9uLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2FudmFzV2lkdGggPSAzMDA7XG4gIGNvbnN0IGNhbnZhc0hlaWdodCA9IDEwMDtcblxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW3Nob3dSZXBsYXksIHNldFNob3dSZXBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFuZGxlUmVwbGF5LCBzZXRIYW5kbGVSZXBsYXldID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBza2V0Y2ggPSAocCkgPT4ge1xuICAgIGxldCBwb3B1bGF0aW9uID0gW107XG5cbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgcG9wdWxhdGlvbiA9IFtdO1xuICAgICAgc2V0dXBQb3B1bGF0aW9uKHAsIHBvcHVsYXRpb24pO1xuICAgICAgc2V0U2hvd1JlcGxheShmYWxzZSk7XG4gICAgICBwLmZyYW1lQ291bnQgPSAtMTtcbiAgICAgIHAubG9vcCgpO1xuICAgIH07XG5cbiAgICBwLnNldHVwID0gKCkgPT4ge1xuICAgICAgc2V0dXBDYW52YXMocCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XG4gICAgICBzZXR1cFBvcHVsYXRpb24ocCwgcG9wdWxhdGlvbik7XG4gICAgICBzZXRIYW5kbGVSZXBsYXkoKCkgPT4gaW5pdGlhbGl6ZSk7XG4gICAgfTtcblxuICAgIHAuZHJhdyA9ICgpID0+IHtcbiAgICAgIGlmIChwLmZyYW1lQ291bnQgPT09IG1heEZyYW1lQ291bnQpIHtcbiAgICAgICAgcC5ub0xvb3AoKTtcbiAgICAgICAgc2V0U2hvd1JlcGxheSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcC5iYWNrZ3JvdW5kKGJhY2tncm91bmRDb2xvcik7XG5cbiAgICAgIHBvcHVsYXRpb24uZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgIHBlcnNvbi5tb3ZlKCk7XG4gICAgICAgIGhhbmRsZUludGVyYWN0aW9ucyhwLCBwZXJzb24sIHBvcHVsYXRpb24pO1xuICAgICAgICBwZXJzb24ucmVuZGVyKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nICYmIHAuZnJhbWVDb3VudCA8IG1heEZyYW1lQ291bnQpIHtcbiAgICAgICAgcC5sb29wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwLm5vTG9vcCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXJSZWYuY3VycmVudCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgbmV3IFA1KHNrZXRjaCwgY29udGFpbmVyUmVmLmN1cnJlbnQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtpZH0gcmVmPXtjb250YWluZXJSZWZ9IGNsYXNzTmFtZT17c2hvd1JlcGxheSAmJiAnb3ZlcmxheSd9IHN0eWxlPXt7IG1heFdpZHRoOiBjYW52YXNXaWR0aCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICA8UmVwbGF5IHNob3c9e3Nob3dSZXBsYXl9IG9uQ2xpY2s9e2hhbmRsZVJlcGxheX0gLz5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5vdmVybGF5IGNhbnZhcyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FudmFzLnNpbXVsYXRpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5SdWxlc1NrZXRjaC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4RnJhbWVDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgc2V0dXBQb3B1bGF0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuUnVsZXNTa2V0Y2guZGVmYXVsdFByb3BzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgbWF4RnJhbWVDb3VudDogNTAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUnVsZXNTa2V0Y2g7XG4iXX0= */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/sketches/RulesSketch.js */"));
};

RulesSketch.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  maxFrameCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  setupPopulation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
RulesSketch.defaultProps = {
  backgroundColor: '#ffffff',
  maxFrameCount: 500
};
/* harmony default export */ __webpack_exports__["default"] = (RulesSketch);

/***/ })

})
//# sourceMappingURL=2.e6a1c5dffa3960220784.hot-update.js.map