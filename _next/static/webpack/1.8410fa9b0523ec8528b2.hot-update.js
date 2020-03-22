webpackHotUpdate(1,{

/***/ "./simulations/no_restrictions/Infection.js":
/*!**************************************************!*\
  !*** ./simulations/no_restrictions/Infection.js ***!
  \**************************************************/
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
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/simulations/no_restrictions/Infection.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable no-param-reassign */











var Infection = function Infection(props) {
  var canvasWidth = props.canvasWidth,
      canvasHeight = props.canvasHeight,
      populationSize = props.populationSize,
      recoveryTime = props.recoveryTime,
      mortalityRate = props.mortalityRate,
      graphWidth = props.graphWidth,
      graphHeight = props.graphHeight;
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
      if (p.frameCount === 1600) {
        p.noLoop();
        setShowReplay(true);
      }

      p.background('white');
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
      lineNumber: 154
    },
    __self: this
  }, __jsx(_Counters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    counters: counters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx(_Graph__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: graphWidth,
    height: graphHeight,
    timelines: timelines,
    populationSize: populationSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
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
      lineNumber: 158
    },
    __self: this
  }, __jsx(_Replay__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: showReplay,
    onClick: handleReplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4032735562",
    __self: this
  }, ".overlay canvas{opacity:0.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9ub19yZXN0cmljdGlvbnMvSW5mZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtLUyxBQUd5QixZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9ub19yZXN0cmljdGlvbnMvSW5mZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUDUgZnJvbSAncDUnO1xuaW1wb3J0IFBlcnNvbiBmcm9tICcuLi9QZXJzb24nO1xuaW1wb3J0IERpc2Vhc2VTdGF0ZSBmcm9tICcuLi9EaXNlYXNlU3RhdGUnO1xuaW1wb3J0IHsgY2hlY2tDb2xsaXNpb24sIGNoYW5nZURpcmVjdGlvbnMgfSBmcm9tICcuLi9QaHlzaWNzJztcbmltcG9ydCBTdGF0aXN0aWNzIGZyb20gJy4uL1N0YXRpc3RpY3MnO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4uL0dyYXBoJztcbmltcG9ydCBDb3VudGVycyBmcm9tICcuLi9Db3VudGVycyc7XG5pbXBvcnQgUmVwbGF5IGZyb20gJy4uL1JlcGxheSc7XG5cbmNvbnN0IEluZmVjdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2FudmFzV2lkdGgsXG4gICAgY2FudmFzSGVpZ2h0LFxuICAgIHBvcHVsYXRpb25TaXplLFxuICAgIHJlY292ZXJ5VGltZSxcbiAgICBtb3J0YWxpdHlSYXRlLFxuICAgIGdyYXBoV2lkdGgsXG4gICAgZ3JhcGhIZWlnaHQsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgc3RhdGlzdGljcyA9IG5ldyBTdGF0aXN0aWNzKHt9KTtcbiAgY29uc3QgW2NvdW50ZXJzLCBzZXRDb3VudGVyc10gPSB1c2VTdGF0ZShzdGF0aXN0aWNzLmNvdW50ZXJzKCkpO1xuICBjb25zdCBbdGltZWxpbmVzLCBzZXRUaW1lbGluZXNdID0gdXNlU3RhdGUoc3RhdGlzdGljcy50aW1lbGluZXMoKSk7XG4gIGNvbnN0IFtzaG93UmVwbGF5LCBzZXRTaG93UmVwbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hhbmRsZVJlcGxheSwgc2V0SGFuZGxlUmVwbGF5XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgc2tldGNoID0gKHApID0+IHtcbiAgICBsZXQgcG9wdWxhdGlvbiA9IFtdO1xuXG4gICAgY29uc3Qgc2V0dXBDYW52YXMgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgICAgY29uc3QgY2FudmFzID0gcC5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XG4gICAgICBjYW52YXMuY2xhc3MoJ3NpbXVsYXRpb24nKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0dXBQb3B1bGF0aW9uID0gKHNpemUpID0+IHtcbiAgICAgIHBvcHVsYXRpb25bMF0gPSBuZXcgUGVyc29uKHtcbiAgICAgICAgeDogcC5yYW5kb20oUGVyc29uLmRlZmF1bHRSYWRpdXMsIHAud2lkdGggLSBQZXJzb24uZGVmYXVsdFJhZGl1cyksXG4gICAgICAgIHk6IHAucmFuZG9tKFBlcnNvbi5kZWZhdWx0UmFkaXVzLCBwLmhlaWdodCAtIFBlcnNvbi5kZWZhdWx0UmFkaXVzKSxcbiAgICAgICAgcmFkaXVzOiAxMCxcbiAgICAgICAgc3RhdGU6IERpc2Vhc2VTdGF0ZS5JTkZFQ1RFRCxcbiAgICAgICAgcDU6IHAsXG4gICAgICB9KTtcblxuICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCArPSAxO1xuXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgICAgICBwb3B1bGF0aW9uW2ldID0gbmV3IFBlcnNvbih7XG4gICAgICAgICAgeDogcC5yYW5kb20oUGVyc29uLmRlZmF1bHRSYWRpdXMsIHAud2lkdGggLSBQZXJzb24uZGVmYXVsdFJhZGl1cyksXG4gICAgICAgICAgeTogcC5yYW5kb20oUGVyc29uLmRlZmF1bHRSYWRpdXMsIHAuaGVpZ2h0IC0gUGVyc29uLmRlZmF1bHRSYWRpdXMpLFxuICAgICAgICAgIHJhZGl1czogMTAsXG4gICAgICAgICAgc3RhdGU6IERpc2Vhc2VTdGF0ZS5VTkFGRkVDVEVELFxuICAgICAgICAgIHA1OiBwLFxuICAgICAgICB9KTtcblxuICAgICAgICBzdGF0aXN0aWNzLnVuYWZmZWN0ZWQgKz0gMTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlSW50ZXJhY3Rpb25zID0gKHBlcnNvbikgPT4ge1xuICAgICAgcG9wdWxhdGlvbi5mb3JFYWNoKChvdGhlcikgPT4ge1xuICAgICAgICBpZiAob3RoZXIgPT09IHBlcnNvbikgcmV0dXJuO1xuICAgICAgICBpZiAocGVyc29uLnN0YXRlID09PSBEaXNlYXNlU3RhdGUuRkFUQUwgfHwgb3RoZXIuc3RhdGUgPT09IERpc2Vhc2VTdGF0ZS5GQVRBTCkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChjaGVja0NvbGxpc2lvbihwZXJzb24sIG90aGVyKSkge1xuICAgICAgICAgIGNoYW5nZURpcmVjdGlvbnMocGVyc29uLCBvdGhlcik7XG5cbiAgICAgICAgICBpZiAocGVyc29uLnN0YXRlID09PSBvdGhlci5zdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgIGlmIChwZXJzb24uc3RhdGUgPT09IERpc2Vhc2VTdGF0ZS5DVVJFRCB8fCBvdGhlci5zdGF0ZSA9PT0gRGlzZWFzZVN0YXRlLkNVUkVEKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAocGVyc29uLmluZmVjdChwLnJhbmRvbSgwLCAxKSA+IG1vcnRhbGl0eVJhdGUpKSB7XG4gICAgICAgICAgICBzdGF0aXN0aWNzLmluZmVjdGVkICs9IDE7XG4gICAgICAgICAgICBzdGF0aXN0aWNzLnVuYWZmZWN0ZWQgLT0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3RoZXIuaW5mZWN0KHAucmFuZG9tKDAsIDEpID4gbW9ydGFsaXR5UmF0ZSkpIHtcbiAgICAgICAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgKz0gMTtcbiAgICAgICAgICAgIHN0YXRpc3RpY3MudW5hZmZlY3RlZCAtPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gKHBlcnNvbikgPT4ge1xuICAgICAgaWYgKHBlcnNvbi5zdGF0ZSAhPT0gRGlzZWFzZVN0YXRlLklORkVDVEVEKSByZXR1cm47XG5cbiAgICAgIGlmIChwZXJzb24uaW5mZWN0ZWRUaW1lID4gcmVjb3ZlcnlUaW1lIC8gMiAmJiAhcGVyc29uLndpbGxTdXJ2aXZlKSB7XG4gICAgICAgIHBlcnNvbi5zdGF0ZSA9IERpc2Vhc2VTdGF0ZS5GQVRBTDtcbiAgICAgICAgc3RhdGlzdGljcy5mYXRhbCArPSAxO1xuICAgICAgICBzdGF0aXN0aWNzLmluZmVjdGVkIC09IDE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBlcnNvbi5pbmZlY3RlZFRpbWUgPj0gcmVjb3ZlcnlUaW1lKSB7XG4gICAgICAgIHBlcnNvbi5zdGF0ZSA9IERpc2Vhc2VTdGF0ZS5DVVJFRDtcbiAgICAgICAgc3RhdGlzdGljcy5jdXJlZCArPSAxO1xuICAgICAgICBzdGF0aXN0aWNzLmluZmVjdGVkIC09IDE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcGVyc29uLmluZmVjdGVkVGltZSArPSAxO1xuICAgIH07XG5cbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgcG9wdWxhdGlvbiA9IFtdO1xuICAgICAgc3RhdGlzdGljcy5yZXNldCgpO1xuICAgICAgc2V0Q291bnRlcnMoc3RhdGlzdGljcy5jb3VudGVycygpKTtcbiAgICAgIHNldFRpbWVsaW5lcyhzdGF0aXN0aWNzLnRpbWVsaW5lcygpKTtcbiAgICAgIHNldFNob3dSZXBsYXkoZmFsc2UpO1xuICAgICAgc2V0dXBQb3B1bGF0aW9uKHBvcHVsYXRpb25TaXplKTtcbiAgICAgIHAuZnJhbWVDb3VudCA9IC0xO1xuICAgICAgcC5sb29wKCk7XG4gICAgfTtcblxuICAgIHAuc2V0dXAgPSAoKSA9PiB7XG4gICAgICBzZXR1cENhbnZhcyhjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGluaXRpYWxpemUoKTtcbiAgICAgIHNldEhhbmRsZVJlcGxheSgoKSA9PiBpbml0aWFsaXplKTtcbiAgICB9O1xuXG4gICAgcC5kcmF3ID0gKCkgPT4ge1xuICAgICAgaWYgKHAuZnJhbWVDb3VudCA9PT0gMTYwMCkge1xuICAgICAgICBwLm5vTG9vcCgpO1xuICAgICAgICBzZXRTaG93UmVwbGF5KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBwLmJhY2tncm91bmQoJ3doaXRlJyk7XG5cbiAgICAgIHBvcHVsYXRpb24uZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHBlcnNvbik7XG4gICAgICAgIHBlcnNvbi5tb3ZlKCk7XG4gICAgICAgIGhhbmRsZUludGVyYWN0aW9ucyhwZXJzb24pO1xuICAgICAgICBwZXJzb24ucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgICAgc3RhdGlzdGljcy5yZWNvcmRUaW1lbGluZXMoKTtcblxuICAgICAgaWYgKHAuZnJhbWVDb3VudCAlIDIgPT09IDApIHtcbiAgICAgICAgc2V0Q291bnRlcnMoc3RhdGlzdGljcy5jb3VudGVycygpKTtcbiAgICAgICAgc2V0VGltZWxpbmVzKHN0YXRpc3RpY3MudGltZWxpbmVzKCkpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgbmV3IFA1KHNrZXRjaCwgY29udGFpbmVyUmVmLmN1cnJlbnQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENvdW50ZXJzIGNvdW50ZXJzPXtjb3VudGVyc30gLz5cbiAgICAgIDxHcmFwaCB3aWR0aD17Z3JhcGhXaWR0aH0gaGVpZ2h0PXtncmFwaEhlaWdodH0gdGltZWxpbmVzPXt0aW1lbGluZXN9IHBvcHVsYXRpb25TaXplPXtwb3B1bGF0aW9uU2l6ZX0gLz5cblxuICAgICAgPGRpdiBpZD1cImluZmVjdGlvblwiIHJlZj17Y29udGFpbmVyUmVmfSBjbGFzc05hbWU9e3Nob3dSZXBsYXkgJiYgJ292ZXJsYXknfSBzdHlsZT17eyBtYXhXaWR0aDogY2FudmFzV2lkdGgsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICA8UmVwbGF5IHNob3c9e3Nob3dSZXBsYXl9IG9uQ2xpY2s9e2hhbmRsZVJlcGxheX0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAub3ZlcmxheSBjYW52YXMge1xuICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5JbmZlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBjYW52YXNXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgY2FudmFzSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBwb3B1bGF0aW9uU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgcmVjb3ZlcnlUaW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtb3J0YWxpdHlSYXRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBncmFwaFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBncmFwaEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbkluZmVjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhbnZhc1dpZHRoOiA2NDAsXG4gIGNhbnZhc0hlaWdodDogNDgwLFxuICBwb3B1bGF0aW9uU2l6ZTogMjAwLFxuICByZWNvdmVyeVRpbWU6IDUwMCxcbiAgbW9ydGFsaXR5UmF0ZTogMCxcbiAgZ3JhcGhXaWR0aDogNjQwLFxuICBncmFwaEhlaWdodDogNjAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmZlY3Rpb247XG4iXX0= */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/no_restrictions/Infection.js */"));
};

Infection.propTypes = {
  canvasWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  canvasHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  populationSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  recoveryTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  mortalityRate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  graphWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  graphHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
Infection.defaultProps = {
  canvasWidth: 640,
  canvasHeight: 480,
  populationSize: 200,
  recoveryTime: 500,
  mortalityRate: 0,
  graphWidth: 640,
  graphHeight: 60
};
/* harmony default export */ __webpack_exports__["default"] = (Infection);

/***/ })

})
//# sourceMappingURL=1.8410fa9b0523ec8528b2.hot-update.js.map