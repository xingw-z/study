/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (39.65%)
 * Total Accepted:    24.8K
 * Total Submissions: 60.2K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * 
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * string convert(string s, int numRows);
 * 
 * 示例 1:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 * 
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 * 
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let n = numRows;
    let m = 2 * n - 2;
    let _len = s.length;
    let _v = ~~(_len / m);
    let _chashu = _len % m;
    let _czc = _chashu - n;
    let _cd = 0;
    if (n === 1) {
        return s;
    } else {
        let _add = 0;
        if (_chashu > 0) {
            _add = 1;
        }
        if (_czc >0) {
            _add += _czc
        }
        _cd = _v * (n - 1) + _add;
    }
    let _list = [];
    for (let i = 0; i < n; i++) {
        let _nList = []
        for (let j = 0; j < _cd; j++) {
            _nList.push(``);
        }
        _list.push(_nList);
    }
    let _i = 0, _j = 0, _k = 0;
    let fx = true;
    while(_k < _len) {
        _list[_i][_j] = s[_k];
        
        if (fx) {
            _i++;
        } else {
            _i--;
            _j++;
        }
        _k++;
        if (_i >= _list.length - 1) {
            fx = false
        }
        if (_i <= 0) {
            fx = true
        }
    }
    let _str = '';
    for (let i = 0; i < _list.length; i++) {
        _str += _list[i].join('');
    }
    return _str;
};

