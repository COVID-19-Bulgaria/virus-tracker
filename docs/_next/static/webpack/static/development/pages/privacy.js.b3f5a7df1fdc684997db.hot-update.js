webpackHotUpdate("static/development/pages/privacy.js",{

/***/ "./components/NavigationLink.js":
/*!**************************************!*\
  !*** ./components/NavigationLink.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/components/NavigationLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var assetPrefix = "";

var NavigationLink = function NavigationLink(props) {
  var title = props.title,
      href = props.href,
      icon = props.icon,
      active = props.active;
  return __jsx("li", {
    className: "nav-item ".concat(active ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("i", {
    className: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, title)));
};

NavigationLink.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NavigationLink);

/***/ })

})
//# sourceMappingURL=privacy.js.b3f5a7df1fdc684997db.hot-update.js.map