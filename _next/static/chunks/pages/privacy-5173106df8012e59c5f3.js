_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{"+nYd":function(e,t,a){"use strict";var r=a("nKUr"),c=a("9ixD"),n=a("7vrA"),i=a("3Z9Z"),s=a("JI6e"),o=a("DZHF"),l=a("wx14"),d=a("zLVn"),u=a("TSYQ"),b=a.n(u),p=a("q1tI"),f=a.n(p),v=a("vUet"),j=a("dbZe"),y=f.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,c=e.size,n=e.active,i=e.className,s=e.block,o=e.type,u=e.as,p=Object(d.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(v.a)(a,"btn"),m=b()(i,y,n&&"active",y+"-"+r,s&&y+"-block",c&&y+"-"+c);if(p.href)return f.a.createElement(j.a,Object(l.a)({},p,{as:u,ref:t,className:b()(m,p.disabled&&"disabled")}));t&&(p.ref=t),u||(p.type=o);var h=u||"button";return f.a.createElement(h,Object(l.a)({},p,{className:m}))}));y.displayName="Button",y.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var m=y,h=a("BIX1"),O=a.n(h),x=a("2FT4"),g=a.n(x),w=a("ds/u"),P=a("6+DC"),N=a("zDhD");t.a=function(){var e=O()().t;return Object(r.jsxs)(w.a,{children:[Object(r.jsx)(c.c,{title:e("privacy:seo.title"),description:e("privacy:seo.description"),canonical:e("privacy:seo.canonical"),additionalMetaTags:[{name:"keywords",content:e("privacy:seo.keywords")}],openGraph:{title:e("privacy:seo.title"),description:e("privacy:seo.description"),images:[{url:"https://coronavirus-bulgaria.org/static/images/open_graph_privacy.png?v=".concat("lH9khJ0fRgr6P6vdFpvPC"),alt:e("privacy:seo.description")}]}}),Object(r.jsxs)(n.a,{fluid:!0,children:[Object(r.jsx)("div",{className:"d-sm-flex align-items-center justify-content-between mt-4",children:Object(r.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:e("privacy:page_title")})}),Object(r.jsx)(i.a,{className:"mt-3",children:Object(r.jsxs)(s.a,{children:[Object(r.jsxs)(o.a,{bsPrefix:"custom-accordion",children:[Object(r.jsx)(P.a,{anchor:"policy",title:e("privacy:policy.title"),children:e("privacy:policy.text")}),Object(r.jsx)(P.a,{anchor:"data",title:e("privacy:data.title"),children:e("privacy:data.text")}),Object(r.jsx)(P.a,{anchor:"usage",title:e("privacy:usage.title"),children:e("privacy:usage.text")}),Object(r.jsx)(P.a,{anchor:"cookies",title:e("privacy:cookies.title"),children:e("privacy:cookies.text")}),Object(r.jsxs)(P.a,{anchor:"partners",title:e("privacy:partners.title"),children:[e("privacy:partners.text"),Object(r.jsx)("ul",{children:Object(r.jsxs)("li",{children:["Google Ireland Ltd. - Google Analytics, Google Tag Manager -",Object(r.jsx)(N.a,{href:"https://safety.google/privacy/",title:"Google Services Privacy Policy",children:"https://safety.google/privacy/"})]})})]}),Object(r.jsxs)(P.a,{anchor:"preferences",title:e("privacy:preferences.title"),children:[Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{i18nKey:"privacy:preferences.text",components:[Object(r.jsx)("br",{})]})}),Object(r.jsx)(m,{className:"mt-2",onClick:function(){return klaro.show()},children:e("privacy:preferences.button")})]}),Object(r.jsx)(P.a,{anchor:"changes",title:e("privacy:changes.title"),children:e("privacy:changes.text")})]}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("small",{children:e("privacy:last_updated")})})]})})]})]})}},"2FT4":function(e,t,a){"use strict";var r=a("TqRt"),c=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.i18nKey,a=e.values,r=e.components,c=(0,s.default)().t;return(0,n.useMemo)((function(){var e=c(t,a);return r&&0!==r.length?b(e,r):e}),[t,a,r])};var n=c(a("q1tI")),i=r(a("J4zp")),s=r(a("BIX1")),o=n.default.createElement,l=/<(\d+)>(.*?)<\/\1>|<(\d+)\/>/,d=/(?:\r\n|\r|\n)/g;function u(e){if(!e.length)return[];var t=e.slice(0,4),a=(0,i.default)(t,4),r=a[0],c=a[1],n=a[2],s=a[3];return[[parseInt(r||n),c||"",s]].concat(u(e.slice(4,e.length)))}function b(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],a=e.replace(d,"").split(l);if(1===a.length)return e;var r=[],c=a.shift();return c&&r.push(c),u(a).forEach((function(e,a){var c=(0,i.default)(e,3),s=c[0],l=c[1],d=c[2],u=t[s]||o(n.Fragment,null);r.push((0,n.cloneElement)(u,{key:a},l?b(l,t):u.props.children)),d&&r.push(d)})),r}},"3Z9Z":function(e,t,a){"use strict";var r=a("wx14"),c=a("zLVn"),n=a("TSYQ"),i=a.n(n),s=a("q1tI"),o=a.n(s),l=a("vUet"),d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.noGutters,s=e.as,d=void 0===s?"div":s,u=e.className,b=Object(c.a)(e,["bsPrefix","noGutters","as","className"]),p=Object(l.a)(a,"row");return o.a.createElement(d,Object(r.a)({ref:t},b,{className:i()(u,p,n&&"no-gutters")}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"5TBX":function(e){e.exports=JSON.parse('{"navigation":{"home":"\u041d\u0430\u0447\u0430\u043b\u043e","map":"\u0420\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435","what-we-know":"\u041a\u0430\u043a\u0432\u043e \u0437\u043d\u0430\u0435\u043c","why-stay-home":"\u0417\u0430\u0449\u043e \u0434\u0430 \u043e\u0441\u0442\u0430\u043d\u0435\u043c \u0432\u043a\u044a\u0449\u0438","about":"\u0417\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430","facebook":"Facebook \u0433\u0440\u0443\u043f\u0430"},"date_format":"dd.MM.yyyy \u0433. \u0432 HH:mm \u0447.","footer":{"disclaimer":"\u0422\u043e\u0437\u0438 \u0443\u0435\u0431\u0441\u0430\u0439\u0442 \u043d\u0435 \u0435 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u0435\u043d \u0438\u0437\u0442\u043e\u0447\u043d\u0438\u043a \u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f. \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0432\u0430\u043d\u0430 \u0442\u0443\u043a \u0435 \u0441 \u0438\u0437\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u0441\u043a\u0438 \u0445\u0430\u0440\u0430\u043a\u0435\u0440.","privacy":"\u041f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442"}}')},"6+DC":function(e,t,a){"use strict";var r=a("nKUr"),c=a("MX0m"),n=a.n(c),i=a("6xyR"),s=a("DZHF");t.a=function(e){var t=e.anchor,a=e.title,c=e.children;return Object(r.jsxs)(i.a,{className:"shadow mb-4 collapsible-card",children:[Object(r.jsx)(s.a.Toggle,{as:i.a.Header,eventKey:t,className:"d-block py-3","data-toggle":"collapse","aria-expanded":"true",children:Object(r.jsx)("h6",{className:"jsx-3719953696 m-0 font-weight-bold text-primary",children:a})}),Object(r.jsx)(s.a.Collapse,{eventKey:t,children:Object(r.jsx)(i.a.Body,{children:c})}),Object(r.jsx)(n.a,{id:"3719953696",children:[".collapsible-card .card-header{cursor:pointer;}"]})]})}},"6xyR":function(e,t,a){"use strict";var r=a("wx14"),c=a("zLVn"),n=a("TSYQ"),i=a.n(n),s=a("q1tI"),o=a.n(s),l=a("vUet"),d=a("YdCC"),u=a("U1MP"),b=a("Wzyw"),p=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,s=e.variant,d=e.as,u=void 0===d?"img":d,b=Object(c.a)(e,["bsPrefix","className","variant","as"]),p=Object(l.a)(a,"card-img");return o.a.createElement(u,Object(r.a)({ref:t,className:i()(s?p+"-"+s:p,n)},b))}));p.displayName="CardImg",p.defaultProps={variant:null};var f=p,v=Object(u.a)("h5"),j=Object(u.a)("h6"),y=Object(d.a)("card-body"),m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,d=e.bg,u=e.text,p=e.border,f=e.body,v=e.children,j=e.as,m=void 0===j?"div":j,h=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(l.a)(a,"card"),x=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return o.a.createElement(b.a.Provider,{value:x},o.a.createElement(m,Object(r.a)({ref:t},h,{className:i()(n,O,d&&"bg-"+d,u&&"text-"+u,p&&"border-"+p)}),f?o.a.createElement(y,null,v):v))}));m.displayName="Card",m.defaultProps={body:!1},m.Img=f,m.Title=Object(d.a)("card-title",{Component:v}),m.Subtitle=Object(d.a)("card-subtitle",{Component:j}),m.Body=y,m.Link=Object(d.a)("card-link",{Component:"a"}),m.Text=Object(d.a)("card-text",{Component:"p"}),m.Header=Object(d.a)("card-header"),m.Footer=Object(d.a)("card-footer"),m.ImgOverlay=Object(d.a)("card-img-overlay");t.a=m},DZHF:function(e,t,a){"use strict";var r=a("wx14"),c=a("zLVn"),n=a("TSYQ"),i=a.n(n),s=a("q1tI"),o=a.n(s),l=a("JCAc"),d=a("vUet"),u=a("ILyh"),b=o.a.createContext(null);var p=o.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"button":a,i=e.children,l=e.eventKey,d=e.onClick,p=Object(c.a)(e,["as","children","eventKey","onClick"]),f=function(e,t){var a=Object(s.useContext)(b),r=Object(s.useContext)(u.a);return function(c){r(e===a?null:e,c),t&&t(c)}}(l,d);return o.a.createElement(n,Object(r.a)({ref:t,onClick:f},p),i)})),f=a("vYJ8"),v=o.a.forwardRef((function(e,t){var a=e.children,n=e.eventKey,i=Object(c.a)(e,["children","eventKey"]),l=Object(s.useContext)(b);return o.a.createElement(f.a,Object(r.a)({ref:t,in:l===n},i),o.a.createElement("div",null,o.a.Children.only(a)))}));v.displayName="AccordionCollapse";var j=v,y=o.a.forwardRef((function(e,t){var a=Object(l.a)(e,{activeKey:"onSelect"}),n=a.as,s=void 0===n?"div":n,p=a.activeKey,f=a.bsPrefix,v=a.children,j=a.className,y=a.onSelect,m=Object(c.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]);return f=Object(d.a)(f,"accordion"),o.a.createElement(b.Provider,{value:p},o.a.createElement(u.a.Provider,{value:y},o.a.createElement(s,Object(r.a)({ref:t},m,{className:i()(j,f)}),v)))}));y.Toggle=p,y.Collapse=j;t.a=y},Iid7:function(e){e.exports=JSON.parse('{"page_title":"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442","seo":{"title":"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442","description":"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0442\u043d\u043e\u0441\u043d\u043e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442 \u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0438\u044f \u043f\u043e\u0440\u0442\u0430\u043b Coronavirus-Bulgaria.org.","keywords":"\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442,\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u0435\u043d \u0443\u0435\u0431\u0441\u0430\u0439\u0442,\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u0435\u043d \u043f\u043e\u0440\u0442\u0430\u043b,coronavirus-bulgaria.org","canonical":"https://coronavirus-bulgaria.org/privacy/"},"policy":{"title":"\u041a\u0430\u043a\u0432\u0430 \u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u043d\u0438 \u043e\u0442\u043d\u043e\u0441\u043d\u043e \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442\u0442\u0430?","text":"\u041d\u0438\u0435 \u043f\u0440\u0438\u0435\u043c\u0430\u043c\u0435 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u0441\u0438 \u0438\u0437\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u043d\u043e \u0441\u0435\u0440\u0438\u043e\u0437\u043d\u043e \u0438 \u043d\u0435 \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u043c\u0435 \u0438\u043b\u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u043c\u0435 \u043b\u0438\u0447\u043d\u0430\u0442\u0430 \u0412\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u0440\u0435\u0442\u0438 \u043b\u0438\u0446\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0410\u043d\u0433\u0430\u0436\u0438\u0440\u0430\u043c\u0435 \u0441\u0435 \u0434\u0430 \u0441\u043f\u0430\u0437\u0432\u0430\u043c\u0435 \u043f\u0440\u0430\u0432\u043e\u0442\u043e \u0412\u0438 \u043d\u0430 \u043b\u0438\u0447\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u043d\u043e\u0441\u0442. \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u0440\u0435\u0442\u0438 \u0441\u0442\u0440\u0430\u043d\u0438 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0435\u043d\u0430 \u0441\u0430\u043c\u043e \u0438 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043e \u0430\u043a\u043e \u0442\u044f \u0435 \u0438\u0437\u0438\u0441\u043a\u0430\u043d\u0430 \u043e\u0442 \u043a\u043e\u043c\u043f\u0435\u0442\u0435\u043d\u0442\u043d\u0438 \u043e\u0440\u0433\u0430\u043d\u0438, \u043f\u043e \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0438\u0442\u0435 \u043f\u043e\u0441\u043e\u0447\u0435\u043d\u0438 \u0432 \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u0430\u0442\u0430 \u0443\u0440\u0435\u0434\u0431\u0430 \u043d\u0430 \u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f."},"data":{"title":"\u041a\u0430\u043a\u0432\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u044a\u0431\u0438\u0440\u0430\u043c\u0435 \u043e\u0442 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438\u0442\u0435?","text":"\u0421\u043b\u0435\u0434 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u0438\u0435 \u043e\u0442 \u0434\u0430\u0434\u0435\u043d \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b \u0441\u044a\u0431\u0438\u0440\u0430\u043c\u0435 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0432\u0430\u0449\u0430 \u0442\u0438\u043f \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\u0442\u043e, \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430, \u0432\u0435\u0440\u0441\u0438\u044f \u0438 \u043c\u043e\u0434\u0435\u043b \u043d\u0430 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0438\u044f \u0431\u0440\u0430\u0443\u0437\u044a\u0440, \u043f\u0440\u0435\u043a\u0430\u0440\u0430\u043d\u043e \u0432\u0440\u0435\u043c\u0435 \u0432 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0438\u0442\u0435, \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0430\u043d\u043e\u043d\u0438\u043c\u0438\u0437\u0438\u0440\u0430\u043d (\u043d\u0435\u043f\u044a\u043b\u0435\u043d) IP \u0430\u0434\u0440\u0435\u0441 \u0438 \u0434\u0440. \u0422\u0430\u0437\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0435 \u0430\u043d\u043e\u043d\u0438\u043c\u0438\u0437\u0438\u0440\u0430\u043d\u0430 \u0438 \u043d\u0435 \u0441\u0435 \u043e\u0431\u0432\u044a\u0440\u0437\u0432\u0430 \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b. \u041d\u0435 \u0441\u0435 \u0441\u044a\u0445\u0440\u0430\u043d\u044f\u0432\u0430 \u0434\u0435\u043c\u043e\u0433\u0430\u0444\u0441\u043a\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0437\u0430 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u043e\u0442 \u0442\u0438\u043f\u0430 \u043d\u0430 \u043f\u043e\u043b, \u0432\u044a\u0437\u0440\u0430\u0441\u0442, \u0438\u0437\u043f\u043e\u0432\u044f\u0434\u0432\u0430\u043d\u0430 \u0440\u0435\u043b\u0438\u0433\u0438\u044f, \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0438, \u043c\u043e\u0434\u0435\u043b\u0438 \u0437\u0430 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438 \u0434\u0440."},"usage":{"title":"\u0417\u0430 \u043a\u0430\u043a\u0432\u0438 \u0446\u0435\u043b\u0438 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\u0442\u0430?","text":"\u0421\u044a\u0431\u0438\u0440\u0430\u043d\u0430\u0442\u0430 \u043e\u0442 \u043d\u0430\u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u0437\u0430 \u043f\u043e\u0434\u043e\u0431\u0440\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0435\u043d\u0438\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0438, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u0447\u0435\u0442\u0438 \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430."},"cookies":{"title":"\u0411\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438","text":"\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u0431\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438 (\\"Cookies\\"), \u0437\u0430 \u0434\u0430 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043c\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0441\u043a\u043e\u0442\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438 \u0434\u0430 \u043f\u043e\u0434\u043e\u0431\u0440\u0438\u043c \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u043d\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442\u0438. \u0411\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438\u0442\u0435 \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u0442 \u043c\u0430\u043b\u043a\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 \u0412\u0430\u0448\u0438\u044f \u0443\u0435\u0431 \u0431\u0440\u0430\u0443\u0437\u044a\u0440, \u0438 \u043f\u043e \u043d\u0438\u043a\u0430\u043a\u044a\u0432 \u043d\u0430\u0447\u0438\u043d \u043d\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u043d\u0430\u0432\u0440\u0435\u0434\u044f\u0442 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u0430 \u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430 \u0412\u0438 \u0438\u043b\u0438 \u0434\u0430 \u0438\u043d\u0441\u0442\u0430\u043b\u0438\u0440\u0430\u0442 \u0432\u0440\u0435\u0434\u0435\u043d \u0441\u043e\u0444\u0442\u0443\u0435\u0440. \u0411\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u0438\u0437\u0438\u0441\u043a\u0430\u043d\u0438 \u0438 \u0434\u043e\u0441\u0442\u044a\u043f\u0435\u043d\u0438 \u0441\u0430\u043c\u043e \u043e\u0442 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u0430, \u043e\u0442 \u043a\u043e\u0439\u0442\u043e \u0441\u0430 \u0438\u0437\u0434\u0430\u0434\u0435\u043d\u0438."},"partners":{"title":"\u041d\u0430 \u043a\u043e\u0433\u043e \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u043c\u0435 \u0432\u0430\u0448\u0438\u0442\u0435 \u043b\u0438\u0447\u043d\u0438 \u0434\u0430\u043d\u043d\u0438?","text":"\u041d\u0435 \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u043c\u0435 \u0438\u043b\u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u043c\u0435 \u043b\u0438\u0447\u043d\u0430\u0442\u0430 \u0412\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u0440\u0435\u0442\u0438 \u043b\u0438\u0446\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0412\u044a\u043f\u0440\u0435\u043a\u0438 \u0442\u043e\u0432\u0430 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u044a\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u0430, \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u043a\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438 \u0443\u0441\u043b\u0443\u0433\u0438 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0421\u043f\u043e\u0434\u0435\u043b\u044f\u043d\u0435\u0442\u043e \u043d\u0430 \u043b\u0438\u0447\u043d\u0430\u0442\u0430 \u0412\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u0435 \u043e\u0441\u044a\u0449\u0435\u0441\u0442\u0432\u044f\u0432\u0430 \u043a\u043e\u0433\u0430\u0442\u043e \u0412\u0438\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0412\u0430\u0448\u0435\u0442\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435."},"preferences":{"title":"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0443\u0441\u043b\u0443\u0433\u0438","text":"\u0414\u0430\u0432\u0430\u043c\u0435 \u0432\u044a\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u0434\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u044f\u0442 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u043d\u0438\u044f\u0442\u0430 \u0441\u0438 \u0437\u0430 \u043d\u0430\u0448\u0438\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0438.<0 />\u041a\u043b\u0438\u043a\u043d\u0435\u0442\u0435 \u043d\u0430 \u0431\u0443\u0442\u043e\u043d\u0430, \u0437\u0430 \u0434\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u043d\u0438\u044f\u0442\u0430 \u0441\u0438:","button":"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0443\u0441\u043b\u0443\u0433\u0438"},"changes":{"title":"\u041f\u0440\u043e\u043c\u044f\u043d\u0430 \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442","text":"\u0417\u0430\u043f\u0430\u0437\u0432\u0430\u043c\u0435 \u0441\u0438 \u043f\u0440\u0430\u0432\u043e\u0442\u043e \u0434\u0430 \u0438\u0437\u0432\u044a\u0440\u0448\u0432\u0430\u043c\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u043f\u043e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442. \u041f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0449\u0435 \u0431\u044a\u0434\u0430\u0442 \u043e\u043f\u043e\u0432\u0435\u0441\u0442\u044f\u0432\u0430\u043d\u0438 \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0430\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430. \u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f\u0442 \u0441\u043b\u0435\u0434\u0432\u0430 \u043f\u0440\u043e\u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0434\u0430 \u0441\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0438\u0440\u0430 \u0437\u0430 \u0430\u043a\u0442\u0443\u0430\u043b\u043d\u0430\u0442\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442."},"last_updated":"\u0414\u0430\u0442\u0430 \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0430 \u043f\u0440\u043e\u043c\u044f\u043d\u0430: 08.11.2020\u0433."}')},JI6e:function(e,t,a){"use strict";var r=a("wx14"),c=a("zLVn"),n=a("TSYQ"),i=a.n(n),s=a("q1tI"),o=a.n(s),l=a("vUet"),d=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,s=e.as,u=void 0===s?"div":s,b=Object(c.a)(e,["bsPrefix","className","as"]),p=Object(l.a)(a,"col"),f=[],v=[];return d.forEach((function(e){var t,a,r,c=b[e];if(delete b[e],null!=c&&"object"===typeof c){var n=c.span;t=void 0===n||n,a=c.offset,r=c.order}else t=c;var i="xs"!==e?"-"+e:"";null!=t&&f.push(!0===t?""+p+i:""+p+i+"-"+t),null!=r&&v.push("order"+i+"-"+r),null!=a&&v.push("offset"+i+"-"+a)})),f.length||f.push(p),o.a.createElement(u,Object(r.a)({},b,{ref:t,className:i.a.apply(void 0,[n].concat(f,v))}))}));u.displayName="Col",t.a=u},U1MP:function(e,t,a){"use strict";var r=a("wx14"),c=a("q1tI"),n=a.n(c),i=a("TSYQ"),s=a.n(i);t.a=function(e){return n.a.forwardRef((function(t,a){return n.a.createElement("div",Object(r.a)({},t,{ref:a,className:s()(t.className,e)}))}))}},aeIR:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return a("mnIH")}])},mnIH:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var r=a("rePB"),c=a("nKUr"),n=a("MA9B"),i=a.n(n),s=(a("q1tI"),a("+nYd")),o=a("5TBX"),l=a("Iid7");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={common:o,privacy:l};function p(e){return Object(c.jsx)(i.a,{lang:"bg",namespaces:b,internals:{defaultLanguage:"bg",isStaticMode:!0},false:!0,children:Object(c.jsx)(s.a,u({},e))})}p=Object.assign(p,u({},s.a)),s.a&&s.a.getInitialProps&&(p.getInitialProps=function(e){return s.a.getInitialProps(u(u({},e),{},{lang:"bg"}))})}},[["aeIR",1,0,7,6,2,3,4,5,8]]]);