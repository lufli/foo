/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var index = 0;
    while(nums[index]!==0 && index<nums.length) {index++;}
    var left = index;
    var right = index+1;
    
    while(right<nums.length) {
        if(nums[right]!==0) {
            nums[left] = nums[right];
            left++;
        }
        right++;
    }
    
    for(;left<nums.length;left++) {nums[left]=0;}
};