webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_translate_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/Link */ "./node_modules/next-translate/Link.js");
/* harmony import */ var next_translate_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/useTranslation.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_country_flag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-country-flag */ "./node_modules/react-country-flag/dist/index.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavigationLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavigationLink */ "./components/NavigationLink.js");
/* harmony import */ var _ExternalLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExternalLink */ "./components/ExternalLink.js");
var _this = undefined,
    _jsxFileName = "/Users/Veselin/Work/virus-tracker/components/Navigation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Navigation = function Navigation() {
  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()(),
      t = _useTranslation.t,
      lang = _useTranslation.lang;

  var noLang = lang === 'bg';
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var langPath = router.pathname.replace(/(en|bg)\/?/gi, '');
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    as: "ul",
    bg: "gradient-primary",
    variant: "dark",
    bsPrefix: "sidebar",
    className: "navbar-nav accordion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    noLang: noLang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "sidebar-brand d-flex align-items-center justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "sidebar-brand-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-medkit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "sidebar-brand-text mx-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "COVID-19 BG"))), __jsx("hr", {
    className: "sidebar-divider my-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: langPath,
    noLang: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(react_country_flag__WEBPACK_IMPORTED_MODULE_4__["default"], {
    countryCode: "BG",
    svg: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }))), "\xA0", __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: langPath,
    lang: "en",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx(react_country_flag__WEBPACK_IMPORTED_MODULE_4__["default"], {
    countryCode: "GB",
    svg: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  })))), __jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: t('common:navigation.home'),
    href: "/",
    icon: "fas fa-fw fa-tachometer-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: t('common:navigation.map'),
    href: "/map",
    icon: "fas fa-fw fa-map-marker-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: t('common:navigation.what-we-know'),
    href: "/what-we-know",
    icon: "fas fa-fw fa-question-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: t('common:navigation.why-stay-home'),
    href: "/why-stay-home",
    icon: "fas fa-fw fa-home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: t('common:navigation.about'),
    href: "/about",
    icon: "fas fa-fw fa-info-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: t('common:navigation.facebook'),
    href: "https://www.facebook.com/groups/covidbulgaria",
    icon: "fas fa-fw fa-facebook",
    as: _ExternalLink__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=index.js.512e3858ac97be1daad8.hot-update.js.map