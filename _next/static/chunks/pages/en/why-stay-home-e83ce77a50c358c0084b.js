_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"+ESe":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var s=a("rePB"),n=a("nKUr"),i=a("MA9B"),o=a.n(i),r=(a("q1tI"),a("wT8p")),c=a("7ubu"),l=a("sAXb");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={common:c,"why-stay-home":l};function m(e){return Object(n.jsx)(o.a,{lang:"en",namespaces:d,internals:{defaultLanguage:"bg",isStaticMode:!0},false:!0,children:Object(n.jsx)(r.a,u({},e))})}m=Object.assign(m,u({},r.a)),r.a&&r.a.getInitialProps&&(m.getInitialProps=function(e){return r.a.getInitialProps(u(u({},e),{},{lang:"en"}))})},"2FT4":function(e,t,a){"use strict";var s=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.i18nKey,a=e.values,s=e.components,n=(0,r.default)().t;return(0,i.useMemo)((function(){var e=n(t,a);return s&&0!==s.length?d(e,s):e}),[t,a,s])};var i=n(a("q1tI")),o=s(a("J4zp")),r=s(a("BIX1")),c=i.default.createElement,l=/<(\d+)>(.*?)<\/\1>|<(\d+)\/>/,h=/(?:\r\n|\r|\n)/g;function u(e){if(!e.length)return[];var t=e.slice(0,4),a=(0,o.default)(t,4),s=a[0],n=a[1],i=a[2],r=a[3];return[[parseInt(s||i),n||"",r]].concat(u(e.slice(4,e.length)))}function d(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],a=e.replace(h,"").split(l);if(1===a.length)return e;var s=[],n=a.shift();return n&&s.push(n),u(a).forEach((function(e,a){var n=(0,o.default)(e,3),r=n[0],l=n[1],h=n[2],u=t[r]||c(i.Fragment,null);s.push((0,i.cloneElement)(u,{key:a},l?d(l,t):u.props.children)),h&&s.push(h)})),s}},"3Z9Z":function(e,t,a){"use strict";var s=a("wx14"),n=a("zLVn"),i=a("TSYQ"),o=a.n(i),r=a("q1tI"),c=a.n(r),l=a("vUet"),h=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.noGutters,r=e.as,h=void 0===r?"div":r,u=e.className,d=Object(n.a)(e,["bsPrefix","noGutters","as","className"]),m=Object(l.a)(a,"row");return c.a.createElement(h,Object(s.a)({ref:t},d,{className:o()(u,m,i&&"no-gutters")}))}));h.displayName="Row",h.defaultProps={noGutters:!1},t.a=h},"7ubu":function(e){e.exports=JSON.parse('{"navigation":{"home":"Home","map":"Spread","what-we-know":"What we know","why-stay-home":"Why stay home","about":"About","facebook":"Facebook group"},"date_format":"dd/MM/yyyy HH:mm","footer":{"disclaimer":"This website should not be considered official source of information. The published data represents research efforts.","privacy":"Privacy Policy"}}')},JI6e:function(e,t,a){"use strict";var s=a("wx14"),n=a("zLVn"),i=a("TSYQ"),o=a.n(i),r=a("q1tI"),c=a.n(r),l=a("vUet"),h=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.as,u=void 0===r?"div":r,d=Object(n.a)(e,["bsPrefix","className","as"]),m=Object(l.a)(a,"col"),p=[],f=[];return h.forEach((function(e){var t,a,s,n=d[e];if(delete d[e],null!=n&&"object"===typeof n){var i=n.span;t=void 0===i||i,a=n.offset,s=n.order}else t=n;var o="xs"!==e?"-"+e:"";null!=t&&p.push(!0===t?""+m+o:""+m+o+"-"+t),null!=s&&f.push("order"+o+"-"+s),null!=a&&f.push("offset"+o+"-"+a)})),p.length||p.push(m),c.a.createElement(u,Object(s.a)({},d,{ref:t,className:o.a.apply(void 0,[i].concat(p,f))}))}));u.displayName="Col",t.a=u},mnZO:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/why-stay-home",function(){return a("+ESe")}])},sAXb:function(e){e.exports=JSON.parse('{"page_title":"Why stay home?","seo":{"title":"Why stay home?","description":"A few simulations, which show how important it is to stay home"},"inspiration":"The simulations on this page are inspired by the article:","p1":"In order to understand why it is important to stay home during a state of emergency, we will look at how a hypothetical virus spreads and how the actions or omissions of society would affect this spread. Let\'s start!","legend":"Legend:","unaffected":"Unaffected","infected":"Infected","cured":"Cured","p2":"Hypothetically, we have discovered a new virus that is spread by airborne droplet. For visualization purposes, we will assume that an infected person always infects an uninfected person in the event of contact. This is illustrated in the following animation:","see_again":"See again","p3":"After a while, each infected person recovers. In this way it acquires immunity to the disease and in the event of a subsequent encounter with an infected person cannot be infected:","p4":"The rules are simple, now let\'s examine how our hypothetical contagion will spread to a community of 200 people, of whom 1 is infected and free to move and interact with other people:","p5":"As the histogram shows, we see a sharp increase in the number of infected in a short period of time. Let us assume hypothetically that 100 patients need hospitalization, but the maximum capacity of hospitals is 50. This means that the other 50 people would not receive full medical care.","p6":"We continue our simulation towards reducing the risk of collapse of the healthcare system. We decide to introduce moderate restrictive measures where 50% of the community in the simulation stays home (stationary balls). Let\'s examine how these measures affect the spread of the infection:","p7":"Measures appear to be working and dissemination is slow. However, again, health facilities operate at maximum capacity, which is why we introduce even stricter measures in our simulation and force people to distance themselves socially. The following simulation shows the result of the measures when only 20% of the population contacts:","p8":"We have achieved our goal - the healthcare facilities in our simulation can take on everyone infected at any time and have free capacity for side cases not related to the hypothetical virus.","conclusion":"<1>Conclusion:</1> Social distancing extends the length of time the infection spreads to the population. In this way, the capacity of the healthcare system is not exceeded.","important":"<1>Important:</1> The previous simulations represent a very simplistic model of social processes that occur in real-world conditions. There are many side factors that affect how a true disease such as COVID-19 spreads.","stay_safe":"Be healthy, comply with state measures, and stay home!"}')},wT8p:function(e,t,a){"use strict";var s=a("nKUr"),n=a("Vvt1"),i=a.n(n),o=a("7vrA"),r=a("6xyR"),c=a("65eO"),l=a("YdCC"),h=a("wx14"),u=a("zLVn"),d=a("TSYQ"),m=a.n(d),p=a("17x9"),f=a.n(p),y=a("q1tI"),b=a.n(y),j=a("vUet"),w=b.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.fluid,i=e.rounded,o=e.roundedCircle,r=e.thumbnail,c=Object(u.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(j.a)(a,"img");var l=m()(n&&a+"-fluid",i&&"rounded",o&&"rounded-circle",r&&a+"-thumbnail");return b.a.createElement("img",Object(h.a)({ref:t},c,{className:m()(s,l)}))}));w.displayName="Image",w.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var O=w,x={bsPrefix:f.a.string,fluid:f.a.bool,rounded:f.a.bool,roundedCircle:f.a.bool,thumbnail:f.a.bool},v=b.a.forwardRef((function(e,t){var a=e.className,s=Object(u.a)(e,["className"]);return b.a.createElement(O,Object(h.a)({ref:t},s,{className:m()(a,"figure-img")}))}));v.displayName="FigureImage",v.propTypes=x,v.defaultProps={fluid:!0};var g=v,N=Object(l.a)("figure-caption",{Component:"figcaption"}),P=Object(l.a)("figure",{Component:"figure"});P.Image=g,P.Caption=N;var k=P,_=a("wHSu"),T=a("9ixD"),I=a("BIX1"),S=a.n(I),C=a("2FT4"),E=a.n(C),D=a("ds/u"),R=a("krDl"),A=function(e){var t=e.counters,a=t.unaffected,n=t.infected,i=t.cured;return Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsxs)(c.a,{pill:!0,variant:"secondary",children:[Object(s.jsx)("i",{className:"fas fa-smile"}),"\xa0",a]})," ",Object(s.jsxs)(c.a,{pill:!0,variant:"warning",children:[Object(s.jsx)("i",{className:"fas fa-radiation"}),"\xa0",n]})," ",Object(s.jsxs)(c.a,{pill:!0,variant:"success",children:[Object(s.jsx)("i",{className:"fas fa-notes-medical"}),"\xa0",i]})]})},G=a("zDhD"),H=i()((function(){return Promise.all([a.e(10),a.e(8),a.e(9),a.e(46)]).then(a.bind(null,"VTno"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["VTno"]},modules:["../simulations/sketches/TransmissionSketch"]}}),L=i()((function(){return Promise.all([a.e(10),a.e(8),a.e(9),a.e(43)]).then(a.bind(null,"xiwy"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["xiwy"]},modules:["../simulations/sketches/ImmunitySketch"]}}),q=i()((function(){return Promise.all([a.e(10),a.e(8),a.e(9),a.e(44)]).then(a.bind(null,"RvFn"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["RvFn"]},modules:["../simulations/sketches/NoRestrictionsSketch"]}}),F=i()((function(){return Promise.all([a.e(10),a.e(8),a.e(9),a.e(45)]).then(a.bind(null,"DQ4S"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["DQ4S"]},modules:["../simulations/sketches/StayHomeSketch"]}});t.a=function(){var e=S()().t;return Object(s.jsxs)(D.a,{children:[Object(s.jsx)(T.b,{title:e("why-stay-home:seo.title"),description:e("why-stay-home:seo.description"),openGraph:{images:[{url:"https://coronavirus-bulgaria.org/static/images/open_graph_social_distancing.png?v=".concat("Zu1A-4jDV1-NhOxLG4bs2"),width:1200,height:630,alt:e("why-stay-home:seo.title")}]}}),Object(s.jsxs)(o.a,{fluid:!0,children:[Object(s.jsx)("div",{className:"d-sm-flex align-items-center justify-content-between my-4",children:Object(s.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:e("why-stay-home:page_title")})}),Object(s.jsx)(r.a,{className:"shadow",children:Object(s.jsxs)(r.a.Body,{children:[Object(s.jsxs)(R.a,{variant:"info",icon:_.f,children:[e("why-stay-home:inspiration"),Object(s.jsx)("br",{}),Object(s.jsx)(G.a,{href:"https://www.washingtonpost.com/graphics/2020/world/corona-simulator/",children:'Why outbreaks like coronavirus spread exponentially, and how to "flatten the curve"'}),"."]}),Object(s.jsx)("p",{children:e("why-stay-home:p1")}),Object(s.jsx)("strong",{children:e("why-stay-home:legend")}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsxs)(c.a,{pill:!0,variant:"secondary",children:[Object(s.jsx)("i",{className:"fas fa-smile"}),"\xa0",e("why-stay-home:unaffected")]})}),Object(s.jsx)("li",{children:Object(s.jsxs)(c.a,{pill:!0,variant:"warning",children:[Object(s.jsx)("i",{className:"fas fa-radiation"}),"\xa0",e("why-stay-home:infected")]})}),Object(s.jsx)("li",{children:Object(s.jsxs)(c.a,{pill:!0,variant:"success",children:[Object(s.jsx)("i",{className:"fas fa-notes-medical"}),"\xa0",e("why-stay-home:cured")]})})]}),Object(s.jsx)("p",{children:e("why-stay-home:p2")}),Object(s.jsx)(H,{className:"mx-auto",replayProps:{replayText:e("why-stay-home:see_again")}}),Object(s.jsx)("p",{children:e("why-stay-home:p3")}),Object(s.jsx)(L,{className:"mx-auto",replayProps:{replayText:e("why-stay-home:see_again")}}),Object(s.jsx)("p",{children:e("why-stay-home:p4")}),Object(s.jsx)(q,{className:"mx-auto",CountersComponent:A}),Object(s.jsx)("p",{children:e("why-stay-home:p5")}),Object(s.jsx)("p",{children:e("why-stay-home:p6")}),Object(s.jsx)(F,{className:"mx-auto",stayHomePercentage:.5,CountersComponent:A}),Object(s.jsx)("p",{children:e("why-stay-home:p7")}),Object(s.jsx)(F,{className:"mx-auto",stayHomePercentage:.8,CountersComponent:A}),Object(s.jsx)("p",{children:e("why-stay-home:p8")}),Object(s.jsx)(R.a,{variant:"info",icon:_.h,children:Object(s.jsx)(E.a,{i18nKey:"why-stay-home:conclusion",components:[Object(s.jsx)("b",{})]})}),Object(s.jsx)(k,{children:Object(s.jsx)(k.Image,{fluid:!0,src:"/static/images/social_distancing.svg",alt:"\u0413\u0440\u0430\u0444\u0438\u043a\u0430 \u043d\u0430 \u0435\u0444\u0435\u043a\u0442\u0430 \u043e\u0442 \u0441\u043e\u0446\u0438\u0430\u043b\u043d\u043e \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u0440\u0430\u043d\u0435"})}),Object(s.jsx)(R.a,{variant:"warning",icon:_.a,children:Object(s.jsx)(E.a,{i18nKey:"why-stay-home:important",components:[Object(s.jsx)("b",{})]})}),Object(s.jsx)("p",{children:e("why-stay-home:stay_safe")})]})})]})]})}}},[["mnZO",1,0,7,6,2,3,4,5,14]]]);