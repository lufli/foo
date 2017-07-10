/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var record = Array.apply(null, Array(numCourses)).map(Number.prototype.valueOf, 0);
    for(var i=0;i<prerequisites.length;i++) {
        record[prerequisites[i][0]]++;
    }
    var checkList = [];
    for(var i=0;i<numCourses;i++) {
        if(record[i]===0) checkList.push(i);
    }
    while(checkList.length!==0) {
        var buff = [];
        var current = checkList.shift();
        for(var i=0;i<prerequisites.length;i++) {
            if(prerequisites[i][1]===current) {
                record[prerequisites[i][0]]--;
                if(record[prerequisites[i][0]]===0) {
                    buff.push[i];
                    checkList.push(prerequisites[i][0]);
                }
            }
        }
        while(buff.length>0) {
            var index = buff.pop();
            prerequisites.splice(index, 1);
        }
    }

    return record.reduce(function(a, b){
        return a+b;
    }, 0)===0;
      
};
