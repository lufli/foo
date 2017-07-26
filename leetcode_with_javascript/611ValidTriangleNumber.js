/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    var ans = 0;
    // sort the array
    nums.sort(function(a,b) {
        return a-b;
    });
    // console.log(nums);
    // pick one num
    for(var i=0;i<nums.length-2;i++) {
        ans += checkFromIndex(nums, i);
    } 
    
    return ans;
};

var checkFromIndex = function(nums, index) {
    var count = 0;
    for(var left=index+1;left<nums.length-1;left++) {
        for(var right=left+1;right<nums.length;right++) {
            if(nums[index]+nums[left]>nums[right]) {
                count++;
            }
            else {
                break;
            }
        }
    }
    return count;
}