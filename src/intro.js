
"use strict"; // Enable ECMAScript "strict" operation for this function. See more: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
/*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
/*global window: false, jQuery: false */

// Munge the primitives - Paul Irish tip
var TRUE = true,
	FALSE = false,
	NULL = null,
	noop = function () {};

(function($, window, undefined) {
