webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-moment/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-moment/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"),__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){e.exports=n(3)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";var r=n(4);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r,o,i,a,l;
/*! Moment Duration Format v2.2.2
 *  https://github.com/jsmreese/moment-duration-format
 *  Date: 2018-02-16
 *
 *  Duration format plugin function for the Moment.js library
 *  http://momentjs.com/
 *
 *  Copyright 2018 John Madhavan-Reese
 *  Released under the MIT license
 */
/*! Moment Duration Format v2.2.2
 *  https://github.com/jsmreese/moment-duration-format
 *  Date: 2018-02-16
 *
 *  Duration format plugin function for the Moment.js library
 *  http://momentjs.com/
 *
 *  Copyright 2018 John Madhavan-Reese
 *  Released under the MIT license
 */
a=this,l=function(e){var t=!1,n=!1,r="escape years months weeks days hours minutes seconds milliseconds general".split(" "),o=[{type:"seconds",targets:[{type:"minutes",value:60},{type:"hours",value:3600},{type:"days",value:86400},{type:"weeks",value:604800},{type:"months",value:2678400},{type:"years",value:31536e3}]},{type:"minutes",targets:[{type:"hours",value:60},{type:"days",value:1440},{type:"weeks",value:10080},{type:"months",value:44640},{type:"years",value:525600}]},{type:"hours",targets:[{type:"days",value:24},{type:"weeks",value:168},{type:"months",value:744},{type:"years",value:8760}]},{type:"days",targets:[{type:"weeks",value:7},{type:"months",value:31},{type:"years",value:365}]},{type:"months",targets:[{type:"years",value:12}]}];function i(e,t){return!(t.length>e.length)&&-1!==e.indexOf(t)}function a(e){for(var t="";e;)t+="0",e-=1;return t}function l(e,t,r){var o,i,u,s=t.useToLocaleString,c=t.useGrouping,m=c&&t.grouping.slice(),f=t.maximumSignificantDigits,p=t.minimumIntegerDigits||1,g=t.fractionDigits||0,y=t.groupingSeparator,h=t.decimalSeparator;if(s&&r){var d={minimumIntegerDigits:p,useGrouping:c};if(g&&(d.maximumFractionDigits=g,d.minimumFractionDigits=g),f&&e>0&&(d.maximumSignificantDigits=f),!n){var v=w({},t);v.useGrouping=!1,v.decimalSeparator=".",e=parseFloat(l(e,v),10)}return e.toLocaleString(r,d)}var b=(f?e.toPrecision(f+1):e.toFixed(g+1)).split("e");u=b[1]||"",i=(b=b[0].split("."))[1]||"";var S=(o=b[0]||"").length,T=i.length,_=S+T,x=o+i;(f&&_===f+1||!f&&T===g+1)&&((x=function(e){for(var t=e.split("").reverse(),n=0,r=!0;r&&n<t.length;)n?"9"===t[n]?t[n]="0":(t[n]=(parseInt(t[n],10)+1).toString(),r=!1):(parseInt(t[n],10)<5&&(r=!1),t[n]="0"),n+=1;return r&&t.push("1"),t.reverse().join("")}(x)).length===_+1&&(S+=1),T&&(x=x.slice(0,-1)),o=x.slice(0,S),i=x.slice(S)),f&&(i=i.replace(/0*$/,""));var O=parseInt(u,10);O>0?i.length<=O?(o+=i+=a(O-i.length),i=""):(o+=i.slice(0,O),i=i.slice(O)):O<0&&(i=a(Math.abs(O)-o.length)+o+i,o="0"),f||((i=i.slice(0,g)).length<g&&(i+=a(g-i.length)),o.length<p&&(o=a(p-o.length)+o));var V,D="";if(c)for(b=o;b.length;)m.length&&(V=m.shift()),D&&(D=y+D),D=b.slice(-V)+D,b=b.slice(0,-V);else D=o;return i&&(D=D+h+i),D}function u(e,t){return e.label.length>t.label.length?-1:e.label.length<t.label.length?1:0}var s,c={durationLabelsStandard:{S:"millisecond",SS:"milliseconds",s:"second",ss:"seconds",m:"minute",mm:"minutes",h:"hour",hh:"hours",d:"day",dd:"days",w:"week",ww:"weeks",M:"month",MM:"months",y:"year",yy:"years"},durationLabelsShort:{S:"msec",SS:"msecs",s:"sec",ss:"secs",m:"min",mm:"mins",h:"hr",hh:"hrs",d:"dy",dd:"dys",w:"wk",ww:"wks",M:"mo",MM:"mos",y:"yr",yy:"yrs"},durationTimeTemplates:{HMS:"h:mm:ss",HM:"h:mm",MS:"m:ss"},durationLabelTypes:[{type:"standard",string:"__"},{type:"short",string:"_"}],durationPluralKey:function(e,t,n){return 1===t&&null===n?e:e+e}};function m(e){return"[object Array]"===Object.prototype.toString.call(e)}function f(e){return"[object Object]"===Object.prototype.toString.call(e)}function p(e,t){var n,r=0,o=e&&e.length||0;for("function"!=typeof t&&(n=t,t=function(e){return e===n});r<o;){if(t(e[r]))return e[r];r+=1}}function g(e,t){var n=0,r=e.length;if(e&&r)for(;n<r;){if(!1===t(e[n],n))return;n+=1}}function y(e,t){var n=0,r=e.length,o=[];if(!e||!r)return o;for(;n<r;)o[n]=t(e[n],n),n+=1;return o}function h(e,t){return y(e,function(e){return e[t]})}function d(e){var t=[];return g(e,function(e){e&&t.push(e)}),t}function v(e){var t=[];return g(e,function(e){p(t,e)||t.push(e)}),t}function b(e,t){var n=[];return g(e,function(e){g(t,function(t){e===t&&n.push(e)})}),v(n)}function S(e,t){var n=[];return g(e,function(r,o){if(!t(r))return n=e.slice(o),!1}),n}function w(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function T(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function _(e,t){var n=0,r=e.length;if(!e||!r)return!1;for(;n<r;){if(!0===t(e[n],n))return!0;n+=1}return!1}function x(){var e,t=[].slice.call(arguments),n={};if(g(t,function(t,r){if(!r){if(!m(t))throw"Expected array as the first argument to durationsFormat.";e=t}"string"!=typeof t&&"function"!=typeof t?"number"!=typeof t?f(t)&&w(n,t):n.precision=t:n.template=t}),!e||!e.length)return[];n.returnMomentTypes=!0;var o,i=y(e,function(e){return e.format(n)}),a=b(r,v(h((o=[],g(i,function(e){o=o.concat(e)}),o),"type"))),l=n.largest;return l&&(a=a.slice(0,l)),n.returnMomentTypes=!1,n.outputTypes=a,y(e,function(e){return e.format(n)})}function O(){var n=[].slice.call(arguments),a=w({},this.format.defaults),s=this.asMilliseconds(),x=this.asMonths();"function"==typeof this.isValid&&!1===this.isValid()&&(s=0,x=0);var O=s<0,V=e.duration(Math.abs(s),"milliseconds"),D=e.duration(Math.abs(x),"months");g(n,function(e){"string"!=typeof e&&"function"!=typeof e?"number"!=typeof e?f(e)&&w(a,e):a.precision=e:a.template=e});var L={years:"y",months:"M",weeks:"w",days:"d",hours:"h",minutes:"m",seconds:"s",milliseconds:"S"},j={escape:/\[(.+?)\]/,years:/\*?[Yy]+/,months:/\*?M+/,weeks:/\*?[Ww]+/,days:/\*?[Dd]+/,hours:/\*?[Hh]+/,minutes:/\*?m+/,seconds:/\*?s+/,milliseconds:/\*?S+/,general:/.+?/};a.types=r;var M=function(e){return p(r,function(t){return j[t].test(e)})},k=new RegExp(y(r,function(e){return j[e].source}).join("|"),"g");a.duration=this;var P="function"==typeof a.template?a.template.apply(a):a.template,E=a.outputTypes,F=a.returnMomentTypes,I=a.largest,C=[];E||(m(a.stopTrim)&&(a.stopTrim=a.stopTrim.join("")),a.stopTrim&&g(a.stopTrim.match(k),function(e){var t=M(e);"escape"!==t&&"general"!==t&&C.push(t)}));var N=e.localeData();N||(N={}),g(T(c),function(e){"function"!=typeof c[e]?N["_"+e]||(N["_"+e]=c[e]):N[e]||(N[e]=c[e])}),g(T(N._durationTimeTemplates),function(e){P=P.replace("_"+e+"_",N._durationTimeTemplates[e])});var G=a.userLocale||e.locale(),R=a.useLeftUnits,U=a.usePlural,q=a.precision,z=a.forceLength,H=a.useGrouping,W=a.trunc,$=a.useSignificantDigits&&q>0,A=$?a.precision:0,B=A,K=a.minValue,Y=!1,J=a.maxValue,Q=!1,X=a.useToLocaleString,Z=a.groupingSeparator,ee=a.decimalSeparator,te=a.grouping;X=X&&t;var ne=a.trim;m(ne)&&(ne=ne.join(" ")),null===ne&&(I||J||$)&&(ne="all"),null!==ne&&!0!==ne&&"left"!==ne&&"right"!==ne||(ne="large"),!1===ne&&(ne="");var re=function(e){return e.test(ne)},oe=/both/,ie=/^all|[^sm]all/,ae=I>0||_([/large/,oe,ie],re),le=_([/small/,oe,ie],re),ue=_([/mid/,ie],re),se=_([/final/,ie],re),ce=y(P.match(k),function(e,t){var n=M(e);return"*"===e.slice(0,1)&&(e=e.slice(1),"escape"!==n&&"general"!==n&&C.push(n)),{index:t,length:e.length,text:"",token:"escape"===n?e.replace(j.escape,"$1"):e,type:"escape"===n||"general"===n?null:n}}),me={index:0,length:0,token:"",text:"",type:null},fe=[];R&&ce.reverse(),g(ce,function(e){if(e.type)return(me.type||me.text)&&fe.push(me),void(me=e);R?me.text=e.token+me.text:me.text+=e.token}),(me.type||me.text)&&fe.push(me),R&&fe.reverse();var pe=b(r,v(d(h(fe,"type"))));if(!pe.length)return h(fe,"text").join("");pe=y(pe,function(e,t){var n,r=t+1===pe.length,o=!t;n="years"===e||"months"===e?D.as(e):V.as(e);var i=Math.floor(n),l=n-i,u=p(fe,function(t){return e===t.type});return o&&J&&n>J&&(Q=!0),r&&K&&Math.abs(a.duration.as(e))<K&&(Y=!0),o&&null===z&&u.length>1&&(z=!0),V.subtract(i,e),D.subtract(i,e),{rawValue:n,wholeValue:i,decimalValue:r?l:0,isSmallest:r,isLargest:o,type:e,tokenLength:u.length}});var ge,ye=W?Math.floor:Math.round,he=function(e,t){var n=Math.pow(10,t);return ye(e*n)/n},de=!1,ve=!1,be=function(e,t){var n={useGrouping:H,groupingSeparator:Z,decimalSeparator:ee,grouping:te,useToLocaleString:X};return $&&(A<=0?(e.rawValue=0,e.wholeValue=0,e.decimalValue=0):(n.maximumSignificantDigits=A,e.significantDigits=A)),Q&&!ve&&(e.isLargest?(e.wholeValue=J,e.decimalValue=0):(e.wholeValue=0,e.decimalValue=0)),Y&&!ve&&(e.isSmallest?(e.wholeValue=K,e.decimalValue=0):(e.wholeValue=0,e.decimalValue=0)),e.isSmallest||e.significantDigits&&e.significantDigits-e.wholeValue.toString().length<=0?q<0?e.value=he(e.wholeValue,q):0===q?e.value=ye(e.wholeValue+e.decimalValue):$?(e.value=W?he(e.rawValue,A-e.wholeValue.toString().length):e.rawValue,e.wholeValue&&(A-=e.wholeValue.toString().length)):(n.fractionDigits=q,e.value=W?e.wholeValue+he(e.decimalValue,q):e.wholeValue+e.decimalValue):$&&e.wholeValue?(e.value=Math.round(he(e.wholeValue,e.significantDigits-e.wholeValue.toString().length)),A-=e.wholeValue.toString().length):e.value=e.wholeValue,e.tokenLength>1&&(z||de)&&(n.minimumIntegerDigits=e.tokenLength,ve&&n.maximumSignificantDigits<e.tokenLength&&delete n.maximumSignificantDigits),!de&&(e.value>0||""===ne||p(C,e.type)||p(E,e.type))&&(de=!0),e.formattedValue=l(e.value,n,G),n.useGrouping=!1,n.decimalSeparator=".",e.formattedValueEn=l(e.value,n,"en"),2===e.tokenLength&&"milliseconds"===e.type&&(e.formattedValueMS=l(e.value,{minimumIntegerDigits:3,useGrouping:!1},"en").slice(0,2)),e};if((pe=d(pe=y(pe,be))).length>1){var Se=function(e){return p(pe,function(t){return t.type===e})};g(o,function(e){var t=Se(e.type);t&&g(e.targets,function(e){var n=Se(e.type);n&&parseInt(t.formattedValueEn,10)===e.value&&(t.rawValue=0,t.wholeValue=0,t.decimalValue=0,n.rawValue+=1,n.wholeValue+=1,n.decimalValue=0,n.formattedValueEn=n.wholeValue.toString(),ve=!0)})})}return ve&&(de=!1,A=B,pe=d(pe=y(pe,be))),!E||Q&&!a.trim?(ae&&(pe=S(pe,function(e){return!e.isSmallest&&!e.wholeValue&&!p(C,e.type)})),I&&pe.length&&(pe=pe.slice(0,I)),le&&pe.length>1&&(ge=function(e){return!e.wholeValue&&!p(C,e.type)&&!e.isLargest},pe=S(pe.slice().reverse(),ge).reverse()),ue&&(pe=d(pe=y(pe,function(e,t){return t>0&&t<pe.length-1&&!e.wholeValue?null:e}))),!se||1!==pe.length||pe[0].wholeValue||!W&&pe[0].isSmallest&&pe[0].rawValue<K||(pe=[])):pe=d(pe=y(pe,function(e){return p(E,function(t){return e.type===t})?e:null})),F?pe:(g(fe,function(e){var t=L[e.type],n=p(pe,function(t){return t.type===e.type});if(t&&n){var r=n.formattedValueEn.split(".");r[0]=parseInt(r[0],10),r[1]?r[1]=parseFloat("0."+r[1],10):r[1]=null;var o=N.durationPluralKey(t,r[0],r[1]),a=function(e,t){var n=[];return g(T(t),function(r){if("_durationLabels"===r.slice(0,15)){var o=r.slice(15).toLowerCase();g(T(t[r]),function(i){i.slice(0,1)===e&&n.push({type:o,key:i,label:t[r][i]})})}}),n}(t,N),l=!1,s={};g(N._durationLabelTypes,function(t){var n=p(a,function(e){return e.type===t.type&&e.key===o});n&&(s[n.type]=n.label,i(e.text,t.string)&&(e.text=e.text.replace(t.string,n.label),l=!0))}),U&&!l&&(a.sort(u),g(a,function(t){return s[t.type]===t.label?!i(e.text,t.label)&&void 0:i(e.text,t.label)?(e.text=e.text.replace(t.label,s[t.type]),!1):void 0}))}}),(fe=y(fe,function(e){if(!e.type)return e.text;var t=p(pe,function(t){return t.type===e.type});if(!t)return"";var n="";return R&&(n+=e.text),(O&&Q||!O&&Y)&&(n+="< ",Q=!1,Y=!1),(O&&Y||!O&&Q)&&(n+="> ",Q=!1,Y=!1),O&&(t.value>0||""===ne||p(C,t.type)||p(E,t.type))&&(n+="-",O=!1),"milliseconds"===e.type&&t.formattedValueMS?n+=t.formattedValueMS:n+=t.formattedValue,R||(n+=e.text),n})).join("").replace(/(,| |:|\.)*$/,"").replace(/^(,| |:|\.)*/,""))}function V(){var e=this.duration,t=function(t){return e._data[t]},n=p(this.types,t),r=function(e,t){for(var n=e.length;n-=1;)if(t(e[n]))return e[n]}(this.types,t);switch(n){case"milliseconds":return"S __";case"seconds":case"minutes":return"*_MS_";case"hours":return"_HMS_";case"days":if(n===r)return"d __";case"weeks":return n===r?"w __":(null===this.trim&&(this.trim="both"),"w __, d __, h __");case"months":if(n===r)return"M __";case"years":return n===r?"y __":(null===this.trim&&(this.trim="both"),"y __, M __, d __");default:return null===this.trim&&(this.trim="both"),"y __, d __, h __, m __, s __"}}function D(e){if(!e)throw"Moment Duration Format init cannot find moment instance.";e.duration.format=x,e.duration.fn.format=O,e.duration.fn.format.defaults={trim:null,stopTrim:null,largest:null,maxValue:null,minValue:null,precision:0,trunc:!1,forceLength:null,userLocale:null,usePlural:!0,useLeftUnits:!1,useGrouping:!0,useSignificantDigits:!1,template:V,useToLocaleString:!0,groupingSeparator:",",decimalSeparator:".",grouping:[3]},e.updateLocale("en",c)}return t=!!((s=(s=!0)&&function(){try{(0).toLocaleString("i")}catch(e){return"RangeError"===e.name}return!1}())&&(s=(s=(s=s&&"1"===1..toLocaleString("en",{minimumIntegerDigits:1}))&&"01"===1..toLocaleString("en",{minimumIntegerDigits:2}))&&"001"===1..toLocaleString("en",{minimumIntegerDigits:3}))&&(s=(s=(s=(s=s&&"100"===99.99.toLocaleString("en",{maximumFractionDigits:0,minimumFractionDigits:0}))&&"100.0"===99.99.toLocaleString("en",{maximumFractionDigits:1,minimumFractionDigits:1}))&&"99.99"===99.99.toLocaleString("en",{maximumFractionDigits:2,minimumFractionDigits:2}))&&"99.990"===99.99.toLocaleString("en",{maximumFractionDigits:3,minimumFractionDigits:3}))&&(s=(s=(s=(s=(s=s&&"100"===99.99.toLocaleString("en",{maximumSignificantDigits:1}))&&"100"===99.99.toLocaleString("en",{maximumSignificantDigits:2}))&&"100"===99.99.toLocaleString("en",{maximumSignificantDigits:3}))&&"99.99"===99.99.toLocaleString("en",{maximumSignificantDigits:4}))&&"99.99"===99.99.toLocaleString("en",{maximumSignificantDigits:5}))&&(s=(s=s&&"1,000"===1e3.toLocaleString("en",{useGrouping:!0}))&&"1000"===1e3.toLocaleString("en",{useGrouping:!1}))),n=t&&"3.6"===3.55.toLocaleString("en",{useGrouping:!1,minimumIntegerDigits:1,minimumFractionDigits:1,maximumFractionDigits:1}),D(e),D},o=[n(1)],void 0===(i="function"==typeof(r=l)?r.apply(t,o):r)||(e.exports=i),a&&(a.momentDurationFormatSetup=a.moment?l(a.moment):l)},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(0),a=n.n(i),l=n(1),u=n.n(l);n(5);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",function(){return S});var d=[a.a.string,a.a.number,a.a.array,a.a.object],v=[a.a.string,a.a.array],b=[a.a.object,a.a.bool],S=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=m(t).call(this,e),n=!o||"object"!==s(o)&&"function"!=typeof o?f(r):o,h(f(n),"setTimer",function(){var e=n.props.interval;n.clearTimer(),t.pooledTimer||0===e||(n.timer=setInterval(function(){n.update(n.props)},e))}),h(f(n),"getTitle",function(){var e=n.props.titleFormat,r=t.getDatetime(n.props),o=e||t.globalFormat;return r.format(o)}),h(f(n),"clearTimer",function(){!t.pooledTimer&&n.timer&&(clearInterval(n.timer),n.timer=null),t.pooledTimer&&!n.timer&&t.removePooledElement(f(n))}),t.globalMoment||(t.globalMoment=u.a),n.state={content:""},n.timer=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.a.Component),g(t,null,[{key:"startPooledTimer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e4;t.clearPooledTimer(),t.pooledTimer=setInterval(function(){t.pooledElements.forEach(function(e){0!==e.props.interval&&e.update()})},e)}},{key:"clearPooledTimer",value:function(){t.pooledTimer&&(clearInterval(t.pooledTimer),t.pooledTimer=null,t.pooledElements=[])}},{key:"pushPooledElement",value:function(e){e instanceof t?-1===t.pooledElements.indexOf(e)&&t.pooledElements.push(e):console.error("Element not an instance of Moment.")}},{key:"removePooledElement",value:function(e){var n=t.pooledElements.indexOf(e);-1!==n&&t.pooledElements.splice(n,1)}},{key:"getDatetime",value:function(e){var n=e.utc,r=e.unix,o=e.date,i=e.locale,a=e.parse,l=e.tz,u=e.local;o=o||e.children,a=a||t.globalParse,u=u||t.globalLocal,l=l||t.globalTimezone,i=t.globalLocale?t.globalLocale:i||t.globalMoment.locale();var s=null;return s=n?t.globalMoment.utc(o,a,i):r?t.globalMoment(1e3*o,a,i):t.globalMoment(o,a,i),l?s=s.tz(l):u&&(s=s.local()),s}},{key:"getContent",value:function(e){var n=e.fromNow,r=e.fromNowDuring,o=e.from,i=e.add,a=e.subtract,l=e.toNow,s=e.to,c=e.ago,m=e.calendar,f=e.diff,p=e.duration,g=e.durationFromNow,y=e.unit,h=e.decimal,d=e.format;d=d||t.globalFormat;var v=t.getDatetime(e);i&&v.add(i),a&&v.subtract(a);var b=Boolean(r)&&-v.diff(u()())<r,S="";return S=d&&!b?v.format(d):o?v.from(o,c):n||b?v.fromNow(c):s?v.to(s,c):l?v.toNow(c):m?v.calendar(null,m):f?v.diff(f,y,h):p?v.diff(p):g?u()().diff(v):v.toString(),(p||g)&&(S=(S=u.a.duration(S)).format(d)),S=(t.globalFilter||e.filter)(S)}}]),g(t,[{key:"componentDidMount",value:function(){this.setTimer(),t.pooledTimer&&t.pushPooledElement(this)}},{key:"componentDidUpdate",value:function(e){var t=this.props.interval;e.interval!==t&&this.setTimer()}},{key:"componentWillUnmount",value:function(){this.clearTimer()}},{key:"update",value:function(e){var n=e||this.props,r=n.onChange,o=t.getContent(n);this.setState({content:o},function(){r(o)})}},{key:"render",value:function(){var e,n,r,i,a=this.props,l=a.withTitle,u=a.element,s=c(a,["withTitle","element"]),m=this.state.content,f=(e=s,n=t.propTypes,r=Object.keys(n),i=Object.assign({},e),Object.keys(i).filter(function(e){return-1!==r.indexOf(e)}).forEach(function(e){return delete i[e]}),i);return l&&(f.title=this.getTitle()),o.a.createElement(u||t.globalElement,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}({dateTime:t.getDatetime(this.props)},f),m)}}],[{key:"getDerivedStateFromProps",value:function(e){return{content:t.getContent(e)}}}]),t}();h(S,"propTypes",{element:a.a.any,date:a.a.oneOfType(d),parse:a.a.oneOfType(v),format:a.a.string,add:a.a.object,subtract:a.a.object,ago:a.a.bool,fromNow:a.a.bool,fromNowDuring:a.a.number,from:a.a.oneOfType(d),toNow:a.a.bool,to:a.a.oneOfType(d),calendar:a.a.oneOfType(b),unix:a.a.bool,utc:a.a.bool,local:a.a.bool,tz:a.a.string,withTitle:a.a.bool,titleFormat:a.a.string,locale:a.a.string,interval:a.a.number,diff:a.a.oneOfType(d),duration:a.a.oneOfType(d),durationFromNow:a.a.bool,unit:a.a.string,decimal:a.a.bool,filter:a.a.func,onChange:a.a.func}),h(S,"defaultProps",{element:null,fromNow:!1,toNow:!1,calendar:!1,ago:!1,unix:!1,utc:!1,local:!1,unit:null,withTitle:!1,decimal:!1,titleFormat:"",interval:6e4,filter:function(e){return e},onChange:function(){}}),h(S,"globalMoment",null),h(S,"globalLocale",null),h(S,"globalLocal",null),h(S,"globalFormat",null),h(S,"globalParse",null),h(S,"globalFilter",null),h(S,"globalElement","time"),h(S,"globalTimezone",null),h(S,"pooledElements",[]),h(S,"pooledTimer",null)}])});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BaseLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BaseLayout */ "./components/BaseLayout.js");
/* harmony import */ var _components_CasesOverview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CasesOverview */ "./components/CasesOverview.js");
/* harmony import */ var _components_CasesLineChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CasesLineChart */ "./components/CasesLineChart.js");
/* harmony import */ var _components_CasesBarChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CasesBarChart */ "./components/CasesBarChart.js");

