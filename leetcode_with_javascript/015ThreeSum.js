/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var ans = [];
    nums.sort(function(a, b){
        return a-b;
    });
    for(var i=0;i<nums.length-2;i++) {
        if(nums[i]===nums[i-1]) { continue; }
        var target = nums[i];
        var left = i+1;
        var right = nums.length-1;
        while(left<right) {
            if(nums[left]+nums[right]+target===0) ans.push([target, nums[left], nums[right]]);
            if(nums[left]+nums[right]+target>0) {right--; while(nums[right]===nums[right+1]) right--;}
            else { left++; while(nums[left]===nums[left-1]) left++;}

        }
    }
    return ans;
};
