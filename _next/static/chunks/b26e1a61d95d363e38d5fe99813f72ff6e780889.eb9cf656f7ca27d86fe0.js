(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"2mvg":function(t,e,a){"use strict";var s=a("wx14"),n=a("zLVn"),r=a("TSYQ"),i=a.n(r),o=a("q1tI"),c=a.n(o),u=a("vUet"),l=c.a.forwardRef((function(t,e){var a=t.bsPrefix,r=t.className,o=t.fluid,l=t.rounded,d=t.roundedCircle,g=t.thumbnail,b=Object(n.a)(t,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(u.a)(a,"img");var f=i()(o&&a+"-fluid",l&&"rounded",d&&"rounded-circle",g&&a+"-thumbnail");return c.a.createElement("img",Object(s.a)({ref:e},b,{className:i()(r,f)}))}));l.displayName="Image",l.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},e.a=l},"2qu3":function(t,e,a){"use strict";var s=a("oI91"),n=a("/GRZ"),r=a("i2R6");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function(t,e){if(!t)return;if("string"===typeof t)return u(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(t,e)}(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var s=0,n=function(){};return{s:n,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,o=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return i=t.done,t},e:function(t){o=!0,r=t},f:function(){try{i||null==a.return||a.return()}finally{if(o)throw r}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}e.__esModule=!0,e.default=void 0;var l,d=(l=a("q1tI"))&&l.__esModule?l:{default:l},g=a("8L3h"),b=a("jwwS");var f=[],p=[],h=!1;function v(t){var e=t(),a={loading:!0,loaded:null,error:null};return a.promise=e.then((function(t){return a.loading=!1,a.loaded=t,t})).catch((function(t){throw a.loading=!1,a.error=t,t})),a}function m(t){var e={loading:!1,loaded:{},error:null},a=[];try{Object.keys(t).forEach((function(s){var n=v(t[s]);n.loading?e.loading=!0:(e.loaded[s]=n.loaded,e.error=n.error),a.push(n.promise),n.promise.then((function(t){e.loaded[s]=t})).catch((function(t){e.error=t}))}))}catch(s){e.error=s}return e.promise=Promise.all(a).then((function(t){return e.loading=!1,t})).catch((function(t){throw e.loading=!1,t})),e}function y(t,e){return d.default.createElement(function(t){return t&&t.__esModule?t.default:t}(t),e)}function O(t,e){var a=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},e),s=null;function n(){if(!s){var e=new _(t,a);s={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return s.promise()}if(!h&&"function"===typeof a.webpack){var r=a.webpack();p.push((function(t){var e,a=c(r);try{for(a.s();!(e=a.n()).done;){var s=e.value;if(-1!==t.indexOf(s))return n()}}catch(i){a.e(i)}finally{a.f()}}))}var i=function(t,e){n();var r=d.default.useContext(b.LoadableContext),i=(0,g.useSubscription)(s);return d.default.useImperativeHandle(e,(function(){return{retry:s.retry}}),[]),r&&Array.isArray(a.modules)&&a.modules.forEach((function(t){r(t)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(a.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:s.retry}):i.loaded?a.render(i.loaded,t):null}),[t,i])};return i.preload=function(){return n()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var _=function(){function t(e,a){n(this,t),this._loadFn=e,this._opts=a,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return r(t,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,a=this._opts;e.loading&&("number"===typeof a.delay&&(0===a.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){t._update({pastDelay:!0})}),a.delay)),"number"===typeof a.timeout&&(this._timeout=setTimeout((function(){t._update({timedOut:!0})}),a.timeout))),this._res.promise.then((function(){t._update({}),t._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=o(o({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}]),t}();function w(t){return O(v,t)}function j(t,e){for(var a=[];t.length;){var s=t.pop();a.push(s(e))}return Promise.all(a).then((function(){if(t.length)return j(t,e)}))}w.Map=function(t){if("function"!==typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return O(m,t)},w.preloadAll=function(){return new Promise((function(t,e){j(f).then(t,e)}))},w.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var a=function(){return h=!0,e()};j(p,t).then(a,a)}))},window.__NEXT_PRELOADREADY=w.preloadReady;var C=w;e.default=C},"3Z9Z":function(t,e,a){"use strict";var s=a("wx14"),n=a("zLVn"),r=a("TSYQ"),i=a.n(r),o=a("q1tI"),c=a.n(o),u=a("vUet"),l=c.a.forwardRef((function(t,e){var a=t.bsPrefix,r=t.noGutters,o=t.as,l=void 0===o?"div":o,d=t.className,g=Object(n.a)(t,["bsPrefix","noGutters","as","className"]),b=Object(u.a)(a,"row");return c.a.createElement(l,Object(s.a)({ref:e},g,{className:i()(d,b,r&&"no-gutters")}))}));l.displayName="Row",l.defaultProps={noGutters:!1},e.a=l},"HaE+":function(t,e,a){"use strict";function s(t,e,a,s,n,r,i){try{var o=t[r](i),c=o.value}catch(u){return void a(u)}o.done?e(c):Promise.resolve(c).then(s,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var i=t.apply(e,a);function o(t){s(i,n,r,o,c,"next",t)}function c(t){s(i,n,r,o,c,"throw",t)}o(void 0)}))}}a.d(e,"a",(function(){return n}))},JI6e:function(t,e,a){"use strict";var s=a("wx14"),n=a("zLVn"),r=a("TSYQ"),i=a.n(r),o=a("q1tI"),c=a.n(o),u=a("vUet"),l=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(t,e){var a=t.bsPrefix,r=t.className,o=t.as,d=void 0===o?"div":o,g=Object(n.a)(t,["bsPrefix","className","as"]),b=Object(u.a)(a,"col"),f=[],p=[];return l.forEach((function(t){var e,a,s,n=g[t];if(delete g[t],null!=n&&"object"===typeof n){var r=n.span;e=void 0===r||r,a=n.offset,s=n.order}else e=n;var i="xs"!==t?"-"+t:"";null!=e&&f.push(!0===e?""+b+i:""+b+i+"-"+e),null!=s&&p.push("order"+i+"-"+s),null!=a&&p.push("offset"+i+"-"+a)})),f.length||f.push(b),c.a.createElement(d,Object(s.a)({},g,{ref:e,className:i.a.apply(void 0,[r].concat(f,p))}))}));d.displayName="Col",e.a=d},NjCe:function(t,e,a){"use strict";var s=a("nKUr"),n=a("2mvg"),r=function(t){var e=t.src;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(n.a,{src:e,fluid:!0})})},i={active_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/ActiveCases.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/ActiveCases.svg"},historical_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/HistoricalCases.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/HistoricalCases.svg"},historical_hospitalized_intensive_care_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/HistoricalHospitalizedIntensiveCareCases.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/HistoricalHospitalizedIntensiveCareCases.svg"},date_tests_positivity:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/DateTestsPositivity.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/DateTestsPositivity.svg"},date_cases_age:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/DateCasesAge.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/DateCasesAge.svg"},date_vaccination_timeline:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/DateVaccinationTimeline.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/DateVaccinationTimeline.svg"},weekly_vaccination_timeline:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyVaccinationTimeline.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyVaccinationTimeline.svg"},week_cases_age:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeekCasesAge.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeekCasesAge.svg"},weekly_14_days_forecast:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/Weekly14DaysForecast.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/Weekly14DaysForecast.svg"},weekly_antigen_tests_positivity:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyAntigenTestsPositivity.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyAntigenTestsPositivity.svg"},weekly_pcr_tests_positivity:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyPCRTestsPositivity.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyPCRTestsPositivity.svg"},weekly_tests_positivity:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyTestsPositivity.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyTestsPositivity.svg"},weekly_hospitalized_intensive_fatal_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyHospitalizedIntensiveCareFatal.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyHospitalizedIntensiveCareFatal.svg"},weekly_infected_cured_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyInfectedCured.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyInfectedCured.svg"},weekly_places_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyPlacesCases.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyPlacesCases.svg"},rolling_biweekly_places_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/RollingBiWeeklyPlacesCases.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/RollingBiWeeklyPlacesCases.svg"},vaccinated_by_age_infected:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/VaccinatedByAgeInfected.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/VaccinatedByAgeInfected.svg"},vaccinated_by_age_hospitalized:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/VaccinatedByAgeHospitalized.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/VaccinatedByAgeHospitalized.svg"},vaccinated_by_age_intensive_care:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/VaccinatedByAgeIntensiveCare.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/VaccinatedByAgeIntensiveCare.svg"},vaccinated_by_age_fatal:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/VaccinatedByAgeFatal.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/VaccinatedByAgeFatal.svg"},vaccinated_by_age_fatal_percentage:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/VaccinatedByAgeFatalPercentage.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/VaccinatedByAgeFatalPercentage.svg"},vaccinated_fatal_percentage:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/VaccinatedFatalPercentage.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/VaccinatedFatalPercentage.svg"},infected_by_age_group:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/InfectedByAgeGroup.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/InfectedByAgeGroup.svg"},fatal_by_age_group:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/FatalByAgeGroup.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/FatalByAgeGroup.svg"},fatal_percentage_by_age_group:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/FatalPercentageByAgeGroup.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/FatalPercentageByAgeGroup.svg"},unvaccinated_fatal_percentage_by_age_group:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/UnvaccinatedFatalPercentageByAgeGroup.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/UnvaccinatedFatalPercentageByAgeGroup.svg"}};e.a=function(t){var e=t.id,a=t.lang,n=i[e][a];return Object(s.jsx)(r,{src:n})}},"T/rR":function(t,e,a){"use strict";var s=a("wx14"),n=a("zLVn"),r=a("TSYQ"),i=a.n(r),o=a("q1tI"),c=a.n(o),u=a("vUet"),l=c.a.forwardRef((function(t,e){var a=t.bsPrefix,r=t.variant,o=t.animation,l=t.size,d=t.children,g=t.as,b=void 0===g?"div":g,f=t.className,p=Object(n.a)(t,["bsPrefix","variant","animation","size","children","as","className"]),h=(a=Object(u.a)(a,"spinner"))+"-"+o;return c.a.createElement(b,Object(s.a)({ref:e},p,{className:i()(f,h,l&&h+"-"+l,r&&"text-"+r)}),d)}));l.displayName="Spinner",e.a=l},Vvt1:function(t,e,a){t.exports=a("a6RD")},a6RD:function(t,e,a){"use strict";var s=a("oI91");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e.__esModule=!0,e.noSSR=c,e.default=function(t,e){var a=i.default,s={loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};t instanceof Promise?s.loader=function(){return t}:"function"===typeof t?s.loader=t:"object"===typeof t&&(s=r(r({},s),t));if(s=r(r({},s),e),"object"===typeof t&&!(t instanceof Promise)&&(t.render&&(s.render=function(e,a){return t.render(a,e)}),t.modules)){a=i.default.Map;var n={},o=t.modules();Object.keys(o).forEach((function(t){var e=o[t];"function"!==typeof e.then?n[t]=e:n[t]=function(){return e.then((function(t){return t.default||t}))}})),s.loader=n}s.loadableGenerated&&delete(s=r(r({},s),s.loadableGenerated)).loadableGenerated;if("boolean"===typeof s.ssr){if(!s.ssr)return delete s.ssr,c(a,s);delete s.ssr}return a(s)};o(a("q1tI"));var i=o(a("2qu3"));function o(t){return t&&t.__esModule?t:{default:t}}function c(t,e){return delete e.webpack,delete e.modules,t(e)}},jwwS:function(t,e,a){"use strict";var s;e.__esModule=!0,e.LoadableContext=void 0;var n=((s=a("q1tI"))&&s.__esModule?s:{default:s}).default.createContext(null);e.LoadableContext=n},kYXx:function(t,e,a){"use strict";var s=a("o0o1"),n=a.n(s),r=a("HaE+"),i=a("nKUr"),o=a("q1tI"),c=a("g4pe"),u=a.n(c),l=a("Vvt1"),d=a.n(l),g=a("9ixD"),b=a("vcXL"),f=a.n(b),p=a("7vrA"),h=a("3Z9Z"),v=a("JI6e"),m=a("T/rR"),y=a("6xyR"),O=a("BIX1"),_=a.n(O),w=a("ds/u"),j=a("NjCe"),C=d()((function(){return Promise.all([a.e(11),a.e(8)]).then(a.bind(null,"CGeP"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["CGeP"]},modules:["../components/CasesMap/CasesMap"]}});e.a=function(){var t=_()(),e=t.t,a=t.lang,s=Object(o.useState)(!0),c=s[0],l=s[1],d=Object(o.useState)({}),b=d[0],O=d[1],I=Object(o.useState)(7),D=I[0],B=I[1];return Object(o.useEffect)((function(){(function(){var t=Object(r.a)(n.a.mark((function t(){var e;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f()("https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/GeoDataset.json");case 3:return e=t.sent,t.t0=O,t.next=7,e.json();case 7:t.t1=t.sent,(0,t.t0)(t.t1),l(!1),t.next=14;break;case 12:t.prev=12,t.t2=t.catch(0);case 14:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(i.jsxs)(w.a,{children:[Object(i.jsx)(u.a,{children:Object(i.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",integrity:"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",crossOrigin:""})}),Object(i.jsx)(g.c,{title:e("map:seo.title"),description:e("map:seo.description"),canonical:e("map:seo.canonical"),additionalMetaTags:[{name:"keywords",content:e("map:seo.keywords")}],openGraph:{title:e("map:seo.title"),description:e("map:seo.description"),images:[{url:"https://coronavirus-bulgaria.org/static/images/open_graph_map.png?v=".concat("l93l5yE0KA1OkxwsAFC_u"),width:1200,height:630,alt:e("map:seo.description")}]}}),Object(i.jsxs)(p.a,{fluid:!0,children:[Object(i.jsx)("div",{className:"d-sm-flex align-items-center justify-content-between my-4",children:Object(i.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:e("map:page_title")})}),Object(i.jsx)(h.a,{className:"mt-3",children:Object(i.jsx)(v.a,{className:"mb-4",style:{height:"500px"},children:c?Object(i.jsx)(m.a,{animation:"border",variant:"primary"}):Object(i.jsx)(C,{data:b,zoom:D,whenReady:function(){document.documentElement.clientWidth<=768&&B(6)},zoomSnap:.5})})}),Object(i.jsxs)(h.a,{children:[Object(i.jsx)(v.a,{md:6,className:"mb-4",children:Object(i.jsxs)(y.a,{className:"shadow h-100",children:[Object(i.jsx)(y.a.Header,{className:"py-3 d-flex flex-row align-items-center justify-content-between",children:Object(i.jsx)("h6",{className:"m-0 font-weight-bold text-primary",children:e("map:charts.weekly_places_cases.title")})}),Object(i.jsx)(y.a.Body,{children:Object(i.jsx)(j.a,{id:"weekly_places_cases",lang:a})})]})}),Object(i.jsx)(v.a,{md:6,className:"mb-4",children:Object(i.jsxs)(y.a,{className:"shadow h-100",children:[Object(i.jsx)(y.a.Header,{className:"py-3 d-flex flex-row align-items-center justify-content-between",children:Object(i.jsx)("h6",{className:"m-0 font-weight-bold text-primary",children:e("map:charts.rolling_biweekly_places_cases.title")})}),Object(i.jsx)(y.a.Body,{children:Object(i.jsx)(j.a,{id:"rolling_biweekly_places_cases",lang:a})})]})})]})]})]})}},o0o1:function(t,e,a){t.exports=a("ls82")},vcXL:function(t,e,a){"use strict";var s=self.fetch.bind(self);t.exports=s,t.exports.default=t.exports}}]);