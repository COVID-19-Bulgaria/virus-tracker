(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"2FT4":function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.i18nKey,a=e.values,n=e.components,r=(0,i.default)().t;return(0,c.useMemo)((function(){var e=r(t,a);return n&&0!==n.length?u(e,n):e}),[t,a,n])};var c=r(a("q1tI")),s=n(a("J4zp")),i=n(a("BIX1")),o=c.default.createElement,l=/<(\d+)>(.*?)<\/\1>|<(\d+)\/>/,d=/(?:\r\n|\r|\n)/g;function h(e){if(!e.length)return[];var t=e.slice(0,4),a=(0,s.default)(t,4),n=a[0],r=a[1],c=a[2],i=a[3];return[[parseInt(n||c),r||"",i]].concat(h(e.slice(4,e.length)))}function u(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],a=e.replace(d,"").split(l);if(1===a.length)return e;var n=[],r=a.shift();return r&&n.push(r),h(a).forEach((function(e,a){var r=(0,s.default)(e,3),i=r[0],l=r[1],d=r[2],h=t[i]||o(c.Fragment,null);n.push((0,c.cloneElement)(h,{key:a},l?u(l,t):h.props.children)),d&&n.push(d)})),n}},"2mvg":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),c=a("TSYQ"),s=a.n(c),i=a("q1tI"),o=a.n(i),l=a("vUet"),d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.fluid,d=e.rounded,h=e.roundedCircle,u=e.thumbnail,j=Object(r.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(l.a)(a,"img");var w=s()(i&&a+"-fluid",d&&"rounded",h&&"rounded-circle",u&&a+"-thumbnail");return o.a.createElement("img",Object(n.a)({ref:t},j,{className:s()(c,w)}))}));d.displayName="Image",d.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=d},"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),c=a("TSYQ"),s=a.n(c),i=a("q1tI"),o=a.n(i),l=a("vUet"),d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.noGutters,i=e.as,d=void 0===i?"div":i,h=e.className,u=Object(r.a)(e,["bsPrefix","noGutters","as","className"]),j=Object(l.a)(a,"row");return o.a.createElement(d,Object(n.a)({ref:t},u,{className:s()(h,j,c&&"no-gutters")}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"5wGq":function(e,t,a){"use strict";var n=a("YdCC"),r=a("wx14"),c=a("zLVn"),s=a("TSYQ"),i=a.n(s),o=a("17x9"),l=a.n(o),d=a("q1tI"),h=a.n(d),u=a("2mvg"),j={bsPrefix:l.a.string,fluid:l.a.bool,rounded:l.a.bool,roundedCircle:l.a.bool,thumbnail:l.a.bool},w=h.a.forwardRef((function(e,t){var a=e.className,n=Object(c.a)(e,["className"]);return h.a.createElement(u.a,Object(r.a)({ref:t},n,{className:i()(a,"figure-img")}))}));w.displayName="FigureImage",w.propTypes=j,w.defaultProps={fluid:!0};var f=w,b=a("kEHC"),m=Object(n.a)("figure",{Component:"figure"});m.Image=f,m.Caption=b.a;t.a=m},"6+DC":function(e,t,a){"use strict";var n=a("nKUr"),r=a("MX0m"),c=a.n(r),s=a("6xyR"),i=a("DZHF");t.a=function(e){var t=e.anchor,a=e.title,r=e.children;return Object(n.jsxs)(s.a,{className:"shadow mb-4 collapsible-card",children:[Object(n.jsx)(i.a.Toggle,{as:s.a.Header,eventKey:t,className:"d-block py-3","data-toggle":"collapse","aria-expanded":"true",children:Object(n.jsx)("h6",{className:"jsx-3719953696 m-0 font-weight-bold text-primary",children:a})}),Object(n.jsx)(i.a.Collapse,{eventKey:t,children:Object(n.jsx)(s.a.Body,{children:r})}),Object(n.jsx)(c.a,{id:"3719953696",children:[".collapsible-card .card-header{cursor:pointer;}"]})]})}},DZHF:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),c=a("TSYQ"),s=a.n(c),i=a("q1tI"),o=a.n(i),l=a("JCAc"),d=a("vUet"),h=a("ILyh"),u=o.a.createContext(null);var j=o.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"button":a,s=e.children,l=e.eventKey,d=e.onClick,j=Object(r.a)(e,["as","children","eventKey","onClick"]),w=function(e,t){var a=Object(i.useContext)(u),n=Object(i.useContext)(h.a);return function(r){n(e===a?null:e,r),t&&t(r)}}(l,d);return o.a.createElement(c,Object(n.a)({ref:t,onClick:w},j),s)})),w=a("vYJ8"),f=o.a.forwardRef((function(e,t){var a=e.children,c=e.eventKey,s=Object(r.a)(e,["children","eventKey"]),l=Object(i.useContext)(u);return o.a.createElement(w.a,Object(n.a)({ref:t,in:l===c},s),o.a.createElement("div",null,o.a.Children.only(a)))}));f.displayName="AccordionCollapse";var b=f,m=o.a.forwardRef((function(e,t){var a=Object(l.a)(e,{activeKey:"onSelect"}),c=a.as,i=void 0===c?"div":c,j=a.activeKey,w=a.bsPrefix,f=a.children,b=a.className,m=a.onSelect,p=Object(r.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]);return w=Object(d.a)(w,"accordion"),o.a.createElement(u.Provider,{value:j},o.a.createElement(h.a.Provider,{value:m},o.a.createElement(i,Object(n.a)({ref:t},p,{className:s()(b,w)}),f)))}));m.Toggle=j,m.Collapse=b;t.a=m},JI6e:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),c=a("TSYQ"),s=a.n(c),i=a("q1tI"),o=a.n(i),l=a("vUet"),d=["xl","lg","md","sm","xs"],h=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.as,h=void 0===i?"div":i,u=Object(r.a)(e,["bsPrefix","className","as"]),j=Object(l.a)(a,"col"),w=[],f=[];return d.forEach((function(e){var t,a,n,r=u[e];if(delete u[e],null!=r&&"object"===typeof r){var c=r.span;t=void 0===c||c,a=r.offset,n=r.order}else t=r;var s="xs"!==e?"-"+e:"";null!=t&&w.push(!0===t?""+j+s:""+j+s+"-"+t),null!=n&&f.push("order"+s+"-"+n),null!=a&&f.push("offset"+s+"-"+a)})),w.length||w.push(j),o.a.createElement(h,Object(n.a)({},u,{ref:t,className:s.a.apply(void 0,[c].concat(w,f))}))}));h.displayName="Col",t.a=h},OZso:function(e,t,a){"use strict";var n=a("rePB"),r=a("nKUr"),c=a("9ixD"),s=a("7vrA"),i=a("3Z9Z"),o=a("JI6e"),l=a("DZHF"),d=a("5wGq"),h=a("2mvg"),u=a("BIX1"),j=a.n(u),w=a("2FT4"),f=a.n(w),b=a("ds/u"),m=a("6+DC"),p=a("zDhD"),O=a("ywjr"),v=a("kEHC");function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(){var e=j()(),t=e.t,a=e.lang;return Object(r.jsxs)(b.a,{children:[Object(r.jsx)(c.c,{title:t("what-we-know:seo.title"),description:t("what-we-know:seo.description"),canonical:t("what-we-know:seo.canonical"),additionalMetaTags:[{name:"keywords",content:t("what-we-know:seo.keywords")}],openGraph:{title:t("what-we-know:seo.title"),description:t("what-we-know:seo.description"),images:[{url:"https://coronavirus-bulgaria.org/static/images/open_graph/".concat(a,"/open_graph_what_we_know.png?v=").concat("l93l5yE0KA1OkxwsAFC_u"),alt:t("what-we-know:seo.title")}]}}),Object(r.jsx)(c.a,g(g({},O.a),{},{url:t("what-we-know:seo.canonical"),title:t("what-we-know:seo.title"),description:t("what-we-know:seo.description"),images:["https://coronavirus-bulgaria.org/static/images/open_graph_faq.png"],datePublished:"2019-04-03T21:00:00.000Z",dateModified:"2019-04-03T21:00:00.000Z"})),Object(r.jsxs)(s.a,{fluid:!0,children:[Object(r.jsx)("div",{className:"d-sm-flex align-items-center justify-content-between my-4",children:Object(r.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:t("what-we-know:page_title")})}),Object(r.jsx)(i.a,{children:Object(r.jsx)(o.a,{children:Object(r.jsxs)(l.a,{bsPrefix:"custom-accordion",children:[Object(r.jsx)(m.a,{anchor:"covid19",title:t("what-we-know:faq.covid19.title"),children:Object(r.jsx)(f.a,{i18nKey:"what-we-know:faq.covid19.text",components:[Object(r.jsx)("strong",{}),Object(r.jsx)("strong",{})]})}),Object(r.jsx)(m.a,{anchor:"source",title:t("what-we-know:faq.source.title"),children:Object(r.jsx)(f.a,{i18nKey:"what-we-know:faq.source.text",components:[Object(r.jsx)("p",{}),Object(r.jsx)("p",{className:"mb-0"})]})}),Object(r.jsxs)(m.a,{anchor:"symptoms",title:t("what-we-know:faq.symptoms.title"),children:[Object(r.jsx)("p",{children:t("what-we-know:faq.symptoms.p1")}),Object(r.jsxs)(i.a,{children:[Object(r.jsx)(o.a,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(d.a.Image,{fluid:!0,src:"/static/images/covid-19-symptoms-shortness-of-breath.jpg",alt:"".concat(t("what-we-know:faq.symptoms.difficulty_breathing")," / ").concat(t("what-we-know:faq.symptoms.shortness_of_breath")),width:"300",height:"300"}),Object(r.jsx)(v.a,{className:"text-center font-weight-bold",children:"".concat(t("what-we-know:faq.symptoms.difficulty_breathing")," / ").concat(t("what-we-know:faq.symptoms.shortness_of_breath"))})]})}),Object(r.jsx)(o.a,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(d.a.Image,{fluid:!0,src:"/static/images/covid-19-symptoms-fever.jpg",alt:t("what-we-know:faq.symptoms.high_temperature"),width:"300",height:"300"}),Object(r.jsx)(v.a,{className:"text-center font-weight-bold",children:t("what-we-know:faq.symptoms.high_temperature")})]})}),Object(r.jsx)(o.a,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(d.a.Image,{fluid:!0,src:"/static/images/covid-19-symptoms-coughing.jpg",alt:t("what-we-know:faq.symptoms.dry_cough"),width:"300",height:"300"}),Object(r.jsx)(v.a,{className:"text-center font-weight-bold",children:t("what-we-know:faq.symptoms.dry_cough")})]})})]}),Object(r.jsx)("p",{children:t("what-we-know:faq.symptoms.p2")}),Object(r.jsx)("p",{className:"mb-0",children:t("what-we-know:faq.symptoms.p3")})]}),Object(r.jsx)(m.a,{anchor:"incubation-period",title:t("what-we-know:faq.incubation_period.title"),children:t("what-we-know:faq.incubation_period.text")}),Object(r.jsx)(m.a,{anchor:"transmission",title:t("what-we-know:faq.transmission.title"),children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(o.a,{children:t("what-we-know:faq.transmission.text")}),Object(r.jsx)(o.a,{children:Object(r.jsx)(h.a,{fluid:!0,src:"/static/images/covid-19-transmission.jpg",alt:t("what-we-know:faq.transmission.title"),height:"300"})})]})}),Object(r.jsxs)(m.a,{anchor:"treatment",title:t("what-we-know:faq.treatment.title"),children:[Object(r.jsxs)(d.a,{children:[Object(r.jsx)(d.a.Image,{fluid:!0,src:"/static/images/covid-19-prevention-masks.jpg",alt:t("what-we-know:faq.treatment.prevention"),width:"300"}),Object(r.jsx)(v.a,{className:"text-center font-weight-bold",children:t("what-we-know:faq.treatment.prevention")})]}),Object(r.jsx)("br",{}),t("what-we-know:faq.treatment.text")]}),Object(r.jsx)(m.a,{anchor:"sources",title:t("what-we-know:faq.sources.title"),children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(p.a,{href:"http://www.mh.government.bg/bg/novini/aktualno/informaciya-ot-evropejskiya-centr-za-prevenciya-i-/",title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0442 \u0415\u0432\u0440\u043e\u043f\u0435\u0439\u0441\u043a\u0438\u044f \u0446\u0435\u043d\u0442\u044a\u0440 \u0437\u0430 \u043f\u0440\u0435\u0432\u0435\u043d\u0446\u0438\u044f \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b \u043d\u0430 \u0437\u0430\u0431\u043e\u043b\u044f\u0432\u0430\u043d\u0438\u044f\u0442\u0430 \u043e\u0442\u043d\u043e\u0441\u043d\u043e \u043d\u043e\u0432\u0438\u044f \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441 \u2013 2019-nCov",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0442 \u0415\u0432\u0440\u043e\u043f\u0435\u0439\u0441\u043a\u0438\u044f \u0446\u0435\u043d\u0442\u044a\u0440 \u0437\u0430 \u043f\u0440\u0435\u0432\u0435\u043d\u0446\u0438\u044f \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b \u043d\u0430 \u0437\u0430\u0431\u043e\u043b\u044f\u0432\u0430\u043d\u0438\u044f\u0442\u0430 \u043e\u0442\u043d\u043e\u0441\u043d\u043e \u043d\u043e\u0432\u0438\u044f \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441 \u2013 2019-nCov"})}),Object(r.jsx)("li",{children:Object(r.jsx)(p.a,{href:"https://bg.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BD%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F_%D0%BE%D1%82_%D0%BA%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81_(2019-2020)",title:"\u041f\u0430\u043d\u0434\u0435\u043c\u0438\u044f \u043e\u0442 COVID-19",children:"\u041f\u0430\u043d\u0434\u0435\u043c\u0438\u044f \u043e\u0442 COVID-19"})}),Object(r.jsx)("li",{children:Object(r.jsx)(p.a,{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019",title:"Coronavirus disease (COVID-19) outbreak",children:"Coronavirus disease (COVID-19) outbreak"})}),Object(r.jsx)("li",{children:Object(r.jsx)(p.a,{href:"https://www.cdc.gov/coronavirus/2019-ncov/faq.html",title:"Coronavirus Disease 2019 (COVID-19)",children:"Coronavirus Disease 2019 (COVID-19)"})})]})})]})})})]})]})}},kEHC:function(e,t,a){"use strict";var n=a("YdCC"),r=Object(n.a)("figure-caption",{Component:"figcaption"});t.a=r},zDhD:function(e,t,a){"use strict";var n=a("nKUr"),r=function(e){var t=e.href,a=e.title,r=e.className,c=e.children;return Object(n.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",title:a,className:r,children:c})};r.defaultProps={className:""},t.a=r}}]);