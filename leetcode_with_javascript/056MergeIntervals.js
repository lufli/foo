/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(intervals.length<=1) return intervals;
    var res = [];
    intervals.sort(function(a, b) {
        return a.start>b.start? 1:-1;
    });
    var left = intervals[0].start;
    var right = intervals[0].end;
    for(var i=1;i<intervals.length;i++) {
        if(intervals[i].start>right) {
            res.push([left, right]);
            left = intervals[i].start;
            right = intervals[i].end;
        }
        else {
            right = Math.max(right, intervals[i].end);
        }
    }
    res.push([left, right]);
    return res;
};