/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    var left = 0, right = arr.length-1, mid = left+Math.floor((right-left)/2);
    while(left<right) {
        mid = left+Math.floor((right-left)/2);
        if(arr[mid]===x) break;
        else if(arr[mid]>x) {
            right = mid-1;
        }
        else {
            left = mid+1;
        }
    }
    if(arr[mid]!==x && mid+1<arr.length) {
        mid = Math.abs(arr[mid]-x)>Math.abs(arr[mid+1]-x)? mid+1 : mid;
    }
    left = mid-1;
    right = mid+1;
    var ans = [];
    while(ans.push(arr[mid])<k) {
        if(left<0 || Math.abs(arr[left]-x)>Math.abs(arr[right]-x)) { mid = right; right++;}
        else if(right>=arr.length || Math.abs(arr[left]-x)<=Math.abs(arr[right]-x)) { mid = left; left--;}
    }
    ans.sort((a,b) => {return a-b});
    return ans;
};
