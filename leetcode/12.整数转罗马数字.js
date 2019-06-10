/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var a = num + '', res = 0, _rtn = '';
    for (let i = a.length - 1, j = 0; i >= 0; i--, j++) {
        _rtn = foo(a[i], j) + _rtn;
    }
    function foo(str, idx) {
        var num = ~~str;
        if (num === 0) {
            return '';
        }
        var _one = ['I', 'X', 'C', 'M'];
        var _four = ['IV', 'XL', 'CD'];
        var _five = ['V', 'L', 'D'];
        var _nine = ['IX', 'XC', 'CM'];
        if (num <= 3) {
            let _s = '';
            for (let i = 0; i < num; i++) {
                _s = _s + _one[idx];
            }
            return _s;
        } else if (num === 4) {
            return _four[idx];
        } else if (num === 9) {
            return _nine[idx];
        } else if (num >= 5 && num <= 8) {
            let _s = _five[idx];
            for (let i = 0; i < (num - 5) ; i++) {
                _s = _s + _one[idx];
            } 
            return _s;
        } else {
            return '';
        }
    }
    return _rtn;
};

