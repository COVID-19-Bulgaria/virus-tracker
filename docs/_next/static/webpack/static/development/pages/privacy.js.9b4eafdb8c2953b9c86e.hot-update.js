webpackHotUpdate("static/development/pages/privacy.js",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/components/Navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var NavigationLink = function NavigationLink(props) {
  var title = props.title,
      href = props.href,
      icon = props.icon,
      active = props.active;
  return __jsx("li", {
    className: "nav-item ".concat(active ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("i", {
    className: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
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

var Navigation = function Navigation() {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    as: "ul",
    bg: "gradient-primary",
    variant: "dark",
    bsPrefix: "sidebar",
    className: "navbar-nav accordion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    className: "sidebar-brand d-flex align-items-center justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "sidebar-brand-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-medkit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("div", {
    className: "sidebar-brand-text mx-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "COVID-19 BG"))), __jsx("hr", {
    className: "sidebar-divider my-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(NavigationLink, {
    title: "\u041D\u0430\u0447\u0430\u043B\u043E",
    href: "/",
    icon: "fas fa-fw fa-tachometer-alt",
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=privacy.js.9b4eafdb8c2953b9c86e.hot-update.js.map