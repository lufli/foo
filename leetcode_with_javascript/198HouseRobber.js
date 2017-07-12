/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length<2) {
        return nums[0] || 0;
    }
    var did = nums[0];
    var undo = 0;
    for(var i=1;i<nums.length;i++) {
        var did_buff = undo+nums[i];
        var undo_buff = Math.max(did, undo);
        did = did_buff;
        undo = undo_buff;
    }
    return Math.max(did, undo);
};
