webpackHotUpdate(4,{

/***/ "./simulations/SketchHelpers.js":
/*!**************************************!*\
  !*** ./simulations/SketchHelpers.js ***!
  \**************************************/
/*! exports provided: setupCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupCanvas", function() { return setupCanvas; });
var setupCanvas = function setupCanvas(p5, width, height) {
  var canvas = p5.createCanvas(width, height);
  canvas["class"]('simulation');
};



/***/ }),

/***/ "./simulations/sketches/Infection.js":
/*!*******************************************!*\
  !*** ./simulations/sketches/Infection.js ***!
  \*******************************************/
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
/* harmony import */ var _Physics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Physics */ "./simulations/Physics.js");
/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Statistics */ "./simulations/Statistics.js");
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Graph */ "./simulations/Graph.js");
/* harmony import */ var _Counters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Counters */ "./simulations/Counters.js");
/* harmony import */ var _Replay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Replay */ "./simulations/Replay.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/simulations/sketches/Infection.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable no-param-reassign */












var Infection = function Infection(props) {
  var canvasWidth = props.canvasWidth,
      canvasHeight = props.canvasHeight,
      populationSize = props.populationSize,
      recoveryTime = props.recoveryTime,
      mortalityRate = props.mortalityRate,
      graphWidth = props.graphWidth,
      graphHeight = props.graphHeight,
      maxFrameCount = props.maxFrameCount,
      backgroundColor = props.backgroundColor;
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var statistics = new _Statistics__WEBPACK_IMPORTED_MODULE_8__["default"]({});

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

    var handleInteractions = function handleInteractions(person) {
      population.forEach(function (other) {
        if (other === person) return;
        if (person.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].FATAL || other.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].FATAL) return;

        if (Object(_Physics__WEBPACK_IMPORTED_MODULE_7__["checkCollision"])(person, other)) {
          Object(_Physics__WEBPACK_IMPORTED_MODULE_7__["changeDirections"])(person, other);
          if (person.state === other.state) return;
          if (person.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].CURED || other.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_6__["default"].CURED) return;

          if (person.infect(p.random(0, 1) > mortalityRate)) {
            statistics.infected += 1;
            statistics.unaffected -= 1;
          }

          if (other.infect(p.random(0, 1) > mortalityRate)) {
            statistics.infected += 1;
            statistics.unaffected -= 1;
          }
        }
      });
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
        handleInteractions(person);
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
      lineNumber: 152
    },
    __self: this
  }, __jsx(_Counters__WEBPACK_IMPORTED_MODULE_10__["default"], {
    counters: counters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), __jsx(_Graph__WEBPACK_IMPORTED_MODULE_9__["default"], {
    width: graphWidth,
    height: graphHeight,
    timelines: timelines,
    populationSize: populationSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
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
      lineNumber: 161
    },
    __self: this
  }, __jsx(_Replay__WEBPACK_IMPORTED_MODULE_11__["default"], {
    show: showReplay,
    onClick: handleReplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4032735562",
    __self: this
  }, ".overlay canvas{opacity:0.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9za2V0Y2hlcy9JbmZlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUtTLEFBR3lCLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL1Zlc2VsaW4vV29yay92aXJ1cy10cmFja2VyL3NpbXVsYXRpb25zL3NrZXRjaGVzL0luZmVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFA1IGZyb20gJ3A1JztcbmltcG9ydCB7IHNldHVwQ2FudmFzIH0gZnJvbSAnLi4vU2tldGNoSGVscGVycyc7XG5pbXBvcnQgUGVyc29uIGZyb20gJy4uL1BlcnNvbic7XG5pbXBvcnQgRGlzZWFzZVN0YXRlIGZyb20gJy4uL0Rpc2Vhc2VTdGF0ZSc7XG5pbXBvcnQgeyBjaGVja0NvbGxpc2lvbiwgY2hhbmdlRGlyZWN0aW9ucyB9IGZyb20gJy4uL1BoeXNpY3MnO1xuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSAnLi4vU3RhdGlzdGljcyc7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi4vR3JhcGgnO1xuaW1wb3J0IENvdW50ZXJzIGZyb20gJy4uL0NvdW50ZXJzJztcbmltcG9ydCBSZXBsYXkgZnJvbSAnLi4vUmVwbGF5JztcblxuY29uc3QgSW5mZWN0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjYW52YXNXaWR0aCxcbiAgICBjYW52YXNIZWlnaHQsXG4gICAgcG9wdWxhdGlvblNpemUsXG4gICAgcmVjb3ZlcnlUaW1lLFxuICAgIG1vcnRhbGl0eVJhdGUsXG4gICAgZ3JhcGhXaWR0aCxcbiAgICBncmFwaEhlaWdodCxcbiAgICBtYXhGcmFtZUNvdW50LFxuICAgIGJhY2tncm91bmRDb2xvcixcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBzdGF0aXN0aWNzID0gbmV3IFN0YXRpc3RpY3Moe30pO1xuICBjb25zdCBbY291bnRlcnMsIHNldENvdW50ZXJzXSA9IHVzZVN0YXRlKHN0YXRpc3RpY3MuY291bnRlcnMoKSk7XG4gIGNvbnN0IFt0aW1lbGluZXMsIHNldFRpbWVsaW5lc10gPSB1c2VTdGF0ZShzdGF0aXN0aWNzLnRpbWVsaW5lcygpKTtcbiAgY29uc3QgW3Nob3dSZXBsYXksIHNldFNob3dSZXBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFuZGxlUmVwbGF5LCBzZXRIYW5kbGVSZXBsYXldID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBza2V0Y2ggPSAocCkgPT4ge1xuICAgIGxldCBwb3B1bGF0aW9uID0gW107XG5cbiAgICBjb25zdCBzZXR1cFBvcHVsYXRpb24gPSAoc2l6ZSkgPT4ge1xuICAgICAgcG9wdWxhdGlvblswXSA9IG5ldyBQZXJzb24oe1xuICAgICAgICB4OiBwLnJhbmRvbShQZXJzb24uZGVmYXVsdFJhZGl1cywgcC53aWR0aCAtIFBlcnNvbi5kZWZhdWx0UmFkaXVzKSxcbiAgICAgICAgeTogcC5yYW5kb20oUGVyc29uLmRlZmF1bHRSYWRpdXMsIHAuaGVpZ2h0IC0gUGVyc29uLmRlZmF1bHRSYWRpdXMpLFxuICAgICAgICByYWRpdXM6IDEwLFxuICAgICAgICBzdGF0ZTogRGlzZWFzZVN0YXRlLklORkVDVEVELFxuICAgICAgICBwNTogcCxcbiAgICAgIH0pO1xuXG4gICAgICBzdGF0aXN0aWNzLmluZmVjdGVkICs9IDE7XG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2l6ZTsgaSArPSAxKSB7XG4gICAgICAgIHBvcHVsYXRpb25baV0gPSBuZXcgUGVyc29uKHtcbiAgICAgICAgICB4OiBwLnJhbmRvbShQZXJzb24uZGVmYXVsdFJhZGl1cywgcC53aWR0aCAtIFBlcnNvbi5kZWZhdWx0UmFkaXVzKSxcbiAgICAgICAgICB5OiBwLnJhbmRvbShQZXJzb24uZGVmYXVsdFJhZGl1cywgcC5oZWlnaHQgLSBQZXJzb24uZGVmYXVsdFJhZGl1cyksXG4gICAgICAgICAgcmFkaXVzOiAxMCxcbiAgICAgICAgICBzdGF0ZTogRGlzZWFzZVN0YXRlLlVOQUZGRUNURUQsXG4gICAgICAgICAgcDU6IHAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0YXRpc3RpY3MudW5hZmZlY3RlZCArPSAxO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVJbnRlcmFjdGlvbnMgPSAocGVyc29uKSA9PiB7XG4gICAgICBwb3B1bGF0aW9uLmZvckVhY2goKG90aGVyKSA9PiB7XG4gICAgICAgIGlmIChvdGhlciA9PT0gcGVyc29uKSByZXR1cm47XG4gICAgICAgIGlmIChwZXJzb24uc3RhdGUgPT09IERpc2Vhc2VTdGF0ZS5GQVRBTCB8fCBvdGhlci5zdGF0ZSA9PT0gRGlzZWFzZVN0YXRlLkZBVEFMKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGNoZWNrQ29sbGlzaW9uKHBlcnNvbiwgb3RoZXIpKSB7XG4gICAgICAgICAgY2hhbmdlRGlyZWN0aW9ucyhwZXJzb24sIG90aGVyKTtcblxuICAgICAgICAgIGlmIChwZXJzb24uc3RhdGUgPT09IG90aGVyLnN0YXRlKSByZXR1cm47XG4gICAgICAgICAgaWYgKHBlcnNvbi5zdGF0ZSA9PT0gRGlzZWFzZVN0YXRlLkNVUkVEIHx8IG90aGVyLnN0YXRlID09PSBEaXNlYXNlU3RhdGUuQ1VSRUQpIHJldHVybjtcblxuICAgICAgICAgIGlmIChwZXJzb24uaW5mZWN0KHAucmFuZG9tKDAsIDEpID4gbW9ydGFsaXR5UmF0ZSkpIHtcbiAgICAgICAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgKz0gMTtcbiAgICAgICAgICAgIHN0YXRpc3RpY3MudW5hZmZlY3RlZCAtPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvdGhlci5pbmZlY3QocC5yYW5kb20oMCwgMSkgPiBtb3J0YWxpdHlSYXRlKSkge1xuICAgICAgICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCArPSAxO1xuICAgICAgICAgICAgc3RhdGlzdGljcy51bmFmZmVjdGVkIC09IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlU3RhdGUgPSAocGVyc29uKSA9PiB7XG4gICAgICBpZiAocGVyc29uLnN0YXRlICE9PSBEaXNlYXNlU3RhdGUuSU5GRUNURUQpIHJldHVybjtcblxuICAgICAgaWYgKHBlcnNvbi5pbmZlY3RlZFRpbWUgPiByZWNvdmVyeVRpbWUgLyAyICYmICFwZXJzb24ud2lsbFN1cnZpdmUpIHtcbiAgICAgICAgcGVyc29uLnN0YXRlID0gRGlzZWFzZVN0YXRlLkZBVEFMO1xuICAgICAgICBzdGF0aXN0aWNzLmZhdGFsICs9IDE7XG4gICAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgLT0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGVyc29uLmluZmVjdGVkVGltZSA+PSByZWNvdmVyeVRpbWUpIHtcbiAgICAgICAgcGVyc29uLnN0YXRlID0gRGlzZWFzZVN0YXRlLkNVUkVEO1xuICAgICAgICBzdGF0aXN0aWNzLmN1cmVkICs9IDE7XG4gICAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgLT0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwZXJzb24uaW5mZWN0ZWRUaW1lICs9IDE7XG4gICAgfTtcblxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICBwb3B1bGF0aW9uID0gW107XG4gICAgICBzdGF0aXN0aWNzLnJlc2V0KCk7XG4gICAgICBzZXRDb3VudGVycyhzdGF0aXN0aWNzLmNvdW50ZXJzKCkpO1xuICAgICAgc2V0VGltZWxpbmVzKHN0YXRpc3RpY3MudGltZWxpbmVzKCkpO1xuICAgICAgc2V0U2hvd1JlcGxheShmYWxzZSk7XG4gICAgICBzZXR1cFBvcHVsYXRpb24ocG9wdWxhdGlvblNpemUpO1xuICAgICAgcC5mcmFtZUNvdW50ID0gLTE7XG4gICAgICBwLmxvb3AoKTtcbiAgICB9O1xuXG4gICAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICAgIHNldHVwQ2FudmFzKHAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuICAgICAgaW5pdGlhbGl6ZSgpO1xuICAgICAgc2V0SGFuZGxlUmVwbGF5KCgpID0+IGluaXRpYWxpemUpO1xuICAgIH07XG5cbiAgICBwLmRyYXcgPSAoKSA9PiB7XG4gICAgICBpZiAocC5mcmFtZUNvdW50ID09PSBtYXhGcmFtZUNvdW50KSB7XG4gICAgICAgIHAubm9Mb29wKCk7XG4gICAgICAgIHNldFNob3dSZXBsYXkodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHAuYmFja2dyb3VuZChiYWNrZ3JvdW5kQ29sb3IpO1xuXG4gICAgICBwb3B1bGF0aW9uLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgICAgICB1cGRhdGVTdGF0ZShwZXJzb24pO1xuICAgICAgICBwZXJzb24ubW92ZSgpO1xuICAgICAgICBoYW5kbGVJbnRlcmFjdGlvbnMocGVyc29uKTtcbiAgICAgICAgcGVyc29uLnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICAgIHN0YXRpc3RpY3MucmVjb3JkVGltZWxpbmVzKCk7XG5cbiAgICAgIGlmIChwLmZyYW1lQ291bnQgJSAyID09PSAwKSB7XG4gICAgICAgIHNldENvdW50ZXJzKHN0YXRpc3RpY3MuY291bnRlcnMoKSk7XG4gICAgICAgIHNldFRpbWVsaW5lcyhzdGF0aXN0aWNzLnRpbWVsaW5lcygpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgIG5ldyBQNShza2V0Y2gsIGNvbnRhaW5lclJlZi5jdXJyZW50KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDb3VudGVycyBjb3VudGVycz17Y291bnRlcnN9IC8+XG4gICAgICA8R3JhcGhcbiAgICAgICAgd2lkdGg9e2dyYXBoV2lkdGh9XG4gICAgICAgIGhlaWdodD17Z3JhcGhIZWlnaHR9XG4gICAgICAgIHRpbWVsaW5lcz17dGltZWxpbmVzfVxuICAgICAgICBwb3B1bGF0aW9uU2l6ZT17cG9wdWxhdGlvblNpemV9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGlkPVwiaW5mZWN0aW9uXCIgcmVmPXtjb250YWluZXJSZWZ9IGNsYXNzTmFtZT17c2hvd1JlcGxheSAmJiAnb3ZlcmxheSd9IHN0eWxlPXt7IG1heFdpZHRoOiBjYW52YXNXaWR0aCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgIDxSZXBsYXkgc2hvdz17c2hvd1JlcGxheX0gb25DbGljaz17aGFuZGxlUmVwbGF5fSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5vdmVybGF5IGNhbnZhcyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkluZmVjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNhbnZhc1dpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjYW52YXNIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHBvcHVsYXRpb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICByZWNvdmVyeVRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1vcnRhbGl0eVJhdGU6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdyYXBoV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdyYXBoSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhGcmFtZUNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5JbmZlY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICBjYW52YXNXaWR0aDogNjQwLFxuICBjYW52YXNIZWlnaHQ6IDQ4MCxcbiAgcG9wdWxhdGlvblNpemU6IDIwMCxcbiAgcmVjb3ZlcnlUaW1lOiA1MDAsXG4gIG1vcnRhbGl0eVJhdGU6IDAsXG4gIGdyYXBoV2lkdGg6IDY0MCxcbiAgZ3JhcGhIZWlnaHQ6IDYwLFxuICBtYXhGcmFtZUNvdW50OiAxNjAwLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZjJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZmVjdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/sketches/Infection.js */"));
};

Infection.propTypes = {
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
Infection.defaultProps = {
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
/* harmony default export */ __webpack_exports__["default"] = (Infection);

/***/ })

})
//# sourceMappingURL=4.1c2bbb494d005cd07f8c.hot-update.js.map