(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Mg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zu={exports:{}},Go={},Bu={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function Qx(){if(om)return mt;om=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function M(U,se,De){this.props=U,this.context=se,this.refs=T,this.updater=De||S}M.prototype.isReactComponent={},M.prototype.setState=function(U,se){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,se,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=M.prototype;function I(U,se,De){this.props=U,this.context=se,this.refs=T,this.updater=De||S}var P=I.prototype=new y;P.constructor=I,E(P,M.prototype),P.isPureReactComponent=!0;var R=Array.isArray,H=Object.prototype.hasOwnProperty,O={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function G(U,se,De){var Z,he={},Ee=null,xe=null;if(se!=null)for(Z in se.ref!==void 0&&(xe=se.ref),se.key!==void 0&&(Ee=""+se.key),se)H.call(se,Z)&&!k.hasOwnProperty(Z)&&(he[Z]=se[Z]);var Ce=arguments.length-2;if(Ce===1)he.children=De;else if(1<Ce){for(var Xe=Array(Ce),Ue=0;Ue<Ce;Ue++)Xe[Ue]=arguments[Ue+2];he.children=Xe}if(U&&U.defaultProps)for(Z in Ce=U.defaultProps,Ce)he[Z]===void 0&&(he[Z]=Ce[Z]);return{$$typeof:s,type:U,key:Ee,ref:xe,props:he,_owner:O.current}}function N(U,se){return{$$typeof:s,type:U.type,key:se,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var se={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(De){return se[De]})}var re=/\/+/g;function J(U,se){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):se.toString(36)}function ue(U,se,De,Z,he){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var xe=!1;if(U===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(U.$$typeof){case s:case e:xe=!0}}if(xe)return xe=U,he=he(xe),U=Z===""?"."+J(xe,0):Z,R(he)?(De="",U!=null&&(De=U.replace(re,"$&/")+"/"),ue(he,se,De,"",function(Ue){return Ue})):he!=null&&(A(he)&&(he=N(he,De+(!he.key||xe&&xe.key===he.key?"":(""+he.key).replace(re,"$&/")+"/")+U)),se.push(he)),1;if(xe=0,Z=Z===""?".":Z+":",R(U))for(var Ce=0;Ce<U.length;Ce++){Ee=U[Ce];var Xe=Z+J(Ee,Ce);xe+=ue(Ee,se,De,Xe,he)}else if(Xe=_(U),typeof Xe=="function")for(U=Xe.call(U),Ce=0;!(Ee=U.next()).done;)Ee=Ee.value,Xe=Z+J(Ee,Ce++),xe+=ue(Ee,se,De,Xe,he);else if(Ee==="object")throw se=String(U),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return xe}function fe(U,se,De){if(U==null)return U;var Z=[],he=0;return ue(U,Z,"","",function(Ee){return se.call(De,Ee,he++)}),Z}function ae(U){if(U._status===-1){var se=U._result;se=se(),se.then(function(De){(U._status===0||U._status===-1)&&(U._status=1,U._result=De)},function(De){(U._status===0||U._status===-1)&&(U._status=2,U._result=De)}),U._status===-1&&(U._status=0,U._result=se)}if(U._status===1)return U._result.default;throw U._result}var de={current:null},V={transition:null},le={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:V,ReactCurrentOwner:O};function oe(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:fe,forEach:function(U,se,De){fe(U,function(){se.apply(this,arguments)},De)},count:function(U){var se=0;return fe(U,function(){se++}),se},toArray:function(U){return fe(U,function(se){return se})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=M,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=I,mt.StrictMode=r,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,mt.act=oe,mt.cloneElement=function(U,se,De){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=E({},U.props),he=U.key,Ee=U.ref,xe=U._owner;if(se!=null){if(se.ref!==void 0&&(Ee=se.ref,xe=O.current),se.key!==void 0&&(he=""+se.key),U.type&&U.type.defaultProps)var Ce=U.type.defaultProps;for(Xe in se)H.call(se,Xe)&&!k.hasOwnProperty(Xe)&&(Z[Xe]=se[Xe]===void 0&&Ce!==void 0?Ce[Xe]:se[Xe])}var Xe=arguments.length-2;if(Xe===1)Z.children=De;else if(1<Xe){Ce=Array(Xe);for(var Ue=0;Ue<Xe;Ue++)Ce[Ue]=arguments[Ue+2];Z.children=Ce}return{$$typeof:s,type:U.type,key:he,ref:Ee,props:Z,_owner:xe}},mt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},mt.createElement=G,mt.createFactory=function(U){var se=G.bind(null,U);return se.type=U,se},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:d,render:U}},mt.isValidElement=A,mt.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:ae}},mt.memo=function(U,se){return{$$typeof:p,type:U,compare:se===void 0?null:se}},mt.startTransition=function(U){var se=V.transition;V.transition={};try{U()}finally{V.transition=se}},mt.unstable_act=oe,mt.useCallback=function(U,se){return de.current.useCallback(U,se)},mt.useContext=function(U){return de.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return de.current.useDeferredValue(U)},mt.useEffect=function(U,se){return de.current.useEffect(U,se)},mt.useId=function(){return de.current.useId()},mt.useImperativeHandle=function(U,se,De){return de.current.useImperativeHandle(U,se,De)},mt.useInsertionEffect=function(U,se){return de.current.useInsertionEffect(U,se)},mt.useLayoutEffect=function(U,se){return de.current.useLayoutEffect(U,se)},mt.useMemo=function(U,se){return de.current.useMemo(U,se)},mt.useReducer=function(U,se,De){return de.current.useReducer(U,se,De)},mt.useRef=function(U){return de.current.useRef(U)},mt.useState=function(U){return de.current.useState(U)},mt.useSyncExternalStore=function(U,se,De){return de.current.useSyncExternalStore(U,se,De)},mt.useTransition=function(){return de.current.useTransition()},mt.version="18.3.1",mt}var am;function xf(){return am||(am=1,Bu.exports=Qx()),Bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function ev(){if(lm)return Go;lm=1;var s=xf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var m,g={},_=null,S=null;p!==void 0&&(_=""+p),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(m in h)r.call(h,m)&&!l.hasOwnProperty(m)&&(g[m]=h[m]);if(d&&d.defaultProps)for(m in h=d.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:d,key:_,ref:S,props:g,_owner:o.current}}return Go.Fragment=t,Go.jsx=u,Go.jsxs=u,Go}var cm;function tv(){return cm||(cm=1,zu.exports=ev()),zu.exports}var x=tv(),tt=xf();const nv=Mg(tt);var xl={},Vu={exports:{}},On={},Hu={exports:{}},Gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function iv(){return um||(um=1,(function(s){function e(V,le){var oe=V.length;V.push(le);e:for(;0<oe;){var U=oe-1>>>1,se=V[U];if(0<o(se,le))V[U]=le,V[oe]=se,oe=U;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var le=V[0],oe=V.pop();if(oe!==le){V[0]=oe;e:for(var U=0,se=V.length,De=se>>>1;U<De;){var Z=2*(U+1)-1,he=V[Z],Ee=Z+1,xe=V[Ee];if(0>o(he,oe))Ee<se&&0>o(xe,he)?(V[U]=xe,V[Ee]=oe,U=Ee):(V[U]=he,V[Z]=oe,U=Z);else if(Ee<se&&0>o(xe,oe))V[U]=xe,V[Ee]=oe,U=Ee;else break e}}return le}function o(V,le){var oe=V.sortIndex-le.sortIndex;return oe!==0?oe:V.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],p=[],m=1,g=null,_=3,S=!1,E=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var le=t(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=V)r(p),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(p)}}function R(V){if(T=!1,P(V),!E)if(t(h)!==null)E=!0,ae(H);else{var le=t(p);le!==null&&de(R,le.startTime-V)}}function H(V,le){E=!1,T&&(T=!1,y(G),G=-1),S=!0;var oe=_;try{for(P(le),g=t(h);g!==null&&(!(g.expirationTime>le)||V&&!z());){var U=g.callback;if(typeof U=="function"){g.callback=null,_=g.priorityLevel;var se=U(g.expirationTime<=le);le=s.unstable_now(),typeof se=="function"?g.callback=se:g===t(h)&&r(h),P(le)}else r(h);g=t(h)}if(g!==null)var De=!0;else{var Z=t(p);Z!==null&&de(R,Z.startTime-le),De=!1}return De}finally{g=null,_=oe,S=!1}}var O=!1,k=null,G=-1,N=5,A=-1;function z(){return!(s.unstable_now()-A<N)}function re(){if(k!==null){var V=s.unstable_now();A=V;var le=!0;try{le=k(!0,V)}finally{le?J():(O=!1,k=null)}}else O=!1}var J;if(typeof I=="function")J=function(){I(re)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=re,J=function(){fe.postMessage(null)}}else J=function(){M(re,0)};function ae(V){k=V,O||(O=!0,J())}function de(V,le){G=M(function(){V(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ae(H))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(V){switch(_){case 1:case 2:case 3:var le=3;break;default:le=_}var oe=_;_=le;try{return V()}finally{_=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,le){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var oe=_;_=V;try{return le()}finally{_=oe}},s.unstable_scheduleCallback=function(V,le,oe){var U=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?U+oe:U):oe=U,V){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=oe+se,V={id:m++,callback:le,priorityLevel:V,startTime:oe,expirationTime:se,sortIndex:-1},oe>U?(V.sortIndex=oe,e(p,V),t(h)===null&&V===t(p)&&(T?(y(G),G=-1):T=!0,de(R,oe-U))):(V.sortIndex=se,e(h,V),E||S||(E=!0,ae(H))),V},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(V){var le=_;return function(){var oe=_;_=le;try{return V.apply(this,arguments)}finally{_=oe}}}})(Gu)),Gu}var dm;function rv(){return dm||(dm=1,Hu.exports=iv()),Hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function sv(){if(fm)return On;fm=1;var s=xf(),e=rv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return h.call(g,n)?!0:h.call(m,n)?!1:p.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,c,f,v,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=w}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){M[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];M[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){M[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){M[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){M[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){M[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){M[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){M[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){M[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,I);M[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,I);M[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,I);M[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){M[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),M.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){M[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var f=M.hasOwnProperty(i)?M[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,c)&&(a=null),c||f===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),O=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),z=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),V=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,U;function se(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var De=!1;function Z(n,i){if(!n||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var c=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){c=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){c=ie}n()}}catch(ie){if(ie&&c&&typeof ie.stack=="string"){for(var f=ie.stack.split(`
`),v=c.stack.split(`
`),w=f.length-1,D=v.length-1;1<=w&&0<=D&&f[w]!==v[D];)D--;for(;1<=w&&0<=D;w--,D--)if(f[w]!==v[D]){if(w!==1||D!==1)do if(w--,D--,0>D||f[w]!==v[D]){var B=`
`+f[w].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=w&&0<=D);break}}}finally{De=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function he(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case O:return"Portal";case N:return"Profiler";case G:return"StrictMode";case J:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case re:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Xe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ue(n){var i=Xe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,v.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ct(n){n._valueTracker||(n._valueTracker=Ue(n))}function Tt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Xe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function at(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function F(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ht(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ce(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function st(n,i){ut(n,i);var a=Ce(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?vt(n,i.type,a):i.hasOwnProperty("defaultValue")&&vt(n,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function qe(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function vt(n,i,a){(i!=="number"||at(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Be=Array.isArray;function L(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ce(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function b(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Be(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ce(a)}}function pe(n,i){var a=Ce(i.value),c=Ce(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ge(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function te(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?te(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ye,be=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ye=ye||document.createElement("div"),ye.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ye.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ze(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function He(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function nt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=He(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var ze=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function lt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,ce=null,me=null;function Ie(n){if(n=Co(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=La(i),Re(n.stateNode,n.type,i))}}function Le(n){ce?me?me.push(n):me=[n]:ce=n}function ct(){if(ce){var n=ce,i=me;if(me=ce=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function Ut(n,i){return n(i)}function Qt(){}var Mt=!1;function Pn(n,i,a){if(Mt)return n(i,a);Mt=!0;try{return Ut(n,i,a)}finally{Mt=!1,(ce!==null||me!==null)&&(Qt(),ct())}}function wn(n,i){var a=n.stateNode;if(a===null)return null;var c=La(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var as=!1;if(d)try{var $i={};Object.defineProperty($i,"passive",{get:function(){as=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{as=!1}function Ci(n,i,a,c,f,v,w,D,B){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(a,ie)}catch(Se){this.onError(Se)}}var Ri=!1,Rr=null,Nr=!1,Ki=null,ua={onError:function(n){Ri=!0,Rr=n}};function ls(n,i,a,c,f,v,w,D,B){Ri=!1,Rr=null,Ci.apply(ua,arguments)}function da(n,i,a,c,f,v,w,D,B){if(ls.apply(this,arguments),Ri){if(Ri){var ie=Rr;Ri=!1,Rr=null}else throw Error(t(198));Nr||(Nr=!0,Ki=ie)}}function xi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function fa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ha(n){if(xi(n)!==n)throw Error(t(188))}function lc(n){var i=n.alternate;if(!i){if(i=xi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var v=f.alternate;if(v===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===v.child){for(v=f.child;v;){if(v===a)return ha(f),n;if(v===c)return ha(f),i;v=v.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=v;else{for(var w=!1,D=f.child;D;){if(D===a){w=!0,a=f,c=v;break}if(D===c){w=!0,c=f,a=v;break}D=D.sibling}if(!w){for(D=v.child;D;){if(D===a){w=!0,a=v,c=f;break}if(D===c){w=!0,c=v,a=f;break}D=D.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function pa(n){return n=lc(n),n!==null?ma(n):null}function ma(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ma(n);if(i!==null)return i;n=n.sibling}return null}var ga=e.unstable_scheduleCallback,C=e.unstable_cancelCallback,q=e.unstable_shouldYield,ne=e.unstable_requestPaint,K=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Te=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,rt=e.unstable_IdlePriority,it=null,We=null;function _t(n){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(it,n,void 0,(n.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:St,Xt=Math.log,zt=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(Xt(n)/zt|0)|0}var Je=64,qt=4194304;function xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mn(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,v=n.pingedLanes,w=a&268435455;if(w!==0){var D=w&~f;D!==0?c=xt(D):(v&=w,v!==0&&(c=xt(v)))}else w=a&~f,w!==0?c=xt(w):v!==0&&(c=xt(v));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,v=i&-i,f>=v||f===16&&(v&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-dt(i),f=1<<a,c|=n[a],i&=~f;return c}function Ji(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,v=n.pendingLanes;0<v;){var w=31-dt(v),D=1<<w,B=f[w];B===-1?((D&a)===0||(D&c)!==0)&&(f[w]=Ji(D,i)):B<=i&&(n.expiredLanes|=D),v&=~D}}function Ni(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Lt(){var n=Je;return Je<<=1,(Je&4194240)===0&&(Je=64),n}function gn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function sn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-dt(i),n[i]=a}function dn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-dt(a),v=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~v}}function on(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-dt(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var Et=0;function vi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var zf,cc,Bf,Vf,Hf,uc=!1,xa=[],Zi=null,Qi=null,er=null,fo=new Map,ho=new Map,tr=[],S0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gf(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":fo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(i.pointerId)}}function po(n,i,a,c,f,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:v,targetContainers:[f]},i!==null&&(i=Co(i),i!==null&&cc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function M0(n,i,a,c,f){switch(i){case"focusin":return Zi=po(Zi,n,i,a,c,f),!0;case"dragenter":return Qi=po(Qi,n,i,a,c,f),!0;case"mouseover":return er=po(er,n,i,a,c,f),!0;case"pointerover":var v=f.pointerId;return fo.set(v,po(fo.get(v)||null,n,i,a,c,f)),!0;case"gotpointercapture":return v=f.pointerId,ho.set(v,po(ho.get(v)||null,n,i,a,c,f)),!0}return!1}function jf(n){var i=Pr(n.target);if(i!==null){var a=xi(i);if(a!==null){if(i=a.tag,i===13){if(i=fa(a),i!==null){n.blockedOn=i,Hf(n.priority,function(){Bf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function va(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=fc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Rt=c,a.target.dispatchEvent(c),Rt=null}else return i=Co(a),i!==null&&cc(i),n.blockedOn=a,!1;i.shift()}return!0}function Wf(n,i,a){va(n)&&a.delete(i)}function E0(){uc=!1,Zi!==null&&va(Zi)&&(Zi=null),Qi!==null&&va(Qi)&&(Qi=null),er!==null&&va(er)&&(er=null),fo.forEach(Wf),ho.forEach(Wf)}function mo(n,i){n.blockedOn===i&&(n.blockedOn=null,uc||(uc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,E0)))}function go(n){function i(f){return mo(f,n)}if(0<xa.length){mo(xa[0],n);for(var a=1;a<xa.length;a++){var c=xa[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Zi!==null&&mo(Zi,n),Qi!==null&&mo(Qi,n),er!==null&&mo(er,n),fo.forEach(i),ho.forEach(i),a=0;a<tr.length;a++)c=tr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tr.length&&(a=tr[0],a.blockedOn===null);)jf(a),a.blockedOn===null&&tr.shift()}var cs=R.ReactCurrentBatchConfig,_a=!0;function w0(n,i,a,c){var f=Et,v=cs.transition;cs.transition=null;try{Et=1,dc(n,i,a,c)}finally{Et=f,cs.transition=v}}function T0(n,i,a,c){var f=Et,v=cs.transition;cs.transition=null;try{Et=4,dc(n,i,a,c)}finally{Et=f,cs.transition=v}}function dc(n,i,a,c){if(_a){var f=fc(n,i,a,c);if(f===null)Rc(n,i,c,ya,a),Gf(n,c);else if(M0(f,n,i,a,c))c.stopPropagation();else if(Gf(n,c),i&4&&-1<S0.indexOf(n)){for(;f!==null;){var v=Co(f);if(v!==null&&zf(v),v=fc(n,i,a,c),v===null&&Rc(n,i,c,ya,a),v===f)break;f=v}f!==null&&c.stopPropagation()}else Rc(n,i,c,null,a)}}var ya=null;function fc(n,i,a,c){if(ya=null,n=W(c),n=Pr(n),n!==null)if(i=xi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=fa(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ya=n,null}function Xf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Te:return 1;case Ne:return 4;case Oe:case Ge:return 16;case rt:return 536870912;default:return 16}default:return 16}}var nr=null,hc=null,Sa=null;function qf(){if(Sa)return Sa;var n,i=hc,a=i.length,c,f="value"in nr?nr.value:nr.textContent,v=f.length;for(n=0;n<a&&i[n]===f[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===f[v-c];c++);return Sa=f.slice(n,1<c?1-c:void 0)}function Ma(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ea(){return!0}function Yf(){return!1}function Gn(n){function i(a,c,f,v,w){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=v,this.target=w,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(a=n[D],this[D]=a?a(v):v[D]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ea:Yf,this.isPropagationStopped=Yf,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=Gn(us),xo=oe({},us,{view:0,detail:0}),b0=Gn(xo),mc,gc,vo,wa=oe({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vo&&(vo&&n.type==="mousemove"?(mc=n.screenX-vo.screenX,gc=n.screenY-vo.screenY):gc=mc=0,vo=n),mc)},movementY:function(n){return"movementY"in n?n.movementY:gc}}),$f=Gn(wa),A0=oe({},wa,{dataTransfer:0}),C0=Gn(A0),R0=oe({},xo,{relatedTarget:0}),xc=Gn(R0),N0=oe({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),P0=Gn(N0),L0=oe({},us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),I0=Gn(L0),D0=oe({},us,{data:0}),Kf=Gn(D0),U0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=O0[n])?!!i[n]:!1}function vc(){return F0}var z0=oe({},xo,{key:function(n){if(n.key){var i=U0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?k0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(n){return n.type==="keypress"?Ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),B0=Gn(z0),V0=oe({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=Gn(V0),H0=oe({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),G0=Gn(H0),j0=oe({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),W0=Gn(j0),X0=oe({},wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),q0=Gn(X0),Y0=[9,13,27,32],_c=d&&"CompositionEvent"in window,_o=null;d&&"documentMode"in document&&(_o=document.documentMode);var $0=d&&"TextEvent"in window&&!_o,Zf=d&&(!_c||_o&&8<_o&&11>=_o),Qf=" ",eh=!1;function th(n,i){switch(n){case"keyup":return Y0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function K0(n,i){switch(n){case"compositionend":return nh(i);case"keypress":return i.which!==32?null:(eh=!0,Qf);case"textInput":return n=i.data,n===Qf&&eh?null:n;default:return null}}function J0(n,i){if(ds)return n==="compositionend"||!_c&&th(n,i)?(n=qf(),Sa=hc=nr=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Zf&&i.locale!=="ko"?null:i.data;default:return null}}var Z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ih(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Z0[n.type]:i==="textarea"}function rh(n,i,a,c){Le(c),i=Ra(i,"onChange"),0<i.length&&(a=new pc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var yo=null,So=null;function Q0(n){Mh(n,0)}function Ta(n){var i=gs(n);if(Tt(i))return n}function ex(n,i){if(n==="change")return i}var sh=!1;if(d){var yc;if(d){var Sc="oninput"in document;if(!Sc){var oh=document.createElement("div");oh.setAttribute("oninput","return;"),Sc=typeof oh.oninput=="function"}yc=Sc}else yc=!1;sh=yc&&(!document.documentMode||9<document.documentMode)}function ah(){yo&&(yo.detachEvent("onpropertychange",lh),So=yo=null)}function lh(n){if(n.propertyName==="value"&&Ta(So)){var i=[];rh(i,So,n,W(n)),Pn(Q0,i)}}function tx(n,i,a){n==="focusin"?(ah(),yo=i,So=a,yo.attachEvent("onpropertychange",lh)):n==="focusout"&&ah()}function nx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ta(So)}function ix(n,i){if(n==="click")return Ta(i)}function rx(n,i){if(n==="input"||n==="change")return Ta(i)}function sx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ii=typeof Object.is=="function"?Object.is:sx;function Mo(n,i){if(ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!ii(n[f],i[f]))return!1}return!0}function ch(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function uh(n,i){var a=ch(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ch(a)}}function dh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?dh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function fh(){for(var n=window,i=at();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=at(n.document)}return i}function Mc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function ox(n){var i=fh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&dh(a.ownerDocument.documentElement,a)){if(c!==null&&Mc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,v=Math.min(c.start,f);c=c.end===void 0?v:Math.min(c.end,f),!n.extend&&v>c&&(f=c,c=v,v=f),f=uh(a,v);var w=uh(a,c);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),v>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ax=d&&"documentMode"in document&&11>=document.documentMode,fs=null,Ec=null,Eo=null,wc=!1;function hh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||fs==null||fs!==at(c)||(c=fs,"selectionStart"in c&&Mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Eo&&Mo(Eo,c)||(Eo=c,c=Ra(Ec,"onSelect"),0<c.length&&(i=new pc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=fs)))}function ba(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var hs={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Tc={},ph={};d&&(ph=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Aa(n){if(Tc[n])return Tc[n];if(!hs[n])return n;var i=hs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ph)return Tc[n]=i[a];return n}var mh=Aa("animationend"),gh=Aa("animationiteration"),xh=Aa("animationstart"),vh=Aa("transitionend"),_h=new Map,yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(n,i){_h.set(n,i),l(i,[n])}for(var bc=0;bc<yh.length;bc++){var Ac=yh[bc],lx=Ac.toLowerCase(),cx=Ac[0].toUpperCase()+Ac.slice(1);ir(lx,"on"+cx)}ir(mh,"onAnimationEnd"),ir(gh,"onAnimationIteration"),ir(xh,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(vh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Sh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,da(c,i,void 0,n),n.currentTarget=null}function Mh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var v=void 0;if(i)for(var w=c.length-1;0<=w;w--){var D=c[w],B=D.instance,ie=D.currentTarget;if(D=D.listener,B!==v&&f.isPropagationStopped())break e;Sh(f,D,ie),v=B}else for(w=0;w<c.length;w++){if(D=c[w],B=D.instance,ie=D.currentTarget,D=D.listener,B!==v&&f.isPropagationStopped())break e;Sh(f,D,ie),v=B}}}if(Nr)throw n=Ki,Nr=!1,Ki=null,n}function kt(n,i){var a=i[Uc];a===void 0&&(a=i[Uc]=new Set);var c=n+"__bubble";a.has(c)||(Eh(i,n,2,!1),a.add(c))}function Cc(n,i,a){var c=0;i&&(c|=4),Eh(a,n,c,i)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function To(n){if(!n[Ca]){n[Ca]=!0,r.forEach(function(a){a!=="selectionchange"&&(ux.has(a)||Cc(a,!1,n),Cc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ca]||(i[Ca]=!0,Cc("selectionchange",!1,i))}}function Eh(n,i,a,c){switch(Xf(i)){case 1:var f=w0;break;case 4:f=T0;break;default:f=dc}a=f.bind(null,i,a,n),f=void 0,!as||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Rc(n,i,a,c,f){var v=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var D=c.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;w=w.return}for(;D!==null;){if(w=Pr(D),w===null)return;if(B=w.tag,B===5||B===6){c=v=w;continue e}D=D.parentNode}}c=c.return}Pn(function(){var ie=v,Se=W(a),we=[];e:{var _e=_h.get(n);if(_e!==void 0){var Fe=pc,je=n;switch(n){case"keypress":if(Ma(a)===0)break e;case"keydown":case"keyup":Fe=B0;break;case"focusin":je="focus",Fe=xc;break;case"focusout":je="blur",Fe=xc;break;case"beforeblur":case"afterblur":Fe=xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=G0;break;case mh:case gh:case xh:Fe=P0;break;case vh:Fe=W0;break;case"scroll":Fe=b0;break;case"wheel":Fe=q0;break;case"copy":case"cut":case"paste":Fe=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Jf}var Ye=(i&4)!==0,Kt=!Ye&&n==="scroll",$=Ye?_e!==null?_e+"Capture":null:_e;Ye=[];for(var j=ie,ee;j!==null;){ee=j;var Ae=ee.stateNode;if(ee.tag===5&&Ae!==null&&(ee=Ae,$!==null&&(Ae=wn(j,$),Ae!=null&&Ye.push(bo(j,Ae,ee)))),Kt)break;j=j.return}0<Ye.length&&(_e=new Fe(_e,je,null,a,Se),we.push({event:_e,listeners:Ye}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",_e&&a!==Rt&&(je=a.relatedTarget||a.fromElement)&&(Pr(je)||je[Pi]))break e;if((Fe||_e)&&(_e=Se.window===Se?Se:(_e=Se.ownerDocument)?_e.defaultView||_e.parentWindow:window,Fe?(je=a.relatedTarget||a.toElement,Fe=ie,je=je?Pr(je):null,je!==null&&(Kt=xi(je),je!==Kt||je.tag!==5&&je.tag!==6)&&(je=null)):(Fe=null,je=ie),Fe!==je)){if(Ye=$f,Ae="onMouseLeave",$="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Jf,Ae="onPointerLeave",$="onPointerEnter",j="pointer"),Kt=Fe==null?_e:gs(Fe),ee=je==null?_e:gs(je),_e=new Ye(Ae,j+"leave",Fe,a,Se),_e.target=Kt,_e.relatedTarget=ee,Ae=null,Pr(Se)===ie&&(Ye=new Ye($,j+"enter",je,a,Se),Ye.target=ee,Ye.relatedTarget=Kt,Ae=Ye),Kt=Ae,Fe&&je)t:{for(Ye=Fe,$=je,j=0,ee=Ye;ee;ee=ps(ee))j++;for(ee=0,Ae=$;Ae;Ae=ps(Ae))ee++;for(;0<j-ee;)Ye=ps(Ye),j--;for(;0<ee-j;)$=ps($),ee--;for(;j--;){if(Ye===$||$!==null&&Ye===$.alternate)break t;Ye=ps(Ye),$=ps($)}Ye=null}else Ye=null;Fe!==null&&wh(we,_e,Fe,Ye,!1),je!==null&&Kt!==null&&wh(we,Kt,je,Ye,!0)}}e:{if(_e=ie?gs(ie):window,Fe=_e.nodeName&&_e.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&_e.type==="file")var $e=ex;else if(ih(_e))if(sh)$e=rx;else{$e=nx;var Qe=tx}else(Fe=_e.nodeName)&&Fe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&($e=ix);if($e&&($e=$e(n,ie))){rh(we,$e,a,Se);break e}Qe&&Qe(n,_e,ie),n==="focusout"&&(Qe=_e._wrapperState)&&Qe.controlled&&_e.type==="number"&&vt(_e,"number",_e.value)}switch(Qe=ie?gs(ie):window,n){case"focusin":(ih(Qe)||Qe.contentEditable==="true")&&(fs=Qe,Ec=ie,Eo=null);break;case"focusout":Eo=Ec=fs=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,hh(we,a,Se);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":hh(we,a,Se)}var et;if(_c)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else ds?th(n,a)&&(ot="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(Zf&&a.locale!=="ko"&&(ds||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ds&&(et=qf()):(nr=Se,hc="value"in nr?nr.value:nr.textContent,ds=!0)),Qe=Ra(ie,ot),0<Qe.length&&(ot=new Kf(ot,n,null,a,Se),we.push({event:ot,listeners:Qe}),et?ot.data=et:(et=nh(a),et!==null&&(ot.data=et)))),(et=$0?K0(n,a):J0(n,a))&&(ie=Ra(ie,"onBeforeInput"),0<ie.length&&(Se=new Kf("onBeforeInput","beforeinput",null,a,Se),we.push({event:Se,listeners:ie}),Se.data=et))}Mh(we,i)})}function bo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ra(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,v=f.stateNode;f.tag===5&&v!==null&&(f=v,v=wn(n,a),v!=null&&c.unshift(bo(n,v,f)),v=wn(n,i),v!=null&&c.push(bo(n,v,f))),n=n.return}return c}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wh(n,i,a,c,f){for(var v=i._reactName,w=[];a!==null&&a!==c;){var D=a,B=D.alternate,ie=D.stateNode;if(B!==null&&B===c)break;D.tag===5&&ie!==null&&(D=ie,f?(B=wn(a,v),B!=null&&w.unshift(bo(a,B,D))):f||(B=wn(a,v),B!=null&&w.push(bo(a,B,D)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var dx=/\r\n?/g,fx=/\u0000|\uFFFD/g;function Th(n){return(typeof n=="string"?n:""+n).replace(dx,`
`).replace(fx,"")}function Na(n,i,a){if(i=Th(i),Th(n)!==i&&a)throw Error(t(425))}function Pa(){}var Nc=null,Pc=null;function Lc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,hx=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,px=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(n){return bh.resolve(null).then(n).catch(mx)}:Ic;function mx(n){setTimeout(function(){throw n})}function Dc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),go(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);go(i)}function rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ah(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),_i="__reactFiber$"+ms,Ao="__reactProps$"+ms,Pi="__reactContainer$"+ms,Uc="__reactEvents$"+ms,gx="__reactListeners$"+ms,xx="__reactHandles$"+ms;function Pr(n){var i=n[_i];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Pi]||a[_i]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ah(n);n!==null;){if(a=n[_i])return a;n=Ah(n)}return i}n=a,a=n.parentNode}return null}function Co(n){return n=n[_i]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function La(n){return n[Ao]||null}var kc=[],xs=-1;function sr(n){return{current:n}}function Ot(n){0>xs||(n.current=kc[xs],kc[xs]=null,xs--)}function Dt(n,i){xs++,kc[xs]=n.current,n.current=i}var or={},xn=sr(or),Ln=sr(!1),Lr=or;function vs(n,i){var a=n.type.contextTypes;if(!a)return or;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},v;for(v in a)f[v]=i[v];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function In(n){return n=n.childContextTypes,n!=null}function Ia(){Ot(Ln),Ot(xn)}function Ch(n,i,a){if(xn.current!==or)throw Error(t(168));Dt(xn,i),Dt(Ln,a)}function Rh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,xe(n)||"Unknown",f));return oe({},a,c)}function Da(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||or,Lr=xn.current,Dt(xn,n),Dt(Ln,Ln.current),!0}function Nh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Rh(n,i,Lr),c.__reactInternalMemoizedMergedChildContext=n,Ot(Ln),Ot(xn),Dt(xn,n)):Ot(Ln),Dt(Ln,a)}var Li=null,Ua=!1,Oc=!1;function Ph(n){Li===null?Li=[n]:Li.push(n)}function vx(n){Ua=!0,Ph(n)}function ar(){if(!Oc&&Li!==null){Oc=!0;var n=0,i=Et;try{var a=Li;for(Et=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Li=null,Ua=!1}catch(f){throw Li!==null&&(Li=Li.slice(n+1)),ga(Te,ar),f}finally{Et=i,Oc=!1}}return null}var _s=[],ys=0,ka=null,Oa=0,Kn=[],Jn=0,Ir=null,Ii=1,Di="";function Dr(n,i){_s[ys++]=Oa,_s[ys++]=ka,ka=n,Oa=i}function Lh(n,i,a){Kn[Jn++]=Ii,Kn[Jn++]=Di,Kn[Jn++]=Ir,Ir=n;var c=Ii;n=Di;var f=32-dt(c)-1;c&=~(1<<f),a+=1;var v=32-dt(i)+f;if(30<v){var w=f-f%5;v=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Ii=1<<32-dt(i)+f|a<<f|c,Di=v+n}else Ii=1<<v|a<<f|c,Di=n}function Fc(n){n.return!==null&&(Dr(n,1),Lh(n,1,0))}function zc(n){for(;n===ka;)ka=_s[--ys],_s[ys]=null,Oa=_s[--ys],_s[ys]=null;for(;n===Ir;)Ir=Kn[--Jn],Kn[Jn]=null,Di=Kn[--Jn],Kn[Jn]=null,Ii=Kn[--Jn],Kn[Jn]=null}var jn=null,Wn=null,Bt=!1,ri=null;function Ih(n,i){var a=ti(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Dh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,jn=n,Wn=rr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,jn=n,Wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ir!==null?{id:Ii,overflow:Di}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ti(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,jn=n,Wn=null,!0):!1;default:return!1}}function Bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(Bt){var i=Wn;if(i){var a=i;if(!Dh(n,i)){if(Bc(n))throw Error(t(418));i=rr(a.nextSibling);var c=jn;i&&Dh(n,i)?Ih(c,a):(n.flags=n.flags&-4097|2,Bt=!1,jn=n)}}else{if(Bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,jn=n}}}function Uh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function Fa(n){if(n!==jn)return!1;if(!Bt)return Uh(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Lc(n.type,n.memoizedProps)),i&&(i=Wn)){if(Bc(n))throw kh(),Error(t(418));for(;i;)Ih(n,i),i=rr(i.nextSibling)}if(Uh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Wn=rr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Wn=null}}else Wn=jn?rr(n.stateNode.nextSibling):null;return!0}function kh(){for(var n=Wn;n;)n=rr(n.nextSibling)}function Ss(){Wn=jn=null,Bt=!1}function Hc(n){ri===null?ri=[n]:ri.push(n)}var _x=R.ReactCurrentBatchConfig;function Ro(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(w){var D=f.refs;w===null?delete D[v]:D[v]=w},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function za(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Oh(n){var i=n._init;return i(n._payload)}function Fh(n){function i($,j){if(n){var ee=$.deletions;ee===null?($.deletions=[j],$.flags|=16):ee.push(j)}}function a($,j){if(!n)return null;for(;j!==null;)i($,j),j=j.sibling;return null}function c($,j){for($=new Map;j!==null;)j.key!==null?$.set(j.key,j):$.set(j.index,j),j=j.sibling;return $}function f($,j){return $=mr($,j),$.index=0,$.sibling=null,$}function v($,j,ee){return $.index=ee,n?(ee=$.alternate,ee!==null?(ee=ee.index,ee<j?($.flags|=2,j):ee):($.flags|=2,j)):($.flags|=1048576,j)}function w($){return n&&$.alternate===null&&($.flags|=2),$}function D($,j,ee,Ae){return j===null||j.tag!==6?(j=Iu(ee,$.mode,Ae),j.return=$,j):(j=f(j,ee),j.return=$,j)}function B($,j,ee,Ae){var $e=ee.type;return $e===k?Se($,j,ee.props.children,Ae,ee.key):j!==null&&(j.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ae&&Oh($e)===j.type)?(Ae=f(j,ee.props),Ae.ref=Ro($,j,ee),Ae.return=$,Ae):(Ae=cl(ee.type,ee.key,ee.props,null,$.mode,Ae),Ae.ref=Ro($,j,ee),Ae.return=$,Ae)}function ie($,j,ee,Ae){return j===null||j.tag!==4||j.stateNode.containerInfo!==ee.containerInfo||j.stateNode.implementation!==ee.implementation?(j=Du(ee,$.mode,Ae),j.return=$,j):(j=f(j,ee.children||[]),j.return=$,j)}function Se($,j,ee,Ae,$e){return j===null||j.tag!==7?(j=Hr(ee,$.mode,Ae,$e),j.return=$,j):(j=f(j,ee),j.return=$,j)}function we($,j,ee){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Iu(""+j,$.mode,ee),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case H:return ee=cl(j.type,j.key,j.props,null,$.mode,ee),ee.ref=Ro($,null,j),ee.return=$,ee;case O:return j=Du(j,$.mode,ee),j.return=$,j;case ae:var Ae=j._init;return we($,Ae(j._payload),ee)}if(Be(j)||le(j))return j=Hr(j,$.mode,ee,null),j.return=$,j;za($,j)}return null}function _e($,j,ee,Ae){var $e=j!==null?j.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return $e!==null?null:D($,j,""+ee,Ae);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case H:return ee.key===$e?B($,j,ee,Ae):null;case O:return ee.key===$e?ie($,j,ee,Ae):null;case ae:return $e=ee._init,_e($,j,$e(ee._payload),Ae)}if(Be(ee)||le(ee))return $e!==null?null:Se($,j,ee,Ae,null);za($,ee)}return null}function Fe($,j,ee,Ae,$e){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return $=$.get(ee)||null,D(j,$,""+Ae,$e);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case H:return $=$.get(Ae.key===null?ee:Ae.key)||null,B(j,$,Ae,$e);case O:return $=$.get(Ae.key===null?ee:Ae.key)||null,ie(j,$,Ae,$e);case ae:var Qe=Ae._init;return Fe($,j,ee,Qe(Ae._payload),$e)}if(Be(Ae)||le(Ae))return $=$.get(ee)||null,Se(j,$,Ae,$e,null);za(j,Ae)}return null}function je($,j,ee,Ae){for(var $e=null,Qe=null,et=j,ot=j=0,cn=null;et!==null&&ot<ee.length;ot++){et.index>ot?(cn=et,et=null):cn=et.sibling;var bt=_e($,et,ee[ot],Ae);if(bt===null){et===null&&(et=cn);break}n&&et&&bt.alternate===null&&i($,et),j=v(bt,j,ot),Qe===null?$e=bt:Qe.sibling=bt,Qe=bt,et=cn}if(ot===ee.length)return a($,et),Bt&&Dr($,ot),$e;if(et===null){for(;ot<ee.length;ot++)et=we($,ee[ot],Ae),et!==null&&(j=v(et,j,ot),Qe===null?$e=et:Qe.sibling=et,Qe=et);return Bt&&Dr($,ot),$e}for(et=c($,et);ot<ee.length;ot++)cn=Fe(et,$,ot,ee[ot],Ae),cn!==null&&(n&&cn.alternate!==null&&et.delete(cn.key===null?ot:cn.key),j=v(cn,j,ot),Qe===null?$e=cn:Qe.sibling=cn,Qe=cn);return n&&et.forEach(function(gr){return i($,gr)}),Bt&&Dr($,ot),$e}function Ye($,j,ee,Ae){var $e=le(ee);if(typeof $e!="function")throw Error(t(150));if(ee=$e.call(ee),ee==null)throw Error(t(151));for(var Qe=$e=null,et=j,ot=j=0,cn=null,bt=ee.next();et!==null&&!bt.done;ot++,bt=ee.next()){et.index>ot?(cn=et,et=null):cn=et.sibling;var gr=_e($,et,bt.value,Ae);if(gr===null){et===null&&(et=cn);break}n&&et&&gr.alternate===null&&i($,et),j=v(gr,j,ot),Qe===null?$e=gr:Qe.sibling=gr,Qe=gr,et=cn}if(bt.done)return a($,et),Bt&&Dr($,ot),$e;if(et===null){for(;!bt.done;ot++,bt=ee.next())bt=we($,bt.value,Ae),bt!==null&&(j=v(bt,j,ot),Qe===null?$e=bt:Qe.sibling=bt,Qe=bt);return Bt&&Dr($,ot),$e}for(et=c($,et);!bt.done;ot++,bt=ee.next())bt=Fe(et,$,ot,bt.value,Ae),bt!==null&&(n&&bt.alternate!==null&&et.delete(bt.key===null?ot:bt.key),j=v(bt,j,ot),Qe===null?$e=bt:Qe.sibling=bt,Qe=bt);return n&&et.forEach(function(Zx){return i($,Zx)}),Bt&&Dr($,ot),$e}function Kt($,j,ee,Ae){if(typeof ee=="object"&&ee!==null&&ee.type===k&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case H:e:{for(var $e=ee.key,Qe=j;Qe!==null;){if(Qe.key===$e){if($e=ee.type,$e===k){if(Qe.tag===7){a($,Qe.sibling),j=f(Qe,ee.props.children),j.return=$,$=j;break e}}else if(Qe.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ae&&Oh($e)===Qe.type){a($,Qe.sibling),j=f(Qe,ee.props),j.ref=Ro($,Qe,ee),j.return=$,$=j;break e}a($,Qe);break}else i($,Qe);Qe=Qe.sibling}ee.type===k?(j=Hr(ee.props.children,$.mode,Ae,ee.key),j.return=$,$=j):(Ae=cl(ee.type,ee.key,ee.props,null,$.mode,Ae),Ae.ref=Ro($,j,ee),Ae.return=$,$=Ae)}return w($);case O:e:{for(Qe=ee.key;j!==null;){if(j.key===Qe)if(j.tag===4&&j.stateNode.containerInfo===ee.containerInfo&&j.stateNode.implementation===ee.implementation){a($,j.sibling),j=f(j,ee.children||[]),j.return=$,$=j;break e}else{a($,j);break}else i($,j);j=j.sibling}j=Du(ee,$.mode,Ae),j.return=$,$=j}return w($);case ae:return Qe=ee._init,Kt($,j,Qe(ee._payload),Ae)}if(Be(ee))return je($,j,ee,Ae);if(le(ee))return Ye($,j,ee,Ae);za($,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,j!==null&&j.tag===6?(a($,j.sibling),j=f(j,ee),j.return=$,$=j):(a($,j),j=Iu(ee,$.mode,Ae),j.return=$,$=j),w($)):a($,j)}return Kt}var Ms=Fh(!0),zh=Fh(!1),Ba=sr(null),Va=null,Es=null,Gc=null;function jc(){Gc=Es=Va=null}function Wc(n){var i=Ba.current;Ot(Ba),n._currentValue=i}function Xc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ws(n,i){Va=n,Gc=Es=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(Gc!==n)if(n={context:n,memoizedValue:i,next:null},Es===null){if(Va===null)throw Error(t(308));Es=n,Va.dependencies={lanes:0,firstContext:n}}else Es=Es.next=n;return i}var Ur=null;function qc(n){Ur===null?Ur=[n]:Ur.push(n)}function Bh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,qc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ui(n,c)}function Ui(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var lr=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(wt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ui(n,a)}return f=c.interleaved,f===null?(i.next=i,qc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ui(n,a)}function Ha(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,on(n,a)}}function Hh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?f=v=w:v=v.next=w,a=a.next}while(a!==null);v===null?f=v=i:v=v.next=i}else f=v=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:v,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ga(n,i,a,c){var f=n.updateQueue;lr=!1;var v=f.firstBaseUpdate,w=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var B=D,ie=B.next;B.next=null,w===null?v=ie:w.next=ie,w=B;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,D=Se.lastBaseUpdate,D!==w&&(D===null?Se.firstBaseUpdate=ie:D.next=ie,Se.lastBaseUpdate=B))}if(v!==null){var we=f.baseState;w=0,Se=ie=B=null,D=v;do{var _e=D.lane,Fe=D.eventTime;if((c&_e)===_e){Se!==null&&(Se=Se.next={eventTime:Fe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var je=n,Ye=D;switch(_e=i,Fe=a,Ye.tag){case 1:if(je=Ye.payload,typeof je=="function"){we=je.call(Fe,we,_e);break e}we=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ye.payload,_e=typeof je=="function"?je.call(Fe,we,_e):je,_e==null)break e;we=oe({},we,_e);break e;case 2:lr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,_e=f.effects,_e===null?f.effects=[D]:_e.push(D))}else Fe={eventTime:Fe,lane:_e,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Se===null?(ie=Se=Fe,B=we):Se=Se.next=Fe,w|=_e;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;_e=D,D=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(Se===null&&(B=we),f.baseState=B,f.firstBaseUpdate=ie,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else v===null&&(f.shared.lanes=0);Fr|=w,n.lanes=w,n.memoizedState=we}}function Gh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var No={},yi=sr(No),Po=sr(No),Lo=sr(No);function kr(n){if(n===No)throw Error(t(174));return n}function $c(n,i){switch(Dt(Lo,i),Dt(Po,n),Dt(yi,No),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ve(i,n)}Ot(yi),Dt(yi,i)}function Ts(){Ot(yi),Ot(Po),Ot(Lo)}function jh(n){kr(Lo.current);var i=kr(yi.current),a=ve(i,n.type);i!==a&&(Dt(Po,n),Dt(yi,a))}function Kc(n){Po.current===n&&(Ot(yi),Ot(Po))}var Gt=sr(0);function ja(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Jc=[];function Zc(){for(var n=0;n<Jc.length;n++)Jc[n]._workInProgressVersionPrimary=null;Jc.length=0}var Wa=R.ReactCurrentDispatcher,Qc=R.ReactCurrentBatchConfig,Or=0,jt=null,en=null,an=null,Xa=!1,Io=!1,Do=0,yx=0;function vn(){throw Error(t(321))}function eu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ii(n[a],i[a]))return!1;return!0}function tu(n,i,a,c,f,v){if(Or=v,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Wa.current=n===null||n.memoizedState===null?wx:Tx,n=a(c,f),Io){v=0;do{if(Io=!1,Do=0,25<=v)throw Error(t(301));v+=1,an=en=null,i.updateQueue=null,Wa.current=bx,n=a(c,f)}while(Io)}if(Wa.current=$a,i=en!==null&&en.next!==null,Or=0,an=en=jt=null,Xa=!1,i)throw Error(t(300));return n}function nu(){var n=Do!==0;return Do=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?jt.memoizedState=an=n:an=an.next=n,an}function Qn(){if(en===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var i=an===null?jt.memoizedState:an.next;if(i!==null)an=i,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},an===null?jt.memoizedState=an=n:an=an.next=n}return an}function Uo(n,i){return typeof i=="function"?i(n):i}function iu(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=en,f=c.baseQueue,v=a.pending;if(v!==null){if(f!==null){var w=f.next;f.next=v.next,v.next=w}c.baseQueue=f=v,a.pending=null}if(f!==null){v=f.next,c=c.baseState;var D=w=null,B=null,ie=v;do{var Se=ie.lane;if((Or&Se)===Se)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),c=ie.hasEagerState?ie.eagerState:n(c,ie.action);else{var we={lane:Se,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(D=B=we,w=c):B=B.next=we,jt.lanes|=Se,Fr|=Se}ie=ie.next}while(ie!==null&&ie!==v);B===null?w=c:B.next=D,ii(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do v=f.lane,jt.lanes|=v,Fr|=v,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ru(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,v=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do v=n(v,w.action),w=w.next;while(w!==f);ii(v,i.memoizedState)||(Dn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,c]}function Wh(){}function Xh(n,i){var a=jt,c=Qn(),f=i(),v=!ii(c.memoizedState,f);if(v&&(c.memoizedState=f,Dn=!0),c=c.queue,su($h.bind(null,a,c,n),[n]),c.getSnapshot!==i||v||an!==null&&an.memoizedState.tag&1){if(a.flags|=2048,ko(9,Yh.bind(null,a,c,f,i),void 0,null),ln===null)throw Error(t(349));(Or&30)!==0||qh(a,i,f)}return f}function qh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Yh(n,i,a,c){i.value=a,i.getSnapshot=c,Kh(i)&&Jh(n)}function $h(n,i,a){return a(function(){Kh(i)&&Jh(n)})}function Kh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ii(n,a)}catch{return!0}}function Jh(n){var i=Ui(n,1);i!==null&&li(i,n,1,-1)}function Zh(n){var i=Si();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:n},i.queue=n,n=n.dispatch=Ex.bind(null,jt,n),[i.memoizedState,n]}function ko(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Qh(){return Qn().memoizedState}function qa(n,i,a,c){var f=Si();jt.flags|=n,f.memoizedState=ko(1|i,a,void 0,c===void 0?null:c)}function Ya(n,i,a,c){var f=Qn();c=c===void 0?null:c;var v=void 0;if(en!==null){var w=en.memoizedState;if(v=w.destroy,c!==null&&eu(c,w.deps)){f.memoizedState=ko(i,a,v,c);return}}jt.flags|=n,f.memoizedState=ko(1|i,a,v,c)}function ep(n,i){return qa(8390656,8,n,i)}function su(n,i){return Ya(2048,8,n,i)}function tp(n,i){return Ya(4,2,n,i)}function np(n,i){return Ya(4,4,n,i)}function ip(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function rp(n,i,a){return a=a!=null?a.concat([n]):null,Ya(4,4,ip.bind(null,i,n),a)}function ou(){}function sp(n,i){var a=Qn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&eu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function op(n,i){var a=Qn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&eu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function ap(n,i,a){return(Or&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=a):(ii(a,i)||(a=Lt(),jt.lanes|=a,Fr|=a,n.baseState=!0),i)}function Sx(n,i){var a=Et;Et=a!==0&&4>a?a:4,n(!0);var c=Qc.transition;Qc.transition={};try{n(!1),i()}finally{Et=a,Qc.transition=c}}function lp(){return Qn().memoizedState}function Mx(n,i,a){var c=hr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},cp(n))up(i,a);else if(a=Bh(n,i,a,c),a!==null){var f=An();li(a,n,c,f),dp(a,i,c)}}function Ex(n,i,a){var c=hr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(cp(n))up(i,f);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var w=i.lastRenderedState,D=v(w,a);if(f.hasEagerState=!0,f.eagerState=D,ii(D,w)){var B=i.interleaved;B===null?(f.next=f,qc(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=Bh(n,i,f,c),a!==null&&(f=An(),li(a,n,c,f),dp(a,i,c))}}function cp(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function up(n,i){Io=Xa=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function dp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,on(n,a)}}var $a={readContext:Zn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},wx={readContext:Zn,useCallback:function(n,i){return Si().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:ep,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,qa(4194308,4,ip.bind(null,i,n),a)},useLayoutEffect:function(n,i){return qa(4194308,4,n,i)},useInsertionEffect:function(n,i){return qa(4,2,n,i)},useMemo:function(n,i){var a=Si();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Si();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Mx.bind(null,jt,n),[c.memoizedState,n]},useRef:function(n){var i=Si();return n={current:n},i.memoizedState=n},useState:Zh,useDebugValue:ou,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=Zh(!1),i=n[0];return n=Sx.bind(null,n[1]),Si().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=jt,f=Si();if(Bt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),ln===null)throw Error(t(349));(Or&30)!==0||qh(c,i,a)}f.memoizedState=a;var v={value:a,getSnapshot:i};return f.queue=v,ep($h.bind(null,c,v,n),[n]),c.flags|=2048,ko(9,Yh.bind(null,c,v,a,i),void 0,null),a},useId:function(){var n=Si(),i=ln.identifierPrefix;if(Bt){var a=Di,c=Ii;a=(c&~(1<<32-dt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Do++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=yx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Tx={readContext:Zn,useCallback:sp,useContext:Zn,useEffect:su,useImperativeHandle:rp,useInsertionEffect:tp,useLayoutEffect:np,useMemo:op,useReducer:iu,useRef:Qh,useState:function(){return iu(Uo)},useDebugValue:ou,useDeferredValue:function(n){var i=Qn();return ap(i,en.memoizedState,n)},useTransition:function(){var n=iu(Uo)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Wh,useSyncExternalStore:Xh,useId:lp,unstable_isNewReconciler:!1},bx={readContext:Zn,useCallback:sp,useContext:Zn,useEffect:su,useImperativeHandle:rp,useInsertionEffect:tp,useLayoutEffect:np,useMemo:op,useReducer:ru,useRef:Qh,useState:function(){return ru(Uo)},useDebugValue:ou,useDeferredValue:function(n){var i=Qn();return en===null?i.memoizedState=n:ap(i,en.memoizedState,n)},useTransition:function(){var n=ru(Uo)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Wh,useSyncExternalStore:Xh,useId:lp,unstable_isNewReconciler:!1};function si(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function au(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ka={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=An(),f=hr(n),v=ki(c,f);v.payload=i,a!=null&&(v.callback=a),i=cr(n,v,f),i!==null&&(li(i,n,f,c),Ha(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=An(),f=hr(n),v=ki(c,f);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=cr(n,v,f),i!==null&&(li(i,n,f,c),Ha(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=An(),c=hr(n),f=ki(a,c);f.tag=2,i!=null&&(f.callback=i),i=cr(n,f,c),i!==null&&(li(i,n,c,a),Ha(i,n,c))}};function fp(n,i,a,c,f,v,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,w):i.prototype&&i.prototype.isPureReactComponent?!Mo(a,c)||!Mo(f,v):!0}function hp(n,i,a){var c=!1,f=or,v=i.contextType;return typeof v=="object"&&v!==null?v=Zn(v):(f=In(i)?Lr:xn.current,c=i.contextTypes,v=(c=c!=null)?vs(n,f):or),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ka,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=v),i}function pp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ka.enqueueReplaceState(i,i.state,null)}function lu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Yc(n);var v=i.contextType;typeof v=="object"&&v!==null?f.context=Zn(v):(v=In(i)?Lr:xn.current,f.context=vs(n,v)),f.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(au(n,i,v,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ka.enqueueReplaceState(f,f.state,null),Ga(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,i){try{var a="",c=i;do a+=he(c),c=c.return;while(c);var f=a}catch(v){f=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:f,digest:null}}function cu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function uu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Ax=typeof WeakMap=="function"?WeakMap:Map;function mp(n,i,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){il||(il=!0,Tu=c),uu(n,i)},a}function gp(n,i,a){a=ki(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){uu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){uu(n,i),typeof c!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function xp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Ax;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=Vx.bind(null,n,i,a),i.then(n,n))}function vp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function _p(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ki(-1,1),i.tag=2,cr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Cx=R.ReactCurrentOwner,Dn=!1;function bn(n,i,a,c){i.child=n===null?zh(i,null,a,c):Ms(i,n.child,a,c)}function yp(n,i,a,c,f){a=a.render;var v=i.ref;return ws(i,f),c=tu(n,i,a,c,v,f),a=nu(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Oi(n,i,f)):(Bt&&a&&Fc(i),i.flags|=1,bn(n,i,c,f),i.child)}function Sp(n,i,a,c,f){if(n===null){var v=a.type;return typeof v=="function"&&!Lu(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,Mp(n,i,v,c,f)):(n=cl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&f)===0){var w=v.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(w,c)&&n.ref===i.ref)return Oi(n,i,f)}return i.flags|=1,n=mr(v,c),n.ref=i.ref,n.return=i,i.child=n}function Mp(n,i,a,c,f){if(n!==null){var v=n.memoizedProps;if(Mo(v,c)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=c=v,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,Oi(n,i,f)}return du(n,i,a,c,f)}function Ep(n,i,a){var c=i.pendingProps,f=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Cs,Xn),Xn|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Dt(Cs,Xn),Xn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:a,Dt(Cs,Xn),Xn|=c}else v!==null?(c=v.baseLanes|a,i.memoizedState=null):c=a,Dt(Cs,Xn),Xn|=c;return bn(n,i,f,a),i.child}function wp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function du(n,i,a,c,f){var v=In(a)?Lr:xn.current;return v=vs(i,v),ws(i,f),a=tu(n,i,a,c,v,f),c=nu(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Oi(n,i,f)):(Bt&&c&&Fc(i),i.flags|=1,bn(n,i,a,f),i.child)}function Tp(n,i,a,c,f){if(In(a)){var v=!0;Da(i)}else v=!1;if(ws(i,f),i.stateNode===null)Za(n,i),hp(i,a,c),lu(i,a,c,f),c=!0;else if(n===null){var w=i.stateNode,D=i.memoizedProps;w.props=D;var B=w.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=Zn(ie):(ie=In(a)?Lr:xn.current,ie=vs(i,ie));var Se=a.getDerivedStateFromProps,we=typeof Se=="function"||typeof w.getSnapshotBeforeUpdate=="function";we||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(D!==c||B!==ie)&&pp(i,w,c,ie),lr=!1;var _e=i.memoizedState;w.state=_e,Ga(i,c,w,f),B=i.memoizedState,D!==c||_e!==B||Ln.current||lr?(typeof Se=="function"&&(au(i,a,Se,c),B=i.memoizedState),(D=lr||fp(i,a,D,c,_e,B,ie))?(we||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),w.props=c,w.state=B,w.context=ie,c=D):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Vh(n,i),D=i.memoizedProps,ie=i.type===i.elementType?D:si(i.type,D),w.props=ie,we=i.pendingProps,_e=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=Zn(B):(B=In(a)?Lr:xn.current,B=vs(i,B));var Fe=a.getDerivedStateFromProps;(Se=typeof Fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(D!==we||_e!==B)&&pp(i,w,c,B),lr=!1,_e=i.memoizedState,w.state=_e,Ga(i,c,w,f);var je=i.memoizedState;D!==we||_e!==je||Ln.current||lr?(typeof Fe=="function"&&(au(i,a,Fe,c),je=i.memoizedState),(ie=lr||fp(i,a,ie,c,_e,je,B)||!1)?(Se||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,je,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,je,B)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||D===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),w.props=c,w.state=je,w.context=B,c=ie):(typeof w.componentDidUpdate!="function"||D===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),c=!1)}return fu(n,i,a,c,v,f)}function fu(n,i,a,c,f,v){wp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&Nh(i,a,!1),Oi(n,i,v);c=i.stateNode,Cx.current=i;var D=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=Ms(i,n.child,null,v),i.child=Ms(i,null,D,v)):bn(n,i,D,v),i.memoizedState=c.state,f&&Nh(i,a,!0),i.child}function bp(n){var i=n.stateNode;i.pendingContext?Ch(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ch(n,i.context,!1),$c(n,i.containerInfo)}function Ap(n,i,a,c,f){return Ss(),Hc(f),i.flags|=256,bn(n,i,a,c),i.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cp(n,i,a){var c=i.pendingProps,f=Gt.current,v=!1,w=(i.flags&128)!==0,D;if((D=w)||(D=n!==null&&n.memoizedState===null?!1:(f&2)!==0),D?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Dt(Gt,f&1),n===null)return Vc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,v?(c=i.mode,v=i.child,w={mode:"hidden",children:w},(c&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=w):v=ul(w,c,0,null),n=Hr(n,c,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=pu(a),i.memoizedState=hu,n):mu(i,w));if(f=n.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return Rx(n,i,w,c,D,f,a);if(v){v=c.fallback,w=i.mode,f=n.child,D=f.sibling;var B={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=mr(f,B),c.subtreeFlags=f.subtreeFlags&14680064),D!==null?v=mr(D,v):(v=Hr(v,w,a,null),v.flags|=2),v.return=i,c.return=i,c.sibling=v,i.child=c,c=v,v=i.child,w=n.child.memoizedState,w=w===null?pu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},v.memoizedState=w,v.childLanes=n.childLanes&~a,i.memoizedState=hu,c}return v=n.child,n=v.sibling,c=mr(v,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function mu(n,i){return i=ul({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ja(n,i,a,c){return c!==null&&Hc(c),Ms(i,n.child,null,a),n=mu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Rx(n,i,a,c,f,v,w){if(a)return i.flags&256?(i.flags&=-257,c=cu(Error(t(422))),Ja(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=c.fallback,f=i.mode,c=ul({mode:"visible",children:c.children},f,0,null),v=Hr(v,f,w,null),v.flags|=2,c.return=i,v.return=i,c.sibling=v,i.child=c,(i.mode&1)!==0&&Ms(i,n.child,null,w),i.child.memoizedState=pu(w),i.memoizedState=hu,v);if((i.mode&1)===0)return Ja(n,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var D=c.dgst;return c=D,v=Error(t(419)),c=cu(v,c,void 0),Ja(n,i,w,c)}if(D=(w&n.childLanes)!==0,Dn||D){if(c=ln,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==v.retryLane&&(v.retryLane=f,Ui(n,f),li(c,n,f,-1))}return Pu(),c=cu(Error(t(421))),Ja(n,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Hx.bind(null,n),f._reactRetry=i,null):(n=v.treeContext,Wn=rr(f.nextSibling),jn=i,Bt=!0,ri=null,n!==null&&(Kn[Jn++]=Ii,Kn[Jn++]=Di,Kn[Jn++]=Ir,Ii=n.id,Di=n.overflow,Ir=i),i=mu(i,c.children),i.flags|=4096,i)}function Rp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Xc(n.return,i,a)}function gu(n,i,a,c,f){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=a,v.tailMode=f)}function Np(n,i,a){var c=i.pendingProps,f=c.revealOrder,v=c.tail;if(bn(n,i,c.children,a),c=Gt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rp(n,a,i);else if(n.tag===19)Rp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Dt(Gt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&ja(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),gu(i,!1,f,a,v);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&ja(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}gu(i,!0,a,null,v);break;case"together":gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Za(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Oi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Fr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=mr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=mr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Nx(n,i,a){switch(i.tag){case 3:bp(i),Ss();break;case 5:jh(i);break;case 1:In(i.type)&&Da(i);break;case 4:$c(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Dt(Ba,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Dt(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Cp(n,i,a):(Dt(Gt,Gt.current&1),n=Oi(n,i,a),n!==null?n.sibling:null);Dt(Gt,Gt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Np(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Dt(Gt,Gt.current),c)break;return null;case 22:case 23:return i.lanes=0,Ep(n,i,a)}return Oi(n,i,a)}var Pp,xu,Lp,Ip;Pp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},xu=function(){},Lp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,kr(yi.current);var v=null;switch(a){case"input":f=F(n,f),c=F(n,c),v=[];break;case"select":f=oe({},f,{value:void 0}),c=oe({},c,{value:void 0}),v=[];break;case"textarea":f=b(n,f),c=b(n,c),v=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Pa)}pt(a,c);var w;a=null;for(ie in f)if(!c.hasOwnProperty(ie)&&f.hasOwnProperty(ie)&&f[ie]!=null)if(ie==="style"){var D=f[ie];for(w in D)D.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?v||(v=[]):(v=v||[]).push(ie,null));for(ie in c){var B=c[ie];if(D=f!=null?f[ie]:void 0,c.hasOwnProperty(ie)&&B!==D&&(B!=null||D!=null))if(ie==="style")if(D){for(w in D)!D.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&D[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(v||(v=[]),v.push(ie,a)),a=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,D=D?D.__html:void 0,B!=null&&D!==B&&(v=v||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&kt("scroll",n),v||D===B||(v=[])):(v=v||[]).push(ie,B))}a&&(v=v||[]).push("style",a);var ie=v;(i.updateQueue=ie)&&(i.flags|=4)}},Ip=function(n,i,a,c){a!==c&&(i.flags|=4)};function Oo(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function _n(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Px(n,i,a){var c=i.pendingProps;switch(zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return In(i.type)&&Ia(),_n(i),null;case 3:return c=i.stateNode,Ts(),Ot(Ln),Ot(xn),Zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Fa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(Cu(ri),ri=null))),xu(n,i),_n(i),null;case 5:Kc(i);var f=kr(Lo.current);if(a=i.type,n!==null&&i.stateNode!=null)Lp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return _n(i),null}if(n=kr(yi.current),Fa(i)){c=i.stateNode,a=i.type;var v=i.memoizedProps;switch(c[_i]=i,c[Ao]=v,n=(i.mode&1)!==0,a){case"dialog":kt("cancel",c),kt("close",c);break;case"iframe":case"object":case"embed":kt("load",c);break;case"video":case"audio":for(f=0;f<wo.length;f++)kt(wo[f],c);break;case"source":kt("error",c);break;case"img":case"image":case"link":kt("error",c),kt("load",c);break;case"details":kt("toggle",c);break;case"input":Ht(c,v),kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},kt("invalid",c);break;case"textarea":Q(c,v),kt("invalid",c)}pt(a,v),f=null;for(var w in v)if(v.hasOwnProperty(w)){var D=v[w];w==="children"?typeof D=="string"?c.textContent!==D&&(v.suppressHydrationWarning!==!0&&Na(c.textContent,D,n),f=["children",D]):typeof D=="number"&&c.textContent!==""+D&&(v.suppressHydrationWarning!==!0&&Na(c.textContent,D,n),f=["children",""+D]):o.hasOwnProperty(w)&&D!=null&&w==="onScroll"&&kt("scroll",c)}switch(a){case"input":Ct(c),qe(c,v,!0);break;case"textarea":Ct(c),ge(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=Pa)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=te(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[_i]=i,n[Ao]=c,Pp(n,i,!1,!1),i.stateNode=n;e:{switch(w=lt(a,c),a){case"dialog":kt("cancel",n),kt("close",n),f=c;break;case"iframe":case"object":case"embed":kt("load",n),f=c;break;case"video":case"audio":for(f=0;f<wo.length;f++)kt(wo[f],n);f=c;break;case"source":kt("error",n),f=c;break;case"img":case"image":case"link":kt("error",n),kt("load",n),f=c;break;case"details":kt("toggle",n),f=c;break;case"input":Ht(n,c),f=F(n,c),kt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=oe({},c,{value:void 0}),kt("invalid",n);break;case"textarea":Q(n,c),f=b(n,c),kt("invalid",n);break;default:f=c}pt(a,f),D=f;for(v in D)if(D.hasOwnProperty(v)){var B=D[v];v==="style"?nt(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&be(n,B)):v==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Ze(n,B):typeof B=="number"&&Ze(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?B!=null&&v==="onScroll"&&kt("scroll",n):B!=null&&P(n,v,B,w))}switch(a){case"input":Ct(n),qe(n,c,!1);break;case"textarea":Ct(n),ge(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ce(c.value));break;case"select":n.multiple=!!c.multiple,v=c.value,v!=null?L(n,!!c.multiple,v,!1):c.defaultValue!=null&&L(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Pa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(n&&i.stateNode!=null)Ip(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=kr(Lo.current),kr(yi.current),Fa(i)){if(c=i.stateNode,a=i.memoizedProps,c[_i]=i,(v=c.nodeValue!==a)&&(n=jn,n!==null))switch(n.tag){case 3:Na(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Na(c.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[_i]=i,i.stateNode=c}return _n(i),null;case 13:if(Ot(Gt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Wn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)kh(),Ss(),i.flags|=98560,v=!1;else if(v=Fa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[_i]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),v=!1}else ri!==null&&(Cu(ri),ri=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Gt.current&1)!==0?tn===0&&(tn=3):Pu())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return Ts(),xu(n,i),n===null&&To(i.stateNode.containerInfo),_n(i),null;case 10:return Wc(i.type._context),_n(i),null;case 17:return In(i.type)&&Ia(),_n(i),null;case 19:if(Ot(Gt),v=i.memoizedState,v===null)return _n(i),null;if(c=(i.flags&128)!==0,w=v.rendering,w===null)if(c)Oo(v,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=ja(n),w!==null){for(i.flags|=128,Oo(v,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)v=a,n=c,v.flags&=14680066,w=v.alternate,w===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=w.childLanes,v.lanes=w.lanes,v.child=w.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=w.memoizedProps,v.memoizedState=w.memoizedState,v.updateQueue=w.updateQueue,v.type=w.type,n=w.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Dt(Gt,Gt.current&1|2),i.child}n=n.sibling}v.tail!==null&&K()>Rs&&(i.flags|=128,c=!0,Oo(v,!1),i.lanes=4194304)}else{if(!c)if(n=ja(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Oo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!w.alternate&&!Bt)return _n(i),null}else 2*K()-v.renderingStartTime>Rs&&a!==1073741824&&(i.flags|=128,c=!0,Oo(v,!1),i.lanes=4194304);v.isBackwards?(w.sibling=i.child,i.child=w):(a=v.last,a!==null?a.sibling=w:i.child=w,v.last=w)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=K(),i.sibling=null,a=Gt.current,Dt(Gt,c?a&1|2:a&1),i):(_n(i),null);case 22:case 23:return Nu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Xn&1073741824)!==0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Lx(n,i){switch(zc(i),i.tag){case 1:return In(i.type)&&Ia(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ts(),Ot(Ln),Ot(xn),Zc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Kc(i),null;case 13:if(Ot(Gt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Gt),null;case 4:return Ts(),null;case 10:return Wc(i.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var Qa=!1,yn=!1,Ix=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function As(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Yt(n,i,c)}else a.current=null}function vu(n,i,a){try{a()}catch(c){Yt(n,i,c)}}var Dp=!1;function Dx(n,i){if(Nc=_a,n=fh(),Mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var w=0,D=-1,B=-1,ie=0,Se=0,we=n,_e=null;t:for(;;){for(var Fe;we!==a||f!==0&&we.nodeType!==3||(D=w+f),we!==v||c!==0&&we.nodeType!==3||(B=w+c),we.nodeType===3&&(w+=we.nodeValue.length),(Fe=we.firstChild)!==null;)_e=we,we=Fe;for(;;){if(we===n)break t;if(_e===a&&++ie===f&&(D=w),_e===v&&++Se===c&&(B=w),(Fe=we.nextSibling)!==null)break;we=_e,_e=we.parentNode}we=Fe}a=D===-1||B===-1?null:{start:D,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:n,selectionRange:a},_a=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ye=je.memoizedProps,Kt=je.memoizedState,$=i.stateNode,j=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:si(i.type,Ye),Kt);$.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Yt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return je=Dp,Dp=!1,je}function Fo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var v=f.destroy;f.destroy=void 0,v!==void 0&&vu(i,a,v)}f=f.next}while(f!==c)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function _u(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Up(n){var i=n.alternate;i!==null&&(n.alternate=null,Up(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_i],delete i[Ao],delete i[Uc],delete i[gx],delete i[xx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function kp(n){return n.tag===5||n.tag===3||n.tag===4}function Op(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||kp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Pa));else if(c!==4&&(n=n.child,n!==null))for(yu(n,i,a),n=n.sibling;n!==null;)yu(n,i,a),n=n.sibling}function Su(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Su(n,i,a),n=n.sibling;n!==null;)Su(n,i,a),n=n.sibling}var fn=null,oi=!1;function ur(n,i,a){for(a=a.child;a!==null;)Fp(n,i,a),a=a.sibling}function Fp(n,i,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(it,a)}catch{}switch(a.tag){case 5:yn||As(a,i);case 6:var c=fn,f=oi;fn=null,ur(n,i,a),fn=c,oi=f,fn!==null&&(oi?(n=fn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):fn.removeChild(a.stateNode));break;case 18:fn!==null&&(oi?(n=fn,a=a.stateNode,n.nodeType===8?Dc(n.parentNode,a):n.nodeType===1&&Dc(n,a),go(n)):Dc(fn,a.stateNode));break;case 4:c=fn,f=oi,fn=a.stateNode.containerInfo,oi=!0,ur(n,i,a),fn=c,oi=f;break;case 0:case 11:case 14:case 15:if(!yn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var v=f,w=v.destroy;v=v.tag,w!==void 0&&((v&2)!==0||(v&4)!==0)&&vu(a,i,w),f=f.next}while(f!==c)}ur(n,i,a);break;case 1:if(!yn&&(As(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(D){Yt(a,i,D)}ur(n,i,a);break;case 21:ur(n,i,a);break;case 22:a.mode&1?(yn=(c=yn)||a.memoizedState!==null,ur(n,i,a),yn=c):ur(n,i,a);break;default:ur(n,i,a)}}function zp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ix),i.forEach(function(c){var f=Gx.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function ai(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var v=n,w=i,D=w;e:for(;D!==null;){switch(D.tag){case 5:fn=D.stateNode,oi=!1;break e;case 3:fn=D.stateNode.containerInfo,oi=!0;break e;case 4:fn=D.stateNode.containerInfo,oi=!0;break e}D=D.return}if(fn===null)throw Error(t(160));Fp(v,w,f),fn=null,oi=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ie){Yt(f,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Bp(i,n),i=i.sibling}function Bp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(i,n),Mi(n),c&4){try{Fo(3,n,n.return),el(3,n)}catch(Ye){Yt(n,n.return,Ye)}try{Fo(5,n,n.return)}catch(Ye){Yt(n,n.return,Ye)}}break;case 1:ai(i,n),Mi(n),c&512&&a!==null&&As(a,a.return);break;case 5:if(ai(i,n),Mi(n),c&512&&a!==null&&As(a,a.return),n.flags&32){var f=n.stateNode;try{Ze(f,"")}catch(Ye){Yt(n,n.return,Ye)}}if(c&4&&(f=n.stateNode,f!=null)){var v=n.memoizedProps,w=a!==null?a.memoizedProps:v,D=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{D==="input"&&v.type==="radio"&&v.name!=null&&ut(f,v),lt(D,w);var ie=lt(D,v);for(w=0;w<B.length;w+=2){var Se=B[w],we=B[w+1];Se==="style"?nt(f,we):Se==="dangerouslySetInnerHTML"?be(f,we):Se==="children"?Ze(f,we):P(f,Se,we,ie)}switch(D){case"input":st(f,v);break;case"textarea":pe(f,v);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!v.multiple;var Fe=v.value;Fe!=null?L(f,!!v.multiple,Fe,!1):_e!==!!v.multiple&&(v.defaultValue!=null?L(f,!!v.multiple,v.defaultValue,!0):L(f,!!v.multiple,v.multiple?[]:"",!1))}f[Ao]=v}catch(Ye){Yt(n,n.return,Ye)}}break;case 6:if(ai(i,n),Mi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,v=n.memoizedProps;try{f.nodeValue=v}catch(Ye){Yt(n,n.return,Ye)}}break;case 3:if(ai(i,n),Mi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{go(i.containerInfo)}catch(Ye){Yt(n,n.return,Ye)}break;case 4:ai(i,n),Mi(n);break;case 13:ai(i,n),Mi(n),f=n.child,f.flags&8192&&(v=f.memoizedState!==null,f.stateNode.isHidden=v,!v||f.alternate!==null&&f.alternate.memoizedState!==null||(wu=K())),c&4&&zp(n);break;case 22:if(Se=a!==null&&a.memoizedState!==null,n.mode&1?(yn=(ie=yn)||Se,ai(i,n),yn=ie):ai(i,n),Mi(n),c&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!Se&&(n.mode&1)!==0)for(Ve=n,Se=n.child;Se!==null;){for(we=Ve=Se;Ve!==null;){switch(_e=Ve,Fe=_e.child,_e.tag){case 0:case 11:case 14:case 15:Fo(4,_e,_e.return);break;case 1:As(_e,_e.return);var je=_e.stateNode;if(typeof je.componentWillUnmount=="function"){c=_e,a=_e.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ye){Yt(c,a,Ye)}}break;case 5:As(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Gp(we);continue}}Fe!==null?(Fe.return=_e,Ve=Fe):Gp(we)}Se=Se.sibling}e:for(Se=null,we=n;;){if(we.tag===5){if(Se===null){Se=we;try{f=we.stateNode,ie?(v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(D=we.stateNode,B=we.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,D.style.display=He("display",w))}catch(Ye){Yt(n,n.return,Ye)}}}else if(we.tag===6){if(Se===null)try{we.stateNode.nodeValue=ie?"":we.memoizedProps}catch(Ye){Yt(n,n.return,Ye)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Se===we&&(Se=null),we=we.return}Se===we&&(Se=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:ai(i,n),Mi(n),c&4&&zp(n);break;case 21:break;default:ai(i,n),Mi(n)}}function Mi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(kp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Ze(f,""),c.flags&=-33);var v=Op(n);Su(n,v,f);break;case 3:case 4:var w=c.stateNode.containerInfo,D=Op(n);yu(n,D,w);break;default:throw Error(t(161))}}catch(B){Yt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ux(n,i,a){Ve=n,Vp(n)}function Vp(n,i,a){for(var c=(n.mode&1)!==0;Ve!==null;){var f=Ve,v=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||Qa;if(!w){var D=f.alternate,B=D!==null&&D.memoizedState!==null||yn;D=Qa;var ie=yn;if(Qa=w,(yn=B)&&!ie)for(Ve=f;Ve!==null;)w=Ve,B=w.child,w.tag===22&&w.memoizedState!==null?jp(f):B!==null?(B.return=w,Ve=B):jp(f);for(;v!==null;)Ve=v,Vp(v),v=v.sibling;Ve=f,Qa=D,yn=ie}Hp(n)}else(f.subtreeFlags&8772)!==0&&v!==null?(v.return=f,Ve=v):Hp(n)}}function Hp(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||el(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!yn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:si(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&Gh(i,v,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Gh(i,w,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var Se=ie.memoizedState;if(Se!==null){var we=Se.dehydrated;we!==null&&go(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||i.flags&512&&_u(i)}catch(_e){Yt(i,i.return,_e)}}if(i===n){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Gp(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function jp(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{el(4,i)}catch(B){Yt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(B){Yt(i,f,B)}}var v=i.return;try{_u(i)}catch(B){Yt(i,v,B)}break;case 5:var w=i.return;try{_u(i)}catch(B){Yt(i,w,B)}}}catch(B){Yt(i,i.return,B)}if(i===n){Ve=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Ve=D;break}Ve=i.return}}var kx=Math.ceil,tl=R.ReactCurrentDispatcher,Mu=R.ReactCurrentOwner,ei=R.ReactCurrentBatchConfig,wt=0,ln=null,Jt=null,hn=0,Xn=0,Cs=sr(0),tn=0,zo=null,Fr=0,nl=0,Eu=0,Bo=null,Un=null,wu=0,Rs=1/0,Fi=null,il=!1,Tu=null,dr=null,rl=!1,fr=null,sl=0,Vo=0,bu=null,ol=-1,al=0;function An(){return(wt&6)!==0?K():ol!==-1?ol:ol=K()}function hr(n){return(n.mode&1)===0?1:(wt&2)!==0&&hn!==0?hn&-hn:_x.transition!==null?(al===0&&(al=Lt()),al):(n=Et,n!==0||(n=window.event,n=n===void 0?16:Xf(n.type)),n)}function li(n,i,a,c){if(50<Vo)throw Vo=0,bu=null,Error(t(185));sn(n,a,c),((wt&2)===0||n!==ln)&&(n===ln&&((wt&2)===0&&(nl|=a),tn===4&&pr(n,hn)),kn(n,c),a===1&&wt===0&&(i.mode&1)===0&&(Rs=K()+500,Ua&&ar()))}function kn(n,i){var a=n.callbackNode;Tn(n,i);var c=mn(n,n===ln?hn:0);if(c===0)a!==null&&C(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&C(a),i===1)n.tag===0?vx(Xp.bind(null,n)):Ph(Xp.bind(null,n)),px(function(){(wt&6)===0&&ar()}),a=null;else{switch(vi(c)){case 1:a=Te;break;case 4:a=Ne;break;case 16:a=Oe;break;case 536870912:a=rt;break;default:a=Oe}a=em(a,Wp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Wp(n,i){if(ol=-1,al=0,(wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ns()&&n.callbackNode!==a)return null;var c=mn(n,n===ln?hn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ll(n,c);else{i=c;var f=wt;wt|=2;var v=Yp();(ln!==n||hn!==i)&&(Fi=null,Rs=K()+500,Br(n,i));do try{zx();break}catch(D){qp(n,D)}while(!0);jc(),tl.current=v,wt=f,Jt!==null?i=0:(ln=null,hn=0,i=tn)}if(i!==0){if(i===2&&(f=Ni(n),f!==0&&(c=f,i=Au(n,f))),i===1)throw a=zo,Br(n,0),pr(n,c),kn(n,K()),a;if(i===6)pr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Ox(f)&&(i=ll(n,c),i===2&&(v=Ni(n),v!==0&&(c=v,i=Au(n,v))),i===1))throw a=zo,Br(n,0),pr(n,c),kn(n,K()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Vr(n,Un,Fi);break;case 3:if(pr(n,c),(c&130023424)===c&&(i=wu+500-K(),10<i)){if(mn(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){An(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Ic(Vr.bind(null,n,Un,Fi),i);break}Vr(n,Un,Fi);break;case 4:if(pr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var w=31-dt(c);v=1<<w,w=i[w],w>f&&(f=w),c&=~v}if(c=f,c=K()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*kx(c/1960))-c,10<c){n.timeoutHandle=Ic(Vr.bind(null,n,Un,Fi),c);break}Vr(n,Un,Fi);break;case 5:Vr(n,Un,Fi);break;default:throw Error(t(329))}}}return kn(n,K()),n.callbackNode===a?Wp.bind(null,n):null}function Au(n,i){var a=Bo;return n.current.memoizedState.isDehydrated&&(Br(n,i).flags|=256),n=ll(n,i),n!==2&&(i=Un,Un=a,i!==null&&Cu(i)),n}function Cu(n){Un===null?Un=n:Un.push.apply(Un,n)}function Ox(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],v=f.getSnapshot;f=f.value;try{if(!ii(v(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(n,i){for(i&=~Eu,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-dt(i),c=1<<a;n[a]=-1,i&=~c}}function Xp(n){if((wt&6)!==0)throw Error(t(327));Ns();var i=mn(n,0);if((i&1)===0)return kn(n,K()),null;var a=ll(n,i);if(n.tag!==0&&a===2){var c=Ni(n);c!==0&&(i=c,a=Au(n,c))}if(a===1)throw a=zo,Br(n,0),pr(n,i),kn(n,K()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Vr(n,Un,Fi),kn(n,K()),null}function Ru(n,i){var a=wt;wt|=1;try{return n(i)}finally{wt=a,wt===0&&(Rs=K()+500,Ua&&ar())}}function zr(n){fr!==null&&fr.tag===0&&(wt&6)===0&&Ns();var i=wt;wt|=1;var a=ei.transition,c=Et;try{if(ei.transition=null,Et=1,n)return n()}finally{Et=c,ei.transition=a,wt=i,(wt&6)===0&&ar()}}function Nu(){Xn=Cs.current,Ot(Cs)}function Br(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,hx(a)),Jt!==null)for(a=Jt.return;a!==null;){var c=a;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ia();break;case 3:Ts(),Ot(Ln),Ot(xn),Zc();break;case 5:Kc(c);break;case 4:Ts();break;case 13:Ot(Gt);break;case 19:Ot(Gt);break;case 10:Wc(c.type._context);break;case 22:case 23:Nu()}a=a.return}if(ln=n,Jt=n=mr(n.current,null),hn=Xn=i,tn=0,zo=null,Eu=nl=Fr=0,Un=Bo=null,Ur!==null){for(i=0;i<Ur.length;i++)if(a=Ur[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,v=a.pending;if(v!==null){var w=v.next;v.next=f,c.next=w}a.pending=c}Ur=null}return n}function qp(n,i){do{var a=Jt;try{if(jc(),Wa.current=$a,Xa){for(var c=jt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Xa=!1}if(Or=0,an=en=jt=null,Io=!1,Do=0,Mu.current=null,a===null||a.return===null){tn=1,zo=i,Jt=null;break}e:{var v=n,w=a.return,D=a,B=i;if(i=hn,D.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,Se=D,we=Se.tag;if((Se.mode&1)===0&&(we===0||we===11||we===15)){var _e=Se.alternate;_e?(Se.updateQueue=_e.updateQueue,Se.memoizedState=_e.memoizedState,Se.lanes=_e.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Fe=vp(w);if(Fe!==null){Fe.flags&=-257,_p(Fe,w,D,v,i),Fe.mode&1&&xp(v,ie,i),i=Fe,B=ie;var je=i.updateQueue;if(je===null){var Ye=new Set;Ye.add(B),i.updateQueue=Ye}else je.add(B);break e}else{if((i&1)===0){xp(v,ie,i),Pu();break e}B=Error(t(426))}}else if(Bt&&D.mode&1){var Kt=vp(w);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),_p(Kt,w,D,v,i),Hc(bs(B,D));break e}}v=B=bs(B,D),tn!==4&&(tn=2),Bo===null?Bo=[v]:Bo.push(v),v=w;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var $=mp(v,B,i);Hh(v,$);break e;case 1:D=B;var j=v.type,ee=v.stateNode;if((v.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(dr===null||!dr.has(ee)))){v.flags|=65536,i&=-i,v.lanes|=i;var Ae=gp(v,D,i);Hh(v,Ae);break e}}v=v.return}while(v!==null)}Kp(a)}catch($e){i=$e,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function Yp(){var n=tl.current;return tl.current=$a,n===null?$a:n}function Pu(){(tn===0||tn===3||tn===2)&&(tn=4),ln===null||(Fr&268435455)===0&&(nl&268435455)===0||pr(ln,hn)}function ll(n,i){var a=wt;wt|=2;var c=Yp();(ln!==n||hn!==i)&&(Fi=null,Br(n,i));do try{Fx();break}catch(f){qp(n,f)}while(!0);if(jc(),wt=a,tl.current=c,Jt!==null)throw Error(t(261));return ln=null,hn=0,tn}function Fx(){for(;Jt!==null;)$p(Jt)}function zx(){for(;Jt!==null&&!q();)$p(Jt)}function $p(n){var i=Qp(n.alternate,n,Xn);n.memoizedProps=n.pendingProps,i===null?Kp(n):Jt=i,Mu.current=null}function Kp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Px(a,i,Xn),a!==null){Jt=a;return}}else{if(a=Lx(a,i),a!==null){a.flags&=32767,Jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);tn===0&&(tn=5)}function Vr(n,i,a){var c=Et,f=ei.transition;try{ei.transition=null,Et=1,Bx(n,i,a,c)}finally{ei.transition=f,Et=c}return null}function Bx(n,i,a,c){do Ns();while(fr!==null);if((wt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(dn(n,v),n===ln&&(Jt=ln=null,hn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||rl||(rl=!0,em(Oe,function(){return Ns(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=ei.transition,ei.transition=null;var w=Et;Et=1;var D=wt;wt|=4,Mu.current=null,Dx(n,a),Bp(a,n),ox(Pc),_a=!!Nc,Pc=Nc=null,n.current=a,Ux(a),ne(),wt=D,Et=w,ei.transition=v}else n.current=a;if(rl&&(rl=!1,fr=n,sl=f),v=n.pendingLanes,v===0&&(dr=null),_t(a.stateNode),kn(n,K()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(il)throw il=!1,n=Tu,Tu=null,n;return(sl&1)!==0&&n.tag!==0&&Ns(),v=n.pendingLanes,(v&1)!==0?n===bu?Vo++:(Vo=0,bu=n):Vo=0,ar(),null}function Ns(){if(fr!==null){var n=vi(sl),i=ei.transition,a=Et;try{if(ei.transition=null,Et=16>n?16:n,fr===null)var c=!1;else{if(n=fr,fr=null,sl=0,(wt&6)!==0)throw Error(t(331));var f=wt;for(wt|=4,Ve=n.current;Ve!==null;){var v=Ve,w=v.child;if((Ve.flags&16)!==0){var D=v.deletions;if(D!==null){for(var B=0;B<D.length;B++){var ie=D[B];for(Ve=ie;Ve!==null;){var Se=Ve;switch(Se.tag){case 0:case 11:case 15:Fo(8,Se,v)}var we=Se.child;if(we!==null)we.return=Se,Ve=we;else for(;Ve!==null;){Se=Ve;var _e=Se.sibling,Fe=Se.return;if(Up(Se),Se===ie){Ve=null;break}if(_e!==null){_e.return=Fe,Ve=_e;break}Ve=Fe}}}var je=v.alternate;if(je!==null){var Ye=je.child;if(Ye!==null){je.child=null;do{var Kt=Ye.sibling;Ye.sibling=null,Ye=Kt}while(Ye!==null)}}Ve=v}}if((v.subtreeFlags&2064)!==0&&w!==null)w.return=v,Ve=w;else e:for(;Ve!==null;){if(v=Ve,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Fo(9,v,v.return)}var $=v.sibling;if($!==null){$.return=v.return,Ve=$;break e}Ve=v.return}}var j=n.current;for(Ve=j;Ve!==null;){w=Ve;var ee=w.child;if((w.subtreeFlags&2064)!==0&&ee!==null)ee.return=w,Ve=ee;else e:for(w=j;Ve!==null;){if(D=Ve,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:el(9,D)}}catch($e){Yt(D,D.return,$e)}if(D===w){Ve=null;break e}var Ae=D.sibling;if(Ae!==null){Ae.return=D.return,Ve=Ae;break e}Ve=D.return}}if(wt=f,ar(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(it,n)}catch{}c=!0}return c}finally{Et=a,ei.transition=i}}return!1}function Jp(n,i,a){i=bs(a,i),i=mp(n,i,1),n=cr(n,i,1),i=An(),n!==null&&(sn(n,1,i),kn(n,i))}function Yt(n,i,a){if(n.tag===3)Jp(n,n,a);else for(;i!==null;){if(i.tag===3){Jp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(dr===null||!dr.has(c))){n=bs(a,n),n=gp(i,n,1),i=cr(i,n,1),n=An(),i!==null&&(sn(i,1,n),kn(i,n));break}}i=i.return}}function Vx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=An(),n.pingedLanes|=n.suspendedLanes&a,ln===n&&(hn&a)===a&&(tn===4||tn===3&&(hn&130023424)===hn&&500>K()-wu?Br(n,0):Eu|=a),kn(n,i)}function Zp(n,i){i===0&&((n.mode&1)===0?i=1:(i=qt,qt<<=1,(qt&130023424)===0&&(qt=4194304)));var a=An();n=Ui(n,i),n!==null&&(sn(n,i,a),kn(n,a))}function Hx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Zp(n,a)}function Gx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Zp(n,a)}var Qp;Qp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ln.current)Dn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Dn=!1,Nx(n,i,a);Dn=(n.flags&131072)!==0}else Dn=!1,Bt&&(i.flags&1048576)!==0&&Lh(i,Oa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Za(n,i),n=i.pendingProps;var f=vs(i,xn.current);ws(i,a),f=tu(null,i,c,n,f,a);var v=nu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(c)?(v=!0,Da(i)):v=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Yc(i),f.updater=Ka,i.stateNode=f,f._reactInternals=i,lu(i,c,n,a),i=fu(null,i,c,!0,v,a)):(i.tag=0,Bt&&v&&Fc(i),bn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Za(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Wx(c),n=si(c,n),f){case 0:i=du(null,i,c,n,a);break e;case 1:i=Tp(null,i,c,n,a);break e;case 11:i=yp(null,i,c,n,a);break e;case 14:i=Sp(null,i,c,si(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),du(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),Tp(n,i,c,f,a);case 3:e:{if(bp(i),n===null)throw Error(t(387));c=i.pendingProps,v=i.memoizedState,f=v.element,Vh(n,i),Ga(i,c,null,a);var w=i.memoizedState;if(c=w.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){f=bs(Error(t(423)),i),i=Ap(n,i,c,a,f);break e}else if(c!==f){f=bs(Error(t(424)),i),i=Ap(n,i,c,a,f);break e}else for(Wn=rr(i.stateNode.containerInfo.firstChild),jn=i,Bt=!0,ri=null,a=zh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ss(),c===f){i=Oi(n,i,a);break e}bn(n,i,c,a)}i=i.child}return i;case 5:return jh(i),n===null&&Vc(i),c=i.type,f=i.pendingProps,v=n!==null?n.memoizedProps:null,w=f.children,Lc(c,f)?w=null:v!==null&&Lc(c,v)&&(i.flags|=32),wp(n,i),bn(n,i,w,a),i.child;case 6:return n===null&&Vc(i),null;case 13:return Cp(n,i,a);case 4:return $c(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ms(i,null,c,a):bn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),yp(n,i,c,f,a);case 7:return bn(n,i,i.pendingProps,a),i.child;case 8:return bn(n,i,i.pendingProps.children,a),i.child;case 12:return bn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,v=i.memoizedProps,w=f.value,Dt(Ba,c._currentValue),c._currentValue=w,v!==null)if(ii(v.value,w)){if(v.children===f.children&&!Ln.current){i=Oi(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var D=v.dependencies;if(D!==null){w=v.child;for(var B=D.firstContext;B!==null;){if(B.context===c){if(v.tag===1){B=ki(-1,a&-a),B.tag=2;var ie=v.updateQueue;if(ie!==null){ie=ie.shared;var Se=ie.pending;Se===null?B.next=B:(B.next=Se.next,Se.next=B),ie.pending=B}}v.lanes|=a,B=v.alternate,B!==null&&(B.lanes|=a),Xc(v.return,a,i),D.lanes|=a;break}B=B.next}}else if(v.tag===10)w=v.type===i.type?null:v.child;else if(v.tag===18){if(w=v.return,w===null)throw Error(t(341));w.lanes|=a,D=w.alternate,D!==null&&(D.lanes|=a),Xc(w,a,i),w=v.sibling}else w=v.child;if(w!==null)w.return=v;else for(w=v;w!==null;){if(w===i){w=null;break}if(v=w.sibling,v!==null){v.return=w.return,w=v;break}w=w.return}v=w}bn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,ws(i,a),f=Zn(f),c=c(f),i.flags|=1,bn(n,i,c,a),i.child;case 14:return c=i.type,f=si(c,i.pendingProps),f=si(c.type,f),Sp(n,i,c,f,a);case 15:return Mp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),Za(n,i),i.tag=1,In(c)?(n=!0,Da(i)):n=!1,ws(i,a),hp(i,c,f),lu(i,c,f,a),fu(null,i,c,!0,n,a);case 19:return Np(n,i,a);case 22:return Ep(n,i,a)}throw Error(t(156,i.tag))};function em(n,i){return ga(n,i)}function jx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,i,a,c){return new jx(n,i,a,c)}function Lu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Wx(n){if(typeof n=="function")return Lu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===re)return 11;if(n===fe)return 14}return 2}function mr(n,i){var a=n.alternate;return a===null?(a=ti(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cl(n,i,a,c,f,v){var w=2;if(c=n,typeof n=="function")Lu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case k:return Hr(a.children,f,v,i);case G:w=8,f|=8;break;case N:return n=ti(12,a,i,f|2),n.elementType=N,n.lanes=v,n;case J:return n=ti(13,a,i,f),n.elementType=J,n.lanes=v,n;case ue:return n=ti(19,a,i,f),n.elementType=ue,n.lanes=v,n;case de:return ul(a,f,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:w=10;break e;case z:w=9;break e;case re:w=11;break e;case fe:w=14;break e;case ae:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ti(w,a,i,f),i.elementType=n,i.type=c,i.lanes=v,i}function Hr(n,i,a,c){return n=ti(7,n,c,i),n.lanes=a,n}function ul(n,i,a,c){return n=ti(22,n,c,i),n.elementType=de,n.lanes=a,n.stateNode={isHidden:!1},n}function Iu(n,i,a){return n=ti(6,n,null,i),n.lanes=a,n}function Du(n,i,a){return i=ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Xx(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Uu(n,i,a,c,f,v,w,D,B){return n=new Xx(n,i,a,D,B),i===1?(i=1,v===!0&&(i|=8)):i=0,v=ti(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(v),n}function qx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function tm(n){if(!n)return or;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(In(a))return Rh(n,a,i)}return i}function nm(n,i,a,c,f,v,w,D,B){return n=Uu(a,c,!0,n,f,v,w,D,B),n.context=tm(null),a=n.current,c=An(),f=hr(a),v=ki(c,f),v.callback=i??null,cr(a,v,f),n.current.lanes=f,sn(n,f,c),kn(n,c),n}function dl(n,i,a,c){var f=i.current,v=An(),w=hr(f);return a=tm(a),i.context===null?i.context=a:i.pendingContext=a,i=ki(v,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=cr(f,i,w),n!==null&&(li(n,f,w,v),Ha(n,f,w)),w}function fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function im(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ku(n,i){im(n,i),(n=n.alternate)&&im(n,i)}function Yx(){return null}var rm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ou(n){this._internalRoot=n}hl.prototype.render=Ou.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));dl(n,i,null,null)},hl.prototype.unmount=Ou.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){dl(null,n,null,null)}),i[Pi]=null}};function hl(n){this._internalRoot=n}hl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Vf();n={blockedOn:null,target:n,priority:i};for(var a=0;a<tr.length&&i!==0&&i<tr[a].priority;a++);tr.splice(a,0,n),a===0&&jf(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sm(){}function $x(n,i,a,c,f){if(f){if(typeof c=="function"){var v=c;c=function(){var ie=fl(w);v.call(ie)}}var w=nm(i,c,n,0,null,!1,!1,"",sm);return n._reactRootContainer=w,n[Pi]=w.current,To(n.nodeType===8?n.parentNode:n),zr(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var D=c;c=function(){var ie=fl(B);D.call(ie)}}var B=Uu(n,0,!1,null,null,!1,!1,"",sm);return n._reactRootContainer=B,n[Pi]=B.current,To(n.nodeType===8?n.parentNode:n),zr(function(){dl(i,B,a,c)}),B}function ml(n,i,a,c,f){var v=a._reactRootContainer;if(v){var w=v;if(typeof f=="function"){var D=f;f=function(){var B=fl(w);D.call(B)}}dl(i,w,n,f)}else w=$x(a,i,n,f,c);return fl(w)}zf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=xt(i.pendingLanes);a!==0&&(on(i,a|1),kn(i,K()),(wt&6)===0&&(Rs=K()+500,ar()))}break;case 13:zr(function(){var c=Ui(n,1);if(c!==null){var f=An();li(c,n,1,f)}}),ku(n,1)}},cc=function(n){if(n.tag===13){var i=Ui(n,134217728);if(i!==null){var a=An();li(i,n,134217728,a)}ku(n,134217728)}},Bf=function(n){if(n.tag===13){var i=hr(n),a=Ui(n,i);if(a!==null){var c=An();li(a,n,i,c)}ku(n,i)}},Vf=function(){return Et},Hf=function(n,i){var a=Et;try{return Et=n,i()}finally{Et=a}},Re=function(n,i,a){switch(i){case"input":if(st(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=La(c);if(!f)throw Error(t(90));Tt(c),st(c,f)}}}break;case"textarea":pe(n,a);break;case"select":i=a.value,i!=null&&L(n,!!a.multiple,i,!1)}},Ut=Ru,Qt=zr;var Kx={usingClientEntryPoint:!1,Events:[Co,gs,La,Le,ct,Ru]},Ho={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jx={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=pa(n),n===null?null:n.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||Yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{it=gl.inject(Jx),We=gl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx,On.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(i))throw Error(t(200));return qx(n,i,null,a)},On.createRoot=function(n,i){if(!Fu(n))throw Error(t(299));var a=!1,c="",f=rm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Uu(n,1,!1,null,null,a,!1,c,f),n[Pi]=i.current,To(n.nodeType===8?n.parentNode:n),new Ou(i)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=pa(i),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return zr(n)},On.hydrate=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,a)},On.hydrateRoot=function(n,i,a){if(!Fu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,v="",w=rm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=nm(i,null,n,1,a??null,f,!1,v,w),n[Pi]=i.current,To(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new hl(i)},On.render=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,a)},On.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1},On.unstable_batchedUpdates=Ru,On.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!pl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,a,!1,c)},On.version="18.3.1-next-f1338f8080-20240426",On}var hm;function ov(){if(hm)return Vu.exports;hm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vu.exports=sv(),Vu.exports}var pm;function av(){if(pm)return xl;pm=1;var s=ov();return xl.createRoot=s.createRoot,xl.hydrateRoot=s.hydrateRoot,xl}var lv=av();const cv=Mg(lv);class uv{constructor(){this.synth=typeof window<"u"?window.speechSynthesis:null,this.voice=null,this.isMuted=!1,this.isSpeaking=!1,this.listeners=new Set,this.initVoices()}initVoices(){if(!this.synth)return;const e=()=>{const t=this.synth.getVoices();if(!t||t.length===0)return;const r=t.find(d=>(d.lang==="en-GB"||d.lang.includes("GB")||d.lang.includes("en_GB"))&&(d.name.includes("Male")||d.name.includes("George")||d.name.includes("Daniel")||d.name.includes("Oliver"))),o=t.find(d=>d.lang==="en-GB"||d.lang.includes("GB")),l=t.find(d=>d.lang==="en-US"&&(d.name.includes("Natural")||d.name.includes("Guy")||d.name.includes("David"))),u=t.find(d=>d.lang.startsWith("en"))||t[0];this.voice=r||o||l||u};e(),this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=e)}setMuted(e){this.isMuted=e,e&&this.synth&&(this.synth.cancel(),this.isSpeaking=!1,this.notifyListeners({speaking:!1,text:""}))}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notifyListeners(e){this.listeners.forEach(t=>t(e))}speak(e,t=!1){if(this.isMuted||!this.synth||!e){this.notifyListeners({speaking:!1,text:e});return}(t||this.synth.speaking)&&this.synth.cancel();const r=new SpeechSynthesisUtterance(e);this.voice&&(r.voice=this.voice),r.rate=1.02,r.pitch=.95,r.volume=1,r.onstart=()=>{this.isSpeaking=!0,this.notifyListeners({speaking:!0,text:e})},r.onend=()=>{this.isSpeaking=!1,this.notifyListeners({speaking:!1,text:""})},r.onerror=()=>{this.isSpeaking=!1,this.notifyListeners({speaking:!1,text:""})},this.synth.speak(r)}cancel(){this.synth&&(this.synth.cancel(),this.isSpeaking=!1,this.notifyListeners({speaking:!1,text:""}))}}const Gr=new uv;let Ps=null;function oa(){if(!Ps){const s=window.AudioContext||window.webkitAudioContext;s&&(Ps=new s)}return Ps&&Ps.state==="suspended"&&Ps.resume(),Ps}function Hn(s=1200,e=.06,t="sine"){try{const r=oa();if(!r)return;const o=r.createOscillator(),l=r.createGain();o.type=t,o.frequency.setValueAtTime(s,r.currentTime),o.frequency.exponentialRampToValueAtTime(s*.8,r.currentTime+e),l.gain.setValueAtTime(.08,r.currentTime),l.gain.exponentialRampToValueAtTime(.001,r.currentTime+e),o.connect(l),l.connect(r.destination),o.start(),o.stop(r.currentTime+e)}catch(r){console.warn("Audio error:",r)}}function Eg(){try{const s=oa();if(!s)return;const e=s.currentTime,t=s.createOscillator(),r=s.createGain();t.type="triangle",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(2400,e+.25),r.gain.setValueAtTime(.01,e),r.gain.linearRampToValueAtTime(.18,e+.22),r.gain.exponentialRampToValueAtTime(.001,e+.26),t.connect(r),r.connect(s.destination),t.start(e),t.stop(e+.26);const o=s.createOscillator(),l=s.createGain();o.type="sawtooth",o.frequency.setValueAtTime(550,e+.23),o.frequency.exponentialRampToValueAtTime(45,e+.85),l.gain.setValueAtTime(.3,e+.23),l.gain.exponentialRampToValueAtTime(.001,e+.85),o.connect(l),l.connect(s.destination),o.start(e+.23),o.stop(e+.85);const u=s.sampleRate*.5,d=s.createBuffer(1,u,s.sampleRate),h=d.getChannelData(0);for(let _=0;_<u;_++)h[_]=Math.random()*2-1;const p=s.createBufferSource();p.buffer=d;const m=s.createBiquadFilter();m.type="bandpass",m.frequency.setValueAtTime(800,e+.23),m.frequency.exponentialRampToValueAtTime(120,e+.7),m.Q.value=3;const g=s.createGain();g.gain.setValueAtTime(.25,e+.23),g.gain.exponentialRampToValueAtTime(.001,e+.7),p.connect(m),m.connect(g),g.connect(s.destination),p.start(e+.23),p.stop(e+.75)}catch(s){console.warn("Audio error:",s)}}function wg(){try{const s=oa();if(!s)return;const e=s.currentTime,t=s.createOscillator(),r=s.createGain();t.type="sawtooth",t.frequency.setValueAtTime(120,e),t.frequency.linearRampToValueAtTime(480,e+.4),t.frequency.exponentialRampToValueAtTime(880,e+.8);const o=s.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(400,e),o.frequency.linearRampToValueAtTime(1600,e+.7),o.Q.value=4,r.gain.setValueAtTime(.05,e),r.gain.linearRampToValueAtTime(.22,e+.35),r.gain.exponentialRampToValueAtTime(.001,e+.9),t.connect(o),o.connect(r),r.connect(s.destination),t.start(e),t.stop(e+.9),[.35,.75].forEach(_=>{const S=s.createOscillator(),E=s.createGain();S.type="square",S.frequency.setValueAtTime(620,e+_),S.frequency.exponentialRampToValueAtTime(90,e+_+.25),E.gain.setValueAtTime(.18,e+_),E.gain.exponentialRampToValueAtTime(.001,e+_+.25),S.connect(E),E.connect(s.destination),S.start(e+_),S.stop(e+_+.26)});const l=s.createOscillator(),u=s.createGain();l.type="sawtooth",l.frequency.setValueAtTime(70,e+.9),l.frequency.linearRampToValueAtTime(220,e+1.3),l.frequency.exponentialRampToValueAtTime(60,e+1.9),u.gain.setValueAtTime(.25,e+.9),u.gain.linearRampToValueAtTime(.35,e+1.3),u.gain.exponentialRampToValueAtTime(.001,e+1.95);const d=s.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(350,e+.9),d.frequency.linearRampToValueAtTime(1400,e+1.3),d.frequency.exponentialRampToValueAtTime(250,e+1.9),l.connect(d),d.connect(u),u.connect(s.destination),l.start(e+.9),l.stop(e+2);const h=s.createOscillator(),p=s.createGain();h.type="triangle",h.frequency.setValueAtTime(980,e+1.4),h.frequency.exponentialRampToValueAtTime(50,e+1.75),p.gain.setValueAtTime(.3,e+1.4),p.gain.exponentialRampToValueAtTime(.001,e+1.8),h.connect(p),p.connect(s.destination),h.start(e+1.4),h.stop(e+1.8);const m=s.createOscillator(),g=s.createGain();m.type="sine",m.frequency.setValueAtTime(1200,e+1.65),m.frequency.linearRampToValueAtTime(2800,e+2.1),g.gain.setValueAtTime(.08,e+1.65),g.gain.exponentialRampToValueAtTime(.001,e+2.2),m.connect(g),g.connect(s.destination),m.start(e+1.65),m.stop(e+2.25)}catch(s){console.warn("Audio error:",s)}}function dv(){try{const s=oa();if(!s)return;const e=s.currentTime,t=s.sampleRate*.7,r=s.createBuffer(1,t,s.sampleRate),o=r.getChannelData(0);for(let m=0;m<t;m++)o[m]=Math.random()*2-1;const l=s.createBufferSource();l.buffer=r;const u=s.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(1400,e),u.frequency.exponentialRampToValueAtTime(300,e+.65);const d=s.createGain();d.gain.setValueAtTime(.2,e),d.gain.exponentialRampToValueAtTime(.001,e+.7),l.connect(u),u.connect(d),d.connect(s.destination),l.start(e),l.stop(e+.7);const h=s.createOscillator(),p=s.createGain();h.type="sine",h.frequency.setValueAtTime(650,e+.2),h.frequency.exponentialRampToValueAtTime(110,e+.85),p.gain.setValueAtTime(.15,e+.2),p.gain.exponentialRampToValueAtTime(.001,e+.9),h.connect(p),p.connect(s.destination),h.start(e+.2),h.stop(e+.9),[.9,1.15].forEach((m,g)=>{const _=s.createOscillator(),S=s.createGain();_.type="sine",_.frequency.setValueAtTime(g===0?880:1320,e+m),S.gain.setValueAtTime(.12,e+m),S.gain.exponentialRampToValueAtTime(.001,e+m+.4),_.connect(S),S.connect(s.destination),_.start(e+m),_.stop(e+m+.45)})}catch(s){console.warn("Audio error:",s)}}function vf(){try{const s=oa();if(!s)return;const e=s.currentTime,t=s.createOscillator(),r=s.createGain();t.type="sawtooth",t.frequency.setValueAtTime(65,e),t.frequency.linearRampToValueAtTime(140,e+.3),t.frequency.exponentialRampToValueAtTime(55,e+.9),r.gain.setValueAtTime(.18,e),r.gain.linearRampToValueAtTime(.25,e+.3),r.gain.exponentialRampToValueAtTime(.001,e+.9);const o=s.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(300,e),o.frequency.linearRampToValueAtTime(900,e+.3),o.frequency.exponentialRampToValueAtTime(200,e+.9),t.connect(o),o.connect(r),r.connect(s.destination),t.start(e),t.stop(e+.95)}catch(s){console.warn("Audio error:",s)}}function os(){try{Hn(1800,.05,"triangle"),setTimeout(()=>{Hn(2400,.08,"triangle")},90)}catch(s){console.warn("Audio error:",s)}}const Tg=wg,bg=tt.createContext(null);function fv({children:s}){const[e,t]=tt.useState(!1),[r,o]=tt.useState(!0),[l,u]=tt.useState(!1),[d,h]=tt.useState(""),[p,m]=tt.useState(!1),[g,_]=tt.useState(!1);tt.useEffect(()=>{e?document.body.classList.add("ironman-mode"):document.body.classList.remove("ironman-mode")},[e]),tt.useEffect(()=>Gr.subscribe(({speaking:I,text:P})=>{m(I),h(P)}),[]),tt.useEffect(()=>{Gr.setMuted(!r)},[r]),tt.useEffect(()=>{const y=()=>{r&&Gr.speak("Welcome to the Stark Industries neural interface. All systems nominal, sir.",!1),window.removeEventListener("click",y)};return window.addEventListener("click",y,{once:!0}),()=>window.removeEventListener("click",y)},[r]);const S=()=>{u(!0);const y=!e;y?(wg(),r&&setTimeout(()=>{Gr.speak("Suit deployment sequence complete. Welcome back, Mr. Stark. Mark 85 combat protocols active.",!0)},1700)):(dv(),r&&setTimeout(()=>{Gr.speak("Disengaging combat armor. Nanomachine matrix secured. Welcome back to Stark Industries, sir.",!0)},1500)),setTimeout(()=>{t(y)},700),setTimeout(()=>{u(!1)},2400)},E=()=>{Eg(),_(!0),setTimeout(()=>_(!1),800)},T=()=>{const y=!r;o(y),y&&(Hn(1200),Gr.speak("Audio telemetry restored, sir."))},M=y=>{r&&Gr.speak(y,!0)};return x.jsx(bg.Provider,{value:{isIronManMode:e,toggleMode:S,audioEnabled:r,toggleAudio:T,isTransforming:l,activeSpeech:d,isSpeaking:p,suitOverdrive:g,fireRepulsor:E,speakJarvis:M},children:s})}function pn(){const s=tt.useContext(bg);if(!s)throw new Error("useStarkMode must be used within a StarkModeProvider");return s}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ag=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=tt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},h)=>tt.createElement("svg",{ref:h,...pv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Ag("lucide",o),...d},[...u.map(([p,m])=>tt.createElement(p,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(s,e)=>{const t=tt.forwardRef(({className:r,...o},l)=>tt.createElement(mv,{ref:l,iconNode:e,className:Ag(`lucide-${hv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],_f=Vt("Activity",gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],vv=Vt("ArrowUp",xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],yv=Vt("ChevronLeft",_v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Cg=Vt("ChevronRight",Sv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ev=Vt("CircleCheckBig",Mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Tv=Vt("Compass",wv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Av=Vt("Cpu",bv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],yf=Vt("Crosshair",Cv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Nv=Vt("Heart",Rv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Lv=Vt("Layers",Pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Dv=Vt("Mail",Iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Td=Vt("MapPin",Uv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Ov=Vt("Menu",kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],zv=Vt("Mic",Fv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],Vv=Vt("Power",Bv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Gv=Vt("Radio",Hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Rg=Vt("Send",jv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xv=Vt("ShieldCheck",Wv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ec=Vt("Shield",qv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Sf=Vt("Terminal",Yv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Ng=Vt("Volume2",$v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Jv=Vt("VolumeX",Kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qv=Vt("X",Zv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],tc=Vt("Zap",e_);function t_(){const{isIronManMode:s,toggleMode:e,isTransforming:t}=pn();return x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsxs("div",{className:"hidden sm:flex flex-col text-right",children:[x.jsx("span",{className:"text-[10px] font-tech uppercase tracking-widest text-slate-400",children:"Current Protocol"}),x.jsx("span",{className:`text-xs font-orbitron font-bold tracking-wider ${s?"text-iron-red glow-red":"text-stark-blue glow-cyan"}`,children:s?"MARK COMBAT HUD":"STARK EXECUTIVE"})]}),x.jsxs("button",{onClick:e,disabled:t,title:s?"Disengage Armor (Switch to Tony Stark)":"Deploy Armor (Transform to Iron Man)",className:`relative group px-4 py-2 rounded-full border flex items-center gap-3 transition-all duration-500 overflow-hidden ${s?"bg-gradient-to-r from-red-950/80 via-black to-red-900/80 border-iron-red text-white shadow-arc-red hover:border-yellow-400":"bg-gradient-to-r from-cyan-950/80 via-black to-blue-950/80 border-stark-blue text-white shadow-arc-cyan hover:border-cyan-300"} ${t?"scale-105 ring-4 ring-yellow-400/50 animate-pulse":"hover:scale-105 active:scale-95"}`,children:[x.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"}),t&&x.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-red-500/20 to-cyan-500/20 animate-pulse pointer-events-none"}),x.jsxs("div",{className:`relative w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-500 ${s?"bg-iron-red/20 text-yellow-400 ring-2 ring-iron-red":"bg-cyan-500/20 text-cyan-300 ring-2 ring-stark-blue"} ${t?"animate-spin":"group-hover:rotate-180"}`,children:[x.jsx("div",{className:`absolute inset-0.5 rounded-full border border-dashed animate-spin-slow ${s?"border-yellow-400":"border-cyan-300"}`}),x.jsx(Vv,{className:`w-3.5 h-3.5 ${s?"animate-pulse text-yellow-300":"text-cyan-200"}`})]}),x.jsxs("div",{className:"flex flex-col text-left",children:[x.jsx("span",{className:"text-[9px] font-tech uppercase tracking-widest text-slate-300",children:t?"TRANSFORMING...":s?"DE-SUIT":"SUIT UP"}),x.jsx("span",{className:"text-xs font-orbitron font-extrabold tracking-wider flex items-center gap-1",children:s?x.jsxs(x.Fragment,{children:[x.jsx(tc,{className:"w-3 h-3 text-yellow-400 fill-yellow-400"}),"TONY STARK"]}):x.jsxs(x.Fragment,{children:[x.jsx(ec,{className:"w-3 h-3 text-red-500 fill-red-500"}),"IRON MAN"]})})]})]})]})}function n_(){const{isIronManMode:s,audioEnabled:e,toggleAudio:t}=pn(),[r,o]=tt.useState(!1),[l,u]=tt.useState(!1),[d,h]=tt.useState("");tt.useEffect(()=>{const g=()=>{h(new Date().toLocaleTimeString("en-US",{hour12:!1}))};g();const _=setInterval(g,1e3);return()=>clearInterval(_)},[]),tt.useEffect(()=>{const g=()=>{o(window.scrollY>40)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const p=[{label:s?"DOSSIER":"OVERVIEW",href:"#hero"},{label:s?"ARSENAL":"MASTERIES",href:"#skills"},{label:s?"TECH LAB":"INVENTIONS",href:"#tech"},{label:"HALL OF ARMOR",href:"#hall-of-armor"},{label:s?"HUD WIREFRAME":"BLUEPRINTS",href:"#blueprint-hud"},{label:"JARVIS AI",href:"#jarvis"},{label:s?"SECURE UPLINK":"CONTACT",href:"#contact"}],m=(g,_)=>{g.preventDefault(),Hn(1400),u(!1);const S=document.querySelector(_);S&&S.scrollIntoView({behavior:"smooth"})};return x.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${r?s?"bg-black/85 border-b border-iron-red/40 shadow-arc-red backdrop-blur-md py-2.5":"bg-[#080d1a]/85 border-b border-stark-blue/30 shadow-arc-cyan backdrop-blur-md py-2.5":"bg-transparent py-4"}`,children:[x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[x.jsxs("a",{href:"#hero",onClick:g=>m(g,"#hero"),className:"flex items-center gap-2.5 group",children:[x.jsxs("div",{className:`relative w-8 h-8 rounded border flex items-center justify-center transition-all ${s?"border-iron-red bg-red-950/40 text-yellow-400 group-hover:border-yellow-400":"border-stark-blue bg-cyan-950/40 text-stark-blue group-hover:border-white"}`,children:[x.jsx("span",{className:"font-orbitron font-extrabold text-sm tracking-tighter",children:"S"}),x.jsx("div",{className:"hud-corner-tl"}),x.jsx("div",{className:"hud-corner-br"})]}),x.jsxs("div",{className:"flex flex-col",children:[x.jsx("span",{className:"font-orbitron font-bold text-sm sm:text-base tracking-widest text-white leading-tight",children:s?"MARK // TACTICAL":"STARK INDUSTRIES"}),x.jsx("span",{className:"text-[9px] font-tech tracking-widest text-slate-400",children:s?"AVENGERS PROTOCOL 85":"ADVANCED R&D DIVISION"})]})]}),x.jsx("nav",{className:"hidden lg:flex items-center gap-1 xl:gap-2",children:p.map(g=>x.jsx("a",{href:g.href,onClick:_=>m(_,g.href),className:`px-3 py-1.5 text-xs font-tech tracking-wider uppercase transition-all rounded hover:bg-white/5 ${s?"hover:text-iron-gold hover:shadow-[0_0_10px_rgba(255,215,0,0.3)]":"hover:text-stark-blue hover:shadow-[0_0_10px_rgba(0,240,255,0.3)]"}`,children:g.label},g.label))}),x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsxs("div",{className:"hidden xl:flex flex-col text-right font-tech text-[10px] text-slate-400 pr-2 border-r border-white/10",children:[x.jsxs("span",{className:"text-white font-mono",children:[d," ZULU"]}),x.jsx("span",{className:s?"text-iron-red":"text-stark-blue",children:"ARC: 100% ONLINE"})]}),x.jsx("button",{onClick:t,title:e?"Mute Jarvis & Sound Effects":"Enable Jarvis Voice & Audio",className:`p-2 rounded border transition-all ${e?s?"border-iron-red bg-red-950/40 text-yellow-400":"border-stark-blue bg-cyan-950/40 text-stark-blue":"border-white/10 bg-black/40 text-slate-500"}`,children:e?x.jsx(Ng,{className:"w-4 h-4"}):x.jsx(Jv,{className:"w-4 h-4"})}),x.jsx(t_,{}),x.jsx("button",{onClick:()=>{Hn(1100),u(!l)},className:"lg:hidden p-2 rounded border border-white/20 text-white hover:bg-white/10",children:l?x.jsx(Qv,{className:"w-5 h-5"}):x.jsx(Ov,{className:"w-5 h-5"})})]})]}),l&&x.jsxs("div",{className:`lg:hidden border-b transition-all duration-300 ${s?"bg-black/95 border-iron-red/50 text-white":"bg-[#090e1c]/95 border-stark-blue/50 text-white"} backdrop-blur-xl px-6 py-4 flex flex-col gap-3`,children:[x.jsxs("div",{className:"flex justify-between items-center text-xs font-tech text-slate-400 pb-2 border-b border-white/10",children:[x.jsx("span",{children:"LOCATION: MALIBU POINT 10880"}),x.jsx("span",{className:"text-white",children:d})]}),p.map(g=>x.jsxs("a",{href:g.href,onClick:_=>m(_,g.href),className:`py-2 text-sm font-tech tracking-widest uppercase border-b border-white/5 flex items-center justify-between ${s?"hover:text-iron-gold":"hover:text-stark-blue"}`,children:[x.jsx("span",{children:g.label}),x.jsx("span",{className:"text-xs text-muted-foreground",children:"→"})]},g.label))]})]})}function i_(){const{isIronManMode:s,activeSpeech:e,isSpeaking:t,suitOverdrive:r,fireRepulsor:o}=pn();return x.jsxs(x.Fragment,{children:[r&&x.jsx("div",{className:"fixed inset-0 z-40 pointer-events-none bg-cyan-400/25 mix-blend-screen transition-opacity duration-300"}),x.jsxs("div",{className:"fixed inset-4 sm:inset-6 pointer-events-none z-30 select-none",children:[x.jsxs("div",{className:`absolute top-0 left-0 flex flex-col gap-1 transition-colors ${s?"text-iron-red":"text-stark-blue"}`,children:[x.jsx("div",{className:"w-10 h-10 border-t-2 border-l-2 border-current"}),x.jsx("div",{className:"font-tech text-[10px] tracking-widest opacity-75",children:"GRID // 34.0259°N 118.7798°W"})]}),x.jsxs("div",{className:`absolute top-0 right-0 flex flex-col items-end gap-1 transition-colors ${s?"text-iron-gold":"text-cyan-400"}`,children:[x.jsx("div",{className:"w-10 h-10 border-t-2 border-r-2 border-current"}),x.jsx("div",{className:"font-tech text-[10px] tracking-widest opacity-75",children:"DEFENSE: OPTIMAL // 100%"})]}),x.jsxs("div",{className:`absolute bottom-0 left-0 flex flex-col gap-1 transition-colors ${s?"text-iron-red":"text-stark-blue"}`,children:[x.jsx("div",{className:"font-tech text-[10px] tracking-widest opacity-75",children:"ARC CORE // 3.2 GW"}),x.jsx("div",{className:"w-10 h-10 border-b-2 border-l-2 border-current"})]}),x.jsxs("div",{className:`absolute bottom-0 right-0 flex flex-col items-end gap-1 transition-colors ${s?"text-iron-gold":"text-cyan-400"}`,children:[x.jsx("div",{className:"font-tech text-[10px] tracking-widest opacity-75",children:"JARVIS // ACTIVE LINK"}),x.jsx("div",{className:"w-10 h-10 border-b-2 border-r-2 border-current"})]})]}),x.jsx("div",{className:"fixed bottom-6 right-6 z-40",children:x.jsxs("button",{onClick:o,title:"Fire Repulsor Blast (Sound + Visual FX)",className:`group px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border flex items-center gap-2.5 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${s?"bg-red-950/80 border-iron-red text-yellow-300 shadow-arc-red hover:border-yellow-400":"bg-cyan-950/80 border-stark-blue text-cyan-200 shadow-arc-cyan hover:border-cyan-300"}`,children:[x.jsx("div",{className:`w-3 h-3 rounded-full animate-ping ${s?"bg-yellow-400":"bg-cyan-400"}`}),x.jsx(yf,{className:"w-4 h-4 animate-spin-slow"}),x.jsx("span",{className:"font-orbitron font-bold text-xs tracking-wider uppercase",children:s?"FIRE REPULSOR":"TEST ARC BEAM"})]})}),(t||e)&&x.jsxs("div",{className:"fixed bottom-20 left-1/2 -translate-x-1/2 z-40 max-w-xl w-[92%] sm:w-auto px-4 py-3 rounded-lg border backdrop-blur-xl shadow-2xl transition-all duration-300 animate-fade-in flex items-center gap-3 bg-black/90 text-white border-cyan-400/50",children:[x.jsx("div",{className:"flex items-center gap-1 h-5",children:[1,2,3,4,5].map(l=>x.jsx("span",{className:`w-1 rounded-full ${s?"bg-red-500":"bg-cyan-400"} ${t?"animate-pulse":"h-1.5"}`,style:{height:t?`${Math.max(6,l*5%20+6)}px`:"4px",animationDuration:`${.3+l*.1}s`}},l))}),x.jsxs("div",{className:"flex flex-col",children:[x.jsxs("span",{className:"text-[10px] font-orbitron font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1",children:[x.jsx(zv,{className:"w-3 h-3"}),"J.A.R.V.I.S. VOCAL LINK"]}),x.jsxs("span",{className:"text-xs sm:text-sm font-tech text-slate-200 leading-snug",children:['"',e,'"']})]})]})]})}function r_(){const{isTransforming:s,isIronManMode:e}=pn(),[t,r]=tt.useState(0),[o,l]=tt.useState("");return tt.useEffect(()=>{if(!s){r(0),l("");return}const u=Date.now(),d=2400,h=setInterval(()=>{const p=Date.now()-u,m=Math.min(100,Math.floor(p/d*100));r(m),e?m<20?l("INITIALIZING CHEST RT-10 NANO-HOUSING..."):m<45?l("DISPENSING SMART LIQUID METAL MATRIX..."):m<70?l("LOCKING GOLD-TITANIUM EXOSKELETON PLATES..."):m<90?l("ARC REACTOR OVERDRIVE // 4.5 GIGAWATTS..."):l("MARK LXXXV SYSTEMS FULLY ENGAGED. COMBAT READY."):m<25?l("DISENGAGING COMBAT AVIONICS & REPULSORS..."):m<55?l("RETRACTING FLUID NANOMACHINES TO CORE..."):m<85?l("COOLING ARC REACTOR TO BASELINE STABILITY..."):l("STARK INDUSTRIES EXECUTIVE SYSTEMS RESTORED."),m>=100&&clearInterval(h)},40);return()=>clearInterval(h)},[s,e]),s?x.jsxs("div",{className:"fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden select-none",children:[x.jsx("div",{className:`absolute inset-0 transition-colors duration-700 ${e?"bg-gradient-to-b from-black via-red-950/70 to-black":"bg-gradient-to-b from-black via-cyan-950/70 to-black"} backdrop-blur-md`}),x.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-40",children:x.jsxs("svg",{className:"w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[x.jsx("defs",{children:x.jsx("pattern",{id:"hex-grid",width:"50",height:"86.6",patternUnits:"userSpaceOnUse",patternTransform:"scale(1.2)",children:x.jsx("path",{d:"M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z M25 86.6 L50 72.2 L50 43.3 L25 57.7 L0 43.3 L0 72.2 Z",fill:"none",stroke:e?"#e62429":"#00f0ff",strokeWidth:"1.2",strokeOpacity:"0.5"})})}),x.jsx("rect",{width:"100%",height:"100%",fill:"url(#hex-grid)",className:"animate-pulse"})]})}),x.jsx("div",{className:`absolute rounded-full border-4 ${e?"border-yellow-400 shadow-arc-red":"border-cyan-300 shadow-arc-cyan"} animate-ping`,style:{width:"40vw",height:"40vw",animationDuration:"1.2s"}}),x.jsx("div",{className:`absolute rounded-full border-2 border-dashed ${e?"border-iron-red":"border-stark-blue"} animate-spin-slow`,style:{width:"70vw",height:"70vw"}}),e&&x.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[x.jsx("div",{className:"absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black via-black/80 to-transparent flex items-start justify-center pt-6",children:x.jsxs("div",{className:"flex items-center gap-6 font-tech text-xs tracking-widest text-yellow-400",children:[x.jsx("span",{children:"◄ COMPASS: 184° SSE"}),x.jsx("span",{children:"//"}),x.jsx("span",{className:"text-white font-orbitron font-bold",children:"ALTITUDE: 14,200 FT"}),x.jsx("span",{children:"//"}),x.jsx("span",{children:"VELOCITY: MACH 3.2 ►"})]})}),x.jsxs("div",{className:"relative w-full max-w-4xl h-72 flex items-center justify-between px-10",children:[x.jsxs("div",{className:"relative w-64 h-32 border-2 border-yellow-400/80 rounded-3xl overflow-hidden bg-red-950/30 backdrop-blur-sm shadow-arc-red animate-pulse",children:[x.jsx("div",{className:"absolute top-2 left-2 text-[10px] font-tech text-yellow-400",children:"OCULAR L_OPTIC"}),x.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[x.jsx("div",{className:"w-20 h-20 rounded-full border border-yellow-400/50 animate-spin-slow"}),x.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_#fff]"})]}),x.jsx("div",{className:"absolute bottom-2 right-2 text-[10px] font-tech text-red-400",children:"120 FPS // LOCKED"})]}),x.jsxs("div",{className:"relative w-64 h-32 border-2 border-yellow-400/80 rounded-3xl overflow-hidden bg-red-950/30 backdrop-blur-sm shadow-arc-red animate-pulse",children:[x.jsx("div",{className:"absolute top-2 right-2 text-[10px] font-tech text-yellow-400",children:"OCULAR R_OPTIC"}),x.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[x.jsx("div",{className:"w-20 h-20 rounded-full border border-yellow-400/50 animate-spin-reverse-slow"}),x.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_#fff]"})]}),x.jsx("div",{className:"absolute bottom-2 left-2 text-[10px] font-tech text-red-400",children:"HEAT: 3,200K // NOMINAL"})]})]}),x.jsx("div",{className:"absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end justify-center pb-6",children:x.jsxs("div",{className:"flex items-center gap-8 font-tech text-xs tracking-widest text-slate-300",children:[x.jsx("span",{className:"text-red-400",children:"REPULSORS: [CHARGED]"}),x.jsx("span",{className:"text-yellow-400 font-bold",children:"NANITE RESERVE: [100%]"}),x.jsx("span",{className:"text-cyan-400",children:"UNIBEAM: [STANDBY]"})]})})]}),x.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-xl",children:[x.jsxs("div",{className:`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 flex items-center justify-center mb-6 shadow-2xl transition-all duration-500 ${e?"border-yellow-400 bg-red-950/90 text-yellow-300 shadow-arc-red scale-110":"border-cyan-400 bg-cyan-950/90 text-cyan-200 shadow-arc-cyan scale-110"}`,children:[x.jsx("div",{className:`absolute inset-2 rounded-full border border-dashed animate-spin-slow ${e?"border-yellow-300":"border-cyan-300"}`}),x.jsx("div",{className:`absolute inset-4 rounded-full border border-dotted animate-spin-reverse-slow ${e?"border-red-400":"border-blue-400"}`}),x.jsxs("div",{className:"flex flex-col items-center",children:[e?x.jsx(ec,{className:"w-12 h-12 text-yellow-400 fill-yellow-400/20 animate-bounce"}):x.jsx(tc,{className:"w-12 h-12 text-cyan-300 fill-cyan-300/20 animate-pulse"}),x.jsxs("span",{className:"font-orbitron font-black text-xs mt-1 text-white",children:[t,"%"]})]})]}),x.jsx("h2",{className:"font-orbitron font-black text-2xl sm:text-4xl uppercase tracking-widest text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] mb-2",children:e?"SUIT DEPLOYMENT SEQUENCE":"DISENGAGING ARMOR SYSTEMS"}),x.jsxs("div",{className:`font-tech text-xs sm:text-sm tracking-widest uppercase px-4 py-1.5 rounded-full border backdrop-blur-md mb-6 ${e?"border-iron-red bg-black/80 text-yellow-300":"border-stark-blue bg-black/80 text-cyan-200"}`,children:["▶ ",o]}),x.jsx("div",{className:"w-72 sm:w-96 h-3 bg-black/80 rounded-full border border-white/20 overflow-hidden relative p-0.5",children:x.jsx("div",{className:`h-full rounded-full transition-all duration-75 relative ${e?"bg-gradient-to-r from-red-600 via-yellow-400 to-white shadow-[0_0_15px_#ffd700]":"bg-gradient-to-r from-blue-600 via-cyan-400 to-white shadow-[0_0_15px_#00f0ff]"}`,style:{width:`${t}%`}})}),x.jsxs("div",{className:"flex items-center gap-6 text-[10px] font-tech text-slate-400 mt-4 tracking-widest",children:[x.jsxs("span",{children:["PROTOCOL: ",e?"MARK_LXXXV":"STARK_EXECUTIVE"]}),x.jsx("span",{children:"//"}),x.jsx("span",{children:"NEURAL SYNC: OPTIMAL"}),x.jsx("span",{children:"//"}),x.jsx("span",{children:"JARVIS LINK: 100%"})]})]}),x.jsxs("div",{className:"absolute inset-8 pointer-events-none",children:[x.jsx("div",{className:`absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 ${e?"border-yellow-400":"border-cyan-400"}`}),x.jsx("div",{className:`absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 ${e?"border-yellow-400":"border-cyan-400"}`}),x.jsx("div",{className:`absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 ${e?"border-yellow-400":"border-cyan-400"}`}),x.jsx("div",{className:`absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 ${e?"border-yellow-400":"border-cyan-400"}`})]})]}):null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mf="173",s_=0,mm=1,o_=2,Pg=1,a_=2,ji=3,br=0,zn=1,fi=2,wr=0,Ks=1,Kl=2,gm=3,xm=4,l_=5,Qr=100,c_=101,u_=102,d_=103,f_=104,h_=200,p_=201,m_=202,g_=203,bd=204,Ad=205,x_=206,v_=207,__=208,y_=209,S_=210,M_=211,E_=212,w_=213,T_=214,Cd=0,Rd=1,Nd=2,Qs=3,Pd=4,Ld=5,Id=6,Dd=7,Lg=0,b_=1,A_=2,Tr=0,C_=1,R_=2,N_=3,P_=4,L_=5,I_=6,D_=7,Ig=300,eo=301,to=302,Ud=303,kd=304,nc=306,Od=1e3,ts=1001,Fd=1002,gi=1003,U_=1004,vl=1005,wi=1006,ju=1007,ns=1008,Yi=1009,Dg=1010,Ug=1011,ta=1012,Ef=1013,is=1014,Wi=1015,aa=1016,wf=1017,Tf=1018,no=1020,kg=35902,Og=1021,Fg=1022,pi=1023,zg=1024,Bg=1025,Js=1026,io=1027,Vg=1028,bf=1029,Hg=1030,Af=1031,Cf=1033,jl=33776,Wl=33777,Xl=33778,ql=33779,zd=35840,Bd=35841,Vd=35842,Hd=35843,Gd=36196,jd=37492,Wd=37496,Xd=37808,qd=37809,Yd=37810,$d=37811,Kd=37812,Jd=37813,Zd=37814,Qd=37815,ef=37816,tf=37817,nf=37818,rf=37819,sf=37820,of=37821,Yl=36492,af=36494,lf=36495,Gg=36283,cf=36284,uf=36285,df=36286,k_=3200,O_=3201,jg=0,F_=1,Er="",$n="srgb",ro="srgb-linear",Jl="linear",Nt="srgb",Ls=7680,vm=519,z_=512,B_=513,V_=514,Wg=515,H_=516,G_=517,j_=518,W_=519,_m=35044,ym="300 es",Xi=2e3,Zl=2001;class ao{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=Math.PI/180,ff=180/Math.PI;function lo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function X_(s,e){return(s%e+e)%e}function Xu(s,e,t){return(1-t)*s+t*e}function jo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,r,o,l,u,d,h,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,h,p)}set(e,t,r,o,l,u,d,h,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=d,m[3]=t,m[4]=l,m[5]=h,m[6]=r,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],h=r[6],p=r[1],m=r[4],g=r[7],_=r[2],S=r[5],E=r[8],T=o[0],M=o[3],y=o[6],I=o[1],P=o[4],R=o[7],H=o[2],O=o[5],k=o[8];return l[0]=u*T+d*I+h*H,l[3]=u*M+d*P+h*O,l[6]=u*y+d*R+h*k,l[1]=p*T+m*I+g*H,l[4]=p*M+m*P+g*O,l[7]=p*y+m*R+g*k,l[2]=_*T+S*I+E*H,l[5]=_*M+S*P+E*O,l[8]=_*y+S*R+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],m=e[8];return t*u*m-t*d*p-r*l*m+r*d*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],m=e[8],g=m*u-d*p,_=d*h-m*l,S=p*l-u*h,E=t*g+r*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(o*p-m*r)*T,e[2]=(d*r-o*u)*T,e[3]=_*T,e[4]=(m*t-o*h)*T,e[5]=(o*l-d*t)*T,e[6]=S*T,e[7]=(r*h-p*t)*T,e[8]=(u*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*d)+u+e,-o*p,o*h,-o*(-p*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(qu.makeScale(e,t)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qu=new ft;function Xg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ql(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function q_(){const s=Ql("canvas");return s.style.display="block",s}const Sm={};function Xs(s){s in Sm||(Sm[s]=!0,console.warn(s))}function Y_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function $_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function K_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Em=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J_(){const s={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Nt&&(o.r=qi(o.r),o.g=qi(o.g),o.b=qi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Nt&&(o.r=Zs(o.r),o.g=Zs(o.g),o.b=Zs(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Er?Jl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ro]:{primaries:e,whitePoint:r,transfer:Jl,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),s}const At=J_();function qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Is;class Z_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Is===void 0&&(Is=Ql("canvas")),Is.width=e.width,Is.height=e.height;const r=Is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Is}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ql("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=qi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(qi(t[r]/255)*255):t[r]=qi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q_=0;class qg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=lo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Yu(o[u].image)):l.push(Yu(o[u]))}else l=Yu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Yu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Z_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ey=0;class Bn extends ao{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=ts,o=ts,l=wi,u=ns,d=pi,h=Yi,p=Bn.DEFAULT_ANISOTROPY,m=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=lo(),this.name="",this.source=new qg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Ig;Bn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,r=0,o=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],m=h[4],g=h[8],_=h[1],S=h[5],E=h[9],T=h[2],M=h[6],y=h[10];if(Math.abs(m-_)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,R=(S+1)/2,H=(y+1)/2,O=(m+_)/4,k=(g+T)/4,G=(E+M)/4;return P>R&&P>H?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=O/r,l=k/r):R>H?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=O/o,l=G/o):H<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(H),r=k/l,o=G/l),this.set(r,o,l,t),this}let I=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(_-m)*(_-m));return Math.abs(I)<.001&&(I=1),this.x=(M-E)/I,this.y=(g-T)/I,this.z=(_-m)/I,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ty extends ao{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Bn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new qg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends ty{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Yg extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=gi,this.minFilter=gi,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ny extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=gi,this.minFilter=gi,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class la{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let h=r[o+0],p=r[o+1],m=r[o+2],g=r[o+3];const _=l[u+0],S=l[u+1],E=l[u+2],T=l[u+3];if(d===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(d===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=T;return}if(g!==T||h!==_||p!==S||m!==E){let M=1-d;const y=h*_+p*S+m*E+g*T,I=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const H=Math.sqrt(P),O=Math.atan2(H,y*I);M=Math.sin(M*O)/H,d=Math.sin(d*O)/H}const R=d*I;if(h=h*M+_*R,p=p*M+S*R,m=m*M+E*R,g=g*M+T*R,M===1-d){const H=1/Math.sqrt(h*h+p*p+m*m+g*g);h*=H,p*=H,m*=H,g*=H}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],h=r[o+1],p=r[o+2],m=r[o+3],g=l[u],_=l[u+1],S=l[u+2],E=l[u+3];return e[t]=d*E+m*g+h*S-p*_,e[t+1]=h*E+m*_+p*g-d*S,e[t+2]=p*E+m*S+d*_-h*g,e[t+3]=m*E-d*g-h*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(r/2),m=d(o/2),g=d(l/2),_=h(r/2),S=h(o/2),E=h(l/2);switch(u){case"XYZ":this._x=_*m*g+p*S*E,this._y=p*S*g-_*m*E,this._z=p*m*E+_*S*g,this._w=p*m*g-_*S*E;break;case"YXZ":this._x=_*m*g+p*S*E,this._y=p*S*g-_*m*E,this._z=p*m*E-_*S*g,this._w=p*m*g+_*S*E;break;case"ZXY":this._x=_*m*g-p*S*E,this._y=p*S*g+_*m*E,this._z=p*m*E+_*S*g,this._w=p*m*g-_*S*E;break;case"ZYX":this._x=_*m*g-p*S*E,this._y=p*S*g+_*m*E,this._z=p*m*E-_*S*g,this._w=p*m*g+_*S*E;break;case"YZX":this._x=_*m*g+p*S*E,this._y=p*S*g+_*m*E,this._z=p*m*E-_*S*g,this._w=p*m*g-_*S*E;break;case"XZY":this._x=_*m*g-p*S*E,this._y=p*S*g-_*m*E,this._z=p*m*E+_*S*g,this._w=p*m*g+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],m=t[6],g=t[10],_=r+d+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-h)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(m-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+m)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(h+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,h=t._y,p=t._z,m=t._w;return this._x=r*m+u*d+o*p-l*h,this._y=o*m+u*h+l*d-r*p,this._z=l*m+u*p+r*h-o*d,this._w=u*m-r*d-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,d),g=Math.sin((1-t)*m)/p,_=Math.sin(t*m)/p;return this._w=u*g+this._w*_,this._x=r*g+this._x*_,this._y=o*g+this._y*_,this._z=l*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*o-d*r),m=2*(d*t-l*o),g=2*(l*r-u*t);return this.x=t+h*p+u*g-d*m,this.y=r+h*m+d*p-l*g,this.z=o+h*g+l*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=o*h-l*d,this.y=l*u-r*h,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $u=new X,wm=new la;class ca{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ci):ci.fromBufferAttribute(l,u),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_l.copy(r.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),yl.subVectors(this.max,Wo),Ds.subVectors(e.a,Wo),Us.subVectors(e.b,Wo),ks.subVectors(e.c,Wo),xr.subVectors(Us,Ds),vr.subVectors(ks,Us),jr.subVectors(Ds,ks);let t=[0,-xr.z,xr.y,0,-vr.z,vr.y,0,-jr.z,jr.y,xr.z,0,-xr.x,vr.z,0,-vr.x,jr.z,0,-jr.x,-xr.y,xr.x,0,-vr.y,vr.x,0,-jr.y,jr.x,0];return!Ku(t,Ds,Us,ks,yl)||(t=[1,0,0,0,1,0,0,0,1],!Ku(t,Ds,Us,ks,yl))?!1:(Sl.crossVectors(xr,vr),t=[Sl.x,Sl.y,Sl.z],Ku(t,Ds,Us,ks,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new X,new X,new X,new X,new X,new X,new X,new X],ci=new X,_l=new ca,Ds=new X,Us=new X,ks=new X,xr=new X,vr=new X,jr=new X,Wo=new X,yl=new X,Sl=new X,Wr=new X;function Ku(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Wr.fromArray(s,l);const d=o.x*Math.abs(Wr.x)+o.y*Math.abs(Wr.y)+o.z*Math.abs(Wr.z),h=e.dot(Wr),p=t.dot(Wr),m=r.dot(Wr);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>d)return!1}return!0}const iy=new ca,Xo=new X,Ju=new X;class ic{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):iy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const t=Xo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Xo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Ju)),this.expandByPoint(Xo.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new X,Zu=new X,Ml=new X,_r=new X,Qu=new X,El=new X,ed=new X;class $g{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Zu.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Zu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Ml),d=_r.dot(this.direction),h=-_r.dot(Ml),p=_r.lengthSq(),m=Math.abs(1-u*u);let g,_,S,E;if(m>0)if(g=u*h-d,_=u*d-h,E=l*m,g>=0)if(_>=-E)if(_<=E){const T=1/m;g*=T,_*=T,S=g*(g+u*_+2*d)+_*(u*g+_+2*h)+p}else _=l,g=Math.max(0,-(u*_+d)),S=-g*g+_*(_+2*h)+p;else _=-l,g=Math.max(0,-(u*_+d)),S=-g*g+_*(_+2*h)+p;else _<=-E?(g=Math.max(0,-(-u*l+d)),_=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+_*(_+2*h)+p):_<=E?(g=0,_=Math.min(Math.max(-l,-h),l),S=_*(_+2*h)+p):(g=Math.max(0,-(u*l+d)),_=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+_*(_+2*h)+p);else _=u>0?-l:l,g=Math.max(0,-(u*_+d)),S=-g*g+_*(_+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Zu).addScaledVector(Ml,_),S}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const r=Bi.dot(this.direction),o=Bi.dot(Bi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,h;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),m>=0?(l=(e.min.y-_.y)*m,u=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,u=(e.min.y-_.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(d=(e.min.z-_.z)*g,h=(e.max.z-_.z)*g):(d=(e.max.z-_.z)*g,h=(e.min.z-_.z)*g),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,r,o,l){Qu.subVectors(t,e),El.subVectors(r,e),ed.crossVectors(Qu,El);let u=this.direction.dot(ed),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;_r.subVectors(this.origin,e);const h=d*this.direction.dot(El.crossVectors(_r,El));if(h<0)return null;const p=d*this.direction.dot(Qu.cross(_r));if(p<0||h+p>u)return null;const m=-d*_r.dot(ed);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,t,r,o,l,u,d,h,p,m,g,_,S,E,T,M){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,h,p,m,g,_,S,E,T,M)}set(e,t,r,o,l,u,d,h,p,m,g,_,S,E,T,M){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=d,y[13]=h,y[2]=p,y[6]=m,y[10]=g,y[14]=_,y[3]=S,y[7]=E,y[11]=T,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),u=1/Os.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),p=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const _=u*m,S=u*g,E=d*m,T=d*g;t[0]=h*m,t[4]=-h*g,t[8]=p,t[1]=S+E*p,t[5]=_-T*p,t[9]=-d*h,t[2]=T-_*p,t[6]=E+S*p,t[10]=u*h}else if(e.order==="YXZ"){const _=h*m,S=h*g,E=p*m,T=p*g;t[0]=_+T*d,t[4]=E*d-S,t[8]=u*p,t[1]=u*g,t[5]=u*m,t[9]=-d,t[2]=S*d-E,t[6]=T+_*d,t[10]=u*h}else if(e.order==="ZXY"){const _=h*m,S=h*g,E=p*m,T=p*g;t[0]=_-T*d,t[4]=-u*g,t[8]=E+S*d,t[1]=S+E*d,t[5]=u*m,t[9]=T-_*d,t[2]=-u*p,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const _=u*m,S=u*g,E=d*m,T=d*g;t[0]=h*m,t[4]=E*p-S,t[8]=_*p+T,t[1]=h*g,t[5]=T*p+_,t[9]=S*p-E,t[2]=-p,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const _=u*h,S=u*p,E=d*h,T=d*p;t[0]=h*m,t[4]=T-_*g,t[8]=E*g+S,t[1]=g,t[5]=u*m,t[9]=-d*m,t[2]=-p*m,t[6]=S*g+E,t[10]=_-T*g}else if(e.order==="XZY"){const _=u*h,S=u*p,E=d*h,T=d*p;t[0]=h*m,t[4]=-g,t[8]=p*m,t[1]=_*g+T,t[5]=u*m,t[9]=S*g-E,t[2]=E*g-S,t[6]=d*m,t[10]=T*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ry,e,sy)}lookAt(e,t,r){const o=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),yr.crossVectors(r,qn),yr.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),yr.crossVectors(r,qn)),yr.normalize(),wl.crossVectors(qn,yr),o[0]=yr.x,o[4]=wl.x,o[8]=qn.x,o[1]=yr.y,o[5]=wl.y,o[9]=qn.y,o[2]=yr.z,o[6]=wl.z,o[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],h=r[8],p=r[12],m=r[1],g=r[5],_=r[9],S=r[13],E=r[2],T=r[6],M=r[10],y=r[14],I=r[3],P=r[7],R=r[11],H=r[15],O=o[0],k=o[4],G=o[8],N=o[12],A=o[1],z=o[5],re=o[9],J=o[13],ue=o[2],fe=o[6],ae=o[10],de=o[14],V=o[3],le=o[7],oe=o[11],U=o[15];return l[0]=u*O+d*A+h*ue+p*V,l[4]=u*k+d*z+h*fe+p*le,l[8]=u*G+d*re+h*ae+p*oe,l[12]=u*N+d*J+h*de+p*U,l[1]=m*O+g*A+_*ue+S*V,l[5]=m*k+g*z+_*fe+S*le,l[9]=m*G+g*re+_*ae+S*oe,l[13]=m*N+g*J+_*de+S*U,l[2]=E*O+T*A+M*ue+y*V,l[6]=E*k+T*z+M*fe+y*le,l[10]=E*G+T*re+M*ae+y*oe,l[14]=E*N+T*J+M*de+y*U,l[3]=I*O+P*A+R*ue+H*V,l[7]=I*k+P*z+R*fe+H*le,l[11]=I*G+P*re+R*ae+H*oe,l[15]=I*N+P*J+R*de+H*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],m=e[2],g=e[6],_=e[10],S=e[14],E=e[3],T=e[7],M=e[11],y=e[15];return E*(+l*h*g-o*p*g-l*d*_+r*p*_+o*d*S-r*h*S)+T*(+t*h*S-t*p*_+l*u*_-o*u*S+o*p*m-l*h*m)+M*(+t*p*g-t*d*S-l*u*g+r*u*S+l*d*m-r*p*m)+y*(-o*d*m-t*h*g+t*d*_+o*u*g-r*u*_+r*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],m=e[8],g=e[9],_=e[10],S=e[11],E=e[12],T=e[13],M=e[14],y=e[15],I=g*M*p-T*_*p+T*h*S-d*M*S-g*h*y+d*_*y,P=E*_*p-m*M*p-E*h*S+u*M*S+m*h*y-u*_*y,R=m*T*p-E*g*p+E*d*S-u*T*S-m*d*y+u*g*y,H=E*g*h-m*T*h-E*d*_+u*T*_+m*d*M-u*g*M,O=t*I+r*P+o*R+l*H;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=I*k,e[1]=(T*_*l-g*M*l-T*o*S+r*M*S+g*o*y-r*_*y)*k,e[2]=(d*M*l-T*h*l+T*o*p-r*M*p-d*o*y+r*h*y)*k,e[3]=(g*h*l-d*_*l-g*o*p+r*_*p+d*o*S-r*h*S)*k,e[4]=P*k,e[5]=(m*M*l-E*_*l+E*o*S-t*M*S-m*o*y+t*_*y)*k,e[6]=(E*h*l-u*M*l-E*o*p+t*M*p+u*o*y-t*h*y)*k,e[7]=(u*_*l-m*h*l+m*o*p-t*_*p-u*o*S+t*h*S)*k,e[8]=R*k,e[9]=(E*g*l-m*T*l-E*r*S+t*T*S+m*r*y-t*g*y)*k,e[10]=(u*T*l-E*d*l+E*r*p-t*T*p-u*r*y+t*d*y)*k,e[11]=(m*d*l-u*g*l-m*r*p+t*g*p+u*r*S-t*d*S)*k,e[12]=H*k,e[13]=(m*T*o-E*g*o+E*r*_-t*T*_-m*r*M+t*g*M)*k,e[14]=(E*d*o-u*T*o-E*r*h+t*T*h+u*r*M-t*d*M)*k,e[15]=(u*g*o-m*d*o+m*r*h-t*g*h-u*r*_+t*d*_)*k,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,h=e.z,p=l*u,m=l*d;return this.set(p*u+r,p*d-o*h,p*h+o*d,0,p*d+o*h,m*d+r,m*h-o*u,0,p*h-o*d,m*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,p=l+l,m=u+u,g=d+d,_=l*p,S=l*m,E=l*g,T=u*m,M=u*g,y=d*g,I=h*p,P=h*m,R=h*g,H=r.x,O=r.y,k=r.z;return o[0]=(1-(T+y))*H,o[1]=(S+R)*H,o[2]=(E-P)*H,o[3]=0,o[4]=(S-R)*O,o[5]=(1-(_+y))*O,o[6]=(M+I)*O,o[7]=0,o[8]=(E+P)*k,o[9]=(M-I)*k,o[10]=(1-(_+T))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Os.set(o[0],o[1],o[2]).length();const u=Os.set(o[4],o[5],o[6]).length(),d=Os.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ui.copy(this);const p=1/l,m=1/u,g=1/d;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=m,ui.elements[5]*=m,ui.elements[6]*=m,ui.elements[8]*=g,ui.elements[9]*=g,ui.elements[10]*=g,t.setFromRotationMatrix(ui),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=Xi){const h=this.elements,p=2*l/(t-e),m=2*l/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let S,E;if(d===Xi)S=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(d===Zl)S=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Xi){const h=this.elements,p=1/(t-e),m=1/(r-o),g=1/(u-l),_=(t+e)*p,S=(r+o)*m;let E,T;if(d===Xi)E=(u+l)*g,T=-2*g;else if(d===Zl)E=l*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Os=new X,ui=new Ft,ry=new X(0,0,0),sy=new X(1,1,1),yr=new X,wl=new X,qn=new X,Tm=new Ft,bm=new la;class bi{constructor(e=0,t=0,r=0,o=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],p=o[5],m=o[9],g=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bm.setFromEuler(this),this.setFromQuaternion(bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oy=0;const Am=new X,Fs=new la,Vi=new Ft,Tl=new X,qo=new X,ay=new X,ly=new la,Cm=new X(1,0,0),Rm=new X(0,1,0),Nm=new X(0,0,1),Pm={type:"added"},cy={type:"removed"},zs={type:"childadded",child:null},td={type:"childremoved",child:null};class Nn extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new X,t=new bi,r=new la,o=new X(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ft}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(Nm,e)}translateOnAxis(e,t){return Am.copy(e).applyQuaternion(this.quaternion),this.position.add(Am.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(Nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Tl.copy(e):Tl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(qo,Tl,this.up):Vi.lookAt(Tl,qo,this.up),this.quaternion.setFromRotationMatrix(Vi),o&&(Vi.extractRotation(o.matrixWorld),Fs.setFromRotationMatrix(Vi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pm),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cy),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,ay),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,ly,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),m=u(e.images),g=u(e.shapes),_=u(e.skeletons),S=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const h=[];for(const p in d){const m=d[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Nn.DEFAULT_UP=new X(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new X,Hi=new X,nd=new X,Gi=new X,Bs=new X,Vs=new X,Lm=new X,id=new X,rd=new X,sd=new X,od=new Pt,ad=new Pt,ld=new Pt;class hi{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),di.subVectors(e,t),o.cross(di);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){di.subVectors(o,t),Hi.subVectors(r,t),nd.subVectors(e,t);const u=di.dot(di),d=di.dot(Hi),h=di.dot(nd),p=Hi.dot(Hi),m=Hi.dot(nd),g=u*p-d*d;if(g===0)return l.set(0,0,0),null;const _=1/g,S=(p*h-d*m)*_,E=(u*m-d*h)*_;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,r,o,l,u,d,h){return this.getBarycoord(e,t,r,o,Gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Gi.x),h.addScaledVector(u,Gi.y),h.addScaledVector(d,Gi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return od.setScalar(0),ad.setScalar(0),ld.setScalar(0),od.fromBufferAttribute(e,t),ad.fromBufferAttribute(e,r),ld.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(od,l.x),u.addScaledVector(ad,l.y),u.addScaledVector(ld,l.z),u}static isFrontFacing(e,t,r,o){return di.subVectors(r,t),Hi.subVectors(e,t),di.cross(Hi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return hi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Bs.subVectors(o,r),Vs.subVectors(l,r),id.subVectors(e,r);const h=Bs.dot(id),p=Vs.dot(id);if(h<=0&&p<=0)return t.copy(r);rd.subVectors(e,o);const m=Bs.dot(rd),g=Vs.dot(rd);if(m>=0&&g<=m)return t.copy(o);const _=h*g-m*p;if(_<=0&&h>=0&&m<=0)return u=h/(h-m),t.copy(r).addScaledVector(Bs,u);sd.subVectors(e,l);const S=Bs.dot(sd),E=Vs.dot(sd);if(E>=0&&S<=E)return t.copy(l);const T=S*p-h*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(r).addScaledVector(Vs,d);const M=m*E-S*g;if(M<=0&&g-m>=0&&S-E>=0)return Lm.subVectors(l,o),d=(g-m)/(g-m+(S-E)),t.copy(o).addScaledVector(Lm,d);const y=1/(M+T+_);return u=T*y,d=_*y,t.copy(r).addScaledVector(Bs,u).addScaledVector(Vs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},bl={h:0,s:0,l:0};function cd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class yt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=At.workingColorSpace){if(e=X_(e,1),t=gt(t,0,1),r=gt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=cd(u,l,e+1/3),this.g=cd(u,l,e),this.b=cd(u,l,e-1/3)}return At.toWorkingColorSpace(this,o),this}setStyle(e,t=$n){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){const r=Jg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return At.fromWorkingColorSpace(Mn.copy(this),e),Math.round(gt(Mn.r*255,0,255))*65536+Math.round(gt(Mn.g*255,0,255))*256+Math.round(gt(Mn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(Mn.copy(this),t);const r=Mn.r,o=Mn.g,l=Mn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let h,p;const m=(d+u)/2;if(d===u)h=0,p=0;else{const g=u-d;switch(p=m<=.5?g/(u+d):g/(2-u-d),u){case r:h=(o-l)/g+(o<l?6:0);break;case o:h=(l-r)/g+2;break;case l:h=(r-o)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=$n){At.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,r=Mn.g,o=Mn.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(bl);const r=Xu(Sr.h,bl.h,t),o=Xu(Sr.s,bl.s,t),l=Xu(Sr.l,bl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new yt;yt.NAMES=Jg;let uy=0;class co extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=Ks,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Ad,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bd&&(r.blendSrc=this.blendSrc),this.blendDst!==Ad&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ti extends co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new X,Al=new Ke;let dy=0;class Vn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=_m,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=jo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array),o=Fn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array),o=Fn(o,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_m&&(e.usage=this.usage),e}}class Zg extends Vn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Qg extends Vn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $t extends Vn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let fy=0;const ni=new Ft,ud=new Nn,Hs=new X,Yn=new ca,Yo=new ca,un=new X;class En extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xg(e)?Qg:Zg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,r){return ni.makeTranslation(e,t,r),this.applyMatrix4(ni),this}scale(e,t,r){return ni.makeScale(e,t,r),this.applyMatrix4(ni),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $t(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ic);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Yo.setFromBufferAttribute(d),this.morphTargetsRelative?(un.addVectors(Yn.min,Yo.min),Yn.expandByPoint(un),un.addVectors(Yn.max,Yo.max),Yn.expandByPoint(un)):(Yn.expandByPoint(Yo.min),Yn.expandByPoint(Yo.max))}Yn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)un.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(un));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,m=d.count;p<m;p++)un.fromBufferAttribute(d,p),h&&(Hs.fromBufferAttribute(e,p),un.add(Hs)),o=Math.max(o,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let G=0;G<r.count;G++)d[G]=new X,h[G]=new X;const p=new X,m=new X,g=new X,_=new Ke,S=new Ke,E=new Ke,T=new X,M=new X;function y(G,N,A){p.fromBufferAttribute(r,G),m.fromBufferAttribute(r,N),g.fromBufferAttribute(r,A),_.fromBufferAttribute(l,G),S.fromBufferAttribute(l,N),E.fromBufferAttribute(l,A),m.sub(p),g.sub(p),S.sub(_),E.sub(_);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(T.copy(m).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(z),M.copy(g).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(z),d[G].add(T),d[N].add(T),d[A].add(T),h[G].add(M),h[N].add(M),h[A].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let G=0,N=I.length;G<N;++G){const A=I[G],z=A.start,re=A.count;for(let J=z,ue=z+re;J<ue;J+=3)y(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new X,R=new X,H=new X,O=new X;function k(G){H.fromBufferAttribute(o,G),O.copy(H);const N=d[G];P.copy(N),P.sub(H.multiplyScalar(H.dot(N))).normalize(),R.crossVectors(O,N);const z=R.dot(h[G])<0?-1:1;u.setXYZW(G,P.x,P.y,P.z,z)}for(let G=0,N=I.length;G<N;++G){const A=I[G],z=A.start,re=A.count;for(let J=z,ue=z+re;J<ue;J+=3)k(e.getX(J+0)),k(e.getX(J+1)),k(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new X,l=new X,u=new X,d=new X,h=new X,p=new X,m=new X,g=new X;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),T=e.getX(_+1),M=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,M),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),d.add(m),h.add(m),p.add(m),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(d,h){const p=d.array,m=d.itemSize,g=d.normalized,_=new p.constructor(h.length*m);let S=0,E=0;for(let T=0,M=h.length;T<M;T++){d.isInterleavedBufferAttribute?S=h[T]*d.data.stride+d.offset:S=h[T]*m;for(let y=0;y<m;y++)_[E++]=p[S++]}return new Vn(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],p=e(h,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let m=0,g=p.length;m<g;m++){const _=p[m],S=e(_,r);h.push(S)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let g=0,_=p.length;g<_;g++){const S=p[g];m.push(S.toJSON(e.data))}m.length>0&&(o[h]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],g=l[p];for(let _=0,S=g.length;_<S;_++)m.push(g[_].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Im=new Ft,Xr=new $g,Cl=new ic,Dm=new X,Rl=new X,Nl=new X,Pl=new X,dd=new X,Ll=new X,Um=new X,Il=new X;class It extends Nn{constructor(e=new En,t=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Ll.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const m=d[h],g=l[h];m!==0&&(dd.fromBufferAttribute(g,e),u?Ll.addScaledVector(dd,m):Ll.addScaledVector(dd.sub(t),m))}t.add(Ll)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(l),Xr.copy(e.ray).recast(e.near),!(Cl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Cl,Dm)===null||Xr.origin.distanceToSquared(Dm)>(e.far-e.near)**2))&&(Im.copy(l).invert(),Xr.copy(e.ray).applyMatrix4(Im),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,_=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,T=_.length;E<T;E++){const M=_[E],y=u[M.materialIndex],I=Math.max(M.start,S.start),P=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let R=I,H=P;R<H;R+=3){const O=d.getX(R),k=d.getX(R+1),G=d.getX(R+2);o=Dl(this,y,e,r,p,m,g,O,k,G),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let M=E,y=T;M<y;M+=3){const I=d.getX(M),P=d.getX(M+1),R=d.getX(M+2);o=Dl(this,u,e,r,p,m,g,I,P,R),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,T=_.length;E<T;E++){const M=_[E],y=u[M.materialIndex],I=Math.max(M.start,S.start),P=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let R=I,H=P;R<H;R+=3){const O=R,k=R+1,G=R+2;o=Dl(this,y,e,r,p,m,g,O,k,G),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let M=E,y=T;M<y;M+=3){const I=M,P=M+1,R=M+2;o=Dl(this,u,e,r,p,m,g,I,P,R),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}}}function hy(s,e,t,r,o,l,u,d){let h;if(e.side===zn?h=r.intersectTriangle(u,l,o,!0,d):h=r.intersectTriangle(o,l,u,e.side===br,d),h===null)return null;Il.copy(d),Il.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Il);return p<t.near||p>t.far?null:{distance:p,point:Il.clone(),object:s}}function Dl(s,e,t,r,o,l,u,d,h,p){s.getVertexPosition(d,Rl),s.getVertexPosition(h,Nl),s.getVertexPosition(p,Pl);const m=hy(s,e,t,r,Rl,Nl,Pl,Um);if(m){const g=new X;hi.getBarycoord(Um,Rl,Nl,Pl,g),o&&(m.uv=hi.getInterpolatedAttribute(o,d,h,p,g,new Ke)),l&&(m.uv1=hi.getInterpolatedAttribute(l,d,h,p,g,new Ke)),u&&(m.normal=hi.getInterpolatedAttribute(u,d,h,p,g,new X),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const _={a:d,b:h,c:p,normal:new X,materialIndex:0};hi.getNormal(Rl,Nl,Pl,_.normal),m.face=_,m.barycoord=g}return m}class Ar extends En{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],m=[],g=[];let _=0,S=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(g,2));function E(T,M,y,I,P,R,H,O,k,G,N){const A=R/k,z=H/G,re=R/2,J=H/2,ue=O/2,fe=k+1,ae=G+1;let de=0,V=0;const le=new X;for(let oe=0;oe<ae;oe++){const U=oe*z-J;for(let se=0;se<fe;se++){const De=se*A-re;le[T]=De*I,le[M]=U*P,le[y]=ue,p.push(le.x,le.y,le.z),le[T]=0,le[M]=0,le[y]=O>0?1:-1,m.push(le.x,le.y,le.z),g.push(se/k),g.push(1-oe/G),de+=1}}for(let oe=0;oe<G;oe++)for(let U=0;U<k;U++){const se=_+U+fe*oe,De=_+U+fe*(oe+1),Z=_+(U+1)+fe*(oe+1),he=_+(U+1)+fe*oe;h.push(se,De,he),h.push(De,Z,he),V+=6}d.addGroup(S,V,N),S+=V,_+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const r=so(s[t]);for(const o in r)e[o]=r[o]}return e}function py(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function e0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const my={clone:so,merge:Cn};var gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gy,this.fragmentShader=xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class t0 extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new X,km=new Ke,Om=new Ke;class Rn extends t0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ff*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ff*2*Math.atan(Math.tan(Wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,km,Om),t.subVectors(Om,km)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gs=-90,js=1;class vy extends Nn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Rn(Gs,js,e,t);o.layers=this.layers,this.add(o);const l=new Rn(Gs,js,e,t);l.layers=this.layers,this.add(l);const u=new Rn(Gs,js,e,t);u.layers=this.layers,this.add(u);const d=new Rn(Gs,js,e,t);d.layers=this.layers,this.add(d);const h=new Rn(Gs,js,e,t);h.layers=this.layers,this.add(h);const p=new Rn(Gs,js,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,h]=t;for(const p of t)this.remove(p);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Zl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,_,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class n0 extends Bn{constructor(e,t,r,o,l,u,d,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:eo,super(e,t,r,o,l,u,d,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _y extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new n0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ar(5,5,5),l=new Cr({name:"CubemapFromEquirect",uniforms:so(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:wr});l.uniforms.tEquirect.value=t;const u=new It(o,l),d=t.minFilter;return t.minFilter===ns&&(t.minFilter=wi),new vy(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class mi extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yy={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const M=t.getJointPose(T,r),y=this._getHandJoint(p,T);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=m.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new mi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Rf extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hd=new X,Sy=new X,My=new ft;class Jr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=hd.subVectors(r,t).cross(Sy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(hd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||My.getNormalMatrix(e),o=this.coplanarPoint(hd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new ic,Ul=new X;class Nf{constructor(e=new Jr,t=new Jr,r=new Jr,o=new Jr,l=new Jr,u=new Jr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Xi){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],h=o[3],p=o[4],m=o[5],g=o[6],_=o[7],S=o[8],E=o[9],T=o[10],M=o[11],y=o[12],I=o[13],P=o[14],R=o[15];if(r[0].setComponents(h-l,_-p,M-S,R-y).normalize(),r[1].setComponents(h+l,_+p,M+S,R+y).normalize(),r[2].setComponents(h+u,_+m,M+E,R+I).normalize(),r[3].setComponents(h-u,_-m,M-E,R-I).normalize(),r[4].setComponents(h-d,_-g,M-T,R-P).normalize(),t===Xi)r[5].setComponents(h+d,_+g,M+T,R+P).normalize();else if(t===Zl)r[5].setComponents(d,g,T,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ul.x=o.normal.x>0?e.max.x:e.min.x,Ul.y=o.normal.y>0?e.max.y:e.min.y,Ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rc extends co{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fm=new Ft,hf=new $g,kl=new ic,Ol=new X;class Pf extends Nn{constructor(e=new En,t=new rc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(o),kl.radius+=l,e.ray.intersectsSphere(kl)===!1)return;Fm.copy(o).invert(),hf.copy(e.ray).applyMatrix4(Fm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=r.index,g=r.attributes.position;if(p!==null){const _=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let E=_,T=S;E<T;E++){const M=p.getX(E);Ol.fromBufferAttribute(g,M),zm(Ol,M,h,o,e,t,this)}}else{const _=Math.max(0,u.start),S=Math.min(g.count,u.start+u.count);for(let E=_,T=S;E<T;E++)Ol.fromBufferAttribute(g,E),zm(Ol,E,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function zm(s,e,t,r,o,l,u){const d=hf.distanceSqToPoint(s);if(d<t){const h=new X;hf.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class i0 extends Bn{constructor(e,t,r,o,l,u,d,h,p,m=Js){if(m!==Js&&m!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Js&&(r=is),r===void 0&&m===io&&(r=no),super(null,o,l,u,d,h,m,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:gi,this.minFilter=h!==void 0?h:gi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,h=l-1,p;for(;d<=h;)if(o=Math.floor(d+(h-d)/2),p=r[o]-u,p<0)d=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const m=r[o],_=r[o+1]-m,S=(u-m)/_;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),h=t||(u.isVector2?new Ke:new X);return h.copy(d).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new X,o=[],l=[],u=[],d=new X,h=new Ft;for(let S=0;S<=e;S++){const E=S/e;o[S]=this.getTangentAt(E,new X)}l[0]=new X,u[0]=new X;let p=Number.MAX_VALUE;const m=Math.abs(o[0].x),g=Math.abs(o[0].y),_=Math.abs(o[0].z);m<=p&&(p=m,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),_<=p&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),d.crossVectors(o[S-1],o[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(gt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(d,E))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(gt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(o[E],S*E)),u[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Lf extends Ai{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=h}getPoint(e,t=new Ke){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=h-this.aX,S=p-this.aY;h=_*m-S*g+this.aX,p=_*g+S*m+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ey extends Lf{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function If(){let s=0,e=0,t=0,r=0;function o(l,u,d,h){s=l,e=d,t=-3*l+3*u-2*d-h,r=2*l-2*u+d+h}return{initCatmullRom:function(l,u,d,h,p){o(u,d,p*(d-l),p*(h-u))},initNonuniformCatmullRom:function(l,u,d,h,p,m,g){let _=(u-l)/p-(d-l)/(p+m)+(d-u)/m,S=(d-u)/m-(h-u)/(m+g)+(h-d)/g;_*=m,S*=m,o(u,d,_,S)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const Fl=new X,pd=new If,md=new If,gd=new If;class wy extends Ai{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new X){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),h=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:h===0&&d===l-1&&(d=l-2,h=1);let p,m;this.closed||d>0?p=o[(d-1)%l]:(Fl.subVectors(o[0],o[1]).add(o[0]),p=Fl);const g=o[d%l],_=o[(d+1)%l];if(this.closed||d+2<l?m=o[(d+2)%l]:(Fl.subVectors(o[l-1],o[l-2]).add(o[l-1]),m=Fl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(g),S),T=Math.pow(g.distanceToSquared(_),S),M=Math.pow(_.distanceToSquared(m),S);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),pd.initNonuniformCatmullRom(p.x,g.x,_.x,m.x,E,T,M),md.initNonuniformCatmullRom(p.y,g.y,_.y,m.y,E,T,M),gd.initNonuniformCatmullRom(p.z,g.z,_.z,m.z,E,T,M)}else this.curveType==="catmullrom"&&(pd.initCatmullRom(p.x,g.x,_.x,m.x,this.tension),md.initCatmullRom(p.y,g.y,_.y,m.y,this.tension),gd.initCatmullRom(p.z,g.z,_.z,m.z,this.tension));return r.set(pd.calc(h),md.calc(h),gd.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new X().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,h=s*d;return(2*t-2*r+l+u)*h+(-3*t+3*r-2*l-u)*d+l*s+t}function Ty(s,e){const t=1-s;return t*t*e}function by(s,e){return 2*(1-s)*s*e}function Ay(s,e){return s*s*e}function Jo(s,e,t,r){return Ty(s,e)+by(s,t)+Ay(s,r)}function Cy(s,e){const t=1-s;return t*t*t*e}function Ry(s,e){const t=1-s;return 3*t*t*s*e}function Ny(s,e){return 3*(1-s)*s*s*e}function Py(s,e){return s*s*s*e}function Zo(s,e,t,r,o){return Cy(s,e)+Ry(s,t)+Ny(s,r)+Py(s,o)}class r0 extends Ai{constructor(e=new Ke,t=new Ke,r=new Ke,o=new Ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ke){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Zo(e,o.x,l.x,u.x,d.x),Zo(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ly extends Ai{constructor(e=new X,t=new X,r=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Zo(e,o.x,l.x,u.x,d.x),Zo(e,o.y,l.y,u.y,d.y),Zo(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class s0 extends Ai{constructor(e=new Ke,t=new Ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ke){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iy extends Ai{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class o0 extends Ai{constructor(e=new Ke,t=new Ke,r=new Ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ke){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(Jo(e,o.x,l.x,u.x),Jo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dy extends Ai{constructor(e=new X,t=new X,r=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(Jo(e,o.x,l.x,u.x),Jo(e,o.y,l.y,u.y),Jo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a0 extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ke){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,h=o[u===0?u:u-1],p=o[u],m=o[u>o.length-2?o.length-1:u+1],g=o[u>o.length-3?o.length-1:u+2];return r.set(Bm(d,h.x,p.x,m.x,g.x),Bm(d,h.y,p.y,m.y,g.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ke().fromArray(o))}return this}}var Vm=Object.freeze({__proto__:null,ArcCurve:Ey,CatmullRomCurve3:wy,CubicBezierCurve:r0,CubicBezierCurve3:Ly,EllipseCurve:Lf,LineCurve:s0,LineCurve3:Iy,QuadraticBezierCurve:o0,QuadraticBezierCurve3:Dy,SplineCurve:a0});class Uy extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vm[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const u=o[l]-r,d=this.curves[l],h=d.getLength(),p=h===0?0:1-u/h;return d.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const u=l[o],d=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,h=u.getPoints(d);for(let p=0;p<h.length;p++){const m=h[p];r&&r.equals(m)||(t.push(m),r=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Vm[o.type]().fromJSON(o))}return this}}class Hm extends Uy{constructor(e){super(),this.type="Path",this.currentPoint=new Ke,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new s0(this.currentPoint.clone(),new Ke(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new o0(this.currentPoint.clone(),new Ke(e,t),new Ke(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,u){const d=new r0(this.currentPoint.clone(),new Ke(e,t),new Ke(r,o),new Ke(l,u));return this.curves.push(d),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new a0(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,u){const d=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+d,t+h,r,o,l,u),this}absarc(e,t,r,o,l,u){return this.absellipse(e,t,r,r,o,l,u),this}ellipse(e,t,r,o,l,u,d,h){const p=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+p,t+m,r,o,l,u,d,h),this}absellipse(e,t,r,o,l,u,d,h){const p=new Lf(e,t,r,o,l,u,d,h);if(this.curves.length>0){const g=p.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(p);const m=p.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class oo extends En{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const m=[],g=[],_=[],S=[];let E=0;const T=[],M=r/2;let y=0;I(),u===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(m),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(S,2));function I(){const R=new X,H=new X;let O=0;const k=(t-e)/r;for(let G=0;G<=l;G++){const N=[],A=G/l,z=A*(t-e)+e;for(let re=0;re<=o;re++){const J=re/o,ue=J*h+d,fe=Math.sin(ue),ae=Math.cos(ue);H.x=z*fe,H.y=-A*r+M,H.z=z*ae,g.push(H.x,H.y,H.z),R.set(fe,k,ae).normalize(),_.push(R.x,R.y,R.z),S.push(J,1-A),N.push(E++)}T.push(N)}for(let G=0;G<o;G++)for(let N=0;N<l;N++){const A=T[N][G],z=T[N+1][G],re=T[N+1][G+1],J=T[N][G+1];(e>0||N!==0)&&(m.push(A,z,J),O+=3),(t>0||N!==l-1)&&(m.push(z,re,J),O+=3)}p.addGroup(y,O,0),y+=O}function P(R){const H=E,O=new Ke,k=new X;let G=0;const N=R===!0?e:t,A=R===!0?1:-1;for(let re=1;re<=o;re++)g.push(0,M*A,0),_.push(0,A,0),S.push(.5,.5),E++;const z=E;for(let re=0;re<=o;re++){const ue=re/o*h+d,fe=Math.cos(ue),ae=Math.sin(ue);k.x=N*ae,k.y=M*A,k.z=N*fe,g.push(k.x,k.y,k.z),_.push(0,A,0),O.x=fe*.5+.5,O.y=ae*.5*A+.5,S.push(O.x,O.y),E++}for(let re=0;re<o;re++){const J=H+re,ue=z+re;R===!0?m.push(ue,ue+1,J):m.push(ue+1,ue,J),G+=3}p.addGroup(y,G,R===!0?1:2),y+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Df extends oo{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,d=Math.PI*2){super(0,e,t,r,o,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Df(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class l0 extends Hm{constructor(e){super(e),this.uuid=lo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new Hm().fromJSON(o))}return this}}const ky={triangulate:function(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=c0(s,0,o,t,!0);const u=[];if(!l||l.next===l.prev)return u;let d,h,p,m,g,_,S;if(r&&(l=Vy(s,e,l,t)),s.length>80*t){d=p=s[0],h=m=s[1];for(let E=t;E<o;E+=t)g=s[E],_=s[E+1],g<d&&(d=g),_<h&&(h=_),g>p&&(p=g),_>m&&(m=_);S=Math.max(p-d,m-h),S=S!==0?32767/S:0}return na(l,u,t,d,h,S,0),u}};function c0(s,e,t,r,o){let l,u;if(o===Zy(s,e,t,r)>0)for(l=e;l<t;l+=r)u=Gm(l,s[l],s[l+1],u);else for(l=t-r;l>=e;l-=r)u=Gm(l,s[l],s[l+1],u);return u&&sc(u,u.next)&&(ra(u),u=u.next),u}function ss(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(sc(t,t.next)||Wt(t.prev,t,t.next)===0)){if(ra(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function na(s,e,t,r,o,l,u){if(!s)return;!u&&l&&Xy(s,r,o,l);let d=s,h,p;for(;s.prev!==s.next;){if(h=s.prev,p=s.next,l?Fy(s,r,o,l):Oy(s)){e.push(h.i/t|0),e.push(s.i/t|0),e.push(p.i/t|0),ra(s),s=p.next,d=p.next;continue}if(s=p,s===d){u?u===1?(s=zy(ss(s),e,t),na(s,e,t,r,o,l,2)):u===2&&By(s,e,t,r,o,l):na(ss(s),e,t,r,o,l,1);break}}}function Oy(s){const e=s.prev,t=s,r=s.next;if(Wt(e,t,r)>=0)return!1;const o=e.x,l=t.x,u=r.x,d=e.y,h=t.y,p=r.y,m=o<l?o<u?o:u:l<u?l:u,g=d<h?d<p?d:p:h<p?h:p,_=o>l?o>u?o:u:l>u?l:u,S=d>h?d>p?d:p:h>p?h:p;let E=r.next;for(;E!==e;){if(E.x>=m&&E.x<=_&&E.y>=g&&E.y<=S&&qs(o,d,l,h,u,p,E.x,E.y)&&Wt(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function Fy(s,e,t,r){const o=s.prev,l=s,u=s.next;if(Wt(o,l,u)>=0)return!1;const d=o.x,h=l.x,p=u.x,m=o.y,g=l.y,_=u.y,S=d<h?d<p?d:p:h<p?h:p,E=m<g?m<_?m:_:g<_?g:_,T=d>h?d>p?d:p:h>p?h:p,M=m>g?m>_?m:_:g>_?g:_,y=pf(S,E,e,t,r),I=pf(T,M,e,t,r);let P=s.prevZ,R=s.nextZ;for(;P&&P.z>=y&&R&&R.z<=I;){if(P.x>=S&&P.x<=T&&P.y>=E&&P.y<=M&&P!==o&&P!==u&&qs(d,m,h,g,p,_,P.x,P.y)&&Wt(P.prev,P,P.next)>=0||(P=P.prevZ,R.x>=S&&R.x<=T&&R.y>=E&&R.y<=M&&R!==o&&R!==u&&qs(d,m,h,g,p,_,R.x,R.y)&&Wt(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;P&&P.z>=y;){if(P.x>=S&&P.x<=T&&P.y>=E&&P.y<=M&&P!==o&&P!==u&&qs(d,m,h,g,p,_,P.x,P.y)&&Wt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;R&&R.z<=I;){if(R.x>=S&&R.x<=T&&R.y>=E&&R.y<=M&&R!==o&&R!==u&&qs(d,m,h,g,p,_,R.x,R.y)&&Wt(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function zy(s,e,t){let r=s;do{const o=r.prev,l=r.next.next;!sc(o,l)&&u0(o,r,r.next,l)&&ia(o,l)&&ia(l,o)&&(e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ra(r),ra(r.next),r=s=l),r=r.next}while(r!==s);return ss(r)}function By(s,e,t,r,o,l){let u=s;do{let d=u.next.next;for(;d!==u.prev;){if(u.i!==d.i&&$y(u,d)){let h=d0(u,d);u=ss(u,u.next),h=ss(h,h.next),na(u,e,t,r,o,l,0),na(h,e,t,r,o,l,0);return}d=d.next}u=u.next}while(u!==s)}function Vy(s,e,t,r){const o=[];let l,u,d,h,p;for(l=0,u=e.length;l<u;l++)d=e[l]*r,h=l<u-1?e[l+1]*r:s.length,p=c0(s,d,h,r,!1),p===p.next&&(p.steiner=!0),o.push(Yy(p));for(o.sort(Hy),l=0;l<o.length;l++)t=Gy(o[l],t);return t}function Hy(s,e){return s.x-e.x}function Gy(s,e){const t=jy(s,e);if(!t)return e;const r=d0(t,s);return ss(r,r.next),ss(t,t.next)}function jy(s,e){let t=e,r=-1/0,o;const l=s.x,u=s.y;do{if(u<=t.y&&u>=t.next.y&&t.next.y!==t.y){const _=t.x+(u-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=l&&_>r&&(r=_,o=t.x<t.next.x?t:t.next,_===l))return o}t=t.next}while(t!==e);if(!o)return null;const d=o,h=o.x,p=o.y;let m=1/0,g;t=o;do l>=t.x&&t.x>=h&&l!==t.x&&qs(u<p?l:r,u,h,p,u<p?r:l,u,t.x,t.y)&&(g=Math.abs(u-t.y)/(l-t.x),ia(t,s)&&(g<m||g===m&&(t.x>o.x||t.x===o.x&&Wy(o,t)))&&(o=t,m=g)),t=t.next;while(t!==d);return o}function Wy(s,e){return Wt(s.prev,s,e.prev)<0&&Wt(e.next,s,s.next)<0}function Xy(s,e,t,r){let o=s;do o.z===0&&(o.z=pf(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,qy(o)}function qy(s){let e,t,r,o,l,u,d,h,p=1;do{for(t=s,s=null,l=null,u=0;t;){for(u++,r=t,d=0,e=0;e<p&&(d++,r=r.nextZ,!!r);e++);for(h=p;d>0||h>0&&r;)d!==0&&(h===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,d--):(o=r,r=r.nextZ,h--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;t=r}l.nextZ=null,p*=2}while(u>1);return s}function pf(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Yy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function qs(s,e,t,r,o,l,u,d){return(o-u)*(e-d)>=(s-u)*(l-d)&&(s-u)*(r-d)>=(t-u)*(e-d)&&(t-u)*(l-d)>=(o-u)*(r-d)}function $y(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ky(s,e)&&(ia(s,e)&&ia(e,s)&&Jy(s,e)&&(Wt(s.prev,s,e.prev)||Wt(s,e.prev,e))||sc(s,e)&&Wt(s.prev,s,s.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function sc(s,e){return s.x===e.x&&s.y===e.y}function u0(s,e,t,r){const o=Bl(Wt(s,e,t)),l=Bl(Wt(s,e,r)),u=Bl(Wt(t,r,s)),d=Bl(Wt(t,r,e));return!!(o!==l&&u!==d||o===0&&zl(s,t,e)||l===0&&zl(s,r,e)||u===0&&zl(t,s,r)||d===0&&zl(t,e,r))}function zl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Bl(s){return s>0?1:s<0?-1:0}function Ky(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&u0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ia(s,e){return Wt(s.prev,s,s.next)<0?Wt(s,e,s.next)>=0&&Wt(s,s.prev,e)>=0:Wt(s,e,s.prev)<0||Wt(s,s.next,e)<0}function Jy(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function d0(s,e){const t=new mf(s.i,s.x,s.y),r=new mf(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Gm(s,e,t,r){const o=new mf(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function ra(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function mf(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Zy(s,e,t,r){let o=0;for(let l=e,u=t-r;l<t;l+=r)o+=(s[u]-s[l])*(s[l+1]+s[u+1]),u=l;return o}class Qo{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return Qo.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];jm(e),Wm(r,e);let u=e.length;t.forEach(jm);for(let h=0;h<t.length;h++)o.push(u),u+=t[h].length,Wm(r,t[h]);const d=ky.triangulate(r,o);for(let h=0;h<d.length;h+=3)l.push(d.slice(h,h+3));return l}}function jm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Wm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class oc extends En{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),h=Math.floor(o),p=d+1,m=h+1,g=e/d,_=t/h,S=[],E=[],T=[],M=[];for(let y=0;y<m;y++){const I=y*_-u;for(let P=0;P<p;P++){const R=P*g-l;E.push(R,-I,0),T.push(0,0,1),M.push(P/d),M.push(1-y/h)}}for(let y=0;y<h;y++)for(let I=0;I<d;I++){const P=I+p*y,R=I+p*(y+1),H=I+1+p*(y+1),O=I+1+p*y;S.push(P,R,O),S.push(R,H,O)}this.setIndex(S),this.setAttribute("position",new $t(E,3)),this.setAttribute("normal",new $t(T,3)),this.setAttribute("uv",new $t(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.width,e.height,e.widthSegments,e.heightSegments)}}class sa extends En{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const d=[],h=[],p=[],m=[];let g=e;const _=(t-e)/o,S=new X,E=new Ke;for(let T=0;T<=o;T++){for(let M=0;M<=r;M++){const y=l+M/r*u;S.x=g*Math.cos(y),S.y=g*Math.sin(y),h.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/t+1)/2,E.y=(S.y/t+1)/2,m.push(E.x,E.y)}g+=_}for(let T=0;T<o;T++){const M=T*(r+1);for(let y=0;y<r;y++){const I=y+M,P=I,R=I+r+1,H=I+r+2,O=I+1;d.push(P,R,O),d.push(R,H,O)}}this.setIndex(d),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Uf extends En{constructor(e=new l0([new Ke(0,.5),new Ke(-.5,-.5),new Ke(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],o=[],l=[],u=[];let d=0,h=0;if(Array.isArray(e)===!1)p(e);else for(let m=0;m<e.length;m++)p(e[m]),this.addGroup(d,h,m),d+=h,h=0;this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(u,2));function p(m){const g=o.length/3,_=m.extractPoints(t);let S=_.shape;const E=_.holes;Qo.isClockWise(S)===!1&&(S=S.reverse());for(let M=0,y=E.length;M<y;M++){const I=E[M];Qo.isClockWise(I)===!0&&(E[M]=I.reverse())}const T=Qo.triangulateShape(S,E);for(let M=0,y=E.length;M<y;M++){const I=E[M];S=S.concat(I)}for(let M=0,y=S.length;M<y;M++){const I=S[M];o.push(I.x,I.y,0),l.push(0,0,1),u.push(I.x,I.y)}for(let M=0,y=T.length;M<y;M++){const I=T[M],P=I[0]+g,R=I[1]+g,H=I[2]+g;r.push(P,R,H),h+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Qy(t,e)}static fromJSON(e,t){const r=[];for(let o=0,l=e.shapes.length;o<l;o++){const u=t[e.shapes[o]];r.push(u)}return new Uf(r,e.curveSegments)}}function Qy(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const o=s[t];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}class kf extends En{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let p=0;const m=[],g=new X,_=new X,S=[],E=[],T=[],M=[];for(let y=0;y<=r;y++){const I=[],P=y/r;let R=0;y===0&&u===0?R=.5/t:y===r&&h===Math.PI&&(R=-.5/t);for(let H=0;H<=t;H++){const O=H/t;g.x=-e*Math.cos(o+O*l)*Math.sin(u+P*d),g.y=e*Math.cos(u+P*d),g.z=e*Math.sin(o+O*l)*Math.sin(u+P*d),E.push(g.x,g.y,g.z),_.copy(g).normalize(),T.push(_.x,_.y,_.z),M.push(O+R,1-P),I.push(p++)}m.push(I)}for(let y=0;y<r;y++)for(let I=0;I<t;I++){const P=m[y][I+1],R=m[y][I],H=m[y+1][I],O=m[y+1][I+1];(y!==0||u>0)&&S.push(P,R,O),(y!==r-1||h<Math.PI)&&S.push(R,H,O)}this.setIndex(S),this.setAttribute("position",new $t(E,3)),this.setAttribute("normal",new $t(T,3)),this.setAttribute("uv",new $t(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ea extends En{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],h=[],p=[],m=new X,g=new X,_=new X;for(let S=0;S<=r;S++)for(let E=0;E<=o;E++){const T=E/o*l,M=S/r*Math.PI*2;g.x=(e+t*Math.cos(M))*Math.cos(T),g.y=(e+t*Math.cos(M))*Math.sin(T),g.z=t*Math.sin(M),d.push(g.x,g.y,g.z),m.x=e*Math.cos(T),m.y=e*Math.sin(T),_.subVectors(g,m).normalize(),h.push(_.x,_.y,_.z),p.push(E/o),p.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=o;E++){const T=(o+1)*S+E-1,M=(o+1)*(S-1)+E-1,y=(o+1)*(S-1)+E,I=(o+1)*S+E;u.push(T,M,I),u.push(M,y,I)}this.setIndex(u),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ys extends co{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jg,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eS extends co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tS extends co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class f0 extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xd=new Ft,Xm=new X,qm=new X;class nS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nf,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Xm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xm),qm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qm),t.updateMatrixWorld(),xd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ym=new Ft,$o=new X,vd=new X;class iS extends nS{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),$o.setFromMatrixPosition(e.matrixWorld),r.position.copy($o),vd.copy(r.position),vd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(vd),r.updateMatrixWorld(),o.makeTranslation(-$o.x,-$o.y,-$o.z),Ym.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ym)}}class h0 extends f0{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new iS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rS extends t0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=m*this.view.offsetY,h=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class p0 extends f0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sS extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class m0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$m(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$m();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $m(){return performance.now()}function Km(s,e,t,r){const o=oS(r);switch(t){case Og:return s*e;case zg:return s*e;case Bg:return s*e*2;case Vg:return s*e/o.components*o.byteLength;case bf:return s*e/o.components*o.byteLength;case Hg:return s*e*2/o.components*o.byteLength;case Af:return s*e*2/o.components*o.byteLength;case Fg:return s*e*3/o.components*o.byteLength;case pi:return s*e*4/o.components*o.byteLength;case Cf:return s*e*4/o.components*o.byteLength;case jl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Hd:return Math.max(s,16)*Math.max(e,8)/4;case zd:case Vd:return Math.max(s,8)*Math.max(e,8)/2;case Gd:case jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case $d:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ef:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case sf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case of:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yl:case af:case lf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Gg:case cf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case uf:case df:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oS(s){switch(s){case Yi:case Dg:return{byteLength:1,components:1};case ta:case Ug:case aa:return{byteLength:2,components:1};case wf:case Tf:return{byteLength:2,components:4};case is:case Ef:case Wi:return{byteLength:4,components:1};case kg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function g0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function aS(s){const e=new WeakMap;function t(d,h){const p=d.array,m=d.usage,g=p.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,p,m),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,h,p){const m=h.array,g=h.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,m);else{g.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<g.length;S++){const E=g[_],T=g[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,g[_]=T)}g.length=_+1;for(let S=0,E=g.length;S<E;S++){const T=g[S];s.bufferSubData(p,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:o,remove:l,update:u}}var lS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,PS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FS="gl_FragColor = linearToOutputTexel( gl_FragColor );",zS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$S=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:lS,alphahash_pars_fragment:cS,alphamap_fragment:uS,alphamap_pars_fragment:dS,alphatest_fragment:fS,alphatest_pars_fragment:hS,aomap_fragment:pS,aomap_pars_fragment:mS,batching_pars_vertex:gS,batching_vertex:xS,begin_vertex:vS,beginnormal_vertex:_S,bsdfs:yS,iridescence_fragment:SS,bumpmap_pars_fragment:MS,clipping_planes_fragment:ES,clipping_planes_pars_fragment:wS,clipping_planes_pars_vertex:TS,clipping_planes_vertex:bS,color_fragment:AS,color_pars_fragment:CS,color_pars_vertex:RS,color_vertex:NS,common:PS,cube_uv_reflection_fragment:LS,defaultnormal_vertex:IS,displacementmap_pars_vertex:DS,displacementmap_vertex:US,emissivemap_fragment:kS,emissivemap_pars_fragment:OS,colorspace_fragment:FS,colorspace_pars_fragment:zS,envmap_fragment:BS,envmap_common_pars_fragment:VS,envmap_pars_fragment:HS,envmap_pars_vertex:GS,envmap_physical_pars_fragment:eM,envmap_vertex:jS,fog_vertex:WS,fog_pars_vertex:XS,fog_fragment:qS,fog_pars_fragment:YS,gradientmap_pars_fragment:$S,lightmap_pars_fragment:KS,lights_lambert_fragment:JS,lights_lambert_pars_fragment:ZS,lights_pars_begin:QS,lights_toon_fragment:tM,lights_toon_pars_fragment:nM,lights_phong_fragment:iM,lights_phong_pars_fragment:rM,lights_physical_fragment:sM,lights_physical_pars_fragment:oM,lights_fragment_begin:aM,lights_fragment_maps:lM,lights_fragment_end:cM,logdepthbuf_fragment:uM,logdepthbuf_pars_fragment:dM,logdepthbuf_pars_vertex:fM,logdepthbuf_vertex:hM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:gM,map_particle_pars_fragment:xM,metalnessmap_fragment:vM,metalnessmap_pars_fragment:_M,morphinstance_vertex:yM,morphcolor_vertex:SM,morphnormal_vertex:MM,morphtarget_pars_vertex:EM,morphtarget_vertex:wM,normal_fragment_begin:TM,normal_fragment_maps:bM,normal_pars_fragment:AM,normal_pars_vertex:CM,normal_vertex:RM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:PM,clearcoat_normal_fragment_maps:LM,clearcoat_pars_fragment:IM,iridescence_pars_fragment:DM,opaque_fragment:UM,packing:kM,premultiplied_alpha_fragment:OM,project_vertex:FM,dithering_fragment:zM,dithering_pars_fragment:BM,roughnessmap_fragment:VM,roughnessmap_pars_fragment:HM,shadowmap_pars_fragment:GM,shadowmap_pars_vertex:jM,shadowmap_vertex:WM,shadowmask_pars_fragment:XM,skinbase_vertex:qM,skinning_pars_vertex:YM,skinning_vertex:$M,skinnormal_vertex:KM,specularmap_fragment:JM,specularmap_pars_fragment:ZM,tonemapping_fragment:QM,tonemapping_pars_fragment:eE,transmission_fragment:tE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:rE,uv_vertex:sE,worldpos_vertex:oE,background_vert:aE,background_frag:lE,backgroundCube_vert:cE,backgroundCube_frag:uE,cube_vert:dE,cube_frag:fE,depth_vert:hE,depth_frag:pE,distanceRGBA_vert:mE,distanceRGBA_frag:gE,equirect_vert:xE,equirect_frag:vE,linedashed_vert:_E,linedashed_frag:yE,meshbasic_vert:SE,meshbasic_frag:ME,meshlambert_vert:EE,meshlambert_frag:wE,meshmatcap_vert:TE,meshmatcap_frag:bE,meshnormal_vert:AE,meshnormal_frag:CE,meshphong_vert:RE,meshphong_frag:NE,meshphysical_vert:PE,meshphysical_frag:LE,meshtoon_vert:IE,meshtoon_frag:DE,points_vert:UE,points_frag:kE,shadow_vert:OE,shadow_frag:FE,sprite_vert:zE,sprite_frag:BE},Pe={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ei={basic:{uniforms:Cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Cn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Cn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Cn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Cn([Pe.points,Pe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Cn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Cn([Pe.common,Pe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Cn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Cn([Pe.sprite,Pe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Cn([Pe.common,Pe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Cn([Pe.lights,Pe.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ei.physical={uniforms:Cn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Vl={r:0,b:0,g:0},Yr=new bi,VE=new Ft;function HE(s,e,t,r,o,l,u){const d=new yt(0);let h=l===!0?0:1,p,m,g=null,_=0,S=null;function E(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?t:e).get(R)),R}function T(P){let R=!1;const H=E(P);H===null?y(d,h):H&&H.isColor&&(y(H,1),R=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(P,R){const H=E(R);H&&(H.isCubeTexture||H.mapping===nc)?(m===void 0&&(m=new It(new Ar(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:so(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,k,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Yr.copy(R.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),m.material.uniforms.envMap.value=H,m.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(VE.makeRotationFromEuler(Yr)),m.material.toneMapped=At.getTransfer(H.colorSpace)!==Nt,(g!==H||_!==H.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,g=H,_=H.version,S=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new It(new oc(2,2),new Cr({name:"BackgroundMaterial",uniforms:so(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=At.getTransfer(H.colorSpace)!==Nt,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||_!==H.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=H,_=H.version,S=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function y(P,R){P.getRGB(Vl,e0(s)),r.buffers.color.setClear(Vl.r,Vl.g,Vl.b,R,u)}function I(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,R=1){d.set(P),h=R,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,y(d,h)},render:T,addToRenderList:M,dispose:I}}function GE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function d(A,z,re,J,ue){let fe=!1;const ae=g(J,re,z);l!==ae&&(l=ae,p(l.object)),fe=S(A,J,re,ue),fe&&E(A,J,re,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,R(A,z,re,J),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return s.createVertexArray()}function p(A){return s.bindVertexArray(A)}function m(A){return s.deleteVertexArray(A)}function g(A,z,re){const J=re.wireframe===!0;let ue=r[A.id];ue===void 0&&(ue={},r[A.id]=ue);let fe=ue[z.id];fe===void 0&&(fe={},ue[z.id]=fe);let ae=fe[J];return ae===void 0&&(ae=_(h()),fe[J]=ae),ae}function _(A){const z=[],re=[],J=[];for(let ue=0;ue<t;ue++)z[ue]=0,re[ue]=0,J[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:re,attributeDivisors:J,object:A,attributes:{},index:null}}function S(A,z,re,J){const ue=l.attributes,fe=z.attributes;let ae=0;const de=re.getAttributes();for(const V in de)if(de[V].location>=0){const oe=ue[V];let U=fe[V];if(U===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),oe===void 0||oe.attribute!==U||U&&oe.data!==U.data)return!0;ae++}return l.attributesNum!==ae||l.index!==J}function E(A,z,re,J){const ue={},fe=z.attributes;let ae=0;const de=re.getAttributes();for(const V in de)if(de[V].location>=0){let oe=fe[V];oe===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor));const U={};U.attribute=oe,oe&&oe.data&&(U.data=oe.data),ue[V]=U,ae++}l.attributes=ue,l.attributesNum=ae,l.index=J}function T(){const A=l.newAttributes;for(let z=0,re=A.length;z<re;z++)A[z]=0}function M(A){y(A,0)}function y(A,z){const re=l.newAttributes,J=l.enabledAttributes,ue=l.attributeDivisors;re[A]=1,J[A]===0&&(s.enableVertexAttribArray(A),J[A]=1),ue[A]!==z&&(s.vertexAttribDivisor(A,z),ue[A]=z)}function I(){const A=l.newAttributes,z=l.enabledAttributes;for(let re=0,J=z.length;re<J;re++)z[re]!==A[re]&&(s.disableVertexAttribArray(re),z[re]=0)}function P(A,z,re,J,ue,fe,ae){ae===!0?s.vertexAttribIPointer(A,z,re,ue,fe):s.vertexAttribPointer(A,z,re,J,ue,fe)}function R(A,z,re,J){T();const ue=J.attributes,fe=re.getAttributes(),ae=z.defaultAttributeValues;for(const de in fe){const V=fe[de];if(V.location>=0){let le=ue[de];if(le===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){const oe=le.normalized,U=le.itemSize,se=e.get(le);if(se===void 0)continue;const De=se.buffer,Z=se.type,he=se.bytesPerElement,Ee=Z===s.INT||Z===s.UNSIGNED_INT||le.gpuType===Ef;if(le.isInterleavedBufferAttribute){const xe=le.data,Ce=xe.stride,Xe=le.offset;if(xe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<V.locationSize;Ue++)y(V.location+Ue,xe.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ue=0;Ue<V.locationSize;Ue++)M(V.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Ue=0;Ue<V.locationSize;Ue++)P(V.location+Ue,U/V.locationSize,Z,oe,Ce*he,(Xe+U/V.locationSize*Ue)*he,Ee)}else{if(le.isInstancedBufferAttribute){for(let xe=0;xe<V.locationSize;xe++)y(V.location+xe,le.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<V.locationSize;xe++)M(V.location+xe);s.bindBuffer(s.ARRAY_BUFFER,De);for(let xe=0;xe<V.locationSize;xe++)P(V.location+xe,U/V.locationSize,Z,oe,U*he,U/V.locationSize*xe*he,Ee)}}else if(ae!==void 0){const oe=ae[de];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(V.location,oe);break;case 3:s.vertexAttrib3fv(V.location,oe);break;case 4:s.vertexAttrib4fv(V.location,oe);break;default:s.vertexAttrib1fv(V.location,oe)}}}}I()}function H(){G();for(const A in r){const z=r[A];for(const re in z){const J=z[re];for(const ue in J)m(J[ue].object),delete J[ue];delete z[re]}delete r[A]}}function O(A){if(r[A.id]===void 0)return;const z=r[A.id];for(const re in z){const J=z[re];for(const ue in J)m(J[ue].object),delete J[ue];delete z[re]}delete r[A.id]}function k(A){for(const z in r){const re=r[z];if(re[A.id]===void 0)continue;const J=re[A.id];for(const ue in J)m(J[ue].object),delete J[ue];delete re[A.id]}}function G(){N(),u=!0,l!==o&&(l=o,p(l.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:G,resetDefaultState:N,dispose:H,releaseStatesOfGeometry:O,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:M,disableUnusedAttributes:I}}function jE(s,e,t){let r;function o(p){r=p}function l(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function u(p,m,g){g!==0&&(s.drawArraysInstanced(r,p,m,g),t.update(m,r,g))}function d(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,g);let S=0;for(let E=0;E<g;E++)S+=m[E];t.update(S,r,1)}function h(p,m,g,_){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)u(p[E],m[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,m,0,_,0,g);let E=0;for(let T=0;T<g;T++)E+=m[T]*_[T];t.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function WE(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==pi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const G=k===aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Yi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Wi&&!G)}function h(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=h(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:H,maxSamples:O}}function XE(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Jr,d=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||r!==0||o;return o=_,r=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,S){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,y=s.get(g);if(!o||E===null||E.length===0||l&&!M)l?m(null):p();else{const I=l?0:r,P=I*4;let R=y.clippingState||null;h.value=R,R=m(E,_,P,S);for(let H=0;H!==P;++H)R[H]=t[H];y.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,_,S,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=h.value,E!==!0||M===null){const y=S+T*4,I=_.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<y)&&(M=new Float32Array(y));for(let P=0,R=S;P!==T;++P,R+=4)u.copy(g[P]).applyMatrix4(I,d),u.normal.toArray(M,R),M[R+3]=u.constant}h.value=M,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function qE(s){let e=new WeakMap;function t(u,d){return d===Ud?u.mapping=eo:d===kd&&(u.mapping=to),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Ud||d===kd)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new _y(h.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const $s=4,Jm=[.125,.215,.35,.446,.526,.582],es=20,_d=new rS,Zm=new yt;let yd=null,Sd=0,Md=0,Ed=!1;const Zr=(1+Math.sqrt(5))/2,Ws=1/Zr,Qm=[new X(-Zr,Ws,0),new X(Zr,Ws,0),new X(-Ws,0,Zr),new X(Ws,0,Zr),new X(0,Zr,-Ws),new X(0,Zr,Ws),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Sd,Md),this._renderer.xr.enabled=Ed,e.scissorTest=!1,Hl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:aa,format:pi,colorSpace:ro,depthBuffer:!1},o=tg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YE(l)),this._blurMaterial=$E(l,e,t)}return o}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,_d)}_sceneToCubeUV(e,t,r,o){const d=new Rn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(Zm),m.toneMapping=Tr,m.autoClear=!1;const S=new Ti({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),E=new It(new Ar,S);let T=!1;const M=e.background;M?M.isColor&&(S.color.copy(M),e.background=null,T=!0):(S.color.copy(Zm),T=!0);for(let y=0;y<6;y++){const I=y%3;I===0?(d.up.set(0,h[y],0),d.lookAt(p[y],0,0)):I===1?(d.up.set(0,0,h[y]),d.lookAt(0,p[y],0)):(d.up.set(0,h[y],0),d.lookAt(0,0,p[y]));const P=this._cubeSize;Hl(o,I*P,y>2?P:0,P,P),m.setRenderTarget(o),T&&m.render(E,d),m.render(e,d)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=M}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===eo||e.mapping===to;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ng());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new It(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Hl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,_d)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Qm[(o-l-1)%Qm.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new It(this._lodPlanes[o],p),_=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*es-1),T=l/E,M=isFinite(l)?1+Math.floor(m*T):es;M>es&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${es}`);const y=[];let I=0;for(let k=0;k<es;++k){const G=k/T,N=Math.exp(-G*G/2);y.push(N),k===0?I+=N:k<M&&(I+=2*N)}for(let k=0;k<y.length;k++)y[k]=y[k]/I;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-r;const R=this._sizeLods[o],H=3*R*(o>P-$s?o-P+$s:0),O=4*(this._cubeSize-R);Hl(t,H,O,3*R,2*R),h.setRenderTarget(t),h.render(g,_d)}}function YE(s){const e=[],t=[],r=[];let o=s;const l=s-$s+1+Jm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let h=1/d;u>s-$s?h=Jm[u-s+$s-1]:u===0&&(h=0),r.push(h);const p=1/(d-2),m=-p,g=1+p,_=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,E=6,T=3,M=2,y=1,I=new Float32Array(T*E*S),P=new Float32Array(M*E*S),R=new Float32Array(y*E*S);for(let O=0;O<S;O++){const k=O%3*2/3-1,G=O>2?0:-1,N=[k,G,0,k+2/3,G,0,k+2/3,G+1,0,k,G,0,k+2/3,G+1,0,k,G+1,0];I.set(N,T*E*O),P.set(_,M*E*O);const A=[O,O,O,O,O,O];R.set(A,y*E*O)}const H=new En;H.setAttribute("position",new Vn(I,T)),H.setAttribute("uv",new Vn(P,M)),H.setAttribute("faceIndex",new Vn(R,y)),e.push(H),o>$s&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function tg(s,e,t){const r=new rs(s,e,t);return r.texture.mapping=nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function $E(s,e,t){const r=new Float32Array(es),o=new X(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function ng(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function ig(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Of(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function KE(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const h=d.mapping,p=h===Ud||h===kd,m=h===eo||h===to;if(p||m){let g=e.get(d);const _=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return t===null&&(t=new eg(s)),g=p?t.fromEquirectangular(d,g):t.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||m&&S&&o(S)?(t===null&&(t=new eg(s)),g=p?t.fromEquirectangular(d):t.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function o(d){let h=0;const p=6;for(let m=0;m<p;m++)d[m]!==void 0&&h++;return h===p}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function JE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Xs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function ZE(s,e,t,r){const o={},l=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(g,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function h(g){const _=g.attributes;for(const S in _)e.update(_[S],s.ARRAY_BUFFER)}function p(g){const _=[],S=g.index,E=g.attributes.position;let T=0;if(S!==null){const I=S.array;T=S.version;for(let P=0,R=I.length;P<R;P+=3){const H=I[P+0],O=I[P+1],k=I[P+2];_.push(H,O,O,k,k,H)}}else if(E!==void 0){const I=E.array;T=E.version;for(let P=0,R=I.length/3-1;P<R;P+=3){const H=P+0,O=P+1,k=P+2;_.push(H,O,O,k,k,H)}}else return;const M=new(Xg(_)?Qg:Zg)(_,1);M.version=T;const y=l.get(g);y&&e.remove(y),l.set(g,M)}function m(g){const _=l.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:d,update:h,getWireframeAttribute:m}}function QE(s,e,t){let r;function o(_){r=_}let l,u;function d(_){l=_.type,u=_.bytesPerElement}function h(_,S){s.drawElements(r,S,l,_*u),t.update(S,r,1)}function p(_,S,E){E!==0&&(s.drawElementsInstanced(r,S,l,_*u,E),t.update(S,r,E))}function m(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,_,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];t.update(M,r,1)}function g(_,S,E,T){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)p(_[y]/u,S[y],T[y]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,l,_,0,T,0,E);let y=0;for(let I=0;I<E;I++)y+=S[I]*T[I];t.update(y,r,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function ew(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function tw(s,e,t){const r=new WeakMap,o=new Pt;function l(u,d,h){const p=u.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let _=r.get(d);if(_===void 0||_.count!==g){let A=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var S=A;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),M===!0&&(R=3);let H=d.attributes.position.count*R,O=1;H>e.maxTextureSize&&(O=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const k=new Float32Array(H*O*4*g),G=new Yg(k,H,O,g);G.type=Wi,G.needsUpdate=!0;const N=R*4;for(let z=0;z<g;z++){const re=y[z],J=I[z],ue=P[z],fe=H*O*4*z;for(let ae=0;ae<re.count;ae++){const de=ae*N;E===!0&&(o.fromBufferAttribute(re,ae),k[fe+de+0]=o.x,k[fe+de+1]=o.y,k[fe+de+2]=o.z,k[fe+de+3]=0),T===!0&&(o.fromBufferAttribute(J,ae),k[fe+de+4]=o.x,k[fe+de+5]=o.y,k[fe+de+6]=o.z,k[fe+de+7]=0),M===!0&&(o.fromBufferAttribute(ue,ae),k[fe+de+8]=o.x,k[fe+de+9]=o.y,k[fe+de+10]=o.z,k[fe+de+11]=ue.itemSize===4?o.w:1)}}_={count:g,texture:G,size:new Ke(H,O)},r.set(d,_),d.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function nw(s,e,t,r){let o=new WeakMap;function l(h){const p=r.render.frame,m=h.geometry,g=e.get(h,m);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return g}function u(){o=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const x0=new Bn,rg=new i0(1,1),v0=new Yg,_0=new ny,y0=new n0,sg=[],og=[],ag=new Float32Array(16),lg=new Float32Array(9),cg=new Float32Array(4);function uo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=sg[o];if(l===void 0&&(l=new Float32Array(o),sg[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ac(s,e){let t=og[e];t===void 0&&(t=new Int32Array(e),og[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function iw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function aw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;cg.set(r),s.uniformMatrix2fv(this.addr,!1,cg),rn(t,r)}}function lw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;lg.set(r),s.uniformMatrix3fv(this.addr,!1,lg),rn(t,r)}}function cw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;ag.set(r),s.uniformMatrix4fv(this.addr,!1,ag),rn(t,r)}}function uw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function dw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function fw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function hw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function pw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function gw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function xw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function vw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(rg.compareFunction=Wg,l=rg):l=x0,t.setTexture2D(e||l,o)}function _w(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||_0,o)}function yw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||y0,o)}function Sw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||v0,o)}function Mw(s){switch(s){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return ow;case 35674:return aw;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return dw;case 35668:case 35672:return fw;case 35669:case 35673:return hw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return xw;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return _w;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}function Ew(s,e){s.uniform1fv(this.addr,e)}function ww(s,e){const t=uo(e,this.size,2);s.uniform2fv(this.addr,t)}function Tw(s,e){const t=uo(e,this.size,3);s.uniform3fv(this.addr,t)}function bw(s,e){const t=uo(e,this.size,4);s.uniform4fv(this.addr,t)}function Aw(s,e){const t=uo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Cw(s,e){const t=uo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Rw(s,e){const t=uo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Nw(s,e){s.uniform1iv(this.addr,e)}function Pw(s,e){s.uniform2iv(this.addr,e)}function Lw(s,e){s.uniform3iv(this.addr,e)}function Iw(s,e){s.uniform4iv(this.addr,e)}function Dw(s,e){s.uniform1uiv(this.addr,e)}function Uw(s,e){s.uniform2uiv(this.addr,e)}function kw(s,e){s.uniform3uiv(this.addr,e)}function Ow(s,e){s.uniform4uiv(this.addr,e)}function Fw(s,e,t){const r=this.cache,o=e.length,l=ac(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||x0,l[u])}function zw(s,e,t){const r=this.cache,o=e.length,l=ac(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||_0,l[u])}function Bw(s,e,t){const r=this.cache,o=e.length,l=ac(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||y0,l[u])}function Vw(s,e,t){const r=this.cache,o=e.length,l=ac(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||v0,l[u])}function Hw(s){switch(s){case 5126:return Ew;case 35664:return ww;case 35665:return Tw;case 35666:return bw;case 35674:return Aw;case 35675:return Cw;case 35676:return Rw;case 5124:case 35670:return Nw;case 35667:case 35671:return Pw;case 35668:case 35672:return Lw;case 35669:case 35673:return Iw;case 5125:return Dw;case 36294:return Uw;case 36295:return kw;case 36296:return Ow;case 35678:case 36198:case 36298:case 36306:case 35682:return Fw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return Bw;case 36289:case 36303:case 36311:case 36292:return Vw}}class Gw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Mw(t.type)}}class jw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hw(t.type)}}class Ww{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function ug(s,e){s.seq.push(e),s.map[e.id]=e}function Xw(s,e,t){const r=s.name,o=r.length;for(wd.lastIndex=0;;){const l=wd.exec(r),u=wd.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===o){ug(t,p===void 0?new Gw(d,s,e):new jw(d,s,e));break}else{let g=t.map[d];g===void 0&&(g=new Ww(d),ug(t,g)),t=g}}}class $l{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);Xw(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function dg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const qw=37297;let Yw=0;function $w(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const fg=new ft;function Kw(s){At._getMatrix(fg,At.workingColorSpace,s);const e=`mat3( ${fg.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case Jl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function hg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+$w(s.getShaderSource(e),u)}else return o}function Jw(s,e){const t=Kw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zw(s,e){let t;switch(e){case C_:t="Linear";break;case R_:t="Reinhard";break;case N_:t="Cineon";break;case P_:t="ACESFilmic";break;case I_:t="AgX";break;case D_:t="Neutral";break;case L_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gl=new X;function Qw(){At.getLuminanceCoefficients(Gl);const s=Gl.x.toFixed(4),e=Gl.y.toFixed(4),t=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function t1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function n1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Ko(s){return s!==""}function pg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i1=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(s){return s.replace(i1,s1)}const r1=new Map;function s1(s,e){let t=ht[e];if(t===void 0){const r=r1.get(e);if(r!==void 0)t=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return gf(t)}const o1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gg(s){return s.replace(o1,a1)}function a1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function xg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Pg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function c1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function d1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lg:e="ENVMAP_BLENDING_MULTIPLY";break;case b_:e="ENVMAP_BLENDING_MIX";break;case A_:e="ENVMAP_BLENDING_ADD";break}return e}function f1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function h1(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=l1(t),p=c1(t),m=u1(t),g=d1(t),_=f1(t),S=e1(t),E=t1(l),T=o.createProgram();let M,y,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ko).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ko).join(`
`),y.length>0&&(y+=`
`)):(M=[xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),y=[xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?ht.tonemapping_pars_fragment:"",t.toneMapping!==Tr?Zw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Jw("linearToOutputTexel",t.outputColorSpace),Qw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ko).join(`
`)),u=gf(u),u=pg(u,t),u=mg(u,t),d=gf(d),d=pg(d,t),d=mg(d,t),u=gg(u),d=gg(d),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",t.glslVersion===ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=I+M+u,R=I+y+d,H=dg(o,o.VERTEX_SHADER,P),O=dg(o,o.FRAGMENT_SHADER,R);o.attachShader(T,H),o.attachShader(T,O),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function k(z){if(s.debug.checkShaderErrors){const re=o.getProgramInfoLog(T).trim(),J=o.getShaderInfoLog(H).trim(),ue=o.getShaderInfoLog(O).trim();let fe=!0,ae=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,H,O);else{const de=hg(o,H,"vertex"),V=hg(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+re+`
`+de+`
`+V)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(J===""||ue==="")&&(ae=!1);ae&&(z.diagnostics={runnable:fe,programLog:re,vertexShader:{log:J,prefix:M},fragmentShader:{log:ue,prefix:y}})}o.deleteShader(H),o.deleteShader(O),G=new $l(o,T),N=n1(o,T)}let G;this.getUniforms=function(){return G===void 0&&k(this),G};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(T,qw)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=H,this.fragmentShader=O,this}let p1=0;class m1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new g1(e),t.set(e,r)),r}}class g1{constructor(e){this.id=p1++,this.code=e,this.usedTimes=0}}function x1(s,e,t,r,o,l,u){const d=new Kg,h=new m1,p=new Set,m=[],g=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return p.add(N),N===0?"uv":`uv${N}`}function M(N,A,z,re,J){const ue=re.fog,fe=J.geometry,ae=N.isMeshStandardMaterial?re.environment:null,de=(N.isMeshStandardMaterial?t:e).get(N.envMap||ae),V=de&&de.mapping===nc?de.image.height:null,le=E[N.type];N.precision!==null&&(S=o.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const oe=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=oe!==void 0?oe.length:0;let se=0;fe.morphAttributes.position!==void 0&&(se=1),fe.morphAttributes.normal!==void 0&&(se=2),fe.morphAttributes.color!==void 0&&(se=3);let De,Z,he,Ee;if(le){const Mt=Ei[le];De=Mt.vertexShader,Z=Mt.fragmentShader}else De=N.vertexShader,Z=N.fragmentShader,h.update(N),he=h.getVertexShaderID(N),Ee=h.getFragmentShaderID(N);const xe=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Xe=J.isInstancedMesh===!0,Ue=J.isBatchedMesh===!0,Ct=!!N.map,Tt=!!N.matcap,at=!!de,F=!!N.aoMap,Ht=!!N.lightMap,ut=!!N.bumpMap,st=!!N.normalMap,qe=!!N.displacementMap,vt=!!N.emissiveMap,Be=!!N.metalnessMap,L=!!N.roughnessMap,b=N.anisotropy>0,Q=N.clearcoat>0,pe=N.dispersion>0,ge=N.iridescence>0,te=N.sheen>0,ve=N.transmission>0,ye=b&&!!N.anisotropyMap,be=Q&&!!N.clearcoatMap,Ze=Q&&!!N.clearcoatNormalMap,Me=Q&&!!N.clearcoatRoughnessMap,ke=ge&&!!N.iridescenceMap,He=ge&&!!N.iridescenceThicknessMap,nt=te&&!!N.sheenColorMap,ze=te&&!!N.sheenRoughnessMap,pt=!!N.specularMap,lt=!!N.specularColorMap,Rt=!!N.specularIntensityMap,W=ve&&!!N.transmissionMap,Re=ve&&!!N.thicknessMap,ce=!!N.gradientMap,me=!!N.alphaMap,Ie=N.alphaTest>0,Le=!!N.alphaHash,ct=!!N.extensions;let Ut=Tr;N.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Qt={shaderID:le,shaderType:N.type,shaderName:N.name,vertexShader:De,fragmentShader:Z,defines:N.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:Ue,batchingColor:Ue&&J._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&J.instanceColor!==null,instancingMorph:Xe&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:ro,alphaToCoverage:!!N.alphaToCoverage,map:Ct,matcap:Tt,envMap:at,envMapMode:at&&de.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:Ht,bumpMap:ut,normalMap:st,displacementMap:_&&qe,emissiveMap:vt,normalMapObjectSpace:st&&N.normalMapType===F_,normalMapTangentSpace:st&&N.normalMapType===jg,metalnessMap:Be,roughnessMap:L,anisotropy:b,anisotropyMap:ye,clearcoat:Q,clearcoatMap:be,clearcoatNormalMap:Ze,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:ke,iridescenceThicknessMap:He,sheen:te,sheenColorMap:nt,sheenRoughnessMap:ze,specularMap:pt,specularColorMap:lt,specularIntensityMap:Rt,transmission:ve,transmissionMap:W,thicknessMap:Re,gradientMap:ce,opaque:N.transparent===!1&&N.blending===Ks&&N.alphaToCoverage===!1,alphaMap:me,alphaTest:Ie,alphaHash:Le,combine:N.combine,mapUv:Ct&&T(N.map.channel),aoMapUv:F&&T(N.aoMap.channel),lightMapUv:Ht&&T(N.lightMap.channel),bumpMapUv:ut&&T(N.bumpMap.channel),normalMapUv:st&&T(N.normalMap.channel),displacementMapUv:qe&&T(N.displacementMap.channel),emissiveMapUv:vt&&T(N.emissiveMap.channel),metalnessMapUv:Be&&T(N.metalnessMap.channel),roughnessMapUv:L&&T(N.roughnessMap.channel),anisotropyMapUv:ye&&T(N.anisotropyMap.channel),clearcoatMapUv:be&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:He&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(N.sheenRoughnessMap.channel),specularMapUv:pt&&T(N.specularMap.channel),specularColorMapUv:lt&&T(N.specularColorMap.channel),specularIntensityMapUv:Rt&&T(N.specularIntensityMap.channel),transmissionMapUv:W&&T(N.transmissionMap.channel),thicknessMapUv:Re&&T(N.thicknessMap.channel),alphaMapUv:me&&T(N.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(st||b),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!fe.attributes.uv&&(Ct||me),fog:!!ue,useFog:N.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ce,skinning:J.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:se,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Ct&&N.map.isVideoTexture===!0&&At.getTransfer(N.map.colorSpace)===Nt,decodeVideoTextureEmissive:vt&&N.emissiveMap.isVideoTexture===!0&&At.getTransfer(N.emissiveMap.colorSpace)===Nt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===fi,flipSided:N.side===zn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ct&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&N.extensions.multiDraw===!0||Ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Qt.vertexUv1s=p.has(1),Qt.vertexUv2s=p.has(2),Qt.vertexUv3s=p.has(3),p.clear(),Qt}function y(N){const A=[];if(N.shaderID?A.push(N.shaderID):(A.push(N.customVertexShaderID),A.push(N.customFragmentShaderID)),N.defines!==void 0)for(const z in N.defines)A.push(z),A.push(N.defines[z]);return N.isRawShaderMaterial===!1&&(I(A,N),P(A,N),A.push(s.outputColorSpace)),A.push(N.customProgramCacheKey),A.join()}function I(N,A){N.push(A.precision),N.push(A.outputColorSpace),N.push(A.envMapMode),N.push(A.envMapCubeUVHeight),N.push(A.mapUv),N.push(A.alphaMapUv),N.push(A.lightMapUv),N.push(A.aoMapUv),N.push(A.bumpMapUv),N.push(A.normalMapUv),N.push(A.displacementMapUv),N.push(A.emissiveMapUv),N.push(A.metalnessMapUv),N.push(A.roughnessMapUv),N.push(A.anisotropyMapUv),N.push(A.clearcoatMapUv),N.push(A.clearcoatNormalMapUv),N.push(A.clearcoatRoughnessMapUv),N.push(A.iridescenceMapUv),N.push(A.iridescenceThicknessMapUv),N.push(A.sheenColorMapUv),N.push(A.sheenRoughnessMapUv),N.push(A.specularMapUv),N.push(A.specularColorMapUv),N.push(A.specularIntensityMapUv),N.push(A.transmissionMapUv),N.push(A.thicknessMapUv),N.push(A.combine),N.push(A.fogExp2),N.push(A.sizeAttenuation),N.push(A.morphTargetsCount),N.push(A.morphAttributeCount),N.push(A.numDirLights),N.push(A.numPointLights),N.push(A.numSpotLights),N.push(A.numSpotLightMaps),N.push(A.numHemiLights),N.push(A.numRectAreaLights),N.push(A.numDirLightShadows),N.push(A.numPointLightShadows),N.push(A.numSpotLightShadows),N.push(A.numSpotLightShadowsWithMaps),N.push(A.numLightProbes),N.push(A.shadowMapType),N.push(A.toneMapping),N.push(A.numClippingPlanes),N.push(A.numClipIntersection),N.push(A.depthPacking)}function P(N,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),N.push(d.mask)}function R(N){const A=E[N.type];let z;if(A){const re=Ei[A];z=my.clone(re.uniforms)}else z=N.uniforms;return z}function H(N,A){let z;for(let re=0,J=m.length;re<J;re++){const ue=m[re];if(ue.cacheKey===A){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new h1(s,A,N,l),m.push(z)),z}function O(N){if(--N.usedTimes===0){const A=m.indexOf(N);m[A]=m[m.length-1],m.pop(),N.destroy()}}function k(N){h.remove(N)}function G(){h.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:R,acquireProgram:H,releaseProgram:O,releaseShaderCache:k,programs:m,dispose:G}}function v1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function _1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _g(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,_,S,E,T,M){let y=s[e];return y===void 0?(y={id:g.id,object:g,geometry:_,material:S,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},s[e]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=S,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=T,y.group=M),e++,y}function d(g,_,S,E,T,M){const y=u(g,_,S,E,T,M);S.transmission>0?r.push(y):S.transparent===!0?o.push(y):t.push(y)}function h(g,_,S,E,T,M){const y=u(g,_,S,E,T,M);S.transmission>0?r.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function p(g,_){t.length>1&&t.sort(g||_1),r.length>1&&r.sort(_||vg),o.length>1&&o.sort(_||vg)}function m(){for(let g=e,_=s.length;g<_;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:m,sort:p}}function y1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new _g,s.set(r,[u])):o>=l.length?(u=new _g,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function S1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new yt};break;case"SpotLight":t={position:new X,direction:new X,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function M1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let E1=0;function w1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function T1(s){const e=new S1,t=M1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new X);const o=new X,l=new Ft,u=new Ft;function d(p){let m=0,g=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,E=0,T=0,M=0,y=0,I=0,P=0,R=0,H=0,O=0,k=0;p.sort(w1);for(let N=0,A=p.length;N<A;N++){const z=p[N],re=z.color,J=z.intensity,ue=z.distance,fe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=re.r*J,g+=re.g*J,_+=re.b*J;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(z.sh.coefficients[ae],J);k++}else if(z.isDirectionalLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const de=z.shadow,V=t.get(z);V.shadowIntensity=de.intensity,V.shadowBias=de.bias,V.shadowNormalBias=de.normalBias,V.shadowRadius=de.radius,V.shadowMapSize=de.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=fe,r.directionalShadowMatrix[S]=z.shadow.matrix,I++}r.directional[S]=ae,S++}else if(z.isSpotLight){const ae=e.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(re).multiplyScalar(J),ae.distance=ue,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,r.spot[T]=ae;const de=z.shadow;if(z.map&&(r.spotLightMap[H]=z.map,H++,de.updateMatrices(z),z.castShadow&&O++),r.spotLightMatrix[T]=de.matrix,z.castShadow){const V=t.get(z);V.shadowIntensity=de.intensity,V.shadowBias=de.bias,V.shadowNormalBias=de.normalBias,V.shadowRadius=de.radius,V.shadowMapSize=de.mapSize,r.spotShadow[T]=V,r.spotShadowMap[T]=fe,R++}T++}else if(z.isRectAreaLight){const ae=e.get(z);ae.color.copy(re).multiplyScalar(J),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),r.rectArea[M]=ae,M++}else if(z.isPointLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const de=z.shadow,V=t.get(z);V.shadowIntensity=de.intensity,V.shadowBias=de.bias,V.shadowNormalBias=de.normalBias,V.shadowRadius=de.radius,V.shadowMapSize=de.mapSize,V.shadowCameraNear=de.camera.near,V.shadowCameraFar=de.camera.far,r.pointShadow[E]=V,r.pointShadowMap[E]=fe,r.pointShadowMatrix[E]=z.shadow.matrix,P++}r.point[E]=ae,E++}else if(z.isHemisphereLight){const ae=e.get(z);ae.skyColor.copy(z.color).multiplyScalar(J),ae.groundColor.copy(z.groundColor).multiplyScalar(J),r.hemi[y]=ae,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=_;const G=r.hash;(G.directionalLength!==S||G.pointLength!==E||G.spotLength!==T||G.rectAreaLength!==M||G.hemiLength!==y||G.numDirectionalShadows!==I||G.numPointShadows!==P||G.numSpotShadows!==R||G.numSpotMaps!==H||G.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=M,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+H-O,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=k,G.directionalLength=S,G.pointLength=E,G.spotLength=T,G.rectAreaLength=M,G.hemiLength=y,G.numDirectionalShadows=I,G.numPointShadows=P,G.numSpotShadows=R,G.numSpotMaps=H,G.numLightProbes=k,r.version=E1++)}function h(p,m){let g=0,_=0,S=0,E=0,T=0;const M=m.matrixWorldInverse;for(let y=0,I=p.length;y<I;y++){const P=p[y];if(P.isDirectionalLight){const R=r.directional[g];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),g++}else if(P.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),S++}else if(P.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(M),u.identity(),l.copy(P.matrixWorld),l.premultiply(M),u.extractRotation(l),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const R=r.point[_];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(M),_++}else if(P.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(M),T++}}}return{setup:d,setupView:h,state:r}}function yg(s){const e=new T1(s),t=[],r=[];function o(m){p.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function d(){e.setup(t)}function h(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function b1(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new yg(s),e.set(o,[d])):l>=u.length?(d=new yg(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const A1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R1(s,e,t){let r=new Nf;const o=new Ke,l=new Ke,u=new Pt,d=new eS({depthPacking:O_}),h=new tS,p={},m=t.maxTextureSize,g={[br]:zn,[zn]:br,[fi]:fi},_=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:A1,fragmentShader:C1}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new En;E.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new It(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pg;let y=this.type;this.render=function(O,k,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;const N=s.getRenderTarget(),A=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),re=s.state;re.setBlending(wr),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const J=y!==ji&&this.type===ji,ue=y===ji&&this.type!==ji;for(let fe=0,ae=O.length;fe<ae;fe++){const de=O[fe],V=de.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const le=V.getFrameExtents();if(o.multiply(le),l.copy(V.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/le.x),o.x=l.x*le.x,V.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/le.y),o.y=l.y*le.y,V.mapSize.y=l.y)),V.map===null||J===!0||ue===!0){const U=this.type!==ji?{minFilter:gi,magFilter:gi}:{};V.map!==null&&V.map.dispose(),V.map=new rs(o.x,o.y,U),V.map.texture.name=de.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const oe=V.getViewportCount();for(let U=0;U<oe;U++){const se=V.getViewport(U);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),re.viewport(u),V.updateMatrices(de,U),r=V.getFrustum(),R(k,G,V.camera,de,this.type)}V.isPointLightShadow!==!0&&this.type===ji&&I(V,G),V.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(N,A,z)};function I(O,k){const G=e.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new rs(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(k,null,G,_,T,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(k,null,G,S,T,null)}function P(O,k,G,N){let A=null;const z=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)A=z;else if(A=G.isPointLight===!0?h:d,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const re=A.uuid,J=k.uuid;let ue=p[re];ue===void 0&&(ue={},p[re]=ue);let fe=ue[J];fe===void 0&&(fe=A.clone(),ue[J]=fe,k.addEventListener("dispose",H)),A=fe}if(A.visible=k.visible,A.wireframe=k.wireframe,N===ji?A.side=k.shadowSide!==null?k.shadowSide:k.side:A.side=k.shadowSide!==null?k.shadowSide:g[k.side],A.alphaMap=k.alphaMap,A.alphaTest=k.alphaTest,A.map=k.map,A.clipShadows=k.clipShadows,A.clippingPlanes=k.clippingPlanes,A.clipIntersection=k.clipIntersection,A.displacementMap=k.displacementMap,A.displacementScale=k.displacementScale,A.displacementBias=k.displacementBias,A.wireframeLinewidth=k.wireframeLinewidth,A.linewidth=k.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const re=s.properties.get(A);re.light=G}return A}function R(O,k,G,N,A){if(O.visible===!1)return;if(O.layers.test(k.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===ji)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const J=e.update(O),ue=O.material;if(Array.isArray(ue)){const fe=J.groups;for(let ae=0,de=fe.length;ae<de;ae++){const V=fe[ae],le=ue[V.materialIndex];if(le&&le.visible){const oe=P(O,le,N,A);O.onBeforeShadow(s,O,k,G,J,oe,V),s.renderBufferDirect(G,null,J,oe,O,V),O.onAfterShadow(s,O,k,G,J,oe,V)}}}else if(ue.visible){const fe=P(O,ue,N,A);O.onBeforeShadow(s,O,k,G,J,fe,null),s.renderBufferDirect(G,null,J,fe,O,null),O.onAfterShadow(s,O,k,G,J,fe,null)}}const re=O.children;for(let J=0,ue=re.length;J<ue;J++)R(re[J],k,G,N,A)}function H(O){O.target.removeEventListener("dispose",H);for(const G in p){const N=p[G],A=O.target.uuid;A in N&&(N[A].dispose(),delete N[A])}}}const N1={[Cd]:Rd,[Nd]:Id,[Pd]:Dd,[Qs]:Ld,[Rd]:Cd,[Id]:Nd,[Dd]:Pd,[Ld]:Qs};function P1(s,e){function t(){let W=!1;const Re=new Pt;let ce=null;const me=new Pt(0,0,0,0);return{setMask:function(Ie){ce!==Ie&&!W&&(s.colorMask(Ie,Ie,Ie,Ie),ce=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,Le,ct,Ut,Qt){Qt===!0&&(Ie*=Ut,Le*=Ut,ct*=Ut),Re.set(Ie,Le,ct,Ut),me.equals(Re)===!1&&(s.clearColor(Ie,Le,ct,Ut),me.copy(Re))},reset:function(){W=!1,ce=null,me.set(-1,0,0,0)}}}function r(){let W=!1,Re=!1,ce=null,me=null,Ie=null;return{setReversed:function(Le){if(Re!==Le){const ct=e.get("EXT_clip_control");Re?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ie;Ie=null,this.setClear(Ut)}Re=Le},getReversed:function(){return Re},setTest:function(Le){Le?xe(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(Le){ce!==Le&&!W&&(s.depthMask(Le),ce=Le)},setFunc:function(Le){if(Re&&(Le=N1[Le]),me!==Le){switch(Le){case Cd:s.depthFunc(s.NEVER);break;case Rd:s.depthFunc(s.ALWAYS);break;case Nd:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case Pd:s.depthFunc(s.EQUAL);break;case Ld:s.depthFunc(s.GEQUAL);break;case Id:s.depthFunc(s.GREATER);break;case Dd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Le}},setLocked:function(Le){W=Le},setClear:function(Le){Ie!==Le&&(Re&&(Le=1-Le),s.clearDepth(Le),Ie=Le)},reset:function(){W=!1,ce=null,me=null,Ie=null,Re=!1}}}function o(){let W=!1,Re=null,ce=null,me=null,Ie=null,Le=null,ct=null,Ut=null,Qt=null;return{setTest:function(Mt){W||(Mt?xe(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(Mt){Re!==Mt&&!W&&(s.stencilMask(Mt),Re=Mt)},setFunc:function(Mt,Pn,wn){(ce!==Mt||me!==Pn||Ie!==wn)&&(s.stencilFunc(Mt,Pn,wn),ce=Mt,me=Pn,Ie=wn)},setOp:function(Mt,Pn,wn){(Le!==Mt||ct!==Pn||Ut!==wn)&&(s.stencilOp(Mt,Pn,wn),Le=Mt,ct=Pn,Ut=wn)},setLocked:function(Mt){W=Mt},setClear:function(Mt){Qt!==Mt&&(s.clearStencil(Mt),Qt=Mt)},reset:function(){W=!1,Re=null,ce=null,me=null,Ie=null,Le=null,ct=null,Ut=null,Qt=null}}}const l=new t,u=new r,d=new o,h=new WeakMap,p=new WeakMap;let m={},g={},_=new WeakMap,S=[],E=null,T=!1,M=null,y=null,I=null,P=null,R=null,H=null,O=null,k=new yt(0,0,0),G=0,N=!1,A=null,z=null,re=null,J=null,ue=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,de=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(V)[1]),ae=de>=1):V.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ae=de>=2);let le=null,oe={};const U=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),De=new Pt().fromArray(U),Z=new Pt().fromArray(se);function he(W,Re,ce,me){const Ie=new Uint8Array(4),Le=s.createTexture();s.bindTexture(W,Le),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<ce;ct++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Re+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Le}const Ee={};Ee[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),u.setFunc(Qs),ut(!1),st(mm),xe(s.CULL_FACE),F(wr);function xe(W){m[W]!==!0&&(s.enable(W),m[W]=!0)}function Ce(W){m[W]!==!1&&(s.disable(W),m[W]=!1)}function Xe(W,Re){return g[W]!==Re?(s.bindFramebuffer(W,Re),g[W]=Re,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Re),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ue(W,Re){let ce=S,me=!1;if(W){ce=_.get(Re),ce===void 0&&(ce=[],_.set(Re,ce));const Ie=W.textures;if(ce.length!==Ie.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,ct=Ie.length;Le<ct;Le++)ce[Le]=s.COLOR_ATTACHMENT0+Le;ce.length=Ie.length,me=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,me=!0);me&&s.drawBuffers(ce)}function Ct(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const Tt={[Qr]:s.FUNC_ADD,[c_]:s.FUNC_SUBTRACT,[u_]:s.FUNC_REVERSE_SUBTRACT};Tt[d_]=s.MIN,Tt[f_]=s.MAX;const at={[h_]:s.ZERO,[p_]:s.ONE,[m_]:s.SRC_COLOR,[bd]:s.SRC_ALPHA,[S_]:s.SRC_ALPHA_SATURATE,[__]:s.DST_COLOR,[x_]:s.DST_ALPHA,[g_]:s.ONE_MINUS_SRC_COLOR,[Ad]:s.ONE_MINUS_SRC_ALPHA,[y_]:s.ONE_MINUS_DST_COLOR,[v_]:s.ONE_MINUS_DST_ALPHA,[M_]:s.CONSTANT_COLOR,[E_]:s.ONE_MINUS_CONSTANT_COLOR,[w_]:s.CONSTANT_ALPHA,[T_]:s.ONE_MINUS_CONSTANT_ALPHA};function F(W,Re,ce,me,Ie,Le,ct,Ut,Qt,Mt){if(W===wr){T===!0&&(Ce(s.BLEND),T=!1);return}if(T===!1&&(xe(s.BLEND),T=!0),W!==l_){if(W!==M||Mt!==N){if((y!==Qr||R!==Qr)&&(s.blendEquation(s.FUNC_ADD),y=Qr,R=Qr),Mt)switch(W){case Ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kl:s.blendFunc(s.ONE,s.ONE);break;case gm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}I=null,P=null,H=null,O=null,k.set(0,0,0),G=0,M=W,N=Mt}return}Ie=Ie||Re,Le=Le||ce,ct=ct||me,(Re!==y||Ie!==R)&&(s.blendEquationSeparate(Tt[Re],Tt[Ie]),y=Re,R=Ie),(ce!==I||me!==P||Le!==H||ct!==O)&&(s.blendFuncSeparate(at[ce],at[me],at[Le],at[ct]),I=ce,P=me,H=Le,O=ct),(Ut.equals(k)===!1||Qt!==G)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Qt),k.copy(Ut),G=Qt),M=W,N=!1}function Ht(W,Re){W.side===fi?Ce(s.CULL_FACE):xe(s.CULL_FACE);let ce=W.side===zn;Re&&(ce=!ce),ut(ce),W.blending===Ks&&W.transparent===!1?F(wr):F(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const me=W.stencilWrite;d.setTest(me),me&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),vt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(W){A!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),A=W)}function st(W){W!==s_?(xe(s.CULL_FACE),W!==z&&(W===mm?s.cullFace(s.BACK):W===o_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),z=W}function qe(W){W!==re&&(ae&&s.lineWidth(W),re=W)}function vt(W,Re,ce){W?(xe(s.POLYGON_OFFSET_FILL),(J!==Re||ue!==ce)&&(s.polygonOffset(Re,ce),J=Re,ue=ce)):Ce(s.POLYGON_OFFSET_FILL)}function Be(W){W?xe(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function L(W){W===void 0&&(W=s.TEXTURE0+fe-1),le!==W&&(s.activeTexture(W),le=W)}function b(W,Re,ce){ce===void 0&&(le===null?ce=s.TEXTURE0+fe-1:ce=le);let me=oe[ce];me===void 0&&(me={type:void 0,texture:void 0},oe[ce]=me),(me.type!==W||me.texture!==Re)&&(le!==ce&&(s.activeTexture(ce),le=ce),s.bindTexture(W,Re||Ee[W]),me.type=W,me.texture=Re)}function Q(){const W=oe[le];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ze(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(W){De.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),De.copy(W))}function ze(W){Z.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function pt(W,Re){let ce=p.get(Re);ce===void 0&&(ce=new WeakMap,p.set(Re,ce));let me=ce.get(W);me===void 0&&(me=s.getUniformBlockIndex(Re,W.name),ce.set(W,me))}function lt(W,Re){const me=p.get(Re).get(W);h.get(Re)!==me&&(s.uniformBlockBinding(Re,me,W.__bindingPointIndex),h.set(Re,me))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},le=null,oe={},g={},_=new WeakMap,S=[],E=null,T=!1,M=null,y=null,I=null,P=null,R=null,H=null,O=null,k=new yt(0,0,0),G=0,N=!1,A=null,z=null,re=null,J=null,ue=null,De.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:xe,disable:Ce,bindFramebuffer:Xe,drawBuffers:Ue,useProgram:Ct,setBlending:F,setMaterial:Ht,setFlipSided:ut,setCullFace:st,setLineWidth:qe,setPolygonOffset:vt,setScissorTest:Be,activeTexture:L,bindTexture:b,unbindTexture:Q,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ke,texImage3D:He,updateUBOMapping:pt,uniformBlockBinding:lt,texStorage2D:Ze,texStorage3D:Me,texSubImage2D:te,texSubImage3D:ve,compressedTexSubImage2D:ye,compressedTexSubImage3D:be,scissor:nt,viewport:ze,reset:Rt}}function L1(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ke,m=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return S?new OffscreenCanvas(L,b):Ql("canvas")}function T(L,b,Q){let pe=1;const ge=Be(L);if((ge.width>Q||ge.height>Q)&&(pe=Q/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const te=Math.floor(pe*ge.width),ve=Math.floor(pe*ge.height);g===void 0&&(g=E(te,ve));const ye=b?E(te,ve):g;return ye.width=te,ye.height=ve,ye.getContext("2d").drawImage(L,0,0,te,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+te+"x"+ve+")."),ye}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function M(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,b,Q,pe,ge=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=b;if(b===s.RED&&(Q===s.FLOAT&&(te=s.R32F),Q===s.HALF_FLOAT&&(te=s.R16F),Q===s.UNSIGNED_BYTE&&(te=s.R8)),b===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(te=s.R8UI),Q===s.UNSIGNED_SHORT&&(te=s.R16UI),Q===s.UNSIGNED_INT&&(te=s.R32UI),Q===s.BYTE&&(te=s.R8I),Q===s.SHORT&&(te=s.R16I),Q===s.INT&&(te=s.R32I)),b===s.RG&&(Q===s.FLOAT&&(te=s.RG32F),Q===s.HALF_FLOAT&&(te=s.RG16F),Q===s.UNSIGNED_BYTE&&(te=s.RG8)),b===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(te=s.RG8UI),Q===s.UNSIGNED_SHORT&&(te=s.RG16UI),Q===s.UNSIGNED_INT&&(te=s.RG32UI),Q===s.BYTE&&(te=s.RG8I),Q===s.SHORT&&(te=s.RG16I),Q===s.INT&&(te=s.RG32I)),b===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(te=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(te=s.RGB16UI),Q===s.UNSIGNED_INT&&(te=s.RGB32UI),Q===s.BYTE&&(te=s.RGB8I),Q===s.SHORT&&(te=s.RGB16I),Q===s.INT&&(te=s.RGB32I)),b===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),Q===s.UNSIGNED_INT&&(te=s.RGBA32UI),Q===s.BYTE&&(te=s.RGBA8I),Q===s.SHORT&&(te=s.RGBA16I),Q===s.INT&&(te=s.RGBA32I)),b===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),b===s.RGBA){const ve=ge?Jl:At.getTransfer(pe);Q===s.FLOAT&&(te=s.RGBA32F),Q===s.HALF_FLOAT&&(te=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(te=ve===Nt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function R(L,b){let Q;return L?b===null||b===is||b===no?Q=s.DEPTH24_STENCIL8:b===Wi?Q=s.DEPTH32F_STENCIL8:b===ta&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===is||b===no?Q=s.DEPTH_COMPONENT24:b===Wi?Q=s.DEPTH_COMPONENT32F:b===ta&&(Q=s.DEPTH_COMPONENT16),Q}function H(L,b){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==gi&&L.minFilter!==wi?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function O(L){const b=L.target;b.removeEventListener("dispose",O),G(b),b.isVideoTexture&&m.delete(b)}function k(L){const b=L.target;b.removeEventListener("dispose",k),A(b)}function G(L){const b=r.get(L);if(b.__webglInit===void 0)return;const Q=L.source,pe=_.get(Q);if(pe){const ge=pe[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&N(L),Object.keys(pe).length===0&&_.delete(Q)}r.remove(L)}function N(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const Q=L.source,pe=_.get(Q);delete pe[b.__cacheKey],u.memory.textures--}function A(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let ge=0;ge<b.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(b.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)s.deleteFramebuffer(b.__webglFramebuffer[pe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=L.textures;for(let pe=0,ge=Q.length;pe<ge;pe++){const te=r.get(Q[pe]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),u.memory.textures--),r.remove(Q[pe])}r.remove(L)}let z=0;function re(){z=0}function J(){const L=z;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),z+=1,L}function ue(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function fe(L,b){const Q=r.get(L);if(L.isVideoTexture&&qe(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Q,L,b);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+b)}function ae(L,b){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){Z(Q,L,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+b)}function de(L,b){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){Z(Q,L,b);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+b)}function V(L,b){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){he(Q,L,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+b)}const le={[Od]:s.REPEAT,[ts]:s.CLAMP_TO_EDGE,[Fd]:s.MIRRORED_REPEAT},oe={[gi]:s.NEAREST,[U_]:s.NEAREST_MIPMAP_NEAREST,[vl]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[ju]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},U={[z_]:s.NEVER,[W_]:s.ALWAYS,[B_]:s.LESS,[Wg]:s.LEQUAL,[V_]:s.EQUAL,[j_]:s.GEQUAL,[H_]:s.GREATER,[G_]:s.NOTEQUAL};function se(L,b){if(b.type===Wi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===wi||b.magFilter===ju||b.magFilter===vl||b.magFilter===ns||b.minFilter===wi||b.minFilter===ju||b.minFilter===vl||b.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,le[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,le[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,le[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,oe[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,oe[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===gi||b.minFilter!==vl&&b.minFilter!==ns||b.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function De(L,b){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",O));const pe=b.source;let ge=_.get(pe);ge===void 0&&(ge={},_.set(pe,ge));const te=ue(b);if(te!==L.__cacheKey){ge[te]===void 0&&(ge[te]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),ge[te].usedTimes++;const ve=ge[L.__cacheKey];ve!==void 0&&(ge[L.__cacheKey].usedTimes--,ve.usedTimes===0&&N(b)),L.__cacheKey=te,L.__webglTexture=ge[te].texture}return Q}function Z(L,b,Q){let pe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=De(L,b),te=b.source;t.bindTexture(pe,L.__webglTexture,s.TEXTURE0+Q);const ve=r.get(te);if(te.version!==ve.__version||ge===!0){t.activeTexture(s.TEXTURE0+Q);const ye=At.getPrimaries(At.workingColorSpace),be=b.colorSpace===Er?null:At.getPrimaries(b.colorSpace),Ze=b.colorSpace===Er||ye===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Me=T(b.image,!1,o.maxTextureSize);Me=vt(b,Me);const ke=l.convert(b.format,b.colorSpace),He=l.convert(b.type);let nt=P(b.internalFormat,ke,He,b.colorSpace,b.isVideoTexture);se(pe,b);let ze;const pt=b.mipmaps,lt=b.isVideoTexture!==!0,Rt=ve.__version===void 0||ge===!0,W=te.dataReady,Re=H(b,Me);if(b.isDepthTexture)nt=R(b.format===io,b.type),Rt&&(lt?t.texStorage2D(s.TEXTURE_2D,1,nt,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,ke,He,null));else if(b.isDataTexture)if(pt.length>0){lt&&Rt&&t.texStorage2D(s.TEXTURE_2D,Re,nt,pt[0].width,pt[0].height);for(let ce=0,me=pt.length;ce<me;ce++)ze=pt[ce],lt?W&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,ze.width,ze.height,ke,He,ze.data):t.texImage2D(s.TEXTURE_2D,ce,nt,ze.width,ze.height,0,ke,He,ze.data);b.generateMipmaps=!1}else lt?(Rt&&t.texStorage2D(s.TEXTURE_2D,Re,nt,Me.width,Me.height),W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,He,Me.data)):t.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,ke,He,Me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){lt&&Rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,nt,pt[0].width,pt[0].height,Me.depth);for(let ce=0,me=pt.length;ce<me;ce++)if(ze=pt[ce],b.format!==pi)if(ke!==null)if(lt){if(W)if(b.layerUpdates.size>0){const Ie=Km(ze.width,ze.height,b.format,b.type);for(const Le of b.layerUpdates){const ct=ze.data.subarray(Le*Ie/ze.data.BYTES_PER_ELEMENT,(Le+1)*Ie/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,Le,ze.width,ze.height,1,ke,ct)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,ze.width,ze.height,Me.depth,ke,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,nt,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,ze.width,ze.height,Me.depth,ke,He,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,nt,ze.width,ze.height,Me.depth,0,ke,He,ze.data)}else{lt&&Rt&&t.texStorage2D(s.TEXTURE_2D,Re,nt,pt[0].width,pt[0].height);for(let ce=0,me=pt.length;ce<me;ce++)ze=pt[ce],b.format!==pi?ke!==null?lt?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,ze.width,ze.height,ke,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,nt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?W&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,ze.width,ze.height,ke,He,ze.data):t.texImage2D(s.TEXTURE_2D,ce,nt,ze.width,ze.height,0,ke,He,ze.data)}else if(b.isDataArrayTexture)if(lt){if(Rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,nt,Me.width,Me.height,Me.depth),W)if(b.layerUpdates.size>0){const ce=Km(Me.width,Me.height,b.format,b.type);for(const me of b.layerUpdates){const Ie=Me.data.subarray(me*ce/Me.data.BYTES_PER_ELEMENT,(me+1)*ce/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Me.width,Me.height,1,ke,He,Ie)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,He,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,ke,He,Me.data);else if(b.isData3DTexture)lt?(Rt&&t.texStorage3D(s.TEXTURE_3D,Re,nt,Me.width,Me.height,Me.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,He,Me.data)):t.texImage3D(s.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,ke,He,Me.data);else if(b.isFramebufferTexture){if(Rt)if(lt)t.texStorage2D(s.TEXTURE_2D,Re,nt,Me.width,Me.height);else{let ce=Me.width,me=Me.height;for(let Ie=0;Ie<Re;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,nt,ce,me,0,ke,He,null),ce>>=1,me>>=1}}else if(pt.length>0){if(lt&&Rt){const ce=Be(pt[0]);t.texStorage2D(s.TEXTURE_2D,Re,nt,ce.width,ce.height)}for(let ce=0,me=pt.length;ce<me;ce++)ze=pt[ce],lt?W&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,ke,He,ze):t.texImage2D(s.TEXTURE_2D,ce,nt,ke,He,ze);b.generateMipmaps=!1}else if(lt){if(Rt){const ce=Be(Me);t.texStorage2D(s.TEXTURE_2D,Re,nt,ce.width,ce.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,He,Me)}else t.texImage2D(s.TEXTURE_2D,0,nt,ke,He,Me);M(b)&&y(pe),ve.__version=te.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function he(L,b,Q){if(b.image.length!==6)return;const pe=De(L,b),ge=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Q);const te=r.get(ge);if(ge.version!==te.__version||pe===!0){t.activeTexture(s.TEXTURE0+Q);const ve=At.getPrimaries(At.workingColorSpace),ye=b.colorSpace===Er?null:At.getPrimaries(b.colorSpace),be=b.colorSpace===Er||ve===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ze=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,ke=[];for(let me=0;me<6;me++)!Ze&&!Me?ke[me]=T(b.image[me],!0,o.maxCubemapSize):ke[me]=Me?b.image[me].image:b.image[me],ke[me]=vt(b,ke[me]);const He=ke[0],nt=l.convert(b.format,b.colorSpace),ze=l.convert(b.type),pt=P(b.internalFormat,nt,ze,b.colorSpace),lt=b.isVideoTexture!==!0,Rt=te.__version===void 0||pe===!0,W=ge.dataReady;let Re=H(b,He);se(s.TEXTURE_CUBE_MAP,b);let ce;if(Ze){lt&&Rt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,pt,He.width,He.height);for(let me=0;me<6;me++){ce=ke[me].mipmaps;for(let Ie=0;Ie<ce.length;Ie++){const Le=ce[Ie];b.format!==pi?nt!==null?lt?W&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,Le.width,Le.height,nt,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,pt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,Le.width,Le.height,nt,ze,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,pt,Le.width,Le.height,0,nt,ze,Le.data)}}}else{if(ce=b.mipmaps,lt&&Rt){ce.length>0&&Re++;const me=Be(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,pt,me.width,me.height)}for(let me=0;me<6;me++)if(Me){lt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ke[me].width,ke[me].height,nt,ze,ke[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,ke[me].width,ke[me].height,0,nt,ze,ke[me].data);for(let Ie=0;Ie<ce.length;Ie++){const ct=ce[Ie].image[me].image;lt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,ct.width,ct.height,nt,ze,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,pt,ct.width,ct.height,0,nt,ze,ct.data)}}else{lt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,nt,ze,ke[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,nt,ze,ke[me]);for(let Ie=0;Ie<ce.length;Ie++){const Le=ce[Ie];lt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,nt,ze,Le.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,pt,nt,ze,Le.image[me])}}}M(b)&&y(s.TEXTURE_CUBE_MAP),te.__version=ge.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ee(L,b,Q,pe,ge,te){const ve=l.convert(Q.format,Q.colorSpace),ye=l.convert(Q.type),be=P(Q.internalFormat,ve,ye,Q.colorSpace),Ze=r.get(b),Me=r.get(Q);if(Me.__renderTarget=b,!Ze.__hasExternalTextures){const ke=Math.max(1,b.width>>te),He=Math.max(1,b.height>>te);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,te,be,ke,He,b.depth,0,ve,ye,null):t.texImage2D(ge,te,be,ke,He,0,ve,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),st(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,ut(b)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,Me.__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(L,b,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const pe=b.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,te=R(b.stencilBuffer,ge),ve=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=ut(b);st(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,te,b.width,b.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,te,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,te,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,L)}else{const pe=b.textures;for(let ge=0;ge<pe.length;ge++){const te=pe[ge],ve=l.convert(te.format,te.colorSpace),ye=l.convert(te.type),be=P(te.internalFormat,ve,ye,te.colorSpace),Ze=ut(b);Q&&st(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,be,b.width,b.height):st(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,be,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,be,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(b.depthTexture);pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),fe(b.depthTexture,0);const ge=pe.__webglTexture,te=ut(b);if(b.depthTexture.format===Js)st(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(b.depthTexture.format===io)st(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const b=r.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const ge=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),b.__depthDisposeCallback=ge}b.__boundDepthTexture=pe}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ce(b.__webglFramebuffer,L)}else if(Q){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=s.createRenderbuffer(),xe(b.__webglDepthbuffer[pe],L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,te)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),xe(b.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(L,b,Q){const pe=r.get(L);b!==void 0&&Ee(pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Xe(L)}function Ct(L){const b=L.texture,Q=r.get(L),pe=r.get(b);L.addEventListener("dispose",k);const ge=L.textures,te=L.isWebGLCubeRenderTarget===!0,ve=ge.length>1;if(ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=b.version,u.memory.textures++),te){Q.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[ye]=[];for(let be=0;be<b.mipmaps.length;be++)Q.__webglFramebuffer[ye][be]=s.createFramebuffer()}else Q.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ye=0;ye<b.mipmaps.length;ye++)Q.__webglFramebuffer[ye]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(ve)for(let ye=0,be=ge.length;ye<be;ye++){const Ze=r.get(ge[ye]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&st(L)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ye=0;ye<ge.length;ye++){const be=ge[ye];Q.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[ye]);const Ze=l.convert(be.format,be.colorSpace),Me=l.convert(be.type),ke=P(be.internalFormat,Ze,Me,be.colorSpace,L.isXRRenderTarget===!0),He=ut(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,ke,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,Q.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),se(s.TEXTURE_CUBE_MAP,b);for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)Ee(Q.__webglFramebuffer[ye][be],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else Ee(Q.__webglFramebuffer[ye],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);M(b)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ye=0,be=ge.length;ye<be;ye++){const Ze=ge[ye],Me=r.get(Ze);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),se(s.TEXTURE_2D,Ze),Ee(Q.__webglFramebuffer,L,Ze,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),M(Ze)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ye=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,pe.__webglTexture),se(ye,b),b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)Ee(Q.__webglFramebuffer[be],L,b,s.COLOR_ATTACHMENT0,ye,be);else Ee(Q.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,ye,0);M(b)&&y(ye),t.unbindTexture()}L.depthBuffer&&Xe(L)}function Tt(L){const b=L.textures;for(let Q=0,pe=b.length;Q<pe;Q++){const ge=b[Q];if(M(ge)){const te=I(L),ve=r.get(ge).__webglTexture;t.bindTexture(te,ve),y(te),t.unbindTexture()}}}const at=[],F=[];function Ht(L){if(L.samples>0){if(st(L)===!1){const b=L.textures,Q=L.width,pe=L.height;let ge=s.COLOR_BUFFER_BIT;const te=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=r.get(L),ye=b.length>1;if(ye)for(let be=0;be<b.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let be=0;be<b.length;be++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);const Ze=r.get(b[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,ge,s.NEAREST),h===!0&&(at.length=0,F.length=0,at.push(s.COLOR_ATTACHMENT0+be),L.depthBuffer&&L.resolveDepthBuffer===!1&&(at.push(te),F.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let be=0;be<b.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);const Ze=r.get(b[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ut(L){return Math.min(o.maxSamples,L.samples)}function st(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function qe(L){const b=u.render.frame;m.get(L)!==b&&(m.set(L,b),L.update())}function vt(L,b){const Q=L.colorSpace,pe=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==ro&&Q!==Er&&(At.getTransfer(Q)===Nt?(pe!==pi||ge!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),b}function Be(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=re,this.setTexture2D=fe,this.setTexture2DArray=ae,this.setTexture3D=de,this.setTextureCube=V,this.rebindTextures=Ue,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=st}function I1(s,e){function t(r,o=Er){let l;const u=At.getTransfer(o);if(r===Yi)return s.UNSIGNED_BYTE;if(r===wf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Tf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===kg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Dg)return s.BYTE;if(r===Ug)return s.SHORT;if(r===ta)return s.UNSIGNED_SHORT;if(r===Ef)return s.INT;if(r===is)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===aa)return s.HALF_FLOAT;if(r===Og)return s.ALPHA;if(r===Fg)return s.RGB;if(r===pi)return s.RGBA;if(r===zg)return s.LUMINANCE;if(r===Bg)return s.LUMINANCE_ALPHA;if(r===Js)return s.DEPTH_COMPONENT;if(r===io)return s.DEPTH_STENCIL;if(r===Vg)return s.RED;if(r===bf)return s.RED_INTEGER;if(r===Hg)return s.RG;if(r===Af)return s.RG_INTEGER;if(r===Cf)return s.RGBA_INTEGER;if(r===jl||r===Wl||r===Xl||r===ql)if(u===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zd||r===Bd||r===Vd||r===Hd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gd||r===jd||r===Wd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Gd||r===jd)return u===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Wd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xd||r===qd||r===Yd||r===$d||r===Kd||r===Jd||r===Zd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===of)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Xd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$d)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ef)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===of)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yl||r===af||r===lf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Yl)return u===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===af)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gg||r===cf||r===uf||r===df)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Yl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===cf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===df)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===no?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const D1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class k1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Bn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Cr({vertexShader:D1,fragmentShader:U1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new oc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O1 extends ao{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",h=1,p=null,m=null,g=null,_=null,S=null,E=null;const T=new k1,M=t.getContextAttributes();let y=null,I=null;const P=[],R=[],H=new Ke;let O=null;const k=new Rn;k.viewport=new Pt;const G=new Rn;G.viewport=new Pt;const N=[k,G],A=new sS;let z=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=P[Z];return he===void 0&&(he=new fd,P[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=P[Z];return he===void 0&&(he=new fd,P[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=P[Z];return he===void 0&&(he=new fd,P[Z]=he),he.getHandSpace()};function J(Z){const he=R.indexOf(Z.inputSource);if(he===-1)return;const Ee=P[he];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,p||u),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ue(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",fe);for(let Z=0;Z<P.length;Z++){const he=R[Z];he!==null&&(R[Z]=null,P[Z].disconnect(he))}z=null,re=null,T.reset(),e.setRenderTarget(y),S=null,_=null,g=null,o=null,I=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",fe),M.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,xe=null,Ce=null;M.depth&&(Ce=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=M.stencil?io:Js,xe=M.stencil?no:is);const Xe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:l};g=new XRWebGLBinding(o,t),_=g.createProjectionLayer(Xe),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),I=new rs(_.textureWidth,_.textureHeight,{format:pi,type:Yi,depthTexture:new i0(_.textureWidth,_.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const Ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,Ee),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new rs(S.framebufferWidth,S.framebufferHeight,{format:pi,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}I.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(d),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function fe(Z){for(let he=0;he<Z.removed.length;he++){const Ee=Z.removed[he],xe=R.indexOf(Ee);xe>=0&&(R[xe]=null,P[xe].disconnect(Ee))}for(let he=0;he<Z.added.length;he++){const Ee=Z.added[he];let xe=R.indexOf(Ee);if(xe===-1){for(let Xe=0;Xe<P.length;Xe++)if(Xe>=R.length){R.push(Ee),xe=Xe;break}else if(R[Xe]===null){R[Xe]=Ee,xe=Xe;break}if(xe===-1)break}const Ce=P[xe];Ce&&Ce.connect(Ee)}}const ae=new X,de=new X;function V(Z,he,Ee){ae.setFromMatrixPosition(he.matrixWorld),de.setFromMatrixPosition(Ee.matrixWorld);const xe=ae.distanceTo(de),Ce=he.projectionMatrix.elements,Xe=Ee.projectionMatrix.elements,Ue=Ce[14]/(Ce[10]-1),Ct=Ce[14]/(Ce[10]+1),Tt=(Ce[9]+1)/Ce[5],at=(Ce[9]-1)/Ce[5],F=(Ce[8]-1)/Ce[0],Ht=(Xe[8]+1)/Xe[0],ut=Ue*F,st=Ue*Ht,qe=xe/(-F+Ht),vt=qe*-F;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(vt),Z.translateZ(qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ce[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Be=Ue+qe,L=Ct+qe,b=ut-vt,Q=st+(xe-vt),pe=Tt*Ct/L*Be,ge=at*Ct/L*Be;Z.projectionMatrix.makePerspective(b,Q,pe,ge,Be,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let he=Z.near,Ee=Z.far;T.texture!==null&&(T.depthNear>0&&(he=T.depthNear),T.depthFar>0&&(Ee=T.depthFar)),A.near=G.near=k.near=he,A.far=G.far=k.far=Ee,(z!==A.near||re!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,re=A.far),k.layers.mask=Z.layers.mask|2,G.layers.mask=Z.layers.mask|4,A.layers.mask=k.layers.mask|G.layers.mask;const xe=Z.parent,Ce=A.cameras;le(A,xe);for(let Xe=0;Xe<Ce.length;Xe++)le(Ce[Xe],xe);Ce.length===2?V(A,k,G):A.projectionMatrix.copy(k.projectionMatrix),oe(Z,A,xe)};function oe(Z,he,Ee){Ee===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ff*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(Z){h=Z,_!==null&&(_.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let U=null;function se(Z,he){if(m=he.getViewerPose(p||u),E=he,m!==null){const Ee=m.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let xe=!1;Ee.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let Ue=0;Ue<Ee.length;Ue++){const Ct=Ee[Ue];let Tt=null;if(S!==null)Tt=S.getViewport(Ct);else{const F=g.getViewSubImage(_,Ct);Tt=F.viewport,Ue===0&&(e.setRenderTargetTextures(I,F.colorTexture,_.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(I))}let at=N[Ue];at===void 0&&(at=new Rn,at.layers.enable(Ue),at.viewport=new Pt,N[Ue]=at),at.matrix.fromArray(Ct.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ct.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Ue===0&&(A.matrix.copy(at.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(at)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const Ue=g.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&T.init(e,Ue,o.renderState)}}for(let Ee=0;Ee<P.length;Ee++){const xe=R[Ee],Ce=P[Ee];xe!==null&&Ce!==void 0&&Ce.update(xe,he,p||u)}U&&U(Z,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),E=null}const De=new g0;De.setAnimationLoop(se),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const $r=new bi,F1=new Ft;function z1(s,e){function t(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,e0(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,I,P,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(M,y):y.isMeshToonMaterial?(l(M,y),g(M,y)):y.isMeshPhongMaterial?(l(M,y),m(M,y)):y.isMeshStandardMaterial?(l(M,y),_(M,y),y.isMeshPhysicalMaterial&&S(M,y,R)):y.isMeshMatcapMaterial?(l(M,y),E(M,y)):y.isMeshDepthMaterial?l(M,y):y.isMeshDistanceMaterial?(l(M,y),T(M,y)):y.isMeshNormalMaterial?l(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?h(M,y,I,P):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,t(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===zn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,t(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===zn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,t(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,t(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const I=e.get(y),P=I.envMap,R=I.envMapRotation;P&&(M.envMap.value=P,$r.copy(R),$r.x*=-1,$r.y*=-1,$r.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),M.envMapRotation.value.setFromMatrix4(F1.makeRotationFromEuler($r)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function h(M,y,I,P){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*I,M.scale.value=P*.5,y.map&&(M.map.value=y.map,t(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function g(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,I){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===zn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function T(M,y){const I=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function B1(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,P){const R=P.program;r.uniformBlockBinding(I,R)}function p(I,P){let R=o[I.id];R===void 0&&(E(I),R=m(I),o[I.id]=R,I.addEventListener("dispose",M));const H=P.program;r.updateUBOMapping(I,H);const O=e.render.frame;l[I.id]!==O&&(_(I),l[I.id]=O)}function m(I){const P=g();I.__bindingPointIndex=P;const R=s.createBuffer(),H=I.__size,O=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,H,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function g(){for(let I=0;I<d;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const P=o[I.id],R=I.uniforms,H=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let O=0,k=R.length;O<k;O++){const G=Array.isArray(R[O])?R[O]:[R[O]];for(let N=0,A=G.length;N<A;N++){const z=G[N];if(S(z,O,N,H)===!0){const re=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let fe=0;fe<J.length;fe++){const ae=J[fe],de=T(ae);typeof ae=="number"||typeof ae=="boolean"?(z.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,re+ue,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=0,z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=0,z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=0):(ae.toArray(z.__data,ue),ue+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,P,R,H){const O=I.value,k=P+"_"+R;if(H[k]===void 0)return typeof O=="number"||typeof O=="boolean"?H[k]=O:H[k]=O.clone(),!0;{const G=H[k];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return H[k]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function E(I){const P=I.uniforms;let R=0;const H=16;for(let k=0,G=P.length;k<G;k++){const N=Array.isArray(P[k])?P[k]:[P[k]];for(let A=0,z=N.length;A<z;A++){const re=N[A],J=Array.isArray(re.value)?re.value:[re.value];for(let ue=0,fe=J.length;ue<fe;ue++){const ae=J[ue],de=T(ae),V=R%H,le=V%de.boundary,oe=V+le;R+=le,oe!==0&&H-oe<de.storage&&(R+=H-oe),re.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=R,R+=de.storage}}}const O=R%H;return O>0&&(R+=H-O),I.__size=R,I.__cache={},this}function T(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function M(I){const P=I.target;P.removeEventListener("dispose",M);const R=u.indexOf(P.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function y(){for(const I in o)s.deleteBuffer(o[I]);u=[],o={},l={}}return{bind:h,update:p,dispose:y}}class Ff{constructor(e={}){const{canvas:t=q_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,y=null;const I=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=Tr,this.toneMappingExposure=1;const R=this;let H=!1,O=0,k=0,G=null,N=-1,A=null;const z=new Pt,re=new Pt;let J=null;const ue=new yt(0);let fe=0,ae=t.width,de=t.height,V=1,le=null,oe=null;const U=new Pt(0,0,ae,de),se=new Pt(0,0,ae,de);let De=!1;const Z=new Nf;let he=!1,Ee=!1;this.transmissionResolutionScale=1;const xe=new Ft,Ce=new Ft,Xe=new X,Ue=new Pt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function at(){return G===null?V:1}let F=r;function Ht(C,q){return t.getContext(C,q)}try{const C={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mf}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Le,!1),F===null){const q="webgl2";if(F=Ht(q,C),F===null)throw Ht(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ut,st,qe,vt,Be,L,b,Q,pe,ge,te,ve,ye,be,Ze,Me,ke,He,nt,ze,pt,lt,Rt,W;function Re(){ut=new JE(F),ut.init(),lt=new I1(F,ut),st=new WE(F,ut,e,lt),qe=new P1(F,ut),st.reverseDepthBuffer&&_&&qe.buffers.depth.setReversed(!0),vt=new ew(F),Be=new v1,L=new L1(F,ut,qe,Be,st,lt,vt),b=new qE(R),Q=new KE(R),pe=new aS(F),Rt=new GE(F,pe),ge=new ZE(F,pe,vt,Rt),te=new nw(F,ge,pe,vt),nt=new tw(F,st,L),Me=new XE(Be),ve=new x1(R,b,Q,ut,st,Rt,Me),ye=new z1(R,Be),be=new y1,Ze=new b1(ut),He=new HE(R,b,Q,qe,te,S,h),ke=new R1(R,te,st),W=new B1(F,vt,st,qe),ze=new jE(F,ut,vt),pt=new QE(F,ut,vt),vt.programs=ve.programs,R.capabilities=st,R.extensions=ut,R.properties=Be,R.renderLists=be,R.shadowMap=ke,R.state=qe,R.info=vt}Re();const ce=new O1(R,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(ae,de,!1))},this.getSize=function(C){return C.set(ae,de)},this.setSize=function(C,q,ne=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=C,de=q,t.width=Math.floor(C*V),t.height=Math.floor(q*V),ne===!0&&(t.style.width=C+"px",t.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(ae*V,de*V).floor()},this.setDrawingBufferSize=function(C,q,ne){ae=C,de=q,V=ne,t.width=Math.floor(C*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,q,ne,K){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,q,ne,K),qe.viewport(z.copy(U).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(se)},this.setScissor=function(C,q,ne,K){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,q,ne,K),qe.scissor(re.copy(se).multiplyScalar(V).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){qe.setScissorTest(De=C)},this.setOpaqueSort=function(C){le=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(C=!0,q=!0,ne=!0){let K=0;if(C){let Y=!1;if(G!==null){const Te=G.texture.format;Y=Te===Cf||Te===Af||Te===bf}if(Y){const Te=G.texture.type,Ne=Te===Yi||Te===is||Te===ta||Te===no||Te===wf||Te===Tf,Oe=He.getClearColor(),Ge=He.getClearAlpha(),rt=Oe.r,it=Oe.g,We=Oe.b;Ne?(E[0]=rt,E[1]=it,E[2]=We,E[3]=Ge,F.clearBufferuiv(F.COLOR,0,E)):(T[0]=rt,T[1]=it,T[2]=We,T[3]=Ge,F.clearBufferiv(F.COLOR,0,T))}else K|=F.COLOR_BUFFER_BIT}q&&(K|=F.DEPTH_BUFFER_BIT),ne&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),He.dispose(),be.dispose(),Ze.dispose(),Be.dispose(),b.dispose(),Q.dispose(),te.dispose(),Rt.dispose(),W.dispose(),ve.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",as),ce.removeEventListener("sessionend",$i),Ci.stop()};function me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const C=vt.autoReset,q=ke.enabled,ne=ke.autoUpdate,K=ke.needsUpdate,Y=ke.type;Re(),vt.autoReset=C,ke.enabled=q,ke.autoUpdate=ne,ke.needsUpdate=K,ke.type=Y}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ct(C){const q=C.target;q.removeEventListener("dispose",ct),Ut(q)}function Ut(C){Qt(C),Be.remove(C)}function Qt(C){const q=Be.get(C).programs;q!==void 0&&(q.forEach(function(ne){ve.releaseProgram(ne)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ne,K,Y,Te){q===null&&(q=Ct);const Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=fa(C,q,ne,K,Y);qe.setMaterial(K,Ne);let Ge=ne.index,rt=1;if(K.wireframe===!0){if(Ge=ge.getWireframeAttribute(ne),Ge===void 0)return;rt=2}const it=ne.drawRange,We=ne.attributes.position;let _t=it.start*rt,dt=(it.start+it.count)*rt;Te!==null&&(_t=Math.max(_t,Te.start*rt),dt=Math.min(dt,(Te.start+Te.count)*rt)),Ge!==null?(_t=Math.max(_t,0),dt=Math.min(dt,Ge.count)):We!=null&&(_t=Math.max(_t,0),dt=Math.min(dt,We.count));const Xt=dt-_t;if(Xt<0||Xt===1/0)return;Rt.setup(Y,K,Oe,ne,Ge);let zt,St=ze;if(Ge!==null&&(zt=pe.get(Ge),St=pt,St.setIndex(zt)),Y.isMesh)K.wireframe===!0?(qe.setLineWidth(K.wireframeLinewidth*at()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(Y.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),qe.setLineWidth(Je*at()),Y.isLineSegments?St.setMode(F.LINES):Y.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else Y.isPoints?St.setMode(F.POINTS):Y.isSprite&&St.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)St.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Je=Y._multiDrawStarts,qt=Y._multiDrawCounts,xt=Y._multiDrawCount,mn=Ge?pe.get(Ge).bytesPerElement:1,Ji=Be.get(K).currentProgram.getUniforms();for(let Tn=0;Tn<xt;Tn++)Ji.setValue(F,"_gl_DrawID",Tn),St.render(Je[Tn]/mn,qt[Tn])}else if(Y.isInstancedMesh)St.renderInstances(_t,Xt,Y.count);else if(ne.isInstancedBufferGeometry){const Je=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,qt=Math.min(ne.instanceCount,Je);St.renderInstances(_t,Xt,qt)}else St.render(_t,Xt)};function Mt(C,q,ne){C.transparent===!0&&C.side===fi&&C.forceSinglePass===!1?(C.side=zn,C.needsUpdate=!0,ls(C,q,ne),C.side=br,C.needsUpdate=!0,ls(C,q,ne),C.side=fi):ls(C,q,ne)}this.compile=function(C,q,ne=null){ne===null&&(ne=C),y=Ze.get(ne),y.init(q),P.push(y),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),C!==ne&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights();const K=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Oe=Te[Ne];Mt(Oe,ne,Y),K.add(Oe)}else Mt(Te,ne,Y),K.add(Te)}),P.pop(),y=null,K},this.compileAsync=function(C,q,ne=null){const K=this.compile(C,q,ne);return new Promise(Y=>{function Te(){if(K.forEach(function(Ne){Be.get(Ne).currentProgram.isReady()&&K.delete(Ne)}),K.size===0){Y(C);return}setTimeout(Te,10)}ut.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Pn=null;function wn(C){Pn&&Pn(C)}function as(){Ci.stop()}function $i(){Ci.start()}const Ci=new g0;Ci.setAnimationLoop(wn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(C){Pn=C,ce.setAnimationLoop(C),C===null?Ci.stop():Ci.start()},ce.addEventListener("sessionstart",as),ce.addEventListener("sessionend",$i),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(q),q=ce.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,q,G),y=Ze.get(C,P.length),y.init(q),P.push(y),Ce.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Z.setFromProjectionMatrix(Ce),Ee=this.localClippingEnabled,he=Me.init(this.clippingPlanes,Ee),M=be.get(C,I.length),M.init(),I.push(M),ce.enabled===!0&&ce.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&Ri(Te,q,-1/0,R.sortObjects)}Ri(C,q,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(le,oe),Tt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Tt&&He.addToRenderList(M,C),this.info.render.frame++,he===!0&&Me.beginShadows();const ne=y.state.shadowsArray;ke.render(ne,C,q),he===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=M.opaque,Y=M.transmissive;if(y.setupLights(),q.isArrayCamera){const Te=q.cameras;if(Y.length>0)for(let Ne=0,Oe=Te.length;Ne<Oe;Ne++){const Ge=Te[Ne];Nr(K,Y,C,Ge)}Tt&&He.render(C);for(let Ne=0,Oe=Te.length;Ne<Oe;Ne++){const Ge=Te[Ne];Rr(M,C,Ge,Ge.viewport)}}else Y.length>0&&Nr(K,Y,C,q),Tt&&He.render(C),Rr(M,C,q);G!==null&&k===0&&(L.updateMultisampleRenderTarget(G),L.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(R,C,q),Rt.resetDefaultState(),N=-1,A=null,P.pop(),P.length>0?(y=P[P.length-1],he===!0&&Me.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function Ri(C,q,ne,K){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){K&&Ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ce);const Ne=te.update(C),Oe=C.material;Oe.visible&&M.push(C,Ne,Oe,ne,Ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const Ne=te.update(C),Oe=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ue.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ue.copy(Ne.boundingSphere.center)),Ue.applyMatrix4(C.matrixWorld).applyMatrix4(Ce)),Array.isArray(Oe)){const Ge=Ne.groups;for(let rt=0,it=Ge.length;rt<it;rt++){const We=Ge[rt],_t=Oe[We.materialIndex];_t&&_t.visible&&M.push(C,Ne,_t,ne,Ue.z,We)}}else Oe.visible&&M.push(C,Ne,Oe,ne,Ue.z,null)}}const Te=C.children;for(let Ne=0,Oe=Te.length;Ne<Oe;Ne++)Ri(Te[Ne],q,ne,K)}function Rr(C,q,ne,K){const Y=C.opaque,Te=C.transmissive,Ne=C.transparent;y.setupLightsView(ne),he===!0&&Me.setGlobalState(R.clippingPlanes,ne),K&&qe.viewport(z.copy(K)),Y.length>0&&Ki(Y,q,ne),Te.length>0&&Ki(Te,q,ne),Ne.length>0&&Ki(Ne,q,ne),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Nr(C,q,ne,K){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[K.id]===void 0&&(y.state.transmissionRenderTarget[K.id]=new rs(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?aa:Yi,minFilter:ns,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Te=y.state.transmissionRenderTarget[K.id],Ne=K.viewport||z;Te.setSize(Ne.z*R.transmissionResolutionScale,Ne.w*R.transmissionResolutionScale);const Oe=R.getRenderTarget();R.setRenderTarget(Te),R.getClearColor(ue),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),Tt&&He.render(ne);const Ge=R.toneMapping;R.toneMapping=Tr;const rt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),y.setupLightsView(K),he===!0&&Me.setGlobalState(R.clippingPlanes,K),Ki(C,ne,K),L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te),ut.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,_t=q.length;We<_t;We++){const dt=q[We],Xt=dt.object,zt=dt.geometry,St=dt.material,Je=dt.group;if(St.side===fi&&Xt.layers.test(K.layers)){const qt=St.side;St.side=zn,St.needsUpdate=!0,ua(Xt,ne,K,zt,St,Je),St.side=qt,St.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te))}R.setRenderTarget(Oe),R.setClearColor(ue,fe),rt!==void 0&&(K.viewport=rt),R.toneMapping=Ge}function Ki(C,q,ne){const K=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Te=C.length;Y<Te;Y++){const Ne=C[Y],Oe=Ne.object,Ge=Ne.geometry,rt=K===null?Ne.material:K,it=Ne.group;Oe.layers.test(ne.layers)&&ua(Oe,q,ne,Ge,rt,it)}}function ua(C,q,ne,K,Y,Te){C.onBeforeRender(R,q,ne,K,Y,Te),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(R,q,ne,K,C,Te),Y.transparent===!0&&Y.side===fi&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,R.renderBufferDirect(ne,q,K,Y,C,Te),Y.side=br,Y.needsUpdate=!0,R.renderBufferDirect(ne,q,K,Y,C,Te),Y.side=fi):R.renderBufferDirect(ne,q,K,Y,C,Te),C.onAfterRender(R,q,ne,K,Y,Te)}function ls(C,q,ne){q.isScene!==!0&&(q=Ct);const K=Be.get(C),Y=y.state.lights,Te=y.state.shadowsArray,Ne=Y.state.version,Oe=ve.getParameters(C,Y.state,Te,q,ne),Ge=ve.getProgramCacheKey(Oe);let rt=K.programs;K.environment=C.isMeshStandardMaterial?q.environment:null,K.fog=q.fog,K.envMap=(C.isMeshStandardMaterial?Q:b).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",ct),rt=new Map,K.programs=rt);let it=rt.get(Ge);if(it!==void 0){if(K.currentProgram===it&&K.lightsStateVersion===Ne)return xi(C,Oe),it}else Oe.uniforms=ve.getUniforms(C),C.onBeforeCompile(Oe,R),it=ve.acquireProgram(Oe,Ge),rt.set(Ge,it),K.uniforms=Oe.uniforms;const We=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=Me.uniform),xi(C,Oe),K.needsLights=lc(C),K.lightsStateVersion=Ne,K.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMap.value=Y.state.directionalShadowMap,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotShadowMap.value=Y.state.spotShadowMap,We.spotLightMatrix.value=Y.state.spotLightMatrix,We.spotLightMap.value=Y.state.spotLightMap,We.pointShadowMap.value=Y.state.pointShadowMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=it,K.uniformsList=null,it}function da(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=$l.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function xi(C,q){const ne=Be.get(C);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function fa(C,q,ne,K,Y){q.isScene!==!0&&(q=Ct),L.resetTextureUnits();const Te=q.fog,Ne=K.isMeshStandardMaterial?q.environment:null,Oe=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ro,Ge=(K.isMeshStandardMaterial?Q:b).get(K.envMap||Ne),rt=K.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!ne.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!ne.morphAttributes.position,_t=!!ne.morphAttributes.normal,dt=!!ne.morphAttributes.color;let Xt=Tr;K.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Xt=R.toneMapping);const zt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,St=zt!==void 0?zt.length:0,Je=Be.get(K),qt=y.state.lights;if(he===!0&&(Ee===!0||C!==A)){const dn=C===A&&K.id===N;Me.setState(K,C,dn)}let xt=!1;K.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==qt.state.version||Je.outputColorSpace!==Oe||Y.isBatchedMesh&&Je.batching===!1||!Y.isBatchedMesh&&Je.batching===!0||Y.isBatchedMesh&&Je.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Je.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Je.instancing===!1||!Y.isInstancedMesh&&Je.instancing===!0||Y.isSkinnedMesh&&Je.skinning===!1||!Y.isSkinnedMesh&&Je.skinning===!0||Y.isInstancedMesh&&Je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Je.instancingMorph===!1&&Y.morphTexture!==null||Je.envMap!==Ge||K.fog===!0&&Je.fog!==Te||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Me.numPlanes||Je.numIntersection!==Me.numIntersection)||Je.vertexAlphas!==rt||Je.vertexTangents!==it||Je.morphTargets!==We||Je.morphNormals!==_t||Je.morphColors!==dt||Je.toneMapping!==Xt||Je.morphTargetsCount!==St)&&(xt=!0):(xt=!0,Je.__version=K.version);let mn=Je.currentProgram;xt===!0&&(mn=ls(K,q,Y));let Ji=!1,Tn=!1,Ni=!1;const Lt=mn.getUniforms(),gn=Je.uniforms;if(qe.useProgram(mn.program)&&(Ji=!0,Tn=!0,Ni=!0),K.id!==N&&(N=K.id,Tn=!0),Ji||A!==C){qe.buffers.depth.getReversed()?(xe.copy(C.projectionMatrix),$_(xe),K_(xe),Lt.setValue(F,"projectionMatrix",xe)):Lt.setValue(F,"projectionMatrix",C.projectionMatrix),Lt.setValue(F,"viewMatrix",C.matrixWorldInverse);const on=Lt.map.cameraPosition;on!==void 0&&on.setValue(F,Xe.setFromMatrixPosition(C.matrixWorld)),st.logarithmicDepthBuffer&&Lt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Lt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Tn=!0,Ni=!0)}if(Y.isSkinnedMesh){Lt.setOptional(F,Y,"bindMatrix"),Lt.setOptional(F,Y,"bindMatrixInverse");const dn=Y.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Lt.setValue(F,"boneTexture",dn.boneTexture,L))}Y.isBatchedMesh&&(Lt.setOptional(F,Y,"batchingTexture"),Lt.setValue(F,"batchingTexture",Y._matricesTexture,L),Lt.setOptional(F,Y,"batchingIdTexture"),Lt.setValue(F,"batchingIdTexture",Y._indirectTexture,L),Lt.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Lt.setValue(F,"batchingColorTexture",Y._colorsTexture,L));const sn=ne.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&nt.update(Y,ne,mn),(Tn||Je.receiveShadow!==Y.receiveShadow)&&(Je.receiveShadow=Y.receiveShadow,Lt.setValue(F,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(gn.envMap.value=Ge,gn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&q.environment!==null&&(gn.envMapIntensity.value=q.environmentIntensity),Tn&&(Lt.setValue(F,"toneMappingExposure",R.toneMappingExposure),Je.needsLights&&ha(gn,Ni),Te&&K.fog===!0&&ye.refreshFogUniforms(gn,Te),ye.refreshMaterialUniforms(gn,K,V,de,y.state.transmissionRenderTarget[C.id]),$l.upload(F,da(Je),gn,L)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&($l.upload(F,da(Je),gn,L),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Lt.setValue(F,"center",Y.center),Lt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Lt.setValue(F,"normalMatrix",Y.normalMatrix),Lt.setValue(F,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const dn=K.uniformsGroups;for(let on=0,Et=dn.length;on<Et;on++){const vi=dn[on];W.update(vi,mn),W.bind(vi,mn)}}return mn}function ha(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function lc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,q,ne){Be.get(C.texture).__webglTexture=q,Be.get(C.depthTexture).__webglTexture=ne;const K=Be.get(C);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=ne===void 0,K.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,q){const ne=Be.get(C);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0};const pa=F.createFramebuffer();this.setRenderTarget=function(C,q=0,ne=0){G=C,O=q,k=ne;let K=!0,Y=null,Te=!1,Ne=!1;if(C){const Ge=Be.get(C);if(Ge.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(F.FRAMEBUFFER,null),K=!1;else if(Ge.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Ge.__hasExternalTextures)L.rebindTextures(C,Be.get(C.texture).__webglTexture,Be.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const We=C.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&Be.has(We)&&(C.width!==We.image.width||C.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ne=!0);const it=Be.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[q])?Y=it[q][ne]:Y=it[q],Te=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?Y=Be.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?Y=it[ne]:Y=it,z.copy(C.viewport),re.copy(C.scissor),J=C.scissorTest}else z.copy(U).multiplyScalar(V).floor(),re.copy(se).multiplyScalar(V).floor(),J=De;if(ne!==0&&(Y=pa),qe.bindFramebuffer(F.FRAMEBUFFER,Y)&&K&&qe.drawBuffers(C,Y),qe.viewport(z),qe.scissor(re),qe.setScissorTest(J),Te){const Ge=Be.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ge.__webglTexture,ne)}else if(Ne){const Ge=Be.get(C.texture),rt=q;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.__webglTexture,ne,rt)}else if(C!==null&&ne!==0){const Ge=Be.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ge.__webglTexture,ne)}N=-1},this.readRenderTargetPixels=function(C,q,ne,K,Y,Te,Ne){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){qe.bindFramebuffer(F.FRAMEBUFFER,Oe);try{const Ge=C.texture,rt=Ge.format,it=Ge.type;if(!st.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-K&&ne>=0&&ne<=C.height-Y&&F.readPixels(q,ne,K,Y,lt.convert(rt),lt.convert(it),Te)}finally{const Ge=G!==null?Be.get(G).__webglFramebuffer:null;qe.bindFramebuffer(F.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,q,ne,K,Y,Te,Ne){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){const Ge=C.texture,rt=Ge.format,it=Ge.type;if(!st.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=C.width-K&&ne>=0&&ne<=C.height-Y){qe.bindFramebuffer(F.FRAMEBUFFER,Oe);const We=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,We),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),F.readPixels(q,ne,K,Y,lt.convert(rt),lt.convert(it),0);const _t=G!==null?Be.get(G).__webglFramebuffer:null;qe.bindFramebuffer(F.FRAMEBUFFER,_t);const dt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Y_(F,dt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,We),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te),F.deleteBuffer(We),F.deleteSync(dt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,q=null,ne=0){C.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1]);const K=Math.pow(2,-ne),Y=Math.floor(C.image.width*K),Te=Math.floor(C.image.height*K),Ne=q!==null?q.x:0,Oe=q!==null?q.y:0;L.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,ne,0,0,Ne,Oe,Y,Te),qe.unbindTexture()};const ma=F.createFramebuffer(),ga=F.createFramebuffer();this.copyTextureToTexture=function(C,q,ne=null,K=null,Y=0,Te=null){C.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,C=arguments[1],q=arguments[2],Te=arguments[3]||0,ne=null),Te===null&&(Y!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Y,Y=0):Te=0);let Ne,Oe,Ge,rt,it,We,_t,dt,Xt;const zt=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(ne!==null)Ne=ne.max.x-ne.min.x,Oe=ne.max.y-ne.min.y,Ge=ne.isBox3?ne.max.z-ne.min.z:1,rt=ne.min.x,it=ne.min.y,We=ne.isBox3?ne.min.z:0;else{const sn=Math.pow(2,-Y);Ne=Math.floor(zt.width*sn),Oe=Math.floor(zt.height*sn),C.isDataArrayTexture?Ge=zt.depth:C.isData3DTexture?Ge=Math.floor(zt.depth*sn):Ge=1,rt=0,it=0,We=0}K!==null?(_t=K.x,dt=K.y,Xt=K.z):(_t=0,dt=0,Xt=0);const St=lt.convert(q.format),Je=lt.convert(q.type);let qt;q.isData3DTexture?(L.setTexture3D(q,0),qt=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),qt=F.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),qt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const xt=F.getParameter(F.UNPACK_ROW_LENGTH),mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ji=F.getParameter(F.UNPACK_SKIP_PIXELS),Tn=F.getParameter(F.UNPACK_SKIP_ROWS),Ni=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,zt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,zt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,it),F.pixelStorei(F.UNPACK_SKIP_IMAGES,We);const Lt=C.isDataArrayTexture||C.isData3DTexture,gn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const sn=Be.get(C),dn=Be.get(q),on=Be.get(sn.__renderTarget),Et=Be.get(dn.__renderTarget);qe.bindFramebuffer(F.READ_FRAMEBUFFER,on.__webglFramebuffer),qe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vi=0;vi<Ge;vi++)Lt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(C).__webglTexture,Y,We+vi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(q).__webglTexture,Te,Xt+vi)),F.blitFramebuffer(rt,it,Ne,Oe,_t,dt,Ne,Oe,F.DEPTH_BUFFER_BIT,F.NEAREST);qe.bindFramebuffer(F.READ_FRAMEBUFFER,null),qe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||Be.has(C)){const sn=Be.get(C),dn=Be.get(q);qe.bindFramebuffer(F.READ_FRAMEBUFFER,ma),qe.bindFramebuffer(F.DRAW_FRAMEBUFFER,ga);for(let on=0;on<Ge;on++)Lt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,sn.__webglTexture,Y,We+on):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,sn.__webglTexture,Y),gn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,Te,Xt+on):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,Te),Y!==0?F.blitFramebuffer(rt,it,Ne,Oe,_t,dt,Ne,Oe,F.COLOR_BUFFER_BIT,F.NEAREST):gn?F.copyTexSubImage3D(qt,Te,_t,dt,Xt+on,rt,it,Ne,Oe):F.copyTexSubImage2D(qt,Te,_t,dt,rt,it,Ne,Oe);qe.bindFramebuffer(F.READ_FRAMEBUFFER,null),qe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else gn?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(qt,Te,_t,dt,Xt,Ne,Oe,Ge,St,Je,zt.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(qt,Te,_t,dt,Xt,Ne,Oe,Ge,St,zt.data):F.texSubImage3D(qt,Te,_t,dt,Xt,Ne,Oe,Ge,St,Je,zt):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Te,_t,dt,Ne,Oe,St,Je,zt.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Te,_t,dt,zt.width,zt.height,St,zt.data):F.texSubImage2D(F.TEXTURE_2D,Te,_t,dt,Ne,Oe,St,Je,zt);F.pixelStorei(F.UNPACK_ROW_LENGTH,xt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ji),F.pixelStorei(F.UNPACK_SKIP_ROWS,Tn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ni),Te===0&&q.generateMipmaps&&F.generateMipmap(qt),qe.unbindTexture()},this.copyTextureToTexture3D=function(C,q,ne=null,K=null,Y=0){return C.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,K=arguments[1]||null,C=arguments[2],q=arguments[3],Y=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,ne,K,Y)},this.initRenderTarget=function(C){Be.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),qe.unbindTexture()},this.resetState=function(){O=0,k=0,G=null,qe.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}function V1(){const s=tt.useRef(null),{isIronManMode:e,suitOverdrive:t}=pn();return tt.useEffect(()=>{const r=s.current;if(!r)return;let o=window.innerWidth,l=window.innerHeight;const u=new Rf,d=new Rn(60,o/l,1,1e3);d.position.z=400;const h=new Ff({antialias:!1,alpha:!0});h.setSize(o,l),h.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),r.innerHTML="",r.appendChild(h.domElement);const p=1e3,m=new En,g=new Float32Array(p*3),_=new Float32Array(p*3),S=new Float32Array(p*3),E=new yt(e?"#e62429":"#00f0ff"),T=new yt(e?"#ffd700":"#38bdf8"),M=new yt(e?"#ff7700":"#ffffff");for(let N=0;N<p;N++){g[N*3]=(Math.random()-.5)*1200,g[N*3+1]=(Math.random()-.5)*1200,g[N*3+2]=(Math.random()-.5)*800,_[N*3]=(Math.random()-.5)*.4,_[N*3+1]=e?Math.random()*.9+.2:(Math.random()-.5)*.3,_[N*3+2]=(Math.random()-.5)*.4;const A=Math.random(),z=A<.5?E:A<.8?T:M;S[N*3]=z.r,S[N*3+1]=z.g,S[N*3+2]=z.b}m.setAttribute("position",new Vn(g,3)),m.setAttribute("color",new Vn(S,3));const y=new rc({size:e?3.5:2.5,vertexColors:!0,transparent:!0,opacity:e?.75:.6,blending:Kl}),I=new Pf(m,y);u.add(I);let P=0,R=0;const H=N=>{P=(N.clientX-o/2)*.08,R=(N.clientY-l/2)*.08};window.addEventListener("mousemove",H);let O;const k=()=>{O=requestAnimationFrame(k),d.position.x+=(P-d.position.x)*.04,d.position.y+=(-R-d.position.y)*.04;const N=I.geometry.attributes.position.array;for(let A=0;A<p;A++)N[A*3]+=_[A*3],N[A*3+1]+=_[A*3+1],N[A*3+2]+=_[A*3+2],N[A*3+1]>600&&(N[A*3+1]=-600),N[A*3+1]<-600&&(N[A*3+1]=600),N[A*3]>600&&(N[A*3]=-600),N[A*3]<-600&&(N[A*3]=600);I.geometry.attributes.position.needsUpdate=!0,I.rotation.y+=5e-4,h.render(u,d)};k();const G=()=>{o=window.innerWidth,l=window.innerHeight,d.aspect=o/l,d.updateProjectionMatrix(),h.setSize(o,l)};return window.addEventListener("resize",G),()=>{cancelAnimationFrame(O),window.removeEventListener("mousemove",H),window.removeEventListener("resize",G),h.dispose(),u.clear(),r&&h.domElement&&r.removeChild(h.domElement)}},[e,t]),x.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-70"})}function H1({className:s="w-full h-full",interactive:e=!0}){const t=tt.useRef(null),{isIronManMode:r,suitOverdrive:o}=pn(),l=tt.useRef(null),u=tt.useRef(null),d=tt.useRef([]),h=tt.useRef([]),p=tt.useRef(null),m=tt.useRef({x:0,y:0,targetX:0,targetY:0,isDown:!1,lastMouseX:0,lastMouseY:0});return tt.useEffect(()=>{const g=t.current;if(!g)return;const _=g.clientWidth||380,S=g.clientHeight||380,E=new Rf;l.current=E;const T=new Rn(45,_/S,.1,100);T.position.z=7;const M=new Ff({antialias:!0,alpha:!0});M.setSize(_,S),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.outputColorSpace=$n,g.innerHTML="",g.appendChild(M.domElement);const y=new mi;E.add(y);const I=r?16726832:61695,P=r?16766720:35071,R=r?16777215:14745599,H=new ea(2.3,.18,24,72),O=new Ys({color:r?2232597:1121582,metalness:.9,roughness:.2,wireframe:!1}),k=new It(H,O);y.add(k);const G=new ea(1.85,.08,16,64),N=new Ys({color:r?12092939:1981023,metalness:.95,roughness:.3}),A=new It(G,N);y.add(A);const z=new ea(1.35,.05,16,64),re=new Ti({color:I,transparent:!0,opacity:.85}),J=new It(z,re);y.add(J);const ue=10,fe=new mi;y.add(fe),h.current=[];for(let te=0;te<ue;te++){const ve=te/ue*Math.PI*2,ye=1.85,be=new mi;be.position.x=Math.cos(ve)*ye,be.position.y=Math.sin(ve)*ye,be.rotation.z=ve+Math.PI/2;const Ze=new Ar(.38,.22,.28),Me=new Ys({color:r?13938487:13399842,metalness:.8,roughness:.35}),ke=new It(Ze,Me);be.add(ke);const He=new Ar(.28,.06,.32),nt=new Ti({color:I,transparent:!0,opacity:.95}),ze=new It(He,nt);be.add(ze),fe.add(be),h.current.push(ze)}const ae=new mi;y.add(ae),u.current=ae;const de=new oo(.9,.9,.15,32),V=new Ys({color:I,emissive:I,emissiveIntensity:.8,transparent:!0,opacity:.85,metalness:.3,roughness:.1}),le=new It(de,V);le.rotation.x=Math.PI/2,ae.add(le);const oe=new l0,U=.55;for(let te=0;te<3;te++){const ve=te/3*Math.PI*2-Math.PI/2,ye=Math.cos(ve)*U,be=Math.sin(ve)*U;te===0?oe.moveTo(ye,be):oe.lineTo(ye,be)}oe.closePath();const se=new Uf(oe),De=new Ti({color:R,wireframe:!0,wireframeLinewidth:2}),Z=new It(se,De);Z.position.z=.1,ae.add(Z);const he=new sa(.95,1.05,32),Ee=new Ti({color:P,wireframe:!0,transparent:!0,opacity:.7}),xe=new It(he,Ee);y.add(xe),d.current.push(xe);const Ce=180,Xe=new En,Ue=new Float32Array(Ce*3),Ct=new Float32Array(Ce),Tt=new Float32Array(Ce),at=new Float32Array(Ce);for(let te=0;te<Ce;te++){const ve=Math.random()*Math.PI*2,ye=1+Math.random()*1.5,be=(Math.random()-.5)*.4;Ue[te*3]=Math.cos(ve)*ye,Ue[te*3+1]=Math.sin(ve)*ye,Ue[te*3+2]=be,Ct[te]=ve,Tt[te]=ye,at[te]=.02+Math.random()*.03}Xe.setAttribute("position",new Vn(Ue,3));const F=new rc({size:.06,color:I,transparent:!0,opacity:.8,blending:Kl}),Ht=new Pf(Xe,F);y.add(Ht),p.current={points:Ht,angleArray:Ct,radiusArray:Tt,speedArray:at};const ut=new p0(16777215,.8);E.add(ut);const st=new h0(I,3,10);st.position.set(0,0,2),E.add(st);const qe=te=>{m.current.isDown=!0,m.current.lastMouseX=te.clientX,m.current.lastMouseY=te.clientY},vt=te=>{const ve=g.getBoundingClientRect(),ye=(te.clientX-ve.left)/ve.width*2-1,be=-((te.clientY-ve.top)/ve.height)*2+1;if(m.current.targetX=ye*.45,m.current.targetY=be*.45,m.current.isDown){const Ze=te.clientX-m.current.lastMouseX,Me=te.clientY-m.current.lastMouseY;y.rotation.y+=Ze*.01,y.rotation.x+=Me*.01,m.current.lastMouseX=te.clientX,m.current.lastMouseY=te.clientY}},Be=()=>{m.current.isDown=!1},L=()=>{vf(),le.material&&(le.material.emissiveIntensity=2.5,setTimeout(()=>{le.material&&(le.material.emissiveIntensity=.8)},400))};e&&(g.addEventListener("mousedown",qe),window.addEventListener("mousemove",vt),window.addEventListener("mouseup",Be),g.addEventListener("click",L));let b,Q=new m0;const pe=()=>{b=requestAnimationFrame(pe);const te=Q.getElapsedTime();m.current.isDown||(y.rotation.y+=(m.current.targetX-y.rotation.y)*.05,y.rotation.x+=(-m.current.targetY-y.rotation.x)*.05),fe.rotation.z=te*.15,xe.rotation.z=-te*.35,Z.rotation.z=te*.5;const ve=Math.sin(te*4)*.04+1;if(ae.scale.set(ve,ve,ve),o?(le.material.emissiveIntensity=3,st.intensity=6):(le.material.emissiveIntensity=.8+Math.sin(te*3)*.2,st.intensity=3),p.current){const{points:ye,angleArray:be,radiusArray:Ze,speedArray:Me}=p.current,ke=ye.geometry.attributes.position.array;for(let He=0;He<Ce;He++)be[He]+=Me[He],ke[He*3]=Math.cos(be[He])*Ze[He],ke[He*3+1]=Math.sin(be[He])*Ze[He];ye.geometry.attributes.position.needsUpdate=!0}M.render(E,T)};pe();const ge=()=>{if(!g)return;const te=g.clientWidth,ve=g.clientHeight;T.aspect=te/ve,T.updateProjectionMatrix(),M.setSize(te,ve)};return window.addEventListener("resize",ge),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",ge),e&&(g.removeEventListener("mousedown",qe),window.removeEventListener("mousemove",vt),window.removeEventListener("mouseup",Be),g.removeEventListener("click",L)),M.dispose(),E.clear(),g&&M.domElement&&g.removeChild(M.domElement)}},[r,o,e]),x.jsxs("div",{className:`relative ${s} flex items-center justify-center cursor-grab active:cursor-grabbing select-none group`,children:[x.jsx("div",{ref:t,className:"w-full h-full"}),x.jsx("div",{className:"absolute inset-0 pointer-events-none flex items-center justify-center",children:x.jsx("div",{className:`w-[85%] h-[85%] rounded-full border border-dashed transition-all duration-700 ${r?"border-iron-red/30":"border-stark-blue/30"} animate-spin-slow`})}),x.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase font-tech px-2 py-0.5 rounded bg-black/60 border border-current pointer-events-none text-muted-foreground opacity-75 group-hover:opacity-100 transition-opacity",children:"[ Click Core // Drag to Rotate ]"})]})}function G1(){const{isIronManMode:s,toggleMode:e,fireRepulsor:t,speakJarvis:r}=pn(),o=()=>{e()},l=()=>{Hn(1500),r(s?"Tactical targeting locked on 14 potential hostile vectors. Standing by for engagement, Mr. Stark.":"Stark Industries global markets up 3.4% this morning, sir. Coffee is ready in the workshop.")};return x.jsxs("section",{id:"hero",className:"relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden",children:[x.jsx("div",{className:`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[140px] pointer-events-none transition-colors duration-1000 ${s?"bg-red-700/20":"bg-cyan-500/20"}`}),x.jsx("div",{className:`absolute bottom-10 -right-32 w-96 h-96 rounded-full blur-[140px] pointer-events-none transition-colors duration-1000 ${s?"bg-amber-600/20":"bg-blue-600/20"}`}),x.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10",children:x.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",children:[x.jsxs("div",{className:"lg:col-span-7 flex flex-col gap-6",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsxs("span",{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-tech tracking-widest uppercase border backdrop-blur-md transition-all duration-500 ${s?"border-iron-red bg-red-950/50 text-yellow-400 shadow-arc-red":"border-stark-blue bg-cyan-950/50 text-cyan-300 shadow-arc-cyan"}`,children:[x.jsx("span",{className:"w-2 h-2 rounded-full bg-current animate-ping"}),s?"AVENGERS PROTOCOL // MARK LXXXV ACTIVE":"STARK INDUSTRIES // CEO & CHIEF ARCHITECT"]}),x.jsxs("button",{onClick:l,className:"text-[11px] font-tech text-slate-400 hover:text-white flex items-center gap-1 transition-colors",title:"Ask JARVIS for status",children:[x.jsx(Sf,{className:"w-3.5 h-3.5"}),"[JARVIS PING]"]})]}),x.jsx("div",{children:s?x.jsxs(x.Fragment,{children:[x.jsxs("h1",{className:"font-orbitron font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white uppercase leading-none drop-shadow-lg",children:["I AM ",x.jsx("br",{}),x.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 glow-red",children:"IRON MAN."})]}),x.jsx("p",{className:"mt-4 text-base sm:text-lg font-tech text-rose-200/80 max-w-xl leading-relaxed",children:"Earth's Armored Avenger. Powered by a self-synthesized nanotech Arc Reactor, piloting advanced multi-threat kinetic exoskeletons engineered to protect humanity against cosmic and terrestrial threats."})]}):x.jsxs(x.Fragment,{children:[x.jsxs("h1",{className:"font-syne font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white uppercase leading-none",children:["TONY ",x.jsx("br",{}),x.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 glow-cyan",children:"STARK."})]}),x.jsx("p",{className:"mt-2 font-orbitron text-sm sm:text-base tracking-widest text-slate-400 uppercase",children:"Genius. Billionaire. Playboy. Philanthropist."}),x.jsx("p",{className:"mt-4 text-base sm:text-lg font-sans text-slate-300/90 max-w-xl leading-relaxed",children:"Visionary inventor, robotics pioneer, and MIT prodigy. Redefining modern civilization with clean fusion energy, autonomous artificial intelligence, and quantum temporal mechanics."})]})}),x.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:s?x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"p-3 rounded border border-iron-red/30 bg-black/60 backdrop-blur-md",children:[x.jsx("span",{className:"text-[10px] font-tech uppercase tracking-wider text-slate-400 block",children:"ARMOR STATUS"}),x.jsx("span",{className:"text-lg font-orbitron font-bold text-yellow-400",children:"CLASS 100+"})]}),x.jsxs("div",{className:"p-3 rounded border border-iron-red/30 bg-black/60 backdrop-blur-md",children:[x.jsx("span",{className:"text-[10px] font-tech uppercase tracking-wider text-slate-400 block",children:"THRUST SPEED"}),x.jsx("span",{className:"text-lg font-orbitron font-bold text-white",children:"MACH 15+"})]}),x.jsxs("div",{className:"p-3 rounded border border-iron-red/30 bg-black/60 backdrop-blur-md",children:[x.jsx("span",{className:"text-[10px] font-tech uppercase tracking-wider text-slate-400 block",children:"CORE OUTPUT"}),x.jsx("span",{className:"text-lg font-orbitron font-bold text-cyan-400",children:"4.5 GW"})]}),x.jsxs("div",{className:"p-3 rounded border border-iron-red/30 bg-black/60 backdrop-blur-md",children:[x.jsx("span",{className:"text-[10px] font-tech uppercase tracking-wider text-slate-400 block",children:"NANITE RESERVE"}),x.jsx("span",{className:"text-lg font-orbitron font-bold text-red-500",children:"100% FULL"})]})]}):x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"p-3 rounded border border-stark-blue/30 bg-black/50 backdrop-blur-md",children:[x.jsx("span",{className:"text-[10px] font-tech uppercase tracking-wider text-slate-400 block",children:"NET WORTH"}),x.jsx("span",{className:"text-lg font-orbitron font-bold text-yellow-400",children:"$12.4B+"})]}),x.jsxs("div",{className:"p-3 rounded border border-stark-blue/30 bg-black/50 backdrop-blur-md",children:[x.jsx("span",{className:"text-[10px] font-tech uppercase tracking-wider text-slate-400 block",children:"PATENTS"}),x.jsx("span",{className:"text-lg font-orbitron font-bold text-cyan-300",children:"1,842+"})]}),x.jsxs("div",{className:"p-3 rounded border border-stark-blue/30 bg-black/50 backdrop-blur-md",children:[x.jsx("span",{className:"text-[10px] font-tech uppercase tracking-wider text-slate-400 block",children:"GENIUS IQ"}),x.jsx("span",{className:"text-lg font-orbitron font-bold text-white",children:"270+"})]}),x.jsxs("div",{className:"p-3 rounded border border-stark-blue/30 bg-black/50 backdrop-blur-md",children:[x.jsx("span",{className:"text-[10px] font-tech uppercase tracking-wider text-slate-400 block",children:"CLEAN POWER"}),x.jsx("span",{className:"text-lg font-orbitron font-bold text-green-400",children:"ZERO CARBON"})]})]})}),x.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-2",children:[x.jsx("button",{onClick:o,className:`px-6 py-3 rounded-lg font-orbitron font-bold text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all duration-300 shadow-xl ${s?"bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-black shadow-arc-red":"bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black shadow-arc-cyan"} hover:scale-105 active:scale-95`,children:s?x.jsxs(x.Fragment,{children:[x.jsx(tc,{className:"w-4 h-4"}),"DE-SUIT TO TONY STARK"]}):x.jsxs(x.Fragment,{children:[x.jsx(ec,{className:"w-4 h-4"}),"SUIT UP TO IRON MAN"]})}),x.jsxs("button",{onClick:t,className:`px-5 py-3 rounded-lg font-tech text-xs tracking-widest uppercase border backdrop-blur-md transition-all flex items-center gap-2 ${s?"border-iron-red text-rose-300 hover:bg-iron-red/20 hover:text-white":"border-stark-blue text-cyan-300 hover:bg-stark-blue/20 hover:text-white"}`,children:[x.jsx(yf,{className:"w-4 h-4"}),s?"FIRE REPULSOR CANNON":"CALIBRATE ARC CORE"]}),x.jsxs("a",{href:"#hall-of-armor",className:"text-xs font-tech tracking-wider text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-1",children:["[ VIEW ALL 85 ARMORS ",x.jsx(Cg,{className:"w-3.5 h-3.5"})," ]"]})]})]}),x.jsxs("div",{className:"lg:col-span-5 flex flex-col items-center justify-center relative",children:[x.jsxs("div",{className:"w-full max-w-[420px] aspect-square relative flex items-center justify-center",children:[x.jsx(H1,{className:"w-full h-full"}),x.jsx("div",{className:"absolute inset-0 pointer-events-none rounded-full border border-dashed opacity-30 animate-spin-slow"}),x.jsx("div",{className:"absolute inset-6 pointer-events-none rounded-full border border-dotted opacity-20 animate-spin-reverse-slow"})]}),x.jsxs("div",{className:`mt-4 w-full max-w-[390px] p-3 rounded-xl border backdrop-blur-xl flex items-center gap-3 transition-all duration-500 ${s?"bg-black/80 border-iron-red/40 shadow-arc-red":"bg-black/70 border-stark-blue/40 shadow-arc-cyan"}`,children:[x.jsx("img",{src:s?"/assets/ironman-suit-front.jpg":"/assets/tony-portrait.png",alt:s?"Iron Man Mark 85":"Tony Stark",className:"w-14 h-14 rounded-lg object-cover object-top border border-white/20 shadow-md"}),x.jsxs("div",{className:"flex flex-col flex-1",children:[x.jsx("span",{className:"text-[10px] font-tech tracking-wider text-slate-400 uppercase",children:s?"COMBAT SPECIFICATION":"EXECUTIVE DOSSIER"}),x.jsx("span",{className:"text-sm font-orbitron font-bold text-white",children:s?"Armor Model LXXXV":"Anthony Edward Stark"}),x.jsx("span",{className:"text-xs font-tech text-slate-400",children:s?"Targeting: Locked // Nano-Gauntlet Ready":"CEO, Stark Industries // Malibu CA"})]}),x.jsx("button",{onClick:e,className:`p-2 rounded-full border text-xs transition-transform hover:scale-110 ${s?"border-yellow-400 text-yellow-300":"border-cyan-400 text-cyan-300"}`,title:"Transform",children:"⇄"})]})]})]})})]})}const Sg=[{id:"arc-reactor",title:"Arc Reactor Technology",category:"Clean Fusion Energy",patents:"US-8794102-B2",efficiency:"99.98%",powerOutput:"3.2 Gigawatts / Core",icon:"Zap",starkDescription:"Miniaturized clean fusion power generator. Originally designed to keep shrapnel away from my heart, now powering Stark Tower, electric grids, and zero-emission city infrastructure.",ironDescription:"The beating heart of all Iron Man combat platforms. High-current plasma ionization channels power repulsor thrusters, electromagnetic barriers, and devastating Unibeam discharges.",specs:[{label:"Core Element",value:"Synthesized Heavy Element (Post-Palladium)"},{label:"Magnetic Containment",value:"Superconducting Toroid Coil Matrix"},{label:"Output Duration",value:"Continuous for 15+ months without refueling"},{label:"Environmental Footprint",value:"Zero carbon, clean neutrino emission"}]},{id:"nanotech",title:"Smart Nanomachine Matrix",category:"Materials Science",patents:"US-9912048-A1",efficiency:"100%",powerOutput:"Sub-atomic reconfiguration",icon:"Cpu",starkDescription:"Programmable matter at the molecular scale. Capable of instant self-assembly, medical cellular repair, structural reinforcement, and instantaneous tool morphing.",ironDescription:"Fluid nano-platelets store in high-density chest housing. Morphs into hyper-dense energy cannons, anti-kinetic shields, or repairing breaches within milliseconds during intense combat.",specs:[{label:"Nanite Density",value:"1.4 x 10^18 units / liter"},{label:"Reaction Time",value:"0.003 seconds neural latency"},{label:"Reconstitution Rate",value:"Instantaneous damage absorption"},{label:"Matrix Bond",value:"Vibranium-infused titanium lattice"}]},{id:"jarvis-ai",title:"J.A.R.V.I.S. & F.R.I.D.A.Y.",category:"Artificial Superintelligence",patents:"US-6501239-AI",efficiency:"99.999%",powerOutput:"Quantum Cloud Processing",icon:"Terminal",starkDescription:"Just A Rather Very Intelligent System. Autonomous facility management, financial algorithmic trading, CAD design optimization, and home automation.",ironDescription:"Tactical combat co-pilot. Multi-target tracking, bullet trajectory calculation, suit diagnostics, threat level triage, and direct weapon system orchestration.",specs:[{label:"Cognitive Bandwidth",value:"100 PetaFLOPS Neural Net"},{label:"Target Lock Velocity",value:"Up to 1,200 simultaneous threats"},{label:"Voice Engine",value:"Bespoke British Natural Cadence"},{label:"Data Uplink",value:"Direct satellite & Stark orbital network"}]},{id:"time-gps",title:"Quantum Space-Time GPS",category:"Theoretical Physics",patents:"CLASSIFIED-AVENGERS",efficiency:"Exact Chronal Lock",powerOutput:"Pym Particle Integration",icon:"Compass",starkDescription:"Solved the quantum eigenvalue navigation paradox using an inverted Möbius strip topology. Enables controlled navigation through quantum micro-realms.",ironDescription:"Wearable nano-wrist GPS synchronized with the Quantum Tunnel. Anchors the wearer across alternate timelines and protects causality against temporal decay.",specs:[{label:"Mathematical Foundation",value:"Inverted Möbius Strip Eigenvalue"},{label:"Chrono-variance",value:"< 0.00000001 nanoseconds"},{label:"Pym Particle Flow",value:"Micro-regulated injection manifold"},{label:"Interface",value:"Holographic tactile nano-wristband"}]},{id:"holographic-cad",title:"Volumetric Holographic CAD",category:"Interface Design",patents:"US-7889104-B1",efficiency:"98.5%",powerOutput:"Photon Manipulation",icon:"Layers",starkDescription:"Physical gesture-controlled light workspace. Create, disassemble, and stress-test 3D prototypes with bare hands in mid-air before manufacturing.",ironDescription:"In-helmet tactical heads-up display. Renders thermal vision, structural wireframes, electromagnetic fields, and planetary telemetry onto the ocular field.",specs:[{label:"Spatial Resolution",value:"8K per cubic centimeter"},{label:"Haptic Feedback",value:"Ultrasonic radiation force arrays"},{label:"Gesture Latency",value:"< 1.2 ms optical tracking"},{label:"Rendering Engine",value:"Real-time Stark Volumetric Shader"}]},{id:"clean-grid",title:"Global Clean Energy Grid",category:"Sustainable Infrastructure",patents:"US-9003411-E1",efficiency:"99.4%",powerOutput:"Multi-Terawatt Global Grid",icon:"Activity",starkDescription:"Transitioned Stark Industries from munitions manufacturing to the world's undisputed clean energy pioneer. Powering smart cities across the globe.",ironDescription:"Self-charging broadcast power transmitters. Wirelessly recharges satellite arrays, drone sentinels, and emergency armor caches worldwide.",specs:[{label:"Carbon Reduction",value:"100% Zero Emission"},{label:"Grid Stability",value:"99.9999% uptime globally"},{label:"Decentralized Nodes",value:"3,800 micro-reactor stations"},{label:"Backup Reserve",value:"48,000 Megawatt-hours"}]}],j1=[{name:"Advanced Robotics & Automation",level:99,category:"Engineering"},{name:"Quantum Physics & Temporal Mechanics",level:98,category:"Theoretical Physics"},{name:"Artificial Intelligence Architecture",level:99,category:"Computer Science"},{name:"Molecular Nanotechnology",level:97,category:"Materials Science"},{name:"Nuclear Fusion & Clean Energy",level:99,category:"Energy Systems"},{name:"Aerospace Propulsion & Aerodynamics",level:96,category:"Aeronautics"},{name:"High-Frequency Plasma Ballistics",level:95,category:"Combat Tech"},{name:"Tactical Battlefield Strategy",level:94,category:"Leadership"}];function W1(){const{isIronManMode:s,speakJarvis:e}=pn(),[t,r]=tt.useState(null),o=[{name:"Chest Arc Unibeam Overdrive",level:99,category:"Heavy Energy Discharge",output:"4.5 Gigawatts",range:"12.4 Kilometers",desc:"Full capacitor discharge directly through the chest optical iris. Vaporizes bunker-grade reinforced titanium in 0.4 seconds."},{name:"Variable Repulsor Blasters",level:96,category:"Directed Plasma Beams",output:"1.2 Megawatts / Gauntlet",range:"Line of Sight",desc:"Twin palm repulsors delivering concussive kinetic force or continuous thermal slicing beams with zero reload delay."},{name:"Shoulder Hypersonic Micro-Missiles",level:95,category:"Multi-Target Munitions",output:"92 Smart Warheads",range:"45 Kilometers",desc:"Compact laser-guided ordnance pods capable of locking onto and eliminating 92 independent threats simultaneously."},{name:"Autonomous Satellite Veronica (Hulkbuster)",level:98,category:"Orbital Deployment Array",output:"Heavy Armor Ingress",range:"Global Orbital Orbit",desc:"Low-Earth orbit defense pod providing rapid atmospheric armor reinforcement, replacement limbs, and gamma containment cages."},{name:"Liquid Nanotech Morphing Blades & Shields",level:97,category:"Adaptive Melee & Shielding",output:"Molecular Bond Strength",range:"CQC / Kinetic Buffer",desc:"Reconfigurable carbon-vibranium matrix forming energy-dispersing shields, high-frequency blades, or foot flight clamps."},{name:"Ion Refocuser / Back Thruster Cannons",level:94,category:"Sentry Energy Multiplier",output:"Synchronized Lightning / Ion",range:"8 Kilometers",desc:"Back-mounted petal wings that absorb environmental energy (like Thor's lightning) and refocus it into concentrated ion streams."}],l=u=>{os(),r(u),e(s?`${u.name} selected. Power output rated at ${u.output}.`:`${u.name}: Mastery level at ${u.level} percent.`)};return x.jsx("section",{id:"skills",className:"py-20 relative z-10",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[x.jsx("div",{className:"flex items-center gap-2 mb-3",children:x.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border ${s?"border-iron-red/50 bg-red-950/40 text-yellow-400":"border-stark-blue/50 bg-cyan-950/40 text-cyan-300"}`,children:s?"SECTION 02 // TACTICAL SPECIFICATIONS":"SECTION 02 // INTELLECTUAL MATRIX"})}),x.jsx("h2",{className:"text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide",children:s?x.jsxs(x.Fragment,{children:["COMBAT ARSENAL & ",x.jsx("span",{className:"text-iron-red glow-red",children:"WEAPONS MATRIX"})]}):x.jsxs(x.Fragment,{children:["GENIUS CAPABILITIES & ",x.jsx("span",{className:"text-stark-blue glow-cyan",children:"ENGINEERING DISCIPLINES"})]})}),x.jsx("p",{className:"mt-4 text-sm sm:text-base font-tech text-slate-400 max-w-2xl",children:s?"Comprehensive breakdown of Mark LXXXV offensive capabilities, kinetic deterrents, and tactical orbital support systems.":"Advanced academic masteries, proprietary patents, and technological disciplines pioneered by Anthony Stark."})]}),x.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[x.jsx("div",{className:"lg:col-span-7 flex flex-col gap-4",children:(s?o:j1).map((u,d)=>x.jsxs("div",{onClick:()=>l(u),className:`p-4 rounded-xl border backdrop-blur-md cursor-pointer transition-all duration-300 ${(t==null?void 0:t.name)===u.name?s?"bg-red-950/70 border-iron-red shadow-arc-red scale-[1.02]":"bg-cyan-950/70 border-stark-blue shadow-arc-cyan scale-[1.02]":s?"bg-black/50 border-red-950/50 hover:border-iron-red/50 hover:bg-black/70":"bg-black/40 border-cyan-950/50 hover:border-stark-blue/50 hover:bg-black/60"}`,children:[x.jsxs("div",{className:"flex justify-between items-center mb-2",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsxs("span",{className:"font-tech text-xs text-slate-400",children:["0",d+1," //"]}),x.jsx("span",{className:"font-orbitron font-bold text-sm sm:text-base text-white",children:u.name})]}),x.jsxs("span",{className:`font-tech text-xs font-bold px-2 py-0.5 rounded ${s?"bg-red-950 text-yellow-300":"bg-cyan-950 text-cyan-300"}`,children:[u.level,"% ",s?"COMBAT READY":"MASTERY"]})]}),x.jsx("div",{className:"w-full bg-slate-800/80 rounded-full h-2 overflow-hidden relative",children:x.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${s?"bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400":"bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-400"}`,style:{width:`${u.level}%`}})}),x.jsxs("div",{className:"flex justify-between items-center mt-2 text-[11px] font-tech text-slate-400",children:[x.jsxs("span",{children:["CATEGORY: ",u.category]}),x.jsx("span",{children:s?`OUTPUT: ${u.output}`:`INDEX: ALPHA-${d+1}`})]})]},u.name))}),x.jsx("div",{className:"lg:col-span-5 sticky top-28",children:x.jsxs("div",{className:`p-6 rounded-2xl border backdrop-blur-xl relative overflow-hidden transition-all duration-500 ${s?"bg-black/85 border-iron-red/50 shadow-arc-red":"bg-black/80 border-stark-blue/50 shadow-arc-cyan"}`,children:[x.jsx("div",{className:"hud-corner-tl"}),x.jsx("div",{className:"hud-corner-tr"}),x.jsx("div",{className:"hud-corner-bl"}),x.jsx("div",{className:"hud-corner-br"}),x.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-4",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx(_f,{className:`w-4 h-4 ${s?"text-iron-red":"text-stark-blue"}`}),x.jsx("span",{className:"font-orbitron font-bold text-xs uppercase text-white tracking-widest",children:s?"TARGETING TELEMETRY":"INTELLECT SPECIFICATION"})]}),x.jsx("span",{className:"text-[10px] font-tech text-slate-400 uppercase tracking-widest",children:"[ JARVIS SECURE DATA ]"})]}),t?x.jsxs("div",{className:"space-y-4 animate-fade-in",children:[x.jsxs("div",{children:[x.jsx("span",{className:"text-[10px] font-tech uppercase tracking-wider text-slate-400",children:"SELECTED MODULE"}),x.jsx("h3",{className:"text-xl font-orbitron font-extrabold text-white",children:t.name}),x.jsx("span",{className:`text-xs font-tech ${s?"text-yellow-400":"text-cyan-300"}`,children:t.category})]}),x.jsx("p",{className:"text-sm font-tech text-slate-300 leading-relaxed bg-black/40 p-3 rounded border border-white/5",children:t.desc||`${t.name} represents a foundational pillar of Tony Stark's engineering repertoire, honed over decades of relentless innovation at Stark Industries laboratories.`}),x.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-2",children:[x.jsxs("div",{className:"p-2.5 rounded bg-white/5 border border-white/10",children:[x.jsx("span",{className:"text-[10px] font-tech text-slate-400 uppercase block",children:"EFFICIENCY"}),x.jsxs("span",{className:"font-orbitron text-base font-bold text-white",children:[t.level,".8%"]})]}),x.jsxs("div",{className:"p-2.5 rounded bg-white/5 border border-white/10",children:[x.jsx("span",{className:"text-[10px] font-tech text-slate-400 uppercase block",children:"STATUS"}),x.jsx("span",{className:`font-orbitron text-base font-bold ${s?"text-green-400":"text-cyan-300"}`,children:"ACTIVE"})]})]}),x.jsx("button",{onClick:()=>{Hn(1800),e(`Diagnostics for ${t.name} confirmed. All circuits optimal.`)},className:`w-full py-2.5 rounded font-tech text-xs tracking-widest uppercase border transition-all ${s?"border-iron-red bg-red-950/60 text-yellow-300 hover:bg-iron-red/30":"border-stark-blue bg-cyan-950/60 text-cyan-200 hover:bg-stark-blue/30"}`,children:"▶ RUN JARVIS DIAGNOSTIC ON MODULE"})]}):x.jsxs("div",{className:"py-12 flex flex-col items-center justify-center text-center",children:[x.jsx(yf,{className:`w-12 h-12 mb-3 animate-spin-slow opacity-60 ${s?"text-iron-red":"text-stark-blue"}`}),x.jsxs("p",{className:"font-tech text-sm text-slate-400",children:["Click any ",s?"weapon system":"engineering discipline"," to inspect technical telemetry and diagnostic logs."]})]})]})})]})]})})}function X1(){const{isIronManMode:s,speakJarvis:e}=pn(),[t,r]=tt.useState(Sg[0]),o=u=>{switch(u){case"Zap":return x.jsx(tc,{className:"w-5 h-5"});case"Cpu":return x.jsx(Av,{className:"w-5 h-5"});case"Terminal":return x.jsx(Sf,{className:"w-5 h-5"});case"Compass":return x.jsx(Tv,{className:"w-5 h-5"});case"Layers":return x.jsx(Lv,{className:"w-5 h-5"});case"Activity":return x.jsx(_f,{className:"w-5 h-5"});default:return x.jsx(Xv,{className:"w-5 h-5"})}},l=u=>{Hn(1500),r(u),e(`Accessing patent archive for ${u.title}. Power output rated at ${u.powerOutput}.`)};return x.jsx("section",{id:"tech",className:"py-20 relative z-10",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[x.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border mb-3 ${s?"border-iron-red/50 bg-red-950/40 text-yellow-400":"border-stark-blue/50 bg-cyan-950/40 text-cyan-300"}`,children:s?"SECTION 03 // BATTLEFIELD TECHNOLOGY":"SECTION 03 // STARK PATENT ARCHIVE"}),x.jsx("h2",{className:"text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide",children:s?x.jsxs(x.Fragment,{children:["WEAPONIZED & ",x.jsx("span",{className:"text-iron-red glow-red",children:"COMBAT INNOVATIONS"})]}):x.jsxs(x.Fragment,{children:["PATENTS & ",x.jsx("span",{className:"text-stark-blue glow-cyan",children:"BREAKTHROUGH INVENTIONS"})]})}),x.jsx("p",{className:"mt-4 text-sm sm:text-base font-tech text-slate-400 max-w-2xl",children:s?"Exo-atmospheric engineering, quantum micro-stabilizers, and directed energy platforms engineered by Tony Stark.":"Proprietary intellectual property, zero-emission clean energy architectures, and autonomous AI systems."})]}),x.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Sg.map(u=>{const d=(t==null?void 0:t.id)===u.id;return x.jsxs("div",{onClick:()=>l(u),className:`p-6 rounded-2xl border backdrop-blur-xl cursor-pointer transition-all duration-300 relative group overflow-hidden ${d?s?"bg-red-950/70 border-iron-red shadow-arc-red scale-[1.02]":"bg-cyan-950/70 border-stark-blue shadow-arc-cyan scale-[1.02]":s?"bg-black/60 border-red-950/50 hover:border-iron-red/60 hover:bg-black/80":"bg-black/50 border-cyan-950/50 hover:border-stark-blue/60 hover:bg-black/70"}`,children:[x.jsx("div",{className:"hud-corner-tl"}),x.jsx("div",{className:"hud-corner-tr"}),x.jsx("div",{className:"hud-corner-bl"}),x.jsx("div",{className:"hud-corner-br"}),x.jsxs("div",{className:"flex items-center justify-between mb-4",children:[x.jsx("div",{className:`p-2.5 rounded-lg border ${d?s?"bg-iron-red text-white border-yellow-400":"bg-stark-blue text-black border-cyan-300":"bg-white/5 text-slate-300 border-white/10 group-hover:border-current"}`,children:o(u.icon)}),x.jsx("span",{className:"font-tech text-xs text-slate-400",children:u.patents})]}),x.jsx("span",{className:"text-[10px] font-tech text-slate-400 uppercase tracking-widest block mb-1",children:u.category}),x.jsx("h3",{className:"font-orbitron font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors",children:u.title}),x.jsx("p",{className:"font-tech text-xs sm:text-sm text-slate-300/90 leading-relaxed line-clamp-3 mb-4",children:s?u.ironDescription:u.starkDescription}),x.jsxs("div",{className:"pt-3 border-t border-white/10 flex items-center justify-between text-xs font-tech",children:[x.jsxs("span",{className:"text-slate-400",children:["EFFICIENCY: ",x.jsx("strong",{className:"text-white",children:u.efficiency})]}),x.jsx("span",{className:s?"text-yellow-400":"text-cyan-400",children:d?"● ACTIVE":"INSPECT →"})]})]},u.id)})}),t&&x.jsx("div",{className:`mt-12 p-6 sm:p-8 rounded-2xl border backdrop-blur-2xl relative overflow-hidden transition-all duration-500 ${s?"bg-black/90 border-iron-red shadow-arc-red":"bg-black/90 border-stark-blue shadow-arc-cyan"}`,children:x.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 items-start justify-between",children:[x.jsxs("div",{className:"space-y-4 max-w-2xl",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-tech font-bold uppercase ${s?"bg-red-950 text-yellow-300 border border-iron-red":"bg-cyan-950 text-cyan-200 border border-stark-blue"}`,children:"CLASSIFIED STARK SCHEMATIC"}),x.jsxs("span",{className:"font-tech text-xs text-slate-400",children:["PATENT: ",t.patents]})]}),x.jsx("h3",{className:"text-2xl sm:text-3xl font-orbitron font-extrabold text-white",children:t.title}),x.jsx("p",{className:"font-tech text-sm sm:text-base text-slate-300 leading-relaxed",children:s?t.ironDescription:t.starkDescription}),x.jsxs("div",{className:"flex items-center gap-4 pt-2",children:[x.jsx("button",{onClick:()=>{vf(),e(`Executing full power pulse for ${t.title}.`)},className:`px-4 py-2 rounded font-orbitron font-bold text-xs uppercase tracking-wider transition-all ${s?"bg-iron-red text-white hover:bg-red-500 shadow-arc-red":"bg-stark-blue text-black hover:bg-cyan-300 shadow-arc-cyan"}`,children:"⚡ TEST CAPACITOR CYCLE"}),x.jsxs("span",{className:"font-tech text-xs text-slate-400",children:["OUTPUT: ",x.jsx("strong",{className:"text-white",children:t.powerOutput})]})]})]}),x.jsxs("div",{className:"w-full lg:w-96 p-4 rounded-xl bg-white/5 border border-white/10 space-y-3 font-tech text-xs",children:[x.jsx("span",{className:"text-[10px] uppercase tracking-wider text-slate-400 font-bold block pb-2 border-b border-white/10",children:"TECHNICAL METRICS & TOLERANCES"}),t.specs.map((u,d)=>x.jsxs("div",{className:"flex justify-between items-start gap-4 pb-1 border-b border-white/5",children:[x.jsxs("span",{className:"text-slate-400",children:[u.label,":"]}),x.jsx("span",{className:"text-white text-right font-mono font-medium",children:u.value})]},d))]})]})})]})})}const Kr=[{id:"mark-85",name:"Mark LXXXV (85)",codename:"The Prime Endgame Armor",year:"2023",status:"Ultimate Nanotech",image:"/assets/ironman-suit-front.jpg",blueprint:"/assets/ironman-blueprint.jpg",specs:{material:"Smart Liquid Nano-structure & Gold-Titanium Matrix",propulsion:"Variable-Geometry Nanotech Thrusters & Repulsor Wings",speed:"Mach 15+ / Orbital Escape Velocity",powerCore:"Mark L Multi-Chamber Nano Arc Reactor (4.5 GW)",reactorType:"New Synthesized Element Arc Core",durability:"Class 100+ (Withstands Infinity Stone discharge)"},weapons:["Morphing Nano-Gauntlet Blade & Energy Shield","Back Lightning Refocuser / Ion Cannons","Chest Unibeam Overdrive Array","Micro-Repulsor Swarm Projectors","Infinity Stone Integration Housing"],description:"The pinnacle of Tony Stark's engineering genius. Crafted with smart nanotech capable of instantly morphing any weapon, shield, or tool thought by the wearer. Strong enough to channel all six Infinity Stones.",quote:"And I... am... Iron Man."},{id:"mark-50",name:"Mark L (50)",codename:"Bleeding Edge Nanotech",year:"2018",status:"Battle of Titan",image:"/assets/ironman-suit-front.jpg",blueprint:"/assets/ironman-hud-diagnostics.jpg",specs:{material:"High-Density Carbon-Vibranium Infused Nanoparticles",propulsion:"Morphing Foot Thruster Boosters & Micro-Vanes",speed:"Mach 10 / Deep Space Capable",powerCore:"Detachable Chest Arc Reactor RT-10",reactorType:"Quantum Nano-Synthesizer",durability:"Withstood direct meteor strike on Titan"},weapons:["Dual Nanotech Energy Cannons & Battering Rams","Instant Regenerating Nano-Shields","Hypersonic Micro-Missiles","Cryogenic Freeze Sprayers","Dual Foot Repulsor Flight Clamp"],description:"Housed entirely within Tony's chest-mounted RT-10 housing unit. Millions of nanoparticles instantly flow over Stark's body in seconds, reforming instantaneously to combat damage.",quote:"You throw another moon at me, and I'm gonna lose it."},{id:"mark-44",name:"Mark XLIV (44)",codename:"Hulkbuster / Veronica",year:"2015",status:"Heavy Containment",image:"/assets/ironman-blueprint.jpg",blueprint:"/assets/ironman-hud-diagnostics.jpg",specs:{material:"Triple-Layered Depleted Uranium & Gold-Titanium Plating",propulsion:"Multi-Thruster Orbital Booster Rig",speed:"Mach 3.5 (Sub-Orbital deployment)",powerCore:"Eleven Independent Arc Reactors (Total 12 GW)",reactorType:"Synchronized High-Current Arc Array",durability:"Extreme Kinetic Impact & Gamma Shock Absorption"},weapons:["Hydraulic Jackhammer Pneumatic Fists","Chemical Sedative Sprayers & Electric Taser Claws","Autonomous Orbital Replacement Pods (Veronica)","High-Output Chest Unibeam Projector","Heavy Concussion Missiles"],description:"Co-designed with Dr. Bruce Banner as an orbital defense containment system. Deployed from satellite 'Veronica' directly onto an existing Iron Man suit to subdue gamma-level threats.",quote:"Go to sleep, go to sleep, go to sleep!"},{id:"mark-7",name:"Mark VII (7)",codename:"The Battle of New York",year:"2012",status:"Rapid Autonomous Pod",image:"/assets/duality-stark-ironman.png",blueprint:"/assets/ironman-blueprint.jpg",specs:{material:"Dense Gold-Titanium Alloy with Carbon-Fiber Lattice",propulsion:"Heavy Back Thruster Cowling & Calf Stabilizers",speed:"Mach 4.5",powerCore:"Vibranium Synthesized Element Core",reactorType:"Clean Element Mark VI Generator",durability:"Military grade combat reinforcement"},weapons:["Shoulder-Mounted 92-Micro-Missile Pods","Triple-Beam Hand Repulsor Blasters","Wrist Laser Cutters (Multi-cycle)","Thigh Flare & Decoy Dispensers","Heavy Arc Unibeam with Focusing Iris"],description:"First armor capable of autonomous deployment via remote tracking bracelets. Locked onto Tony mid-fall from Stark Tower, assembling in mid-air before impact.",quote:"Right. Army. If we can't protect the Earth, you can be damn well sure we'll avenge it."},{id:"mark-5",name:"Mark V (5)",codename:"The Suitcase Armor",year:"2010",status:"Emergency Response",image:"/assets/tony-portrait.png",blueprint:"/assets/ironman-hud-diagnostics.jpg",specs:{material:"Interlocking Flexible Steel-Titanium Rib Plates",propulsion:"Lightweight Emergency Thrust Pods",speed:"Mach 1.2",powerCore:"Palladium Core Mark II Generator",reactorType:"Miniaturized Palladium Arc",durability:"Lightweight Combat / Emergency Defense"},weapons:["Standard Hand Repulsors (30% power rating)","Emergency Chest Arc Flash","Thermal Dissipation Plating"],description:"Compressed into an unassuming red-and-chrome briefcase. Designed for rapid emergency deployment during civilian travel, deployed famously on the Monaco Grand Prix racetrack.",quote:"Give me the case!"},{id:"mark-3",name:"Mark III (3)",codename:"The Iconic Hot Rod Armor",year:"2008",status:"First Gold-Titanium Suite",image:"/assets/duality-stark-ironman.png",blueprint:"/assets/ironman-blueprint.jpg",specs:{material:"99.9% Pure Gold-Titanium Aerodynamic Shell",propulsion:"Twin Variable Vectors & Boot Jets",speed:"Mach 3.0 (Overcame high-altitude icing problem)",powerCore:"Palladium Core Mark II Arc",reactorType:"Miniaturized Arc Reactor (3 GJ/s)",durability:"Anti-Tank Artillery Shell Proof"},weapons:["Concealed Shoulder Micro-Guns","Forearm Anti-Tank Missiles","Hand Repulsors & Chest Unibeam","Hip Flap Decoy Flares"],description:"The definitive Iron Man silhouette. Solving the icing problem at 40,000 feet with gold-titanium metallurgy and painted with Stark's signature Hot Rod Red and Gold lacquer.",quote:"Tell you what, throw a little hot-rod red in there."},{id:"mark-1",name:"Mark I (1)",codename:"The Cave Origin",year:"2008",status:"First Prototype",image:"/assets/tony-portrait.png",blueprint:"/assets/ironman-blueprint.jpg",specs:{material:"Recycled Stark Industries Jericho Missile Casings",propulsion:"Dual Solid-Fuel Rocket Gliders (Single short jump)",speed:"Gliding descent only",powerCore:"First Miniaturized Arc Reactor (3 GJ/s)",reactorType:"Rough Palladium Ring Assembly",durability:"Small-arms gunfire resistant"},weapons:["Dual Forearm Flamethrowers","Single Launch Jericho Micro-Rocket","Manual Hydraulic Piston Punches"],description:"Forged in a cave with a box of scraps alongside Dr. Ho Yinsen. The historic crucible that sparked Tony Stark's transformation from weapons dealer to Earth's guardian.",quote:"Tony Stark was able to build this in a cave! With a box of scraps!"}];function q1(){const{isIronManMode:s,speakJarvis:e}=pn(),[t,r]=tt.useState(0),o=Kr[t],l=p=>{os(),r(p);const m=Kr[p];e(`Selecting ${m.name}, ${m.codename}. Armor status: ${m.status}.`)},u=()=>{const p=(t-1+Kr.length)%Kr.length;l(p)},d=()=>{const p=(t+1)%Kr.length;l(p)},h=()=>{Tg(),e(`Protocol engaged. Deploying ${o.name}. All flight systems and repulsors armed.`)};return x.jsx("section",{id:"hall-of-armor",className:"py-20 relative z-10",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex flex-col items-center text-center mb-14",children:[x.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border mb-3 ${s?"border-iron-red/50 bg-red-950/40 text-yellow-400":"border-stark-blue/50 bg-cyan-950/40 text-cyan-300"}`,children:s?"SECTION 04 // ACTIVE COMBAT CHASSIS":"SECTION 04 // THE HALL OF ARMOR ARCHIVE"}),x.jsxs("h2",{className:"text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide",children:["THE HALL OF ",x.jsx("span",{className:s?"text-iron-red glow-red":"text-stark-blue glow-cyan",children:"ARMOR"})]}),x.jsx("p",{className:"mt-4 text-sm sm:text-base font-tech text-slate-400 max-w-2xl",children:"From the crudely forged Mark I in the caves of Kunar to the god-slaying nanotech Mark LXXXV. An evolutionary chronicle of Tony Stark's mechanical armor."})]}),x.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin justify-start md:justify-center",children:Kr.map((p,m)=>x.jsxs("button",{onClick:()=>l(m),className:`px-3 py-1.5 rounded-lg font-tech text-xs uppercase tracking-wider whitespace-nowrap border transition-all ${m===t?s?"bg-iron-red text-white border-yellow-400 shadow-arc-red scale-105":"bg-stark-blue text-black border-cyan-300 shadow-arc-cyan scale-105":"bg-black/50 text-slate-400 border-white/10 hover:border-current hover:text-white"}`,children:[p.name.split(" ")[0]," ",p.name.split(" ")[1]]},p.id))}),x.jsxs("div",{className:`p-6 sm:p-10 rounded-3xl border backdrop-blur-2xl relative overflow-hidden transition-all duration-500 ${s?"bg-black/85 border-iron-red/50 shadow-arc-red":"bg-black/80 border-stark-blue/50 shadow-arc-cyan"}`,children:[x.jsx("div",{className:"hud-corner-tl"}),x.jsx("div",{className:"hud-corner-tr"}),x.jsx("div",{className:"hud-corner-bl"}),x.jsx("div",{className:"hud-corner-br"}),x.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[x.jsxs("div",{className:"lg:col-span-5 flex flex-col items-center",children:[x.jsxs("div",{className:"relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/5 to-black/60 shadow-2xl group",children:[x.jsx("img",{src:o.image,alt:o.name,className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"}),x.jsx("div",{className:"absolute inset-0 hud-scanline pointer-events-none"}),x.jsxs("div",{className:"absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-white/20 font-tech text-[10px] tracking-widest text-yellow-400 uppercase",children:["● ",o.status]}),x.jsxs("div",{className:"absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-white/20 font-tech text-[10px] tracking-widest text-cyan-300 uppercase",children:["YEAR ",o.year]})]}),x.jsxs("div",{className:"flex items-center gap-4 mt-6",children:[x.jsx("button",{onClick:u,className:"p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95",title:"Previous Armor",children:x.jsx(yv,{className:"w-5 h-5"})}),x.jsxs("span",{className:"font-tech text-xs tracking-widest text-slate-400",children:["CHASSIS ",t+1," / ",Kr.length]}),x.jsx("button",{onClick:d,className:"p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95",title:"Next Armor",children:x.jsx(Cg,{className:"w-5 h-5"})})]})]}),x.jsxs("div",{className:"lg:col-span-7 flex flex-col gap-6",children:[x.jsxs("div",{children:[x.jsxs("span",{className:"text-xs font-tech tracking-widest uppercase text-slate-400",children:["DESIGNATION ARCHIVE // DEPLOYED ",o.year]}),x.jsx("h3",{className:"text-3xl sm:text-4xl font-orbitron font-black text-white mt-1",children:o.name}),x.jsxs("span",{className:`text-sm sm:text-base font-orbitron font-bold tracking-wider ${s?"text-yellow-400":"text-cyan-300"}`,children:['"',o.codename,'"']})]}),x.jsxs("blockquote",{className:"p-3 rounded-lg bg-white/5 border-l-4 border-current italic font-sans text-sm text-slate-200",children:['"',o.quote,'"']}),x.jsx("p",{className:"font-tech text-sm sm:text-base text-slate-300 leading-relaxed",children:o.description}),x.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-tech",children:[x.jsxs("div",{className:"p-2.5 rounded bg-white/5 border border-white/10",children:[x.jsx("span",{className:"text-[10px] text-slate-400 uppercase block",children:"COMPOSITION"}),x.jsx("span",{className:"text-white font-mono",children:o.specs.material})]}),x.jsxs("div",{className:"p-2.5 rounded bg-white/5 border border-white/10",children:[x.jsx("span",{className:"text-[10px] text-slate-400 uppercase block",children:"MAX VELOCITY"}),x.jsx("span",{className:"text-white font-mono",children:o.specs.speed})]}),x.jsxs("div",{className:"p-2.5 rounded bg-white/5 border border-white/10",children:[x.jsx("span",{className:"text-[10px] text-slate-400 uppercase block",children:"PROPULSION"}),x.jsx("span",{className:"text-white font-mono",children:o.specs.propulsion})]}),x.jsxs("div",{className:"p-2.5 rounded bg-white/5 border border-white/10",children:[x.jsx("span",{className:"text-[10px] text-slate-400 uppercase block",children:"POWER SOURCE"}),x.jsx("span",{className:"text-white font-mono",children:o.specs.powerCore})]})]}),x.jsxs("div",{children:[x.jsx("span",{className:"text-[10px] font-tech text-slate-400 uppercase tracking-widest block mb-2",children:"TACTICAL WEAPONRY INTEGRATION:"}),x.jsx("div",{className:"flex flex-wrap gap-2",children:o.weapons.map((p,m)=>x.jsxs("span",{className:`px-2.5 py-1 rounded text-xs font-tech border ${s?"border-iron-red/40 bg-red-950/40 text-rose-200":"border-stark-blue/40 bg-cyan-950/40 text-cyan-200"}`,children:["⚔ ",p]},m))})]}),x.jsx("div",{className:"pt-2",children:x.jsxs("button",{onClick:h,className:`w-full sm:w-auto px-6 py-3 rounded-lg font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 ${s?"bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 text-black shadow-arc-red":"bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 text-black shadow-arc-cyan"}`,children:[x.jsx(ec,{className:"w-4 h-4"}),"INITIALIZE ",o.name.split(" ")[0]," DEPLOYMENT PROTOCOL"]})})]})]})]})]})})}function Y1({className:s="w-full h-full"}){const e=tt.useRef(null),{isIronManMode:t}=pn(),[r,o]=tt.useState(!1),[l,u]=tt.useState(null),d=tt.useRef(r);d.current=r;const h=[{id:"optics",label:"Multi-Spectral Ocular Sensors",detail:"Thermal, ultraviolet, and kinetic targeting tracking. 120 FPS latency-free projection."},{id:"nanite",label:"Sub-Dermal Nanotech Injectors",detail:"Liquid-metal nanoparticle reservoirs for real-time armor regeneration."},{id:"comms",label:"Quantum Entanglement Uplink",detail:"Sub-orbital satellite comms and direct JARVIS / FRIDAY neural handshake."},{id:"alloy",label:"Gold-Titanium Exoskeleton",detail:"Anti-icing metallurgy rated for exo-atmospheric re-entry and kinetic shielding."}];return tt.useEffect(()=>{const p=e.current;if(!p)return;const m=p.clientWidth||450,g=p.clientHeight||450,_=new Rf,S=new Rn(45,m/g,.1,100);S.position.set(0,0,7.5);const E=new Ff({antialias:!0,alpha:!0});E.setSize(m,g),E.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.innerHTML="",p.appendChild(E.domElement);const T=new mi;_.add(T);const M=t?16724787:61695,y=t?16766720:41983,I=t?16742144:3718648,P=new mi;T.add(P);const R=new kf(1.6,24,20,0,Math.PI*2,0,Math.PI*.65),H=new Ti({color:M,wireframe:!0,transparent:!0,opacity:.75}),O=new Ys({color:330516,emissive:M,emissiveIntensity:.15,transparent:!0,opacity:.35,roughness:.2,metalness:.8}),k=new It(R,H),G=new It(R,O);k.position.y=.3,G.position.y=.3,P.add(k),P.add(G);const N=new mi;P.add(N);const A=new oo(1.45,1.25,.9,16,4,!0,-Math.PI*.35,Math.PI*.7),z=new Ys({color:t?13408512:26282,wireframe:!0,emissive:y,emissiveIntensity:.25,transparent:!0,opacity:.85}),re=new It(A,z);re.position.set(0,.4,.4),N.add(re);const J=new Df(1.2,1.5,12,4,!0,-Math.PI*.35,Math.PI*.7),ue=new It(J,z);ue.rotation.x=Math.PI,ue.position.set(0,-.65,.45),N.add(ue);const fe=new Ti({color:16777215,transparent:!0,opacity:.95}),ae=new Ar(.48,.08,.15),de=new It(ae,fe);de.position.set(-.48,.25,1.5),de.rotation.z=-.15,N.add(de);const V=new It(ae,fe);V.position.set(.48,.25,1.5),V.rotation.z=.15,N.add(V);const le=new oo(.35,.35,.25,16),oe=new It(le,H);oe.rotation.z=Math.PI/2,oe.position.set(-1.65,.2,.1),P.add(oe);const U=new It(le,H);U.rotation.z=Math.PI/2,U.position.set(1.65,.2,.1),P.add(U);const se=new sa(2.4,2.45,64),De=new Ti({color:M,transparent:!0,opacity:.4,side:fi}),Z=new It(se,De);_.add(Z);const he=new sa(2.7,2.73,48),Ee=new Ti({color:I,transparent:!0,opacity:.3,side:fi}),xe=new It(he,Ee);xe.rotation.x=Math.PI/3,_.add(xe);const Ce=300,Xe=new En,Ue=new Float32Array(Ce*3);for(let ve=0;ve<Ce;ve++){const ye=2+Math.random()*1.5,be=Math.random()*Math.PI*2,Ze=Math.acos(Math.random()*2-1);Ue[ve*3]=ye*Math.sin(Ze)*Math.cos(be),Ue[ve*3+1]=ye*Math.sin(Ze)*Math.sin(be),Ue[ve*3+2]=ye*Math.cos(Ze)}Xe.setAttribute("position",new Vn(Ue,3));const Ct=new rc({color:M,size:.04,transparent:!0,opacity:.6}),Tt=new Pf(Xe,Ct);_.add(Tt);const at=new p0(16777215,.7);_.add(at);const F=new h0(M,2,8);F.position.set(0,2,3),_.add(F);let Ht=!1,ut=0,st=0,qe=0,vt=0;const Be=ve=>{Ht=!0,ut=ve.clientX,st=ve.clientY},L=ve=>{if(Ht){const ye=ve.clientX-ut,be=ve.clientY-st;qe+=ye*.01,vt+=be*.01,ut=ve.clientX,st=ve.clientY}},b=()=>{Ht=!1};p.addEventListener("mousedown",Be),window.addEventListener("mousemove",L),window.addEventListener("mouseup",b);let Q=new m0,pe;const ge=()=>{pe=requestAnimationFrame(ge);const ve=Q.getElapsedTime();T.rotation.y+=(qe-T.rotation.y)*.05,T.rotation.x+=(vt-T.rotation.x)*.05,Ht||(T.rotation.y+=.008),Z.rotation.z=ve*.2,xe.rotation.y=ve*.15,Tt.rotation.y=-ve*.05;const ye=d.current?1.4:.4,be=d.current?2.4:1.65,Ze=d.current?.9:.3;N.position.z+=(ye-N.position.z)*.08,oe.position.x+=(-be-oe.position.x)*.08,U.position.x+=(be-U.position.x)*.08,k.position.y+=(Ze-k.position.y)*.08,G.position.y+=(Ze-G.position.y)*.08,E.render(_,S)};ge();const te=()=>{if(!p)return;const ve=p.clientWidth,ye=p.clientHeight;S.aspect=ve/ye,S.updateProjectionMatrix(),E.setSize(ve,ye)};return window.addEventListener("resize",te),()=>{cancelAnimationFrame(pe),window.removeEventListener("resize",te),p.removeEventListener("mousedown",Be),window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",b),E.dispose(),_.clear(),p&&E.domElement&&p.removeChild(E.domElement)}},[t]),x.jsxs("div",{className:`relative ${s} select-none group flex flex-col items-center justify-center`,children:[x.jsx("div",{ref:e,className:"w-full h-full cursor-grab active:cursor-grabbing"}),x.jsx("div",{className:"absolute top-4 right-4 z-20 flex gap-2",children:x.jsx("button",{onClick:()=>{os(),o(!r)},className:`px-3 py-1.5 text-xs font-tech tracking-wider uppercase rounded border backdrop-blur-md transition-all ${r?t?"bg-iron-red text-white border-iron-gold shadow-arc-red":"bg-stark-blue text-black border-cyan-400 shadow-arc-cyan":"bg-black/60 text-slate-300 border-white/20 hover:border-current"}`,children:r?"■ Reassemble Armor":"☷ Exploded Schematic"})}),x.jsx("div",{className:"absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2 justify-center",children:h.map(p=>x.jsxs("button",{onClick:()=>{Hn(1600),u((l==null?void 0:l.id)===p.id?null:p)},className:`px-2.5 py-1 text-[11px] font-tech tracking-wider rounded border transition-all ${(l==null?void 0:l.id)===p.id?t?"bg-iron-red/80 text-white border-iron-gold":"bg-stark-blue/80 text-black border-cyan-300":"bg-black/50 text-slate-300 border-white/10 hover:border-current"}`,children:["● ",p.label.split(" ")[0]]},p.id))}),l&&x.jsxs("div",{className:`absolute top-16 left-4 right-4 md:left-auto md:right-4 md:w-80 p-3 rounded border backdrop-blur-lg z-30 transition-all ${t?"bg-black/85 border-iron-red text-rose-100 shadow-arc-red":"bg-black/85 border-stark-blue text-cyan-100 shadow-arc-cyan"}`,children:[x.jsxs("div",{className:"flex justify-between items-center mb-1",children:[x.jsx("span",{className:"text-xs font-orbitron font-bold text-white uppercase",children:l.label}),x.jsx("button",{onClick:()=>u(null),className:"text-xs text-muted-foreground hover:text-white px-1",children:"✕"})]}),x.jsx("p",{className:"text-xs font-tech leading-relaxed text-slate-300",children:l.detail})]}),x.jsx("div",{className:"absolute bottom-1 text-[10px] font-tech text-slate-500 uppercase tracking-widest pointer-events-none",children:"[ Territory Studio // Holographic Wireframe Telemetry ]"})]})}function $1(){const{isIronManMode:s,speakJarvis:e}=pn(),[t,r]=tt.useState("3d-hologram"),o=[{id:"arc-core",name:"Miniaturized Arc Core",status:"100% NOMINAL",temp:"3,200 K",psi:"48,500 PSI",notes:"Heavy synthesized element isotope generating continuous zero-emission magnetic containment flux."},{id:"repulsors",name:"Gauntlet Repulsor Nodes",status:"ARMED & READY",temp:"850 K",psi:"22,000 PSI",notes:"High-density plasma accelerators providing directional flight stabilization and 1.2 MW concussive bursts."},{id:"nanite-hull",name:"Fluid Nanotech Plating",status:"100% INTEGRITY",temp:"Ambient",psi:"Molecular Lock",notes:"Sub-dermal liquid metal matrices capable of instant physical reconfiguration and ballistic deflection."},{id:"avionics",name:"Supersonic Avionics & HUD",status:"CALIBRATED",temp:"295 K",psi:"Exo-Atmospheric",notes:"Dual retinal holographic projectors synchronized with orbital Stark Satellite network."}],l=u=>{os(),e(`Subsystem diagnostic: ${u.name}. Status: ${u.status}. Core temperature: ${u.temp}.`)};return x.jsx("section",{id:"blueprint-hud",className:"py-20 relative z-10",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex flex-col items-center text-center mb-14",children:[x.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border mb-3 ${s?"border-iron-red/50 bg-red-950/40 text-yellow-400":"border-stark-blue/50 bg-cyan-950/40 text-cyan-300"}`,children:s?"SECTION 05 // TERRITORY STUDIO COMBAT HUD":"SECTION 05 // HOLOGRAPHIC CAD BLUEPRINTS"}),x.jsxs("h2",{className:"text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide",children:["HOLOGRAPHIC ",x.jsx("span",{className:s?"text-iron-red glow-red":"text-stark-blue glow-cyan",children:"DIAGNOSTICS"})]}),x.jsx("p",{className:"mt-4 text-sm sm:text-base font-tech text-slate-400 max-w-2xl",children:"Multi-spectral wireframe schematics and real-time telemetry diagnostics. As featured in the Stark Workshop CAD suite."})]}),x.jsxs("div",{className:"flex items-center justify-center gap-3 mb-8",children:[x.jsx("button",{onClick:()=>{Hn(1400),r("3d-hologram")},className:`px-4 py-2 rounded-lg font-orbitron text-xs uppercase tracking-wider border transition-all ${t==="3d-hologram"?s?"bg-iron-red text-white border-yellow-400 shadow-arc-red":"bg-stark-blue text-black border-cyan-300 shadow-arc-cyan":"bg-black/60 text-slate-400 border-white/10 hover:border-current"}`,children:"3D Wireframe Helmet Model"}),x.jsx("button",{onClick:()=>{Hn(1400),r("blueprint-schematics")},className:`px-4 py-2 rounded-lg font-orbitron text-xs uppercase tracking-wider border transition-all ${t==="blueprint-schematics"?s?"bg-iron-red text-white border-yellow-400 shadow-arc-red":"bg-stark-blue text-black border-cyan-300 shadow-arc-cyan":"bg-black/60 text-slate-400 border-white/10 hover:border-current"}`,children:"Territory Studio HUD Schematics"})]}),x.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl relative overflow-hidden transition-all duration-500 ${s?"bg-black/85 border-iron-red/50 shadow-arc-red":"bg-black/80 border-stark-blue/50 shadow-arc-cyan"}`,children:[x.jsx("div",{className:"hud-corner-tl"}),x.jsx("div",{className:"hud-corner-tr"}),x.jsx("div",{className:"hud-corner-bl"}),x.jsx("div",{className:"hud-corner-br"}),t==="3d-hologram"?x.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[x.jsx("div",{className:"lg:col-span-7 h-[420px] sm:h-[480px] rounded-2xl bg-black/60 border border-white/10 relative overflow-hidden flex items-center justify-center",children:x.jsx(Y1,{className:"w-full h-full"})}),x.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-4",children:[x.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10",children:[x.jsxs("span",{className:"font-orbitron font-bold text-xs uppercase text-white tracking-widest flex items-center gap-2",children:[x.jsx(_f,{className:`w-4 h-4 ${s?"text-iron-red":"text-stark-blue"}`}),"LIVE SUBSYSTEM TELEMETRY"]}),x.jsx("span",{className:"font-tech text-xs text-green-400",children:"● REAL-TIME"})]}),o.map(u=>x.jsxs("div",{onClick:()=>l(u),className:"p-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer transition-all hover:scale-[1.01]",children:[x.jsxs("div",{className:"flex justify-between items-center mb-1",children:[x.jsx("span",{className:"font-orbitron font-bold text-sm text-white",children:u.name}),x.jsx("span",{className:"font-tech text-xs text-yellow-400",children:u.status})]}),x.jsx("p",{className:"text-xs font-tech text-slate-300 mb-2 leading-relaxed",children:u.notes}),x.jsxs("div",{className:"flex gap-4 text-[11px] font-tech text-slate-400",children:[x.jsxs("span",{children:["TEMP: ",x.jsx("strong",{className:"text-white",children:u.temp})]}),x.jsxs("span",{children:["PRESSURE: ",x.jsx("strong",{className:"text-white",children:u.psi})]})]})]},u.id))]})]}):x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 items-center",children:[x.jsxs("div",{className:"rounded-2xl overflow-hidden border border-white/15 bg-black/80 relative group",children:[x.jsx("img",{src:"/assets/ironman-blueprint.jpg",alt:"Holographic Iron Man Blueprint",className:"w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"}),x.jsx("div",{className:"absolute bottom-0 inset-x-0 bg-black/90 p-3 font-tech text-xs text-slate-300 border-t border-white/10",children:"[ SPECIFICATION A-01: MARK 85 NANOMACHINE HOUSING & INTERNAL VOLUMETRIC FLUX ]"})]}),x.jsxs("div",{className:"rounded-2xl overflow-hidden border border-white/15 bg-black/80 relative group",children:[x.jsx("img",{src:"/assets/ironman-hud-diagnostics.jpg",alt:"Territory Studio HUD Breakdown",className:"w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"}),x.jsx("div",{className:"absolute bottom-0 inset-x-0 bg-black/90 p-3 font-tech text-xs text-slate-300 border-t border-white/10",children:"[ SPECIFICATION B-02: TERRITORY STUDIO ARTICULATED LIMB & TORSO BREAKDOWN ]"})]})]})]})]})})}const K1=[{label:"Status Report",command:"status report",text:"J.A.R.V.I.S., give me a full system status report."},{label:"Armor Mark 85",command:"mark 85",text:"Tell me about the Mark 85 nano suit."},{label:"Test Repulsors",command:"test repulsors",text:"Initiate repulsor capacitor charge sequence."},{label:"Arc Reactor Specs",command:"arc reactor",text:"What is current Arc Reactor output?"},{label:"Protocol House Party",command:"house party",text:"Activate Protocol House Party."},{label:"Time Travel GPS",command:"time travel",text:"Explain how you solved time travel."},{label:"Who is Tony Stark?",command:"who is tony",text:"Give me Tony Stark's dossier."}];function J1(s){const e=s.toLowerCase().trim();return e.includes("status")||e.includes("diagnostic")||e.includes("system")?{text:"All primary systems are operating at peak efficiency, sir. Arc Reactor core temperature is steady at 3,200 Kelvin, power output is at 100% capacity with 3.2 gigawatts continuous yield. Perimeter defenses are fully operational.",audioText:"All primary systems operating at peak efficiency, sir. Arc Reactor power output is at 100 percent. Perimeter defenses are secure.",sound:"reactor"}:e.includes("85")||e.includes("mark 85")||e.includes("endgame")?{text:"Mark LXXXV represents the apex of your engineering career, Mr. Stark. Incorporating smart fluid nanotechnology, enhanced with vibranium matrix reinforcement. Capable of withstanding gamma-level cosmic energy discharges.",audioText:"Mark 85 represents the apex of your engineering career, sir. Fluid nanotechnology with vibranium matrix reinforcement.",sound:"target"}:e.includes("repulsor")||e.includes("fire")||e.includes("shoot")||e.includes("test")?{text:"Repulsor capacitors at 100% charge. High-frequency plasma ionization channels aligned. Targeting reticle calibrated. Firing on your command, sir.",audioText:"Repulsor capacitors charged and aligned, sir. Ready to fire on your mark.",sound:"repulsor"}:e.includes("arc")||e.includes("reactor")||e.includes("power")||e.includes("energy")?{text:"The Arc Reactor is currently generating 3.2 gigawatts per second with zero carbon emission. Magnetic containment toroids are stabilizing at 99.98% efficiency. Enough energy to power Stark Tower and three municipal districts.",audioText:"The Arc Reactor is generating 3.2 gigawatts per second with zero emission. Containment fields are stable.",sound:"reactor"}:e.includes("house party")||e.includes("protocol")?{text:"Protocol House Party standby sequence activated. 34 remote combat chassis detected in the subterranean vault. Awaiting your voice authorization code to scramble all units, Mr. Stark.",audioText:"Protocol House Party activated, sir. 34 armors on standby. Awaiting your authorization to scramble all units.",sound:"armor"}:e.includes("time")||e.includes("gps")||e.includes("quantum")?{text:"As you deduced in 2023, sir: by inverting the eigenvalue and applying a Möbius strip topology inside the quantum manifold, chronal navigation without quantum decoherence became mathematically reproducible.",audioText:"Eigenvalue inverted, sir. Applying Möbius strip quantum topology successfully eliminated temporal decoherence.",sound:"target"}:e.includes("who")||e.includes("tony")||e.includes("stark")||e.includes("bio")?{text:"Anthony Edward Stark: Master of Science from MIT at age 19, inventor of the clean Arc Reactor, leader of Stark Industries, and Earth's chief armored Avenger. Genius, billionaire, playboy, philanthropist.",audioText:"Anthony Edward Stark. MIT graduate at 19, inventor of the Arc Reactor, and founding member of the Avengers.",sound:"beep"}:e.includes("switch")||e.includes("iron man")||e.includes("transform")||e.includes("suit up")?{text:"Suit deployment protocol ready. Click the Arc Reactor toggle in the navigation header to toggle between Stark Industries Executive portal and Iron Man Combat HUD.",audioText:"Suit deployment protocol ready, sir. Click the Arc Reactor to initiate full armor transformation.",sound:"armor"}:{text:`Processing query: "${s}". Analysis indicates optimal operational efficiency. Always at your service, Mr. Stark. Would you like to inspect the Hall of Armor or test the repulsor telemetry?`,audioText:"Processing request. All systems at your service, Mr. Stark.",sound:"beep"}}function Z1(){const{isIronManMode:s,speakJarvis:e,isSpeaking:t}=pn(),[r,o]=tt.useState([{id:1,sender:"jarvis",text:"Good day, Mr. Stark. J.A.R.V.I.S. neural interface is fully operational. How may I assist you today, sir?",time:"10:42:01"}]),[l,u]=tt.useState(""),d=tt.useRef(null);tt.useEffect(()=>{var g;(g=d.current)==null||g.scrollIntoView({behavior:"smooth"})},[r]);const h=g=>{if(!g.trim())return;Hn(1200);const S=new Date().toLocaleTimeString("en-US",{hour12:!1}),E={id:Date.now(),sender:"user",text:g,time:S};o(T=>[...T,E]),u(""),setTimeout(()=>{const T=J1(g);T.sound==="repulsor"?Eg():T.sound==="reactor"?vf():T.sound==="armor"?Tg():T.sound==="target"?os():Hn(1600),e(T.audioText||T.text);const M={id:Date.now()+1,sender:"jarvis",text:T.text,time:new Date().toLocaleTimeString("en-US",{hour12:!1})};o(y=>[...y,M])},450)},p=g=>{g.preventDefault(),h(l)},m=g=>{h(g.command)};return x.jsx("section",{id:"jarvis",className:"py-20 relative z-10",children:x.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex flex-col items-center text-center mb-12",children:[x.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border mb-3 ${s?"border-iron-red/50 bg-red-950/40 text-yellow-400":"border-stark-blue/50 bg-cyan-950/40 text-cyan-300"}`,children:"SECTION 06 // NEURAL AI INTERACTION"}),x.jsxs("h2",{className:"text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide",children:["J.A.R.V.I.S. ",x.jsx("span",{className:s?"text-iron-red glow-red":"text-stark-blue glow-cyan",children:"TERMINAL"})]}),x.jsx("p",{className:"mt-3 text-sm sm:text-base font-tech text-slate-400 max-w-xl",children:"Just A Rather Very Intelligent System. Ask technical questions, inspect suit diagnostics, or issue vocal protocols."})]}),x.jsxs("div",{className:`rounded-2xl border backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-500 ${s?"bg-black/90 border-iron-red/60 shadow-arc-red":"bg-[#060b17]/90 border-stark-blue/60 shadow-arc-cyan"}`,children:[x.jsxs("div",{className:"px-5 py-3 border-b border-white/10 flex items-center justify-between bg-black/40",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsxs("div",{className:"flex gap-1.5",children:[x.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500/80 inline-block"}),x.jsx("span",{className:"w-3 h-3 rounded-full bg-yellow-500/80 inline-block"}),x.jsx("span",{className:"w-3 h-3 rounded-full bg-green-500/80 inline-block"})]}),x.jsxs("span",{className:"font-tech text-xs tracking-widest text-slate-400 flex items-center gap-2",children:[x.jsx(Sf,{className:"w-3.5 h-3.5"}),"STARK_OS_v8.9 // QUANTUM_COGNITION_CORE"]})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[t&&x.jsxs("span",{className:"flex items-center gap-1 text-[11px] font-tech text-cyan-300 animate-pulse",children:[x.jsx(Ng,{className:"w-3.5 h-3.5"}),"JARVIS VOCALIZING..."]}),x.jsx("span",{className:"font-tech text-[11px] text-green-400",children:"● 100 PetaFLOPS"})]})]}),x.jsxs("div",{className:"h-[360px] overflow-y-auto p-5 space-y-4 font-tech text-sm scrollbar-thin",children:[r.map(g=>x.jsxs("div",{className:`flex flex-col ${g.sender==="user"?"items-end":"items-start"}`,children:[x.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-slate-500 mb-1 px-1",children:[x.jsx("span",{children:g.sender==="user"?"TONY STARK":"J.A.R.V.I.S."}),x.jsx("span",{children:"//"}),x.jsx("span",{children:g.time})]}),x.jsx("div",{className:`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-xl border leading-relaxed ${g.sender==="user"?s?"bg-red-950/70 border-iron-red/50 text-white rounded-tr-none":"bg-cyan-950/70 border-stark-blue/50 text-white rounded-tr-none":"bg-black/60 border-white/10 text-slate-200 rounded-tl-none"}`,children:g.text})]},g.id)),x.jsx("div",{ref:d})]}),x.jsxs("div",{className:"px-5 py-3 border-t border-white/10 bg-black/30 flex items-center gap-2 overflow-x-auto scrollbar-none",children:[x.jsx("span",{className:"text-[10px] font-tech text-slate-400 uppercase tracking-wider whitespace-nowrap",children:"QUICK COMMANDS:"}),K1.map(g=>x.jsx("button",{onClick:()=>m(g),className:`px-2.5 py-1 rounded text-xs font-tech whitespace-nowrap border transition-all ${s?"border-iron-red/40 bg-red-950/30 text-rose-200 hover:bg-iron-red/30":"border-stark-blue/40 bg-cyan-950/30 text-cyan-200 hover:bg-stark-blue/30"}`,children:g.label},g.label))]}),x.jsxs("form",{onSubmit:p,className:"p-4 border-t border-white/10 bg-black/60 flex items-center gap-3",children:[x.jsx("div",{className:"relative flex-1",children:x.jsx("input",{type:"text",value:l,onChange:g=>u(g.target.value),placeholder:"Ask JARVIS anything (e.g. 'status report', 'test repulsors', 'mark 85', 'who is tony stark')...",className:"w-full bg-black/60 border border-white/15 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm font-tech text-white placeholder-slate-500 focus:outline-none transition-colors"})}),x.jsxs("button",{type:"submit",className:`px-5 py-3 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105 active:scale-95 ${s?"bg-iron-red text-white hover:bg-red-500 shadow-arc-red":"bg-stark-blue text-black hover:bg-cyan-300 shadow-arc-cyan"}`,children:[x.jsx(Rg,{className:"w-3.5 h-3.5"}),"TRANSMIT"]})]})]})]})})}function Q1(){const{isIronManMode:s,speakJarvis:e}=pn(),t=[{year:"2023",title:"THE QUANTUM TIME HEIST & THE FINAL SNAP",location:"Avengers Compound, Upstate NY",suit:"Mark LXXXV (85)",dossier:"Solved temporal eigenvalue navigation paradox using inverted Möbius strip topology. Channelled the six cosmic Infinity Stones into nanotech gauntlet, neutralizing Thanos and his armada permanently.",quote:"And I... am... Iron Man."},{year:"2018",title:"THE BATTLE OF TITAN",location:"Planet Titan, Outer Space",suit:"Mark L (50)",dossier:"Exo-atmospheric combat against Thanos. Deployed fluid nanotech multi-cannons, shields, and repulsor flight wings under deep gravitational stress.",quote:"You throw another moon at me, and I'm gonna lose it."},{year:"2015",title:"BATTLE OF SOKOVIA & HULK CONTAINMENT",location:"Johannesburg & Novi Grad",suit:"Mark XLIII / XLIV (Hulkbuster)",dossier:"Collaborated with Dr. Bruce Banner to develop the orbital containment satellite 'Veronica'. Successfully neutralized an enraged Hulk and averted global extinction caused by Ultron.",quote:"Go to sleep, go to sleep, go to sleep!"},{year:"2012",title:"THE BATTLE OF NEW YORK",location:"Midtown Manhattan / Stark Tower",suit:"Mark VII (7)",dossier:"Intercepted a rogue nuclear ballistic missile launched at Manhattan and manually guided it through the Chitauri wormhole, destroying the alien command vessel in deep space.",quote:"If we can't protect the Earth, you can be damn well sure we'll avenge it."},{year:"2008",title:"ESCAPE FROM KUNAR & THE ARC DAWN",location:"Kunar Province, Afghanistan",suit:"Mark I (1)",dossier:"Captured by the Ten Rings. Refused to build the Jericho missile; instead forged the world's first miniaturized Arc Reactor and rough hydraulic armor in a cave to liberate captives.",quote:"I shouldn't be alive, unless it was for a reason."}],r=o=>{os(),e(`Mission archive: ${o.year}, ${o.title}. Tactical outcome verified.`)};return x.jsx("section",{className:"py-20 relative z-10",children:x.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[x.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border mb-3 ${s?"border-iron-red/50 bg-red-950/40 text-yellow-400":"border-stark-blue/50 bg-cyan-950/40 text-cyan-300"}`,children:"SECTION 07 // AVENGERS CLASSIFIED OPERATIONS"}),x.jsxs("h2",{className:"text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide",children:["MISSION ",x.jsx("span",{className:s?"text-iron-red glow-red":"text-stark-blue glow-cyan",children:"CHRONICLES"})]}),x.jsx("p",{className:"mt-3 text-sm sm:text-base font-tech text-slate-400 max-w-xl",children:"Key historical engagements where Tony Stark altered the course of human and cosmic history."})]}),x.jsx("div",{className:"relative border-l border-white/15 ml-4 sm:ml-32 space-y-8",children:t.map((o,l)=>x.jsxs("div",{onClick:()=>r(o),className:"relative pl-6 sm:pl-8 group cursor-pointer",children:[x.jsx("div",{className:"hidden sm:block absolute -left-28 top-3 text-right w-20 font-orbitron font-black text-xl text-slate-500 group-hover:text-white transition-colors",children:o.year}),x.jsx("div",{className:`absolute -left-[9px] top-4 w-4 h-4 rounded-full border-2 transition-all duration-300 ${s?"border-iron-red bg-black group-hover:bg-yellow-400 group-hover:scale-125":"border-stark-blue bg-black group-hover:bg-cyan-400 group-hover:scale-125"}`}),x.jsxs("div",{className:`p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${s?"bg-black/70 border-iron-red/30 group-hover:border-iron-red group-hover:shadow-arc-red group-hover:bg-black/90":"bg-black/60 border-stark-blue/30 group-hover:border-stark-blue group-hover:shadow-arc-cyan group-hover:bg-black/85"}`,children:[x.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-2",children:[x.jsx("span",{className:"sm:hidden font-orbitron font-black text-lg text-white",children:o.year}),x.jsxs("div",{className:"flex items-center gap-2 text-xs font-tech text-slate-400",children:[x.jsx(Td,{className:"w-3.5 h-3.5"}),x.jsx("span",{children:o.location})]}),x.jsx("span",{className:`px-2 py-0.5 rounded text-[11px] font-tech font-bold uppercase ${s?"bg-red-950 text-yellow-300":"bg-cyan-950 text-cyan-200"}`,children:o.suit})]}),x.jsx("h3",{className:"text-lg sm:text-xl font-orbitron font-bold text-white mb-2",children:o.title}),x.jsx("p",{className:"font-tech text-sm text-slate-300 leading-relaxed mb-3",children:o.dossier}),x.jsxs("blockquote",{className:"italic text-xs font-tech text-slate-400 border-l-2 border-white/20 pl-3",children:['"',o.quote,'"']})]})]},o.year))})]})})}function eT(){const{isIronManMode:s,speakJarvis:e}=pn(),[t,r]=tt.useState({name:"",organization:"",message:"",priority:"Standard"}),[o,l]=tt.useState(!1),u=d=>{d.preventDefault(),!(!t.name||!t.message)&&(os(),l(!0),e(s?`Emergency priority dispatch received from ${t.name}. Relaying to Avengers orbital satellite array.`:`Thank you, ${t.name}. Your proposal has been transmitted to Stark Industries executive team.`),setTimeout(()=>{l(!1),r({name:"",organization:"",message:"",priority:"Standard"})},5e3))};return x.jsx("section",{id:"contact",className:"py-20 relative z-10",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[x.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] font-tech uppercase tracking-widest border mb-3 ${s?"border-iron-red/50 bg-red-950/40 text-yellow-400":"border-stark-blue/50 bg-cyan-950/40 text-cyan-300"}`,children:s?"SECTION 08 // SECURE TACTICAL BEACON":"SECTION 08 // EXECUTIVE COMMUNICATIONS"}),x.jsx("h2",{className:"text-3xl sm:text-5xl font-orbitron font-extrabold uppercase text-white tracking-wide",children:s?x.jsxs(x.Fragment,{children:["AVENGERS ",x.jsx("span",{className:"text-iron-red glow-red",children:"TACTICAL UPLINK"})]}):x.jsxs(x.Fragment,{children:["STARK INDUSTRIES ",x.jsx("span",{className:"text-stark-blue glow-cyan",children:"HEADQUARTERS"})]})}),x.jsx("p",{className:"mt-3 text-sm sm:text-base font-tech text-slate-400 max-w-xl",children:s?"Encrypted satellite channel directly connected to Tony Stark's in-helmet HUD. Omega-level threats receive immediate response.":"Pitch revolutionary clean energy ideas, request philanthropic funding, or schedule high-level corporate inquiries."})]}),x.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[x.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-6",children:[x.jsxs("div",{className:`p-6 rounded-2xl border backdrop-blur-xl relative transition-all ${s?"bg-black/80 border-iron-red/40 shadow-arc-red":"bg-black/70 border-stark-blue/40 shadow-arc-cyan"}`,children:[x.jsx("div",{className:"hud-corner-tl"}),x.jsx("div",{className:"hud-corner-br"}),x.jsxs("h3",{className:"font-orbitron font-bold text-lg text-white mb-4 flex items-center gap-2",children:[x.jsx(Gv,{className:`w-5 h-5 ${s?"text-iron-red":"text-stark-blue"}`}),s?"DEFENSE FACILITY COORDINATES":"CORPORATE LOCATIONS"]}),x.jsxs("div",{className:"space-y-4 font-tech text-xs sm:text-sm text-slate-300",children:[x.jsxs("div",{className:"flex items-start gap-3",children:[x.jsx(Td,{className:"w-4 h-4 text-slate-400 shrink-0 mt-1"}),x.jsxs("div",{children:[x.jsx("strong",{className:"text-white block font-orbitron text-xs",children:"MALIBU RESIDENCE & LAB"}),"10880 Malibu Point, Point Dume, Malibu, CA 90265"]})]}),x.jsxs("div",{className:"flex items-start gap-3",children:[x.jsx(Td,{className:"w-4 h-4 text-slate-400 shrink-0 mt-1"}),x.jsxs("div",{children:[x.jsx("strong",{className:"text-white block font-orbitron text-xs",children:"AVENGERS COMPOUND / STARK TOWER"}),"200 Park Avenue, Midtown Manhattan, New York, NY"]})]}),x.jsxs("div",{className:"flex items-start gap-3",children:[x.jsx(Dv,{className:"w-4 h-4 text-slate-400 shrink-0 mt-1"}),x.jsxs("div",{children:[x.jsx("strong",{className:"text-white block font-orbitron text-xs",children:"ENCRYPTED NEURAL COMM"}),"tony@starkindustries.com // jarvis.relay.omega"]})]})]}),x.jsxs("div",{className:"mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-tech text-xs",children:[x.jsx("span",{className:"text-slate-400",children:"ENCRYPTION PROTOCOL:"}),x.jsx("span",{className:"text-green-400 font-bold",children:"2048-BIT QUANTUM HASH"})]})]}),x.jsxs("div",{className:"p-5 rounded-2xl border border-white/10 bg-white/5 font-tech text-xs text-slate-300 leading-relaxed italic",children:[`"Part of the journey is the end. Everything is going to work out exactly the way it's supposed to. I love you 3000."`,x.jsx("span",{className:"block mt-2 not-italic font-orbitron text-[11px] text-white",children:"— Anthony Edward Stark"})]})]}),x.jsx("div",{className:"lg:col-span-7",children:x.jsxs("div",{className:`p-6 sm:p-8 rounded-2xl border backdrop-blur-2xl relative transition-all ${s?"bg-black/85 border-iron-red/50 shadow-arc-red":"bg-black/80 border-stark-blue/50 shadow-arc-cyan"}`,children:[x.jsx("div",{className:"hud-corner-tl"}),x.jsx("div",{className:"hud-corner-tr"}),x.jsx("div",{className:"hud-corner-bl"}),x.jsx("div",{className:"hud-corner-br"}),o?x.jsxs("div",{className:"py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in",children:[x.jsx(Ev,{className:`w-14 h-14 ${s?"text-green-400":"text-cyan-400"} animate-bounce`}),x.jsx("h3",{className:"font-orbitron font-extrabold text-2xl text-white",children:"TRANSMISSION DISPATCHED"}),x.jsx("p",{className:"font-tech text-sm text-slate-300 max-w-md",children:"Encrypted packet received and parsed by J.A.R.V.I.S. Uplink confirmed."})]}):x.jsxs("form",{onSubmit:u,className:"space-y-4",children:[x.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[x.jsxs("div",{children:[x.jsx("label",{className:"block text-[10px] font-tech text-slate-400 uppercase tracking-widest mb-1.5",children:"OPERATIVE / SENDER NAME *"}),x.jsx("input",{type:"text",required:!0,value:t.name,onChange:d=>r({...t,name:d.target.value}),placeholder:"e.g. Peter Parker / Pepper Potts",className:"w-full bg-black/60 border border-white/15 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm font-tech text-white placeholder-slate-600 focus:outline-none transition-colors"})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-[10px] font-tech text-slate-400 uppercase tracking-widest mb-1.5",children:"ORGANIZATION / FACTION"}),x.jsx("input",{type:"text",value:t.organization,onChange:d=>r({...t,organization:d.target.value}),placeholder:"e.g. S.H.I.E.L.D. / MIT Labs",className:"w-full bg-black/60 border border-white/15 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm font-tech text-white placeholder-slate-600 focus:outline-none transition-colors"})]})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-[10px] font-tech text-slate-400 uppercase tracking-widest mb-1.5",children:"THREAT / PRIORITY LEVEL"}),x.jsxs("select",{value:t.priority,onChange:d=>r({...t,priority:d.target.value}),className:"w-full bg-black/60 border border-white/15 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm font-tech text-white focus:outline-none transition-colors",children:[x.jsx("option",{value:"Standard",children:"Standard Corporate Inquiry"}),x.jsx("option",{value:"Urgent",children:"Clean Energy Partnership / R&D"}),x.jsx("option",{value:"Priority",children:"Tactical Avengers Mission Dispatch"}),x.jsx("option",{value:"Omega",children:"OMEGA-LEVEL CODE RED (Immediate Scramble)"})]})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-[10px] font-tech text-slate-400 uppercase tracking-widest mb-1.5",children:"ENCRYPTED TRANSMISSION CONTENT *"}),x.jsx("textarea",{required:!0,rows:4,value:t.message,onChange:d=>r({...t,message:d.target.value}),placeholder:"Enter proposal parameters or tactical briefing data...",className:"w-full bg-black/60 border border-white/15 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm font-tech text-white placeholder-slate-600 focus:outline-none transition-colors"})]}),x.jsxs("button",{type:"submit",className:`w-full py-3.5 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 ${s?"bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 text-black shadow-arc-red":"bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 text-black shadow-arc-cyan"}`,children:[x.jsx(Rg,{className:"w-4 h-4"}),"SEND SECURE UPLINK TO STARK OS"]})]})]})})]})]})})}function tT(){const{isIronManMode:s,toggleMode:e}=pn(),t=()=>{Hn(1600),window.scrollTo({top:0,behavior:"smooth"})};return x.jsx("footer",{className:`border-t relative z-10 transition-colors duration-500 ${s?"bg-[#060305] border-iron-red/30 text-slate-400":"bg-[#040711] border-stark-blue/20 text-slate-400"}`,children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[x.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("div",{className:`w-8 h-8 rounded border flex items-center justify-center font-orbitron font-extrabold text-sm ${s?"border-iron-red text-yellow-400":"border-stark-blue text-cyan-300"}`,children:"S"}),x.jsxs("div",{children:[x.jsx("span",{className:"font-orbitron font-bold text-sm tracking-wider text-white block",children:s?"MARK COMBAT PLATFORM":"STARK INDUSTRIES"}),x.jsx("span",{className:"font-tech text-xs text-slate-500",children:"PROPRIETARY NEURAL ARCHITECTURE // MALIBU POINT"})]})]}),x.jsxs("div",{className:"flex items-center gap-2 text-xs font-tech text-slate-300",children:[x.jsx("span",{children:"Proof That Tony Stark Has A Heart"}),x.jsx(Nv,{className:"w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse"}),x.jsx("span",{className:"text-yellow-400 font-bold",children:"3000"})]}),x.jsx("button",{onClick:t,className:"p-3 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/15 transition-all hover:scale-110 active:scale-95",title:"Return to top",children:x.jsx(vv,{className:"w-4 h-4"})})]}),x.jsxs("div",{className:"pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-tech text-slate-500",children:[x.jsxs("div",{children:["© ",new Date().getFullYear()," STARK INDUSTRIES & THE AVENGERS INITIATIVE. ALL RIGHTS RESERVED."]}),x.jsxs("div",{className:"flex items-center gap-4",children:[x.jsxs("button",{onClick:e,className:"hover:text-white transition-colors",children:["SWITCH TO ",s?"TONY STARK":"IRON MAN"]}),x.jsx("span",{children:"//"}),x.jsx("span",{children:"POWERED BY J.A.R.V.I.S. & THREE.JS"})]})]})]})})}function nT(){const{isTransforming:s}=pn();return x.jsxs("div",{className:`relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-700 selection:bg-cyan-500 selection:text-black ${s?"transforming-page":""}`,children:[x.jsx(r_,{}),x.jsx(V1,{}),x.jsx("div",{className:"fixed inset-0 tech-grid pointer-events-none opacity-40 z-0"}),x.jsx("div",{className:"fixed inset-0 hud-scanline pointer-events-none opacity-30 z-0"}),x.jsx(i_,{}),x.jsx(n_,{}),x.jsxs("main",{className:"relative z-10 space-y-12",children:[x.jsx(G1,{}),x.jsx(W1,{}),x.jsx(X1,{}),x.jsx(q1,{}),x.jsx($1,{}),x.jsx(Z1,{}),x.jsx(Q1,{}),x.jsx(eT,{})]}),x.jsx(tT,{})]})}function iT(){return x.jsx(fv,{children:x.jsx(nT,{})})}cv.createRoot(document.getElementById("root")).render(x.jsx(nv.StrictMode,{children:x.jsx(iT,{})}));
