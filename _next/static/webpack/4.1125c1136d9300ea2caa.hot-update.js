webpackHotUpdate(4,{

/***/ "./simulations/sketches/InfectionSketch.js":
/*!*************************************************!*\
  !*** ./simulations/sketches/InfectionSketch.js ***!
  \*************************************************/
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
/* harmony import */ var _DiseaseState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DiseaseState */ "./simulations/DiseaseState.js");
/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Statistics */ "./simulations/Statistics.js");
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Graph */ "./simulations/Graph.js");
/* harmony import */ var _Counters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Counters */ "./simulations/Counters.js");
/* harmony import */ var _Replay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Replay */ "./simulations/Replay.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/simulations/sketches/InfectionSketch.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable no-param-reassign */










var InfectionSketch = function InfectionSketch(props) {
  var id = props.id,
      canvasWidth = props.canvasWidth,
      canvasHeight = props.canvasHeight,
      populationSize = props.populationSize,
      recoveryTime = props.recoveryTime,
      mortalityRate = props.mortalityRate,
      graphWidth = props.graphWidth,
      graphHeight = props.graphHeight,
      maxFrameCount = props.maxFrameCount,
      backgroundColor = props.backgroundColor,
      setupPopulation = props.setupPopulation,
      CountersComponent = props.CountersComponent;
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var statistics = new _Statistics__WEBPACK_IMPORTED_MODULE_6__["default"]({});

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(statistics.counters()),
      counters = _useState[0],
      setCounters = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(statistics.timelines()),
      timelines = _useState2[0],
      setTimelines = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showReplay = _useState3[0],
      setShowReplay = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      handleReplay = _useState4[0],
      setHandleReplay = _useState4[1];

  var sketch = function sketch(p) {
    var population = [];

    var updateState = function updateState(person) {
      if (person.state !== _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].INFECTED) return;

      if (person.infectedTime > recoveryTime / 2 && !person.willSurvive) {
        person.state = _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].FATAL;
        statistics.fatal += 1;
        statistics.infected -= 1;
        return;
      }

      if (person.infectedTime >= recoveryTime) {
        person.state = _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].CURED;
        statistics.cured += 1;
        statistics.infected -= 1;
        return;
      }

      person.infectedTime += 1;
    };

    var initialize = function initialize() {
      population = [];
      statistics.reset();
      setCounters(statistics.counters());
      setTimelines(statistics.timelines());
      setShowReplay(false);
      setupPopulation(p, population, populationSize, statistics);
      p.frameCount = -1;
      p.loop();
    };

    p.setup = function () {
      Object(_SketchHelpers__WEBPACK_IMPORTED_MODULE_4__["setupCanvas"])(p, canvasWidth, canvasHeight);
      initialize();
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
        updateState(person);
        person.move();
        Object(_SketchHelpers__WEBPACK_IMPORTED_MODULE_4__["handleInteractions"])(p, person, population, statistics, mortalityRate);
        person.render();
      });
      statistics.recordTimelines();

      if (p.frameCount % 2 === 0) {
        setCounters(statistics.counters());
        setTimelines(statistics.timelines());
      }
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // eslint-disable-next-line no-new
    new p5__WEBPACK_IMPORTED_MODULE_3___default.a(sketch, containerRef.current);
  }, []);
  return __jsx("div", {
    id: id,
    style: {
      maxWidth: canvasWidth
    },
    className: "jsx-4032735562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(CountersComponent, {
    counters: counters,
    className: "jsx-4032735562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx(_Graph__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: graphWidth,
    height: graphHeight,
    timelines: timelines,
    populationSize: populationSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx("div", {
    ref: containerRef,
    style: {
      maxWidth: canvasWidth,
      position: 'relative'
    },
    className: "jsx-4032735562" + " " + (showReplay && 'overlay' || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_Replay__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: showReplay,
    onClick: handleReplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4032735562",
    __self: this
  }, ".overlay canvas{opacity:0.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9za2V0Y2hlcy9JbmZlY3Rpb25Ta2V0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0hTLEFBR3lCLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL1Zlc2VsaW4vV29yay92aXJ1cy10cmFja2VyL3NpbXVsYXRpb25zL3NrZXRjaGVzL0luZmVjdGlvblNrZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFA1IGZyb20gJ3A1JztcbmltcG9ydCB7IHNldHVwQ2FudmFzLCBoYW5kbGVJbnRlcmFjdGlvbnMgfSBmcm9tICcuLi9Ta2V0Y2hIZWxwZXJzJztcbmltcG9ydCBEaXNlYXNlU3RhdGUgZnJvbSAnLi4vRGlzZWFzZVN0YXRlJztcbmltcG9ydCBTdGF0aXN0aWNzIGZyb20gJy4uL1N0YXRpc3RpY3MnO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4uL0dyYXBoJztcbmltcG9ydCBDb3VudGVycyBmcm9tICcuLi9Db3VudGVycyc7XG5pbXBvcnQgUmVwbGF5IGZyb20gJy4uL1JlcGxheSc7XG5cbmNvbnN0IEluZmVjdGlvblNrZXRjaCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgY2FudmFzV2lkdGgsXG4gICAgY2FudmFzSGVpZ2h0LFxuICAgIHBvcHVsYXRpb25TaXplLFxuICAgIHJlY292ZXJ5VGltZSxcbiAgICBtb3J0YWxpdHlSYXRlLFxuICAgIGdyYXBoV2lkdGgsXG4gICAgZ3JhcGhIZWlnaHQsXG4gICAgbWF4RnJhbWVDb3VudCxcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgc2V0dXBQb3B1bGF0aW9uLFxuICAgIENvdW50ZXJzQ29tcG9uZW50LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHN0YXRpc3RpY3MgPSBuZXcgU3RhdGlzdGljcyh7fSk7XG4gIGNvbnN0IFtjb3VudGVycywgc2V0Q291bnRlcnNdID0gdXNlU3RhdGUoc3RhdGlzdGljcy5jb3VudGVycygpKTtcbiAgY29uc3QgW3RpbWVsaW5lcywgc2V0VGltZWxpbmVzXSA9IHVzZVN0YXRlKHN0YXRpc3RpY3MudGltZWxpbmVzKCkpO1xuICBjb25zdCBbc2hvd1JlcGxheSwgc2V0U2hvd1JlcGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoYW5kbGVSZXBsYXksIHNldEhhbmRsZVJlcGxheV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHNrZXRjaCA9IChwKSA9PiB7XG4gICAgbGV0IHBvcHVsYXRpb24gPSBbXTtcblxuICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gKHBlcnNvbikgPT4ge1xuICAgICAgaWYgKHBlcnNvbi5zdGF0ZSAhPT0gRGlzZWFzZVN0YXRlLklORkVDVEVEKSByZXR1cm47XG5cbiAgICAgIGlmIChwZXJzb24uaW5mZWN0ZWRUaW1lID4gcmVjb3ZlcnlUaW1lIC8gMiAmJiAhcGVyc29uLndpbGxTdXJ2aXZlKSB7XG4gICAgICAgIHBlcnNvbi5zdGF0ZSA9IERpc2Vhc2VTdGF0ZS5GQVRBTDtcbiAgICAgICAgc3RhdGlzdGljcy5mYXRhbCArPSAxO1xuICAgICAgICBzdGF0aXN0aWNzLmluZmVjdGVkIC09IDE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBlcnNvbi5pbmZlY3RlZFRpbWUgPj0gcmVjb3ZlcnlUaW1lKSB7XG4gICAgICAgIHBlcnNvbi5zdGF0ZSA9IERpc2Vhc2VTdGF0ZS5DVVJFRDtcbiAgICAgICAgc3RhdGlzdGljcy5jdXJlZCArPSAxO1xuICAgICAgICBzdGF0aXN0aWNzLmluZmVjdGVkIC09IDE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcGVyc29uLmluZmVjdGVkVGltZSArPSAxO1xuICAgIH07XG5cbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgcG9wdWxhdGlvbiA9IFtdO1xuICAgICAgc3RhdGlzdGljcy5yZXNldCgpO1xuICAgICAgc2V0Q291bnRlcnMoc3RhdGlzdGljcy5jb3VudGVycygpKTtcbiAgICAgIHNldFRpbWVsaW5lcyhzdGF0aXN0aWNzLnRpbWVsaW5lcygpKTtcbiAgICAgIHNldFNob3dSZXBsYXkoZmFsc2UpO1xuICAgICAgc2V0dXBQb3B1bGF0aW9uKHAsIHBvcHVsYXRpb24sIHBvcHVsYXRpb25TaXplLCBzdGF0aXN0aWNzKTtcbiAgICAgIHAuZnJhbWVDb3VudCA9IC0xO1xuICAgICAgcC5sb29wKCk7XG4gICAgfTtcblxuICAgIHAuc2V0dXAgPSAoKSA9PiB7XG4gICAgICBzZXR1cENhbnZhcyhwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGluaXRpYWxpemUoKTtcbiAgICAgIHNldEhhbmRsZVJlcGxheSgoKSA9PiBpbml0aWFsaXplKTtcbiAgICB9O1xuXG4gICAgcC5kcmF3ID0gKCkgPT4ge1xuICAgICAgaWYgKHAuZnJhbWVDb3VudCA9PT0gbWF4RnJhbWVDb3VudCkge1xuICAgICAgICBwLm5vTG9vcCgpO1xuICAgICAgICBzZXRTaG93UmVwbGF5KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBwLmJhY2tncm91bmQoYmFja2dyb3VuZENvbG9yKTtcblxuICAgICAgcG9wdWxhdGlvbi5mb3JFYWNoKChwZXJzb24pID0+IHtcbiAgICAgICAgdXBkYXRlU3RhdGUocGVyc29uKTtcbiAgICAgICAgcGVyc29uLm1vdmUoKTtcbiAgICAgICAgaGFuZGxlSW50ZXJhY3Rpb25zKHAsIHBlcnNvbiwgcG9wdWxhdGlvbiwgc3RhdGlzdGljcywgbW9ydGFsaXR5UmF0ZSk7XG4gICAgICAgIHBlcnNvbi5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgICBzdGF0aXN0aWNzLnJlY29yZFRpbWVsaW5lcygpO1xuXG4gICAgICBpZiAocC5mcmFtZUNvdW50ICUgMiA9PT0gMCkge1xuICAgICAgICBzZXRDb3VudGVycyhzdGF0aXN0aWNzLmNvdW50ZXJzKCkpO1xuICAgICAgICBzZXRUaW1lbGluZXMoc3RhdGlzdGljcy50aW1lbGluZXMoKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICBuZXcgUDUoc2tldGNoLCBjb250YWluZXJSZWYuY3VycmVudCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9e2lkfSBzdHlsZT17eyBtYXhXaWR0aDogY2FudmFzV2lkdGggfX0+XG4gICAgICA8Q291bnRlcnNDb21wb25lbnQgY291bnRlcnM9e2NvdW50ZXJzfSAvPlxuICAgICAgPEdyYXBoXG4gICAgICAgIHdpZHRoPXtncmFwaFdpZHRofVxuICAgICAgICBoZWlnaHQ9e2dyYXBoSGVpZ2h0fVxuICAgICAgICB0aW1lbGluZXM9e3RpbWVsaW5lc31cbiAgICAgICAgcG9wdWxhdGlvblNpemU9e3BvcHVsYXRpb25TaXplfVxuICAgICAgLz5cblxuICAgICAgPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXtzaG93UmVwbGF5ICYmICdvdmVybGF5J30gc3R5bGU9e3sgbWF4V2lkdGg6IGNhbnZhc1dpZHRoLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgPFJlcGxheSBzaG93PXtzaG93UmVwbGF5fSBvbkNsaWNrPXtoYW5kbGVSZXBsYXl9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm92ZXJsYXkgY2FudmFzIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSW5mZWN0aW9uU2tldGNoLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2FudmFzV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNhbnZhc0hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgcG9wdWxhdGlvblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlY292ZXJ5VGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbW9ydGFsaXR5UmF0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZ3JhcGhXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgZ3JhcGhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heEZyYW1lQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2V0dXBQb3B1bGF0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBDb3VudGVyc0NvbXBvbmVudDogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbkluZmVjdGlvblNrZXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhbnZhc1dpZHRoOiA2NDAsXG4gIGNhbnZhc0hlaWdodDogNDgwLFxuICBwb3B1bGF0aW9uU2l6ZTogMjAwLFxuICByZWNvdmVyeVRpbWU6IDUwMCxcbiAgbW9ydGFsaXR5UmF0ZTogMCxcbiAgZ3JhcGhXaWR0aDogNjQwLFxuICBncmFwaEhlaWdodDogNjAsXG4gIG1heEZyYW1lQ291bnQ6IDE2MDAsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmMnLFxuICBDb3VudGVyc0NvbXBvbmVudDogQ291bnRlcnMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmZlY3Rpb25Ta2V0Y2g7XG4iXX0= */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/sketches/InfectionSketch.js */"));
};

InfectionSketch.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  canvasWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  canvasHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  populationSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  recoveryTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  mortalityRate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  graphWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  graphHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  maxFrameCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  setupPopulation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  CountersComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
InfectionSketch.defaultProps = {
  canvasWidth: 640,
  canvasHeight: 480,
  populationSize: 200,
  recoveryTime: 500,
  mortalityRate: 0,
  graphWidth: 640,
  graphHeight: 60,
  maxFrameCount: 1600,
  backgroundColor: '#f8f9fc',
  CountersComponent: _Counters__WEBPACK_IMPORTED_MODULE_8__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (InfectionSketch);

/***/ })

})
//# sourceMappingURL=4.1125c1136d9300ea2caa.hot-update.js.map