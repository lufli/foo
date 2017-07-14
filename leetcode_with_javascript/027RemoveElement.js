/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var left = 0;
    while(nums[left]!==val && left<nums.length) left++;
    var right = left+1;
    for(right;right<nums.length;right++) {
        if(nums[right]!==val) {
            nums[left]=nums[right];
            left++;
        }
    }
    return left;
};
