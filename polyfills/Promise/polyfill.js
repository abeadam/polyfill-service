!function(n){function t(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return n[e].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=n,t.c=r,t.p="",t(0)}({0:/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
function(n,t,r){(function(n){var t=r(/*! ./yaku */84);try{n.Promise=t,window.Promise=t}catch(e){}}).call(t,function(){return this}())},84:/*!*********************!*\
  !*** ./src/yaku.js ***!
  \*********************/
function(n,t){(function(t){!function(){"use strict";function r(){return en[$][z]||B}function e(n,t){for(var r in t)n.prototype[r]=t[r];return n}function o(n){return n&&"object"==typeof n}function i(n){return"function"==typeof n}function u(n,t){return n instanceof t}function c(n){return u(n,L)}function f(n,t,r){if(!t(n))throw v(r)}function a(){try{return S.apply(F,arguments)}catch(n){return nn.e=n,nn}}function s(n,t){return S=n,F=t,a}function l(n,t){function r(){for(var r=0;r<o;)t(e[r],e[r+1]),e[r++]=R,e[r++]=R;o=0,e.length>n&&(e.length=n)}var e=I(n),o=0;return function(n,t){e[o++]=n,e[o++]=t,2===o&&en.nextTick(r)}}function h(n,t){var r,e,o,c,f=0;if(!n)throw v(N);var a=n[en[$][q]];if(i(a))e=a.call(n);else{if(!i(n.next)){if(u(n,I)){for(r=n.length;f<r;)t(n[f],f++);return f}throw v(N)}e=n}for(;!(o=e.next()).done;)if(c=s(t)(o.value,f++),c===nn)throw i(e[D])&&e[D](),c.e;return f}function v(n){return new TypeError(n)}function _(n){return(n?"":Q)+(new L).stack}function p(n,t){var r="on"+n.toLowerCase(),e=Y[r];H&&H.listeners(n).length?n===Z?H.emit(n,t._v,t):H.emit(n,t):e?e({reason:t._v,promise:t}):en[n](t._v,t)}function d(n){return n&&n._Yaku}function w(n){if(d(n))return new n(tn);var t,r,e;return t=new n(function(n,o){if(t)throw v();r=n,e=o}),f(r,i),f(e,i),t}function m(n,t){return function(r){E&&(n[K]=_(!0)),t===O?C(n,r):g(n,t,r)}}function k(n,t,r,e){return i(r)&&(t._onFulfilled=r),i(e)&&(n[G]&&p(X,n),t._onRejected=e),E&&(t._pre=n),n[n._pCount++]=t,n._s!==U&&on(n,t),t}function y(n){if(n._umark)return!0;n._umark=!0;for(var t,r=0,e=n._pCount;r<e;)if(t=n[r++],t._onRejected||y(t))return!0}function j(n,t){function r(n){return e.push(n.replace(/^\s+|\s+$/g,""))}var e=[];return E&&(t[K]&&r(t[K]),function o(n){n&&J in n&&(o(n._next),r(n[J]+""),o(n._pre))}(t)),(n&&n.stack?n.stack:n)+("\n"+e.join("\n")).replace(rn,"")}function x(n,t){return n(t)}function g(n,t,r){var e=0,o=n._pCount;if(n._s===U)for(n._s=t,n._v=r,t===A&&(E&&c(r)&&(r.longStack=j(r,n)),un(n));e<o;)on(n,n[e++]);return n}function C(n,t){if(t===n&&t)return g(n,A,v(V)),n;if(t!==P&&(i(t)||o(t))){var r=s(T)(t);if(r===nn)return g(n,A,r.e),n;i(r)?(E&&d(t)&&(n._next=t),d(t)?b(n,t,r):en.nextTick(function(){b(n,t,r)})):g(n,O,t)}else g(n,O,t);return n}function T(n){return n.then}function b(n,t,r){var e=s(r,t)(function(r){t&&(t=P,C(n,r))},function(r){t&&(t=P,g(n,A,r))});e===nn&&t&&(g(n,A,e.e),t=P)}var R,S,F,P=null,Y="object"==typeof window?window:t,E=!1,H=Y.process,I=Array,L=Error,A=0,O=1,U=2,$="Symbol",q="iterator",z="species",B=$+"("+z+")",D="return",G="_uh",J="_pt",K="_st",M="Invalid this",N="Invalid argument",Q="\nFrom previous ",V="Chaining cycle detected for promise",W="Uncaught (in promise)",X="rejectionHandled",Z="unhandledRejection",nn={e:P},tn=function(){},rn=/^.+\/node_modules\/yaku\/.+\n?/gm,en=n.exports=function(n){var t,r=this;if(!o(r)||r._s!==R)throw v(M);if(r._s=U,E&&(r[J]=_()),n!==tn){if(!i(n))throw v(N);t=s(n)(m(r,O),m(r,A)),t===nn&&g(r,A,t.e)}};en["default"]=en,e(en,{then:function(n,t){if(void 0===this._s)throw v();return k(this,w(en.speciesConstructor(this,en)),n,t)},"catch":function(n){return this.then(R,n)},_pCount:0,_pre:P,_Yaku:1}),en.resolve=function(n){return d(n)?n:C(w(this),n)},en.reject=function(n){return g(w(this),A,n)},en.race=function(n){var t=this,r=w(t),e=function(n){g(r,O,n)},o=function(n){g(r,A,n)},i=s(h)(n,function(n){t.resolve(n).then(e,o)});return i===nn?t.reject(i.e):r},en.all=function(n){function t(n){g(o,A,n)}var r,e=this,o=w(e),i=[];return r=s(h)(n,function(n,u){e.resolve(n).then(function(n){i[u]=n,--r||g(o,O,i)},t)}),r===nn?e.reject(r.e):(r||g(o,O,[]),o)},en.Symbol=Y[$]||{},s(function(){Object.defineProperty(en,r(),{get:function(){return this}})})(),en.speciesConstructor=function(n,t){var e=n.constructor;return e?e[r()]||t:t},en.unhandledRejection=function(n,t){try{Y.console.error(W,E?t.longStack:j(n,t))}catch(r){}},en.rejectionHandled=tn,en.enableLongStackTrace=function(){E=!0},en.nextTick=H?H.nextTick:function(n){setTimeout(n)},en._Yaku=1;var on=l(999,function(n,t){var r,e;return e=n._s?t._onFulfilled:t._onRejected,e===R?void g(t,n._s,n._v):(r=s(x)(e,n._v),r===nn?void g(t,A,r.e):void C(t,r))}),un=l(9,function(n){y(n)||(n[G]=1,p(Z,n))})}()}).call(t,function(){return this}())}});