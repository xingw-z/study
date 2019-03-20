/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (24.00%)
 * Total Accepted:    42.1K
 * Total Submissions: 170K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) {
        return s;
    }
    if (s === hw(s)) {
        return s;
    }
    let _res = s[0];
    for (let i = 0, j = s.length; i < j; i++) {
        
        let _start = i, _end = i;
        
        while(_start >= 0 && _end <= j && s[_start] === s[_end]) {
            if (_end - _start + 1 > _res.length) {
                _res = s.substring(_start, _end + 1);
            }
            _start--;
            _end++;
        }

        let _s2 = i, _e2 = i + 1;
        while(_s2 >= 0 && _e2 <= j && s[_s2] === s[_e2]) {
            if (_e2 - _s2 + 1 > _res.length) {
                _res = s.substring(_s2, _e2 + 1);
            }
            _s2--;
            _e2++;
        }
    }
    function hw(x) {
        return x.split('').reverse().join('');
    }
    console.log(_res)
    return _res
};

