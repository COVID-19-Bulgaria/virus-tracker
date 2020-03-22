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
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Person */ "./simulations/Person.js");
/* harmony import */ var _DiseaseState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DiseaseState */ "./simulations/DiseaseState.js");
/* harmony import */ var _Physics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Physics */ "./simulations/Physics.js");
/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Statistics */ "./simulations/Statistics.js");
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Graph */ "./simulations/Graph.js");
/* harmony import */ var _Counters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Counters */ "./simulations/Counters.js");
/* harmony import */ var _Replay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Replay */ "./simulations/Replay.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/simulations/no_restrictions/Infection.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var Infection = function Infection() {
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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      triggerReplay = _useState4[0],
      setTriggerReplay = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sk = _useState5[0],
      setSk = _useState5[1];

  var sketch = function sketch(p) {
    var RECOVERY_TIME = 500;
    var MORTALITY_RATE = 0.02;
    var population = [];

    var setupCanvas = function setupCanvas(width, height) {
      var canvas = p.createCanvas(width, height);
      canvas["class"]('simulation');
    };

    var setupPopulation = function setupPopulation(size) {
      population[0] = new _Person__WEBPACK_IMPORTED_MODULE_3__["default"]({
        x: p.random(_Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius, p.width - _Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius),
        y: p.random(_Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius, p.height - _Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius),
        radius: 10,
        state: _DiseaseState__WEBPACK_IMPORTED_MODULE_4__["default"].INFECTED,
        p5: p
      });
      statistics.infected += 1;

      for (var i = 1; i < size; i += 1) {
        population[i] = new _Person__WEBPACK_IMPORTED_MODULE_3__["default"]({
          x: p.random(_Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius, p.width - _Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius),
          y: p.random(_Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius, p.height - _Person__WEBPACK_IMPORTED_MODULE_3__["default"].defaultRadius),
          radius: 10,
          state: _DiseaseState__WEBPACK_IMPORTED_MODULE_4__["default"].UNAFFECTED,
          p5: p
        });
        statistics.unaffected += 1;
      }
    };

    var handleInteractions = function handleInteractions(person) {
      population.forEach(function (other) {
        if (other === person) return;
        if (person.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_4__["default"].FATAL || other.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_4__["default"].FATAL) return;

        if (Object(_Physics__WEBPACK_IMPORTED_MODULE_5__["checkCollision"])(person, other)) {
          Object(_Physics__WEBPACK_IMPORTED_MODULE_5__["changeDirections"])(person, other);
          if (person.state === other.state) return;
          if (person.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_4__["default"].CURED || other.state === _DiseaseState__WEBPACK_IMPORTED_MODULE_4__["default"].CURED) return;

          if (person.infect(p.random(0, 1) > MORTALITY_RATE)) {
            statistics.infected += 1;
            statistics.unaffected -= 1;
          }

          if (other.infect(p.random(0, 1) > MORTALITY_RATE)) {
            statistics.infected += 1;
            statistics.unaffected -= 1;
          }
        }
      });
    };

    var updateState = function updateState(person) {
      if (person.state !== _DiseaseState__WEBPACK_IMPORTED_MODULE_4__["default"].INFECTED) return;

      if (person.infectedTime > RECOVERY_TIME / 2 && !person.willSurvive) {
        person.state = _DiseaseState__WEBPACK_IMPORTED_MODULE_4__["default"].FATAL;
        statistics.fatal += 1;
        statistics.infected -= 1;
        return;
      }

      if (person.infectedTime >= RECOVERY_TIME) {
        person.state = _DiseaseState__WEBPACK_IMPORTED_MODULE_4__["default"].CURED;
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
      setupPopulation(200);
      p.frameCount = -1;
      p.loop();
    };

    p.setup = function () {
      setupCanvas(640, 480);
      initialize();
    };

    p.draw = function () {
      if (p.frameCount === 1600) {
        p.noLoop();
        setShowReplay(true);
      }

      if (triggerReplay) {
        initialize();
        setTriggerReplay(false);
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

  var handleReplay = function handleReplay() {
    setTriggerReplay(true);
    sk.loop();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var p = new p5__WEBPACK_IMPORTED_MODULE_2___default.a(sketch, containerRef.current);
    setSk(p);
  }, []);
  return __jsx("div", {
    className: "jsx-4032735562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_Counters__WEBPACK_IMPORTED_MODULE_8__["default"], {
    counters: counters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), __jsx(_Graph__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: 300,
    height: 60,
    timelines: timelines,
    populationSize: 200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), __jsx("button", {
    onClick: handleReplay,
    className: "jsx-4032735562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Replay"), __jsx("div", {
    id: "infection",
    ref: containerRef,
    style: {
      maxWidth: 640,
      position: 'relative'
    },
    className: "jsx-4032735562" + " " + (showReplay && 'overlay' || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(_Replay__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, ".overlay canvas{opacity:0.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9ub19yZXN0cmljdGlvbnMvSW5mZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFLUyxBQUd5QixZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9ub19yZXN0cmljdGlvbnMvSW5mZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHA1IGZyb20gJ3A1JztcbmltcG9ydCBQZXJzb24gZnJvbSAnLi4vUGVyc29uJztcbmltcG9ydCBEaXNlYXNlU3RhdGUgZnJvbSAnLi4vRGlzZWFzZVN0YXRlJztcbmltcG9ydCB7IGNoZWNrQ29sbGlzaW9uLCBjaGFuZ2VEaXJlY3Rpb25zIH0gZnJvbSAnLi4vUGh5c2ljcyc7XG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuLi9TdGF0aXN0aWNzJztcbmltcG9ydCBHcmFwaCBmcm9tICcuLi9HcmFwaCc7XG5pbXBvcnQgQ291bnRlcnMgZnJvbSAnLi4vQ291bnRlcnMnO1xuaW1wb3J0IFJlcGxheSBmcm9tICcuLi9SZXBsYXknO1xuXG5jb25zdCBJbmZlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBzdGF0aXN0aWNzID0gbmV3IFN0YXRpc3RpY3Moe30pO1xuICBjb25zdCBbY291bnRlcnMsIHNldENvdW50ZXJzXSA9IHVzZVN0YXRlKHN0YXRpc3RpY3MuY291bnRlcnMoKSk7XG4gIGNvbnN0IFt0aW1lbGluZXMsIHNldFRpbWVsaW5lc10gPSB1c2VTdGF0ZShzdGF0aXN0aWNzLnRpbWVsaW5lcygpKTtcbiAgY29uc3QgW3Nob3dSZXBsYXksIHNldFNob3dSZXBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdHJpZ2dlclJlcGxheSwgc2V0VHJpZ2dlclJlcGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaywgc2V0U2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNrZXRjaCA9IChwKSA9PiB7XG4gICAgY29uc3QgUkVDT1ZFUllfVElNRSA9IDUwMDtcbiAgICBjb25zdCBNT1JUQUxJVFlfUkFURSA9IDAuMDI7XG5cbiAgICBsZXQgcG9wdWxhdGlvbiA9IFtdO1xuXG4gICAgY29uc3Qgc2V0dXBDYW52YXMgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgICAgY29uc3QgY2FudmFzID0gcC5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XG4gICAgICBjYW52YXMuY2xhc3MoJ3NpbXVsYXRpb24nKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0dXBQb3B1bGF0aW9uID0gKHNpemUpID0+IHtcbiAgICAgIHBvcHVsYXRpb25bMF0gPSBuZXcgUGVyc29uKHtcbiAgICAgICAgeDogcC5yYW5kb20oUGVyc29uLmRlZmF1bHRSYWRpdXMsIHAud2lkdGggLSBQZXJzb24uZGVmYXVsdFJhZGl1cyksXG4gICAgICAgIHk6IHAucmFuZG9tKFBlcnNvbi5kZWZhdWx0UmFkaXVzLCBwLmhlaWdodCAtIFBlcnNvbi5kZWZhdWx0UmFkaXVzKSxcbiAgICAgICAgcmFkaXVzOiAxMCxcbiAgICAgICAgc3RhdGU6IERpc2Vhc2VTdGF0ZS5JTkZFQ1RFRCxcbiAgICAgICAgcDU6IHAsXG4gICAgICB9KTtcblxuICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCArPSAxO1xuXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgICAgICBwb3B1bGF0aW9uW2ldID0gbmV3IFBlcnNvbih7XG4gICAgICAgICAgeDogcC5yYW5kb20oUGVyc29uLmRlZmF1bHRSYWRpdXMsIHAud2lkdGggLSBQZXJzb24uZGVmYXVsdFJhZGl1cyksXG4gICAgICAgICAgeTogcC5yYW5kb20oUGVyc29uLmRlZmF1bHRSYWRpdXMsIHAuaGVpZ2h0IC0gUGVyc29uLmRlZmF1bHRSYWRpdXMpLFxuICAgICAgICAgIHJhZGl1czogMTAsXG4gICAgICAgICAgc3RhdGU6IERpc2Vhc2VTdGF0ZS5VTkFGRkVDVEVELFxuICAgICAgICAgIHA1OiBwLFxuICAgICAgICB9KTtcblxuICAgICAgICBzdGF0aXN0aWNzLnVuYWZmZWN0ZWQgKz0gMTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlSW50ZXJhY3Rpb25zID0gKHBlcnNvbikgPT4ge1xuICAgICAgcG9wdWxhdGlvbi5mb3JFYWNoKChvdGhlcikgPT4ge1xuICAgICAgICBpZiAob3RoZXIgPT09IHBlcnNvbikgcmV0dXJuO1xuICAgICAgICBpZiAocGVyc29uLnN0YXRlID09PSBEaXNlYXNlU3RhdGUuRkFUQUwgfHwgb3RoZXIuc3RhdGUgPT09IERpc2Vhc2VTdGF0ZS5GQVRBTCkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChjaGVja0NvbGxpc2lvbihwZXJzb24sIG90aGVyKSkge1xuICAgICAgICAgIGNoYW5nZURpcmVjdGlvbnMocGVyc29uLCBvdGhlcik7XG5cbiAgICAgICAgICBpZiAocGVyc29uLnN0YXRlID09PSBvdGhlci5zdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgIGlmIChwZXJzb24uc3RhdGUgPT09IERpc2Vhc2VTdGF0ZS5DVVJFRCB8fCBvdGhlci5zdGF0ZSA9PT0gRGlzZWFzZVN0YXRlLkNVUkVEKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAocGVyc29uLmluZmVjdChwLnJhbmRvbSgwLCAxKSA+IE1PUlRBTElUWV9SQVRFKSkge1xuICAgICAgICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCArPSAxO1xuICAgICAgICAgICAgc3RhdGlzdGljcy51bmFmZmVjdGVkIC09IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG90aGVyLmluZmVjdChwLnJhbmRvbSgwLCAxKSA+IE1PUlRBTElUWV9SQVRFKSkge1xuICAgICAgICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCArPSAxO1xuICAgICAgICAgICAgc3RhdGlzdGljcy51bmFmZmVjdGVkIC09IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlU3RhdGUgPSAocGVyc29uKSA9PiB7XG4gICAgICBpZiAocGVyc29uLnN0YXRlICE9PSBEaXNlYXNlU3RhdGUuSU5GRUNURUQpIHJldHVybjtcblxuICAgICAgaWYgKHBlcnNvbi5pbmZlY3RlZFRpbWUgPiBSRUNPVkVSWV9USU1FIC8gMiAmJiAhcGVyc29uLndpbGxTdXJ2aXZlKSB7XG4gICAgICAgIHBlcnNvbi5zdGF0ZSA9IERpc2Vhc2VTdGF0ZS5GQVRBTDtcbiAgICAgICAgc3RhdGlzdGljcy5mYXRhbCArPSAxO1xuICAgICAgICBzdGF0aXN0aWNzLmluZmVjdGVkIC09IDE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBlcnNvbi5pbmZlY3RlZFRpbWUgPj0gUkVDT1ZFUllfVElNRSkge1xuICAgICAgICBwZXJzb24uc3RhdGUgPSBEaXNlYXNlU3RhdGUuQ1VSRUQ7XG4gICAgICAgIHN0YXRpc3RpY3MuY3VyZWQgKz0gMTtcbiAgICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCAtPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBlcnNvbi5pbmZlY3RlZFRpbWUgKz0gMTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgIHBvcHVsYXRpb24gPSBbXTtcbiAgICAgIHN0YXRpc3RpY3MucmVzZXQoKTtcbiAgICAgIHNldENvdW50ZXJzKHN0YXRpc3RpY3MuY291bnRlcnMoKSk7XG4gICAgICBzZXRUaW1lbGluZXMoc3RhdGlzdGljcy50aW1lbGluZXMoKSk7XG4gICAgICBzZXRTaG93UmVwbGF5KGZhbHNlKTtcbiAgICAgIHNldHVwUG9wdWxhdGlvbigyMDApO1xuICAgICAgcC5mcmFtZUNvdW50ID0gLTE7XG4gICAgICBwLmxvb3AoKTtcbiAgICB9O1xuXG4gICAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICAgIHNldHVwQ2FudmFzKDY0MCwgNDgwKTtcbiAgICAgIGluaXRpYWxpemUoKTtcbiAgICB9O1xuXG4gICAgcC5kcmF3ID0gKCkgPT4ge1xuICAgICAgaWYgKHAuZnJhbWVDb3VudCA9PT0gMTYwMCkge1xuICAgICAgICBwLm5vTG9vcCgpO1xuICAgICAgICBzZXRTaG93UmVwbGF5KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJpZ2dlclJlcGxheSkge1xuICAgICAgICBpbml0aWFsaXplKCk7XG4gICAgICAgIHNldFRyaWdnZXJSZXBsYXkoZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBwLmJhY2tncm91bmQoJ3doaXRlJyk7XG5cbiAgICAgIHBvcHVsYXRpb24uZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHBlcnNvbik7XG4gICAgICAgIHBlcnNvbi5tb3ZlKCk7XG4gICAgICAgIGhhbmRsZUludGVyYWN0aW9ucyhwZXJzb24pO1xuICAgICAgICBwZXJzb24ucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgICAgc3RhdGlzdGljcy5yZWNvcmRUaW1lbGluZXMoKTtcblxuICAgICAgaWYgKHAuZnJhbWVDb3VudCAlIDIgPT09IDApIHtcbiAgICAgICAgc2V0Q291bnRlcnMoc3RhdGlzdGljcy5jb3VudGVycygpKTtcbiAgICAgICAgc2V0VGltZWxpbmVzKHN0YXRpc3RpY3MudGltZWxpbmVzKCkpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVwbGF5ID0gKCkgPT4ge1xuICAgIHNldFRyaWdnZXJSZXBsYXkodHJ1ZSk7XG4gICAgc2subG9vcCgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcCA9IG5ldyBwNShza2V0Y2gsIGNvbnRhaW5lclJlZi5jdXJyZW50KTtcbiAgICBzZXRTayhwKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDb3VudGVycyBjb3VudGVycz17Y291bnRlcnN9IC8+XG4gICAgICA8R3JhcGggd2lkdGg9ezMwMH0gaGVpZ2h0PXs2MH0gdGltZWxpbmVzPXt0aW1lbGluZXN9IHBvcHVsYXRpb25TaXplPXsyMDB9IC8+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVwbGF5fT5SZXBsYXk8L2J1dHRvbj5cblxuICAgICAgPGRpdiBpZD1cImluZmVjdGlvblwiIHJlZj17Y29udGFpbmVyUmVmfSBjbGFzc05hbWU9e3Nob3dSZXBsYXkgJiYgJ292ZXJsYXknfSBzdHlsZT17eyBtYXhXaWR0aDogNjQwLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgPFJlcGxheSBzaG93PXtzaG93UmVwbGF5fSBvbkNsaWNrPXtoYW5kbGVSZXBsYXl9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm92ZXJsYXkgY2FudmFzIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mZWN0aW9uO1xuIl19 */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/no_restrictions/Infection.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Infection);

/***/ })

})
//# sourceMappingURL=1.300353ab842acbd5a80d.hot-update.js.map