(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"2FT4":function(e,t,a){"use strict";var r=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.i18nKey,a=e.values,r=e.components,n=(0,i.default)().t;return(0,c.useMemo)((function(){var e=n(t,a);return r&&0!==r.length?u(e,r):e}),[t,a,r])};var c=n(a("q1tI")),s=r(a("J4zp")),i=r(a("BIX1")),o=c.default.createElement,l=/<(\d+)>(.*?)<\/\1>|<(\d+)\/>/,d=/(?:\r\n|\r|\n)/g;function h(e){if(!e.length)return[];var t=e.slice(0,4),a=(0,s.default)(t,4),r=a[0],n=a[1],c=a[2],i=a[3];return[[parseInt(r||c),n||"",i]].concat(h(e.slice(4,e.length)))}function u(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],a=e.replace(d,"").split(l);if(1===a.length)return e;var r=[],n=a.shift();return n&&r.push(n),h(a).forEach((function(e,a){var n=(0,s.default)(e,3),i=n[0],l=n[1],d=n[2],h=t[i]||o(c.Fragment,null);r.push((0,c.cloneElement)(h,{key:a},l?u(l,t):h.props.children)),d&&r.push(d)})),r}},"2mvg":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),s=a.n(c),i=a("q1tI"),o=a.n(i),l=a("vUet"),d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.fluid,d=e.rounded,h=e.roundedCircle,u=e.thumbnail,b=Object(n.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(l.a)(a,"img");var j=s()(i&&a+"-fluid",d&&"rounded",h&&"rounded-circle",u&&a+"-thumbnail");return o.a.createElement("img",Object(r.a)({ref:t},b,{className:s()(c,j)}))}));d.displayName="Image",d.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=d},"3Z9Z":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),s=a.n(c),i=a("q1tI"),o=a.n(i),l=a("vUet"),d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.noGutters,i=e.as,d=void 0===i?"div":i,h=e.className,u=Object(n.a)(e,["bsPrefix","noGutters","as","className"]),b=Object(l.a)(a,"row");return o.a.createElement(d,Object(r.a)({ref:t},u,{className:s()(h,b,c&&"no-gutters")}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"5wGq":function(e,t,a){"use strict";var r=a("YdCC"),n=a("wx14"),c=a("zLVn"),s=a("TSYQ"),i=a.n(s),o=a("17x9"),l=a.n(o),d=a("q1tI"),h=a.n(d),u=a("2mvg"),b={bsPrefix:l.a.string,fluid:l.a.bool,rounded:l.a.bool,roundedCircle:l.a.bool,thumbnail:l.a.bool},j=h.a.forwardRef((function(e,t){var a=e.className,r=Object(c.a)(e,["className"]);return h.a.createElement(u.a,Object(n.a)({ref:t},r,{className:i()(a,"figure-img")}))}));j.displayName="FigureImage",j.propTypes=b,j.defaultProps={fluid:!0};var f=j,w=a("kEHC"),m=Object(r.a)("figure",{Component:"figure"});m.Image=f,m.Caption=w.a;t.a=m},"6+DC":function(e,t,a){"use strict";var r=a("nKUr"),n=a("MX0m"),c=a.n(n),s=a("6xyR"),i=a("DZHF");t.a=function(e){var t=e.anchor,a=e.title,n=e.children;return Object(r.jsxs)(s.a,{className:"shadow mb-4 collapsible-card",children:[Object(r.jsx)(i.a.Toggle,{as:s.a.Header,eventKey:t,className:"d-block py-3","data-toggle":"collapse","aria-expanded":"true",children:Object(r.jsx)("h6",{className:"jsx-3719953696 m-0 font-weight-bold text-primary",children:a})}),Object(r.jsx)(i.a.Collapse,{eventKey:t,children:Object(r.jsx)(s.a.Body,{children:n})}),Object(r.jsx)(c.a,{id:"3719953696",children:[".collapsible-card .card-header{cursor:pointer;}"]})]})}},"6xyR":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),s=a.n(c),i=a("q1tI"),o=a.n(i),l=a("vUet"),d=a("YdCC"),h=a("U1MP"),u=a("Wzyw"),b=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.variant,d=e.as,h=void 0===d?"img":d,u=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(l.a)(a,"card-img");return o.a.createElement(h,Object(r.a)({ref:t,className:s()(i?b+"-"+i:b,c)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var j=b,f=Object(h.a)("h5"),w=Object(h.a)("h6"),m=Object(d.a)("card-body"),p=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,d=e.bg,h=e.text,b=e.border,j=e.body,f=e.children,w=e.as,p=void 0===w?"div":w,O=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(l.a)(a,"card"),x=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return o.a.createElement(u.a.Provider,{value:x},o.a.createElement(p,Object(r.a)({ref:t},O,{className:s()(c,v,d&&"bg-"+d,h&&"text-"+h,b&&"border-"+b)}),j?o.a.createElement(m,null,f):f))}));p.displayName="Card",p.defaultProps={body:!1},p.Img=j,p.Title=Object(d.a)("card-title",{Component:f}),p.Subtitle=Object(d.a)("card-subtitle",{Component:w}),p.Body=m,p.Link=Object(d.a)("card-link",{Component:"a"}),p.Text=Object(d.a)("card-text",{Component:"p"}),p.Header=Object(d.a)("card-header"),p.Footer=Object(d.a)("card-footer"),p.ImgOverlay=Object(d.a)("card-img-overlay");t.a=p},DZHF:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),s=a.n(c),i=a("q1tI"),o=a.n(i),l=a("JCAc"),d=a("vUet"),h=a("ILyh"),u=o.a.createContext(null);var b=o.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"button":a,s=e.children,l=e.eventKey,d=e.onClick,b=Object(n.a)(e,["as","children","eventKey","onClick"]),j=function(e,t){var a=Object(i.useContext)(u),r=Object(i.useContext)(h.a);return function(n){r(e===a?null:e,n),t&&t(n)}}(l,d);return o.a.createElement(c,Object(r.a)({ref:t,onClick:j},b),s)})),j=a("vYJ8"),f=o.a.forwardRef((function(e,t){var a=e.children,c=e.eventKey,s=Object(n.a)(e,["children","eventKey"]),l=Object(i.useContext)(u);return o.a.createElement(j.a,Object(r.a)({ref:t,in:l===c},s),o.a.createElement("div",null,o.a.Children.only(a)))}));f.displayName="AccordionCollapse";var w=f,m=o.a.forwardRef((function(e,t){var a=Object(l.a)(e,{activeKey:"onSelect"}),c=a.as,i=void 0===c?"div":c,b=a.activeKey,j=a.bsPrefix,f=a.children,w=a.className,m=a.onSelect,p=Object(n.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]);return j=Object(d.a)(j,"accordion"),o.a.createElement(u.Provider,{value:b},o.a.createElement(h.a.Provider,{value:m},o.a.createElement(i,Object(r.a)({ref:t},p,{className:s()(w,j)}),f)))}));m.Toggle=b,m.Collapse=w;t.a=m},JI6e:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),s=a.n(c),i=a("q1tI"),o=a.n(i),l=a("vUet"),d=["xl","lg","md","sm","xs"],h=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.as,h=void 0===i?"div":i,u=Object(n.a)(e,["bsPrefix","className","as"]),b=Object(l.a)(a,"col"),j=[],f=[];return d.forEach((function(e){var t,a,r,n=u[e];if(delete u[e],null!=n&&"object"===typeof n){var c=n.span;t=void 0===c||c,a=n.offset,r=n.order}else t=n;var s="xs"!==e?"-"+e:"";null!=t&&j.push(!0===t?""+b+s:""+b+s+"-"+t),null!=r&&f.push("order"+s+"-"+r),null!=a&&f.push("offset"+s+"-"+a)})),j.length||j.push(b),o.a.createElement(h,Object(r.a)({},u,{ref:t,className:s.a.apply(void 0,[c].concat(j,f))}))}));h.displayName="Col",t.a=h},OZso:function(e,t,a){"use strict";var r=a("rePB"),n=a("nKUr"),c=a("9ixD"),s=a("7vrA"),i=a("3Z9Z"),o=a("JI6e"),l=a("DZHF"),d=a("5wGq"),h=a("2mvg"),u=a("BIX1"),b=a.n(u),j=a("2FT4"),f=a.n(j),w=a("ds/u"),m=a("6+DC"),p=a("zDhD"),O=a("ywjr"),v=a("kEHC");function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(){var e=b()().t;return Object(n.jsxs)(w.a,{children:[Object(n.jsx)(c.c,{title:e("what-we-know:seo.title"),description:e("what-we-know:seo.description"),canonical:e("what-we-know:seo.canonical"),additionalMetaTags:[{name:"keywords",content:e("what-we-know:seo.keywords")}],openGraph:{title:e("what-we-know:seo.title"),description:e("what-we-know:seo.description"),images:[{url:"https://coronavirus-bulgaria.org/static/images/open_graph_faq.png?v=".concat("lH9khJ0fRgr6P6vdFpvPC"),alt:e("what-we-know:seo.title")}]}}),Object(n.jsx)(c.a,g(g({},O.a),{},{url:e("what-we-know:seo.canonical"),title:e("what-we-know:seo.title"),description:e("what-we-know:seo.description"),images:["https://coronavirus-bulgaria.org/static/images/open_graph_faq.png"],datePublished:"2019-04-03T21:00:00.000Z",dateModified:"2019-04-03T21:00:00.000Z"})),Object(n.jsxs)(s.a,{fluid:!0,children:[Object(n.jsx)("div",{className:"d-sm-flex align-items-center justify-content-between my-4",children:Object(n.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:e("what-we-know:page_title")})}),Object(n.jsx)(i.a,{children:Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.a,{bsPrefix:"custom-accordion",children:[Object(n.jsx)(m.a,{anchor:"covid19",title:e("what-we-know:faq.covid19.title"),children:Object(n.jsx)(f.a,{i18nKey:"what-we-know:faq.covid19.text",components:[Object(n.jsx)("strong",{}),Object(n.jsx)("strong",{})]})}),Object(n.jsx)(m.a,{anchor:"source",title:e("what-we-know:faq.source.title"),children:Object(n.jsx)(f.a,{i18nKey:"what-we-know:faq.source.text",components:[Object(n.jsx)("p",{}),Object(n.jsx)("p",{className:"mb-0"})]})}),Object(n.jsxs)(m.a,{anchor:"symptoms",title:e("what-we-know:faq.symptoms.title"),children:[Object(n.jsx)("p",{children:e("what-we-know:faq.symptoms.p1")}),Object(n.jsxs)(i.a,{children:[Object(n.jsx)(o.a,{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(d.a.Image,{fluid:!0,src:"/static/images/covid-19-symptoms-shortness-of-breath.jpg",alt:"".concat(e("what-we-know:faq.symptoms.difficulty_breathing")," / ").concat(e("what-we-know:faq.symptoms.shortness_of_breath")),width:"300",height:"300"}),Object(n.jsx)(v.a,{className:"text-center font-weight-bold",children:"".concat(e("what-we-know:faq.symptoms.difficulty_breathing")," / ").concat(e("what-we-know:faq.symptoms.shortness_of_breath"))})]})}),Object(n.jsx)(o.a,{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(d.a.Image,{fluid:!0,src:"/static/images/covid-19-symptoms-fever.jpg",alt:e("what-we-know:faq.symptoms.high_temperature"),width:"300",height:"300"}),Object(n.jsx)(v.a,{className:"text-center font-weight-bold",children:e("what-we-know:faq.symptoms.high_temperature")})]})}),Object(n.jsx)(o.a,{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(d.a.Image,{fluid:!0,src:"/static/images/covid-19-symptoms-coughing.jpg",alt:e("what-we-know:faq.symptoms.dry_cough"),width:"300",height:"300"}),Object(n.jsx)(v.a,{className:"text-center font-weight-bold",children:e("what-we-know:faq.symptoms.dry_cough")})]})})]}),Object(n.jsx)("p",{children:e("what-we-know:faq.symptoms.p2")}),Object(n.jsx)("p",{className:"mb-0",children:e("what-we-know:faq.symptoms.p3")})]}),Object(n.jsx)(m.a,{anchor:"incubation-period",title:e("what-we-know:faq.incubation_period.title"),children:e("what-we-know:faq.incubation_period.text")}),Object(n.jsx)(m.a,{anchor:"transmission",title:e("what-we-know:faq.transmission.title"),children:Object(n.jsxs)(i.a,{children:[Object(n.jsx)(o.a,{children:e("what-we-know:faq.transmission.text")}),Object(n.jsx)(o.a,{children:Object(n.jsx)(h.a,{fluid:!0,src:"/static/images/covid-19-transmission.jpg",alt:e("what-we-know:faq.transmission.title"),height:"300"})})]})}),Object(n.jsxs)(m.a,{anchor:"treatment",title:e("what-we-know:faq.treatment.title"),children:[Object(n.jsxs)(d.a,{children:[Object(n.jsx)(d.a.Image,{fluid:!0,src:"/static/images/covid-19-prevention-masks.jpg",alt:e("what-we-know:faq.treatment.prevention"),width:"300"}),Object(n.jsx)(v.a,{className:"text-center font-weight-bold",children:e("what-we-know:faq.treatment.prevention")})]}),Object(n.jsx)("br",{}),e("what-we-know:faq.treatment.text")]}),Object(n.jsx)(m.a,{anchor:"sources",title:e("what-we-know:faq.sources.title"),children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(p.a,{href:"http://www.mh.government.bg/bg/novini/aktualno/informaciya-ot-evropejskiya-centr-za-prevenciya-i-/",title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0442 \u0415\u0432\u0440\u043e\u043f\u0435\u0439\u0441\u043a\u0438\u044f \u0446\u0435\u043d\u0442\u044a\u0440 \u0437\u0430 \u043f\u0440\u0435\u0432\u0435\u043d\u0446\u0438\u044f \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b \u043d\u0430 \u0437\u0430\u0431\u043e\u043b\u044f\u0432\u0430\u043d\u0438\u044f\u0442\u0430 \u043e\u0442\u043d\u043e\u0441\u043d\u043e \u043d\u043e\u0432\u0438\u044f \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441 \u2013 2019-nCov",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0442 \u0415\u0432\u0440\u043e\u043f\u0435\u0439\u0441\u043a\u0438\u044f \u0446\u0435\u043d\u0442\u044a\u0440 \u0437\u0430 \u043f\u0440\u0435\u0432\u0435\u043d\u0446\u0438\u044f \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b \u043d\u0430 \u0437\u0430\u0431\u043e\u043b\u044f\u0432\u0430\u043d\u0438\u044f\u0442\u0430 \u043e\u0442\u043d\u043e\u0441\u043d\u043e \u043d\u043e\u0432\u0438\u044f \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441 \u2013 2019-nCov"})}),Object(n.jsx)("li",{children:Object(n.jsx)(p.a,{href:"https://bg.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BD%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F_%D0%BE%D1%82_%D0%BA%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81_(2019-2020)",title:"\u041f\u0430\u043d\u0434\u0435\u043c\u0438\u044f \u043e\u0442 COVID-19",children:"\u041f\u0430\u043d\u0434\u0435\u043c\u0438\u044f \u043e\u0442 COVID-19"})}),Object(n.jsx)("li",{children:Object(n.jsx)(p.a,{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019",title:"Coronavirus disease (COVID-19) outbreak",children:"Coronavirus disease (COVID-19) outbreak"})}),Object(n.jsx)("li",{children:Object(n.jsx)(p.a,{href:"https://www.cdc.gov/coronavirus/2019-ncov/faq.html",title:"Coronavirus Disease 2019 (COVID-19)",children:"Coronavirus Disease 2019 (COVID-19)"})})]})})]})})})]})]})}},U1MP:function(e,t,a){"use strict";var r=a("wx14"),n=a("q1tI"),c=a.n(n),s=a("TSYQ"),i=a.n(s);t.a=function(e){return c.a.forwardRef((function(t,a){return c.a.createElement("div",Object(r.a)({},t,{ref:a,className:i()(t.className,e)}))}))}},kEHC:function(e,t,a){"use strict";var r=a("YdCC"),n=Object(r.a)("figure-caption",{Component:"figcaption"});t.a=n}}]);