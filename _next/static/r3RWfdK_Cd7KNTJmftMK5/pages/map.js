(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2qu3":function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n("q1tI")),u=n("8L3h"),s=n("jwwS"),l=[],c=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function p(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var a=f(e[r]);a.loading?t.loading=!0:(t.loaded[r]=a.loaded,t.error=a.error),n.push(a.promise),a.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function h(e,t){return i.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function m(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:h,webpack:null,modules:null},t),r=null;function a(){if(!r){var t=new b(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!d&&"function"===typeof n.webpack){var o=n.webpack();c.push((function(e){var t=!0,n=!1,r=void 0;try{for(var i,u=o[Symbol.iterator]();!(t=(i=u.next()).done);t=!0){var s=i.value;if(-1!==e.indexOf(s))return a()}}catch(l){n=!0,r=l}finally{try{t||null==u.return||u.return()}finally{if(n)throw r}}}))}var l=function(e,t){a();var o=i.default.useContext(s.LoadableContext),l=u.useSubscription(r);return i.default.useImperativeHandle(t,(function(){return{retry:r.retry}})),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),l.loading||l.error?i.default.createElement(n.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:r.retry}):l.loaded?n.render(l.loaded,e):null};return l.preload=function(){return a()},l.displayName="LoadableComponent",i.default.forwardRef(l)}var b=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return m(f,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}_.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return m(p,e)},_.preloadAll=function(){return new Promise((function(e,t){y(l).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};y(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=_.preloadReady,t.default=_},"3Z9Z":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),u=n("q1tI"),s=n.n(u),l=n("vUet"),c=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.noGutters,u=e.as,c=void 0===u?"div":u,d=e.className,f=Object(a.a)(e,["bsPrefix","noGutters","as","className"]),p=Object(l.a)(n,"row");return s.a.createElement(c,Object(r.a)({ref:t},f,{className:i()(d,p,o&&"no-gutters")}))}));c.displayName="Row",c.defaultProps={noGutters:!1},t.a=c},"4YdT":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=n("a6RD"),s=n.n(u),l=n("ffb8"),c=n("7vrA"),d=n("3Z9Z"),f=n("JI6e"),p=n("ds/u"),h=n("ghxN"),m=a.a.createElement,b=s()((function(){return Promise.all([n.e(8),n.e(6)]).then(n.bind(null,"CGeP"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["CGeP"]},modules:["../components/CasesMap/CasesMap"]}});t.default=function(){var e=Object(r.useState)(7),t=e[0],n=e[1];return m(p.a,null,m(i.a,null,m("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",integrity:"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",crossOrigin:""})),m(l.NextSeo,{title:"\u041a\u0430\u0440\u0442\u0430 \u043d\u0430 \u0440\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435",description:"\u041a\u0430\u0440\u0442\u0430 \u043d\u0430 \u0440\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u0430 \u043f\u043e \u043e\u0431\u043b\u0430\u0441\u0442\u0438",openGraph:{images:[{url:"https://coronavirus-bulgaria.org/static/images/open_graph_map.png?v=".concat("r3RWfdK_Cd7KNTJmftMK5"),width:1200,height:630,alt:"\u0420\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u0430 \u043f\u043e \u043e\u0431\u043b\u0430\u0441\u0442\u0438"}]}}),m(c.a,{fluid:!0},m("div",{className:"d-sm-flex align-items-center justify-content-between my-4"},m("h1",{className:"h3 mb-0 text-gray-800"},"\u041a\u0430\u0440\u0442\u0430 \u043d\u0430 \u0440\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435")),m(d.a,{className:"mt-3"},m(f.a,{style:{height:"400px"}},m(b,{data:h,zoom:t,whenReady:function(){document.documentElement.clientWidth<=768&&n(6)},zoomSnap:.5})))))}},JI6e:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),u=n("q1tI"),s=n.n(u),l=n("vUet"),c=["xl","lg","md","sm","xs"],d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.as,d=void 0===u?"div":u,f=Object(a.a)(e,["bsPrefix","className","as"]),p=Object(l.a)(n,"col"),h=[],m=[];return c.forEach((function(e){var t,n,r,a=f[e];if(delete f[e],null!=a&&"object"===typeof a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var i="xs"!==e?"-"+e:"";null!=t&&h.push(!0===t?""+p+i:""+p+i+"-"+t),null!=r&&m.push("order"+i+"-"+r),null!=n&&m.push("offset"+i+"-"+n)})),h.length||h.push(p),s.a.createElement(d,Object(r.a)({},f,{ref:t,className:i.a.apply(void 0,[o].concat(h,m))}))}));d.displayName="Col",t.a=d},"My+z":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){return n("4YdT")}])},a6RD:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("2qu3")),i=!1;function u(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);var n=t.loading;return function(){return a.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=u,t.default=function(e,t){var n=o.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=o.default.Map;var a={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?a[e]=t:a[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=a}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)}},ghxN:function(e){e.exports=JSON.parse('{"\u0411\u043b\u0430\u0433\u043e\u0435\u0432\u0433\u0440\u0430\u0434":{"coordinates":[42.0116,23.0905],"infected":4,"cured":0,"fatal":0},"\u0412\u0430\u0440\u043d\u0430":{"coordinates":[43.2071,27.9151],"infected":7,"cured":0,"fatal":0},"\u0413\u0430\u0431\u0440\u043e\u0432\u043e":{"coordinates":[42.9663,25.2507],"infected":2,"cured":0,"fatal":0},"\u041b\u043e\u0432\u0435\u0447":{"coordinates":[43.1351,24.7151],"infected":1,"cured":0,"fatal":0},"\u041b\u043e\u043c":{"coordinates":[43.7805,23.2249],"infected":1,"cured":0,"fatal":0},"\u041f\u0435\u0440\u043d\u0438\u043a":{"coordinates":[42.6286,22.8697],"infected":2,"cured":0,"fatal":0},"\u041f\u043b\u0435\u0432\u0435\u043d":{"coordinates":[43.4092,24.618],"infected":8,"cured":2,"fatal":0},"\u0421\u043e\u0444\u0438\u044f":{"coordinates":[42.7035,23.3105],"infected":187,"cured":1,"fatal":3,"circleProps":{"radius":15}},"\u0421\u043c\u043e\u043b\u044f\u043d":{"coordinates":[41.6226,24.6219],"infected":5,"cured":0,"fatal":0},"\u0412\u0435\u043b\u0438\u043a\u043e \u0422\u044a\u0440\u043d\u043e\u0432\u043e":{"coordinates":[43.2157,25.6244],"infected":3,"cured":0,"fatal":0},"\u0411\u0430\u043d\u0441\u043a\u043e":{"coordinates":[41.8344,23.4842],"infected":3,"cured":0,"fatal":0},"\u0411\u0443\u0440\u0433\u0430\u0441":{"coordinates":[42.4489,27.3071],"infected":9,"cured":0,"fatal":0},"\u041f\u043b\u043e\u0432\u0434\u0438\u0432":{"coordinates":[42.1421,24.7499],"infected":11,"cured":0,"fatal":0},"\u0414\u043e\u0431\u0440\u0438\u0447":{"coordinates":[43.6646,27.904],"infected":6,"cured":0,"fatal":0},"\u0428\u0443\u043c\u0435\u043d":{"coordinates":[43.2706,26.9247],"infected":1,"cured":0,"fatal":0},"\u041f\u0435\u0449\u0435\u0440\u0430":{"coordinates":[42.0337,24.3052],"infected":1,"cured":0,"fatal":0},"\u041a\u0430\u0440\u043b\u043e\u0432\u043e":{"coordinates":[42.6358,24.8048],"infected":1,"cured":0,"fatal":0},"\u0414\u0443\u043f\u043d\u0438\u0446\u0430":{"coordinates":[42.2626,23.1142],"infected":1,"cured":0,"fatal":0},"\u041f\u0430\u0437\u0430\u0440\u0434\u0436\u0438\u043a":{"coordinates":[42.1504,24.1456],"infected":7,"cured":0,"fatal":0},"\u0421\u0442\u0430\u0440\u0430 \u0417\u0430\u0433\u043e\u0440\u0430":{"coordinates":[42.4249,25.6257],"infected":2,"cured":0,"fatal":0},"\u0421\u043b\u0438\u0432\u0435\u043d":{"coordinates":[42.6824,26.315],"infected":2,"cured":0,"fatal":0},"\u0425\u0430\u0441\u043a\u043e\u0432\u043e":{"coordinates":[41.7652,25.8975],"infected":1,"cured":0,"fatal":0},"\u041a\u044a\u0440\u0434\u0436\u0430\u043b\u0438":{"coordinates":[41.5723,25.4773],"infected":1,"cured":0,"fatal":0},"\u041a\u044e\u0441\u0442\u0435\u043d\u0434\u0438\u043b":{"coordinates":[42.2858,22.6952],"infected":1,"cured":0,"fatal":0}}')},jwwS:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.LoadableContext=a.createContext(null)}},[["My+z",1,0,2,4,5]]]);