var _jsxFileName = "/Users/Veselin/Work/virus-tracker/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Index = function Index(_ref) {
  var totalsData = _ref.totalsData,
      dateCasesData = _ref.dateCasesData,
      dateDiffCasesData = _ref.dateDiffCasesData;

  var prepareChartData = function prepareChartData(dataset) {
    return Object.fromEntries(Object.entries(dataset).map(function (entry) {
      return [entry[0], entry[1].cases];
    }));
  };

  var lineChartData = [{
    name: 'Заразени',
    data: prepareChartData(dateCasesData.infected)
  }, {
    name: 'Излекувани',
    data: prepareChartData(dateCasesData.cured)
  }, {
    name: 'Жертви',
    data: prepareChartData(dateCasesData.fatal)
  }];
  var barChartData = [{
    name: 'Заразени',
    data: prepareChartData(dateDiffCasesData.infected)
  }, {
    name: 'Излекувани',
    data: prepareChartData(dateDiffCasesData.cured)
  }, {
    name: 'Жертви',
    data: prepareChartData(dateDiffCasesData.fatal)
  }];
  return __jsx(_components_BaseLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    openGraph: {
      images: [{
        url: "https://coronavirus-bulgaria.org/static/images/open_graph_linechart.png?v=".concat("development"),
        width: 1200,
        height: 630,
        alt: 'Хронология на заразата'
      }]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "d-sm-flex align-items-center justify-content-between my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h1", {
    className: "h3 mb-0 text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\u041D\u0430\u0447\u0430\u043B\u043E")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0430 \u0430\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F:", __jsx(react_moment__WEBPACK_IMPORTED_MODULE_5___default.a, {
    format: "DD.MM.YYYY - HH:mm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, totalsData.timestamp)), __jsx(_components_CasesOverview__WEBPACK_IMPORTED_MODULE_7__["default"], {
    infected: totalsData.infected,
    cured: totalsData.cured,
    fatal: totalsData.fatal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "shadow mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
    className: "py-3 d-flex flex-row align-items-center justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u0425\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043D\u0430 \u0437\u0430\u0440\u0430\u0437\u0430\u0442\u0430")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_components_CasesLineChart__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: lineChartData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "shadow mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
    className: "py-3 d-flex flex-row align-items-center justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u0434\u043D\u0438")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_components_CasesBarChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: barChartData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })))))));
};

Index.getInitialProps = function _callee() {
  var totalsDataset, totalsData, dateCasesDataset, dateCasesData, dateDiffCasesDataset, dateDiffCasesData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/TotalsDataset.json'));

        case 2:
          totalsDataset = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(totalsDataset.json());

        case 5:
          totalsData = _context.sent;
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateCasesDataset.json'));

        case 8:
          dateCasesDataset = _context.sent;
          _context.next = 11;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dateCasesDataset.json());

        case 11:
          dateCasesData = _context.sent;
          _context.next = 14;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateDiffCasesDataset.json'));

        case 14:
          dateDiffCasesDataset = _context.sent;
          _context.next = 17;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dateDiffCasesDataset.json());

        case 17:
          dateDiffCasesData = _context.sent;
          return _context.abrupt("return", {
            totalsData: totalsData,
            dateCasesData: dateCasesData,
            dateDiffCasesData: dateDiffCasesData
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.2e734e213cda7a03410f.hot-update.js.map