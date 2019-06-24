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
    let res = []
    let _len = nums.length;
    var _qsort = arr => arr.length > 1 ? [..._qsort(arr.filter(a => a < arr[0])), ...arr.filter(a => a === arr[0]), ..._qsort(arr.filter(a => a > arr[0]))] : arr;
    nums = _qsort(nums);
    if (nums[0] <= 0 && nums[_len - 1] >=0) {
        for (let i = 0; i < _len - 2;) {
            if (nums[i] > 0) break
            let first = i + 1;
            let last = _len - 1;
            do {
                if (first >= last || nums[i] * nums[last] > 0) break;
                let result = nums[i] + nums[first] + nums[last];
                if (result === 0) {
                    res.push([nums[i], nums[first], nums[last]]);
                }
                if (result <= 0) {
                    while (first < last && nums[first] === nums[++first]){}
                } else {
                    while (first < last && nums[last] === nums[--last]){}
                }
            }while(first < last)
            while(nums[i] === nums[++i]){}
        }
    }
    return res;
}

