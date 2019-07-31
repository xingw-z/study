/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let phone = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    
    let output = [];

    function backtrack(zh, next_digits) {
        if (next_digits.length === 0) {
            output.push(zh)
        } else {
            let digit = next_digits.substring(0, 1);
            let letters = phone[digit];
            for(let i = 0; i < letters.length; i++) {
                let letter = phone[digit].substring(i, i + 1);
                backtrack(zh + letter, next_digits.substring(1));
            }
        }
    }

    function func(d) {
        if (d.length != 0) {
            backtrack('', d)
        }
        return output;
    }
    
    return func(digits);
};

