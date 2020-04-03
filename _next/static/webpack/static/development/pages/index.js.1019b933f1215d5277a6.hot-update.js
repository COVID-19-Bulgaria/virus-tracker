webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var next_translate_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/Link */ "./node_modules/next-translate/Link.js");
/* harmony import */ var next_translate_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/useTranslation.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/Veselin/Work/virus-tracker/components/NavigationLink.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var NavigationLink = function NavigationLink(props) {
  var title = props.title,
      href = props.href,
      icon = props.icon,
      as = props.as;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()(),
      lang = _useTranslation.lang;

  var noLang = lang === 'bg';
  var isActivePage;

  if (noLang) {
    isActivePage = router.pathname === href;
  } else {
    isActivePage = router.pathname === "/".concat(lang).concat(href);
  }

  var element = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(as || next_translate_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    noLang: noLang
  }, __jsx("a", {
    className: "nav-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("i", {
    className: icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, title)));
  return __jsx("li", {
    className: "nav-item ".concat(isActivePage ? 'active' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, element);
};

NavigationLink.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
NavigationLink.defaultProps = {
  as: null
};
/* harmony default export */ __webpack_exports__["default"] = (NavigationLink);

/***/ })

})
//# sourceMappingURL=index.js.1019b933f1215d5277a6.hot-update.js.map