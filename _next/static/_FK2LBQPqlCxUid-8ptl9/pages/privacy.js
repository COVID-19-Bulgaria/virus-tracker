(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3Z9Z":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),s=t.n(o),i=t("vUet"),d=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.noGutters,o=e.as,d=void 0===o?"div":o,u=e.className,f=Object(n.a)(e,["bsPrefix","noGutters","as","className"]),b=Object(i.a)(t,"row");return s.a.createElement(d,Object(r.a)({ref:a},f,{className:l()(u,b,c&&"no-gutters")}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},"6+DC":function(e,a,t){"use strict";var r=t("MX0m"),n=t.n(r),c=t("q1tI"),l=t.n(c),o=t("6xyR"),s=t("DZHF"),i=l.a.createElement;a.a=function(e){var a=e.anchor,t=e.title,r=e.children;return i(o.a,{className:"shadow mb-4 collapsible-card"},i(s.a.Toggle,{as:o.a.Header,eventKey:a,className:"d-block py-3","data-toggle":"collapse","aria-expanded":"true"},i("h6",{className:"jsx-3719953696 m-0 font-weight-bold text-primary"},t)),i(s.a.Collapse,{eventKey:a},i(o.a.Body,null,r)),i(n.a,{id:"3719953696"},[".collapsible-card .card-header{cursor:pointer;}"]))}},"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),s=t.n(o),i=t("vUet"),d=t("YdCC"),u=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))},f=t("Wzyw"),b=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,d=e.as,u=void 0===d?"img":d,f=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(i.a)(t,"card-img");return s.a.createElement(u,Object(r.a)({ref:a,className:l()(o?b+"-"+o:b,c)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var m=b,v=u("h5"),p=u("h6"),h=Object(d.a)("card-body"),y=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,d=e.bg,u=e.text,b=e.border,m=e.body,v=e.children,p=e.as,y=void 0===p?"div":p,j=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(i.a)(t,"card"),N=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return s.a.createElement(f.a.Provider,{value:N},s.a.createElement(y,Object(r.a)({ref:a},j,{className:l()(c,x,d&&"bg-"+d,u&&"text-"+u,b&&"border-"+b)}),m?s.a.createElement(h,null,v):v))}));y.displayName="Card",y.defaultProps={body:!1},y.Img=m,y.Title=Object(d.a)("card-title",{Component:v}),y.Subtitle=Object(d.a)("card-subtitle",{Component:p}),y.Body=h,y.Link=Object(d.a)("card-link",{Component:"a"}),y.Text=Object(d.a)("card-text",{Component:"p"}),y.Header=Object(d.a)("card-header"),y.Footer=Object(d.a)("card-footer"),y.ImgOverlay=Object(d.a)("card-img-overlay");a.a=y},DZHF:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),s=t.n(o),i=t("JCAc"),d=t("vUet"),u=t("ILyh"),f=s.a.createContext(null);var b=s.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"button":t,l=e.children,i=e.eventKey,d=e.onClick,b=Object(n.a)(e,["as","children","eventKey","onClick"]),m=function(e,a){var t=Object(o.useContext)(f),r=Object(o.useContext)(u.a);return function(n){r(e===t?null:e,n),a&&a(n)}}(i,d);return s.a.createElement(c,Object(r.a)({ref:a,onClick:m},b),l)})),m=t("vYJ8"),v=s.a.forwardRef((function(e,a){var t=e.children,c=e.eventKey,l=Object(n.a)(e,["children","eventKey"]),i=Object(o.useContext)(f);return s.a.createElement(m.a,Object(r.a)({ref:a,in:i===c},l),s.a.createElement("div",null,s.a.Children.only(t)))}));v.displayName="AccordionCollapse";var p=v,h=s.a.forwardRef((function(e,a){var t=Object(i.a)(e,{activeKey:"onSelect"}),c=t.as,o=void 0===c?"div":c,b=t.activeKey,m=t.bsPrefix,v=t.children,p=t.className,h=t.onSelect,y=Object(n.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return m=Object(d.a)(m,"accordion"),s.a.createElement(f.Provider,{value:b},s.a.createElement(u.a.Provider,{value:h},s.a.createElement(o,Object(r.a)({ref:a},y,{className:l()(p,m)}),v)))}));h.Toggle=b,h.Collapse=p;a.a=h},JI6e:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),s=t.n(o),i=t("vUet"),d=["xl","lg","md","sm","xs"],u=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.as,u=void 0===o?"div":o,f=Object(n.a)(e,["bsPrefix","className","as"]),b=Object(i.a)(t,"col"),m=[],v=[];return d.forEach((function(e){var a,t,r,n=f[e];if(delete f[e],null!=n&&"object"===typeof n){var c=n.span;a=void 0===c||c,t=n.offset,r=n.order}else a=n;var l="xs"!==e?"-"+e:"";null!=a&&m.push(!0===a?""+b+l:""+b+l+"-"+a),null!=r&&v.push("order"+l+"-"+r),null!=t&&v.push("offset"+l+"-"+t)})),m.length||m.push(b),s.a.createElement(u,Object(r.a)({},f,{ref:a,className:l.a.apply(void 0,[c].concat(m,v))}))}));u.displayName="Col",a.a=u},aeIR:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return t("mnIH")}])},mnIH:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),c=t("ffb8"),l=t("7vrA"),o=t("3Z9Z"),s=t("JI6e"),i=t("DZHF"),d=t("wx14"),u=t("zLVn"),f=t("TSYQ"),b=t.n(f),m=t("vUet"),v=t("dbZe"),p=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,c=e.size,l=e.active,o=e.className,s=e.block,i=e.type,f=e.as,p=Object(u.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(m.a)(t,"btn"),y=b()(o,h,l&&"active",h+"-"+r,s&&h+"-block",c&&h+"-"+c);if(p.href)return n.a.createElement(v.a,Object(d.a)({},p,{as:f,ref:a,className:b()(y,p.disabled&&"disabled")}));a&&(p.ref=a),f||(p.type=i);var j=f||"button";return n.a.createElement(j,Object(d.a)({},p,{className:y}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var h=p,y=t("ds/u"),j=t("6+DC"),x=t("zDhD"),N=n.a.createElement;a.default=function(){return N(y.a,null,N(c.NextSeo,{title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442"}),N(l.a,{fluid:!0},N("div",{className:"d-sm-flex align-items-center justify-content-between mt-4"},N("h1",{className:"h3 mb-0 text-gray-800"},"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442")),N(o.a,{className:"mt-3"},N(s.a,null,N(i.a,{bsPrefix:"custom-accordion"},N(j.a,{anchor:"policy",title:"\u041a\u0430\u043a\u0432\u0430 \u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u043d\u0438 \u043e\u0442\u043d\u043e\u0441\u043d\u043e \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442\u0442\u0430?"},"\u041d\u0438\u0435 \u043f\u0440\u0438\u0435\u043c\u0430\u043c\u0435 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u0441\u0438 \u0438\u0437\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u043d\u043e \u0441\u0435\u0440\u0438\u043e\u0437\u043d\u043e \u0438 \u043d\u0435 \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u043c\u0435 \u0438\u043b\u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u043c\u0435 \u043b\u0438\u0447\u043d\u0430\u0442\u0430 \u0412\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u0440\u0435\u0442\u0438 \u043b\u0438\u0446\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0410\u043d\u0433\u0430\u0436\u0438\u0440\u0430\u043c\u0435 \u0441\u0435 \u0434\u0430 \u0441\u043f\u0430\u0437\u0432\u0430\u043c\u0435 \u043f\u0440\u0430\u0432\u043e\u0442\u043e \u0412\u0438 \u043d\u0430 \u043b\u0438\u0447\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u043d\u043e\u0441\u0442. \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u0440\u0435\u0442\u0438 \u0441\u0442\u0440\u0430\u043d\u0438 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0435\u043d\u0430 \u0441\u0430\u043c\u043e \u0438 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043e \u0430\u043a\u043e \u0442\u044f \u0435 \u0438\u0437\u0438\u0441\u043a\u0430\u043d\u0430 \u043e\u0442 \u043a\u043e\u043c\u043f\u0435\u0442\u0435\u043d\u0442\u043d\u0438 \u043e\u0440\u0433\u0430\u043d\u0438, \u043f\u043e \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0438\u0442\u0435 \u043f\u043e\u0441\u043e\u0447\u0435\u043d\u0438 \u0432 \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u0430\u0442\u0430 \u0443\u0440\u0435\u0434\u0431\u0430 \u043d\u0430 \u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f."),N(j.a,{anchor:"data",title:"\u041a\u0430\u043a\u0432\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u044a\u0431\u0438\u0440\u0430\u043c\u0435 \u043e\u0442 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438\u0442\u0435?"},"\u0417\u0430 \u0432\u0441\u0435\u043a\u0438 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b \u0441\u044a\u0431\u0438\u0440\u0430\u043c\u0435 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0432\u0430\u0449\u0430 \u0442\u0438\u043f \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\u0442\u043e, \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430, \u0432\u0435\u0440\u0441\u0438\u044f \u0438 \u043c\u043e\u0434\u0435\u043b \u043d\u0430 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0438\u044f \u0431\u0440\u0430\u0443\u0437\u044a\u0440, \u043f\u0440\u0435\u043a\u0430\u0440\u0430\u043d\u043e \u0432\u0440\u0435\u043c\u0435 \u0432 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0438\u0442\u0435, \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u0434\u0440. \u0417\u0430 \u0447\u0430\u0441\u0442 \u043e\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0442\u0430, \u0438\u0437\u0432\u044a\u0440\u0448\u0435\u043d\u0438 \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430, \u0441\u0435 \u0437\u0430\u043f\u0430\u0437\u0432\u0430 \u0438 IP \u0430\u0434\u0440\u0435\u0441\u044a\u0442 \u043d\u0430 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044f. \u041d\u0435 \u0441\u0435 \u0441\u044a\u0445\u0440\u0430\u043d\u044f\u0432\u0430 \u0434\u0435\u043c\u043e\u0433\u0430\u0444\u0441\u043a\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0437\u0430 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u043e\u0442 \u0442\u0438\u043f\u0430 \u043d\u0430 \u043f\u043e\u043b, \u0432\u044a\u0437\u0440\u0430\u0441\u0442, \u0438\u0437\u043f\u043e\u0432\u044f\u0434\u0432\u0430\u043d\u0430 \u0440\u0435\u043b\u0438\u0433\u0438\u044f, \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0438, \u043c\u043e\u0434\u0435\u043b\u0438 \u0437\u0430 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438 \u0434\u0440."),N(j.a,{anchor:"usage",title:"\u0417\u0430 \u043a\u0430\u043a\u0432\u0438 \u0446\u0435\u043b\u0438 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\u0442\u0430?"},"\u0421\u044a\u0431\u0438\u0440\u0430\u043d\u0430\u0442\u0430 \u043e\u0442 \u043d\u0430\u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u0437\u0430 \u043f\u043e\u0434\u043e\u0431\u0440\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0435\u043d\u0438\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0438, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u0447\u0435\u0442\u0438 \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430."),N(j.a,{anchor:"cookies",title:"\u0411\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438"},'\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u0431\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438 ("Cookies"), \u0437\u0430 \u0434\u0430 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043c\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0441\u043a\u043e\u0442\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438 \u0434\u0430 \u043f\u043e\u0434\u043e\u0431\u0440\u0438\u043c \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u043d\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442\u0438. \u0411\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438\u0442\u0435 \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u0442 \u043c\u0430\u043b\u043a\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 \u0412\u0430\u0448\u0438\u044f \u0443\u0435\u0431 \u0431\u0440\u0430\u0443\u0437\u044a\u0440, \u0438 \u043f\u043e \u043d\u0438\u043a\u0430\u043a\u044a\u0432 \u043d\u0430\u0447\u0438\u043d \u043d\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u043d\u0430\u0432\u0440\u0435\u0434\u044f\u0442 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u0430 \u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430 \u0412\u0438 \u0438\u043b\u0438 \u0434\u0430 \u0438\u043d\u0441\u0442\u0430\u043b\u0438\u0440\u0430\u0442 \u0432\u0440\u0435\u0434\u0435\u043d \u0441\u043e\u0444\u0442\u0443\u0435\u0440. \u0411\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u0438\u0437\u0438\u0441\u043a\u0430\u043d\u0438 \u0438 \u0434\u043e\u0441\u0442\u044a\u043f\u0435\u043d\u0438 \u0441\u0430\u043c\u043e \u043e\u0442 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u0430, \u043e\u0442 \u043a\u043e\u0439\u0442\u043e \u0441\u0430 \u0438\u0437\u0434\u0430\u0434\u0435\u043d\u0438.'),N(j.a,{anchor:"partners",title:"\u041d\u0430 \u043a\u043e\u0433\u043e \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u043c\u0435 \u0432\u0430\u0448\u0438\u0442\u0435 \u043b\u0438\u0447\u043d\u0438 \u0434\u0430\u043d\u043d\u0438?"},"\u041d\u0435 \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u043c\u0435 \u0438\u043b\u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u043c\u0435 \u043b\u0438\u0447\u043d\u0430\u0442\u0430 \u0412\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u0440\u0435\u0442\u0438 \u043b\u0438\u0446\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0412\u044a\u043f\u0440\u0435\u043a\u0438 \u0442\u043e\u0432\u0430 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u044a\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u0430, \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u043a\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438 \u0443\u0441\u043b\u0443\u0433\u0438 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0421\u043f\u043e\u0434\u0435\u043b\u044f\u043d\u0435\u0442\u043e \u043d\u0430 \u043b\u0438\u0447\u043d\u0430\u0442\u0430 \u0412\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u0435 \u043e\u0441\u044a\u0449\u0435\u0441\u0442\u0432\u044f\u0432\u0430 \u043a\u043e\u0433\u0430\u0442\u043e \u0412\u0438\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0412\u0430\u0448\u0435\u0442\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435.",N("ul",null,N("li",null,"Google Ireland Ltd. - Google Analytics, Google Tag Manager -",N(x.a,{href:"https://safety.google/privacy/"},"https://safety.google/privacy/")))),N(j.a,{anchor:"preferences",title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0443\u0441\u043b\u0443\u0433\u0438"},N("div",null,"\u0414\u0430\u0432\u0430\u043c\u0435 \u0432\u044a\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u0434\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u044f\u0442 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u043d\u0438\u044f\u0442\u0430 \u0441\u0438 \u0437\u0430 \u043d\u0430\u0448\u0438\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0438.",N("br",null),"\u041a\u043b\u0438\u043a\u043d\u0435\u0442\u0435 \u043d\u0430 \u0431\u0443\u0442\u043e\u043d\u0430, \u0437\u0430 \u0434\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u043d\u0438\u044f\u0442\u0430 \u0441\u0438:"),N(h,{className:"mt-2",onClick:function(){return window.tarteaucitron.userInterface.openPanel()}},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0443\u0441\u043b\u0443\u0433\u0438")),N(j.a,{anchor:"changes",title:"\u041f\u0440\u043e\u043c\u044f\u043d\u0430 \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442"},"\u0417\u0430\u043f\u0430\u0437\u0432\u0430\u043c\u0435 \u0441\u0438 \u043f\u0440\u0430\u0432\u043e\u0442\u043e \u0434\u0430 \u0438\u0437\u0432\u044a\u0440\u0448\u0432\u0430\u043c\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u043f\u043e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442. \u041f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0449\u0435 \u0431\u044a\u0434\u0430\u0442 \u043e\u043f\u043e\u0432\u0435\u0441\u0442\u044f\u0432\u0430\u043d\u0438 \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0430\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430. \u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f\u0442 \u0441\u043b\u0435\u0434\u0432\u0430 \u043f\u0440\u043e\u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0434\u0430 \u0441\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0438\u0440\u0430 \u0437\u0430 \u0430\u043a\u0442\u0443\u0430\u043b\u043d\u0430\u0442\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442.")),N("div",{className:"mb-3"},N("small",null,"\u0414\u0430\u0442\u0430 \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0430 \u043f\u0440\u043e\u043c\u044f\u043d\u0430: 13.03.2020\u0433."))))))}},zDhD:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r).a.createElement;a.a=function(e){var a=e.href,t=e.children;return n("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t)}}},[["aeIR",0,1,2,4,3,5,6]]]);