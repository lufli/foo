/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var record = [];
    for(var i=0;i<nums.length;i++) {
        record.push([i, nums[i]]);
    }
    record.sort(function(a, b) {
        return a[1]-b[1];
    });
    
    var left = 0, right = record.length-1;
    while(left<right) {
        if(record[left][1]+record[right][1]===target) { return [record[left][0], record[right][0]]; }
        if(record[left][1]+record[right][1]<target) { left++; }
        else { right--; }
    }
    
};