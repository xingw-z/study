/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (!nums || nums.length <= 0) {
        return nums;
    }
    nums = nums.sort((x, y) => x - y);
    let res = []
    let hash = {}
    for (let i1 = 0, j1 = nums.length - 1; i1 < j1; i1++) {
        for (let i2 = i1 + 1, j2 = nums.length; i2 < j2; i2++) {
            const _ele = -(nums[i1] + nums[i2]);
            if (hash[nums[i2]] !== undefined) {
                res.push([...hash[nums[i2]], nums[i2]])
                hash[_ele] = undefined;
            } else {
                hash[_ele] = [nums[i1], nums[i2]];
            }
        }
    }
    if (res.length <= 0) {
        return []
    }
    let _str = res.join('(').split('(');
    let _arr = [...new Set(_str)];
    for (let i = 0, j = _arr.length; i < j; i++) {
        if (!_arr[i]) {
            continue;
        }
        _arr[i] = JSON.parse('[' + _arr[i] + ']')
    }

    return _arr;
}

