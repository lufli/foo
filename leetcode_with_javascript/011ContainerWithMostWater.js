/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left = 0;
    var right = height.length-1;
    var ans = 0;
    
    while(left<right) {
        var current = Math.min(height[left], height[right])*(right-left);
        ans = Math.max(ans, current);
        if(height[left]>height[right]) {right--;}
        else {left++;}
    }
    return ans;

};