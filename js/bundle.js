(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _topLine = require('./top-line.js');

(0, _topLine.navBarResize)(100, 'top-line');

},{"./top-line.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var navBarResize = exports.navBarResize = function navBarResize(scroll, navId) {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var navBar = document.getElementById(navId);

    var scrolling = false;

    window.onscroll = doItOnScroll;

    function doItOnScroll() {
        scrolling = true;
    }

    setInterval(function () {
        if (scrolling) {
            scrolling = false;
            scrolled = window.pageYOffset || document.documentElement.scrollTop;
            scrolled > scroll ? navBar.classList.add('narrow') : navBar.classList.remove('narrow');
        }
    }, 200);
};

},{}]},{},[1]);
