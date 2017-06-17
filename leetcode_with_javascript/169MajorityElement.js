/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var buff = nums[0];
    var count = 1;
    
    //console.log(buff, count);
    for(var i=1;i<nums.length;i++) {
        if(nums[i]!==buff) {
            count--;
            if(count===0) {buff=nums[i];count=1;}
        }
        else {
            count++;
        }
        //console.log(buff, count);
    }
    return buff;
};