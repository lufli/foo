/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var ans = 0;
    for(var i=0;i<nums.length;i++) {
        ans ^= nums[i];
    }
    return ans;
};