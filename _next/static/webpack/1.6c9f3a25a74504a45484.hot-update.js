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











var Infection = function Infection(props) {
  var populationSize = props.populationSize,
      recoveryTime = props.recoveryTime,
      mortalityRate = props.mortalityRate;
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
      setupCanvas(640, 480);
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
    var p = new p5__WEBPACK_IMPORTED_MODULE_3___default.a(sketch, containerRef.current);
  }, []);
  return __jsx("div", {
    className: "jsx-4032735562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(_Counters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    counters: counters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), __jsx(_Graph__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: 300,
    height: 60,
    timelines: timelines,
    populationSize: populationSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
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
      lineNumber: 152
    },
    __self: this
  }, __jsx(_Replay__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: showReplay,
    onClick: handleReplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4032735562",
    __self: this
  }, ".overlay canvas{opacity:0.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9ub19yZXN0cmljdGlvbnMvSW5mZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRKUyxBQUd5QixZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9ub19yZXN0cmljdGlvbnMvSW5mZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwNSBmcm9tICdwNSc7XG5pbXBvcnQgUGVyc29uIGZyb20gJy4uL1BlcnNvbic7XG5pbXBvcnQgRGlzZWFzZVN0YXRlIGZyb20gJy4uL0Rpc2Vhc2VTdGF0ZSc7XG5pbXBvcnQgeyBjaGVja0NvbGxpc2lvbiwgY2hhbmdlRGlyZWN0aW9ucyB9IGZyb20gJy4uL1BoeXNpY3MnO1xuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSAnLi4vU3RhdGlzdGljcyc7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi4vR3JhcGgnO1xuaW1wb3J0IENvdW50ZXJzIGZyb20gJy4uL0NvdW50ZXJzJztcbmltcG9ydCBSZXBsYXkgZnJvbSAnLi4vUmVwbGF5JztcblxuY29uc3QgSW5mZWN0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwb3B1bGF0aW9uU2l6ZSxcbiAgICByZWNvdmVyeVRpbWUsXG4gICAgbW9ydGFsaXR5UmF0ZVxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHN0YXRpc3RpY3MgPSBuZXcgU3RhdGlzdGljcyh7fSk7XG4gIGNvbnN0IFtjb3VudGVycywgc2V0Q291bnRlcnNdID0gdXNlU3RhdGUoc3RhdGlzdGljcy5jb3VudGVycygpKTtcbiAgY29uc3QgW3RpbWVsaW5lcywgc2V0VGltZWxpbmVzXSA9IHVzZVN0YXRlKHN0YXRpc3RpY3MudGltZWxpbmVzKCkpO1xuICBjb25zdCBbc2hvd1JlcGxheSwgc2V0U2hvd1JlcGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoYW5kbGVSZXBsYXksIHNldEhhbmRsZVJlcGxheV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHNrZXRjaCA9IChwKSA9PiB7XG4gICAgbGV0IHBvcHVsYXRpb24gPSBbXTtcblxuICAgIGNvbnN0IHNldHVwQ2FudmFzID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgY2FudmFzLmNsYXNzKCdzaW11bGF0aW9uJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHVwUG9wdWxhdGlvbiA9IChzaXplKSA9PiB7XG4gICAgICBwb3B1bGF0aW9uWzBdID0gbmV3IFBlcnNvbih7XG4gICAgICAgIHg6IHAucmFuZG9tKFBlcnNvbi5kZWZhdWx0UmFkaXVzLCBwLndpZHRoIC0gUGVyc29uLmRlZmF1bHRSYWRpdXMpLFxuICAgICAgICB5OiBwLnJhbmRvbShQZXJzb24uZGVmYXVsdFJhZGl1cywgcC5oZWlnaHQgLSBQZXJzb24uZGVmYXVsdFJhZGl1cyksXG4gICAgICAgIHJhZGl1czogMTAsXG4gICAgICAgIHN0YXRlOiBEaXNlYXNlU3RhdGUuSU5GRUNURUQsXG4gICAgICAgIHA1OiBwLFxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRpc3RpY3MuaW5mZWN0ZWQgKz0gMTtcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaXplOyBpICs9IDEpIHtcbiAgICAgICAgcG9wdWxhdGlvbltpXSA9IG5ldyBQZXJzb24oe1xuICAgICAgICAgIHg6IHAucmFuZG9tKFBlcnNvbi5kZWZhdWx0UmFkaXVzLCBwLndpZHRoIC0gUGVyc29uLmRlZmF1bHRSYWRpdXMpLFxuICAgICAgICAgIHk6IHAucmFuZG9tKFBlcnNvbi5kZWZhdWx0UmFkaXVzLCBwLmhlaWdodCAtIFBlcnNvbi5kZWZhdWx0UmFkaXVzKSxcbiAgICAgICAgICByYWRpdXM6IDEwLFxuICAgICAgICAgIHN0YXRlOiBEaXNlYXNlU3RhdGUuVU5BRkZFQ1RFRCxcbiAgICAgICAgICBwNTogcCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RhdGlzdGljcy51bmFmZmVjdGVkICs9IDE7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUludGVyYWN0aW9ucyA9IChwZXJzb24pID0+IHtcbiAgICAgIHBvcHVsYXRpb24uZm9yRWFjaCgob3RoZXIpID0+IHtcbiAgICAgICAgaWYgKG90aGVyID09PSBwZXJzb24pIHJldHVybjtcbiAgICAgICAgaWYgKHBlcnNvbi5zdGF0ZSA9PT0gRGlzZWFzZVN0YXRlLkZBVEFMIHx8IG90aGVyLnN0YXRlID09PSBEaXNlYXNlU3RhdGUuRkFUQUwpIHJldHVybjtcblxuICAgICAgICBpZiAoY2hlY2tDb2xsaXNpb24ocGVyc29uLCBvdGhlcikpIHtcbiAgICAgICAgICBjaGFuZ2VEaXJlY3Rpb25zKHBlcnNvbiwgb3RoZXIpO1xuXG4gICAgICAgICAgaWYgKHBlcnNvbi5zdGF0ZSA9PT0gb3RoZXIuc3RhdGUpIHJldHVybjtcbiAgICAgICAgICBpZiAocGVyc29uLnN0YXRlID09PSBEaXNlYXNlU3RhdGUuQ1VSRUQgfHwgb3RoZXIuc3RhdGUgPT09IERpc2Vhc2VTdGF0ZS5DVVJFRCkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKHBlcnNvbi5pbmZlY3QocC5yYW5kb20oMCwgMSkgPiBtb3J0YWxpdHlSYXRlKSkge1xuICAgICAgICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCArPSAxO1xuICAgICAgICAgICAgc3RhdGlzdGljcy51bmFmZmVjdGVkIC09IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG90aGVyLmluZmVjdChwLnJhbmRvbSgwLCAxKSA+IG1vcnRhbGl0eVJhdGUpKSB7XG4gICAgICAgICAgICBzdGF0aXN0aWNzLmluZmVjdGVkICs9IDE7XG4gICAgICAgICAgICBzdGF0aXN0aWNzLnVuYWZmZWN0ZWQgLT0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IChwZXJzb24pID0+IHtcbiAgICAgIGlmIChwZXJzb24uc3RhdGUgIT09IERpc2Vhc2VTdGF0ZS5JTkZFQ1RFRCkgcmV0dXJuO1xuXG4gICAgICBpZiAocGVyc29uLmluZmVjdGVkVGltZSA+IHJlY292ZXJ5VGltZSAvIDIgJiYgIXBlcnNvbi53aWxsU3Vydml2ZSkge1xuICAgICAgICBwZXJzb24uc3RhdGUgPSBEaXNlYXNlU3RhdGUuRkFUQUw7XG4gICAgICAgIHN0YXRpc3RpY3MuZmF0YWwgKz0gMTtcbiAgICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCAtPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChwZXJzb24uaW5mZWN0ZWRUaW1lID49IHJlY292ZXJ5VGltZSkge1xuICAgICAgICBwZXJzb24uc3RhdGUgPSBEaXNlYXNlU3RhdGUuQ1VSRUQ7XG4gICAgICAgIHN0YXRpc3RpY3MuY3VyZWQgKz0gMTtcbiAgICAgICAgc3RhdGlzdGljcy5pbmZlY3RlZCAtPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBlcnNvbi5pbmZlY3RlZFRpbWUgKz0gMTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgIHBvcHVsYXRpb24gPSBbXTtcbiAgICAgIHN0YXRpc3RpY3MucmVzZXQoKTtcbiAgICAgIHNldENvdW50ZXJzKHN0YXRpc3RpY3MuY291bnRlcnMoKSk7XG4gICAgICBzZXRUaW1lbGluZXMoc3RhdGlzdGljcy50aW1lbGluZXMoKSk7XG4gICAgICBzZXRTaG93UmVwbGF5KGZhbHNlKTtcbiAgICAgIHNldHVwUG9wdWxhdGlvbihwb3B1bGF0aW9uU2l6ZSk7XG4gICAgICBwLmZyYW1lQ291bnQgPSAtMTtcbiAgICAgIHAubG9vcCgpO1xuICAgIH07XG5cbiAgICBwLnNldHVwID0gKCkgPT4ge1xuICAgICAgc2V0dXBDYW52YXMoNjQwLCA0ODApO1xuICAgICAgaW5pdGlhbGl6ZSgpO1xuICAgICAgc2V0SGFuZGxlUmVwbGF5KCgpID0+IGluaXRpYWxpemUpO1xuICAgIH07XG5cbiAgICBwLmRyYXcgPSAoKSA9PiB7XG4gICAgICBpZiAocC5mcmFtZUNvdW50ID09PSAxNjAwKSB7XG4gICAgICAgIHAubm9Mb29wKCk7XG4gICAgICAgIHNldFNob3dSZXBsYXkodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHAuYmFja2dyb3VuZCgnd2hpdGUnKTtcblxuICAgICAgcG9wdWxhdGlvbi5mb3JFYWNoKChwZXJzb24pID0+IHtcbiAgICAgICAgdXBkYXRlU3RhdGUocGVyc29uKTtcbiAgICAgICAgcGVyc29uLm1vdmUoKTtcbiAgICAgICAgaGFuZGxlSW50ZXJhY3Rpb25zKHBlcnNvbik7XG4gICAgICAgIHBlcnNvbi5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgICBzdGF0aXN0aWNzLnJlY29yZFRpbWVsaW5lcygpO1xuXG4gICAgICBpZiAocC5mcmFtZUNvdW50ICUgMiA9PT0gMCkge1xuICAgICAgICBzZXRDb3VudGVycyhzdGF0aXN0aWNzLmNvdW50ZXJzKCkpO1xuICAgICAgICBzZXRUaW1lbGluZXMoc3RhdGlzdGljcy50aW1lbGluZXMoKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHAgPSBuZXcgcDUoc2tldGNoLCBjb250YWluZXJSZWYuY3VycmVudCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q291bnRlcnMgY291bnRlcnM9e2NvdW50ZXJzfSAvPlxuICAgICAgPEdyYXBoIHdpZHRoPXszMDB9IGhlaWdodD17NjB9IHRpbWVsaW5lcz17dGltZWxpbmVzfSBwb3B1bGF0aW9uU2l6ZT17cG9wdWxhdGlvblNpemV9IC8+XG5cbiAgICAgIDxkaXYgaWQ9XCJpbmZlY3Rpb25cIiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXtzaG93UmVwbGF5ICYmICdvdmVybGF5J30gc3R5bGU9e3sgbWF4V2lkdGg6IDY0MCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgIDxSZXBsYXkgc2hvdz17c2hvd1JlcGxheX0gb25DbGljaz17aGFuZGxlUmVwbGF5fSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5vdmVybGF5IGNhbnZhcyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkluZmVjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHBvcHVsYXRpb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHJlY292ZXJ5VGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbW9ydGFsaXR5UmF0ZTogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbkluZmVjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlY292ZXJ5VGltZTogNTAwLFxuICBtb3J0YWxpdHlSYXRlOiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mZWN0aW9uO1xuIl19 */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/no_restrictions/Infection.js */"));
};

Infection.propTypes = {
  populationSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  recoveryTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  mortalityRate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
Infection.defaultProps = {
  recoveryTime: 500,
  mortalityRate: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Infection);

/***/ })

})
//# sourceMappingURL=1.6c9f3a25a74504a45484.hot-update.js.map