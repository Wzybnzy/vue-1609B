"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


//默认抛出一个js文件只能有一次
var n = Math.floor(Math.random() * 10);
exports.n = n;

exports.default = function () {
    for (var _len = arguments.length, n = Array(_len), _key = 0; _key < _len; _key++) {
        n[_key] = arguments[_key];
    }

    return n.reduce(function (prev, next) {
        return prev + next;
    });
};