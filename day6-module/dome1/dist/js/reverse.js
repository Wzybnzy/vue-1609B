'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var reverse = function reverse(str) {
    return str.split('').reverse().join('');
};
var classname = exports.classname = '1609C';
var repetx = function repetx(n, str) {
    return str.repeat(n);
};
var obj = exports.obj = {
    name: "wb",
    age: 17
};
var string = 'bawei';

//抛出
exports.reverse = reverse;
exports.repetx = repetx;
exports.string = string;