webpackHotUpdate(1,{

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
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Person */ "./simulations/Person.js");
/* harmony import */ var _DiseaseState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DiseaseState */ "./simulations/DiseaseState.js");
/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Statistics */ "./simulations/Statistics.js");
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Graph */ "./simulations/Graph.js");
/* harmony import */ var _Counters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Counters */ "./simulations/Counters.js");
/* harmony import */ var _Replay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Replay */ "./simulations/Replay.js");
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
      backgroundColor = props.backgroundColor;
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var statistics = new _Statistics__WEBPACK_IMPORTED_MODULE_7__["default"]({});

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

    var setupPopulation = function setupPopulation(size) {
      population[0] = new _Person__WEBPACK_IMPORTED_MODULE_5__["default"]({
        x: p.random(_Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius, p.width - _Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius),
        y: p.random(_Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius, p.height - _Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius),
        radius: 10,
        state: _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].INFECTED,
        p5: p
      });
      statistics.infected += 1;

      for (var i = 1; i < size; i += 1) {
        population[i] = new _Person__WEBPACK_IMPORTED_MODULE_5__["default"]({
          x: p.random(_Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius, p.width - _Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius),
          y: p.random(_Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius, p.height - _Person__WEBPACK_IMPORTED_MODULE_5__["default"].defaultRadius),
          radius: 10,
          state: _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].UNAFFECTED,
          p5: p
        });
        statistics.unaffected += 1;
      }
    };

    var updateState = function updateState(person) {
      if (person.state !== _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].INFECTED) return;

      if (person.infectedTime > recoveryTime / 2 && !person.willSurvive) {
        person.state = _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].FATAL;
        statistics.fatal += 1;
        statistics.infected -= 1;
        return;
      }

      if (person.infectedTime >= recoveryTime) {
        person.state = _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].CURED;
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
      setupPopulation(populationSize);
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
    className: "jsx-4032735562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(_Counters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    counters: counters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), __jsx(_Graph__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: graphWidth,
    height: graphHeight,
    timelines: timelines,
    populationSize: populationSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), __jsx("div", {
    id: "infection",
    ref: containerRef,
    style: {
      maxWidth: canvasWidth,
      position: 'relative'
    },
    className: "jsx-4032735562" + " " + (showReplay && 'overlay' || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(_Replay__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: showReplay,
    onClick: handleReplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4032735562",
    __self: this
  }, ".overlay canvas{opacity:0.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9za2V0Y2hlcy9JbmZlY3Rpb25Ta2V0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNklTLEFBR3lCLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL1Zlc2VsaW4vV29yay92aXJ1cy10cmFja2VyL3NpbXVsYXRpb25zL3NrZXRjaGVzL0luZmVjdGlvblNrZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFA1IGZyb20gJ3A1JztcbmltcG9ydCB7IHNldHVwQ2FudmFzLCBoYW5kbGVJbnRlcmFjdGlvbnMgfSBmcm9tICcuLi9Ta2V0Y2hIZWxwZXJzJztcbmltcG9ydCBQZXJzb24gZnJvbSAnLi4vUGVyc29uJztcbmltcG9ydCBEaXNlYXNlU3RhdGUgZnJvbSAnLi4vRGlzZWFzZVN0YXRlJztcbmltcG9ydCBTdGF0aXN0aWNzIGZyb20gJy4uL1N0YXRpc3RpY3MnO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4uL0dyYXBoJztcbmltcG9ydCBDb3VudGVycyBmcm9tICcuLi9Db3VudGVycyc7XG5pbXBvcnQgUmVwbGF5IGZyb20gJy4uL1JlcGxheSc7XG5cbmNvbnN0IEluZmVjdGlvblNrZXRjaCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgY2FudmFzV2lkdGgsXG4gICAgY2FudmFzSGVpZ2h0LFxuICAgIHBvcHVsYXRpb25TaXplLFxuICAgIHJlY292ZXJ5VGltZSxcbiAgICBtb3J0YWxpdHlSYXRlLFxuICAgIGdyYXBoV2lkdGgsXG4gICAgZ3JhcGhIZWlnaHQsXG4gICAgbWF4RnJhbWVDb3VudCxcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgc3RhdGlzdGljcyA9IG5ldyBTdGF0aXN0aWNzKHt9KTtcbiAgY29uc3QgW2NvdW50ZXJzLCBzZXRDb3VudGVyc10gPSB1c2VTdGF0ZShzdGF0aXN0aWNzLmNvdW50ZXJzKCkpO1xuICBjb25zdCBbdGltZWxpbmVzLCBzZXRUaW1lbGluZXNdID0gdXNlU3RhdGUoc3RhdGlzdGljcy50aW1lbGluZXMoKSk7XG4gIGNvbnN0IFtzaG93UmVwbGF5LCBzZXRTaG93UmVwbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hhbmRsZVJlcGxheSwgc2V0SGFuZGxlUmVwbGF5XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgc2tldGNoID0gKHApID0+IHtcbiAgICBsZXQgcG9wdWxhdGlvbiA9IFtdO1xuXG4gICAgY29uc3Qgc2V0dXBQb3B1bGF0aW9uID0gKHNpemUpID0+IHtcbiAgICAgIHBvcHVsYXRpb25bMF0gPSBuZXcgUGVyc29uKHtcbiAgICAgICAgeDogcC5yYW5kb20oUGVyc29uLmRlZmF1bHRSYWRpdXMsIHAud2lkdGggLSBQZXJzb24uZGVmYXVsdFJhZGl1cyksXG4gICAgICAgIHk6IHAucmFuZG9tKFBlcnNvbi5kZWZhdWx0UmFkaXVzLCBwLmhlaWdodCAtIFBlcnNvbi5kZWZhdWx0UmFkaXVzKSxcbiAgICAgICAgcmFkaXVzOiAxMCxcbiAgICAgICAgc3RhdGU6IERpc2Vhc2VTdGF0ZS5JTkZFQ1RFRCxcbiAgICAgICAgcDU6IHAsXG4gICAgICB9KTtcblxuICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCArPSAxO1xuXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgICAgICBwb3B1bGF0aW9uW2ldID0gbmV3IFBlcnNvbih7XG4gICAgICAgICAgeDogcC5yYW5kb20oUGVyc29uLmRlZmF1bHRSYWRpdXMsIHAud2lkdGggLSBQZXJzb24uZGVmYXVsdFJhZGl1cyksXG4gICAgICAgICAgeTogcC5yYW5kb20oUGVyc29uLmRlZmF1bHRSYWRpdXMsIHAuaGVpZ2h0IC0gUGVyc29uLmRlZmF1bHRSYWRpdXMpLFxuICAgICAgICAgIHJhZGl1czogMTAsXG4gICAgICAgICAgc3RhdGU6IERpc2Vhc2VTdGF0ZS5VTkFGRkVDVEVELFxuICAgICAgICAgIHA1OiBwLFxuICAgICAgICB9KTtcblxuICAgICAgICBzdGF0aXN0aWNzLnVuYWZmZWN0ZWQgKz0gMTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlU3RhdGUgPSAocGVyc29uKSA9PiB7XG4gICAgICBpZiAocGVyc29uLnN0YXRlICE9PSBEaXNlYXNlU3RhdGUuSU5GRUNURUQpIHJldHVybjtcblxuICAgICAgaWYgKHBlcnNvbi5pbmZlY3RlZFRpbWUgPiByZWNvdmVyeVRpbWUgLyAyICYmICFwZXJzb24ud2lsbFN1cnZpdmUpIHtcbiAgICAgICAgcGVyc29uLnN0YXRlID0gRGlzZWFzZVN0YXRlLkZBVEFMO1xuICAgICAgICBzdGF0aXN0aWNzLmZhdGFsICs9IDE7XG4gICAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgLT0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGVyc29uLmluZmVjdGVkVGltZSA+PSByZWNvdmVyeVRpbWUpIHtcbiAgICAgICAgcGVyc29uLnN0YXRlID0gRGlzZWFzZVN0YXRlLkNVUkVEO1xuICAgICAgICBzdGF0aXN0aWNzLmN1cmVkICs9IDE7XG4gICAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgLT0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwZXJzb24uaW5mZWN0ZWRUaW1lICs9IDE7XG4gICAgfTtcblxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICBwb3B1bGF0aW9uID0gW107XG4gICAgICBzdGF0aXN0aWNzLnJlc2V0KCk7XG4gICAgICBzZXRDb3VudGVycyhzdGF0aXN0aWNzLmNvdW50ZXJzKCkpO1xuICAgICAgc2V0VGltZWxpbmVzKHN0YXRpc3RpY3MudGltZWxpbmVzKCkpO1xuICAgICAgc2V0U2hvd1JlcGxheShmYWxzZSk7XG4gICAgICBzZXR1cFBvcHVsYXRpb24ocG9wdWxhdGlvblNpemUpO1xuICAgICAgcC5mcmFtZUNvdW50ID0gLTE7XG4gICAgICBwLmxvb3AoKTtcbiAgICB9O1xuXG4gICAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICAgIHNldHVwQ2FudmFzKHAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuICAgICAgaW5pdGlhbGl6ZSgpO1xuICAgICAgc2V0SGFuZGxlUmVwbGF5KCgpID0+IGluaXRpYWxpemUpO1xuICAgIH07XG5cbiAgICBwLmRyYXcgPSAoKSA9PiB7XG4gICAgICBpZiAocC5mcmFtZUNvdW50ID09PSBtYXhGcmFtZUNvdW50KSB7XG4gICAgICAgIHAubm9Mb29wKCk7XG4gICAgICAgIHNldFNob3dSZXBsYXkodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHAuYmFja2dyb3VuZChiYWNrZ3JvdW5kQ29sb3IpO1xuXG4gICAgICBwb3B1bGF0aW9uLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgICAgICB1cGRhdGVTdGF0ZShwZXJzb24pO1xuICAgICAgICBwZXJzb24ubW92ZSgpO1xuICAgICAgICBoYW5kbGVJbnRlcmFjdGlvbnMocCwgcGVyc29uLCBwb3B1bGF0aW9uLCBzdGF0aXN0aWNzLCBtb3J0YWxpdHlSYXRlKTtcbiAgICAgICAgcGVyc29uLnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICAgIHN0YXRpc3RpY3MucmVjb3JkVGltZWxpbmVzKCk7XG5cbiAgICAgIGlmIChwLmZyYW1lQ291bnQgJSAyID09PSAwKSB7XG4gICAgICAgIHNldENvdW50ZXJzKHN0YXRpc3RpY3MuY291bnRlcnMoKSk7XG4gICAgICAgIHNldFRpbWVsaW5lcyhzdGF0aXN0aWNzLnRpbWVsaW5lcygpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgIG5ldyBQNShza2V0Y2gsIGNvbnRhaW5lclJlZi5jdXJyZW50KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDb3VudGVycyBjb3VudGVycz17Y291bnRlcnN9IC8+XG4gICAgICA8R3JhcGhcbiAgICAgICAgd2lkdGg9e2dyYXBoV2lkdGh9XG4gICAgICAgIGhlaWdodD17Z3JhcGhIZWlnaHR9XG4gICAgICAgIHRpbWVsaW5lcz17dGltZWxpbmVzfVxuICAgICAgICBwb3B1bGF0aW9uU2l6ZT17cG9wdWxhdGlvblNpemV9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGlkPVwiaW5mZWN0aW9uXCIgcmVmPXtjb250YWluZXJSZWZ9IGNsYXNzTmFtZT17c2hvd1JlcGxheSAmJiAnb3ZlcmxheSd9IHN0eWxlPXt7IG1heFdpZHRoOiBjYW52YXNXaWR0aCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgIDxSZXBsYXkgc2hvdz17c2hvd1JlcGxheX0gb25DbGljaz17aGFuZGxlUmVwbGF5fSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5vdmVybGF5IGNhbnZhcyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkluZmVjdGlvblNrZXRjaC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNhbnZhc1dpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjYW52YXNIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHBvcHVsYXRpb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICByZWNvdmVyeVRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1vcnRhbGl0eVJhdGU6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdyYXBoV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdyYXBoSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhGcmFtZUNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5JbmZlY3Rpb25Ta2V0Y2guZGVmYXVsdFByb3BzID0ge1xuICBjYW52YXNXaWR0aDogNjQwLFxuICBjYW52YXNIZWlnaHQ6IDQ4MCxcbiAgcG9wdWxhdGlvblNpemU6IDIwMCxcbiAgcmVjb3ZlcnlUaW1lOiA1MDAsXG4gIG1vcnRhbGl0eVJhdGU6IDAsXG4gIGdyYXBoV2lkdGg6IDY0MCxcbiAgZ3JhcGhIZWlnaHQ6IDYwLFxuICBtYXhGcmFtZUNvdW50OiAxNjAwLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZjJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZmVjdGlvblNrZXRjaDtcbiJdfQ== */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/sketches/InfectionSketch.js */"));
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
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
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
  backgroundColor: '#f8f9fc'
};
/* harmony default export */ __webpack_exports__["default"] = (InfectionSketch);

/***/ })

})
//# sourceMappingURL=1.9d1de68cc7229b39530e.hot-update.js.map