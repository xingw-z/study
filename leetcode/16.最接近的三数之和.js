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
    function abss(a) {
        return (a^(a>>31))-(a>>31);
    }
    let tiao = false;
    while(i < len - 2) {
        let first = i + 1;
        let last = len - 1;
        while(first < last) {
            
            let result = nums[i] + nums[first] + nums[last];
            
            if (result === 0) {
                ttt = result;
                tiao = true;
                break;
            }
            let _cy = abss(result - target);
            let _cy2 = abss(ttt - target);
            if (abss(_cy2) > abss(_cy)) {
                ttt = result;
            }

            while(nums[first] === nums[++first]) {};
        }
        if (tiao) {
            break;
        }
        while(nums[i] === nums[++i]) {};
    }
    return ttt;
};

