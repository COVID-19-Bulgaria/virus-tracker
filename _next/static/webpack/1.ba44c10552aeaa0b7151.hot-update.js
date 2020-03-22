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
      handleReplay = _useState4[0],
      setHandleReplay = _useState4[1];

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
      setHandleReplay(initialize);
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
    var p = new p5__WEBPACK_IMPORTED_MODULE_2___default.a(sketch, containerRef.current);
  }, []);
  return __jsx("div", {
    className: "jsx-4032735562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_Counters__WEBPACK_IMPORTED_MODULE_8__["default"], {
    counters: counters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx(_Graph__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: 300,
    height: 60,
    timelines: timelines,
    populationSize: 200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx("button", {
    onClick: handleReplay,
    className: "jsx-4032735562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
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
      lineNumber: 150
    },
    __self: this
  }, __jsx(_Replay__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: showReplay,
    onClick: handleReplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4032735562",
    __self: this
  }, ".overlay canvas{opacity:0.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9ub19yZXN0cmljdGlvbnMvSW5mZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBKUyxBQUd5QixZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9ub19yZXN0cmljdGlvbnMvSW5mZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHA1IGZyb20gJ3A1JztcbmltcG9ydCBQZXJzb24gZnJvbSAnLi4vUGVyc29uJztcbmltcG9ydCBEaXNlYXNlU3RhdGUgZnJvbSAnLi4vRGlzZWFzZVN0YXRlJztcbmltcG9ydCB7IGNoZWNrQ29sbGlzaW9uLCBjaGFuZ2VEaXJlY3Rpb25zIH0gZnJvbSAnLi4vUGh5c2ljcyc7XG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuLi9TdGF0aXN0aWNzJztcbmltcG9ydCBHcmFwaCBmcm9tICcuLi9HcmFwaCc7XG5pbXBvcnQgQ291bnRlcnMgZnJvbSAnLi4vQ291bnRlcnMnO1xuaW1wb3J0IFJlcGxheSBmcm9tICcuLi9SZXBsYXknO1xuXG5jb25zdCBJbmZlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBzdGF0aXN0aWNzID0gbmV3IFN0YXRpc3RpY3Moe30pO1xuICBjb25zdCBbY291bnRlcnMsIHNldENvdW50ZXJzXSA9IHVzZVN0YXRlKHN0YXRpc3RpY3MuY291bnRlcnMoKSk7XG4gIGNvbnN0IFt0aW1lbGluZXMsIHNldFRpbWVsaW5lc10gPSB1c2VTdGF0ZShzdGF0aXN0aWNzLnRpbWVsaW5lcygpKTtcbiAgY29uc3QgW3Nob3dSZXBsYXksIHNldFNob3dSZXBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFuZGxlUmVwbGF5LCBzZXRIYW5kbGVSZXBsYXldID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBza2V0Y2ggPSAocCkgPT4ge1xuICAgIGNvbnN0IFJFQ09WRVJZX1RJTUUgPSA1MDA7XG4gICAgY29uc3QgTU9SVEFMSVRZX1JBVEUgPSAwLjAyO1xuXG4gICAgbGV0IHBvcHVsYXRpb24gPSBbXTtcblxuICAgIGNvbnN0IHNldHVwQ2FudmFzID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgY2FudmFzLmNsYXNzKCdzaW11bGF0aW9uJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHVwUG9wdWxhdGlvbiA9IChzaXplKSA9PiB7XG4gICAgICBwb3B1bGF0aW9uWzBdID0gbmV3IFBlcnNvbih7XG4gICAgICAgIHg6IHAucmFuZG9tKFBlcnNvbi5kZWZhdWx0UmFkaXVzLCBwLndpZHRoIC0gUGVyc29uLmRlZmF1bHRSYWRpdXMpLFxuICAgICAgICB5OiBwLnJhbmRvbShQZXJzb24uZGVmYXVsdFJhZGl1cywgcC5oZWlnaHQgLSBQZXJzb24uZGVmYXVsdFJhZGl1cyksXG4gICAgICAgIHJhZGl1czogMTAsXG4gICAgICAgIHN0YXRlOiBEaXNlYXNlU3RhdGUuSU5GRUNURUQsXG4gICAgICAgIHA1OiBwLFxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgKz0gMTtcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaXplOyBpICs9IDEpIHtcbiAgICAgICAgcG9wdWxhdGlvbltpXSA9IG5ldyBQZXJzb24oe1xuICAgICAgICAgIHg6IHAucmFuZG9tKFBlcnNvbi5kZWZhdWx0UmFkaXVzLCBwLndpZHRoIC0gUGVyc29uLmRlZmF1bHRSYWRpdXMpLFxuICAgICAgICAgIHk6IHAucmFuZG9tKFBlcnNvbi5kZWZhdWx0UmFkaXVzLCBwLmhlaWdodCAtIFBlcnNvbi5kZWZhdWx0UmFkaXVzKSxcbiAgICAgICAgICByYWRpdXM6IDEwLFxuICAgICAgICAgIHN0YXRlOiBEaXNlYXNlU3RhdGUuVU5BRkZFQ1RFRCxcbiAgICAgICAgICBwNTogcCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RhdGlzdGljcy51bmFmZmVjdGVkICs9IDE7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUludGVyYWN0aW9ucyA9IChwZXJzb24pID0+IHtcbiAgICAgIHBvcHVsYXRpb24uZm9yRWFjaCgob3RoZXIpID0+IHtcbiAgICAgICAgaWYgKG90aGVyID09PSBwZXJzb24pIHJldHVybjtcbiAgICAgICAgaWYgKHBlcnNvbi5zdGF0ZSA9PT0gRGlzZWFzZVN0YXRlLkZBVEFMIHx8IG90aGVyLnN0YXRlID09PSBEaXNlYXNlU3RhdGUuRkFUQUwpIHJldHVybjtcblxuICAgICAgICBpZiAoY2hlY2tDb2xsaXNpb24ocGVyc29uLCBvdGhlcikpIHtcbiAgICAgICAgICBjaGFuZ2VEaXJlY3Rpb25zKHBlcnNvbiwgb3RoZXIpO1xuXG4gICAgICAgICAgaWYgKHBlcnNvbi5zdGF0ZSA9PT0gb3RoZXIuc3RhdGUpIHJldHVybjtcbiAgICAgICAgICBpZiAocGVyc29uLnN0YXRlID09PSBEaXNlYXNlU3RhdGUuQ1VSRUQgfHwgb3RoZXIuc3RhdGUgPT09IERpc2Vhc2VTdGF0ZS5DVVJFRCkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKHBlcnNvbi5pbmZlY3QocC5yYW5kb20oMCwgMSkgPiBNT1JUQUxJVFlfUkFURSkpIHtcbiAgICAgICAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgKz0gMTtcbiAgICAgICAgICAgIHN0YXRpc3RpY3MudW5hZmZlY3RlZCAtPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvdGhlci5pbmZlY3QocC5yYW5kb20oMCwgMSkgPiBNT1JUQUxJVFlfUkFURSkpIHtcbiAgICAgICAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgKz0gMTtcbiAgICAgICAgICAgIHN0YXRpc3RpY3MudW5hZmZlY3RlZCAtPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gKHBlcnNvbikgPT4ge1xuICAgICAgaWYgKHBlcnNvbi5zdGF0ZSAhPT0gRGlzZWFzZVN0YXRlLklORkVDVEVEKSByZXR1cm47XG5cbiAgICAgIGlmIChwZXJzb24uaW5mZWN0ZWRUaW1lID4gUkVDT1ZFUllfVElNRSAvIDIgJiYgIXBlcnNvbi53aWxsU3Vydml2ZSkge1xuICAgICAgICBwZXJzb24uc3RhdGUgPSBEaXNlYXNlU3RhdGUuRkFUQUw7XG4gICAgICAgIHN0YXRpc3RpY3MuZmF0YWwgKz0gMTtcbiAgICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCAtPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChwZXJzb24uaW5mZWN0ZWRUaW1lID49IFJFQ09WRVJZX1RJTUUpIHtcbiAgICAgICAgcGVyc29uLnN0YXRlID0gRGlzZWFzZVN0YXRlLkNVUkVEO1xuICAgICAgICBzdGF0aXN0aWNzLmN1cmVkICs9IDE7XG4gICAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgLT0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwZXJzb24uaW5mZWN0ZWRUaW1lICs9IDE7XG4gICAgfTtcblxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICBwb3B1bGF0aW9uID0gW107XG4gICAgICBzdGF0aXN0aWNzLnJlc2V0KCk7XG4gICAgICBzZXRDb3VudGVycyhzdGF0aXN0aWNzLmNvdW50ZXJzKCkpO1xuICAgICAgc2V0VGltZWxpbmVzKHN0YXRpc3RpY3MudGltZWxpbmVzKCkpO1xuICAgICAgc2V0U2hvd1JlcGxheShmYWxzZSk7XG4gICAgICBzZXR1cFBvcHVsYXRpb24oMjAwKTtcbiAgICAgIHAuZnJhbWVDb3VudCA9IC0xO1xuICAgICAgcC5sb29wKCk7XG4gICAgfTtcblxuICAgIHAuc2V0dXAgPSAoKSA9PiB7XG4gICAgICBzZXR1cENhbnZhcyg2NDAsIDQ4MCk7XG4gICAgICBpbml0aWFsaXplKCk7XG4gICAgICBzZXRIYW5kbGVSZXBsYXkoaW5pdGlhbGl6ZSk7XG4gICAgfTtcblxuICAgIHAuZHJhdyA9ICgpID0+IHtcbiAgICAgIGlmIChwLmZyYW1lQ291bnQgPT09IDE2MDApIHtcbiAgICAgICAgcC5ub0xvb3AoKTtcbiAgICAgICAgc2V0U2hvd1JlcGxheSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcC5iYWNrZ3JvdW5kKCd3aGl0ZScpO1xuXG4gICAgICBwb3B1bGF0aW9uLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgICAgICB1cGRhdGVTdGF0ZShwZXJzb24pO1xuICAgICAgICBwZXJzb24ubW92ZSgpO1xuICAgICAgICBoYW5kbGVJbnRlcmFjdGlvbnMocGVyc29uKTtcbiAgICAgICAgcGVyc29uLnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICAgIHN0YXRpc3RpY3MucmVjb3JkVGltZWxpbmVzKCk7XG5cbiAgICAgIGlmIChwLmZyYW1lQ291bnQgJSAyID09PSAwKSB7XG4gICAgICAgIHNldENvdW50ZXJzKHN0YXRpc3RpY3MuY291bnRlcnMoKSk7XG4gICAgICAgIHNldFRpbWVsaW5lcyhzdGF0aXN0aWNzLnRpbWVsaW5lcygpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcCA9IG5ldyBwNShza2V0Y2gsIGNvbnRhaW5lclJlZi5jdXJyZW50KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDb3VudGVycyBjb3VudGVycz17Y291bnRlcnN9IC8+XG4gICAgICA8R3JhcGggd2lkdGg9ezMwMH0gaGVpZ2h0PXs2MH0gdGltZWxpbmVzPXt0aW1lbGluZXN9IHBvcHVsYXRpb25TaXplPXsyMDB9IC8+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVwbGF5fT5SZXBsYXk8L2J1dHRvbj5cblxuICAgICAgPGRpdiBpZD1cImluZmVjdGlvblwiIHJlZj17Y29udGFpbmVyUmVmfSBjbGFzc05hbWU9e3Nob3dSZXBsYXkgJiYgJ292ZXJsYXknfSBzdHlsZT17eyBtYXhXaWR0aDogNjQwLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgPFJlcGxheSBzaG93PXtzaG93UmVwbGF5fSBvbkNsaWNrPXtoYW5kbGVSZXBsYXl9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm92ZXJsYXkgY2FudmFzIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mZWN0aW9uO1xuIl19 */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/no_restrictions/Infection.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Infection);

/***/ })

})
//# sourceMappingURL=1.ba44c10552aeaa0b7151.hot-update.js.map