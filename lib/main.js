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

'use strict';

// MODULES //

var base = require( '@stdlib/blas-base-dswap' ).ndarray;
var factory = require( '@stdlib/blas-tools-swap-factory' );


// MAIN //

/**
* Interchanges two double-precision floating-point vectors.
*
* @name dswap
* @type {Function}
* @param {ndarrayLike} x - first input array
* @param {ndarrayLike} y - second input array
* @param {NegativeInteger} [dim] - dimension along which to interchange elements
* @throws {TypeError} first argument must be a ndarray containing double-precision floating-point numbers
* @throws {TypeError} first argument must have at least one dimension
* @throws {TypeError} second argument must be a ndarray containing double-precision floating-point numbers
* @throws {TypeError} second argument must have at least one dimension
* @throws {Error} both input arrays must have the same shape
* @throws {RangeError} third argument is out-of-bounds
* @throws {Error} cannot write to read-only array
* @returns {ndarrayLike} `y`
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var array = require( '@stdlib/ndarray-array' );
*
* var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
* var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );
*
* dswap( x, y );
*
* var xbuf = x.data;
* // returns <Float64Array>[ 2.0, 6.0, -1.0, -4.0, 8.0 ]
*
* var ybuf = y.data;
* // returns <Float64Array>[ 4.0, 2.0, -3.0, 5.0, -1.0 ]
*/
var dswap = factory( base, 'float64' );


// EXPORTS //

module.exports = dswap;
