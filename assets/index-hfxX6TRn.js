(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function a(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(u){if(u.ep)return;u.ep=!0;const d=a(u);fetch(u.href,d)}})();function og(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Rc={exports:{}},za={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function Sb(){if(Jm)return za;Jm=1;var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(r,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var m in u)m!=="key"&&(d[m]=u[m])}else d=u;return u=d.ref,{$$typeof:s,type:r,key:f,ref:u!==void 0?u:null,props:d}}return za.Fragment=n,za.jsx=a,za.jsxs=a,za}var Wm;function Eb(){return Wm||(Wm=1,Rc.exports=Sb()),Rc.exports}var y=Eb(),Oc={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function wb(){if(Pm)return re;Pm=1;var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),E=Symbol.iterator;function z(b){return b===null||typeof b!="object"?null:(b=E&&b[E]||b["@@iterator"],typeof b=="function"?b:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,se={};function le(b,M,H){this.props=b,this.context=M,this.refs=se,this.updater=H||U}le.prototype.isReactComponent={},le.prototype.setState=function(b,M){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,M,"setState")},le.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function ue(){}ue.prototype=le.prototype;function de(b,M,H){this.props=b,this.context=M,this.refs=se,this.updater=H||U}var ae=de.prototype=new ue;ae.constructor=de,I(ae,le.prototype),ae.isPureReactComponent=!0;var $=Array.isArray;function te(){}var G={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function q(b,M,H){var V=H.ref;return{$$typeof:s,type:b,key:M,ref:V!==void 0?V:null,props:H}}function X(b,M){return q(b.type,M,b.props)}function Se(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function he(b){var M={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(H){return M[H]})}var Ze=/\/+/g;function Ne(b,M){return typeof b=="object"&&b!==null&&b.key!=null?he(""+b.key):M.toString(36)}function P(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(te,te):(b.status="pending",b.then(function(M){b.status==="pending"&&(b.status="fulfilled",b.value=M)},function(M){b.status==="pending"&&(b.status="rejected",b.reason=M)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function R(b,M,H,V,ne){var _e=typeof b;(_e==="undefined"||_e==="boolean")&&(b=null);var Re=!1;if(b===null)Re=!0;else switch(_e){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(b.$$typeof){case s:case n:Re=!0;break;case C:return Re=b._init,R(Re(b._payload),M,H,V,ne)}}if(Re)return ne=ne(b),Re=V===""?"."+Ne(b,0):V,$(ne)?(H="",Re!=null&&(H=Re.replace(Ze,"$&/")+"/"),R(ne,M,H,"",function(qs){return qs})):ne!=null&&(Se(ne)&&(ne=X(ne,H+(ne.key==null||b&&b.key===ne.key?"":(""+ne.key).replace(Ze,"$&/")+"/")+Re)),M.push(ne)),1;Re=0;var _t=V===""?".":V+":";if($(b))for(var Qe=0;Qe<b.length;Qe++)V=b[Qe],_e=_t+Ne(V,Qe),Re+=R(V,M,H,_e,ne);else if(Qe=z(b),typeof Qe=="function")for(b=Qe.call(b),Qe=0;!(V=b.next()).done;)V=V.value,_e=_t+Ne(V,Qe++),Re+=R(V,M,H,_e,ne);else if(_e==="object"){if(typeof b.then=="function")return R(P(b),M,H,V,ne);throw M=String(b),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return Re}function B(b,M,H){if(b==null)return b;var V=[],ne=0;return R(b,V,"","",function(_e){return M.call(H,_e,ne++)}),V}function Z(b){if(b._status===-1){var M=b._result;M=M(),M.then(function(H){(b._status===0||b._status===-1)&&(b._status=1,b._result=H)},function(H){(b._status===0||b._status===-1)&&(b._status=2,b._result=H)}),b._status===-1&&(b._status=0,b._result=M)}if(b._status===1)return b._result.default;throw b._result}var J=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},oe={map:B,forEach:function(b,M,H){B(b,function(){M.apply(this,arguments)},H)},count:function(b){var M=0;return B(b,function(){M++}),M},toArray:function(b){return B(b,function(M){return M})||[]},only:function(b){if(!Se(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return re.Activity=v,re.Children=oe,re.Component=le,re.Fragment=a,re.Profiler=u,re.PureComponent=de,re.StrictMode=r,re.Suspense=g,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,re.__COMPILER_RUNTIME={__proto__:null,c:function(b){return G.H.useMemoCache(b)}},re.cache=function(b){return function(){return b.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(b,M,H){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var V=I({},b.props),ne=b.key;if(M!=null)for(_e in M.key!==void 0&&(ne=""+M.key),M)!K.call(M,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&M.ref===void 0||(V[_e]=M[_e]);var _e=arguments.length-2;if(_e===1)V.children=H;else if(1<_e){for(var Re=Array(_e),_t=0;_t<_e;_t++)Re[_t]=arguments[_t+2];V.children=Re}return q(b.type,ne,V)},re.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:d,_context:b},b},re.createElement=function(b,M,H){var V,ne={},_e=null;if(M!=null)for(V in M.key!==void 0&&(_e=""+M.key),M)K.call(M,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ne[V]=M[V]);var Re=arguments.length-2;if(Re===1)ne.children=H;else if(1<Re){for(var _t=Array(Re),Qe=0;Qe<Re;Qe++)_t[Qe]=arguments[Qe+2];ne.children=_t}if(b&&b.defaultProps)for(V in Re=b.defaultProps,Re)ne[V]===void 0&&(ne[V]=Re[V]);return q(b,_e,ne)},re.createRef=function(){return{current:null}},re.forwardRef=function(b){return{$$typeof:m,render:b}},re.isValidElement=Se,re.lazy=function(b){return{$$typeof:C,_payload:{_status:-1,_result:b},_init:Z}},re.memo=function(b,M){return{$$typeof:p,type:b,compare:M===void 0?null:M}},re.startTransition=function(b){var M=G.T,H={};G.T=H;try{var V=b(),ne=G.S;ne!==null&&ne(H,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(te,J)}catch(_e){J(_e)}finally{M!==null&&H.types!==null&&(M.types=H.types),G.T=M}},re.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},re.use=function(b){return G.H.use(b)},re.useActionState=function(b,M,H){return G.H.useActionState(b,M,H)},re.useCallback=function(b,M){return G.H.useCallback(b,M)},re.useContext=function(b){return G.H.useContext(b)},re.useDebugValue=function(){},re.useDeferredValue=function(b,M){return G.H.useDeferredValue(b,M)},re.useEffect=function(b,M){return G.H.useEffect(b,M)},re.useEffectEvent=function(b){return G.H.useEffectEvent(b)},re.useId=function(){return G.H.useId()},re.useImperativeHandle=function(b,M,H){return G.H.useImperativeHandle(b,M,H)},re.useInsertionEffect=function(b,M){return G.H.useInsertionEffect(b,M)},re.useLayoutEffect=function(b,M){return G.H.useLayoutEffect(b,M)},re.useMemo=function(b,M){return G.H.useMemo(b,M)},re.useOptimistic=function(b,M){return G.H.useOptimistic(b,M)},re.useReducer=function(b,M,H){return G.H.useReducer(b,M,H)},re.useRef=function(b){return G.H.useRef(b)},re.useState=function(b){return G.H.useState(b)},re.useSyncExternalStore=function(b,M,H){return G.H.useSyncExternalStore(b,M,H)},re.useTransition=function(){return G.H.useTransition()},re.version="19.2.1",re}var $m;function cd(){return $m||($m=1,Oc.exports=wb()),Oc.exports}var k=cd();const si=og(k);var Mc={exports:{}},La={},Dc={exports:{}},jc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function Tb(){return e_||(e_=1,(function(s){function n(R,B){var Z=R.length;R.push(B);e:for(;0<Z;){var J=Z-1>>>1,oe=R[J];if(0<u(oe,B))R[J]=B,R[Z]=oe,Z=J;else break e}}function a(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var B=R[0],Z=R.pop();if(Z!==B){R[0]=Z;e:for(var J=0,oe=R.length,b=oe>>>1;J<b;){var M=2*(J+1)-1,H=R[M],V=M+1,ne=R[V];if(0>u(H,Z))V<oe&&0>u(ne,H)?(R[J]=ne,R[V]=Z,J=V):(R[J]=H,R[M]=Z,J=M);else if(V<oe&&0>u(ne,Z))R[J]=ne,R[V]=Z,J=V;else break e}}return B}function u(R,B){var Z=R.sortIndex-B.sortIndex;return Z!==0?Z:R.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;s.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();s.unstable_now=function(){return f.now()-m}}var g=[],p=[],C=1,v=null,E=3,z=!1,U=!1,I=!1,se=!1,le=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;function ae(R){for(var B=a(p);B!==null;){if(B.callback===null)r(p);else if(B.startTime<=R)r(p),B.sortIndex=B.expirationTime,n(g,B);else break;B=a(p)}}function $(R){if(I=!1,ae(R),!U)if(a(g)!==null)U=!0,te||(te=!0,he());else{var B=a(p);B!==null&&P($,B.startTime-R)}}var te=!1,G=-1,K=5,q=-1;function X(){return se?!0:!(s.unstable_now()-q<K)}function Se(){if(se=!1,te){var R=s.unstable_now();q=R;var B=!0;try{e:{U=!1,I&&(I=!1,ue(G),G=-1),z=!0;var Z=E;try{t:{for(ae(R),v=a(g);v!==null&&!(v.expirationTime>R&&X());){var J=v.callback;if(typeof J=="function"){v.callback=null,E=v.priorityLevel;var oe=J(v.expirationTime<=R);if(R=s.unstable_now(),typeof oe=="function"){v.callback=oe,ae(R),B=!0;break t}v===a(g)&&r(g),ae(R)}else r(g);v=a(g)}if(v!==null)B=!0;else{var b=a(p);b!==null&&P($,b.startTime-R),B=!1}}break e}finally{v=null,E=Z,z=!1}B=void 0}}finally{B?he():te=!1}}}var he;if(typeof de=="function")he=function(){de(Se)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Ne=Ze.port2;Ze.port1.onmessage=Se,he=function(){Ne.postMessage(null)}}else he=function(){le(Se,0)};function P(R,B){G=le(function(){R(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(R){R.callback=null},s.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<R?Math.floor(1e3/R):5},s.unstable_getCurrentPriorityLevel=function(){return E},s.unstable_next=function(R){switch(E){case 1:case 2:case 3:var B=3;break;default:B=E}var Z=E;E=B;try{return R()}finally{E=Z}},s.unstable_requestPaint=function(){se=!0},s.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Z=E;E=R;try{return B()}finally{E=Z}},s.unstable_scheduleCallback=function(R,B,Z){var J=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?J+Z:J):Z=J,R){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=Z+oe,R={id:C++,callback:B,priorityLevel:R,startTime:Z,expirationTime:oe,sortIndex:-1},Z>J?(R.sortIndex=Z,n(p,R),a(g)===null&&R===a(p)&&(I?(ue(G),G=-1):I=!0,P($,Z-J))):(R.sortIndex=oe,n(g,R),U||z||(U=!0,te||(te=!0,he()))),R},s.unstable_shouldYield=X,s.unstable_wrapCallback=function(R){var B=E;return function(){var Z=E;E=B;try{return R.apply(this,arguments)}finally{E=Z}}}})(jc)),jc}var t_;function Nb(){return t_||(t_=1,Dc.exports=Tb()),Dc.exports}var zc={exports:{}},pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function Ab(){if(n_)return pt;n_=1;var s=cd();function n(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)p+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(g,p,C){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:v==null?null:""+v,children:g,containerInfo:p,implementation:C}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,pt.createPortal=function(g,p){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return d(g,p,null,C)},pt.flushSync=function(g){var p=f.T,C=r.p;try{if(f.T=null,r.p=2,g)return g()}finally{f.T=p,r.p=C,r.d.f()}},pt.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},pt.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},pt.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var C=p.as,v=m(C,p.crossOrigin),E=typeof p.integrity=="string"?p.integrity:void 0,z=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;C==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:E,fetchPriority:z}):C==="script"&&r.d.X(g,{crossOrigin:v,integrity:E,fetchPriority:z,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},pt.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var C=m(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},pt.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var C=p.as,v=m(C,p.crossOrigin);r.d.L(g,C,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},pt.preloadModule=function(g,p){if(typeof g=="string")if(p){var C=m(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},pt.requestFormReset=function(g){r.d.r(g)},pt.unstable_batchedUpdates=function(g,p){return g(p)},pt.useFormState=function(g,p,C){return f.H.useFormState(g,p,C)},pt.useFormStatus=function(){return f.H.useHostTransitionStatus()},pt.version="19.2.1",pt}var i_;function Rb(){if(i_)return zc.exports;i_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(n){console.error(n)}}return s(),zc.exports=Ab(),zc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function Ob(){if(s_)return La;s_=1;var s=Nb(),n=cd(),a=Rb();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(r(188))}function p(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(r(188));return t!==e?null:e}for(var i=e,l=t;;){var o=i.return;if(o===null)break;var c=o.alternate;if(c===null){if(l=o.return,l!==null){i=l;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===i)return g(o),e;if(c===l)return g(o),t;c=c.sibling}throw Error(r(188))}if(i.return!==l.return)i=o,l=c;else{for(var h=!1,_=o.child;_;){if(_===i){h=!0,i=o,l=c;break}if(_===l){h=!0,l=o,i=c;break}_=_.sibling}if(!h){for(_=c.child;_;){if(_===i){h=!0,i=c,l=o;break}if(_===l){h=!0,l=c,i=o;break}_=_.sibling}if(!h)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),ue=Symbol.for("react.consumer"),de=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),Se=Symbol.iterator;function he(e){return e===null||typeof e!="object"?null:(e=Se&&e[Se]||e["@@iterator"],typeof e=="function"?e:null)}var Ze=Symbol.for("react.client.reference");function Ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ze?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case le:return"Profiler";case se:return"StrictMode";case $:return"Suspense";case te:return"SuspenseList";case q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case de:return e.displayName||"Context";case ue:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:Ne(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return Ne(e(t))}catch{}}return null}var P=Array.isArray,R=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},J=[],oe=-1;function b(e){return{current:e}}function M(e){0>oe||(e.current=J[oe],J[oe]=null,oe--)}function H(e,t){oe++,J[oe]=e.current,e.current=t}var V=b(null),ne=b(null),_e=b(null),Re=b(null);function _t(e,t){switch(H(_e,t),H(ne,e),H(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vm(t),e=bm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(V),H(V,e)}function Qe(){M(V),M(ne),M(_e)}function qs(e){e.memoizedState!==null&&H(Re,e);var t=V.current,i=bm(t,e.type);t!==i&&(H(ne,e),H(V,i))}function hl(e){ne.current===e&&(M(V),M(ne)),Re.current===e&&(M(Re),Oa._currentValue=Z)}var co,Kd;function fi(e){if(co===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);co=t&&t[1]||"",Kd=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+co+e+Kd}var fo=!1;function ho(e,t){if(!e||fo)return"";fo=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(O){var A=O}Reflect.construct(e,[],L)}else{try{L.call()}catch(O){A=O}e.call(L.prototype)}}else{try{throw Error()}catch(O){A=O}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(O){if(O&&A&&typeof O.stack=="string")return[O.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),h=c[0],_=c[1];if(h&&_){var x=h.split(`
`),N=_.split(`
`);for(o=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;o<N.length&&!N[o].includes("DetermineComponentFrameRoot");)o++;if(l===x.length||o===N.length)for(l=x.length-1,o=N.length-1;1<=l&&0<=o&&x[l]!==N[o];)o--;for(;1<=l&&0<=o;l--,o--)if(x[l]!==N[o]){if(l!==1||o!==1)do if(l--,o--,0>o||x[l]!==N[o]){var D=`
`+x[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=o);break}}}finally{fo=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?fi(i):""}function ey(e,t){switch(e.tag){case 26:case 27:case 5:return fi(e.type);case 16:return fi("Lazy");case 13:return e.child!==t&&t!==null?fi("Suspense Fallback"):fi("Suspense");case 19:return fi("SuspenseList");case 0:case 15:return ho(e.type,!1);case 11:return ho(e.type.render,!1);case 1:return ho(e.type,!0);case 31:return fi("Activity");default:return""}}function Zd(e){try{var t="",i=null;do t+=ey(e,i),i=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var po=Object.prototype.hasOwnProperty,mo=s.unstable_scheduleCallback,_o=s.unstable_cancelCallback,ty=s.unstable_shouldYield,ny=s.unstable_requestPaint,Rt=s.unstable_now,iy=s.unstable_getCurrentPriorityLevel,Jd=s.unstable_ImmediatePriority,Wd=s.unstable_UserBlockingPriority,pl=s.unstable_NormalPriority,sy=s.unstable_LowPriority,Pd=s.unstable_IdlePriority,ay=s.log,ly=s.unstable_setDisableYieldValue,Is=null,Ot=null;function jn(e){if(typeof ay=="function"&&ly(e),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(Is,e)}catch{}}var Mt=Math.clz32?Math.clz32:uy,ry=Math.log,oy=Math.LN2;function uy(e){return e>>>=0,e===0?32:31-(ry(e)/oy|0)|0}var ml=256,_l=262144,gl=4194304;function hi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yl(e,t,i){var l=e.pendingLanes;if(l===0)return 0;var o=0,c=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var _=l&134217727;return _!==0?(l=_&~c,l!==0?o=hi(l):(h&=_,h!==0?o=hi(h):i||(i=_&~e,i!==0&&(o=hi(i))))):(_=l&~c,_!==0?o=hi(_):h!==0?o=hi(h):i||(i=l&~e,i!==0&&(o=hi(i)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,i=t&-t,c>=i||c===32&&(i&4194048)!==0)?t:o}function Gs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $d(){var e=gl;return gl<<=1,(gl&62914560)===0&&(gl=4194304),e}function go(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Vs(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function dy(e,t,i,l,o,c){var h=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var _=e.entanglements,x=e.expirationTimes,N=e.hiddenUpdates;for(i=h&~i;0<i;){var D=31-Mt(i),L=1<<D;_[D]=0,x[D]=-1;var A=N[D];if(A!==null)for(N[D]=null,D=0;D<A.length;D++){var O=A[D];O!==null&&(O.lane&=-536870913)}i&=~L}l!==0&&ef(e,l,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(h&~t))}function ef(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Mt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|i&261930}function tf(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var l=31-Mt(i),o=1<<l;o&t|e[l]&t&&(e[l]|=t),i&=~o}}function nf(e,t){var i=t&-t;return i=(i&42)!==0?1:yo(i),(i&(e.suspendedLanes|t))!==0?0:i}function yo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sf(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Gm(e.type))}function af(e,t){var i=B.p;try{return B.p=e,t()}finally{B.p=i}}var zn=Math.random().toString(36).slice(2),ut="__reactFiber$"+zn,vt="__reactProps$"+zn,Ii="__reactContainer$"+zn,bo="__reactEvents$"+zn,fy="__reactListeners$"+zn,hy="__reactHandles$"+zn,lf="__reactResources$"+zn,Fs="__reactMarker$"+zn;function xo(e){delete e[ut],delete e[vt],delete e[bo],delete e[fy],delete e[hy]}function Gi(e){var t=e[ut];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Ii]||i[ut]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Nm(e);e!==null;){if(i=e[ut])return i;e=Nm(e)}return t}e=i,i=e.parentNode}return null}function Vi(e){if(e=e[ut]||e[Ii]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Qs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Fi(e){var t=e[lf];return t||(t=e[lf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[Fs]=!0}var rf=new Set,of={};function pi(e,t){Qi(e,t),Qi(e+"Capture",t)}function Qi(e,t){for(of[e]=t,e=0;e<t.length;e++)rf.add(t[e])}var py=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uf={},cf={};function my(e){return po.call(cf,e)?!0:po.call(uf,e)?!1:py.test(e)?cf[e]=!0:(uf[e]=!0,!1)}function vl(e,t,i){if(my(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function bl(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function cn(e,t,i,l){if(l===null)e.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+l)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function df(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _y(e,t,i){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var o=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(h){i=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){if(!e._valueTracker){var t=df(e)?"checked":"value";e._valueTracker=_y(e,t,""+e[t])}}function ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),l="";return e&&(l=df(e)?e.checked?"true":"false":e.value),e=l,e!==i?(t.setValue(e),!0):!1}function xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var gy=/[\n"\\]/g;function qt(e){return e.replace(gy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function So(e,t,i,l,o,c,h,_){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yt(t)):e.value!==""+Yt(t)&&(e.value=""+Yt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?Eo(e,h,Yt(t)):i!=null?Eo(e,h,Yt(i)):l!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+Yt(_):e.removeAttribute("name")}function hf(e,t,i,l,o,c,h,_){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Co(e);return}i=i!=null?""+Yt(i):"",t=t!=null?""+Yt(t):i,_||t===e.value||(e.value=t),e.defaultValue=t}l=l??o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=_?e.checked:!!l,e.defaultChecked=!!l,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Co(e)}function Eo(e,t,i){t==="number"&&xl(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Xi(e,t,i,l){if(e=e.options,t){t={};for(var o=0;o<i.length;o++)t["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=t.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&l&&(e[i].defaultSelected=!0)}else{for(i=""+Yt(i),t=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,l&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function pf(e,t,i){if(t!=null&&(t=""+Yt(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+Yt(i):""}function mf(e,t,i,l){if(t==null){if(l!=null){if(i!=null)throw Error(r(92));if(P(l)){if(1<l.length)throw Error(r(93));l=l[0]}i=l}i==null&&(i=""),t=i}i=Yt(t),e.defaultValue=i,l=e.textContent,l===i&&l!==""&&l!==null&&(e.value=l),Co(e)}function Ki(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var yy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _f(e,t,i){var l=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,i):typeof i!="number"||i===0||yy.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function gf(e,t,i){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var o in t)l=t[o],t.hasOwnProperty(o)&&i[o]!==l&&_f(e,o,l)}else for(var c in t)t.hasOwnProperty(c)&&_f(e,c,t[c])}function wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),by=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cl(e){return by.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var To=null;function No(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zi=null,Ji=null;function yf(e){var t=Vi(e);if(t&&(e=t.stateNode)){var i=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(So(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var l=i[t];if(l!==e&&l.form===e.form){var o=l[vt]||null;if(!o)throw Error(r(90));So(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<i.length;t++)l=i[t],l.form===e.form&&ff(l)}break e;case"textarea":pf(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&Xi(e,!!i.multiple,t,!1)}}}var Ao=!1;function vf(e,t,i){if(Ao)return e(t,i);Ao=!0;try{var l=e(t);return l}finally{if(Ao=!1,(Zi!==null||Ji!==null)&&(ur(),Zi&&(t=Zi,e=Ji,Ji=Zi=null,yf(t),e)))for(t=0;t<e.length;t++)yf(e[t])}}function Xs(e,t){var i=e.stateNode;if(i===null)return null;var l=i[vt]||null;if(l===null)return null;i=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,t,typeof i));return i}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ro=!1;if(fn)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){Ro=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{Ro=!1}var Ln=null,Oo=null,Sl=null;function bf(){if(Sl)return Sl;var e,t=Oo,i=t.length,l,o="value"in Ln?Ln.value:Ln.textContent,c=o.length;for(e=0;e<i&&t[e]===o[e];e++);var h=i-e;for(l=1;l<=h&&t[i-l]===o[c-l];l++);return Sl=o.slice(e,1<l?1-l:void 0)}function El(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wl(){return!0}function xf(){return!1}function bt(e){function t(i,l,o,c,h){this._reactName=i,this._targetInst=o,this.type=l,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(i=e[_],this[_]=i?i(c):c[_]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?wl:xf,this.isPropagationStopped=xf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),t}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=bt(mi),Zs=v({},mi,{view:0,detail:0}),xy=bt(Zs),Mo,Do,Js,Nl=v({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Js&&(Js&&e.type==="mousemove"?(Mo=e.screenX-Js.screenX,Do=e.screenY-Js.screenY):Do=Mo=0,Js=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:Do}}),Cf=bt(Nl),Cy=v({},Nl,{dataTransfer:0}),Sy=bt(Cy),Ey=v({},Zs,{relatedTarget:0}),jo=bt(Ey),wy=v({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ty=bt(wy),Ny=v({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ay=bt(Ny),Ry=v({},mi,{data:0}),Sf=bt(Ry),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dy[e])?!!t[e]:!1}function zo(){return jy}var zy=v({},Zs,{key:function(e){if(e.key){var t=Oy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=El(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?My[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zo,charCode:function(e){return e.type==="keypress"?El(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?El(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ly=bt(zy),ky=v({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=bt(ky),Uy=v({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zo}),Hy=bt(Uy),By=v({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yy=bt(By),qy=v({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=bt(qy),Gy=v({},mi,{newState:0,oldState:0}),Vy=bt(Gy),Fy=[9,13,27,32],Lo=fn&&"CompositionEvent"in window,Ws=null;fn&&"documentMode"in document&&(Ws=document.documentMode);var Qy=fn&&"TextEvent"in window&&!Ws,wf=fn&&(!Lo||Ws&&8<Ws&&11>=Ws),Tf=" ",Nf=!1;function Af(e,t){switch(e){case"keyup":return Fy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wi=!1;function Xy(e,t){switch(e){case"compositionend":return Rf(t);case"keypress":return t.which!==32?null:(Nf=!0,Tf);case"textInput":return e=t.data,e===Tf&&Nf?null:e;default:return null}}function Ky(e,t){if(Wi)return e==="compositionend"||!Lo&&Af(e,t)?(e=bf(),Sl=Oo=Ln=null,Wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wf&&t.locale!=="ko"?null:t.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zy[e.type]:t==="textarea"}function Mf(e,t,i,l){Zi?Ji?Ji.push(l):Ji=[l]:Zi=l,t=_r(t,"onChange"),0<t.length&&(i=new Tl("onChange","change",null,i,l),e.push({event:i,listeners:t}))}var Ps=null,$s=null;function Jy(e){hm(e,0)}function Al(e){var t=Qs(e);if(ff(t))return e}function Df(e,t){if(e==="change")return t}var jf=!1;if(fn){var ko;if(fn){var Uo="oninput"in document;if(!Uo){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),Uo=typeof zf.oninput=="function"}ko=Uo}else ko=!1;jf=ko&&(!document.documentMode||9<document.documentMode)}function Lf(){Ps&&(Ps.detachEvent("onpropertychange",kf),$s=Ps=null)}function kf(e){if(e.propertyName==="value"&&Al($s)){var t=[];Mf(t,$s,e,No(e)),vf(Jy,t)}}function Wy(e,t,i){e==="focusin"?(Lf(),Ps=t,$s=i,Ps.attachEvent("onpropertychange",kf)):e==="focusout"&&Lf()}function Py(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Al($s)}function $y(e,t){if(e==="click")return Al(t)}function ev(e,t){if(e==="input"||e==="change")return Al(t)}function tv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:tv;function ea(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),l=Object.keys(t);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var o=i[l];if(!po.call(t,o)||!Dt(e[o],t[o]))return!1}return!0}function Uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hf(e,t){var i=Uf(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=t&&l>=t)return{node:i,offset:t-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Uf(i)}}function Bf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xl(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=xl(e.document)}return t}function Ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var nv=fn&&"documentMode"in document&&11>=document.documentMode,Pi=null,Bo=null,ta=null,Yo=!1;function qf(e,t,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Yo||Pi==null||Pi!==xl(l)||(l=Pi,"selectionStart"in l&&Ho(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ta&&ea(ta,l)||(ta=l,l=_r(Bo,"onSelect"),0<l.length&&(t=new Tl("onSelect","select",null,t,i),e.push({event:t,listeners:l}),t.target=Pi)))}function _i(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var $i={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionrun:_i("Transition","TransitionRun"),transitionstart:_i("Transition","TransitionStart"),transitioncancel:_i("Transition","TransitionCancel"),transitionend:_i("Transition","TransitionEnd")},qo={},If={};fn&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function gi(e){if(qo[e])return qo[e];if(!$i[e])return e;var t=$i[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in If)return qo[e]=t[i];return e}var Gf=gi("animationend"),Vf=gi("animationiteration"),Ff=gi("animationstart"),iv=gi("transitionrun"),sv=gi("transitionstart"),av=gi("transitioncancel"),Qf=gi("transitionend"),Xf=new Map,Io="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Io.push("scrollEnd");function Jt(e,t){Xf.set(e,t),pi(t,[e])}var Rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},It=[],es=0,Go=0;function Ol(){for(var e=es,t=Go=es=0;t<e;){var i=It[t];It[t++]=null;var l=It[t];It[t++]=null;var o=It[t];It[t++]=null;var c=It[t];if(It[t++]=null,l!==null&&o!==null){var h=l.pending;h===null?o.next=o:(o.next=h.next,h.next=o),l.pending=o}c!==0&&Kf(i,o,c)}}function Ml(e,t,i,l){It[es++]=e,It[es++]=t,It[es++]=i,It[es++]=l,Go|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Vo(e,t,i,l){return Ml(e,t,i,l),Dl(e)}function yi(e,t){return Ml(e,null,null,t),Dl(e)}function Kf(e,t,i){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i);for(var o=!1,c=e.return;c!==null;)c.childLanes|=i,l=c.alternate,l!==null&&(l.childLanes|=i),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-Mt(i),e=c.hiddenUpdates,l=e[o],l===null?e[o]=[t]:l.push(t),t.lane=i|536870912),c):null}function Dl(e){if(50<Sa)throw Sa=0,$u=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ts={};function lv(e,t,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,i,l){return new lv(e,t,i,l)}function Fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hn(e,t){var i=e.alternate;return i===null?(i=jt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Zf(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function jl(e,t,i,l,o,c){var h=0;if(l=e,typeof e=="function")Fo(e)&&(h=1);else if(typeof e=="string")h=db(e,i,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case q:return e=jt(31,i,t,o),e.elementType=q,e.lanes=c,e;case I:return vi(i.children,o,c,t);case se:h=8,o|=24;break;case le:return e=jt(12,i,t,o|2),e.elementType=le,e.lanes=c,e;case $:return e=jt(13,i,t,o),e.elementType=$,e.lanes=c,e;case te:return e=jt(19,i,t,o),e.elementType=te,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case de:h=10;break e;case ue:h=9;break e;case ae:h=11;break e;case G:h=14;break e;case K:h=16,l=null;break e}h=29,i=Error(r(130,e===null?"null":typeof e,"")),l=null}return t=jt(h,i,t,o),t.elementType=e,t.type=l,t.lanes=c,t}function vi(e,t,i,l){return e=jt(7,e,l,t),e.lanes=i,e}function Qo(e,t,i){return e=jt(6,e,null,t),e.lanes=i,e}function Jf(e){var t=jt(18,null,null,0);return t.stateNode=e,t}function Xo(e,t,i){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wf=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var i=Wf.get(e);return i!==void 0?i:(t={value:e,source:t,stack:Zd(t)},Wf.set(e,t),t)}return{value:e,source:t,stack:Zd(t)}}var ns=[],is=0,zl=null,na=0,Vt=[],Ft=0,kn=null,an=1,ln="";function pn(e,t){ns[is++]=na,ns[is++]=zl,zl=e,na=t}function Pf(e,t,i){Vt[Ft++]=an,Vt[Ft++]=ln,Vt[Ft++]=kn,kn=e;var l=an;e=ln;var o=32-Mt(l)-1;l&=~(1<<o),i+=1;var c=32-Mt(t)+o;if(30<c){var h=o-o%5;c=(l&(1<<h)-1).toString(32),l>>=h,o-=h,an=1<<32-Mt(t)+o|i<<o|l,ln=c+e}else an=1<<c|i<<o|l,ln=e}function Ko(e){e.return!==null&&(pn(e,1),Pf(e,1,0))}function Zo(e){for(;e===zl;)zl=ns[--is],ns[is]=null,na=ns[--is],ns[is]=null;for(;e===kn;)kn=Vt[--Ft],Vt[Ft]=null,ln=Vt[--Ft],Vt[Ft]=null,an=Vt[--Ft],Vt[Ft]=null}function $f(e,t){Vt[Ft++]=an,Vt[Ft++]=ln,Vt[Ft++]=kn,an=t.id,ln=t.overflow,kn=e}var ct=null,Be=null,Ce=!1,Un=null,Qt=!1,Jo=Error(r(519));function Hn(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ia(Gt(t,e)),Jo}function eh(e){var t=e.stateNode,i=e.type,l=e.memoizedProps;switch(t[ut]=e,t[vt]=l,i){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(i=0;i<wa.length;i++)ye(wa[i],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),hf(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),mf(t,l.value,l.defaultValue,l.children)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||l.suppressHydrationWarning===!0||gm(t.textContent,i)?(l.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),l.onScroll!=null&&ye("scroll",t),l.onScrollEnd!=null&&ye("scrollend",t),l.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Hn(e,!0)}function th(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 31:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:ct=ct.return}}function ss(e){if(e!==ct)return!1;if(!Ce)return th(e),Ce=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||pc(e.type,e.memoizedProps)),i=!i),i&&Be&&Hn(e),th(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Be=Tm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Be=Tm(e)}else t===27?(t=Be,Pn(e.type)?(e=vc,vc=null,Be=e):Be=t):Be=ct?Kt(e.stateNode.nextSibling):null;return!0}function bi(){Be=ct=null,Ce=!1}function Wo(){var e=Un;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),Un=null),e}function ia(e){Un===null?Un=[e]:Un.push(e)}var Po=b(null),xi=null,mn=null;function Bn(e,t,i){H(Po,t._currentValue),t._currentValue=i}function _n(e){e._currentValue=Po.current,M(Po)}function $o(e,t,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===i)break;e=e.return}}function eu(e,t,i,l){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var h=o.child;c=c.firstContext;e:for(;c!==null;){var _=c;c=o;for(var x=0;x<t.length;x++)if(_.context===t[x]){c.lanes|=i,_=c.alternate,_!==null&&(_.lanes|=i),$o(c.return,i,e),l||(h=null);break e}c=_.next}}else if(o.tag===18){if(h=o.return,h===null)throw Error(r(341));h.lanes|=i,c=h.alternate,c!==null&&(c.lanes|=i),$o(h,i,e),h=null}else h=o.child;if(h!==null)h.return=o;else for(h=o;h!==null;){if(h===e){h=null;break}if(o=h.sibling,o!==null){o.return=h.return,h=o;break}h=h.return}o=h}}function as(e,t,i,l){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var h=o.alternate;if(h===null)throw Error(r(387));if(h=h.memoizedProps,h!==null){var _=o.type;Dt(o.pendingProps.value,h.value)||(e!==null?e.push(_):e=[_])}}else if(o===Re.current){if(h=o.alternate,h===null)throw Error(r(387));h.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Oa):e=[Oa])}o=o.return}e!==null&&eu(t,e,i,l),t.flags|=262144}function Ll(e){for(e=e.firstContext;e!==null;){if(!Dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ci(e){xi=e,mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return nh(xi,e)}function kl(e,t){return xi===null&&Ci(e),nh(e,t)}function nh(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},mn===null){if(e===null)throw Error(r(308));mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else mn=mn.next=t;return i}var rv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},ov=s.unstable_scheduleCallback,uv=s.unstable_NormalPriority,Je={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tu(){return{controller:new rv,data:new Map,refCount:0}}function sa(e){e.refCount--,e.refCount===0&&ov(uv,function(){e.controller.abort()})}var aa=null,nu=0,ls=0,rs=null;function cv(e,t){if(aa===null){var i=aa=[];nu=0,ls=ac(),rs={status:"pending",value:void 0,then:function(l){i.push(l)}}}return nu++,t.then(ih,ih),t}function ih(){if(--nu===0&&aa!==null){rs!==null&&(rs.status="fulfilled");var e=aa;aa=null,ls=0,rs=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function dv(e,t){var i=[],l={status:"pending",value:null,reason:null,then:function(o){i.push(o)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var o=0;o<i.length;o++)(0,i[o])(t)},function(o){for(l.status="rejected",l.reason=o,o=0;o<i.length;o++)(0,i[o])(void 0)}),l}var sh=R.S;R.S=function(e,t){qp=Rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&cv(e,t),sh!==null&&sh(e,t)};var Si=b(null);function iu(){var e=Si.current;return e!==null?e:Le.pooledCache}function Ul(e,t){t===null?H(Si,Si.current):H(Si,t.pool)}function ah(){var e=iu();return e===null?null:{parent:Je._currentValue,pool:e}}var os=Error(r(460)),su=Error(r(474)),Hl=Error(r(542)),Bl={then:function(){}};function lh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rh(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(dn,dn),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=l}},function(l){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e}throw wi=t,os}}function Ei(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(wi=i,os):i}}var wi=null;function oh(){if(wi===null)throw Error(r(459));var e=wi;return wi=null,e}function uh(e){if(e===os||e===Hl)throw Error(r(483))}var us=null,la=0;function Yl(e){var t=la;return la+=1,us===null&&(us=[]),rh(us,e,t)}function ra(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ql(e,t){throw t.$$typeof===E?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ch(e){function t(w,S){if(e){var T=w.deletions;T===null?(w.deletions=[S],w.flags|=16):T.push(S)}}function i(w,S){if(!e)return null;for(;S!==null;)t(w,S),S=S.sibling;return null}function l(w){for(var S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function o(w,S){return w=hn(w,S),w.index=0,w.sibling=null,w}function c(w,S,T){return w.index=T,e?(T=w.alternate,T!==null?(T=T.index,T<S?(w.flags|=67108866,S):T):(w.flags|=67108866,S)):(w.flags|=1048576,S)}function h(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function _(w,S,T,j){return S===null||S.tag!==6?(S=Qo(T,w.mode,j),S.return=w,S):(S=o(S,T),S.return=w,S)}function x(w,S,T,j){var W=T.type;return W===I?D(w,S,T.props.children,j,T.key):S!==null&&(S.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===K&&Ei(W)===S.type)?(S=o(S,T.props),ra(S,T),S.return=w,S):(S=jl(T.type,T.key,T.props,null,w.mode,j),ra(S,T),S.return=w,S)}function N(w,S,T,j){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=Xo(T,w.mode,j),S.return=w,S):(S=o(S,T.children||[]),S.return=w,S)}function D(w,S,T,j,W){return S===null||S.tag!==7?(S=vi(T,w.mode,j,W),S.return=w,S):(S=o(S,T),S.return=w,S)}function L(w,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Qo(""+S,w.mode,T),S.return=w,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case z:return T=jl(S.type,S.key,S.props,null,w.mode,T),ra(T,S),T.return=w,T;case U:return S=Xo(S,w.mode,T),S.return=w,S;case K:return S=Ei(S),L(w,S,T)}if(P(S)||he(S))return S=vi(S,w.mode,T,null),S.return=w,S;if(typeof S.then=="function")return L(w,Yl(S),T);if(S.$$typeof===de)return L(w,kl(w,S),T);ql(w,S)}return null}function A(w,S,T,j){var W=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return W!==null?null:_(w,S,""+T,j);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case z:return T.key===W?x(w,S,T,j):null;case U:return T.key===W?N(w,S,T,j):null;case K:return T=Ei(T),A(w,S,T,j)}if(P(T)||he(T))return W!==null?null:D(w,S,T,j,null);if(typeof T.then=="function")return A(w,S,Yl(T),j);if(T.$$typeof===de)return A(w,S,kl(w,T),j);ql(w,T)}return null}function O(w,S,T,j,W){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return w=w.get(T)||null,_(S,w,""+j,W);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case z:return w=w.get(j.key===null?T:j.key)||null,x(S,w,j,W);case U:return w=w.get(j.key===null?T:j.key)||null,N(S,w,j,W);case K:return j=Ei(j),O(w,S,T,j,W)}if(P(j)||he(j))return w=w.get(T)||null,D(S,w,j,W,null);if(typeof j.then=="function")return O(w,S,T,Yl(j),W);if(j.$$typeof===de)return O(w,S,T,kl(S,j),W);ql(S,j)}return null}function F(w,S,T,j){for(var W=null,Ee=null,Q=S,fe=S=0,xe=null;Q!==null&&fe<T.length;fe++){Q.index>fe?(xe=Q,Q=null):xe=Q.sibling;var we=A(w,Q,T[fe],j);if(we===null){Q===null&&(Q=xe);break}e&&Q&&we.alternate===null&&t(w,Q),S=c(we,S,fe),Ee===null?W=we:Ee.sibling=we,Ee=we,Q=xe}if(fe===T.length)return i(w,Q),Ce&&pn(w,fe),W;if(Q===null){for(;fe<T.length;fe++)Q=L(w,T[fe],j),Q!==null&&(S=c(Q,S,fe),Ee===null?W=Q:Ee.sibling=Q,Ee=Q);return Ce&&pn(w,fe),W}for(Q=l(Q);fe<T.length;fe++)xe=O(Q,w,fe,T[fe],j),xe!==null&&(e&&xe.alternate!==null&&Q.delete(xe.key===null?fe:xe.key),S=c(xe,S,fe),Ee===null?W=xe:Ee.sibling=xe,Ee=xe);return e&&Q.forEach(function(ii){return t(w,ii)}),Ce&&pn(w,fe),W}function ee(w,S,T,j){if(T==null)throw Error(r(151));for(var W=null,Ee=null,Q=S,fe=S=0,xe=null,we=T.next();Q!==null&&!we.done;fe++,we=T.next()){Q.index>fe?(xe=Q,Q=null):xe=Q.sibling;var ii=A(w,Q,we.value,j);if(ii===null){Q===null&&(Q=xe);break}e&&Q&&ii.alternate===null&&t(w,Q),S=c(ii,S,fe),Ee===null?W=ii:Ee.sibling=ii,Ee=ii,Q=xe}if(we.done)return i(w,Q),Ce&&pn(w,fe),W;if(Q===null){for(;!we.done;fe++,we=T.next())we=L(w,we.value,j),we!==null&&(S=c(we,S,fe),Ee===null?W=we:Ee.sibling=we,Ee=we);return Ce&&pn(w,fe),W}for(Q=l(Q);!we.done;fe++,we=T.next())we=O(Q,w,fe,we.value,j),we!==null&&(e&&we.alternate!==null&&Q.delete(we.key===null?fe:we.key),S=c(we,S,fe),Ee===null?W=we:Ee.sibling=we,Ee=we);return e&&Q.forEach(function(Cb){return t(w,Cb)}),Ce&&pn(w,fe),W}function ze(w,S,T,j){if(typeof T=="object"&&T!==null&&T.type===I&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case z:e:{for(var W=T.key;S!==null;){if(S.key===W){if(W=T.type,W===I){if(S.tag===7){i(w,S.sibling),j=o(S,T.props.children),j.return=w,w=j;break e}}else if(S.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===K&&Ei(W)===S.type){i(w,S.sibling),j=o(S,T.props),ra(j,T),j.return=w,w=j;break e}i(w,S);break}else t(w,S);S=S.sibling}T.type===I?(j=vi(T.props.children,w.mode,j,T.key),j.return=w,w=j):(j=jl(T.type,T.key,T.props,null,w.mode,j),ra(j,T),j.return=w,w=j)}return h(w);case U:e:{for(W=T.key;S!==null;){if(S.key===W)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){i(w,S.sibling),j=o(S,T.children||[]),j.return=w,w=j;break e}else{i(w,S);break}else t(w,S);S=S.sibling}j=Xo(T,w.mode,j),j.return=w,w=j}return h(w);case K:return T=Ei(T),ze(w,S,T,j)}if(P(T))return F(w,S,T,j);if(he(T)){if(W=he(T),typeof W!="function")throw Error(r(150));return T=W.call(T),ee(w,S,T,j)}if(typeof T.then=="function")return ze(w,S,Yl(T),j);if(T.$$typeof===de)return ze(w,S,kl(w,T),j);ql(w,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,S!==null&&S.tag===6?(i(w,S.sibling),j=o(S,T),j.return=w,w=j):(i(w,S),j=Qo(T,w.mode,j),j.return=w,w=j),h(w)):i(w,S)}return function(w,S,T,j){try{la=0;var W=ze(w,S,T,j);return us=null,W}catch(Q){if(Q===os||Q===Hl)throw Q;var Ee=jt(29,Q,null,w.mode);return Ee.lanes=j,Ee.return=w,Ee}finally{}}}var Ti=ch(!0),dh=ch(!1),Yn=!1;function au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function In(e,t,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ae&2)!==0){var o=l.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),l.pending=t,t=Dl(e),Kf(e,null,i),t}return Ml(e,l,t,i),Dl(e)}function oa(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,tf(e,i)}}function ru(e,t){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var o=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var h={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?o=c=h:c=c.next=h,i=i.next}while(i!==null);c===null?o=c=t:c=c.next=t}else o=c=t;i={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var ou=!1;function ua(){if(ou){var e=rs;if(e!==null)throw e}}function ca(e,t,i,l){ou=!1;var o=e.updateQueue;Yn=!1;var c=o.firstBaseUpdate,h=o.lastBaseUpdate,_=o.shared.pending;if(_!==null){o.shared.pending=null;var x=_,N=x.next;x.next=null,h===null?c=N:h.next=N,h=x;var D=e.alternate;D!==null&&(D=D.updateQueue,_=D.lastBaseUpdate,_!==h&&(_===null?D.firstBaseUpdate=N:_.next=N,D.lastBaseUpdate=x))}if(c!==null){var L=o.baseState;h=0,D=N=x=null,_=c;do{var A=_.lane&-536870913,O=A!==_.lane;if(O?(be&A)===A:(l&A)===A){A!==0&&A===ls&&(ou=!0),D!==null&&(D=D.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var F=e,ee=_;A=t;var ze=i;switch(ee.tag){case 1:if(F=ee.payload,typeof F=="function"){L=F.call(ze,L,A);break e}L=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=ee.payload,A=typeof F=="function"?F.call(ze,L,A):F,A==null)break e;L=v({},L,A);break e;case 2:Yn=!0}}A=_.callback,A!==null&&(e.flags|=64,O&&(e.flags|=8192),O=o.callbacks,O===null?o.callbacks=[A]:O.push(A))}else O={lane:A,tag:_.tag,payload:_.payload,callback:_.callback,next:null},D===null?(N=D=O,x=L):D=D.next=O,h|=A;if(_=_.next,_===null){if(_=o.shared.pending,_===null)break;O=_,_=O.next,O.next=null,o.lastBaseUpdate=O,o.shared.pending=null}}while(!0);D===null&&(x=L),o.baseState=x,o.firstBaseUpdate=N,o.lastBaseUpdate=D,c===null&&(o.shared.lanes=0),Xn|=h,e.lanes=h,e.memoizedState=L}}function fh(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function hh(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)fh(i[e],t)}var cs=b(null),Il=b(0);function ph(e,t){e=wn,H(Il,e),H(cs,t),wn=e|t.baseLanes}function uu(){H(Il,wn),H(cs,cs.current)}function cu(){wn=Il.current,M(cs),M(Il)}var zt=b(null),Xt=null;function Gn(e){var t=e.alternate;H(Xe,Xe.current&1),H(zt,e),Xt===null&&(t===null||cs.current!==null||t.memoizedState!==null)&&(Xt=e)}function du(e){H(Xe,Xe.current),H(zt,e),Xt===null&&(Xt=e)}function mh(e){e.tag===22?(H(Xe,Xe.current),H(zt,e),Xt===null&&(Xt=e)):Vn()}function Vn(){H(Xe,Xe.current),H(zt,zt.current)}function Lt(e){M(zt),Xt===e&&(Xt=null),M(Xe)}var Xe=b(0);function Gl(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||gc(i)||yc(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gn=0,ce=null,De=null,We=null,Vl=!1,ds=!1,Ni=!1,Fl=0,da=0,fs=null,fv=0;function Ge(){throw Error(r(321))}function fu(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Dt(e[i],t[i]))return!1;return!0}function hu(e,t,i,l,o,c){return gn=c,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Ph:Au,Ni=!1,c=i(l,o),Ni=!1,ds&&(c=gh(t,i,l,o)),_h(e),c}function _h(e){R.H=pa;var t=De!==null&&De.next!==null;if(gn=0,We=De=ce=null,Vl=!1,da=0,fs=null,t)throw Error(r(300));e===null||Pe||(e=e.dependencies,e!==null&&Ll(e)&&(Pe=!0))}function gh(e,t,i,l){ce=e;var o=0;do{if(ds&&(fs=null),da=0,ds=!1,25<=o)throw Error(r(301));if(o+=1,We=De=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}R.H=$h,c=t(i,l)}while(ds);return c}function hv(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?fa(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ce.flags|=1024),t}function pu(){var e=Fl!==0;return Fl=0,e}function mu(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function _u(e){if(Vl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vl=!1}gn=0,We=De=ce=null,ds=!1,da=Fl=0,fs=null}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ce.memoizedState=We=e:We=We.next=e,We}function Ke(){if(De===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=We===null?ce.memoizedState:We.next;if(t!==null)We=t,De=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},We===null?ce.memoizedState=We=e:We=We.next=e}return We}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fa(e){var t=da;return da+=1,fs===null&&(fs=[]),e=rh(fs,e,t),t=ce,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Ph:Au),e}function Xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fa(e);if(e.$$typeof===de)return dt(e)}throw Error(r(438,String(e)))}function gu(e){var t=null,i=ce.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=Ql(),ce.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),l=0;l<e;l++)i[l]=X;return t.index++,i}function yn(e,t){return typeof t=="function"?t(e):t}function Kl(e){var t=Ke();return yu(t,De,e)}function yu(e,t,i){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var o=e.baseQueue,c=l.pending;if(c!==null){if(o!==null){var h=o.next;o.next=c.next,c.next=h}t.baseQueue=o=c,l.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var _=h=null,x=null,N=t,D=!1;do{var L=N.lane&-536870913;if(L!==N.lane?(be&L)===L:(gn&L)===L){var A=N.revertLane;if(A===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),L===ls&&(D=!0);else if((gn&A)===A){N=N.next,A===ls&&(D=!0);continue}else L={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(_=x=L,h=c):x=x.next=L,ce.lanes|=A,Xn|=A;L=N.action,Ni&&i(c,L),c=N.hasEagerState?N.eagerState:i(c,L)}else A={lane:L,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(_=x=A,h=c):x=x.next=A,ce.lanes|=L,Xn|=L;N=N.next}while(N!==null&&N!==t);if(x===null?h=c:x.next=_,!Dt(c,e.memoizedState)&&(Pe=!0,D&&(i=rs,i!==null)))throw i;e.memoizedState=c,e.baseState=h,e.baseQueue=x,l.lastRenderedState=c}return o===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function vu(e){var t=Ke(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,o=i.pending,c=t.memoizedState;if(o!==null){i.pending=null;var h=o=o.next;do c=e(c,h.action),h=h.next;while(h!==o);Dt(c,t.memoizedState)||(Pe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),i.lastRenderedState=c}return[c,l]}function yh(e,t,i){var l=ce,o=Ke(),c=Ce;if(c){if(i===void 0)throw Error(r(407));i=i()}else i=t();var h=!Dt((De||o).memoizedState,i);if(h&&(o.memoizedState=i,Pe=!0),o=o.queue,Cu(xh.bind(null,l,o,e),[e]),o.getSnapshot!==t||h||We!==null&&We.memoizedState.tag&1){if(l.flags|=2048,hs(9,{destroy:void 0},bh.bind(null,l,o,i,t),null),Le===null)throw Error(r(349));c||(gn&127)!==0||vh(l,t,i)}return i}function vh(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ce.updateQueue,t===null?(t=Ql(),ce.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function bh(e,t,i,l){t.value=i,t.getSnapshot=l,Ch(t)&&Sh(e)}function xh(e,t,i){return i(function(){Ch(t)&&Sh(e)})}function Ch(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Dt(e,i)}catch{return!0}}function Sh(e){var t=yi(e,2);t!==null&&wt(t,e,2)}function bu(e){var t=gt();if(typeof e=="function"){var i=e;if(e=i(),Ni){jn(!0);try{i()}finally{jn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t}function Eh(e,t,i,l){return e.baseState=i,yu(e,De,typeof l=="function"?l:yn)}function pv(e,t,i,l,o){if(Wl(e))throw Error(r(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};R.T!==null?i(!0):c.isTransition=!1,l(c),i=t.pending,i===null?(c.next=t.pending=c,wh(t,c)):(c.next=i.next,t.pending=i.next=c)}}function wh(e,t){var i=t.action,l=t.payload,o=e.state;if(t.isTransition){var c=R.T,h={};R.T=h;try{var _=i(o,l),x=R.S;x!==null&&x(h,_),Th(e,t,_)}catch(N){xu(e,t,N)}finally{c!==null&&h.types!==null&&(c.types=h.types),R.T=c}}else try{c=i(o,l),Th(e,t,c)}catch(N){xu(e,t,N)}}function Th(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){Nh(e,t,l)},function(l){return xu(e,t,l)}):Nh(e,t,i)}function Nh(e,t,i){t.status="fulfilled",t.value=i,Ah(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,wh(e,i)))}function xu(e,t,i){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=i,Ah(t),t=t.next;while(t!==l)}e.action=null}function Ah(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rh(e,t){return t}function Oh(e,t){if(Ce){var i=Le.formState;if(i!==null){e:{var l=ce;if(Ce){if(Be){t:{for(var o=Be,c=Qt;o.nodeType!==8;){if(!c){o=null;break t}if(o=Kt(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Be=Kt(o.nextSibling),l=o.data==="F!";break e}}Hn(l)}l=!1}l&&(t=i[0])}}return i=gt(),i.memoizedState=i.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rh,lastRenderedState:t},i.queue=l,i=Zh.bind(null,ce,l),l.dispatch=i,l=bu(!1),c=Nu.bind(null,ce,!1,l.queue),l=gt(),o={state:t,dispatch:null,action:e,pending:null},l.queue=o,i=pv.bind(null,ce,o,c,i),o.dispatch=i,l.memoizedState=e,[t,i,!1]}function Mh(e){var t=Ke();return Dh(t,De,e)}function Dh(e,t,i){if(t=yu(e,t,Rh)[0],e=Kl(yn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=fa(t)}catch(h){throw h===os?Hl:h}else l=t;t=Ke();var o=t.queue,c=o.dispatch;return i!==t.memoizedState&&(ce.flags|=2048,hs(9,{destroy:void 0},mv.bind(null,o,i),null)),[l,c,e]}function mv(e,t){e.action=t}function jh(e){var t=Ke(),i=De;if(i!==null)return Dh(t,i,e);Ke(),t=t.memoizedState,i=Ke();var l=i.queue.dispatch;return i.memoizedState=e,[t,l,!1]}function hs(e,t,i,l){return e={tag:e,create:i,deps:l,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Ql(),ce.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,t.lastEffect=e),e}function zh(){return Ke().memoizedState}function Zl(e,t,i,l){var o=gt();ce.flags|=e,o.memoizedState=hs(1|t,{destroy:void 0},i,l===void 0?null:l)}function Jl(e,t,i,l){var o=Ke();l=l===void 0?null:l;var c=o.memoizedState.inst;De!==null&&l!==null&&fu(l,De.memoizedState.deps)?o.memoizedState=hs(t,c,i,l):(ce.flags|=e,o.memoizedState=hs(1|t,c,i,l))}function Lh(e,t){Zl(8390656,8,e,t)}function Cu(e,t){Jl(2048,8,e,t)}function _v(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Ql(),ce.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function kh(e){var t=Ke().memoizedState;return _v({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Uh(e,t){return Jl(4,2,e,t)}function Hh(e,t){return Jl(4,4,e,t)}function Bh(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yh(e,t,i){i=i!=null?i.concat([e]):null,Jl(4,4,Bh.bind(null,t,e),i)}function Su(){}function qh(e,t){var i=Ke();t=t===void 0?null:t;var l=i.memoizedState;return t!==null&&fu(t,l[1])?l[0]:(i.memoizedState=[e,t],e)}function Ih(e,t){var i=Ke();t=t===void 0?null:t;var l=i.memoizedState;if(t!==null&&fu(t,l[1]))return l[0];if(l=e(),Ni){jn(!0);try{e()}finally{jn(!1)}}return i.memoizedState=[l,t],l}function Eu(e,t,i){return i===void 0||(gn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=Gp(),ce.lanes|=e,Xn|=e,i)}function Gh(e,t,i,l){return Dt(i,t)?i:cs.current!==null?(e=Eu(e,i,l),Dt(e,t)||(Pe=!0),e):(gn&42)===0||(gn&1073741824)!==0&&(be&261930)===0?(Pe=!0,e.memoizedState=i):(e=Gp(),ce.lanes|=e,Xn|=e,t)}function Vh(e,t,i,l,o){var c=B.p;B.p=c!==0&&8>c?c:8;var h=R.T,_={};R.T=_,Nu(e,!1,t,i);try{var x=o(),N=R.S;if(N!==null&&N(_,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var D=dv(x,l);ha(e,t,D,Ht(e))}else ha(e,t,l,Ht(e))}catch(L){ha(e,t,{then:function(){},status:"rejected",reason:L},Ht())}finally{B.p=c,h!==null&&_.types!==null&&(h.types=_.types),R.T=h}}function gv(){}function wu(e,t,i,l){if(e.tag!==5)throw Error(r(476));var o=Fh(e).queue;Vh(e,o,t,Z,i===null?gv:function(){return Qh(e),i(l)})}function Fh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:Z},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qh(e){var t=Fh(e);t.next===null&&(t=e.alternate.memoizedState),ha(e,t.next.queue,{},Ht())}function Tu(){return dt(Oa)}function Xh(){return Ke().memoizedState}function Kh(){return Ke().memoizedState}function yv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=Ht();e=qn(i);var l=In(t,e,i);l!==null&&(wt(l,t,i),oa(l,t,i)),t={cache:tu()},e.payload=t;return}t=t.return}}function vv(e,t,i){var l=Ht();i={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Wl(e)?Jh(t,i):(i=Vo(e,t,i,l),i!==null&&(wt(i,e,l),Wh(i,t,l)))}function Zh(e,t,i){var l=Ht();ha(e,t,i,l)}function ha(e,t,i,l){var o={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Wl(e))Jh(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,_=c(h,i);if(o.hasEagerState=!0,o.eagerState=_,Dt(_,h))return Ml(e,t,o,0),Le===null&&Ol(),!1}catch{}finally{}if(i=Vo(e,t,o,l),i!==null)return wt(i,e,l),Wh(i,t,l),!0}return!1}function Nu(e,t,i,l){if(l={lane:2,revertLane:ac(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Wl(e)){if(t)throw Error(r(479))}else t=Vo(e,i,l,2),t!==null&&wt(t,e,2)}function Wl(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Jh(e,t){ds=Vl=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Wh(e,t,i){if((i&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,tf(e,i)}}var pa={readContext:dt,use:Xl,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};pa.useEffectEvent=Ge;var Ph={readContext:dt,use:Xl,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Lh,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,Zl(4194308,4,Bh.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Zl(4194308,4,e,t)},useInsertionEffect:function(e,t){Zl(4,2,e,t)},useMemo:function(e,t){var i=gt();t=t===void 0?null:t;var l=e();if(Ni){jn(!0);try{e()}finally{jn(!1)}}return i.memoizedState=[l,t],l},useReducer:function(e,t,i){var l=gt();if(i!==void 0){var o=i(t);if(Ni){jn(!0);try{i(t)}finally{jn(!1)}}}else o=t;return l.memoizedState=l.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},l.queue=e,e=e.dispatch=vv.bind(null,ce,e),[l.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:function(e){e=bu(e);var t=e.queue,i=Zh.bind(null,ce,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:Su,useDeferredValue:function(e,t){var i=gt();return Eu(i,e,t)},useTransition:function(){var e=bu(!1);return e=Vh.bind(null,ce,e.queue,!0,!1),gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var l=ce,o=gt();if(Ce){if(i===void 0)throw Error(r(407));i=i()}else{if(i=t(),Le===null)throw Error(r(349));(be&127)!==0||vh(l,t,i)}o.memoizedState=i;var c={value:i,getSnapshot:t};return o.queue=c,Lh(xh.bind(null,l,c,e),[e]),l.flags|=2048,hs(9,{destroy:void 0},bh.bind(null,l,c,i,t),null),i},useId:function(){var e=gt(),t=Le.identifierPrefix;if(Ce){var i=ln,l=an;i=(l&~(1<<32-Mt(l)-1)).toString(32)+i,t="_"+t+"R_"+i,i=Fl++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=fv++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Tu,useFormState:Oh,useActionState:Oh,useOptimistic:function(e){var t=gt();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=Nu.bind(null,ce,!0,i),i.dispatch=t,[e,t]},useMemoCache:gu,useCacheRefresh:function(){return gt().memoizedState=yv.bind(null,ce)},useEffectEvent:function(e){var t=gt(),i={impl:e};return t.memoizedState=i,function(){if((Ae&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}},Au={readContext:dt,use:Xl,useCallback:qh,useContext:dt,useEffect:Cu,useImperativeHandle:Yh,useInsertionEffect:Uh,useLayoutEffect:Hh,useMemo:Ih,useReducer:Kl,useRef:zh,useState:function(){return Kl(yn)},useDebugValue:Su,useDeferredValue:function(e,t){var i=Ke();return Gh(i,De.memoizedState,e,t)},useTransition:function(){var e=Kl(yn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:fa(e),t]},useSyncExternalStore:yh,useId:Xh,useHostTransitionStatus:Tu,useFormState:Mh,useActionState:Mh,useOptimistic:function(e,t){var i=Ke();return Eh(i,De,e,t)},useMemoCache:gu,useCacheRefresh:Kh};Au.useEffectEvent=kh;var $h={readContext:dt,use:Xl,useCallback:qh,useContext:dt,useEffect:Cu,useImperativeHandle:Yh,useInsertionEffect:Uh,useLayoutEffect:Hh,useMemo:Ih,useReducer:vu,useRef:zh,useState:function(){return vu(yn)},useDebugValue:Su,useDeferredValue:function(e,t){var i=Ke();return De===null?Eu(i,e,t):Gh(i,De.memoizedState,e,t)},useTransition:function(){var e=vu(yn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:fa(e),t]},useSyncExternalStore:yh,useId:Xh,useHostTransitionStatus:Tu,useFormState:jh,useActionState:jh,useOptimistic:function(e,t){var i=Ke();return De!==null?Eh(i,De,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:gu,useCacheRefresh:Kh};$h.useEffectEvent=kh;function Ru(e,t,i,l){t=e.memoizedState,i=i(l,t),i=i==null?t:v({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Ou={enqueueSetState:function(e,t,i){e=e._reactInternals;var l=Ht(),o=qn(l);o.payload=t,i!=null&&(o.callback=i),t=In(e,o,l),t!==null&&(wt(t,e,l),oa(t,e,l))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var l=Ht(),o=qn(l);o.tag=1,o.payload=t,i!=null&&(o.callback=i),t=In(e,o,l),t!==null&&(wt(t,e,l),oa(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Ht(),l=qn(i);l.tag=2,t!=null&&(l.callback=t),t=In(e,l,i),t!==null&&(wt(t,e,i),oa(t,e,i))}};function ep(e,t,i,l,o,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,h):t.prototype&&t.prototype.isPureReactComponent?!ea(i,l)||!ea(o,c):!0}function tp(e,t,i,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,l),t.state!==e&&Ou.enqueueReplaceState(t,t.state,null)}function Ai(e,t){var i=t;if("ref"in t){i={};for(var l in t)l!=="ref"&&(i[l]=t[l])}if(e=e.defaultProps){i===t&&(i=v({},i));for(var o in e)i[o]===void 0&&(i[o]=e[o])}return i}function np(e){Rl(e)}function ip(e){console.error(e)}function sp(e){Rl(e)}function Pl(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ap(e,t,i){try{var l=e.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Mu(e,t,i){return i=qn(i),i.tag=3,i.payload={element:null},i.callback=function(){Pl(e,t)},i}function lp(e){return e=qn(e),e.tag=3,e}function rp(e,t,i,l){var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var c=l.value;e.payload=function(){return o(c)},e.callback=function(){ap(t,i,l)}}var h=i.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){ap(t,i,l),typeof o!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var _=l.stack;this.componentDidCatch(l.value,{componentStack:_!==null?_:""})})}function bv(e,t,i,l,o){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=i.alternate,t!==null&&as(t,i,o,!0),i=zt.current,i!==null){switch(i.tag){case 31:case 13:return Xt===null?cr():i.alternate===null&&Ve===0&&(Ve=3),i.flags&=-257,i.flags|=65536,i.lanes=o,l===Bl?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([l]):t.add(l),nc(e,l,o)),!1;case 22:return i.flags|=65536,l===Bl?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([l]):i.add(l)),nc(e,l,o)),!1}throw Error(r(435,i.tag))}return nc(e,l,o),cr(),!1}if(Ce)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,l!==Jo&&(e=Error(r(422),{cause:l}),ia(Gt(e,i)))):(l!==Jo&&(t=Error(r(423),{cause:l}),ia(Gt(t,i))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,l=Gt(l,i),o=Mu(e.stateNode,l,o),ru(e,o),Ve!==4&&(Ve=2)),!1;var c=Error(r(520),{cause:l});if(c=Gt(c,i),Ca===null?Ca=[c]:Ca.push(c),Ve!==4&&(Ve=2),t===null)return!0;l=Gt(l,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=o&-o,i.lanes|=e,e=Mu(i.stateNode,l,e),ru(i,e),!1;case 1:if(t=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Kn===null||!Kn.has(c))))return i.flags|=65536,o&=-o,i.lanes|=o,o=lp(o),rp(o,e,i,l),ru(i,o),!1}i=i.return}while(i!==null);return!1}var Du=Error(r(461)),Pe=!1;function ft(e,t,i,l){t.child=e===null?dh(t,null,i,l):Ti(t,e.child,i,l)}function op(e,t,i,l,o){i=i.render;var c=t.ref;if("ref"in l){var h={};for(var _ in l)_!=="ref"&&(h[_]=l[_])}else h=l;return Ci(t),l=hu(e,t,i,h,c,o),_=pu(),e!==null&&!Pe?(mu(e,t,o),vn(e,t,o)):(Ce&&_&&Ko(t),t.flags|=1,ft(e,t,l,o),t.child)}function up(e,t,i,l,o){if(e===null){var c=i.type;return typeof c=="function"&&!Fo(c)&&c.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=c,cp(e,t,c,l,o)):(e=jl(i.type,null,l,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Yu(e,o)){var h=c.memoizedProps;if(i=i.compare,i=i!==null?i:ea,i(h,l)&&e.ref===t.ref)return vn(e,t,o)}return t.flags|=1,e=hn(c,l),e.ref=t.ref,e.return=t,t.child=e}function cp(e,t,i,l,o){if(e!==null){var c=e.memoizedProps;if(ea(c,l)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=l=c,Yu(e,o))(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,vn(e,t,o)}return ju(e,t,i,l,o)}function dp(e,t,i,l){var o=l.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;l=o&~c}else l=0,t.child=null;return fp(e,t,c,i,l)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ul(t,c!==null?c.cachePool:null),c!==null?ph(t,c):uu(),mh(t);else return l=t.lanes=536870912,fp(e,t,c!==null?c.baseLanes|i:i,i,l)}else c!==null?(Ul(t,c.cachePool),ph(t,c),Vn(),t.memoizedState=null):(e!==null&&Ul(t,null),uu(),Vn());return ft(e,t,o,i),t.child}function ma(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fp(e,t,i,l,o){var c=iu();return c=c===null?null:{parent:Je._currentValue,pool:c},t.memoizedState={baseLanes:i,cachePool:c},e!==null&&Ul(t,null),uu(),mh(t),e!==null&&as(e,t,l,!0),t.childLanes=o,null}function $l(e,t){return t=tr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hp(e,t,i){return Ti(t,e.child,null,i),e=$l(t,t.pendingProps),e.flags|=2,Lt(t),t.memoizedState=null,e}function xv(e,t,i){var l=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(l.mode==="hidden")return e=$l(t,l),t.lanes=536870912,ma(null,e);if(du(t),(e=Be)?(e=wm(e,Qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:kn!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},i=Jf(e),i.return=t,t.child=i,ct=t,Be=null)):e=null,e===null)throw Hn(t);return t.lanes=536870912,null}return $l(t,l)}var c=e.memoizedState;if(c!==null){var h=c.dehydrated;if(du(t),o)if(t.flags&256)t.flags&=-257,t=hp(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Pe||as(e,t,i,!1),o=(i&e.childLanes)!==0,Pe||o){if(l=Le,l!==null&&(h=nf(l,i),h!==0&&h!==c.retryLane))throw c.retryLane=h,yi(e,h),wt(l,e,h),Du;cr(),t=hp(e,t,i)}else e=c.treeContext,Be=Kt(h.nextSibling),ct=t,Ce=!0,Un=null,Qt=!1,e!==null&&$f(t,e),t=$l(t,l),t.flags|=4096;return t}return e=hn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function er(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(r(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function ju(e,t,i,l,o){return Ci(t),i=hu(e,t,i,l,void 0,o),l=pu(),e!==null&&!Pe?(mu(e,t,o),vn(e,t,o)):(Ce&&l&&Ko(t),t.flags|=1,ft(e,t,i,o),t.child)}function pp(e,t,i,l,o,c){return Ci(t),t.updateQueue=null,i=gh(t,l,i,o),_h(e),l=pu(),e!==null&&!Pe?(mu(e,t,c),vn(e,t,c)):(Ce&&l&&Ko(t),t.flags|=1,ft(e,t,i,c),t.child)}function mp(e,t,i,l,o){if(Ci(t),t.stateNode===null){var c=ts,h=i.contextType;typeof h=="object"&&h!==null&&(c=dt(h)),c=new i(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Ou,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},au(t),h=i.contextType,c.context=typeof h=="object"&&h!==null?dt(h):ts,c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Ru(t,i,h,l),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&Ou.enqueueReplaceState(c,c.state,null),ca(t,l,c,o),ua(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var _=t.memoizedProps,x=Ai(i,_);c.props=x;var N=c.context,D=i.contextType;h=ts,typeof D=="object"&&D!==null&&(h=dt(D));var L=i.getDerivedStateFromProps;D=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function",_=t.pendingProps!==_,D||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_||N!==h)&&tp(t,c,l,h),Yn=!1;var A=t.memoizedState;c.state=A,ca(t,l,c,o),ua(),N=t.memoizedState,_||A!==N||Yn?(typeof L=="function"&&(Ru(t,i,L,l),N=t.memoizedState),(x=Yn||ep(t,i,x,l,A,N,h))?(D||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=N),c.props=l,c.state=N,c.context=h,l=x):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,lu(e,t),h=t.memoizedProps,D=Ai(i,h),c.props=D,L=t.pendingProps,A=c.context,N=i.contextType,x=ts,typeof N=="object"&&N!==null&&(x=dt(N)),_=i.getDerivedStateFromProps,(N=typeof _=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==L||A!==x)&&tp(t,c,l,x),Yn=!1,A=t.memoizedState,c.state=A,ca(t,l,c,o),ua();var O=t.memoizedState;h!==L||A!==O||Yn||e!==null&&e.dependencies!==null&&Ll(e.dependencies)?(typeof _=="function"&&(Ru(t,i,_,l),O=t.memoizedState),(D=Yn||ep(t,i,D,l,A,O,x)||e!==null&&e.dependencies!==null&&Ll(e.dependencies))?(N||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,O,x),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,O,x)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=O),c.props=l,c.state=O,c.context=x,l=D):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,er(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=Ti(t,e.child,null,o),t.child=Ti(t,null,i,o)):ft(e,t,i,o),t.memoizedState=c.state,e=t.child):e=vn(e,t,o),e}function _p(e,t,i,l){return bi(),t.flags|=256,ft(e,t,i,l),t.child}var zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lu(e){return{baseLanes:e,cachePool:ah()}}function ku(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=Ut),e}function gp(e,t,i){var l=t.pendingProps,o=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),h&&(o=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(o?Gn(t):Vn(),(e=Be)?(e=wm(e,Qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:kn!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},i=Jf(e),i.return=t,t.child=i,ct=t,Be=null)):e=null,e===null)throw Hn(t);return yc(e)?t.lanes=32:t.lanes=536870912,null}var _=l.children;return l=l.fallback,o?(Vn(),o=t.mode,_=tr({mode:"hidden",children:_},o),l=vi(l,o,i,null),_.return=t,l.return=t,_.sibling=l,t.child=_,l=t.child,l.memoizedState=Lu(i),l.childLanes=ku(e,h,i),t.memoizedState=zu,ma(null,l)):(Gn(t),Uu(t,_))}var x=e.memoizedState;if(x!==null&&(_=x.dehydrated,_!==null)){if(c)t.flags&256?(Gn(t),t.flags&=-257,t=Hu(e,t,i)):t.memoizedState!==null?(Vn(),t.child=e.child,t.flags|=128,t=null):(Vn(),_=l.fallback,o=t.mode,l=tr({mode:"visible",children:l.children},o),_=vi(_,o,i,null),_.flags|=2,l.return=t,_.return=t,l.sibling=_,t.child=l,Ti(t,e.child,null,i),l=t.child,l.memoizedState=Lu(i),l.childLanes=ku(e,h,i),t.memoizedState=zu,t=ma(null,l));else if(Gn(t),yc(_)){if(h=_.nextSibling&&_.nextSibling.dataset,h)var N=h.dgst;h=N,l=Error(r(419)),l.stack="",l.digest=h,ia({value:l,source:null,stack:null}),t=Hu(e,t,i)}else if(Pe||as(e,t,i,!1),h=(i&e.childLanes)!==0,Pe||h){if(h=Le,h!==null&&(l=nf(h,i),l!==0&&l!==x.retryLane))throw x.retryLane=l,yi(e,l),wt(h,e,l),Du;gc(_)||cr(),t=Hu(e,t,i)}else gc(_)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Be=Kt(_.nextSibling),ct=t,Ce=!0,Un=null,Qt=!1,e!==null&&$f(t,e),t=Uu(t,l.children),t.flags|=4096);return t}return o?(Vn(),_=l.fallback,o=t.mode,x=e.child,N=x.sibling,l=hn(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,N!==null?_=hn(N,_):(_=vi(_,o,i,null),_.flags|=2),_.return=t,l.return=t,l.sibling=_,t.child=l,ma(null,l),l=t.child,_=e.child.memoizedState,_===null?_=Lu(i):(o=_.cachePool,o!==null?(x=Je._currentValue,o=o.parent!==x?{parent:x,pool:x}:o):o=ah(),_={baseLanes:_.baseLanes|i,cachePool:o}),l.memoizedState=_,l.childLanes=ku(e,h,i),t.memoizedState=zu,ma(e.child,l)):(Gn(t),i=e.child,e=i.sibling,i=hn(i,{mode:"visible",children:l.children}),i.return=t,i.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=i,t.memoizedState=null,i)}function Uu(e,t){return t=tr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function tr(e,t){return e=jt(22,e,null,t),e.lanes=0,e}function Hu(e,t,i){return Ti(t,e.child,null,i),e=Uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yp(e,t,i){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),$o(e.return,t,i)}function Bu(e,t,i,l,o,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:o,treeForkCount:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=i,h.tailMode=o,h.treeForkCount=c)}function vp(e,t,i){var l=t.pendingProps,o=l.revealOrder,c=l.tail;l=l.children;var h=Xe.current,_=(h&2)!==0;if(_?(h=h&1|2,t.flags|=128):h&=1,H(Xe,h),ft(e,t,l,i),l=Ce?na:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yp(e,i,t);else if(e.tag===19)yp(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(i=t.child,o=null;i!==null;)e=i.alternate,e!==null&&Gl(e)===null&&(o=i),i=i.sibling;i=o,i===null?(o=t.child,t.child=null):(o=i.sibling,i.sibling=null),Bu(t,!1,o,i,c,l);break;case"backwards":case"unstable_legacy-backwards":for(i=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Gl(e)===null){t.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}Bu(t,!0,i,null,c,l);break;case"together":Bu(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function vn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(as(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,i=hn(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=hn(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Yu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ll(e)))}function Cv(e,t,i){switch(t.tag){case 3:_t(t,t.stateNode.containerInfo),Bn(t,Je,e.memoizedState.cache),bi();break;case 27:case 5:qs(t);break;case 4:_t(t,t.stateNode.containerInfo);break;case 10:Bn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,du(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Gn(t),t.flags|=128,null):(i&t.child.childLanes)!==0?gp(e,t,i):(Gn(t),e=vn(e,t,i),e!==null?e.sibling:null);Gn(t);break;case 19:var o=(e.flags&128)!==0;if(l=(i&t.childLanes)!==0,l||(as(e,t,i,!1),l=(i&t.childLanes)!==0),o){if(l)return vp(e,t,i);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(Xe,Xe.current),l)break;return null;case 22:return t.lanes=0,dp(e,t,i,t.pendingProps);case 24:Bn(t,Je,e.memoizedState.cache)}return vn(e,t,i)}function bp(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pe=!0;else{if(!Yu(e,i)&&(t.flags&128)===0)return Pe=!1,Cv(e,t,i);Pe=(e.flags&131072)!==0}else Pe=!1,Ce&&(t.flags&1048576)!==0&&Pf(t,na,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ei(t.elementType),t.type=e,typeof e=="function")Fo(e)?(l=Ai(e,l),t.tag=1,t=mp(null,t,e,l,i)):(t.tag=0,t=ju(null,t,e,l,i));else{if(e!=null){var o=e.$$typeof;if(o===ae){t.tag=11,t=op(null,t,e,l,i);break e}else if(o===G){t.tag=14,t=up(null,t,e,l,i);break e}}throw t=Ne(e)||e,Error(r(306,t,""))}}return t;case 0:return ju(e,t,t.type,t.pendingProps,i);case 1:return l=t.type,o=Ai(l,t.pendingProps),mp(e,t,l,o,i);case 3:e:{if(_t(t,t.stateNode.containerInfo),e===null)throw Error(r(387));l=t.pendingProps;var c=t.memoizedState;o=c.element,lu(e,t),ca(t,l,null,i);var h=t.memoizedState;if(l=h.cache,Bn(t,Je,l),l!==c.cache&&eu(t,[Je],i,!0),ua(),l=h.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=_p(e,t,l,i);break e}else if(l!==o){o=Gt(Error(r(424)),t),ia(o),t=_p(e,t,l,i);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=Kt(e.firstChild),ct=t,Ce=!0,Un=null,Qt=!0,i=dh(t,null,l,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(bi(),l===o){t=vn(e,t,i);break e}ft(e,t,l,i)}t=t.child}return t;case 26:return er(e,t),e===null?(i=Mm(t.type,null,t.pendingProps,null))?t.memoizedState=i:Ce||(i=t.type,e=t.pendingProps,l=gr(_e.current).createElement(i),l[ut]=t,l[vt]=e,ht(l,i,e),st(l),t.stateNode=l):t.memoizedState=Mm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qs(t),e===null&&Ce&&(l=t.stateNode=Am(t.type,t.pendingProps,_e.current),ct=t,Qt=!0,o=Be,Pn(t.type)?(vc=o,Be=Kt(l.firstChild)):Be=o),ft(e,t,t.pendingProps.children,i),er(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((o=l=Be)&&(l=Pv(l,t.type,t.pendingProps,Qt),l!==null?(t.stateNode=l,ct=t,Be=Kt(l.firstChild),Qt=!1,o=!0):o=!1),o||Hn(t)),qs(t),o=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,l=c.children,pc(o,c)?l=null:h!==null&&pc(o,h)&&(t.flags|=32),t.memoizedState!==null&&(o=hu(e,t,hv,null,null,i),Oa._currentValue=o),er(e,t),ft(e,t,l,i),t.child;case 6:return e===null&&Ce&&((e=i=Be)&&(i=$v(i,t.pendingProps,Qt),i!==null?(t.stateNode=i,ct=t,Be=null,e=!0):e=!1),e||Hn(t)),null;case 13:return gp(e,t,i);case 4:return _t(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ti(t,null,l,i):ft(e,t,l,i),t.child;case 11:return op(e,t,t.type,t.pendingProps,i);case 7:return ft(e,t,t.pendingProps,i),t.child;case 8:return ft(e,t,t.pendingProps.children,i),t.child;case 12:return ft(e,t,t.pendingProps.children,i),t.child;case 10:return l=t.pendingProps,Bn(t,t.type,l.value),ft(e,t,l.children,i),t.child;case 9:return o=t.type._context,l=t.pendingProps.children,Ci(t),o=dt(o),l=l(o),t.flags|=1,ft(e,t,l,i),t.child;case 14:return up(e,t,t.type,t.pendingProps,i);case 15:return cp(e,t,t.type,t.pendingProps,i);case 19:return vp(e,t,i);case 31:return xv(e,t,i);case 22:return dp(e,t,i,t.pendingProps);case 24:return Ci(t),l=dt(Je),e===null?(o=iu(),o===null&&(o=Le,c=tu(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=i),o=c),t.memoizedState={parent:l,cache:o},au(t),Bn(t,Je,o)):((e.lanes&i)!==0&&(lu(e,t),ca(t,null,null,i),ua()),o=e.memoizedState,c=t.memoizedState,o.parent!==l?(o={parent:l,cache:l},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Bn(t,Je,l)):(l=c.cache,Bn(t,Je,l),l!==o.cache&&eu(t,[Je],i,!0))),ft(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function bn(e){e.flags|=4}function qu(e,t,i,l,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Xp())e.flags|=8192;else throw wi=Bl,su}else e.flags&=-16777217}function xp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!km(t))if(Xp())e.flags|=8192;else throw wi=Bl,su}function nr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$d():536870912,e.lanes|=t,gs|=t)}function _a(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(t)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=l,e.childLanes=i,t}function Sv(e,t,i){var l=t.pendingProps;switch(Zo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return Ye(t),null;case 3:return i=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),_n(Je),Qe(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ss(t)?bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wo())),Ye(t),null;case 26:var o=t.type,c=t.memoizedState;return e===null?(bn(t),c!==null?(Ye(t),xp(t,c)):(Ye(t),qu(t,o,null,l,i))):c?c!==e.memoizedState?(bn(t),Ye(t),xp(t,c)):(Ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&bn(t),Ye(t),qu(t,o,e,l,i)),null;case 27:if(hl(t),i=_e.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&bn(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return Ye(t),null}e=V.current,ss(t)?eh(t):(e=Am(o,l,i),t.stateNode=e,bn(t))}return Ye(t),null;case 5:if(hl(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&bn(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return Ye(t),null}if(c=V.current,ss(t))eh(t);else{var h=gr(_e.current);switch(c){case 1:c=h.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=h.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=h.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?h.createElement(o,{is:l.is}):h.createElement(o)}}c[ut]=t,c[vt]=l;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)c.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=c;e:switch(ht(c,o,l),o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&bn(t)}}return Ye(t),qu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&bn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(e=_e.current,ss(t)){if(e=t.stateNode,i=t.memoizedProps,l=null,o=ct,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}e[ut]=t,e=!!(e.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||gm(e.nodeValue,i)),e||Hn(t,!0)}else e=gr(e).createTextNode(l),e[ut]=t,t.stateNode=e}return Ye(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(l=ss(t),i!==null){if(e===null){if(!l)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[ut]=t}else bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),e=!1}else i=Wo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(Lt(t),t):(Lt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Ye(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=ss(t),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[ut]=t}else bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),o=!1}else o=Wo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Lt(t),t):(Lt(t),null)}return Lt(t),(t.flags&128)!==0?(t.lanes=i,t):(i=l!==null,e=e!==null&&e.memoizedState!==null,i&&(l=t.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==o&&(l.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),nr(t,t.updateQueue),Ye(t),null);case 4:return Qe(),e===null&&uc(t.stateNode.containerInfo),Ye(t),null;case 10:return _n(t.type),Ye(t),null;case 19:if(M(Xe),l=t.memoizedState,l===null)return Ye(t),null;if(o=(t.flags&128)!==0,c=l.rendering,c===null)if(o)_a(l,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Gl(e),c!==null){for(t.flags|=128,_a(l,!1),e=c.updateQueue,t.updateQueue=e,nr(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)Zf(i,e),i=i.sibling;return H(Xe,Xe.current&1|2),Ce&&pn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Rt()>rr&&(t.flags|=128,o=!0,_a(l,!1),t.lanes=4194304)}else{if(!o)if(e=Gl(c),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,nr(t,e),_a(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Ce)return Ye(t),null}else 2*Rt()-l.renderingStartTime>rr&&i!==536870912&&(t.flags|=128,o=!0,_a(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(e=l.last,e!==null?e.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Rt(),e.sibling=null,i=Xe.current,H(Xe,o?i&1|2:i&1),Ce&&pn(t,l.treeForkCount),e):(Ye(t),null);case 22:case 23:return Lt(t),cu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(i&536870912)!==0&&(t.flags&128)===0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),i=t.updateQueue,i!==null&&nr(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==i&&(t.flags|=2048),e!==null&&M(Si),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),_n(Je),Ye(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Ev(e,t){switch(Zo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(Je),Qe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return hl(t),null;case 31:if(t.memoizedState!==null){if(Lt(t),t.alternate===null)throw Error(r(340));bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(Xe),null;case 4:return Qe(),null;case 10:return _n(t.type),null;case 22:case 23:return Lt(t),cu(),e!==null&&M(Si),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _n(Je),null;case 25:return null;default:return null}}function Cp(e,t){switch(Zo(t),t.tag){case 3:_n(Je),Qe();break;case 26:case 27:case 5:hl(t);break;case 4:Qe();break;case 31:t.memoizedState!==null&&Lt(t);break;case 13:Lt(t);break;case 19:M(Xe);break;case 10:_n(t.type);break;case 22:case 23:Lt(t),cu(),e!==null&&M(Si);break;case 24:_n(Je)}}function ga(e,t){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var o=l.next;i=o;do{if((i.tag&e)===e){l=void 0;var c=i.create,h=i.inst;l=c(),h.destroy=l}i=i.next}while(i!==o)}}catch(_){Me(t,t.return,_)}}function Fn(e,t,i){try{var l=t.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var c=o.next;l=c;do{if((l.tag&e)===e){var h=l.inst,_=h.destroy;if(_!==void 0){h.destroy=void 0,o=t;var x=i,N=_;try{N()}catch(D){Me(o,x,D)}}}l=l.next}while(l!==c)}}catch(D){Me(t,t.return,D)}}function Sp(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{hh(t,i)}catch(l){Me(e,e.return,l)}}}function Ep(e,t,i){i.props=Ai(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(l){Me(e,t,l)}}function ya(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof i=="function"?e.refCleanup=i(l):i.current=l}}catch(o){Me(e,t,o)}}function rn(e,t){var i=e.ref,l=e.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(o){Me(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(o){Me(e,t,o)}else i.current=null}function wp(e){var t=e.type,i=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break e;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(o){Me(e,e.return,o)}}function Iu(e,t,i){try{var l=e.stateNode;Qv(l,e.type,i,t),l[vt]=t}catch(o){Me(e,e.return,o)}}function Tp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pn(e.type)||e.tag===4}function Gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vu(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=dn));else if(l!==4&&(l===27&&Pn(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(Vu(e,t,i),e=e.sibling;e!==null;)Vu(e,t,i),e=e.sibling}function ir(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(l!==4&&(l===27&&Pn(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(ir(e,t,i),e=e.sibling;e!==null;)ir(e,t,i),e=e.sibling}function Np(e){var t=e.stateNode,i=e.memoizedProps;try{for(var l=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ht(t,l,i),t[ut]=e,t[vt]=i}catch(c){Me(e,e.return,c)}}var xn=!1,$e=!1,Fu=!1,Ap=typeof WeakSet=="function"?WeakSet:Set,at=null;function wv(e,t){if(e=e.containerInfo,fc=Er,e=Yf(e),Ho(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var o=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break e}var h=0,_=-1,x=-1,N=0,D=0,L=e,A=null;t:for(;;){for(var O;L!==i||o!==0&&L.nodeType!==3||(_=h+o),L!==c||l!==0&&L.nodeType!==3||(x=h+l),L.nodeType===3&&(h+=L.nodeValue.length),(O=L.firstChild)!==null;)A=L,L=O;for(;;){if(L===e)break t;if(A===i&&++N===o&&(_=h),A===c&&++D===l&&(x=h),(O=L.nextSibling)!==null)break;L=A,A=L.parentNode}L=O}i=_===-1||x===-1?null:{start:_,end:x}}else i=null}i=i||{start:0,end:0}}else i=null;for(hc={focusedElem:e,selectionRange:i},Er=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)o=e[i],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,i=t,o=c.memoizedProps,c=c.memoizedState,l=i.stateNode;try{var F=Ai(i.type,o);e=l.getSnapshotBeforeUpdate(F,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Me(i,i.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)_c(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}}function Rp(e,t,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:Sn(e,i),l&4&&ga(5,i);break;case 1:if(Sn(e,i),l&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(h){Me(i,i.return,h)}else{var o=Ai(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Me(i,i.return,h)}}l&64&&Sp(i),l&512&&ya(i,i.return);break;case 3:if(Sn(e,i),l&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{hh(e,t)}catch(h){Me(i,i.return,h)}}break;case 27:t===null&&l&4&&Np(i);case 26:case 5:Sn(e,i),t===null&&l&4&&wp(i),l&512&&ya(i,i.return);break;case 12:Sn(e,i);break;case 31:Sn(e,i),l&4&&Dp(e,i);break;case 13:Sn(e,i),l&4&&jp(e,i),l&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=zv.bind(null,i),eb(e,i))));break;case 22:if(l=i.memoizedState!==null||xn,!l){t=t!==null&&t.memoizedState!==null||$e,o=xn;var c=$e;xn=l,($e=t)&&!c?En(e,i,(i.subtreeFlags&8772)!==0):Sn(e,i),xn=o,$e=c}break;case 30:break;default:Sn(e,i)}}function Op(e){var t=e.alternate;t!==null&&(e.alternate=null,Op(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,xt=!1;function Cn(e,t,i){for(i=i.child;i!==null;)Mp(e,t,i),i=i.sibling}function Mp(e,t,i){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Is,i)}catch{}switch(i.tag){case 26:$e||rn(i,t),Cn(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:$e||rn(i,t);var l=Ie,o=xt;Pn(i.type)&&(Ie=i.stateNode,xt=!1),Cn(e,t,i),Na(i.stateNode),Ie=l,xt=o;break;case 5:$e||rn(i,t);case 6:if(l=Ie,o=xt,Ie=null,Cn(e,t,i),Ie=l,xt=o,Ie!==null)if(xt)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(i.stateNode)}catch(c){Me(i,t,c)}else try{Ie.removeChild(i.stateNode)}catch(c){Me(i,t,c)}break;case 18:Ie!==null&&(xt?(e=Ie,Sm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),ws(e)):Sm(Ie,i.stateNode));break;case 4:l=Ie,o=xt,Ie=i.stateNode.containerInfo,xt=!0,Cn(e,t,i),Ie=l,xt=o;break;case 0:case 11:case 14:case 15:Fn(2,i,t),$e||Fn(4,i,t),Cn(e,t,i);break;case 1:$e||(rn(i,t),l=i.stateNode,typeof l.componentWillUnmount=="function"&&Ep(i,t,l)),Cn(e,t,i);break;case 21:Cn(e,t,i);break;case 22:$e=(l=$e)||i.memoizedState!==null,Cn(e,t,i),$e=l;break;default:Cn(e,t,i)}}function Dp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ws(e)}catch(i){Me(t,t.return,i)}}}function jp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ws(e)}catch(i){Me(t,t.return,i)}}function Tv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ap),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ap),t;default:throw Error(r(435,e.tag))}}function sr(e,t){var i=Tv(e);t.forEach(function(l){if(!i.has(l)){i.add(l);var o=Lv.bind(null,e,l);l.then(o,o)}})}function Ct(e,t){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var o=i[l],c=e,h=t,_=h;e:for(;_!==null;){switch(_.tag){case 27:if(Pn(_.type)){Ie=_.stateNode,xt=!1;break e}break;case 5:Ie=_.stateNode,xt=!1;break e;case 3:case 4:Ie=_.stateNode.containerInfo,xt=!0;break e}_=_.return}if(Ie===null)throw Error(r(160));Mp(c,h,o),Ie=null,xt=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zp(t,e),t=t.sibling}var Wt=null;function zp(e,t){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ct(t,e),St(e),l&4&&(Fn(3,e,e.return),ga(3,e),Fn(5,e,e.return));break;case 1:Ct(t,e),St(e),l&512&&($e||i===null||rn(i,i.return)),l&64&&xn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var o=Wt;if(Ct(t,e),St(e),l&512&&($e||i===null||rn(i,i.return)),l&4){var c=i!==null?i.memoizedState:null;if(l=e.memoizedState,i===null)if(l===null)if(e.stateNode===null){e:{l=e.type,i=e.memoizedProps,o=o.ownerDocument||o;t:switch(l){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Fs]||c[ut]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(l),o.head.insertBefore(c,o.querySelector("head > title"))),ht(c,l,i),c[ut]=e,st(c),l=c;break e;case"link":var h=zm("link","href",o).get(l+(i.href||""));if(h){for(var _=0;_<h.length;_++)if(c=h[_],c.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&c.getAttribute("rel")===(i.rel==null?null:i.rel)&&c.getAttribute("title")===(i.title==null?null:i.title)&&c.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){h.splice(_,1);break t}}c=o.createElement(l),ht(c,l,i),o.head.appendChild(c);break;case"meta":if(h=zm("meta","content",o).get(l+(i.content||""))){for(_=0;_<h.length;_++)if(c=h[_],c.getAttribute("content")===(i.content==null?null:""+i.content)&&c.getAttribute("name")===(i.name==null?null:i.name)&&c.getAttribute("property")===(i.property==null?null:i.property)&&c.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&c.getAttribute("charset")===(i.charSet==null?null:i.charSet)){h.splice(_,1);break t}}c=o.createElement(l),ht(c,l,i),o.head.appendChild(c);break;default:throw Error(r(468,l))}c[ut]=e,st(c),l=c}e.stateNode=l}else Lm(o,e.type,e.stateNode);else e.stateNode=jm(o,l,e.memoizedProps);else c!==l?(c===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):c.count--,l===null?Lm(o,e.type,e.stateNode):jm(o,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Iu(e,e.memoizedProps,i.memoizedProps)}break;case 27:Ct(t,e),St(e),l&512&&($e||i===null||rn(i,i.return)),i!==null&&l&4&&Iu(e,e.memoizedProps,i.memoizedProps);break;case 5:if(Ct(t,e),St(e),l&512&&($e||i===null||rn(i,i.return)),e.flags&32){o=e.stateNode;try{Ki(o,"")}catch(F){Me(e,e.return,F)}}l&4&&e.stateNode!=null&&(o=e.memoizedProps,Iu(e,o,i!==null?i.memoizedProps:o)),l&1024&&(Fu=!0);break;case 6:if(Ct(t,e),St(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,i=e.stateNode;try{i.nodeValue=l}catch(F){Me(e,e.return,F)}}break;case 3:if(br=null,o=Wt,Wt=yr(t.containerInfo),Ct(t,e),Wt=o,St(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{ws(t.containerInfo)}catch(F){Me(e,e.return,F)}Fu&&(Fu=!1,Lp(e));break;case 4:l=Wt,Wt=yr(e.stateNode.containerInfo),Ct(t,e),St(e),Wt=l;break;case 12:Ct(t,e),St(e);break;case 31:Ct(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,sr(e,l)));break;case 13:Ct(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(lr=Rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,sr(e,l)));break;case 22:o=e.memoizedState!==null;var x=i!==null&&i.memoizedState!==null,N=xn,D=$e;if(xn=N||o,$e=D||x,Ct(t,e),$e=D,xn=N,St(e),l&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(i===null||x||xn||$e||Ri(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){x=i=t;try{if(c=x.stateNode,o)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{_=x.stateNode;var L=x.memoizedProps.style,A=L!=null&&L.hasOwnProperty("display")?L.display:null;_.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(F){Me(x,x.return,F)}}}else if(t.tag===6){if(i===null){x=t;try{x.stateNode.nodeValue=o?"":x.memoizedProps}catch(F){Me(x,x.return,F)}}}else if(t.tag===18){if(i===null){x=t;try{var O=x.stateNode;o?Em(O,!0):Em(x.stateNode,!1)}catch(F){Me(x,x.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,sr(e,i))));break;case 19:Ct(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,sr(e,l)));break;case 30:break;case 21:break;default:Ct(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var i,l=e.return;l!==null;){if(Tp(l)){i=l;break}l=l.return}if(i==null)throw Error(r(160));switch(i.tag){case 27:var o=i.stateNode,c=Gu(e);ir(e,c,o);break;case 5:var h=i.stateNode;i.flags&32&&(Ki(h,""),i.flags&=-33);var _=Gu(e);ir(e,_,h);break;case 3:case 4:var x=i.stateNode.containerInfo,N=Gu(e);Vu(e,N,x);break;default:throw Error(r(161))}}catch(D){Me(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Lp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rp(e,t.alternate,t),t=t.sibling}function Ri(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fn(4,t,t.return),Ri(t);break;case 1:rn(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Ep(t,t.return,i),Ri(t);break;case 27:Na(t.stateNode);case 26:case 5:rn(t,t.return),Ri(t);break;case 22:t.memoizedState===null&&Ri(t);break;case 30:Ri(t);break;default:Ri(t)}e=e.sibling}}function En(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,o=e,c=t,h=c.flags;switch(c.tag){case 0:case 11:case 15:En(o,c,i),ga(4,c);break;case 1:if(En(o,c,i),l=c,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(N){Me(l,l.return,N)}if(l=c,o=l.updateQueue,o!==null){var _=l.stateNode;try{var x=o.shared.hiddenCallbacks;if(x!==null)for(o.shared.hiddenCallbacks=null,o=0;o<x.length;o++)fh(x[o],_)}catch(N){Me(l,l.return,N)}}i&&h&64&&Sp(c),ya(c,c.return);break;case 27:Np(c);case 26:case 5:En(o,c,i),i&&l===null&&h&4&&wp(c),ya(c,c.return);break;case 12:En(o,c,i);break;case 31:En(o,c,i),i&&h&4&&Dp(o,c);break;case 13:En(o,c,i),i&&h&4&&jp(o,c);break;case 22:c.memoizedState===null&&En(o,c,i),ya(c,c.return);break;case 30:break;default:En(o,c,i)}t=t.sibling}}function Qu(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&sa(i))}function Xu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e))}function Pt(e,t,i,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kp(e,t,i,l),t=t.sibling}function kp(e,t,i,l){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,i,l),o&2048&&ga(9,t);break;case 1:Pt(e,t,i,l);break;case 3:Pt(e,t,i,l),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e)));break;case 12:if(o&2048){Pt(e,t,i,l),e=t.stateNode;try{var c=t.memoizedProps,h=c.id,_=c.onPostCommit;typeof _=="function"&&_(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Me(t,t.return,x)}}else Pt(e,t,i,l);break;case 31:Pt(e,t,i,l);break;case 13:Pt(e,t,i,l);break;case 23:break;case 22:c=t.stateNode,h=t.alternate,t.memoizedState!==null?c._visibility&2?Pt(e,t,i,l):va(e,t):c._visibility&2?Pt(e,t,i,l):(c._visibility|=2,ps(e,t,i,l,(t.subtreeFlags&10256)!==0||!1)),o&2048&&Qu(h,t);break;case 24:Pt(e,t,i,l),o&2048&&Xu(t.alternate,t);break;default:Pt(e,t,i,l)}}function ps(e,t,i,l,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,h=t,_=i,x=l,N=h.flags;switch(h.tag){case 0:case 11:case 15:ps(c,h,_,x,o),ga(8,h);break;case 23:break;case 22:var D=h.stateNode;h.memoizedState!==null?D._visibility&2?ps(c,h,_,x,o):va(c,h):(D._visibility|=2,ps(c,h,_,x,o)),o&&N&2048&&Qu(h.alternate,h);break;case 24:ps(c,h,_,x,o),o&&N&2048&&Xu(h.alternate,h);break;default:ps(c,h,_,x,o)}t=t.sibling}}function va(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,l=t,o=l.flags;switch(l.tag){case 22:va(i,l),o&2048&&Qu(l.alternate,l);break;case 24:va(i,l),o&2048&&Xu(l.alternate,l);break;default:va(i,l)}t=t.sibling}}var ba=8192;function ms(e,t,i){if(e.subtreeFlags&ba)for(e=e.child;e!==null;)Up(e,t,i),e=e.sibling}function Up(e,t,i){switch(e.tag){case 26:ms(e,t,i),e.flags&ba&&e.memoizedState!==null&&fb(i,Wt,e.memoizedState,e.memoizedProps);break;case 5:ms(e,t,i);break;case 3:case 4:var l=Wt;Wt=yr(e.stateNode.containerInfo),ms(e,t,i),Wt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ba,ba=16777216,ms(e,t,i),ba=l):ms(e,t,i));break;default:ms(e,t,i)}}function Hp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var l=t[i];at=l,Yp(l,e)}Hp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bp(e),e=e.sibling}function Bp(e){switch(e.tag){case 0:case 11:case 15:xa(e),e.flags&2048&&Fn(9,e,e.return);break;case 3:xa(e);break;case 12:xa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ar(e)):xa(e);break;default:xa(e)}}function ar(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var l=t[i];at=l,Yp(l,e)}Hp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fn(8,t,t.return),ar(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,ar(t));break;default:ar(t)}e=e.sibling}}function Yp(e,t){for(;at!==null;){var i=at;switch(i.tag){case 0:case 11:case 15:Fn(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:sa(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,at=l;else e:for(i=e;at!==null;){l=at;var o=l.sibling,c=l.return;if(Op(l),l===i){at=null;break e}if(o!==null){o.return=c,at=o;break e}at=c}}}var Nv={getCacheForType:function(e){var t=dt(Je),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return dt(Je).controller.signal}},Av=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Le=null,ge=null,be=0,Oe=0,kt=null,Qn=!1,_s=!1,Ku=!1,wn=0,Ve=0,Xn=0,Oi=0,Zu=0,Ut=0,gs=0,Ca=null,Et=null,Ju=!1,lr=0,qp=0,rr=1/0,or=null,Kn=null,tt=0,Zn=null,ys=null,Tn=0,Wu=0,Pu=null,Ip=null,Sa=0,$u=null;function Ht(){return(Ae&2)!==0&&be!==0?be&-be:R.T!==null?ac():sf()}function Gp(){if(Ut===0)if((be&536870912)===0||Ce){var e=_l;_l<<=1,(_l&3932160)===0&&(_l=262144),Ut=e}else Ut=536870912;return e=zt.current,e!==null&&(e.flags|=32),Ut}function wt(e,t,i){(e===Le&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(vs(e,0),Jn(e,be,Ut,!1)),Vs(e,i),((Ae&2)===0||e!==Le)&&(e===Le&&((Ae&2)===0&&(Oi|=i),Ve===4&&Jn(e,be,Ut,!1)),on(e))}function Vp(e,t,i){if((Ae&6)!==0)throw Error(r(327));var l=!i&&(t&127)===0&&(t&e.expiredLanes)===0||Gs(e,t),o=l?Mv(e,t):tc(e,t,!0),c=l;do{if(o===0){_s&&!l&&Jn(e,t,0,!1);break}else{if(i=e.current.alternate,c&&!Rv(i)){o=tc(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var _=e;o=Ca;var x=_.current.memoizedState.isDehydrated;if(x&&(vs(_,h).flags|=256),h=tc(_,h,!1),h!==2){if(Ku&&!x){_.errorRecoveryDisabledLanes|=c,Oi|=c,o=4;break e}c=Et,Et=o,c!==null&&(Et===null?Et=c:Et.push.apply(Et,c))}o=h}if(c=!1,o!==2)continue}}if(o===1){vs(e,0),Jn(e,t,0,!0);break}e:{switch(l=e,c=o,c){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Jn(l,t,Ut,!Qn);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(o=lr+300-Rt(),10<o)){if(Jn(l,t,Ut,!Qn),yl(l,0,!0)!==0)break e;Tn=t,l.timeoutHandle=xm(Fp.bind(null,l,i,Et,or,Ju,t,Ut,Oi,gs,Qn,c,"Throttled",-0,0),o);break e}Fp(l,i,Et,or,Ju,t,Ut,Oi,gs,Qn,c,null,-0,0)}}break}while(!0);on(e)}function Fp(e,t,i,l,o,c,h,_,x,N,D,L,A,O){if(e.timeoutHandle=-1,L=t.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Up(t,c,L);var F=(c&62914560)===c?lr-Rt():(c&4194048)===c?qp-Rt():0;if(F=hb(L,F),F!==null){Tn=c,e.cancelPendingCommit=F($p.bind(null,e,t,c,i,l,o,h,_,x,D,L,null,A,O)),Jn(e,c,h,!N);return}}$p(e,t,c,i,l,o,h,_,x)}function Rv(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var o=i[l],c=o.getSnapshot;o=o.value;try{if(!Dt(c(),o))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t,i,l){t&=~Zu,t&=~Oi,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var o=t;0<o;){var c=31-Mt(o),h=1<<c;l[c]=-1,o&=~h}i!==0&&ef(e,i,t)}function ur(){return(Ae&6)===0?(Ea(0),!1):!0}function ec(){if(ge!==null){if(Oe===0)var e=ge.return;else e=ge,mn=xi=null,_u(e),us=null,la=0,e=ge;for(;e!==null;)Cp(e.alternate,e),e=e.return;ge=null}}function vs(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Zv(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Tn=0,ec(),Le=e,ge=i=hn(e.current,null),be=t,Oe=0,kt=null,Qn=!1,_s=Gs(e,t),Ku=!1,gs=Ut=Zu=Oi=Xn=Ve=0,Et=Ca=null,Ju=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var o=31-Mt(l),c=1<<o;t|=e[o],l&=~c}return wn=t,Ol(),i}function Qp(e,t){ce=null,R.H=pa,t===os||t===Hl?(t=oh(),Oe=3):t===su?(t=oh(),Oe=4):Oe=t===Du?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,ge===null&&(Ve=1,Pl(e,Gt(t,e.current)))}function Xp(){var e=zt.current;return e===null?!0:(be&4194048)===be?Xt===null:(be&62914560)===be||(be&536870912)!==0?e===Xt:!1}function Kp(){var e=R.H;return R.H=pa,e===null?pa:e}function Zp(){var e=R.A;return R.A=Nv,e}function cr(){Ve=4,Qn||(be&4194048)!==be&&zt.current!==null||(_s=!0),(Xn&134217727)===0&&(Oi&134217727)===0||Le===null||Jn(Le,be,Ut,!1)}function tc(e,t,i){var l=Ae;Ae|=2;var o=Kp(),c=Zp();(Le!==e||be!==t)&&(or=null,vs(e,t)),t=!1;var h=Ve;e:do try{if(Oe!==0&&ge!==null){var _=ge,x=kt;switch(Oe){case 8:ec(),h=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var N=Oe;if(Oe=0,kt=null,bs(e,_,x,N),i&&_s){h=0;break e}break;default:N=Oe,Oe=0,kt=null,bs(e,_,x,N)}}Ov(),h=Ve;break}catch(D){Qp(e,D)}while(!0);return t&&e.shellSuspendCounter++,mn=xi=null,Ae=l,R.H=o,R.A=c,ge===null&&(Le=null,be=0,Ol()),h}function Ov(){for(;ge!==null;)Jp(ge)}function Mv(e,t){var i=Ae;Ae|=2;var l=Kp(),o=Zp();Le!==e||be!==t?(or=null,rr=Rt()+500,vs(e,t)):_s=Gs(e,t);e:do try{if(Oe!==0&&ge!==null){t=ge;var c=kt;t:switch(Oe){case 1:Oe=0,kt=null,bs(e,t,c,1);break;case 2:case 9:if(lh(c)){Oe=0,kt=null,Wp(t);break}t=function(){Oe!==2&&Oe!==9||Le!==e||(Oe=7),on(e)},c.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:lh(c)?(Oe=0,kt=null,Wp(t)):(Oe=0,kt=null,bs(e,t,c,7));break;case 5:var h=null;switch(ge.tag){case 26:h=ge.memoizedState;case 5:case 27:var _=ge;if(h?km(h):_.stateNode.complete){Oe=0,kt=null;var x=_.sibling;if(x!==null)ge=x;else{var N=_.return;N!==null?(ge=N,dr(N)):ge=null}break t}}Oe=0,kt=null,bs(e,t,c,5);break;case 6:Oe=0,kt=null,bs(e,t,c,6);break;case 8:ec(),Ve=6;break e;default:throw Error(r(462))}}Dv();break}catch(D){Qp(e,D)}while(!0);return mn=xi=null,R.H=l,R.A=o,Ae=i,ge!==null?0:(Le=null,be=0,Ol(),Ve)}function Dv(){for(;ge!==null&&!ty();)Jp(ge)}function Jp(e){var t=bp(e.alternate,e,wn);e.memoizedProps=e.pendingProps,t===null?dr(e):ge=t}function Wp(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=pp(i,t,t.pendingProps,t.type,void 0,be);break;case 11:t=pp(i,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:_u(t);default:Cp(i,t),t=ge=Zf(t,wn),t=bp(i,t,wn)}e.memoizedProps=e.pendingProps,t===null?dr(e):ge=t}function bs(e,t,i,l){mn=xi=null,_u(t),us=null,la=0;var o=t.return;try{if(bv(e,o,t,i,be)){Ve=1,Pl(e,Gt(i,e.current)),ge=null;return}}catch(c){if(o!==null)throw ge=o,c;Ve=1,Pl(e,Gt(i,e.current)),ge=null;return}t.flags&32768?(Ce||l===1?e=!0:_s||(be&536870912)!==0?e=!1:(Qn=e=!0,(l===2||l===9||l===3||l===6)&&(l=zt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Pp(t,e)):dr(t)}function dr(e){var t=e;do{if((t.flags&32768)!==0){Pp(t,Qn);return}e=t.return;var i=Sv(t.alternate,t,wn);if(i!==null){ge=i;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Ve===0&&(Ve=5)}function Pp(e,t){do{var i=Ev(e.alternate,e);if(i!==null){i.flags&=32767,ge=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=i}while(e!==null);Ve=6,ge=null}function $p(e,t,i,l,o,c,h,_,x){e.cancelPendingCommit=null;do fr();while(tt!==0);if((Ae&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(c=t.lanes|t.childLanes,c|=Go,dy(e,i,c,h,_,x),e===Le&&(ge=Le=null,be=0),ys=t,Zn=e,Tn=i,Wu=c,Pu=o,Ip=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kv(pl,function(){return sm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,o=B.p,B.p=2,h=Ae,Ae|=4;try{wv(e,t,i)}finally{Ae=h,B.p=o,R.T=l}}tt=1,em(),tm(),nm()}}function em(){if(tt===1){tt=0;var e=Zn,t=ys,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null;var l=B.p;B.p=2;var o=Ae;Ae|=4;try{zp(t,e);var c=hc,h=Yf(e.containerInfo),_=c.focusedElem,x=c.selectionRange;if(h!==_&&_&&_.ownerDocument&&Bf(_.ownerDocument.documentElement,_)){if(x!==null&&Ho(_)){var N=x.start,D=x.end;if(D===void 0&&(D=N),"selectionStart"in _)_.selectionStart=N,_.selectionEnd=Math.min(D,_.value.length);else{var L=_.ownerDocument||document,A=L&&L.defaultView||window;if(A.getSelection){var O=A.getSelection(),F=_.textContent.length,ee=Math.min(x.start,F),ze=x.end===void 0?ee:Math.min(x.end,F);!O.extend&&ee>ze&&(h=ze,ze=ee,ee=h);var w=Hf(_,ee),S=Hf(_,ze);if(w&&S&&(O.rangeCount!==1||O.anchorNode!==w.node||O.anchorOffset!==w.offset||O.focusNode!==S.node||O.focusOffset!==S.offset)){var T=L.createRange();T.setStart(w.node,w.offset),O.removeAllRanges(),ee>ze?(O.addRange(T),O.extend(S.node,S.offset)):(T.setEnd(S.node,S.offset),O.addRange(T))}}}}for(L=[],O=_;O=O.parentNode;)O.nodeType===1&&L.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<L.length;_++){var j=L[_];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Er=!!fc,hc=fc=null}finally{Ae=o,B.p=l,R.T=i}}e.current=t,tt=2}}function tm(){if(tt===2){tt=0;var e=Zn,t=ys,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=R.T,R.T=null;var l=B.p;B.p=2;var o=Ae;Ae|=4;try{Rp(e,t.alternate,t)}finally{Ae=o,B.p=l,R.T=i}}tt=3}}function nm(){if(tt===4||tt===3){tt=0,ny();var e=Zn,t=ys,i=Tn,l=Ip;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tt=5:(tt=0,ys=Zn=null,im(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Kn=null),vo(i),t=t.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Is,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,o=B.p,B.p=2,R.T=null;try{for(var c=e.onRecoverableError,h=0;h<l.length;h++){var _=l[h];c(_.value,{componentStack:_.stack})}}finally{R.T=t,B.p=o}}(Tn&3)!==0&&fr(),on(e),o=e.pendingLanes,(i&261930)!==0&&(o&42)!==0?e===$u?Sa++:(Sa=0,$u=e):Sa=0,Ea(0)}}function im(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sa(t)))}function fr(){return em(),tm(),nm(),sm()}function sm(){if(tt!==5)return!1;var e=Zn,t=Wu;Wu=0;var i=vo(Tn),l=R.T,o=B.p;try{B.p=32>i?32:i,R.T=null,i=Pu,Pu=null;var c=Zn,h=Tn;if(tt=0,ys=Zn=null,Tn=0,(Ae&6)!==0)throw Error(r(331));var _=Ae;if(Ae|=4,Bp(c.current),kp(c,c.current,h,i),Ae=_,Ea(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Is,c)}catch{}return!0}finally{B.p=o,R.T=l,im(e,t)}}function am(e,t,i){t=Gt(i,t),t=Mu(e.stateNode,t,2),e=In(e,t,2),e!==null&&(Vs(e,2),on(e))}function Me(e,t,i){if(e.tag===3)am(e,e,i);else for(;t!==null;){if(t.tag===3){am(t,e,i);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Kn===null||!Kn.has(l))){e=Gt(i,e),i=lp(2),l=In(t,i,2),l!==null&&(rp(i,l,t,e),Vs(l,2),on(l));break}}t=t.return}}function nc(e,t,i){var l=e.pingCache;if(l===null){l=e.pingCache=new Av;var o=new Set;l.set(t,o)}else o=l.get(t),o===void 0&&(o=new Set,l.set(t,o));o.has(i)||(Ku=!0,o.add(i),e=jv.bind(null,e,t,i),t.then(e,e))}function jv(e,t,i){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Le===e&&(be&i)===i&&(Ve===4||Ve===3&&(be&62914560)===be&&300>Rt()-lr?(Ae&2)===0&&vs(e,0):Zu|=i,gs===be&&(gs=0)),on(e)}function lm(e,t){t===0&&(t=$d()),e=yi(e,t),e!==null&&(Vs(e,t),on(e))}function zv(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),lm(e,i)}function Lv(e,t){var i=0;switch(e.tag){case 31:case 13:var l=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(t),lm(e,i)}function kv(e,t){return mo(e,t)}var hr=null,xs=null,ic=!1,pr=!1,sc=!1,Wn=0;function on(e){e!==xs&&e.next===null&&(xs===null?hr=xs=e:xs=xs.next=e),pr=!0,ic||(ic=!0,Hv())}function Ea(e,t){if(!sc&&pr){sc=!0;do for(var i=!1,l=hr;l!==null;){if(e!==0){var o=l.pendingLanes;if(o===0)var c=0;else{var h=l.suspendedLanes,_=l.pingedLanes;c=(1<<31-Mt(42|e)+1)-1,c&=o&~(h&~_),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,cm(l,c))}else c=be,c=yl(l,l===Le?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Gs(l,c)||(i=!0,cm(l,c));l=l.next}while(i);sc=!1}}function Uv(){rm()}function rm(){pr=ic=!1;var e=0;Wn!==0&&Kv()&&(e=Wn);for(var t=Rt(),i=null,l=hr;l!==null;){var o=l.next,c=om(l,t);c===0?(l.next=null,i===null?hr=o:i.next=o,o===null&&(xs=i)):(i=l,(e!==0||(c&3)!==0)&&(pr=!0)),l=o}tt!==0&&tt!==5||Ea(e),Wn!==0&&(Wn=0)}function om(e,t){for(var i=e.suspendedLanes,l=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var h=31-Mt(c),_=1<<h,x=o[h];x===-1?((_&i)===0||(_&l)!==0)&&(o[h]=cy(_,t)):x<=t&&(e.expiredLanes|=_),c&=~_}if(t=Le,i=be,i=yl(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,i===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&_o(l),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Gs(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(l!==null&&_o(l),vo(i)){case 2:case 8:i=Wd;break;case 32:i=pl;break;case 268435456:i=Pd;break;default:i=pl}return l=um.bind(null,e),i=mo(i,l),e.callbackPriority=t,e.callbackNode=i,t}return l!==null&&l!==null&&_o(l),e.callbackPriority=2,e.callbackNode=null,2}function um(e,t){if(tt!==0&&tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(fr()&&e.callbackNode!==i)return null;var l=be;return l=yl(e,e===Le?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vp(e,l,t),om(e,Rt()),e.callbackNode!=null&&e.callbackNode===i?um.bind(null,e):null)}function cm(e,t){if(fr())return null;Vp(e,t,!0)}function Hv(){Jv(function(){(Ae&6)!==0?mo(Jd,Uv):rm()})}function ac(){if(Wn===0){var e=ls;e===0&&(e=ml,ml<<=1,(ml&261888)===0&&(ml=256)),Wn=e}return Wn}function dm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cl(""+e)}function fm(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function Bv(e,t,i,l,o){if(t==="submit"&&i&&i.stateNode===o){var c=dm((o[vt]||null).action),h=l.submitter;h&&(t=(t=h[vt]||null)?dm(t.formAction):h.getAttribute("formAction"),t!==null&&(c=t,h=null));var _=new Tl("action","action",null,l,o);e.push({event:_,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Wn!==0){var x=h?fm(o,h):new FormData(o);wu(i,{pending:!0,data:x,method:o.method,action:c},null,x)}}else typeof c=="function"&&(_.preventDefault(),x=h?fm(o,h):new FormData(o),wu(i,{pending:!0,data:x,method:o.method,action:c},c,x))},currentTarget:o}]})}}for(var lc=0;lc<Io.length;lc++){var rc=Io[lc],Yv=rc.toLowerCase(),qv=rc[0].toUpperCase()+rc.slice(1);Jt(Yv,"on"+qv)}Jt(Gf,"onAnimationEnd"),Jt(Vf,"onAnimationIteration"),Jt(Ff,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(iv,"onTransitionRun"),Jt(sv,"onTransitionStart"),Jt(av,"onTransitionCancel"),Jt(Qf,"onTransitionEnd"),Qi("onMouseEnter",["mouseout","mouseover"]),Qi("onMouseLeave",["mouseout","mouseover"]),Qi("onPointerEnter",["pointerout","pointerover"]),Qi("onPointerLeave",["pointerout","pointerover"]),pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wa));function hm(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],o=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var h=l.length-1;0<=h;h--){var _=l[h],x=_.instance,N=_.currentTarget;if(_=_.listener,x!==c&&o.isPropagationStopped())break e;c=_,o.currentTarget=N;try{c(o)}catch(D){Rl(D)}o.currentTarget=null,c=x}else for(h=0;h<l.length;h++){if(_=l[h],x=_.instance,N=_.currentTarget,_=_.listener,x!==c&&o.isPropagationStopped())break e;c=_,o.currentTarget=N;try{c(o)}catch(D){Rl(D)}o.currentTarget=null,c=x}}}}function ye(e,t){var i=t[bo];i===void 0&&(i=t[bo]=new Set);var l=e+"__bubble";i.has(l)||(pm(t,e,2,!1),i.add(l))}function oc(e,t,i){var l=0;t&&(l|=4),pm(i,e,l,t)}var mr="_reactListening"+Math.random().toString(36).slice(2);function uc(e){if(!e[mr]){e[mr]=!0,rf.forEach(function(i){i!=="selectionchange"&&(Iv.has(i)||oc(i,!1,e),oc(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mr]||(t[mr]=!0,oc("selectionchange",!1,t))}}function pm(e,t,i,l){switch(Gm(t)){case 2:var o=_b;break;case 8:o=gb;break;default:o=Ec}i=o.bind(null,t,i,e),o=void 0,!Ro||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),l?o!==void 0?e.addEventListener(t,i,{capture:!0,passive:o}):e.addEventListener(t,i,!0):o!==void 0?e.addEventListener(t,i,{passive:o}):e.addEventListener(t,i,!1)}function cc(e,t,i,l,o){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var _=l.stateNode.containerInfo;if(_===o)break;if(h===4)for(h=l.return;h!==null;){var x=h.tag;if((x===3||x===4)&&h.stateNode.containerInfo===o)return;h=h.return}for(;_!==null;){if(h=Gi(_),h===null)return;if(x=h.tag,x===5||x===6||x===26||x===27){l=c=h;continue e}_=_.parentNode}}l=l.return}vf(function(){var N=c,D=No(i),L=[];e:{var A=Xf.get(e);if(A!==void 0){var O=Tl,F=e;switch(e){case"keypress":if(El(i)===0)break e;case"keydown":case"keyup":O=Ly;break;case"focusin":F="focus",O=jo;break;case"focusout":F="blur",O=jo;break;case"beforeblur":case"afterblur":O=jo;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Hy;break;case Gf:case Vf:case Ff:O=Ty;break;case Qf:O=Yy;break;case"scroll":case"scrollend":O=xy;break;case"wheel":O=Iy;break;case"copy":case"cut":case"paste":O=Ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Ef;break;case"toggle":case"beforetoggle":O=Vy}var ee=(t&4)!==0,ze=!ee&&(e==="scroll"||e==="scrollend"),w=ee?A!==null?A+"Capture":null:A;ee=[];for(var S=N,T;S!==null;){var j=S;if(T=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||T===null||w===null||(j=Xs(S,w),j!=null&&ee.push(Ta(S,j,T))),ze)break;S=S.return}0<ee.length&&(A=new O(A,F,null,i,D),L.push({event:A,listeners:ee}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",A&&i!==To&&(F=i.relatedTarget||i.fromElement)&&(Gi(F)||F[Ii]))break e;if((O||A)&&(A=D.window===D?D:(A=D.ownerDocument)?A.defaultView||A.parentWindow:window,O?(F=i.relatedTarget||i.toElement,O=N,F=F?Gi(F):null,F!==null&&(ze=d(F),ee=F.tag,F!==ze||ee!==5&&ee!==27&&ee!==6)&&(F=null)):(O=null,F=N),O!==F)){if(ee=Cf,j="onMouseLeave",w="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Ef,j="onPointerLeave",w="onPointerEnter",S="pointer"),ze=O==null?A:Qs(O),T=F==null?A:Qs(F),A=new ee(j,S+"leave",O,i,D),A.target=ze,A.relatedTarget=T,j=null,Gi(D)===N&&(ee=new ee(w,S+"enter",F,i,D),ee.target=T,ee.relatedTarget=ze,j=ee),ze=j,O&&F)t:{for(ee=Gv,w=O,S=F,T=0,j=w;j;j=ee(j))T++;j=0;for(var W=S;W;W=ee(W))j++;for(;0<T-j;)w=ee(w),T--;for(;0<j-T;)S=ee(S),j--;for(;T--;){if(w===S||S!==null&&w===S.alternate){ee=w;break t}w=ee(w),S=ee(S)}ee=null}else ee=null;O!==null&&mm(L,A,O,ee,!1),F!==null&&ze!==null&&mm(L,ze,F,ee,!0)}}e:{if(A=N?Qs(N):window,O=A.nodeName&&A.nodeName.toLowerCase(),O==="select"||O==="input"&&A.type==="file")var Ee=Df;else if(Of(A))if(jf)Ee=ev;else{Ee=Py;var Q=Wy}else O=A.nodeName,!O||O.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?N&&wo(N.elementType)&&(Ee=Df):Ee=$y;if(Ee&&(Ee=Ee(e,N))){Mf(L,Ee,i,D);break e}Q&&Q(e,A,N),e==="focusout"&&N&&A.type==="number"&&N.memoizedProps.value!=null&&Eo(A,"number",A.value)}switch(Q=N?Qs(N):window,e){case"focusin":(Of(Q)||Q.contentEditable==="true")&&(Pi=Q,Bo=N,ta=null);break;case"focusout":ta=Bo=Pi=null;break;case"mousedown":Yo=!0;break;case"contextmenu":case"mouseup":case"dragend":Yo=!1,qf(L,i,D);break;case"selectionchange":if(nv)break;case"keydown":case"keyup":qf(L,i,D)}var fe;if(Lo)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Wi?Af(e,i)&&(xe="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(xe="onCompositionStart");xe&&(wf&&i.locale!=="ko"&&(Wi||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Wi&&(fe=bf()):(Ln=D,Oo="value"in Ln?Ln.value:Ln.textContent,Wi=!0)),Q=_r(N,xe),0<Q.length&&(xe=new Sf(xe,e,null,i,D),L.push({event:xe,listeners:Q}),fe?xe.data=fe:(fe=Rf(i),fe!==null&&(xe.data=fe)))),(fe=Qy?Xy(e,i):Ky(e,i))&&(xe=_r(N,"onBeforeInput"),0<xe.length&&(Q=new Sf("onBeforeInput","beforeinput",null,i,D),L.push({event:Q,listeners:xe}),Q.data=fe)),Bv(L,e,N,i,D)}hm(L,t)})}function Ta(e,t,i){return{instance:e,listener:t,currentTarget:i}}function _r(e,t){for(var i=t+"Capture",l=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Xs(e,i),o!=null&&l.unshift(Ta(e,o,c)),o=Xs(e,t),o!=null&&l.push(Ta(e,o,c))),e.tag===3)return l;e=e.return}return[]}function Gv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mm(e,t,i,l,o){for(var c=t._reactName,h=[];i!==null&&i!==l;){var _=i,x=_.alternate,N=_.stateNode;if(_=_.tag,x!==null&&x===l)break;_!==5&&_!==26&&_!==27||N===null||(x=N,o?(N=Xs(i,c),N!=null&&h.unshift(Ta(i,N,x))):o||(N=Xs(i,c),N!=null&&h.push(Ta(i,N,x)))),i=i.return}h.length!==0&&e.push({event:t,listeners:h})}var Vv=/\r\n?/g,Fv=/\u0000|\uFFFD/g;function _m(e){return(typeof e=="string"?e:""+e).replace(Vv,`
`).replace(Fv,"")}function gm(e,t){return t=_m(t),_m(e)===t}function je(e,t,i,l,o,c){switch(i){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ki(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ki(e,""+l);break;case"className":bl(e,"class",l);break;case"tabIndex":bl(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":bl(e,i,l);break;case"style":gf(e,l,c);break;case"data":if(t!=="object"){bl(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=Cl(""+l),e.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(t!=="input"&&je(e,t,"name",o.name,o,null),je(e,t,"formEncType",o.formEncType,o,null),je(e,t,"formMethod",o.formMethod,o,null),je(e,t,"formTarget",o.formTarget,o,null)):(je(e,t,"encType",o.encType,o,null),je(e,t,"method",o.method,o,null),je(e,t,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=Cl(""+l),e.setAttribute(i,l);break;case"onClick":l!=null&&(e.onclick=dn);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(i=l.__html,i!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=i}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}i=Cl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""+l):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":l===!0?e.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,l):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(i,l):e.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(i):e.setAttribute(i,l);break;case"popover":ye("beforetoggle",e),ye("toggle",e),vl(e,"popover",l);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":vl(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=vy.get(i)||i,vl(e,i,l))}}function dc(e,t,i,l,o,c){switch(i){case"style":gf(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(i=l.__html,i!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=i}}break;case"children":typeof l=="string"?Ki(e,l):(typeof l=="number"||typeof l=="bigint")&&Ki(e,""+l);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!of.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(o=i.endsWith("Capture"),t=i.slice(2,o?i.length-7:void 0),c=e[vt]||null,c=c!=null?c[i]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof l=="function")){typeof c!="function"&&c!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,l,o);break e}i in e?e[i]=l:l===!0?e.setAttribute(i,""):vl(e,i,l)}}}function ht(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var l=!1,o=!1,c;for(c in i)if(i.hasOwnProperty(c)){var h=i[c];if(h!=null)switch(c){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:je(e,t,c,h,i,null)}}o&&je(e,t,"srcSet",i.srcSet,i,null),l&&je(e,t,"src",i.src,i,null);return;case"input":ye("invalid",e);var _=c=h=o=null,x=null,N=null;for(l in i)if(i.hasOwnProperty(l)){var D=i[l];if(D!=null)switch(l){case"name":o=D;break;case"type":h=D;break;case"checked":x=D;break;case"defaultChecked":N=D;break;case"value":c=D;break;case"defaultValue":_=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,t));break;default:je(e,t,l,D,i,null)}}hf(e,c,_,x,N,h,o,!1);return;case"select":ye("invalid",e),l=h=c=null;for(o in i)if(i.hasOwnProperty(o)&&(_=i[o],_!=null))switch(o){case"value":c=_;break;case"defaultValue":h=_;break;case"multiple":l=_;default:je(e,t,o,_,i,null)}t=c,i=h,e.multiple=!!l,t!=null?Xi(e,!!l,t,!1):i!=null&&Xi(e,!!l,i,!0);return;case"textarea":ye("invalid",e),c=o=l=null;for(h in i)if(i.hasOwnProperty(h)&&(_=i[h],_!=null))switch(h){case"value":l=_;break;case"defaultValue":o=_;break;case"children":c=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(91));break;default:je(e,t,h,_,i,null)}mf(e,l,o,c);return;case"option":for(x in i)if(i.hasOwnProperty(x)&&(l=i[x],l!=null))switch(x){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:je(e,t,x,l,i,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(l=0;l<wa.length;l++)ye(wa[l],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in i)if(i.hasOwnProperty(N)&&(l=i[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:je(e,t,N,l,i,null)}return;default:if(wo(t)){for(D in i)i.hasOwnProperty(D)&&(l=i[D],l!==void 0&&dc(e,t,D,l,i,void 0));return}}for(_ in i)i.hasOwnProperty(_)&&(l=i[_],l!=null&&je(e,t,_,l,i,null))}function Qv(e,t,i,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,h=null,_=null,x=null,N=null,D=null;for(O in i){var L=i[O];if(i.hasOwnProperty(O)&&L!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":x=L;default:l.hasOwnProperty(O)||je(e,t,O,null,l,L)}}for(var A in l){var O=l[A];if(L=i[A],l.hasOwnProperty(A)&&(O!=null||L!=null))switch(A){case"type":c=O;break;case"name":o=O;break;case"checked":N=O;break;case"defaultChecked":D=O;break;case"value":h=O;break;case"defaultValue":_=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:O!==L&&je(e,t,A,O,l,L)}}So(e,h,_,x,N,D,c,o);return;case"select":O=h=_=A=null;for(c in i)if(x=i[c],i.hasOwnProperty(c)&&x!=null)switch(c){case"value":break;case"multiple":O=x;default:l.hasOwnProperty(c)||je(e,t,c,null,l,x)}for(o in l)if(c=l[o],x=i[o],l.hasOwnProperty(o)&&(c!=null||x!=null))switch(o){case"value":A=c;break;case"defaultValue":_=c;break;case"multiple":h=c;default:c!==x&&je(e,t,o,c,l,x)}t=_,i=h,l=O,A!=null?Xi(e,!!i,A,!1):!!l!=!!i&&(t!=null?Xi(e,!!i,t,!0):Xi(e,!!i,i?[]:"",!1));return;case"textarea":O=A=null;for(_ in i)if(o=i[_],i.hasOwnProperty(_)&&o!=null&&!l.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:je(e,t,_,null,l,o)}for(h in l)if(o=l[h],c=i[h],l.hasOwnProperty(h)&&(o!=null||c!=null))switch(h){case"value":A=o;break;case"defaultValue":O=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==c&&je(e,t,h,o,l,c)}pf(e,A,O);return;case"option":for(var F in i)if(A=i[F],i.hasOwnProperty(F)&&A!=null&&!l.hasOwnProperty(F))switch(F){case"selected":e.selected=!1;break;default:je(e,t,F,null,l,A)}for(x in l)if(A=l[x],O=i[x],l.hasOwnProperty(x)&&A!==O&&(A!=null||O!=null))switch(x){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:je(e,t,x,A,l,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in i)A=i[ee],i.hasOwnProperty(ee)&&A!=null&&!l.hasOwnProperty(ee)&&je(e,t,ee,null,l,A);for(N in l)if(A=l[N],O=i[N],l.hasOwnProperty(N)&&A!==O&&(A!=null||O!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,t));break;default:je(e,t,N,A,l,O)}return;default:if(wo(t)){for(var ze in i)A=i[ze],i.hasOwnProperty(ze)&&A!==void 0&&!l.hasOwnProperty(ze)&&dc(e,t,ze,void 0,l,A);for(D in l)A=l[D],O=i[D],!l.hasOwnProperty(D)||A===O||A===void 0&&O===void 0||dc(e,t,D,A,l,O);return}}for(var w in i)A=i[w],i.hasOwnProperty(w)&&A!=null&&!l.hasOwnProperty(w)&&je(e,t,w,null,l,A);for(L in l)A=l[L],O=i[L],!l.hasOwnProperty(L)||A===O||A==null&&O==null||je(e,t,L,A,l,O)}function ym(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),l=0;l<i.length;l++){var o=i[l],c=o.transferSize,h=o.initiatorType,_=o.duration;if(c&&_&&ym(h)){for(h=0,_=o.responseEnd,l+=1;l<i.length;l++){var x=i[l],N=x.startTime;if(N>_)break;var D=x.transferSize,L=x.initiatorType;D&&ym(L)&&(x=x.responseEnd,h+=D*(x<_?1:(_-N)/(x-N)))}if(--l,t+=8*(c+h)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fc=null,hc=null;function gr(e){return e.nodeType===9?e:e.ownerDocument}function vm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mc=null;function Kv(){var e=window.event;return e&&e.type==="popstate"?e===mc?!1:(mc=e,!0):(mc=null,!1)}var xm=typeof setTimeout=="function"?setTimeout:void 0,Zv=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(e){return Cm.resolve(null).then(e).catch(Wv)}:xm;function Wv(e){setTimeout(function(){throw e})}function Pn(e){return e==="head"}function Sm(e,t){var i=t,l=0;do{var o=i.nextSibling;if(e.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"||i==="/&"){if(l===0){e.removeChild(o),ws(t);return}l--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")l++;else if(i==="html")Na(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Na(i);for(var c=i.firstChild;c;){var h=c.nextSibling,_=c.nodeName;c[Fs]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=h}}else i==="body"&&Na(e.ownerDocument.body);i=o}while(i);ws(t)}function Em(e,t){var i=e;e=0;do{var l=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=l}while(i)}function _c(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":_c(i),xo(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Pv(e,t,i,l){for(;e.nodeType===1;){var o=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Fs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Kt(e.nextSibling),e===null)break}return null}function $v(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Kt(e.nextSibling),e===null))return null;return e}function wm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Kt(e.nextSibling),e===null))return null;return e}function gc(e){return e.data==="$?"||e.data==="$~"}function yc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function eb(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var l=function(){t(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vc=null;function Tm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return Kt(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function Nm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function Am(e,t,i){switch(t=gr(i),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Na(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xo(e)}var Zt=new Map,Rm=new Set;function yr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=B.d;B.d={f:tb,r:nb,D:ib,C:sb,L:ab,m:lb,X:ob,S:rb,M:ub};function tb(){var e=Nn.f(),t=ur();return e||t}function nb(e){var t=Vi(e);t!==null&&t.tag===5&&t.type==="form"?Qh(t):Nn.r(e)}var Cs=typeof document>"u"?null:document;function Om(e,t,i){var l=Cs;if(l&&typeof t=="string"&&t){var o=qt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof i=="string"&&(o+='[crossorigin="'+i+'"]'),Rm.has(o)||(Rm.add(o),e={rel:e,crossOrigin:i,href:t},l.querySelector(o)===null&&(t=l.createElement("link"),ht(t,"link",e),st(t),l.head.appendChild(t)))}}function ib(e){Nn.D(e),Om("dns-prefetch",e,null)}function sb(e,t){Nn.C(e,t),Om("preconnect",e,t)}function ab(e,t,i){Nn.L(e,t,i);var l=Cs;if(l&&e&&t){var o='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&i&&i.imageSrcSet?(o+='[imagesrcset="'+qt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(o+='[imagesizes="'+qt(i.imageSizes)+'"]')):o+='[href="'+qt(e)+'"]';var c=o;switch(t){case"style":c=Ss(e);break;case"script":c=Es(e)}Zt.has(c)||(e=v({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),Zt.set(c,e),l.querySelector(o)!==null||t==="style"&&l.querySelector(Aa(c))||t==="script"&&l.querySelector(Ra(c))||(t=l.createElement("link"),ht(t,"link",e),st(t),l.head.appendChild(t)))}}function lb(e,t){Nn.m(e,t);var i=Cs;if(i&&e){var l=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+qt(l)+'"][href="'+qt(e)+'"]',c=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Es(e)}if(!Zt.has(c)&&(e=v({rel:"modulepreload",href:e},t),Zt.set(c,e),i.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ra(c)))return}l=i.createElement("link"),ht(l,"link",e),st(l),i.head.appendChild(l)}}}function rb(e,t,i){Nn.S(e,t,i);var l=Cs;if(l&&e){var o=Fi(l).hoistableStyles,c=Ss(e);t=t||"default";var h=o.get(c);if(!h){var _={loading:0,preload:null};if(h=l.querySelector(Aa(c)))_.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},i),(i=Zt.get(c))&&bc(e,i);var x=h=l.createElement("link");st(x),ht(x,"link",e),x._p=new Promise(function(N,D){x.onload=N,x.onerror=D}),x.addEventListener("load",function(){_.loading|=1}),x.addEventListener("error",function(){_.loading|=2}),_.loading|=4,vr(h,t,l)}h={type:"stylesheet",instance:h,count:1,state:_},o.set(c,h)}}}function ob(e,t){Nn.X(e,t);var i=Cs;if(i&&e){var l=Fi(i).hoistableScripts,o=Es(e),c=l.get(o);c||(c=i.querySelector(Ra(o)),c||(e=v({src:e,async:!0},t),(t=Zt.get(o))&&xc(e,t),c=i.createElement("script"),st(c),ht(c,"link",e),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(o,c))}}function ub(e,t){Nn.M(e,t);var i=Cs;if(i&&e){var l=Fi(i).hoistableScripts,o=Es(e),c=l.get(o);c||(c=i.querySelector(Ra(o)),c||(e=v({src:e,async:!0,type:"module"},t),(t=Zt.get(o))&&xc(e,t),c=i.createElement("script"),st(c),ht(c,"link",e),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(o,c))}}function Mm(e,t,i,l){var o=(o=_e.current)?yr(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=Ss(i.href),i=Fi(o).hoistableStyles,l=i.get(t),l||(l={type:"style",instance:null,count:0,state:null},i.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Ss(i.href);var c=Fi(o).hoistableStyles,h=c.get(e);if(h||(o=o.ownerDocument||o,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,h),(c=o.querySelector(Aa(e)))&&!c._p&&(h.instance=c,h.state.loading=5),Zt.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Zt.set(e,i),c||cb(o,e,i,h.state))),t&&l===null)throw Error(r(528,""));return h}if(t&&l!==null)throw Error(r(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Es(i),i=Fi(o).hoistableScripts,l=i.get(t),l||(l={type:"script",instance:null,count:0,state:null},i.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ss(e){return'href="'+qt(e)+'"'}function Aa(e){return'link[rel="stylesheet"]['+e+"]"}function Dm(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function cb(e,t,i,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ht(t,"link",i),st(t),e.head.appendChild(t))}function Es(e){return'[src="'+qt(e)+'"]'}function Ra(e){return"script[async]"+e}function jm(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+qt(i.href)+'"]');if(l)return t.instance=l,st(l),l;var o=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),st(l),ht(l,"style",o),vr(l,i.precedence,e),t.instance=l;case"stylesheet":o=Ss(i.href);var c=e.querySelector(Aa(o));if(c)return t.state.loading|=4,t.instance=c,st(c),c;l=Dm(i),(o=Zt.get(o))&&bc(l,o),c=(e.ownerDocument||e).createElement("link"),st(c);var h=c;return h._p=new Promise(function(_,x){h.onload=_,h.onerror=x}),ht(c,"link",l),t.state.loading|=4,vr(c,i.precedence,e),t.instance=c;case"script":return c=Es(i.src),(o=e.querySelector(Ra(c)))?(t.instance=o,st(o),o):(l=i,(o=Zt.get(c))&&(l=v({},i),xc(l,o)),e=e.ownerDocument||e,o=e.createElement("script"),st(o),ht(o,"link",l),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,vr(l,i.precedence,e));return t.instance}function vr(e,t,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,c=o,h=0;h<l.length;h++){var _=l[h];if(_.dataset.precedence===t)c=_;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var br=null;function zm(e,t,i){if(br===null){var l=new Map,o=br=new Map;o.set(i,l)}else o=br,l=o.get(i),l||(l=new Map,o.set(i,l));if(l.has(e))return l;for(l.set(e,null),i=i.getElementsByTagName(e),o=0;o<i.length;o++){var c=i[o];if(!(c[Fs]||c[ut]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(t)||"";h=e+h;var _=l.get(h);_?_.push(c):l.set(h,[c])}}return l}function Lm(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function db(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function km(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fb(e,t,i,l){if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var o=Ss(l.href),c=t.querySelector(Aa(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=xr.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=c,st(c);return}c=t.ownerDocument||t,l=Dm(l),(o=Zt.get(o))&&bc(l,o),c=c.createElement("link"),st(c);var h=c;h._p=new Promise(function(_,x){h.onload=_,h.onerror=x}),ht(c,"link",l),i.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=xr.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var Cc=0;function hb(e,t){return e.stylesheets&&e.count===0&&Sr(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var l=setTimeout(function(){if(e.stylesheets&&Sr(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Cc===0&&(Cc=62500*Xv());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Sr(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Cc?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(o)}}:null}function xr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cr=null;function Sr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cr=new Map,t.forEach(pb,e),Cr=null,xr.call(e))}function pb(e,t){if(!(t.state.loading&4)){var i=Cr.get(e);if(i)var l=i.get(null);else{i=new Map,Cr.set(e,i);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var h=o[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(i.set(h.dataset.precedence,h),l=h)}l&&i.set(null,l)}o=t.instance,h=o.getAttribute("data-precedence"),c=i.get(h)||l,c===l&&i.set(null,o),i.set(h,o),this.count++,l=xr.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Oa={$$typeof:de,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function mb(e,t,i,l,o,c,h,_,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=go(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=go(0),this.hiddenUpdates=go(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function Um(e,t,i,l,o,c,h,_,x,N,D,L){return e=new mb(e,t,i,h,x,N,D,L,_),t=1,c===!0&&(t|=24),c=jt(3,null,null,t),e.current=c,c.stateNode=e,t=tu(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:i,cache:t},au(c),e}function Hm(e){return e?(e=ts,e):ts}function Bm(e,t,i,l,o,c){o=Hm(o),l.context===null?l.context=o:l.pendingContext=o,l=qn(t),l.payload={element:i},c=c===void 0?null:c,c!==null&&(l.callback=c),i=In(e,l,t),i!==null&&(wt(i,e,t),oa(i,e,t))}function Ym(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Sc(e,t){Ym(e,t),(e=e.alternate)&&Ym(e,t)}function qm(e){if(e.tag===13||e.tag===31){var t=yi(e,67108864);t!==null&&wt(t,e,67108864),Sc(e,67108864)}}function Im(e){if(e.tag===13||e.tag===31){var t=Ht();t=yo(t);var i=yi(e,t);i!==null&&wt(i,e,t),Sc(e,t)}}var Er=!0;function _b(e,t,i,l){var o=R.T;R.T=null;var c=B.p;try{B.p=2,Ec(e,t,i,l)}finally{B.p=c,R.T=o}}function gb(e,t,i,l){var o=R.T;R.T=null;var c=B.p;try{B.p=8,Ec(e,t,i,l)}finally{B.p=c,R.T=o}}function Ec(e,t,i,l){if(Er){var o=wc(l);if(o===null)cc(e,t,l,wr,i),Vm(e,l);else if(vb(o,e,t,i,l))l.stopPropagation();else if(Vm(e,l),t&4&&-1<yb.indexOf(e)){for(;o!==null;){var c=Vi(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=hi(c.pendingLanes);if(h!==0){var _=c;for(_.pendingLanes|=2,_.entangledLanes|=2;h;){var x=1<<31-Mt(h);_.entanglements[1]|=x,h&=~x}on(c),(Ae&6)===0&&(rr=Rt()+500,Ea(0))}}break;case 31:case 13:_=yi(c,2),_!==null&&wt(_,c,2),ur(),Sc(c,2)}if(c=wc(l),c===null&&cc(e,t,l,wr,i),c===o)break;o=c}o!==null&&l.stopPropagation()}else cc(e,t,l,null,i)}}function wc(e){return e=No(e),Tc(e)}var wr=null;function Tc(e){if(wr=null,e=Gi(e),e!==null){var t=d(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=f(t),e!==null)return e;e=null}else if(i===31){if(e=m(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return wr=e,null}function Gm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(iy()){case Jd:return 2;case Wd:return 8;case pl:case sy:return 32;case Pd:return 268435456;default:return 32}default:return 32}}var Nc=!1,$n=null,ei=null,ti=null,Ma=new Map,Da=new Map,ni=[],yb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vm(e,t){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":Ma.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(t.pointerId)}}function ja(e,t,i,l,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:i,eventSystemFlags:l,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Vi(t),t!==null&&qm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vb(e,t,i,l,o){switch(t){case"focusin":return $n=ja($n,e,t,i,l,o),!0;case"dragenter":return ei=ja(ei,e,t,i,l,o),!0;case"mouseover":return ti=ja(ti,e,t,i,l,o),!0;case"pointerover":var c=o.pointerId;return Ma.set(c,ja(Ma.get(c)||null,e,t,i,l,o)),!0;case"gotpointercapture":return c=o.pointerId,Da.set(c,ja(Da.get(c)||null,e,t,i,l,o)),!0}return!1}function Fm(e){var t=Gi(e.target);if(t!==null){var i=d(t);if(i!==null){if(t=i.tag,t===13){if(t=f(i),t!==null){e.blockedOn=t,af(e.priority,function(){Im(i)});return}}else if(t===31){if(t=m(i),t!==null){e.blockedOn=t,af(e.priority,function(){Im(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=wc(e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);To=l,i.target.dispatchEvent(l),To=null}else return t=Vi(i),t!==null&&qm(t),e.blockedOn=i,!1;t.shift()}return!0}function Qm(e,t,i){Tr(e)&&i.delete(t)}function bb(){Nc=!1,$n!==null&&Tr($n)&&($n=null),ei!==null&&Tr(ei)&&(ei=null),ti!==null&&Tr(ti)&&(ti=null),Ma.forEach(Qm),Da.forEach(Qm)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Nc||(Nc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,bb)))}var Ar=null;function Xm(e){Ar!==e&&(Ar=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ar===e&&(Ar=null);for(var t=0;t<e.length;t+=3){var i=e[t],l=e[t+1],o=e[t+2];if(typeof l!="function"){if(Tc(l||i)===null)continue;break}var c=Vi(i);c!==null&&(e.splice(t,3),t-=3,wu(c,{pending:!0,data:o,method:i.method,action:l},l,o))}}))}function ws(e){function t(x){return Nr(x,e)}$n!==null&&Nr($n,e),ei!==null&&Nr(ei,e),ti!==null&&Nr(ti,e),Ma.forEach(t),Da.forEach(t);for(var i=0;i<ni.length;i++){var l=ni[i];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ni.length&&(i=ni[0],i.blockedOn===null);)Fm(i),i.blockedOn===null&&ni.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var o=i[l],c=i[l+1],h=o[vt]||null;if(typeof c=="function")h||Xm(i);else if(h){var _=null;if(c&&c.hasAttribute("formAction")){if(o=c,h=c[vt]||null)_=h.formAction;else if(Tc(o)!==null)continue}else _=h.action;typeof _=="function"?i[l+1]=_:(i.splice(l,3),l-=3),Xm(i)}}}function Km(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(h){return o=h})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),l||setTimeout(i,20)}function i(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Ac(e){this._internalRoot=e}Rr.prototype.render=Ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var i=t.current,l=Ht();Bm(i,l,e,t,null,null)},Rr.prototype.unmount=Ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bm(e.current,2,null,e,null,null),ur(),t[Ii]=null}};function Rr(e){this._internalRoot=e}Rr.prototype.unstable_scheduleHydration=function(e){if(e){var t=sf();e={blockedOn:null,target:e,priority:t};for(var i=0;i<ni.length&&t!==0&&t<ni[i].priority;i++);ni.splice(i,0,e),i===0&&Fm(e)}};var Zm=n.version;if(Zm!=="19.2.1")throw Error(r(527,Zm,"19.2.1"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var xb={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{Is=Or.inject(xb),Ot=Or}catch{}}return La.createRoot=function(e,t){if(!u(e))throw Error(r(299));var i=!1,l="",o=np,c=ip,h=sp;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Um(e,1,!1,null,null,i,l,null,o,c,h,Km),e[Ii]=t.current,uc(e),new Ac(t)},La.hydrateRoot=function(e,t,i){if(!u(e))throw Error(r(299));var l=!1,o="",c=np,h=ip,_=sp,x=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError),i.formState!==void 0&&(x=i.formState)),t=Um(e,1,!0,t,i??null,l,o,x,c,h,_,Km),t.context=Hm(null),i=t.current,l=Ht(),l=yo(l),o=qn(l),o.callback=null,In(i,o,l),i=l,t.current.lanes=i,Vs(t,i),on(t),e[Ii]=t.current,uc(e),new Rr(t)},La.version="19.2.1",La}var a_;function Mb(){if(a_)return Mc.exports;a_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(n){console.error(n)}}return s(),Mc.exports=Ob(),Mc.exports}var Db=Mb();const jb=og(Db),zb=({chapters:s,currentChapterId:n,onSelectChapter:a,unlockedMap:r,enforceLocksForStudent:u=!0})=>{const[d,f]=k.useState(null),[m,g]=k.useState(!1),p=Object.values(r).filter(Boolean).length,C=Math.round(p/s.length*100);return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"w-14 bg-[#252526] text-slate-400 flex flex-col items-center py-4 border-r border-[#3c3c3c] relative z-30",children:[y.jsx("div",{className:"mb-6 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-xl text-white shadow-lg cursor-pointer hover:scale-105 transition-transform",title:"Python Tutoring",children:"🐍"}),y.jsxs("button",{onClick:()=>g(!m),className:`w-10 h-10 rounded-lg flex items-center justify-center mb-2 transition-all relative ${m?"bg-blue-600 text-white":"hover:bg-[#3c3c3c] hover:text-white"}`,title:"Chapters",children:[y.jsx("span",{className:"text-xl",children:"📚"}),y.jsxs("svg",{className:"absolute inset-0 w-full h-full -rotate-90",viewBox:"0 0 36 36",children:[y.jsx("circle",{cx:"18",cy:"18",r:"16",fill:"none",stroke:"#3c3c3c",strokeWidth:"2"}),y.jsx("circle",{cx:"18",cy:"18",r:"16",fill:"none",stroke:"#22c55e",strokeWidth:"2",strokeDasharray:`${C} 100`,strokeLinecap:"round",className:"transition-all duration-500"})]})]}),y.jsx("div",{className:"flex-1"}),y.jsx("button",{className:"w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#3c3c3c] hover:text-white transition-all",title:"Settings",children:y.jsx("span",{className:"text-xl",children:"⚙️"})}),y.jsx("button",{className:"w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#3c3c3c] hover:text-white transition-all",title:"Keyboard Shortcuts: Ctrl+Enter to Run",children:y.jsx("span",{className:"text-xl",children:"❓"})})]}),m&&y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"fixed inset-0 bg-black/40 z-20",onClick:()=>g(!1)}),y.jsxs("div",{className:"fixed left-14 top-0 h-full w-80 bg-[#1e1e1e] shadow-2xl border-r border-[#3c3c3c] z-30 animate-slide-in overflow-hidden flex flex-col",children:[y.jsxs("div",{className:"p-5 border-b border-[#3c3c3c] bg-[#252526]",children:[y.jsxs("div",{className:"flex items-center justify-between mb-3",children:[y.jsx("h3",{className:"font-bold text-white text-lg",children:"Curriculum"}),y.jsx("button",{onClick:()=>g(!1),className:"text-slate-500 hover:text-white transition-colors",children:"✕"})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"flex-1 h-2 bg-[#3c3c3c] rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500",style:{width:`${C}%`}})}),y.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[C,"%"]})]})]}),y.jsx("div",{className:"flex-1 overflow-y-auto p-3",children:s.map((v,E)=>{const z=r[v.id],U=n===v.id,I=!z&&u,se=d===v.id;return y.jsxs("button",{onClick:()=>{if(I){f(v.id),setTimeout(()=>f(null),1500);return}a(v.id),g(!1)},className:`w-full text-left p-4 rounded-xl mb-2 transition-all flex items-start gap-3 group ${U?"bg-blue-600/20 border border-blue-500/30":se?"bg-red-600/20 border border-red-500/50 animate-shake":I?"opacity-60 cursor-not-allowed border border-transparent":"hover:bg-[#2a2a2a] border border-transparent"}`,children:[y.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${U?"bg-blue-600 text-white":z?"bg-emerald-600/20 text-emerald-400 border border-emerald-500/30":"bg-[#3c3c3c] text-slate-500"}`,children:z?E+1:"🔒"}),y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsx("div",{className:`font-medium truncate text-sm ${U?"text-white":"text-slate-300"}`,children:v.title}),y.jsxs("div",{className:"text-xs text-slate-500 truncate mt-0.5",children:[v.challenges.length," challenges"]})]}),z&&!U&&y.jsx("span",{className:"text-emerald-500 text-sm",children:"✓"}),se&&y.jsx("span",{className:"text-red-400 text-xs animate-pulse",children:"Locked by teacher"})]},v.id)})}),y.jsx("div",{className:"p-4 border-t border-[#3c3c3c] bg-[#252526]",children:y.jsx("div",{className:"text-xs text-slate-500 text-center",children:"Mr. Stewart's Python Tutoring"})})]})]}),y.jsx("style",{children:`
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
      `})]})};function l_(s,n){(n==null||n>s.length)&&(n=s.length);for(var a=0,r=Array(n);a<n;a++)r[a]=s[a];return r}function Lb(s){if(Array.isArray(s))return s}function kb(s,n,a){return(n=Gb(n))in s?Object.defineProperty(s,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[n]=a,s}function Ub(s,n){var a=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(a!=null){var r,u,d,f,m=[],g=!0,p=!1;try{if(d=(a=a.call(s)).next,n!==0)for(;!(g=(r=d.call(a)).done)&&(m.push(r.value),m.length!==n);g=!0);}catch(C){p=!0,u=C}finally{try{if(!g&&a.return!=null&&(f=a.return(),Object(f)!==f))return}finally{if(p)throw u}}return m}}function Hb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r_(s,n){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);n&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(s,u).enumerable})),a.push.apply(a,r)}return a}function o_(s){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?r_(Object(a),!0).forEach(function(r){kb(s,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):r_(Object(a)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(a,r))})}return s}function Bb(s,n){if(s==null)return{};var a,r,u=Yb(s,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(s);for(r=0;r<d.length;r++)a=d[r],n.indexOf(a)===-1&&{}.propertyIsEnumerable.call(s,a)&&(u[a]=s[a])}return u}function Yb(s,n){if(s==null)return{};var a={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(n.indexOf(r)!==-1)continue;a[r]=s[r]}return a}function qb(s,n){return Lb(s)||Ub(s,n)||Vb(s,n)||Hb()}function Ib(s,n){if(typeof s!="object"||!s)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var r=a.call(s,n);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(s)}function Gb(s){var n=Ib(s,"string");return typeof n=="symbol"?n:n+""}function Vb(s,n){if(s){if(typeof s=="string")return l_(s,n);var a={}.toString.call(s).slice(8,-1);return a==="Object"&&s.constructor&&(a=s.constructor.name),a==="Map"||a==="Set"?Array.from(s):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l_(s,n):void 0}}function Fb(s,n,a){return n in s?Object.defineProperty(s,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[n]=a,s}function u_(s,n){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);n&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(s,u).enumerable})),a.push.apply(a,r)}return a}function c_(s){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?u_(Object(a),!0).forEach(function(r){Fb(s,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):u_(Object(a)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(a,r))})}return s}function Qb(){for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return function(r){return n.reduceRight(function(u,d){return d(u)},r)}}function Ya(s){return function n(){for(var a=this,r=arguments.length,u=new Array(r),d=0;d<r;d++)u[d]=arguments[d];return u.length>=s.length?s.apply(this,u):function(){for(var f=arguments.length,m=new Array(f),g=0;g<f;g++)m[g]=arguments[g];return n.apply(a,[].concat(u,m))}}}function Lr(s){return{}.toString.call(s).includes("Object")}function Xb(s){return!Object.keys(s).length}function Xa(s){return typeof s=="function"}function Kb(s,n){return Object.prototype.hasOwnProperty.call(s,n)}function Zb(s,n){return Lr(n)||ai("changeType"),Object.keys(n).some(function(a){return!Kb(s,a)})&&ai("changeField"),n}function Jb(s){Xa(s)||ai("selectorType")}function Wb(s){Xa(s)||Lr(s)||ai("handlerType"),Lr(s)&&Object.values(s).some(function(n){return!Xa(n)})&&ai("handlersType")}function Pb(s){s||ai("initialIsRequired"),Lr(s)||ai("initialType"),Xb(s)&&ai("initialContent")}function $b(s,n){throw new Error(s[n]||s.default)}var ex={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},ai=Ya($b)(ex),Mr={changes:Zb,selector:Jb,handler:Wb,initial:Pb};function tx(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Mr.initial(s),Mr.handler(n);var a={current:s},r=Ya(sx)(a,n),u=Ya(ix)(a),d=Ya(Mr.changes)(s),f=Ya(nx)(a);function m(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(C){return C};return Mr.selector(p),p(a.current)}function g(p){Qb(r,u,d,f)(p)}return[m,g]}function nx(s,n){return Xa(n)?n(s.current):n}function ix(s,n){return s.current=c_(c_({},s.current),n),n}function sx(s,n,a){return Xa(n)?n(s.current):Object.keys(a).forEach(function(r){var u;return(u=n[r])===null||u===void 0?void 0:u.call(n,s.current[r])}),a}var ax={create:tx},lx={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function rx(s){return function n(){for(var a=this,r=arguments.length,u=new Array(r),d=0;d<r;d++)u[d]=arguments[d];return u.length>=s.length?s.apply(this,u):function(){for(var f=arguments.length,m=new Array(f),g=0;g<f;g++)m[g]=arguments[g];return n.apply(a,[].concat(u,m))}}}function ox(s){return{}.toString.call(s).includes("Object")}function ux(s){return s||d_("configIsRequired"),ox(s)||d_("configType"),s.urls?(cx(),{paths:{vs:s.urls.monacoBase}}):s}function cx(){console.warn(ug.deprecation)}function dx(s,n){throw new Error(s[n]||s.default)}var ug={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},d_=rx(dx)(ug),fx={config:ux},hx=function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return function(u){return a.reduceRight(function(d,f){return f(d)},u)}};function cg(s,n){return Object.keys(n).forEach(function(a){n[a]instanceof Object&&s[a]&&Object.assign(n[a],cg(s[a],n[a]))}),o_(o_({},s),n)}var px={type:"cancelation",msg:"operation is manually canceled"};function Lc(s){var n=!1,a=new Promise(function(r,u){s.then(function(d){return n?u(px):r(d)}),s.catch(u)});return a.cancel=function(){return n=!0},a}var mx=["monaco"],_x=ax.create({config:lx,isInitialized:!1,resolve:null,reject:null,monaco:null}),dg=qb(_x,2),sl=dg[0],Pr=dg[1];function gx(s){var n=fx.config(s),a=n.monaco,r=Bb(n,mx);Pr(function(u){return{config:cg(u.config,r),monaco:a}})}function yx(){var s=sl(function(n){var a=n.monaco,r=n.isInitialized,u=n.resolve;return{monaco:a,isInitialized:r,resolve:u}});if(!s.isInitialized){if(Pr({isInitialized:!0}),s.monaco)return s.resolve(s.monaco),Lc(kc);if(window.monaco&&window.monaco.editor)return fg(window.monaco),s.resolve(window.monaco),Lc(kc);hx(vx,xx)(Cx)}return Lc(kc)}function vx(s){return document.body.appendChild(s)}function bx(s){var n=document.createElement("script");return s&&(n.src=s),n}function xx(s){var n=sl(function(r){var u=r.config,d=r.reject;return{config:u,reject:d}}),a=bx("".concat(n.config.paths.vs,"/loader.js"));return a.onload=function(){return s()},a.onerror=n.reject,a}function Cx(){var s=sl(function(a){var r=a.config,u=a.resolve,d=a.reject;return{config:r,resolve:u,reject:d}}),n=window.require;n.config(s.config),n(["vs/editor/editor.main"],function(a){var r=a.m||a;fg(r),s.resolve(r)},function(a){s.reject(a)})}function fg(s){sl().monaco||Pr({monaco:s})}function Sx(){return sl(function(s){var n=s.monaco;return n})}var kc=new Promise(function(s,n){return Pr({resolve:s,reject:n})}),hg={config:gx,init:yx,__getMonacoInstance:Sx},Ex={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Uc=Ex,wx={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Tx=wx;function Nx({children:s}){return si.createElement("div",{style:Tx.container},s)}var Ax=Nx,Rx=Ax;function Ox({width:s,height:n,isEditorReady:a,loading:r,_ref:u,className:d,wrapperProps:f}){return si.createElement("section",{style:{...Uc.wrapper,width:s,height:n},...f},!a&&si.createElement(Rx,null,r),si.createElement("div",{ref:u,style:{...Uc.fullWidth,...!a&&Uc.hide},className:d}))}var Mx=Ox,pg=k.memo(Mx);function Dx(s){k.useEffect(s,[])}var mg=Dx;function jx(s,n,a=!0){let r=k.useRef(!0);k.useEffect(r.current||!a?()=>{r.current=!1}:s,n)}var Bt=jx;function qa(){}function As(s,n,a,r){return zx(s,r)||Lx(s,n,a,r)}function zx(s,n){return s.editor.getModel(_g(s,n))}function Lx(s,n,a,r){return s.editor.createModel(n,a,r?_g(s,r):void 0)}function _g(s,n){return s.Uri.parse(n)}function kx({original:s,modified:n,language:a,originalLanguage:r,modifiedLanguage:u,originalModelPath:d,modifiedModelPath:f,keepCurrentOriginalModel:m=!1,keepCurrentModifiedModel:g=!1,theme:p="light",loading:C="Loading...",options:v={},height:E="100%",width:z="100%",className:U,wrapperProps:I={},beforeMount:se=qa,onMount:le=qa}){let[ue,de]=k.useState(!1),[ae,$]=k.useState(!0),te=k.useRef(null),G=k.useRef(null),K=k.useRef(null),q=k.useRef(le),X=k.useRef(se),Se=k.useRef(!1);mg(()=>{let P=hg.init();return P.then(R=>(G.current=R)&&$(!1)).catch(R=>(R==null?void 0:R.type)!=="cancelation"&&console.error("Monaco initialization: error:",R)),()=>te.current?Ne():P.cancel()}),Bt(()=>{if(te.current&&G.current){let P=te.current.getOriginalEditor(),R=As(G.current,s||"",r||a||"text",d||"");R!==P.getModel()&&P.setModel(R)}},[d],ue),Bt(()=>{if(te.current&&G.current){let P=te.current.getModifiedEditor(),R=As(G.current,n||"",u||a||"text",f||"");R!==P.getModel()&&P.setModel(R)}},[f],ue),Bt(()=>{let P=te.current.getModifiedEditor();P.getOption(G.current.editor.EditorOption.readOnly)?P.setValue(n||""):n!==P.getValue()&&(P.executeEdits("",[{range:P.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),P.pushUndoStop())},[n],ue),Bt(()=>{var P,R;(R=(P=te.current)==null?void 0:P.getModel())==null||R.original.setValue(s||"")},[s],ue),Bt(()=>{let{original:P,modified:R}=te.current.getModel();G.current.editor.setModelLanguage(P,r||a||"text"),G.current.editor.setModelLanguage(R,u||a||"text")},[a,r,u],ue),Bt(()=>{var P;(P=G.current)==null||P.editor.setTheme(p)},[p],ue),Bt(()=>{var P;(P=te.current)==null||P.updateOptions(v)},[v],ue);let he=k.useCallback(()=>{var B;if(!G.current)return;X.current(G.current);let P=As(G.current,s||"",r||a||"text",d||""),R=As(G.current,n||"",u||a||"text",f||"");(B=te.current)==null||B.setModel({original:P,modified:R})},[a,n,u,s,r,d,f]),Ze=k.useCallback(()=>{var P;!Se.current&&K.current&&(te.current=G.current.editor.createDiffEditor(K.current,{automaticLayout:!0,...v}),he(),(P=G.current)==null||P.editor.setTheme(p),de(!0),Se.current=!0)},[v,p,he]);k.useEffect(()=>{ue&&q.current(te.current,G.current)},[ue]),k.useEffect(()=>{!ae&&!ue&&Ze()},[ae,ue,Ze]);function Ne(){var R,B,Z,J;let P=(R=te.current)==null?void 0:R.getModel();m||((B=P==null?void 0:P.original)==null||B.dispose()),g||((Z=P==null?void 0:P.modified)==null||Z.dispose()),(J=te.current)==null||J.dispose()}return si.createElement(pg,{width:z,height:E,isEditorReady:ue,loading:C,_ref:K,className:U,wrapperProps:I})}var Ux=kx;k.memo(Ux);function Hx(s){let n=k.useRef();return k.useEffect(()=>{n.current=s},[s]),n.current}var Bx=Hx,Dr=new Map;function Yx({defaultValue:s,defaultLanguage:n,defaultPath:a,value:r,language:u,path:d,theme:f="light",line:m,loading:g="Loading...",options:p={},overrideServices:C={},saveViewState:v=!0,keepCurrentModel:E=!1,width:z="100%",height:U="100%",className:I,wrapperProps:se={},beforeMount:le=qa,onMount:ue=qa,onChange:de,onValidate:ae=qa}){let[$,te]=k.useState(!1),[G,K]=k.useState(!0),q=k.useRef(null),X=k.useRef(null),Se=k.useRef(null),he=k.useRef(ue),Ze=k.useRef(le),Ne=k.useRef(),P=k.useRef(r),R=Bx(d),B=k.useRef(!1),Z=k.useRef(!1);mg(()=>{let b=hg.init();return b.then(M=>(q.current=M)&&K(!1)).catch(M=>(M==null?void 0:M.type)!=="cancelation"&&console.error("Monaco initialization: error:",M)),()=>X.current?oe():b.cancel()}),Bt(()=>{var M,H,V,ne;let b=As(q.current,s||r||"",n||u||"",d||a||"");b!==((M=X.current)==null?void 0:M.getModel())&&(v&&Dr.set(R,(H=X.current)==null?void 0:H.saveViewState()),(V=X.current)==null||V.setModel(b),v&&((ne=X.current)==null||ne.restoreViewState(Dr.get(d))))},[d],$),Bt(()=>{var b;(b=X.current)==null||b.updateOptions(p)},[p],$),Bt(()=>{!X.current||r===void 0||(X.current.getOption(q.current.editor.EditorOption.readOnly)?X.current.setValue(r):r!==X.current.getValue()&&(Z.current=!0,X.current.executeEdits("",[{range:X.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),X.current.pushUndoStop(),Z.current=!1))},[r],$),Bt(()=>{var M,H;let b=(M=X.current)==null?void 0:M.getModel();b&&u&&((H=q.current)==null||H.editor.setModelLanguage(b,u))},[u],$),Bt(()=>{var b;m!==void 0&&((b=X.current)==null||b.revealLine(m))},[m],$),Bt(()=>{var b;(b=q.current)==null||b.editor.setTheme(f)},[f],$);let J=k.useCallback(()=>{var b;if(!(!Se.current||!q.current)&&!B.current){Ze.current(q.current);let M=d||a,H=As(q.current,r||s||"",n||u||"",M||"");X.current=(b=q.current)==null?void 0:b.editor.create(Se.current,{model:H,automaticLayout:!0,...p},C),v&&X.current.restoreViewState(Dr.get(M)),q.current.editor.setTheme(f),m!==void 0&&X.current.revealLine(m),te(!0),B.current=!0}},[s,n,a,r,u,d,p,C,v,f,m]);k.useEffect(()=>{$&&he.current(X.current,q.current)},[$]),k.useEffect(()=>{!G&&!$&&J()},[G,$,J]),P.current=r,k.useEffect(()=>{var b,M;$&&de&&((b=Ne.current)==null||b.dispose(),Ne.current=(M=X.current)==null?void 0:M.onDidChangeModelContent(H=>{Z.current||de(X.current.getValue(),H)}))},[$,de]),k.useEffect(()=>{if($){let b=q.current.editor.onDidChangeMarkers(M=>{var V;let H=(V=X.current.getModel())==null?void 0:V.uri;if(H&&M.find(ne=>ne.path===H.path)){let ne=q.current.editor.getModelMarkers({resource:H});ae==null||ae(ne)}});return()=>{b==null||b.dispose()}}return()=>{}},[$,ae]);function oe(){var b,M;(b=Ne.current)==null||b.dispose(),E?v&&Dr.set(d,X.current.saveViewState()):(M=X.current.getModel())==null||M.dispose(),X.current.dispose()}return si.createElement(pg,{width:z,height:U,isEditorReady:$,loading:g,_ref:Se,className:I,wrapperProps:se})}var qx=Yx,Ix=k.memo(qx),Gx=Ix;const gg=k.createContext(void 0),dd=()=>{const s=k.useContext(gg);if(!s)throw new Error("usePython must be used within a PythonProvider");return s},Vx=({children:s})=>{const[n,a]=k.useState(null),[r,u]=k.useState(!0),[d,f]=k.useState(!1),[m,g]=k.useState("Initializing Python environment..."),[p,C]=k.useState([]),[v,E]=k.useState(!1),[z,U]=k.useState(null),I=k.useRef([]);k.useEffect(()=>{const de=setInterval(()=>{I.current.length>0&&(C(ae=>[...ae,...I.current]),I.current=[])},50);return()=>clearInterval(de)},[]),k.useEffect(()=>{(async()=>{try{if(g("Downloading Pyodide (Python 3.11)..."),!window.loadPyodide){const $=document.createElement("script");$.src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js",$.async=!0,document.body.appendChild($),await new Promise(te=>{$.onload=te})}g("Instantiating WebAssembly...");const ae=await window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"});ae.setStdout({batched:$=>{if($.startsWith("__TEST_RESULTS__:"))try{const te=$.replace("__TEST_RESULTS__:",""),G=JSON.parse(te);U(G)}catch(te){console.error("Failed to parse test results",te)}else I.current.push($)}}),ae.setStderr({batched:$=>I.current.push(`Error: ${$}`)}),g("Loading standard libraries..."),a(ae),f(!0),g("System Ready.")}catch(ae){console.error("Failed to load Pyodide:",ae),g("Failed to load Python engine. Please refresh.")}finally{u(!1)}})()},[]);const se=k.useCallback(async(de,ae)=>{if(n){E(!0),U(null);try{await new Promise(te=>setTimeout(te,10));let $=de;if(ae&&ae.length>0){const te=`
import json
import traceback

def __run_tests():
    test_cases = ${JSON.stringify(ae)}
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
`;$=de+`
`+te}await n.runPythonAsync($)}catch($){I.current.push($.toString())}finally{E(!1)}}},[n]),le=k.useCallback(()=>{C([]),I.current=[],U(null)},[]),ue=si.useMemo(()=>({isLoading:r,isReady:d,loadingMessage:m,runCode:se,output:p,clearOutput:le,isRunning:v,testResults:z}),[r,d,m,se,p,le,v,z]);return y.jsx(gg.Provider,{value:ue,children:s})},Fx=()=>{const{output:s,isRunning:n,clearOutput:a,testResults:r}=dd(),u=k.useRef(null),[d,f]=k.useState("terminal");k.useEffect(()=>{r&&f("tests")},[r]),k.useEffect(()=>{var v;d==="terminal"&&((v=u.current)==null||v.scrollIntoView({behavior:"smooth"}))},[s,d]);const m=v=>v.startsWith("Error:")||v.includes("Traceback")?"text-red-400":v.startsWith(">>>")?"text-blue-400":"text-slate-200",g=(r==null?void 0:r.filter(v=>v.passed).length)||0,p=(r==null?void 0:r.length)||0,C=p>0&&g===p;return y.jsxs("div",{className:"flex flex-col h-full bg-[#0d0d0d] font-mono text-sm",children:[y.jsxs("div",{className:"flex items-center bg-[#1a1a1a] border-b border-[#2a2a2a]",children:[y.jsx("button",{onClick:()=>f("terminal"),className:`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${d==="terminal"?"text-white border-b-2 border-blue-500 bg-[#252526]":"text-slate-500 hover:text-slate-300"}`,children:"Terminal"}),y.jsxs("button",{onClick:()=>f("tests"),className:`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 ${d==="tests"?"text-white border-b-2 border-emerald-500 bg-[#252526]":"text-slate-500 hover:text-slate-300"}`,children:["Test Cases",r&&y.jsxs("span",{className:`px-1.5 py-0.5 rounded-full text-[10px] ${C?"bg-emerald-500/20 text-emerald-400":"bg-red-500/20 text-red-400"}`,children:[g,"/",p]})]}),y.jsx("div",{className:"flex-1"}),y.jsxs("div",{className:"flex items-center gap-2 px-2",children:[n&&y.jsx("span",{className:"text-xs text-blue-400 animate-pulse",children:"Running..."}),y.jsx("button",{onClick:a,className:"text-xs text-slate-500 hover:text-white px-2 py-1",children:"Clear"})]})]}),y.jsx("div",{className:"flex-1 overflow-y-auto p-4 custom-scrollbar",children:d==="terminal"?y.jsxs("div",{className:"space-y-0.5",children:[s.length===0&&!n&&y.jsx("div",{className:"text-slate-600 italic text-xs",children:"Output will appear here..."}),s.map((v,E)=>y.jsx("div",{className:`${m(v)} whitespace-pre-wrap break-all`,children:v},E)),y.jsx("div",{ref:u})]}):y.jsx("div",{className:"space-y-3",children:r?y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:`p-3 rounded-lg border ${C?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-red-500/10 border-red-500/30 text-red-400"}`,children:[y.jsx("div",{className:"font-bold text-sm mb-1",children:C?"🎉 All Tests Passed!":"❌ Some Tests Failed"}),y.jsxs("div",{className:"text-xs opacity-80",children:["You passed ",g," out of ",p," tests."]})]}),r.map((v,E)=>y.jsxs("div",{className:`p-3 rounded bg-[#1e1e1e] border ${v.passed?"border-emerald-500/20":"border-red-500/20"}`,children:[y.jsxs("div",{className:"flex items-center justify-between mb-2",children:[y.jsxs("span",{className:"font-mono text-xs text-slate-400",children:["Test Case ",E+1]}),y.jsx("span",{className:v.passed?"text-emerald-500":"text-red-500",children:v.passed?"PASSED":"FAILED"})]}),y.jsxs("div",{className:"grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs font-mono",children:[y.jsx("div",{className:"text-slate-500 text-right",children:"Input:"}),y.jsx("div",{className:"text-slate-300",children:v.input}),y.jsx("div",{className:"text-slate-500 text-right",children:"Expected:"}),y.jsx("div",{className:"text-emerald-400/80",children:v.expected}),y.jsx("div",{className:"text-slate-500 text-right",children:"Actual:"}),y.jsx("div",{className:`${v.passed?"text-emerald-400/80":"text-red-400"}`,children:v.actual}),v.error&&y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"text-red-500 text-right",children:"Error:"}),y.jsx("div",{className:"text-red-400",children:v.error})]})]})]},E))]}):y.jsx("div",{className:"text-slate-600 italic text-xs",children:"Run code to see test results..."})})})]})};/**
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
 */const yg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Y=function(s,n){if(!s)throw Us(n)},Us=function(s){return new Error("Firebase Database ("+yg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
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
 */const vg=function(s){const n=[];let a=0;for(let r=0;r<s.length;r++){let u=s.charCodeAt(r);u<128?n[a++]=u:u<2048?(n[a++]=u>>6|192,n[a++]=u&63|128):(u&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(u=65536+((u&1023)<<10)+(s.charCodeAt(++r)&1023),n[a++]=u>>18|240,n[a++]=u>>12&63|128,n[a++]=u>>6&63|128,n[a++]=u&63|128):(n[a++]=u>>12|224,n[a++]=u>>6&63|128,n[a++]=u&63|128)}return n},Qx=function(s){const n=[];let a=0,r=0;for(;a<s.length;){const u=s[a++];if(u<128)n[r++]=String.fromCharCode(u);else if(u>191&&u<224){const d=s[a++];n[r++]=String.fromCharCode((u&31)<<6|d&63)}else if(u>239&&u<365){const d=s[a++],f=s[a++],m=s[a++],g=((u&7)<<18|(d&63)<<12|(f&63)<<6|m&63)-65536;n[r++]=String.fromCharCode(55296+(g>>10)),n[r++]=String.fromCharCode(56320+(g&1023))}else{const d=s[a++],f=s[a++];n[r++]=String.fromCharCode((u&15)<<12|(d&63)<<6|f&63)}}return n.join("")},fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,n){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let u=0;u<s.length;u+=3){const d=s[u],f=u+1<s.length,m=f?s[u+1]:0,g=u+2<s.length,p=g?s[u+2]:0,C=d>>2,v=(d&3)<<4|m>>4;let E=(m&15)<<2|p>>6,z=p&63;g||(z=64,f||(E=64)),r.push(a[C],a[v],a[E],a[z])}return r.join("")},encodeString(s,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(s):this.encodeByteArray(vg(s),n)},decodeString(s,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(s):Qx(this.decodeStringToByteArray(s,n))},decodeStringToByteArray(s,n){this.init_();const a=n?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let u=0;u<s.length;){const d=a[s.charAt(u++)],m=u<s.length?a[s.charAt(u)]:0;++u;const p=u<s.length?a[s.charAt(u)]:64;++u;const v=u<s.length?a[s.charAt(u)]:64;if(++u,d==null||m==null||p==null||v==null)throw new Xx;const E=d<<2|m>>4;if(r.push(E),p!==64){const z=m<<4&240|p>>2;if(r.push(z),v!==64){const U=p<<6&192|v;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Xx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bg=function(s){const n=vg(s);return fd.encodeByteArray(n,!0)},xg=function(s){return bg(s).replace(/\./g,"")},f_=function(s){try{return fd.decodeString(s,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
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
 */function Kx(s){return Cg(void 0,s)}function Cg(s,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:const a=n;return new Date(a.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return n}for(const a in n)!n.hasOwnProperty(a)||!Zx(a)||(s[a]=Cg(s[a],n[a]));return s}function Zx(s){return s!=="__proto__"}/**
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
 */class hd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,a)=>{this.resolve=n,this.reject=a})}wrapCallback(n){return(a,r)=>{a?this.reject(a):this.resolve(r),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(a):n(a,r))}}}/**
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
 */function Jx(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jx())}function Wx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Px(){return yg.NODE_ADMIN===!0}function $x(){try{return typeof indexedDB=="object"}catch{return!1}}function e1(){return new Promise((s,n)=>{try{let a=!0;const r="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(r);u.onsuccess=()=>{u.result.close(),a||self.indexedDB.deleteDatabase(r),s(!0)},u.onupgradeneeded=()=>{a=!1},u.onerror=()=>{var d;n(((d=u.error)==null?void 0:d.message)||"")}}catch(a){n(a)}})}/**
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
 */const t1="FirebaseError";class al extends Error{constructor(n,a,r){super(a),this.code=n,this.customData=r,this.name=t1,Object.setPrototypeOf(this,al.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eg.prototype.create)}}class Eg{constructor(n,a,r){this.service=n,this.serviceName=a,this.errors=r}create(n,...a){const r=a[0]||{},u=`${this.service}/${n}`,d=this.errors[n],f=d?n1(d,r):"Error",m=`${this.serviceName}: ${f} (${u}).`;return new al(u,m,r)}}function n1(s,n){return s.replace(i1,(a,r)=>{const u=n[r];return u!=null?String(u):`<${r}?>`})}const i1=/\{\$([^}]+)}/g;/**
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
 */function Ka(s){return JSON.parse(s)}function nt(s){return JSON.stringify(s)}/**
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
 */const wg=function(s){let n={},a={},r={},u="";try{const d=s.split(".");n=Ka(f_(d[0])||""),a=Ka(f_(d[1])||""),u=d[2],r=a.d||{},delete a.d}catch{}return{header:n,claims:a,data:r,signature:u}},s1=function(s){const n=wg(s),a=n.claims;return!!a&&typeof a=="object"&&a.hasOwnProperty("iat")},a1=function(s){const n=wg(s).claims;return typeof n=="object"&&n.admin===!0};/**
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
 */function Mn(s,n){return Object.prototype.hasOwnProperty.call(s,n)}function js(s,n){if(Object.prototype.hasOwnProperty.call(s,n))return s[n]}function h_(s){for(const n in s)if(Object.prototype.hasOwnProperty.call(s,n))return!1;return!0}function kr(s,n,a){const r={};for(const u in s)Object.prototype.hasOwnProperty.call(s,u)&&(r[u]=n.call(a,s[u],u,s));return r}/**
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
 */function l1(s){const n=[];for(const[a,r]of Object.entries(s))Array.isArray(r)?r.forEach(u=>{n.push(encodeURIComponent(a)+"="+encodeURIComponent(u))}):n.push(encodeURIComponent(a)+"="+encodeURIComponent(r));return n.length?"&"+n.join("&"):""}/**
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
 */class r1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(n,a){a||(a=0);const r=this.W_;if(typeof n=="string")for(let v=0;v<16;v++)r[v]=n.charCodeAt(a)<<24|n.charCodeAt(a+1)<<16|n.charCodeAt(a+2)<<8|n.charCodeAt(a+3),a+=4;else for(let v=0;v<16;v++)r[v]=n[a]<<24|n[a+1]<<16|n[a+2]<<8|n[a+3],a+=4;for(let v=16;v<80;v++){const E=r[v-3]^r[v-8]^r[v-14]^r[v-16];r[v]=(E<<1|E>>>31)&4294967295}let u=this.chain_[0],d=this.chain_[1],f=this.chain_[2],m=this.chain_[3],g=this.chain_[4],p,C;for(let v=0;v<80;v++){v<40?v<20?(p=m^d&(f^m),C=1518500249):(p=d^f^m,C=1859775393):v<60?(p=d&f|m&(d|f),C=2400959708):(p=d^f^m,C=3395469782);const E=(u<<5|u>>>27)+p+g+C+r[v]&4294967295;g=m,m=f,f=(d<<30|d>>>2)&4294967295,d=u,u=E}this.chain_[0]=this.chain_[0]+u&4294967295,this.chain_[1]=this.chain_[1]+d&4294967295,this.chain_[2]=this.chain_[2]+f&4294967295,this.chain_[3]=this.chain_[3]+m&4294967295,this.chain_[4]=this.chain_[4]+g&4294967295}update(n,a){if(n==null)return;a===void 0&&(a=n.length);const r=a-this.blockSize;let u=0;const d=this.buf_;let f=this.inbuf_;for(;u<a;){if(f===0)for(;u<=r;)this.compress_(n,u),u+=this.blockSize;if(typeof n=="string"){for(;u<a;)if(d[f]=n.charCodeAt(u),++f,++u,f===this.blockSize){this.compress_(d),f=0;break}}else for(;u<a;)if(d[f]=n[u],++f,++u,f===this.blockSize){this.compress_(d),f=0;break}}this.inbuf_=f,this.total_+=a}digest(){const n=[];let a=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let u=this.blockSize-1;u>=56;u--)this.buf_[u]=a&255,a/=256;this.compress_(this.buf_);let r=0;for(let u=0;u<5;u++)for(let d=24;d>=0;d-=8)n[r]=this.chain_[u]>>d&255,++r;return n}}function pd(s,n){return`${s} failed: ${n} argument `}/**
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
 */const o1=function(s){const n=[];let a=0;for(let r=0;r<s.length;r++){let u=s.charCodeAt(r);if(u>=55296&&u<=56319){const d=u-55296;r++,Y(r<s.length,"Surrogate pair missing trail surrogate.");const f=s.charCodeAt(r)-56320;u=65536+(d<<10)+f}u<128?n[a++]=u:u<2048?(n[a++]=u>>6|192,n[a++]=u&63|128):u<65536?(n[a++]=u>>12|224,n[a++]=u>>6&63|128,n[a++]=u&63|128):(n[a++]=u>>18|240,n[a++]=u>>12&63|128,n[a++]=u>>6&63|128,n[a++]=u&63|128)}return n},$r=function(s){let n=0;for(let a=0;a<s.length;a++){const r=s.charCodeAt(a);r<128?n++:r<2048?n+=2:r>=55296&&r<=56319?(n+=4,a++):n+=3}return n};/**
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
 */function ll(s){return s&&s._delegate?s._delegate:s}class Ur{constructor(n,a,r){this.name=n,this.instanceFactory=a,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
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
 */var Ue;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Ue||(Ue={}));const u1={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},c1=Ue.INFO,d1={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},f1=(s,n,...a)=>{if(n<s.logLevel)return;const r=new Date().toISOString(),u=d1[n];if(u)console[u](`[${r}]  ${s.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class Tg{constructor(n){this.name=n,this._logLevel=c1,this._logHandler=f1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in Ue))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?u1[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...n),this._logHandler(this,Ue.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...n),this._logHandler(this,Ue.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...n),this._logHandler(this,Ue.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...n),this._logHandler(this,Ue.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...n),this._logHandler(this,Ue.ERROR,...n)}}const h1=(s,n)=>n.some(a=>s instanceof a);let p_,m_;function p1(){return p_||(p_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m1(){return m_||(m_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ng=new WeakMap,Zc=new WeakMap,Ag=new WeakMap,Hc=new WeakMap,md=new WeakMap;function _1(s){const n=new Promise((a,r)=>{const u=()=>{s.removeEventListener("success",d),s.removeEventListener("error",f)},d=()=>{a(li(s.result)),u()},f=()=>{r(s.error),u()};s.addEventListener("success",d),s.addEventListener("error",f)});return n.then(a=>{a instanceof IDBCursor&&Ng.set(a,s)}).catch(()=>{}),md.set(n,s),n}function g1(s){if(Zc.has(s))return;const n=new Promise((a,r)=>{const u=()=>{s.removeEventListener("complete",d),s.removeEventListener("error",f),s.removeEventListener("abort",f)},d=()=>{a(),u()},f=()=>{r(s.error||new DOMException("AbortError","AbortError")),u()};s.addEventListener("complete",d),s.addEventListener("error",f),s.addEventListener("abort",f)});Zc.set(s,n)}let Jc={get(s,n,a){if(s instanceof IDBTransaction){if(n==="done")return Zc.get(s);if(n==="objectStoreNames")return s.objectStoreNames||Ag.get(s);if(n==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return li(s[n])},set(s,n,a){return s[n]=a,!0},has(s,n){return s instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in s}};function y1(s){Jc=s(Jc)}function v1(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...a){const r=s.call(Bc(this),n,...a);return Ag.set(r,n.sort?n.sort():[n]),li(r)}:m1().includes(s)?function(...n){return s.apply(Bc(this),n),li(Ng.get(this))}:function(...n){return li(s.apply(Bc(this),n))}}function b1(s){return typeof s=="function"?v1(s):(s instanceof IDBTransaction&&g1(s),h1(s,p1())?new Proxy(s,Jc):s)}function li(s){if(s instanceof IDBRequest)return _1(s);if(Hc.has(s))return Hc.get(s);const n=b1(s);return n!==s&&(Hc.set(s,n),md.set(n,s)),n}const Bc=s=>md.get(s);function x1(s,n,{blocked:a,upgrade:r,blocking:u,terminated:d}={}){const f=indexedDB.open(s,n),m=li(f);return r&&f.addEventListener("upgradeneeded",g=>{r(li(f.result),g.oldVersion,g.newVersion,li(f.transaction),g)}),a&&f.addEventListener("blocked",g=>a(g.oldVersion,g.newVersion,g)),m.then(g=>{d&&g.addEventListener("close",()=>d()),u&&g.addEventListener("versionchange",p=>u(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}const C1=["get","getKey","getAll","getAllKeys","count"],S1=["put","add","delete","clear"],Yc=new Map;function __(s,n){if(!(s instanceof IDBDatabase&&!(n in s)&&typeof n=="string"))return;if(Yc.get(n))return Yc.get(n);const a=n.replace(/FromIndex$/,""),r=n!==a,u=S1.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(u||C1.includes(a)))return;const d=async function(f,...m){const g=this.transaction(f,u?"readwrite":"readonly");let p=g.store;return r&&(p=p.index(m.shift())),(await Promise.all([p[a](...m),u&&g.done]))[0]};return Yc.set(n,d),d}y1(s=>({...s,get:(n,a,r)=>__(n,a)||s.get(n,a,r),has:(n,a)=>!!__(n,a)||s.has(n,a)}));/**
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
 */class E1{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(w1(a)){const r=a.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(a=>a).join(" ")}}function w1(s){const n=s.getComponent();return(n==null?void 0:n.type)==="VERSION"}const Wc="@firebase/app",g_="0.14.6";/**
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
 */const On=new Tg("@firebase/app"),T1="@firebase/app-compat",N1="@firebase/analytics-compat",A1="@firebase/analytics",R1="@firebase/app-check-compat",O1="@firebase/app-check",M1="@firebase/auth",D1="@firebase/auth-compat",j1="@firebase/database",z1="@firebase/data-connect",L1="@firebase/database-compat",k1="@firebase/functions",U1="@firebase/functions-compat",H1="@firebase/installations",B1="@firebase/installations-compat",Y1="@firebase/messaging",q1="@firebase/messaging-compat",I1="@firebase/performance",G1="@firebase/performance-compat",V1="@firebase/remote-config",F1="@firebase/remote-config-compat",Q1="@firebase/storage",X1="@firebase/storage-compat",K1="@firebase/firestore",Z1="@firebase/ai",J1="@firebase/firestore-compat",W1="firebase",P1="12.6.0",$1={[Wc]:"fire-core",[T1]:"fire-core-compat",[A1]:"fire-analytics",[N1]:"fire-analytics-compat",[O1]:"fire-app-check",[R1]:"fire-app-check-compat",[M1]:"fire-auth",[D1]:"fire-auth-compat",[j1]:"fire-rtdb",[z1]:"fire-data-connect",[L1]:"fire-rtdb-compat",[k1]:"fire-fn",[U1]:"fire-fn-compat",[H1]:"fire-iid",[B1]:"fire-iid-compat",[Y1]:"fire-fcm",[q1]:"fire-fcm-compat",[I1]:"fire-perf",[G1]:"fire-perf-compat",[V1]:"fire-rc",[F1]:"fire-rc-compat",[Q1]:"fire-gcs",[X1]:"fire-gcs-compat",[K1]:"fire-fst",[J1]:"fire-fst-compat",[Z1]:"fire-vertex","fire-js":"fire-js",[W1]:"fire-js-all"};/**
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
 */const eC=new Map,tC=new Map,y_=new Map;function v_(s,n){try{s.container.addComponent(n)}catch(a){On.debug(`Component ${n.name} failed to register with FirebaseApp ${s.name}`,a)}}function Hr(s){const n=s.name;if(y_.has(n))return On.debug(`There were multiple attempts to register component ${n}.`),!1;y_.set(n,s);for(const a of eC.values())v_(a,s);for(const a of tC.values())v_(a,s);return!0}function nC(s){return s==null?!1:s.settings!==void 0}/**
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
 */const iC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_d=new Eg("app","Firebase",iC);/**
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
 */const sC=P1;function Os(s,n,a){let r=$1[s]??s;a&&(r+=`-${a}`);const u=r.match(/\s|\//),d=n.match(/\s|\//);if(u||d){const f=[`Unable to register library "${r}" with version "${n}":`];u&&f.push(`library name "${r}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${n}" contains illegal characters (whitespace or "/")`),On.warn(f.join(" "));return}Hr(new Ur(`${r}-version`,()=>({library:r,version:n}),"VERSION"))}/**
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
 */const aC="firebase-heartbeat-database",lC=1,Za="firebase-heartbeat-store";let qc=null;function Rg(){return qc||(qc=x1(aC,lC,{upgrade:(s,n)=>{switch(n){case 0:try{s.createObjectStore(Za)}catch(a){console.warn(a)}}}}).catch(s=>{throw _d.create("idb-open",{originalErrorMessage:s.message})})),qc}async function rC(s){try{const a=(await Rg()).transaction(Za),r=await a.objectStore(Za).get(Og(s));return await a.done,r}catch(n){if(n instanceof al)On.warn(n.message);else{const a=_d.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});On.warn(a.message)}}}async function b_(s,n){try{const r=(await Rg()).transaction(Za,"readwrite");await r.objectStore(Za).put(n,Og(s)),await r.done}catch(a){if(a instanceof al)On.warn(a.message);else{const r=_d.create("idb-set",{originalErrorMessage:a==null?void 0:a.message});On.warn(r.message)}}}function Og(s){return`${s.name}!${s.options.appId}`}/**
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
 */const oC=1024,uC=30;class cC{constructor(n){this.container=n,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new fC(a),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var n,a;try{const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),d=x_();if(((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((a=this._heartbeatsCache)==null?void 0:a.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===d||this._heartbeatsCache.heartbeats.some(f=>f.date===d))return;if(this._heartbeatsCache.heartbeats.push({date:d,agent:u}),this._heartbeatsCache.heartbeats.length>uC){const f=hC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){On.warn(r)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const a=x_(),{heartbeatsToSend:r,unsentEntries:u}=dC(this._heartbeatsCache.heartbeats),d=xg(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=a,u.length>0?(this._heartbeatsCache.heartbeats=u,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),d}catch(a){return On.warn(a),""}}}function x_(){return new Date().toISOString().substring(0,10)}function dC(s,n=oC){const a=[];let r=s.slice();for(const u of s){const d=a.find(f=>f.agent===u.agent);if(d){if(d.dates.push(u.date),C_(a)>n){d.dates.pop();break}}else if(a.push({agent:u.agent,dates:[u.date]}),C_(a)>n){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class fC{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $x()?e1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const a=await rC(this.app);return a!=null&&a.heartbeats?a:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){if(await this._canUseIndexedDBPromise){const r=await this.read();return b_(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){if(await this._canUseIndexedDBPromise){const r=await this.read();return b_(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...n.heartbeats]})}else return}}function C_(s){return xg(JSON.stringify({version:2,heartbeats:s})).length}function hC(s){if(s.length===0)return-1;let n=0,a=s[0].date;for(let r=1;r<s.length;r++)s[r].date<a&&(a=s[r].date,n=r);return n}/**
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
 */function pC(s){Hr(new Ur("platform-logger",n=>new E1(n),"PRIVATE")),Hr(new Ur("heartbeat",n=>new cC(n),"PRIVATE")),Os(Wc,g_,s),Os(Wc,g_,"esm2020"),Os("fire-js","")}pC("");var S_={};const E_="@firebase/database",w_="1.1.0";/**
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
 */let Mg="";function mC(s){Mg=s}/**
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
 */class _C{constructor(n){this.domStorage_=n,this.prefix_="firebase:"}set(n,a){a==null?this.domStorage_.removeItem(this.prefixedName_(n)):this.domStorage_.setItem(this.prefixedName_(n),nt(a))}get(n){const a=this.domStorage_.getItem(this.prefixedName_(n));return a==null?null:Ka(a)}remove(n){this.domStorage_.removeItem(this.prefixedName_(n))}prefixedName_(n){return this.prefix_+n}toString(){return this.domStorage_.toString()}}/**
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
 */class gC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(n,a){a==null?delete this.cache_[n]:this.cache_[n]=a}get(n){return Mn(this.cache_,n)?this.cache_[n]:null}remove(n){delete this.cache_[n]}}/**
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
 */const Dg=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const n=window[s];return n.setItem("firebase:sentinel","cache"),n.removeItem("firebase:sentinel"),new _C(n)}}catch{}return new gC},Li=Dg("localStorage"),yC=Dg("sessionStorage");/**
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
 */const Ms=new Tg("@firebase/database"),vC=(function(){let s=1;return function(){return s++}})(),jg=function(s){const n=o1(s),a=new r1;a.update(n);const r=a.digest();return fd.encodeByteArray(r)},rl=function(...s){let n="";for(let a=0;a<s.length;a++){const r=s[a];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?n+=rl.apply(null,r):typeof r=="object"?n+=nt(r):n+=r,n+=" "}return n};let Ia=null,T_=!0;const bC=function(s,n){Y(!0,"Can't turn on custom loggers persistently."),Ms.logLevel=Ue.VERBOSE,Ia=Ms.log.bind(Ms)},mt=function(...s){if(T_===!0&&(T_=!1,Ia===null&&yC.get("logging_enabled")===!0&&bC()),Ia){const n=rl.apply(null,s);Ia(n)}},ol=function(s){return function(...n){mt(s,...n)}},Pc=function(...s){const n="FIREBASE INTERNAL ERROR: "+rl(...s);Ms.error(n)},Ui=function(...s){const n=`FIREBASE FATAL ERROR: ${rl(...s)}`;throw Ms.error(n),new Error(n)},Nt=function(...s){const n="FIREBASE WARNING: "+rl(...s);Ms.warn(n)},xC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zg=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},CC=function(s){if(document.readyState==="complete")s();else{let n=!1;const a=function(){if(!document.body){setTimeout(a,Math.floor(10));return}n||(n=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",a,!1),window.addEventListener("load",a,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&a()}),window.attachEvent("onload",a))}},zs="[MIN_NAME]",Hi="[MAX_NAME]",Hs=function(s,n){if(s===n)return 0;if(s===zs||n===Hi)return-1;if(n===zs||s===Hi)return 1;{const a=N_(s),r=N_(n);return a!==null?r!==null?a-r===0?s.length-n.length:a-r:-1:r!==null?1:s<n?-1:1}},SC=function(s,n){return s===n?0:s<n?-1:1},ka=function(s,n){if(n&&s in n)return n[s];throw new Error("Missing required key ("+s+") in object: "+nt(n))},gd=function(s){if(typeof s!="object"||s===null)return nt(s);const n=[];for(const r in s)n.push(r);n.sort();let a="{";for(let r=0;r<n.length;r++)r!==0&&(a+=","),a+=nt(n[r]),a+=":",a+=gd(s[n[r]]);return a+="}",a},Lg=function(s,n){const a=s.length;if(a<=n)return[s];const r=[];for(let u=0;u<a;u+=n)u+n>a?r.push(s.substring(u,a)):r.push(s.substring(u,u+n));return r};function At(s,n){for(const a in s)s.hasOwnProperty(a)&&n(a,s[a])}const kg=function(s){Y(!zg(s),"Invalid JSON number");const n=11,a=52,r=(1<<n-1)-1;let u,d,f,m,g;s===0?(d=0,f=0,u=1/s===-1/0?1:0):(u=s<0,s=Math.abs(s),s>=Math.pow(2,1-r)?(m=Math.min(Math.floor(Math.log(s)/Math.LN2),r),d=m+r,f=Math.round(s*Math.pow(2,a-m)-Math.pow(2,a))):(d=0,f=Math.round(s/Math.pow(2,1-r-a))));const p=[];for(g=a;g;g-=1)p.push(f%2?1:0),f=Math.floor(f/2);for(g=n;g;g-=1)p.push(d%2?1:0),d=Math.floor(d/2);p.push(u?1:0),p.reverse();const C=p.join("");let v="";for(g=0;g<64;g+=8){let E=parseInt(C.substr(g,8),2).toString(16);E.length===1&&(E="0"+E),v=v+E}return v.toLowerCase()},EC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function TC(s,n){let a="Unknown Error";s==="too_big"?a="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?a="Client doesn't have permission to access the desired data.":s==="unavailable"&&(a="The service is unavailable");const r=new Error(s+" at "+n._path.toString()+": "+a);return r.code=s.toUpperCase(),r}const NC=new RegExp("^-?(0*)\\d{1,10}$"),AC=-2147483648,RC=2147483647,N_=function(s){if(NC.test(s)){const n=Number(s);if(n>=AC&&n<=RC)return n}return null},Bs=function(s){try{s()}catch(n){setTimeout(()=>{const a=n.stack||"";throw Nt("Exception was thrown by user callback.",a),n},Math.floor(0))}},OC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ga=function(s,n){const a=setTimeout(s,n);return typeof a=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(a):typeof a=="object"&&a.unref&&a.unref(),a};/**
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
 */class MC{constructor(n,a){this.appCheckProvider=a,this.appName=n.name,nC(n)&&n.settings.appCheckToken&&(this.serverAppAppCheckToken=n.settings.appCheckToken),this.appCheck=a==null?void 0:a.getImmediate({optional:!0}),this.appCheck||a==null||a.get().then(r=>this.appCheck=r)}getToken(n){if(this.serverAppAppCheckToken){if(n)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(n):new Promise((a,r)=>{setTimeout(()=>{this.appCheck?this.getToken(n).then(a,r):a(null)},0)})}addTokenChangeListener(n){var a;(a=this.appCheckProvider)==null||a.get().then(r=>r.addTokenListener(n))}notifyForInvalidToken(){Nt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class DC{constructor(n,a,r){this.appName_=n,this.firebaseOptions_=a,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(u=>this.auth_=u)}getToken(n){return this.auth_?this.auth_.getToken(n).catch(a=>a&&a.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)):new Promise((a,r)=>{setTimeout(()=>{this.auth_?this.getToken(n).then(a,r):a(null)},0)})}addTokenChangeListener(n){this.auth_?this.auth_.addAuthTokenListener(n):this.authProvider_.get().then(a=>a.addAuthTokenListener(n))}removeTokenChangeListener(n){this.authProvider_.get().then(a=>a.removeAuthTokenListener(n))}notifyForInvalidToken(){let n='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?n+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?n+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':n+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nt(n)}}/**
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
 */const yd="5",Ug="v",Hg="s",Bg="r",Yg="f",qg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ig="ls",Gg="p",$c="ac",Vg="websocket",Fg="long_polling";/**
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
 */class jC{constructor(n,a,r,u,d=!1,f="",m=!1,g=!1,p=null){this.secure=a,this.namespace=r,this.webSocketOnly=u,this.nodeAdmin=d,this.persistenceKey=f,this.includeNamespaceInQueryParams=m,this.isUsingEmulator=g,this.emulatorOptions=p,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Li.get("host:"+n)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(n){n!==this.internalHost&&(this.internalHost=n,this.isCacheableHost()&&Li.set("host:"+this._host,this.internalHost))}toString(){let n=this.toURLString();return this.persistenceKey&&(n+="<"+this.persistenceKey+">"),n}toURLString(){const n=this.secure?"https://":"http://",a=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${n}${this.host}/${a}`}}function zC(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function Qg(s,n,a){Y(typeof n=="string","typeof type must == string"),Y(typeof a=="object","typeof params must == object");let r;if(n===Vg)r=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(n===Fg)r=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+n);zC(s)&&(a.ns=s.namespace);const u=[];return At(a,(d,f)=>{u.push(d+"="+f)}),r+u.join("&")}/**
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
 */class LC{constructor(){this.counters_={}}incrementCounter(n,a=1){Mn(this.counters_,n)||(this.counters_[n]=0),this.counters_[n]+=a}get(){return Kx(this.counters_)}}/**
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
 */const Ic={},Gc={};function vd(s){const n=s.toString();return Ic[n]||(Ic[n]=new LC),Ic[n]}function kC(s,n){const a=s.toString();return Gc[a]||(Gc[a]=n()),Gc[a]}/**
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
 */class UC{constructor(n){this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(n,a){this.closeAfterResponse=n,this.onClose=a,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(n,a){for(this.pendingResponses[n]=a;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let u=0;u<r.length;++u)r[u]&&Bs(()=>{this.onMessage_(r[u])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const A_="start",HC="close",BC="pLPCommand",YC="pRTLPCB",Xg="id",Kg="pw",Zg="ser",qC="cb",IC="seg",GC="ts",VC="d",FC="dframe",Jg=1870,Wg=30,QC=Jg-Wg,XC=25e3,KC=3e4;class Rs{constructor(n,a,r,u,d,f,m){this.connId=n,this.repoInfo=a,this.applicationId=r,this.appCheckToken=u,this.authToken=d,this.transportSessionId=f,this.lastSessionId=m,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ol(n),this.stats_=vd(a),this.urlFn=g=>(this.appCheckToken&&(g[$c]=this.appCheckToken),Qg(a,Fg,g))}open(n,a){this.curSegmentNum=0,this.onDisconnect_=a,this.myPacketOrderer=new UC(n),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(KC)),CC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bd((...d)=>{const[f,m,g,p,C]=d;if(this.incrementIncomingBytes_(d),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,f===A_)this.id=m,this.password=g;else if(f===HC)m?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(m,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+f)},(...d)=>{const[f,m]=d;this.incrementIncomingBytes_(d),this.myPacketOrderer.handleResponse(f,m)},()=>{this.onClosed_()},this.urlFn);const r={};r[A_]="t",r[Zg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[qC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ug]=yd,this.transportSessionId&&(r[Hg]=this.transportSessionId),this.lastSessionId&&(r[Ig]=this.lastSessionId),this.applicationId&&(r[Gg]=this.applicationId),this.appCheckToken&&(r[$c]=this.appCheckToken),typeof location<"u"&&location.hostname&&qg.test(location.hostname)&&(r[Bg]=Yg);const u=this.urlFn(r);this.log_("Connecting via long-poll to "+u),this.scriptTagHolder.addTag(u,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rs.forceAllow_=!0}static forceDisallow(){Rs.forceDisallow_=!0}static isAvailable(){return Rs.forceAllow_?!0:!Rs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!EC()&&!wC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(n){const a=nt(n);this.bytesSent+=a.length,this.stats_.incrementCounter("bytes_sent",a.length);const r=bg(a),u=Lg(r,QC);for(let d=0;d<u.length;d++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,u.length,u[d]),this.curSegmentNum++}addDisconnectPingFrame(n,a){this.myDisconnFrame=document.createElement("iframe");const r={};r[FC]="t",r[Xg]=n,r[Kg]=a,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(n){const a=nt(n).length;this.bytesReceived+=a,this.stats_.incrementCounter("bytes_received",a)}}class bd{constructor(n,a,r,u){this.onDisconnect=r,this.urlFn=u,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vC(),window[BC+this.uniqueCallbackIdentifier]=n,window[YC+this.uniqueCallbackIdentifier]=a,this.myIFrame=bd.createIFrame_();let d="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(d='<script>document.domain="'+document.domain+'";<\/script>');const f="<html><body>"+d+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(f),this.myIFrame.doc.close()}catch(m){mt("frame writing exception"),m.stack&&mt(m.stack),mt(m)}}}static createIFrame_(){const n=document.createElement("iframe");if(n.style.display="none",document.body){document.body.appendChild(n);try{n.contentWindow.document||mt("No IE domain setting required")}catch{const r=document.domain;n.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return n.contentDocument?n.doc=n.contentDocument:n.contentWindow?n.doc=n.contentWindow.document:n.document&&(n.doc=n.document),n}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const n=this.onDisconnect;n&&(this.onDisconnect=null,n())}startLongPoll(n,a){for(this.myID=n,this.myPW=a,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const n={};n[Xg]=this.myID,n[Kg]=this.myPW,n[Zg]=this.currentSerial;let a=this.urlFn(n),r="",u=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wg+r.length<=Jg;){const f=this.pendingSegs.shift();r=r+"&"+IC+u+"="+f.seg+"&"+GC+u+"="+f.ts+"&"+VC+u+"="+f.d,u++}return a=a+r,this.addLongPollTag_(a,this.currentSerial),!0}else return!1}enqueueSegment(n,a,r){this.pendingSegs.push({seg:n,ts:a,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(n,a){this.outstandingRequests.add(a);const r=()=>{this.outstandingRequests.delete(a),this.newRequest_()},u=setTimeout(r,Math.floor(XC)),d=()=>{clearTimeout(u),r()};this.addTag(n,d)}addTag(n,a){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=n,r.onload=r.onreadystatechange=function(){const u=r.readyState;(!u||u==="loaded"||u==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),a())},r.onerror=()=>{mt("Long-poll script failed to load: "+n),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const ZC=16384,JC=45e3;let Br=null;typeof MozWebSocket<"u"?Br=MozWebSocket:typeof WebSocket<"u"&&(Br=WebSocket);class en{constructor(n,a,r,u,d,f,m){this.connId=n,this.applicationId=r,this.appCheckToken=u,this.authToken=d,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ol(this.connId),this.stats_=vd(a),this.connURL=en.connectionURL_(a,f,m,u,r),this.nodeAdmin=a.nodeAdmin}static connectionURL_(n,a,r,u,d){const f={};return f[Ug]=yd,typeof location<"u"&&location.hostname&&qg.test(location.hostname)&&(f[Bg]=Yg),a&&(f[Hg]=a),r&&(f[Ig]=r),u&&(f[$c]=u),d&&(f[Gg]=d),Qg(n,Vg,f)}open(n,a){this.onDisconnect=a,this.onMessage=n,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Li.set("previous_websocket_failure",!0);try{let r;Px(),this.mySock=new Br(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const u=r.message||r.data;u&&this.log_(u),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const u=r.message||r.data;u&&this.log_(u),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let n=!1;if(typeof navigator<"u"&&navigator.userAgent){const a=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(a);r&&r.length>1&&parseFloat(r[1])<4.4&&(n=!0)}return!n&&Br!==null&&!en.forceDisallow_}static previouslyFailed(){return Li.isInMemoryStorage||Li.get("previous_websocket_failure")===!0}markConnectionHealthy(){Li.remove("previous_websocket_failure")}appendFrame_(n){if(this.frames.push(n),this.frames.length===this.totalFrames){const a=this.frames.join("");this.frames=null;const r=Ka(a);this.onMessage(r)}}handleNewFrameCount_(n){this.totalFrames=n,this.frames=[]}extractFrameCount_(n){if(Y(this.frames===null,"We already have a frame buffer"),n.length<=6){const a=Number(n);if(!isNaN(a))return this.handleNewFrameCount_(a),null}return this.handleNewFrameCount_(1),n}handleIncomingFrame(n){if(this.mySock===null)return;const a=n.data;if(this.bytesReceived+=a.length,this.stats_.incrementCounter("bytes_received",a.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(a);else{const r=this.extractFrameCount_(a);r!==null&&this.appendFrame_(r)}}send(n){this.resetKeepAlive();const a=nt(n);this.bytesSent+=a.length,this.stats_.incrementCounter("bytes_sent",a.length);const r=Lg(a,ZC);r.length>1&&this.sendString_(String(r.length));for(let u=0;u<r.length;u++)this.sendString_(r[u])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(JC))}sendString_(n){try{this.mySock.send(n)}catch(a){this.log_("Exception thrown from WebSocket.send():",a.message||a.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
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
 */class Ja{static get ALL_TRANSPORTS(){return[Rs,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(n){this.initTransports_(n)}initTransports_(n){const a=en&&en.isAvailable();let r=a&&!en.previouslyFailed();if(n.webSocketOnly&&(a||Nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[en];else{const u=this.transports_=[];for(const d of Ja.ALL_TRANSPORTS)d&&d.isAvailable()&&u.push(d);Ja.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ja.globalTransportInitialized_=!1;/**
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
 */const WC=6e4,PC=5e3,$C=10*1024,eS=100*1024,Vc="t",R_="d",tS="s",O_="r",nS="e",M_="o",D_="a",j_="n",z_="p",iS="h";class sS{constructor(n,a,r,u,d,f,m,g,p,C){this.id=n,this.repoInfo_=a,this.applicationId_=r,this.appCheckToken_=u,this.authToken_=d,this.onMessage_=f,this.onReady_=m,this.onDisconnect_=g,this.onKill_=p,this.lastSessionId=C,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ol("c:"+this.id+":"),this.transportManager_=new Ja(a),this.log_("Connection created"),this.start_()}start_(){const n=this.transportManager_.initialTransport();this.conn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;const a=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(a,r)},Math.floor(0));const u=n.healthyTimeout||0;u>0&&(this.healthyTimeout_=Ga(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$C?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(u)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(n){return a=>{n===this.conn_?this.onConnectionLost_(a):n===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(n){return a=>{this.state_!==2&&(n===this.rx_?this.onPrimaryMessageReceived_(a):n===this.secondaryConn_?this.onSecondaryMessageReceived_(a):this.log_("message on old connection"))}}sendRequest(n){const a={t:"d",d:n};this.sendData_(a)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(n){if(Vc in n){const a=n[Vc];a===D_?this.upgradeIfSecondaryHealthy_():a===O_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):a===M_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(n){const a=ka("t",n),r=ka("d",n);if(a==="c")this.onSecondaryControl_(r);else if(a==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+a)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:z_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:D_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:j_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(n){const a=ka("t",n),r=ka("d",n);a==="c"?this.onControl_(r):a==="d"&&this.onDataMessage_(r)}onDataMessage_(n){this.onPrimaryResponse_(),this.onMessage_(n)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(n){const a=ka(Vc,n);if(R_ in n){const r=n[R_];if(a===iS){const u={...r};this.repoInfo_.isUsingEmulator&&(u.h=this.repoInfo_.host),this.onHandshake_(u)}else if(a===j_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let u=0;u<this.pendingDataMessages.length;++u)this.onDataMessage_(this.pendingDataMessages[u]);this.pendingDataMessages=[],this.tryCleanupConnection()}else a===tS?this.onConnectionShutdown_(r):a===O_?this.onReset_(r):a===nS?Pc("Server Error: "+r):a===M_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pc("Unknown control packet command: "+a)}}onHandshake_(n){const a=n.ts,r=n.v,u=n.h;this.sessionId=n.s,this.repoInfo_.host=u,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,a),yd!==r&&Nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const n=this.transportManager_.upgradeTransport();n&&this.startUpgrade_(n)}startUpgrade_(n){this.secondaryConn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;const a=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(a,r),Ga(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WC))}onReset_(n){this.log_("Reset packet received.  New host: "+n),this.repoInfo_.host=n,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(n,a){this.log_("Realtime connection established."),this.conn_=n,this.state_=1,this.onReady_&&(this.onReady_(a,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ga(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(PC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:z_,d:{}}}))}onSecondaryConnectionLost_(){const n=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===n||this.rx_===n)&&this.close()}onConnectionLost_(n){this.conn_=null,!n&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Li.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(n){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(n),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(n){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(n)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Pg{put(n,a,r,u){}merge(n,a,r,u){}refreshAuthToken(n){}refreshAppCheckToken(n){}onDisconnectPut(n,a,r){}onDisconnectMerge(n,a,r){}onDisconnectCancel(n,a){}reportStats(n){}}/**
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
 */class $g{constructor(n){this.allowedEvents_=n,this.listeners_={},Y(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}trigger(n,...a){if(Array.isArray(this.listeners_[n])){const r=[...this.listeners_[n]];for(let u=0;u<r.length;u++)r[u].callback.apply(r[u].context,a)}}on(n,a,r){this.validateEventType_(n),this.listeners_[n]=this.listeners_[n]||[],this.listeners_[n].push({callback:a,context:r});const u=this.getInitialEvent(n);u&&a.apply(r,u)}off(n,a,r){this.validateEventType_(n);const u=this.listeners_[n]||[];for(let d=0;d<u.length;d++)if(u[d].callback===a&&(!r||r===u[d].context)){u.splice(d,1);return}}validateEventType_(n){Y(this.allowedEvents_.find(a=>a===n),"Unknown event: "+n)}}/**
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
 */class Yr extends $g{static getInstance(){return new Yr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(n){return Y(n==="online","Unknown event type: "+n),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const L_=32,k_=768;class ke{constructor(n,a){if(a===void 0){this.pieces_=n.split("/");let r=0;for(let u=0;u<this.pieces_.length;u++)this.pieces_[u].length>0&&(this.pieces_[r]=this.pieces_[u],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=a}toString(){let n="";for(let a=this.pieceNum_;a<this.pieces_.length;a++)this.pieces_[a]!==""&&(n+="/"+this.pieces_[a]);return n||"/"}}function Te(){return new ke("")}function pe(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function ui(s){return s.pieces_.length-s.pieceNum_}function He(s){let n=s.pieceNum_;return n<s.pieces_.length&&n++,new ke(s.pieces_,n)}function e0(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function aS(s){let n="";for(let a=s.pieceNum_;a<s.pieces_.length;a++)s.pieces_[a]!==""&&(n+="/"+encodeURIComponent(String(s.pieces_[a])));return n||"/"}function t0(s,n=0){return s.pieces_.slice(s.pieceNum_+n)}function n0(s){if(s.pieceNum_>=s.pieces_.length)return null;const n=[];for(let a=s.pieceNum_;a<s.pieces_.length-1;a++)n.push(s.pieces_[a]);return new ke(n,0)}function it(s,n){const a=[];for(let r=s.pieceNum_;r<s.pieces_.length;r++)a.push(s.pieces_[r]);if(n instanceof ke)for(let r=n.pieceNum_;r<n.pieces_.length;r++)a.push(n.pieces_[r]);else{const r=n.split("/");for(let u=0;u<r.length;u++)r[u].length>0&&a.push(r[u])}return new ke(a,0)}function ve(s){return s.pieceNum_>=s.pieces_.length}function yt(s,n){const a=pe(s),r=pe(n);if(a===null)return n;if(a===r)return yt(He(s),He(n));throw new Error("INTERNAL ERROR: innerPath ("+n+") is not within outerPath ("+s+")")}function xd(s,n){if(ui(s)!==ui(n))return!1;for(let a=s.pieceNum_,r=n.pieceNum_;a<=s.pieces_.length;a++,r++)if(s.pieces_[a]!==n.pieces_[r])return!1;return!0}function tn(s,n){let a=s.pieceNum_,r=n.pieceNum_;if(ui(s)>ui(n))return!1;for(;a<s.pieces_.length;){if(s.pieces_[a]!==n.pieces_[r])return!1;++a,++r}return!0}class lS{constructor(n,a){this.errorPrefix_=a,this.parts_=t0(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=$r(this.parts_[r]);i0(this)}}function rS(s,n){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(n),s.byteLength_+=$r(n),i0(s)}function oS(s){const n=s.parts_.pop();s.byteLength_-=$r(n),s.parts_.length>0&&(s.byteLength_-=1)}function i0(s){if(s.byteLength_>k_)throw new Error(s.errorPrefix_+"has a key path longer than "+k_+" bytes ("+s.byteLength_+").");if(s.parts_.length>L_)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+L_+") or object contains a cycle "+ji(s))}function ji(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
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
 */class Cd extends $g{static getInstance(){return new Cd}constructor(){super(["visible"]);let n,a;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(a="visibilitychange",n="hidden"):typeof document.mozHidden<"u"?(a="mozvisibilitychange",n="mozHidden"):typeof document.msHidden<"u"?(a="msvisibilitychange",n="msHidden"):typeof document.webkitHidden<"u"&&(a="webkitvisibilitychange",n="webkitHidden")),this.visible_=!0,a&&document.addEventListener(a,()=>{const r=!document[n];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(n){return Y(n==="visible","Unknown event type: "+n),[this.visible_]}}/**
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
 */const Ua=1e3,uS=300*1e3,U_=30*1e3,cS=1.3,dS=3e4,fS="server_kill",H_=3;class Rn extends Pg{constructor(n,a,r,u,d,f,m,g){if(super(),this.repoInfo_=n,this.applicationId_=a,this.onDataUpdate_=r,this.onConnectStatus_=u,this.onServerInfoUpdate_=d,this.authTokenProvider_=f,this.appCheckTokenProvider_=m,this.authOverride_=g,this.id=Rn.nextPersistentConnectionId_++,this.log_=ol("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ua,this.maxReconnectDelay_=uS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,g)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cd.getInstance().on("visible",this.onVisible_,this),n.host.indexOf("fblocal")===-1&&Yr.getInstance().on("online",this.onOnline_,this)}sendRequest(n,a,r){const u=++this.requestNumber_,d={r:u,a:n,b:a};this.log_(nt(d)),Y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(d),r&&(this.requestCBHash_[u]=r)}get(n){this.initConnection_();const a=new hd,u={action:"g",request:{p:n._path.toString(),q:n._queryObject},onComplete:f=>{const m=f.d;f.s==="ok"?a.resolve(m):a.reject(m)}};this.outstandingGets_.push(u),this.outstandingGetCount_++;const d=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(d),a.promise}listen(n,a,r,u){this.initConnection_();const d=n._queryIdentifier,f=n._path.toString();this.log_("Listen called for "+f+" "+d),this.listens.has(f)||this.listens.set(f,new Map),Y(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Y(!this.listens.get(f).has(d),"listen() called twice for same path/queryId.");const m={onComplete:u,hashFn:a,query:n,tag:r};this.listens.get(f).set(d,m),this.connected_&&this.sendListen_(m)}sendGet_(n){const a=this.outstandingGets_[n];this.sendRequest("g",a.request,r=>{delete this.outstandingGets_[n],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),a.onComplete&&a.onComplete(r)})}sendListen_(n){const a=n.query,r=a._path.toString(),u=a._queryIdentifier;this.log_("Listen on "+r+" for "+u);const d={p:r},f="q";n.tag&&(d.q=a._queryObject,d.t=n.tag),d.h=n.hashFn(),this.sendRequest(f,d,m=>{const g=m.d,p=m.s;Rn.warnOnListenWarnings_(g,a),(this.listens.get(r)&&this.listens.get(r).get(u))===n&&(this.log_("listen response",m),p!=="ok"&&this.removeListen_(r,u),n.onComplete&&n.onComplete(p,g))})}static warnOnListenWarnings_(n,a){if(n&&typeof n=="object"&&Mn(n,"w")){const r=js(n,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const u='".indexOn": "'+a._queryParams.getIndex().toString()+'"',d=a._path.toString();Nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${u} at ${d} to your security rules for better performance.`)}}}refreshAuthToken(n){this.authToken_=n,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(n)}reduceReconnectDelayIfAdminCredential_(n){(n&&n.length===40||a1(n))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=U_)}refreshAppCheckToken(n){this.appCheckToken_=n,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const n=this.authToken_,a=s1(n)?"auth":"gauth",r={cred:n};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(a,r,u=>{const d=u.s,f=u.d||"error";this.authToken_===n&&(d==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(d,f))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},n=>{const a=n.s,r=n.d||"error";a==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(a,r)})}unlisten(n,a){const r=n._path.toString(),u=n._queryIdentifier;this.log_("Unlisten called for "+r+" "+u),Y(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,u)&&this.connected_&&this.sendUnlisten_(r,u,n._queryObject,a)}sendUnlisten_(n,a,r,u){this.log_("Unlisten on "+n+" for "+a);const d={p:n},f="n";u&&(d.q=r,d.t=u),this.sendRequest(f,d)}onDisconnectPut(n,a,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",n,a,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"o",data:a,onComplete:r})}onDisconnectMerge(n,a,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",n,a,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"om",data:a,onComplete:r})}onDisconnectCancel(n,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",n,null,a):this.onDisconnectRequestQueue_.push({pathString:n,action:"oc",data:null,onComplete:a})}sendOnDisconnect_(n,a,r,u){const d={p:a,d:r};this.log_("onDisconnect "+n,d),this.sendRequest(n,d,f=>{u&&setTimeout(()=>{u(f.s,f.d)},Math.floor(0))})}put(n,a,r,u){this.putInternal("p",n,a,r,u)}merge(n,a,r,u){this.putInternal("m",n,a,r,u)}putInternal(n,a,r,u,d){this.initConnection_();const f={p:a,d:r};d!==void 0&&(f.h=d),this.outstandingPuts_.push({action:n,request:f,onComplete:u}),this.outstandingPutCount_++;const m=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(m):this.log_("Buffering put: "+a)}sendPut_(n){const a=this.outstandingPuts_[n].action,r=this.outstandingPuts_[n].request,u=this.outstandingPuts_[n].onComplete;this.outstandingPuts_[n].queued=this.connected_,this.sendRequest(a,r,d=>{this.log_(a+" response",d),delete this.outstandingPuts_[n],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),u&&u(d.s,d.d)})}reportStats(n){if(this.connected_){const a={c:n};this.log_("reportStats",a),this.sendRequest("s",a,r=>{if(r.s!=="ok"){const d=r.d;this.log_("reportStats","Error sending stats: "+d)}})}}onDataMessage_(n){if("r"in n){this.log_("from server: "+nt(n));const a=n.r,r=this.requestCBHash_[a];r&&(delete this.requestCBHash_[a],r(n.b))}else{if("error"in n)throw"A server-side error has occurred: "+n.error;"a"in n&&this.onDataPush_(n.a,n.b)}}onDataPush_(n,a){this.log_("handleServerMessage",n,a),n==="d"?this.onDataUpdate_(a.p,a.d,!1,a.t):n==="m"?this.onDataUpdate_(a.p,a.d,!0,a.t):n==="c"?this.onListenRevoked_(a.p,a.q):n==="ac"?this.onAuthRevoked_(a.s,a.d):n==="apc"?this.onAppCheckRevoked_(a.s,a.d):n==="sd"?this.onSecurityDebugPacket_(a):Pc("Unrecognized action received from server: "+nt(n)+`
Are you using the latest client?`)}onReady_(n,a){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(n),this.lastSessionId=a,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(n){Y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(n))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(n){n&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ua,this.realtime_||this.scheduleConnect_(0)),this.visible_=n}onOnline_(n){n?(this.log_("Browser went online."),this.reconnectDelay_=Ua,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dS&&(this.reconnectDelay_=Ua),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const n=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let a=Math.max(0,this.reconnectDelay_-n);a=Math.random()*a,this.log_("Trying to reconnect in "+a+"ms"),this.scheduleConnect_(a),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const n=this.onDataMessage_.bind(this),a=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),u=this.id+":"+Rn.nextConnectionId_++,d=this.lastSessionId;let f=!1,m=null;const g=function(){m?m.close():(f=!0,r())},p=function(v){Y(m,"sendRequest call when we're not connected not allowed."),m.sendRequest(v)};this.realtime_={close:g,sendRequest:p};const C=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,E]=await Promise.all([this.authTokenProvider_.getToken(C),this.appCheckTokenProvider_.getToken(C)]);f?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=E&&E.token,m=new sS(u,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,n,a,r,z=>{Nt(z+" ("+this.repoInfo_.toString()+")"),this.interrupt(fS)},d))}catch(v){this.log_("Failed to get token: "+v),f||(this.repoInfo_.nodeAdmin&&Nt(v),g())}}}interrupt(n){mt("Interrupting connection for reason: "+n),this.interruptReasons_[n]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(n){mt("Resuming connection for reason: "+n),delete this.interruptReasons_[n],h_(this.interruptReasons_)&&(this.reconnectDelay_=Ua,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(n){const a=n-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:a})}cancelSentTransactions_(){for(let n=0;n<this.outstandingPuts_.length;n++){const a=this.outstandingPuts_[n];a&&"h"in a.request&&a.queued&&(a.onComplete&&a.onComplete("disconnect"),delete this.outstandingPuts_[n],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(n,a){let r;a?r=a.map(d=>gd(d)).join("$"):r="default";const u=this.removeListen_(n,r);u&&u.onComplete&&u.onComplete("permission_denied")}removeListen_(n,a){const r=new ke(n).toString();let u;if(this.listens.has(r)){const d=this.listens.get(r);u=d.get(a),d.delete(a),d.size===0&&this.listens.delete(r)}else u=void 0;return u}onAuthRevoked_(n,a){mt("Auth token revoked: "+n+"/"+a),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(n==="invalid_token"||n==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=H_&&(this.reconnectDelay_=U_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(n,a){mt("App check token revoked: "+n+"/"+a),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(n==="invalid_token"||n==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=H_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(n){this.securityDebugCallback_?this.securityDebugCallback_(n):"msg"in n&&console.log("FIREBASE: "+n.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const n of this.listens.values())for(const a of n.values())this.sendListen_(a);for(let n=0;n<this.outstandingPuts_.length;n++)this.outstandingPuts_[n]&&this.sendPut_(n);for(;this.onDisconnectRequestQueue_.length;){const n=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(n.action,n.pathString,n.data,n.onComplete)}for(let n=0;n<this.outstandingGets_.length;n++)this.outstandingGets_[n]&&this.sendGet_(n)}sendConnectStats_(){const n={};let a="js";n["sdk."+a+"."+Mg.replace(/\./g,"-")]=1,Sg()?n["framework.cordova"]=1:Wx()&&(n["framework.reactnative"]=1),this.reportStats(n)}shouldReconnect_(){const n=Yr.getInstance().currentlyOnline();return h_(this.interruptReasons_)&&n}}Rn.nextPersistentConnectionId_=0;Rn.nextConnectionId_=0;/**
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
 */class me{constructor(n,a){this.name=n,this.node=a}static Wrap(n,a){return new me(n,a)}}/**
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
 */class eo{getCompare(){return this.compare.bind(this)}indexedValueChanged(n,a){const r=new me(zs,n),u=new me(zs,a);return this.compare(r,u)!==0}minPost(){return me.MIN}}/**
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
 */let jr;class s0 extends eo{static get __EMPTY_NODE(){return jr}static set __EMPTY_NODE(n){jr=n}compare(n,a){return Hs(n.name,a.name)}isDefinedOn(n){throw Us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(n,a){return!1}minPost(){return me.MIN}maxPost(){return new me(Hi,jr)}makePost(n,a){return Y(typeof n=="string","KeyIndex indexValue must always be a string."),new me(n,jr)}toString(){return".key"}}const Ds=new s0;/**
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
 */class zr{constructor(n,a,r,u,d=null){this.isReverse_=u,this.resultGenerator_=d,this.nodeStack_=[];let f=1;for(;!n.isEmpty();)if(n=n,f=a?r(n.key,a):1,u&&(f*=-1),f<0)this.isReverse_?n=n.left:n=n.right;else if(f===0){this.nodeStack_.push(n);break}else this.nodeStack_.push(n),this.isReverse_?n=n.right:n=n.left}getNext(){if(this.nodeStack_.length===0)return null;let n=this.nodeStack_.pop(),a;if(this.resultGenerator_?a=this.resultGenerator_(n.key,n.value):a={key:n.key,value:n.value},this.isReverse_)for(n=n.left;!n.isEmpty();)this.nodeStack_.push(n),n=n.right;else for(n=n.right;!n.isEmpty();)this.nodeStack_.push(n),n=n.left;return a}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const n=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(n.key,n.value):{key:n.key,value:n.value}}}class rt{constructor(n,a,r,u,d){this.key=n,this.value=a,this.color=r??rt.RED,this.left=u??Tt.EMPTY_NODE,this.right=d??Tt.EMPTY_NODE}copy(n,a,r,u,d){return new rt(n??this.key,a??this.value,r??this.color,u??this.left,d??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(n){return this.left.inorderTraversal(n)||!!n(this.key,this.value)||this.right.inorderTraversal(n)}reverseTraversal(n){return this.right.reverseTraversal(n)||n(this.key,this.value)||this.left.reverseTraversal(n)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(n,a,r){let u=this;const d=r(n,u.key);return d<0?u=u.copy(null,null,null,u.left.insert(n,a,r),null):d===0?u=u.copy(null,a,null,null,null):u=u.copy(null,null,null,null,u.right.insert(n,a,r)),u.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tt.EMPTY_NODE;let n=this;return!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.removeMin_(),null),n.fixUp_()}remove(n,a){let r,u;if(r=this,a(n,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(n,a),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),a(n,r.key)===0){if(r.right.isEmpty())return Tt.EMPTY_NODE;u=r.right.min_(),r=r.copy(u.key,u.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(n,a))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let n=this;return n.right.isRed_()&&!n.left.isRed_()&&(n=n.rotateLeft_()),n.left.isRed_()&&n.left.left.isRed_()&&(n=n.rotateRight_()),n.left.isRed_()&&n.right.isRed_()&&(n=n.colorFlip_()),n}moveRedLeft_(){let n=this.colorFlip_();return n.right.left.isRed_()&&(n=n.copy(null,null,null,null,n.right.rotateRight_()),n=n.rotateLeft_(),n=n.colorFlip_()),n}moveRedRight_(){let n=this.colorFlip_();return n.left.left.isRed_()&&(n=n.rotateRight_(),n=n.colorFlip_()),n}rotateLeft_(){const n=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,n,null)}rotateRight_(){const n=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,n)}colorFlip_(){const n=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,n,a)}checkMaxDepth_(){const n=this.check_();return Math.pow(2,n)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const n=this.left.check_();if(n!==this.right.check_())throw new Error("Black depths differ");return n+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class hS{copy(n,a,r,u,d){return this}insert(n,a,r){return new rt(n,a,null)}remove(n,a){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Tt{constructor(n,a=Tt.EMPTY_NODE){this.comparator_=n,this.root_=a}insert(n,a){return new Tt(this.comparator_,this.root_.insert(n,a,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(n){return new Tt(this.comparator_,this.root_.remove(n,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(n){let a,r=this.root_;for(;!r.isEmpty();){if(a=this.comparator_(n,r.key),a===0)return r.value;a<0?r=r.left:a>0&&(r=r.right)}return null}getPredecessorKey(n){let a,r=this.root_,u=null;for(;!r.isEmpty();)if(a=this.comparator_(n,r.key),a===0){if(r.left.isEmpty())return u?u.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else a<0?r=r.left:a>0&&(u=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(n){return this.root_.inorderTraversal(n)}reverseTraversal(n){return this.root_.reverseTraversal(n)}getIterator(n){return new zr(this.root_,null,this.comparator_,!1,n)}getIteratorFrom(n,a){return new zr(this.root_,n,this.comparator_,!1,a)}getReverseIteratorFrom(n,a){return new zr(this.root_,n,this.comparator_,!0,a)}getReverseIterator(n){return new zr(this.root_,null,this.comparator_,!0,n)}}Tt.EMPTY_NODE=new hS;/**
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
 */function pS(s,n){return Hs(s.name,n.name)}function Sd(s,n){return Hs(s,n)}/**
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
 */let ed;function mS(s){ed=s}const a0=function(s){return typeof s=="number"?"number:"+kg(s):"string:"+s},l0=function(s){if(s.isLeafNode()){const n=s.val();Y(typeof n=="string"||typeof n=="number"||typeof n=="object"&&Mn(n,".sv"),"Priority must be a string or number.")}else Y(s===ed||s.isEmpty(),"priority of unexpected type.");Y(s===ed||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let B_;class lt{static set __childrenNodeConstructor(n){B_=n}static get __childrenNodeConstructor(){return B_}constructor(n,a=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=n,this.priorityNode_=a,this.lazyHash_=null,Y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),l0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(n){return new lt(this.value_,n)}getImmediateChild(n){return n===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(n){return ve(n)?this:pe(n)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(n,a){return null}updateImmediateChild(n,a){return n===".priority"?this.updatePriority(a):a.isEmpty()&&n!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(n,a).updatePriority(this.priorityNode_)}updateChild(n,a){const r=pe(n);return r===null?a:a.isEmpty()&&r!==".priority"?this:(Y(r!==".priority"||ui(n)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(n),a)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(n,a){return!1}val(n){return n&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let n="";this.priorityNode_.isEmpty()||(n+="priority:"+a0(this.priorityNode_.val())+":");const a=typeof this.value_;n+=a+":",a==="number"?n+=kg(this.value_):n+=this.value_,this.lazyHash_=jg(n)}return this.lazyHash_}getValue(){return this.value_}compareTo(n){return n===lt.__childrenNodeConstructor.EMPTY_NODE?1:n instanceof lt.__childrenNodeConstructor?-1:(Y(n.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(n))}compareToLeafNode_(n){const a=typeof n.value_,r=typeof this.value_,u=lt.VALUE_TYPE_ORDER.indexOf(a),d=lt.VALUE_TYPE_ORDER.indexOf(r);return Y(u>=0,"Unknown leaf type: "+a),Y(d>=0,"Unknown leaf type: "+r),u===d?r==="object"?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:d-u}withIndex(){return this}isIndexed(){return!0}equals(n){if(n===this)return!0;if(n.isLeafNode()){const a=n;return this.value_===a.value_&&this.priorityNode_.equals(a.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let r0,o0;function _S(s){r0=s}function gS(s){o0=s}class yS extends eo{compare(n,a){const r=n.node.getPriority(),u=a.node.getPriority(),d=r.compareTo(u);return d===0?Hs(n.name,a.name):d}isDefinedOn(n){return!n.getPriority().isEmpty()}indexedValueChanged(n,a){return!n.getPriority().equals(a.getPriority())}minPost(){return me.MIN}maxPost(){return new me(Hi,new lt("[PRIORITY-POST]",o0))}makePost(n,a){const r=r0(n);return new me(a,new lt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Fe=new yS;/**
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
 */const vS=Math.log(2);class bS{constructor(n){const a=d=>parseInt(Math.log(d)/vS,10),r=d=>parseInt(Array(d+1).join("1"),2);this.count=a(n+1),this.current_=this.count-1;const u=r(this.count);this.bits_=n+1&u}nextBitIsOne(){const n=!(this.bits_&1<<this.current_);return this.current_--,n}}const qr=function(s,n,a,r){s.sort(n);const u=function(g,p){const C=p-g;let v,E;if(C===0)return null;if(C===1)return v=s[g],E=a?a(v):v,new rt(E,v.node,rt.BLACK,null,null);{const z=parseInt(C/2,10)+g,U=u(g,z),I=u(z+1,p);return v=s[z],E=a?a(v):v,new rt(E,v.node,rt.BLACK,U,I)}},d=function(g){let p=null,C=null,v=s.length;const E=function(U,I){const se=v-U,le=v;v-=U;const ue=u(se+1,le),de=s[se],ae=a?a(de):de;z(new rt(ae,de.node,I,null,ue))},z=function(U){p?(p.left=U,p=U):(C=U,p=U)};for(let U=0;U<g.count;++U){const I=g.nextBitIsOne(),se=Math.pow(2,g.count-(U+1));I?E(se,rt.BLACK):(E(se,rt.BLACK),E(se,rt.RED))}return C},f=new bS(s.length),m=d(f);return new Tt(r||n,m)};/**
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
 */let Fc;const Ts={};class An{static get Default(){return Y(Ts&&Fe,"ChildrenNode.ts has not been loaded"),Fc=Fc||new An({".priority":Ts},{".priority":Fe}),Fc}constructor(n,a){this.indexes_=n,this.indexSet_=a}get(n){const a=js(this.indexes_,n);if(!a)throw new Error("No index defined for "+n);return a instanceof Tt?a:null}hasIndex(n){return Mn(this.indexSet_,n.toString())}addIndex(n,a){Y(n!==Ds,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let u=!1;const d=a.getIterator(me.Wrap);let f=d.getNext();for(;f;)u=u||n.isDefinedOn(f.node),r.push(f),f=d.getNext();let m;u?m=qr(r,n.getCompare()):m=Ts;const g=n.toString(),p={...this.indexSet_};p[g]=n;const C={...this.indexes_};return C[g]=m,new An(C,p)}addToIndexes(n,a){const r=kr(this.indexes_,(u,d)=>{const f=js(this.indexSet_,d);if(Y(f,"Missing index implementation for "+d),u===Ts)if(f.isDefinedOn(n.node)){const m=[],g=a.getIterator(me.Wrap);let p=g.getNext();for(;p;)p.name!==n.name&&m.push(p),p=g.getNext();return m.push(n),qr(m,f.getCompare())}else return Ts;else{const m=a.get(n.name);let g=u;return m&&(g=g.remove(new me(n.name,m))),g.insert(n,n.node)}});return new An(r,this.indexSet_)}removeFromIndexes(n,a){const r=kr(this.indexes_,u=>{if(u===Ts)return u;{const d=a.get(n.name);return d?u.remove(new me(n.name,d)):u}});return new An(r,this.indexSet_)}}/**
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
 */let Ha;class ie{static get EMPTY_NODE(){return Ha||(Ha=new ie(new Tt(Sd),null,An.Default))}constructor(n,a,r){this.children_=n,this.priorityNode_=a,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&l0(this.priorityNode_),this.children_.isEmpty()&&Y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ha}updatePriority(n){return this.children_.isEmpty()?this:new ie(this.children_,n,this.indexMap_)}getImmediateChild(n){if(n===".priority")return this.getPriority();{const a=this.children_.get(n);return a===null?Ha:a}}getChild(n){const a=pe(n);return a===null?this:this.getImmediateChild(a).getChild(He(n))}hasChild(n){return this.children_.get(n)!==null}updateImmediateChild(n,a){if(Y(a,"We should always be passing snapshot nodes"),n===".priority")return this.updatePriority(a);{const r=new me(n,a);let u,d;a.isEmpty()?(u=this.children_.remove(n),d=this.indexMap_.removeFromIndexes(r,this.children_)):(u=this.children_.insert(n,a),d=this.indexMap_.addToIndexes(r,this.children_));const f=u.isEmpty()?Ha:this.priorityNode_;return new ie(u,f,d)}}updateChild(n,a){const r=pe(n);if(r===null)return a;{Y(pe(n)!==".priority"||ui(n)===1,".priority must be the last token in a path");const u=this.getImmediateChild(r).updateChild(He(n),a);return this.updateImmediateChild(r,u)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(n){if(this.isEmpty())return null;const a={};let r=0,u=0,d=!0;if(this.forEachChild(Fe,(f,m)=>{a[f]=m.val(n),r++,d&&ie.INTEGER_REGEXP_.test(f)?u=Math.max(u,Number(f)):d=!1}),!n&&d&&u<2*r){const f=[];for(const m in a)f[m]=a[m];return f}else return n&&!this.getPriority().isEmpty()&&(a[".priority"]=this.getPriority().val()),a}hash(){if(this.lazyHash_===null){let n="";this.getPriority().isEmpty()||(n+="priority:"+a0(this.getPriority().val())+":"),this.forEachChild(Fe,(a,r)=>{const u=r.hash();u!==""&&(n+=":"+a+":"+u)}),this.lazyHash_=n===""?"":jg(n)}return this.lazyHash_}getPredecessorChildName(n,a,r){const u=this.resolveIndex_(r);if(u){const d=u.getPredecessorKey(new me(n,a));return d?d.name:null}else return this.children_.getPredecessorKey(n)}getFirstChildName(n){const a=this.resolveIndex_(n);if(a){const r=a.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(n){const a=this.getFirstChildName(n);return a?new me(a,this.children_.get(a)):null}getLastChildName(n){const a=this.resolveIndex_(n);if(a){const r=a.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(n){const a=this.getLastChildName(n);return a?new me(a,this.children_.get(a)):null}forEachChild(n,a){const r=this.resolveIndex_(n);return r?r.inorderTraversal(u=>a(u.name,u.node)):this.children_.inorderTraversal(a)}getIterator(n){return this.getIteratorFrom(n.minPost(),n)}getIteratorFrom(n,a){const r=this.resolveIndex_(a);if(r)return r.getIteratorFrom(n,u=>u);{const u=this.children_.getIteratorFrom(n.name,me.Wrap);let d=u.peek();for(;d!=null&&a.compare(d,n)<0;)u.getNext(),d=u.peek();return u}}getReverseIterator(n){return this.getReverseIteratorFrom(n.maxPost(),n)}getReverseIteratorFrom(n,a){const r=this.resolveIndex_(a);if(r)return r.getReverseIteratorFrom(n,u=>u);{const u=this.children_.getReverseIteratorFrom(n.name,me.Wrap);let d=u.peek();for(;d!=null&&a.compare(d,n)>0;)u.getNext(),d=u.peek();return u}}compareTo(n){return this.isEmpty()?n.isEmpty()?0:-1:n.isLeafNode()||n.isEmpty()?1:n===ul?-1:0}withIndex(n){if(n===Ds||this.indexMap_.hasIndex(n))return this;{const a=this.indexMap_.addIndex(n,this.children_);return new ie(this.children_,this.priorityNode_,a)}}isIndexed(n){return n===Ds||this.indexMap_.hasIndex(n)}equals(n){if(n===this)return!0;if(n.isLeafNode())return!1;{const a=n;if(this.getPriority().equals(a.getPriority()))if(this.children_.count()===a.children_.count()){const r=this.getIterator(Fe),u=a.getIterator(Fe);let d=r.getNext(),f=u.getNext();for(;d&&f;){if(d.name!==f.name||!d.node.equals(f.node))return!1;d=r.getNext(),f=u.getNext()}return d===null&&f===null}else return!1;else return!1}}resolveIndex_(n){return n===Ds?null:this.indexMap_.get(n.toString())}}ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xS extends ie{constructor(){super(new Tt(Sd),ie.EMPTY_NODE,An.Default)}compareTo(n){return n===this?0:1}equals(n){return n===this}getPriority(){return this}getImmediateChild(n){return ie.EMPTY_NODE}isEmpty(){return!1}}const ul=new xS;Object.defineProperties(me,{MIN:{value:new me(zs,ie.EMPTY_NODE)},MAX:{value:new me(Hi,ul)}});s0.__EMPTY_NODE=ie.EMPTY_NODE;lt.__childrenNodeConstructor=ie;mS(ul);gS(ul);/**
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
 */const CS=!0;function ot(s,n=null){if(s===null)return ie.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(n=s[".priority"]),Y(n===null||typeof n=="string"||typeof n=="number"||typeof n=="object"&&".sv"in n,"Invalid priority type found: "+typeof n),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const a=s;return new lt(a,ot(n))}if(!(s instanceof Array)&&CS){const a=[];let r=!1;if(At(s,(f,m)=>{if(f.substring(0,1)!=="."){const g=ot(m);g.isEmpty()||(r=r||!g.getPriority().isEmpty(),a.push(new me(f,g)))}}),a.length===0)return ie.EMPTY_NODE;const d=qr(a,pS,f=>f.name,Sd);if(r){const f=qr(a,Fe.getCompare());return new ie(d,ot(n),new An({".priority":f},{".priority":Fe}))}else return new ie(d,ot(n),An.Default)}else{let a=ie.EMPTY_NODE;return At(s,(r,u)=>{if(Mn(s,r)&&r.substring(0,1)!=="."){const d=ot(u);(d.isLeafNode()||!d.isEmpty())&&(a=a.updateImmediateChild(r,d))}}),a.updatePriority(ot(n))}}_S(ot);/**
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
 */class SS extends eo{constructor(n){super(),this.indexPath_=n,Y(!ve(n)&&pe(n)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(n){return n.getChild(this.indexPath_)}isDefinedOn(n){return!n.getChild(this.indexPath_).isEmpty()}compare(n,a){const r=this.extractChild(n.node),u=this.extractChild(a.node),d=r.compareTo(u);return d===0?Hs(n.name,a.name):d}makePost(n,a){const r=ot(n),u=ie.EMPTY_NODE.updateChild(this.indexPath_,r);return new me(a,u)}maxPost(){const n=ie.EMPTY_NODE.updateChild(this.indexPath_,ul);return new me(Hi,n)}toString(){return t0(this.indexPath_,0).join("/")}}/**
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
 */class ES extends eo{compare(n,a){const r=n.node.compareTo(a.node);return r===0?Hs(n.name,a.name):r}isDefinedOn(n){return!0}indexedValueChanged(n,a){return!n.equals(a)}minPost(){return me.MIN}maxPost(){return me.MAX}makePost(n,a){const r=ot(n);return new me(a,r)}toString(){return".value"}}const wS=new ES;/**
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
 */function u0(s){return{type:"value",snapshotNode:s}}function Ls(s,n){return{type:"child_added",snapshotNode:n,childName:s}}function Wa(s,n){return{type:"child_removed",snapshotNode:n,childName:s}}function Pa(s,n,a){return{type:"child_changed",snapshotNode:n,childName:s,oldSnap:a}}function TS(s,n){return{type:"child_moved",snapshotNode:n,childName:s}}/**
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
 */class Ed{constructor(n){this.index_=n}updateChild(n,a,r,u,d,f){Y(n.isIndexed(this.index_),"A node must be indexed if only a child is updated");const m=n.getImmediateChild(a);return m.getChild(u).equals(r.getChild(u))&&m.isEmpty()===r.isEmpty()||(f!=null&&(r.isEmpty()?n.hasChild(a)?f.trackChildChange(Wa(a,m)):Y(n.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):m.isEmpty()?f.trackChildChange(Ls(a,r)):f.trackChildChange(Pa(a,r,m))),n.isLeafNode()&&r.isEmpty())?n:n.updateImmediateChild(a,r).withIndex(this.index_)}updateFullNode(n,a,r){return r!=null&&(n.isLeafNode()||n.forEachChild(Fe,(u,d)=>{a.hasChild(u)||r.trackChildChange(Wa(u,d))}),a.isLeafNode()||a.forEachChild(Fe,(u,d)=>{if(n.hasChild(u)){const f=n.getImmediateChild(u);f.equals(d)||r.trackChildChange(Pa(u,d,f))}else r.trackChildChange(Ls(u,d))})),a.withIndex(this.index_)}updatePriority(n,a){return n.isEmpty()?ie.EMPTY_NODE:n.updatePriority(a)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class $a{constructor(n){this.indexedFilter_=new Ed(n.getIndex()),this.index_=n.getIndex(),this.startPost_=$a.getStartPost_(n),this.endPost_=$a.getEndPost_(n),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(n){const a=this.startIsInclusive_?this.index_.compare(this.getStartPost(),n)<=0:this.index_.compare(this.getStartPost(),n)<0,r=this.endIsInclusive_?this.index_.compare(n,this.getEndPost())<=0:this.index_.compare(n,this.getEndPost())<0;return a&&r}updateChild(n,a,r,u,d,f){return this.matches(new me(a,r))||(r=ie.EMPTY_NODE),this.indexedFilter_.updateChild(n,a,r,u,d,f)}updateFullNode(n,a,r){a.isLeafNode()&&(a=ie.EMPTY_NODE);let u=a.withIndex(this.index_);u=u.updatePriority(ie.EMPTY_NODE);const d=this;return a.forEachChild(Fe,(f,m)=>{d.matches(new me(f,m))||(u=u.updateImmediateChild(f,ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(n,u,r)}updatePriority(n,a){return n}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(n){if(n.hasStart()){const a=n.getIndexStartName();return n.getIndex().makePost(n.getIndexStartValue(),a)}else return n.getIndex().minPost()}static getEndPost_(n){if(n.hasEnd()){const a=n.getIndexEndName();return n.getIndex().makePost(n.getIndexEndValue(),a)}else return n.getIndex().maxPost()}}/**
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
 */class NS{constructor(n){this.withinDirectionalStart=a=>this.reverse_?this.withinEndPost(a):this.withinStartPost(a),this.withinDirectionalEnd=a=>this.reverse_?this.withinStartPost(a):this.withinEndPost(a),this.withinStartPost=a=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),a);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=a=>{const r=this.index_.compare(a,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new $a(n),this.index_=n.getIndex(),this.limit_=n.getLimit(),this.reverse_=!n.isViewFromLeft(),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}updateChild(n,a,r,u,d,f){return this.rangedFilter_.matches(new me(a,r))||(r=ie.EMPTY_NODE),n.getImmediateChild(a).equals(r)?n:n.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(n,a,r,u,d,f):this.fullLimitUpdateChild_(n,a,r,d,f)}updateFullNode(n,a,r){let u;if(a.isLeafNode()||a.isEmpty())u=ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<a.numChildren()&&a.isIndexed(this.index_)){u=ie.EMPTY_NODE.withIndex(this.index_);let d;this.reverse_?d=a.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):d=a.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let f=0;for(;d.hasNext()&&f<this.limit_;){const m=d.getNext();if(this.withinDirectionalStart(m))if(this.withinDirectionalEnd(m))u=u.updateImmediateChild(m.name,m.node),f++;else break;else continue}}else{u=a.withIndex(this.index_),u=u.updatePriority(ie.EMPTY_NODE);let d;this.reverse_?d=u.getReverseIterator(this.index_):d=u.getIterator(this.index_);let f=0;for(;d.hasNext();){const m=d.getNext();f<this.limit_&&this.withinDirectionalStart(m)&&this.withinDirectionalEnd(m)?f++:u=u.updateImmediateChild(m.name,ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(n,u,r)}updatePriority(n,a){return n}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(n,a,r,u,d){let f;if(this.reverse_){const v=this.index_.getCompare();f=(E,z)=>v(z,E)}else f=this.index_.getCompare();const m=n;Y(m.numChildren()===this.limit_,"");const g=new me(a,r),p=this.reverse_?m.getFirstChild(this.index_):m.getLastChild(this.index_),C=this.rangedFilter_.matches(g);if(m.hasChild(a)){const v=m.getImmediateChild(a);let E=u.getChildAfterChild(this.index_,p,this.reverse_);for(;E!=null&&(E.name===a||m.hasChild(E.name));)E=u.getChildAfterChild(this.index_,E,this.reverse_);const z=E==null?1:f(E,g);if(C&&!r.isEmpty()&&z>=0)return d!=null&&d.trackChildChange(Pa(a,r,v)),m.updateImmediateChild(a,r);{d!=null&&d.trackChildChange(Wa(a,v));const I=m.updateImmediateChild(a,ie.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(d!=null&&d.trackChildChange(Ls(E.name,E.node)),I.updateImmediateChild(E.name,E.node)):I}}else return r.isEmpty()?n:C&&f(p,g)>=0?(d!=null&&(d.trackChildChange(Wa(p.name,p.node)),d.trackChildChange(Ls(a,r))),m.updateImmediateChild(a,r).updateImmediateChild(p.name,ie.EMPTY_NODE)):n}}/**
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
 */class wd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zs}hasEnd(){return this.endSet_}getIndexEndValue(){return Y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const n=new wd;return n.limitSet_=this.limitSet_,n.limit_=this.limit_,n.startSet_=this.startSet_,n.startAfterSet_=this.startAfterSet_,n.indexStartValue_=this.indexStartValue_,n.startNameSet_=this.startNameSet_,n.indexStartName_=this.indexStartName_,n.endSet_=this.endSet_,n.endBeforeSet_=this.endBeforeSet_,n.indexEndValue_=this.indexEndValue_,n.endNameSet_=this.endNameSet_,n.indexEndName_=this.indexEndName_,n.index_=this.index_,n.viewFrom_=this.viewFrom_,n}}function AS(s){return s.loadsAllData()?new Ed(s.getIndex()):s.hasLimit()?new NS(s):new $a(s)}function Y_(s){const n={};if(s.isDefault())return n;let a;if(s.index_===Fe?a="$priority":s.index_===wS?a="$value":s.index_===Ds?a="$key":(Y(s.index_ instanceof SS,"Unrecognized index type!"),a=s.index_.toString()),n.orderBy=nt(a),s.startSet_){const r=s.startAfterSet_?"startAfter":"startAt";n[r]=nt(s.indexStartValue_),s.startNameSet_&&(n[r]+=","+nt(s.indexStartName_))}if(s.endSet_){const r=s.endBeforeSet_?"endBefore":"endAt";n[r]=nt(s.indexEndValue_),s.endNameSet_&&(n[r]+=","+nt(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?n.limitToFirst=s.limit_:n.limitToLast=s.limit_),n}function q_(s){const n={};if(s.startSet_&&(n.sp=s.indexStartValue_,s.startNameSet_&&(n.sn=s.indexStartName_),n.sin=!s.startAfterSet_),s.endSet_&&(n.ep=s.indexEndValue_,s.endNameSet_&&(n.en=s.indexEndName_),n.ein=!s.endBeforeSet_),s.limitSet_){n.l=s.limit_;let a=s.viewFrom_;a===""&&(s.isViewFromLeft()?a="l":a="r"),n.vf=a}return s.index_!==Fe&&(n.i=s.index_.toString()),n}/**
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
 */class Ir extends Pg{reportStats(n){throw new Error("Method not implemented.")}static getListenId_(n,a){return a!==void 0?"tag$"+a:(Y(n._queryParams.isDefault(),"should have a tag if it's not a default query."),n._path.toString())}constructor(n,a,r,u){super(),this.repoInfo_=n,this.onDataUpdate_=a,this.authTokenProvider_=r,this.appCheckTokenProvider_=u,this.log_=ol("p:rest:"),this.listens_={}}listen(n,a,r,u){const d=n._path.toString();this.log_("Listen called for "+d+" "+n._queryIdentifier);const f=Ir.getListenId_(n,r),m={};this.listens_[f]=m;const g=Y_(n._queryParams);this.restRequest_(d+".json",g,(p,C)=>{let v=C;if(p===404&&(v=null,p=null),p===null&&this.onDataUpdate_(d,v,!1,r),js(this.listens_,f)===m){let E;p?p===401?E="permission_denied":E="rest_error:"+p:E="ok",u(E,null)}})}unlisten(n,a){const r=Ir.getListenId_(n,a);delete this.listens_[r]}get(n){const a=Y_(n._queryParams),r=n._path.toString(),u=new hd;return this.restRequest_(r+".json",a,(d,f)=>{let m=f;d===404&&(m=null,d=null),d===null?(this.onDataUpdate_(r,m,!1,null),u.resolve(m)):u.reject(new Error(m))}),u.promise}refreshAuthToken(n){}restRequest_(n,a={},r){return a.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([u,d])=>{u&&u.accessToken&&(a.auth=u.accessToken),d&&d.token&&(a.ac=d.token);const f=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+n+"?ns="+this.repoInfo_.namespace+l1(a);this.log_("Sending REST request for "+f);const m=new XMLHttpRequest;m.onreadystatechange=()=>{if(r&&m.readyState===4){this.log_("REST Response for "+f+" received. status:",m.status,"response:",m.responseText);let g=null;if(m.status>=200&&m.status<300){try{g=Ka(m.responseText)}catch{Nt("Failed to parse JSON response for "+f+": "+m.responseText)}r(null,g)}else m.status!==401&&m.status!==404&&Nt("Got unsuccessful REST response for "+f+" Status: "+m.status),r(m.status);r=null}},m.open("GET",f,!0),m.send()})}}/**
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
 */class RS{constructor(){this.rootNode_=ie.EMPTY_NODE}getNode(n){return this.rootNode_.getChild(n)}updateSnapshot(n,a){this.rootNode_=this.rootNode_.updateChild(n,a)}}/**
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
 */function Gr(){return{value:null,children:new Map}}function c0(s,n,a){if(ve(n))s.value=a,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(n,a);else{const r=pe(n);s.children.has(r)||s.children.set(r,Gr());const u=s.children.get(r);n=He(n),c0(u,n,a)}}function td(s,n,a){s.value!==null?a(n,s.value):OS(s,(r,u)=>{const d=new ke(n.toString()+"/"+r);td(u,d,a)})}function OS(s,n){s.children.forEach((a,r)=>{n(r,a)})}/**
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
 */class MS{constructor(n){this.collection_=n,this.last_=null}get(){const n=this.collection_.get(),a={...n};return this.last_&&At(this.last_,(r,u)=>{a[r]=a[r]-u}),this.last_=n,a}}/**
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
 */const I_=10*1e3,DS=30*1e3,jS=300*1e3;class zS{constructor(n,a){this.server_=a,this.statsToReport_={},this.statsListener_=new MS(n);const r=I_+(DS-I_)*Math.random();Ga(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const n=this.statsListener_.get(),a={};let r=!1;At(n,(u,d)=>{d>0&&Mn(this.statsToReport_,u)&&(a[u]=d,r=!0)}),r&&this.server_.reportStats(a),Ga(this.reportStats_.bind(this),Math.floor(Math.random()*2*jS))}}/**
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
 */var nn;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function d0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Td(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Nd(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
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
 */class Vr{constructor(n,a,r){this.path=n,this.affectedTree=a,this.revert=r,this.type=nn.ACK_USER_WRITE,this.source=d0()}operationForChild(n){if(ve(this.path)){if(this.affectedTree.value!=null)return Y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const a=this.affectedTree.subtree(new ke(n));return new Vr(Te(),a,this.revert)}}else return Y(pe(this.path)===n,"operationForChild called for unrelated child."),new Vr(He(this.path),this.affectedTree,this.revert)}}/**
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
 */class el{constructor(n,a){this.source=n,this.path=a,this.type=nn.LISTEN_COMPLETE}operationForChild(n){return ve(this.path)?new el(this.source,Te()):new el(this.source,He(this.path))}}/**
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
 */class Bi{constructor(n,a,r){this.source=n,this.path=a,this.snap=r,this.type=nn.OVERWRITE}operationForChild(n){return ve(this.path)?new Bi(this.source,Te(),this.snap.getImmediateChild(n)):new Bi(this.source,He(this.path),this.snap)}}/**
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
 */class tl{constructor(n,a,r){this.source=n,this.path=a,this.children=r,this.type=nn.MERGE}operationForChild(n){if(ve(this.path)){const a=this.children.subtree(new ke(n));return a.isEmpty()?null:a.value?new Bi(this.source,Te(),a.value):new tl(this.source,Te(),a)}else return Y(pe(this.path)===n,"Can't get a merge for a child not on the path of the operation"),new tl(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ci{constructor(n,a,r){this.node_=n,this.fullyInitialized_=a,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(n){if(ve(n))return this.isFullyInitialized()&&!this.filtered_;const a=pe(n);return this.isCompleteForChild(a)}isCompleteForChild(n){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(n)}getNode(){return this.node_}}/**
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
 */class LS{constructor(n){this.query_=n,this.index_=this.query_._queryParams.getIndex()}}function kS(s,n,a,r){const u=[],d=[];return n.forEach(f=>{f.type==="child_changed"&&s.index_.indexedValueChanged(f.oldSnap,f.snapshotNode)&&d.push(TS(f.childName,f.snapshotNode))}),Ba(s,u,"child_removed",n,r,a),Ba(s,u,"child_added",n,r,a),Ba(s,u,"child_moved",d,r,a),Ba(s,u,"child_changed",n,r,a),Ba(s,u,"value",n,r,a),u}function Ba(s,n,a,r,u,d){const f=r.filter(m=>m.type===a);f.sort((m,g)=>HS(s,m,g)),f.forEach(m=>{const g=US(s,m,d);u.forEach(p=>{p.respondsTo(m.type)&&n.push(p.createEvent(g,s.query_))})})}function US(s,n,a){return n.type==="value"||n.type==="child_removed"||(n.prevName=a.getPredecessorChildName(n.childName,n.snapshotNode,s.index_)),n}function HS(s,n,a){if(n.childName==null||a.childName==null)throw Us("Should only compare child_ events.");const r=new me(n.childName,n.snapshotNode),u=new me(a.childName,a.snapshotNode);return s.index_.compare(r,u)}/**
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
 */function to(s,n){return{eventCache:s,serverCache:n}}function Va(s,n,a,r){return to(new ci(n,a,r),s.serverCache)}function f0(s,n,a,r){return to(s.eventCache,new ci(n,a,r))}function Fr(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function Yi(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
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
 */let Qc;const BS=()=>(Qc||(Qc=new Tt(SC)),Qc);class qe{static fromObject(n){let a=new qe(null);return At(n,(r,u)=>{a=a.set(new ke(r),u)}),a}constructor(n,a=BS()){this.value=n,this.children=a}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(n,a){if(this.value!=null&&a(this.value))return{path:Te(),value:this.value};if(ve(n))return null;{const r=pe(n),u=this.children.get(r);if(u!==null){const d=u.findRootMostMatchingPathAndValue(He(n),a);return d!=null?{path:it(new ke(r),d.path),value:d.value}:null}else return null}}findRootMostValueAndPath(n){return this.findRootMostMatchingPathAndValue(n,()=>!0)}subtree(n){if(ve(n))return this;{const a=pe(n),r=this.children.get(a);return r!==null?r.subtree(He(n)):new qe(null)}}set(n,a){if(ve(n))return new qe(a,this.children);{const r=pe(n),d=(this.children.get(r)||new qe(null)).set(He(n),a),f=this.children.insert(r,d);return new qe(this.value,f)}}remove(n){if(ve(n))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const a=pe(n),r=this.children.get(a);if(r){const u=r.remove(He(n));let d;return u.isEmpty()?d=this.children.remove(a):d=this.children.insert(a,u),this.value===null&&d.isEmpty()?new qe(null):new qe(this.value,d)}else return this}}get(n){if(ve(n))return this.value;{const a=pe(n),r=this.children.get(a);return r?r.get(He(n)):null}}setTree(n,a){if(ve(n))return a;{const r=pe(n),d=(this.children.get(r)||new qe(null)).setTree(He(n),a);let f;return d.isEmpty()?f=this.children.remove(r):f=this.children.insert(r,d),new qe(this.value,f)}}fold(n){return this.fold_(Te(),n)}fold_(n,a){const r={};return this.children.inorderTraversal((u,d)=>{r[u]=d.fold_(it(n,u),a)}),a(n,this.value,r)}findOnPath(n,a){return this.findOnPath_(n,Te(),a)}findOnPath_(n,a,r){const u=this.value?r(a,this.value):!1;if(u)return u;if(ve(n))return null;{const d=pe(n),f=this.children.get(d);return f?f.findOnPath_(He(n),it(a,d),r):null}}foreachOnPath(n,a){return this.foreachOnPath_(n,Te(),a)}foreachOnPath_(n,a,r){if(ve(n))return this;{this.value&&r(a,this.value);const u=pe(n),d=this.children.get(u);return d?d.foreachOnPath_(He(n),it(a,u),r):new qe(null)}}foreach(n){this.foreach_(Te(),n)}foreach_(n,a){this.children.inorderTraversal((r,u)=>{u.foreach_(it(n,r),a)}),this.value&&a(n,this.value)}foreachChild(n){this.children.inorderTraversal((a,r)=>{r.value&&n(a,r.value)})}}/**
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
 */class sn{constructor(n){this.writeTree_=n}static empty(){return new sn(new qe(null))}}function Fa(s,n,a){if(ve(n))return new sn(new qe(a));{const r=s.writeTree_.findRootMostValueAndPath(n);if(r!=null){const u=r.path;let d=r.value;const f=yt(u,n);return d=d.updateChild(f,a),new sn(s.writeTree_.set(u,d))}else{const u=new qe(a),d=s.writeTree_.setTree(n,u);return new sn(d)}}}function G_(s,n,a){let r=s;return At(a,(u,d)=>{r=Fa(r,it(n,u),d)}),r}function V_(s,n){if(ve(n))return sn.empty();{const a=s.writeTree_.setTree(n,new qe(null));return new sn(a)}}function nd(s,n){return qi(s,n)!=null}function qi(s,n){const a=s.writeTree_.findRootMostValueAndPath(n);return a!=null?s.writeTree_.get(a.path).getChild(yt(a.path,n)):null}function F_(s){const n=[],a=s.writeTree_.value;return a!=null?a.isLeafNode()||a.forEachChild(Fe,(r,u)=>{n.push(new me(r,u))}):s.writeTree_.children.inorderTraversal((r,u)=>{u.value!=null&&n.push(new me(r,u.value))}),n}function ri(s,n){if(ve(n))return s;{const a=qi(s,n);return a!=null?new sn(new qe(a)):new sn(s.writeTree_.subtree(n))}}function id(s){return s.writeTree_.isEmpty()}function ks(s,n){return h0(Te(),s.writeTree_,n)}function h0(s,n,a){if(n.value!=null)return a.updateChild(s,n.value);{let r=null;return n.children.inorderTraversal((u,d)=>{u===".priority"?(Y(d.value!==null,"Priority writes must always be leaf nodes"),r=d.value):a=h0(it(s,u),d,a)}),!a.getChild(s).isEmpty()&&r!==null&&(a=a.updateChild(it(s,".priority"),r)),a}}/**
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
 */function no(s,n){return g0(n,s)}function YS(s,n,a,r,u){Y(r>s.lastWriteId,"Stacking an older write on top of newer ones"),u===void 0&&(u=!0),s.allWrites.push({path:n,snap:a,writeId:r,visible:u}),u&&(s.visibleWrites=Fa(s.visibleWrites,n,a)),s.lastWriteId=r}function qS(s,n){for(let a=0;a<s.allWrites.length;a++){const r=s.allWrites[a];if(r.writeId===n)return r}return null}function IS(s,n){const a=s.allWrites.findIndex(m=>m.writeId===n);Y(a>=0,"removeWrite called with nonexistent writeId.");const r=s.allWrites[a];s.allWrites.splice(a,1);let u=r.visible,d=!1,f=s.allWrites.length-1;for(;u&&f>=0;){const m=s.allWrites[f];m.visible&&(f>=a&&GS(m,r.path)?u=!1:tn(r.path,m.path)&&(d=!0)),f--}if(u){if(d)return VS(s),!0;if(r.snap)s.visibleWrites=V_(s.visibleWrites,r.path);else{const m=r.children;At(m,g=>{s.visibleWrites=V_(s.visibleWrites,it(r.path,g))})}return!0}else return!1}function GS(s,n){if(s.snap)return tn(s.path,n);for(const a in s.children)if(s.children.hasOwnProperty(a)&&tn(it(s.path,a),n))return!0;return!1}function VS(s){s.visibleWrites=p0(s.allWrites,FS,Te()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function FS(s){return s.visible}function p0(s,n,a){let r=sn.empty();for(let u=0;u<s.length;++u){const d=s[u];if(n(d)){const f=d.path;let m;if(d.snap)tn(a,f)?(m=yt(a,f),r=Fa(r,m,d.snap)):tn(f,a)&&(m=yt(f,a),r=Fa(r,Te(),d.snap.getChild(m)));else if(d.children){if(tn(a,f))m=yt(a,f),r=G_(r,m,d.children);else if(tn(f,a))if(m=yt(f,a),ve(m))r=G_(r,Te(),d.children);else{const g=js(d.children,pe(m));if(g){const p=g.getChild(He(m));r=Fa(r,Te(),p)}}}else throw Us("WriteRecord should have .snap or .children")}}return r}function m0(s,n,a,r,u){if(!r&&!u){const d=qi(s.visibleWrites,n);if(d!=null)return d;{const f=ri(s.visibleWrites,n);if(id(f))return a;if(a==null&&!nd(f,Te()))return null;{const m=a||ie.EMPTY_NODE;return ks(f,m)}}}else{const d=ri(s.visibleWrites,n);if(!u&&id(d))return a;if(!u&&a==null&&!nd(d,Te()))return null;{const f=function(p){return(p.visible||u)&&(!r||!~r.indexOf(p.writeId))&&(tn(p.path,n)||tn(n,p.path))},m=p0(s.allWrites,f,n),g=a||ie.EMPTY_NODE;return ks(m,g)}}}function QS(s,n,a){let r=ie.EMPTY_NODE;const u=qi(s.visibleWrites,n);if(u)return u.isLeafNode()||u.forEachChild(Fe,(d,f)=>{r=r.updateImmediateChild(d,f)}),r;if(a){const d=ri(s.visibleWrites,n);return a.forEachChild(Fe,(f,m)=>{const g=ks(ri(d,new ke(f)),m);r=r.updateImmediateChild(f,g)}),F_(d).forEach(f=>{r=r.updateImmediateChild(f.name,f.node)}),r}else{const d=ri(s.visibleWrites,n);return F_(d).forEach(f=>{r=r.updateImmediateChild(f.name,f.node)}),r}}function XS(s,n,a,r,u){Y(r||u,"Either existingEventSnap or existingServerSnap must exist");const d=it(n,a);if(nd(s.visibleWrites,d))return null;{const f=ri(s.visibleWrites,d);return id(f)?u.getChild(a):ks(f,u.getChild(a))}}function KS(s,n,a,r){const u=it(n,a),d=qi(s.visibleWrites,u);if(d!=null)return d;if(r.isCompleteForChild(a)){const f=ri(s.visibleWrites,u);return ks(f,r.getNode().getImmediateChild(a))}else return null}function ZS(s,n){return qi(s.visibleWrites,n)}function JS(s,n,a,r,u,d,f){let m;const g=ri(s.visibleWrites,n),p=qi(g,Te());if(p!=null)m=p;else if(a!=null)m=ks(g,a);else return[];if(m=m.withIndex(f),!m.isEmpty()&&!m.isLeafNode()){const C=[],v=f.getCompare(),E=d?m.getReverseIteratorFrom(r,f):m.getIteratorFrom(r,f);let z=E.getNext();for(;z&&C.length<u;)v(z,r)!==0&&C.push(z),z=E.getNext();return C}else return[]}function WS(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function Qr(s,n,a,r){return m0(s.writeTree,s.treePath,n,a,r)}function Ad(s,n){return QS(s.writeTree,s.treePath,n)}function Q_(s,n,a,r){return XS(s.writeTree,s.treePath,n,a,r)}function Xr(s,n){return ZS(s.writeTree,it(s.treePath,n))}function PS(s,n,a,r,u,d){return JS(s.writeTree,s.treePath,n,a,r,u,d)}function Rd(s,n,a){return KS(s.writeTree,s.treePath,n,a)}function _0(s,n){return g0(it(s.treePath,n),s.writeTree)}function g0(s,n){return{treePath:s,writeTree:n}}/**
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
 */class $S{constructor(){this.changeMap=new Map}trackChildChange(n){const a=n.type,r=n.childName;Y(a==="child_added"||a==="child_changed"||a==="child_removed","Only child changes supported for tracking"),Y(r!==".priority","Only non-priority child changes can be tracked.");const u=this.changeMap.get(r);if(u){const d=u.type;if(a==="child_added"&&d==="child_removed")this.changeMap.set(r,Pa(r,n.snapshotNode,u.snapshotNode));else if(a==="child_removed"&&d==="child_added")this.changeMap.delete(r);else if(a==="child_removed"&&d==="child_changed")this.changeMap.set(r,Wa(r,u.oldSnap));else if(a==="child_changed"&&d==="child_added")this.changeMap.set(r,Ls(r,n.snapshotNode));else if(a==="child_changed"&&d==="child_changed")this.changeMap.set(r,Pa(r,n.snapshotNode,u.oldSnap));else throw Us("Illegal combination of changes: "+n+" occurred after "+u)}else this.changeMap.set(r,n)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class e2{getCompleteChild(n){return null}getChildAfterChild(n,a,r){return null}}const y0=new e2;class Od{constructor(n,a,r=null){this.writes_=n,this.viewCache_=a,this.optCompleteServerCache_=r}getCompleteChild(n){const a=this.viewCache_.eventCache;if(a.isCompleteForChild(n))return a.getNode().getImmediateChild(n);{const r=this.optCompleteServerCache_!=null?new ci(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Rd(this.writes_,n,r)}}getChildAfterChild(n,a,r){const u=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yi(this.viewCache_),d=PS(this.writes_,u,a,1,r,n);return d.length===0?null:d[0]}}/**
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
 */function t2(s){return{filter:s}}function n2(s,n){Y(n.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),Y(n.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function i2(s,n,a,r,u){const d=new $S;let f,m;if(a.type===nn.OVERWRITE){const p=a;p.source.fromUser?f=sd(s,n,p.path,p.snap,r,u,d):(Y(p.source.fromServer,"Unknown source."),m=p.source.tagged||n.serverCache.isFiltered()&&!ve(p.path),f=Kr(s,n,p.path,p.snap,r,u,m,d))}else if(a.type===nn.MERGE){const p=a;p.source.fromUser?f=a2(s,n,p.path,p.children,r,u,d):(Y(p.source.fromServer,"Unknown source."),m=p.source.tagged||n.serverCache.isFiltered(),f=ad(s,n,p.path,p.children,r,u,m,d))}else if(a.type===nn.ACK_USER_WRITE){const p=a;p.revert?f=o2(s,n,p.path,r,u,d):f=l2(s,n,p.path,p.affectedTree,r,u,d)}else if(a.type===nn.LISTEN_COMPLETE)f=r2(s,n,a.path,r,d);else throw Us("Unknown operation type: "+a.type);const g=d.getChanges();return s2(n,f,g),{viewCache:f,changes:g}}function s2(s,n,a){const r=n.eventCache;if(r.isFullyInitialized()){const u=r.getNode().isLeafNode()||r.getNode().isEmpty(),d=Fr(s);(a.length>0||!s.eventCache.isFullyInitialized()||u&&!r.getNode().equals(d)||!r.getNode().getPriority().equals(d.getPriority()))&&a.push(u0(Fr(n)))}}function v0(s,n,a,r,u,d){const f=n.eventCache;if(Xr(r,a)!=null)return n;{let m,g;if(ve(a))if(Y(n.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),n.serverCache.isFiltered()){const p=Yi(n),C=p instanceof ie?p:ie.EMPTY_NODE,v=Ad(r,C);m=s.filter.updateFullNode(n.eventCache.getNode(),v,d)}else{const p=Qr(r,Yi(n));m=s.filter.updateFullNode(n.eventCache.getNode(),p,d)}else{const p=pe(a);if(p===".priority"){Y(ui(a)===1,"Can't have a priority with additional path components");const C=f.getNode();g=n.serverCache.getNode();const v=Q_(r,a,C,g);v!=null?m=s.filter.updatePriority(C,v):m=f.getNode()}else{const C=He(a);let v;if(f.isCompleteForChild(p)){g=n.serverCache.getNode();const E=Q_(r,a,f.getNode(),g);E!=null?v=f.getNode().getImmediateChild(p).updateChild(C,E):v=f.getNode().getImmediateChild(p)}else v=Rd(r,p,n.serverCache);v!=null?m=s.filter.updateChild(f.getNode(),p,v,C,u,d):m=f.getNode()}}return Va(n,m,f.isFullyInitialized()||ve(a),s.filter.filtersNodes())}}function Kr(s,n,a,r,u,d,f,m){const g=n.serverCache;let p;const C=f?s.filter:s.filter.getIndexedFilter();if(ve(a))p=C.updateFullNode(g.getNode(),r,null);else if(C.filtersNodes()&&!g.isFiltered()){const z=g.getNode().updateChild(a,r);p=C.updateFullNode(g.getNode(),z,null)}else{const z=pe(a);if(!g.isCompleteForPath(a)&&ui(a)>1)return n;const U=He(a),se=g.getNode().getImmediateChild(z).updateChild(U,r);z===".priority"?p=C.updatePriority(g.getNode(),se):p=C.updateChild(g.getNode(),z,se,U,y0,null)}const v=f0(n,p,g.isFullyInitialized()||ve(a),C.filtersNodes()),E=new Od(u,v,d);return v0(s,v,a,u,E,m)}function sd(s,n,a,r,u,d,f){const m=n.eventCache;let g,p;const C=new Od(u,n,d);if(ve(a))p=s.filter.updateFullNode(n.eventCache.getNode(),r,f),g=Va(n,p,!0,s.filter.filtersNodes());else{const v=pe(a);if(v===".priority")p=s.filter.updatePriority(n.eventCache.getNode(),r),g=Va(n,p,m.isFullyInitialized(),m.isFiltered());else{const E=He(a),z=m.getNode().getImmediateChild(v);let U;if(ve(E))U=r;else{const I=C.getCompleteChild(v);I!=null?e0(E)===".priority"&&I.getChild(n0(E)).isEmpty()?U=I:U=I.updateChild(E,r):U=ie.EMPTY_NODE}if(z.equals(U))g=n;else{const I=s.filter.updateChild(m.getNode(),v,U,E,C,f);g=Va(n,I,m.isFullyInitialized(),s.filter.filtersNodes())}}}return g}function X_(s,n){return s.eventCache.isCompleteForChild(n)}function a2(s,n,a,r,u,d,f){let m=n;return r.foreach((g,p)=>{const C=it(a,g);X_(n,pe(C))&&(m=sd(s,m,C,p,u,d,f))}),r.foreach((g,p)=>{const C=it(a,g);X_(n,pe(C))||(m=sd(s,m,C,p,u,d,f))}),m}function K_(s,n,a){return a.foreach((r,u)=>{n=n.updateChild(r,u)}),n}function ad(s,n,a,r,u,d,f,m){if(n.serverCache.getNode().isEmpty()&&!n.serverCache.isFullyInitialized())return n;let g=n,p;ve(a)?p=r:p=new qe(null).setTree(a,r);const C=n.serverCache.getNode();return p.children.inorderTraversal((v,E)=>{if(C.hasChild(v)){const z=n.serverCache.getNode().getImmediateChild(v),U=K_(s,z,E);g=Kr(s,g,new ke(v),U,u,d,f,m)}}),p.children.inorderTraversal((v,E)=>{const z=!n.serverCache.isCompleteForChild(v)&&E.value===null;if(!C.hasChild(v)&&!z){const U=n.serverCache.getNode().getImmediateChild(v),I=K_(s,U,E);g=Kr(s,g,new ke(v),I,u,d,f,m)}}),g}function l2(s,n,a,r,u,d,f){if(Xr(u,a)!=null)return n;const m=n.serverCache.isFiltered(),g=n.serverCache;if(r.value!=null){if(ve(a)&&g.isFullyInitialized()||g.isCompleteForPath(a))return Kr(s,n,a,g.getNode().getChild(a),u,d,m,f);if(ve(a)){let p=new qe(null);return g.getNode().forEachChild(Ds,(C,v)=>{p=p.set(new ke(C),v)}),ad(s,n,a,p,u,d,m,f)}else return n}else{let p=new qe(null);return r.foreach((C,v)=>{const E=it(a,C);g.isCompleteForPath(E)&&(p=p.set(C,g.getNode().getChild(E)))}),ad(s,n,a,p,u,d,m,f)}}function r2(s,n,a,r,u){const d=n.serverCache,f=f0(n,d.getNode(),d.isFullyInitialized()||ve(a),d.isFiltered());return v0(s,f,a,r,y0,u)}function o2(s,n,a,r,u,d){let f;if(Xr(r,a)!=null)return n;{const m=new Od(r,n,u),g=n.eventCache.getNode();let p;if(ve(a)||pe(a)===".priority"){let C;if(n.serverCache.isFullyInitialized())C=Qr(r,Yi(n));else{const v=n.serverCache.getNode();Y(v instanceof ie,"serverChildren would be complete if leaf node"),C=Ad(r,v)}C=C,p=s.filter.updateFullNode(g,C,d)}else{const C=pe(a);let v=Rd(r,C,n.serverCache);v==null&&n.serverCache.isCompleteForChild(C)&&(v=g.getImmediateChild(C)),v!=null?p=s.filter.updateChild(g,C,v,He(a),m,d):n.eventCache.getNode().hasChild(C)?p=s.filter.updateChild(g,C,ie.EMPTY_NODE,He(a),m,d):p=g,p.isEmpty()&&n.serverCache.isFullyInitialized()&&(f=Qr(r,Yi(n)),f.isLeafNode()&&(p=s.filter.updateFullNode(p,f,d)))}return f=n.serverCache.isFullyInitialized()||Xr(r,Te())!=null,Va(n,p,f,s.filter.filtersNodes())}}/**
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
 */class u2{constructor(n,a){this.query_=n,this.eventRegistrations_=[];const r=this.query_._queryParams,u=new Ed(r.getIndex()),d=AS(r);this.processor_=t2(d);const f=a.serverCache,m=a.eventCache,g=u.updateFullNode(ie.EMPTY_NODE,f.getNode(),null),p=d.updateFullNode(ie.EMPTY_NODE,m.getNode(),null),C=new ci(g,f.isFullyInitialized(),u.filtersNodes()),v=new ci(p,m.isFullyInitialized(),d.filtersNodes());this.viewCache_=to(v,C),this.eventGenerator_=new LS(this.query_)}get query(){return this.query_}}function c2(s){return s.viewCache_.serverCache.getNode()}function d2(s){return Fr(s.viewCache_)}function f2(s,n){const a=Yi(s.viewCache_);return a&&(s.query._queryParams.loadsAllData()||!ve(n)&&!a.getImmediateChild(pe(n)).isEmpty())?a.getChild(n):null}function Z_(s){return s.eventRegistrations_.length===0}function h2(s,n){s.eventRegistrations_.push(n)}function J_(s,n,a){const r=[];if(a){Y(n==null,"A cancel should cancel all event registrations.");const u=s.query._path;s.eventRegistrations_.forEach(d=>{const f=d.createCancelEvent(a,u);f&&r.push(f)})}if(n){let u=[];for(let d=0;d<s.eventRegistrations_.length;++d){const f=s.eventRegistrations_[d];if(!f.matches(n))u.push(f);else if(n.hasAnyCallback()){u=u.concat(s.eventRegistrations_.slice(d+1));break}}s.eventRegistrations_=u}else s.eventRegistrations_=[];return r}function W_(s,n,a,r){n.type===nn.MERGE&&n.source.queryId!==null&&(Y(Yi(s.viewCache_),"We should always have a full cache before handling merges"),Y(Fr(s.viewCache_),"Missing event cache, even though we have a server cache"));const u=s.viewCache_,d=i2(s.processor_,u,n,a,r);return n2(s.processor_,d.viewCache),Y(d.viewCache.serverCache.isFullyInitialized()||!u.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=d.viewCache,b0(s,d.changes,d.viewCache.eventCache.getNode(),null)}function p2(s,n){const a=s.viewCache_.eventCache,r=[];return a.getNode().isLeafNode()||a.getNode().forEachChild(Fe,(d,f)=>{r.push(Ls(d,f))}),a.isFullyInitialized()&&r.push(u0(a.getNode())),b0(s,r,a.getNode(),n)}function b0(s,n,a,r){const u=r?[r]:s.eventRegistrations_;return kS(s.eventGenerator_,n,a,u)}/**
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
 */let Zr;class x0{constructor(){this.views=new Map}}function m2(s){Y(!Zr,"__referenceConstructor has already been defined"),Zr=s}function _2(){return Y(Zr,"Reference.ts has not been loaded"),Zr}function g2(s){return s.views.size===0}function Md(s,n,a,r){const u=n.source.queryId;if(u!==null){const d=s.views.get(u);return Y(d!=null,"SyncTree gave us an op for an invalid query."),W_(d,n,a,r)}else{let d=[];for(const f of s.views.values())d=d.concat(W_(f,n,a,r));return d}}function C0(s,n,a,r,u){const d=n._queryIdentifier,f=s.views.get(d);if(!f){let m=Qr(a,u?r:null),g=!1;m?g=!0:r instanceof ie?(m=Ad(a,r),g=!1):(m=ie.EMPTY_NODE,g=!1);const p=to(new ci(m,g,!1),new ci(r,u,!1));return new u2(n,p)}return f}function y2(s,n,a,r,u,d){const f=C0(s,n,r,u,d);return s.views.has(n._queryIdentifier)||s.views.set(n._queryIdentifier,f),h2(f,a),p2(f,a)}function v2(s,n,a,r){const u=n._queryIdentifier,d=[];let f=[];const m=di(s);if(u==="default")for(const[g,p]of s.views.entries())f=f.concat(J_(p,a,r)),Z_(p)&&(s.views.delete(g),p.query._queryParams.loadsAllData()||d.push(p.query));else{const g=s.views.get(u);g&&(f=f.concat(J_(g,a,r)),Z_(g)&&(s.views.delete(u),g.query._queryParams.loadsAllData()||d.push(g.query)))}return m&&!di(s)&&d.push(new(_2())(n._repo,n._path)),{removed:d,events:f}}function S0(s){const n=[];for(const a of s.views.values())a.query._queryParams.loadsAllData()||n.push(a);return n}function oi(s,n){let a=null;for(const r of s.views.values())a=a||f2(r,n);return a}function E0(s,n){if(n._queryParams.loadsAllData())return io(s);{const r=n._queryIdentifier;return s.views.get(r)}}function w0(s,n){return E0(s,n)!=null}function di(s){return io(s)!=null}function io(s){for(const n of s.views.values())if(n.query._queryParams.loadsAllData())return n;return null}/**
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
 */let Jr;function b2(s){Y(!Jr,"__referenceConstructor has already been defined"),Jr=s}function x2(){return Y(Jr,"Reference.ts has not been loaded"),Jr}let C2=1;class P_{constructor(n){this.listenProvider_=n,this.syncPointTree_=new qe(null),this.pendingWriteTree_=WS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function T0(s,n,a,r,u){return YS(s.pendingWriteTree_,n,a,r,u),u?dl(s,new Bi(d0(),n,a)):[]}function ki(s,n,a=!1){const r=qS(s.pendingWriteTree_,n);if(IS(s.pendingWriteTree_,n)){let d=new qe(null);return r.snap!=null?d=d.set(Te(),!0):At(r.children,f=>{d=d.set(new ke(f),!0)}),dl(s,new Vr(r.path,d,a))}else return[]}function cl(s,n,a){return dl(s,new Bi(Td(),n,a))}function S2(s,n,a){const r=qe.fromObject(a);return dl(s,new tl(Td(),n,r))}function E2(s,n){return dl(s,new el(Td(),n))}function w2(s,n,a){const r=jd(s,a);if(r){const u=zd(r),d=u.path,f=u.queryId,m=yt(d,n),g=new el(Nd(f),m);return Ld(s,d,g)}else return[]}function Wr(s,n,a,r,u=!1){const d=n._path,f=s.syncPointTree_.get(d);let m=[];if(f&&(n._queryIdentifier==="default"||w0(f,n))){const g=v2(f,n,a,r);g2(f)&&(s.syncPointTree_=s.syncPointTree_.remove(d));const p=g.removed;if(m=g.events,!u){const C=p.findIndex(E=>E._queryParams.loadsAllData())!==-1,v=s.syncPointTree_.findOnPath(d,(E,z)=>di(z));if(C&&!v){const E=s.syncPointTree_.subtree(d);if(!E.isEmpty()){const z=A2(E);for(let U=0;U<z.length;++U){const I=z[U],se=I.query,le=O0(s,I);s.listenProvider_.startListening(Qa(se),nl(s,se),le.hashFn,le.onComplete)}}}!v&&p.length>0&&!r&&(C?s.listenProvider_.stopListening(Qa(n),null):p.forEach(E=>{const z=s.queryToTagMap.get(so(E));s.listenProvider_.stopListening(Qa(E),z)}))}R2(s,p)}return m}function N0(s,n,a,r){const u=jd(s,r);if(u!=null){const d=zd(u),f=d.path,m=d.queryId,g=yt(f,n),p=new Bi(Nd(m),g,a);return Ld(s,f,p)}else return[]}function T2(s,n,a,r){const u=jd(s,r);if(u){const d=zd(u),f=d.path,m=d.queryId,g=yt(f,n),p=qe.fromObject(a),C=new tl(Nd(m),g,p);return Ld(s,f,C)}else return[]}function ld(s,n,a,r=!1){const u=n._path;let d=null,f=!1;s.syncPointTree_.foreachOnPath(u,(E,z)=>{const U=yt(E,u);d=d||oi(z,U),f=f||di(z)});let m=s.syncPointTree_.get(u);m?(f=f||di(m),d=d||oi(m,Te())):(m=new x0,s.syncPointTree_=s.syncPointTree_.set(u,m));let g;d!=null?g=!0:(g=!1,d=ie.EMPTY_NODE,s.syncPointTree_.subtree(u).foreachChild((z,U)=>{const I=oi(U,Te());I&&(d=d.updateImmediateChild(z,I))}));const p=w0(m,n);if(!p&&!n._queryParams.loadsAllData()){const E=so(n);Y(!s.queryToTagMap.has(E),"View does not exist, but we have a tag");const z=O2();s.queryToTagMap.set(E,z),s.tagToQueryMap.set(z,E)}const C=no(s.pendingWriteTree_,u);let v=y2(m,n,a,C,d,g);if(!p&&!f&&!r){const E=E0(m,n);v=v.concat(M2(s,n,E))}return v}function Dd(s,n,a){const u=s.pendingWriteTree_,d=s.syncPointTree_.findOnPath(n,(f,m)=>{const g=yt(f,n),p=oi(m,g);if(p)return p});return m0(u,n,d,a,!0)}function N2(s,n){const a=n._path;let r=null;s.syncPointTree_.foreachOnPath(a,(p,C)=>{const v=yt(p,a);r=r||oi(C,v)});let u=s.syncPointTree_.get(a);u?r=r||oi(u,Te()):(u=new x0,s.syncPointTree_=s.syncPointTree_.set(a,u));const d=r!=null,f=d?new ci(r,!0,!1):null,m=no(s.pendingWriteTree_,n._path),g=C0(u,n,m,d?f.getNode():ie.EMPTY_NODE,d);return d2(g)}function dl(s,n){return A0(n,s.syncPointTree_,null,no(s.pendingWriteTree_,Te()))}function A0(s,n,a,r){if(ve(s.path))return R0(s,n,a,r);{const u=n.get(Te());a==null&&u!=null&&(a=oi(u,Te()));let d=[];const f=pe(s.path),m=s.operationForChild(f),g=n.children.get(f);if(g&&m){const p=a?a.getImmediateChild(f):null,C=_0(r,f);d=d.concat(A0(m,g,p,C))}return u&&(d=d.concat(Md(u,s,r,a))),d}}function R0(s,n,a,r){const u=n.get(Te());a==null&&u!=null&&(a=oi(u,Te()));let d=[];return n.children.inorderTraversal((f,m)=>{const g=a?a.getImmediateChild(f):null,p=_0(r,f),C=s.operationForChild(f);C&&(d=d.concat(R0(C,m,g,p)))}),u&&(d=d.concat(Md(u,s,r,a))),d}function O0(s,n){const a=n.query,r=nl(s,a);return{hashFn:()=>(c2(n)||ie.EMPTY_NODE).hash(),onComplete:u=>{if(u==="ok")return r?w2(s,a._path,r):E2(s,a._path);{const d=TC(u,a);return Wr(s,a,null,d)}}}}function nl(s,n){const a=so(n);return s.queryToTagMap.get(a)}function so(s){return s._path.toString()+"$"+s._queryIdentifier}function jd(s,n){return s.tagToQueryMap.get(n)}function zd(s){const n=s.indexOf("$");return Y(n!==-1&&n<s.length-1,"Bad queryKey."),{queryId:s.substr(n+1),path:new ke(s.substr(0,n))}}function Ld(s,n,a){const r=s.syncPointTree_.get(n);Y(r,"Missing sync point for query tag that we're tracking");const u=no(s.pendingWriteTree_,n);return Md(r,a,u,null)}function A2(s){return s.fold((n,a,r)=>{if(a&&di(a))return[io(a)];{let u=[];return a&&(u=S0(a)),At(r,(d,f)=>{u=u.concat(f)}),u}})}function Qa(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(x2())(s._repo,s._path):s}function R2(s,n){for(let a=0;a<n.length;++a){const r=n[a];if(!r._queryParams.loadsAllData()){const u=so(r),d=s.queryToTagMap.get(u);s.queryToTagMap.delete(u),s.tagToQueryMap.delete(d)}}}function O2(){return C2++}function M2(s,n,a){const r=n._path,u=nl(s,n),d=O0(s,a),f=s.listenProvider_.startListening(Qa(n),u,d.hashFn,d.onComplete),m=s.syncPointTree_.subtree(r);if(u)Y(!di(m.value),"If we're adding a query, it shouldn't be shadowed");else{const g=m.fold((p,C,v)=>{if(!ve(p)&&C&&di(C))return[io(C).query];{let E=[];return C&&(E=E.concat(S0(C).map(z=>z.query))),At(v,(z,U)=>{E=E.concat(U)}),E}});for(let p=0;p<g.length;++p){const C=g[p];s.listenProvider_.stopListening(Qa(C),nl(s,C))}}return f}/**
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
 */class kd{constructor(n){this.node_=n}getImmediateChild(n){const a=this.node_.getImmediateChild(n);return new kd(a)}node(){return this.node_}}class Ud{constructor(n,a){this.syncTree_=n,this.path_=a}getImmediateChild(n){const a=it(this.path_,n);return new Ud(this.syncTree_,a)}node(){return Dd(this.syncTree_,this.path_)}}const D2=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},$_=function(s,n,a){if(!s||typeof s!="object")return s;if(Y(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return j2(s[".sv"],n,a);if(typeof s[".sv"]=="object")return z2(s[".sv"],n);Y(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},j2=function(s,n,a){switch(s){case"timestamp":return a.timestamp;default:Y(!1,"Unexpected server value: "+s)}},z2=function(s,n,a){s.hasOwnProperty("increment")||Y(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const r=s.increment;typeof r!="number"&&Y(!1,"Unexpected increment value: "+r);const u=n.node();if(Y(u!==null&&typeof u<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!u.isLeafNode())return r;const f=u.getValue();return typeof f!="number"?r:f+r},L2=function(s,n,a,r){return Hd(n,new Ud(a,s),r)},M0=function(s,n,a){return Hd(s,new kd(n),a)};function Hd(s,n,a){const r=s.getPriority().val(),u=$_(r,n.getImmediateChild(".priority"),a);let d;if(s.isLeafNode()){const f=s,m=$_(f.getValue(),n,a);return m!==f.getValue()||u!==f.getPriority().val()?new lt(m,ot(u)):s}else{const f=s;return d=f,u!==f.getPriority().val()&&(d=d.updatePriority(new lt(u))),f.forEachChild(Fe,(m,g)=>{const p=Hd(g,n.getImmediateChild(m),a);p!==g&&(d=d.updateImmediateChild(m,p))}),d}}/**
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
 */class Bd{constructor(n="",a=null,r={children:{},childCount:0}){this.name=n,this.parent=a,this.node=r}}function Yd(s,n){let a=n instanceof ke?n:new ke(n),r=s,u=pe(a);for(;u!==null;){const d=js(r.node.children,u)||{children:{},childCount:0};r=new Bd(u,r,d),a=He(a),u=pe(a)}return r}function Ys(s){return s.node.value}function D0(s,n){s.node.value=n,rd(s)}function j0(s){return s.node.childCount>0}function k2(s){return Ys(s)===void 0&&!j0(s)}function ao(s,n){At(s.node.children,(a,r)=>{n(new Bd(a,s,r))})}function z0(s,n,a,r){a&&n(s),ao(s,u=>{z0(u,n,!0)})}function U2(s,n,a){let r=s.parent;for(;r!==null;){if(n(r))return!0;r=r.parent}return!1}function fl(s){return new ke(s.parent===null?s.name:fl(s.parent)+"/"+s.name)}function rd(s){s.parent!==null&&H2(s.parent,s.name,s)}function H2(s,n,a){const r=k2(a),u=Mn(s.node.children,n);r&&u?(delete s.node.children[n],s.node.childCount--,rd(s)):!r&&!u&&(s.node.children[n]=a.node,s.node.childCount++,rd(s))}/**
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
 */const B2=/[\[\].#$\/\u0000-\u001F\u007F]/,Y2=/[\[\].#$\u0000-\u001F\u007F]/,Xc=10*1024*1024,L0=function(s){return typeof s=="string"&&s.length!==0&&!B2.test(s)},k0=function(s){return typeof s=="string"&&s.length!==0&&!Y2.test(s)},q2=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),k0(s)},I2=function(s,n,a,r){qd(pd(s,"value"),n,a)},qd=function(s,n,a){const r=a instanceof ke?new lS(a,s):a;if(n===void 0)throw new Error(s+"contains undefined "+ji(r));if(typeof n=="function")throw new Error(s+"contains a function "+ji(r)+" with contents = "+n.toString());if(zg(n))throw new Error(s+"contains "+n.toString()+" "+ji(r));if(typeof n=="string"&&n.length>Xc/3&&$r(n)>Xc)throw new Error(s+"contains a string greater than "+Xc+" utf8 bytes "+ji(r)+" ('"+n.substring(0,50)+"...')");if(n&&typeof n=="object"){let u=!1,d=!1;if(At(n,(f,m)=>{if(f===".value")u=!0;else if(f!==".priority"&&f!==".sv"&&(d=!0,!L0(f)))throw new Error(s+" contains an invalid key ("+f+") "+ji(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rS(r,f),qd(s,m,r),oS(r)}),u&&d)throw new Error(s+' contains ".value" child '+ji(r)+" in addition to actual children.")}},U0=function(s,n,a,r){if(!k0(a))throw new Error(pd(s,n)+'was an invalid path = "'+a+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},G2=function(s,n,a,r){a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),U0(s,n,a)},H0=function(s,n){if(pe(n)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},V2=function(s,n){const a=n.path.toString();if(typeof n.repoInfo.host!="string"||n.repoInfo.host.length===0||!L0(n.repoInfo.namespace)&&n.repoInfo.host.split(":")[0]!=="localhost"||a.length!==0&&!q2(a))throw new Error(pd(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class F2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Id(s,n){let a=null;for(let r=0;r<n.length;r++){const u=n[r],d=u.getPath();a!==null&&!xd(d,a.path)&&(s.eventLists_.push(a),a=null),a===null&&(a={events:[],path:d}),a.events.push(u)}a&&s.eventLists_.push(a)}function B0(s,n,a){Id(s,a),Y0(s,r=>xd(r,n))}function un(s,n,a){Id(s,a),Y0(s,r=>tn(r,n)||tn(n,r))}function Y0(s,n){s.recursionDepth_++;let a=!0;for(let r=0;r<s.eventLists_.length;r++){const u=s.eventLists_[r];if(u){const d=u.path;n(d)?(Q2(s.eventLists_[r]),s.eventLists_[r]=null):a=!1}}a&&(s.eventLists_=[]),s.recursionDepth_--}function Q2(s){for(let n=0;n<s.events.length;n++){const a=s.events[n];if(a!==null){s.events[n]=null;const r=a.getEventRunner();Ia&&mt("event: "+a.toString()),Bs(r)}}}/**
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
 */const X2="repo_interrupt",K2=25;class Z2{constructor(n,a,r,u){this.repoInfo_=n,this.forceRestClient_=a,this.authTokenProvider_=r,this.appCheckProvider_=u,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new F2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gr(),this.transactionQueueTree_=new Bd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function J2(s,n,a){if(s.stats_=vd(s.repoInfo_),s.forceRestClient_||OC())s.server_=new Ir(s.repoInfo_,(r,u,d,f)=>{eg(s,r,u,d,f)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>tg(s,!0),0);else{if(typeof a<"u"&&a!==null){if(typeof a!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(a)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}s.persistentConnection_=new Rn(s.repoInfo_,n,(r,u,d,f)=>{eg(s,r,u,d,f)},r=>{tg(s,r)},r=>{P2(s,r)},s.authTokenProvider_,s.appCheckProvider_,a),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(r=>{s.server_.refreshAuthToken(r)}),s.appCheckProvider_.addTokenChangeListener(r=>{s.server_.refreshAppCheckToken(r.token)}),s.statsReporter_=kC(s.repoInfo_,()=>new zS(s.stats_,s.server_)),s.infoData_=new RS,s.infoSyncTree_=new P_({startListening:(r,u,d,f)=>{let m=[];const g=s.infoData_.getNode(r._path);return g.isEmpty()||(m=cl(s.infoSyncTree_,r._path,g),setTimeout(()=>{f("ok")},0)),m},stopListening:()=>{}}),Vd(s,"connected",!1),s.serverSyncTree_=new P_({startListening:(r,u,d,f)=>(s.server_.listen(r,d,u,(m,g)=>{const p=f(m,g);un(s.eventQueue_,r._path,p)}),[]),stopListening:(r,u)=>{s.server_.unlisten(r,u)}})}function W2(s){const a=s.infoData_.getNode(new ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+a}function Gd(s){return D2({timestamp:W2(s)})}function eg(s,n,a,r,u){s.dataUpdateCount++;const d=new ke(n);a=s.interceptServerDataCallback_?s.interceptServerDataCallback_(n,a):a;let f=[];if(u)if(r){const g=kr(a,p=>ot(p));f=T2(s.serverSyncTree_,d,g,u)}else{const g=ot(a);f=N0(s.serverSyncTree_,d,g,u)}else if(r){const g=kr(a,p=>ot(p));f=S2(s.serverSyncTree_,d,g)}else{const g=ot(a);f=cl(s.serverSyncTree_,d,g)}let m=d;f.length>0&&(m=ro(s,d)),un(s.eventQueue_,m,f)}function tg(s,n){Vd(s,"connected",n),n===!1&&tE(s)}function P2(s,n){At(n,(a,r)=>{Vd(s,a,r)})}function Vd(s,n,a){const r=new ke("/.info/"+n),u=ot(a);s.infoData_.updateSnapshot(r,u);const d=cl(s.infoSyncTree_,r,u);un(s.eventQueue_,r,d)}function q0(s){return s.nextWriteId_++}function $2(s,n,a){const r=N2(s.serverSyncTree_,n);return r!=null?Promise.resolve(r):s.server_.get(n).then(u=>{const d=ot(u).withIndex(n._queryParams.getIndex());ld(s.serverSyncTree_,n,a,!0);let f;if(n._queryParams.loadsAllData())f=cl(s.serverSyncTree_,n._path,d);else{const m=nl(s.serverSyncTree_,n);f=N0(s.serverSyncTree_,n._path,d,m)}return un(s.eventQueue_,n._path,f),Wr(s.serverSyncTree_,n,a,null,!0),d},u=>(lo(s,"get for query "+nt(n)+" failed: "+u),Promise.reject(new Error(u))))}function eE(s,n,a,r,u){lo(s,"set",{path:n.toString(),value:a,priority:r});const d=Gd(s),f=ot(a,r),m=Dd(s.serverSyncTree_,n),g=M0(f,m,d),p=q0(s),C=T0(s.serverSyncTree_,n,g,p,!0);Id(s.eventQueue_,C),s.server_.put(n.toString(),f.val(!0),(E,z)=>{const U=E==="ok";U||Nt("set at "+n+" failed: "+E);const I=ki(s.serverSyncTree_,p,!U);un(s.eventQueue_,n,I),aE(s,u,E,z)});const v=Q0(s,n);ro(s,v),un(s.eventQueue_,v,[])}function tE(s){lo(s,"onDisconnectEvents");const n=Gd(s),a=Gr();td(s.onDisconnect_,Te(),(u,d)=>{const f=L2(u,d,s.serverSyncTree_,n);c0(a,u,f)});let r=[];td(a,Te(),(u,d)=>{r=r.concat(cl(s.serverSyncTree_,u,d));const f=Q0(s,u);ro(s,f)}),s.onDisconnect_=Gr(),un(s.eventQueue_,Te(),r)}function nE(s,n,a){let r;pe(n._path)===".info"?r=ld(s.infoSyncTree_,n,a):r=ld(s.serverSyncTree_,n,a),B0(s.eventQueue_,n._path,r)}function iE(s,n,a){let r;pe(n._path)===".info"?r=Wr(s.infoSyncTree_,n,a):r=Wr(s.serverSyncTree_,n,a),B0(s.eventQueue_,n._path,r)}function sE(s){s.persistentConnection_&&s.persistentConnection_.interrupt(X2)}function lo(s,...n){let a="";s.persistentConnection_&&(a=s.persistentConnection_.id+":"),mt(a,...n)}function aE(s,n,a,r){n&&Bs(()=>{if(a==="ok")n(null);else{const u=(a||"error").toUpperCase();let d=u;r&&(d+=": "+r);const f=new Error(d);f.code=u,n(f)}})}function I0(s,n,a){return Dd(s.serverSyncTree_,n,a)||ie.EMPTY_NODE}function Fd(s,n=s.transactionQueueTree_){if(n||oo(s,n),Ys(n)){const a=V0(s,n);Y(a.length>0,"Sending zero length transaction queue"),a.every(u=>u.status===0)&&lE(s,fl(n),a)}else j0(n)&&ao(n,a=>{Fd(s,a)})}function lE(s,n,a){const r=a.map(p=>p.currentWriteId),u=I0(s,n,r);let d=u;const f=u.hash();for(let p=0;p<a.length;p++){const C=a[p];Y(C.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),C.status=1,C.retryCount++;const v=yt(n,C.path);d=d.updateChild(v,C.currentOutputSnapshotRaw)}const m=d.val(!0),g=n;s.server_.put(g.toString(),m,p=>{lo(s,"transaction put response",{path:g.toString(),status:p});let C=[];if(p==="ok"){const v=[];for(let E=0;E<a.length;E++)a[E].status=2,C=C.concat(ki(s.serverSyncTree_,a[E].currentWriteId)),a[E].onComplete&&v.push(()=>a[E].onComplete(null,!0,a[E].currentOutputSnapshotResolved)),a[E].unwatcher();oo(s,Yd(s.transactionQueueTree_,n)),Fd(s,s.transactionQueueTree_),un(s.eventQueue_,n,C);for(let E=0;E<v.length;E++)Bs(v[E])}else{if(p==="datastale")for(let v=0;v<a.length;v++)a[v].status===3?a[v].status=4:a[v].status=0;else{Nt("transaction at "+g.toString()+" failed: "+p);for(let v=0;v<a.length;v++)a[v].status=4,a[v].abortReason=p}ro(s,n)}},f)}function ro(s,n){const a=G0(s,n),r=fl(a),u=V0(s,a);return rE(s,u,r),r}function rE(s,n,a){if(n.length===0)return;const r=[];let u=[];const f=n.filter(m=>m.status===0).map(m=>m.currentWriteId);for(let m=0;m<n.length;m++){const g=n[m],p=yt(a,g.path);let C=!1,v;if(Y(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),g.status===4)C=!0,v=g.abortReason,u=u.concat(ki(s.serverSyncTree_,g.currentWriteId,!0));else if(g.status===0)if(g.retryCount>=K2)C=!0,v="maxretry",u=u.concat(ki(s.serverSyncTree_,g.currentWriteId,!0));else{const E=I0(s,g.path,f);g.currentInputSnapshot=E;const z=n[m].update(E.val());if(z!==void 0){qd("transaction failed: Data returned ",z,g.path);let U=ot(z);typeof z=="object"&&z!=null&&Mn(z,".priority")||(U=U.updatePriority(E.getPriority()));const se=g.currentWriteId,le=Gd(s),ue=M0(U,E,le);g.currentOutputSnapshotRaw=U,g.currentOutputSnapshotResolved=ue,g.currentWriteId=q0(s),f.splice(f.indexOf(se),1),u=u.concat(T0(s.serverSyncTree_,g.path,ue,g.currentWriteId,g.applyLocally)),u=u.concat(ki(s.serverSyncTree_,se,!0))}else C=!0,v="nodata",u=u.concat(ki(s.serverSyncTree_,g.currentWriteId,!0))}un(s.eventQueue_,a,u),u=[],C&&(n[m].status=2,(function(E){setTimeout(E,Math.floor(0))})(n[m].unwatcher),n[m].onComplete&&(v==="nodata"?r.push(()=>n[m].onComplete(null,!1,n[m].currentInputSnapshot)):r.push(()=>n[m].onComplete(new Error(v),!1,null))))}oo(s,s.transactionQueueTree_);for(let m=0;m<r.length;m++)Bs(r[m]);Fd(s,s.transactionQueueTree_)}function G0(s,n){let a,r=s.transactionQueueTree_;for(a=pe(n);a!==null&&Ys(r)===void 0;)r=Yd(r,a),n=He(n),a=pe(n);return r}function V0(s,n){const a=[];return F0(s,n,a),a.sort((r,u)=>r.order-u.order),a}function F0(s,n,a){const r=Ys(n);if(r)for(let u=0;u<r.length;u++)a.push(r[u]);ao(n,u=>{F0(s,u,a)})}function oo(s,n){const a=Ys(n);if(a){let r=0;for(let u=0;u<a.length;u++)a[u].status!==2&&(a[r]=a[u],r++);a.length=r,D0(n,a.length>0?a:void 0)}ao(n,r=>{oo(s,r)})}function Q0(s,n){const a=fl(G0(s,n)),r=Yd(s.transactionQueueTree_,n);return U2(r,u=>{Kc(s,u)}),Kc(s,r),z0(r,u=>{Kc(s,u)}),a}function Kc(s,n){const a=Ys(n);if(a){const r=[];let u=[],d=-1;for(let f=0;f<a.length;f++)a[f].status===3||(a[f].status===1?(Y(d===f-1,"All SENT items should be at beginning of queue."),d=f,a[f].status=3,a[f].abortReason="set"):(Y(a[f].status===0,"Unexpected transaction status in abort"),a[f].unwatcher(),u=u.concat(ki(s.serverSyncTree_,a[f].currentWriteId,!0)),a[f].onComplete&&r.push(a[f].onComplete.bind(null,new Error("set"),!1,null))));d===-1?D0(n,void 0):a.length=d+1,un(s.eventQueue_,fl(n),u);for(let f=0;f<r.length;f++)Bs(r[f])}}/**
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
 */function oE(s){let n="";const a=s.split("/");for(let r=0;r<a.length;r++)if(a[r].length>0){let u=a[r];try{u=decodeURIComponent(u.replace(/\+/g," "))}catch{}n+="/"+u}return n}function uE(s){const n={};s.charAt(0)==="?"&&(s=s.substring(1));for(const a of s.split("&")){if(a.length===0)continue;const r=a.split("=");r.length===2?n[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Nt(`Invalid query segment '${a}' in query '${s}'`)}return n}const ng=function(s,n){const a=cE(s),r=a.namespace;a.domain==="firebase.com"&&Ui(a.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&a.domain!=="localhost"&&Ui("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),a.secure||xC();const u=a.scheme==="ws"||a.scheme==="wss";return{repoInfo:new jC(a.host,a.secure,r,u,n,"",r!==a.subdomain),path:new ke(a.pathString)}},cE=function(s){let n="",a="",r="",u="",d="",f=!0,m="https",g=443;if(typeof s=="string"){let p=s.indexOf("//");p>=0&&(m=s.substring(0,p-1),s=s.substring(p+2));let C=s.indexOf("/");C===-1&&(C=s.length);let v=s.indexOf("?");v===-1&&(v=s.length),n=s.substring(0,Math.min(C,v)),C<v&&(u=oE(s.substring(C,v)));const E=uE(s.substring(Math.min(s.length,v)));p=n.indexOf(":"),p>=0?(f=m==="https"||m==="wss",g=parseInt(n.substring(p+1),10)):p=n.length;const z=n.slice(0,p);if(z.toLowerCase()==="localhost")a="localhost";else if(z.split(".").length<=2)a=z;else{const U=n.indexOf(".");r=n.substring(0,U).toLowerCase(),a=n.substring(U+1),d=r}"ns"in E&&(d=E.ns)}return{host:n,port:g,domain:a,subdomain:r,secure:f,scheme:m,pathString:u,namespace:d}};/**
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
 */class dE{constructor(n,a,r,u){this.eventType=n,this.eventRegistration=a,this.snapshot=r,this.prevName=u}getPath(){const n=this.snapshot.ref;return this.eventType==="value"?n._path:n.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class fE{constructor(n,a,r){this.eventRegistration=n,this.error=a,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class X0{constructor(n,a){this.snapshotCallback=n,this.cancelCallback=a}onValue(n,a){this.snapshotCallback.call(null,n,a)}onCancel(n){return Y(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,n)}get hasCancelCallback(){return!!this.cancelCallback}matches(n){return this.snapshotCallback===n.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===n.snapshotCallback.userCallback&&this.snapshotCallback.context===n.snapshotCallback.context}}/**
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
 */class Qd{constructor(n,a,r,u){this._repo=n,this._path=a,this._queryParams=r,this._orderByCalled=u}get key(){return ve(this._path)?null:e0(this._path)}get ref(){return new Dn(this._repo,this._path)}get _queryIdentifier(){const n=q_(this._queryParams),a=gd(n);return a==="{}"?"default":a}get _queryObject(){return q_(this._queryParams)}isEqual(n){if(n=ll(n),!(n instanceof Qd))return!1;const a=this._repo===n._repo,r=xd(this._path,n._path),u=this._queryIdentifier===n._queryIdentifier;return a&&r&&u}toJSON(){return this.toString()}toString(){return this._repo.toString()+aS(this._path)}}class Dn extends Qd{constructor(n,a){super(n,a,new wd,!1)}get parent(){const n=n0(this._path);return n===null?null:new Dn(this._repo,n)}get root(){let n=this;for(;n.parent!==null;)n=n.parent;return n}}class il{constructor(n,a,r){this._node=n,this.ref=a,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(n){const a=new ke(n),r=od(this.ref,n);return new il(this._node.getChild(a),r,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(n){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,u)=>n(new il(u,od(this.ref,r),Fe)))}hasChild(n){const a=new ke(n);return!this._node.getChild(a).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $t(s,n){return s=ll(s),s._checkNotDeleted("ref"),n!==void 0?od(s._root,n):s._root}function od(s,n){return s=ll(s),pe(s._path)===null?G2("child","path",n):U0("child","path",n),new Dn(s._repo,it(s._path,n))}function ig(s){return H0("remove",s._path),zi(s,null)}function zi(s,n){s=ll(s),H0("set",s._path),I2("set",n,s._path);const a=new hd;return eE(s._repo,s._path,n,null,a.wrapCallback(()=>{})),a.promise}function sg(s){s=ll(s);const n=new X0(()=>{}),a=new uo(n);return $2(s._repo,s,a).then(r=>new il(r,new Dn(s._repo,s._path),s._queryParams.getIndex()))}class uo{constructor(n){this.callbackContext=n}respondsTo(n){return n==="value"}createEvent(n,a){const r=a._queryParams.getIndex();return new dE("value",this,new il(n.snapshotNode,new Dn(a._repo,a._path),r))}getEventRunner(n){return n.getEventType()==="cancel"?()=>this.callbackContext.onCancel(n.error):()=>this.callbackContext.onValue(n.snapshot,null)}createCancelEvent(n,a){return this.callbackContext.hasCancelCallback?new fE(this,n,a):null}matches(n){return n instanceof uo?!n.callbackContext||!this.callbackContext?!0:n.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function hE(s,n,a,r,u){const d=new X0(a,void 0),f=new uo(d);return nE(s._repo,s,f),()=>iE(s._repo,s,f)}function pE(s,n,a,r){return hE(s,"value",n)}m2(Dn);b2(Dn);/**
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
 */const mE="FIREBASE_DATABASE_EMULATOR_HOST",ud={};let _E=!1;function gE(s,n,a,r,u){let d=r||s.options.databaseURL;d===void 0&&(s.options.projectId||Ui("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",s.options.projectId),d=`${s.options.projectId}-default-rtdb.firebaseio.com`);let f=ng(d,u),m=f.repoInfo,g;typeof process<"u"&&S_&&(g=S_[mE]),g?(d=`http://${g}?ns=${m.namespace}`,f=ng(d,u),m=f.repoInfo):f.repoInfo.secure;const p=new DC(s.name,s.options,n);V2("Invalid Firebase Database URL",f),ve(f.path)||Ui("Database URL must point to the root of a Firebase Database (not including a child path).");const C=vE(m,s,p,new MC(s,a));return new bE(C,s)}function yE(s,n){const a=ud[n];(!a||a[s.key]!==s)&&Ui(`Database ${n}(${s.repoInfo_}) has already been deleted.`),sE(s),delete a[s.key]}function vE(s,n,a,r){let u=ud[n.name];u||(u={},ud[n.name]=u);let d=u[s.toURLString()];return d&&Ui("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),d=new Z2(s,_E,a,r),u[s.toURLString()]=d,d}class bE{constructor(n,a){this._repoInternal=n,this.app=a,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(J2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dn(this._repo,Te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(n){this._rootInternal===null&&Ui("Cannot call "+n+" on a deleted database.")}}/**
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
 */function xE(s){mC(sC),Hr(new Ur("database",(n,{instanceIdentifier:a})=>{const r=n.getProvider("app").getImmediate(),u=n.getProvider("auth-internal"),d=n.getProvider("app-check-internal");return gE(r,u,d,a)},"PUBLIC").setMultipleInstances(!0)),Os(E_,w_,s),Os(E_,w_,"esm2020")}Rn.prototype.simpleListen=function(s,n){this.sendRequest("q",{p:s},n)};Rn.prototype.echo=function(s,n){this.sendRequest("echo",{d:s},n)};xE();var CE="firebase",SE="12.6.0";/**
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
 */Os(CE,SE,"app");let et;console.warn("Firebase config missing. Using local-only mode."),et=null;const K0="python_tutoring_sessions",ag=()=>{const s="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let n="";for(let a=0;a<6;a++)n+=s.charAt(Math.floor(Math.random()*s.length));return n},EE=()=>"user_"+Math.random().toString(36).substring(2,11),Z0=k.createContext(void 0),J0=()=>{const s=k.useContext(Z0);if(!s)throw new Error("useSession must be used within a SessionProvider");return s},wE=()=>{const s=localStorage.getItem("python_tutoring_participant_id");if(s)return s;const n=EE();return localStorage.setItem("python_tutoring_participant_id",n),n},Xd=()=>{try{const s=localStorage.getItem(K0);return s?JSON.parse(s):{}}catch{return{}}},W0=s=>{try{localStorage.setItem(K0,JSON.stringify(s))}catch(n){console.error("[Session] Failed to save sessions:",n)}},Mi=s=>Xd()[s]||null,Di=(s,n)=>{const a=Xd();a[s]=n,W0(a)},TE=s=>{const n=Xd();delete n[s],W0(n)},NE=({children:s})=>{const[n,a]=k.useState(null),[r,u]=k.useState(!1),[d]=k.useState(wE),[f,m]=k.useState({}),[g,p]=k.useState(null),[C,v]=k.useState([]),[E,z]=k.useState({}),U=k.useRef(null),I=n!==null;k.useEffect(()=>{if(!n)return;if(et){const q=$t(et,`sessions/${n}`),X=pE(q,Se=>{const he=Se.val();he?(m(he.participants||{}),z(he.unlockedChapters||{}),r&&he.studentCode&&p(he.studentCode),r&&he.studentOutput&&v(he.studentOutput)):(a(null),u(!1),m({}),z({}))});return()=>X()}const K=()=>{const q=Mi(n);q?(m(q.participants||{}),z(q.unlockedChapters||{}),r&&q.studentCode&&p(q.studentCode),r&&q.studentOutput&&v(q.studentOutput)):r||(console.log("[Session] Session ended by teacher"),a(null),m({}),z({}))};return K(),U.current=window.setInterval(K,500),()=>{U.current&&clearInterval(U.current)}},[n,r]);const se=k.useCallback(async()=>{const K=ag(),q={createdAt:Date.now(),teacherId:d,participants:{[d]:{role:"teacher",joinedAt:Date.now()}},unlockedChapters:{"ch1-intro":!0,"ch2-variables":!0,"ch3-math":!0}};if(et)try{let X=K,Se=0;for(;Se<10&&(await sg($t(et,`sessions/${X}`))).exists();)X=ag(),Se++;return await zi($t(et,`sessions/${X}`),q),a(X),u(!0),z(q.unlockedChapters),console.log("[Session] Created Firebase session:",X),X}catch(X){console.error("[Session] Firebase error:",X)}return Di(K,q),a(K),u(!0),z(q.unlockedChapters),m(q.participants),console.log("[Session] Created local session:",K),K},[d]),le=k.useCallback(async K=>{const q=K.toUpperCase().trim();if(et)try{const Se=$t(et,`sessions/${q}`);if((await sg(Se)).exists())return await zi($t(et,`sessions/${q}/participants/${d}`),{role:"student",joinedAt:Date.now()}),a(q),u(!1),console.log("[Session] Joined Firebase session:",q),!0}catch(Se){console.error("[Session] Firebase error:",Se)}const X=Mi(q);return X?(X.participants[d]={role:"student",joinedAt:Date.now()},Di(q,X),a(q),u(!1),z(X.unlockedChapters),m(X.participants),console.log("[Session] Joined local session:",q),!0):(console.log("[Session] Session not found:",q),!1)},[d]),ue=k.useCallback(async()=>{if(n){if(et)try{r?await ig($t(et,`sessions/${n}`)):await ig($t(et,`sessions/${n}/participants/${d}`))}catch(K){console.error("[Session] Firebase error:",K)}if(r)TE(n);else{const K=Mi(n);K&&(delete K.participants[d],Di(n,K))}a(null),u(!1),m({}),p(null),v([]),z({}),console.log("[Session] Left session")}},[n,r,d]),de=k.useCallback((K,q,X)=>{if(!n||r)return;const Se={content:K,chapterId:q,challengeIndex:X,lastUpdated:Date.now()};if(et)zi($t(et,`sessions/${n}/studentCode`),Se).catch(console.error);else{const he=Mi(n);he&&(he.studentCode=Se,Di(n,he))}},[n,r]),ae=k.useCallback(K=>{if(!(!n||r))if(et)zi($t(et,`sessions/${n}/studentOutput`),K).catch(console.error);else{const q=Mi(n);q&&(q.studentOutput=K,Di(n,q))}},[n,r]),$=k.useCallback(K=>{if(!(!n||!r))if(console.log("[Session] Unlocking chapter:",K),et)zi($t(et,`sessions/${n}/unlockedChapters/${K}`),!0).catch(console.error);else{const q=Mi(n);q&&(q.unlockedChapters[K]=!0,Di(n,q),z({...q.unlockedChapters}))}},[n,r]),te=k.useCallback(K=>{if(!(!n||!r))if(console.log("[Session] Locking chapter:",K),et)zi($t(et,`sessions/${n}/unlockedChapters/${K}`),!1).catch(console.error);else{const q=Mi(n);q&&(q.unlockedChapters[K]=!1,Di(n,q),z({...q.unlockedChapters}))}},[n,r]),G={sessionCode:n,isInSession:I,isTeacher:r,participantId:d,participants:f,createSession:se,joinSession:le,leaveSession:ue,syncCode:de,syncOutput:ae,studentCode:g,studentOutput:C,sessionUnlockedChapters:E,unlockChapter:$,lockChapter:te};return y.jsx(Z0.Provider,{value:G,children:s})},AE=({chapter:s,currentChallengeIndex:n,onNextChallenge:a,onPrevChallenge:r,onSelectChallenge:u,isLocked:d})=>{const f=s.challenges[n],{runCode:m,isRunning:g,clearOutput:p,output:C}=dd(),{isInSession:v,isTeacher:E,syncCode:z,syncOutput:U,studentCode:I}=J0(),[se,le]=k.useState((f==null?void 0:f.starterCode)||""),[ue,de]=k.useState(!1),[ae,$]=k.useState(!1),te=k.useRef(null),G=n===s.challenges.length-1,K=G&&s.challenges.length>5;k.useEffect(()=>{f&&(le(f.starterCode||""),de(!1),$(!1),p())},[f==null?void 0:f.id,f==null?void 0:f.starterCode,p]),k.useEffect(()=>{v&&E&&I&&I.chapterId===s.id&&I.challengeIndex===n&&le(I.content)},[v,E,I,s.id,n]);const q=k.useCallback(Ze=>{const Ne=Ze||"";le(Ne),v&&!E&&(te.current&&clearTimeout(te.current),te.current=window.setTimeout(()=>{z(Ne,s.id,n)},500))},[v,E,z,s.id,n]);k.useEffect(()=>{v&&!E&&C.length>0&&U(C)},[v,E,C,U]);const X=k.useCallback(()=>{se.trim()&&m(se,f.testCases)},[se,m,f]);k.useEffect(()=>{const Ze=Ne=>{(Ne.ctrlKey||Ne.metaKey)&&Ne.key==="Enter"&&(Ne.preventDefault(),X())};return window.addEventListener("keydown",Ze),()=>window.removeEventListener("keydown",Ze)},[X]);const Se=()=>{f&&(le(f.starterCode||""),p())},he=v&&E;return y.jsxs("div",{className:"flex h-full w-full bg-[#1e1e1e] overflow-hidden",children:[y.jsxs("div",{className:"w-[380px] min-w-[320px] flex flex-col border-r border-[#3c3c3c] bg-[#252526] h-full",children:[y.jsxs("div",{className:"p-5 border-b border-[#3c3c3c] bg-gradient-to-r from-[#1e1e1e] to-[#252526]",children:[y.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[y.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg",children:y.jsx("span",{className:"text-white font-bold text-sm",children:n+1})}),y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsx("h2",{className:"text-base font-semibold text-white truncate",children:s.title}),y.jsx("p",{className:"text-xs text-slate-400",children:s.description})]})]}),y.jsxs("div",{className:"mt-3",children:[y.jsxs("div",{className:"flex justify-between text-xs text-slate-500 mb-1.5",children:[y.jsx("span",{children:"Progress"}),y.jsxs("span",{className:"text-blue-400",children:[n+1," / ",s.challenges.length]})]}),y.jsx("div",{className:"h-1.5 bg-[#3c3c3c] rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500 ease-out",style:{width:`${(n+1)/s.challenges.length*100}%`}})})]})]}),y.jsxs("div",{className:"flex-1 overflow-y-auto",children:[y.jsxs("div",{className:"p-5",children:[K&&y.jsxs("div",{className:"mb-4 p-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg",children:[y.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-semibold text-sm",children:[y.jsx("span",{children:"🏆"}),y.jsx("span",{children:"FINAL ASSESSMENT"})]}),y.jsx("p",{className:"text-xs text-amber-200/70 mt-1",children:"Complete this challenge to master the chapter!"})]}),y.jsx("h3",{className:"text-lg font-bold text-white mb-3 leading-tight",children:(f==null?void 0:f.title)||`Challenge ${f==null?void 0:f.number}`}),y.jsx("div",{className:"prose prose-invert prose-sm max-w-none",children:y.jsx("p",{className:"text-slate-300 leading-relaxed text-sm",children:f==null?void 0:f.description})}),(f==null?void 0:f.hint)&&y.jsxs("div",{className:"mt-5",children:[y.jsxs("button",{onClick:()=>de(!ue),className:"flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors",children:[y.jsx("span",{className:"text-lg",children:ue?"💡":"🤔"}),y.jsx("span",{children:ue?"Hide Hint":"Need a hint?"})]}),ue&&y.jsx("div",{className:"mt-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg animate-fade-in",children:y.jsx("p",{className:"text-amber-200/90 text-sm leading-relaxed",children:f.hint})})]}),(f==null?void 0:f.solutionCode)&&y.jsxs("div",{className:"mt-4",children:[y.jsxs("button",{onClick:()=>$(!ae),className:"flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors",children:[y.jsx("span",{className:"text-lg",children:ae?"🔒":"🔓"}),y.jsx("span",{children:ae?"Hide Solution":"Reveal Solution"})]}),ae&&y.jsx("div",{className:"mt-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg animate-fade-in",children:y.jsx("pre",{className:"text-purple-200/90 text-xs font-mono overflow-x-auto whitespace-pre-wrap",children:f.solutionCode})})]})]}),y.jsx("div",{className:"px-5 pb-5",children:y.jsxs("div",{className:"p-4 bg-[#1e1e1e] rounded-lg border border-[#3c3c3c]",children:[y.jsx("h4",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3",children:"Quick Tips"}),y.jsxs("ul",{className:"space-y-2 text-xs text-slate-400",children:[y.jsxs("li",{className:"flex items-start gap-2",children:[y.jsx("span",{className:"text-emerald-400 mt-0.5",children:"⌨️"}),y.jsxs("span",{children:["Press ",y.jsx("kbd",{className:"px-1.5 py-0.5 bg-[#3c3c3c] rounded text-white",children:"Ctrl"})," + ",y.jsx("kbd",{className:"px-1.5 py-0.5 bg-[#3c3c3c] rounded text-white",children:"Enter"})," to run"]})]}),y.jsxs("li",{className:"flex items-start gap-2",children:[y.jsx("span",{className:"text-blue-400 mt-0.5",children:"💾"}),y.jsx("span",{children:"Your code auto-saves in the editor"})]}),y.jsxs("li",{className:"flex items-start gap-2",children:[y.jsx("span",{className:"text-amber-400 mt-0.5",children:"🧪"}),y.jsxs("span",{children:["Test with ",y.jsx("code",{className:"text-amber-200",children:"print()"})," statements"]})]})]})]})})]}),y.jsx("div",{className:"p-4 border-t border-[#3c3c3c] bg-[#1e1e1e]",children:y.jsxs("div",{className:"flex items-center justify-between gap-3",children:[y.jsx("button",{onClick:r,disabled:n===0,className:"px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-[#3c3c3c] rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed",children:"← Previous"}),y.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto max-w-[140px] py-1",children:s.challenges.map((Ze,Ne)=>y.jsx("button",{onClick:()=>u(Ne),className:`w-2.5 h-2.5 rounded-full transition-all flex-shrink-0 ${Ne===n?"bg-blue-500 scale-125":Ne<n?"bg-emerald-500/60 hover:bg-emerald-400":"bg-[#3c3c3c] hover:bg-slate-500"}`,title:`Challenge ${Ne+1}`},Ne))}),y.jsx("button",{onClick:a,disabled:G,className:`px-4 py-2 text-sm font-medium rounded-lg transition-all ${G?"bg-emerald-600 text-white cursor-default":"text-slate-400 hover:text-white hover:bg-[#3c3c3c]"}`,children:G?"✓ Complete":"Next →"})]})})]}),y.jsxs("div",{className:"flex-1 flex flex-col h-full bg-[#1e1e1e]",children:[y.jsxs("div",{className:"h-12 bg-[#252526] border-b border-[#3c3c3c] flex items-center justify-between px-4",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] rounded-md border border-[#3c3c3c]",children:[y.jsx("span",{className:"text-yellow-500 text-sm",children:"🐍"}),y.jsx("span",{className:"text-xs text-slate-300 font-mono",children:"main.py"})]}),y.jsx("button",{onClick:Se,className:"text-xs text-slate-500 hover:text-slate-300 transition-colors",title:"Reset to starter code",children:"↺ Reset"})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[he&&y.jsx("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-purple-600/20 border border-purple-500/30 rounded-md",children:y.jsx("span",{className:"text-purple-400 text-xs font-medium",children:"👁️ Watching Student"})}),y.jsx("span",{className:"text-xs text-slate-500",children:g?"Executing...":he?"Read-Only":"Ready"}),y.jsx("button",{onClick:X,disabled:g,className:`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg ${g?"bg-slate-600 cursor-wait text-slate-300":"bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white"}`,children:g?y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"animate-spin",children:"⚙️"}),"Running..."]}):y.jsxs(y.Fragment,{children:[y.jsx("span",{children:"▶"}),"Run Code"]})})]})]}),y.jsx("div",{className:"flex-1 relative min-h-0",children:y.jsx(Gx,{height:"100%",defaultLanguage:"python",value:se,onChange:q,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:15,fontFamily:"'JetBrains Mono', 'Fira Code', Consolas, monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,padding:{top:16,bottom:16},cursorBlinking:"smooth",cursorSmoothCaretAnimation:"on",smoothScrolling:!0,renderLineHighlight:"all",bracketPairColorization:{enabled:!0},guides:{bracketPairs:!0,indentation:!0},readOnly:he}})}),y.jsx("div",{className:"h-[35%] min-h-[180px] border-t border-[#3c3c3c]",children:y.jsx(Fx,{})})]}),y.jsx("style",{children:`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `})]})},RE=({chapters:s,unlockedMap:n,onUnlock:a,onLock:r,onClose:u})=>{const d=(m,g)=>{g?r(m):a(m)},f=Object.values(n).filter(Boolean).length;return y.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]",children:y.jsxs("div",{className:"bg-[#1e1e1e] border border-[#3c3c3c] rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col",children:[y.jsxs("div",{className:"px-6 py-4 border-b border-[#3c3c3c] flex items-center justify-between bg-gradient-to-r from-indigo-600/20 to-purple-600/20",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:"🎓 Teacher Control Panel"}),y.jsxs("p",{className:"text-sm text-gray-400 mt-1",children:[f," of ",s.length," chapters unlocked"]})]}),y.jsx("button",{onClick:u,className:"text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg",children:y.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),y.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:y.jsx("div",{className:"space-y-2",children:s.map((m,g)=>{const p=n[m.id]||!1;return y.jsxs("div",{className:`flex items-center justify-between p-4 rounded-lg border transition-all ${p?"bg-emerald-900/20 border-emerald-700/50":"bg-[#2d2d2d] border-[#3c3c3c]"}`,children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${p?"bg-emerald-600 text-white":"bg-[#3c3c3c] text-gray-400"}`,children:g+1}),y.jsxs("div",{children:[y.jsx("h3",{className:"font-semibold text-white",children:m.title}),y.jsx("p",{className:"text-sm text-gray-400",children:m.description}),y.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[m.challenges.length," challenges"]})]})]}),y.jsx("button",{onClick:()=>d(m.id,p),className:`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${p?"bg-red-600/20 text-red-400 hover:bg-red-600/30 border border-red-600/50":"bg-emerald-600 text-white hover:bg-emerald-500"}`,children:p?y.jsxs(y.Fragment,{children:[y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Lock"]}):y.jsxs(y.Fragment,{children:[y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"})}),"Unlock"]})})]},m.id)})})}),y.jsx("div",{className:"px-6 py-4 border-t border-[#3c3c3c] bg-[#252526]",children:y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("p",{className:"text-sm text-gray-400",children:["💡 Tip: Press ",y.jsx("kbd",{className:"px-2 py-1 bg-[#3c3c3c] rounded text-xs",children:"Ctrl+Shift+T"})," to toggle teacher mode"]}),y.jsx("button",{onClick:u,className:"px-4 py-2 bg-[#3c3c3c] text-white rounded-lg hover:bg-[#4c4c4c] transition-colors",children:"Done"})]})})]})})},OE=({onSoloMode:s,onJoinSession:n,onCreateSession:a,isTeacherMode:r})=>{const[u,d]=k.useState("choose"),[f,m]=k.useState(""),[g,p]=k.useState(""),[C,v]=k.useState(""),[E,z]=k.useState(!1),U=async()=>{if(f.length!==6){v("Please enter a 6-character code");return}z(!0),v(""),await n(f.toUpperCase())||v("Session not found. Please check the code."),z(!1)},I=async()=>{z(!0),v("");try{const le=await a();p(le),d("create")}catch{v("Failed to create session")}z(!1)},se=()=>{navigator.clipboard.writeText(g)};return y.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] flex items-center justify-center z-50",children:y.jsxs("div",{className:"bg-[#1e1e1e] border border-[#3c3c3c] rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden",children:[y.jsx("div",{className:"p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-[#3c3c3c]",children:y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg",children:y.jsx("span",{className:"text-2xl",children:"🐍"})}),y.jsxs("div",{children:[y.jsx("h1",{className:"text-xl font-bold text-white",children:"Python Tutoring"}),y.jsx("p",{className:"text-sm text-slate-400",children:"Choose how you'd like to learn"})]})]})}),y.jsxs("div",{className:"p-6",children:[u==="choose"&&y.jsxs("div",{className:"space-y-4",children:[y.jsx("button",{onClick:s,className:"w-full p-5 bg-[#252526] hover:bg-[#2d2d2d] border border-[#3c3c3c] rounded-xl text-left transition-all group",children:y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform",children:y.jsx("span",{className:"text-2xl",children:"📚"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-semibold text-white",children:"Practice on Your Own"}),y.jsx("p",{className:"text-sm text-slate-400",children:"Learn at your own pace, offline"})]})]})}),y.jsx("button",{onClick:()=>d("join"),className:"w-full p-5 bg-[#252526] hover:bg-[#2d2d2d] border border-[#3c3c3c] rounded-xl text-left transition-all group",children:y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform",children:y.jsx("span",{className:"text-2xl",children:"🔗"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-semibold text-white",children:"Join a Session"}),y.jsx("p",{className:"text-sm text-slate-400",children:"Enter a code from your teacher"})]})]})}),r&&y.jsx("button",{onClick:I,disabled:E,className:"w-full p-5 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 hover:from-indigo-600/30 hover:to-purple-600/30 border border-indigo-500/30 rounded-xl text-left transition-all group",children:y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform",children:y.jsx("span",{className:"text-2xl",children:"🎓"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-semibold text-white",children:E?"Creating...":"Start a Teaching Session"}),y.jsx("p",{className:"text-sm text-slate-400",children:"Generate a code for students to join"})]})]})})]}),u==="join"&&y.jsxs("div",{className:"space-y-4",children:[y.jsx("button",{onClick:()=>{d("choose"),v("")},className:"text-slate-400 hover:text-white text-sm flex items-center gap-1 transition-colors",children:"← Back"}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-medium text-slate-300 mb-2",children:"Enter Session Code"}),y.jsx("input",{type:"text",value:f,onChange:le=>m(le.target.value.toUpperCase().slice(0,6)),placeholder:"ABC123",className:"w-full px-4 py-4 bg-[#252526] border border-[#3c3c3c] rounded-xl text-white text-2xl font-mono tracking-[0.5em] text-center focus:outline-none focus:border-blue-500 transition-colors uppercase",autoFocus:!0})]}),C&&y.jsx("div",{className:"p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm",children:C}),y.jsx("button",{onClick:U,disabled:E||f.length!==6,className:"w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:E?"Joining...":"Join Session"})]}),u==="create"&&y.jsxs("div",{className:"space-y-4 text-center",children:[y.jsx("div",{className:"w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto",children:y.jsx("span",{className:"text-3xl",children:"✓"})}),y.jsx("h3",{className:"text-lg font-semibold text-white",children:"Session Created!"}),y.jsx("p",{className:"text-sm text-slate-400",children:"Share this code with your student:"}),y.jsxs("div",{className:"relative",children:[y.jsx("div",{className:"px-6 py-5 bg-[#252526] border border-[#3c3c3c] rounded-xl text-3xl font-mono tracking-[0.5em] text-emerald-400 text-center",children:g}),y.jsx("button",{onClick:se,className:"absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-[#3c3c3c] rounded-lg transition-colors",title:"Copy to clipboard",children:y.jsx("span",{className:"text-lg",children:"📋"})})]}),y.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all",children:"Continue to Dashboard"})]})]}),y.jsx("div",{className:"px-6 py-4 bg-[#252526] border-t border-[#3c3c3c]",children:y.jsx("p",{className:"text-xs text-slate-500 text-center",children:"Mr Stewart Python Tutoring"})})]})})},ME=({sessionCode:s,isTeacher:n,participantCount:a,onLeave:r})=>{const u=()=>{navigator.clipboard.writeText(s)};return y.jsxs("div",{className:"h-8 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-between px-4 text-white text-sm z-50 shadow-lg",children:[y.jsx("div",{className:"flex items-center gap-4",children:n?y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"opacity-80",children:"🎓"}),y.jsx("span",{className:"font-medium",children:"Session:"}),y.jsx("button",{onClick:u,className:"px-2 py-0.5 bg-white/20 hover:bg-white/30 rounded font-mono tracking-wider transition-colors",title:"Click to copy",children:s})]}),y.jsx("div",{className:"h-4 w-px bg-white/30"}),y.jsxs("span",{className:"opacity-80",children:[a-1," student",a-1!==1?"s":""," connected"]})]}):y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"w-2 h-2 bg-emerald-400 rounded-full animate-pulse"}),y.jsx("span",{children:"Connected to session"})]}),y.jsx("div",{className:"h-4 w-px bg-white/30"}),y.jsxs("span",{className:"opacity-80",children:["Code: ",s]})]})}),y.jsx("button",{onClick:r,className:"px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition-colors",children:"Leave Session"})]})},Ns=[{id:"first_functions",title:"Your First Functions",description:"Function Syntax, Parameters & Returns",explanation:`
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
    }`,testCases:[{input:"calculate_invoice([{'quantity': 2, 'unit_price': 10}, {'quantity': 1, 'unit_price': 20, 'discount': 10}])",expected:"{'subtotal': 40.0, 'total_discount': 2.0, 'grand_total': 38.0}"},{input:"calculate_invoice([])",expected:"{'subtotal': 0, 'total_discount': 0, 'grand_total': 0}"},{input:"calculate_invoice([{'quantity': 1, 'unit_price': 100, 'discount': 50}])",expected:"{'subtotal': 100.0, 'total_discount': 50.0, 'grand_total': 50.0}"},{input:"calculate_invoice([{'quantity': 5, 'unit_price': 10}])",expected:"{'subtotal': 50.0, 'total_discount': 0, 'grand_total': 50.0}"},{input:"calculate_invoice([{'quantity': 3, 'unit_price': 33.33}])",expected:"{'subtotal': 99.99, 'total_discount': 0, 'grand_total': 99.99}"}]}]}],DE=({studentName:s="Student",onFinish:n})=>{const[a,r]=k.useState([]),u=k.useRef(null),{isReady:d,loadingMessage:f}=dd(),[m,g]=k.useState(0);return k.useEffect(()=>{const p=[{text:"BIOS DATE 01/01/24 15:23:42 VER 1.0.2",delay:100},{text:"CPU: QUANTUM-XYZ 64-BIT PROCESSOR",delay:200},{text:"CHECKING MEMORY: 64512K OK",delay:400},{text:"",delay:500},{text:"DETECTING PRIMARY MASTER ... QUANTUM DRIVE C:",delay:800},{text:"DETECTING PRIMARY SLAVE  ... NONE",delay:900},{text:"",delay:1e3},{text:"LOADING SYSTEM COMPONENTS:",delay:1200}];let C=[];return p.forEach((v,E)=>{const z=setTimeout(()=>{r(U=>[...U,v.text]),E===p.length-1&&g(1)},v.delay);C.push(z)}),()=>C.forEach(clearTimeout)},[]),k.useEffect(()=>{m===1&&r(p=>p[p.length-1]!==`> ${f}`?[...p,`> ${f}`]:p)},[f,m]),k.useEffect(()=>{d&&m>=1&&(async()=>(r(C=>[...C,"",`WELCOME ${s.toUpperCase()}`,"SYSTEM READY."]),await new Promise(C=>setTimeout(C,1500)),n()))()},[d,m,n,s]),k.useEffect(()=>{u.current&&(u.current.scrollTop=u.current.scrollHeight)},[a]),y.jsxs("div",{className:"fixed inset-0 bg-black text-green-500 font-mono p-10 flex flex-col items-start justify-start overflow-hidden z-[100]",children:[y.jsxs("div",{className:"w-full max-w-4xl mx-auto space-y-2",ref:u,children:[a.map((p,C)=>y.jsx("div",{className:"typewriter-line min-h-[1.5rem] break-words",children:p&&!p.startsWith("BIOS")&&!p.startsWith("CPU")&&!p.startsWith("CHECK")&&!p.startsWith("DETECT")&&!p.startsWith("LOAD")&&!p.startsWith("WELC")&&!p.startsWith("SYS")&&!p.startsWith(">")?y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"mr-2",children:">"}),p]}):p},C)),y.jsx("div",{className:"animate-pulse",children:"_"})]}),y.jsx("div",{className:"absolute bottom-10 right-10 text-xs text-green-700",children:"STEVEN STEWART TUTORING // SYSTEM BOOT // PYTHON 3.11.0"}),y.jsx("style",{children:`
        .typewriter-line {
          animation: fadeIn 0.1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `})]})},P0="python_tutoring_unlocked_chapters",jE=()=>Ns.reduce((s,n,a)=>({...s,[n.id]:a<3}),{}),lg=()=>{try{const s=localStorage.getItem(P0);if(s)return JSON.parse(s)}catch(s){console.error(s)}return jE()},rg=s=>{try{localStorage.setItem(P0,JSON.stringify(s))}catch(n){console.error(n)}},zE=()=>{const{isInSession:s,isTeacher:n,sessionCode:a,participants:r,sessionUnlockedChapters:u,createSession:d,joinSession:f,leaveSession:m,unlockChapter:g,lockChapter:p}=J0(),[C,v]=k.useState(Ns[0].id),[E,z]=k.useState(0),[U,I]=k.useState(!0),[se,le]=k.useState(!1),[ue,de]=k.useState(lg),[ae,$]=k.useState(!1),[te,G]=k.useState(!1),K=k.useMemo(()=>s?u:ue,[s,u,ue]),q=Ns.find(J=>J.id===C)||Ns[0],X=k.useMemo(()=>!K[q.id],[K,q.id]);k.useEffect(()=>{z(0)},[C]);const Se=J=>{if(s&&n)g(J);else{const oe={...ue,[J]:!0};de(oe),rg(oe)}},he=J=>{if(s&&n)p(J);else{const oe={...ue,[J]:!1};de(oe),rg(oe)}},Ze=J=>{!K[J]&&!ae||v(J)};k.useEffect(()=>{const J=oe=>{oe.ctrlKey&&oe.shiftKey&&oe.key==="T"&&$(b=>{const M=!b;return G(!!M),M})};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[]);const Ne=()=>{I(!1),le(!0)},P=()=>{le(!1)},R=async J=>{const oe=await f(J);return oe&&le(!1),oe},B=async()=>await d(),Z=async()=>{await m(),de(lg())};return U?y.jsx(DE,{studentName:"Python Learner",onFinish:Ne}):se?y.jsx(OE,{onSoloMode:P,onJoinSession:R,onCreateSession:B,isTeacherMode:ae}):y.jsxs("div",{className:"flex flex-col h-screen overflow-hidden bg-[#1e1e1e]",children:[s&&a&&y.jsx(ME,{sessionCode:a,isTeacher:n,participantCount:Object.keys(r).length,onLeave:Z}),ae&&!s&&y.jsxs("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold text-center py-1.5 shadow-lg flex items-center justify-center gap-4",children:[y.jsx("span",{children:"🎓 TEACHER MODE"}),y.jsx("button",{onClick:()=>le(!0),className:"px-3 py-1 bg-white/20 hover:bg-white/30 rounded-md transition-colors",children:"Start Session"}),y.jsx("button",{onClick:()=>G(!0),className:"px-3 py-1 bg-white/20 hover:bg-white/30 rounded-md transition-colors",children:"Control Panel"}),y.jsx("span",{className:"text-white/70",children:"(Ctrl+Shift+T to toggle)"})]}),y.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[y.jsx(zb,{chapters:Ns,currentChapterId:C,onSelectChapter:Ze,unlockedMap:K,enforceLocksForStudent:!ae}),y.jsx("main",{className:"flex-1 h-full overflow-hidden relative",children:y.jsx(AE,{chapter:q,currentChallengeIndex:E,onNextChallenge:()=>z(J=>Math.min(J+1,q.challenges.length-1)),onPrevChallenge:()=>z(J=>Math.max(J-1,0)),onSelectChallenge:z,isLocked:X})})]}),ae&&te&&y.jsx(RE,{chapters:Ns,unlockedMap:K,onUnlock:Se,onLock:he,onClose:()=>G(!1)})]})};function LE(){return y.jsx(NE,{children:y.jsx(Vx,{children:y.jsx(zE,{})})})}const $0=document.getElementById("root");if(!$0)throw new Error("Could not find root element to mount to");const kE=jb.createRoot($0);kE.render(y.jsx(si.StrictMode,{children:y.jsx(LE,{})}));
