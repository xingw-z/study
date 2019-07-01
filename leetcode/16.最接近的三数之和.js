/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let i = 0;
    let len = nums.length;
    let ttt = nums[0] + nums[1] + nums[2];
    // nums = nums.sort((x, y) => x - y);
    let qsort = arr => arr.length > 1 ? [...qsort(arr.filter(x => x < arr[0])), ...arr.filter(x => x === arr[0]), ...qsort(arr.filter(x => x > arr[0]))]: arr;
    nums = qsort(nums);
    while (i < len - 2){
        let start = i + 1;
        let end = len - 1;
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (Math.abs(target - sum) < Math.abs(target - ttt)) {
                ttt = sum;
            }
            if (sum > target) {
                while(nums[end] === nums[--end]);
            } else if (sum < target) {
                while(nums[start] === nums[++start]);
            } else {
                return sum;
            }
        }
        while(nums[i] === nums[++i]);
    }
    return ttt;
};

