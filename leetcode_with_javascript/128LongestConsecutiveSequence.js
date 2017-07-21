/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var record = {};
    var ans = 0;
    for(var item in nums) {
        if(!(nums[item] in record)) {
            var left = nums[item]-1 in record? record[nums[item]-1] : 0;
            var right = nums[item]+1 in record? record[nums[item]+1] : 0;
            var current = left + right + 1;
            ans = Math.max(ans, current);
            record[nums[item]] = current;
            // this part is important
            nums[item]-left in record? record[nums[item]-left] = current: null;
            nums[item]+right in record? record[nums[item]+right] = current: null;
        }
    }
    return ans;
};