webpackHotUpdate(4,{

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
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Person */ "./simulations/Person.js");
/* harmony import */ var _DiseaseState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DiseaseState */ "./simulations/DiseaseState.js");
/* harmony import */ var _Physics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Physics */ "./simulations/Physics.js");
/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Statistics */ "./simulations/Statistics.js");
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Graph */ "./simulations/Graph.js");
/* harmony import */ var _Counters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Counters */ "./simulations/Counters.js");
/* harmony import */ var _Replay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Replay */ "./simulations/Replay.js");
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

    var setupCanvas = function setupCanvas(width, height) {
      var canvas = p.createCanvas(width, height);
      canvas["class"]('simulation');
    };

    var setupPopulation = function setupPopulation(size) {
      population[0] = new _Person__WEBPACK_IMPORTED_MODULE_4__["default"]({
        x: p.random(_Person__WEBPACK_IMPORTED_MODULE_4__["default"].defaultRadius, p.width - _Person__WEBPACK_IMPORTED_MODULE_4__["default"].defaultRadius),
        y: p.random(_Person__WEBPACK_IMPORTED_MODULE_4__["default"].defaultRadius, p.height - _Person__WEBPACK_IMPORTED_MODULE_4__["default"].defaultRadius),
        radius: 10,
        state: _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].INFECTED,
        p5: p
      });
      statistics.infected += 1;

      for (var i = 1; i < size; i += 1) {
        population[i] = new _Person__WEBPACK_IMPORTED_MODULE_4__["default"]({
          x: p.random(_Person__WEBPACK_IMPORTED_MODULE_4__["default"].defaultRadius, p.width - _Person__WEBPACK_IMPORTED_MODULE_4__["default"].defaultRadius),
          y: p.random(_Person__WEBPACK_IMPORTED_MODULE_4__["default"].defaultRadius, p.height - _Person__WEBPACK_IMPORTED_MODULE_4__["default"].defaultRadius),
          radius: 10,
          state: _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].UNAFFECTED,
          p5: p
        });
        statistics.unaffected += 1;
      }
    };

    var handleInteractions = function handleInteractions(person) {
      population.forEach(function (other) {
        if (other === person) return;
        if (person.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].FATAL || other.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].FATAL) return;

        if (Object(_Physics__WEBPACK_IMPORTED_MODULE_6__["checkCollision"])(person, other)) {
          Object(_Physics__WEBPACK_IMPORTED_MODULE_6__["changeDirections"])(person, other);
          if (person.state === other.state) return;
          if (person.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].CURED || other.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_5__["default"].CURED) return;

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
      setupPopulation(populationSize);
      p.frameCount = -1;
      p.loop();
    };

    p.setup = function () {
      setupCanvas(canvasWidth, canvasHeight);
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
      lineNumber: 156
    },
    __self: this
  }, __jsx(_Counters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    counters: counters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), __jsx(_Graph__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: graphWidth,
    height: graphHeight,
    timelines: timelines,
    populationSize: populationSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
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
      lineNumber: 165
    },
    __self: this
  }, __jsx(_Replay__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: showReplay,
    onClick: handleReplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4032735562",
    __self: this
  }, ".overlay canvas{opacity:0.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9za2V0Y2hlcy9JbmZlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUtTLEFBR3lCLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL1Zlc2VsaW4vV29yay92aXJ1cy10cmFja2VyL3NpbXVsYXRpb25zL3NrZXRjaGVzL0luZmVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFA1IGZyb20gJ3A1JztcbmltcG9ydCBQZXJzb24gZnJvbSAnLi4vUGVyc29uJztcbmltcG9ydCBEaXNlYXNlU3RhdGUgZnJvbSAnLi4vRGlzZWFzZVN0YXRlJztcbmltcG9ydCB7IGNoZWNrQ29sbGlzaW9uLCBjaGFuZ2VEaXJlY3Rpb25zIH0gZnJvbSAnLi4vUGh5c2ljcyc7XG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuLi9TdGF0aXN0aWNzJztcbmltcG9ydCBHcmFwaCBmcm9tICcuLi9HcmFwaCc7XG5pbXBvcnQgQ291bnRlcnMgZnJvbSAnLi4vQ291bnRlcnMnO1xuaW1wb3J0IFJlcGxheSBmcm9tICcuLi9SZXBsYXknO1xuXG5jb25zdCBJbmZlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNhbnZhc1dpZHRoLFxuICAgIGNhbnZhc0hlaWdodCxcbiAgICBwb3B1bGF0aW9uU2l6ZSxcbiAgICByZWNvdmVyeVRpbWUsXG4gICAgbW9ydGFsaXR5UmF0ZSxcbiAgICBncmFwaFdpZHRoLFxuICAgIGdyYXBoSGVpZ2h0LFxuICAgIG1heEZyYW1lQ291bnQsXG4gICAgYmFja2dyb3VuZENvbG9yLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHN0YXRpc3RpY3MgPSBuZXcgU3RhdGlzdGljcyh7fSk7XG4gIGNvbnN0IFtjb3VudGVycywgc2V0Q291bnRlcnNdID0gdXNlU3RhdGUoc3RhdGlzdGljcy5jb3VudGVycygpKTtcbiAgY29uc3QgW3RpbWVsaW5lcywgc2V0VGltZWxpbmVzXSA9IHVzZVN0YXRlKHN0YXRpc3RpY3MudGltZWxpbmVzKCkpO1xuICBjb25zdCBbc2hvd1JlcGxheSwgc2V0U2hvd1JlcGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoYW5kbGVSZXBsYXksIHNldEhhbmRsZVJlcGxheV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHNrZXRjaCA9IChwKSA9PiB7XG4gICAgbGV0IHBvcHVsYXRpb24gPSBbXTtcblxuICAgIGNvbnN0IHNldHVwQ2FudmFzID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgY2FudmFzLmNsYXNzKCdzaW11bGF0aW9uJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHVwUG9wdWxhdGlvbiA9IChzaXplKSA9PiB7XG4gICAgICBwb3B1bGF0aW9uWzBdID0gbmV3IFBlcnNvbih7XG4gICAgICAgIHg6IHAucmFuZG9tKFBlcnNvbi5kZWZhdWx0UmFkaXVzLCBwLndpZHRoIC0gUGVyc29uLmRlZmF1bHRSYWRpdXMpLFxuICAgICAgICB5OiBwLnJhbmRvbShQZXJzb24uZGVmYXVsdFJhZGl1cywgcC5oZWlnaHQgLSBQZXJzb24uZGVmYXVsdFJhZGl1cyksXG4gICAgICAgIHJhZGl1czogMTAsXG4gICAgICAgIHN0YXRlOiBEaXNlYXNlU3RhdGUuSU5GRUNURUQsXG4gICAgICAgIHA1OiBwLFxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgKz0gMTtcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaXplOyBpICs9IDEpIHtcbiAgICAgICAgcG9wdWxhdGlvbltpXSA9IG5ldyBQZXJzb24oe1xuICAgICAgICAgIHg6IHAucmFuZG9tKFBlcnNvbi5kZWZhdWx0UmFkaXVzLCBwLndpZHRoIC0gUGVyc29uLmRlZmF1bHRSYWRpdXMpLFxuICAgICAgICAgIHk6IHAucmFuZG9tKFBlcnNvbi5kZWZhdWx0UmFkaXVzLCBwLmhlaWdodCAtIFBlcnNvbi5kZWZhdWx0UmFkaXVzKSxcbiAgICAgICAgICByYWRpdXM6IDEwLFxuICAgICAgICAgIHN0YXRlOiBEaXNlYXNlU3RhdGUuVU5BRkZFQ1RFRCxcbiAgICAgICAgICBwNTogcCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RhdGlzdGljcy51bmFmZmVjdGVkICs9IDE7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUludGVyYWN0aW9ucyA9IChwZXJzb24pID0+IHtcbiAgICAgIHBvcHVsYXRpb24uZm9yRWFjaCgob3RoZXIpID0+IHtcbiAgICAgICAgaWYgKG90aGVyID09PSBwZXJzb24pIHJldHVybjtcbiAgICAgICAgaWYgKHBlcnNvbi5zdGF0ZSA9PT0gRGlzZWFzZVN0YXRlLkZBVEFMIHx8IG90aGVyLnN0YXRlID09PSBEaXNlYXNlU3RhdGUuRkFUQUwpIHJldHVybjtcblxuICAgICAgICBpZiAoY2hlY2tDb2xsaXNpb24ocGVyc29uLCBvdGhlcikpIHtcbiAgICAgICAgICBjaGFuZ2VEaXJlY3Rpb25zKHBlcnNvbiwgb3RoZXIpO1xuXG4gICAgICAgICAgaWYgKHBlcnNvbi5zdGF0ZSA9PT0gb3RoZXIuc3RhdGUpIHJldHVybjtcbiAgICAgICAgICBpZiAocGVyc29uLnN0YXRlID09PSBEaXNlYXNlU3RhdGUuQ1VSRUQgfHwgb3RoZXIuc3RhdGUgPT09IERpc2Vhc2VTdGF0ZS5DVVJFRCkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKHBlcnNvbi5pbmZlY3QocC5yYW5kb20oMCwgMSkgPiBtb3J0YWxpdHlSYXRlKSkge1xuICAgICAgICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCArPSAxO1xuICAgICAgICAgICAgc3RhdGlzdGljcy51bmFmZmVjdGVkIC09IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG90aGVyLmluZmVjdChwLnJhbmRvbSgwLCAxKSA+IG1vcnRhbGl0eVJhdGUpKSB7XG4gICAgICAgICAgICBzdGF0aXN0aWNzLmluZmVjdGVkICs9IDE7XG4gICAgICAgICAgICBzdGF0aXN0aWNzLnVuYWZmZWN0ZWQgLT0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IChwZXJzb24pID0+IHtcbiAgICAgIGlmIChwZXJzb24uc3RhdGUgIT09IERpc2Vhc2VTdGF0ZS5JTkZFQ1RFRCkgcmV0dXJuO1xuXG4gICAgICBpZiAocGVyc29uLmluZmVjdGVkVGltZSA+IHJlY292ZXJ5VGltZSAvIDIgJiYgIXBlcnNvbi53aWxsU3Vydml2ZSkge1xuICAgICAgICBwZXJzb24uc3RhdGUgPSBEaXNlYXNlU3RhdGUuRkFUQUw7XG4gICAgICAgIHN0YXRpc3RpY3MuZmF0YWwgKz0gMTtcbiAgICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCAtPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChwZXJzb24uaW5mZWN0ZWRUaW1lID49IHJlY292ZXJ5VGltZSkge1xuICAgICAgICBwZXJzb24uc3RhdGUgPSBEaXNlYXNlU3RhdGUuQ1VSRUQ7XG4gICAgICAgIHN0YXRpc3RpY3MuY3VyZWQgKz0gMTtcbiAgICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCAtPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBlcnNvbi5pbmZlY3RlZFRpbWUgKz0gMTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgIHBvcHVsYXRpb24gPSBbXTtcbiAgICAgIHN0YXRpc3RpY3MucmVzZXQoKTtcbiAgICAgIHNldENvdW50ZXJzKHN0YXRpc3RpY3MuY291bnRlcnMoKSk7XG4gICAgICBzZXRUaW1lbGluZXMoc3RhdGlzdGljcy50aW1lbGluZXMoKSk7XG4gICAgICBzZXRTaG93UmVwbGF5KGZhbHNlKTtcbiAgICAgIHNldHVwUG9wdWxhdGlvbihwb3B1bGF0aW9uU2l6ZSk7XG4gICAgICBwLmZyYW1lQ291bnQgPSAtMTtcbiAgICAgIHAubG9vcCgpO1xuICAgIH07XG5cbiAgICBwLnNldHVwID0gKCkgPT4ge1xuICAgICAgc2V0dXBDYW52YXMoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XG4gICAgICBpbml0aWFsaXplKCk7XG4gICAgICBzZXRIYW5kbGVSZXBsYXkoKCkgPT4gaW5pdGlhbGl6ZSk7XG4gICAgfTtcblxuICAgIHAuZHJhdyA9ICgpID0+IHtcbiAgICAgIGlmIChwLmZyYW1lQ291bnQgPT09IG1heEZyYW1lQ291bnQpIHtcbiAgICAgICAgcC5ub0xvb3AoKTtcbiAgICAgICAgc2V0U2hvd1JlcGxheSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcC5iYWNrZ3JvdW5kKGJhY2tncm91bmRDb2xvcik7XG5cbiAgICAgIHBvcHVsYXRpb24uZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHBlcnNvbik7XG4gICAgICAgIHBlcnNvbi5tb3ZlKCk7XG4gICAgICAgIGhhbmRsZUludGVyYWN0aW9ucyhwZXJzb24pO1xuICAgICAgICBwZXJzb24ucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgICAgc3RhdGlzdGljcy5yZWNvcmRUaW1lbGluZXMoKTtcblxuICAgICAgaWYgKHAuZnJhbWVDb3VudCAlIDIgPT09IDApIHtcbiAgICAgICAgc2V0Q291bnRlcnMoc3RhdGlzdGljcy5jb3VudGVycygpKTtcbiAgICAgICAgc2V0VGltZWxpbmVzKHN0YXRpc3RpY3MudGltZWxpbmVzKCkpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgbmV3IFA1KHNrZXRjaCwgY29udGFpbmVyUmVmLmN1cnJlbnQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENvdW50ZXJzIGNvdW50ZXJzPXtjb3VudGVyc30gLz5cbiAgICAgIDxHcmFwaFxuICAgICAgICB3aWR0aD17Z3JhcGhXaWR0aH1cbiAgICAgICAgaGVpZ2h0PXtncmFwaEhlaWdodH1cbiAgICAgICAgdGltZWxpbmVzPXt0aW1lbGluZXN9XG4gICAgICAgIHBvcHVsYXRpb25TaXplPXtwb3B1bGF0aW9uU2l6ZX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgaWQ9XCJpbmZlY3Rpb25cIiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXtzaG93UmVwbGF5ICYmICdvdmVybGF5J30gc3R5bGU9e3sgbWF4V2lkdGg6IGNhbnZhc1dpZHRoLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgPFJlcGxheSBzaG93PXtzaG93UmVwbGF5fSBvbkNsaWNrPXtoYW5kbGVSZXBsYXl9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm92ZXJsYXkgY2FudmFzIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSW5mZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgY2FudmFzV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNhbnZhc0hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgcG9wdWxhdGlvblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlY292ZXJ5VGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbW9ydGFsaXR5UmF0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZ3JhcGhXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgZ3JhcGhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heEZyYW1lQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkluZmVjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhbnZhc1dpZHRoOiA2NDAsXG4gIGNhbnZhc0hlaWdodDogNDgwLFxuICBwb3B1bGF0aW9uU2l6ZTogMjAwLFxuICByZWNvdmVyeVRpbWU6IDUwMCxcbiAgbW9ydGFsaXR5UmF0ZTogMCxcbiAgZ3JhcGhXaWR0aDogNjQwLFxuICBncmFwaEhlaWdodDogNjAsXG4gIG1heEZyYW1lQ291bnQ6IDE2MDAsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmMnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mZWN0aW9uO1xuIl19 */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/sketches/Infection.js */"));
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
//# sourceMappingURL=4.7e52113213678e0abc96.hot-update.js.map