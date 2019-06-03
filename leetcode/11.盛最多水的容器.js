/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let _max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let _min = height[i] < height[j] ? height[i] : height[j];
            let _val = _min * (j - i);
            if (_val > _max) {
                _max = _val
            }
        }
    }
    return _max;
};

