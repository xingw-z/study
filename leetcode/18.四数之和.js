/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let val = nums[0] + nums[1] + nums[2] + nums[3];
    let i = 0;
    let len = nums.length;
    let list = [];
    let qsort = arr => arr.length > 1 ? [...qsort(arr.filter(item => item < arr[0])), ...arr.filter(item => item === arr[0]), ...arr.filter(item => item > arr[0])] : arr;
    nums = qsort(nums);
    while(i < len - 2) {
        let j = i + 1;
        while(j < len - 2) {
            let start = j + 1;
            let end = len - 1;
            while(start < end) {
                let temp = nums[i] + nums[j] + nums[start] + nums[end];    
                if (temp === target) {
                    list.push([nums[i], nums[j], nums[start], nums[end]])
                }
                if (temp < target) {
                    while(nums[start] === nums[++start]);
                } else {
                    while(nums[end] === nums[--end]);
                }
            }
            while(nums[j] === nums[++j]);
        }
        while(nums[i] === nums[++i]);
    }
    return list;
};

