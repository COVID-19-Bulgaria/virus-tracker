webpackHotUpdate(4,{

/***/ "./simulations/Graph.js":
/*!******************************!*\
  !*** ./simulations/Graph.js ***!
  \******************************/
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
/* harmony import */ var _DiseaseState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DiseaseState */ "./simulations/DiseaseState.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/simulations/Graph.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Graph = function Graph(props) {
  var width = props.width,
      height = props.height,
      timelines = props.timelines,
      populationSize = props.populationSize;

  var generatePath = function generatePath(dataset) {
    var horizontalStep = width / 1600;
    var verticalStep = height / populationSize;
    var pathData = "M 0 ".concat(height);
    dataset.forEach(function (record, i) {
      var x = horizontalStep * i;
      var y = height - verticalStep * record;
      pathData = "".concat(pathData, " L ").concat(x, " ").concat(y);
    });
    pathData = "".concat(pathData, " V ").concat(height, " L 0 ").concat(height);
    return pathData;
  };

  var generateInversePath = function generateInversePath(dataset) {
    var horizontalStep = width / 1600;
    var verticalStep = height / populationSize;
    var pathData = 'M 0 0';
    dataset.forEach(function (record, i) {
      var x = horizontalStep * i;
      var y = verticalStep * record;
      pathData = "".concat(pathData, " L ").concat(x, " ").concat(y);
    });
    pathData = "".concat(pathData, " V 0 L 0 0");
    return pathData;
  };

  return __jsx("svg", {
    viewBox: "0 0 ".concat(width, " ").concat(height),
    style: {
      maxWidth: width
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["807023618", [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color]]]) + " " + "graph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("g", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["807023618", [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("rect", {
    width: width,
    height: height,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["807023618", [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color]]]) + " " + "background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("path", {
    d: generatePath(timelines.infectedTimeline),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["807023618", [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color]]]) + " " + "infected",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("path", {
    d: generateInversePath(timelines.unaffectedTimeline),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["807023618", [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color]]]) + " " + "unaffected",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("path", {
    d: generateInversePath(timelines.curedTimeline),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["807023618", [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color]]]) + " " + "cured",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "807023618",
    dynamic: [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color],
    __self: this
  }, ".graph.__jsx-style-dynamic-selector{width:100%;height:auto;}.graph.__jsx-style-dynamic-selector .background.__jsx-style-dynamic-selector{fill:#eeeeee;}.graph.__jsx-style-dynamic-selector .unaffected.__jsx-style-dynamic-selector{fill:".concat(_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, ";}.graph.__jsx-style-dynamic-selector .infected.__jsx-style-dynamic-selector{fill:").concat(_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, ";}.graph.__jsx-style-dynamic-selector .cured.__jsx-style-dynamic-selector{fill:").concat(_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9HcmFwaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRFMsQUFHd0IsQUFLRSxBQUlxQixBQUlBLEFBSUEsV0FoQnRCLEVBS2QsVUFKQSxXQVFBLEFBSUEsQUFJQSIsImZpbGUiOiIvVXNlcnMvVmVzZWxpbi9Xb3JrL3ZpcnVzLXRyYWNrZXIvc2ltdWxhdGlvbnMvR3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IERpc2Vhc2VTdGF0ZSBmcm9tICcuL0Rpc2Vhc2VTdGF0ZSc7XG5cbmNvbnN0IEdyYXBoID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdGltZWxpbmVzLFxuICAgIHBvcHVsYXRpb25TaXplLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZ2VuZXJhdGVQYXRoID0gKGRhdGFzZXQpID0+IHtcbiAgICBjb25zdCBob3Jpem9udGFsU3RlcCA9IHdpZHRoIC8gMTYwMDtcbiAgICBjb25zdCB2ZXJ0aWNhbFN0ZXAgPSBoZWlnaHQgLyBwb3B1bGF0aW9uU2l6ZTtcblxuICAgIGxldCBwYXRoRGF0YSA9IGBNIDAgJHtoZWlnaHR9YDtcblxuICAgIGRhdGFzZXQuZm9yRWFjaCgocmVjb3JkLCBpKSA9PiB7XG4gICAgICBjb25zdCB4ID0gaG9yaXpvbnRhbFN0ZXAgKiBpO1xuICAgICAgY29uc3QgeSA9IGhlaWdodCAtICh2ZXJ0aWNhbFN0ZXAgKiByZWNvcmQpO1xuICAgICAgcGF0aERhdGEgPSBgJHtwYXRoRGF0YX0gTCAke3h9ICR7eX1gO1xuICAgIH0pO1xuXG4gICAgcGF0aERhdGEgPSBgJHtwYXRoRGF0YX0gViAke2hlaWdodH0gTCAwICR7aGVpZ2h0fWA7XG5cbiAgICByZXR1cm4gcGF0aERhdGE7XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVJbnZlcnNlUGF0aCA9IChkYXRhc2V0KSA9PiB7XG4gICAgY29uc3QgaG9yaXpvbnRhbFN0ZXAgPSB3aWR0aCAvIDE2MDA7XG4gICAgY29uc3QgdmVydGljYWxTdGVwID0gaGVpZ2h0IC8gcG9wdWxhdGlvblNpemU7XG5cbiAgICBsZXQgcGF0aERhdGEgPSAnTSAwIDAnO1xuXG4gICAgZGF0YXNldC5mb3JFYWNoKChyZWNvcmQsIGkpID0+IHtcbiAgICAgIGNvbnN0IHggPSBob3Jpem9udGFsU3RlcCAqIGk7XG4gICAgICBjb25zdCB5ID0gdmVydGljYWxTdGVwICogcmVjb3JkO1xuICAgICAgcGF0aERhdGEgPSBgJHtwYXRoRGF0YX0gTCAke3h9ICR7eX1gO1xuICAgIH0pO1xuXG4gICAgcGF0aERhdGEgPSBgJHtwYXRoRGF0YX0gViAwIEwgMCAwYDtcblxuICAgIHJldHVybiBwYXRoRGF0YTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT1cImdyYXBoXCJcbiAgICAgIHZpZXdCb3g9e2AwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YH1cbiAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiB3aWR0aCB9fVxuICAgID5cbiAgICAgIDxnPlxuICAgICAgICA8cmVjdCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCIgLz5cbiAgICAgICAgPHBhdGggZD17Z2VuZXJhdGVQYXRoKHRpbWVsaW5lcy5pbmZlY3RlZFRpbWVsaW5lKX0gY2xhc3NOYW1lPVwiaW5mZWN0ZWRcIiAvPlxuICAgICAgICA8cGF0aCBkPXtnZW5lcmF0ZUludmVyc2VQYXRoKHRpbWVsaW5lcy51bmFmZmVjdGVkVGltZWxpbmUpfSBjbGFzc05hbWU9XCJ1bmFmZmVjdGVkXCIgLz5cbiAgICAgICAgPHBhdGggZD17Z2VuZXJhdGVJbnZlcnNlUGF0aCh0aW1lbGluZXMuY3VyZWRUaW1lbGluZSl9IGNsYXNzTmFtZT1cImN1cmVkXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuZ3JhcGgge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmdyYXBoIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGZpbGw6ICNlZWVlZWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmdyYXBoIC51bmFmZmVjdGVkIHtcbiAgICAgICAgICAgIGZpbGw6ICR7RGlzZWFzZVN0YXRlLlVOQUZGRUNURUQuY29sb3J9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ncmFwaCAuaW5mZWN0ZWQge1xuICAgICAgICAgICAgZmlsbDogJHtEaXNlYXNlU3RhdGUuSU5GRUNURUQuY29sb3J9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ncmFwaCAuY3VyZWQge1xuICAgICAgICAgICAgZmlsbDogJHtEaXNlYXNlU3RhdGUuQ1VSRUQuY29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5HcmFwaC5wcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRpbWVsaW5lczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBwb3B1bGF0aW9uU2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuR3JhcGguZGVmYXVsdFByb3BzID0ge1xuICB3aWR0aDogNjAwLFxuICBoZWlnaHQ6IDYwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iXX0= */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/Graph.js */")));
};

Graph.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  timelines: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  populationSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
Graph.defaultProps = {
  width: 600,
  height: 60
};
/* harmony default export */ __webpack_exports__["default"] = (Graph);

/***/ })

})
//# sourceMappingURL=4.01603cb29e0317251d51.hot-update.js.map