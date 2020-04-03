webpackHotUpdate("static/development/pages/why-stay-home.js",{

/***/ "./pages_/why-stay-home.js":
/*!*********************************!*\
  !*** ./pages_/why-stay-home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/useTranslation.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_translate_Trans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-translate/Trans */ "./node_modules/next-translate/Trans.js");
/* harmony import */ var next_translate_Trans__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_Trans__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BaseLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BaseLayout */ "./components/BaseLayout.js");
/* harmony import */ var _components_AlertWithIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AlertWithIcon */ "./components/AlertWithIcon.js");
/* harmony import */ var _components_SimulationCounters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SimulationCounters */ "./components/SimulationCounters.js");
/* harmony import */ var _components_ExternalLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ExternalLink */ "./components/ExternalLink.js");
var _this = undefined,
    _jsxFileName = "/Users/Veselin/Work/virus-tracker/pages_/why-stay-home.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var TransmissionSketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../simulations/sketches/TransmissionSketch */ "./simulations/sketches/TransmissionSketch.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../simulations/sketches/TransmissionSketch */ "./simulations/sketches/TransmissionSketch.js")];
    },
    modules: ['../simulations/sketches/TransmissionSketch']
  }
});
var ImmunitySketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../simulations/sketches/ImmunitySketch */ "./simulations/sketches/ImmunitySketch.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../simulations/sketches/ImmunitySketch */ "./simulations/sketches/ImmunitySketch.js")];
    },
    modules: ['../simulations/sketches/ImmunitySketch']
  }
});
var NoRestrictionsSketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../simulations/sketches/NoRestrictionsSketch */ "./simulations/sketches/NoRestrictionsSketch.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../simulations/sketches/NoRestrictionsSketch */ "./simulations/sketches/NoRestrictionsSketch.js")];
    },
    modules: ['../simulations/sketches/NoRestrictionsSketch']
  }
});
var StayHomeSketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../simulations/sketches/StayHomeSketch */ "./simulations/sketches/StayHomeSketch.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../simulations/sketches/StayHomeSketch */ "./simulations/sketches/StayHomeSketch.js")];
    },
    modules: ['../simulations/sketches/StayHomeSketch']
  }
});

var WhyStayHome = function WhyStayHome() {
  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()(),
      t = _useTranslation.t;

  return __jsx(_components_BaseLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
    title: t('why-stay-home:seo.title'),
    description: t('why-stay-home:seo.description'),
    openGraph: {
      images: [{
        url: "https://coronavirus-bulgaria.org/static/images/open_graph_social_distancing.png?v=".concat("development"),
        width: 1200,
        height: 630,
        alt: t('why-stay-home:seo.title')
      }]
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-sm-flex align-items-center justify-content-between my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "h3 mb-0 text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, t('why-stay-home:page_title'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "shadow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(_components_AlertWithIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "info",
    iconClass: "fa fa-info fa-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, t('why-stay-home:inspiration'), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }), __jsx(_components_ExternalLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: "https://www.washingtonpost.com/graphics/2020/world/corona-simulator/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "Why outbreaks like coronavirus spread exponentially, and how to \"flatten the curve\""), "."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, t('why-stay-home:p1')), __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, t('why-stay-home:legend')), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    variant: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-smile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }), "\xA0", t('why-stay-home:unaffected'))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    variant: "warning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-radiation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }), "\xA0", t('why-stay-home:infected'))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    variant: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-notes-medical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }), "\xA0", t('why-stay-home:cured')))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, t('why-stay-home:p2')), __jsx(TransmissionSketch, {
    className: "mx-auto",
    replayProps: {
      replayText: t('why-stay-home:see_again')
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, t('why-stay-home:p3')), __jsx(ImmunitySketch, {
    className: "mx-auto",
    replayProps: {
      replayText: t('why-stay-home:see_again')
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, t('why-stay-home:p4')), __jsx(NoRestrictionsSketch, {
    className: "mx-auto",
    CountersComponent: _components_SimulationCounters__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, t('why-stay-home:p5')), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, t('why-stay-home:p6')), __jsx(StayHomeSketch, {
    className: "mx-auto",
    stayHomePercentage: 0.5,
    CountersComponent: _components_SimulationCounters__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, t('why-stay-home:p7')), __jsx(StayHomeSketch, {
    className: "mx-auto",
    stayHomePercentage: 0.80,
    CountersComponent: _components_SimulationCounters__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, t('why-stay-home:p8')), __jsx(_components_AlertWithIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "info",
    iconClass: "fa fa-lightbulb fa-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx(next_translate_Trans__WEBPACK_IMPORTED_MODULE_5___default.a, {
    i18nKey: "why-stay-home:conclusion",
    components: [__jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 30
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Figure"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Figure"].Image, {
    fluid: true,
    src: "/static/images/social_distancing.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  })), __jsx(_components_AlertWithIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "warning",
    iconClass: "fa fa-exclamation fa-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx(next_translate_Trans__WEBPACK_IMPORTED_MODULE_5___default.a, {
    i18nKey: "why-stay-home:important",
    components: [__jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 30
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  })), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, t('why-stay-home:stay_safe'))))));
};

/* harmony default export */ __webpack_exports__["default"] = (WhyStayHome);

/***/ })

})
//# sourceMappingURL=why-stay-home.js.f09c5f51a693604fdc4f.hot-update.js.map