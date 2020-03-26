webpackHotUpdate("static/development/pages/map.js",{

/***/ "./pages/map.js":
/*!**********************!*\
  !*** ./pages/map.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_BaseLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BaseLayout */ "./components/BaseLayout.js");
/* harmony import */ var _db_GeoDataset_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../db/GeoDataset.json */ "./db/GeoDataset.json");
var _db_GeoDataset_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/GeoDataset.json */ "./db/GeoDataset.json", 1);
var _jsxFileName = "/Users/Veselin/Work/virus-tracker/pages/map.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var CasesMap = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/CasesMap/CasesMap */ "./components/CasesMap/CasesMap.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/CasesMap/CasesMap */ "./components/CasesMap/CasesMap.js")];
    },
    modules: ['../components/CasesMap/CasesMap']
  }
});

var Map = function Map() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(7),
      zoom = _useState[0],
      setZoom = _useState[1];

  var fixZoom = function fixZoom() {
    if (document.documentElement.clientWidth <= 768) {
      setZoom(6);
    }
  };

  return __jsx(_components_BaseLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",
    integrity: "sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",
    crossOrigin: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
    title: "\u041A\u0430\u0440\u0442\u0430 \u043D\u0430 \u0440\u0430\u0437\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435",
    description: "\u041A\u0430\u0440\u0442\u0430 \u043D\u0430 \u0440\u0430\u0437\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u0430 \u043F\u043E \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
    openGraph: {
      images: [{
        url: "https://coronavirus-bulgaria.org/static/images/open_graph_map.png?v=".concat("development"),
        width: 1200,
        height: 630,
        alt: 'Разпространение на коронавируса по области'
      }]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "d-sm-flex align-items-center justify-content-between my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("h1", {
    className: "h3 mb-0 text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\u041A\u0430\u0440\u0442\u0430 \u043D\u0430 \u0440\u0430\u0437\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    style: {
      height: '400px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(CasesMap, {
    data: _db_GeoDataset_json__WEBPACK_IMPORTED_MODULE_6__,
    zoom: zoom,
    whenReady: fixZoom,
    zoomSnap: 0.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=map.js.ba6f9dd0b01e31c56aa8.hot-update.js.map