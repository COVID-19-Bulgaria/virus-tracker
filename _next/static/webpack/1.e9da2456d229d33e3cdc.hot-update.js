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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      pp = _useState4[0],
      setPp = _useState4[1];

  var sketch = function sketch(p) {
    setPp(p);
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

      if (p.frameCount > 200) {
        p.frameCount = -1;
      }

      p.background('white');
      population.forEach(function (person) {
        updateState(person);
        person.move();
        handleInteractions(person);
        person.render();
      });
      setCounters(statistics.counters());
      statistics.recordTimelines();

      if (p.frameCount % 2 === 0) {
        setTimelines(statistics.timelines());
      }
    };
  };

  var handleReplay = function handleReplay(ppp) {
    ppp.initialize();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var p = new p5__WEBPACK_IMPORTED_MODULE_2___default.a(sketch, containerRef.current);
  }, []);
  return __jsx("div", {
    className: "jsx-4032735562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_Counters__WEBPACK_IMPORTED_MODULE_8__["default"], {
    counters: counters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), __jsx(_Graph__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: 300,
    height: 60,
    timelines: timelines,
    populationSize: 200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx("div", {
    id: "infection",
    ref: containerRef,
    style: {
      maxWidth: 640,
      position: 'relative'
    },
    className: "jsx-4032735562" + " " + (showReplay && 'overlay' || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_Replay__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: showReplay,
    onClick: function onClick() {
      return handleReplay(pp);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4032735562",
    __self: this
  }, ".overlay canvas{opacity:0.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9ub19yZXN0cmljdGlvbnMvSW5mZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdLUyxBQUd5QixZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9ub19yZXN0cmljdGlvbnMvSW5mZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHA1IGZyb20gJ3A1JztcbmltcG9ydCBQZXJzb24gZnJvbSAnLi4vUGVyc29uJztcbmltcG9ydCBEaXNlYXNlU3RhdGUgZnJvbSAnLi4vRGlzZWFzZVN0YXRlJztcbmltcG9ydCB7IGNoZWNrQ29sbGlzaW9uLCBjaGFuZ2VEaXJlY3Rpb25zIH0gZnJvbSAnLi4vUGh5c2ljcyc7XG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuLi9TdGF0aXN0aWNzJztcbmltcG9ydCBHcmFwaCBmcm9tICcuLi9HcmFwaCc7XG5pbXBvcnQgQ291bnRlcnMgZnJvbSAnLi4vQ291bnRlcnMnO1xuaW1wb3J0IFJlcGxheSBmcm9tICcuLi9SZXBsYXknO1xuXG5jb25zdCBJbmZlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBzdGF0aXN0aWNzID0gbmV3IFN0YXRpc3RpY3Moe30pO1xuICBjb25zdCBbY291bnRlcnMsIHNldENvdW50ZXJzXSA9IHVzZVN0YXRlKHN0YXRpc3RpY3MuY291bnRlcnMoKSk7XG4gIGNvbnN0IFt0aW1lbGluZXMsIHNldFRpbWVsaW5lc10gPSB1c2VTdGF0ZShzdGF0aXN0aWNzLnRpbWVsaW5lcygpKTtcbiAgY29uc3QgW3Nob3dSZXBsYXksIHNldFNob3dSZXBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHAsIHNldFBwXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgc2tldGNoID0gKHApID0+IHtcbiAgICBzZXRQcChwKTtcbiAgICBjb25zdCBSRUNPVkVSWV9USU1FID0gNTAwO1xuICAgIGNvbnN0IE1PUlRBTElUWV9SQVRFID0gMC4wMjtcblxuICAgIGxldCBwb3B1bGF0aW9uID0gW107XG5cbiAgICBjb25zdCBzZXR1cENhbnZhcyA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgICBjb25zdCBjYW52YXMgPSBwLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIGNhbnZhcy5jbGFzcygnc2ltdWxhdGlvbicpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXR1cFBvcHVsYXRpb24gPSAoc2l6ZSkgPT4ge1xuICAgICAgcG9wdWxhdGlvblswXSA9IG5ldyBQZXJzb24oe1xuICAgICAgICB4OiBwLnJhbmRvbShQZXJzb24uZGVmYXVsdFJhZGl1cywgcC53aWR0aCAtIFBlcnNvbi5kZWZhdWx0UmFkaXVzKSxcbiAgICAgICAgeTogcC5yYW5kb20oUGVyc29uLmRlZmF1bHRSYWRpdXMsIHAuaGVpZ2h0IC0gUGVyc29uLmRlZmF1bHRSYWRpdXMpLFxuICAgICAgICByYWRpdXM6IDEwLFxuICAgICAgICBzdGF0ZTogRGlzZWFzZVN0YXRlLklORkVDVEVELFxuICAgICAgICBwNTogcCxcbiAgICAgIH0pO1xuXG4gICAgICBzdGF0aXN0aWNzLmluZmVjdGVkICs9IDE7XG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2l6ZTsgaSArPSAxKSB7XG4gICAgICAgIHBvcHVsYXRpb25baV0gPSBuZXcgUGVyc29uKHtcbiAgICAgICAgICB4OiBwLnJhbmRvbShQZXJzb24uZGVmYXVsdFJhZGl1cywgcC53aWR0aCAtIFBlcnNvbi5kZWZhdWx0UmFkaXVzKSxcbiAgICAgICAgICB5OiBwLnJhbmRvbShQZXJzb24uZGVmYXVsdFJhZGl1cywgcC5oZWlnaHQgLSBQZXJzb24uZGVmYXVsdFJhZGl1cyksXG4gICAgICAgICAgcmFkaXVzOiAxMCxcbiAgICAgICAgICBzdGF0ZTogRGlzZWFzZVN0YXRlLlVOQUZGRUNURUQsXG4gICAgICAgICAgcDU6IHAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0YXRpc3RpY3MudW5hZmZlY3RlZCArPSAxO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVJbnRlcmFjdGlvbnMgPSAocGVyc29uKSA9PiB7XG4gICAgICBwb3B1bGF0aW9uLmZvckVhY2goKG90aGVyKSA9PiB7XG4gICAgICAgIGlmIChvdGhlciA9PT0gcGVyc29uKSByZXR1cm47XG4gICAgICAgIGlmIChwZXJzb24uc3RhdGUgPT09IERpc2Vhc2VTdGF0ZS5GQVRBTCB8fCBvdGhlci5zdGF0ZSA9PT0gRGlzZWFzZVN0YXRlLkZBVEFMKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGNoZWNrQ29sbGlzaW9uKHBlcnNvbiwgb3RoZXIpKSB7XG4gICAgICAgICAgY2hhbmdlRGlyZWN0aW9ucyhwZXJzb24sIG90aGVyKTtcblxuICAgICAgICAgIGlmIChwZXJzb24uc3RhdGUgPT09IG90aGVyLnN0YXRlKSByZXR1cm47XG4gICAgICAgICAgaWYgKHBlcnNvbi5zdGF0ZSA9PT0gRGlzZWFzZVN0YXRlLkNVUkVEIHx8IG90aGVyLnN0YXRlID09PSBEaXNlYXNlU3RhdGUuQ1VSRUQpIHJldHVybjtcblxuICAgICAgICAgIGlmIChwZXJzb24uaW5mZWN0KHAucmFuZG9tKDAsIDEpID4gTU9SVEFMSVRZX1JBVEUpKSB7XG4gICAgICAgICAgICBzdGF0aXN0aWNzLmluZmVjdGVkICs9IDE7XG4gICAgICAgICAgICBzdGF0aXN0aWNzLnVuYWZmZWN0ZWQgLT0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3RoZXIuaW5mZWN0KHAucmFuZG9tKDAsIDEpID4gTU9SVEFMSVRZX1JBVEUpKSB7XG4gICAgICAgICAgICBzdGF0aXN0aWNzLmluZmVjdGVkICs9IDE7XG4gICAgICAgICAgICBzdGF0aXN0aWNzLnVuYWZmZWN0ZWQgLT0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IChwZXJzb24pID0+IHtcbiAgICAgIGlmIChwZXJzb24uc3RhdGUgIT09IERpc2Vhc2VTdGF0ZS5JTkZFQ1RFRCkgcmV0dXJuO1xuXG4gICAgICBpZiAocGVyc29uLmluZmVjdGVkVGltZSA+IFJFQ09WRVJZX1RJTUUgLyAyICYmICFwZXJzb24ud2lsbFN1cnZpdmUpIHtcbiAgICAgICAgcGVyc29uLnN0YXRlID0gRGlzZWFzZVN0YXRlLkZBVEFMO1xuICAgICAgICBzdGF0aXN0aWNzLmZhdGFsICs9IDE7XG4gICAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgLT0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGVyc29uLmluZmVjdGVkVGltZSA+PSBSRUNPVkVSWV9USU1FKSB7XG4gICAgICAgIHBlcnNvbi5zdGF0ZSA9IERpc2Vhc2VTdGF0ZS5DVVJFRDtcbiAgICAgICAgc3RhdGlzdGljcy5jdXJlZCArPSAxO1xuICAgICAgICBzdGF0aXN0aWNzLmluZmVjdGVkIC09IDE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcGVyc29uLmluZmVjdGVkVGltZSArPSAxO1xuICAgIH07XG5cbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgcG9wdWxhdGlvbiA9IFtdO1xuICAgICAgc3RhdGlzdGljcy5yZXNldCgpO1xuICAgICAgc2V0Q291bnRlcnMoc3RhdGlzdGljcy5jb3VudGVycygpKTtcbiAgICAgIHNldFRpbWVsaW5lcyhzdGF0aXN0aWNzLnRpbWVsaW5lcygpKTtcbiAgICAgIHNldFNob3dSZXBsYXkoZmFsc2UpO1xuICAgICAgc2V0dXBQb3B1bGF0aW9uKDIwMCk7XG4gICAgICBwLmxvb3AoKTtcbiAgICB9O1xuXG4gICAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICAgIHNldHVwQ2FudmFzKDY0MCwgNDgwKTtcbiAgICAgIGluaXRpYWxpemUoKTtcbiAgICB9O1xuXG4gICAgcC5kcmF3ID0gKCkgPT4ge1xuICAgICAgaWYgKHAuZnJhbWVDb3VudCA9PT0gMTYwMCkge1xuICAgICAgICBwLm5vTG9vcCgpO1xuICAgICAgICBzZXRTaG93UmVwbGF5KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocC5mcmFtZUNvdW50ID4gMjAwKSB7XG4gICAgICAgIHAuZnJhbWVDb3VudCA9IC0xO1xuICAgICAgfVxuXG4gICAgICBwLmJhY2tncm91bmQoJ3doaXRlJyk7XG5cbiAgICAgIHBvcHVsYXRpb24uZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHBlcnNvbik7XG4gICAgICAgIHBlcnNvbi5tb3ZlKCk7XG4gICAgICAgIGhhbmRsZUludGVyYWN0aW9ucyhwZXJzb24pO1xuICAgICAgICBwZXJzb24ucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgICAgc2V0Q291bnRlcnMoc3RhdGlzdGljcy5jb3VudGVycygpKTtcblxuICAgICAgc3RhdGlzdGljcy5yZWNvcmRUaW1lbGluZXMoKTtcblxuICAgICAgaWYgKHAuZnJhbWVDb3VudCAlIDIgPT09IDApIHtcbiAgICAgICAgc2V0VGltZWxpbmVzKHN0YXRpc3RpY3MudGltZWxpbmVzKCkpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVwbGF5ID0gKHBwcCkgPT4ge1xuICAgIHBwcC5pbml0aWFsaXplKCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwID0gbmV3IHA1KHNrZXRjaCwgY29udGFpbmVyUmVmLmN1cnJlbnQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENvdW50ZXJzIGNvdW50ZXJzPXtjb3VudGVyc30gLz5cbiAgICAgIDxHcmFwaCB3aWR0aD17MzAwfSBoZWlnaHQ9ezYwfSB0aW1lbGluZXM9e3RpbWVsaW5lc30gcG9wdWxhdGlvblNpemU9ezIwMH0gLz5cblxuICAgICAgPGRpdiBpZD1cImluZmVjdGlvblwiIHJlZj17Y29udGFpbmVyUmVmfSBjbGFzc05hbWU9e3Nob3dSZXBsYXkgJiYgJ292ZXJsYXknfSBzdHlsZT17eyBtYXhXaWR0aDogNjQwLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgPFJlcGxheSBzaG93PXtzaG93UmVwbGF5fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXBsYXkocHApfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5vdmVybGF5IGNhbnZhcyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZmVjdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/no_restrictions/Infection.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Infection);

/***/ })

})
//# sourceMappingURL=1.e9da2456d229d33e3cdc.hot-update.js.map