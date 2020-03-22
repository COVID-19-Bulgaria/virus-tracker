webpackHotUpdate(4,{

/***/ "./simulations/Replay.js":
/*!*******************************!*\
  !*** ./simulations/Replay.js ***!
  \*******************************/
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
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/simulations/Replay.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Replay = function Replay(_ref) {
  var show = _ref.show,
      onClick = _ref.onClick;

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  return __jsx("div", {
    onClick: onClick,
    onKeyPress: handleKeyPress,
    role: "button",
    tabIndex: 0,
    className: "jsx-2135165066" + " " + "replay ".concat(show ? 'show' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2135165066" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("span", {
    role: "img",
    "aria-label": "replay",
    className: "jsx-2135165066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\uD83D\uDD04")), __jsx("div", {
    className: "jsx-2135165066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\u0421\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u0439 \u043D\u043E\u0432\u0430 \u0441\u0438\u043C\u0443\u043B\u0430\u0446\u0438\u044F"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2135165066",
    __self: this
  }, ".replay.jsx-2135165066{display:none;position:absolute;font-weight:bold;text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:100;cursor:pointer;}.replay.show.jsx-2135165066{display:block;}.replay.jsx-2135165066 .icon.jsx-2135165066{font-size:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WZXNlbGluL1dvcmsvdmlydXMtdHJhY2tlci9zaW11bGF0aW9ucy9SZXBsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JTLEFBRzBCLEFBWUMsQUFJQyxhQWZHLENBWXBCLENBSUEsZ0JBZm1CLGlCQUNDLGtCQUNULFNBQ0QsUUFDd0IseUdBQ3BCLFlBQ0csZUFDakIiLCJmaWxlIjoiL1VzZXJzL1Zlc2VsaW4vV29yay92aXJ1cy10cmFja2VyL3NpbXVsYXRpb25zL1JlcGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFJlcGxheSA9ICh7IHNob3csIG9uQ2xpY2sgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIG9uQ2xpY2soKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2ByZXBsYXkgJHtzaG93ID8gJ3Nob3cnIDogJyd9YH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwicmVwbGF5XCI+8J+UhDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAg0KHRgtCw0YDRgtC40YDQsNC5INC90L7QstCwINGB0LjQvNGD0LvQsNGG0LjRj1xuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5yZXBsYXkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVwbGF5LnNob3cge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlcGxheSAuaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblJlcGxheS5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuUmVwbGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbGljazogKCkgPT4geyB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwbGF5O1xuIl19 */\n/*@ sourceURL=/Users/Veselin/Work/virus-tracker/simulations/Replay.js */"));
};

Replay.propTypes = {
  show: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
Replay.defaultProps = {
  onClick: function onClick() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Replay);

/***/ })

})
//# sourceMappingURL=4.e55be5892932b4061183.hot-update.js.map