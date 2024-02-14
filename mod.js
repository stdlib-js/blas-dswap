// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function e(t){return"number"==typeof t}function n(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function i(t,r,e){var i=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=e?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var r,n,u;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=t.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===t.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=u.toString(r),u||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===r&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===r&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(t){return"string"==typeof t}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function _(t){var r,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!e(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":c(i)<1e-4?((r=t.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(t.precision),t.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,b,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,h,"e-0$1"),t.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,d,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===s.call(t.specifier)?s.call(n):l.call(n)}function w(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function O(t,r,e){var n=r-t.length;return n<0?t:t=e?t+w(n):w(n)+t}var j=String.fromCharCode,S=isNaN,A=Array.isArray;function E(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function U(t){var r,e,n,o,a,c,l,s,p;if(!A(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",l=1,s=0;s<t.length;s++)if(f(n=t[s]))c+=n;else{if(r=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(o=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function I(t){var r,e,n,i;for(e=[],i=0,n=x.exec(t);n;)(r=t.slice(i,x.lastIndex-n[0].length)).length&&e.push(r),e.push(T(n)),i=x.lastIndex,n=x.exec(t);return(r=t.slice(i)).length&&e.push(r),e}function N(t){return"string"==typeof t}function R(t){var r,e;if(!N(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[I(t)],e=1;e<arguments.length;e++)r.push(arguments[e]);return U.apply(null,r)}var F,V=Object.prototype,L=V.toString,B=V.__defineGetter__,k=V.__defineSetter__,P=V.__lookupGetter__,C=V.__lookupSetter__;F=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,e){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(P.call(t,r)||C.call(t,r)?(n=t.__proto__,t.__proto__=V,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(t,r,e.get),a&&k&&k.call(t,r,e.set),t};var M=F;function D(t,r,e){M(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function G(t){return"boolean"==typeof t}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return Y&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function z(t,r){return null!=t&&W.call(t,r)}var X="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof X?X.toStringTag:"";var q=$()?function(t){var r,e,n;if(null==t)return J.call(t);e=t[Z],r=z(t,Z);try{t[Z]=void 0}catch(r){return J.call(t)}return n=J.call(t),r?t[Z]=e:delete t[Z],n}:function(t){return J.call(t)},H=Boolean,K=Boolean.prototype.toString;var Q=$();function tt(t){return"object"==typeof t&&(t instanceof H||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===q(t)))}function rt(t){return G(t)||tt(t)}function et(){return new Function("return this;")()}D(rt,"isPrimitive",G),D(rt,"isObject",tt);var nt="object"==typeof self?self:null,it="object"==typeof window?window:null,ot="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},at="object"==typeof ot?ot:null,ut="object"==typeof globalThis?globalThis:null;function ft(t){if(arguments.length){if(!G(t))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return et()}if(ut)return ut;if(nt)return nt;if(it)return it;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")}var ct=ft();function lt(t,r,e){M(t,r,{configurable:!1,enumerable:!1,get:e})}var st={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function pt(t){return Math.abs(t)}function yt(t,r){return r&&(2===t||3===t)}function ht(t,r){return r&&(1===t||3===t)}function gt(t,r,e){var n,i,o,a,u;for(n=t.length,i=e,o=e,u=0;u<n;u++){if(0===t[u])return[e,e];(a=r[u])>0?o+=a*(t[u]-1):a<0&&(i+=a*(t[u]-1))}return[i,o]}function dt(t){return t.re}function vt(t){return t.im}function bt(t){return"string"==typeof t}D(gt,"assign",(function(t,r,e,n){var i,o,a,u,f;for(i=t.length,o=e,a=e,f=0;f<i;f++){if(0===t[f])return n[0]=e,n[1]=e,n;(u=r[f])>0?a+=u*(t[f]-1):u<0&&(o+=u*(t[f]-1))}return n[0]=o,n[1]=a,n}));var mt=Object.prototype.toString;var _t="function"==typeof Symbol?Symbol:void 0,wt="function"==typeof _t?_t.toStringTag:"";var Ot=$()?function(t){var r,e,n;if(null==t)return mt.call(t);e=t[wt],r=z(t,wt);try{t[wt]=void 0}catch(r){return mt.call(t)}return n=mt.call(t),r?t[wt]=e:delete t[wt],n}:function(t){return mt.call(t)},jt=String.prototype.valueOf;var St=$();function At(t){return"object"==typeof t&&(t instanceof String||(St?function(t){try{return jt.call(t),!0}catch(t){return!1}}(t):"[object String]"===Ot(t)))}function Et(t){return bt(t)||At(t)}D(Et,"isPrimitive",bt),D(Et,"isObject",At);var Ut=/[-\/\\^$*+?.()|[\]{}]/g;var xt=/./,Tt=ft(),It=Tt.document&&Tt.document.childNodes,Nt=Int8Array;var Rt=Object.prototype.toString;var Ft="function"==typeof Symbol?Symbol:void 0,Vt="function"==typeof Ft?Ft.toStringTag:"";var Lt=$()?function(t){var r,e,n;if(null==t)return Rt.call(t);e=t[Vt],r=z(t,Vt);try{t[Vt]=void 0}catch(r){return Rt.call(t)}return n=Rt.call(t),r?t[Vt]=e:delete t[Vt],n}:function(t){return Rt.call(t)};function Bt(){return/^\s*function\s*([^(]*)/i}var kt=/^\s*function\s*([^(]*)/i;D(Bt,"REGEXP",kt);var Pt=Object.prototype.toString;var Ct="function"==typeof Symbol?Symbol:void 0,Mt="function"==typeof Ct?Ct.toStringTag:"";var Dt=$()?function(t){var r,e,n;if(null==t)return Pt.call(t);e=t[Mt],r=z(t,Mt);try{t[Mt]=void 0}catch(r){return Pt.call(t)}return n=Pt.call(t),r?t[Mt]=e:delete t[Mt],n}:function(t){return Pt.call(t)};var Gt=Array.isArray?Array.isArray:function(t){return"[object Array]"===Dt(t)};function Yt(t){return null!==t&&"object"==typeof t}function $t(t){var r,e,n,i;if(("Object"===(e=Lt(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=kt.exec(n.toString()))return r[1]}return Yt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}D(Yt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!Gt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Yt));var Jt="function"==typeof xt||"object"==typeof Nt||"function"==typeof It?function(t){return $t(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?$t(t).toLowerCase():r};function Wt(t){return"function"===Jt(t)}var zt=Object.prototype.toString;var Xt="function"==typeof Symbol?Symbol:void 0,Zt="function"==typeof Xt?Xt.toStringTag:"";var qt=$()?function(t){var r,e,n;if(null==t)return zt.call(t);e=t[Zt],r=z(t,Zt);try{t[Zt]=void 0}catch(r){return zt.call(t)}return n=zt.call(t),r?t[Zt]=e:delete t[Zt],n}:function(t){return zt.call(t)},Ht=RegExp.prototype.exec;var Kt=$();function Qt(t){return"object"==typeof t&&(t instanceof RegExp||(Kt?function(t){try{return Ht.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===qt(t)))}function tr(t,r,e){if(!bt(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));if(bt(r))r=new RegExp(function(t){var r,e;if(!bt(t))throw new TypeError(R("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(e=t.length-1;e>=0&&"/"!==t[e];e--);return void 0===e||e<=0?t.replace(Ut,"\\$&"):(r=(r=t.substring(1,e)).replace(Ut,"\\$&"),t=t[0]+r+t.substring(e))}(r),"g");else if(!Qt(r))throw new TypeError(R("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",r));if(!bt(e)&&!Wt(e))throw new TypeError(R("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",e));return function(t,r,e){return t.replace(r,e)}(t,r,e)}var rr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var er=Object.prototype.toString;var nr="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof nr?nr.toStringTag:"";var or=$()?function(t){var r,e,n;if(null==t)return er.call(t);e=t[ir],r=z(t,ir);try{t[ir]=void 0}catch(r){return er.call(t)}return n=er.call(t),r?t[ir]=e:delete t[ir],n}:function(t){return er.call(t)},ar="function"==typeof Uint8Array;var ur="function"==typeof Uint8Array?Uint8Array:null;var fr,cr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var t,r,e;if("function"!=typeof ur)return!1;try{r=new ur(r=[1,3.14,-3.14,256,257]),e=r,t=(ar&&e instanceof Uint8Array||"[object Uint8Array]"===or(e))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?cr:function(){throw new Error("not implemented")};var lr=fr,sr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null;var yr,hr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var t,r,e;if("function"!=typeof pr)return!1;try{r=new pr(r=[1,3.14,-3.14,65536,65537]),e=r,t=(sr&&e instanceof Uint16Array||"[object Uint16Array]"===or(e))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?hr:function(){throw new Error("not implemented")};var gr,dr={uint16:yr,uint8:lr};(gr=new dr.uint16(1))[0]=4660;var vr=52===new dr.uint8(gr.buffer)[0],br=Object.prototype.toString;var mr="function"==typeof Symbol?Symbol:void 0,_r="function"==typeof mr?mr.toStringTag:"";var wr=$()?function(t){var r,e,n;if(null==t)return br.call(t);e=t[_r],r=z(t,_r);try{t[_r]=void 0}catch(r){return br.call(t)}return n=br.call(t),r?t[_r]=e:delete t[_r],n}:function(t){return br.call(t)},Or="function"==typeof ArrayBuffer;var jr="function"==typeof Float64Array;var Sr="function"==typeof Float64Array?Float64Array:null;var Ar,Er="function"==typeof Float64Array?Float64Array:void 0;Ar=function(){var t,r,e;if("function"!=typeof Sr)return!1;try{r=new Sr([1,3.14,-3.14,NaN]),e=r,t=(jr&&e instanceof Float64Array||"[object Float64Array]"===wr(e))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?Er:function(){throw new Error("not implemented")};var Ur=Ar,xr="function"==typeof ArrayBuffer?ArrayBuffer:null;var Tr,Ir="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Tr=function(){var t,r,e,n;if("function"!=typeof xr)return!1;try{e=new xr(16),n=e,(t=(Or&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===wr(n))&&"function"==typeof xr.isView)&&((r=new Ur(e))[0]=-3.14,r[1]=NaN,t=t&&xr.isView(r)&&16===e.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t}()?Ir:function(){throw new Error("not implemented")};var Nr=Tr,Rr=Object.prototype.toString;var Fr="function"==typeof Symbol?Symbol:void 0,Vr="function"==typeof Fr?Fr.toStringTag:"";var Lr=$()?function(t){var r,e,n;if(null==t)return Rr.call(t);e=t[Vr],r=z(t,Vr);try{t[Vr]=void 0}catch(r){return Rr.call(t)}return n=Rr.call(t),r?t[Vr]=e:delete t[Vr],n}:function(t){return Rr.call(t)},Br="function"==typeof DataView;var kr="function"==typeof DataView?DataView:null;var Pr,Cr="function"==typeof DataView?DataView:void 0;Pr=function(){var t,r,e,n;if("function"!=typeof kr)return!1;try{e=new Nr(24),r=new kr(e,8),n=r,(t=(Br&&n instanceof DataView||"[object DataView]"===Lr(n))&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===e&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t}()?Cr:function(){throw new Error("not implemented")};var Mr=Pr,Dr="function"==typeof BigInt?BigInt:void 0,Gr={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Yr(){var t;return 0===arguments.length?Gr.all.slice():(t=Gr[arguments[0]])?t.slice():[]}function $r(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Jr(t,r,e){M(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})}function Wr(t){return Object.keys(Object(t))}var zr=void 0!==Object.keys,Xr=Object.prototype.toString;var Zr="function"==typeof Symbol?Symbol:void 0,qr="function"==typeof Zr?Zr.toStringTag:"";var Hr=$()?function(t){var r,e,n;if(null==t)return Xr.call(t);e=t[qr],r=z(t,qr);try{t[qr]=void 0}catch(r){return Xr.call(t)}return n=Xr.call(t),r?t[qr]=e:delete t[qr],n}:function(t){return Xr.call(t)};function Kr(t){return"[object Arguments]"===Hr(t)}var Qr=function(){return Kr(arguments)}();function te(t){return"number"==typeof t}var re=Object.prototype.toString;var ee="function"==typeof Symbol?Symbol:void 0,ne="function"==typeof ee?ee.toStringTag:"";var ie=$()?function(t){var r,e,n;if(null==t)return re.call(t);e=t[ne],r=z(t,ne);try{t[ne]=void 0}catch(r){return re.call(t)}return n=re.call(t),r?t[ne]=e:delete t[ne],n}:function(t){return re.call(t)},oe=Number,ae=oe.prototype.toString;var ue=$();function fe(t){return"object"==typeof t&&(t instanceof oe||(ue?function(t){try{return ae.call(t),!0}catch(t){return!1}}(t):"[object Number]"===ie(t)))}function ce(t){return te(t)||fe(t)}function le(t){return t!=t}function se(t){return te(t)&&le(t)}function pe(t){return fe(t)&&le(t.valueOf())}function ye(t){return se(t)||pe(t)}D(ce,"isPrimitive",te),D(ce,"isObject",fe),D(ye,"isPrimitive",se),D(ye,"isObject",pe);var he=Number.POSITIVE_INFINITY,ge=oe.NEGATIVE_INFINITY,de=Math.floor;function ve(t){return de(t)===t}function be(t){return t<he&&t>ge&&ve(t)}function me(t){return te(t)&&be(t)}function _e(t){return fe(t)&&be(t.valueOf())}function we(t){return me(t)||_e(t)}D(we,"isPrimitive",me),D(we,"isObject",_e);var Oe=Object.prototype.propertyIsEnumerable;var je=!Oe.call("beep","0");function Se(t,r){var e;return null!=t&&(!(e=Oe.call(t,r))&&je&&Et(t)?!se(r=+r)&&me(r)&&r>=0&&r<t.length:e)}var Ae=Qr?Kr:function(t){return null!==t&&"object"==typeof t&&!Gt(t)&&"number"==typeof t.length&&ve(t.length)&&t.length>=0&&t.length<=4294967295&&z(t,"callee")&&!Se(t,"callee")},Ee=Array.prototype.slice;function Ue(t){return null!==t&&"object"==typeof t}D(Ue,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!Gt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Ue));var xe=Se((function(){}),"prototype"),Te=!Se({toString:null},"toString");function Ie(t){return t!=t}function Ne(t){return te(t)&&Ie(t)}function Re(t){return fe(t)&&Ie(t.valueOf())}function Fe(t){return Ne(t)||Re(t)}D(Fe,"isPrimitive",Ne),D(Fe,"isObject",Re);function Ve(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ve(t.length)&&t.length>=0&&t.length<=9007199254740991}function Le(t,r,e){var n,i;if(!Ve(t)&&!bt(t))throw new TypeError(R("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!me(e))throw new TypeError(R("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=n)return-1;i=e}else(i=n+e)<0&&(i=0)}else i=0;if(Fe(r)){for(;i<n;i++)if(Fe(t[i]))return i}else for(;i<n;i++)if(t[i]===r)return i;return-1}function Be(t){return t.constructor&&t.constructor.prototype===t}var ke=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Pe="undefined"==typeof window?void 0:window;var Ce=function(){var t;if("undefined"===Jt(Pe))return!1;for(t in Pe)try{-1===Le(ke,t)&&z(Pe,t)&&null!==Pe[t]&&"object"===Jt(Pe[t])&&Be(Pe[t])}catch(t){return!0}return!1}(),Me="undefined"!=typeof window;var De=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ge=zr?function(){return 2!==(Wr(arguments)||"").length}(1,2)?function(t){return Ae(t)?Wr(Ee.call(t)):Wr(t)}:Wr:function(t){var r,e,n,i,o,a,u;if(i=[],Ae(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!z(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof t)&&!Ue(t))return i;e=xe&&n}for(o in t)e&&"prototype"===o||!z(t,o)||i.push(String(o));if(Te)for(r=function(t){if(!1===Me&&!Ce)return Be(t);try{return Be(t)}catch(t){return!1}}(t),u=0;u<De.length;u++)a=De[u],r&&"constructor"===a||!z(t,a)||i.push(String(a));return i};D(Yr,"enum",$r),function(t,r){var e,n,i;for(e=Ge(r),i=0;i<e.length;i++)Jr(t,n=e[i],r[n])}(Yr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ye=["row-major","column-major"];function $e(){return{"row-major":1,"column-major":2}}D((function(){return Ye.slice()}),"enum",$e);var Je=["throw","normalize","clamp","wrap"];function We(){return{throw:1,clamp:2,wrap:3,normalize:4}}D((function(){return Je.slice()}),"enum",We);var ze={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Xe={"row-major":1,"column-major":2},Ze={throw:1,clamp:2,wrap:3,normalize:4};var qe="function"==typeof Uint8Array;var He="function"==typeof Uint8Array?Uint8Array:null;var Ke,Qe="function"==typeof Uint8Array?Uint8Array:void 0;Ke=function(){var t,r,e;if("function"!=typeof He)return!1;try{r=new He(r=[1,3.14,-3.14,256,257]),e=r,t=(qe&&e instanceof Uint8Array||"[object Uint8Array]"===Hr(e))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Qe:function(){throw new Error("not implemented")};var tn=Ke,rn=Object.prototype.toString;var en="function"==typeof Symbol?Symbol:void 0,nn="function"==typeof en?en.toStringTag:"";var on=$()?function(t){var r,e,n;if(null==t)return rn.call(t);e=t[nn],r=z(t,nn);try{t[nn]=void 0}catch(r){return rn.call(t)}return n=rn.call(t),r?t[nn]=e:delete t[nn],n}:function(t){return rn.call(t)},an="function"==typeof Uint8Array;var un="function"==typeof Uint8Array?Uint8Array:null;var fn,cn="function"==typeof Uint8Array?Uint8Array:void 0;fn=function(){var t,r,e;if("function"!=typeof un)return!1;try{r=new un(r=[1,3.14,-3.14,256,257]),e=r,t=(an&&e instanceof Uint8Array||"[object Uint8Array]"===on(e))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?cn:function(){throw new Error("not implemented")};var ln=fn;var sn=new ln(8),pn=new Mr(sn.buffer);function yn(t,r,e,n){var i,o,a;if(0===t){for(a=0;a<sn.length;a++)r[n]=0,n+=e;return r}for(o=(4294967295&t)>>>0,i=de(t/4294967296),vr?(pn.setUint32(0,o,vr),pn.setUint32(4,i,vr)):(pn.setUint32(0,i,vr),pn.setUint32(4,o,vr)),a=0;a<sn.length;a++)r[n]=sn[a],n+=e;return r}D((function(t){var r,e,n,i;return r=new ln(8),0===t||(i=(4294967295&t)>>>0,n=de(t/4294967296),e=new Mr(r.buffer),vr?(e.setUint32(0,i,vr),e.setUint32(4,n,vr)):(e.setUint32(0,n,vr),e.setUint32(4,i,vr))),r}),"assign",yn);var hn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},gn={"row-major":1,"column-major":2},dn={throw:1,clamp:2,wrap:3,normalize:4};function vn(t,r,e,n,i,o){var a,u,f,c,l;if(!(this instanceof vn))return new vn(t,r,e,n,i,o);for(c=1,l=0;l<e.length;l++)c*=e[l];return u=r.BYTES_PER_ELEMENT?r.BYTES_PER_ELEMENT*c:null,this._byteLength=u,this._bytesPerElement=function(t){return st[t]||null}(t),this._buffer=r,this._dtype=t,this._length=c,this._ndims=e.length,this._offset=i,this._order=o,this._shape=e,this._strides=n,this._accessors=H(r.get&&r.set),this._iterationOrder=function(t){var r,e;for(r=0,e=0;e<t.length;e++)t[e]<0&&(r+=1);return 0===r?1:r===t.length?-1:0}(n),a=function(t,r,e,n,i){var o;return 0!==t&&0!==i&&t===(o=gt(r,e,n))[1]-o[0]+1}(c,e,n,i,this._iterationOrder),f=function(t){var r,e,n,i,o,a;if(0===(e=t.length))return 0;for(r=!0,n=!0,i=pt(t[0]),a=1;a<e;a++){if(o=pt(t[a]),r&&o<i?r=!1:n&&o>i&&(n=!1),!n&&!r)return 0;i=o}return n&&r?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:ht(f,a),COLUMN_MAJOR_CONTIGUOUS:yt(f,a),READONLY:!1},this.__meta_dataview__=null,this}function bn(t){return function(t){return t instanceof vn||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&1===t.ndims&&1===t.shape.length&&1===t.strides.length}function mn(t){return bn(t)&&"float64"===t.dtype}function _n(t){if(t.__esModule)return t;var r=t.default;if("function"==typeof r){var e=function t(){if(this instanceof t){var e=[null];e.push.apply(e,arguments);var n=Function.bind.apply(r,e);return new n}return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}function wn(t,r){for(var e=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),e++):e&&(t.splice(n,1),e--)}if(r)for(;e--;e)t.unshift("..");return t}D(vn,"name","ndarray"),lt(vn.prototype,"byteLength",(function(){return this._byteLength})),lt(vn.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),lt(vn.prototype,"data",(function(){return this._buffer})),lt(vn.prototype,"dtype",(function(){return this._dtype})),lt(vn.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),lt(vn.prototype,"length",(function(){return this._length})),lt(vn.prototype,"ndims",(function(){return this._ndims})),lt(vn.prototype,"offset",(function(){return this._offset})),lt(vn.prototype,"order",(function(){return this._order})),lt(vn.prototype,"shape",(function(){return this._shape.slice()})),lt(vn.prototype,"strides",(function(){return this._strides.slice()})),D(vn.prototype,"get",(function(){var t,r;for(t=this._offset,r=0;r<arguments.length;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.get(t):this._buffer[t]})),D(vn.prototype,"iget",(function(t){var r,e,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(e=this._shape,r=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),D(vn.prototype,"set",(function(){var t,r;for(t=this._offset,r=0;r<arguments.length-1;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.set(arguments[r],t):this._buffer[t]=arguments[r],this})),D(vn.prototype,"iset",(function(t,r){var e,n,i,o,a,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset+t):this._buffer[this._offset+t]=r,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset-t):this._buffer[this._offset-t]=r,this}if(n=this._shape,e=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=a=t%n[u],t/=n[u],o+=a*e[u];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this}for(u=i-1;u>=0;u--)t-=a=t%n[u],t/=n[u],o+=a*e[u];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this})),D(vn.prototype,"toString",(function(){var t,r,e,n,i,o;if(r=this._shape.length,e="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=dt(i=this.iget(o))+", "+vt(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=dt(i=this.iget(o))+", "+vt(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=dt(i=this.iget(this._length-1-o))+", "+vt(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(e+=tr(rr[this.dtype],"{{data}}",t),e+=", ",e+=0===r?"[]":"[ "+this._shape.join(", ")+" ]",e+=", ",e+="[ ",0===r)e+="0";else for(o=0;o<r;o++)this._strides[o]<0?e+=-this._strides[o]:e+=this._strides[o],o<r-1&&(e+=", ");return e+=" ]",e+=", ",e+="0",e+=", ",e+="'"+this._order+"'",e+=" )"})),D(vn.prototype,"toJSON",(function(){var t,r,e,n;for(r=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<r;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<r;n++)e=this.iget(n),t.data.push(dt(e),vt(e));else for(n=0;n<r;n++)t.data.push(this.iget(n));return t})),D(vn.prototype,"__array_meta_dataview__","function"==typeof ct.BigInt&&"function"==typeof BigInt&&"bigint"==typeof ct.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,r,e,n,i,o,a,u,f,c,l,s,p,y;if(f=this._mode||"throw",a=this._submode||[f],e=33+16*(s=this._ndims)+(p=a.length),(u=this.__meta_dataview__)&&u.byteLength===e)return u;for(u=new Mr(new Nr(e)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,c=0,u.setInt8(c,vr?1:0),c+=1,u.setInt16(c,ze[n],vr),c+=2,u.setBigInt64(c,Dr(s),vr),l=8*s,c+=8,y=0;y<s;y++)u.setBigInt64(c,Dr(i[y]),vr),u.setBigInt64(c+l,Dr(o[y]*t),vr),c+=8;for(c+=l,u.setBigInt64(c,Dr(this._offset*t),vr),c+=8,u.setInt8(c,Xe[this._order]),c+=1,u.setInt8(c,Ze[f]),c+=1,u.setBigInt64(c,Dr(p),vr),c+=8,y=0;y<p;y++)u.setInt8(c,Ze[a[y]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,u.setInt32(c,r,vr),this.__meta_dataview__=u,u}:function(){var t,r,e,n,i,o,a,u,f,c,l,s,p,y,h;if(c=this._mode||"throw",u=this._submode||[c],n=33+16*(p=this._ndims)+(y=u.length),(f=this.__meta_dataview__)&&f.byteLength===n)return f;for(f=new Mr(new Nr(n)),r=new tn(f.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,l=0,f.setInt8(l,vr?1:0),l+=1,f.setInt16(l,hn[i],vr),yn(p,r,1,l+=2),s=8*p,l+=8,h=0;h<p;h++)yn(o[h],r,1,l),yn(a[h]*t,r,1,l+s),l+=8;for(l+=s,yn(this._offset*t,r,1,l),l+=8,f.setInt8(l,gn[this._order]),l+=1,f.setInt8(l,dn[c]),yn(y,r,1,l+=1),l+=8,h=0;h<y;h++)f.setInt8(l,dn[u[h]]),l+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(l,e,vr),this.__meta_dataview__=f,f});var On=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,jn=function(t){return On.exec(t).slice(1)};function Sn(){for(var t="",r=!1,e=arguments.length-1;e>=-1&&!r;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(t=n+"/"+t,r="/"===n.charAt(0))}return(r?"/":"")+(t=wn(Fn(t.split("/"),(function(t){return!!t})),!r).join("/"))||"."}function An(t){var r=En(t),e="/"===Vn(t,-1);return(t=wn(Fn(t.split("/"),(function(t){return!!t})),!r).join("/"))||r||(t="."),t&&e&&(t+="/"),(r?"/":"")+t}function En(t){return"/"===t.charAt(0)}function Un(){var t=Array.prototype.slice.call(arguments,0);return An(Fn(t,(function(t,r){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))}function xn(t,r){function e(t){for(var r=0;r<t.length&&""===t[r];r++);for(var e=t.length-1;e>=0&&""===t[e];e--);return r>e?[]:t.slice(r,e-r+1)}t=Sn(t).substr(1),r=Sn(r).substr(1);for(var n=e(t.split("/")),i=e(r.split("/")),o=Math.min(n.length,i.length),a=o,u=0;u<o;u++)if(n[u]!==i[u]){a=u;break}var f=[];for(u=a;u<n.length;u++)f.push("..");return(f=f.concat(i.slice(a))).join("/")}function Tn(t){var r=jn(t),e=r[0],n=r[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."}function In(t,r){var e=jn(t)[2];return r&&e.substr(-1*r.length)===r&&(e=e.substr(0,e.length-r.length)),e}function Nn(t){return jn(t)[3]}var Rn={extname:Nn,basename:In,dirname:Tn,sep:"/",delimiter:":",relative:xn,join:Un,isAbsolute:En,normalize:An,resolve:Sn};function Fn(t,r){if(t.filter)return t.filter(r);for(var e=[],n=0;n<t.length;n++)r(t[n],n,t)&&e.push(t[n]);return e}var Vn="b"==="ab".substr(-1)?function(t,r,e){return t.substr(r,e)}:function(t,r,e){return r<0&&(r=t.length+r),t.substr(r,e)},Ln=_n(Object.freeze({__proto__:null,basename:In,default:Rn,delimiter:":",dirname:Tn,extname:Nn,isAbsolute:En,join:Un,normalize:An,relative:xn,resolve:Sn,sep:"/"}));var Bn=Object,kn=Object.getPrototypeOf,Pn=Object.prototype.toString;var Cn="function"==typeof Symbol?Symbol:void 0,Mn="function"==typeof Cn?Cn.toStringTag:"";var Dn,Gn=$()?function(t){var r,e,n;if(null==t)return Pn.call(t);e=t[Mn],r=z(t,Mn);try{t[Mn]=void 0}catch(r){return Pn.call(t)}return n=Pn.call(t),r?t[Mn]=e:delete t[Mn],n}:function(t){return Pn.call(t)};Dn=Wt(Object.getPrototypeOf)?kn:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===Gn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Yn=Dn;function $n(t){return null==t?null:(t=Bn(t),Yn(t))}var Jn=Object.prototype.toString;var Wn="function"==typeof Symbol?Symbol:void 0,zn="function"==typeof Wn?Wn.toStringTag:"";var Xn=$()?function(t){var r,e,n;if(null==t)return Jn.call(t);e=t[zn],r=z(t,zn);try{t[zn]=void 0}catch(r){return Jn.call(t)}return n=Jn.call(t),r?t[zn]=e:delete t[zn],n}:function(t){return Jn.call(t)};function Zn(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===Xn(t))return!0;t=$n(t)}return!1}function qn(t,r,e,n,i){var o,a,u,f,c,l;if(t<=0)return n;if(1===e&&1===i){if((f=t%3)>0)for(c=0;c<f;c++)o=r[c],r[c]=n[c],n[c]=o;if(t<3)return n;for(c=f;c<t;c+=3)o=r[c],r[c]=n[c],n[c]=o,o=r[l=c+1],r[l]=n[l],n[l]=o,o=r[l+=1],r[l]=n[l],n[l]=o;return n}for(a=e<0?(1-t)*e:0,u=i<0?(1-t)*i:0,c=0;c<t;c++)o=r[a],r[a]=n[u],n[u]=o,a+=e,u+=i;return n}D(qn,"ndarray",(function(t,r,e,n,i,o,a){var u,f,c,l,s;if(t<=0)return i;if(f=n,c=a,1===e&&1===o){if((l=t%3)>0)for(s=0;s<l;s++)u=r[f],r[f]=i[c],i[c]=u,f+=e,c+=o;if(t<3)return i;for(s=l;s<t;s+=3)u=r[f],r[f]=i[c],i[c]=u,u=r[f+1],r[f+1]=i[c+1],i[c+1]=u,u=r[f+2],r[f+2]=i[c+2],i[c+2]=u,f+=3,c+=3;return i}for(s=0;s<t;s++)u=r[f],r[f]=i[c],i[c]=u,f+=e,c+=o;return i}));var Hn,Kn=function(t){try{return function(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(t)}catch(t){return Zn(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}((0,Ln.join)("/home/runner/work/blas-dswap/blas-dswap/node_modules/@stdlib/blas-base-dswap/lib","./native.js"));Hn=Zn(Kn)?qn:Kn;const{ndarray:Qn}=Hn;function ti(t,r){if(!mn(t))throw new TypeError(R("invalid argument. First argument must be a one-dimensional ndarray containing double-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float64Array). Value: `%s`.",t));if(!mn(r))throw new TypeError(R("invalid argument. Second argument must be a one-dimensional ndarray containing double-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float64Array). Value: `%s`.",r));if(t.length!==r.length)throw new RangeError(R("invalid argument. Arrays must be the same length. First argument length: `%u`. Second argument length: `%u`.",t.length,r.length));return Qn(t.length,t.data,t.strides[0],t.offset,r.data,r.strides[0],r.offset),r}export{ti as default};
//# sourceMappingURL=mod.js.map
