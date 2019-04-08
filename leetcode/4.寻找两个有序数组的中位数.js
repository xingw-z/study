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

    let arr1 = nums1, arr2 = nums2;
    let n = arr1.length, m = arr2.length;

    if (n > m) {
        return findMedianSortedArrays(arr2, arr1)
    }

    let L1, L2, R1, R2, c1, c2, lo = 0, hi = 2 * n;
    while (lo <= hi) {
        c1 = ~~((lo + hi) / 2);
        c2 = m + n - c1;
        L1 = (c1 == 0) ? Number.MIN_SAFE_INTEGER : arr1[ ~~((c1-1)/2) ];
        R1 = (c1 == 2 * n) ? Number.MAX_SAFE_INTEGER : arr1[ ~~(c1/2)];
        L2 = (c2 == 0) ? Number.MIN_SAFE_INTEGER : arr2[ ~~((c2-1)/2)];
        R2 = (c2 == 2 * m) ? Number.MAX_SAFE_INTEGER : arr2[ ~~(c2/2) ];
        
        if (L1 > R2) {
            hi = c1 - 1;
        } else if (L2 > R1) {
            lo = c1 + 1;
        } else break;
    }
    return (Math.max(L1, L2) + Math.min(R1, R2)) / 2.0;
};

