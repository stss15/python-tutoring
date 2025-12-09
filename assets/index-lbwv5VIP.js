(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function a(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(u){if(u.ep)return;u.ep=!0;const d=a(u);fetch(u.href,d)}})();function bg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uc={exports:{}},Ua={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function Ib(){if(r_)return Ua;r_=1;var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(r,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var m in u)m!=="key"&&(d[m]=u[m])}else d=u;return u=d.ref,{$$typeof:s,type:r,key:f,ref:u!==void 0?u:null,props:d}}return Ua.Fragment=n,Ua.jsx=a,Ua.jsxs=a,Ua}var o_;function Bb(){return o_||(o_=1,Uc.exports=Ib()),Uc.exports}var y=Bb(),Ic={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function Hb(){if(u_)return ue;u_=1;var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),C=Symbol.iterator;function z(b){return b===null||typeof b!="object"?null:(b=C&&b[C]||b["@@iterator"],typeof b=="function"?b:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,te={};function le(b,D,I){this.props=b,this.context=D,this.refs=te,this.updater=I||U}le.prototype.isReactComponent={},le.prototype.setState=function(b,D){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,D,"setState")},le.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function re(){}re.prototype=le.prototype;function oe(b,D,I){this.props=b,this.context=D,this.refs=te,this.updater=I||U}var ne=oe.prototype=new re;ne.constructor=oe,q(ne,le.prototype),ne.isPureReactComponent=!0;var $=Array.isArray;function ie(){}var G={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function Y(b,D,I){var V=I.ref;return{$$typeof:s,type:b,key:D,ref:V!==void 0?V:null,props:I}}function X(b,D){return Y(b.type,D,b.props)}function Se(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function me(b){var D={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(I){return D[I]})}var Pe=/\/+/g;function Ne(b,D){return typeof b=="object"&&b!==null&&b.key!=null?me(""+b.key):D.toString(36)}function W(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(ie,ie):(b.status="pending",b.then(function(D){b.status==="pending"&&(b.status="fulfilled",b.value=D)},function(D){b.status==="pending"&&(b.status="rejected",b.reason=D)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function R(b,D,I,V,se){var _e=typeof b;(_e==="undefined"||_e==="boolean")&&(b=null);var Re=!1;if(b===null)Re=!0;else switch(_e){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(b.$$typeof){case s:case n:Re=!0;break;case S:return Re=b._init,R(Re(b._payload),D,I,V,se)}}if(Re)return se=se(b),Re=V===""?"."+Ne(b,0):V,$(se)?(I="",Re!=null&&(I=Re.replace(Pe,"$&/")+"/"),R(se,D,I,"",function(Vs){return Vs})):se!=null&&(Se(se)&&(se=X(se,I+(se.key==null||b&&b.key===se.key?"":(""+se.key).replace(Pe,"$&/")+"/")+Re)),D.push(se)),1;Re=0;var _t=V===""?".":V+":";if($(b))for(var Xe=0;Xe<b.length;Xe++)V=b[Xe],_e=_t+Ne(V,Xe),Re+=R(V,D,I,_e,se);else if(Xe=z(b),typeof Xe=="function")for(b=Xe.call(b),Xe=0;!(V=b.next()).done;)V=V.value,_e=_t+Ne(V,Xe++),Re+=R(V,D,I,_e,se);else if(_e==="object"){if(typeof b.then=="function")return R(W(b),D,I,V,se);throw D=String(b),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return Re}function B(b,D,I){if(b==null)return b;var V=[],se=0;return R(b,V,"","",function(_e){return D.call(I,_e,se++)}),V}function Z(b){if(b._status===-1){var D=b._result;D=D(),D.then(function(I){(b._status===0||b._status===-1)&&(b._status=1,b._result=I)},function(I){(b._status===0||b._status===-1)&&(b._status=2,b._result=I)}),b._status===-1&&(b._status=0,b._result=D)}if(b._status===1)return b._result.default;throw b._result}var P=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},ce={map:B,forEach:function(b,D,I){B(b,function(){D.apply(this,arguments)},I)},count:function(b){var D=0;return B(b,function(){D++}),D},toArray:function(b){return B(b,function(D){return D})||[]},only:function(b){if(!Se(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ue.Activity=v,ue.Children=ce,ue.Component=le,ue.Fragment=a,ue.Profiler=u,ue.PureComponent=oe,ue.StrictMode=r,ue.Suspense=_,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ue.__COMPILER_RUNTIME={__proto__:null,c:function(b){return G.H.useMemoCache(b)}},ue.cache=function(b){return function(){return b.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(b,D,I){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var V=q({},b.props),se=b.key;if(D!=null)for(_e in D.key!==void 0&&(se=""+D.key),D)!K.call(D,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&D.ref===void 0||(V[_e]=D[_e]);var _e=arguments.length-2;if(_e===1)V.children=I;else if(1<_e){for(var Re=Array(_e),_t=0;_t<_e;_t++)Re[_t]=arguments[_t+2];V.children=Re}return Y(b.type,se,V)},ue.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:d,_context:b},b},ue.createElement=function(b,D,I){var V,se={},_e=null;if(D!=null)for(V in D.key!==void 0&&(_e=""+D.key),D)K.call(D,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(se[V]=D[V]);var Re=arguments.length-2;if(Re===1)se.children=I;else if(1<Re){for(var _t=Array(Re),Xe=0;Xe<Re;Xe++)_t[Xe]=arguments[Xe+2];se.children=_t}if(b&&b.defaultProps)for(V in Re=b.defaultProps,Re)se[V]===void 0&&(se[V]=Re[V]);return Y(b,_e,se)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(b){return{$$typeof:m,render:b}},ue.isValidElement=Se,ue.lazy=function(b){return{$$typeof:S,_payload:{_status:-1,_result:b},_init:Z}},ue.memo=function(b,D){return{$$typeof:p,type:b,compare:D===void 0?null:D}},ue.startTransition=function(b){var D=G.T,I={};G.T=I;try{var V=b(),se=G.S;se!==null&&se(I,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ie,P)}catch(_e){P(_e)}finally{D!==null&&I.types!==null&&(D.types=I.types),G.T=D}},ue.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ue.use=function(b){return G.H.use(b)},ue.useActionState=function(b,D,I){return G.H.useActionState(b,D,I)},ue.useCallback=function(b,D){return G.H.useCallback(b,D)},ue.useContext=function(b){return G.H.useContext(b)},ue.useDebugValue=function(){},ue.useDeferredValue=function(b,D){return G.H.useDeferredValue(b,D)},ue.useEffect=function(b,D){return G.H.useEffect(b,D)},ue.useEffectEvent=function(b){return G.H.useEffectEvent(b)},ue.useId=function(){return G.H.useId()},ue.useImperativeHandle=function(b,D,I){return G.H.useImperativeHandle(b,D,I)},ue.useInsertionEffect=function(b,D){return G.H.useInsertionEffect(b,D)},ue.useLayoutEffect=function(b,D){return G.H.useLayoutEffect(b,D)},ue.useMemo=function(b,D){return G.H.useMemo(b,D)},ue.useOptimistic=function(b,D){return G.H.useOptimistic(b,D)},ue.useReducer=function(b,D,I){return G.H.useReducer(b,D,I)},ue.useRef=function(b){return G.H.useRef(b)},ue.useState=function(b){return G.H.useState(b)},ue.useSyncExternalStore=function(b,D,I){return G.H.useSyncExternalStore(b,D,I)},ue.useTransition=function(){return G.H.useTransition()},ue.version="19.2.1",ue}var c_;function Cd(){return c_||(c_=1,Ic.exports=Hb()),Ic.exports}var L=Cd();const ai=bg(L);var Bc={exports:{}},Ia={},Hc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function Yb(){return d_||(d_=1,(function(s){function n(R,B){var Z=R.length;R.push(B);e:for(;0<Z;){var P=Z-1>>>1,ce=R[P];if(0<u(ce,B))R[P]=B,R[Z]=ce,Z=P;else break e}}function a(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var B=R[0],Z=R.pop();if(Z!==B){R[0]=Z;e:for(var P=0,ce=R.length,b=ce>>>1;P<b;){var D=2*(P+1)-1,I=R[D],V=D+1,se=R[V];if(0>u(I,Z))V<ce&&0>u(se,I)?(R[P]=se,R[V]=Z,P=V):(R[P]=I,R[D]=Z,P=D);else if(V<ce&&0>u(se,Z))R[P]=se,R[V]=Z,P=V;else break e}}return B}function u(R,B){var Z=R.sortIndex-B.sortIndex;return Z!==0?Z:R.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;s.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();s.unstable_now=function(){return f.now()-m}}var _=[],p=[],S=1,v=null,C=3,z=!1,U=!1,q=!1,te=!1,le=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;function ne(R){for(var B=a(p);B!==null;){if(B.callback===null)r(p);else if(B.startTime<=R)r(p),B.sortIndex=B.expirationTime,n(_,B);else break;B=a(p)}}function $(R){if(q=!1,ne(R),!U)if(a(_)!==null)U=!0,ie||(ie=!0,me());else{var B=a(p);B!==null&&W($,B.startTime-R)}}var ie=!1,G=-1,K=5,Y=-1;function X(){return te?!0:!(s.unstable_now()-Y<K)}function Se(){if(te=!1,ie){var R=s.unstable_now();Y=R;var B=!0;try{e:{U=!1,q&&(q=!1,re(G),G=-1),z=!0;var Z=C;try{t:{for(ne(R),v=a(_);v!==null&&!(v.expirationTime>R&&X());){var P=v.callback;if(typeof P=="function"){v.callback=null,C=v.priorityLevel;var ce=P(v.expirationTime<=R);if(R=s.unstable_now(),typeof ce=="function"){v.callback=ce,ne(R),B=!0;break t}v===a(_)&&r(_),ne(R)}else r(_);v=a(_)}if(v!==null)B=!0;else{var b=a(p);b!==null&&W($,b.startTime-R),B=!1}}break e}finally{v=null,C=Z,z=!1}B=void 0}}finally{B?me():ie=!1}}}var me;if(typeof oe=="function")me=function(){oe(Se)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Ne=Pe.port2;Pe.port1.onmessage=Se,me=function(){Ne.postMessage(null)}}else me=function(){le(Se,0)};function W(R,B){G=le(function(){R(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(R){R.callback=null},s.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<R?Math.floor(1e3/R):5},s.unstable_getCurrentPriorityLevel=function(){return C},s.unstable_next=function(R){switch(C){case 1:case 2:case 3:var B=3;break;default:B=C}var Z=C;C=B;try{return R()}finally{C=Z}},s.unstable_requestPaint=function(){te=!0},s.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Z=C;C=R;try{return B()}finally{C=Z}},s.unstable_scheduleCallback=function(R,B,Z){var P=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?P+Z:P):Z=P,R){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Z+ce,R={id:S++,callback:B,priorityLevel:R,startTime:Z,expirationTime:ce,sortIndex:-1},Z>P?(R.sortIndex=Z,n(p,R),a(_)===null&&R===a(p)&&(q?(re(G),G=-1):q=!0,W($,Z-P))):(R.sortIndex=ce,n(_,R),U||z||(U=!0,ie||(ie=!0,me()))),R},s.unstable_shouldYield=X,s.unstable_wrapCallback=function(R){var B=C;return function(){var Z=C;C=B;try{return R.apply(this,arguments)}finally{C=Z}}}})(Yc)),Yc}var f_;function qb(){return f_||(f_=1,Hc.exports=Yb()),Hc.exports}var qc={exports:{}},pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function Gb(){if(h_)return pt;h_=1;var s=Cd();function n(_){var p="https://react.dev/errors/"+_;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+_+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(_,p,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:v==null?null:""+v,children:_,containerInfo:p,implementation:S}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,p){if(_==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,pt.createPortal=function(_,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return d(_,p,null,S)},pt.flushSync=function(_){var p=f.T,S=r.p;try{if(f.T=null,r.p=2,_)return _()}finally{f.T=p,r.p=S,r.d.f()}},pt.preconnect=function(_,p){typeof _=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(_,p))},pt.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},pt.preinit=function(_,p){if(typeof _=="string"&&p&&typeof p.as=="string"){var S=p.as,v=m(S,p.crossOrigin),C=typeof p.integrity=="string"?p.integrity:void 0,z=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(_,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:C,fetchPriority:z}):S==="script"&&r.d.X(_,{crossOrigin:v,integrity:C,fetchPriority:z,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},pt.preinitModule=function(_,p){if(typeof _=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=m(p.as,p.crossOrigin);r.d.M(_,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(_)},pt.preload=function(_,p){if(typeof _=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,v=m(S,p.crossOrigin);r.d.L(_,S,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},pt.preloadModule=function(_,p){if(typeof _=="string")if(p){var S=m(p.as,p.crossOrigin);r.d.m(_,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(_)},pt.requestFormReset=function(_){r.d.r(_)},pt.unstable_batchedUpdates=function(_,p){return _(p)},pt.useFormState=function(_,p,S){return f.H.useFormState(_,p,S)},pt.useFormStatus=function(){return f.H.useHostTransitionStatus()},pt.version="19.2.1",pt}var p_;function Vb(){if(p_)return qc.exports;p_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(n){console.error(n)}}return s(),qc.exports=Gb(),qc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function Fb(){if(m_)return Ia;m_=1;var s=qb(),n=Cd(),a=Vb();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(d(e)!==e)throw Error(r(188))}function p(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(r(188));return t!==e?null:e}for(var i=e,l=t;;){var o=i.return;if(o===null)break;var c=o.alternate;if(c===null){if(l=o.return,l!==null){i=l;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===i)return _(o),e;if(c===l)return _(o),t;c=c.sibling}throw Error(r(188))}if(i.return!==l.return)i=o,l=c;else{for(var h=!1,g=o.child;g;){if(g===i){h=!0,i=o,l=c;break}if(g===l){h=!0,l=o,i=c;break}g=g.sibling}if(!h){for(g=c.child;g;){if(g===i){h=!0,i=c,l=o;break}if(g===l){h=!0,l=c,i=o;break}g=g.sibling}if(!h)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,C=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),re=Symbol.for("react.consumer"),oe=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),Se=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=Se&&e[Se]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Symbol.for("react.client.reference");function Ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case le:return"Profiler";case te:return"StrictMode";case $:return"Suspense";case ie:return"SuspenseList";case Y:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case oe:return e.displayName||"Context";case re:return(e._context.displayName||"Context")+".Consumer";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:Ne(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return Ne(e(t))}catch{}}return null}var W=Array.isArray,R=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},P=[],ce=-1;function b(e){return{current:e}}function D(e){0>ce||(e.current=P[ce],P[ce]=null,ce--)}function I(e,t){ce++,P[ce]=e.current,e.current=t}var V=b(null),se=b(null),_e=b(null),Re=b(null);function _t(e,t){switch(I(_e,t),I(se,e),I(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Om(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Om(t),e=Dm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(V),I(V,e)}function Xe(){D(V),D(se),D(_e)}function Vs(e){e.memoizedState!==null&&I(Re,e);var t=V.current,i=Dm(t,e.type);t!==i&&(I(se,e),I(V,i))}function gl(e){se.current===e&&(D(V),D(se)),Re.current===e&&(D(Re),za._currentValue=Z)}var vo,lf;function pi(e){if(vo===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);vo=t&&t[1]||"",lf=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vo+e+lf}var bo=!1;function xo(e,t){if(!e||bo)return"";bo=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(O){var A=O}Reflect.construct(e,[],k)}else{try{k.call()}catch(O){A=O}e.call(k.prototype)}}else{try{throw Error()}catch(O){A=O}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(O){if(O&&A&&typeof O.stack=="string")return[O.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),h=c[0],g=c[1];if(h&&g){var x=h.split(`
`),N=g.split(`
`);for(o=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;o<N.length&&!N[o].includes("DetermineComponentFrameRoot");)o++;if(l===x.length||o===N.length)for(l=x.length-1,o=N.length-1;1<=l&&0<=o&&x[l]!==N[o];)o--;for(;1<=l&&0<=o;l--,o--)if(x[l]!==N[o]){if(l!==1||o!==1)do if(l--,o--,0>o||x[l]!==N[o]){var M=`
`+x[l].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=l&&0<=o);break}}}finally{bo=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?pi(i):""}function my(e,t){switch(e.tag){case 26:case 27:case 5:return pi(e.type);case 16:return pi("Lazy");case 13:return e.child!==t&&t!==null?pi("Suspense Fallback"):pi("Suspense");case 19:return pi("SuspenseList");case 0:case 15:return xo(e.type,!1);case 11:return xo(e.type.render,!1);case 1:return xo(e.type,!0);case 31:return pi("Activity");default:return""}}function rf(e){try{var t="",i=null;do t+=my(e,i),i=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Co=Object.prototype.hasOwnProperty,So=s.unstable_scheduleCallback,Eo=s.unstable_cancelCallback,_y=s.unstable_shouldYield,gy=s.unstable_requestPaint,Rt=s.unstable_now,yy=s.unstable_getCurrentPriorityLevel,of=s.unstable_ImmediatePriority,uf=s.unstable_UserBlockingPriority,yl=s.unstable_NormalPriority,vy=s.unstable_LowPriority,cf=s.unstable_IdlePriority,by=s.log,xy=s.unstable_setDisableYieldValue,Fs=null,Ot=null;function jn(e){if(typeof by=="function"&&xy(e),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(Fs,e)}catch{}}var Dt=Math.clz32?Math.clz32:Ey,Cy=Math.log,Sy=Math.LN2;function Ey(e){return e>>>=0,e===0?32:31-(Cy(e)/Sy|0)|0}var vl=256,bl=262144,xl=4194304;function mi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Cl(e,t,i){var l=e.pendingLanes;if(l===0)return 0;var o=0,c=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~c,l!==0?o=mi(l):(h&=g,h!==0?o=mi(h):i||(i=g&~e,i!==0&&(o=mi(i))))):(g=l&~c,g!==0?o=mi(g):h!==0?o=mi(h):i||(i=l&~e,i!==0&&(o=mi(i)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,i=t&-t,c>=i||c===32&&(i&4194048)!==0)?t:o}function Qs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function wy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function df(){var e=xl;return xl<<=1,(xl&62914560)===0&&(xl=4194304),e}function wo(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Xs(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ty(e,t,i,l,o,c){var h=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var g=e.entanglements,x=e.expirationTimes,N=e.hiddenUpdates;for(i=h&~i;0<i;){var M=31-Dt(i),k=1<<M;g[M]=0,x[M]=-1;var A=N[M];if(A!==null)for(N[M]=null,M=0;M<A.length;M++){var O=A[M];O!==null&&(O.lane&=-536870913)}i&=~k}l!==0&&ff(e,l,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(h&~t))}function ff(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Dt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|i&261930}function hf(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var l=31-Dt(i),o=1<<l;o&t|e[l]&t&&(e[l]|=t),i&=~o}}function pf(e,t){var i=t&-t;return i=(i&42)!==0?1:To(i),(i&(e.suspendedLanes|t))!==0?0:i}function To(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function No(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function mf(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:e_(e.type))}function _f(e,t){var i=B.p;try{return B.p=e,t()}finally{B.p=i}}var kn=Math.random().toString(36).slice(2),ut="__reactFiber$"+kn,vt="__reactProps$"+kn,Vi="__reactContainer$"+kn,Ao="__reactEvents$"+kn,Ny="__reactListeners$"+kn,Ay="__reactHandles$"+kn,gf="__reactResources$"+kn,Ks="__reactMarker$"+kn;function Ro(e){delete e[ut],delete e[vt],delete e[Ao],delete e[Ny],delete e[Ay]}function Fi(e){var t=e[ut];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Vi]||i[ut]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Im(e);e!==null;){if(i=e[ut])return i;e=Im(e)}return t}e=i,i=e.parentNode}return null}function Qi(e){if(e=e[ut]||e[Vi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Zs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Xi(e){var t=e[gf];return t||(t=e[gf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[Ks]=!0}var yf=new Set,vf={};function _i(e,t){Ki(e,t),Ki(e+"Capture",t)}function Ki(e,t){for(vf[e]=t,e=0;e<t.length;e++)yf.add(t[e])}var Ry=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bf={},xf={};function Oy(e){return Co.call(xf,e)?!0:Co.call(bf,e)?!1:Ry.test(e)?xf[e]=!0:(bf[e]=!0,!1)}function Sl(e,t,i){if(Oy(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function El(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function cn(e,t,i,l){if(l===null)e.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+l)}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dy(e,t,i){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var o=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(h){i=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oo(e){if(!e._valueTracker){var t=Cf(e)?"checked":"value";e._valueTracker=Dy(e,t,""+e[t])}}function Sf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),l="";return e&&(l=Cf(e)?e.checked?"true":"false":e.value),e=l,e!==i?(t.setValue(e),!0):!1}function wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var My=/[\n"\\]/g;function Yt(e){return e.replace(My,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Do(e,t,i,l,o,c,h,g){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ht(t)):e.value!==""+Ht(t)&&(e.value=""+Ht(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?Mo(e,h,Ht(t)):i!=null?Mo(e,h,Ht(i)):l!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Ht(g):e.removeAttribute("name")}function Ef(e,t,i,l,o,c,h,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Oo(e);return}i=i!=null?""+Ht(i):"",t=t!=null?""+Ht(t):i,g||t===e.value||(e.value=t),e.defaultValue=t}l=l??o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Oo(e)}function Mo(e,t,i){t==="number"&&wl(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Zi(e,t,i,l){if(e=e.options,t){t={};for(var o=0;o<i.length;o++)t["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=t.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&l&&(e[i].defaultSelected=!0)}else{for(i=""+Ht(i),t=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,l&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function wf(e,t,i){if(t!=null&&(t=""+Ht(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+Ht(i):""}function Tf(e,t,i,l){if(t==null){if(l!=null){if(i!=null)throw Error(r(92));if(W(l)){if(1<l.length)throw Error(r(93));l=l[0]}i=l}i==null&&(i=""),t=i}i=Ht(t),e.defaultValue=i,l=e.textContent,l===i&&l!==""&&l!==null&&(e.value=l),Oo(e)}function Pi(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var zy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nf(e,t,i){var l=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,i):typeof i!="number"||i===0||zy.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function Af(e,t,i){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var o in t)l=t[o],t.hasOwnProperty(o)&&i[o]!==l&&Nf(e,o,l)}else for(var c in t)t.hasOwnProperty(c)&&Nf(e,c,t[c])}function zo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ky=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tl(e){return ky.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var jo=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ji=null,Wi=null;function Rf(e){var t=Qi(e);if(t&&(e=t.stateNode)){var i=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Do(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var l=i[t];if(l!==e&&l.form===e.form){var o=l[vt]||null;if(!o)throw Error(r(90));Do(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<i.length;t++)l=i[t],l.form===e.form&&Sf(l)}break e;case"textarea":wf(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&Zi(e,!!i.multiple,t,!1)}}}var Lo=!1;function Of(e,t,i){if(Lo)return e(t,i);Lo=!0;try{var l=e(t);return l}finally{if(Lo=!1,(Ji!==null||Wi!==null)&&(hr(),Ji&&(t=Ji,e=Wi,Wi=Ji=null,Rf(t),e)))for(t=0;t<e.length;t++)Rf(e[t])}}function Ps(e,t){var i=e.stateNode;if(i===null)return null;var l=i[vt]||null;if(l===null)return null;i=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,t,typeof i));return i}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uo=!1;if(fn)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Uo=!1}var Ln=null,Io=null,Nl=null;function Df(){if(Nl)return Nl;var e,t=Io,i=t.length,l,o="value"in Ln?Ln.value:Ln.textContent,c=o.length;for(e=0;e<i&&t[e]===o[e];e++);var h=i-e;for(l=1;l<=h&&t[i-l]===o[c-l];l++);return Nl=o.slice(e,1<l?1-l:void 0)}function Al(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function Mf(){return!1}function bt(e){function t(i,l,o,c,h){this._reactName=i,this._targetInst=o,this.type=l,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(i=e[g],this[g]=i?i(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Rl:Mf,this.isPropagationStopped=Mf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),t}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=bt(gi),Ws=v({},gi,{view:0,detail:0}),Ly=bt(Ws),Bo,Ho,$s,Dl=v({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$s&&($s&&e.type==="mousemove"?(Bo=e.screenX-$s.screenX,Ho=e.screenY-$s.screenY):Ho=Bo=0,$s=e),Bo)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),zf=bt(Dl),Uy=v({},Dl,{dataTransfer:0}),Iy=bt(Uy),By=v({},Ws,{relatedTarget:0}),Yo=bt(By),Hy=v({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),Yy=bt(Hy),qy=v({},gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gy=bt(qy),Vy=v({},gi,{data:0}),jf=bt(Vy),Fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ky(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xy[e])?!!t[e]:!1}function qo(){return Ky}var Zy=v({},Ws,{key:function(e){if(e.key){var t=Fy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qo,charCode:function(e){return e.type==="keypress"?Al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Py=bt(Zy),Jy=v({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=bt(Jy),Wy=v({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qo}),$y=bt(Wy),ev=v({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),tv=bt(ev),nv=v({},Dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iv=bt(nv),sv=v({},gi,{newState:0,oldState:0}),av=bt(sv),lv=[9,13,27,32],Go=fn&&"CompositionEvent"in window,ea=null;fn&&"documentMode"in document&&(ea=document.documentMode);var rv=fn&&"TextEvent"in window&&!ea,Lf=fn&&(!Go||ea&&8<ea&&11>=ea),Uf=" ",If=!1;function Bf(e,t){switch(e){case"keyup":return lv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $i=!1;function ov(e,t){switch(e){case"compositionend":return Hf(t);case"keypress":return t.which!==32?null:(If=!0,Uf);case"textInput":return e=t.data,e===Uf&&If?null:e;default:return null}}function uv(e,t){if($i)return e==="compositionend"||!Go&&Bf(e,t)?(e=Df(),Nl=Io=Ln=null,$i=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lf&&t.locale!=="ko"?null:t.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cv[e.type]:t==="textarea"}function qf(e,t,i,l){Ji?Wi?Wi.push(l):Wi=[l]:Ji=l,t=br(t,"onChange"),0<t.length&&(i=new Ol("onChange","change",null,i,l),e.push({event:i,listeners:t}))}var ta=null,na=null;function dv(e){Em(e,0)}function Ml(e){var t=Zs(e);if(Sf(t))return e}function Gf(e,t){if(e==="change")return t}var Vf=!1;if(fn){var Vo;if(fn){var Fo="oninput"in document;if(!Fo){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),Fo=typeof Ff.oninput=="function"}Vo=Fo}else Vo=!1;Vf=Vo&&(!document.documentMode||9<document.documentMode)}function Qf(){ta&&(ta.detachEvent("onpropertychange",Xf),na=ta=null)}function Xf(e){if(e.propertyName==="value"&&Ml(na)){var t=[];qf(t,na,e,ko(e)),Of(dv,t)}}function fv(e,t,i){e==="focusin"?(Qf(),ta=t,na=i,ta.attachEvent("onpropertychange",Xf)):e==="focusout"&&Qf()}function hv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(na)}function pv(e,t){if(e==="click")return Ml(t)}function mv(e,t){if(e==="input"||e==="change")return Ml(t)}function _v(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:_v;function ia(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),l=Object.keys(t);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var o=i[l];if(!Co.call(t,o)||!Mt(e[o],t[o]))return!1}return!0}function Kf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zf(e,t){var i=Kf(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=t&&l>=t)return{node:i,offset:t-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Kf(i)}}function Pf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wl(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=wl(e.document)}return t}function Qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var gv=fn&&"documentMode"in document&&11>=document.documentMode,es=null,Xo=null,sa=null,Ko=!1;function Wf(e,t,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ko||es==null||es!==wl(l)||(l=es,"selectionStart"in l&&Qo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),sa&&ia(sa,l)||(sa=l,l=br(Xo,"onSelect"),0<l.length&&(t=new Ol("onSelect","select",null,t,i),e.push({event:t,listeners:l}),t.target=es)))}function yi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var ts={animationend:yi("Animation","AnimationEnd"),animationiteration:yi("Animation","AnimationIteration"),animationstart:yi("Animation","AnimationStart"),transitionrun:yi("Transition","TransitionRun"),transitionstart:yi("Transition","TransitionStart"),transitioncancel:yi("Transition","TransitionCancel"),transitionend:yi("Transition","TransitionEnd")},Zo={},$f={};fn&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function vi(e){if(Zo[e])return Zo[e];if(!ts[e])return e;var t=ts[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in $f)return Zo[e]=t[i];return e}var eh=vi("animationend"),th=vi("animationiteration"),nh=vi("animationstart"),yv=vi("transitionrun"),vv=vi("transitionstart"),bv=vi("transitioncancel"),ih=vi("transitionend"),sh=new Map,Po="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Po.push("scrollEnd");function Pt(e,t){sh.set(e,t),_i(t,[e])}var zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qt=[],ns=0,Jo=0;function jl(){for(var e=ns,t=Jo=ns=0;t<e;){var i=qt[t];qt[t++]=null;var l=qt[t];qt[t++]=null;var o=qt[t];qt[t++]=null;var c=qt[t];if(qt[t++]=null,l!==null&&o!==null){var h=l.pending;h===null?o.next=o:(o.next=h.next,h.next=o),l.pending=o}c!==0&&ah(i,o,c)}}function kl(e,t,i,l){qt[ns++]=e,qt[ns++]=t,qt[ns++]=i,qt[ns++]=l,Jo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Wo(e,t,i,l){return kl(e,t,i,l),Ll(e)}function bi(e,t){return kl(e,null,null,t),Ll(e)}function ah(e,t,i){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i);for(var o=!1,c=e.return;c!==null;)c.childLanes|=i,l=c.alternate,l!==null&&(l.childLanes|=i),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-Dt(i),e=c.hiddenUpdates,l=e[o],l===null?e[o]=[t]:l.push(t),t.lane=i|536870912),c):null}function Ll(e){if(50<Ta)throw Ta=0,rc=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var is={};function xv(e,t,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,i,l){return new xv(e,t,i,l)}function $o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hn(e,t){var i=e.alternate;return i===null?(i=zt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function lh(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ul(e,t,i,l,o,c){var h=0;if(l=e,typeof e=="function")$o(e)&&(h=1);else if(typeof e=="string")h=Tb(e,i,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Y:return e=zt(31,i,t,o),e.elementType=Y,e.lanes=c,e;case q:return xi(i.children,o,c,t);case te:h=8,o|=24;break;case le:return e=zt(12,i,t,o|2),e.elementType=le,e.lanes=c,e;case $:return e=zt(13,i,t,o),e.elementType=$,e.lanes=c,e;case ie:return e=zt(19,i,t,o),e.elementType=ie,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:h=10;break e;case re:h=9;break e;case ne:h=11;break e;case G:h=14;break e;case K:h=16,l=null;break e}h=29,i=Error(r(130,e===null?"null":typeof e,"")),l=null}return t=zt(h,i,t,o),t.elementType=e,t.type=l,t.lanes=c,t}function xi(e,t,i,l){return e=zt(7,e,l,t),e.lanes=i,e}function eu(e,t,i){return e=zt(6,e,null,t),e.lanes=i,e}function rh(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function tu(e,t,i){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var oh=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var i=oh.get(e);return i!==void 0?i:(t={value:e,source:t,stack:rf(t)},oh.set(e,t),t)}return{value:e,source:t,stack:rf(t)}}var ss=[],as=0,Il=null,aa=0,Vt=[],Ft=0,Un=null,an=1,ln="";function pn(e,t){ss[as++]=aa,ss[as++]=Il,Il=e,aa=t}function uh(e,t,i){Vt[Ft++]=an,Vt[Ft++]=ln,Vt[Ft++]=Un,Un=e;var l=an;e=ln;var o=32-Dt(l)-1;l&=~(1<<o),i+=1;var c=32-Dt(t)+o;if(30<c){var h=o-o%5;c=(l&(1<<h)-1).toString(32),l>>=h,o-=h,an=1<<32-Dt(t)+o|i<<o|l,ln=c+e}else an=1<<c|i<<o|l,ln=e}function nu(e){e.return!==null&&(pn(e,1),uh(e,1,0))}function iu(e){for(;e===Il;)Il=ss[--as],ss[as]=null,aa=ss[--as],ss[as]=null;for(;e===Un;)Un=Vt[--Ft],Vt[Ft]=null,ln=Vt[--Ft],Vt[Ft]=null,an=Vt[--Ft],Vt[Ft]=null}function ch(e,t){Vt[Ft++]=an,Vt[Ft++]=ln,Vt[Ft++]=Un,an=t.id,ln=t.overflow,Un=e}var ct=null,Be=null,Ce=!1,In=null,Qt=!1,su=Error(r(519));function Bn(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw la(Gt(t,e)),su}function dh(e){var t=e.stateNode,i=e.type,l=e.memoizedProps;switch(t[ut]=e,t[vt]=l,i){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(i=0;i<Aa.length;i++)ye(Aa[i],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),Ef(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),Tf(t,l.value,l.defaultValue,l.children)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||l.suppressHydrationWarning===!0||Am(t.textContent,i)?(l.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),l.onScroll!=null&&ye("scroll",t),l.onScrollEnd!=null&&ye("scrollend",t),l.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Bn(e,!0)}function fh(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 31:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:ct=ct.return}}function ls(e){if(e!==ct)return!1;if(!Ce)return fh(e),Ce=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Cc(e.type,e.memoizedProps)),i=!i),i&&Be&&Bn(e),fh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Be=Um(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Be=Um(e)}else t===27?(t=Be,$n(e.type)?(e=Nc,Nc=null,Be=e):Be=t):Be=ct?Kt(e.stateNode.nextSibling):null;return!0}function Ci(){Be=ct=null,Ce=!1}function au(){var e=In;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),In=null),e}function la(e){In===null?In=[e]:In.push(e)}var lu=b(null),Si=null,mn=null;function Hn(e,t,i){I(lu,t._currentValue),t._currentValue=i}function _n(e){e._currentValue=lu.current,D(lu)}function ru(e,t,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===i)break;e=e.return}}function ou(e,t,i,l){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var h=o.child;c=c.firstContext;e:for(;c!==null;){var g=c;c=o;for(var x=0;x<t.length;x++)if(g.context===t[x]){c.lanes|=i,g=c.alternate,g!==null&&(g.lanes|=i),ru(c.return,i,e),l||(h=null);break e}c=g.next}}else if(o.tag===18){if(h=o.return,h===null)throw Error(r(341));h.lanes|=i,c=h.alternate,c!==null&&(c.lanes|=i),ru(h,i,e),h=null}else h=o.child;if(h!==null)h.return=o;else for(h=o;h!==null;){if(h===e){h=null;break}if(o=h.sibling,o!==null){o.return=h.return,h=o;break}h=h.return}o=h}}function rs(e,t,i,l){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var h=o.alternate;if(h===null)throw Error(r(387));if(h=h.memoizedProps,h!==null){var g=o.type;Mt(o.pendingProps.value,h.value)||(e!==null?e.push(g):e=[g])}}else if(o===Re.current){if(h=o.alternate,h===null)throw Error(r(387));h.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(za):e=[za])}o=o.return}e!==null&&ou(t,e,i,l),t.flags|=262144}function Bl(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ei(e){Si=e,mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return hh(Si,e)}function Hl(e,t){return Si===null&&Ei(e),hh(e,t)}function hh(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},mn===null){if(e===null)throw Error(r(308));mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else mn=mn.next=t;return i}var Cv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},Sv=s.unstable_scheduleCallback,Ev=s.unstable_NormalPriority,Je={$$typeof:oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new Cv,data:new Map,refCount:0}}function ra(e){e.refCount--,e.refCount===0&&Sv(Ev,function(){e.controller.abort()})}var oa=null,cu=0,os=0,us=null;function wv(e,t){if(oa===null){var i=oa=[];cu=0,os=hc(),us={status:"pending",value:void 0,then:function(l){i.push(l)}}}return cu++,t.then(ph,ph),t}function ph(){if(--cu===0&&oa!==null){us!==null&&(us.status="fulfilled");var e=oa;oa=null,os=0,us=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tv(e,t){var i=[],l={status:"pending",value:null,reason:null,then:function(o){i.push(o)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var o=0;o<i.length;o++)(0,i[o])(t)},function(o){for(l.status="rejected",l.reason=o,o=0;o<i.length;o++)(0,i[o])(void 0)}),l}var mh=R.S;R.S=function(e,t){Wp=Rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&wv(e,t),mh!==null&&mh(e,t)};var wi=b(null);function du(){var e=wi.current;return e!==null?e:ke.pooledCache}function Yl(e,t){t===null?I(wi,wi.current):I(wi,t.pool)}function _h(){var e=du();return e===null?null:{parent:Je._currentValue,pool:e}}var cs=Error(r(460)),fu=Error(r(474)),ql=Error(r(542)),Gl={then:function(){}};function gh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yh(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(dn,dn),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bh(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=l}},function(l){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bh(e),e}throw Ni=t,cs}}function Ti(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Ni=i,cs):i}}var Ni=null;function vh(){if(Ni===null)throw Error(r(459));var e=Ni;return Ni=null,e}function bh(e){if(e===cs||e===ql)throw Error(r(483))}var ds=null,ua=0;function Vl(e){var t=ua;return ua+=1,ds===null&&(ds=[]),yh(ds,e,t)}function ca(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fl(e,t){throw t.$$typeof===C?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xh(e){function t(w,E){if(e){var T=w.deletions;T===null?(w.deletions=[E],w.flags|=16):T.push(E)}}function i(w,E){if(!e)return null;for(;E!==null;)t(w,E),E=E.sibling;return null}function l(w){for(var E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function o(w,E){return w=hn(w,E),w.index=0,w.sibling=null,w}function c(w,E,T){return w.index=T,e?(T=w.alternate,T!==null?(T=T.index,T<E?(w.flags|=67108866,E):T):(w.flags|=67108866,E)):(w.flags|=1048576,E)}function h(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function g(w,E,T,j){return E===null||E.tag!==6?(E=eu(T,w.mode,j),E.return=w,E):(E=o(E,T),E.return=w,E)}function x(w,E,T,j){var J=T.type;return J===q?M(w,E,T.props.children,j,T.key):E!==null&&(E.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===K&&Ti(J)===E.type)?(E=o(E,T.props),ca(E,T),E.return=w,E):(E=Ul(T.type,T.key,T.props,null,w.mode,j),ca(E,T),E.return=w,E)}function N(w,E,T,j){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=tu(T,w.mode,j),E.return=w,E):(E=o(E,T.children||[]),E.return=w,E)}function M(w,E,T,j,J){return E===null||E.tag!==7?(E=xi(T,w.mode,j,J),E.return=w,E):(E=o(E,T),E.return=w,E)}function k(w,E,T){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=eu(""+E,w.mode,T),E.return=w,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case z:return T=Ul(E.type,E.key,E.props,null,w.mode,T),ca(T,E),T.return=w,T;case U:return E=tu(E,w.mode,T),E.return=w,E;case K:return E=Ti(E),k(w,E,T)}if(W(E)||me(E))return E=xi(E,w.mode,T,null),E.return=w,E;if(typeof E.then=="function")return k(w,Vl(E),T);if(E.$$typeof===oe)return k(w,Hl(w,E),T);Fl(w,E)}return null}function A(w,E,T,j){var J=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return J!==null?null:g(w,E,""+T,j);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case z:return T.key===J?x(w,E,T,j):null;case U:return T.key===J?N(w,E,T,j):null;case K:return T=Ti(T),A(w,E,T,j)}if(W(T)||me(T))return J!==null?null:M(w,E,T,j,null);if(typeof T.then=="function")return A(w,E,Vl(T),j);if(T.$$typeof===oe)return A(w,E,Hl(w,T),j);Fl(w,T)}return null}function O(w,E,T,j,J){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return w=w.get(T)||null,g(E,w,""+j,J);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case z:return w=w.get(j.key===null?T:j.key)||null,x(E,w,j,J);case U:return w=w.get(j.key===null?T:j.key)||null,N(E,w,j,J);case K:return j=Ti(j),O(w,E,T,j,J)}if(W(j)||me(j))return w=w.get(T)||null,M(E,w,j,J,null);if(typeof j.then=="function")return O(w,E,T,Vl(j),J);if(j.$$typeof===oe)return O(w,E,T,Hl(E,j),J);Fl(E,j)}return null}function F(w,E,T,j){for(var J=null,Ee=null,Q=E,fe=E=0,xe=null;Q!==null&&fe<T.length;fe++){Q.index>fe?(xe=Q,Q=null):xe=Q.sibling;var we=A(w,Q,T[fe],j);if(we===null){Q===null&&(Q=xe);break}e&&Q&&we.alternate===null&&t(w,Q),E=c(we,E,fe),Ee===null?J=we:Ee.sibling=we,Ee=we,Q=xe}if(fe===T.length)return i(w,Q),Ce&&pn(w,fe),J;if(Q===null){for(;fe<T.length;fe++)Q=k(w,T[fe],j),Q!==null&&(E=c(Q,E,fe),Ee===null?J=Q:Ee.sibling=Q,Ee=Q);return Ce&&pn(w,fe),J}for(Q=l(Q);fe<T.length;fe++)xe=O(Q,w,fe,T[fe],j),xe!==null&&(e&&xe.alternate!==null&&Q.delete(xe.key===null?fe:xe.key),E=c(xe,E,fe),Ee===null?J=xe:Ee.sibling=xe,Ee=xe);return e&&Q.forEach(function(si){return t(w,si)}),Ce&&pn(w,fe),J}function ee(w,E,T,j){if(T==null)throw Error(r(151));for(var J=null,Ee=null,Q=E,fe=E=0,xe=null,we=T.next();Q!==null&&!we.done;fe++,we=T.next()){Q.index>fe?(xe=Q,Q=null):xe=Q.sibling;var si=A(w,Q,we.value,j);if(si===null){Q===null&&(Q=xe);break}e&&Q&&si.alternate===null&&t(w,Q),E=c(si,E,fe),Ee===null?J=si:Ee.sibling=si,Ee=si,Q=xe}if(we.done)return i(w,Q),Ce&&pn(w,fe),J;if(Q===null){for(;!we.done;fe++,we=T.next())we=k(w,we.value,j),we!==null&&(E=c(we,E,fe),Ee===null?J=we:Ee.sibling=we,Ee=we);return Ce&&pn(w,fe),J}for(Q=l(Q);!we.done;fe++,we=T.next())we=O(Q,w,fe,we.value,j),we!==null&&(e&&we.alternate!==null&&Q.delete(we.key===null?fe:we.key),E=c(we,E,fe),Ee===null?J=we:Ee.sibling=we,Ee=we);return e&&Q.forEach(function(Ub){return t(w,Ub)}),Ce&&pn(w,fe),J}function je(w,E,T,j){if(typeof T=="object"&&T!==null&&T.type===q&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case z:e:{for(var J=T.key;E!==null;){if(E.key===J){if(J=T.type,J===q){if(E.tag===7){i(w,E.sibling),j=o(E,T.props.children),j.return=w,w=j;break e}}else if(E.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===K&&Ti(J)===E.type){i(w,E.sibling),j=o(E,T.props),ca(j,T),j.return=w,w=j;break e}i(w,E);break}else t(w,E);E=E.sibling}T.type===q?(j=xi(T.props.children,w.mode,j,T.key),j.return=w,w=j):(j=Ul(T.type,T.key,T.props,null,w.mode,j),ca(j,T),j.return=w,w=j)}return h(w);case U:e:{for(J=T.key;E!==null;){if(E.key===J)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){i(w,E.sibling),j=o(E,T.children||[]),j.return=w,w=j;break e}else{i(w,E);break}else t(w,E);E=E.sibling}j=tu(T,w.mode,j),j.return=w,w=j}return h(w);case K:return T=Ti(T),je(w,E,T,j)}if(W(T))return F(w,E,T,j);if(me(T)){if(J=me(T),typeof J!="function")throw Error(r(150));return T=J.call(T),ee(w,E,T,j)}if(typeof T.then=="function")return je(w,E,Vl(T),j);if(T.$$typeof===oe)return je(w,E,Hl(w,T),j);Fl(w,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,E!==null&&E.tag===6?(i(w,E.sibling),j=o(E,T),j.return=w,w=j):(i(w,E),j=eu(T,w.mode,j),j.return=w,w=j),h(w)):i(w,E)}return function(w,E,T,j){try{ua=0;var J=je(w,E,T,j);return ds=null,J}catch(Q){if(Q===cs||Q===ql)throw Q;var Ee=zt(29,Q,null,w.mode);return Ee.lanes=j,Ee.return=w,Ee}finally{}}}var Ai=xh(!0),Ch=xh(!1),Yn=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ae&2)!==0){var o=l.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),l.pending=t,t=Ll(e),ah(e,null,i),t}return kl(e,l,t,i),Ll(e)}function da(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,hf(e,i)}}function mu(e,t){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var o=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var h={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?o=c=h:c=c.next=h,i=i.next}while(i!==null);c===null?o=c=t:c=c.next=t}else o=c=t;i={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var _u=!1;function fa(){if(_u){var e=us;if(e!==null)throw e}}function ha(e,t,i,l){_u=!1;var o=e.updateQueue;Yn=!1;var c=o.firstBaseUpdate,h=o.lastBaseUpdate,g=o.shared.pending;if(g!==null){o.shared.pending=null;var x=g,N=x.next;x.next=null,h===null?c=N:h.next=N,h=x;var M=e.alternate;M!==null&&(M=M.updateQueue,g=M.lastBaseUpdate,g!==h&&(g===null?M.firstBaseUpdate=N:g.next=N,M.lastBaseUpdate=x))}if(c!==null){var k=o.baseState;h=0,M=N=x=null,g=c;do{var A=g.lane&-536870913,O=A!==g.lane;if(O?(be&A)===A:(l&A)===A){A!==0&&A===os&&(_u=!0),M!==null&&(M=M.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var F=e,ee=g;A=t;var je=i;switch(ee.tag){case 1:if(F=ee.payload,typeof F=="function"){k=F.call(je,k,A);break e}k=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=ee.payload,A=typeof F=="function"?F.call(je,k,A):F,A==null)break e;k=v({},k,A);break e;case 2:Yn=!0}}A=g.callback,A!==null&&(e.flags|=64,O&&(e.flags|=8192),O=o.callbacks,O===null?o.callbacks=[A]:O.push(A))}else O={lane:A,tag:g.tag,payload:g.payload,callback:g.callback,next:null},M===null?(N=M=O,x=k):M=M.next=O,h|=A;if(g=g.next,g===null){if(g=o.shared.pending,g===null)break;O=g,g=O.next,O.next=null,o.lastBaseUpdate=O,o.shared.pending=null}}while(!0);M===null&&(x=k),o.baseState=x,o.firstBaseUpdate=N,o.lastBaseUpdate=M,c===null&&(o.shared.lanes=0),Kn|=h,e.lanes=h,e.memoizedState=k}}function Sh(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Eh(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)Sh(i[e],t)}var fs=b(null),Ql=b(0);function wh(e,t){e=wn,I(Ql,e),I(fs,t),wn=e|t.baseLanes}function gu(){I(Ql,wn),I(fs,fs.current)}function yu(){wn=Ql.current,D(fs),D(Ql)}var jt=b(null),Xt=null;function Vn(e){var t=e.alternate;I(Ke,Ke.current&1),I(jt,e),Xt===null&&(t===null||fs.current!==null||t.memoizedState!==null)&&(Xt=e)}function vu(e){I(Ke,Ke.current),I(jt,e),Xt===null&&(Xt=e)}function Th(e){e.tag===22?(I(Ke,Ke.current),I(jt,e),Xt===null&&(Xt=e)):Fn()}function Fn(){I(Ke,Ke.current),I(jt,jt.current)}function kt(e){D(jt),Xt===e&&(Xt=null),D(Ke)}var Ke=b(0);function Xl(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||wc(i)||Tc(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gn=0,de=null,Me=null,We=null,Kl=!1,hs=!1,Ri=!1,Zl=0,pa=0,ps=null,Nv=0;function Ge(){throw Error(r(321))}function bu(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Mt(e[i],t[i]))return!1;return!0}function xu(e,t,i,l,o,c){return gn=c,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?up:Lu,Ri=!1,c=i(l,o),Ri=!1,hs&&(c=Ah(t,i,l,o)),Nh(e),c}function Nh(e){R.H=ga;var t=Me!==null&&Me.next!==null;if(gn=0,We=Me=de=null,Kl=!1,pa=0,ps=null,t)throw Error(r(300));e===null||$e||(e=e.dependencies,e!==null&&Bl(e)&&($e=!0))}function Ah(e,t,i,l){de=e;var o=0;do{if(hs&&(ps=null),pa=0,hs=!1,25<=o)throw Error(r(301));if(o+=1,We=Me=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}R.H=cp,c=t(i,l)}while(hs);return c}function Av(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?ma(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(de.flags|=1024),t}function Cu(){var e=Zl!==0;return Zl=0,e}function Su(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function Eu(e){if(Kl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Kl=!1}gn=0,We=Me=de=null,hs=!1,pa=Zl=0,ps=null}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?de.memoizedState=We=e:We=We.next=e,We}function Ze(){if(Me===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=We===null?de.memoizedState:We.next;if(t!==null)We=t,Me=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},We===null?de.memoizedState=We=e:We=We.next=e}return We}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ma(e){var t=pa;return pa+=1,ps===null&&(ps=[]),e=yh(ps,e,t),t=de,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?up:Lu),e}function Jl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ma(e);if(e.$$typeof===oe)return dt(e)}throw Error(r(438,String(e)))}function wu(e){var t=null,i=de.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var l=de.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=Pl(),de.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),l=0;l<e;l++)i[l]=X;return t.index++,i}function yn(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=Ze();return Tu(t,Me,e)}function Tu(e,t,i){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var o=e.baseQueue,c=l.pending;if(c!==null){if(o!==null){var h=o.next;o.next=c.next,c.next=h}t.baseQueue=o=c,l.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var g=h=null,x=null,N=t,M=!1;do{var k=N.lane&-536870913;if(k!==N.lane?(be&k)===k:(gn&k)===k){var A=N.revertLane;if(A===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),k===os&&(M=!0);else if((gn&A)===A){N=N.next,A===os&&(M=!0);continue}else k={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(g=x=k,h=c):x=x.next=k,de.lanes|=A,Kn|=A;k=N.action,Ri&&i(c,k),c=N.hasEagerState?N.eagerState:i(c,k)}else A={lane:k,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(g=x=A,h=c):x=x.next=A,de.lanes|=k,Kn|=k;N=N.next}while(N!==null&&N!==t);if(x===null?h=c:x.next=g,!Mt(c,e.memoizedState)&&($e=!0,M&&(i=us,i!==null)))throw i;e.memoizedState=c,e.baseState=h,e.baseQueue=x,l.lastRenderedState=c}return o===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Nu(e){var t=Ze(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,o=i.pending,c=t.memoizedState;if(o!==null){i.pending=null;var h=o=o.next;do c=e(c,h.action),h=h.next;while(h!==o);Mt(c,t.memoizedState)||($e=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),i.lastRenderedState=c}return[c,l]}function Rh(e,t,i){var l=de,o=Ze(),c=Ce;if(c){if(i===void 0)throw Error(r(407));i=i()}else i=t();var h=!Mt((Me||o).memoizedState,i);if(h&&(o.memoizedState=i,$e=!0),o=o.queue,Ou(Mh.bind(null,l,o,e),[e]),o.getSnapshot!==t||h||We!==null&&We.memoizedState.tag&1){if(l.flags|=2048,ms(9,{destroy:void 0},Dh.bind(null,l,o,i,t),null),ke===null)throw Error(r(349));c||(gn&127)!==0||Oh(l,t,i)}return i}function Oh(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=de.updateQueue,t===null?(t=Pl(),de.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Dh(e,t,i,l){t.value=i,t.getSnapshot=l,zh(t)&&jh(e)}function Mh(e,t,i){return i(function(){zh(t)&&jh(e)})}function zh(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Mt(e,i)}catch{return!0}}function jh(e){var t=bi(e,2);t!==null&&wt(t,e,2)}function Au(e){var t=gt();if(typeof e=="function"){var i=e;if(e=i(),Ri){jn(!0);try{i()}finally{jn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t}function kh(e,t,i,l){return e.baseState=i,Tu(e,Me,typeof l=="function"?l:yn)}function Rv(e,t,i,l,o){if(tr(e))throw Error(r(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};R.T!==null?i(!0):c.isTransition=!1,l(c),i=t.pending,i===null?(c.next=t.pending=c,Lh(t,c)):(c.next=i.next,t.pending=i.next=c)}}function Lh(e,t){var i=t.action,l=t.payload,o=e.state;if(t.isTransition){var c=R.T,h={};R.T=h;try{var g=i(o,l),x=R.S;x!==null&&x(h,g),Uh(e,t,g)}catch(N){Ru(e,t,N)}finally{c!==null&&h.types!==null&&(c.types=h.types),R.T=c}}else try{c=i(o,l),Uh(e,t,c)}catch(N){Ru(e,t,N)}}function Uh(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){Ih(e,t,l)},function(l){return Ru(e,t,l)}):Ih(e,t,i)}function Ih(e,t,i){t.status="fulfilled",t.value=i,Bh(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,Lh(e,i)))}function Ru(e,t,i){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=i,Bh(t),t=t.next;while(t!==l)}e.action=null}function Bh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Hh(e,t){return t}function Yh(e,t){if(Ce){var i=ke.formState;if(i!==null){e:{var l=de;if(Ce){if(Be){t:{for(var o=Be,c=Qt;o.nodeType!==8;){if(!c){o=null;break t}if(o=Kt(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Be=Kt(o.nextSibling),l=o.data==="F!";break e}}Bn(l)}l=!1}l&&(t=i[0])}}return i=gt(),i.memoizedState=i.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hh,lastRenderedState:t},i.queue=l,i=lp.bind(null,de,l),l.dispatch=i,l=Au(!1),c=ku.bind(null,de,!1,l.queue),l=gt(),o={state:t,dispatch:null,action:e,pending:null},l.queue=o,i=Rv.bind(null,de,o,c,i),o.dispatch=i,l.memoizedState=e,[t,i,!1]}function qh(e){var t=Ze();return Gh(t,Me,e)}function Gh(e,t,i){if(t=Tu(e,t,Hh)[0],e=Wl(yn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ma(t)}catch(h){throw h===cs?ql:h}else l=t;t=Ze();var o=t.queue,c=o.dispatch;return i!==t.memoizedState&&(de.flags|=2048,ms(9,{destroy:void 0},Ov.bind(null,o,i),null)),[l,c,e]}function Ov(e,t){e.action=t}function Vh(e){var t=Ze(),i=Me;if(i!==null)return Gh(t,i,e);Ze(),t=t.memoizedState,i=Ze();var l=i.queue.dispatch;return i.memoizedState=e,[t,l,!1]}function ms(e,t,i,l){return e={tag:e,create:i,deps:l,inst:t,next:null},t=de.updateQueue,t===null&&(t=Pl(),de.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,t.lastEffect=e),e}function Fh(){return Ze().memoizedState}function $l(e,t,i,l){var o=gt();de.flags|=e,o.memoizedState=ms(1|t,{destroy:void 0},i,l===void 0?null:l)}function er(e,t,i,l){var o=Ze();l=l===void 0?null:l;var c=o.memoizedState.inst;Me!==null&&l!==null&&bu(l,Me.memoizedState.deps)?o.memoizedState=ms(t,c,i,l):(de.flags|=e,o.memoizedState=ms(1|t,c,i,l))}function Qh(e,t){$l(8390656,8,e,t)}function Ou(e,t){er(2048,8,e,t)}function Dv(e){de.flags|=4;var t=de.updateQueue;if(t===null)t=Pl(),de.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function Xh(e){var t=Ze().memoizedState;return Dv({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Kh(e,t){return er(4,2,e,t)}function Zh(e,t){return er(4,4,e,t)}function Ph(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jh(e,t,i){i=i!=null?i.concat([e]):null,er(4,4,Ph.bind(null,t,e),i)}function Du(){}function Wh(e,t){var i=Ze();t=t===void 0?null:t;var l=i.memoizedState;return t!==null&&bu(t,l[1])?l[0]:(i.memoizedState=[e,t],e)}function $h(e,t){var i=Ze();t=t===void 0?null:t;var l=i.memoizedState;if(t!==null&&bu(t,l[1]))return l[0];if(l=e(),Ri){jn(!0);try{e()}finally{jn(!1)}}return i.memoizedState=[l,t],l}function Mu(e,t,i){return i===void 0||(gn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=em(),de.lanes|=e,Kn|=e,i)}function ep(e,t,i,l){return Mt(i,t)?i:fs.current!==null?(e=Mu(e,i,l),Mt(e,t)||($e=!0),e):(gn&42)===0||(gn&1073741824)!==0&&(be&261930)===0?($e=!0,e.memoizedState=i):(e=em(),de.lanes|=e,Kn|=e,t)}function tp(e,t,i,l,o){var c=B.p;B.p=c!==0&&8>c?c:8;var h=R.T,g={};R.T=g,ku(e,!1,t,i);try{var x=o(),N=R.S;if(N!==null&&N(g,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var M=Tv(x,l);_a(e,t,M,It(e))}else _a(e,t,l,It(e))}catch(k){_a(e,t,{then:function(){},status:"rejected",reason:k},It())}finally{B.p=c,h!==null&&g.types!==null&&(h.types=g.types),R.T=h}}function Mv(){}function zu(e,t,i,l){if(e.tag!==5)throw Error(r(476));var o=np(e).queue;tp(e,o,t,Z,i===null?Mv:function(){return ip(e),i(l)})}function np(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:Z},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ip(e){var t=np(e);t.next===null&&(t=e.alternate.memoizedState),_a(e,t.next.queue,{},It())}function ju(){return dt(za)}function sp(){return Ze().memoizedState}function ap(){return Ze().memoizedState}function zv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=It();e=qn(i);var l=Gn(t,e,i);l!==null&&(wt(l,t,i),da(l,t,i)),t={cache:uu()},e.payload=t;return}t=t.return}}function jv(e,t,i){var l=It();i={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},tr(e)?rp(t,i):(i=Wo(e,t,i,l),i!==null&&(wt(i,e,l),op(i,t,l)))}function lp(e,t,i){var l=It();_a(e,t,i,l)}function _a(e,t,i,l){var o={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(tr(e))rp(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,g=c(h,i);if(o.hasEagerState=!0,o.eagerState=g,Mt(g,h))return kl(e,t,o,0),ke===null&&jl(),!1}catch{}finally{}if(i=Wo(e,t,o,l),i!==null)return wt(i,e,l),op(i,t,l),!0}return!1}function ku(e,t,i,l){if(l={lane:2,revertLane:hc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},tr(e)){if(t)throw Error(r(479))}else t=Wo(e,i,l,2),t!==null&&wt(t,e,2)}function tr(e){var t=e.alternate;return e===de||t!==null&&t===de}function rp(e,t){hs=Kl=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function op(e,t,i){if((i&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,hf(e,i)}}var ga={readContext:dt,use:Jl,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};ga.useEffectEvent=Ge;var up={readContext:dt,use:Jl,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Qh,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,$l(4194308,4,Ph.bind(null,t,e),i)},useLayoutEffect:function(e,t){return $l(4194308,4,e,t)},useInsertionEffect:function(e,t){$l(4,2,e,t)},useMemo:function(e,t){var i=gt();t=t===void 0?null:t;var l=e();if(Ri){jn(!0);try{e()}finally{jn(!1)}}return i.memoizedState=[l,t],l},useReducer:function(e,t,i){var l=gt();if(i!==void 0){var o=i(t);if(Ri){jn(!0);try{i(t)}finally{jn(!1)}}}else o=t;return l.memoizedState=l.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},l.queue=e,e=e.dispatch=jv.bind(null,de,e),[l.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:function(e){e=Au(e);var t=e.queue,i=lp.bind(null,de,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:Du,useDeferredValue:function(e,t){var i=gt();return Mu(i,e,t)},useTransition:function(){var e=Au(!1);return e=tp.bind(null,de,e.queue,!0,!1),gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var l=de,o=gt();if(Ce){if(i===void 0)throw Error(r(407));i=i()}else{if(i=t(),ke===null)throw Error(r(349));(be&127)!==0||Oh(l,t,i)}o.memoizedState=i;var c={value:i,getSnapshot:t};return o.queue=c,Qh(Mh.bind(null,l,c,e),[e]),l.flags|=2048,ms(9,{destroy:void 0},Dh.bind(null,l,c,i,t),null),i},useId:function(){var e=gt(),t=ke.identifierPrefix;if(Ce){var i=ln,l=an;i=(l&~(1<<32-Dt(l)-1)).toString(32)+i,t="_"+t+"R_"+i,i=Zl++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=Nv++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ju,useFormState:Yh,useActionState:Yh,useOptimistic:function(e){var t=gt();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=ku.bind(null,de,!0,i),i.dispatch=t,[e,t]},useMemoCache:wu,useCacheRefresh:function(){return gt().memoizedState=zv.bind(null,de)},useEffectEvent:function(e){var t=gt(),i={impl:e};return t.memoizedState=i,function(){if((Ae&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}},Lu={readContext:dt,use:Jl,useCallback:Wh,useContext:dt,useEffect:Ou,useImperativeHandle:Jh,useInsertionEffect:Kh,useLayoutEffect:Zh,useMemo:$h,useReducer:Wl,useRef:Fh,useState:function(){return Wl(yn)},useDebugValue:Du,useDeferredValue:function(e,t){var i=Ze();return ep(i,Me.memoizedState,e,t)},useTransition:function(){var e=Wl(yn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:ma(e),t]},useSyncExternalStore:Rh,useId:sp,useHostTransitionStatus:ju,useFormState:qh,useActionState:qh,useOptimistic:function(e,t){var i=Ze();return kh(i,Me,e,t)},useMemoCache:wu,useCacheRefresh:ap};Lu.useEffectEvent=Xh;var cp={readContext:dt,use:Jl,useCallback:Wh,useContext:dt,useEffect:Ou,useImperativeHandle:Jh,useInsertionEffect:Kh,useLayoutEffect:Zh,useMemo:$h,useReducer:Nu,useRef:Fh,useState:function(){return Nu(yn)},useDebugValue:Du,useDeferredValue:function(e,t){var i=Ze();return Me===null?Mu(i,e,t):ep(i,Me.memoizedState,e,t)},useTransition:function(){var e=Nu(yn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:ma(e),t]},useSyncExternalStore:Rh,useId:sp,useHostTransitionStatus:ju,useFormState:Vh,useActionState:Vh,useOptimistic:function(e,t){var i=Ze();return Me!==null?kh(i,Me,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:wu,useCacheRefresh:ap};cp.useEffectEvent=Xh;function Uu(e,t,i,l){t=e.memoizedState,i=i(l,t),i=i==null?t:v({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Iu={enqueueSetState:function(e,t,i){e=e._reactInternals;var l=It(),o=qn(l);o.payload=t,i!=null&&(o.callback=i),t=Gn(e,o,l),t!==null&&(wt(t,e,l),da(t,e,l))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var l=It(),o=qn(l);o.tag=1,o.payload=t,i!=null&&(o.callback=i),t=Gn(e,o,l),t!==null&&(wt(t,e,l),da(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=It(),l=qn(i);l.tag=2,t!=null&&(l.callback=t),t=Gn(e,l,i),t!==null&&(wt(t,e,i),da(t,e,i))}};function dp(e,t,i,l,o,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,h):t.prototype&&t.prototype.isPureReactComponent?!ia(i,l)||!ia(o,c):!0}function fp(e,t,i,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,l),t.state!==e&&Iu.enqueueReplaceState(t,t.state,null)}function Oi(e,t){var i=t;if("ref"in t){i={};for(var l in t)l!=="ref"&&(i[l]=t[l])}if(e=e.defaultProps){i===t&&(i=v({},i));for(var o in e)i[o]===void 0&&(i[o]=e[o])}return i}function hp(e){zl(e)}function pp(e){console.error(e)}function mp(e){zl(e)}function nr(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function _p(e,t,i){try{var l=e.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Bu(e,t,i){return i=qn(i),i.tag=3,i.payload={element:null},i.callback=function(){nr(e,t)},i}function gp(e){return e=qn(e),e.tag=3,e}function yp(e,t,i,l){var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var c=l.value;e.payload=function(){return o(c)},e.callback=function(){_p(t,i,l)}}var h=i.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){_p(t,i,l),typeof o!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function kv(e,t,i,l,o){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=i.alternate,t!==null&&rs(t,i,o,!0),i=jt.current,i!==null){switch(i.tag){case 31:case 13:return Xt===null?pr():i.alternate===null&&Ve===0&&(Ve=3),i.flags&=-257,i.flags|=65536,i.lanes=o,l===Gl?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([l]):t.add(l),cc(e,l,o)),!1;case 22:return i.flags|=65536,l===Gl?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([l]):i.add(l)),cc(e,l,o)),!1}throw Error(r(435,i.tag))}return cc(e,l,o),pr(),!1}if(Ce)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,l!==su&&(e=Error(r(422),{cause:l}),la(Gt(e,i)))):(l!==su&&(t=Error(r(423),{cause:l}),la(Gt(t,i))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,l=Gt(l,i),o=Bu(e.stateNode,l,o),mu(e,o),Ve!==4&&(Ve=2)),!1;var c=Error(r(520),{cause:l});if(c=Gt(c,i),wa===null?wa=[c]:wa.push(c),Ve!==4&&(Ve=2),t===null)return!0;l=Gt(l,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=o&-o,i.lanes|=e,e=Bu(i.stateNode,l,e),mu(i,e),!1;case 1:if(t=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Zn===null||!Zn.has(c))))return i.flags|=65536,o&=-o,i.lanes|=o,o=gp(o),yp(o,e,i,l),mu(i,o),!1}i=i.return}while(i!==null);return!1}var Hu=Error(r(461)),$e=!1;function ft(e,t,i,l){t.child=e===null?Ch(t,null,i,l):Ai(t,e.child,i,l)}function vp(e,t,i,l,o){i=i.render;var c=t.ref;if("ref"in l){var h={};for(var g in l)g!=="ref"&&(h[g]=l[g])}else h=l;return Ei(t),l=xu(e,t,i,h,c,o),g=Cu(),e!==null&&!$e?(Su(e,t,o),vn(e,t,o)):(Ce&&g&&nu(t),t.flags|=1,ft(e,t,l,o),t.child)}function bp(e,t,i,l,o){if(e===null){var c=i.type;return typeof c=="function"&&!$o(c)&&c.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=c,xp(e,t,c,l,o)):(e=Ul(i.type,null,l,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Ku(e,o)){var h=c.memoizedProps;if(i=i.compare,i=i!==null?i:ia,i(h,l)&&e.ref===t.ref)return vn(e,t,o)}return t.flags|=1,e=hn(c,l),e.ref=t.ref,e.return=t,t.child=e}function xp(e,t,i,l,o){if(e!==null){var c=e.memoizedProps;if(ia(c,l)&&e.ref===t.ref)if($e=!1,t.pendingProps=l=c,Ku(e,o))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,vn(e,t,o)}return Yu(e,t,i,l,o)}function Cp(e,t,i,l){var o=l.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;l=o&~c}else l=0,t.child=null;return Sp(e,t,c,i,l)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Yl(t,c!==null?c.cachePool:null),c!==null?wh(t,c):gu(),Th(t);else return l=t.lanes=536870912,Sp(e,t,c!==null?c.baseLanes|i:i,i,l)}else c!==null?(Yl(t,c.cachePool),wh(t,c),Fn(),t.memoizedState=null):(e!==null&&Yl(t,null),gu(),Fn());return ft(e,t,o,i),t.child}function ya(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Sp(e,t,i,l,o){var c=du();return c=c===null?null:{parent:Je._currentValue,pool:c},t.memoizedState={baseLanes:i,cachePool:c},e!==null&&Yl(t,null),gu(),Th(t),e!==null&&rs(e,t,l,!0),t.childLanes=o,null}function ir(e,t){return t=ar({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ep(e,t,i){return Ai(t,e.child,null,i),e=ir(t,t.pendingProps),e.flags|=2,kt(t),t.memoizedState=null,e}function Lv(e,t,i){var l=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(l.mode==="hidden")return e=ir(t,l),t.lanes=536870912,ya(null,e);if(vu(t),(e=Be)?(e=Lm(e,Qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Un!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},i=rh(e),i.return=t,t.child=i,ct=t,Be=null)):e=null,e===null)throw Bn(t);return t.lanes=536870912,null}return ir(t,l)}var c=e.memoizedState;if(c!==null){var h=c.dehydrated;if(vu(t),o)if(t.flags&256)t.flags&=-257,t=Ep(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if($e||rs(e,t,i,!1),o=(i&e.childLanes)!==0,$e||o){if(l=ke,l!==null&&(h=pf(l,i),h!==0&&h!==c.retryLane))throw c.retryLane=h,bi(e,h),wt(l,e,h),Hu;pr(),t=Ep(e,t,i)}else e=c.treeContext,Be=Kt(h.nextSibling),ct=t,Ce=!0,In=null,Qt=!1,e!==null&&ch(t,e),t=ir(t,l),t.flags|=4096;return t}return e=hn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function sr(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(r(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function Yu(e,t,i,l,o){return Ei(t),i=xu(e,t,i,l,void 0,o),l=Cu(),e!==null&&!$e?(Su(e,t,o),vn(e,t,o)):(Ce&&l&&nu(t),t.flags|=1,ft(e,t,i,o),t.child)}function wp(e,t,i,l,o,c){return Ei(t),t.updateQueue=null,i=Ah(t,l,i,o),Nh(e),l=Cu(),e!==null&&!$e?(Su(e,t,c),vn(e,t,c)):(Ce&&l&&nu(t),t.flags|=1,ft(e,t,i,c),t.child)}function Tp(e,t,i,l,o){if(Ei(t),t.stateNode===null){var c=is,h=i.contextType;typeof h=="object"&&h!==null&&(c=dt(h)),c=new i(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Iu,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},hu(t),h=i.contextType,c.context=typeof h=="object"&&h!==null?dt(h):is,c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Uu(t,i,h,l),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&Iu.enqueueReplaceState(c,c.state,null),ha(t,l,c,o),fa(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var g=t.memoizedProps,x=Oi(i,g);c.props=x;var N=c.context,M=i.contextType;h=is,typeof M=="object"&&M!==null&&(h=dt(M));var k=i.getDerivedStateFromProps;M=typeof k=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,M||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||N!==h)&&fp(t,c,l,h),Yn=!1;var A=t.memoizedState;c.state=A,ha(t,l,c,o),fa(),N=t.memoizedState,g||A!==N||Yn?(typeof k=="function"&&(Uu(t,i,k,l),N=t.memoizedState),(x=Yn||dp(t,i,x,l,A,N,h))?(M||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=N),c.props=l,c.state=N,c.context=h,l=x):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,pu(e,t),h=t.memoizedProps,M=Oi(i,h),c.props=M,k=t.pendingProps,A=c.context,N=i.contextType,x=is,typeof N=="object"&&N!==null&&(x=dt(N)),g=i.getDerivedStateFromProps,(N=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==k||A!==x)&&fp(t,c,l,x),Yn=!1,A=t.memoizedState,c.state=A,ha(t,l,c,o),fa();var O=t.memoizedState;h!==k||A!==O||Yn||e!==null&&e.dependencies!==null&&Bl(e.dependencies)?(typeof g=="function"&&(Uu(t,i,g,l),O=t.memoizedState),(M=Yn||dp(t,i,M,l,A,O,x)||e!==null&&e.dependencies!==null&&Bl(e.dependencies))?(N||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,O,x),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,O,x)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=O),c.props=l,c.state=O,c.context=x,l=M):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,sr(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=Ai(t,e.child,null,o),t.child=Ai(t,null,i,o)):ft(e,t,i,o),t.memoizedState=c.state,e=t.child):e=vn(e,t,o),e}function Np(e,t,i,l){return Ci(),t.flags|=256,ft(e,t,i,l),t.child}var qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gu(e){return{baseLanes:e,cachePool:_h()}}function Vu(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=Ut),e}function Ap(e,t,i){var l=t.pendingProps,o=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),h&&(o=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(o?Vn(t):Fn(),(e=Be)?(e=Lm(e,Qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Un!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},i=rh(e),i.return=t,t.child=i,ct=t,Be=null)):e=null,e===null)throw Bn(t);return Tc(e)?t.lanes=32:t.lanes=536870912,null}var g=l.children;return l=l.fallback,o?(Fn(),o=t.mode,g=ar({mode:"hidden",children:g},o),l=xi(l,o,i,null),g.return=t,l.return=t,g.sibling=l,t.child=g,l=t.child,l.memoizedState=Gu(i),l.childLanes=Vu(e,h,i),t.memoizedState=qu,ya(null,l)):(Vn(t),Fu(t,g))}var x=e.memoizedState;if(x!==null&&(g=x.dehydrated,g!==null)){if(c)t.flags&256?(Vn(t),t.flags&=-257,t=Qu(e,t,i)):t.memoizedState!==null?(Fn(),t.child=e.child,t.flags|=128,t=null):(Fn(),g=l.fallback,o=t.mode,l=ar({mode:"visible",children:l.children},o),g=xi(g,o,i,null),g.flags|=2,l.return=t,g.return=t,l.sibling=g,t.child=l,Ai(t,e.child,null,i),l=t.child,l.memoizedState=Gu(i),l.childLanes=Vu(e,h,i),t.memoizedState=qu,t=ya(null,l));else if(Vn(t),Tc(g)){if(h=g.nextSibling&&g.nextSibling.dataset,h)var N=h.dgst;h=N,l=Error(r(419)),l.stack="",l.digest=h,la({value:l,source:null,stack:null}),t=Qu(e,t,i)}else if($e||rs(e,t,i,!1),h=(i&e.childLanes)!==0,$e||h){if(h=ke,h!==null&&(l=pf(h,i),l!==0&&l!==x.retryLane))throw x.retryLane=l,bi(e,l),wt(h,e,l),Hu;wc(g)||pr(),t=Qu(e,t,i)}else wc(g)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Be=Kt(g.nextSibling),ct=t,Ce=!0,In=null,Qt=!1,e!==null&&ch(t,e),t=Fu(t,l.children),t.flags|=4096);return t}return o?(Fn(),g=l.fallback,o=t.mode,x=e.child,N=x.sibling,l=hn(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,N!==null?g=hn(N,g):(g=xi(g,o,i,null),g.flags|=2),g.return=t,l.return=t,l.sibling=g,t.child=l,ya(null,l),l=t.child,g=e.child.memoizedState,g===null?g=Gu(i):(o=g.cachePool,o!==null?(x=Je._currentValue,o=o.parent!==x?{parent:x,pool:x}:o):o=_h(),g={baseLanes:g.baseLanes|i,cachePool:o}),l.memoizedState=g,l.childLanes=Vu(e,h,i),t.memoizedState=qu,ya(e.child,l)):(Vn(t),i=e.child,e=i.sibling,i=hn(i,{mode:"visible",children:l.children}),i.return=t,i.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=i,t.memoizedState=null,i)}function Fu(e,t){return t=ar({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ar(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function Qu(e,t,i){return Ai(t,e.child,null,i),e=Fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rp(e,t,i){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ru(e.return,t,i)}function Xu(e,t,i,l,o,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:o,treeForkCount:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=i,h.tailMode=o,h.treeForkCount=c)}function Op(e,t,i){var l=t.pendingProps,o=l.revealOrder,c=l.tail;l=l.children;var h=Ke.current,g=(h&2)!==0;if(g?(h=h&1|2,t.flags|=128):h&=1,I(Ke,h),ft(e,t,l,i),l=Ce?aa:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rp(e,i,t);else if(e.tag===19)Rp(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(i=t.child,o=null;i!==null;)e=i.alternate,e!==null&&Xl(e)===null&&(o=i),i=i.sibling;i=o,i===null?(o=t.child,t.child=null):(o=i.sibling,i.sibling=null),Xu(t,!1,o,i,c,l);break;case"backwards":case"unstable_legacy-backwards":for(i=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Xl(e)===null){t.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}Xu(t,!0,i,null,c,l);break;case"together":Xu(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function vn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(rs(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,i=hn(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=hn(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Ku(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Bl(e)))}function Uv(e,t,i){switch(t.tag){case 3:_t(t,t.stateNode.containerInfo),Hn(t,Je,e.memoizedState.cache),Ci();break;case 27:case 5:Vs(t);break;case 4:_t(t,t.stateNode.containerInfo);break;case 10:Hn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,vu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Vn(t),t.flags|=128,null):(i&t.child.childLanes)!==0?Ap(e,t,i):(Vn(t),e=vn(e,t,i),e!==null?e.sibling:null);Vn(t);break;case 19:var o=(e.flags&128)!==0;if(l=(i&t.childLanes)!==0,l||(rs(e,t,i,!1),l=(i&t.childLanes)!==0),o){if(l)return Op(e,t,i);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),I(Ke,Ke.current),l)break;return null;case 22:return t.lanes=0,Cp(e,t,i,t.pendingProps);case 24:Hn(t,Je,e.memoizedState.cache)}return vn(e,t,i)}function Dp(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!Ku(e,i)&&(t.flags&128)===0)return $e=!1,Uv(e,t,i);$e=(e.flags&131072)!==0}else $e=!1,Ce&&(t.flags&1048576)!==0&&uh(t,aa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ti(t.elementType),t.type=e,typeof e=="function")$o(e)?(l=Oi(e,l),t.tag=1,t=Tp(null,t,e,l,i)):(t.tag=0,t=Yu(null,t,e,l,i));else{if(e!=null){var o=e.$$typeof;if(o===ne){t.tag=11,t=vp(null,t,e,l,i);break e}else if(o===G){t.tag=14,t=bp(null,t,e,l,i);break e}}throw t=Ne(e)||e,Error(r(306,t,""))}}return t;case 0:return Yu(e,t,t.type,t.pendingProps,i);case 1:return l=t.type,o=Oi(l,t.pendingProps),Tp(e,t,l,o,i);case 3:e:{if(_t(t,t.stateNode.containerInfo),e===null)throw Error(r(387));l=t.pendingProps;var c=t.memoizedState;o=c.element,pu(e,t),ha(t,l,null,i);var h=t.memoizedState;if(l=h.cache,Hn(t,Je,l),l!==c.cache&&ou(t,[Je],i,!0),fa(),l=h.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Np(e,t,l,i);break e}else if(l!==o){o=Gt(Error(r(424)),t),la(o),t=Np(e,t,l,i);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=Kt(e.firstChild),ct=t,Ce=!0,In=null,Qt=!0,i=Ch(t,null,l,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Ci(),l===o){t=vn(e,t,i);break e}ft(e,t,l,i)}t=t.child}return t;case 26:return sr(e,t),e===null?(i=qm(t.type,null,t.pendingProps,null))?t.memoizedState=i:Ce||(i=t.type,e=t.pendingProps,l=xr(_e.current).createElement(i),l[ut]=t,l[vt]=e,ht(l,i,e),st(l),t.stateNode=l):t.memoizedState=qm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Vs(t),e===null&&Ce&&(l=t.stateNode=Bm(t.type,t.pendingProps,_e.current),ct=t,Qt=!0,o=Be,$n(t.type)?(Nc=o,Be=Kt(l.firstChild)):Be=o),ft(e,t,t.pendingProps.children,i),sr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((o=l=Be)&&(l=hb(l,t.type,t.pendingProps,Qt),l!==null?(t.stateNode=l,ct=t,Be=Kt(l.firstChild),Qt=!1,o=!0):o=!1),o||Bn(t)),Vs(t),o=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,l=c.children,Cc(o,c)?l=null:h!==null&&Cc(o,h)&&(t.flags|=32),t.memoizedState!==null&&(o=xu(e,t,Av,null,null,i),za._currentValue=o),sr(e,t),ft(e,t,l,i),t.child;case 6:return e===null&&Ce&&((e=i=Be)&&(i=pb(i,t.pendingProps,Qt),i!==null?(t.stateNode=i,ct=t,Be=null,e=!0):e=!1),e||Bn(t)),null;case 13:return Ap(e,t,i);case 4:return _t(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ai(t,null,l,i):ft(e,t,l,i),t.child;case 11:return vp(e,t,t.type,t.pendingProps,i);case 7:return ft(e,t,t.pendingProps,i),t.child;case 8:return ft(e,t,t.pendingProps.children,i),t.child;case 12:return ft(e,t,t.pendingProps.children,i),t.child;case 10:return l=t.pendingProps,Hn(t,t.type,l.value),ft(e,t,l.children,i),t.child;case 9:return o=t.type._context,l=t.pendingProps.children,Ei(t),o=dt(o),l=l(o),t.flags|=1,ft(e,t,l,i),t.child;case 14:return bp(e,t,t.type,t.pendingProps,i);case 15:return xp(e,t,t.type,t.pendingProps,i);case 19:return Op(e,t,i);case 31:return Lv(e,t,i);case 22:return Cp(e,t,i,t.pendingProps);case 24:return Ei(t),l=dt(Je),e===null?(o=du(),o===null&&(o=ke,c=uu(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=i),o=c),t.memoizedState={parent:l,cache:o},hu(t),Hn(t,Je,o)):((e.lanes&i)!==0&&(pu(e,t),ha(t,null,null,i),fa()),o=e.memoizedState,c=t.memoizedState,o.parent!==l?(o={parent:l,cache:l},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Hn(t,Je,l)):(l=c.cache,Hn(t,Je,l),l!==o.cache&&ou(t,[Je],i,!0))),ft(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function bn(e){e.flags|=4}function Zu(e,t,i,l,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(sm())e.flags|=8192;else throw Ni=Gl,fu}else e.flags&=-16777217}function Mp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Xm(t))if(sm())e.flags|=8192;else throw Ni=Gl,fu}function lr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?df():536870912,e.lanes|=t,vs|=t)}function va(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(t)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=l,e.childLanes=i,t}function Iv(e,t,i){var l=t.pendingProps;switch(iu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return i=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),_n(Je),Xe(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ls(t)?bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,au())),He(t),null;case 26:var o=t.type,c=t.memoizedState;return e===null?(bn(t),c!==null?(He(t),Mp(t,c)):(He(t),Zu(t,o,null,l,i))):c?c!==e.memoizedState?(bn(t),He(t),Mp(t,c)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&bn(t),He(t),Zu(t,o,e,l,i)),null;case 27:if(gl(t),i=_e.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&bn(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return He(t),null}e=V.current,ls(t)?dh(t):(e=Bm(o,l,i),t.stateNode=e,bn(t))}return He(t),null;case 5:if(gl(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&bn(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return He(t),null}if(c=V.current,ls(t))dh(t);else{var h=xr(_e.current);switch(c){case 1:c=h.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=h.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=h.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?h.createElement(o,{is:l.is}):h.createElement(o)}}c[ut]=t,c[vt]=l;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)c.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=c;e:switch(ht(c,o,l),o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&bn(t)}}return He(t),Zu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&bn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(e=_e.current,ls(t)){if(e=t.stateNode,i=t.memoizedProps,l=null,o=ct,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}e[ut]=t,e=!!(e.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||Am(e.nodeValue,i)),e||Bn(t,!0)}else e=xr(e).createTextNode(l),e[ut]=t,t.stateNode=e}return He(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(l=ls(t),i!==null){if(e===null){if(!l)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[ut]=t}else Ci(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else i=au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(kt(t),t):(kt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return He(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=ls(t),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[ut]=t}else Ci(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else o=au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(kt(t),t):(kt(t),null)}return kt(t),(t.flags&128)!==0?(t.lanes=i,t):(i=l!==null,e=e!==null&&e.memoizedState!==null,i&&(l=t.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==o&&(l.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),lr(t,t.updateQueue),He(t),null);case 4:return Xe(),e===null&&gc(t.stateNode.containerInfo),He(t),null;case 10:return _n(t.type),He(t),null;case 19:if(D(Ke),l=t.memoizedState,l===null)return He(t),null;if(o=(t.flags&128)!==0,c=l.rendering,c===null)if(o)va(l,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Xl(e),c!==null){for(t.flags|=128,va(l,!1),e=c.updateQueue,t.updateQueue=e,lr(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)lh(i,e),i=i.sibling;return I(Ke,Ke.current&1|2),Ce&&pn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Rt()>dr&&(t.flags|=128,o=!0,va(l,!1),t.lanes=4194304)}else{if(!o)if(e=Xl(c),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,lr(t,e),va(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Ce)return He(t),null}else 2*Rt()-l.renderingStartTime>dr&&i!==536870912&&(t.flags|=128,o=!0,va(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(e=l.last,e!==null?e.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Rt(),e.sibling=null,i=Ke.current,I(Ke,o?i&1|2:i&1),Ce&&pn(t,l.treeForkCount),e):(He(t),null);case 22:case 23:return kt(t),yu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(i&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),i=t.updateQueue,i!==null&&lr(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==i&&(t.flags|=2048),e!==null&&D(wi),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),_n(Je),He(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Bv(e,t){switch(iu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(Je),Xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gl(t),null;case 31:if(t.memoizedState!==null){if(kt(t),t.alternate===null)throw Error(r(340));Ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(kt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Ke),null;case 4:return Xe(),null;case 10:return _n(t.type),null;case 22:case 23:return kt(t),yu(),e!==null&&D(wi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _n(Je),null;case 25:return null;default:return null}}function zp(e,t){switch(iu(t),t.tag){case 3:_n(Je),Xe();break;case 26:case 27:case 5:gl(t);break;case 4:Xe();break;case 31:t.memoizedState!==null&&kt(t);break;case 13:kt(t);break;case 19:D(Ke);break;case 10:_n(t.type);break;case 22:case 23:kt(t),yu(),e!==null&&D(wi);break;case 24:_n(Je)}}function ba(e,t){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var o=l.next;i=o;do{if((i.tag&e)===e){l=void 0;var c=i.create,h=i.inst;l=c(),h.destroy=l}i=i.next}while(i!==o)}}catch(g){De(t,t.return,g)}}function Qn(e,t,i){try{var l=t.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var c=o.next;l=c;do{if((l.tag&e)===e){var h=l.inst,g=h.destroy;if(g!==void 0){h.destroy=void 0,o=t;var x=i,N=g;try{N()}catch(M){De(o,x,M)}}}l=l.next}while(l!==c)}}catch(M){De(t,t.return,M)}}function jp(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{Eh(t,i)}catch(l){De(e,e.return,l)}}}function kp(e,t,i){i.props=Oi(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(l){De(e,t,l)}}function xa(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof i=="function"?e.refCleanup=i(l):i.current=l}}catch(o){De(e,t,o)}}function rn(e,t){var i=e.ref,l=e.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(o){De(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(o){De(e,t,o)}else i.current=null}function Lp(e){var t=e.type,i=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break e;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(o){De(e,e.return,o)}}function Pu(e,t,i){try{var l=e.stateNode;rb(l,e.type,i,t),l[vt]=t}catch(o){De(e,e.return,o)}}function Up(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$n(e.type)||e.tag===4}function Ju(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Up(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$n(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wu(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=dn));else if(l!==4&&(l===27&&$n(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(Wu(e,t,i),e=e.sibling;e!==null;)Wu(e,t,i),e=e.sibling}function rr(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(l!==4&&(l===27&&$n(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(rr(e,t,i),e=e.sibling;e!==null;)rr(e,t,i),e=e.sibling}function Ip(e){var t=e.stateNode,i=e.memoizedProps;try{for(var l=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ht(t,l,i),t[ut]=e,t[vt]=i}catch(c){De(e,e.return,c)}}var xn=!1,et=!1,$u=!1,Bp=typeof WeakSet=="function"?WeakSet:Set,at=null;function Hv(e,t){if(e=e.containerInfo,bc=Ar,e=Jf(e),Qo(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var o=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break e}var h=0,g=-1,x=-1,N=0,M=0,k=e,A=null;t:for(;;){for(var O;k!==i||o!==0&&k.nodeType!==3||(g=h+o),k!==c||l!==0&&k.nodeType!==3||(x=h+l),k.nodeType===3&&(h+=k.nodeValue.length),(O=k.firstChild)!==null;)A=k,k=O;for(;;){if(k===e)break t;if(A===i&&++N===o&&(g=h),A===c&&++M===l&&(x=h),(O=k.nextSibling)!==null)break;k=A,A=k.parentNode}k=O}i=g===-1||x===-1?null:{start:g,end:x}}else i=null}i=i||{start:0,end:0}}else i=null;for(xc={focusedElem:e,selectionRange:i},Ar=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)o=e[i],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,i=t,o=c.memoizedProps,c=c.memoizedState,l=i.stateNode;try{var F=Oi(i.type,o);e=l.getSnapshotBeforeUpdate(F,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){De(i,i.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)Ec(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ec(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}}function Hp(e,t,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:Sn(e,i),l&4&&ba(5,i);break;case 1:if(Sn(e,i),l&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(h){De(i,i.return,h)}else{var o=Oi(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){De(i,i.return,h)}}l&64&&jp(i),l&512&&xa(i,i.return);break;case 3:if(Sn(e,i),l&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{Eh(e,t)}catch(h){De(i,i.return,h)}}break;case 27:t===null&&l&4&&Ip(i);case 26:case 5:Sn(e,i),t===null&&l&4&&Lp(i),l&512&&xa(i,i.return);break;case 12:Sn(e,i);break;case 31:Sn(e,i),l&4&&Gp(e,i);break;case 13:Sn(e,i),l&4&&Vp(e,i),l&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=Zv.bind(null,i),mb(e,i))));break;case 22:if(l=i.memoizedState!==null||xn,!l){t=t!==null&&t.memoizedState!==null||et,o=xn;var c=et;xn=l,(et=t)&&!c?En(e,i,(i.subtreeFlags&8772)!==0):Sn(e,i),xn=o,et=c}break;case 30:break;default:Sn(e,i)}}function Yp(e){var t=e.alternate;t!==null&&(e.alternate=null,Yp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ro(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,xt=!1;function Cn(e,t,i){for(i=i.child;i!==null;)qp(e,t,i),i=i.sibling}function qp(e,t,i){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Fs,i)}catch{}switch(i.tag){case 26:et||rn(i,t),Cn(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:et||rn(i,t);var l=qe,o=xt;$n(i.type)&&(qe=i.stateNode,xt=!1),Cn(e,t,i),Oa(i.stateNode),qe=l,xt=o;break;case 5:et||rn(i,t);case 6:if(l=qe,o=xt,qe=null,Cn(e,t,i),qe=l,xt=o,qe!==null)if(xt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(i.stateNode)}catch(c){De(i,t,c)}else try{qe.removeChild(i.stateNode)}catch(c){De(i,t,c)}break;case 18:qe!==null&&(xt?(e=qe,jm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Ns(e)):jm(qe,i.stateNode));break;case 4:l=qe,o=xt,qe=i.stateNode.containerInfo,xt=!0,Cn(e,t,i),qe=l,xt=o;break;case 0:case 11:case 14:case 15:Qn(2,i,t),et||Qn(4,i,t),Cn(e,t,i);break;case 1:et||(rn(i,t),l=i.stateNode,typeof l.componentWillUnmount=="function"&&kp(i,t,l)),Cn(e,t,i);break;case 21:Cn(e,t,i);break;case 22:et=(l=et)||i.memoizedState!==null,Cn(e,t,i),et=l;break;default:Cn(e,t,i)}}function Gp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ns(e)}catch(i){De(t,t.return,i)}}}function Vp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ns(e)}catch(i){De(t,t.return,i)}}function Yv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bp),t;default:throw Error(r(435,e.tag))}}function or(e,t){var i=Yv(e);t.forEach(function(l){if(!i.has(l)){i.add(l);var o=Pv.bind(null,e,l);l.then(o,o)}})}function Ct(e,t){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var o=i[l],c=e,h=t,g=h;e:for(;g!==null;){switch(g.tag){case 27:if($n(g.type)){qe=g.stateNode,xt=!1;break e}break;case 5:qe=g.stateNode,xt=!1;break e;case 3:case 4:qe=g.stateNode.containerInfo,xt=!0;break e}g=g.return}if(qe===null)throw Error(r(160));qp(c,h,o),qe=null,xt=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fp(t,e),t=t.sibling}var Jt=null;function Fp(e,t){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ct(t,e),St(e),l&4&&(Qn(3,e,e.return),ba(3,e),Qn(5,e,e.return));break;case 1:Ct(t,e),St(e),l&512&&(et||i===null||rn(i,i.return)),l&64&&xn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var o=Jt;if(Ct(t,e),St(e),l&512&&(et||i===null||rn(i,i.return)),l&4){var c=i!==null?i.memoizedState:null;if(l=e.memoizedState,i===null)if(l===null)if(e.stateNode===null){e:{l=e.type,i=e.memoizedProps,o=o.ownerDocument||o;t:switch(l){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Ks]||c[ut]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(l),o.head.insertBefore(c,o.querySelector("head > title"))),ht(c,l,i),c[ut]=e,st(c),l=c;break e;case"link":var h=Fm("link","href",o).get(l+(i.href||""));if(h){for(var g=0;g<h.length;g++)if(c=h[g],c.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&c.getAttribute("rel")===(i.rel==null?null:i.rel)&&c.getAttribute("title")===(i.title==null?null:i.title)&&c.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){h.splice(g,1);break t}}c=o.createElement(l),ht(c,l,i),o.head.appendChild(c);break;case"meta":if(h=Fm("meta","content",o).get(l+(i.content||""))){for(g=0;g<h.length;g++)if(c=h[g],c.getAttribute("content")===(i.content==null?null:""+i.content)&&c.getAttribute("name")===(i.name==null?null:i.name)&&c.getAttribute("property")===(i.property==null?null:i.property)&&c.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&c.getAttribute("charset")===(i.charSet==null?null:i.charSet)){h.splice(g,1);break t}}c=o.createElement(l),ht(c,l,i),o.head.appendChild(c);break;default:throw Error(r(468,l))}c[ut]=e,st(c),l=c}e.stateNode=l}else Qm(o,e.type,e.stateNode);else e.stateNode=Vm(o,l,e.memoizedProps);else c!==l?(c===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):c.count--,l===null?Qm(o,e.type,e.stateNode):Vm(o,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Pu(e,e.memoizedProps,i.memoizedProps)}break;case 27:Ct(t,e),St(e),l&512&&(et||i===null||rn(i,i.return)),i!==null&&l&4&&Pu(e,e.memoizedProps,i.memoizedProps);break;case 5:if(Ct(t,e),St(e),l&512&&(et||i===null||rn(i,i.return)),e.flags&32){o=e.stateNode;try{Pi(o,"")}catch(F){De(e,e.return,F)}}l&4&&e.stateNode!=null&&(o=e.memoizedProps,Pu(e,o,i!==null?i.memoizedProps:o)),l&1024&&($u=!0);break;case 6:if(Ct(t,e),St(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,i=e.stateNode;try{i.nodeValue=l}catch(F){De(e,e.return,F)}}break;case 3:if(Er=null,o=Jt,Jt=Cr(t.containerInfo),Ct(t,e),Jt=o,St(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Ns(t.containerInfo)}catch(F){De(e,e.return,F)}$u&&($u=!1,Qp(e));break;case 4:l=Jt,Jt=Cr(e.stateNode.containerInfo),Ct(t,e),St(e),Jt=l;break;case 12:Ct(t,e),St(e);break;case 31:Ct(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,or(e,l)));break;case 13:Ct(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(cr=Rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,or(e,l)));break;case 22:o=e.memoizedState!==null;var x=i!==null&&i.memoizedState!==null,N=xn,M=et;if(xn=N||o,et=M||x,Ct(t,e),et=M,xn=N,St(e),l&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(i===null||x||xn||et||Di(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){x=i=t;try{if(c=x.stateNode,o)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{g=x.stateNode;var k=x.memoizedProps.style,A=k!=null&&k.hasOwnProperty("display")?k.display:null;g.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(F){De(x,x.return,F)}}}else if(t.tag===6){if(i===null){x=t;try{x.stateNode.nodeValue=o?"":x.memoizedProps}catch(F){De(x,x.return,F)}}}else if(t.tag===18){if(i===null){x=t;try{var O=x.stateNode;o?km(O,!0):km(x.stateNode,!1)}catch(F){De(x,x.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,or(e,i))));break;case 19:Ct(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,or(e,l)));break;case 30:break;case 21:break;default:Ct(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var i,l=e.return;l!==null;){if(Up(l)){i=l;break}l=l.return}if(i==null)throw Error(r(160));switch(i.tag){case 27:var o=i.stateNode,c=Ju(e);rr(e,c,o);break;case 5:var h=i.stateNode;i.flags&32&&(Pi(h,""),i.flags&=-33);var g=Ju(e);rr(e,g,h);break;case 3:case 4:var x=i.stateNode.containerInfo,N=Ju(e);Wu(e,N,x);break;default:throw Error(r(161))}}catch(M){De(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Qp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Hp(e,t.alternate,t),t=t.sibling}function Di(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qn(4,t,t.return),Di(t);break;case 1:rn(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&kp(t,t.return,i),Di(t);break;case 27:Oa(t.stateNode);case 26:case 5:rn(t,t.return),Di(t);break;case 22:t.memoizedState===null&&Di(t);break;case 30:Di(t);break;default:Di(t)}e=e.sibling}}function En(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,o=e,c=t,h=c.flags;switch(c.tag){case 0:case 11:case 15:En(o,c,i),ba(4,c);break;case 1:if(En(o,c,i),l=c,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(N){De(l,l.return,N)}if(l=c,o=l.updateQueue,o!==null){var g=l.stateNode;try{var x=o.shared.hiddenCallbacks;if(x!==null)for(o.shared.hiddenCallbacks=null,o=0;o<x.length;o++)Sh(x[o],g)}catch(N){De(l,l.return,N)}}i&&h&64&&jp(c),xa(c,c.return);break;case 27:Ip(c);case 26:case 5:En(o,c,i),i&&l===null&&h&4&&Lp(c),xa(c,c.return);break;case 12:En(o,c,i);break;case 31:En(o,c,i),i&&h&4&&Gp(o,c);break;case 13:En(o,c,i),i&&h&4&&Vp(o,c);break;case 22:c.memoizedState===null&&En(o,c,i),xa(c,c.return);break;case 30:break;default:En(o,c,i)}t=t.sibling}}function ec(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&ra(i))}function tc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ra(e))}function Wt(e,t,i,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xp(e,t,i,l),t=t.sibling}function Xp(e,t,i,l){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,i,l),o&2048&&ba(9,t);break;case 1:Wt(e,t,i,l);break;case 3:Wt(e,t,i,l),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ra(e)));break;case 12:if(o&2048){Wt(e,t,i,l),e=t.stateNode;try{var c=t.memoizedProps,h=c.id,g=c.onPostCommit;typeof g=="function"&&g(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){De(t,t.return,x)}}else Wt(e,t,i,l);break;case 31:Wt(e,t,i,l);break;case 13:Wt(e,t,i,l);break;case 23:break;case 22:c=t.stateNode,h=t.alternate,t.memoizedState!==null?c._visibility&2?Wt(e,t,i,l):Ca(e,t):c._visibility&2?Wt(e,t,i,l):(c._visibility|=2,_s(e,t,i,l,(t.subtreeFlags&10256)!==0||!1)),o&2048&&ec(h,t);break;case 24:Wt(e,t,i,l),o&2048&&tc(t.alternate,t);break;default:Wt(e,t,i,l)}}function _s(e,t,i,l,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,h=t,g=i,x=l,N=h.flags;switch(h.tag){case 0:case 11:case 15:_s(c,h,g,x,o),ba(8,h);break;case 23:break;case 22:var M=h.stateNode;h.memoizedState!==null?M._visibility&2?_s(c,h,g,x,o):Ca(c,h):(M._visibility|=2,_s(c,h,g,x,o)),o&&N&2048&&ec(h.alternate,h);break;case 24:_s(c,h,g,x,o),o&&N&2048&&tc(h.alternate,h);break;default:_s(c,h,g,x,o)}t=t.sibling}}function Ca(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,l=t,o=l.flags;switch(l.tag){case 22:Ca(i,l),o&2048&&ec(l.alternate,l);break;case 24:Ca(i,l),o&2048&&tc(l.alternate,l);break;default:Ca(i,l)}t=t.sibling}}var Sa=8192;function gs(e,t,i){if(e.subtreeFlags&Sa)for(e=e.child;e!==null;)Kp(e,t,i),e=e.sibling}function Kp(e,t,i){switch(e.tag){case 26:gs(e,t,i),e.flags&Sa&&e.memoizedState!==null&&Nb(i,Jt,e.memoizedState,e.memoizedProps);break;case 5:gs(e,t,i);break;case 3:case 4:var l=Jt;Jt=Cr(e.stateNode.containerInfo),gs(e,t,i),Jt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Sa,Sa=16777216,gs(e,t,i),Sa=l):gs(e,t,i));break;default:gs(e,t,i)}}function Zp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ea(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var l=t[i];at=l,Jp(l,e)}Zp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pp(e),e=e.sibling}function Pp(e){switch(e.tag){case 0:case 11:case 15:Ea(e),e.flags&2048&&Qn(9,e,e.return);break;case 3:Ea(e);break;case 12:Ea(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ur(e)):Ea(e);break;default:Ea(e)}}function ur(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var l=t[i];at=l,Jp(l,e)}Zp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qn(8,t,t.return),ur(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,ur(t));break;default:ur(t)}e=e.sibling}}function Jp(e,t){for(;at!==null;){var i=at;switch(i.tag){case 0:case 11:case 15:Qn(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ra(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,at=l;else e:for(i=e;at!==null;){l=at;var o=l.sibling,c=l.return;if(Yp(l),l===i){at=null;break e}if(o!==null){o.return=c,at=o;break e}at=c}}}var qv={getCacheForType:function(e){var t=dt(Je),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return dt(Je).controller.signal}},Gv=typeof WeakMap=="function"?WeakMap:Map,Ae=0,ke=null,ge=null,be=0,Oe=0,Lt=null,Xn=!1,ys=!1,nc=!1,wn=0,Ve=0,Kn=0,Mi=0,ic=0,Ut=0,vs=0,wa=null,Et=null,sc=!1,cr=0,Wp=0,dr=1/0,fr=null,Zn=null,tt=0,Pn=null,bs=null,Tn=0,ac=0,lc=null,$p=null,Ta=0,rc=null;function It(){return(Ae&2)!==0&&be!==0?be&-be:R.T!==null?hc():mf()}function em(){if(Ut===0)if((be&536870912)===0||Ce){var e=bl;bl<<=1,(bl&3932160)===0&&(bl=262144),Ut=e}else Ut=536870912;return e=jt.current,e!==null&&(e.flags|=32),Ut}function wt(e,t,i){(e===ke&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(xs(e,0),Jn(e,be,Ut,!1)),Xs(e,i),((Ae&2)===0||e!==ke)&&(e===ke&&((Ae&2)===0&&(Mi|=i),Ve===4&&Jn(e,be,Ut,!1)),on(e))}function tm(e,t,i){if((Ae&6)!==0)throw Error(r(327));var l=!i&&(t&127)===0&&(t&e.expiredLanes)===0||Qs(e,t),o=l?Qv(e,t):uc(e,t,!0),c=l;do{if(o===0){ys&&!l&&Jn(e,t,0,!1);break}else{if(i=e.current.alternate,c&&!Vv(i)){o=uc(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var g=e;o=wa;var x=g.current.memoizedState.isDehydrated;if(x&&(xs(g,h).flags|=256),h=uc(g,h,!1),h!==2){if(nc&&!x){g.errorRecoveryDisabledLanes|=c,Mi|=c,o=4;break e}c=Et,Et=o,c!==null&&(Et===null?Et=c:Et.push.apply(Et,c))}o=h}if(c=!1,o!==2)continue}}if(o===1){xs(e,0),Jn(e,t,0,!0);break}e:{switch(l=e,c=o,c){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Jn(l,t,Ut,!Xn);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(o=cr+300-Rt(),10<o)){if(Jn(l,t,Ut,!Xn),Cl(l,0,!0)!==0)break e;Tn=t,l.timeoutHandle=Mm(nm.bind(null,l,i,Et,fr,sc,t,Ut,Mi,vs,Xn,c,"Throttled",-0,0),o);break e}nm(l,i,Et,fr,sc,t,Ut,Mi,vs,Xn,c,null,-0,0)}}break}while(!0);on(e)}function nm(e,t,i,l,o,c,h,g,x,N,M,k,A,O){if(e.timeoutHandle=-1,k=t.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Kp(t,c,k);var F=(c&62914560)===c?cr-Rt():(c&4194048)===c?Wp-Rt():0;if(F=Ab(k,F),F!==null){Tn=c,e.cancelPendingCommit=F(cm.bind(null,e,t,c,i,l,o,h,g,x,M,k,null,A,O)),Jn(e,c,h,!N);return}}cm(e,t,c,i,l,o,h,g,x)}function Vv(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var o=i[l],c=o.getSnapshot;o=o.value;try{if(!Mt(c(),o))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t,i,l){t&=~ic,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var o=t;0<o;){var c=31-Dt(o),h=1<<c;l[c]=-1,o&=~h}i!==0&&ff(e,i,t)}function hr(){return(Ae&6)===0?(Na(0),!1):!0}function oc(){if(ge!==null){if(Oe===0)var e=ge.return;else e=ge,mn=Si=null,Eu(e),ds=null,ua=0,e=ge;for(;e!==null;)zp(e.alternate,e),e=e.return;ge=null}}function xs(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,cb(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Tn=0,oc(),ke=e,ge=i=hn(e.current,null),be=t,Oe=0,Lt=null,Xn=!1,ys=Qs(e,t),nc=!1,vs=Ut=ic=Mi=Kn=Ve=0,Et=wa=null,sc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var o=31-Dt(l),c=1<<o;t|=e[o],l&=~c}return wn=t,jl(),i}function im(e,t){de=null,R.H=ga,t===cs||t===ql?(t=vh(),Oe=3):t===fu?(t=vh(),Oe=4):Oe=t===Hu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Lt=t,ge===null&&(Ve=1,nr(e,Gt(t,e.current)))}function sm(){var e=jt.current;return e===null?!0:(be&4194048)===be?Xt===null:(be&62914560)===be||(be&536870912)!==0?e===Xt:!1}function am(){var e=R.H;return R.H=ga,e===null?ga:e}function lm(){var e=R.A;return R.A=qv,e}function pr(){Ve=4,Xn||(be&4194048)!==be&&jt.current!==null||(ys=!0),(Kn&134217727)===0&&(Mi&134217727)===0||ke===null||Jn(ke,be,Ut,!1)}function uc(e,t,i){var l=Ae;Ae|=2;var o=am(),c=lm();(ke!==e||be!==t)&&(fr=null,xs(e,t)),t=!1;var h=Ve;e:do try{if(Oe!==0&&ge!==null){var g=ge,x=Lt;switch(Oe){case 8:oc(),h=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var N=Oe;if(Oe=0,Lt=null,Cs(e,g,x,N),i&&ys){h=0;break e}break;default:N=Oe,Oe=0,Lt=null,Cs(e,g,x,N)}}Fv(),h=Ve;break}catch(M){im(e,M)}while(!0);return t&&e.shellSuspendCounter++,mn=Si=null,Ae=l,R.H=o,R.A=c,ge===null&&(ke=null,be=0,jl()),h}function Fv(){for(;ge!==null;)rm(ge)}function Qv(e,t){var i=Ae;Ae|=2;var l=am(),o=lm();ke!==e||be!==t?(fr=null,dr=Rt()+500,xs(e,t)):ys=Qs(e,t);e:do try{if(Oe!==0&&ge!==null){t=ge;var c=Lt;t:switch(Oe){case 1:Oe=0,Lt=null,Cs(e,t,c,1);break;case 2:case 9:if(gh(c)){Oe=0,Lt=null,om(t);break}t=function(){Oe!==2&&Oe!==9||ke!==e||(Oe=7),on(e)},c.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:gh(c)?(Oe=0,Lt=null,om(t)):(Oe=0,Lt=null,Cs(e,t,c,7));break;case 5:var h=null;switch(ge.tag){case 26:h=ge.memoizedState;case 5:case 27:var g=ge;if(h?Xm(h):g.stateNode.complete){Oe=0,Lt=null;var x=g.sibling;if(x!==null)ge=x;else{var N=g.return;N!==null?(ge=N,mr(N)):ge=null}break t}}Oe=0,Lt=null,Cs(e,t,c,5);break;case 6:Oe=0,Lt=null,Cs(e,t,c,6);break;case 8:oc(),Ve=6;break e;default:throw Error(r(462))}}Xv();break}catch(M){im(e,M)}while(!0);return mn=Si=null,R.H=l,R.A=o,Ae=i,ge!==null?0:(ke=null,be=0,jl(),Ve)}function Xv(){for(;ge!==null&&!_y();)rm(ge)}function rm(e){var t=Dp(e.alternate,e,wn);e.memoizedProps=e.pendingProps,t===null?mr(e):ge=t}function om(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=wp(i,t,t.pendingProps,t.type,void 0,be);break;case 11:t=wp(i,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:Eu(t);default:zp(i,t),t=ge=lh(t,wn),t=Dp(i,t,wn)}e.memoizedProps=e.pendingProps,t===null?mr(e):ge=t}function Cs(e,t,i,l){mn=Si=null,Eu(t),ds=null,ua=0;var o=t.return;try{if(kv(e,o,t,i,be)){Ve=1,nr(e,Gt(i,e.current)),ge=null;return}}catch(c){if(o!==null)throw ge=o,c;Ve=1,nr(e,Gt(i,e.current)),ge=null;return}t.flags&32768?(Ce||l===1?e=!0:ys||(be&536870912)!==0?e=!1:(Xn=e=!0,(l===2||l===9||l===3||l===6)&&(l=jt.current,l!==null&&l.tag===13&&(l.flags|=16384))),um(t,e)):mr(t)}function mr(e){var t=e;do{if((t.flags&32768)!==0){um(t,Xn);return}e=t.return;var i=Iv(t.alternate,t,wn);if(i!==null){ge=i;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Ve===0&&(Ve=5)}function um(e,t){do{var i=Bv(e.alternate,e);if(i!==null){i.flags&=32767,ge=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=i}while(e!==null);Ve=6,ge=null}function cm(e,t,i,l,o,c,h,g,x){e.cancelPendingCommit=null;do _r();while(tt!==0);if((Ae&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(c=t.lanes|t.childLanes,c|=Jo,Ty(e,i,c,h,g,x),e===ke&&(ge=ke=null,be=0),bs=t,Pn=e,Tn=i,ac=c,lc=o,$p=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jv(yl,function(){return mm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,o=B.p,B.p=2,h=Ae,Ae|=4;try{Hv(e,t,i)}finally{Ae=h,B.p=o,R.T=l}}tt=1,dm(),fm(),hm()}}function dm(){if(tt===1){tt=0;var e=Pn,t=bs,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null;var l=B.p;B.p=2;var o=Ae;Ae|=4;try{Fp(t,e);var c=xc,h=Jf(e.containerInfo),g=c.focusedElem,x=c.selectionRange;if(h!==g&&g&&g.ownerDocument&&Pf(g.ownerDocument.documentElement,g)){if(x!==null&&Qo(g)){var N=x.start,M=x.end;if(M===void 0&&(M=N),"selectionStart"in g)g.selectionStart=N,g.selectionEnd=Math.min(M,g.value.length);else{var k=g.ownerDocument||document,A=k&&k.defaultView||window;if(A.getSelection){var O=A.getSelection(),F=g.textContent.length,ee=Math.min(x.start,F),je=x.end===void 0?ee:Math.min(x.end,F);!O.extend&&ee>je&&(h=je,je=ee,ee=h);var w=Zf(g,ee),E=Zf(g,je);if(w&&E&&(O.rangeCount!==1||O.anchorNode!==w.node||O.anchorOffset!==w.offset||O.focusNode!==E.node||O.focusOffset!==E.offset)){var T=k.createRange();T.setStart(w.node,w.offset),O.removeAllRanges(),ee>je?(O.addRange(T),O.extend(E.node,E.offset)):(T.setEnd(E.node,E.offset),O.addRange(T))}}}}for(k=[],O=g;O=O.parentNode;)O.nodeType===1&&k.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<k.length;g++){var j=k[g];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Ar=!!bc,xc=bc=null}finally{Ae=o,B.p=l,R.T=i}}e.current=t,tt=2}}function fm(){if(tt===2){tt=0;var e=Pn,t=bs,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=R.T,R.T=null;var l=B.p;B.p=2;var o=Ae;Ae|=4;try{Hp(e,t.alternate,t)}finally{Ae=o,B.p=l,R.T=i}}tt=3}}function hm(){if(tt===4||tt===3){tt=0,gy();var e=Pn,t=bs,i=Tn,l=$p;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tt=5:(tt=0,bs=Pn=null,pm(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Zn=null),No(i),t=t.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Fs,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,o=B.p,B.p=2,R.T=null;try{for(var c=e.onRecoverableError,h=0;h<l.length;h++){var g=l[h];c(g.value,{componentStack:g.stack})}}finally{R.T=t,B.p=o}}(Tn&3)!==0&&_r(),on(e),o=e.pendingLanes,(i&261930)!==0&&(o&42)!==0?e===rc?Ta++:(Ta=0,rc=e):Ta=0,Na(0)}}function pm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ra(t)))}function _r(){return dm(),fm(),hm(),mm()}function mm(){if(tt!==5)return!1;var e=Pn,t=ac;ac=0;var i=No(Tn),l=R.T,o=B.p;try{B.p=32>i?32:i,R.T=null,i=lc,lc=null;var c=Pn,h=Tn;if(tt=0,bs=Pn=null,Tn=0,(Ae&6)!==0)throw Error(r(331));var g=Ae;if(Ae|=4,Pp(c.current),Xp(c,c.current,h,i),Ae=g,Na(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Fs,c)}catch{}return!0}finally{B.p=o,R.T=l,pm(e,t)}}function _m(e,t,i){t=Gt(i,t),t=Bu(e.stateNode,t,2),e=Gn(e,t,2),e!==null&&(Xs(e,2),on(e))}function De(e,t,i){if(e.tag===3)_m(e,e,i);else for(;t!==null;){if(t.tag===3){_m(t,e,i);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Zn===null||!Zn.has(l))){e=Gt(i,e),i=gp(2),l=Gn(t,i,2),l!==null&&(yp(i,l,t,e),Xs(l,2),on(l));break}}t=t.return}}function cc(e,t,i){var l=e.pingCache;if(l===null){l=e.pingCache=new Gv;var o=new Set;l.set(t,o)}else o=l.get(t),o===void 0&&(o=new Set,l.set(t,o));o.has(i)||(nc=!0,o.add(i),e=Kv.bind(null,e,t,i),t.then(e,e))}function Kv(e,t,i){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,ke===e&&(be&i)===i&&(Ve===4||Ve===3&&(be&62914560)===be&&300>Rt()-cr?(Ae&2)===0&&xs(e,0):ic|=i,vs===be&&(vs=0)),on(e)}function gm(e,t){t===0&&(t=df()),e=bi(e,t),e!==null&&(Xs(e,t),on(e))}function Zv(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),gm(e,i)}function Pv(e,t){var i=0;switch(e.tag){case 31:case 13:var l=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(t),gm(e,i)}function Jv(e,t){return So(e,t)}var gr=null,Ss=null,dc=!1,yr=!1,fc=!1,Wn=0;function on(e){e!==Ss&&e.next===null&&(Ss===null?gr=Ss=e:Ss=Ss.next=e),yr=!0,dc||(dc=!0,$v())}function Na(e,t){if(!fc&&yr){fc=!0;do for(var i=!1,l=gr;l!==null;){if(e!==0){var o=l.pendingLanes;if(o===0)var c=0;else{var h=l.suspendedLanes,g=l.pingedLanes;c=(1<<31-Dt(42|e)+1)-1,c&=o&~(h&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,xm(l,c))}else c=be,c=Cl(l,l===ke?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Qs(l,c)||(i=!0,xm(l,c));l=l.next}while(i);fc=!1}}function Wv(){ym()}function ym(){yr=dc=!1;var e=0;Wn!==0&&ub()&&(e=Wn);for(var t=Rt(),i=null,l=gr;l!==null;){var o=l.next,c=vm(l,t);c===0?(l.next=null,i===null?gr=o:i.next=o,o===null&&(Ss=i)):(i=l,(e!==0||(c&3)!==0)&&(yr=!0)),l=o}tt!==0&&tt!==5||Na(e),Wn!==0&&(Wn=0)}function vm(e,t){for(var i=e.suspendedLanes,l=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var h=31-Dt(c),g=1<<h,x=o[h];x===-1?((g&i)===0||(g&l)!==0)&&(o[h]=wy(g,t)):x<=t&&(e.expiredLanes|=g),c&=~g}if(t=ke,i=be,i=Cl(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,i===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Eo(l),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Qs(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(l!==null&&Eo(l),No(i)){case 2:case 8:i=uf;break;case 32:i=yl;break;case 268435456:i=cf;break;default:i=yl}return l=bm.bind(null,e),i=So(i,l),e.callbackPriority=t,e.callbackNode=i,t}return l!==null&&l!==null&&Eo(l),e.callbackPriority=2,e.callbackNode=null,2}function bm(e,t){if(tt!==0&&tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(_r()&&e.callbackNode!==i)return null;var l=be;return l=Cl(e,e===ke?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(tm(e,l,t),vm(e,Rt()),e.callbackNode!=null&&e.callbackNode===i?bm.bind(null,e):null)}function xm(e,t){if(_r())return null;tm(e,t,!0)}function $v(){db(function(){(Ae&6)!==0?So(of,Wv):ym()})}function hc(){if(Wn===0){var e=os;e===0&&(e=vl,vl<<=1,(vl&261888)===0&&(vl=256)),Wn=e}return Wn}function Cm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tl(""+e)}function Sm(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function eb(e,t,i,l,o){if(t==="submit"&&i&&i.stateNode===o){var c=Cm((o[vt]||null).action),h=l.submitter;h&&(t=(t=h[vt]||null)?Cm(t.formAction):h.getAttribute("formAction"),t!==null&&(c=t,h=null));var g=new Ol("action","action",null,l,o);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Wn!==0){var x=h?Sm(o,h):new FormData(o);zu(i,{pending:!0,data:x,method:o.method,action:c},null,x)}}else typeof c=="function"&&(g.preventDefault(),x=h?Sm(o,h):new FormData(o),zu(i,{pending:!0,data:x,method:o.method,action:c},c,x))},currentTarget:o}]})}}for(var pc=0;pc<Po.length;pc++){var mc=Po[pc],tb=mc.toLowerCase(),nb=mc[0].toUpperCase()+mc.slice(1);Pt(tb,"on"+nb)}Pt(eh,"onAnimationEnd"),Pt(th,"onAnimationIteration"),Pt(nh,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(yv,"onTransitionRun"),Pt(vv,"onTransitionStart"),Pt(bv,"onTransitionCancel"),Pt(ih,"onTransitionEnd"),Ki("onMouseEnter",["mouseout","mouseover"]),Ki("onMouseLeave",["mouseout","mouseover"]),Ki("onPointerEnter",["pointerout","pointerover"]),Ki("onPointerLeave",["pointerout","pointerover"]),_i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_i("onBeforeInput",["compositionend","keypress","textInput","paste"]),_i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ib=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Aa));function Em(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],o=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var h=l.length-1;0<=h;h--){var g=l[h],x=g.instance,N=g.currentTarget;if(g=g.listener,x!==c&&o.isPropagationStopped())break e;c=g,o.currentTarget=N;try{c(o)}catch(M){zl(M)}o.currentTarget=null,c=x}else for(h=0;h<l.length;h++){if(g=l[h],x=g.instance,N=g.currentTarget,g=g.listener,x!==c&&o.isPropagationStopped())break e;c=g,o.currentTarget=N;try{c(o)}catch(M){zl(M)}o.currentTarget=null,c=x}}}}function ye(e,t){var i=t[Ao];i===void 0&&(i=t[Ao]=new Set);var l=e+"__bubble";i.has(l)||(wm(t,e,2,!1),i.add(l))}function _c(e,t,i){var l=0;t&&(l|=4),wm(i,e,l,t)}var vr="_reactListening"+Math.random().toString(36).slice(2);function gc(e){if(!e[vr]){e[vr]=!0,yf.forEach(function(i){i!=="selectionchange"&&(ib.has(i)||_c(i,!1,e),_c(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vr]||(t[vr]=!0,_c("selectionchange",!1,t))}}function wm(e,t,i,l){switch(e_(t)){case 2:var o=Db;break;case 8:o=Mb;break;default:o=Mc}i=o.bind(null,t,i,e),o=void 0,!Uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),l?o!==void 0?e.addEventListener(t,i,{capture:!0,passive:o}):e.addEventListener(t,i,!0):o!==void 0?e.addEventListener(t,i,{passive:o}):e.addEventListener(t,i,!1)}function yc(e,t,i,l,o){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var g=l.stateNode.containerInfo;if(g===o)break;if(h===4)for(h=l.return;h!==null;){var x=h.tag;if((x===3||x===4)&&h.stateNode.containerInfo===o)return;h=h.return}for(;g!==null;){if(h=Fi(g),h===null)return;if(x=h.tag,x===5||x===6||x===26||x===27){l=c=h;continue e}g=g.parentNode}}l=l.return}Of(function(){var N=c,M=ko(i),k=[];e:{var A=sh.get(e);if(A!==void 0){var O=Ol,F=e;switch(e){case"keypress":if(Al(i)===0)break e;case"keydown":case"keyup":O=Py;break;case"focusin":F="focus",O=Yo;break;case"focusout":F="blur",O=Yo;break;case"beforeblur":case"afterblur":O=Yo;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=$y;break;case eh:case th:case nh:O=Yy;break;case ih:O=tv;break;case"scroll":case"scrollend":O=Ly;break;case"wheel":O=iv;break;case"copy":case"cut":case"paste":O=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=kf;break;case"toggle":case"beforetoggle":O=av}var ee=(t&4)!==0,je=!ee&&(e==="scroll"||e==="scrollend"),w=ee?A!==null?A+"Capture":null:A;ee=[];for(var E=N,T;E!==null;){var j=E;if(T=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||T===null||w===null||(j=Ps(E,w),j!=null&&ee.push(Ra(E,j,T))),je)break;E=E.return}0<ee.length&&(A=new O(A,F,null,i,M),k.push({event:A,listeners:ee}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",A&&i!==jo&&(F=i.relatedTarget||i.fromElement)&&(Fi(F)||F[Vi]))break e;if((O||A)&&(A=M.window===M?M:(A=M.ownerDocument)?A.defaultView||A.parentWindow:window,O?(F=i.relatedTarget||i.toElement,O=N,F=F?Fi(F):null,F!==null&&(je=d(F),ee=F.tag,F!==je||ee!==5&&ee!==27&&ee!==6)&&(F=null)):(O=null,F=N),O!==F)){if(ee=zf,j="onMouseLeave",w="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ee=kf,j="onPointerLeave",w="onPointerEnter",E="pointer"),je=O==null?A:Zs(O),T=F==null?A:Zs(F),A=new ee(j,E+"leave",O,i,M),A.target=je,A.relatedTarget=T,j=null,Fi(M)===N&&(ee=new ee(w,E+"enter",F,i,M),ee.target=T,ee.relatedTarget=je,j=ee),je=j,O&&F)t:{for(ee=sb,w=O,E=F,T=0,j=w;j;j=ee(j))T++;j=0;for(var J=E;J;J=ee(J))j++;for(;0<T-j;)w=ee(w),T--;for(;0<j-T;)E=ee(E),j--;for(;T--;){if(w===E||E!==null&&w===E.alternate){ee=w;break t}w=ee(w),E=ee(E)}ee=null}else ee=null;O!==null&&Tm(k,A,O,ee,!1),F!==null&&je!==null&&Tm(k,je,F,ee,!0)}}e:{if(A=N?Zs(N):window,O=A.nodeName&&A.nodeName.toLowerCase(),O==="select"||O==="input"&&A.type==="file")var Ee=Gf;else if(Yf(A))if(Vf)Ee=mv;else{Ee=hv;var Q=fv}else O=A.nodeName,!O||O.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?N&&zo(N.elementType)&&(Ee=Gf):Ee=pv;if(Ee&&(Ee=Ee(e,N))){qf(k,Ee,i,M);break e}Q&&Q(e,A,N),e==="focusout"&&N&&A.type==="number"&&N.memoizedProps.value!=null&&Mo(A,"number",A.value)}switch(Q=N?Zs(N):window,e){case"focusin":(Yf(Q)||Q.contentEditable==="true")&&(es=Q,Xo=N,sa=null);break;case"focusout":sa=Xo=es=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,Wf(k,i,M);break;case"selectionchange":if(gv)break;case"keydown":case"keyup":Wf(k,i,M)}var fe;if(Go)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else $i?Bf(e,i)&&(xe="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(xe="onCompositionStart");xe&&(Lf&&i.locale!=="ko"&&($i||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&$i&&(fe=Df()):(Ln=M,Io="value"in Ln?Ln.value:Ln.textContent,$i=!0)),Q=br(N,xe),0<Q.length&&(xe=new jf(xe,e,null,i,M),k.push({event:xe,listeners:Q}),fe?xe.data=fe:(fe=Hf(i),fe!==null&&(xe.data=fe)))),(fe=rv?ov(e,i):uv(e,i))&&(xe=br(N,"onBeforeInput"),0<xe.length&&(Q=new jf("onBeforeInput","beforeinput",null,i,M),k.push({event:Q,listeners:xe}),Q.data=fe)),eb(k,e,N,i,M)}Em(k,t)})}function Ra(e,t,i){return{instance:e,listener:t,currentTarget:i}}function br(e,t){for(var i=t+"Capture",l=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Ps(e,i),o!=null&&l.unshift(Ra(e,o,c)),o=Ps(e,t),o!=null&&l.push(Ra(e,o,c))),e.tag===3)return l;e=e.return}return[]}function sb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tm(e,t,i,l,o){for(var c=t._reactName,h=[];i!==null&&i!==l;){var g=i,x=g.alternate,N=g.stateNode;if(g=g.tag,x!==null&&x===l)break;g!==5&&g!==26&&g!==27||N===null||(x=N,o?(N=Ps(i,c),N!=null&&h.unshift(Ra(i,N,x))):o||(N=Ps(i,c),N!=null&&h.push(Ra(i,N,x)))),i=i.return}h.length!==0&&e.push({event:t,listeners:h})}var ab=/\r\n?/g,lb=/\u0000|\uFFFD/g;function Nm(e){return(typeof e=="string"?e:""+e).replace(ab,`
`).replace(lb,"")}function Am(e,t){return t=Nm(t),Nm(e)===t}function ze(e,t,i,l,o,c){switch(i){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Pi(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Pi(e,""+l);break;case"className":El(e,"class",l);break;case"tabIndex":El(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":El(e,i,l);break;case"style":Af(e,l,c);break;case"data":if(t!=="object"){El(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=Tl(""+l),e.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(t!=="input"&&ze(e,t,"name",o.name,o,null),ze(e,t,"formEncType",o.formEncType,o,null),ze(e,t,"formMethod",o.formMethod,o,null),ze(e,t,"formTarget",o.formTarget,o,null)):(ze(e,t,"encType",o.encType,o,null),ze(e,t,"method",o.method,o,null),ze(e,t,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=Tl(""+l),e.setAttribute(i,l);break;case"onClick":l!=null&&(e.onclick=dn);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(i=l.__html,i!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=i}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}i=Tl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""+l):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":l===!0?e.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,l):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(i,l):e.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(i):e.setAttribute(i,l);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Sl(e,"popover",l);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Sl(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=jy.get(i)||i,Sl(e,i,l))}}function vc(e,t,i,l,o,c){switch(i){case"style":Af(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(i=l.__html,i!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=i}}break;case"children":typeof l=="string"?Pi(e,l):(typeof l=="number"||typeof l=="bigint")&&Pi(e,""+l);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vf.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(o=i.endsWith("Capture"),t=i.slice(2,o?i.length-7:void 0),c=e[vt]||null,c=c!=null?c[i]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof l=="function")){typeof c!="function"&&c!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,l,o);break e}i in e?e[i]=l:l===!0?e.setAttribute(i,""):Sl(e,i,l)}}}function ht(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var l=!1,o=!1,c;for(c in i)if(i.hasOwnProperty(c)){var h=i[c];if(h!=null)switch(c){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,c,h,i,null)}}o&&ze(e,t,"srcSet",i.srcSet,i,null),l&&ze(e,t,"src",i.src,i,null);return;case"input":ye("invalid",e);var g=c=h=o=null,x=null,N=null;for(l in i)if(i.hasOwnProperty(l)){var M=i[l];if(M!=null)switch(l){case"name":o=M;break;case"type":h=M;break;case"checked":x=M;break;case"defaultChecked":N=M;break;case"value":c=M;break;case"defaultValue":g=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,t));break;default:ze(e,t,l,M,i,null)}}Ef(e,c,g,x,N,h,o,!1);return;case"select":ye("invalid",e),l=h=c=null;for(o in i)if(i.hasOwnProperty(o)&&(g=i[o],g!=null))switch(o){case"value":c=g;break;case"defaultValue":h=g;break;case"multiple":l=g;default:ze(e,t,o,g,i,null)}t=c,i=h,e.multiple=!!l,t!=null?Zi(e,!!l,t,!1):i!=null&&Zi(e,!!l,i,!0);return;case"textarea":ye("invalid",e),c=o=l=null;for(h in i)if(i.hasOwnProperty(h)&&(g=i[h],g!=null))switch(h){case"value":l=g;break;case"defaultValue":o=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(r(91));break;default:ze(e,t,h,g,i,null)}Tf(e,l,o,c);return;case"option":for(x in i)if(i.hasOwnProperty(x)&&(l=i[x],l!=null))switch(x){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ze(e,t,x,l,i,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(l=0;l<Aa.length;l++)ye(Aa[l],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in i)if(i.hasOwnProperty(N)&&(l=i[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,N,l,i,null)}return;default:if(zo(t)){for(M in i)i.hasOwnProperty(M)&&(l=i[M],l!==void 0&&vc(e,t,M,l,i,void 0));return}}for(g in i)i.hasOwnProperty(g)&&(l=i[g],l!=null&&ze(e,t,g,l,i,null))}function rb(e,t,i,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,h=null,g=null,x=null,N=null,M=null;for(O in i){var k=i[O];if(i.hasOwnProperty(O)&&k!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":x=k;default:l.hasOwnProperty(O)||ze(e,t,O,null,l,k)}}for(var A in l){var O=l[A];if(k=i[A],l.hasOwnProperty(A)&&(O!=null||k!=null))switch(A){case"type":c=O;break;case"name":o=O;break;case"checked":N=O;break;case"defaultChecked":M=O;break;case"value":h=O;break;case"defaultValue":g=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:O!==k&&ze(e,t,A,O,l,k)}}Do(e,h,g,x,N,M,c,o);return;case"select":O=h=g=A=null;for(c in i)if(x=i[c],i.hasOwnProperty(c)&&x!=null)switch(c){case"value":break;case"multiple":O=x;default:l.hasOwnProperty(c)||ze(e,t,c,null,l,x)}for(o in l)if(c=l[o],x=i[o],l.hasOwnProperty(o)&&(c!=null||x!=null))switch(o){case"value":A=c;break;case"defaultValue":g=c;break;case"multiple":h=c;default:c!==x&&ze(e,t,o,c,l,x)}t=g,i=h,l=O,A!=null?Zi(e,!!i,A,!1):!!l!=!!i&&(t!=null?Zi(e,!!i,t,!0):Zi(e,!!i,i?[]:"",!1));return;case"textarea":O=A=null;for(g in i)if(o=i[g],i.hasOwnProperty(g)&&o!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ze(e,t,g,null,l,o)}for(h in l)if(o=l[h],c=i[h],l.hasOwnProperty(h)&&(o!=null||c!=null))switch(h){case"value":A=o;break;case"defaultValue":O=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==c&&ze(e,t,h,o,l,c)}wf(e,A,O);return;case"option":for(var F in i)if(A=i[F],i.hasOwnProperty(F)&&A!=null&&!l.hasOwnProperty(F))switch(F){case"selected":e.selected=!1;break;default:ze(e,t,F,null,l,A)}for(x in l)if(A=l[x],O=i[x],l.hasOwnProperty(x)&&A!==O&&(A!=null||O!=null))switch(x){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:ze(e,t,x,A,l,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in i)A=i[ee],i.hasOwnProperty(ee)&&A!=null&&!l.hasOwnProperty(ee)&&ze(e,t,ee,null,l,A);for(N in l)if(A=l[N],O=i[N],l.hasOwnProperty(N)&&A!==O&&(A!=null||O!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,t));break;default:ze(e,t,N,A,l,O)}return;default:if(zo(t)){for(var je in i)A=i[je],i.hasOwnProperty(je)&&A!==void 0&&!l.hasOwnProperty(je)&&vc(e,t,je,void 0,l,A);for(M in l)A=l[M],O=i[M],!l.hasOwnProperty(M)||A===O||A===void 0&&O===void 0||vc(e,t,M,A,l,O);return}}for(var w in i)A=i[w],i.hasOwnProperty(w)&&A!=null&&!l.hasOwnProperty(w)&&ze(e,t,w,null,l,A);for(k in l)A=l[k],O=i[k],!l.hasOwnProperty(k)||A===O||A==null&&O==null||ze(e,t,k,A,l,O)}function Rm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ob(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),l=0;l<i.length;l++){var o=i[l],c=o.transferSize,h=o.initiatorType,g=o.duration;if(c&&g&&Rm(h)){for(h=0,g=o.responseEnd,l+=1;l<i.length;l++){var x=i[l],N=x.startTime;if(N>g)break;var M=x.transferSize,k=x.initiatorType;M&&Rm(k)&&(x=x.responseEnd,h+=M*(x<g?1:(g-N)/(x-N)))}if(--l,t+=8*(c+h)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bc=null,xc=null;function xr(e){return e.nodeType===9?e:e.ownerDocument}function Om(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Cc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sc=null;function ub(){var e=window.event;return e&&e.type==="popstate"?e===Sc?!1:(Sc=e,!0):(Sc=null,!1)}var Mm=typeof setTimeout=="function"?setTimeout:void 0,cb=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,db=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(e){return zm.resolve(null).then(e).catch(fb)}:Mm;function fb(e){setTimeout(function(){throw e})}function $n(e){return e==="head"}function jm(e,t){var i=t,l=0;do{var o=i.nextSibling;if(e.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"||i==="/&"){if(l===0){e.removeChild(o),Ns(t);return}l--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")l++;else if(i==="html")Oa(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Oa(i);for(var c=i.firstChild;c;){var h=c.nextSibling,g=c.nodeName;c[Ks]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=h}}else i==="body"&&Oa(e.ownerDocument.body);i=o}while(i);Ns(t)}function km(e,t){var i=e;e=0;do{var l=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=l}while(i)}function Ec(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Ec(i),Ro(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function hb(e,t,i,l){for(;e.nodeType===1;){var o=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ks])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Kt(e.nextSibling),e===null)break}return null}function pb(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Kt(e.nextSibling),e===null))return null;return e}function Lm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Kt(e.nextSibling),e===null))return null;return e}function wc(e){return e.data==="$?"||e.data==="$~"}function Tc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function mb(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var l=function(){t(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Nc=null;function Um(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return Kt(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function Im(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function Bm(e,t,i){switch(t=xr(i),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Oa(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ro(e)}var Zt=new Map,Hm=new Set;function Cr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=B.d;B.d={f:_b,r:gb,D:yb,C:vb,L:bb,m:xb,X:Sb,S:Cb,M:Eb};function _b(){var e=Nn.f(),t=hr();return e||t}function gb(e){var t=Qi(e);t!==null&&t.tag===5&&t.type==="form"?ip(t):Nn.r(e)}var Es=typeof document>"u"?null:document;function Ym(e,t,i){var l=Es;if(l&&typeof t=="string"&&t){var o=Yt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof i=="string"&&(o+='[crossorigin="'+i+'"]'),Hm.has(o)||(Hm.add(o),e={rel:e,crossOrigin:i,href:t},l.querySelector(o)===null&&(t=l.createElement("link"),ht(t,"link",e),st(t),l.head.appendChild(t)))}}function yb(e){Nn.D(e),Ym("dns-prefetch",e,null)}function vb(e,t){Nn.C(e,t),Ym("preconnect",e,t)}function bb(e,t,i){Nn.L(e,t,i);var l=Es;if(l&&e&&t){var o='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&i&&i.imageSrcSet?(o+='[imagesrcset="'+Yt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(o+='[imagesizes="'+Yt(i.imageSizes)+'"]')):o+='[href="'+Yt(e)+'"]';var c=o;switch(t){case"style":c=ws(e);break;case"script":c=Ts(e)}Zt.has(c)||(e=v({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),Zt.set(c,e),l.querySelector(o)!==null||t==="style"&&l.querySelector(Da(c))||t==="script"&&l.querySelector(Ma(c))||(t=l.createElement("link"),ht(t,"link",e),st(t),l.head.appendChild(t)))}}function xb(e,t){Nn.m(e,t);var i=Es;if(i&&e){var l=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Yt(l)+'"][href="'+Yt(e)+'"]',c=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ts(e)}if(!Zt.has(c)&&(e=v({rel:"modulepreload",href:e},t),Zt.set(c,e),i.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ma(c)))return}l=i.createElement("link"),ht(l,"link",e),st(l),i.head.appendChild(l)}}}function Cb(e,t,i){Nn.S(e,t,i);var l=Es;if(l&&e){var o=Xi(l).hoistableStyles,c=ws(e);t=t||"default";var h=o.get(c);if(!h){var g={loading:0,preload:null};if(h=l.querySelector(Da(c)))g.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},i),(i=Zt.get(c))&&Ac(e,i);var x=h=l.createElement("link");st(x),ht(x,"link",e),x._p=new Promise(function(N,M){x.onload=N,x.onerror=M}),x.addEventListener("load",function(){g.loading|=1}),x.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Sr(h,t,l)}h={type:"stylesheet",instance:h,count:1,state:g},o.set(c,h)}}}function Sb(e,t){Nn.X(e,t);var i=Es;if(i&&e){var l=Xi(i).hoistableScripts,o=Ts(e),c=l.get(o);c||(c=i.querySelector(Ma(o)),c||(e=v({src:e,async:!0},t),(t=Zt.get(o))&&Rc(e,t),c=i.createElement("script"),st(c),ht(c,"link",e),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(o,c))}}function Eb(e,t){Nn.M(e,t);var i=Es;if(i&&e){var l=Xi(i).hoistableScripts,o=Ts(e),c=l.get(o);c||(c=i.querySelector(Ma(o)),c||(e=v({src:e,async:!0,type:"module"},t),(t=Zt.get(o))&&Rc(e,t),c=i.createElement("script"),st(c),ht(c,"link",e),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(o,c))}}function qm(e,t,i,l){var o=(o=_e.current)?Cr(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=ws(i.href),i=Xi(o).hoistableStyles,l=i.get(t),l||(l={type:"style",instance:null,count:0,state:null},i.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=ws(i.href);var c=Xi(o).hoistableStyles,h=c.get(e);if(h||(o=o.ownerDocument||o,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,h),(c=o.querySelector(Da(e)))&&!c._p&&(h.instance=c,h.state.loading=5),Zt.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Zt.set(e,i),c||wb(o,e,i,h.state))),t&&l===null)throw Error(r(528,""));return h}if(t&&l!==null)throw Error(r(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ts(i),i=Xi(o).hoistableScripts,l=i.get(t),l||(l={type:"script",instance:null,count:0,state:null},i.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ws(e){return'href="'+Yt(e)+'"'}function Da(e){return'link[rel="stylesheet"]['+e+"]"}function Gm(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function wb(e,t,i,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ht(t,"link",i),st(t),e.head.appendChild(t))}function Ts(e){return'[src="'+Yt(e)+'"]'}function Ma(e){return"script[async]"+e}function Vm(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Yt(i.href)+'"]');if(l)return t.instance=l,st(l),l;var o=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),st(l),ht(l,"style",o),Sr(l,i.precedence,e),t.instance=l;case"stylesheet":o=ws(i.href);var c=e.querySelector(Da(o));if(c)return t.state.loading|=4,t.instance=c,st(c),c;l=Gm(i),(o=Zt.get(o))&&Ac(l,o),c=(e.ownerDocument||e).createElement("link"),st(c);var h=c;return h._p=new Promise(function(g,x){h.onload=g,h.onerror=x}),ht(c,"link",l),t.state.loading|=4,Sr(c,i.precedence,e),t.instance=c;case"script":return c=Ts(i.src),(o=e.querySelector(Ma(c)))?(t.instance=o,st(o),o):(l=i,(o=Zt.get(c))&&(l=v({},i),Rc(l,o)),e=e.ownerDocument||e,o=e.createElement("script"),st(o),ht(o,"link",l),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Sr(l,i.precedence,e));return t.instance}function Sr(e,t,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,c=o,h=0;h<l.length;h++){var g=l[h];if(g.dataset.precedence===t)c=g;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function Ac(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Er=null;function Fm(e,t,i){if(Er===null){var l=new Map,o=Er=new Map;o.set(i,l)}else o=Er,l=o.get(i),l||(l=new Map,o.set(i,l));if(l.has(e))return l;for(l.set(e,null),i=i.getElementsByTagName(e),o=0;o<i.length;o++){var c=i[o];if(!(c[Ks]||c[ut]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(t)||"";h=e+h;var g=l.get(h);g?g.push(c):l.set(h,[c])}}return l}function Qm(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function Tb(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Xm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Nb(e,t,i,l){if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var o=ws(l.href),c=t.querySelector(Da(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=wr.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=c,st(c);return}c=t.ownerDocument||t,l=Gm(l),(o=Zt.get(o))&&Ac(l,o),c=c.createElement("link"),st(c);var h=c;h._p=new Promise(function(g,x){h.onload=g,h.onerror=x}),ht(c,"link",l),i.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=wr.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var Oc=0;function Ab(e,t){return e.stylesheets&&e.count===0&&Nr(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var l=setTimeout(function(){if(e.stylesheets&&Nr(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Oc===0&&(Oc=62500*ob());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Nr(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Oc?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(o)}}:null}function wr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Tr=null;function Nr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Tr=new Map,t.forEach(Rb,e),Tr=null,wr.call(e))}function Rb(e,t){if(!(t.state.loading&4)){var i=Tr.get(e);if(i)var l=i.get(null);else{i=new Map,Tr.set(e,i);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var h=o[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(i.set(h.dataset.precedence,h),l=h)}l&&i.set(null,l)}o=t.instance,h=o.getAttribute("data-precedence"),c=i.get(h)||l,c===l&&i.set(null,o),i.set(h,o),this.count++,l=wr.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var za={$$typeof:oe,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Ob(e,t,i,l,o,c,h,g,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wo(0),this.hiddenUpdates=wo(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function Km(e,t,i,l,o,c,h,g,x,N,M,k){return e=new Ob(e,t,i,h,x,N,M,k,g),t=1,c===!0&&(t|=24),c=zt(3,null,null,t),e.current=c,c.stateNode=e,t=uu(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:i,cache:t},hu(c),e}function Zm(e){return e?(e=is,e):is}function Pm(e,t,i,l,o,c){o=Zm(o),l.context===null?l.context=o:l.pendingContext=o,l=qn(t),l.payload={element:i},c=c===void 0?null:c,c!==null&&(l.callback=c),i=Gn(e,l,t),i!==null&&(wt(i,e,t),da(i,e,t))}function Jm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Dc(e,t){Jm(e,t),(e=e.alternate)&&Jm(e,t)}function Wm(e){if(e.tag===13||e.tag===31){var t=bi(e,67108864);t!==null&&wt(t,e,67108864),Dc(e,67108864)}}function $m(e){if(e.tag===13||e.tag===31){var t=It();t=To(t);var i=bi(e,t);i!==null&&wt(i,e,t),Dc(e,t)}}var Ar=!0;function Db(e,t,i,l){var o=R.T;R.T=null;var c=B.p;try{B.p=2,Mc(e,t,i,l)}finally{B.p=c,R.T=o}}function Mb(e,t,i,l){var o=R.T;R.T=null;var c=B.p;try{B.p=8,Mc(e,t,i,l)}finally{B.p=c,R.T=o}}function Mc(e,t,i,l){if(Ar){var o=zc(l);if(o===null)yc(e,t,l,Rr,i),t_(e,l);else if(jb(o,e,t,i,l))l.stopPropagation();else if(t_(e,l),t&4&&-1<zb.indexOf(e)){for(;o!==null;){var c=Qi(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=mi(c.pendingLanes);if(h!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;h;){var x=1<<31-Dt(h);g.entanglements[1]|=x,h&=~x}on(c),(Ae&6)===0&&(dr=Rt()+500,Na(0))}}break;case 31:case 13:g=bi(c,2),g!==null&&wt(g,c,2),hr(),Dc(c,2)}if(c=zc(l),c===null&&yc(e,t,l,Rr,i),c===o)break;o=c}o!==null&&l.stopPropagation()}else yc(e,t,l,null,i)}}function zc(e){return e=ko(e),jc(e)}var Rr=null;function jc(e){if(Rr=null,e=Fi(e),e!==null){var t=d(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=f(t),e!==null)return e;e=null}else if(i===31){if(e=m(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Rr=e,null}function e_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yy()){case of:return 2;case uf:return 8;case yl:case vy:return 32;case cf:return 268435456;default:return 32}default:return 32}}var kc=!1,ei=null,ti=null,ni=null,ja=new Map,ka=new Map,ii=[],zb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t_(e,t){switch(e){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":ja.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(t.pointerId)}}function La(e,t,i,l,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:i,eventSystemFlags:l,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Qi(t),t!==null&&Wm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function jb(e,t,i,l,o){switch(t){case"focusin":return ei=La(ei,e,t,i,l,o),!0;case"dragenter":return ti=La(ti,e,t,i,l,o),!0;case"mouseover":return ni=La(ni,e,t,i,l,o),!0;case"pointerover":var c=o.pointerId;return ja.set(c,La(ja.get(c)||null,e,t,i,l,o)),!0;case"gotpointercapture":return c=o.pointerId,ka.set(c,La(ka.get(c)||null,e,t,i,l,o)),!0}return!1}function n_(e){var t=Fi(e.target);if(t!==null){var i=d(t);if(i!==null){if(t=i.tag,t===13){if(t=f(i),t!==null){e.blockedOn=t,_f(e.priority,function(){$m(i)});return}}else if(t===31){if(t=m(i),t!==null){e.blockedOn=t,_f(e.priority,function(){$m(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=zc(e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);jo=l,i.target.dispatchEvent(l),jo=null}else return t=Qi(i),t!==null&&Wm(t),e.blockedOn=i,!1;t.shift()}return!0}function i_(e,t,i){Or(e)&&i.delete(t)}function kb(){kc=!1,ei!==null&&Or(ei)&&(ei=null),ti!==null&&Or(ti)&&(ti=null),ni!==null&&Or(ni)&&(ni=null),ja.forEach(i_),ka.forEach(i_)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,kc||(kc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,kb)))}var Mr=null;function s_(e){Mr!==e&&(Mr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Mr===e&&(Mr=null);for(var t=0;t<e.length;t+=3){var i=e[t],l=e[t+1],o=e[t+2];if(typeof l!="function"){if(jc(l||i)===null)continue;break}var c=Qi(i);c!==null&&(e.splice(t,3),t-=3,zu(c,{pending:!0,data:o,method:i.method,action:l},l,o))}}))}function Ns(e){function t(x){return Dr(x,e)}ei!==null&&Dr(ei,e),ti!==null&&Dr(ti,e),ni!==null&&Dr(ni,e),ja.forEach(t),ka.forEach(t);for(var i=0;i<ii.length;i++){var l=ii[i];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ii.length&&(i=ii[0],i.blockedOn===null);)n_(i),i.blockedOn===null&&ii.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var o=i[l],c=i[l+1],h=o[vt]||null;if(typeof c=="function")h||s_(i);else if(h){var g=null;if(c&&c.hasAttribute("formAction")){if(o=c,h=c[vt]||null)g=h.formAction;else if(jc(o)!==null)continue}else g=h.action;typeof g=="function"?i[l+1]=g:(i.splice(l,3),l-=3),s_(i)}}}function a_(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(h){return o=h})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),l||setTimeout(i,20)}function i(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Lc(e){this._internalRoot=e}zr.prototype.render=Lc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var i=t.current,l=It();Pm(i,l,e,t,null,null)},zr.prototype.unmount=Lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pm(e.current,2,null,e,null,null),hr(),t[Vi]=null}};function zr(e){this._internalRoot=e}zr.prototype.unstable_scheduleHydration=function(e){if(e){var t=mf();e={blockedOn:null,target:e,priority:t};for(var i=0;i<ii.length&&t!==0&&t<ii[i].priority;i++);ii.splice(i,0,e),i===0&&n_(e)}};var l_=n.version;if(l_!=="19.2.1")throw Error(r(527,l_,"19.2.1"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Lb={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{Fs=jr.inject(Lb),Ot=jr}catch{}}return Ia.createRoot=function(e,t){if(!u(e))throw Error(r(299));var i=!1,l="",o=hp,c=pp,h=mp;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Km(e,1,!1,null,null,i,l,null,o,c,h,a_),e[Vi]=t.current,gc(e),new Lc(t)},Ia.hydrateRoot=function(e,t,i){if(!u(e))throw Error(r(299));var l=!1,o="",c=hp,h=pp,g=mp,x=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(g=i.onRecoverableError),i.formState!==void 0&&(x=i.formState)),t=Km(e,1,!0,t,i??null,l,o,x,c,h,g,a_),t.context=Zm(null),i=t.current,l=It(),l=To(l),o=qn(l),o.callback=null,Gn(i,o,l),i=l,t.current.lanes=i,Xs(t,i),on(t),e[Vi]=t.current,gc(e),new zr(t)},Ia.version="19.2.1",Ia}var __;function Qb(){if(__)return Bc.exports;__=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(n){console.error(n)}}return s(),Bc.exports=Fb(),Bc.exports}var Xb=Qb();const Kb=bg(Xb),Zb=({chapters:s,currentChapterId:n,onSelectChapter:a,unlockedMap:r,enforceLocksForStudent:u=!0})=>{const[d,f]=L.useState(null),[m,_]=L.useState(!1),p=Object.values(r).filter(Boolean).length,S=Math.round(p/s.length*100);return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"w-14 bg-[#252526] text-slate-400 flex flex-col items-center py-4 border-r border-[#3c3c3c] relative z-30",children:[y.jsx("div",{className:"mb-6 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-xl text-white shadow-lg cursor-pointer hover:scale-105 transition-transform",title:"Python Tutoring",children:"🐍"}),y.jsxs("button",{onClick:()=>_(!m),className:`w-10 h-10 rounded-lg flex items-center justify-center mb-2 transition-all relative ${m?"bg-blue-600 text-white":"hover:bg-[#3c3c3c] hover:text-white"}`,title:"Chapters",children:[y.jsx("span",{className:"text-xl",children:"📚"}),y.jsxs("svg",{className:"absolute inset-0 w-full h-full -rotate-90",viewBox:"0 0 36 36",children:[y.jsx("circle",{cx:"18",cy:"18",r:"16",fill:"none",stroke:"#3c3c3c",strokeWidth:"2"}),y.jsx("circle",{cx:"18",cy:"18",r:"16",fill:"none",stroke:"#22c55e",strokeWidth:"2",strokeDasharray:`${S} 100`,strokeLinecap:"round",className:"transition-all duration-500"})]})]}),y.jsx("div",{className:"flex-1"}),y.jsx("button",{className:"w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#3c3c3c] hover:text-white transition-all",title:"Settings",children:y.jsx("span",{className:"text-xl",children:"⚙️"})}),y.jsx("button",{className:"w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#3c3c3c] hover:text-white transition-all",title:"Keyboard Shortcuts: Ctrl+Enter to Run",children:y.jsx("span",{className:"text-xl",children:"❓"})})]}),m&&y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"fixed inset-0 bg-black/40 z-20",onClick:()=>_(!1)}),y.jsxs("div",{className:"fixed left-14 top-0 h-full w-80 bg-[#1e1e1e] shadow-2xl border-r border-[#3c3c3c] z-30 animate-slide-in overflow-hidden flex flex-col",children:[y.jsxs("div",{className:"p-5 border-b border-[#3c3c3c] bg-[#252526]",children:[y.jsxs("div",{className:"flex items-center justify-between mb-3",children:[y.jsx("h3",{className:"font-bold text-white text-lg",children:"Curriculum"}),y.jsx("button",{onClick:()=>_(!1),className:"text-slate-500 hover:text-white transition-colors",children:"✕"})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"flex-1 h-2 bg-[#3c3c3c] rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500",style:{width:`${S}%`}})}),y.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[S,"%"]})]})]}),y.jsx("div",{className:"flex-1 overflow-y-auto p-3",children:s.map((v,C)=>{const z=r[v.id],U=n===v.id,q=!z&&u,te=d===v.id;return y.jsxs("button",{onClick:()=>{if(q){f(v.id),setTimeout(()=>f(null),1500);return}a(v.id),_(!1)},className:`w-full text-left p-4 rounded-xl mb-2 transition-all flex items-start gap-3 group ${U?"bg-blue-600/20 border border-blue-500/30":te?"bg-red-600/20 border border-red-500/50 animate-shake":q?"opacity-60 cursor-not-allowed border border-transparent":"hover:bg-[#2a2a2a] border border-transparent"}`,children:[y.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${U?"bg-blue-600 text-white":z?"bg-emerald-600/20 text-emerald-400 border border-emerald-500/30":"bg-[#3c3c3c] text-slate-500"}`,children:z?C+1:"🔒"}),y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsx("div",{className:`font-medium truncate text-sm ${U?"text-white":"text-slate-300"}`,children:v.title}),y.jsxs("div",{className:"text-xs text-slate-500 truncate mt-0.5",children:[v.challenges.length," challenges"]})]}),z&&!U&&y.jsx("span",{className:"text-emerald-500 text-sm",children:"✓"}),te&&y.jsx("span",{className:"text-red-400 text-xs animate-pulse",children:"Locked by teacher"})]},v.id)})}),y.jsx("div",{className:"p-4 border-t border-[#3c3c3c] bg-[#252526]",children:y.jsx("div",{className:"text-xs text-slate-500 text-center",children:"Mr. Stewart's Python Tutoring"})})]})]}),y.jsx("style",{children:`
        @keyframes slide-in {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.2s ease-out;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-4px); }
          40%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-out;
        }
      `})]})};function g_(s,n){(n==null||n>s.length)&&(n=s.length);for(var a=0,r=Array(n);a<n;a++)r[a]=s[a];return r}function Pb(s){if(Array.isArray(s))return s}function Jb(s,n,a){return(n=s1(n))in s?Object.defineProperty(s,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[n]=a,s}function Wb(s,n){var a=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(a!=null){var r,u,d,f,m=[],_=!0,p=!1;try{if(d=(a=a.call(s)).next,n!==0)for(;!(_=(r=d.call(a)).done)&&(m.push(r.value),m.length!==n);_=!0);}catch(S){p=!0,u=S}finally{try{if(!_&&a.return!=null&&(f=a.return(),Object(f)!==f))return}finally{if(p)throw u}}return m}}function $b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y_(s,n){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);n&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(s,u).enumerable})),a.push.apply(a,r)}return a}function v_(s){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?y_(Object(a),!0).forEach(function(r){Jb(s,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):y_(Object(a)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(a,r))})}return s}function e1(s,n){if(s==null)return{};var a,r,u=t1(s,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(s);for(r=0;r<d.length;r++)a=d[r],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(s,a)&&(u[a]=s[a])}return u}function t1(s,n){if(s==null)return{};var a={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(n.indexOf(r)!==-1)continue;a[r]=s[r]}return a}function n1(s,n){return Pb(s)||Wb(s,n)||a1(s,n)||$b()}function i1(s,n){if(typeof s!="object"||!s)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var r=a.call(s,n);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(s)}function s1(s){var n=i1(s,"string");return typeof n=="symbol"?n:n+""}function a1(s,n){if(s){if(typeof s=="string")return g_(s,n);var a={}.toString.call(s).slice(8,-1);return a==="Object"&&s.constructor&&(a=s.constructor.name),a==="Map"||a==="Set"?Array.from(s):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?g_(s,n):void 0}}function l1(s,n,a){return n in s?Object.defineProperty(s,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[n]=a,s}function b_(s,n){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);n&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(s,u).enumerable})),a.push.apply(a,r)}return a}function x_(s){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?b_(Object(a),!0).forEach(function(r){l1(s,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):b_(Object(a)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(a,r))})}return s}function r1(){for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return function(r){return n.reduceRight(function(u,d){return d(u)},r)}}function Ga(s){return function n(){for(var a=this,r=arguments.length,u=new Array(r),d=0;d<r;d++)u[d]=arguments[d];return u.length>=s.length?s.apply(this,u):function(){for(var f=arguments.length,m=new Array(f),_=0;_<f;_++)m[_]=arguments[_];return n.apply(a,[].concat(u,m))}}}function Hr(s){return{}.toString.call(s).includes("Object")}function o1(s){return!Object.keys(s).length}function Ja(s){return typeof s=="function"}function u1(s,n){return Object.prototype.hasOwnProperty.call(s,n)}function c1(s,n){return Hr(n)||li("changeType"),Object.keys(n).some(function(a){return!u1(s,a)})&&li("changeField"),n}function d1(s){Ja(s)||li("selectorType")}function f1(s){Ja(s)||Hr(s)||li("handlerType"),Hr(s)&&Object.values(s).some(function(n){return!Ja(n)})&&li("handlersType")}function h1(s){s||li("initialIsRequired"),Hr(s)||li("initialType"),o1(s)&&li("initialContent")}function p1(s,n){throw new Error(s[n]||s.default)}var m1={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},li=Ga(p1)(m1),kr={changes:c1,selector:d1,handler:f1,initial:h1};function _1(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};kr.initial(s),kr.handler(n);var a={current:s},r=Ga(v1)(a,n),u=Ga(y1)(a),d=Ga(kr.changes)(s),f=Ga(g1)(a);function m(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(S){return S};return kr.selector(p),p(a.current)}function _(p){r1(r,u,d,f)(p)}return[m,_]}function g1(s,n){return Ja(n)?n(s.current):n}function y1(s,n){return s.current=x_(x_({},s.current),n),n}function v1(s,n,a){return Ja(n)?n(s.current):Object.keys(a).forEach(function(r){var u;return(u=n[r])===null||u===void 0?void 0:u.call(n,s.current[r])}),a}var b1={create:_1},x1={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function C1(s){return function n(){for(var a=this,r=arguments.length,u=new Array(r),d=0;d<r;d++)u[d]=arguments[d];return u.length>=s.length?s.apply(this,u):function(){for(var f=arguments.length,m=new Array(f),_=0;_<f;_++)m[_]=arguments[_];return n.apply(a,[].concat(u,m))}}}function S1(s){return{}.toString.call(s).includes("Object")}function E1(s){return s||C_("configIsRequired"),S1(s)||C_("configType"),s.urls?(w1(),{paths:{vs:s.urls.monacoBase}}):s}function w1(){console.warn(xg.deprecation)}function T1(s,n){throw new Error(s[n]||s.default)}var xg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},C_=C1(T1)(xg),N1={config:E1},A1=function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return function(u){return a.reduceRight(function(d,f){return f(d)},u)}};function Cg(s,n){return Object.keys(n).forEach(function(a){n[a]instanceof Object&&s[a]&&Object.assign(n[a],Cg(s[a],n[a]))}),v_(v_({},s),n)}var R1={type:"cancelation",msg:"operation is manually canceled"};function Gc(s){var n=!1,a=new Promise(function(r,u){s.then(function(d){return n?u(R1):r(d)}),s.catch(u)});return a.cancel=function(){return n=!0},a}var O1=["monaco"],D1=b1.create({config:x1,isInitialized:!1,resolve:null,reject:null,monaco:null}),Sg=n1(D1,2),ul=Sg[0],ao=Sg[1];function M1(s){var n=N1.config(s),a=n.monaco,r=e1(n,O1);ao(function(u){return{config:Cg(u.config,r),monaco:a}})}function z1(){var s=ul(function(n){var a=n.monaco,r=n.isInitialized,u=n.resolve;return{monaco:a,isInitialized:r,resolve:u}});if(!s.isInitialized){if(ao({isInitialized:!0}),s.monaco)return s.resolve(s.monaco),Gc(Vc);if(window.monaco&&window.monaco.editor)return Eg(window.monaco),s.resolve(window.monaco),Gc(Vc);A1(j1,L1)(U1)}return Gc(Vc)}function j1(s){return document.body.appendChild(s)}function k1(s){var n=document.createElement("script");return s&&(n.src=s),n}function L1(s){var n=ul(function(r){var u=r.config,d=r.reject;return{config:u,reject:d}}),a=k1("".concat(n.config.paths.vs,"/loader.js"));return a.onload=function(){return s()},a.onerror=n.reject,a}function U1(){var s=ul(function(a){var r=a.config,u=a.resolve,d=a.reject;return{config:r,resolve:u,reject:d}}),n=window.require;n.config(s.config),n(["vs/editor/editor.main"],function(a){var r=a.m||a;Eg(r),s.resolve(r)},function(a){s.reject(a)})}function Eg(s){ul().monaco||ao({monaco:s})}function I1(){return ul(function(s){var n=s.monaco;return n})}var Vc=new Promise(function(s,n){return ao({resolve:s,reject:n})}),wg={config:M1,init:z1,__getMonacoInstance:I1},B1={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Fc=B1,H1={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Y1=H1;function q1({children:s}){return ai.createElement("div",{style:Y1.container},s)}var G1=q1,V1=G1;function F1({width:s,height:n,isEditorReady:a,loading:r,_ref:u,className:d,wrapperProps:f}){return ai.createElement("section",{style:{...Fc.wrapper,width:s,height:n},...f},!a&&ai.createElement(V1,null,r),ai.createElement("div",{ref:u,style:{...Fc.fullWidth,...!a&&Fc.hide},className:d}))}var Q1=F1,Tg=L.memo(Q1);function X1(s){L.useEffect(s,[])}var Ng=X1;function K1(s,n,a=!0){let r=L.useRef(!0);L.useEffect(r.current||!a?()=>{r.current=!1}:s,n)}var Bt=K1;function Va(){}function Os(s,n,a,r){return Z1(s,r)||P1(s,n,a,r)}function Z1(s,n){return s.editor.getModel(Ag(s,n))}function P1(s,n,a,r){return s.editor.createModel(n,a,r?Ag(s,r):void 0)}function Ag(s,n){return s.Uri.parse(n)}function J1({original:s,modified:n,language:a,originalLanguage:r,modifiedLanguage:u,originalModelPath:d,modifiedModelPath:f,keepCurrentOriginalModel:m=!1,keepCurrentModifiedModel:_=!1,theme:p="light",loading:S="Loading...",options:v={},height:C="100%",width:z="100%",className:U,wrapperProps:q={},beforeMount:te=Va,onMount:le=Va}){let[re,oe]=L.useState(!1),[ne,$]=L.useState(!0),ie=L.useRef(null),G=L.useRef(null),K=L.useRef(null),Y=L.useRef(le),X=L.useRef(te),Se=L.useRef(!1);Ng(()=>{let W=wg.init();return W.then(R=>(G.current=R)&&$(!1)).catch(R=>(R==null?void 0:R.type)!=="cancelation"&&console.error("Monaco initialization: error:",R)),()=>ie.current?Ne():W.cancel()}),Bt(()=>{if(ie.current&&G.current){let W=ie.current.getOriginalEditor(),R=Os(G.current,s||"",r||a||"text",d||"");R!==W.getModel()&&W.setModel(R)}},[d],re),Bt(()=>{if(ie.current&&G.current){let W=ie.current.getModifiedEditor(),R=Os(G.current,n||"",u||a||"text",f||"");R!==W.getModel()&&W.setModel(R)}},[f],re),Bt(()=>{let W=ie.current.getModifiedEditor();W.getOption(G.current.editor.EditorOption.readOnly)?W.setValue(n||""):n!==W.getValue()&&(W.executeEdits("",[{range:W.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),W.pushUndoStop())},[n],re),Bt(()=>{var W,R;(R=(W=ie.current)==null?void 0:W.getModel())==null||R.original.setValue(s||"")},[s],re),Bt(()=>{let{original:W,modified:R}=ie.current.getModel();G.current.editor.setModelLanguage(W,r||a||"text"),G.current.editor.setModelLanguage(R,u||a||"text")},[a,r,u],re),Bt(()=>{var W;(W=G.current)==null||W.editor.setTheme(p)},[p],re),Bt(()=>{var W;(W=ie.current)==null||W.updateOptions(v)},[v],re);let me=L.useCallback(()=>{var B;if(!G.current)return;X.current(G.current);let W=Os(G.current,s||"",r||a||"text",d||""),R=Os(G.current,n||"",u||a||"text",f||"");(B=ie.current)==null||B.setModel({original:W,modified:R})},[a,n,u,s,r,d,f]),Pe=L.useCallback(()=>{var W;!Se.current&&K.current&&(ie.current=G.current.editor.createDiffEditor(K.current,{automaticLayout:!0,...v}),me(),(W=G.current)==null||W.editor.setTheme(p),oe(!0),Se.current=!0)},[v,p,me]);L.useEffect(()=>{re&&Y.current(ie.current,G.current)},[re]),L.useEffect(()=>{!ne&&!re&&Pe()},[ne,re,Pe]);function Ne(){var R,B,Z,P;let W=(R=ie.current)==null?void 0:R.getModel();m||((B=W==null?void 0:W.original)==null||B.dispose()),_||((Z=W==null?void 0:W.modified)==null||Z.dispose()),(P=ie.current)==null||P.dispose()}return ai.createElement(Tg,{width:z,height:C,isEditorReady:re,loading:S,_ref:K,className:U,wrapperProps:q})}var W1=J1;L.memo(W1);function $1(s){let n=L.useRef();return L.useEffect(()=>{n.current=s},[s]),n.current}var ex=$1,Lr=new Map;function tx({defaultValue:s,defaultLanguage:n,defaultPath:a,value:r,language:u,path:d,theme:f="light",line:m,loading:_="Loading...",options:p={},overrideServices:S={},saveViewState:v=!0,keepCurrentModel:C=!1,width:z="100%",height:U="100%",className:q,wrapperProps:te={},beforeMount:le=Va,onMount:re=Va,onChange:oe,onValidate:ne=Va}){let[$,ie]=L.useState(!1),[G,K]=L.useState(!0),Y=L.useRef(null),X=L.useRef(null),Se=L.useRef(null),me=L.useRef(re),Pe=L.useRef(le),Ne=L.useRef(),W=L.useRef(r),R=ex(d),B=L.useRef(!1),Z=L.useRef(!1);Ng(()=>{let b=wg.init();return b.then(D=>(Y.current=D)&&K(!1)).catch(D=>(D==null?void 0:D.type)!=="cancelation"&&console.error("Monaco initialization: error:",D)),()=>X.current?ce():b.cancel()}),Bt(()=>{var D,I,V,se;let b=Os(Y.current,s||r||"",n||u||"",d||a||"");b!==((D=X.current)==null?void 0:D.getModel())&&(v&&Lr.set(R,(I=X.current)==null?void 0:I.saveViewState()),(V=X.current)==null||V.setModel(b),v&&((se=X.current)==null||se.restoreViewState(Lr.get(d))))},[d],$),Bt(()=>{var b;(b=X.current)==null||b.updateOptions(p)},[p],$),Bt(()=>{!X.current||r===void 0||(X.current.getOption(Y.current.editor.EditorOption.readOnly)?X.current.setValue(r):r!==X.current.getValue()&&(Z.current=!0,X.current.executeEdits("",[{range:X.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),X.current.pushUndoStop(),Z.current=!1))},[r],$),Bt(()=>{var D,I;let b=(D=X.current)==null?void 0:D.getModel();b&&u&&((I=Y.current)==null||I.editor.setModelLanguage(b,u))},[u],$),Bt(()=>{var b;m!==void 0&&((b=X.current)==null||b.revealLine(m))},[m],$),Bt(()=>{var b;(b=Y.current)==null||b.editor.setTheme(f)},[f],$);let P=L.useCallback(()=>{var b;if(!(!Se.current||!Y.current)&&!B.current){Pe.current(Y.current);let D=d||a,I=Os(Y.current,r||s||"",n||u||"",D||"");X.current=(b=Y.current)==null?void 0:b.editor.create(Se.current,{model:I,automaticLayout:!0,...p},S),v&&X.current.restoreViewState(Lr.get(D)),Y.current.editor.setTheme(f),m!==void 0&&X.current.revealLine(m),ie(!0),B.current=!0}},[s,n,a,r,u,d,p,S,v,f,m]);L.useEffect(()=>{$&&me.current(X.current,Y.current)},[$]),L.useEffect(()=>{!G&&!$&&P()},[G,$,P]),W.current=r,L.useEffect(()=>{var b,D;$&&oe&&((b=Ne.current)==null||b.dispose(),Ne.current=(D=X.current)==null?void 0:D.onDidChangeModelContent(I=>{Z.current||oe(X.current.getValue(),I)}))},[$,oe]),L.useEffect(()=>{if($){let b=Y.current.editor.onDidChangeMarkers(D=>{var V;let I=(V=X.current.getModel())==null?void 0:V.uri;if(I&&D.find(se=>se.path===I.path)){let se=Y.current.editor.getModelMarkers({resource:I});ne==null||ne(se)}});return()=>{b==null||b.dispose()}}return()=>{}},[$,ne]);function ce(){var b,D;(b=Ne.current)==null||b.dispose(),C?v&&Lr.set(d,X.current.saveViewState()):(D=X.current.getModel())==null||D.dispose(),X.current.dispose()}return ai.createElement(Tg,{width:z,height:U,isEditorReady:$,loading:_,_ref:Se,className:q,wrapperProps:te})}var nx=tx,ix=L.memo(nx),sx=ix;const Rg=L.createContext(void 0),Sd=()=>{const s=L.useContext(Rg);if(!s)throw new Error("usePython must be used within a PythonProvider");return s},ax=({children:s})=>{const[n,a]=L.useState(null),[r,u]=L.useState(!0),[d,f]=L.useState(!1),[m,_]=L.useState("Initializing Python environment..."),[p,S]=L.useState([]),[v,C]=L.useState(!1),[z,U]=L.useState(null),q=L.useRef([]);L.useEffect(()=>{const oe=setInterval(()=>{q.current.length>0&&(S(ne=>[...ne,...q.current]),q.current=[])},50);return()=>clearInterval(oe)},[]),L.useEffect(()=>{(async()=>{try{if(_("Downloading Pyodide (Python 3.11)..."),!window.loadPyodide){const $=document.createElement("script");$.src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js",$.async=!0,document.body.appendChild($),await new Promise(ie=>{$.onload=ie})}_("Instantiating WebAssembly...");const ne=await window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"});ne.setStdout({batched:$=>{if($.startsWith("__TEST_RESULTS__:"))try{const ie=$.replace("__TEST_RESULTS__:",""),G=JSON.parse(ie);U(G)}catch(ie){console.error("Failed to parse test results",ie)}else q.current.push($)}}),ne.setStderr({batched:$=>q.current.push(`Error: ${$}`)}),_("Loading standard libraries..."),a(ne),f(!0),_("System Ready.")}catch(ne){console.error("Failed to load Pyodide:",ne),_("Failed to load Python engine. Please refresh.")}finally{u(!1)}})()},[]);const te=L.useCallback(async(oe,ne)=>{if(n){C(!0),U(null);try{await new Promise(ie=>setTimeout(ie,10));let $=oe;if(ne&&ne.length>0){const ie=`
import json
import traceback

def __run_tests():
    test_cases = ${JSON.stringify(ne)}
    results = []

    for case in test_cases:
        try:
            expected = eval(case['expected']) # Evaluate string "4" to int 4

            # Capture return value
            actual = eval(case['input'])

            passed = actual == expected
            results.append({
                "input": case['input'],
                "expected": str(expected),
                "actual": str(actual),
                "passed": passed
            })
        except Exception as e:
            results.append({
                "input": case['input'],
                "expected": case['expected'],
                "actual": "Error",
                "passed": False,
                "error": str(e)
            })

    print("__TEST_RESULTS__:" + json.dumps(results))

__run_tests()
`;$=oe+`
`+ie}await n.runPythonAsync($)}catch($){q.current.push($.toString())}finally{C(!1)}}},[n]),le=L.useCallback(()=>{S([]),q.current=[],U(null)},[]),re=ai.useMemo(()=>({isLoading:r,isReady:d,loadingMessage:m,runCode:te,output:p,clearOutput:le,isRunning:v,testResults:z}),[r,d,m,te,p,le,v,z]);return y.jsx(Rg.Provider,{value:re,children:s})},lx=()=>{const{output:s,isRunning:n,clearOutput:a,testResults:r}=Sd(),u=L.useRef(null),[d,f]=L.useState("terminal");L.useEffect(()=>{r&&f("tests")},[r]),L.useEffect(()=>{var v;d==="terminal"&&((v=u.current)==null||v.scrollIntoView({behavior:"smooth"}))},[s,d]);const m=v=>v.startsWith("Error:")||v.includes("Traceback")?"text-red-400":v.startsWith(">>>")?"text-blue-400":"text-slate-200",_=(r==null?void 0:r.filter(v=>v.passed).length)||0,p=(r==null?void 0:r.length)||0,S=p>0&&_===p;return y.jsxs("div",{className:"flex flex-col h-full bg-[#0d0d0d] font-mono text-sm",children:[y.jsxs("div",{className:"flex items-center bg-[#1a1a1a] border-b border-[#2a2a2a]",children:[y.jsx("button",{onClick:()=>f("terminal"),className:`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${d==="terminal"?"text-white border-b-2 border-blue-500 bg-[#252526]":"text-slate-500 hover:text-slate-300"}`,children:"Terminal"}),y.jsxs("button",{onClick:()=>f("tests"),className:`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 ${d==="tests"?"text-white border-b-2 border-emerald-500 bg-[#252526]":"text-slate-500 hover:text-slate-300"}`,children:["Test Cases",r&&y.jsxs("span",{className:`px-1.5 py-0.5 rounded-full text-[10px] ${S?"bg-emerald-500/20 text-emerald-400":"bg-red-500/20 text-red-400"}`,children:[_,"/",p]})]}),y.jsx("div",{className:"flex-1"}),y.jsxs("div",{className:"flex items-center gap-2 px-2",children:[n&&y.jsx("span",{className:"text-xs text-blue-400 animate-pulse",children:"Running..."}),y.jsx("button",{onClick:a,className:"text-xs text-slate-500 hover:text-white px-2 py-1",children:"Clear"})]})]}),y.jsx("div",{className:"flex-1 overflow-y-auto p-4 custom-scrollbar",children:d==="terminal"?y.jsxs("div",{className:"space-y-0.5",children:[s.length===0&&!n&&y.jsx("div",{className:"text-slate-600 italic text-xs",children:"Output will appear here..."}),s.map((v,C)=>y.jsx("div",{className:`${m(v)} whitespace-pre-wrap break-all`,children:v},C)),y.jsx("div",{ref:u})]}):y.jsx("div",{className:"space-y-3",children:r?y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:`p-3 rounded-lg border ${S?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-red-500/10 border-red-500/30 text-red-400"}`,children:[y.jsx("div",{className:"font-bold text-sm mb-1",children:S?"🎉 All Tests Passed!":"❌ Some Tests Failed"}),y.jsxs("div",{className:"text-xs opacity-80",children:["You passed ",_," out of ",p," tests."]})]}),r.map((v,C)=>y.jsxs("div",{className:`p-3 rounded bg-[#1e1e1e] border ${v.passed?"border-emerald-500/20":"border-red-500/20"}`,children:[y.jsxs("div",{className:"flex items-center justify-between mb-2",children:[y.jsxs("span",{className:"font-mono text-xs text-slate-400",children:["Test Case ",C+1]}),y.jsx("span",{className:v.passed?"text-emerald-500":"text-red-500",children:v.passed?"PASSED":"FAILED"})]}),y.jsxs("div",{className:"grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs font-mono",children:[y.jsx("div",{className:"text-slate-500 text-right",children:"Input:"}),y.jsx("div",{className:"text-slate-300",children:v.input}),y.jsx("div",{className:"text-slate-500 text-right",children:"Expected:"}),y.jsx("div",{className:"text-emerald-400/80",children:v.expected}),y.jsx("div",{className:"text-slate-500 text-right",children:"Actual:"}),y.jsx("div",{className:`${v.passed?"text-emerald-400/80":"text-red-400"}`,children:v.actual}),v.error&&y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"text-red-500 text-right",children:"Error:"}),y.jsx("div",{className:"text-red-400",children:v.error})]})]})]},C))]}):y.jsx("div",{className:"text-slate-600 italic text-xs",children:"Run code to see test results..."})})})]})},rx=()=>{};var S_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(s,n){if(!s)throw Bs(n)},Bs=function(s){return new Error("Firebase Database ("+Og.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=function(s){const n=[];let a=0;for(let r=0;r<s.length;r++){let u=s.charCodeAt(r);u<128?n[a++]=u:u<2048?(n[a++]=u>>6|192,n[a++]=u&63|128):(u&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(u=65536+((u&1023)<<10)+(s.charCodeAt(++r)&1023),n[a++]=u>>18|240,n[a++]=u>>12&63|128,n[a++]=u>>6&63|128,n[a++]=u&63|128):(n[a++]=u>>12|224,n[a++]=u>>6&63|128,n[a++]=u&63|128)}return n},ox=function(s){const n=[];let a=0,r=0;for(;a<s.length;){const u=s[a++];if(u<128)n[r++]=String.fromCharCode(u);else if(u>191&&u<224){const d=s[a++];n[r++]=String.fromCharCode((u&31)<<6|d&63)}else if(u>239&&u<365){const d=s[a++],f=s[a++],m=s[a++],_=((u&7)<<18|(d&63)<<12|(f&63)<<6|m&63)-65536;n[r++]=String.fromCharCode(55296+(_>>10)),n[r++]=String.fromCharCode(56320+(_&1023))}else{const d=s[a++],f=s[a++];n[r++]=String.fromCharCode((u&15)<<12|(d&63)<<6|f&63)}}return n.join("")},Ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,n){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let u=0;u<s.length;u+=3){const d=s[u],f=u+1<s.length,m=f?s[u+1]:0,_=u+2<s.length,p=_?s[u+2]:0,S=d>>2,v=(d&3)<<4|m>>4;let C=(m&15)<<2|p>>6,z=p&63;_||(z=64,f||(C=64)),r.push(a[S],a[v],a[C],a[z])}return r.join("")},encodeString(s,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(s):this.encodeByteArray(Dg(s),n)},decodeString(s,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(s):ox(this.decodeStringToByteArray(s,n))},decodeStringToByteArray(s,n){this.init_();const a=n?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let u=0;u<s.length;){const d=a[s.charAt(u++)],m=u<s.length?a[s.charAt(u)]:0;++u;const p=u<s.length?a[s.charAt(u)]:64;++u;const v=u<s.length?a[s.charAt(u)]:64;if(++u,d==null||m==null||p==null||v==null)throw new ux;const C=d<<2|m>>4;if(r.push(C),p!==64){const z=m<<4&240|p>>2;if(r.push(z),v!==64){const U=p<<6&192|v;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class ux extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mg=function(s){const n=Dg(s);return Ed.encodeByteArray(n,!0)},Yr=function(s){return Mg(s).replace(/\./g,"")},id=function(s){try{return Ed.decodeString(s,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(s){return zg(void 0,s)}function zg(s,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:const a=n;return new Date(a.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return n}for(const a in n)!n.hasOwnProperty(a)||!dx(a)||(s[a]=zg(s[a],n[a]));return s}function dx(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=()=>fx().__FIREBASE_DEFAULTS__,px=()=>{if(typeof process>"u"||typeof S_>"u")return;const s=S_.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},mx=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=s&&id(s[1]);return n&&JSON.parse(n)},jg=()=>{try{return rx()||hx()||px()||mx()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},_x=s=>{var n,a;return(a=(n=jg())==null?void 0:n.emulatorHosts)==null?void 0:a[s]},gx=s=>{const n=_x(s);if(!n)return;const a=n.lastIndexOf(":");if(a<=0||a+1===n.length)throw new Error(`Invalid host ${n} with no separate hostname and port!`);const r=parseInt(n.substring(a+1),10);return n[0]==="["?[n.substring(1,a-1),r]:[n.substring(0,a),r]},kg=()=>{var s;return(s=jg())==null?void 0:s.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,a)=>{this.resolve=n,this.reject=a})}wrapCallback(n){return(a,r)=>{a?this.reject(a):this.resolve(r),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(a):n(a,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yx(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(s,n){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},r=n||"demo-project",u=s.iat||0,d=s.sub||s.user_id;if(!d)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${r}`,aud:r,iat:u,exp:u+3600,auth_time:u,sub:d,user_id:d,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Yr(JSON.stringify(a)),Yr(JSON.stringify(f)),""].join(".")}const Fa={};function bx(){const s={prod:[],emulator:[]};for(const n of Object.keys(Fa))Fa[n]?s.emulator.push(n):s.prod.push(n);return s}function xx(s){let n=document.getElementById(s),a=!1;return n||(n=document.createElement("div"),n.setAttribute("id",s),a=!0),{created:a,element:n}}let E_=!1;function Cx(s,n){if(typeof window>"u"||typeof document>"u"||!wd(window.location.host)||Fa[s]===n||Fa[s]||E_)return;Fa[s]=n;function a(C){return`__firebase__banner__${C}`}const r="__firebase__banner",d=bx().prod.length>0;function f(){const C=document.getElementById(r);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function _(C,z){C.setAttribute("width","24"),C.setAttribute("id",z),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function p(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{E_=!0,f()},C}function S(C,z){C.setAttribute("id",z),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function v(){const C=xx(r),z=a("text"),U=document.getElementById(z)||document.createElement("span"),q=a("learnmore"),te=document.getElementById(q)||document.createElement("a"),le=a("preprendIcon"),re=document.getElementById(le)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const oe=C.element;m(oe),S(te,q);const ne=p();_(re,le),oe.append(re,U,te,ne),document.body.appendChild(oe)}d?(U.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Sx())}function Ex(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wx(){return Og.NODE_ADMIN===!0}function Tx(){try{return typeof indexedDB=="object"}catch{return!1}}function Nx(){return new Promise((s,n)=>{try{let a=!0;const r="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(r);u.onsuccess=()=>{u.result.close(),a||self.indexedDB.deleteDatabase(r),s(!0)},u.onupgradeneeded=()=>{a=!1},u.onerror=()=>{var d;n(((d=u.error)==null?void 0:d.message)||"")}}catch(a){n(a)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax="FirebaseError";class cl extends Error{constructor(n,a,r){super(a),this.code=n,this.customData=r,this.name=Ax,Object.setPrototypeOf(this,cl.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ug.prototype.create)}}class Ug{constructor(n,a,r){this.service=n,this.serviceName=a,this.errors=r}create(n,...a){const r=a[0]||{},u=`${this.service}/${n}`,d=this.errors[n],f=d?Rx(d,r):"Error",m=`${this.serviceName}: ${f} (${u}).`;return new cl(u,m,r)}}function Rx(s,n){return s.replace(Ox,(a,r)=>{const u=n[r];return u!=null?String(u):`<${r}?>`})}const Ox=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(s){return JSON.parse(s)}function nt(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=function(s){let n={},a={},r={},u="";try{const d=s.split(".");n=Wa(id(d[0])||""),a=Wa(id(d[1])||""),u=d[2],r=a.d||{},delete a.d}catch{}return{header:n,claims:a,data:r,signature:u}},Dx=function(s){const n=Ig(s),a=n.claims;return!!a&&typeof a=="object"&&a.hasOwnProperty("iat")},Mx=function(s){const n=Ig(s).claims;return typeof n=="object"&&n.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(s,n){return Object.prototype.hasOwnProperty.call(s,n)}function ks(s,n){if(Object.prototype.hasOwnProperty.call(s,n))return s[n]}function w_(s){for(const n in s)if(Object.prototype.hasOwnProperty.call(s,n))return!1;return!0}function qr(s,n,a){const r={};for(const u in s)Object.prototype.hasOwnProperty.call(s,u)&&(r[u]=n.call(a,s[u],u,s));return r}function Gr(s,n){if(s===n)return!0;const a=Object.keys(s),r=Object.keys(n);for(const u of a){if(!r.includes(u))return!1;const d=s[u],f=n[u];if(T_(d)&&T_(f)){if(!Gr(d,f))return!1}else if(d!==f)return!1}for(const u of r)if(!a.includes(u))return!1;return!0}function T_(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(s){const n=[];for(const[a,r]of Object.entries(s))Array.isArray(r)?r.forEach(u=>{n.push(encodeURIComponent(a)+"="+encodeURIComponent(u))}):n.push(encodeURIComponent(a)+"="+encodeURIComponent(r));return n.length?"&"+n.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(n,a){a||(a=0);const r=this.W_;if(typeof n=="string")for(let v=0;v<16;v++)r[v]=n.charCodeAt(a)<<24|n.charCodeAt(a+1)<<16|n.charCodeAt(a+2)<<8|n.charCodeAt(a+3),a+=4;else for(let v=0;v<16;v++)r[v]=n[a]<<24|n[a+1]<<16|n[a+2]<<8|n[a+3],a+=4;for(let v=16;v<80;v++){const C=r[v-3]^r[v-8]^r[v-14]^r[v-16];r[v]=(C<<1|C>>>31)&4294967295}let u=this.chain_[0],d=this.chain_[1],f=this.chain_[2],m=this.chain_[3],_=this.chain_[4],p,S;for(let v=0;v<80;v++){v<40?v<20?(p=m^d&(f^m),S=1518500249):(p=d^f^m,S=1859775393):v<60?(p=d&f|m&(d|f),S=2400959708):(p=d^f^m,S=3395469782);const C=(u<<5|u>>>27)+p+_+S+r[v]&4294967295;_=m,m=f,f=(d<<30|d>>>2)&4294967295,d=u,u=C}this.chain_[0]=this.chain_[0]+u&4294967295,this.chain_[1]=this.chain_[1]+d&4294967295,this.chain_[2]=this.chain_[2]+f&4294967295,this.chain_[3]=this.chain_[3]+m&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(n,a){if(n==null)return;a===void 0&&(a=n.length);const r=a-this.blockSize;let u=0;const d=this.buf_;let f=this.inbuf_;for(;u<a;){if(f===0)for(;u<=r;)this.compress_(n,u),u+=this.blockSize;if(typeof n=="string"){for(;u<a;)if(d[f]=n.charCodeAt(u),++f,++u,f===this.blockSize){this.compress_(d),f=0;break}}else for(;u<a;)if(d[f]=n[u],++f,++u,f===this.blockSize){this.compress_(d),f=0;break}}this.inbuf_=f,this.total_+=a}digest(){const n=[];let a=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let u=this.blockSize-1;u>=56;u--)this.buf_[u]=a&255,a/=256;this.compress_(this.buf_);let r=0;for(let u=0;u<5;u++)for(let d=24;d>=0;d-=8)n[r]=this.chain_[u]>>d&255,++r;return n}}function Td(s,n){return`${s} failed: ${n} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=function(s){const n=[];let a=0;for(let r=0;r<s.length;r++){let u=s.charCodeAt(r);if(u>=55296&&u<=56319){const d=u-55296;r++,H(r<s.length,"Surrogate pair missing trail surrogate.");const f=s.charCodeAt(r)-56320;u=65536+(d<<10)+f}u<128?n[a++]=u:u<2048?(n[a++]=u>>6|192,n[a++]=u&63|128):u<65536?(n[a++]=u>>12|224,n[a++]=u>>6&63|128,n[a++]=u&63|128):(n[a++]=u>>18|240,n[a++]=u>>12&63|128,n[a++]=u>>6&63|128,n[a++]=u&63|128)}return n},ro=function(s){let n=0;for(let a=0;a<s.length;a++){const r=s.charCodeAt(a);r<128?n++:r<2048?n+=2:r>=55296&&r<=56319?(n+=4,a++):n+=3}return n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(s){return s&&s._delegate?s._delegate:s}class $a{constructor(n,a,r){this.name=n,this.instanceFactory=a,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(n,a){this.name=n,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const a=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(a)){const r=new lo;if(this.instancesDeferred.set(a,r),this.isInitialized(a)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:a});u&&r.resolve(u)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(n){const a=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),r=(n==null?void 0:n.optional)??!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(u){if(r)return null;throw u}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(Ix(n))try{this.getOrInitializeService({instanceIdentifier:ki})}catch{}for(const[a,r]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);try{const d=this.getOrInitializeService({instanceIdentifier:u});r.resolve(d)}catch{}}}}clearInstance(n=ki){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...n.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=ki){return this.instances.has(n)}getOptions(n=ki){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:a={}}=n,r=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:r,options:a});for(const[d,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(d);r===m&&f.resolve(u)}return u}onInit(n,a){const r=this.normalizeInstanceIdentifier(a),u=this.onInitCallbacks.get(r)??new Set;u.add(n),this.onInitCallbacks.set(r,u);const d=this.instances.get(r);return d&&n(d,r),()=>{u.delete(n)}}invokeOnInitCallbacks(n,a){const r=this.onInitCallbacks.get(a);if(r)for(const u of r)try{u(n,a)}catch{}}getOrInitializeService({instanceIdentifier:n,options:a={}}){let r=this.instances.get(n);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ux(n),options:a}),this.instances.set(n,r),this.instancesOptions.set(n,a),this.invokeOnInitCallbacks(r,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,r)}catch{}return r||null}normalizeInstanceIdentifier(n=ki){return this.component?this.component.multipleInstances?n:ki:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ux(s){return s===ki?void 0:s}function Ix(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const a=this.getProvider(n.name);if(a.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);a.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const a=new Lx(n,this);return this.providers.set(n,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Ue||(Ue={}));const Hx={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},Yx=Ue.INFO,qx={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},Gx=(s,n,...a)=>{if(n<s.logLevel)return;const r=new Date().toISOString(),u=qx[n];if(u)console[u](`[${r}]  ${s.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class Bg{constructor(n){this.name=n,this._logLevel=Yx,this._logHandler=Gx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in Ue))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?Hx[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...n),this._logHandler(this,Ue.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...n),this._logHandler(this,Ue.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...n),this._logHandler(this,Ue.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...n),this._logHandler(this,Ue.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...n),this._logHandler(this,Ue.ERROR,...n)}}const Vx=(s,n)=>n.some(a=>s instanceof a);let N_,A_;function Fx(){return N_||(N_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qx(){return A_||(A_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hg=new WeakMap,sd=new WeakMap,Yg=new WeakMap,Qc=new WeakMap,Nd=new WeakMap;function Xx(s){const n=new Promise((a,r)=>{const u=()=>{s.removeEventListener("success",d),s.removeEventListener("error",f)},d=()=>{a(ri(s.result)),u()},f=()=>{r(s.error),u()};s.addEventListener("success",d),s.addEventListener("error",f)});return n.then(a=>{a instanceof IDBCursor&&Hg.set(a,s)}).catch(()=>{}),Nd.set(n,s),n}function Kx(s){if(sd.has(s))return;const n=new Promise((a,r)=>{const u=()=>{s.removeEventListener("complete",d),s.removeEventListener("error",f),s.removeEventListener("abort",f)},d=()=>{a(),u()},f=()=>{r(s.error||new DOMException("AbortError","AbortError")),u()};s.addEventListener("complete",d),s.addEventListener("error",f),s.addEventListener("abort",f)});sd.set(s,n)}let ad={get(s,n,a){if(s instanceof IDBTransaction){if(n==="done")return sd.get(s);if(n==="objectStoreNames")return s.objectStoreNames||Yg.get(s);if(n==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return ri(s[n])},set(s,n,a){return s[n]=a,!0},has(s,n){return s instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in s}};function Zx(s){ad=s(ad)}function Px(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...a){const r=s.call(Xc(this),n,...a);return Yg.set(r,n.sort?n.sort():[n]),ri(r)}:Qx().includes(s)?function(...n){return s.apply(Xc(this),n),ri(Hg.get(this))}:function(...n){return ri(s.apply(Xc(this),n))}}function Jx(s){return typeof s=="function"?Px(s):(s instanceof IDBTransaction&&Kx(s),Vx(s,Fx())?new Proxy(s,ad):s)}function ri(s){if(s instanceof IDBRequest)return Xx(s);if(Qc.has(s))return Qc.get(s);const n=Jx(s);return n!==s&&(Qc.set(s,n),Nd.set(n,s)),n}const Xc=s=>Nd.get(s);function Wx(s,n,{blocked:a,upgrade:r,blocking:u,terminated:d}={}){const f=indexedDB.open(s,n),m=ri(f);return r&&f.addEventListener("upgradeneeded",_=>{r(ri(f.result),_.oldVersion,_.newVersion,ri(f.transaction),_)}),a&&f.addEventListener("blocked",_=>a(_.oldVersion,_.newVersion,_)),m.then(_=>{d&&_.addEventListener("close",()=>d()),u&&_.addEventListener("versionchange",p=>u(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}const $x=["get","getKey","getAll","getAllKeys","count"],eC=["put","add","delete","clear"],Kc=new Map;function R_(s,n){if(!(s instanceof IDBDatabase&&!(n in s)&&typeof n=="string"))return;if(Kc.get(n))return Kc.get(n);const a=n.replace(/FromIndex$/,""),r=n!==a,u=eC.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(u||$x.includes(a)))return;const d=async function(f,...m){const _=this.transaction(f,u?"readwrite":"readonly");let p=_.store;return r&&(p=p.index(m.shift())),(await Promise.all([p[a](...m),u&&_.done]))[0]};return Kc.set(n,d),d}Zx(s=>({...s,get:(n,a,r)=>R_(n,a)||s.get(n,a,r),has:(n,a)=>!!R_(n,a)||s.has(n,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(nC(a)){const r=a.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(a=>a).join(" ")}}function nC(s){const n=s.getComponent();return(n==null?void 0:n.type)==="VERSION"}const ld="@firebase/app",O_="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new Bg("@firebase/app"),iC="@firebase/app-compat",sC="@firebase/analytics-compat",aC="@firebase/analytics",lC="@firebase/app-check-compat",rC="@firebase/app-check",oC="@firebase/auth",uC="@firebase/auth-compat",cC="@firebase/database",dC="@firebase/data-connect",fC="@firebase/database-compat",hC="@firebase/functions",pC="@firebase/functions-compat",mC="@firebase/installations",_C="@firebase/installations-compat",gC="@firebase/messaging",yC="@firebase/messaging-compat",vC="@firebase/performance",bC="@firebase/performance-compat",xC="@firebase/remote-config",CC="@firebase/remote-config-compat",SC="@firebase/storage",EC="@firebase/storage-compat",wC="@firebase/firestore",TC="@firebase/ai",NC="@firebase/firestore-compat",AC="firebase",RC="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="[DEFAULT]",OC={[ld]:"fire-core",[iC]:"fire-core-compat",[aC]:"fire-analytics",[sC]:"fire-analytics-compat",[rC]:"fire-app-check",[lC]:"fire-app-check-compat",[oC]:"fire-auth",[uC]:"fire-auth-compat",[cC]:"fire-rtdb",[dC]:"fire-data-connect",[fC]:"fire-rtdb-compat",[hC]:"fire-fn",[pC]:"fire-fn-compat",[mC]:"fire-iid",[_C]:"fire-iid-compat",[gC]:"fire-fcm",[yC]:"fire-fcm-compat",[vC]:"fire-perf",[bC]:"fire-perf-compat",[xC]:"fire-rc",[CC]:"fire-rc-compat",[SC]:"fire-gcs",[EC]:"fire-gcs-compat",[wC]:"fire-fst",[NC]:"fire-fst-compat",[TC]:"fire-vertex","fire-js":"fire-js",[AC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Map,DC=new Map,od=new Map;function D_(s,n){try{s.container.addComponent(n)}catch(a){On.debug(`Component ${n.name} failed to register with FirebaseApp ${s.name}`,a)}}function Fr(s){const n=s.name;if(od.has(n))return On.debug(`There were multiple attempts to register component ${n}.`),!1;od.set(n,s);for(const a of Vr.values())D_(a,s);for(const a of DC.values())D_(a,s);return!0}function MC(s,n){const a=s.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),s.container.getProvider(n)}function zC(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oi=new Ug("app","Firebase",jC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(n,a,r){this._isDeleted=!1,this._options={...n},this._config={...a},this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw oi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=RC;function qg(s,n={}){let a=s;typeof n!="object"&&(n={name:n});const r={name:rd,automaticDataCollectionEnabled:!0,...n},u=r.name;if(typeof u!="string"||!u)throw oi.create("bad-app-name",{appName:String(u)});if(a||(a=kg()),!a)throw oi.create("no-options");const d=Vr.get(u);if(d){if(Gr(a,d.options)&&Gr(r,d.config))return d;throw oi.create("duplicate-app",{appName:u})}const f=new Bx(u);for(const _ of od.values())f.addComponent(_);const m=new kC(a,r,f);return Vr.set(u,m),m}function UC(s=rd){const n=Vr.get(s);if(!n&&s===rd&&kg())return qg();if(!n)throw oi.create("no-app",{appName:s});return n}function Ms(s,n,a){let r=OC[s]??s;a&&(r+=`-${a}`);const u=r.match(/\s|\//),d=n.match(/\s|\//);if(u||d){const f=[`Unable to register library "${r}" with version "${n}":`];u&&f.push(`library name "${r}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${n}" contains illegal characters (whitespace or "/")`),On.warn(f.join(" "));return}Fr(new $a(`${r}-version`,()=>({library:r,version:n}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="firebase-heartbeat-database",BC=1,el="firebase-heartbeat-store";let Zc=null;function Gg(){return Zc||(Zc=Wx(IC,BC,{upgrade:(s,n)=>{switch(n){case 0:try{s.createObjectStore(el)}catch(a){console.warn(a)}}}}).catch(s=>{throw oi.create("idb-open",{originalErrorMessage:s.message})})),Zc}async function HC(s){try{const a=(await Gg()).transaction(el),r=await a.objectStore(el).get(Vg(s));return await a.done,r}catch(n){if(n instanceof cl)On.warn(n.message);else{const a=oi.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});On.warn(a.message)}}}async function M_(s,n){try{const r=(await Gg()).transaction(el,"readwrite");await r.objectStore(el).put(n,Vg(s)),await r.done}catch(a){if(a instanceof cl)On.warn(a.message);else{const r=oi.create("idb-set",{originalErrorMessage:a==null?void 0:a.message});On.warn(r.message)}}}function Vg(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=1024,qC=30;class GC{constructor(n){this.container=n,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new FC(a),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var n,a;try{const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),d=z_();if(((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((a=this._heartbeatsCache)==null?void 0:a.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===d||this._heartbeatsCache.heartbeats.some(f=>f.date===d))return;if(this._heartbeatsCache.heartbeats.push({date:d,agent:u}),this._heartbeatsCache.heartbeats.length>qC){const f=QC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){On.warn(r)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const a=z_(),{heartbeatsToSend:r,unsentEntries:u}=VC(this._heartbeatsCache.heartbeats),d=Yr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=a,u.length>0?(this._heartbeatsCache.heartbeats=u,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),d}catch(a){return On.warn(a),""}}}function z_(){return new Date().toISOString().substring(0,10)}function VC(s,n=YC){const a=[];let r=s.slice();for(const u of s){const d=a.find(f=>f.agent===u.agent);if(d){if(d.dates.push(u.date),j_(a)>n){d.dates.pop();break}}else if(a.push({agent:u.agent,dates:[u.date]}),j_(a)>n){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class FC{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tx()?Nx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const a=await HC(this.app);return a!=null&&a.heartbeats?a:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){if(await this._canUseIndexedDBPromise){const r=await this.read();return M_(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){if(await this._canUseIndexedDBPromise){const r=await this.read();return M_(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...n.heartbeats]})}else return}}function j_(s){return Yr(JSON.stringify({version:2,heartbeats:s})).length}function QC(s){if(s.length===0)return-1;let n=0,a=s[0].date;for(let r=1;r<s.length;r++)s[r].date<a&&(a=s[r].date,n=r);return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(s){Fr(new $a("platform-logger",n=>new tC(n),"PRIVATE")),Fr(new $a("heartbeat",n=>new GC(n),"PRIVATE")),Ms(ld,O_,s),Ms(ld,O_,"esm2020"),Ms("fire-js","")}XC("");var k_={};const L_="@firebase/database",U_="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fg="";function KC(s){Fg=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(n){this.domStorage_=n,this.prefix_="firebase:"}set(n,a){a==null?this.domStorage_.removeItem(this.prefixedName_(n)):this.domStorage_.setItem(this.prefixedName_(n),nt(a))}get(n){const a=this.domStorage_.getItem(this.prefixedName_(n));return a==null?null:Wa(a)}remove(n){this.domStorage_.removeItem(this.prefixedName_(n))}prefixedName_(n){return this.prefix_+n}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(n,a){a==null?delete this.cache_[n]:this.cache_[n]=a}get(n){return Mn(this.cache_,n)?this.cache_[n]:null}remove(n){delete this.cache_[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const n=window[s];return n.setItem("firebase:sentinel","cache"),n.removeItem("firebase:sentinel"),new ZC(n)}}catch{}return new PC},Ii=Qg("localStorage"),JC=Qg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Bg("@firebase/database"),WC=(function(){let s=1;return function(){return s++}})(),Xg=function(s){const n=kx(s),a=new jx;a.update(n);const r=a.digest();return Ed.encodeByteArray(r)},dl=function(...s){let n="";for(let a=0;a<s.length;a++){const r=s[a];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?n+=dl.apply(null,r):typeof r=="object"?n+=nt(r):n+=r,n+=" "}return n};let Qa=null,I_=!0;const $C=function(s,n){H(!0,"Can't turn on custom loggers persistently."),zs.logLevel=Ue.VERBOSE,Qa=zs.log.bind(zs)},mt=function(...s){if(I_===!0&&(I_=!1,Qa===null&&JC.get("logging_enabled")===!0&&$C()),Qa){const n=dl.apply(null,s);Qa(n)}},fl=function(s){return function(...n){mt(s,...n)}},ud=function(...s){const n="FIREBASE INTERNAL ERROR: "+dl(...s);zs.error(n)},Dn=function(...s){const n=`FIREBASE FATAL ERROR: ${dl(...s)}`;throw zs.error(n),new Error(n)},Nt=function(...s){const n="FIREBASE WARNING: "+dl(...s);zs.warn(n)},eS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kg=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},tS=function(s){if(document.readyState==="complete")s();else{let n=!1;const a=function(){if(!document.body){setTimeout(a,Math.floor(10));return}n||(n=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",a,!1),window.addEventListener("load",a,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&a()}),window.attachEvent("onload",a))}},Ls="[MIN_NAME]",Hi="[MAX_NAME]",Ys=function(s,n){if(s===n)return 0;if(s===Ls||n===Hi)return-1;if(n===Ls||s===Hi)return 1;{const a=B_(s),r=B_(n);return a!==null?r!==null?a-r===0?s.length-n.length:a-r:-1:r!==null?1:s<n?-1:1}},nS=function(s,n){return s===n?0:s<n?-1:1},Ba=function(s,n){if(n&&s in n)return n[s];throw new Error("Missing required key ("+s+") in object: "+nt(n))},Ad=function(s){if(typeof s!="object"||s===null)return nt(s);const n=[];for(const r in s)n.push(r);n.sort();let a="{";for(let r=0;r<n.length;r++)r!==0&&(a+=","),a+=nt(n[r]),a+=":",a+=Ad(s[n[r]]);return a+="}",a},Zg=function(s,n){const a=s.length;if(a<=n)return[s];const r=[];for(let u=0;u<a;u+=n)u+n>a?r.push(s.substring(u,a)):r.push(s.substring(u,u+n));return r};function At(s,n){for(const a in s)s.hasOwnProperty(a)&&n(a,s[a])}const Pg=function(s){H(!Kg(s),"Invalid JSON number");const n=11,a=52,r=(1<<n-1)-1;let u,d,f,m,_;s===0?(d=0,f=0,u=1/s===-1/0?1:0):(u=s<0,s=Math.abs(s),s>=Math.pow(2,1-r)?(m=Math.min(Math.floor(Math.log(s)/Math.LN2),r),d=m+r,f=Math.round(s*Math.pow(2,a-m)-Math.pow(2,a))):(d=0,f=Math.round(s/Math.pow(2,1-r-a))));const p=[];for(_=a;_;_-=1)p.push(f%2?1:0),f=Math.floor(f/2);for(_=n;_;_-=1)p.push(d%2?1:0),d=Math.floor(d/2);p.push(u?1:0),p.reverse();const S=p.join("");let v="";for(_=0;_<64;_+=8){let C=parseInt(S.substr(_,8),2).toString(16);C.length===1&&(C="0"+C),v=v+C}return v.toLowerCase()},iS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function aS(s,n){let a="Unknown Error";s==="too_big"?a="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?a="Client doesn't have permission to access the desired data.":s==="unavailable"&&(a="The service is unavailable");const r=new Error(s+" at "+n._path.toString()+": "+a);return r.code=s.toUpperCase(),r}const lS=new RegExp("^-?(0*)\\d{1,10}$"),rS=-2147483648,oS=2147483647,B_=function(s){if(lS.test(s)){const n=Number(s);if(n>=rS&&n<=oS)return n}return null},qs=function(s){try{s()}catch(n){setTimeout(()=>{const a=n.stack||"";throw Nt("Exception was thrown by user callback.",a),n},Math.floor(0))}},uS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xa=function(s,n){const a=setTimeout(s,n);return typeof a=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(a):typeof a=="object"&&a.unref&&a.unref(),a};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(n,a){this.appCheckProvider=a,this.appName=n.name,zC(n)&&n.settings.appCheckToken&&(this.serverAppAppCheckToken=n.settings.appCheckToken),this.appCheck=a==null?void 0:a.getImmediate({optional:!0}),this.appCheck||a==null||a.get().then(r=>this.appCheck=r)}getToken(n){if(this.serverAppAppCheckToken){if(n)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(n):new Promise((a,r)=>{setTimeout(()=>{this.appCheck?this.getToken(n).then(a,r):a(null)},0)})}addTokenChangeListener(n){var a;(a=this.appCheckProvider)==null||a.get().then(r=>r.addTokenListener(n))}notifyForInvalidToken(){Nt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(n,a,r){this.appName_=n,this.firebaseOptions_=a,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(u=>this.auth_=u)}getToken(n){return this.auth_?this.auth_.getToken(n).catch(a=>a&&a.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)):new Promise((a,r)=>{setTimeout(()=>{this.auth_?this.getToken(n).then(a,r):a(null)},0)})}addTokenChangeListener(n){this.auth_?this.auth_.addAuthTokenListener(n):this.authProvider_.get().then(a=>a.addAuthTokenListener(n))}removeTokenChangeListener(n){this.authProvider_.get().then(a=>a.removeAuthTokenListener(n))}notifyForInvalidToken(){let n='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?n+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?n+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':n+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nt(n)}}class Br{constructor(n){this.accessToken=n}getToken(n){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(n){n(this.accessToken)}removeTokenChangeListener(n){}notifyForInvalidToken(){}}Br.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="5",Jg="v",Wg="s",$g="r",e0="f",t0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,n0="ls",i0="p",cd="ac",s0="websocket",a0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(n,a,r,u,d=!1,f="",m=!1,_=!1,p=null){this.secure=a,this.namespace=r,this.webSocketOnly=u,this.nodeAdmin=d,this.persistenceKey=f,this.includeNamespaceInQueryParams=m,this.isUsingEmulator=_,this.emulatorOptions=p,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ii.get("host:"+n)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(n){n!==this.internalHost&&(this.internalHost=n,this.isCacheableHost()&&Ii.set("host:"+this._host,this.internalHost))}toString(){let n=this.toURLString();return this.persistenceKey&&(n+="<"+this.persistenceKey+">"),n}toURLString(){const n=this.secure?"https://":"http://",a=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${n}${this.host}/${a}`}}function fS(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function r0(s,n,a){H(typeof n=="string","typeof type must == string"),H(typeof a=="object","typeof params must == object");let r;if(n===s0)r=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(n===a0)r=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+n);fS(s)&&(a.ns=s.namespace);const u=[];return At(a,(d,f)=>{u.push(d+"="+f)}),r+u.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.counters_={}}incrementCounter(n,a=1){Mn(this.counters_,n)||(this.counters_[n]=0),this.counters_[n]+=a}get(){return cx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc={},Jc={};function Od(s){const n=s.toString();return Pc[n]||(Pc[n]=new hS),Pc[n]}function pS(s,n){const a=s.toString();return Jc[a]||(Jc[a]=n()),Jc[a]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(n){this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(n,a){this.closeAfterResponse=n,this.onClose=a,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(n,a){for(this.pendingResponses[n]=a;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let u=0;u<r.length;++u)r[u]&&qs(()=>{this.onMessage_(r[u])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="start",_S="close",gS="pLPCommand",yS="pRTLPCB",o0="id",u0="pw",c0="ser",vS="cb",bS="seg",xS="ts",CS="d",SS="dframe",d0=1870,f0=30,ES=d0-f0,wS=25e3,TS=3e4;class Ds{constructor(n,a,r,u,d,f,m){this.connId=n,this.repoInfo=a,this.applicationId=r,this.appCheckToken=u,this.authToken=d,this.transportSessionId=f,this.lastSessionId=m,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fl(n),this.stats_=Od(a),this.urlFn=_=>(this.appCheckToken&&(_[cd]=this.appCheckToken),r0(a,a0,_))}open(n,a){this.curSegmentNum=0,this.onDisconnect_=a,this.myPacketOrderer=new mS(n),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TS)),tS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dd((...d)=>{const[f,m,_,p,S]=d;if(this.incrementIncomingBytes_(d),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,f===H_)this.id=m,this.password=_;else if(f===_S)m?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(m,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+f)},(...d)=>{const[f,m]=d;this.incrementIncomingBytes_(d),this.myPacketOrderer.handleResponse(f,m)},()=>{this.onClosed_()},this.urlFn);const r={};r[H_]="t",r[c0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[vS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Jg]=Rd,this.transportSessionId&&(r[Wg]=this.transportSessionId),this.lastSessionId&&(r[n0]=this.lastSessionId),this.applicationId&&(r[i0]=this.applicationId),this.appCheckToken&&(r[cd]=this.appCheckToken),typeof location<"u"&&location.hostname&&t0.test(location.hostname)&&(r[$g]=e0);const u=this.urlFn(r);this.log_("Connecting via long-poll to "+u),this.scriptTagHolder.addTag(u,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ds.forceAllow_=!0}static forceDisallow(){Ds.forceDisallow_=!0}static isAvailable(){return Ds.forceAllow_?!0:!Ds.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!iS()&&!sS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(n){const a=nt(n);this.bytesSent+=a.length,this.stats_.incrementCounter("bytes_sent",a.length);const r=Mg(a),u=Zg(r,ES);for(let d=0;d<u.length;d++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,u.length,u[d]),this.curSegmentNum++}addDisconnectPingFrame(n,a){this.myDisconnFrame=document.createElement("iframe");const r={};r[SS]="t",r[o0]=n,r[u0]=a,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(n){const a=nt(n).length;this.bytesReceived+=a,this.stats_.incrementCounter("bytes_received",a)}}class Dd{constructor(n,a,r,u){this.onDisconnect=r,this.urlFn=u,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=WC(),window[gS+this.uniqueCallbackIdentifier]=n,window[yS+this.uniqueCallbackIdentifier]=a,this.myIFrame=Dd.createIFrame_();let d="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(d='<script>document.domain="'+document.domain+'";<\/script>');const f="<html><body>"+d+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(f),this.myIFrame.doc.close()}catch(m){mt("frame writing exception"),m.stack&&mt(m.stack),mt(m)}}}static createIFrame_(){const n=document.createElement("iframe");if(n.style.display="none",document.body){document.body.appendChild(n);try{n.contentWindow.document||mt("No IE domain setting required")}catch{const r=document.domain;n.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return n.contentDocument?n.doc=n.contentDocument:n.contentWindow?n.doc=n.contentWindow.document:n.document&&(n.doc=n.document),n}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const n=this.onDisconnect;n&&(this.onDisconnect=null,n())}startLongPoll(n,a){for(this.myID=n,this.myPW=a,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const n={};n[o0]=this.myID,n[u0]=this.myPW,n[c0]=this.currentSerial;let a=this.urlFn(n),r="",u=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+f0+r.length<=d0;){const f=this.pendingSegs.shift();r=r+"&"+bS+u+"="+f.seg+"&"+xS+u+"="+f.ts+"&"+CS+u+"="+f.d,u++}return a=a+r,this.addLongPollTag_(a,this.currentSerial),!0}else return!1}enqueueSegment(n,a,r){this.pendingSegs.push({seg:n,ts:a,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(n,a){this.outstandingRequests.add(a);const r=()=>{this.outstandingRequests.delete(a),this.newRequest_()},u=setTimeout(r,Math.floor(wS)),d=()=>{clearTimeout(u),r()};this.addTag(n,d)}addTag(n,a){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=n,r.onload=r.onreadystatechange=function(){const u=r.readyState;(!u||u==="loaded"||u==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),a())},r.onerror=()=>{mt("Long-poll script failed to load: "+n),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=16384,AS=45e3;let Qr=null;typeof MozWebSocket<"u"?Qr=MozWebSocket:typeof WebSocket<"u"&&(Qr=WebSocket);class en{constructor(n,a,r,u,d,f,m){this.connId=n,this.applicationId=r,this.appCheckToken=u,this.authToken=d,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fl(this.connId),this.stats_=Od(a),this.connURL=en.connectionURL_(a,f,m,u,r),this.nodeAdmin=a.nodeAdmin}static connectionURL_(n,a,r,u,d){const f={};return f[Jg]=Rd,typeof location<"u"&&location.hostname&&t0.test(location.hostname)&&(f[$g]=e0),a&&(f[Wg]=a),r&&(f[n0]=r),u&&(f[cd]=u),d&&(f[i0]=d),r0(n,s0,f)}open(n,a){this.onDisconnect=a,this.onMessage=n,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ii.set("previous_websocket_failure",!0);try{let r;wx(),this.mySock=new Qr(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const u=r.message||r.data;u&&this.log_(u),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const u=r.message||r.data;u&&this.log_(u),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let n=!1;if(typeof navigator<"u"&&navigator.userAgent){const a=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(a);r&&r.length>1&&parseFloat(r[1])<4.4&&(n=!0)}return!n&&Qr!==null&&!en.forceDisallow_}static previouslyFailed(){return Ii.isInMemoryStorage||Ii.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ii.remove("previous_websocket_failure")}appendFrame_(n){if(this.frames.push(n),this.frames.length===this.totalFrames){const a=this.frames.join("");this.frames=null;const r=Wa(a);this.onMessage(r)}}handleNewFrameCount_(n){this.totalFrames=n,this.frames=[]}extractFrameCount_(n){if(H(this.frames===null,"We already have a frame buffer"),n.length<=6){const a=Number(n);if(!isNaN(a))return this.handleNewFrameCount_(a),null}return this.handleNewFrameCount_(1),n}handleIncomingFrame(n){if(this.mySock===null)return;const a=n.data;if(this.bytesReceived+=a.length,this.stats_.incrementCounter("bytes_received",a.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(a);else{const r=this.extractFrameCount_(a);r!==null&&this.appendFrame_(r)}}send(n){this.resetKeepAlive();const a=nt(n);this.bytesSent+=a.length,this.stats_.incrementCounter("bytes_sent",a.length);const r=Zg(a,NS);r.length>1&&this.sendString_(String(r.length));for(let u=0;u<r.length;u++)this.sendString_(r[u])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(AS))}sendString_(n){try{this.mySock.send(n)}catch(a){this.log_("Exception thrown from WebSocket.send():",a.message||a.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{static get ALL_TRANSPORTS(){return[Ds,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(n){this.initTransports_(n)}initTransports_(n){const a=en&&en.isAvailable();let r=a&&!en.previouslyFailed();if(n.webSocketOnly&&(a||Nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[en];else{const u=this.transports_=[];for(const d of tl.ALL_TRANSPORTS)d&&d.isAvailable()&&u.push(d);tl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}tl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=6e4,OS=5e3,DS=10*1024,MS=100*1024,Wc="t",Y_="d",zS="s",q_="r",jS="e",G_="o",V_="a",F_="n",Q_="p",kS="h";class LS{constructor(n,a,r,u,d,f,m,_,p,S){this.id=n,this.repoInfo_=a,this.applicationId_=r,this.appCheckToken_=u,this.authToken_=d,this.onMessage_=f,this.onReady_=m,this.onDisconnect_=_,this.onKill_=p,this.lastSessionId=S,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fl("c:"+this.id+":"),this.transportManager_=new tl(a),this.log_("Connection created"),this.start_()}start_(){const n=this.transportManager_.initialTransport();this.conn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;const a=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(a,r)},Math.floor(0));const u=n.healthyTimeout||0;u>0&&(this.healthyTimeout_=Xa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>MS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>DS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(u)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(n){return a=>{n===this.conn_?this.onConnectionLost_(a):n===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(n){return a=>{this.state_!==2&&(n===this.rx_?this.onPrimaryMessageReceived_(a):n===this.secondaryConn_?this.onSecondaryMessageReceived_(a):this.log_("message on old connection"))}}sendRequest(n){const a={t:"d",d:n};this.sendData_(a)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(n){if(Wc in n){const a=n[Wc];a===V_?this.upgradeIfSecondaryHealthy_():a===q_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):a===G_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(n){const a=Ba("t",n),r=Ba("d",n);if(a==="c")this.onSecondaryControl_(r);else if(a==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+a)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Q_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:V_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:F_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(n){const a=Ba("t",n),r=Ba("d",n);a==="c"?this.onControl_(r):a==="d"&&this.onDataMessage_(r)}onDataMessage_(n){this.onPrimaryResponse_(),this.onMessage_(n)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(n){const a=Ba(Wc,n);if(Y_ in n){const r=n[Y_];if(a===kS){const u={...r};this.repoInfo_.isUsingEmulator&&(u.h=this.repoInfo_.host),this.onHandshake_(u)}else if(a===F_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let u=0;u<this.pendingDataMessages.length;++u)this.onDataMessage_(this.pendingDataMessages[u]);this.pendingDataMessages=[],this.tryCleanupConnection()}else a===zS?this.onConnectionShutdown_(r):a===q_?this.onReset_(r):a===jS?ud("Server Error: "+r):a===G_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ud("Unknown control packet command: "+a)}}onHandshake_(n){const a=n.ts,r=n.v,u=n.h;this.sessionId=n.s,this.repoInfo_.host=u,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,a),Rd!==r&&Nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const n=this.transportManager_.upgradeTransport();n&&this.startUpgrade_(n)}startUpgrade_(n){this.secondaryConn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;const a=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(a,r),Xa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RS))}onReset_(n){this.log_("Reset packet received.  New host: "+n),this.repoInfo_.host=n,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(n,a){this.log_("Realtime connection established."),this.conn_=n,this.state_=1,this.onReady_&&(this.onReady_(a,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(OS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Q_,d:{}}}))}onSecondaryConnectionLost_(){const n=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===n||this.rx_===n)&&this.close()}onConnectionLost_(n){this.conn_=null,!n&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ii.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(n){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(n),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(n){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(n)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{put(n,a,r,u){}merge(n,a,r,u){}refreshAuthToken(n){}refreshAppCheckToken(n){}onDisconnectPut(n,a,r){}onDisconnectMerge(n,a,r){}onDisconnectCancel(n,a){}reportStats(n){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(n){this.allowedEvents_=n,this.listeners_={},H(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}trigger(n,...a){if(Array.isArray(this.listeners_[n])){const r=[...this.listeners_[n]];for(let u=0;u<r.length;u++)r[u].callback.apply(r[u].context,a)}}on(n,a,r){this.validateEventType_(n),this.listeners_[n]=this.listeners_[n]||[],this.listeners_[n].push({callback:a,context:r});const u=this.getInitialEvent(n);u&&a.apply(r,u)}off(n,a,r){this.validateEventType_(n);const u=this.listeners_[n]||[];for(let d=0;d<u.length;d++)if(u[d].callback===a&&(!r||r===u[d].context)){u.splice(d,1);return}}validateEventType_(n){H(this.allowedEvents_.find(a=>a===n),"Unknown event: "+n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends p0{static getInstance(){return new Xr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Lg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(n){return H(n==="online","Unknown event type: "+n),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=32,K_=768;class Le{constructor(n,a){if(a===void 0){this.pieces_=n.split("/");let r=0;for(let u=0;u<this.pieces_.length;u++)this.pieces_[u].length>0&&(this.pieces_[r]=this.pieces_[u],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=a}toString(){let n="";for(let a=this.pieceNum_;a<this.pieces_.length;a++)this.pieces_[a]!==""&&(n+="/"+this.pieces_[a]);return n||"/"}}function Te(){return new Le("")}function he(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function di(s){return s.pieces_.length-s.pieceNum_}function Ie(s){let n=s.pieceNum_;return n<s.pieces_.length&&n++,new Le(s.pieces_,n)}function m0(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function US(s){let n="";for(let a=s.pieceNum_;a<s.pieces_.length;a++)s.pieces_[a]!==""&&(n+="/"+encodeURIComponent(String(s.pieces_[a])));return n||"/"}function _0(s,n=0){return s.pieces_.slice(s.pieceNum_+n)}function g0(s){if(s.pieceNum_>=s.pieces_.length)return null;const n=[];for(let a=s.pieceNum_;a<s.pieces_.length-1;a++)n.push(s.pieces_[a]);return new Le(n,0)}function it(s,n){const a=[];for(let r=s.pieceNum_;r<s.pieces_.length;r++)a.push(s.pieces_[r]);if(n instanceof Le)for(let r=n.pieceNum_;r<n.pieces_.length;r++)a.push(n.pieces_[r]);else{const r=n.split("/");for(let u=0;u<r.length;u++)r[u].length>0&&a.push(r[u])}return new Le(a,0)}function ve(s){return s.pieceNum_>=s.pieces_.length}function yt(s,n){const a=he(s),r=he(n);if(a===null)return n;if(a===r)return yt(Ie(s),Ie(n));throw new Error("INTERNAL ERROR: innerPath ("+n+") is not within outerPath ("+s+")")}function Md(s,n){if(di(s)!==di(n))return!1;for(let a=s.pieceNum_,r=n.pieceNum_;a<=s.pieces_.length;a++,r++)if(s.pieces_[a]!==n.pieces_[r])return!1;return!0}function tn(s,n){let a=s.pieceNum_,r=n.pieceNum_;if(di(s)>di(n))return!1;for(;a<s.pieces_.length;){if(s.pieces_[a]!==n.pieces_[r])return!1;++a,++r}return!0}class IS{constructor(n,a){this.errorPrefix_=a,this.parts_=_0(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ro(this.parts_[r]);y0(this)}}function BS(s,n){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(n),s.byteLength_+=ro(n),y0(s)}function HS(s){const n=s.parts_.pop();s.byteLength_-=ro(n),s.parts_.length>0&&(s.byteLength_-=1)}function y0(s){if(s.byteLength_>K_)throw new Error(s.errorPrefix_+"has a key path longer than "+K_+" bytes ("+s.byteLength_+").");if(s.parts_.length>X_)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+X_+") or object contains a cycle "+Li(s))}function Li(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd extends p0{static getInstance(){return new zd}constructor(){super(["visible"]);let n,a;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(a="visibilitychange",n="hidden"):typeof document.mozHidden<"u"?(a="mozvisibilitychange",n="mozHidden"):typeof document.msHidden<"u"?(a="msvisibilitychange",n="msHidden"):typeof document.webkitHidden<"u"&&(a="webkitvisibilitychange",n="webkitHidden")),this.visible_=!0,a&&document.addEventListener(a,()=>{const r=!document[n];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(n){return H(n==="visible","Unknown event type: "+n),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=1e3,YS=300*1e3,Z_=30*1e3,qS=1.3,GS=3e4,VS="server_kill",P_=3;class Rn extends h0{constructor(n,a,r,u,d,f,m,_){if(super(),this.repoInfo_=n,this.applicationId_=a,this.onDataUpdate_=r,this.onConnectStatus_=u,this.onServerInfoUpdate_=d,this.authTokenProvider_=f,this.appCheckTokenProvider_=m,this.authOverride_=_,this.id=Rn.nextPersistentConnectionId_++,this.log_=fl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ha,this.maxReconnectDelay_=YS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zd.getInstance().on("visible",this.onVisible_,this),n.host.indexOf("fblocal")===-1&&Xr.getInstance().on("online",this.onOnline_,this)}sendRequest(n,a,r){const u=++this.requestNumber_,d={r:u,a:n,b:a};this.log_(nt(d)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(d),r&&(this.requestCBHash_[u]=r)}get(n){this.initConnection_();const a=new lo,u={action:"g",request:{p:n._path.toString(),q:n._queryObject},onComplete:f=>{const m=f.d;f.s==="ok"?a.resolve(m):a.reject(m)}};this.outstandingGets_.push(u),this.outstandingGetCount_++;const d=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(d),a.promise}listen(n,a,r,u){this.initConnection_();const d=n._queryIdentifier,f=n._path.toString();this.log_("Listen called for "+f+" "+d),this.listens.has(f)||this.listens.set(f,new Map),H(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(f).has(d),"listen() called twice for same path/queryId.");const m={onComplete:u,hashFn:a,query:n,tag:r};this.listens.get(f).set(d,m),this.connected_&&this.sendListen_(m)}sendGet_(n){const a=this.outstandingGets_[n];this.sendRequest("g",a.request,r=>{delete this.outstandingGets_[n],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),a.onComplete&&a.onComplete(r)})}sendListen_(n){const a=n.query,r=a._path.toString(),u=a._queryIdentifier;this.log_("Listen on "+r+" for "+u);const d={p:r},f="q";n.tag&&(d.q=a._queryObject,d.t=n.tag),d.h=n.hashFn(),this.sendRequest(f,d,m=>{const _=m.d,p=m.s;Rn.warnOnListenWarnings_(_,a),(this.listens.get(r)&&this.listens.get(r).get(u))===n&&(this.log_("listen response",m),p!=="ok"&&this.removeListen_(r,u),n.onComplete&&n.onComplete(p,_))})}static warnOnListenWarnings_(n,a){if(n&&typeof n=="object"&&Mn(n,"w")){const r=ks(n,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const u='".indexOn": "'+a._queryParams.getIndex().toString()+'"',d=a._path.toString();Nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${u} at ${d} to your security rules for better performance.`)}}}refreshAuthToken(n){this.authToken_=n,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(n)}reduceReconnectDelayIfAdminCredential_(n){(n&&n.length===40||Mx(n))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Z_)}refreshAppCheckToken(n){this.appCheckToken_=n,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const n=this.authToken_,a=Dx(n)?"auth":"gauth",r={cred:n};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(a,r,u=>{const d=u.s,f=u.d||"error";this.authToken_===n&&(d==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(d,f))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},n=>{const a=n.s,r=n.d||"error";a==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(a,r)})}unlisten(n,a){const r=n._path.toString(),u=n._queryIdentifier;this.log_("Unlisten called for "+r+" "+u),H(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,u)&&this.connected_&&this.sendUnlisten_(r,u,n._queryObject,a)}sendUnlisten_(n,a,r,u){this.log_("Unlisten on "+n+" for "+a);const d={p:n},f="n";u&&(d.q=r,d.t=u),this.sendRequest(f,d)}onDisconnectPut(n,a,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",n,a,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"o",data:a,onComplete:r})}onDisconnectMerge(n,a,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",n,a,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"om",data:a,onComplete:r})}onDisconnectCancel(n,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",n,null,a):this.onDisconnectRequestQueue_.push({pathString:n,action:"oc",data:null,onComplete:a})}sendOnDisconnect_(n,a,r,u){const d={p:a,d:r};this.log_("onDisconnect "+n,d),this.sendRequest(n,d,f=>{u&&setTimeout(()=>{u(f.s,f.d)},Math.floor(0))})}put(n,a,r,u){this.putInternal("p",n,a,r,u)}merge(n,a,r,u){this.putInternal("m",n,a,r,u)}putInternal(n,a,r,u,d){this.initConnection_();const f={p:a,d:r};d!==void 0&&(f.h=d),this.outstandingPuts_.push({action:n,request:f,onComplete:u}),this.outstandingPutCount_++;const m=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(m):this.log_("Buffering put: "+a)}sendPut_(n){const a=this.outstandingPuts_[n].action,r=this.outstandingPuts_[n].request,u=this.outstandingPuts_[n].onComplete;this.outstandingPuts_[n].queued=this.connected_,this.sendRequest(a,r,d=>{this.log_(a+" response",d),delete this.outstandingPuts_[n],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),u&&u(d.s,d.d)})}reportStats(n){if(this.connected_){const a={c:n};this.log_("reportStats",a),this.sendRequest("s",a,r=>{if(r.s!=="ok"){const d=r.d;this.log_("reportStats","Error sending stats: "+d)}})}}onDataMessage_(n){if("r"in n){this.log_("from server: "+nt(n));const a=n.r,r=this.requestCBHash_[a];r&&(delete this.requestCBHash_[a],r(n.b))}else{if("error"in n)throw"A server-side error has occurred: "+n.error;"a"in n&&this.onDataPush_(n.a,n.b)}}onDataPush_(n,a){this.log_("handleServerMessage",n,a),n==="d"?this.onDataUpdate_(a.p,a.d,!1,a.t):n==="m"?this.onDataUpdate_(a.p,a.d,!0,a.t):n==="c"?this.onListenRevoked_(a.p,a.q):n==="ac"?this.onAuthRevoked_(a.s,a.d):n==="apc"?this.onAppCheckRevoked_(a.s,a.d):n==="sd"?this.onSecurityDebugPacket_(a):ud("Unrecognized action received from server: "+nt(n)+`
Are you using the latest client?`)}onReady_(n,a){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(n),this.lastSessionId=a,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(n){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(n))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(n){n&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ha,this.realtime_||this.scheduleConnect_(0)),this.visible_=n}onOnline_(n){n?(this.log_("Browser went online."),this.reconnectDelay_=Ha,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>GS&&(this.reconnectDelay_=Ha),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const n=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let a=Math.max(0,this.reconnectDelay_-n);a=Math.random()*a,this.log_("Trying to reconnect in "+a+"ms"),this.scheduleConnect_(a),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const n=this.onDataMessage_.bind(this),a=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),u=this.id+":"+Rn.nextConnectionId_++,d=this.lastSessionId;let f=!1,m=null;const _=function(){m?m.close():(f=!0,r())},p=function(v){H(m,"sendRequest call when we're not connected not allowed."),m.sendRequest(v)};this.realtime_={close:_,sendRequest:p};const S=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,C]=await Promise.all([this.authTokenProvider_.getToken(S),this.appCheckTokenProvider_.getToken(S)]);f?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=C&&C.token,m=new LS(u,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,n,a,r,z=>{Nt(z+" ("+this.repoInfo_.toString()+")"),this.interrupt(VS)},d))}catch(v){this.log_("Failed to get token: "+v),f||(this.repoInfo_.nodeAdmin&&Nt(v),_())}}}interrupt(n){mt("Interrupting connection for reason: "+n),this.interruptReasons_[n]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(n){mt("Resuming connection for reason: "+n),delete this.interruptReasons_[n],w_(this.interruptReasons_)&&(this.reconnectDelay_=Ha,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(n){const a=n-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:a})}cancelSentTransactions_(){for(let n=0;n<this.outstandingPuts_.length;n++){const a=this.outstandingPuts_[n];a&&"h"in a.request&&a.queued&&(a.onComplete&&a.onComplete("disconnect"),delete this.outstandingPuts_[n],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(n,a){let r;a?r=a.map(d=>Ad(d)).join("$"):r="default";const u=this.removeListen_(n,r);u&&u.onComplete&&u.onComplete("permission_denied")}removeListen_(n,a){const r=new Le(n).toString();let u;if(this.listens.has(r)){const d=this.listens.get(r);u=d.get(a),d.delete(a),d.size===0&&this.listens.delete(r)}else u=void 0;return u}onAuthRevoked_(n,a){mt("Auth token revoked: "+n+"/"+a),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(n==="invalid_token"||n==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=P_&&(this.reconnectDelay_=Z_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(n,a){mt("App check token revoked: "+n+"/"+a),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(n==="invalid_token"||n==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=P_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(n){this.securityDebugCallback_?this.securityDebugCallback_(n):"msg"in n&&console.log("FIREBASE: "+n.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const n of this.listens.values())for(const a of n.values())this.sendListen_(a);for(let n=0;n<this.outstandingPuts_.length;n++)this.outstandingPuts_[n]&&this.sendPut_(n);for(;this.onDisconnectRequestQueue_.length;){const n=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(n.action,n.pathString,n.data,n.onComplete)}for(let n=0;n<this.outstandingGets_.length;n++)this.outstandingGets_[n]&&this.sendGet_(n)}sendConnectStats_(){const n={};let a="js";n["sdk."+a+"."+Fg.replace(/\./g,"-")]=1,Lg()?n["framework.cordova"]=1:Ex()&&(n["framework.reactnative"]=1),this.reportStats(n)}shouldReconnect_(){const n=Xr.getInstance().currentlyOnline();return w_(this.interruptReasons_)&&n}}Rn.nextPersistentConnectionId_=0;Rn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(n,a){this.name=n,this.node=a}static Wrap(n,a){return new pe(n,a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{getCompare(){return this.compare.bind(this)}indexedValueChanged(n,a){const r=new pe(Ls,n),u=new pe(Ls,a);return this.compare(r,u)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur;class v0 extends oo{static get __EMPTY_NODE(){return Ur}static set __EMPTY_NODE(n){Ur=n}compare(n,a){return Ys(n.name,a.name)}isDefinedOn(n){throw Bs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(n,a){return!1}minPost(){return pe.MIN}maxPost(){return new pe(Hi,Ur)}makePost(n,a){return H(typeof n=="string","KeyIndex indexValue must always be a string."),new pe(n,Ur)}toString(){return".key"}}const js=new v0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(n,a,r,u,d=null){this.isReverse_=u,this.resultGenerator_=d,this.nodeStack_=[];let f=1;for(;!n.isEmpty();)if(n=n,f=a?r(n.key,a):1,u&&(f*=-1),f<0)this.isReverse_?n=n.left:n=n.right;else if(f===0){this.nodeStack_.push(n);break}else this.nodeStack_.push(n),this.isReverse_?n=n.right:n=n.left}getNext(){if(this.nodeStack_.length===0)return null;let n=this.nodeStack_.pop(),a;if(this.resultGenerator_?a=this.resultGenerator_(n.key,n.value):a={key:n.key,value:n.value},this.isReverse_)for(n=n.left;!n.isEmpty();)this.nodeStack_.push(n),n=n.right;else for(n=n.right;!n.isEmpty();)this.nodeStack_.push(n),n=n.left;return a}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const n=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(n.key,n.value):{key:n.key,value:n.value}}}class rt{constructor(n,a,r,u,d){this.key=n,this.value=a,this.color=r??rt.RED,this.left=u??Tt.EMPTY_NODE,this.right=d??Tt.EMPTY_NODE}copy(n,a,r,u,d){return new rt(n??this.key,a??this.value,r??this.color,u??this.left,d??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(n){return this.left.inorderTraversal(n)||!!n(this.key,this.value)||this.right.inorderTraversal(n)}reverseTraversal(n){return this.right.reverseTraversal(n)||n(this.key,this.value)||this.left.reverseTraversal(n)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(n,a,r){let u=this;const d=r(n,u.key);return d<0?u=u.copy(null,null,null,u.left.insert(n,a,r),null):d===0?u=u.copy(null,a,null,null,null):u=u.copy(null,null,null,null,u.right.insert(n,a,r)),u.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tt.EMPTY_NODE;let n=this;return!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.removeMin_(),null),n.fixUp_()}remove(n,a){let r,u;if(r=this,a(n,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(n,a),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),a(n,r.key)===0){if(r.right.isEmpty())return Tt.EMPTY_NODE;u=r.right.min_(),r=r.copy(u.key,u.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(n,a))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let n=this;return n.right.isRed_()&&!n.left.isRed_()&&(n=n.rotateLeft_()),n.left.isRed_()&&n.left.left.isRed_()&&(n=n.rotateRight_()),n.left.isRed_()&&n.right.isRed_()&&(n=n.colorFlip_()),n}moveRedLeft_(){let n=this.colorFlip_();return n.right.left.isRed_()&&(n=n.copy(null,null,null,null,n.right.rotateRight_()),n=n.rotateLeft_(),n=n.colorFlip_()),n}moveRedRight_(){let n=this.colorFlip_();return n.left.left.isRed_()&&(n=n.rotateRight_(),n=n.colorFlip_()),n}rotateLeft_(){const n=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,n,null)}rotateRight_(){const n=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,n)}colorFlip_(){const n=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,n,a)}checkMaxDepth_(){const n=this.check_();return Math.pow(2,n)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const n=this.left.check_();if(n!==this.right.check_())throw new Error("Black depths differ");return n+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class FS{copy(n,a,r,u,d){return this}insert(n,a,r){return new rt(n,a,null)}remove(n,a){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Tt{constructor(n,a=Tt.EMPTY_NODE){this.comparator_=n,this.root_=a}insert(n,a){return new Tt(this.comparator_,this.root_.insert(n,a,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(n){return new Tt(this.comparator_,this.root_.remove(n,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(n){let a,r=this.root_;for(;!r.isEmpty();){if(a=this.comparator_(n,r.key),a===0)return r.value;a<0?r=r.left:a>0&&(r=r.right)}return null}getPredecessorKey(n){let a,r=this.root_,u=null;for(;!r.isEmpty();)if(a=this.comparator_(n,r.key),a===0){if(r.left.isEmpty())return u?u.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else a<0?r=r.left:a>0&&(u=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(n){return this.root_.inorderTraversal(n)}reverseTraversal(n){return this.root_.reverseTraversal(n)}getIterator(n){return new Ir(this.root_,null,this.comparator_,!1,n)}getIteratorFrom(n,a){return new Ir(this.root_,n,this.comparator_,!1,a)}getReverseIteratorFrom(n,a){return new Ir(this.root_,n,this.comparator_,!0,a)}getReverseIterator(n){return new Ir(this.root_,null,this.comparator_,!0,n)}}Tt.EMPTY_NODE=new FS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(s,n){return Ys(s.name,n.name)}function jd(s,n){return Ys(s,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd;function XS(s){dd=s}const b0=function(s){return typeof s=="number"?"number:"+Pg(s):"string:"+s},x0=function(s){if(s.isLeafNode()){const n=s.val();H(typeof n=="string"||typeof n=="number"||typeof n=="object"&&Mn(n,".sv"),"Priority must be a string or number.")}else H(s===dd||s.isEmpty(),"priority of unexpected type.");H(s===dd||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J_;class lt{static set __childrenNodeConstructor(n){J_=n}static get __childrenNodeConstructor(){return J_}constructor(n,a=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=n,this.priorityNode_=a,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),x0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(n){return new lt(this.value_,n)}getImmediateChild(n){return n===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(n){return ve(n)?this:he(n)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(n,a){return null}updateImmediateChild(n,a){return n===".priority"?this.updatePriority(a):a.isEmpty()&&n!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(n,a).updatePriority(this.priorityNode_)}updateChild(n,a){const r=he(n);return r===null?a:a.isEmpty()&&r!==".priority"?this:(H(r!==".priority"||di(n)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(n),a)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(n,a){return!1}val(n){return n&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let n="";this.priorityNode_.isEmpty()||(n+="priority:"+b0(this.priorityNode_.val())+":");const a=typeof this.value_;n+=a+":",a==="number"?n+=Pg(this.value_):n+=this.value_,this.lazyHash_=Xg(n)}return this.lazyHash_}getValue(){return this.value_}compareTo(n){return n===lt.__childrenNodeConstructor.EMPTY_NODE?1:n instanceof lt.__childrenNodeConstructor?-1:(H(n.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(n))}compareToLeafNode_(n){const a=typeof n.value_,r=typeof this.value_,u=lt.VALUE_TYPE_ORDER.indexOf(a),d=lt.VALUE_TYPE_ORDER.indexOf(r);return H(u>=0,"Unknown leaf type: "+a),H(d>=0,"Unknown leaf type: "+r),u===d?r==="object"?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:d-u}withIndex(){return this}isIndexed(){return!0}equals(n){if(n===this)return!0;if(n.isLeafNode()){const a=n;return this.value_===a.value_&&this.priorityNode_.equals(a.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C0,S0;function KS(s){C0=s}function ZS(s){S0=s}class PS extends oo{compare(n,a){const r=n.node.getPriority(),u=a.node.getPriority(),d=r.compareTo(u);return d===0?Ys(n.name,a.name):d}isDefinedOn(n){return!n.getPriority().isEmpty()}indexedValueChanged(n,a){return!n.getPriority().equals(a.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(Hi,new lt("[PRIORITY-POST]",S0))}makePost(n,a){const r=C0(n);return new pe(a,new lt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Qe=new PS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=Math.log(2);class WS{constructor(n){const a=d=>parseInt(Math.log(d)/JS,10),r=d=>parseInt(Array(d+1).join("1"),2);this.count=a(n+1),this.current_=this.count-1;const u=r(this.count);this.bits_=n+1&u}nextBitIsOne(){const n=!(this.bits_&1<<this.current_);return this.current_--,n}}const Kr=function(s,n,a,r){s.sort(n);const u=function(_,p){const S=p-_;let v,C;if(S===0)return null;if(S===1)return v=s[_],C=a?a(v):v,new rt(C,v.node,rt.BLACK,null,null);{const z=parseInt(S/2,10)+_,U=u(_,z),q=u(z+1,p);return v=s[z],C=a?a(v):v,new rt(C,v.node,rt.BLACK,U,q)}},d=function(_){let p=null,S=null,v=s.length;const C=function(U,q){const te=v-U,le=v;v-=U;const re=u(te+1,le),oe=s[te],ne=a?a(oe):oe;z(new rt(ne,oe.node,q,null,re))},z=function(U){p?(p.left=U,p=U):(S=U,p=U)};for(let U=0;U<_.count;++U){const q=_.nextBitIsOne(),te=Math.pow(2,_.count-(U+1));q?C(te,rt.BLACK):(C(te,rt.BLACK),C(te,rt.RED))}return S},f=new WS(s.length),m=d(f);return new Tt(r||n,m)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c;const As={};class An{static get Default(){return H(As&&Qe,"ChildrenNode.ts has not been loaded"),$c=$c||new An({".priority":As},{".priority":Qe}),$c}constructor(n,a){this.indexes_=n,this.indexSet_=a}get(n){const a=ks(this.indexes_,n);if(!a)throw new Error("No index defined for "+n);return a instanceof Tt?a:null}hasIndex(n){return Mn(this.indexSet_,n.toString())}addIndex(n,a){H(n!==js,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let u=!1;const d=a.getIterator(pe.Wrap);let f=d.getNext();for(;f;)u=u||n.isDefinedOn(f.node),r.push(f),f=d.getNext();let m;u?m=Kr(r,n.getCompare()):m=As;const _=n.toString(),p={...this.indexSet_};p[_]=n;const S={...this.indexes_};return S[_]=m,new An(S,p)}addToIndexes(n,a){const r=qr(this.indexes_,(u,d)=>{const f=ks(this.indexSet_,d);if(H(f,"Missing index implementation for "+d),u===As)if(f.isDefinedOn(n.node)){const m=[],_=a.getIterator(pe.Wrap);let p=_.getNext();for(;p;)p.name!==n.name&&m.push(p),p=_.getNext();return m.push(n),Kr(m,f.getCompare())}else return As;else{const m=a.get(n.name);let _=u;return m&&(_=_.remove(new pe(n.name,m))),_.insert(n,n.node)}});return new An(r,this.indexSet_)}removeFromIndexes(n,a){const r=qr(this.indexes_,u=>{if(u===As)return u;{const d=a.get(n.name);return d?u.remove(new pe(n.name,d)):u}});return new An(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya;class ae{static get EMPTY_NODE(){return Ya||(Ya=new ae(new Tt(jd),null,An.Default))}constructor(n,a,r){this.children_=n,this.priorityNode_=a,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&x0(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ya}updatePriority(n){return this.children_.isEmpty()?this:new ae(this.children_,n,this.indexMap_)}getImmediateChild(n){if(n===".priority")return this.getPriority();{const a=this.children_.get(n);return a===null?Ya:a}}getChild(n){const a=he(n);return a===null?this:this.getImmediateChild(a).getChild(Ie(n))}hasChild(n){return this.children_.get(n)!==null}updateImmediateChild(n,a){if(H(a,"We should always be passing snapshot nodes"),n===".priority")return this.updatePriority(a);{const r=new pe(n,a);let u,d;a.isEmpty()?(u=this.children_.remove(n),d=this.indexMap_.removeFromIndexes(r,this.children_)):(u=this.children_.insert(n,a),d=this.indexMap_.addToIndexes(r,this.children_));const f=u.isEmpty()?Ya:this.priorityNode_;return new ae(u,f,d)}}updateChild(n,a){const r=he(n);if(r===null)return a;{H(he(n)!==".priority"||di(n)===1,".priority must be the last token in a path");const u=this.getImmediateChild(r).updateChild(Ie(n),a);return this.updateImmediateChild(r,u)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(n){if(this.isEmpty())return null;const a={};let r=0,u=0,d=!0;if(this.forEachChild(Qe,(f,m)=>{a[f]=m.val(n),r++,d&&ae.INTEGER_REGEXP_.test(f)?u=Math.max(u,Number(f)):d=!1}),!n&&d&&u<2*r){const f=[];for(const m in a)f[m]=a[m];return f}else return n&&!this.getPriority().isEmpty()&&(a[".priority"]=this.getPriority().val()),a}hash(){if(this.lazyHash_===null){let n="";this.getPriority().isEmpty()||(n+="priority:"+b0(this.getPriority().val())+":"),this.forEachChild(Qe,(a,r)=>{const u=r.hash();u!==""&&(n+=":"+a+":"+u)}),this.lazyHash_=n===""?"":Xg(n)}return this.lazyHash_}getPredecessorChildName(n,a,r){const u=this.resolveIndex_(r);if(u){const d=u.getPredecessorKey(new pe(n,a));return d?d.name:null}else return this.children_.getPredecessorKey(n)}getFirstChildName(n){const a=this.resolveIndex_(n);if(a){const r=a.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(n){const a=this.getFirstChildName(n);return a?new pe(a,this.children_.get(a)):null}getLastChildName(n){const a=this.resolveIndex_(n);if(a){const r=a.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(n){const a=this.getLastChildName(n);return a?new pe(a,this.children_.get(a)):null}forEachChild(n,a){const r=this.resolveIndex_(n);return r?r.inorderTraversal(u=>a(u.name,u.node)):this.children_.inorderTraversal(a)}getIterator(n){return this.getIteratorFrom(n.minPost(),n)}getIteratorFrom(n,a){const r=this.resolveIndex_(a);if(r)return r.getIteratorFrom(n,u=>u);{const u=this.children_.getIteratorFrom(n.name,pe.Wrap);let d=u.peek();for(;d!=null&&a.compare(d,n)<0;)u.getNext(),d=u.peek();return u}}getReverseIterator(n){return this.getReverseIteratorFrom(n.maxPost(),n)}getReverseIteratorFrom(n,a){const r=this.resolveIndex_(a);if(r)return r.getReverseIteratorFrom(n,u=>u);{const u=this.children_.getReverseIteratorFrom(n.name,pe.Wrap);let d=u.peek();for(;d!=null&&a.compare(d,n)>0;)u.getNext(),d=u.peek();return u}}compareTo(n){return this.isEmpty()?n.isEmpty()?0:-1:n.isLeafNode()||n.isEmpty()?1:n===hl?-1:0}withIndex(n){if(n===js||this.indexMap_.hasIndex(n))return this;{const a=this.indexMap_.addIndex(n,this.children_);return new ae(this.children_,this.priorityNode_,a)}}isIndexed(n){return n===js||this.indexMap_.hasIndex(n)}equals(n){if(n===this)return!0;if(n.isLeafNode())return!1;{const a=n;if(this.getPriority().equals(a.getPriority()))if(this.children_.count()===a.children_.count()){const r=this.getIterator(Qe),u=a.getIterator(Qe);let d=r.getNext(),f=u.getNext();for(;d&&f;){if(d.name!==f.name||!d.node.equals(f.node))return!1;d=r.getNext(),f=u.getNext()}return d===null&&f===null}else return!1;else return!1}}resolveIndex_(n){return n===js?null:this.indexMap_.get(n.toString())}}ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $S extends ae{constructor(){super(new Tt(jd),ae.EMPTY_NODE,An.Default)}compareTo(n){return n===this?0:1}equals(n){return n===this}getPriority(){return this}getImmediateChild(n){return ae.EMPTY_NODE}isEmpty(){return!1}}const hl=new $S;Object.defineProperties(pe,{MIN:{value:new pe(Ls,ae.EMPTY_NODE)},MAX:{value:new pe(Hi,hl)}});v0.__EMPTY_NODE=ae.EMPTY_NODE;lt.__childrenNodeConstructor=ae;XS(hl);ZS(hl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=!0;function ot(s,n=null){if(s===null)return ae.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(n=s[".priority"]),H(n===null||typeof n=="string"||typeof n=="number"||typeof n=="object"&&".sv"in n,"Invalid priority type found: "+typeof n),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const a=s;return new lt(a,ot(n))}if(!(s instanceof Array)&&e2){const a=[];let r=!1;if(At(s,(f,m)=>{if(f.substring(0,1)!=="."){const _=ot(m);_.isEmpty()||(r=r||!_.getPriority().isEmpty(),a.push(new pe(f,_)))}}),a.length===0)return ae.EMPTY_NODE;const d=Kr(a,QS,f=>f.name,jd);if(r){const f=Kr(a,Qe.getCompare());return new ae(d,ot(n),new An({".priority":f},{".priority":Qe}))}else return new ae(d,ot(n),An.Default)}else{let a=ae.EMPTY_NODE;return At(s,(r,u)=>{if(Mn(s,r)&&r.substring(0,1)!=="."){const d=ot(u);(d.isLeafNode()||!d.isEmpty())&&(a=a.updateImmediateChild(r,d))}}),a.updatePriority(ot(n))}}KS(ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2 extends oo{constructor(n){super(),this.indexPath_=n,H(!ve(n)&&he(n)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(n){return n.getChild(this.indexPath_)}isDefinedOn(n){return!n.getChild(this.indexPath_).isEmpty()}compare(n,a){const r=this.extractChild(n.node),u=this.extractChild(a.node),d=r.compareTo(u);return d===0?Ys(n.name,a.name):d}makePost(n,a){const r=ot(n),u=ae.EMPTY_NODE.updateChild(this.indexPath_,r);return new pe(a,u)}maxPost(){const n=ae.EMPTY_NODE.updateChild(this.indexPath_,hl);return new pe(Hi,n)}toString(){return _0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2 extends oo{compare(n,a){const r=n.node.compareTo(a.node);return r===0?Ys(n.name,a.name):r}isDefinedOn(n){return!0}indexedValueChanged(n,a){return!n.equals(a)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(n,a){const r=ot(n);return new pe(a,r)}toString(){return".value"}}const i2=new n2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(s){return{type:"value",snapshotNode:s}}function Us(s,n){return{type:"child_added",snapshotNode:n,childName:s}}function nl(s,n){return{type:"child_removed",snapshotNode:n,childName:s}}function il(s,n,a){return{type:"child_changed",snapshotNode:n,childName:s,oldSnap:a}}function s2(s,n){return{type:"child_moved",snapshotNode:n,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(n){this.index_=n}updateChild(n,a,r,u,d,f){H(n.isIndexed(this.index_),"A node must be indexed if only a child is updated");const m=n.getImmediateChild(a);return m.getChild(u).equals(r.getChild(u))&&m.isEmpty()===r.isEmpty()||(f!=null&&(r.isEmpty()?n.hasChild(a)?f.trackChildChange(nl(a,m)):H(n.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):m.isEmpty()?f.trackChildChange(Us(a,r)):f.trackChildChange(il(a,r,m))),n.isLeafNode()&&r.isEmpty())?n:n.updateImmediateChild(a,r).withIndex(this.index_)}updateFullNode(n,a,r){return r!=null&&(n.isLeafNode()||n.forEachChild(Qe,(u,d)=>{a.hasChild(u)||r.trackChildChange(nl(u,d))}),a.isLeafNode()||a.forEachChild(Qe,(u,d)=>{if(n.hasChild(u)){const f=n.getImmediateChild(u);f.equals(d)||r.trackChildChange(il(u,d,f))}else r.trackChildChange(Us(u,d))})),a.withIndex(this.index_)}updatePriority(n,a){return n.isEmpty()?ae.EMPTY_NODE:n.updatePriority(a)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(n){this.indexedFilter_=new kd(n.getIndex()),this.index_=n.getIndex(),this.startPost_=sl.getStartPost_(n),this.endPost_=sl.getEndPost_(n),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(n){const a=this.startIsInclusive_?this.index_.compare(this.getStartPost(),n)<=0:this.index_.compare(this.getStartPost(),n)<0,r=this.endIsInclusive_?this.index_.compare(n,this.getEndPost())<=0:this.index_.compare(n,this.getEndPost())<0;return a&&r}updateChild(n,a,r,u,d,f){return this.matches(new pe(a,r))||(r=ae.EMPTY_NODE),this.indexedFilter_.updateChild(n,a,r,u,d,f)}updateFullNode(n,a,r){a.isLeafNode()&&(a=ae.EMPTY_NODE);let u=a.withIndex(this.index_);u=u.updatePriority(ae.EMPTY_NODE);const d=this;return a.forEachChild(Qe,(f,m)=>{d.matches(new pe(f,m))||(u=u.updateImmediateChild(f,ae.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(n,u,r)}updatePriority(n,a){return n}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(n){if(n.hasStart()){const a=n.getIndexStartName();return n.getIndex().makePost(n.getIndexStartValue(),a)}else return n.getIndex().minPost()}static getEndPost_(n){if(n.hasEnd()){const a=n.getIndexEndName();return n.getIndex().makePost(n.getIndexEndValue(),a)}else return n.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(n){this.withinDirectionalStart=a=>this.reverse_?this.withinEndPost(a):this.withinStartPost(a),this.withinDirectionalEnd=a=>this.reverse_?this.withinStartPost(a):this.withinEndPost(a),this.withinStartPost=a=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),a);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=a=>{const r=this.index_.compare(a,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new sl(n),this.index_=n.getIndex(),this.limit_=n.getLimit(),this.reverse_=!n.isViewFromLeft(),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}updateChild(n,a,r,u,d,f){return this.rangedFilter_.matches(new pe(a,r))||(r=ae.EMPTY_NODE),n.getImmediateChild(a).equals(r)?n:n.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(n,a,r,u,d,f):this.fullLimitUpdateChild_(n,a,r,d,f)}updateFullNode(n,a,r){let u;if(a.isLeafNode()||a.isEmpty())u=ae.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<a.numChildren()&&a.isIndexed(this.index_)){u=ae.EMPTY_NODE.withIndex(this.index_);let d;this.reverse_?d=a.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):d=a.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let f=0;for(;d.hasNext()&&f<this.limit_;){const m=d.getNext();if(this.withinDirectionalStart(m))if(this.withinDirectionalEnd(m))u=u.updateImmediateChild(m.name,m.node),f++;else break;else continue}}else{u=a.withIndex(this.index_),u=u.updatePriority(ae.EMPTY_NODE);let d;this.reverse_?d=u.getReverseIterator(this.index_):d=u.getIterator(this.index_);let f=0;for(;d.hasNext();){const m=d.getNext();f<this.limit_&&this.withinDirectionalStart(m)&&this.withinDirectionalEnd(m)?f++:u=u.updateImmediateChild(m.name,ae.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(n,u,r)}updatePriority(n,a){return n}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(n,a,r,u,d){let f;if(this.reverse_){const v=this.index_.getCompare();f=(C,z)=>v(z,C)}else f=this.index_.getCompare();const m=n;H(m.numChildren()===this.limit_,"");const _=new pe(a,r),p=this.reverse_?m.getFirstChild(this.index_):m.getLastChild(this.index_),S=this.rangedFilter_.matches(_);if(m.hasChild(a)){const v=m.getImmediateChild(a);let C=u.getChildAfterChild(this.index_,p,this.reverse_);for(;C!=null&&(C.name===a||m.hasChild(C.name));)C=u.getChildAfterChild(this.index_,C,this.reverse_);const z=C==null?1:f(C,_);if(S&&!r.isEmpty()&&z>=0)return d!=null&&d.trackChildChange(il(a,r,v)),m.updateImmediateChild(a,r);{d!=null&&d.trackChildChange(nl(a,v));const q=m.updateImmediateChild(a,ae.EMPTY_NODE);return C!=null&&this.rangedFilter_.matches(C)?(d!=null&&d.trackChildChange(Us(C.name,C.node)),q.updateImmediateChild(C.name,C.node)):q}}else return r.isEmpty()?n:S&&f(p,_)>=0?(d!=null&&(d.trackChildChange(nl(p.name,p.node)),d.trackChildChange(Us(a,r))),m.updateImmediateChild(a,r).updateImmediateChild(p.name,ae.EMPTY_NODE)):n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ls}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qe}copy(){const n=new Ld;return n.limitSet_=this.limitSet_,n.limit_=this.limit_,n.startSet_=this.startSet_,n.startAfterSet_=this.startAfterSet_,n.indexStartValue_=this.indexStartValue_,n.startNameSet_=this.startNameSet_,n.indexStartName_=this.indexStartName_,n.endSet_=this.endSet_,n.endBeforeSet_=this.endBeforeSet_,n.indexEndValue_=this.indexEndValue_,n.endNameSet_=this.endNameSet_,n.indexEndName_=this.indexEndName_,n.index_=this.index_,n.viewFrom_=this.viewFrom_,n}}function l2(s){return s.loadsAllData()?new kd(s.getIndex()):s.hasLimit()?new a2(s):new sl(s)}function W_(s){const n={};if(s.isDefault())return n;let a;if(s.index_===Qe?a="$priority":s.index_===i2?a="$value":s.index_===js?a="$key":(H(s.index_ instanceof t2,"Unrecognized index type!"),a=s.index_.toString()),n.orderBy=nt(a),s.startSet_){const r=s.startAfterSet_?"startAfter":"startAt";n[r]=nt(s.indexStartValue_),s.startNameSet_&&(n[r]+=","+nt(s.indexStartName_))}if(s.endSet_){const r=s.endBeforeSet_?"endBefore":"endAt";n[r]=nt(s.indexEndValue_),s.endNameSet_&&(n[r]+=","+nt(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?n.limitToFirst=s.limit_:n.limitToLast=s.limit_),n}function $_(s){const n={};if(s.startSet_&&(n.sp=s.indexStartValue_,s.startNameSet_&&(n.sn=s.indexStartName_),n.sin=!s.startAfterSet_),s.endSet_&&(n.ep=s.indexEndValue_,s.endNameSet_&&(n.en=s.indexEndName_),n.ein=!s.endBeforeSet_),s.limitSet_){n.l=s.limit_;let a=s.viewFrom_;a===""&&(s.isViewFromLeft()?a="l":a="r"),n.vf=a}return s.index_!==Qe&&(n.i=s.index_.toString()),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends h0{reportStats(n){throw new Error("Method not implemented.")}static getListenId_(n,a){return a!==void 0?"tag$"+a:(H(n._queryParams.isDefault(),"should have a tag if it's not a default query."),n._path.toString())}constructor(n,a,r,u){super(),this.repoInfo_=n,this.onDataUpdate_=a,this.authTokenProvider_=r,this.appCheckTokenProvider_=u,this.log_=fl("p:rest:"),this.listens_={}}listen(n,a,r,u){const d=n._path.toString();this.log_("Listen called for "+d+" "+n._queryIdentifier);const f=Zr.getListenId_(n,r),m={};this.listens_[f]=m;const _=W_(n._queryParams);this.restRequest_(d+".json",_,(p,S)=>{let v=S;if(p===404&&(v=null,p=null),p===null&&this.onDataUpdate_(d,v,!1,r),ks(this.listens_,f)===m){let C;p?p===401?C="permission_denied":C="rest_error:"+p:C="ok",u(C,null)}})}unlisten(n,a){const r=Zr.getListenId_(n,a);delete this.listens_[r]}get(n){const a=W_(n._queryParams),r=n._path.toString(),u=new lo;return this.restRequest_(r+".json",a,(d,f)=>{let m=f;d===404&&(m=null,d=null),d===null?(this.onDataUpdate_(r,m,!1,null),u.resolve(m)):u.reject(new Error(m))}),u.promise}refreshAuthToken(n){}restRequest_(n,a={},r){return a.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([u,d])=>{u&&u.accessToken&&(a.auth=u.accessToken),d&&d.token&&(a.ac=d.token);const f=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+n+"?ns="+this.repoInfo_.namespace+zx(a);this.log_("Sending REST request for "+f);const m=new XMLHttpRequest;m.onreadystatechange=()=>{if(r&&m.readyState===4){this.log_("REST Response for "+f+" received. status:",m.status,"response:",m.responseText);let _=null;if(m.status>=200&&m.status<300){try{_=Wa(m.responseText)}catch{Nt("Failed to parse JSON response for "+f+": "+m.responseText)}r(null,_)}else m.status!==401&&m.status!==404&&Nt("Got unsuccessful REST response for "+f+" Status: "+m.status),r(m.status);r=null}},m.open("GET",f,!0),m.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this.rootNode_=ae.EMPTY_NODE}getNode(n){return this.rootNode_.getChild(n)}updateSnapshot(n,a){this.rootNode_=this.rootNode_.updateChild(n,a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(){return{value:null,children:new Map}}function w0(s,n,a){if(ve(n))s.value=a,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(n,a);else{const r=he(n);s.children.has(r)||s.children.set(r,Pr());const u=s.children.get(r);n=Ie(n),w0(u,n,a)}}function fd(s,n,a){s.value!==null?a(n,s.value):o2(s,(r,u)=>{const d=new Le(n.toString()+"/"+r);fd(u,d,a)})}function o2(s,n){s.children.forEach((a,r)=>{n(r,a)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(n){this.collection_=n,this.last_=null}get(){const n=this.collection_.get(),a={...n};return this.last_&&At(this.last_,(r,u)=>{a[r]=a[r]-u}),this.last_=n,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=10*1e3,c2=30*1e3,d2=300*1e3;class f2{constructor(n,a){this.server_=a,this.statsToReport_={},this.statsListener_=new u2(n);const r=eg+(c2-eg)*Math.random();Xa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const n=this.statsListener_.get(),a={};let r=!1;At(n,(u,d)=>{d>0&&Mn(this.statsToReport_,u)&&(a[u]=d,r=!0)}),r&&this.server_.reportStats(a),Xa(this.reportStats_.bind(this),Math.floor(Math.random()*2*d2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nn;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function T0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ud(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Id(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(n,a,r){this.path=n,this.affectedTree=a,this.revert=r,this.type=nn.ACK_USER_WRITE,this.source=T0()}operationForChild(n){if(ve(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const a=this.affectedTree.subtree(new Le(n));return new Jr(Te(),a,this.revert)}}else return H(he(this.path)===n,"operationForChild called for unrelated child."),new Jr(Ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(n,a){this.source=n,this.path=a,this.type=nn.LISTEN_COMPLETE}operationForChild(n){return ve(this.path)?new al(this.source,Te()):new al(this.source,Ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(n,a,r){this.source=n,this.path=a,this.snap=r,this.type=nn.OVERWRITE}operationForChild(n){return ve(this.path)?new Yi(this.source,Te(),this.snap.getImmediateChild(n)):new Yi(this.source,Ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(n,a,r){this.source=n,this.path=a,this.children=r,this.type=nn.MERGE}operationForChild(n){if(ve(this.path)){const a=this.children.subtree(new Le(n));return a.isEmpty()?null:a.value?new Yi(this.source,Te(),a.value):new ll(this.source,Te(),a)}else return H(he(this.path)===n,"Can't get a merge for a child not on the path of the operation"),new ll(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(n,a,r){this.node_=n,this.fullyInitialized_=a,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(n){if(ve(n))return this.isFullyInitialized()&&!this.filtered_;const a=he(n);return this.isCompleteForChild(a)}isCompleteForChild(n){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(n)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(n){this.query_=n,this.index_=this.query_._queryParams.getIndex()}}function p2(s,n,a,r){const u=[],d=[];return n.forEach(f=>{f.type==="child_changed"&&s.index_.indexedValueChanged(f.oldSnap,f.snapshotNode)&&d.push(s2(f.childName,f.snapshotNode))}),qa(s,u,"child_removed",n,r,a),qa(s,u,"child_added",n,r,a),qa(s,u,"child_moved",d,r,a),qa(s,u,"child_changed",n,r,a),qa(s,u,"value",n,r,a),u}function qa(s,n,a,r,u,d){const f=r.filter(m=>m.type===a);f.sort((m,_)=>_2(s,m,_)),f.forEach(m=>{const _=m2(s,m,d);u.forEach(p=>{p.respondsTo(m.type)&&n.push(p.createEvent(_,s.query_))})})}function m2(s,n,a){return n.type==="value"||n.type==="child_removed"||(n.prevName=a.getPredecessorChildName(n.childName,n.snapshotNode,s.index_)),n}function _2(s,n,a){if(n.childName==null||a.childName==null)throw Bs("Should only compare child_ events.");const r=new pe(n.childName,n.snapshotNode),u=new pe(a.childName,a.snapshotNode);return s.index_.compare(r,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(s,n){return{eventCache:s,serverCache:n}}function Ka(s,n,a,r){return uo(new fi(n,a,r),s.serverCache)}function N0(s,n,a,r){return uo(s.eventCache,new fi(n,a,r))}function Wr(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function qi(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ed;const g2=()=>(ed||(ed=new Tt(nS)),ed);class Ye{static fromObject(n){let a=new Ye(null);return At(n,(r,u)=>{a=a.set(new Le(r),u)}),a}constructor(n,a=g2()){this.value=n,this.children=a}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(n,a){if(this.value!=null&&a(this.value))return{path:Te(),value:this.value};if(ve(n))return null;{const r=he(n),u=this.children.get(r);if(u!==null){const d=u.findRootMostMatchingPathAndValue(Ie(n),a);return d!=null?{path:it(new Le(r),d.path),value:d.value}:null}else return null}}findRootMostValueAndPath(n){return this.findRootMostMatchingPathAndValue(n,()=>!0)}subtree(n){if(ve(n))return this;{const a=he(n),r=this.children.get(a);return r!==null?r.subtree(Ie(n)):new Ye(null)}}set(n,a){if(ve(n))return new Ye(a,this.children);{const r=he(n),d=(this.children.get(r)||new Ye(null)).set(Ie(n),a),f=this.children.insert(r,d);return new Ye(this.value,f)}}remove(n){if(ve(n))return this.children.isEmpty()?new Ye(null):new Ye(null,this.children);{const a=he(n),r=this.children.get(a);if(r){const u=r.remove(Ie(n));let d;return u.isEmpty()?d=this.children.remove(a):d=this.children.insert(a,u),this.value===null&&d.isEmpty()?new Ye(null):new Ye(this.value,d)}else return this}}get(n){if(ve(n))return this.value;{const a=he(n),r=this.children.get(a);return r?r.get(Ie(n)):null}}setTree(n,a){if(ve(n))return a;{const r=he(n),d=(this.children.get(r)||new Ye(null)).setTree(Ie(n),a);let f;return d.isEmpty()?f=this.children.remove(r):f=this.children.insert(r,d),new Ye(this.value,f)}}fold(n){return this.fold_(Te(),n)}fold_(n,a){const r={};return this.children.inorderTraversal((u,d)=>{r[u]=d.fold_(it(n,u),a)}),a(n,this.value,r)}findOnPath(n,a){return this.findOnPath_(n,Te(),a)}findOnPath_(n,a,r){const u=this.value?r(a,this.value):!1;if(u)return u;if(ve(n))return null;{const d=he(n),f=this.children.get(d);return f?f.findOnPath_(Ie(n),it(a,d),r):null}}foreachOnPath(n,a){return this.foreachOnPath_(n,Te(),a)}foreachOnPath_(n,a,r){if(ve(n))return this;{this.value&&r(a,this.value);const u=he(n),d=this.children.get(u);return d?d.foreachOnPath_(Ie(n),it(a,u),r):new Ye(null)}}foreach(n){this.foreach_(Te(),n)}foreach_(n,a){this.children.inorderTraversal((r,u)=>{u.foreach_(it(n,r),a)}),this.value&&a(n,this.value)}foreachChild(n){this.children.inorderTraversal((a,r)=>{r.value&&n(a,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(n){this.writeTree_=n}static empty(){return new sn(new Ye(null))}}function Za(s,n,a){if(ve(n))return new sn(new Ye(a));{const r=s.writeTree_.findRootMostValueAndPath(n);if(r!=null){const u=r.path;let d=r.value;const f=yt(u,n);return d=d.updateChild(f,a),new sn(s.writeTree_.set(u,d))}else{const u=new Ye(a),d=s.writeTree_.setTree(n,u);return new sn(d)}}}function tg(s,n,a){let r=s;return At(a,(u,d)=>{r=Za(r,it(n,u),d)}),r}function ng(s,n){if(ve(n))return sn.empty();{const a=s.writeTree_.setTree(n,new Ye(null));return new sn(a)}}function hd(s,n){return Gi(s,n)!=null}function Gi(s,n){const a=s.writeTree_.findRootMostValueAndPath(n);return a!=null?s.writeTree_.get(a.path).getChild(yt(a.path,n)):null}function ig(s){const n=[],a=s.writeTree_.value;return a!=null?a.isLeafNode()||a.forEachChild(Qe,(r,u)=>{n.push(new pe(r,u))}):s.writeTree_.children.inorderTraversal((r,u)=>{u.value!=null&&n.push(new pe(r,u.value))}),n}function ui(s,n){if(ve(n))return s;{const a=Gi(s,n);return a!=null?new sn(new Ye(a)):new sn(s.writeTree_.subtree(n))}}function pd(s){return s.writeTree_.isEmpty()}function Is(s,n){return A0(Te(),s.writeTree_,n)}function A0(s,n,a){if(n.value!=null)return a.updateChild(s,n.value);{let r=null;return n.children.inorderTraversal((u,d)=>{u===".priority"?(H(d.value!==null,"Priority writes must always be leaf nodes"),r=d.value):a=A0(it(s,u),d,a)}),!a.getChild(s).isEmpty()&&r!==null&&(a=a.updateChild(it(s,".priority"),r)),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(s,n){return M0(n,s)}function y2(s,n,a,r,u){H(r>s.lastWriteId,"Stacking an older write on top of newer ones"),u===void 0&&(u=!0),s.allWrites.push({path:n,snap:a,writeId:r,visible:u}),u&&(s.visibleWrites=Za(s.visibleWrites,n,a)),s.lastWriteId=r}function v2(s,n){for(let a=0;a<s.allWrites.length;a++){const r=s.allWrites[a];if(r.writeId===n)return r}return null}function b2(s,n){const a=s.allWrites.findIndex(m=>m.writeId===n);H(a>=0,"removeWrite called with nonexistent writeId.");const r=s.allWrites[a];s.allWrites.splice(a,1);let u=r.visible,d=!1,f=s.allWrites.length-1;for(;u&&f>=0;){const m=s.allWrites[f];m.visible&&(f>=a&&x2(m,r.path)?u=!1:tn(r.path,m.path)&&(d=!0)),f--}if(u){if(d)return C2(s),!0;if(r.snap)s.visibleWrites=ng(s.visibleWrites,r.path);else{const m=r.children;At(m,_=>{s.visibleWrites=ng(s.visibleWrites,it(r.path,_))})}return!0}else return!1}function x2(s,n){if(s.snap)return tn(s.path,n);for(const a in s.children)if(s.children.hasOwnProperty(a)&&tn(it(s.path,a),n))return!0;return!1}function C2(s){s.visibleWrites=R0(s.allWrites,S2,Te()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function S2(s){return s.visible}function R0(s,n,a){let r=sn.empty();for(let u=0;u<s.length;++u){const d=s[u];if(n(d)){const f=d.path;let m;if(d.snap)tn(a,f)?(m=yt(a,f),r=Za(r,m,d.snap)):tn(f,a)&&(m=yt(f,a),r=Za(r,Te(),d.snap.getChild(m)));else if(d.children){if(tn(a,f))m=yt(a,f),r=tg(r,m,d.children);else if(tn(f,a))if(m=yt(f,a),ve(m))r=tg(r,Te(),d.children);else{const _=ks(d.children,he(m));if(_){const p=_.getChild(Ie(m));r=Za(r,Te(),p)}}}else throw Bs("WriteRecord should have .snap or .children")}}return r}function O0(s,n,a,r,u){if(!r&&!u){const d=Gi(s.visibleWrites,n);if(d!=null)return d;{const f=ui(s.visibleWrites,n);if(pd(f))return a;if(a==null&&!hd(f,Te()))return null;{const m=a||ae.EMPTY_NODE;return Is(f,m)}}}else{const d=ui(s.visibleWrites,n);if(!u&&pd(d))return a;if(!u&&a==null&&!hd(d,Te()))return null;{const f=function(p){return(p.visible||u)&&(!r||!~r.indexOf(p.writeId))&&(tn(p.path,n)||tn(n,p.path))},m=R0(s.allWrites,f,n),_=a||ae.EMPTY_NODE;return Is(m,_)}}}function E2(s,n,a){let r=ae.EMPTY_NODE;const u=Gi(s.visibleWrites,n);if(u)return u.isLeafNode()||u.forEachChild(Qe,(d,f)=>{r=r.updateImmediateChild(d,f)}),r;if(a){const d=ui(s.visibleWrites,n);return a.forEachChild(Qe,(f,m)=>{const _=Is(ui(d,new Le(f)),m);r=r.updateImmediateChild(f,_)}),ig(d).forEach(f=>{r=r.updateImmediateChild(f.name,f.node)}),r}else{const d=ui(s.visibleWrites,n);return ig(d).forEach(f=>{r=r.updateImmediateChild(f.name,f.node)}),r}}function w2(s,n,a,r,u){H(r||u,"Either existingEventSnap or existingServerSnap must exist");const d=it(n,a);if(hd(s.visibleWrites,d))return null;{const f=ui(s.visibleWrites,d);return pd(f)?u.getChild(a):Is(f,u.getChild(a))}}function T2(s,n,a,r){const u=it(n,a),d=Gi(s.visibleWrites,u);if(d!=null)return d;if(r.isCompleteForChild(a)){const f=ui(s.visibleWrites,u);return Is(f,r.getNode().getImmediateChild(a))}else return null}function N2(s,n){return Gi(s.visibleWrites,n)}function A2(s,n,a,r,u,d,f){let m;const _=ui(s.visibleWrites,n),p=Gi(_,Te());if(p!=null)m=p;else if(a!=null)m=Is(_,a);else return[];if(m=m.withIndex(f),!m.isEmpty()&&!m.isLeafNode()){const S=[],v=f.getCompare(),C=d?m.getReverseIteratorFrom(r,f):m.getIteratorFrom(r,f);let z=C.getNext();for(;z&&S.length<u;)v(z,r)!==0&&S.push(z),z=C.getNext();return S}else return[]}function R2(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function $r(s,n,a,r){return O0(s.writeTree,s.treePath,n,a,r)}function Bd(s,n){return E2(s.writeTree,s.treePath,n)}function sg(s,n,a,r){return w2(s.writeTree,s.treePath,n,a,r)}function eo(s,n){return N2(s.writeTree,it(s.treePath,n))}function O2(s,n,a,r,u,d){return A2(s.writeTree,s.treePath,n,a,r,u,d)}function Hd(s,n,a){return T2(s.writeTree,s.treePath,n,a)}function D0(s,n){return M0(it(s.treePath,n),s.writeTree)}function M0(s,n){return{treePath:s,writeTree:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.changeMap=new Map}trackChildChange(n){const a=n.type,r=n.childName;H(a==="child_added"||a==="child_changed"||a==="child_removed","Only child changes supported for tracking"),H(r!==".priority","Only non-priority child changes can be tracked.");const u=this.changeMap.get(r);if(u){const d=u.type;if(a==="child_added"&&d==="child_removed")this.changeMap.set(r,il(r,n.snapshotNode,u.snapshotNode));else if(a==="child_removed"&&d==="child_added")this.changeMap.delete(r);else if(a==="child_removed"&&d==="child_changed")this.changeMap.set(r,nl(r,u.oldSnap));else if(a==="child_changed"&&d==="child_added")this.changeMap.set(r,Us(r,n.snapshotNode));else if(a==="child_changed"&&d==="child_changed")this.changeMap.set(r,il(r,n.snapshotNode,u.oldSnap));else throw Bs("Illegal combination of changes: "+n+" occurred after "+u)}else this.changeMap.set(r,n)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{getCompleteChild(n){return null}getChildAfterChild(n,a,r){return null}}const z0=new M2;class Yd{constructor(n,a,r=null){this.writes_=n,this.viewCache_=a,this.optCompleteServerCache_=r}getCompleteChild(n){const a=this.viewCache_.eventCache;if(a.isCompleteForChild(n))return a.getNode().getImmediateChild(n);{const r=this.optCompleteServerCache_!=null?new fi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hd(this.writes_,n,r)}}getChildAfterChild(n,a,r){const u=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qi(this.viewCache_),d=O2(this.writes_,u,a,1,r,n);return d.length===0?null:d[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(s){return{filter:s}}function j2(s,n){H(n.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),H(n.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function k2(s,n,a,r,u){const d=new D2;let f,m;if(a.type===nn.OVERWRITE){const p=a;p.source.fromUser?f=md(s,n,p.path,p.snap,r,u,d):(H(p.source.fromServer,"Unknown source."),m=p.source.tagged||n.serverCache.isFiltered()&&!ve(p.path),f=to(s,n,p.path,p.snap,r,u,m,d))}else if(a.type===nn.MERGE){const p=a;p.source.fromUser?f=U2(s,n,p.path,p.children,r,u,d):(H(p.source.fromServer,"Unknown source."),m=p.source.tagged||n.serverCache.isFiltered(),f=_d(s,n,p.path,p.children,r,u,m,d))}else if(a.type===nn.ACK_USER_WRITE){const p=a;p.revert?f=H2(s,n,p.path,r,u,d):f=I2(s,n,p.path,p.affectedTree,r,u,d)}else if(a.type===nn.LISTEN_COMPLETE)f=B2(s,n,a.path,r,d);else throw Bs("Unknown operation type: "+a.type);const _=d.getChanges();return L2(n,f,_),{viewCache:f,changes:_}}function L2(s,n,a){const r=n.eventCache;if(r.isFullyInitialized()){const u=r.getNode().isLeafNode()||r.getNode().isEmpty(),d=Wr(s);(a.length>0||!s.eventCache.isFullyInitialized()||u&&!r.getNode().equals(d)||!r.getNode().getPriority().equals(d.getPriority()))&&a.push(E0(Wr(n)))}}function j0(s,n,a,r,u,d){const f=n.eventCache;if(eo(r,a)!=null)return n;{let m,_;if(ve(a))if(H(n.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),n.serverCache.isFiltered()){const p=qi(n),S=p instanceof ae?p:ae.EMPTY_NODE,v=Bd(r,S);m=s.filter.updateFullNode(n.eventCache.getNode(),v,d)}else{const p=$r(r,qi(n));m=s.filter.updateFullNode(n.eventCache.getNode(),p,d)}else{const p=he(a);if(p===".priority"){H(di(a)===1,"Can't have a priority with additional path components");const S=f.getNode();_=n.serverCache.getNode();const v=sg(r,a,S,_);v!=null?m=s.filter.updatePriority(S,v):m=f.getNode()}else{const S=Ie(a);let v;if(f.isCompleteForChild(p)){_=n.serverCache.getNode();const C=sg(r,a,f.getNode(),_);C!=null?v=f.getNode().getImmediateChild(p).updateChild(S,C):v=f.getNode().getImmediateChild(p)}else v=Hd(r,p,n.serverCache);v!=null?m=s.filter.updateChild(f.getNode(),p,v,S,u,d):m=f.getNode()}}return Ka(n,m,f.isFullyInitialized()||ve(a),s.filter.filtersNodes())}}function to(s,n,a,r,u,d,f,m){const _=n.serverCache;let p;const S=f?s.filter:s.filter.getIndexedFilter();if(ve(a))p=S.updateFullNode(_.getNode(),r,null);else if(S.filtersNodes()&&!_.isFiltered()){const z=_.getNode().updateChild(a,r);p=S.updateFullNode(_.getNode(),z,null)}else{const z=he(a);if(!_.isCompleteForPath(a)&&di(a)>1)return n;const U=Ie(a),te=_.getNode().getImmediateChild(z).updateChild(U,r);z===".priority"?p=S.updatePriority(_.getNode(),te):p=S.updateChild(_.getNode(),z,te,U,z0,null)}const v=N0(n,p,_.isFullyInitialized()||ve(a),S.filtersNodes()),C=new Yd(u,v,d);return j0(s,v,a,u,C,m)}function md(s,n,a,r,u,d,f){const m=n.eventCache;let _,p;const S=new Yd(u,n,d);if(ve(a))p=s.filter.updateFullNode(n.eventCache.getNode(),r,f),_=Ka(n,p,!0,s.filter.filtersNodes());else{const v=he(a);if(v===".priority")p=s.filter.updatePriority(n.eventCache.getNode(),r),_=Ka(n,p,m.isFullyInitialized(),m.isFiltered());else{const C=Ie(a),z=m.getNode().getImmediateChild(v);let U;if(ve(C))U=r;else{const q=S.getCompleteChild(v);q!=null?m0(C)===".priority"&&q.getChild(g0(C)).isEmpty()?U=q:U=q.updateChild(C,r):U=ae.EMPTY_NODE}if(z.equals(U))_=n;else{const q=s.filter.updateChild(m.getNode(),v,U,C,S,f);_=Ka(n,q,m.isFullyInitialized(),s.filter.filtersNodes())}}}return _}function ag(s,n){return s.eventCache.isCompleteForChild(n)}function U2(s,n,a,r,u,d,f){let m=n;return r.foreach((_,p)=>{const S=it(a,_);ag(n,he(S))&&(m=md(s,m,S,p,u,d,f))}),r.foreach((_,p)=>{const S=it(a,_);ag(n,he(S))||(m=md(s,m,S,p,u,d,f))}),m}function lg(s,n,a){return a.foreach((r,u)=>{n=n.updateChild(r,u)}),n}function _d(s,n,a,r,u,d,f,m){if(n.serverCache.getNode().isEmpty()&&!n.serverCache.isFullyInitialized())return n;let _=n,p;ve(a)?p=r:p=new Ye(null).setTree(a,r);const S=n.serverCache.getNode();return p.children.inorderTraversal((v,C)=>{if(S.hasChild(v)){const z=n.serverCache.getNode().getImmediateChild(v),U=lg(s,z,C);_=to(s,_,new Le(v),U,u,d,f,m)}}),p.children.inorderTraversal((v,C)=>{const z=!n.serverCache.isCompleteForChild(v)&&C.value===null;if(!S.hasChild(v)&&!z){const U=n.serverCache.getNode().getImmediateChild(v),q=lg(s,U,C);_=to(s,_,new Le(v),q,u,d,f,m)}}),_}function I2(s,n,a,r,u,d,f){if(eo(u,a)!=null)return n;const m=n.serverCache.isFiltered(),_=n.serverCache;if(r.value!=null){if(ve(a)&&_.isFullyInitialized()||_.isCompleteForPath(a))return to(s,n,a,_.getNode().getChild(a),u,d,m,f);if(ve(a)){let p=new Ye(null);return _.getNode().forEachChild(js,(S,v)=>{p=p.set(new Le(S),v)}),_d(s,n,a,p,u,d,m,f)}else return n}else{let p=new Ye(null);return r.foreach((S,v)=>{const C=it(a,S);_.isCompleteForPath(C)&&(p=p.set(S,_.getNode().getChild(C)))}),_d(s,n,a,p,u,d,m,f)}}function B2(s,n,a,r,u){const d=n.serverCache,f=N0(n,d.getNode(),d.isFullyInitialized()||ve(a),d.isFiltered());return j0(s,f,a,r,z0,u)}function H2(s,n,a,r,u,d){let f;if(eo(r,a)!=null)return n;{const m=new Yd(r,n,u),_=n.eventCache.getNode();let p;if(ve(a)||he(a)===".priority"){let S;if(n.serverCache.isFullyInitialized())S=$r(r,qi(n));else{const v=n.serverCache.getNode();H(v instanceof ae,"serverChildren would be complete if leaf node"),S=Bd(r,v)}S=S,p=s.filter.updateFullNode(_,S,d)}else{const S=he(a);let v=Hd(r,S,n.serverCache);v==null&&n.serverCache.isCompleteForChild(S)&&(v=_.getImmediateChild(S)),v!=null?p=s.filter.updateChild(_,S,v,Ie(a),m,d):n.eventCache.getNode().hasChild(S)?p=s.filter.updateChild(_,S,ae.EMPTY_NODE,Ie(a),m,d):p=_,p.isEmpty()&&n.serverCache.isFullyInitialized()&&(f=$r(r,qi(n)),f.isLeafNode()&&(p=s.filter.updateFullNode(p,f,d)))}return f=n.serverCache.isFullyInitialized()||eo(r,Te())!=null,Ka(n,p,f,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(n,a){this.query_=n,this.eventRegistrations_=[];const r=this.query_._queryParams,u=new kd(r.getIndex()),d=l2(r);this.processor_=z2(d);const f=a.serverCache,m=a.eventCache,_=u.updateFullNode(ae.EMPTY_NODE,f.getNode(),null),p=d.updateFullNode(ae.EMPTY_NODE,m.getNode(),null),S=new fi(_,f.isFullyInitialized(),u.filtersNodes()),v=new fi(p,m.isFullyInitialized(),d.filtersNodes());this.viewCache_=uo(v,S),this.eventGenerator_=new h2(this.query_)}get query(){return this.query_}}function q2(s){return s.viewCache_.serverCache.getNode()}function G2(s){return Wr(s.viewCache_)}function V2(s,n){const a=qi(s.viewCache_);return a&&(s.query._queryParams.loadsAllData()||!ve(n)&&!a.getImmediateChild(he(n)).isEmpty())?a.getChild(n):null}function rg(s){return s.eventRegistrations_.length===0}function F2(s,n){s.eventRegistrations_.push(n)}function og(s,n,a){const r=[];if(a){H(n==null,"A cancel should cancel all event registrations.");const u=s.query._path;s.eventRegistrations_.forEach(d=>{const f=d.createCancelEvent(a,u);f&&r.push(f)})}if(n){let u=[];for(let d=0;d<s.eventRegistrations_.length;++d){const f=s.eventRegistrations_[d];if(!f.matches(n))u.push(f);else if(n.hasAnyCallback()){u=u.concat(s.eventRegistrations_.slice(d+1));break}}s.eventRegistrations_=u}else s.eventRegistrations_=[];return r}function ug(s,n,a,r){n.type===nn.MERGE&&n.source.queryId!==null&&(H(qi(s.viewCache_),"We should always have a full cache before handling merges"),H(Wr(s.viewCache_),"Missing event cache, even though we have a server cache"));const u=s.viewCache_,d=k2(s.processor_,u,n,a,r);return j2(s.processor_,d.viewCache),H(d.viewCache.serverCache.isFullyInitialized()||!u.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=d.viewCache,k0(s,d.changes,d.viewCache.eventCache.getNode(),null)}function Q2(s,n){const a=s.viewCache_.eventCache,r=[];return a.getNode().isLeafNode()||a.getNode().forEachChild(Qe,(d,f)=>{r.push(Us(d,f))}),a.isFullyInitialized()&&r.push(E0(a.getNode())),k0(s,r,a.getNode(),n)}function k0(s,n,a,r){const u=r?[r]:s.eventRegistrations_;return p2(s.eventGenerator_,n,a,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;class L0{constructor(){this.views=new Map}}function X2(s){H(!no,"__referenceConstructor has already been defined"),no=s}function K2(){return H(no,"Reference.ts has not been loaded"),no}function Z2(s){return s.views.size===0}function qd(s,n,a,r){const u=n.source.queryId;if(u!==null){const d=s.views.get(u);return H(d!=null,"SyncTree gave us an op for an invalid query."),ug(d,n,a,r)}else{let d=[];for(const f of s.views.values())d=d.concat(ug(f,n,a,r));return d}}function U0(s,n,a,r,u){const d=n._queryIdentifier,f=s.views.get(d);if(!f){let m=$r(a,u?r:null),_=!1;m?_=!0:r instanceof ae?(m=Bd(a,r),_=!1):(m=ae.EMPTY_NODE,_=!1);const p=uo(new fi(m,_,!1),new fi(r,u,!1));return new Y2(n,p)}return f}function P2(s,n,a,r,u,d){const f=U0(s,n,r,u,d);return s.views.has(n._queryIdentifier)||s.views.set(n._queryIdentifier,f),F2(f,a),Q2(f,a)}function J2(s,n,a,r){const u=n._queryIdentifier,d=[];let f=[];const m=hi(s);if(u==="default")for(const[_,p]of s.views.entries())f=f.concat(og(p,a,r)),rg(p)&&(s.views.delete(_),p.query._queryParams.loadsAllData()||d.push(p.query));else{const _=s.views.get(u);_&&(f=f.concat(og(_,a,r)),rg(_)&&(s.views.delete(u),_.query._queryParams.loadsAllData()||d.push(_.query)))}return m&&!hi(s)&&d.push(new(K2())(n._repo,n._path)),{removed:d,events:f}}function I0(s){const n=[];for(const a of s.views.values())a.query._queryParams.loadsAllData()||n.push(a);return n}function ci(s,n){let a=null;for(const r of s.views.values())a=a||V2(r,n);return a}function B0(s,n){if(n._queryParams.loadsAllData())return fo(s);{const r=n._queryIdentifier;return s.views.get(r)}}function H0(s,n){return B0(s,n)!=null}function hi(s){return fo(s)!=null}function fo(s){for(const n of s.views.values())if(n.query._queryParams.loadsAllData())return n;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io;function W2(s){H(!io,"__referenceConstructor has already been defined"),io=s}function $2(){return H(io,"Reference.ts has not been loaded"),io}let eE=1;class cg{constructor(n){this.listenProvider_=n,this.syncPointTree_=new Ye(null),this.pendingWriteTree_=R2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Y0(s,n,a,r,u){return y2(s.pendingWriteTree_,n,a,r,u),u?ml(s,new Yi(T0(),n,a)):[]}function Bi(s,n,a=!1){const r=v2(s.pendingWriteTree_,n);if(b2(s.pendingWriteTree_,n)){let d=new Ye(null);return r.snap!=null?d=d.set(Te(),!0):At(r.children,f=>{d=d.set(new Le(f),!0)}),ml(s,new Jr(r.path,d,a))}else return[]}function pl(s,n,a){return ml(s,new Yi(Ud(),n,a))}function tE(s,n,a){const r=Ye.fromObject(a);return ml(s,new ll(Ud(),n,r))}function nE(s,n){return ml(s,new al(Ud(),n))}function iE(s,n,a){const r=Vd(s,a);if(r){const u=Fd(r),d=u.path,f=u.queryId,m=yt(d,n),_=new al(Id(f),m);return Qd(s,d,_)}else return[]}function so(s,n,a,r,u=!1){const d=n._path,f=s.syncPointTree_.get(d);let m=[];if(f&&(n._queryIdentifier==="default"||H0(f,n))){const _=J2(f,n,a,r);Z2(f)&&(s.syncPointTree_=s.syncPointTree_.remove(d));const p=_.removed;if(m=_.events,!u){const S=p.findIndex(C=>C._queryParams.loadsAllData())!==-1,v=s.syncPointTree_.findOnPath(d,(C,z)=>hi(z));if(S&&!v){const C=s.syncPointTree_.subtree(d);if(!C.isEmpty()){const z=lE(C);for(let U=0;U<z.length;++U){const q=z[U],te=q.query,le=F0(s,q);s.listenProvider_.startListening(Pa(te),rl(s,te),le.hashFn,le.onComplete)}}}!v&&p.length>0&&!r&&(S?s.listenProvider_.stopListening(Pa(n),null):p.forEach(C=>{const z=s.queryToTagMap.get(ho(C));s.listenProvider_.stopListening(Pa(C),z)}))}rE(s,p)}return m}function q0(s,n,a,r){const u=Vd(s,r);if(u!=null){const d=Fd(u),f=d.path,m=d.queryId,_=yt(f,n),p=new Yi(Id(m),_,a);return Qd(s,f,p)}else return[]}function sE(s,n,a,r){const u=Vd(s,r);if(u){const d=Fd(u),f=d.path,m=d.queryId,_=yt(f,n),p=Ye.fromObject(a),S=new ll(Id(m),_,p);return Qd(s,f,S)}else return[]}function gd(s,n,a,r=!1){const u=n._path;let d=null,f=!1;s.syncPointTree_.foreachOnPath(u,(C,z)=>{const U=yt(C,u);d=d||ci(z,U),f=f||hi(z)});let m=s.syncPointTree_.get(u);m?(f=f||hi(m),d=d||ci(m,Te())):(m=new L0,s.syncPointTree_=s.syncPointTree_.set(u,m));let _;d!=null?_=!0:(_=!1,d=ae.EMPTY_NODE,s.syncPointTree_.subtree(u).foreachChild((z,U)=>{const q=ci(U,Te());q&&(d=d.updateImmediateChild(z,q))}));const p=H0(m,n);if(!p&&!n._queryParams.loadsAllData()){const C=ho(n);H(!s.queryToTagMap.has(C),"View does not exist, but we have a tag");const z=oE();s.queryToTagMap.set(C,z),s.tagToQueryMap.set(z,C)}const S=co(s.pendingWriteTree_,u);let v=P2(m,n,a,S,d,_);if(!p&&!f&&!r){const C=B0(m,n);v=v.concat(uE(s,n,C))}return v}function Gd(s,n,a){const u=s.pendingWriteTree_,d=s.syncPointTree_.findOnPath(n,(f,m)=>{const _=yt(f,n),p=ci(m,_);if(p)return p});return O0(u,n,d,a,!0)}function aE(s,n){const a=n._path;let r=null;s.syncPointTree_.foreachOnPath(a,(p,S)=>{const v=yt(p,a);r=r||ci(S,v)});let u=s.syncPointTree_.get(a);u?r=r||ci(u,Te()):(u=new L0,s.syncPointTree_=s.syncPointTree_.set(a,u));const d=r!=null,f=d?new fi(r,!0,!1):null,m=co(s.pendingWriteTree_,n._path),_=U0(u,n,m,d?f.getNode():ae.EMPTY_NODE,d);return G2(_)}function ml(s,n){return G0(n,s.syncPointTree_,null,co(s.pendingWriteTree_,Te()))}function G0(s,n,a,r){if(ve(s.path))return V0(s,n,a,r);{const u=n.get(Te());a==null&&u!=null&&(a=ci(u,Te()));let d=[];const f=he(s.path),m=s.operationForChild(f),_=n.children.get(f);if(_&&m){const p=a?a.getImmediateChild(f):null,S=D0(r,f);d=d.concat(G0(m,_,p,S))}return u&&(d=d.concat(qd(u,s,r,a))),d}}function V0(s,n,a,r){const u=n.get(Te());a==null&&u!=null&&(a=ci(u,Te()));let d=[];return n.children.inorderTraversal((f,m)=>{const _=a?a.getImmediateChild(f):null,p=D0(r,f),S=s.operationForChild(f);S&&(d=d.concat(V0(S,m,_,p)))}),u&&(d=d.concat(qd(u,s,r,a))),d}function F0(s,n){const a=n.query,r=rl(s,a);return{hashFn:()=>(q2(n)||ae.EMPTY_NODE).hash(),onComplete:u=>{if(u==="ok")return r?iE(s,a._path,r):nE(s,a._path);{const d=aS(u,a);return so(s,a,null,d)}}}}function rl(s,n){const a=ho(n);return s.queryToTagMap.get(a)}function ho(s){return s._path.toString()+"$"+s._queryIdentifier}function Vd(s,n){return s.tagToQueryMap.get(n)}function Fd(s){const n=s.indexOf("$");return H(n!==-1&&n<s.length-1,"Bad queryKey."),{queryId:s.substr(n+1),path:new Le(s.substr(0,n))}}function Qd(s,n,a){const r=s.syncPointTree_.get(n);H(r,"Missing sync point for query tag that we're tracking");const u=co(s.pendingWriteTree_,n);return qd(r,a,u,null)}function lE(s){return s.fold((n,a,r)=>{if(a&&hi(a))return[fo(a)];{let u=[];return a&&(u=I0(a)),At(r,(d,f)=>{u=u.concat(f)}),u}})}function Pa(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new($2())(s._repo,s._path):s}function rE(s,n){for(let a=0;a<n.length;++a){const r=n[a];if(!r._queryParams.loadsAllData()){const u=ho(r),d=s.queryToTagMap.get(u);s.queryToTagMap.delete(u),s.tagToQueryMap.delete(d)}}}function oE(){return eE++}function uE(s,n,a){const r=n._path,u=rl(s,n),d=F0(s,a),f=s.listenProvider_.startListening(Pa(n),u,d.hashFn,d.onComplete),m=s.syncPointTree_.subtree(r);if(u)H(!hi(m.value),"If we're adding a query, it shouldn't be shadowed");else{const _=m.fold((p,S,v)=>{if(!ve(p)&&S&&hi(S))return[fo(S).query];{let C=[];return S&&(C=C.concat(I0(S).map(z=>z.query))),At(v,(z,U)=>{C=C.concat(U)}),C}});for(let p=0;p<_.length;++p){const S=_[p];s.listenProvider_.stopListening(Pa(S),rl(s,S))}}return f}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(n){this.node_=n}getImmediateChild(n){const a=this.node_.getImmediateChild(n);return new Xd(a)}node(){return this.node_}}class Kd{constructor(n,a){this.syncTree_=n,this.path_=a}getImmediateChild(n){const a=it(this.path_,n);return new Kd(this.syncTree_,a)}node(){return Gd(this.syncTree_,this.path_)}}const cE=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},dg=function(s,n,a){if(!s||typeof s!="object")return s;if(H(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return dE(s[".sv"],n,a);if(typeof s[".sv"]=="object")return fE(s[".sv"],n);H(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},dE=function(s,n,a){switch(s){case"timestamp":return a.timestamp;default:H(!1,"Unexpected server value: "+s)}},fE=function(s,n,a){s.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const r=s.increment;typeof r!="number"&&H(!1,"Unexpected increment value: "+r);const u=n.node();if(H(u!==null&&typeof u<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!u.isLeafNode())return r;const f=u.getValue();return typeof f!="number"?r:f+r},hE=function(s,n,a,r){return Zd(n,new Kd(a,s),r)},Q0=function(s,n,a){return Zd(s,new Xd(n),a)};function Zd(s,n,a){const r=s.getPriority().val(),u=dg(r,n.getImmediateChild(".priority"),a);let d;if(s.isLeafNode()){const f=s,m=dg(f.getValue(),n,a);return m!==f.getValue()||u!==f.getPriority().val()?new lt(m,ot(u)):s}else{const f=s;return d=f,u!==f.getPriority().val()&&(d=d.updatePriority(new lt(u))),f.forEachChild(Qe,(m,_)=>{const p=Zd(_,n.getImmediateChild(m),a);p!==_&&(d=d.updateImmediateChild(m,p))}),d}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(n="",a=null,r={children:{},childCount:0}){this.name=n,this.parent=a,this.node=r}}function Jd(s,n){let a=n instanceof Le?n:new Le(n),r=s,u=he(a);for(;u!==null;){const d=ks(r.node.children,u)||{children:{},childCount:0};r=new Pd(u,r,d),a=Ie(a),u=he(a)}return r}function Gs(s){return s.node.value}function X0(s,n){s.node.value=n,yd(s)}function K0(s){return s.node.childCount>0}function pE(s){return Gs(s)===void 0&&!K0(s)}function po(s,n){At(s.node.children,(a,r)=>{n(new Pd(a,s,r))})}function Z0(s,n,a,r){a&&n(s),po(s,u=>{Z0(u,n,!0)})}function mE(s,n,a){let r=s.parent;for(;r!==null;){if(n(r))return!0;r=r.parent}return!1}function _l(s){return new Le(s.parent===null?s.name:_l(s.parent)+"/"+s.name)}function yd(s){s.parent!==null&&_E(s.parent,s.name,s)}function _E(s,n,a){const r=pE(a),u=Mn(s.node.children,n);r&&u?(delete s.node.children[n],s.node.childCount--,yd(s)):!r&&!u&&(s.node.children[n]=a.node,s.node.childCount++,yd(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=/[\[\].#$\/\u0000-\u001F\u007F]/,yE=/[\[\].#$\u0000-\u001F\u007F]/,td=10*1024*1024,P0=function(s){return typeof s=="string"&&s.length!==0&&!gE.test(s)},J0=function(s){return typeof s=="string"&&s.length!==0&&!yE.test(s)},vE=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),J0(s)},bE=function(s,n,a,r){Wd(Td(s,"value"),n,a)},Wd=function(s,n,a){const r=a instanceof Le?new IS(a,s):a;if(n===void 0)throw new Error(s+"contains undefined "+Li(r));if(typeof n=="function")throw new Error(s+"contains a function "+Li(r)+" with contents = "+n.toString());if(Kg(n))throw new Error(s+"contains "+n.toString()+" "+Li(r));if(typeof n=="string"&&n.length>td/3&&ro(n)>td)throw new Error(s+"contains a string greater than "+td+" utf8 bytes "+Li(r)+" ('"+n.substring(0,50)+"...')");if(n&&typeof n=="object"){let u=!1,d=!1;if(At(n,(f,m)=>{if(f===".value")u=!0;else if(f!==".priority"&&f!==".sv"&&(d=!0,!P0(f)))throw new Error(s+" contains an invalid key ("+f+") "+Li(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);BS(r,f),Wd(s,m,r),HS(r)}),u&&d)throw new Error(s+' contains ".value" child '+Li(r)+" in addition to actual children.")}},W0=function(s,n,a,r){if(!J0(a))throw new Error(Td(s,n)+'was an invalid path = "'+a+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xE=function(s,n,a,r){a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),W0(s,n,a)},$0=function(s,n){if(he(n)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},CE=function(s,n){const a=n.path.toString();if(typeof n.repoInfo.host!="string"||n.repoInfo.host.length===0||!P0(n.repoInfo.namespace)&&n.repoInfo.host.split(":")[0]!=="localhost"||a.length!==0&&!vE(a))throw new Error(Td(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $d(s,n){let a=null;for(let r=0;r<n.length;r++){const u=n[r],d=u.getPath();a!==null&&!Md(d,a.path)&&(s.eventLists_.push(a),a=null),a===null&&(a={events:[],path:d}),a.events.push(u)}a&&s.eventLists_.push(a)}function ey(s,n,a){$d(s,a),ty(s,r=>Md(r,n))}function un(s,n,a){$d(s,a),ty(s,r=>tn(r,n)||tn(n,r))}function ty(s,n){s.recursionDepth_++;let a=!0;for(let r=0;r<s.eventLists_.length;r++){const u=s.eventLists_[r];if(u){const d=u.path;n(d)?(EE(s.eventLists_[r]),s.eventLists_[r]=null):a=!1}}a&&(s.eventLists_=[]),s.recursionDepth_--}function EE(s){for(let n=0;n<s.events.length;n++){const a=s.events[n];if(a!==null){s.events[n]=null;const r=a.getEventRunner();Qa&&mt("event: "+a.toString()),qs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="repo_interrupt",TE=25;class NE{constructor(n,a,r,u){this.repoInfo_=n,this.forceRestClient_=a,this.authTokenProvider_=r,this.appCheckProvider_=u,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new SE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pr(),this.transactionQueueTree_=new Pd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AE(s,n,a){if(s.stats_=Od(s.repoInfo_),s.forceRestClient_||uS())s.server_=new Zr(s.repoInfo_,(r,u,d,f)=>{fg(s,r,u,d,f)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>hg(s,!0),0);else{if(typeof a<"u"&&a!==null){if(typeof a!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(a)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}s.persistentConnection_=new Rn(s.repoInfo_,n,(r,u,d,f)=>{fg(s,r,u,d,f)},r=>{hg(s,r)},r=>{OE(s,r)},s.authTokenProvider_,s.appCheckProvider_,a),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(r=>{s.server_.refreshAuthToken(r)}),s.appCheckProvider_.addTokenChangeListener(r=>{s.server_.refreshAppCheckToken(r.token)}),s.statsReporter_=pS(s.repoInfo_,()=>new f2(s.stats_,s.server_)),s.infoData_=new r2,s.infoSyncTree_=new cg({startListening:(r,u,d,f)=>{let m=[];const _=s.infoData_.getNode(r._path);return _.isEmpty()||(m=pl(s.infoSyncTree_,r._path,_),setTimeout(()=>{f("ok")},0)),m},stopListening:()=>{}}),tf(s,"connected",!1),s.serverSyncTree_=new cg({startListening:(r,u,d,f)=>(s.server_.listen(r,d,u,(m,_)=>{const p=f(m,_);un(s.eventQueue_,r._path,p)}),[]),stopListening:(r,u)=>{s.server_.unlisten(r,u)}})}function RE(s){const a=s.infoData_.getNode(new Le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+a}function ef(s){return cE({timestamp:RE(s)})}function fg(s,n,a,r,u){s.dataUpdateCount++;const d=new Le(n);a=s.interceptServerDataCallback_?s.interceptServerDataCallback_(n,a):a;let f=[];if(u)if(r){const _=qr(a,p=>ot(p));f=sE(s.serverSyncTree_,d,_,u)}else{const _=ot(a);f=q0(s.serverSyncTree_,d,_,u)}else if(r){const _=qr(a,p=>ot(p));f=tE(s.serverSyncTree_,d,_)}else{const _=ot(a);f=pl(s.serverSyncTree_,d,_)}let m=d;f.length>0&&(m=_o(s,d)),un(s.eventQueue_,m,f)}function hg(s,n){tf(s,"connected",n),n===!1&&zE(s)}function OE(s,n){At(n,(a,r)=>{tf(s,a,r)})}function tf(s,n,a){const r=new Le("/.info/"+n),u=ot(a);s.infoData_.updateSnapshot(r,u);const d=pl(s.infoSyncTree_,r,u);un(s.eventQueue_,r,d)}function ny(s){return s.nextWriteId_++}function DE(s,n,a){const r=aE(s.serverSyncTree_,n);return r!=null?Promise.resolve(r):s.server_.get(n).then(u=>{const d=ot(u).withIndex(n._queryParams.getIndex());gd(s.serverSyncTree_,n,a,!0);let f;if(n._queryParams.loadsAllData())f=pl(s.serverSyncTree_,n._path,d);else{const m=rl(s.serverSyncTree_,n);f=q0(s.serverSyncTree_,n._path,d,m)}return un(s.eventQueue_,n._path,f),so(s.serverSyncTree_,n,a,null,!0),d},u=>(mo(s,"get for query "+nt(n)+" failed: "+u),Promise.reject(new Error(u))))}function ME(s,n,a,r,u){mo(s,"set",{path:n.toString(),value:a,priority:r});const d=ef(s),f=ot(a,r),m=Gd(s.serverSyncTree_,n),_=Q0(f,m,d),p=ny(s),S=Y0(s.serverSyncTree_,n,_,p,!0);$d(s.eventQueue_,S),s.server_.put(n.toString(),f.val(!0),(C,z)=>{const U=C==="ok";U||Nt("set at "+n+" failed: "+C);const q=Bi(s.serverSyncTree_,p,!U);un(s.eventQueue_,n,q),UE(s,u,C,z)});const v=ry(s,n);_o(s,v),un(s.eventQueue_,v,[])}function zE(s){mo(s,"onDisconnectEvents");const n=ef(s),a=Pr();fd(s.onDisconnect_,Te(),(u,d)=>{const f=hE(u,d,s.serverSyncTree_,n);w0(a,u,f)});let r=[];fd(a,Te(),(u,d)=>{r=r.concat(pl(s.serverSyncTree_,u,d));const f=ry(s,u);_o(s,f)}),s.onDisconnect_=Pr(),un(s.eventQueue_,Te(),r)}function jE(s,n,a){let r;he(n._path)===".info"?r=gd(s.infoSyncTree_,n,a):r=gd(s.serverSyncTree_,n,a),ey(s.eventQueue_,n._path,r)}function kE(s,n,a){let r;he(n._path)===".info"?r=so(s.infoSyncTree_,n,a):r=so(s.serverSyncTree_,n,a),ey(s.eventQueue_,n._path,r)}function LE(s){s.persistentConnection_&&s.persistentConnection_.interrupt(wE)}function mo(s,...n){let a="";s.persistentConnection_&&(a=s.persistentConnection_.id+":"),mt(a,...n)}function UE(s,n,a,r){n&&qs(()=>{if(a==="ok")n(null);else{const u=(a||"error").toUpperCase();let d=u;r&&(d+=": "+r);const f=new Error(d);f.code=u,n(f)}})}function iy(s,n,a){return Gd(s.serverSyncTree_,n,a)||ae.EMPTY_NODE}function nf(s,n=s.transactionQueueTree_){if(n||go(s,n),Gs(n)){const a=ay(s,n);H(a.length>0,"Sending zero length transaction queue"),a.every(u=>u.status===0)&&IE(s,_l(n),a)}else K0(n)&&po(n,a=>{nf(s,a)})}function IE(s,n,a){const r=a.map(p=>p.currentWriteId),u=iy(s,n,r);let d=u;const f=u.hash();for(let p=0;p<a.length;p++){const S=a[p];H(S.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),S.status=1,S.retryCount++;const v=yt(n,S.path);d=d.updateChild(v,S.currentOutputSnapshotRaw)}const m=d.val(!0),_=n;s.server_.put(_.toString(),m,p=>{mo(s,"transaction put response",{path:_.toString(),status:p});let S=[];if(p==="ok"){const v=[];for(let C=0;C<a.length;C++)a[C].status=2,S=S.concat(Bi(s.serverSyncTree_,a[C].currentWriteId)),a[C].onComplete&&v.push(()=>a[C].onComplete(null,!0,a[C].currentOutputSnapshotResolved)),a[C].unwatcher();go(s,Jd(s.transactionQueueTree_,n)),nf(s,s.transactionQueueTree_),un(s.eventQueue_,n,S);for(let C=0;C<v.length;C++)qs(v[C])}else{if(p==="datastale")for(let v=0;v<a.length;v++)a[v].status===3?a[v].status=4:a[v].status=0;else{Nt("transaction at "+_.toString()+" failed: "+p);for(let v=0;v<a.length;v++)a[v].status=4,a[v].abortReason=p}_o(s,n)}},f)}function _o(s,n){const a=sy(s,n),r=_l(a),u=ay(s,a);return BE(s,u,r),r}function BE(s,n,a){if(n.length===0)return;const r=[];let u=[];const f=n.filter(m=>m.status===0).map(m=>m.currentWriteId);for(let m=0;m<n.length;m++){const _=n[m],p=yt(a,_.path);let S=!1,v;if(H(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)S=!0,v=_.abortReason,u=u.concat(Bi(s.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=TE)S=!0,v="maxretry",u=u.concat(Bi(s.serverSyncTree_,_.currentWriteId,!0));else{const C=iy(s,_.path,f);_.currentInputSnapshot=C;const z=n[m].update(C.val());if(z!==void 0){Wd("transaction failed: Data returned ",z,_.path);let U=ot(z);typeof z=="object"&&z!=null&&Mn(z,".priority")||(U=U.updatePriority(C.getPriority()));const te=_.currentWriteId,le=ef(s),re=Q0(U,C,le);_.currentOutputSnapshotRaw=U,_.currentOutputSnapshotResolved=re,_.currentWriteId=ny(s),f.splice(f.indexOf(te),1),u=u.concat(Y0(s.serverSyncTree_,_.path,re,_.currentWriteId,_.applyLocally)),u=u.concat(Bi(s.serverSyncTree_,te,!0))}else S=!0,v="nodata",u=u.concat(Bi(s.serverSyncTree_,_.currentWriteId,!0))}un(s.eventQueue_,a,u),u=[],S&&(n[m].status=2,(function(C){setTimeout(C,Math.floor(0))})(n[m].unwatcher),n[m].onComplete&&(v==="nodata"?r.push(()=>n[m].onComplete(null,!1,n[m].currentInputSnapshot)):r.push(()=>n[m].onComplete(new Error(v),!1,null))))}go(s,s.transactionQueueTree_);for(let m=0;m<r.length;m++)qs(r[m]);nf(s,s.transactionQueueTree_)}function sy(s,n){let a,r=s.transactionQueueTree_;for(a=he(n);a!==null&&Gs(r)===void 0;)r=Jd(r,a),n=Ie(n),a=he(n);return r}function ay(s,n){const a=[];return ly(s,n,a),a.sort((r,u)=>r.order-u.order),a}function ly(s,n,a){const r=Gs(n);if(r)for(let u=0;u<r.length;u++)a.push(r[u]);po(n,u=>{ly(s,u,a)})}function go(s,n){const a=Gs(n);if(a){let r=0;for(let u=0;u<a.length;u++)a[u].status!==2&&(a[r]=a[u],r++);a.length=r,X0(n,a.length>0?a:void 0)}po(n,r=>{go(s,r)})}function ry(s,n){const a=_l(sy(s,n)),r=Jd(s.transactionQueueTree_,n);return mE(r,u=>{nd(s,u)}),nd(s,r),Z0(r,u=>{nd(s,u)}),a}function nd(s,n){const a=Gs(n);if(a){const r=[];let u=[],d=-1;for(let f=0;f<a.length;f++)a[f].status===3||(a[f].status===1?(H(d===f-1,"All SENT items should be at beginning of queue."),d=f,a[f].status=3,a[f].abortReason="set"):(H(a[f].status===0,"Unexpected transaction status in abort"),a[f].unwatcher(),u=u.concat(Bi(s.serverSyncTree_,a[f].currentWriteId,!0)),a[f].onComplete&&r.push(a[f].onComplete.bind(null,new Error("set"),!1,null))));d===-1?X0(n,void 0):a.length=d+1,un(s.eventQueue_,_l(n),u);for(let f=0;f<r.length;f++)qs(r[f])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(s){let n="";const a=s.split("/");for(let r=0;r<a.length;r++)if(a[r].length>0){let u=a[r];try{u=decodeURIComponent(u.replace(/\+/g," "))}catch{}n+="/"+u}return n}function YE(s){const n={};s.charAt(0)==="?"&&(s=s.substring(1));for(const a of s.split("&")){if(a.length===0)continue;const r=a.split("=");r.length===2?n[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Nt(`Invalid query segment '${a}' in query '${s}'`)}return n}const pg=function(s,n){const a=qE(s),r=a.namespace;a.domain==="firebase.com"&&Dn(a.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&a.domain!=="localhost"&&Dn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),a.secure||eS();const u=a.scheme==="ws"||a.scheme==="wss";return{repoInfo:new l0(a.host,a.secure,r,u,n,"",r!==a.subdomain),path:new Le(a.pathString)}},qE=function(s){let n="",a="",r="",u="",d="",f=!0,m="https",_=443;if(typeof s=="string"){let p=s.indexOf("//");p>=0&&(m=s.substring(0,p-1),s=s.substring(p+2));let S=s.indexOf("/");S===-1&&(S=s.length);let v=s.indexOf("?");v===-1&&(v=s.length),n=s.substring(0,Math.min(S,v)),S<v&&(u=HE(s.substring(S,v)));const C=YE(s.substring(Math.min(s.length,v)));p=n.indexOf(":"),p>=0?(f=m==="https"||m==="wss",_=parseInt(n.substring(p+1),10)):p=n.length;const z=n.slice(0,p);if(z.toLowerCase()==="localhost")a="localhost";else if(z.split(".").length<=2)a=z;else{const U=n.indexOf(".");r=n.substring(0,U).toLowerCase(),a=n.substring(U+1),d=r}"ns"in C&&(d=C.ns)}return{host:n,port:_,domain:a,subdomain:r,secure:f,scheme:m,pathString:u,namespace:d}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(n,a,r,u){this.eventType=n,this.eventRegistration=a,this.snapshot=r,this.prevName=u}getPath(){const n=this.snapshot.ref;return this.eventType==="value"?n._path:n.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class VE{constructor(n,a,r){this.eventRegistration=n,this.error=a,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(n,a){this.snapshotCallback=n,this.cancelCallback=a}onValue(n,a){this.snapshotCallback.call(null,n,a)}onCancel(n){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,n)}get hasCancelCallback(){return!!this.cancelCallback}matches(n){return this.snapshotCallback===n.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===n.snapshotCallback.userCallback&&this.snapshotCallback.context===n.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(n,a,r,u){this._repo=n,this._path=a,this._queryParams=r,this._orderByCalled=u}get key(){return ve(this._path)?null:m0(this._path)}get ref(){return new zn(this._repo,this._path)}get _queryIdentifier(){const n=$_(this._queryParams),a=Ad(n);return a==="{}"?"default":a}get _queryObject(){return $_(this._queryParams)}isEqual(n){if(n=Hs(n),!(n instanceof sf))return!1;const a=this._repo===n._repo,r=Md(this._path,n._path),u=this._queryIdentifier===n._queryIdentifier;return a&&r&&u}toJSON(){return this.toString()}toString(){return this._repo.toString()+US(this._path)}}class zn extends sf{constructor(n,a){super(n,a,new Ld,!1)}get parent(){const n=g0(this._path);return n===null?null:new zn(this._repo,n)}get root(){let n=this;for(;n.parent!==null;)n=n.parent;return n}}class ol{constructor(n,a,r){this._node=n,this.ref=a,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(n){const a=new Le(n),r=vd(this.ref,n);return new ol(this._node.getChild(a),r,Qe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(n){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,u)=>n(new ol(u,vd(this.ref,r),Qe)))}hasChild(n){const a=new Le(n);return!this._node.getChild(a).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $t(s,n){return s=Hs(s),s._checkNotDeleted("ref"),n!==void 0?vd(s._root,n):s._root}function vd(s,n){return s=Hs(s),he(s._path)===null?xE("child","path",n):W0("child","path",n),new zn(s._repo,it(s._path,n))}function mg(s){return $0("remove",s._path),Ui(s,null)}function Ui(s,n){s=Hs(s),$0("set",s._path),bE("set",n,s._path);const a=new lo;return ME(s._repo,s._path,n,null,a.wrapCallback(()=>{})),a.promise}function _g(s){s=Hs(s);const n=new oy(()=>{}),a=new yo(n);return DE(s._repo,s,a).then(r=>new ol(r,new zn(s._repo,s._path),s._queryParams.getIndex()))}class yo{constructor(n){this.callbackContext=n}respondsTo(n){return n==="value"}createEvent(n,a){const r=a._queryParams.getIndex();return new GE("value",this,new ol(n.snapshotNode,new zn(a._repo,a._path),r))}getEventRunner(n){return n.getEventType()==="cancel"?()=>this.callbackContext.onCancel(n.error):()=>this.callbackContext.onValue(n.snapshot,null)}createCancelEvent(n,a){return this.callbackContext.hasCancelCallback?new VE(this,n,a):null}matches(n){return n instanceof yo?!n.callbackContext||!this.callbackContext?!0:n.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function FE(s,n,a,r,u){const d=new oy(a,void 0),f=new yo(d);return jE(s._repo,s,f),()=>kE(s._repo,s,f)}function QE(s,n,a,r){return FE(s,"value",n)}X2(zn);W2(zn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="FIREBASE_DATABASE_EMULATOR_HOST",bd={};let KE=!1;function ZE(s,n,a,r){const u=n.lastIndexOf(":"),d=n.substring(0,u),f=wd(d);s.repoInfo_=new l0(n,f,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,a),r&&(s.authTokenProvider_=r)}function PE(s,n,a,r,u){let d=r||s.options.databaseURL;d===void 0&&(s.options.projectId||Dn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",s.options.projectId),d=`${s.options.projectId}-default-rtdb.firebaseio.com`);let f=pg(d,u),m=f.repoInfo,_;typeof process<"u"&&k_&&(_=k_[XE]),_?(d=`http://${_}?ns=${m.namespace}`,f=pg(d,u),m=f.repoInfo):f.repoInfo.secure;const p=new dS(s.name,s.options,n);CE("Invalid Firebase Database URL",f),ve(f.path)||Dn("Database URL must point to the root of a Firebase Database (not including a child path).");const S=WE(m,s,p,new cS(s,a));return new $E(S,s)}function JE(s,n){const a=bd[n];(!a||a[s.key]!==s)&&Dn(`Database ${n}(${s.repoInfo_}) has already been deleted.`),LE(s),delete a[s.key]}function WE(s,n,a,r){let u=bd[n.name];u||(u={},bd[n.name]=u);let d=u[s.toURLString()];return d&&Dn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),d=new NE(s,KE,a,r),u[s.toURLString()]=d,d}class $E{constructor(n,a){this._repoInternal=n,this.app=a,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zn(this._repo,Te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(n){this._rootInternal===null&&Dn("Cannot call "+n+" on a deleted database.")}}function ew(s=UC(),n){const a=MC(s,"database").getImmediate({identifier:n});if(!a._instanceStarted){const r=gx("database");r&&tw(a,...r)}return a}function tw(s,n,a,r={}){s=Hs(s),s._checkNotDeleted("useEmulator");const u=`${n}:${a}`,d=s._repoInternal;if(s._instanceStarted){if(u===s._repoInternal.repoInfo_.host&&Gr(r,d.repoInfo_.emulatorOptions))return;Dn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let f;if(d.repoInfo_.nodeAdmin)r.mockUserToken&&Dn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),f=new Br(Br.OWNER);else if(r.mockUserToken){const m=typeof r.mockUserToken=="string"?r.mockUserToken:vx(r.mockUserToken,s.app.options.projectId);f=new Br(m)}wd(n)&&(yx(n),Cx("Database",!0)),ZE(d,u,r,f)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(s){KC(LC),Fr(new $a("database",(n,{instanceIdentifier:a})=>{const r=n.getProvider("app").getImmediate(),u=n.getProvider("auth-internal"),d=n.getProvider("app-check-internal");return PE(r,u,d,a)},"PUBLIC").setMultipleInstances(!0)),Ms(L_,U_,s),Ms(L_,U_,"esm2020")}Rn.prototype.simpleListen=function(s,n){this.sendRequest("q",{p:s},n)};Rn.prototype.echo=function(s,n){this.sendRequest("echo",{d:s},n)};nw();var iw="firebase",sw="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ms(iw,sw,"app");const xd={apiKey:"AIzaSyAfOvMVTMhUsz9hMGKK-O_mzTOwJ_M8bBU",authDomain:"python-tutoring.firebaseapp.com",projectId:"python-tutoring",storageBucket:"python-tutoring.firebasestorage.app",messagingSenderId:"425234567508",appId:"1:425234567508:web:e416a082b7701320ec78c1",databaseURL:"https://python-tutoring-default-rtdb.firebaseio.com"},aw=xd.apiKey&&xd.apiKey!=="YOUR_API_KEY";let Fe;if(aw)try{const s=qg(xd);Fe=ew(s)}catch(s){console.warn("Firebase initialization failed:",s),Fe=null}else console.warn("Firebase config missing. Using local-only mode."),Fe=null;const uy="python_tutoring_sessions",gg=()=>{const s="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let n="";for(let a=0;a<6;a++)n+=s.charAt(Math.floor(Math.random()*s.length));return n},lw=()=>"user_"+Math.random().toString(36).substring(2,11),cy=L.createContext(void 0),dy=()=>{const s=L.useContext(cy);if(!s)throw new Error("useSession must be used within a SessionProvider");return s},rw=()=>{const s=localStorage.getItem("python_tutoring_participant_id");if(s)return s;const n=lw();return localStorage.setItem("python_tutoring_participant_id",n),n},af=()=>{try{const s=localStorage.getItem(uy);return s?JSON.parse(s):{}}catch{return{}}},fy=s=>{try{localStorage.setItem(uy,JSON.stringify(s))}catch(n){console.error("[Session] Failed to save sessions:",n)}},zi=s=>af()[s]||null,ji=(s,n)=>{const a=af();a[s]=n,fy(a)},ow=s=>{const n=af();delete n[s],fy(n)},uw=({children:s})=>{const[n,a]=L.useState(null),[r,u]=L.useState(!1),[d]=L.useState(rw),[f,m]=L.useState({}),[_,p]=L.useState(null),[S,v]=L.useState([]),[C,z]=L.useState({}),U=L.useRef(null),q=n!==null;L.useEffect(()=>{if(!n)return;if(Fe){const Y=$t(Fe,`sessions/${n}`),X=QE(Y,Se=>{const me=Se.val();me?(m(me.participants||{}),z(me.unlockedChapters||{}),r&&me.studentCode&&p(me.studentCode),r&&me.studentOutput&&v(me.studentOutput)):(a(null),u(!1),m({}),z({}))});return()=>X()}const K=()=>{const Y=zi(n);Y?(m(Y.participants||{}),z(Y.unlockedChapters||{}),r&&Y.studentCode&&p(Y.studentCode),r&&Y.studentOutput&&v(Y.studentOutput)):r||(console.log("[Session] Session ended by teacher"),a(null),m({}),z({}))};return K(),U.current=window.setInterval(K,500),()=>{U.current&&clearInterval(U.current)}},[n,r]);const te=L.useCallback(async()=>{const K=gg(),Y={createdAt:Date.now(),teacherId:d,participants:{[d]:{role:"teacher",joinedAt:Date.now()}},unlockedChapters:{"ch1-intro":!0,"ch2-variables":!0,"ch3-math":!0}};if(Fe)try{let X=K,Se=0;for(;Se<10&&(await _g($t(Fe,`sessions/${X}`))).exists();)X=gg(),Se++;return await Ui($t(Fe,`sessions/${X}`),Y),a(X),u(!0),z(Y.unlockedChapters),console.log("[Session] Created Firebase session:",X),X}catch(X){console.error("[Session] Firebase error:",X)}return ji(K,Y),a(K),u(!0),z(Y.unlockedChapters),m(Y.participants),console.log("[Session] Created local session:",K),K},[d]),le=L.useCallback(async K=>{const Y=K.toUpperCase().trim();if(Fe)try{const Se=$t(Fe,`sessions/${Y}`);if((await _g(Se)).exists())return await Ui($t(Fe,`sessions/${Y}/participants/${d}`),{role:"student",joinedAt:Date.now()}),a(Y),u(!1),console.log("[Session] Joined Firebase session:",Y),!0}catch(Se){console.error("[Session] Firebase error:",Se)}const X=zi(Y);return X?(X.participants[d]={role:"student",joinedAt:Date.now()},ji(Y,X),a(Y),u(!1),z(X.unlockedChapters),m(X.participants),console.log("[Session] Joined local session:",Y),!0):(console.log("[Session] Session not found:",Y),!1)},[d]),re=L.useCallback(async()=>{if(n){if(Fe)try{r?await mg($t(Fe,`sessions/${n}`)):await mg($t(Fe,`sessions/${n}/participants/${d}`))}catch(K){console.error("[Session] Firebase error:",K)}if(r)ow(n);else{const K=zi(n);K&&(delete K.participants[d],ji(n,K))}a(null),u(!1),m({}),p(null),v([]),z({}),console.log("[Session] Left session")}},[n,r,d]),oe=L.useCallback((K,Y,X)=>{if(!n)return;const Se={content:K,chapterId:Y,challengeIndex:X,lastUpdated:Date.now()};if(Fe)Ui($t(Fe,`sessions/${n}/studentCode`),Se).catch(console.error);else{const me=zi(n);me&&(me.studentCode=Se,ji(n,me))}},[n]),ne=L.useCallback(K=>{if(!(!n||r))if(Fe)Ui($t(Fe,`sessions/${n}/studentOutput`),K).catch(console.error);else{const Y=zi(n);Y&&(Y.studentOutput=K,ji(n,Y))}},[n,r]),$=L.useCallback(K=>{if(!(!n||!r))if(console.log("[Session] Unlocking chapter:",K),Fe)Ui($t(Fe,`sessions/${n}/unlockedChapters/${K}`),!0).catch(console.error);else{const Y=zi(n);Y&&(Y.unlockedChapters[K]=!0,ji(n,Y),z({...Y.unlockedChapters}))}},[n,r]),ie=L.useCallback(K=>{if(!(!n||!r))if(console.log("[Session] Locking chapter:",K),Fe)Ui($t(Fe,`sessions/${n}/unlockedChapters/${K}`),!1).catch(console.error);else{const Y=zi(n);Y&&(Y.unlockedChapters[K]=!1,ji(n,Y),z({...Y.unlockedChapters}))}},[n,r]),G={sessionCode:n,isInSession:q,isTeacher:r,participantId:d,participants:f,createSession:te,joinSession:le,leaveSession:re,syncCode:oe,syncOutput:ne,studentCode:_,studentOutput:S,sessionUnlockedChapters:C,unlockChapter:$,lockChapter:ie};return y.jsx(cy.Provider,{value:G,children:s})},cw=({chapter:s,currentChallengeIndex:n,onNextChallenge:a,onPrevChallenge:r,onSelectChallenge:u,isLocked:d})=>{const f=s.challenges[n],{runCode:m,isRunning:_,clearOutput:p,output:S}=Sd(),{isInSession:v,isTeacher:C,syncCode:z,syncOutput:U,studentCode:q}=dy(),[te,le]=L.useState((f==null?void 0:f.starterCode)||""),[re,oe]=L.useState(!1),[ne,$]=L.useState(!1),ie=L.useRef(null),G=n===s.challenges.length-1,K=G&&s.challenges.length>5;L.useEffect(()=>{f&&(le(f.starterCode||""),oe(!1),$(!1),p())},[f==null?void 0:f.id,f==null?void 0:f.starterCode,p]),L.useEffect(()=>{v&&C&&q&&q.chapterId===s.id&&q.challengeIndex===n&&le(q.content)},[v,C,q,s.id,n]);const Y=L.useCallback(Pe=>{const Ne=Pe||"";le(Ne),v&&(ie.current&&clearTimeout(ie.current),ie.current=window.setTimeout(()=>{z(Ne,s.id,n)},500))},[v,z,s.id,n]);L.useEffect(()=>{v&&!C&&S.length>0&&U(S)},[v,C,S,U]);const X=L.useCallback(()=>{te.trim()&&m(te,f.testCases)},[te,m,f]);L.useEffect(()=>{const Pe=Ne=>{(Ne.ctrlKey||Ne.metaKey)&&Ne.key==="Enter"&&(Ne.preventDefault(),X())};return window.addEventListener("keydown",Pe),()=>window.removeEventListener("keydown",Pe)},[X]);const Se=()=>{f&&(le(f.starterCode||""),p())},me=v&&C;return y.jsxs("div",{className:"flex h-full w-full bg-[#1e1e1e] overflow-hidden",children:[y.jsxs("div",{className:"w-[380px] min-w-[320px] flex flex-col border-r border-[#3c3c3c] bg-[#252526] h-full",children:[y.jsxs("div",{className:"p-5 border-b border-[#3c3c3c] bg-gradient-to-r from-[#1e1e1e] to-[#252526]",children:[y.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[y.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg",children:y.jsx("span",{className:"text-white font-bold text-sm",children:n+1})}),y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsx("h2",{className:"text-base font-semibold text-white truncate",children:s.title}),y.jsx("p",{className:"text-xs text-slate-400",children:s.description})]})]}),y.jsxs("div",{className:"mt-3",children:[y.jsxs("div",{className:"flex justify-between text-xs text-slate-500 mb-1.5",children:[y.jsx("span",{children:"Progress"}),y.jsxs("span",{className:"text-blue-400",children:[n+1," / ",s.challenges.length]})]}),y.jsx("div",{className:"h-1.5 bg-[#3c3c3c] rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500 ease-out",style:{width:`${(n+1)/s.challenges.length*100}%`}})})]})]}),y.jsxs("div",{className:"flex-1 overflow-y-auto",children:[y.jsxs("div",{className:"p-5",children:[K&&y.jsxs("div",{className:"mb-4 p-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg",children:[y.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-semibold text-sm",children:[y.jsx("span",{children:"🏆"}),y.jsx("span",{children:"FINAL ASSESSMENT"})]}),y.jsx("p",{className:"text-xs text-amber-200/70 mt-1",children:"Complete this challenge to master the chapter!"})]}),y.jsx("h3",{className:"text-lg font-bold text-white mb-3 leading-tight",children:(f==null?void 0:f.title)||`Challenge ${f==null?void 0:f.number}`}),y.jsx("div",{className:"prose prose-invert prose-sm max-w-none",children:y.jsx("p",{className:"text-slate-300 leading-relaxed text-sm",children:f==null?void 0:f.description})}),(f==null?void 0:f.hint)&&y.jsxs("div",{className:"mt-5",children:[y.jsxs("button",{onClick:()=>oe(!re),className:"flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors",children:[y.jsx("span",{className:"text-lg",children:re?"💡":"🤔"}),y.jsx("span",{children:re?"Hide Hint":"Need a hint?"})]}),re&&y.jsx("div",{className:"mt-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg animate-fade-in",children:y.jsx("p",{className:"text-amber-200/90 text-sm leading-relaxed",children:f.hint})})]}),(f==null?void 0:f.solutionCode)&&y.jsxs("div",{className:"mt-4",children:[y.jsxs("button",{onClick:()=>$(!ne),className:"flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors",children:[y.jsx("span",{className:"text-lg",children:ne?"🔒":"🔓"}),y.jsx("span",{children:ne?"Hide Solution":"Reveal Solution"})]}),ne&&y.jsx("div",{className:"mt-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg animate-fade-in",children:y.jsx("pre",{className:"text-purple-200/90 text-xs font-mono overflow-x-auto whitespace-pre-wrap",children:f.solutionCode})})]})]}),y.jsx("div",{className:"px-5 pb-5",children:y.jsxs("div",{className:"p-4 bg-[#1e1e1e] rounded-lg border border-[#3c3c3c]",children:[y.jsx("h4",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3",children:"Quick Tips"}),y.jsxs("ul",{className:"space-y-2 text-xs text-slate-400",children:[y.jsxs("li",{className:"flex items-start gap-2",children:[y.jsx("span",{className:"text-emerald-400 mt-0.5",children:"⌨️"}),y.jsxs("span",{children:["Press ",y.jsx("kbd",{className:"px-1.5 py-0.5 bg-[#3c3c3c] rounded text-white",children:"Ctrl"})," + ",y.jsx("kbd",{className:"px-1.5 py-0.5 bg-[#3c3c3c] rounded text-white",children:"Enter"})," to run"]})]}),y.jsxs("li",{className:"flex items-start gap-2",children:[y.jsx("span",{className:"text-blue-400 mt-0.5",children:"💾"}),y.jsx("span",{children:"Your code auto-saves in the editor"})]}),y.jsxs("li",{className:"flex items-start gap-2",children:[y.jsx("span",{className:"text-amber-400 mt-0.5",children:"🧪"}),y.jsxs("span",{children:["Test with ",y.jsx("code",{className:"text-amber-200",children:"print()"})," statements"]})]})]})]})})]}),y.jsx("div",{className:"p-4 border-t border-[#3c3c3c] bg-[#1e1e1e]",children:y.jsxs("div",{className:"flex items-center justify-between gap-3",children:[y.jsx("button",{onClick:r,disabled:n===0,className:"px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-[#3c3c3c] rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed",children:"← Previous"}),y.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto max-w-[140px] py-1",children:s.challenges.map((Pe,Ne)=>y.jsx("button",{onClick:()=>u(Ne),className:`w-2.5 h-2.5 rounded-full transition-all flex-shrink-0 ${Ne===n?"bg-blue-500 scale-125":Ne<n?"bg-emerald-500/60 hover:bg-emerald-400":"bg-[#3c3c3c] hover:bg-slate-500"}`,title:`Challenge ${Ne+1}`},Ne))}),y.jsx("button",{onClick:a,disabled:G,className:`px-4 py-2 text-sm font-medium rounded-lg transition-all ${G?"bg-emerald-600 text-white cursor-default":"text-slate-400 hover:text-white hover:bg-[#3c3c3c]"}`,children:G?"✓ Complete":"Next →"})]})})]}),y.jsxs("div",{className:"flex-1 flex flex-col h-full bg-[#1e1e1e]",children:[y.jsxs("div",{className:"h-12 bg-[#252526] border-b border-[#3c3c3c] flex items-center justify-between px-4",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] rounded-md border border-[#3c3c3c]",children:[y.jsx("span",{className:"text-yellow-500 text-sm",children:"🐍"}),y.jsx("span",{className:"text-xs text-slate-300 font-mono",children:"main.py"})]}),y.jsx("button",{onClick:Se,className:"text-xs text-slate-500 hover:text-slate-300 transition-colors",title:"Reset to starter code",children:"↺ Reset"})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[me&&y.jsx("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-purple-600/20 border border-purple-500/30 rounded-md",children:y.jsx("span",{className:"text-purple-400 text-xs font-medium",children:"🤝 Collaborating"})}),y.jsx("span",{className:"text-xs text-slate-500",children:_?"Executing...":v?"Live Session":"Ready"}),y.jsx("button",{onClick:X,disabled:_,className:`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg ${_?"bg-slate-600 cursor-wait text-slate-300":"bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white"}`,children:_?y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"animate-spin",children:"⚙️"}),"Running..."]}):y.jsxs(y.Fragment,{children:[y.jsx("span",{children:"▶"}),"Run Code"]})})]})]}),y.jsx("div",{className:"flex-1 relative min-h-0",children:y.jsx(sx,{height:"100%",defaultLanguage:"python",value:te,onChange:Y,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:15,fontFamily:"'JetBrains Mono', 'Fira Code', Consolas, monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,padding:{top:16,bottom:16},cursorBlinking:"smooth",cursorSmoothCaretAnimation:"on",smoothScrolling:!0,renderLineHighlight:"all",bracketPairColorization:{enabled:!0},guides:{bracketPairs:!0,indentation:!0},readOnly:!1}})}),y.jsx("div",{className:"h-[35%] min-h-[180px] border-t border-[#3c3c3c]",children:y.jsx(lx,{})})]}),y.jsx("style",{children:`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `})]})},dw=({chapters:s,unlockedMap:n,onUnlock:a,onLock:r,onClose:u})=>{const d=(m,_)=>{_?r(m):a(m)},f=Object.values(n).filter(Boolean).length;return y.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]",children:y.jsxs("div",{className:"bg-[#1e1e1e] border border-[#3c3c3c] rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col",children:[y.jsxs("div",{className:"px-6 py-4 border-b border-[#3c3c3c] flex items-center justify-between bg-gradient-to-r from-indigo-600/20 to-purple-600/20",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:"🎓 Teacher Control Panel"}),y.jsxs("p",{className:"text-sm text-gray-400 mt-1",children:[f," of ",s.length," chapters unlocked"]})]}),y.jsx("button",{onClick:u,className:"text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg",children:y.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),y.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:y.jsx("div",{className:"space-y-2",children:s.map((m,_)=>{const p=n[m.id]||!1;return y.jsxs("div",{className:`flex items-center justify-between p-4 rounded-lg border transition-all ${p?"bg-emerald-900/20 border-emerald-700/50":"bg-[#2d2d2d] border-[#3c3c3c]"}`,children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${p?"bg-emerald-600 text-white":"bg-[#3c3c3c] text-gray-400"}`,children:_+1}),y.jsxs("div",{children:[y.jsx("h3",{className:"font-semibold text-white",children:m.title}),y.jsx("p",{className:"text-sm text-gray-400",children:m.description}),y.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[m.challenges.length," challenges"]})]})]}),y.jsx("button",{onClick:()=>d(m.id,p),className:`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${p?"bg-red-600/20 text-red-400 hover:bg-red-600/30 border border-red-600/50":"bg-emerald-600 text-white hover:bg-emerald-500"}`,children:p?y.jsxs(y.Fragment,{children:[y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Lock"]}):y.jsxs(y.Fragment,{children:[y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"})}),"Unlock"]})})]},m.id)})})}),y.jsx("div",{className:"px-6 py-4 border-t border-[#3c3c3c] bg-[#252526]",children:y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("p",{className:"text-sm text-gray-400",children:["💡 Tip: Press ",y.jsx("kbd",{className:"px-2 py-1 bg-[#3c3c3c] rounded text-xs",children:"Ctrl+Shift+T"})," to toggle teacher mode"]}),y.jsx("button",{onClick:u,className:"px-4 py-2 bg-[#3c3c3c] text-white rounded-lg hover:bg-[#4c4c4c] transition-colors",children:"Done"})]})})]})})},fw=({onSoloMode:s,onJoinSession:n,onCreateSession:a,isTeacherMode:r})=>{const[u,d]=L.useState("choose"),[f,m]=L.useState(""),[_,p]=L.useState(""),[S,v]=L.useState(""),[C,z]=L.useState(!1),U=async()=>{if(f.length!==6){v("Please enter a 6-character code");return}z(!0),v(""),await n(f.toUpperCase())||v("Session not found. Please check the code."),z(!1)},q=async()=>{z(!0),v("");try{const le=await a();p(le),d("create")}catch{v("Failed to create session")}z(!1)},te=()=>{navigator.clipboard.writeText(_)};return y.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] flex items-center justify-center z-50",children:y.jsxs("div",{className:"bg-[#1e1e1e] border border-[#3c3c3c] rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden",children:[y.jsx("div",{className:"p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-[#3c3c3c]",children:y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg",children:y.jsx("span",{className:"text-2xl",children:"🐍"})}),y.jsxs("div",{children:[y.jsx("h1",{className:"text-xl font-bold text-white",children:"Python Tutoring"}),y.jsx("p",{className:"text-sm text-slate-400",children:"Choose how you'd like to learn"})]})]})}),y.jsxs("div",{className:"p-6",children:[u==="choose"&&y.jsxs("div",{className:"space-y-4",children:[y.jsx("button",{onClick:s,className:"w-full p-5 bg-[#252526] hover:bg-[#2d2d2d] border border-[#3c3c3c] rounded-xl text-left transition-all group",children:y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform",children:y.jsx("span",{className:"text-2xl",children:"📚"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-semibold text-white",children:"Practice on Your Own"}),y.jsx("p",{className:"text-sm text-slate-400",children:"Learn at your own pace, offline"})]})]})}),y.jsx("button",{onClick:()=>d("join"),className:"w-full p-5 bg-[#252526] hover:bg-[#2d2d2d] border border-[#3c3c3c] rounded-xl text-left transition-all group",children:y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform",children:y.jsx("span",{className:"text-2xl",children:"🔗"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-semibold text-white",children:"Join a Session"}),y.jsx("p",{className:"text-sm text-slate-400",children:"Enter a code from your teacher"})]})]})}),r&&y.jsx("button",{onClick:q,disabled:C,className:"w-full p-5 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 hover:from-indigo-600/30 hover:to-purple-600/30 border border-indigo-500/30 rounded-xl text-left transition-all group",children:y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform",children:y.jsx("span",{className:"text-2xl",children:"🎓"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-semibold text-white",children:C?"Creating...":"Start a Teaching Session"}),y.jsx("p",{className:"text-sm text-slate-400",children:"Generate a code for students to join"})]})]})})]}),u==="join"&&y.jsxs("div",{className:"space-y-4",children:[y.jsx("button",{onClick:()=>{d("choose"),v("")},className:"text-slate-400 hover:text-white text-sm flex items-center gap-1 transition-colors",children:"← Back"}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-medium text-slate-300 mb-2",children:"Enter Session Code"}),y.jsx("input",{type:"text",value:f,onChange:le=>m(le.target.value.toUpperCase().slice(0,6)),placeholder:"ABC123",className:"w-full px-4 py-4 bg-[#252526] border border-[#3c3c3c] rounded-xl text-white text-2xl font-mono tracking-[0.5em] text-center focus:outline-none focus:border-blue-500 transition-colors uppercase",autoFocus:!0})]}),S&&y.jsx("div",{className:"p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm",children:S}),y.jsx("button",{onClick:U,disabled:C||f.length!==6,className:"w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:C?"Joining...":"Join Session"})]}),u==="create"&&y.jsxs("div",{className:"space-y-4 text-center",children:[y.jsx("div",{className:"w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto",children:y.jsx("span",{className:"text-3xl",children:"✓"})}),y.jsx("h3",{className:"text-lg font-semibold text-white",children:"Session Created!"}),y.jsx("p",{className:"text-sm text-slate-400",children:"Share this code with your student:"}),y.jsxs("div",{className:"relative",children:[y.jsx("div",{className:"px-6 py-5 bg-[#252526] border border-[#3c3c3c] rounded-xl text-3xl font-mono tracking-[0.5em] text-emerald-400 text-center",children:_}),y.jsx("button",{onClick:te,className:"absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-[#3c3c3c] rounded-lg transition-colors",title:"Copy to clipboard",children:y.jsx("span",{className:"text-lg",children:"📋"})})]}),y.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all",children:"Continue to Dashboard"})]})]}),y.jsx("div",{className:"px-6 py-4 bg-[#252526] border-t border-[#3c3c3c]",children:y.jsx("p",{className:"text-xs text-slate-500 text-center",children:"Mr Stewart Python Tutoring"})})]})})},hw=({sessionCode:s,isTeacher:n,participantCount:a,onLeave:r})=>{const u=()=>{navigator.clipboard.writeText(s)};return y.jsxs("div",{className:"h-8 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-between px-4 text-white text-sm z-50 shadow-lg",children:[y.jsx("div",{className:"flex items-center gap-4",children:n?y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"opacity-80",children:"🎓"}),y.jsx("span",{className:"font-medium",children:"Session:"}),y.jsx("button",{onClick:u,className:"px-2 py-0.5 bg-white/20 hover:bg-white/30 rounded font-mono tracking-wider transition-colors",title:"Click to copy",children:s})]}),y.jsx("div",{className:"h-4 w-px bg-white/30"}),y.jsxs("span",{className:"opacity-80",children:[a-1," student",a-1!==1?"s":""," connected"]})]}):y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"w-2 h-2 bg-emerald-400 rounded-full animate-pulse"}),y.jsx("span",{children:"Connected to session"})]}),y.jsx("div",{className:"h-4 w-px bg-white/30"}),y.jsxs("span",{className:"opacity-80",children:["Code: ",s]})]})}),y.jsx("button",{onClick:r,className:"px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition-colors",children:"Leave Session"})]})},Rs=[{id:"first_functions",title:"Your First Functions",description:"Function Syntax, Parameters & Returns",explanation:`
      <p class="mb-4">Functions are reusable blocks of code. Every program you write should be organized into functions - this makes code easier to test, debug, and understand.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Defining Functions</h4>
      <p class="mb-2">Use <code>def</code> followed by the function name and parentheses. Parameters go inside the parentheses.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Type Hints</h4>
      <p class="mb-2">Type hints document what types your function expects: <code>def greet(name: str) -> str:</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Return vs Print</h4>
      <p class="mb-2"><code>return</code> sends a value back to the caller. <code>print</code> displays output but returns <code>None</code>.</p>
    `,exampleCode:`def add(a: int, b: int) -> int:
    """Add two numbers and return the result."""
    return a + b

def greet(name: str) -> str:
    """Return a greeting message."""
    return f"Hello, {name}!"

# Calling functions
result = add(5, 3)      # result = 8
message = greet("Alex") # message = "Hello, Alex!"`,challenges:[{id:"001",number:1,title:"Health Calculator",description:"Create a function `calculate_health` that takes `current_health` and `damage`. Return the remaining health.",hint:"Subtract damage from current_health.",starterCode:`def calculate_health(current_health: int, damage: int) -> int:
    # Your code here
    pass`,solutionCode:`def calculate_health(current_health: int, damage: int) -> int:
    """Calculate remaining health."""
    return current_health - damage`,testCases:[{input:"calculate_health(100, 25)",expected:"75"},{input:"calculate_health(50, 50)",expected:"0"},{input:"calculate_health(100, 0)",expected:"100"},{input:"calculate_health(75, 30)",expected:"45"},{input:"calculate_health(200, 150)",expected:"50"}]},{id:"002",number:2,title:"Double XP",description:"Create a function `double_xp` that takes `base_xp` and returns it multiplied by 2.",hint:"Return base_xp * 2.",starterCode:`def double_xp(base_xp: int) -> int:
    # Your code here
    pass`,solutionCode:`def double_xp(base_xp: int) -> int:
    """Double the XP."""
    return base_xp * 2`,testCases:[{input:"double_xp(50)",expected:"100"},{input:"double_xp(0)",expected:"0"},{input:"double_xp(125)",expected:"250"},{input:"double_xp(1)",expected:"2"},{input:"double_xp(999)",expected:"1998"}]},{id:"003",number:3,title:"Welcome Message",description:'Create a function `welcome_user` that takes a `username` (string) and returns the message "Welcome back, {username}!".',hint:'Use an f-string: f"Welcome back, {username}!"',starterCode:`def welcome_user(username: str) -> str:
    # Your code here
    pass`,solutionCode:`def welcome_user(username: str) -> str:
    """Return a welcome message."""
    return f"Welcome back, {username}!"`,testCases:[{input:"welcome_user('Sarah')",expected:"'Welcome back, Sarah!'"},{input:"welcome_user('Player1')",expected:"'Welcome back, Player1!'"},{input:"welcome_user('Dr. Python')",expected:"'Welcome back, Dr. Python!'"},{input:"welcome_user('Ada')",expected:"'Welcome back, Ada!'"},{input:"welcome_user('NeuralNinja')",expected:"'Welcome back, NeuralNinja!'"}]},{id:"004",number:4,title:"Total Score",description:"Create a function `total_trials` that takes three scores (`trial1`, `trial2`, `trial3`) and returns their sum.",hint:"Add all three numbers: trial1 + trial2 + trial3",starterCode:`def total_trials(trial1: int, trial2: int, trial3: int) -> int:
    # Your code here
    pass`,solutionCode:`def total_trials(trial1: int, trial2: int, trial3: int) -> int:
    """Sum three numbers."""
    return trial1 + trial2 + trial3`,testCases:[{input:"total_trials(85, 90, 88)",expected:"263"},{input:"total_trials(100, 100, 100)",expected:"300"},{input:"total_trials(0, 0, 0)",expected:"0"},{input:"total_trials(50, 75, 25)",expected:"150"},{input:"total_trials(33, 33, 34)",expected:"100"}]},{id:"005",number:5,title:"Format Name",description:'Create a function `format_author` that takes `first_name` and `last_name` and returns them as "Last, First".',hint:'Use an f-string: f"{last_name}, {first_name}"',starterCode:`def format_author(first_name: str, last_name: str) -> str:
    # Your code here
    pass`,solutionCode:`def format_author(first_name: str, last_name: str) -> str:
    """Format name as Last, First."""
    return f"{last_name}, {first_name}"`,testCases:[{input:"format_author('Ada', 'Lovelace')",expected:"'Lovelace, Ada'"},{input:"format_author('Alan', 'Turing')",expected:"'Turing, Alan'"},{input:"format_author('Marie', 'Curie')",expected:"'Curie, Marie'"},{input:"format_author('Santiago', 'Cajal')",expected:"'Cajal, Santiago'"},{input:"format_author('Rosalind', 'Franklin')",expected:"'Franklin, Rosalind'"}]},{id:"006",number:6,title:"Total Pixels",description:"Create a function `total_pixels` that takes `width` and `height` and returns the total number of pixels (width multiplied by height).",hint:"Multiply width * height.",starterCode:`def total_pixels(width: int, height: int) -> int:
    # Your code here
    pass`,solutionCode:`def total_pixels(width: int, height: int) -> int:
    """Calculate width * height."""
    return width * height`,testCases:[{input:"total_pixels(1920, 1080)",expected:"2073600"},{input:"total_pixels(100, 100)",expected:"10000"},{input:"total_pixels(640, 480)",expected:"307200"},{input:"total_pixels(1, 1)",expected:"1"},{input:"total_pixels(3840, 2160)",expected:"8294400"}]},{id:"007",number:7,title:"Average Duration",description:"Create a function `average_duration` that takes `song1` and `song2` (seconds) and returns the average duration as a float.",hint:"Add song1 + song2, then divide by 2.",starterCode:`def average_duration(song1: int, song2: int) -> float:
    # Your code here
    pass`,solutionCode:`def average_duration(song1: int, song2: int) -> float:
    """Calculate average of two numbers."""
    return (song1 + song2) / 2`,testCases:[{input:"average_duration(180, 240)",expected:"210.0"},{input:"average_duration(200, 200)",expected:"200.0"},{input:"average_duration(300, 100)",expected:"200.0"},{input:"average_duration(0, 120)",expected:"60.0"},{input:"average_duration(185, 215)",expected:"200.0"}]},{id:"008",number:8,title:"Cube Number",description:"Create a function `cube` that takes a number `n` and returns `n` cubed (n to the power of 3).",hint:"Use n ** 3 or n * n * n.",starterCode:`def cube(n: int) -> int:
    # Your code here
    pass`,solutionCode:`def cube(n: int) -> int:
    """Calculate n cubed."""
    return n ** 3`,testCases:[{input:"cube(4)",expected:"64"},{input:"cube(2)",expected:"8"},{input:"cube(10)",expected:"1000"},{input:"cube(1)",expected:"1"},{input:"cube(5)",expected:"125"}]},{id:"009",number:9,title:"Log Entry",description:'Create a function `log_entry` that takes a `name` and a `day` number. Return a message: "Day {day}: Logged by {name}".',hint:'Use an f-string: f"Day {day}: Logged by {name}".',starterCode:`def log_entry(name: str, day: int) -> str:
    # Your code here
    pass`,solutionCode:`def log_entry(name: str, day: int) -> str:
    """Format a log entry."""
    return f"Day {day}: Logged by {name}"`,testCases:[{input:"log_entry('Chen', 5)",expected:"'Day 5: Logged by Chen'"},{input:"log_entry('Sarah', 1)",expected:"'Day 1: Logged by Sarah'"},{input:"log_entry('Team', 100)",expected:"'Day 100: Logged by Team'"},{input:"log_entry('AI', 42)",expected:"'Day 42: Logged by AI'"},{input:"log_entry('Prof', 365)",expected:"'Day 365: Logged by Prof'"}]},{id:"010",number:10,title:"Calculate Percentage",description:"Create a function `accuracy_rate` that takes `correct` and `total` samples. Return the percentage (correct / total * 100).",hint:"(correct / total) * 100.",starterCode:`def accuracy_rate(correct: int, total: int) -> float:
    # Your code here
    pass`,solutionCode:`def accuracy_rate(correct: int, total: int) -> float:
    """Calculate percentage."""
    return (correct / total) * 100`,testCases:[{input:"accuracy_rate(45, 50)",expected:"90.0"},{input:"accuracy_rate(100, 100)",expected:"100.0"},{input:"accuracy_rate(75, 100)",expected:"75.0"},{input:"accuracy_rate(1, 4)",expected:"25.0"},{input:"accuracy_rate(88, 100)",expected:"88.0"}]},{id:"011-assessment",number:11,title:"Unit Conversion Report",description:"Create a function `convert_and_report` that takes `km` (distance) and `celsius` (temperature). Convert them to miles (km * 0.621) and Fahrenheit ((c * 9/5) + 32). Return a string: 'Distance: X miles | Temp: Y F'. Round values to 1 decimal place.",hint:"Perform conversions. Use `round()`. Return combined string.",starterCode:`def convert_and_report(km: float, celsius: float) -> str:
    # Your code here
    pass`,solutionCode:`def convert_and_report(km: float, celsius: float) -> str:
    """Convert units and return report."""
    miles = round(km * 0.621, 1)
    fahrenheit = round((celsius * 9/5) + 32, 1)
    return f"Distance: {miles} miles | Temp: {fahrenheit} F"`,testCases:[{input:"convert_and_report(100, 0)",expected:"'Distance: 62.1 miles | Temp: 32.0 F'"},{input:"convert_and_report(10, 100)",expected:"'Distance: 6.2 miles | Temp: 212.0 F'"},{input:"convert_and_report(5, 20)",expected:"'Distance: 3.1 miles | Temp: 68.0 F'"},{input:"convert_and_report(0, -40)",expected:"'Distance: 0.0 miles | Temp: -40.0 F'"},{input:"convert_and_report(42.195, 25)",expected:"'Distance: 26.2 miles | Temp: 77.0 F'"}]}]},{id:"working_with_numbers",title:"Working with Numbers",description:"Arithmetic, Math Operations & Rounding",explanation:`
      <p class="mb-4">Python handles both integers (whole numbers) and floats (decimals). Understanding arithmetic operations is fundamental.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Basic Operators</h4>
      <p class="mb-2"><code>+</code> add, <code>-</code> subtract, <code>*</code> multiply, <code>/</code> divide, <code>**</code> power</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Integer Division & Modulo</h4>
      <p class="mb-2"><code>//</code> divides and rounds down to nearest integer. <code>%</code> gives the remainder.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Rounding</h4>
      <p class="mb-2"><code>round(number, decimals)</code> rounds to specified decimal places.</p>
    `,exampleCode:`def calculate_tip(bill: float, tip_percent: int) -> float:
    """Calculate tip amount for a restaurant bill."""
    tip = bill * (tip_percent / 100)
    return round(tip, 2)

def get_remainder(dividend: int, divisor: int) -> int:
    """Return the remainder when dividing two numbers."""
    return dividend % divisor

print(calculate_tip(85.50, 20))  # 17.1
print(get_remainder(17, 5))      # 2`,challenges:[{id:"011",number:1,title:"Temp Converter",description:"Create a function `celsius_to_fahrenheit` that converts Celsius to Fahrenheit using the formula: (celsius * 9/5) + 32.",hint:"Multiply by 9, divide by 5, then add 32.",starterCode:`def celsius_to_fahrenheit(celsius: float) -> float:
    # Your code here
    pass`,solutionCode:`def celsius_to_fahrenheit(celsius: float) -> float:
    """Convert Celsius to Fahrenheit."""
    return (celsius * 9/5) + 32`,testCases:[{input:"celsius_to_fahrenheit(0)",expected:"32.0"},{input:"celsius_to_fahrenheit(100)",expected:"212.0"},{input:"celsius_to_fahrenheit(-40)",expected:"-40.0"},{input:"celsius_to_fahrenheit(37)",expected:"98.6"},{input:"celsius_to_fahrenheit(25)",expected:"77.0"}]},{id:"012",number:2,title:"Reverse Converter",description:"Create a function `fahrenheit_to_celsius` that converts Fahrenheit to Celsius using formula: (fahrenheit - 32) * 5/9.",hint:"Subtract 32 first, then multiply by 5/9.",starterCode:`def fahrenheit_to_celsius(fahrenheit: float) -> float:
    # Your code here
    pass`,solutionCode:`def fahrenheit_to_celsius(fahrenheit: float) -> float:
    """Convert Fahrenheit to Celsius."""
    return (fahrenheit - 32) * 5/9`,testCases:[{input:"fahrenheit_to_celsius(32)",expected:"0.0"},{input:"fahrenheit_to_celsius(212)",expected:"100.0"},{input:"fahrenheit_to_celsius(-40)",expected:"-40.0"},{input:"fahrenheit_to_celsius(98.6)",expected:"37.0"},{input:"fahrenheit_to_celsius(68)",expected:"20.0"}]},{id:"013",number:3,title:"Split Bill",description:"Create a function `split_bill` that takes `total` and `num_people`. Return each person's share rounded to 2 decimal places.",hint:"Divide total by num_people. Use round(result, 2).",starterCode:`def split_bill(total: float, num_people: int) -> float:
    # Your code here
    pass`,solutionCode:`def split_bill(total: float, num_people: int) -> float:
    """Split a bill evenly among people."""
    return round(total / num_people, 2)`,testCases:[{input:"split_bill(100, 2)",expected:"50.0"},{input:"split_bill(47.50, 4)",expected:"11.88"},{input:"split_bill(10, 3)",expected:"3.33"},{input:"split_bill(123.45, 5)",expected:"24.69"},{input:"split_bill(75, 6)",expected:"12.5"}]},{id:"014",number:4,title:"Tip Calculator",description:"Create a function `calculate_tip` that takes `bill` and `tip_percent`. Return the tip amount rounded to 2 decimal places.",hint:"Tip = bill * (percent / 100). Round result to 2 decimals.",starterCode:`def calculate_tip(bill: float, tip_percent: int) -> float:
    # Your code here
    pass`,solutionCode:`def calculate_tip(bill: float, tip_percent: int) -> float:
    """Calculate tip amount from bill and percentage."""
    return round(bill * (tip_percent / 100), 2)`,testCases:[{input:"calculate_tip(100, 20)",expected:"20.0"},{input:"calculate_tip(85.50, 20)",expected:"17.1"},{input:"calculate_tip(50, 15)",expected:"7.5"},{input:"calculate_tip(42.50, 18)",expected:"7.65"},{input:"calculate_tip(100, 0)",expected:"0.0"}]},{id:"015",number:5,title:"Unit Converter",description:"Create a function `grams_to_ounces` that converts grams to ounces (1 gram = 0.03527 oz). Round to 2 decimal places.",hint:"Multiply grams by 0.03527. Round to 2 decimals.",starterCode:`def grams_to_ounces(grams: float) -> float:
    # Your code here
    pass`,solutionCode:`def grams_to_ounces(grams: float) -> float:
    """Convert grams to ounces."""
    return round(grams * 0.03527, 2)`,testCases:[{input:"grams_to_ounces(25)",expected:"0.88"},{input:"grams_to_ounces(100)",expected:"3.53"},{input:"grams_to_ounces(0)",expected:"0.0"},{input:"grams_to_ounces(500)",expected:"17.64"},{input:"grams_to_ounces(28.35)",expected:"1.0"}]},{id:"016",number:6,title:"Time Converter",description:"Create a function `minutes_to_seconds` that takes `minutes` and returns the number of seconds.",hint:"Multiply minutes by 60.",starterCode:`def minutes_to_seconds(minutes: int) -> int:
    # Your code here
    pass`,solutionCode:`def minutes_to_seconds(minutes: int) -> int:
    """Convert minutes to seconds."""
    return minutes * 60`,testCases:[{input:"minutes_to_seconds(1)",expected:"60"},{input:"minutes_to_seconds(90)",expected:"5400"},{input:"minutes_to_seconds(0)",expected:"0"},{input:"minutes_to_seconds(45)",expected:"2700"},{input:"minutes_to_seconds(120)",expected:"7200"}]},{id:"017",number:7,title:"Leftovers",description:"Create a function `remaining_samples` that takes `total` and `num_dishes`. Return how many samples are left over after even distribution.",hint:"Use the modulo operator: total % num_dishes.",starterCode:`def remaining_samples(total: int, num_dishes: int) -> int:
    # Your code here
    pass`,solutionCode:`def remaining_samples(total: int, num_dishes: int) -> int:
    """Return leftover samples."""
    return total % num_dishes`,testCases:[{input:"remaining_samples(17, 5)",expected:"2"},{input:"remaining_samples(20, 5)",expected:"0"},{input:"remaining_samples(100, 7)",expected:"2"},{input:"remaining_samples(7, 10)",expected:"7"},{input:"remaining_samples(15, 15)",expected:"0"}]},{id:"018",number:8,title:"Samples Per Dish",description:"Create a function `samples_per_dish` that takes `total` and `num_dishes`. Return how many full samples fit in each dish (integer division).",hint:"Use floor division: total // num_dishes.",starterCode:`def samples_per_dish(total: int, num_dishes: int) -> int:
    # Your code here
    pass`,solutionCode:`def samples_per_dish(total: int, num_dishes: int) -> int:
    """Return whole samples per dish."""
    return total // num_dishes`,testCases:[{input:"samples_per_dish(17, 5)",expected:"3"},{input:"samples_per_dish(20, 5)",expected:"4"},{input:"samples_per_dish(100, 7)",expected:"14"},{input:"samples_per_dish(5, 10)",expected:"0"},{input:"samples_per_dish(25, 5)",expected:"5"}]},{id:"019",number:9,title:"Circle Area",description:"Create a function `circular_area` that takes a `radius` and returns the area (pi * r^2). Use pi = 3.14159. Round to 2 decimal places.",hint:"Area = 3.14159 * (radius ** 2). Round carefully.",starterCode:`def circular_area(radius: float) -> float:
    # Your code here
    pass`,solutionCode:`def circular_area(radius: float) -> float:
    """Calculate area of a circle."""
    pi = 3.14159
    return round(pi * radius ** 2, 2)`,testCases:[{input:"circular_area(5)",expected:"78.54"},{input:"circular_area(1)",expected:"3.14"},{input:"circular_area(10)",expected:"314.16"},{input:"circular_area(0)",expected:"0.0"},{input:"circular_area(2.5)",expected:"19.63"}]},{id:"020",number:10,title:"Compound Interest",description:"Create a function `grant_growth` that calculates compound interest: principal * (1 + rate)^years. Round the result to 2 decimal places. `rate` is a decimal (e.g. 0.05).",hint:"Equation: principal * (1 + rate) ** years.",starterCode:`def grant_growth(principal: float, rate: float, years: int) -> float:
    # Your code here
    pass`,solutionCode:`def grant_growth(principal: float, rate: float, years: int) -> float:
    """Calculate compound growth."""
    return round(principal * (1 + rate) ** years, 2)`,testCases:[{input:"grant_growth(100000, 0.05, 5)",expected:"127628.16"},{input:"grant_growth(50000, 0.03, 10)",expected:"67195.82"},{input:"grant_growth(10000, 0.1, 2)",expected:"12100.0"},{input:"grant_growth(25000, 0, 5)",expected:"25000.0"},{input:"grant_growth(10000, 0.07, 3)",expected:"12250.43"}]}]},{id:"making_decisions",title:"Making Decisions",description:"If, Elif, Else & Comparisons",explanation:`
      <p class="mb-4">Programs make decisions using conditional statements. These let your code take different paths based on conditions.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Comparison Operators</h4>
      <p class="mb-2"><code>==</code> equal, <code>!=</code> not equal, <code><</code> less than, <code>></code> greater than, <code><=</code> less or equal, <code>>=</code> greater or equal</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Logical Operators</h4>
      <p class="mb-2"><code>and</code> both must be true, <code>or</code> either can be true, <code>not</code> inverts</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Early Return Pattern</h4>
      <p class="mb-2">Return as soon as you have an answer - keeps code flat and readable.</p>
    `,exampleCode:`def get_grade(score: int) -> str:
    """Return letter grade for a numeric score."""
    if score >= 90:
        return "A"
    if score >= 80:
        return "B"
    if score >= 70:
        return "C"
    if score >= 60:
        return "D"
    return "F"

def is_adult(age: int) -> bool:
    """Return True if age is 18 or older."""
    return age >= 18`,challenges:[{id:"021",number:1,title:"Check Positive",description:"Create a function `signal_detected` that takes `strength` and returns True if it is greater than 0.",hint:"Return strength > 0.",starterCode:`def signal_detected(strength: float) -> bool:
    # Your code here
    pass`,solutionCode:`def signal_detected(strength: float) -> bool:
    """Check if positive."""
    return strength > 0`,testCases:[{input:"signal_detected(0.5)",expected:"True"},{input:"signal_detected(-0.3)",expected:"False"},{input:"signal_detected(0)",expected:"False"},{input:"signal_detected(100)",expected:"True"},{input:"signal_detected(-50)",expected:"False"}]},{id:"022",number:2,title:"Is Even",description:"Create a function `has_boss` that returns True if `level` is even. Use the modulo operator.",hint:"Even means level % 2 == 0.",starterCode:`def has_boss(level: int) -> bool:
    # Your code here
    pass`,solutionCode:`def has_boss(level: int) -> bool:
    """Check if level is even."""
    return level % 2 == 0`,testCases:[{input:"has_boss(4)",expected:"True"},{input:"has_boss(7)",expected:"False"},{input:"has_boss(0)",expected:"True"},{input:"has_boss(100)",expected:"True"},{input:"has_boss(1)",expected:"False"}]},{id:"023",number:3,title:"Absolute Value",description:"Create a function `magnitude` that returns the absolute value of `n` without using abs(). If n is negative, return -n.",hint:"If n < 0, return -n. Else return n.",starterCode:`def magnitude(n: float) -> float:
    # Your code here
    pass`,solutionCode:`def magnitude(n: float) -> float:
    """Return absolute value manually."""
    if n < 0:
        return -n
    return n`,testCases:[{input:"magnitude(-5)",expected:"5"},{input:"magnitude(10)",expected:"10"},{input:"magnitude(0)",expected:"0"},{input:"magnitude(-100.5)",expected:"100.5"},{input:"magnitude(42)",expected:"42"}]},{id:"024",number:4,title:"Higher Score",description:"Create a function `higher_score` that takes `score_a` and `score_b`. Return the higher score.",hint:"If score_a > score_b, return score_a. Else return score_b.",starterCode:`def higher_score(score_a: int, score_b: int) -> int:
    # Your code here
    pass`,solutionCode:`def higher_score(score_a: int, score_b: int) -> int:
    """Return the higher score."""
    if score_a > score_b:
        return score_a
    return score_b`,testCases:[{input:"higher_score(100, 50)",expected:"100"},{input:"higher_score(25, 75)",expected:"75"},{input:"higher_score(50, 50)",expected:"50"},{input:"higher_score(0, 100)",expected:"100"},{input:"higher_score(999, 1)",expected:"999"}]},{id:"025",number:5,title:"Best of Three",description:"Create a function `best_of_three` that takes three trial results and returns the highest value.",hint:"Use `if` statements to find the maximum.",starterCode:`def best_of_three(trial1: float, trial2: float, trial3: float) -> float:
    # Your code here
    pass`,solutionCode:`def best_of_three(trial1: float, trial2: float, trial3: float) -> float:
    """Return the highest of three."""
    best = trial1
    if trial2 > best:
        best = trial2
    if trial3 > best:
        best = trial3
    return best`,testCases:[{input:"best_of_three(85, 90, 88)",expected:"90"},{input:"best_of_three(100, 50, 75)",expected:"100"},{input:"best_of_three(10, 20, 30)",expected:"30"},{input:"best_of_three(50, 50, 50)",expected:"50"},{input:"best_of_three(-5, -10, -1)",expected:"-1"}]},{id:"026",number:6,title:"Grade Converter",description:"Create a function `result_rating` that returns 'Excellent' (>=90), 'Good' (>=75), 'Acceptable' (>=60), or 'Poor' (<60).",hint:"Check scores from highest to lowest: >= 90, then >= 75, etc.",starterCode:`def result_rating(score: int) -> str:
    # Your code here
    pass`,solutionCode:`def result_rating(score: int) -> str:
    """Convert score to rating."""
    if score >= 90:
        return "Excellent"
    if score >= 75:
        return "Good"
    if score >= 60:
        return "Acceptable"
    return "Poor"`,testCases:[{input:"result_rating(95)",expected:"'Excellent'"},{input:"result_rating(82)",expected:"'Good'"},{input:"result_rating(68)",expected:"'Acceptable'"},{input:"result_rating(45)",expected:"'Poor'"},{input:"result_rating(90)",expected:"'Excellent'"}]},{id:"027",number:7,title:"Divisibility Check",description:"Create a function `protocol_status`. If `count` is divisible by 3 and 5: 'Optimal'. By 3 only: 'Valid'. By 5 only: 'Calibration Needed'. Otherwise: 'Standard'.",hint:"Check 'count % 3 == 0 and count % 5 == 0' first.",starterCode:`def protocol_status(sample_count: int) -> str:
    # Your code here
    pass`,solutionCode:`def protocol_status(sample_count: int) -> str:
    """Determine status based on divisibility."""
    if sample_count % 3 == 0 and sample_count % 5 == 0:
        return "Optimal"
    if sample_count % 3 == 0:
        return "Valid"
    if sample_count % 5 == 0:
        return "Calibration Needed"
    return "Standard"`,testCases:[{input:"protocol_status(15)",expected:"'Optimal'"},{input:"protocol_status(9)",expected:"'Valid'"},{input:"protocol_status(10)",expected:"'Calibration Needed'"},{input:"protocol_status(7)",expected:"'Standard'"},{input:"protocol_status(30)",expected:"'Optimal'"}]},{id:"028",number:8,title:"Registration Fee",description:"Create `registration_fee(type)`. 'student': 50, 'academic': 150, 'industry': 300. Any other type: 200.",hint:"Use if/elif/else to check the type string.",starterCode:`def registration_fee(attendee_type: str) -> int:
    # Your code here
    pass`,solutionCode:`def registration_fee(attendee_type: str) -> int:
    """Return registration fee."""
    if attendee_type == "student":
        return 50
    if attendee_type == "academic":
        return 150
    if attendee_type == "industry":
        return 300
    return 200`,testCases:[{input:"registration_fee('student')",expected:"50"},{input:"registration_fee('academic')",expected:"150"},{input:"registration_fee('industry')",expected:"300"},{input:"registration_fee('other')",expected:"200"},{input:"registration_fee('guest')",expected:"200"}]},{id:"029",number:9,title:"In Range",description:"Create a function `is_normal` that returns True if `value` is between `low` and `high` (inclusive).",hint:"Use chained comparison: low <= value <= high.",starterCode:`def is_normal(value: float, low: float, high: float) -> bool:
    # Your code here
    pass`,solutionCode:`def is_normal(value: float, low: float, high: float) -> bool:
    """Check if value is within range."""
    return low <= value <= high`,testCases:[{input:"is_normal(5, 1, 10)",expected:"True"},{input:"is_normal(0, 1, 10)",expected:"False"},{input:"is_normal(1, 1, 10)",expected:"True"},{input:"is_normal(10, 1, 10)",expected:"True"},{input:"is_normal(15, 1, 10)",expected:"False"}]},{id:"030",number:10,title:"Smart Dosage",description:"Create `calculate_dosage(weight, age)`. If weight < 10, return 'Consult specialist'. Otherwise base dose is weight * 5. If age < 12 or > 65, reduce base dose by 25%. Return formatted string 'Xmg' (1 decimal).",hint:"Handle weight < 10 first. Then calc base. Then check age modifiers. Finally return f-string.",starterCode:`def calculate_dosage(weight_kg: float, age: int) -> str:
    # Your code here
    pass`,solutionCode:`def calculate_dosage(weight_kg: float, age: int) -> str:
    """Calculate dosage with age adjustment."""
    if weight_kg < 10:
        return "Consult specialist"
    
    dose = weight_kg * 5
    
    if age < 12 or age > 65:
        dose = dose * 0.75
    
    return f"{round(dose, 1)}mg"`,testCases:[{input:"calculate_dosage(70, 30)",expected:"'350.0mg'"},{input:"calculate_dosage(70, 10)",expected:"'262.5mg'"},{input:"calculate_dosage(70, 70)",expected:"'262.5mg'"},{input:"calculate_dosage(8, 5)",expected:"'Consult specialist'"},{input:"calculate_dosage(50, 40)",expected:"'250.0mg'"}]}]},{id:"text_basics",title:"Text Processing Basics",description:"String Methods & Formatting",explanation:`
      <p class="mb-4">Strings are sequences of characters. Python provides powerful built-in methods for working with text.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Common String Methods</h4>
      <p class="mb-2"><code>.upper()</code>, <code>.lower()</code>, <code>.strip()</code>, <code>.replace()</code>, <code>.split()</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">String Properties</h4>
      <p class="mb-2"><code>len(s)</code> for length, <code>in</code> to check containment, indexing with <code>s[0]</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">f-Strings</h4>
      <p class="mb-2">f-strings embed expressions: <code>f"Hello {name}, you are {age} years old"</code></p>
    `,exampleCode:`def shout(text: str) -> str:
    """Return text in uppercase with exclamation."""
    return f"{text.upper()}!"

def clean_input(text: str) -> str:
    """Remove whitespace and convert to lowercase."""
    return text.strip().lower()

def get_initials(full_name: str) -> str:
    """Return initials from a full name."""
    parts = full_name.split()
    initials = ""
    for part in parts:
        initials += part[0].upper()
    return initials`,challenges:[{id:"033",number:1,title:"Uppercase Converter",description:"Create a function `alert_message` that takes a `message` string and returns it in all uppercase letters.",hint:"Use `message.upper()`.",starterCode:`def alert_message(message: str) -> str:
    # Your code here
    pass`,solutionCode:`def alert_message(message: str) -> str:
    """Convert message to uppercase."""
    return message.upper()`,testCases:[{input:"alert_message('warning')",expected:"'WARNING'"},{input:"alert_message('System Error')",expected:"'SYSTEM ERROR'"},{input:"alert_message('check results')",expected:"'CHECK RESULTS'"},{input:"alert_message('a')",expected:"'A'"},{input:"alert_message('')",expected:"''"}]},{id:"034",number:2,title:"Lowercase Converter",description:"Create a function `normalize_username` that takes a `username` string and returns it in all lowercase letters.",hint:"Use `username.lower()`.",starterCode:`def normalize_username(username: str) -> str:
    # Your code here
    pass`,solutionCode:`def normalize_username(username: str) -> str:
    """Convert username to lowercase."""
    return username.lower()`,testCases:[{input:"normalize_username('DrNeural')",expected:"'drneural'"},{input:"normalize_username('ADMIN')",expected:"'admin'"},{input:"normalize_username('User123')",expected:"'user123'"},{input:"normalize_username('test')",expected:"'test'"},{input:"normalize_username('ABC')",expected:"'abc'"}]},{id:"035",number:3,title:"String Length",description:"Create a function `password_length` that returns the number of characters in a `password` string.",hint:"Use `len(password)`.",starterCode:`def password_length(password: str) -> int:
    # Your code here
    pass`,solutionCode:`def password_length(password: str) -> int:
    """Return the length of a password."""
    return len(password)`,testCases:[{input:"password_length('secret123')",expected:"9"},{input:"password_length('')",expected:"0"},{input:"password_length('a')",expected:"1"},{input:"password_length('MySecureP@ss!')",expected:"13"},{input:"password_length('12345678')",expected:"8"}]},{id:"036",number:4,title:"First Letter",description:"Create a function `first_initial` that returns the first character of `name`.",hint:"Access index 0: `name[0]`.",starterCode:`def first_initial(name: str) -> str:
    # Your code here
    pass`,solutionCode:`def first_initial(name: str) -> str:
    """Return the first character of a name."""
    return name[0]`,testCases:[{input:"first_initial('Alice')",expected:"'A'"},{input:"first_initial('bob')",expected:"'b'"},{input:"first_initial('Neuroscience')",expected:"'N'"},{input:"first_initial('123')",expected:"'1'"},{input:"first_initial('X')",expected:"'X'"}]},{id:"037",number:5,title:"Last Letter",description:"Create a function `last_character` that returns the last character of `text`.",hint:"Use negative indexing: `text[-1]`.",starterCode:`def last_character(text: str) -> str:
    # Your code here
    pass`,solutionCode:`def last_character(text: str) -> str:
    """Return the last character of text."""
    return text[-1]`,testCases:[{input:"last_character('data.csv')",expected:"'v'"},{input:"last_character('report')",expected:"'t'"},{input:"last_character('x')",expected:"'x'"},{input:"last_character('test123')",expected:"'3'"},{input:"last_character('Hello!')",expected:"'!'"}]},{id:"038",number:6,title:"Contains Keyword",description:"Create a function `contains_keyword` that takes `text` and `keyword`. Return True if the keyword is found inside the text.",hint:"Use the `in` operator: `keyword in text`.",starterCode:`def contains_keyword(text: str, keyword: str) -> bool:
    # Your code here
    pass`,solutionCode:`def contains_keyword(text: str, keyword: str) -> bool:
    """Check if keyword is in text."""
    return keyword in text`,testCases:[{input:"contains_keyword('neural networks are powerful', 'neural')",expected:"True"},{input:"contains_keyword('machine learning', 'deep')",expected:"False"},{input:"contains_keyword('data science', 'data')",expected:"True"},{input:"contains_keyword('Python programming', 'python')",expected:"False"},{input:"contains_keyword('AI research', 'AI')",expected:"True"}]},{id:"039",number:7,title:"Clean Input",description:"Create a function `clean_input` that strips whitespace from `text` and converts it to lowercase.",hint:"Use `.strip()` then `.lower()`.",starterCode:`def clean_input(text: str) -> str:
    # Your code here
    pass`,solutionCode:`def clean_input(text: str) -> str:
    """Strip whitespace and convert to lowercase."""
    return text.strip().lower()`,testCases:[{input:"clean_input('  Hello  ')",expected:"'hello'"},{input:"clean_input('  EXPERIMENT  ')",expected:"'experiment'"},{input:"clean_input('Data')",expected:"'data'"},{input:"clean_input('   test   ')",expected:"'test'"},{input:"clean_input('already clean')",expected:"'already clean'"}]},{id:"040",number:8,title:"Repeat String",description:"Create a function `amplify_sequence` that repeats a `sequence` string `cycles` times.",hint:"Mulitply the string by the number: `sequence * cycles`.",starterCode:`def amplify_sequence(sequence: str, cycles: int) -> str:
    # Your code here
    pass`,solutionCode:`def amplify_sequence(sequence: str, cycles: int) -> str:
    """Repeat a DNA sequence multiple times."""
    return sequence * cycles`,testCases:[{input:"amplify_sequence('ATG', 3)",expected:"'ATGATGATG'"},{input:"amplify_sequence('GC', 4)",expected:"'GCGCGCGC'"},{input:"amplify_sequence('A', 5)",expected:"'AAAAA'"},{input:"amplify_sequence('TATA', 0)",expected:"''"},{input:"amplify_sequence('CAT', 2)",expected:"'CATCAT'"}]},{id:"041",number:9,title:"Replace Spaces",description:"Create a function `sanitize_filename` that replaces all spaces in `filename` with underscores.",hint:"Use `filename.replace(' ', '_')`.",starterCode:`def sanitize_filename(filename: str) -> str:
    # Your code here
    pass`,solutionCode:`def sanitize_filename(filename: str) -> str:
    """Replace spaces with underscores in filenames."""
    return filename.replace(" ", "_")`,testCases:[{input:"sanitize_filename('my file name')",expected:"'my_file_name'"},{input:"sanitize_filename('brain scan 001')",expected:"'brain_scan_001'"},{input:"sanitize_filename('noSpaces')",expected:"'noSpaces'"},{input:"sanitize_filename('a b c d')",expected:"'a_b_c_d'"},{input:"sanitize_filename(' leading')",expected:"'_leading'"}]},{id:"042",number:10,title:"Generate User ID",description:"Create a function `generate_user_id` that takes `first_name`, `last_name`, and `year`. Return a string in the format 'FIRST_LAST_YEAR'. Ensure names are uppercase and spaces are stripped.",hint:"Use `strip()`, `upper()`, and f-string formatting.",starterCode:`def generate_user_id(first_name: str, last_name: str, year: int) -> str:
    # Your code here
    pass`,solutionCode:`def generate_user_id(first_name: str, last_name: str, year: int) -> str:
    """Generate standardized user ID."""
    first = first_name.strip().upper()
    last = last_name.strip().upper()
    return f"{first}_{last}_{year}"`,testCases:[{input:"generate_user_id('John', 'Doe', 2024)",expected:"'JOHN_DOE_2024'"},{input:"generate_user_id('  Sarah ', 'Smith', 1999)",expected:"'SARAH_SMITH_1999'"},{input:"generate_user_id('alice', 'jones', 2000)",expected:"'ALICE_JONES_2000'"},{input:"generate_user_id('dr', 'who', 1963)",expected:"'DR_WHO_1963'"},{input:"generate_user_id(' Ai ', ' Bot ', 2050)",expected:"'AI_BOT_2050'"}]}]},{id:"for_loops",title:"For Loops",description:"Iterating with Range and Sequences",explanation:`
      <p class="mb-4">For loops repeat code a specific number of times or iterate through items in a sequence.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">range() Function</h4>
      <p class="mb-2"><code>range(stop)</code> - 0 to stop-1<br><code>range(start, stop)</code> - start to stop-1<br><code>range(start, stop, step)</code> - with custom step</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Iterating Strings</h4>
      <p class="mb-2"><code>for char in text:</code> loops through each character</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Accumulator Pattern</h4>
      <p class="mb-2">Start with initial value, update in each iteration, return final result.</p>
    `,exampleCode:`def sum_to_n(n: int) -> int:
    """Return sum of numbers from 1 to n."""
    total = 0
    for i in range(1, n + 1):
        total += i
    return total

def count_char(text: str, target: str) -> int:
    """Count occurrences of target character in text."""
    count = 0
    for char in text:
        if char == target:
            count += 1
    return count`,challenges:[{id:"043",number:1,title:"Sum N",description:"Create a function `total_score` that returns the sum of all integers from 1 to `n`.",hint:"Loop from 1 to n+1 and add to a total.",starterCode:`def total_score(n: int) -> int:
    # Your code here
    pass`,solutionCode:`def total_score(n: int) -> int:
    """Sum all integers from 1 to n."""
    total = 0
    for i in range(1, n + 1):
        total += i
    return total`,testCases:[{input:"total_score(5)",expected:"15"},{input:"total_score(1)",expected:"1"},{input:"total_score(10)",expected:"55"},{input:"total_score(100)",expected:"5050"},{input:"total_score(3)",expected:"6"}]},{id:"044",number:2,title:"Factorial",description:"Create a function `factorial` that returns `n!`. If n is 0, return 1.",hint:"Start with result = 1. Loop and multiply.",starterCode:`def factorial(n: int) -> int:
    # Your code here
    pass`,solutionCode:`def factorial(n: int) -> int:
    """Calculate n factorial."""
    if n == 0:
        return 1
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result`,testCases:[{input:"factorial(5)",expected:"120"},{input:"factorial(3)",expected:"6"},{input:"factorial(0)",expected:"1"},{input:"factorial(1)",expected:"1"},{input:"factorial(7)",expected:"5040"}]},{id:"045",number:3,title:"Count Char",description:"Create a function `count_base` that counts the occurrences of `base` in `sequence`.",hint:"Loop through sequence and check if char == base.",starterCode:`def count_base(sequence: str, base: str) -> int:
    # Your code here
    pass`,solutionCode:`def count_base(sequence: str, base: str) -> int:
    """Count occurrences of base in DNA sequence."""
    count = 0
    for nucleotide in sequence:
        if nucleotide == base:
            count += 1
    return count`,testCases:[{input:"count_base('ATGCATGC', 'A')",expected:"2"},{input:"count_base('GGGGGG', 'G')",expected:"6"},{input:"count_base('ATCG', 'T')",expected:"1"},{input:"count_base('CCCC', 'A')",expected:"0"},{input:"count_base('AAAAAA', 'A')",expected:"6"}]},{id:"046",number:4,title:"Count Vowels",description:"Create a function `count_vowels` that counts vowels ('aeiou') in `text` (case-insensitive).",hint:"Check if `char` in 'aeiouAEIOU'.",starterCode:`def count_vowels(text: str) -> int:
    # Your code here
    pass`,solutionCode:`def count_vowels(text: str) -> int:
    """Count vowels in text (case insensitive)."""
    vowels = "aeiouAEIOU"
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    return count`,testCases:[{input:"count_vowels('neuroscience')",expected:"6"},{input:"count_vowels('AEIOU')",expected:"5"},{input:"count_vowels('xyz')",expected:"0"},{input:"count_vowels('Python')",expected:"1"},{input:"count_vowels('')",expected:"0"}]},{id:"047",number:5,title:"Power Loop",description:"Create a function `exponential` that calculates `base`^`exponent` using a loop (no `**` operator).",hint:"Initialize `result = 1` and multiply by `base` `exponent` times.",starterCode:`def exponential(base: int, exponent: int) -> int:
    # Your code here
    pass`,solutionCode:`def exponential(base: int, exponent: int) -> int:
    """Calculate base to the power of exponent using a loop."""
    result = 1
    for _ in range(exponent):
        result *= base
    return result`,testCases:[{input:"exponential(2, 10)",expected:"1024"},{input:"exponential(3, 4)",expected:"81"},{input:"exponential(5, 0)",expected:"1"},{input:"exponential(10, 3)",expected:"1000"},{input:"exponential(2, 8)",expected:"256"}]},{id:"048",number:6,title:"Reverse Loop",description:"Create a function `reverse_sequence` that returns the reversed string using a loop.",hint:"Prepend chars: `result = char + result`.",starterCode:`def reverse_sequence(text: str) -> str:
    # Your code here
    pass`,solutionCode:`def reverse_sequence(text: str) -> str:
    """Reverse a string using a loop."""
    result = ""
    for char in text:
        result = char + result
    return result`,testCases:[{input:"reverse_sequence('ATGC')",expected:"'CGTA'"},{input:"reverse_sequence('neural')",expected:"'laruen'"},{input:"reverse_sequence('a')",expected:"'a'"},{input:"reverse_sequence('12345')",expected:"'54321'"},{input:"reverse_sequence('')",expected:"''"}]},{id:"049",number:7,title:"Sum Evens",description:"Create a function `sum_even_samples` that sums even numbers from 2 to `n` (inclusive).",hint:"Use `range(2, n + 1, 2)`.",starterCode:`def sum_even_samples(n: int) -> int:
    # Your code here
    pass`,solutionCode:`def sum_even_samples(n: int) -> int:
    """Sum all even numbers from 2 to n."""
    total = 0
    for i in range(2, n + 1, 2):
        total += i
    return total`,testCases:[{input:"sum_even_samples(10)",expected:"30"},{input:"sum_even_samples(6)",expected:"12"},{input:"sum_even_samples(2)",expected:"2"},{input:"sum_even_samples(100)",expected:"2550"},{input:"sum_even_samples(1)",expected:"0"}]},{id:"050",number:8,title:"Digit Product",description:"Create a function `digit_product` that returns the product of all digits in `n`.",hint:"Convert `n` to string, loop through digits, convert back to int and multiply.",starterCode:`def digit_product(n: int) -> int:
    # Your code here
    pass`,solutionCode:`def digit_product(n: int) -> int:
    """Multiply all digits of a number."""
    result = 1
    for digit in str(n):
        result *= int(digit)
    return result`,testCases:[{input:"digit_product(234)",expected:"24"},{input:"digit_product(111)",expected:"1"},{input:"digit_product(502)",expected:"0"},{input:"digit_product(99)",expected:"81"},{input:"digit_product(5)",expected:"5"}]},{id:"051",number:9,title:"Word Count",description:"Create a function `word_count` that returns the number of words in `sentence`.",hint:"Use `sentence.split()`.",starterCode:`def word_count(sentence: str) -> int:
    # Your code here
    pass`,solutionCode:`def word_count(sentence: str) -> int:
    """Count words in a sentence."""
    if not sentence.strip():
        return 0
    return len(sentence.split())`,testCases:[{input:"word_count('neural network analysis')",expected:"3"},{input:"word_count('hello')",expected:"1"},{input:"word_count('')",expected:"0"},{input:"word_count('one two three four five')",expected:"5"},{input:"word_count('   ')",expected:"0"}]},{id:"052",number:10,title:"Pattern Generator",description:"Create a function `pattern_generator` that returns a string containing `character` repeated `n` times, then `n-1` times, down to 1 time, separated by newlines.",hint:"Loop range(n, 0, -1). Accumulate `character * i` + '\\n'. Strip trailing newline.",starterCode:`def pattern_generator(character: str, n: int) -> str:
    # Your code here
    pass`,solutionCode:`def pattern_generator(character: str, n: int) -> str:
    """Generate a descending pattern."""
    result = ""
    for i in range(n, 0, -1):
        result += (character * i)
        if i > 1:
            result += "\\n"
    return result`,testCases:[{input:"pattern_generator('*', 3)",expected:"'***\\n**\\n*'"},{input:"pattern_generator('#', 1)",expected:"'#'"},{input:"pattern_generator('A', 4)",expected:"'AAAA\\nAAA\\nAA\\nA'"},{input:"pattern_generator('!', 2)",expected:"'!!\\n!'"},{input:"pattern_generator('x', 5)",expected:"'xxxxx\\nxxxx\\nxxx\\nxx\\nx'"}]}]},{id:"while_loops",title:"While Loops & Validation",description:"Condition-Based Iteration",explanation:`
      <p class="mb-4">While loops continue until a condition becomes False. They're useful when you don't know exactly how many iterations you need.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Basic While Loop</h4>
      <p class="mb-2"><code>while condition:</code> - continues as long as condition is True</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Avoid Infinite Loops</h4>
      <p class="mb-2">Always ensure the condition will eventually become False!</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Common Patterns</h4>
      <p class="mb-2">Counting down, processing until a condition is met, number manipulation.</p>
    `,exampleCode:`def count_digits(n: int) -> int:
    """Count how many digits in a number."""
    if n == 0:
        return 1
    count = 0
    n = abs(n)
    while n > 0:
        count += 1
        n //= 10
    return count

def collatz_steps(n: int) -> int:
    """Count steps until n reaches 1 using Collatz sequence."""
    steps = 0
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        steps += 1
    return steps`,challenges:[{id:"053",number:1,title:"Count Digits",description:"Create a function `digit_count` that returns the number of digits in `n`.",hint:"While `n > 0`, divide `n` by 10 and increment count. If `n` is 0, count is 1.",starterCode:`def digit_count(n: int) -> int:
    # Your code here
    pass`,solutionCode:`def digit_count(n: int) -> int:
    """Count digits in a number."""
    if n == 0:
        return 1
    count = 0
    n = abs(n)
    while n > 0:
        count += 1
        n //= 10
    return count`,testCases:[{input:"digit_count(12345)",expected:"5"},{input:"digit_count(7)",expected:"1"},{input:"digit_count(0)",expected:"1"},{input:"digit_count(1000)",expected:"4"},{input:"digit_count(99)",expected:"2"}]},{id:"054",number:2,title:"Sum Digits",description:"Create a function `digit_sum` that returns the sum of all digits in `n`.",hint:"Use `n % 10` to get the last digit and `n //= 10` to remove it.",starterCode:`def digit_sum(n: int) -> int:
    # Your code here
    pass`,solutionCode:`def digit_sum(n: int) -> int:
    """Sum all digits of a number."""
    total = 0
    n = abs(n)
    while n > 0:
        total += n % 10
        n //= 10
    return total`,testCases:[{input:"digit_sum(123)",expected:"6"},{input:"digit_sum(9999)",expected:"36"},{input:"digit_sum(101)",expected:"2"},{input:"digit_sum(5)",expected:"5"},{input:"digit_sum(0)",expected:"0"}]},{id:"055",number:3,title:"Reverse Number",description:"Create a function `reverse_number` that returns `n` with its digits reversed.",hint:"Multiply result by 10 and add the last digit of n.",starterCode:`def reverse_number(n: int) -> int:
    # Your code here
    pass`,solutionCode:`def reverse_number(n: int) -> int:
    """Reverse the digits of a number."""
    reversed_n = 0
    while n > 0:
        reversed_n = reversed_n * 10 + (n % 10)
        n //= 10
    return reversed_n`,testCases:[{input:"reverse_number(1234)",expected:"4321"},{input:"reverse_number(100)",expected:"1"},{input:"reverse_number(5)",expected:"5"},{input:"reverse_number(9876)",expected:"6789"},{input:"reverse_number(12)",expected:"21"}]},{id:"056",number:4,title:"Palindrome Number",description:"Create a function `is_palindrome` that returns True if the integer `n` is a palindrome (reads same forwards and backwards).",hint:"Compare `n` with its reversed version.",starterCode:`def is_palindrome(n: int) -> bool:
    # Your code here
    pass`,solutionCode:`def is_palindrome(n: int) -> bool:
    """Check if number is a palindrome."""
    original = n
    reversed_n = 0
    while n > 0:
        reversed_n = reversed_n * 10 + (n % 10)
        n //= 10
    return original == reversed_n`,testCases:[{input:"is_palindrome(12321)",expected:"True"},{input:"is_palindrome(12345)",expected:"False"},{input:"is_palindrome(7)",expected:"True"},{input:"is_palindrome(11)",expected:"True"},{input:"is_palindrome(10)",expected:"False"}]},{id:"057",number:5,title:"GCD",description:"Create a function `find_gcd` that returns the Greatest Common Divisor of `a` and `b`.",hint:"Use Euclid's algorithm: while b != 0, (a, b) = (b, a % b).",starterCode:`def find_gcd(a: int, b: int) -> int:
    # Your code here
    pass`,solutionCode:`def find_gcd(a: int, b: int) -> int:
    """Find GCD using Euclid's algorithm."""
    while b != 0:
        a, b = b, a % b
    return a`,testCases:[{input:"find_gcd(48, 18)",expected:"6"},{input:"find_gcd(100, 25)",expected:"25"},{input:"find_gcd(17, 13)",expected:"1"},{input:"find_gcd(24, 36)",expected:"12"},{input:"find_gcd(7, 7)",expected:"7"}]},{id:"058",number:6,title:"Collatz Steps",description:"Create a function `collatz_steps` that returns the number of steps to reach 1. (If even, divide by 2; if odd, 3n+1).",hint:"While n != 1, update n and increment steps.",starterCode:`def collatz_steps(n: int) -> int:
    # Your code here
    pass`,solutionCode:`def collatz_steps(n: int) -> int:
    """Count Collatz sequence steps to reach 1."""
    steps = 0
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        steps += 1
    return steps`,testCases:[{input:"collatz_steps(1)",expected:"0"},{input:"collatz_steps(2)",expected:"1"},{input:"collatz_steps(10)",expected:"6"},{input:"collatz_steps(27)",expected:"111"},{input:"collatz_steps(6)",expected:"8"}]},{id:"059",number:7,title:"Is Prime",description:"Create a function `is_prime` that returns True if `n` is a prime number (divisible only by 1 and itself).",hint:"Check divisibility from 2 up to sqrt(n).",starterCode:`def is_prime(n: int) -> bool:
    # Your code here
    pass`,solutionCode:`def is_prime(n: int) -> bool:
    """Check if number is prime."""
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    i = 3
    while i * i <= n:
        if n % i == 0:
            return False
        i += 2
    return True`,testCases:[{input:"is_prime(17)",expected:"True"},{input:"is_prime(4)",expected:"False"},{input:"is_prime(2)",expected:"True"},{input:"is_prime(1)",expected:"False"},{input:"is_prime(97)",expected:"True"}]},{id:"060",number:8,title:"Next Prime",description:"Create a function `next_prime` that returns the smallest prime number greater than `n`.",hint:"Start at n+1 and increment until you find a prime.",starterCode:`def next_prime(n: int) -> int:
    # Your code here
    pass`,solutionCode:`def next_prime(n: int) -> int:
    """Find the next prime number after n."""
    def is_prime(num):
        if num < 2:
            return False
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                return False
        return True
    
    candidate = n + 1
    while not is_prime(candidate):
        candidate += 1
    return candidate`,testCases:[{input:"next_prime(10)",expected:"11"},{input:"next_prime(2)",expected:"3"},{input:"next_prime(13)",expected:"17"},{input:"next_prime(100)",expected:"101"},{input:"next_prime(0)",expected:"2"}]},{id:"061",number:9,title:"Digital Root",description:"Create a function `digital_root` that repeatedly sums the digits of `n` until a single digit remains.",hint:"Use nested loops: while n >= 10, sum its digits.",starterCode:`def digital_root(n: int) -> int:
    # Your code here
    pass`,solutionCode:`def digital_root(n: int) -> int:
    """Keep summing digits until single digit remains."""
    while n >= 10:
        total = 0
        while n > 0:
            total += n % 10
            n //= 10
        n = total
    return n`,testCases:[{input:"digital_root(9875)",expected:"2"},{input:"digital_root(16)",expected:"7"},{input:"digital_root(9)",expected:"9"},{input:"digital_root(12345)",expected:"6"},{input:"digital_root(999)",expected:"9"}]},{id:"062",number:10,title:"Decimal to Binary",description:"Create a function `to_binary` that converts a positive integer `n` to its binary string representation (without using `bin()`).",hint:"While n > 0: `bit = n % 2`, `result = str(bit) + result`, `n //= 2`. Handle n=0 case.",starterCode:`def to_binary(n: int) -> str:
    # Your code here
    pass`,solutionCode:`def to_binary(n: int) -> str:
    """Convert integer to binary string."""
    if n == 0:
        return "0"
    result = ""
    while n > 0:
        bit = n % 2
        result = str(bit) + result
        n //= 2
    return result`,testCases:[{input:"to_binary(10)",expected:"'1010'"},{input:"to_binary(0)",expected:"'0'"},{input:"to_binary(255)",expected:"'11111111'"},{input:"to_binary(1)",expected:"'1'"},{input:"to_binary(16)",expected:"'10000'"}]}]},{id:"lists_basics",title:"Lists: The Basics",description:"Creating and Accessing Lists",explanation:`
      <p class="mb-4">Lists store ordered collections of items. They're one of Python's most versatile data structures.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Creating Lists</h4>
      <p class="mb-2"><code>nums = [1, 2, 3]</code> or <code>empty = []</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Accessing Elements</h4>
      <p class="mb-2"><code>nums[0]</code> first element, <code>nums[-1]</code> last element</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Common Operations</h4>
      <p class="mb-2"><code>len()</code>, <code>in</code>, <code>.append()</code>, <code>.pop()</code></p>
    `,exampleCode:`def sum_list(numbers: list) -> int:
    """Return the sum of all numbers in the list."""
    total = 0
    for num in numbers:
        total += num
    return total

def find_max(numbers: list) -> int:
    """Find the largest number in a list."""
    if not numbers:
        return None
    largest = numbers[0]
    for num in numbers:
        if num > largest:
            largest = num
    return largest`,challenges:[{id:"063",number:1,title:"Sum List",description:"Create a function `sum_list` that returns the sum of all numbers in the list (without using `sum()`).",hint:"Initialize `total = 0`. Loop and add each number.",starterCode:`def sum_list(numbers: list) -> float:
    # Your code here
    pass`,solutionCode:`def sum_list(numbers: list) -> float:
    """Sum all numbers in a list."""
    total = 0
    for num in numbers:
        total += num
    return total`,testCases:[{input:"sum_list([1, 2, 3])",expected:"6"},{input:"sum_list([10, 20])",expected:"30"},{input:"sum_list([])",expected:"0"},{input:"sum_list([5])",expected:"5"},{input:"sum_list([-1, 1])",expected:"0"}]},{id:"064",number:2,title:"Average",description:"Create a function `average` that returns the arithmetic mean of numbers in the list. Check for empty list.",hint:"Sum divided by length. Return 0 if empty.",starterCode:`def average(numbers: list) -> float:
    # Your code here
    pass`,solutionCode:`def average(numbers: list) -> float:
    """Calculate average of numbers in a list."""
    if not numbers:
        return 0
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)`,testCases:[{input:"average([1, 2, 3])",expected:"2.0"},{input:"average([10, 20])",expected:"15.0"},{input:"average([])",expected:"0"},{input:"average([5, 5, 5, 5])",expected:"5.0"},{input:"average([0, 10])",expected:"5.0"}]},{id:"065",number:3,title:"Find Max",description:"Create a function `find_max` that returns the largest number in the list (without using `max()`).",hint:"Initialize `largest` with first element, loop and update if larger found.",starterCode:`def find_max(numbers: list) -> float:
    # Your code here
    pass`,solutionCode:`def find_max(numbers: list) -> float:
    """Find the maximum value in a list."""
    if not numbers:
        return None
    largest = numbers[0]
    for num in numbers:
        if num > largest:
            largest = num
    return largest`,testCases:[{input:"find_max([1, 5, 3])",expected:"5"},{input:"find_max([10, 2, 8])",expected:"10"},{input:"find_max([-5, -1, -10])",expected:"-1"},{input:"find_max([7, 7, 7])",expected:"7"},{input:"find_max([42])",expected:"42"}]},{id:"066",number:4,title:"Find Min",description:"Create a function `find_min` that returns the smallest number in the list (without using `min()`).",hint:"Initialize `smallest` with first element, loop and update if smaller found.",starterCode:`def find_min(numbers: list) -> float:
    # Your code here
    pass`,solutionCode:`def find_min(numbers: list) -> float:
    """Find the minimum value in a list."""
    if not numbers:
        return None
    smallest = numbers[0]
    for num in numbers:
        if num < smallest:
            smallest = num
    return smallest`,testCases:[{input:"find_min([1, 5, 3])",expected:"1"},{input:"find_min([10, 2, 8])",expected:"2"},{input:"find_min([-5, -1, -10])",expected:"-10"},{input:"find_min([7, 7, 7])",expected:"7"},{input:"find_min([42])",expected:"42"}]},{id:"067",number:5,title:"Count Occurrences",description:"Create a function `count_item` that returns how many times `target` appears in `items`.",hint:"Loop and increment counter when match found.",starterCode:`def count_item(items: list, target) -> int:
    # Your code here
    pass`,solutionCode:`def count_item(items: list, target) -> int:
    """Count occurrences of target in list."""
    count = 0
    for item in items:
        if item == target:
            count += 1
    return count`,testCases:[{input:"count_item([1, 2, 2, 3], 2)",expected:"2"},{input:"count_item(['a', 'b', 'a'], 'a')",expected:"2"},{input:"count_item([1, 2, 3], 4)",expected:"0"},{input:"count_item([], 5)",expected:"0"},{input:"count_item([7, 7, 7, 7], 7)",expected:"4"}]},{id:"068",number:6,title:"First and Last",description:"Create a function `first_and_last` that returns a list containing only the first and last elements.",hint:"Return `[items[0], items[-1]]`.",starterCode:`def first_and_last(items: list) -> list:
    # Your code here
    pass`,solutionCode:`def first_and_last(items: list) -> list:
    """Return first and last elements of a list."""
    if len(items) < 2:
        return items.copy()
    return [items[0], items[-1]]`,testCases:[{input:"first_and_last([1, 2, 3, 4])",expected:"[1, 4]"},{input:"first_and_last([1])",expected:"[1]"},{input:"first_and_last(['a', 'b'])",expected:"['a', 'b']"},{input:"first_and_last([])",expected:"[]"},{input:"first_and_last([5, 10, 15])",expected:"[5, 15]"}]},{id:"069",number:7,title:"Reverse List",description:"Create a function `reverse_list` that returns a new list with elements in reverse order (without using `.reverse()` or `[::-1]`).",hint:"Iterate backwards from `len(items)-1` to 0.",starterCode:`def reverse_list(items: list) -> list:
    # Your code here
    pass`,solutionCode:`def reverse_list(items: list) -> list:
    """Reverse a list without built-in methods."""
    result = []
    for i in range(len(items) - 1, -1, -1):
        result.append(items[i])
    return result`,testCases:[{input:"reverse_list([1, 2, 3])",expected:"[3, 2, 1]"},{input:"reverse_list(['a', 'b'])",expected:"['b', 'a']"},{input:"reverse_list([])",expected:"[]"},{input:"reverse_list([42])",expected:"[42]"},{input:"reverse_list([1, 2, 3, 4, 5])",expected:"[5, 4, 3, 2, 1]"}]},{id:"070",number:8,title:"Contains",description:"Create a function `contains` that returns True if `target` is in `items` (without using `in`).",hint:"Loop and return True if match found.",starterCode:`def contains(items: list, target) -> bool:
    # Your code here
    pass`,solutionCode:`def contains(items: list, target) -> bool:
    """Check if target is in list without using 'in'."""
    for item in items:
        if item == target:
            return True
    return False`,testCases:[{input:"contains([1, 2, 3], 2)",expected:"True"},{input:"contains(['a', 'b'], 'z')",expected:"False"},{input:"contains([], 1)",expected:"False"},{input:"contains([5, 5, 5], 5)",expected:"True"},{input:"contains(['hello', 'world'], 'world')",expected:"True"}]},{id:"071",number:9,title:"Find Index",description:"Create a function `find_index` that returns the index of the first occurrence of `target` (or -1 if not found).",hint:"Use `range(len(items))`.",starterCode:`def find_index(items: list, target) -> int:
    # Your code here
    pass`,solutionCode:`def find_index(items: list, target) -> int:
    """Find index of first occurrence of target."""
    for i in range(len(items)):
        if items[i] == target:
            return i
    return -1`,testCases:[{input:"find_index([10, 20, 30], 20)",expected:"1"},{input:"find_index(['a', 'b', 'c'], 'c')",expected:"2"},{input:"find_index([1, 2], 3)",expected:"-1"},{input:"find_index([5, 5, 5], 5)",expected:"0"},{input:"find_index([], 1)",expected:"-1"}]},{id:"072",number:10,title:"All Positive",description:"Create a function `all_positive` that returns True if all numbers in the list are positive (> 0). Empty list returns True.",hint:"If list is empty, return True. Return False if any number is <= 0.",starterCode:`def all_positive(numbers: list) -> bool:
    # Your code here
    pass`,solutionCode:`def all_positive(numbers: list) -> bool:
    """Check if all numbers are positive."""
    for num in numbers:
        if num <= 0:
            return False
    return True`,testCases:[{input:"all_positive([1, 2, 3])",expected:"True"},{input:"all_positive([1, -2, 3])",expected:"False"},{input:"all_positive([])",expected:"True"},{input:"all_positive([0])",expected:"False"},{input:"all_positive([0.001, 0.002])",expected:"True"}]}]},{id:"lists_transformation",title:"Transforming Lists",description:"Filtering, Mapping & Building New Lists",explanation:`
      <p class="mb-4">Often we need to create new lists based on existing ones - filtering items, transforming values, or combining data.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Filter Pattern</h4>
      <p class="mb-2">Create empty list, loop through original, add items that meet condition.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Map Pattern</h4>
      <p class="mb-2">Create empty list, loop through original, add transformed version of each item.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Slicing</h4>
      <p class="mb-2"><code>items[start:end]</code> - elements from start to end-1</p>
    `,exampleCode:`def filter_positive(numbers: list) -> list:
    """Return only positive numbers from the list."""
    result = []
    for num in numbers:
        if num > 0:
            result.append(num)
    return result

def double_all(numbers: list) -> list:
    """Return a new list with all numbers doubled."""
    result = []
    for num in numbers:
        result.append(num * 2)
    return result`,challenges:[{id:"073",number:1,title:"Filter Positive",description:"Create a function `filter_positive` that returns a new list containing only the positive numbers (greater than 0) from the input list.",hint:"Create result list. Loop through numbers, if num > 0, append to result.",starterCode:`def filter_positive(numbers: list) -> list:
    # Your code here
    pass`,solutionCode:`def filter_positive(numbers: list) -> list:
    """Filter to only positive numbers."""
    result = []
    for num in numbers:
        if num > 0:
            result.append(num)
    return result`,testCases:[{input:"filter_positive([1, -1, 2, -2])",expected:"[1, 2]"},{input:"filter_positive([-1, -2, -3])",expected:"[]"},{input:"filter_positive([])",expected:"[]"},{input:"filter_positive([0, 1, 2])",expected:"[1, 2]"},{input:"filter_positive([5])",expected:"[5]"}]},{id:"074",number:2,title:"Filter Even",description:"Create a function `filter_even` that returns a new list containing only the even numbers from the input list.",hint:"If `num % 2 == 0`, append to result.",starterCode:`def filter_even(numbers: list) -> list:
    # Your code here
    pass`,solutionCode:`def filter_even(numbers: list) -> list:
    """Filter to only even numbers."""
    result = []
    for num in numbers:
        if num % 2 == 0:
            result.append(num)
    return result`,testCases:[{input:"filter_even([1, 2, 3, 4])",expected:"[2, 4]"},{input:"filter_even([1, 3, 5])",expected:"[]"},{input:"filter_even([])",expected:"[]"},{input:"filter_even([0, 2, 4])",expected:"[0, 2, 4]"},{input:"filter_even([-2, -1, 0, 1, 2])",expected:"[-2, 0, 2]"}]},{id:"075",number:3,title:"Double All",description:"Create a function `double_all` that returns a new list where each number from the input list is multiplied by 2.",hint:"Loop through numbers, append `num * 2` to result.",starterCode:`def double_all(numbers: list) -> list:
    # Your code here
    pass`,solutionCode:`def double_all(numbers: list) -> list:
    """Double each number in the list."""
    result = []
    for num in numbers:
        result.append(num * 2)
    return result`,testCases:[{input:"double_all([1, 2, 3])",expected:"[2, 4, 6]"},{input:"double_all([0, -1])",expected:"[0, -2]"},{input:"double_all([])",expected:"[]"},{input:"double_all([0.5])",expected:"[1.0]"},{input:"double_all([10, 20, 30])",expected:"[20, 40, 60]"}]},{id:"076",number:4,title:"Square All",description:"Create a function `square_all` that returns a new list where each number from the input list is squared.",hint:"Append `num ** 2` to result.",starterCode:`def square_all(numbers: list) -> list:
    # Your code here
    pass`,solutionCode:`def square_all(numbers: list) -> list:
    """Square each number in the list."""
    result = []
    for num in numbers:
        result.append(num ** 2)
    return result`,testCases:[{input:"square_all([2, 3, 4])",expected:"[4, 9, 16]"},{input:"square_all([-2, 0])",expected:"[4, 0]"},{input:"square_all([])",expected:"[]"},{input:"square_all([1, 1, 1])",expected:"[1, 1, 1]"},{input:"square_all([10])",expected:"[100]"}]},{id:"077",number:5,title:"Filter Long Words",description:"Create a function `filter_long_words` that returns a list of words from the input that are at least `min_length` characters long.",hint:"If `len(word) >= min_length`, keep it.",starterCode:`def filter_long_words(words: list, min_length: int) -> list:
    # Your code here
    pass`,solutionCode:`def filter_long_words(words: list, min_length: int) -> list:
    """Filter words by minimum length."""
    result = []
    for word in words:
        if len(word) >= min_length:
            result.append(word)
    return result`,testCases:[{input:"filter_long_words(['a', 'big', 'word'], 3)",expected:"['big', 'word']"},{input:"filter_long_words(['hi', 'no'], 3)",expected:"[]"},{input:"filter_long_words([], 1)",expected:"[]"},{input:"filter_long_words(['neuroscience', 'brain'], 5)",expected:"['neuroscience', 'brain']"},{input:"filter_long_words(['cat', 'dog', 'elephant'], 4)",expected:"['elephant']"}]},{id:"078",number:6,title:"Remove Duplicates",description:"Create a function `remove_duplicates` that returns a new list with duplicate items removed, while preserving the original order.",hint:"Use a `seen` list. If item not in seen, append to seen and result.",starterCode:`def remove_duplicates(items: list) -> list:
    # Your code here
    pass`,solutionCode:`def remove_duplicates(items: list) -> list:
    """Remove duplicates while preserving order."""
    seen = []
    result = []
    for item in items:
        if item not in seen:
            seen.append(item)
            result.append(item)
    return result`,testCases:[{input:"remove_duplicates([1, 2, 2, 3, 1])",expected:"[1, 2, 3]"},{input:"remove_duplicates(['a', 'a', 'b'])",expected:"['a', 'b']"},{input:"remove_duplicates([])",expected:"[]"},{input:"remove_duplicates([5, 5, 5, 5])",expected:"[5]"},{input:"remove_duplicates([1, 2, 3])",expected:"[1, 2, 3]"}]},{id:"079",number:7,title:"Uppercase All",description:"Create a function `uppercase_all` that returns a new list with all strings converted to uppercase.",hint:"Append `word.upper()` to result.",starterCode:`def uppercase_all(words: list) -> list:
    # Your code here
    pass`,solutionCode:`def uppercase_all(words: list) -> list:
    """Convert all strings to uppercase."""
    result = []
    for word in words:
        result.append(word.upper())
    return result`,testCases:[{input:"uppercase_all(['hello', 'world'])",expected:"['HELLO', 'WORLD']"},{input:"uppercase_all(['a', 'B'])",expected:"['A', 'B']"},{input:"uppercase_all([])",expected:"[]"},{input:"uppercase_all(['MiXeD', 'CaSe'])",expected:"['MIXED', 'CASE']"},{input:"uppercase_all(['123'])",expected:"['123']"}]},{id:"080",number:8,title:"Get Lengths",description:"Create a function `get_lengths` that returns a new list containing the length of each string in the input list.",hint:"Append `len(word)` to result.",starterCode:`def get_lengths(words: list) -> list:
    # Your code here
    pass`,solutionCode:`def get_lengths(words: list) -> list:
    """Get length of each string in list."""
    result = []
    for word in words:
        result.append(len(word))
    return result`,testCases:[{input:"get_lengths(['a', 'bb', 'ccc'])",expected:"[1, 2, 3]"},{input:"get_lengths([])",expected:"[]"},{input:"get_lengths([''])",expected:"[0]"},{input:"get_lengths(['hello', 'world'])",expected:"[5, 5]"},{input:"get_lengths(['neuroscience'])",expected:"[12]"}]},{id:"081",number:9,title:"Filter by Index",description:"Create a function `filter_by_index` that returns a new list containing only elements at even indices (0, 2, 4...).",hint:"Use `range(0, len(items), 2)`.",starterCode:`def filter_by_index(items: list) -> list:
    # Your code here
    pass`,solutionCode:`def filter_by_index(items: list) -> list:
    """Return elements at even indices."""
    result = []
    for i in range(0, len(items), 2):
        result.append(items[i])
    return result`,testCases:[{input:"filter_by_index([0, 1, 2, 3, 4])",expected:"[0, 2, 4]"},{input:"filter_by_index(['a', 'b'])",expected:"['a']"},{input:"filter_by_index([])",expected:"[]"},{input:"filter_by_index([10])",expected:"[10]"},{input:"filter_by_index(['w', 'x', 'y', 'z'])",expected:"['w', 'y']"}]},{id:"082",number:10,title:"Running Sum",description:"Create a function `running_sum` that returns a new list where each element is the cumulative sum of numbers up to that point.",hint:"Maintain a `total` variable. For each number, add to `total` and append `total` to result.",starterCode:`def running_sum(numbers: list) -> list:
    # Your code here
    pass`,solutionCode:`def running_sum(numbers: list) -> list:
    """Calculate running sum of list."""
    result = []
    total = 0
    for num in numbers:
        total += num
        result.append(total)
    return result`,testCases:[{input:"running_sum([1, 2, 3])",expected:"[1, 3, 6]"},{input:"running_sum([1, -1, 1])",expected:"[1, 0, 1]"},{input:"running_sum([])",expected:"[]"},{input:"running_sum([5])",expected:"[5]"},{input:"running_sum([10, 10, 10, 10])",expected:"[10, 20, 30, 40]"}]}]},{id:"dictionaries",title:"Dictionaries",description:"Key-Value Data Structures",explanation:`
      <p class="mb-4">Dictionaries store data as key-value pairs, allowing fast lookup by key.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Creating Dictionaries</h4>
      <p class="mb-2"><code>person = {"name": "Alice", "age": 30}</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Accessing Values</h4>
      <p class="mb-2"><code>d[key]</code> raises error if missing, <code>d.get(key, default)</code> returns default if missing</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Iterating</h4>
      <p class="mb-2"><code>for key in d:</code> or <code>for key, value in d.items():</code></p>
    `,exampleCode:`def count_chars(text: str) -> dict:
    """Count occurrences of each character."""
    counts = {}
    for char in text:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    return counts

def get_values(data: dict, keys: list) -> list:
    """Return list of values for given keys."""
    result = []
    for key in keys:
        if key in data:
            result.append(data[key])
    return result`,challenges:[{id:"083",number:1,title:"Count Characters",description:"Create a function `count_chars` that returns a dictionary counting the frequency of each character in `text`.",hint:"Loop through chars. If char in dict, increment count; otherwise set to 1.",starterCode:`def count_chars(text: str) -> dict:
    # Your code here
    pass`,solutionCode:`def count_chars(text: str) -> dict:
    """Count character frequencies."""
    counts = {}
    for char in text:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    return counts`,testCases:[{input:"count_chars('hello')",expected:"{'h': 1, 'e': 1, 'l': 2, 'o': 1}"},{input:"count_chars('aa a')",expected:"{'a': 3, ' ': 1}"},{input:"count_chars('')",expected:"{}"},{input:"count_chars('aaa')",expected:"{'a': 3}"},{input:"count_chars('abc')",expected:"{'a': 1, 'b': 1, 'c': 1}"}]},{id:"084",number:2,title:"Count Words",description:"Create a function `count_words` that returns a dictionary counting the frequency of each word in `sentence` (case-insensitive).",hint:"Lowercase and split sentence. Count words.",starterCode:`def count_words(sentence: str) -> dict:
    # Your code here
    pass`,solutionCode:`def count_words(sentence: str) -> dict:
    """Count word frequencies in a sentence."""
    counts = {}
    words = sentence.lower().split()
    for word in words:
        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1
    return counts`,testCases:[{input:"count_words('Hello world hello')",expected:"{'hello': 2, 'world': 1}"},{input:"count_words('a a a')",expected:"{'a': 3}"},{input:"count_words('')",expected:"{}"},{input:"count_words('python')",expected:"{'python': 1}"},{input:"count_words('The the THE')",expected:"{'the': 3}"}]},{id:"085",number:3,title:"Invert Dictionary",description:"Create a function `invert_dict` that returns a new dictionary where keys and values are swapped.",hint:"Loop through `d.items()`, set `result[value] = key`.",starterCode:`def invert_dict(d: dict) -> dict:
    # Your code here
    pass`,solutionCode:`def invert_dict(d: dict) -> dict:
    """Swap keys and values in dictionary."""
    result = {}
    for key, value in d.items():
        result[value] = key
    return result`,testCases:[{input:"invert_dict({'a': 1, 'b': 2})",expected:"{1: 'a', 2: 'b'}"},{input:"invert_dict({})",expected:"{}"},{input:"invert_dict({'k': 'v'})",expected:"{'v': 'k'}"},{input:"invert_dict({'x': 10})",expected:"{10: 'x'}"},{input:"invert_dict({1: 'one', 2: 'two'})",expected:"{'one': 1, 'two': 2}"}]},{id:"086",number:4,title:"Merge Dictionaries",description:"Create a function `merge_dicts` that returns a new dictionary merging `d1` and `d2`, with `d2` values taking precedence.",hint:"Copy `d1` then update with `d2`.",starterCode:`def merge_dicts(d1: dict, d2: dict) -> dict:
    # Your code here
    pass`,solutionCode:`def merge_dicts(d1: dict, d2: dict) -> dict:
    """Merge two dictionaries, second takes precedence."""
    result = {}
    for key, value in d1.items():
        result[key] = value
    for key, value in d2.items():
        result[key] = value
    return result`,testCases:[{input:"merge_dicts({'a': 1}, {'b': 2})",expected:"{'a': 1, 'b': 2}"},{input:"merge_dicts({'a': 1}, {'a': 2})",expected:"{'a': 2}"},{input:"merge_dicts({}, {'a': 1})",expected:"{'a': 1}"},{input:"merge_dicts({'x': 1, 'y': 2}, {'y': 3, 'z': 4})",expected:"{'x': 1, 'y': 3, 'z': 4}"},{input:"merge_dicts({}, {})",expected:"{}"}]},{id:"087",number:5,title:"Dict from Lists",description:"Create a function `dict_from_lists` that returns a dictionary where keys come from `keys` list and values from `values` list.",hint:"Loop by index, pair `keys[i]` with `values[i]`.",starterCode:`def dict_from_lists(keys: list, values: list) -> dict:
    # Your code here
    pass`,solutionCode:`def dict_from_lists(keys: list, values: list) -> dict:
    """Create dictionary from parallel lists."""
    result = {}
    for i in range(len(keys)):
        result[keys[i]] = values[i]
    return result`,testCases:[{input:"dict_from_lists(['a', 'b'], [1, 2])",expected:"{'a': 1, 'b': 2}"},{input:"dict_from_lists([], [])",expected:"{}"},{input:"dict_from_lists(['name'], ['Alice'])",expected:"{'name': 'Alice'}"},{input:"dict_from_lists(['x', 'y', 'z'], [10, 20, 30])",expected:"{'x': 10, 'y': 20, 'z': 30}"},{input:"dict_from_lists(['key'], [None])",expected:"{'key': None}"}]},{id:"088",number:6,title:"Filter Dictionary",description:"Create a function `filter_dict` that returns a new dictionary containing only entries where the value is at least `min_value`.",hint:"If `value >= min_value`, add to result.",starterCode:`def filter_dict(d: dict, min_value: float) -> dict:
    # Your code here
    pass`,solutionCode:`def filter_dict(d: dict, min_value: float) -> dict:
    """Filter dictionary by minimum value."""
    result = {}
    for key, value in d.items():
        if value >= min_value:
            result[key] = value
    return result`,testCases:[{input:"filter_dict({'a': 1, 'b': 2, 'c': 3}, 2)",expected:"{'b': 2, 'c': 3}"},{input:"filter_dict({'a': 1}, 5)",expected:"{}"},{input:"filter_dict({}, 0)",expected:"{}"},{input:"filter_dict({'x': 10, 'y': 20}, 10)",expected:"{'x': 10, 'y': 20}"},{input:"filter_dict({'a': -5, 'b': 5}, 0)",expected:"{'b': 5}"}]},{id:"089",number:7,title:"Safe Value Access",description:"Create a function `get_value_safely` that returns the value for `key` in `d`, or `default` if the key is missing.",hint:"If `key` in `d`, return `d[key]`, else return `default`.",starterCode:`def get_value_safely(d: dict, key: str, default):
    # Your code here
    pass`,solutionCode:`def get_value_safely(d: dict, key: str, default):
    """Get value with fallback default."""
    if key in d:
        return d[key]
    return default`,testCases:[{input:"get_value_safely({'a': 1}, 'a', 0)",expected:"1"},{input:"get_value_safely({'a': 1}, 'b', 0)",expected:"0"},{input:"get_value_safely({}, 'x', 'none')",expected:"'none'"},{input:"get_value_safely({'key': 'value'}, 'key', 'default')",expected:"'value'"},{input:"get_value_safely({'num': 42}, 'missing', -1)",expected:"-1"}]},{id:"090",number:8,title:"Group by Length",description:"Create a function `group_by_length` that returns a dictionary grouping words by their length (len -> [words]).",hint:"Initialize list if key missing, then append word.",starterCode:`def group_by_length(words: list) -> dict:
    # Your code here
    pass`,solutionCode:`def group_by_length(words: list) -> dict:
    """Group words by their length."""
    result = {}
    for word in words:
        length = len(word)
        if length not in result:
            result[length] = []
        result[length].append(word)
    return result`,testCases:[{input:"group_by_length(['a', 'bb', 'c'])",expected:"{1: ['a', 'c'], 2: ['bb']}"},{input:"group_by_length(['hi', 'no'])",expected:"{2: ['hi', 'no']}"},{input:"group_by_length([])",expected:"{}"},{input:"group_by_length(['one', 'two', 'six'])",expected:"{3: ['one', 'two', 'six']}"},{input:"group_by_length(['a'])",expected:"{1: ['a']}"}]},{id:"091",number:9,title:"Most Common Character",description:"Create a function `most_common` that returns the character with the highest frequency in `text`.",hint:"Count chars, then find key with max value.",starterCode:`def most_common(text: str) -> str:
    # Your code here
    pass`,solutionCode:`def most_common(text: str) -> str:
    """Find the most frequently occurring character."""
    counts = {}
    for char in text:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    max_char = ''
    max_count = 0
    for char, count in counts.items():
        if count > max_count:
            max_char = char
            max_count = count
    return max_char`,testCases:[{input:"most_common('banana')",expected:"'a'"},{input:"most_common('aaabb')",expected:"'a'"},{input:"most_common('x')",expected:"'x'"},{input:"most_common('aabb')",expected:"'a'"},{input:"most_common('hello')",expected:"'l'"}]},{id:"092",number:10,title:"Sum Values",description:"Create a function `sum_values` that returns the sum of all values in the dictionary.",hint:"Iterate `d.values()` and sum them.",starterCode:`def sum_values(d: dict) -> float:
    # Your code here
    pass`,solutionCode:`def sum_values(d: dict) -> float:
    """Sum all values in a dictionary."""
    total = 0
    for value in d.values():
        total += value
    return total`,testCases:[{input:"sum_values({'a': 10, 'b': 20})",expected:"30"},{input:"sum_values({'a': -5, 'b': 5})",expected:"0"},{input:"sum_values({})",expected:"0"},{input:"sum_values({'score': 100})",expected:"100"},{input:"sum_values({'x': 1, 'y': 2, 'z': 3})",expected:"6"}]}]},{id:"string_mastery",title:"String Mastery",description:"Advanced String Operations",explanation:`
      <p class="mb-4">Mastering strings means combining multiple operations and handling edge cases.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Slicing</h4>
      <p class="mb-2"><code>s[start:end]</code>, <code>s[:end]</code>, <code>s[start:]</code>, <code>s[::-1]</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">String Methods</h4>
      <p class="mb-2"><code>.startswith()</code>, <code>.endswith()</code>, <code>.isalpha()</code>, <code>.isdigit()</code>, <code>.join()</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Building Strings</h4>
      <p class="mb-2">Concatenate with <code>+</code> or join a list of strings.</p>
    `,exampleCode:`def is_palindrome(text: str) -> bool:
    """Check if text is a palindrome (ignoring case and spaces)."""
    cleaned = text.lower().replace(" ", "")
    return cleaned == cleaned[::-1]

def extract_numbers(text: str) -> str:
    """Extract only the digits from a string."""
    result = ""
    for char in text:
        if char.isdigit():
            result += char
    return result`,challenges:[{id:"093",number:1,title:"Palindrome Detector",description:"Create a function `is_palindrome` that returns `True` if `text` is a palindrome (reading the same forwards and backwards), ignoring case and spaces.",hint:"Clean string (lower case, remove spaces), then compare with its reverse.",starterCode:`def is_palindrome(text: str) -> bool:
    # Your code here
    pass`,solutionCode:`def is_palindrome(text: str) -> bool:
    """Check if text is a palindrome."""
    cleaned = text.lower().replace(" ", "")
    return cleaned == cleaned[::-1]`,testCases:[{input:"is_palindrome('Racecar')",expected:"True"},{input:"is_palindrome('Hello')",expected:"False"},{input:"is_palindrome('A man a plan a canal Panama')",expected:"True"},{input:"is_palindrome('Level')",expected:"True"},{input:"is_palindrome('Python')",expected:"False"}]},{id:"094",number:2,title:"Remove Vowels",description:"Create a function `remove_vowels` that returns a new string with all vowels (a, e, i, o, u) removed from `text`.",hint:"Iterate chars, append to result if not a vowel.",starterCode:`def remove_vowels(text: str) -> str:
    # Your code here
    pass`,solutionCode:`def remove_vowels(text: str) -> str:
    """Remove all vowels from text."""
    vowels = "aeiouAEIOU"
    result = ""
    for char in text:
        if char not in vowels:
            result += char
    return result`,testCases:[{input:"remove_vowels('Hello')",expected:"'Hll'"},{input:"remove_vowels('AEIOU')",expected:"''"},{input:"remove_vowels('BCDFGH')",expected:"'BCDFGH'"},{input:"remove_vowels('Python Programming')",expected:"'Pythn Prgrmmng'"},{input:"remove_vowels('')",expected:"''"}]},{id:"095",number:3,title:"Title Case",description:"Create a function `capitalize_words` that returns `sentence` with the first letter of each word capitalized.",hint:"Split words, capitalize each, then join.",starterCode:`def capitalize_words(sentence: str) -> str:
    # Your code here
    pass`,solutionCode:`def capitalize_words(sentence: str) -> str:
    """Capitalize first letter of each word."""
    words = sentence.split()
    result = []
    for word in words:
        result.append(word.capitalize())
    return " ".join(result)`,testCases:[{input:"capitalize_words('hello world')",expected:"'Hello World'"},{input:"capitalize_words('this is python')",expected:"'This Is Python'"},{input:"capitalize_words('ALREADY CAPS')",expected:"'Already Caps'"},{input:"capitalize_words('')",expected:"''"},{input:"capitalize_words('a')",expected:"'A'"}]},{id:"096",number:4,title:"Extract Digits",description:"Create a function `extract_digits` that returns a string containing only the numeric digits from `text`.",hint:"If `char.isdigit()`, append to result.",starterCode:`def extract_digits(text: str) -> str:
    # Your code here
    pass`,solutionCode:`def extract_digits(text: str) -> str:
    """Extract only digits from text."""
    result = ""
    for char in text:
        if char.isdigit():
            result += char
    return result`,testCases:[{input:"extract_digits('abc123def456')",expected:"'123456'"},{input:"extract_digits('Price: $19.99')",expected:"'1999'"},{input:"extract_digits('No digits')",expected:"''"},{input:"extract_digits('2024-12-09')",expected:"'20241209'"},{input:"extract_digits('123')",expected:"'123'"}]},{id:"097",number:5,title:"Mask String",description:"Create a function `mask_string` that masks all but the last 4 characters of `text` with '*', unless length <= 4 (then mask all).",hint:"Use string slicing and multiplication.",starterCode:`def mask_string(text: str) -> str:
    # Your code here
    pass`,solutionCode:`def mask_string(text: str) -> str:
    """Mask all but last 4 characters."""
    if len(text) <= 4:
        return "*" * len(text)
    return "*" * (len(text) - 4) + text[-4:]`,testCases:[{input:"mask_string('1234567890')",expected:"'******7890'"},{input:"mask_string('123')",expected:"'***'"},{input:"mask_string('1234')",expected:"'****'"},{input:"mask_string('password12345')",expected:"'*********2345'"},{input:"mask_string('')",expected:"''"}]},{id:"098",number:6,title:"Anagram Checker",description:"Create a function `is_anagram` that returns `True` if `s1` and `s2` are anagrams (contain same letters), ignoring case and spaces.",hint:"Clean strings, then compare sorted characters.",starterCode:`def is_anagram(s1: str, s2: str) -> bool:
    # Your code here
    pass`,solutionCode:`def is_anagram(s1: str, s2: str) -> bool:
    """Check if two strings are anagrams."""
    clean1 = s1.lower().replace(" ", "")
    clean2 = s2.lower().replace(" ", "")
    return sorted(clean1) == sorted(clean2)`,testCases:[{input:"is_anagram('Listen', 'Silent')",expected:"True"},{input:"is_anagram('hello', 'world')",expected:"False"},{input:"is_anagram('rail safety', 'fairy tales')",expected:"True"},{input:"is_anagram('Python', 'typhon')",expected:"True"},{input:"is_anagram('abc', 'abcd')",expected:"False"}]},{id:"099",number:7,title:"Longest Word",description:"Create a function `longest_word` that returns the longest word in `sentence`.",hint:"Split sentence. Track longest word found so far.",starterCode:`def longest_word(sentence: str) -> str:
    # Your code here
    pass`,solutionCode:`def longest_word(sentence: str) -> str:
    """Find the longest word in a sentence."""
    words = sentence.split()
    if not words:
        return ""
    longest = words[0]
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest`,testCases:[{input:"longest_word('This is a test')",expected:"'test'"},{input:"longest_word('Python is amazing')",expected:"'amazing'"},{input:"longest_word('')",expected:"''"},{input:"longest_word('I love programming')",expected:"'programming'"},{input:"longest_word('cat hat bat')",expected:"'cat'"}]},{id:"100",number:8,title:"Run-Length Encoding",description:"Create a function `compress_string` that returns a compressed string using run-length encoding (e.g., 'a2b3'), but only if shorter than original.",hint:"Iterate chars, counting consecutive runs. Append char+count.",starterCode:`def compress_string(text: str) -> str:
    # Your code here
    pass`,solutionCode:`def compress_string(text: str) -> str:
    """Compress string using run-length encoding."""
    if not text:
        return text
    
    result = ""
    current = text[0]
    count = 1
    
    for i in range(1, len(text)):
        if text[i] == current:
            count += 1
        else:
            result += current + str(count)
            current = text[i]
            count = 1
    result += current + str(count)
    
    if len(result) < len(text):
        return result
    return text`,testCases:[{input:"compress_string('aabcccccaaa')",expected:"'a2b1c5a3'"},{input:"compress_string('abcdef')",expected:"'abcdef'"},{input:"compress_string('aaaa')",expected:"'a4'"},{input:"compress_string('')",expected:"''"},{input:"compress_string('aabbcc')",expected:"'aabbcc'"}]}]},{id:"combining_structures",title:"Combining Data Structures",description:"Lists of Dicts, Nested Data",explanation:`
      <p class="mb-4">Real-world data often involves nested structures - lists containing dictionaries, dictionaries containing lists, etc.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">List of Dictionaries</h4>
      <p class="mb-2">Common pattern for tabular data like records or rows.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Nested Access</h4>
      <p class="mb-2"><code>data[0]["name"]</code> - first item's name field</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Processing Nested Data</h4>
      <p class="mb-2">Often requires nested loops or multiple steps.</p>
    `,exampleCode:`def get_names(people: list) -> list:
    """Extract all names from list of person dictionaries."""
    names = []
    for person in people:
        names.append(person["name"])
    return names

def total_price(cart: list) -> float:
    """Calculate total from shopping cart items."""
    total = 0
    for item in cart:
        total += item["price"] * item["quantity"]
    return total`,challenges:[{id:"101",number:1,title:"Get Names",description:"Create a function `get_names` that returns a list of 'name' values from a list of dictionaries.",hint:"Loop through people, append `person['name']` to list.",starterCode:`def get_names(people: list) -> list:
    # Your code here
    pass`,solutionCode:`def get_names(people: list) -> list:
    """Extract names from list of person dicts."""
    names = []
    for person in people:
        names.append(person["name"])
    return names`,testCases:[{input:"get_names([{'name': 'Alice'}, {'name': 'Bob'}])",expected:"['Alice', 'Bob']"},{input:"get_names([])",expected:"[]"},{input:"get_names([{'name': 'Solo'}])",expected:"['Solo']"},{input:"get_names([{'name': 'A', 'age': 20}, {'name': 'B', 'age': 30}])",expected:"['A', 'B']"},{input:"get_names([{'name': ''}])",expected:"['']"}]},{id:"102",number:2,title:"Filter by Key",description:"Create a function `filter_by_key` that returns a new list containing only items where `item[key]` equals `value`.",hint:"Loop items. If `item.get(key) == value`, add to result.",starterCode:`def filter_by_key(items: list, key: str, value) -> list:
    # Your code here
    pass`,solutionCode:`def filter_by_key(items: list, key: str, value) -> list:
    """Filter list of dicts by key-value match."""
    result = []
    for item in items:
        if item.get(key) == value:
            result.append(item)
    return result`,testCases:[{input:"filter_by_key([{'id': 1, 'type': 'A'}, {'id': 2, 'type': 'B'}, {'id': 3, 'type': 'A'}], 'type', 'A')",expected:"[{'id': 1, 'type': 'A'}, {'id': 3, 'type': 'A'}]"},{input:"filter_by_key([], 'type', 'A')",expected:"[]"},{input:"filter_by_key([{'x': 1}], 'x', 1)",expected:"[{'x': 1}]"},{input:"filter_by_key([{'x': 1}], 'y', 1)",expected:"[]"},{input:"filter_by_key([{'a': None}], 'a', None)",expected:"[{'a': None}]"}]},{id:"103",number:3,title:"Cart Total",description:"Create a function `cart_total` that returns the total cost (price * quantity) of all items in `cart`.",hint:"Sum `item['price'] * item['quantity']` for each item.",starterCode:`def cart_total(cart: list) -> float:
    # Your code here
    pass`,solutionCode:`def cart_total(cart: list) -> float:
    """Calculate total cost of shopping cart."""
    total = 0
    for item in cart:
        total += item["price"] * item["quantity"]
    return total`,testCases:[{input:"cart_total([{'price': 10, 'quantity': 2}, {'price': 5, 'quantity': 1}])",expected:"25"},{input:"cart_total([])",expected:"0"},{input:"cart_total([{'price': 99.99, 'quantity': 1}])",expected:"99.99"},{input:"cart_total([{'price': 0, 'quantity': 100}])",expected:"0"},{input:"cart_total([{'price': 1, 'quantity': 1}, {'price': 1, 'quantity': 1}])",expected:"2"}]},{id:"104",number:4,title:"Average by Key",description:"Create a function `average_by_key` that returns the average value of `key` across all items (return 0 if empty).",hint:"Sum `item[key]` for all items, divide by count.",starterCode:`def average_by_key(items: list, key: str) -> float:
    # Your code here
    pass`,solutionCode:`def average_by_key(items: list, key: str) -> float:
    """Calculate average of a specific key across dicts."""
    if not items:
        return 0
    total = 0
    for item in items:
        total += item[key]
    return total / len(items)`,testCases:[{input:"average_by_key([{'score': 10}, {'score': 20}], 'score')",expected:"15.0"},{input:"average_by_key([], 'score')",expected:"0"},{input:"average_by_key([{'val': 100}], 'val')",expected:"100.0"},{input:"average_by_key([{'x': 1}, {'x': 2}, {'x': 3}], 'x')",expected:"2.0"},{input:"average_by_key([{'n': 0}, {'n': 0}], 'n')",expected:"0.0"}]},{id:"105",number:5,title:"Find by ID",description:"Create a function `find_by_id` that returns the dictionary with the matching `id`, or `None` if not found.",hint:"Loop items. If `item['id'] == target_id`, return item.",starterCode:`def find_by_id(items: list, target_id: int) -> dict:
    # Your code here
    pass`,solutionCode:`def find_by_id(items: list, target_id: int) -> dict:
    """Find dict by id value."""
    for item in items:
        if item.get("id") == target_id:
            return item
    return None`,testCases:[{input:"find_by_id([{'id': 1, 'name': 'A'}, {'id': 2, 'name': 'B'}], 2)",expected:"{'id': 2, 'name': 'B'}"},{input:"find_by_id([{'id': 1}], 3)",expected:"None"},{input:"find_by_id([], 1)",expected:"None"},{input:"find_by_id([{'id': 0}], 0)",expected:"{'id': 0}"},{input:"find_by_id([{'id': 1}, {'id': 1}], 1)",expected:"{'id': 1}"}]},{id:"106",number:6,title:"Group by Key",description:"Create a function `group_by_key` that returns a dictionary where keys are values of the specified `key` and dictionary values are lists of matching items.",hint:"Initialize list if value not in result, then append item.",starterCode:`def group_by_key(items: list, key: str) -> dict:
    # Your code here
    pass`,solutionCode:`def group_by_key(items: list, key: str) -> dict:
    """Group items by the value of a specific key."""
    result = {}
    for item in items:
        value = item.get(key)
        if value not in result:
            result[value] = []
        result[value].append(item)
    return result`,testCases:[{input:"group_by_key([{'type': 'A', 'val': 1}, {'type': 'B', 'val': 2}, {'type': 'A', 'val': 3}], 'type')",expected:"{'A': [{'type': 'A', 'val': 1}, {'type': 'A', 'val': 3}], 'B': [{'type': 'B', 'val': 2}]}"},{input:"group_by_key([], 'type')",expected:"{}"},{input:"group_by_key([{'x': 1}], 'x')",expected:"{1: [{'x': 1}]}"},{input:"group_by_key([{'a': 1}, {'a': 1}], 'a')",expected:"{1: [{'a': 1}, {'a': 1}]}"},{input:"group_by_key([{'k': 'v'}], 'missing')",expected:"{None: [{'k': 'v'}]}"}]},{id:"107",number:7,title:"Flatten List",description:"Create a function `flatten` that returns a single list containing all elements from the nested list of lists.",hint:"Loop sublists, then loop items in sublist and append to result.",starterCode:`def flatten(nested: list) -> list:
    # Your code here
    pass`,solutionCode:`def flatten(nested: list) -> list:
    """Flatten a list of lists."""
    result = []
    for sublist in nested:
        for item in sublist:
            result.append(item)
    return result`,testCases:[{input:"flatten([[1, 2], [3, 4]])",expected:"[1, 2, 3, 4]"},{input:"flatten([[], [1]])",expected:"[1]"},{input:"flatten([])",expected:"[]"},{input:"flatten([[1], [2], [3]])",expected:"[1, 2, 3]"},{input:"flatten([['a', 'b'], ['c']])",expected:"['a', 'b', 'c']"}]},{id:"108",number:8,title:"Sort by Key",description:"Create a function `sort_by_key` that returns a new list of items sorted by `key` (ascending). Implement your own sort.",hint:"Use Bubble Sort. Compare `items[j][key]` and `items[j+1][key]`.",starterCode:`def sort_by_key(items: list, key: str) -> list:
    # Your code here
    pass`,solutionCode:`def sort_by_key(items: list, key: str) -> list:
    """Sort list of dicts by a specific key."""
    # Simple bubble sort implementation
    result = items.copy()
    n = len(result)
    for i in range(n):
        for j in range(0, n - i - 1):
            if result[j][key] > result[j + 1][key]:
                result[j], result[j + 1] = result[j + 1], result[j]
    return result`,testCases:[{input:"sort_by_key([{'val': 3}, {'val': 1}, {'val': 2}], 'val')",expected:"[{'val': 1}, {'val': 2}, {'val': 3}]"},{input:"sort_by_key([], 'val')",expected:"[]"},{input:"sort_by_key([{'x': 5}], 'x')",expected:"[{'x': 5}]"},{input:"sort_by_key([{'n': 2}, {'n': 2}], 'n')",expected:"[{'n': 2}, {'n': 2}]"},{input:"sort_by_key([{'a': 1}, {'a': 0}], 'a')",expected:"[{'a': 0}, {'a': 1}]"}]}]},{id:"capstone",title:"Capstone Challenges",description:"Put Everything Together",explanation:`
      <p class="mb-4">These challenges combine everything you've learned. They require functions, loops, conditionals, lists, dictionaries, and string manipulation.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Problem-Solving Approach</h4>
      <p class="mb-2">1. Understand the problem fully<br>2. Work through examples by hand<br>3. Plan your approach<br>4. Code it step by step<br>5. Test with edge cases</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Tips</h4>
      <p class="mb-2">Break complex problems into smaller functions. Test each piece before combining.</p>
    `,exampleCode:`def validate_password(password: str) -> dict:
    """Check password strength and return validation results."""
    results = {
        "valid": True,
        "errors": []
    }
    
    if len(password) < 8:
        results["errors"].append("Must be at least 8 characters")
        results["valid"] = False
    
    has_upper = False
    for char in password:
        if char.isupper():
            has_upper = True
            break
    
    if not has_upper:
        results["errors"].append("Must contain uppercase letter")
        results["valid"] = False
    
    return results`,challenges:[{id:"109",number:1,title:"Password Strength",description:"Create a function `validate_password` that returns a dictionary checking if `password` meets strength rules (length >= 8, uppercase, lowercase, digit).",hint:"Check rules individually. Append errors to list if rules fail.",starterCode:`def validate_password(password: str) -> dict:
    # Your code here
    pass`,solutionCode:`def validate_password(password: str) -> dict:
    """Validate password strength."""
    errors = []
    
    if len(password) < 8:
        errors.append("Must be at least 8 characters")
    
    has_upper = False
    has_lower = False
    has_digit = False
    
    for char in password:
        if char.isupper():
            has_upper = True
        if char.islower():
            has_lower = True
        if char.isdigit():
            has_digit = True
    
    if not has_upper:
        errors.append("Must contain uppercase letter")
    if not has_lower:
        errors.append("Must contain lowercase letter")
    if not has_digit:
        errors.append("Must contain a digit")
    
    return {"valid": len(errors) == 0, "errors": errors}`,testCases:[{input:"validate_password('ValidPass1')",expected:"{'valid': True, 'errors': []}"},{input:"validate_password('short')",expected:"{'valid': False, 'errors': ['Must be at least 8 characters', 'Must contain uppercase letter', 'Must contain a digit']}"},{input:"validate_password('alllowercase1')",expected:"{'valid': False, 'errors': ['Must contain uppercase letter']}"},{input:"validate_password('ALLUPPERCASE1')",expected:"{'valid': False, 'errors': ['Must contain lowercase letter']}"},{input:"validate_password('NoDigitsHere')",expected:"{'valid': False, 'errors': ['Must contain a digit']}"}]},{id:"110",number:2,title:"Format Duration",description:"Create a function `format_duration` that returns a human-readable string (e.g., '1 hour, 5 minutes') from a number of `seconds`.",hint:"Calculate hours, minutes, seconds. Join non-zero parts with ', '.",starterCode:`def format_duration(seconds: int) -> str:
    # Your code here
    pass`,solutionCode:`def format_duration(seconds: int) -> str:
    """Format seconds as human-readable duration."""
    if seconds == 0:
        return "0 seconds"
    
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    secs = seconds % 60
    
    parts = []
    if hours > 0:
        parts.append(f"{hours} hour" + ("s" if hours > 1 else ""))
    if minutes > 0:
        parts.append(f"{minutes} minute" + ("s" if minutes > 1 else ""))
    if secs > 0:
        parts.append(f"{secs} second" + ("s" if secs > 1 else ""))
    
    return ", ".join(parts)`,testCases:[{input:"format_duration(3665)",expected:"'1 hour, 1 minute, 5 seconds'"},{input:"format_duration(62)",expected:"'1 minute, 2 seconds'"},{input:"format_duration(0)",expected:"'0 seconds'"},{input:"format_duration(3600)",expected:"'1 hour'"},{input:"format_duration(7201)",expected:"'2 hours, 1 second'"}]},{id:"111",number:3,title:"Grade Statistics",description:"Create a function `calculate_grade_stats` that returns a dictionary with 'average', 'highest', 'lowest', and 'passing' stats from a list of student records.",hint:"Iterate records to find min, max, sum, and count passing.",starterCode:`def calculate_grade_stats(students: list) -> dict:
    # Your code here
    pass`,solutionCode:`def calculate_grade_stats(students: list) -> dict:
    """Calculate statistics from student grades."""
    if not students:
        return {"average": 0, "highest": 0, "lowest": 0, "passing": 0}
    
    scores = [s["score"] for s in students]
    
    total = 0
    highest = scores[0]
    lowest = scores[0]
    passing = 0
    
    for score in scores:
        total += score
        if score > highest:
            highest = score
        if score < lowest:
            lowest = score
        if score >= 60:
            passing += 1
    
    return {
        "average": total / len(scores),
        "highest": highest,
        "lowest": lowest,
        "passing": passing
    }`,testCases:[{input:"calculate_grade_stats([{'name': 'A', 'score': 80}, {'name': 'B', 'score': 60}, {'name': 'C', 'score': 40}])",expected:"{'average': 60.0, 'highest': 80, 'lowest': 40, 'passing': 2}"},{input:"calculate_grade_stats([])",expected:"{'average': 0, 'highest': 0, 'lowest': 0, 'passing': 0}"},{input:"calculate_grade_stats([{'name': 'X', 'score': 100}])",expected:"{'average': 100.0, 'highest': 100, 'lowest': 100, 'passing': 1}"},{input:"calculate_grade_stats([{'name': 'A', 'score': 59}, {'name': 'B', 'score': 60}])",expected:"{'average': 59.5, 'highest': 60, 'lowest': 59, 'passing': 1}"},{input:"calculate_grade_stats([{'name': 'Z', 'score': 0}])",expected:"{'average': 0.0, 'highest': 0, 'lowest': 0, 'passing': 0}"}]},{id:"112",number:4,title:"Word Frequency",description:"Create a function `word_frequency` that returns a list of the top 5 most common words in `text` as `[word, count]` pairs.",hint:"Count words in dictionary, convert to list, sort descending, return top 5.",starterCode:`def word_frequency(text: str) -> list:
    # Your code here
    pass`,solutionCode:`def word_frequency(text: str) -> list:
    """Find top 5 most common words."""
    # Count words
    counts = {}
    words = text.lower().split()
    for word in words:
        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1
    
    # Convert to list of tuples and sort
    items = list(counts.items())
    
    # Simple bubble sort by count (descending)
    n = len(items)
    for i in range(n):
        for j in range(0, n - i - 1):
            if items[j][1] < items[j + 1][1]:
                items[j], items[j + 1] = items[j + 1], items[j]
    
    return items[:5]`,testCases:[{input:"word_frequency('a b a c b a')",expected:"[['a', 3], ['b', 2], ['c', 1]]"},{input:"word_frequency('')",expected:"[]"},{input:"word_frequency('one one two')",expected:"[['one', 2], ['two', 1]]"},{input:"word_frequency('word')",expected:"[['word', 1]]"},{input:"word_frequency('a a a a a b b b c c')",expected:"[['a', 5], ['b', 3], ['c', 2]]"}]},{id:"113",number:5,title:"Valid Brackets",description:"Create a function `valid_brackets` that returns `True` if the brackets in string `s` are properly matched and nested.",hint:"Use a stack. Push opening brackets, pop matching closing brackets.",starterCode:`def valid_brackets(s: str) -> bool:
    # Your code here
    pass`,solutionCode:`def valid_brackets(s: str) -> bool:
    """Check if brackets are properly matched."""
    stack = []
    pairs = {")": "(", "}": "{", "]": "["}
    
    for char in s:
        if char in "({[":
            stack.append(char)
        elif char in ")}]":
            if not stack:
                return False
            if stack[-1] != pairs[char]:
                return False
            stack.pop()
    
    return len(stack) == 0`,testCases:[{input:"valid_brackets('()[]{}')",expected:"True"},{input:"valid_brackets('([)]')",expected:"False"},{input:"valid_brackets('[')",expected:"False"},{input:"valid_brackets('')",expected:"True"},{input:"valid_brackets('((()))')",expected:"True"}]},{id:"114",number:6,title:"Merge Sorted Lists",description:"Create a function `merge_sorted` that returns a single sorted list by merging two already sorted lists `list1` and `list2`.",hint:"Use pointers. Compare items from both lists, append smaller item to result.",starterCode:`def merge_sorted(list1: list, list2: list) -> list:
    # Your code here
    pass`,solutionCode:`def merge_sorted(list1: list, list2: list) -> list:
    """Merge two sorted lists into one sorted list."""
    result = []
    i = 0
    j = 0
    
    while i < len(list1) and j < len(list2):
        if list1[i] <= list2[j]:
            result.append(list1[i])
            i += 1
        else:
            result.append(list2[j])
            j += 1
    
    # Add remaining elements
    while i < len(list1):
        result.append(list1[i])
        i += 1
    while j < len(list2):
        result.append(list2[j])
        j += 1
    
    return result`,testCases:[{input:"merge_sorted([1, 3, 5], [2, 4, 6])",expected:"[1, 2, 3, 4, 5, 6]"},{input:"merge_sorted([1, 2], [])",expected:"[1, 2]"},{input:"merge_sorted([], [])",expected:"[]"},{input:"merge_sorted([1], [2])",expected:"[1, 2]"},{input:"merge_sorted([1, 1], [1, 1])",expected:"[1, 1, 1, 1]"}]},{id:"115",number:7,title:"Caesar Cipher",description:"Create a function `caesar_cipher` that returns `text` encrypted by shifting each letter by `shift` positions.",hint:"Shift char code: `(ord(c) - base + shift) % 26 + base`.",starterCode:`def caesar_cipher(text: str, shift: int) -> str:
    # Your code here
    pass`,solutionCode:`def caesar_cipher(text: str, shift: int) -> str:
    """Apply Caesar cipher to text."""
    result = ""
    for char in text:
        if char.isalpha():
            # Determine base (a or A)
            base = ord('a') if char.islower() else ord('A')
            # Shift and wrap around
            shifted = (ord(char) - base + shift) % 26 + base
            result += chr(shifted)
        else:
            result += char
    return result`,testCases:[{input:"caesar_cipher('abc', 1)",expected:"'bcd'"},{input:"caesar_cipher('xyz', 1)",expected:"'yza'"},{input:"caesar_cipher('Hello, World!', 1)",expected:"'Ifmmp, Xpsme!'"},{input:"caesar_cipher('abc', 0)",expected:"'abc'"},{input:"caesar_cipher('a', 26)",expected:"'a'"}]},{id:"116",number:8,title:"Calculate Invoice",description:"Create a function `calculate_invoice` that returns a dictionary with 'subtotal', 'total_discount', and 'grand_total' from a list of items.",hint:"Iterate items. Add to subtotal. If discount info present, add to total discount.",starterCode:`def calculate_invoice(items: list) -> dict:
    # Your code here
    pass`,solutionCode:`def calculate_invoice(items: list) -> dict:
    """Calculate invoice totals with discounts."""
    subtotal = 0
    total_discount = 0
    
    for item in items:
        line_total = item["quantity"] * item["unit_price"]
        subtotal += line_total
        
        if "discount" in item:
            discount = line_total * (item["discount"] / 100)
            total_discount += discount
    
    grand_total = subtotal - total_discount
    
    return {
        "subtotal": round(subtotal, 2),
        "total_discount": round(total_discount, 2),
        "grand_total": round(grand_total, 2)
    }`,testCases:[{input:"calculate_invoice([{'quantity': 2, 'unit_price': 10}, {'quantity': 1, 'unit_price': 20, 'discount': 10}])",expected:"{'subtotal': 40.0, 'total_discount': 2.0, 'grand_total': 38.0}"},{input:"calculate_invoice([])",expected:"{'subtotal': 0, 'total_discount': 0, 'grand_total': 0}"},{input:"calculate_invoice([{'quantity': 1, 'unit_price': 100, 'discount': 50}])",expected:"{'subtotal': 100.0, 'total_discount': 50.0, 'grand_total': 50.0}"},{input:"calculate_invoice([{'quantity': 5, 'unit_price': 10}])",expected:"{'subtotal': 50.0, 'total_discount': 0, 'grand_total': 50.0}"},{input:"calculate_invoice([{'quantity': 3, 'unit_price': 33.33}])",expected:"{'subtotal': 99.99, 'total_discount': 0, 'grand_total': 99.99}"}]}]}],pw=({studentName:s="Student",onFinish:n})=>{const[a,r]=L.useState([]),u=L.useRef(null),{isReady:d,loadingMessage:f}=Sd(),[m,_]=L.useState(0);return L.useEffect(()=>{const p=[{text:"BIOS DATE 01/01/24 15:23:42 VER 1.0.2",delay:100},{text:"CPU: QUANTUM-XYZ 64-BIT PROCESSOR",delay:200},{text:"CHECKING MEMORY: 64512K OK",delay:400},{text:"",delay:500},{text:"DETECTING PRIMARY MASTER ... QUANTUM DRIVE C:",delay:800},{text:"DETECTING PRIMARY SLAVE  ... NONE",delay:900},{text:"",delay:1e3},{text:"LOADING SYSTEM COMPONENTS:",delay:1200}];let S=[];return p.forEach((v,C)=>{const z=setTimeout(()=>{r(U=>[...U,v.text]),C===p.length-1&&_(1)},v.delay);S.push(z)}),()=>S.forEach(clearTimeout)},[]),L.useEffect(()=>{m===1&&r(p=>p[p.length-1]!==`> ${f}`?[...p,`> ${f}`]:p)},[f,m]),L.useEffect(()=>{d&&m>=1&&(async()=>(r(S=>[...S,"",`WELCOME ${s.toUpperCase()}`,"SYSTEM READY."]),await new Promise(S=>setTimeout(S,1500)),n()))()},[d,m,n,s]),L.useEffect(()=>{u.current&&(u.current.scrollTop=u.current.scrollHeight)},[a]),y.jsxs("div",{className:"fixed inset-0 bg-black text-green-500 font-mono p-10 flex flex-col items-start justify-start overflow-hidden z-[100]",children:[y.jsxs("div",{className:"w-full max-w-4xl mx-auto space-y-2",ref:u,children:[a.map((p,S)=>y.jsx("div",{className:"typewriter-line min-h-[1.5rem] break-words",children:p&&!p.startsWith("BIOS")&&!p.startsWith("CPU")&&!p.startsWith("CHECK")&&!p.startsWith("DETECT")&&!p.startsWith("LOAD")&&!p.startsWith("WELC")&&!p.startsWith("SYS")&&!p.startsWith(">")?y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"mr-2",children:">"}),p]}):p},S)),y.jsx("div",{className:"animate-pulse",children:"_"})]}),y.jsx("div",{className:"absolute bottom-10 right-10 text-xs text-green-700",children:"STEVEN STEWART TUTORING // SYSTEM BOOT // PYTHON 3.11.0"}),y.jsx("style",{children:`
        .typewriter-line {
          animation: fadeIn 0.1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `})]})},hy="python_tutoring_unlocked_chapters",mw=()=>Rs.reduce((s,n,a)=>({...s,[n.id]:a<3}),{}),yg=()=>{try{const s=localStorage.getItem(hy);if(s)return JSON.parse(s)}catch(s){console.error(s)}return mw()},vg=s=>{try{localStorage.setItem(hy,JSON.stringify(s))}catch(n){console.error(n)}},_w=()=>{const{isInSession:s,isTeacher:n,sessionCode:a,participants:r,sessionUnlockedChapters:u,createSession:d,joinSession:f,leaveSession:m,unlockChapter:_,lockChapter:p}=dy(),[S,v]=L.useState(Rs[0].id),[C,z]=L.useState(0),[U,q]=L.useState(!0),[te,le]=L.useState(!1),[re,oe]=L.useState(yg),[ne,$]=L.useState(!1),[ie,G]=L.useState(!1),K=L.useMemo(()=>s?u:re,[s,u,re]),Y=Rs.find(P=>P.id===S)||Rs[0],X=L.useMemo(()=>!K[Y.id],[K,Y.id]);L.useEffect(()=>{z(0)},[S]);const Se=P=>{if(s&&n)_(P);else{const ce={...re,[P]:!0};oe(ce),vg(ce)}},me=P=>{if(s&&n)p(P);else{const ce={...re,[P]:!1};oe(ce),vg(ce)}},Pe=P=>{!K[P]&&!ne||v(P)};L.useEffect(()=>{const P=ce=>{ce.ctrlKey&&ce.shiftKey&&ce.key==="T"&&$(b=>{const D=!b;return G(!!D),D})};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[]);const Ne=()=>{q(!1),le(!0)},W=()=>{le(!1)},R=async P=>{const ce=await f(P);return ce&&le(!1),ce},B=async()=>await d(),Z=async()=>{await m(),oe(yg())};return U?y.jsx(pw,{studentName:"Python Learner",onFinish:Ne}):te?y.jsx(fw,{onSoloMode:W,onJoinSession:R,onCreateSession:B,isTeacherMode:ne}):y.jsxs("div",{className:"flex flex-col h-screen overflow-hidden bg-[#1e1e1e]",children:[s&&a&&y.jsx(hw,{sessionCode:a,isTeacher:n,participantCount:Object.keys(r).length,onLeave:Z}),ne&&!s&&y.jsxs("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold text-center py-1.5 shadow-lg flex items-center justify-center gap-4",children:[y.jsx("span",{children:"🎓 TEACHER MODE"}),y.jsx("button",{onClick:()=>le(!0),className:"px-3 py-1 bg-white/20 hover:bg-white/30 rounded-md transition-colors",children:"Start Session"}),y.jsx("button",{onClick:()=>G(!0),className:"px-3 py-1 bg-white/20 hover:bg-white/30 rounded-md transition-colors",children:"Control Panel"}),y.jsx("span",{className:"text-white/70",children:"(Ctrl+Shift+T to toggle)"})]}),y.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[y.jsx(Zb,{chapters:Rs,currentChapterId:S,onSelectChapter:Pe,unlockedMap:K,enforceLocksForStudent:!ne}),y.jsx("main",{className:"flex-1 h-full overflow-hidden relative",children:y.jsx(cw,{chapter:Y,currentChallengeIndex:C,onNextChallenge:()=>z(P=>Math.min(P+1,Y.challenges.length-1)),onPrevChallenge:()=>z(P=>Math.max(P-1,0)),onSelectChallenge:z,isLocked:X})})]}),ne&&ie&&y.jsx(dw,{chapters:Rs,unlockedMap:K,onUnlock:Se,onLock:me,onClose:()=>G(!1)})]})};function gw(){return y.jsx(uw,{children:y.jsx(ax,{children:y.jsx(_w,{})})})}const py=document.getElementById("root");if(!py)throw new Error("Could not find root element to mount to");const yw=Kb.createRoot(py);yw.render(y.jsx(ai.StrictMode,{children:y.jsx(gw,{})}));
