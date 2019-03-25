/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (33.07%)
 * Total Accepted:    42K
 * Total Submissions: 123.4K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var qsort = _arr => _arr.length > 1 ? [...qsort(_arr.filter(x => {
        return x < _arr[0]
    })),
    ..._arr.filter(x => {
        return x === _arr[0]
    }), 
    ...qsort(_arr.filter(x => {
        return x > _arr[0]
    }))] : _arr;
    // var arr = [...nums1, ...nums2].sort((x, y) => x - y);
    var arr = qsort([...nums1, ...nums2]);
    var _len = arr.length;
    let _b = _len / 2;
    if (_len % 2 === 0) {
        return (arr[_b - 1] + arr[_b]) / 2
    } else {
        return arr[Math.floor(_b)];
    }
    
};

