webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CasesOverview.js":
/*!*************************************!*\
  !*** ./components/CasesOverview.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/useTranslation.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _OverviewCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OverviewCard */ "./components/OverviewCard.js");
var _this = undefined,
    _jsxFileName = "/Users/Veselin/Work/virus-tracker/components/CasesOverview.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var CasesOverview = function CasesOverview(props) {
  var totalsData = props.totalsData,
      dateDiffCasesData = props.dateDiffCasesData;

  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()(),
      t = _useTranslation.t;

  var currentDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD');
  var yesterdayDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'days').format('YYYY-MM-DD');
  var infectedToday = dateDiffCasesData.infected[currentDate].cases;
  var curedToday = dateDiffCasesData.cured[currentDate].cases;
  var fatalToday = dateDiffCasesData.fatal[currentDate].cases; // const hospitalizedToday = dateDiffCasesData.hospitalized[currentDate].cases;
  // const intensiveCareToday = dateDiffCasesData.intensive_care[currentDate].cases;
  // const medicalStaffToday = dateDiffCasesData.medical_staff[currentDate].cases;

  var hospitalizedToday = 0;
  var intensiveCareToday = -10;
  var medicalStaffToday = 0;
  var infectedYesterday = dateDiffCasesData.infected[yesterdayDate].cases;
  var curedYesterday = dateDiffCasesData.cured[yesterdayDate].cases;
  var fatalYesterday = dateDiffCasesData.fatal[yesterdayDate].cases; // const hospitalizedYesterday = dateDiffCasesData.hospitalized[yesterdayDate].cases;
  // const intensiveCareYesterday = dateDiffCasesData.intensive_care[yesterdayDate].cases;
  // const medicalStaffYesterday = dateDiffCasesData.medical_staff[yesterdayDate].cases;

  var hospitalizedYesterday = 0;
  var intensiveCareYesterday = -12;
  var medicalStaffYesterday = 0;

  var calculateDiff = function calculateDiff(casesToday, casesYesterday) {
    return casesYesterday < 0 ? casesToday : casesToday - casesYesterday;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 4,
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_OverviewCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: t('home:charts.infected'),
    value: totalsData.infected,
    today: infectedToday,
    diff: calculateDiff(infectedToday, infectedYesterday),
    icon: "fa-radiation",
    variant: "warning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 4,
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_OverviewCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: t('home:charts.cured'),
    value: totalsData.cured,
    today: curedToday,
    diff: calculateDiff(curedToday, curedYesterday),
    icon: "fa-notes-medical",
    variant: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 4,
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(_OverviewCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: t('home:charts.fatal'),
    value: totalsData.fatal,
    today: fatalToday,
    diff: calculateDiff(fatalToday, fatalYesterday),
    icon: "fa-heart",
    variant: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 4,
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(_OverviewCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: t('home:charts.medical_staff'),
    value: totalsData.medical_staff,
    today: medicalStaffToday,
    diff: calculateDiff(medicalStaffToday, medicalStaffYesterday),
    icon: "fa-user-md",
    variant: "warning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 4,
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(_OverviewCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: t('home:charts.hospitalized'),
    value: totalsData.hospitalized,
    today: hospitalizedToday,
    diff: calculateDiff(hospitalizedToday, hospitalizedYesterday),
    icon: "fa-hospital",
    variant: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 4,
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_OverviewCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: t('home:charts.intensive_care'),
    value: totalsData.intensive_care,
    today: intensiveCareToday,
    diff: calculateDiff(intensiveCareToday, intensiveCareYesterday),
    icon: "fa-procedures",
    variant: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }))));
};

CasesOverview.propTypes = {
  totalsData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    infected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    cured: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    fatal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    hospitalized: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    intensiveCare: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    medicalStaff: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired,
  dateDiffCasesData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    infected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    cured: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    fatal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    hospitalized: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    intensiveCare: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    medicalStaff: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CasesOverview);

/***/ })

})
//# sourceMappingURL=index.js.6957873b5c93896dcc91.hot-update.js.map