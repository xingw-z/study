"use strict";
exports.__esModule = true;
var Baby = /** @class */ (function () {
    function Baby(name) {
        this._name = name;
        console.log('baby baby baby ohhhhhh!!!!');
    }
    Baby.smile = function () {
        console.log('weixiao');
    };
    Baby.prototype.getBabyName = function () {
        return this._name;
    };
    return Baby;
}());
exports.Baby = Baby;
exports.baby = new Baby('Nico');
