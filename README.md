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

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var dswap = require( '@stdlib/blas-dswap' );
```

#### dswap( x, y )

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

-   **x**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] whose underlying data type is `float64`.
-   **y**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] whose underlying data type is `float64`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dswap()` provides a higher-level interface to the [BLAS][blas] level 1 function [`dswap`][@stdlib/blas/base/dswap].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var Float64Array = require( '@stdlib/array-float64' );
var array = require( '@stdlib/ndarray-array' );
var dswap = require( '@stdlib/blas-dswap' );

var x = array( new Float64Array( 10 ) );
var y = array( new Float64Array( 10 ) );

var rand1 = discreteUniform.factory( 0, 100 );
var rand2 = discreteUniform.factory( 0, 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x.set( i, rand1() );
    y.set( i, rand2() );
}
console.log( x.data );
console.log( y.data );

dswap( x, y );
console.log( x.data );
console.log( y.data );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/dswap`][@stdlib/blas/base/dswap]</span><span class="delimiter">: </span><span class="description">interchange two double-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/gswap`][@stdlib/blas/gswap]</span><span class="delimiter">: </span><span class="description">interchange two vectors.</span>
-   <span class="package-name">[`@stdlib/blas/sswap`][@stdlib/blas/sswap]</span><span class="delimiter">: </span><span class="description">interchange two single-precision floating-point vectors.</span>

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-dswap.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-dswap

[test-image]: https://github.com/stdlib-js/blas-dswap/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-dswap/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-dswap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-dswap?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-dswap.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-dswap/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-dswap/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-dswap/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-dswap/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-dswap/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-dswap/main/LICENSE

[blas]: http://www.netlib.org/blas

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array

<!-- <related-links> -->

[@stdlib/blas/base/dswap]: https://github.com/stdlib-js/blas-base-dswap

[@stdlib/blas/gswap]: https://github.com/stdlib-js/blas-gswap

[@stdlib/blas/sswap]: https://github.com/stdlib-js/blas-sswap

<!-- </related-links> -->

</section>

<!-- /.links -->
