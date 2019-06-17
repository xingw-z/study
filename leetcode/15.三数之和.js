/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let _list = [];
    for (let i = 0, j = nums.length; i < j ; i++) {
        let _x = nums[i];
        for (let i2 = i + 1; i2 < j; i2++) {
            let _y = nums[i2];
            for (let i3 = i2 + 1; i3 < j; i3++) {
                if ((_x + _y + nums[i3]) === 0) {
                    _list.push(JSON.stringify([_x, _y, nums[i3]].sort((a, b) => a - b)));
                }
            }
        }
    }
    _list = [...new Set(_list)];
    for (let i = 0, j = _list.length; i < j; i++) {
        _list[i] = JSON.parse(_list[i]);
    }
    return _list;
};

