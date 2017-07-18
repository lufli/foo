/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a, b) {
        return a-b;
    });
    console.log(nums);
    var ans;
    for(var i=0;i<nums.length;i++) {
        var left = i+1;
        var right = nums.length-1;
        while(left<right) {
            if(ans === undefined || Math.abs(nums[i]+nums[left]+nums[right]-target)<Math.abs(ans-target)) {
                ans = nums[i]+nums[left]+nums[right];
            }
            if(nums[i]+nums[left]+nums[right]>target) right--;
            else left++;
        }
    }
    return ans;
};
