/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var obj = {}, t1 = undefined, t2 = undefined;
    for(let i = 0, j = nums.length; i < j; i++) {
        const _ele = nums[i];
        const _n = target - _ele;
        if (obj[_n]) {
            t1 = Number(obj[_n]);
            t2 = i;
            break;
        } else {
            obj[_ele] = i + '';
        }
    }
    return [t1, t2]
};

