/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var record = Array.apply(null, Array(nums.length)).map(Number.prototype.valueOf, 0);
    record[nums.length-1] = 1;
    for(var i=nums.length-2;i>=0;i--) {
        for(var j=1;j<=nums[i];j++) {
            if(record[i+j]===1) {
                record[i] = 1;
                break;
            }
        }
    }
    return record[0]===1;
};
