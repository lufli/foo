/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var digit;
    for(var i=nums.length-1;i>=1;i--) {
        if(nums[i]>nums[i-1]) { digit = i; break; }
    }

    if(!digit) { nums.sort(function(a,b) {return a-b;}); return; }
    var current = nums[digit];
    var current_index = digit;
    for(var i=digit+1;i<nums.length;i++) {
        if(nums[i]>nums[digit-1] && nums[i]<current) {
            current = nums[i];
            current_index = i;
        }
    }

    var buff = nums[digit-1];
    nums[digit-1] = nums[current_index];
    nums[current_index] = buff;

    var arr = nums.slice(0, digit).concat(nums.slice(digit, nums.length).sort(function(a,b) {return a-b;}));
    for(var i=0;i<nums.length;i++) {
        nums[i] = arr[i];
    }
};
