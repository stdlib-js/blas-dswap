"use strict";var E=function(s,e){return function(){return e||s((e={exports:{}}).exports,e),e.exports}};var b=E(function(L,y){"use strict";var w=require("@stdlib/assert-is-float64ndarray-like"),T=require("@stdlib/assert-is-negative-integer").isPrimitive,x=require("@stdlib/array-base-assert-has-equal-values-indexed"),V=require("@stdlib/math-base-special-fast-min"),S=require("@stdlib/array-base-without"),p=require("@stdlib/ndarray-base-ndarraylike2ndarray"),k=require("@stdlib/ndarray-base-normalize-index"),c=require("@stdlib/ndarray-iter-stacks"),F=require("@stdlib/ndarray-base-numel"),q=require("@stdlib/blas-base-dswap").ndarray,i=require("@stdlib/string-format");function I(s,e){var r,a,u,g,h,t,n,o,v,d,m,f,l;if(!w(s))throw new TypeError(i("invalid argument. First argument must be an ndarray containing double-precision floating-point numbers. Value: `%s`.",s));if(!w(e))throw new TypeError(i("invalid argument. Second argument must be an ndarray containing double-precision floating-point numbers. Value: `%s`.",e));if(t=p(s),n=p(e),a=t.shape,u=n.shape,a.length<1)throw new TypeError(i("invalid argument. First argument must have at least one dimension."));if(u.length<1)throw new TypeError(i("invalid argument. Second argument must have at least one dimension."));if(!x(a,u))throw new Error("invalid arguments. The first and second arguments must have the shape.");if(arguments.length>2){if(r=arguments[2],!T(r))throw new TypeError(i("invalid argument. Third argument must be a negative integer. Value: `%s`.",r))}else r=-1;if(d=V(a.length,u.length)-1,r=k(r,d),r===-1)throw new RangeError(i("invalid argument. Third argument must be a value on the interval: [%d,%d]. Value: `%d`.",-d,-1,arguments[2]));if(m=a[r],a.length===1)return q(m,t.data,t.strides[0],t.offset,n.data,n.strides[0],n.offset),e;for(f=F(S(a,r)),g=c(t,[r]),h=c(n,[r]),l=0;l<f;l++)o=g.next().value,v=h.next().value,q(m,o.data,o.strides[0],o.offset,v.data,v.strides[0],v.offset);return e}y.exports=I});var N=b();module.exports=N;
/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
