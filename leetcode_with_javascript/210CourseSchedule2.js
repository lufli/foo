/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var ans = [];
    var degrees = Array.apply(null, Array(numCourses)).map(Number.prototype.valueOf, 0);
    for(var i=0;i<prerequisites.length;i++) {
        degrees[prerequisites[i][0]]++;
    }
    var courses = [];
    for(var i=0;i<degrees.length;i++) {
        if(degrees[i]===0) courses.push(i);
    }
    console.log(courses);
    while(courses.length!==0) {
        var current = courses.pop();
        ans.push(current);
        for(var i=0;i<prerequisites.length;i++) {
            if(prerequisites[i][1] === current) {
                degrees[prerequisites[i][0]]--;
                if(degrees[prerequisites[i][0]]===0) courses.push(prerequisites[i][0]);
            }
        }
    }
    return ans.length===numCourses? ans : [];
};