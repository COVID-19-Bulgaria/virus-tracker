(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"2mvg":function(t,e,a){"use strict";var s=a("wx14"),n=a("zLVn"),i=a("TSYQ"),c=a.n(i),r=a("q1tI"),o=a.n(r),l=a("vUet"),u=o.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.className,r=t.fluid,u=t.rounded,g=t.roundedCircle,d=t.thumbnail,b=Object(n.a)(t,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(l.a)(a,"img");var v=c()(r&&a+"-fluid",u&&"rounded",g&&"rounded-circle",d&&a+"-thumbnail");return o.a.createElement("img",Object(s.a)({ref:e},b,{className:c()(i,v)}))}));u.displayName="Image",u.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},e.a=u},"3Z9Z":function(t,e,a){"use strict";var s=a("wx14"),n=a("zLVn"),i=a("TSYQ"),c=a.n(i),r=a("q1tI"),o=a.n(r),l=a("vUet"),u=o.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.noGutters,r=t.as,u=void 0===r?"div":r,g=t.className,d=Object(n.a)(t,["bsPrefix","noGutters","as","className"]),b=Object(l.a)(a,"row");return o.a.createElement(u,Object(s.a)({ref:e},d,{className:c()(g,b,i&&"no-gutters")}))}));u.displayName="Row",u.defaultProps={noGutters:!1},e.a=u},"7xGa":function(t,e,a){"use strict";var s,n=a("wx14"),i=a("zLVn"),c=a("TSYQ"),r=a.n(c),o=a("YECM"),l=a("q1tI"),u=a.n(l),g=a("dRu9"),d=a("z+q/"),b=((s={})[g.b]="show",s[g.a]="show",s),v=u.a.forwardRef((function(t,e){var a=t.className,s=t.children,c=Object(i.a)(t,["className","children"]),v=Object(l.useCallback)((function(t){Object(d.a)(t),c.onEnter&&c.onEnter(t)}),[c]);return u.a.createElement(g.e,Object(n.a)({ref:e,addEndListener:o.a},c,{onEnter:v}),(function(t,e){return u.a.cloneElement(s,Object(n.a)({},e,{className:r()("fade",a,s.props.className,b[t])}))}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",e.a=v},JI6e:function(t,e,a){"use strict";var s=a("wx14"),n=a("zLVn"),i=a("TSYQ"),c=a.n(i),r=a("q1tI"),o=a.n(r),l=a("vUet"),u=["xl","lg","md","sm","xs"],g=o.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.className,r=t.as,g=void 0===r?"div":r,d=Object(n.a)(t,["bsPrefix","className","as"]),b=Object(l.a)(a,"col"),v=[],h=[];return u.forEach((function(t){var e,a,s,n=d[t];if(delete d[t],null!=n&&"object"===typeof n){var i=n.span;e=void 0===i||i,a=n.offset,s=n.order}else e=n;var c="xs"!==t?"-"+t:"";null!=e&&v.push(!0===e?""+b+c:""+b+c+"-"+e),null!=s&&h.push("order"+c+"-"+s),null!=a&&h.push("offset"+c+"-"+a)})),v.length||v.push(b),o.a.createElement(g,Object(s.a)({},d,{ref:e,className:c.a.apply(void 0,[i].concat(v,h))}))}));g.displayName="Col",e.a=g},NjCe:function(t,e,a){"use strict";var s=a("nKUr"),n=a("2mvg"),i=function(t){var e=t.src;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(n.a,{src:e,fluid:!0})})},c={active_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/ActiveCases.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/ActiveCases.svg"},historical_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/HistoricalCases.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/HistoricalCases.svg"},historical_hospitalized_intensive_care_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/HistoricalHospitalizedIntensiveCareCases.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/HistoricalHospitalizedIntensiveCareCases.svg"},date_tests_positivity:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/DateTestsPositivity.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/DateTestsPositivity.svg"},date_cases_age:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/DateCasesAge.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/DateCasesAge.svg"},date_vaccination_timeline:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/DateVaccinationTimeline.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/DateVaccinationTimeline.svg"},weekly_vaccination_timeline:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyVaccinationTimeline.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyVaccinationTimeline.svg"},week_cases_age:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeekCasesAge.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeekCasesAge.svg"},weekly_14_days_forecast:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/Weekly14DaysForecast.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/Weekly14DaysForecast.svg"},weekly_antigen_tests_positivity:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyAntigenTestsPositivity.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyAntigenTestsPositivity.svg"},weekly_pcr_tests_positivity:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyPCRTestsPositivity.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyPCRTestsPositivity.svg"},weekly_tests_positivity:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyTestsPositivity.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyTestsPositivity.svg"},weekly_hospitalized_intensive_fatal_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyHospitalizedIntensiveCareFatal.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyHospitalizedIntensiveCareFatal.svg"},weekly_infected_cured_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyInfectedCured.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyInfectedCured.svg"},weekly_places_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyPlacesCases.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyPlacesCases.svg"},rolling_biweekly_places_cases:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/RollingBiWeeklyPlacesCases.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/RollingBiWeeklyPlacesCases.svg"},vaccinated_by_age_infected:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/VaccinatedByAgeInfected.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/VaccinatedByAgeInfected.svg"},vaccinated_by_age_hospitalized:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/VaccinatedByAgeHospitalized.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/VaccinatedByAgeHospitalized.svg"},vaccinated_by_age_intensive_care:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/VaccinatedByAgeIntensiveCare.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/VaccinatedByAgeIntensiveCare.svg"},vaccinated_by_age_fatal:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/VaccinatedByAgeFatal.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/VaccinatedByAgeFatal.svg"},vaccinated_by_age_fatal_percentage:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/VaccinatedByAgeFatalPercentage.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/VaccinatedByAgeFatalPercentage.svg"},vaccinated_fatal_percentage:{bg:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/VaccinatedFatalPercentage.svg",en:"https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/VaccinatedFatalPercentage.svg"}};e.a=function(t){var e=t.id,a=t.lang,n=c[e][a];return Object(s.jsx)(i,{src:n})}},U2eW:function(t,e,a){"use strict";var s=a("nKUr"),n=a("9ixD"),i=a("7vrA"),c=a("3Z9Z"),r=a("JI6e"),o=a("6xyR"),l=a("BIX1"),u=a.n(l),g=a("ds/u"),d=a("NjCe"),b=a("krDl"),v=a("zDhD"),h=a("wHSu");e.a=function(){var t=u()(),e=t.t,a=t.lang;return Object(s.jsxs)(g.a,{children:[Object(s.jsx)(n.c,{title:e("forecast:seo.title"),description:e("forecast:seo.description"),canonical:e("forecast:seo.canonical"),additionalMetaTags:[{name:"keywords",content:e("forecast:seo.keywords")}],openGraph:{title:e("forecast:seo.title"),description:e("forecast:seo.description"),images:[{url:"https://coronavirus-bulgaria.org/static/images/open_graph/".concat(a,"/open_graph_forecast.png?v=").concat("aZIopr8HS8cUANmLfWnyW"),alt:e("forecast:seo.description")}]}}),Object(s.jsxs)(i.a,{fluid:!0,children:[Object(s.jsx)("div",{className:"d-sm-flex align-items-center justify-content-between my-4",children:Object(s.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:e("forecast:page_title")})}),Object(s.jsx)(c.a,{children:Object(s.jsx)(r.a,{className:"mb-4",children:Object(s.jsxs)(o.a,{className:"shadow h-100",children:[Object(s.jsx)(o.a.Header,{className:"py-3 d-flex flex-row align-items-center justify-content-between",children:Object(s.jsx)("h6",{className:"m-0 font-weight-bold text-primary",children:e("forecast:charts.weekly_14_days_forecast.title")})}),Object(s.jsxs)(o.a.Body,{children:[Object(s.jsxs)(b.a,{variant:"info",icon:h.h,children:[e("forecast:charts.weekly_14_days_forecast.info"),Object(s.jsx)("br",{}),Object(s.jsx)(v.a,{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8046206/",title:"COVID-19: Short term prediction model using daily incidence data",children:e("forecast:charts.weekly_14_days_forecast.scientific_paper_1")}),"."]}),Object(s.jsx)(d.a,{id:"weekly_14_days_forecast",lang:a})]})]})})})]})]})}},krDl:function(t,e,a){"use strict";var s=a("rePB"),n=a("Ff2n"),i=a("nKUr"),c=a("wx14"),r=a("zLVn"),o=a("TSYQ"),l=a.n(o),u=a("q1tI"),g=a.n(u),d=a("JCAc"),b=a("ZCiN"),v=a("YdCC"),h=a("U1MP"),p=a("vUet"),m=a("7xGa"),f=a("17x9"),O=a.n(f),y={label:O.a.string.isRequired,onClick:O.a.func},w=g.a.forwardRef((function(t,e){var a=t.label,s=t.onClick,n=t.className,i=Object(r.a)(t,["label","onClick","className"]);return g.a.createElement("button",Object(c.a)({ref:e,type:"button",className:l()("close",n),onClick:s},i),g.a.createElement("span",{"aria-hidden":"true"},"\xd7"),g.a.createElement("span",{className:"sr-only"},a))}));w.displayName="CloseButton",w.propTypes=y,w.defaultProps={label:"Close"};var C=w,j=a("dbZe"),_={show:!0,transition:m.a,closeLabel:"Close alert"},I={show:"onClose"},V=g.a.forwardRef((function(t,e){var a=Object(d.a)(t,I),s=a.bsPrefix,n=a.show,i=a.closeLabel,o=a.className,u=a.children,v=a.variant,h=a.onClose,m=a.dismissible,f=a.transition,O=Object(r.a)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),y=Object(p.a)(s,"alert"),w=Object(b.a)((function(t){h(!1,t)})),j=g.a.createElement("div",Object(c.a)({role:"alert"},f?O:void 0,{ref:e,className:l()(o,y,v&&y+"-"+v,m&&y+"-dismissible")}),m&&g.a.createElement(C,{onClick:w,label:i}),u);return f?g.a.createElement(f,Object(c.a)({unmountOnExit:!0},O,{in:n}),j):n?j:null})),D=Object(h.a)("h4");D.displayName="DivStyledAsH4",V.displayName="Alert",V.defaultProps=_,V.Link=Object(v.a)("alert-link",{Component:j.a}),V.Heading=Object(v.a)("alert-heading",{Component:D});var B=V,x=a("3Z9Z"),k=a("JI6e"),P=a("IP2g");function N(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function E(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?N(Object(a),!0).forEach((function(e){Object(s.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e.a=function(t){var e=t.icon,a=t.children,s=Object(n.a)(t,["icon","children"]);return Object(i.jsx)(B,E(E({},s),{},{children:Object(i.jsxs)(x.a,{children:[Object(i.jsx)(k.a,{xs:{span:"auto"},sm:{span:"auto"},className:"align-self-center",children:Object(i.jsx)(P.a,{icon:e,size:"lg"})}),Object(i.jsx)(k.a,{children:a})]})}))}},zDhD:function(t,e,a){"use strict";var s=a("nKUr"),n=function(t){var e=t.href,a=t.title,n=t.className,i=t.children;return Object(s.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",title:a,className:n,children:i})};n.defaultProps={className:""},e.a=n}}]);