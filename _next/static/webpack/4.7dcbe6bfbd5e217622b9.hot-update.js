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
    width: width,
    height: height,
    viewBox: "0 0 ".concat(width, " ").concat(height),
    style: {
      maxWidth: width
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1131905952", [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color]]]) + " " + "graph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("g", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1131905952", [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("rect", {
    width: width,
    height: height,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1131905952", [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color]]]) + " " + "background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("path", {
    d: generatePath(timelines.infectedTimeline),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1131905952", [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color]]]) + " " + "infected",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("path", {
    d: generateInversePath(timelines.unaffectedTimeline),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1131905952", [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color]]]) + " " + "unaffected",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("path", {
    d: generateInversePath(timelines.curedTimeline),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1131905952", [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color]]]) + " " + "cured",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1131905952",
    dynamic: [_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, _DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color],
    __self: this
  }, ".graph.__jsx-style-dynamic-selector .background.__jsx-style-dynamic-selector{fill:#eeeeee;}.graph.__jsx-style-dynamic-selector .unaffected.__jsx-style-dynamic-selector{fill:".concat(_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].UNAFFECTED.color, ";}.graph.__jsx-style-dynamic-selector .infected.__jsx-style-dynamic-selector{fill:").concat(_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].INFECTED.color, ";}.graph.__jsx-style-dynamic-selector .cured.__jsx-style-dynamic-selector{fill:").concat(_DiseaseState__WEBPACK_IMPORTED_MODULE_3__["default"].CURED.color, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9HcmFwaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RFMsQUFHMEIsQUFJcUIsQUFJQSxBQUlBLGFBWHBDLHFCQUlBLEFBSUEsQUFJQSIsImZpbGUiOiIvVXNlcnMvVmVzZWxpbi9Xb3JrL3ZpcnVzLXRyYWNrZXIvc2ltdWxhdGlvbnMvR3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IERpc2Vhc2VTdGF0ZSBmcm9tICcuL0Rpc2Vhc2VTdGF0ZSc7XG5cbmNvbnN0IEdyYXBoID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdGltZWxpbmVzLFxuICAgIHBvcHVsYXRpb25TaXplLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZ2VuZXJhdGVQYXRoID0gKGRhdGFzZXQpID0+IHtcbiAgICBjb25zdCBob3Jpem9udGFsU3RlcCA9IHdpZHRoIC8gMTYwMDtcbiAgICBjb25zdCB2ZXJ0aWNhbFN0ZXAgPSBoZWlnaHQgLyBwb3B1bGF0aW9uU2l6ZTtcblxuICAgIGxldCBwYXRoRGF0YSA9IGBNIDAgJHtoZWlnaHR9YDtcblxuICAgIGRhdGFzZXQuZm9yRWFjaCgocmVjb3JkLCBpKSA9PiB7XG4gICAgICBjb25zdCB4ID0gaG9yaXpvbnRhbFN0ZXAgKiBpO1xuICAgICAgY29uc3QgeSA9IGhlaWdodCAtICh2ZXJ0aWNhbFN0ZXAgKiByZWNvcmQpO1xuICAgICAgcGF0aERhdGEgPSBgJHtwYXRoRGF0YX0gTCAke3h9ICR7eX1gO1xuICAgIH0pO1xuXG4gICAgcGF0aERhdGEgPSBgJHtwYXRoRGF0YX0gViAke2hlaWdodH0gTCAwICR7aGVpZ2h0fWA7XG5cbiAgICByZXR1cm4gcGF0aERhdGE7XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVJbnZlcnNlUGF0aCA9IChkYXRhc2V0KSA9PiB7XG4gICAgY29uc3QgaG9yaXpvbnRhbFN0ZXAgPSB3aWR0aCAvIDE2MDA7XG4gICAgY29uc3QgdmVydGljYWxTdGVwID0gaGVpZ2h0IC8gcG9wdWxhdGlvblNpemU7XG5cbiAgICBsZXQgcGF0aERhdGEgPSAnTSAwIDAnO1xuXG4gICAgZGF0YXNldC5mb3JFYWNoKChyZWNvcmQsIGkpID0+IHtcbiAgICAgIGNvbnN0IHggPSBob3Jpem9udGFsU3RlcCAqIGk7XG4gICAgICBjb25zdCB5ID0gdmVydGljYWxTdGVwICogcmVjb3JkO1xuICAgICAgcGF0aERhdGEgPSBgJHtwYXRoRGF0YX0gTCAke3h9ICR7eX1gO1xuICAgIH0pO1xuXG4gICAgcGF0aERhdGEgPSBgJHtwYXRoRGF0YX0gViAwIEwgMCAwYDtcblxuICAgIHJldHVybiBwYXRoRGF0YTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT1cImdyYXBoXCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgdmlld0JveD17YDAgMCAke3dpZHRofSAke2hlaWdodH1gfVxuICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IHdpZHRoIH19XG4gICAgPlxuICAgICAgPGc+XG4gICAgICAgIDxyZWN0IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIiAvPlxuICAgICAgICA8cGF0aCBkPXtnZW5lcmF0ZVBhdGgodGltZWxpbmVzLmluZmVjdGVkVGltZWxpbmUpfSBjbGFzc05hbWU9XCJpbmZlY3RlZFwiIC8+XG4gICAgICAgIDxwYXRoIGQ9e2dlbmVyYXRlSW52ZXJzZVBhdGgodGltZWxpbmVzLnVuYWZmZWN0ZWRUaW1lbGluZSl9IGNsYXNzTmFtZT1cInVuYWZmZWN0ZWRcIiAvPlxuICAgICAgICA8cGF0aCBkPXtnZW5lcmF0ZUludmVyc2VQYXRoKHRpbWVsaW5lcy5jdXJlZFRpbWVsaW5lKX0gY2xhc3NOYW1lPVwiY3VyZWRcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5ncmFwaCAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBmaWxsOiAjZWVlZWVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ncmFwaCAudW5hZmZlY3RlZCB7XG4gICAgICAgICAgICBmaWxsOiAke0Rpc2Vhc2VTdGF0ZS5VTkFGRkVDVEVELmNvbG9yfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZ3JhcGggLmluZmVjdGVkIHtcbiAgICAgICAgICAgIGZpbGw6ICR7RGlzZWFzZVN0YXRlLklORkVDVEVELmNvbG9yfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZ3JhcGggLmN1cmVkIHtcbiAgICAgICAgICAgIGZpbGw6ICR7RGlzZWFzZVN0YXRlLkNVUkVELmNvbG9yfTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuR3JhcGgucHJvcFR5cGVzID0ge1xuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICB0aW1lbGluZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcG9wdWxhdGlvblNpemU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbkdyYXBoLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6IDYwMCxcbiAgaGVpZ2h0OiA2MCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuIl19 */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/Graph.js */")));
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
//# sourceMappingURL=4.7dcbe6bfbd5e217622b9.hot-update.js.map