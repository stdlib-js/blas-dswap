<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dswap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Interchange two double-precision floating-point vectors.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-dswap
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var dswap = require( '@stdlib/blas-dswap' );
```

#### dswap( x, y\[, dim] )

Interchanges two double-precision floating-point vectors `x` and `y`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var array = require( '@stdlib/ndarray-array' );

var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );

dswap( x, y );

var xbuf = x.data;
// returns <Float64Array>[ 2.0, 6.0, -1.0, -4.0, 8.0 ]

var ybuf = y.data;
// returns <Float64Array>[ 4.0, 2.0, -3.0, 5.0, -1.0 ]
```

The function has the following parameters:

-   **x**: a non-zero-dimensional [`ndarray`][@stdlib/ndarray/ctor] whose underlying data type is `float64`. Must have the same shape as `y`.
-   **y**: a non-zero-dimensional [`ndarray`][@stdlib/ndarray/ctor] whose underlying data type is `float64`. Must have the same shape as `x`.
-   **dim**: dimension along which to interchange vectors. Must be a negative integer. Negative indices are resolved relative to the last array dimension, with the last dimension corresponding to `-1`. Default: `-1`.

For multi-dimensional input [`ndarrays`][@stdlib/ndarray/ctor], the function performs batched computation, such that the function interchanges each pair of vectors in `x` and `y` according to the specified dimension index.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var array = require( '@stdlib/ndarray-array' );

var opts = {
    'shape': [ 2, 3 ]
};
var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 3.0 ] ), opts );
var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 2.0 ] ), opts );

var v1 = x.get( 0, 0 );
// returns 4.0

var v2 = y.get( 0, 0 );
// returns 2.0

dswap( x, y );

v1 = x.get( 0, 0 );
// returns 2.0

v2 = y.get( 0, 0 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Both input [`ndarrays`][@stdlib/ndarray/ctor] must have the same shape.
-   Negative indices are resolved relative to the last [`ndarray`][@stdlib/ndarray/ctor] dimension, with the last dimension corresponding to `-1`.
-   For multi-dimensional [`ndarrays`][@stdlib/ndarray/ctor], batched computation effectively means swapping all of `x` with all of `y`; however, the choice of `dim` will significantly affect performance. For best performance, specify a `dim` which best aligns with the [memory layout][@stdlib/ndarray/orders] of provided [`ndarrays`][@stdlib/ndarray/ctor].
-   `dswap()` provides a higher-level interface to the [BLAS][blas] level 1 function [`dswap`][@stdlib/blas/base/dswap].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var array = require( '@stdlib/ndarray-array' );
var dswap = require( '@stdlib/blas-dswap' );

var opts = {
    'dtype': 'float64'
};

var x = array( discreteUniform( 10, 0, 100, opts ), {
    'shape': [ 5, 2 ]
});
console.log( ndarray2array( x ) );

var y = array( discreteUniform( 10, 0, 10, opts ), {
    'shape': x.shape
});
console.log( ndarray2array( y ) );

dswap( x, y );
console.log( ndarray2array( x ) );
console.log( ndarray2array( y ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-base/dswap`][@stdlib/blas/base/dswap]</span><span class="delimiter">: </span><span class="description">interchange two double-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas-gswap`][@stdlib/blas/gswap]</span><span class="delimiter">: </span><span class="description">interchange two vectors.</span>
-   <span class="package-name">[`@stdlib/blas-sswap`][@stdlib/blas/sswap]</span><span class="delimiter">: </span><span class="description">interchange two single-precision floating-point vectors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-dswap.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-dswap

[test-image]: https://github.com/stdlib-js/blas-dswap/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/blas-dswap/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-dswap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-dswap?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-dswap.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-dswap/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-dswap/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-dswap/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-dswap/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-dswap/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-dswap/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-dswap/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-dswap/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-dswap/main/LICENSE

[blas]: http://www.netlib.org/blas

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders

[@stdlib/blas/base/dswap]: https://github.com/stdlib-js/blas-base-dswap

<!-- <related-links> -->

[@stdlib/blas/gswap]: https://github.com/stdlib-js/blas-gswap

[@stdlib/blas/sswap]: https://github.com/stdlib-js/blas-sswap

<!-- </related-links> -->

</section>

<!-- /.links -->
