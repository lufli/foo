/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    var record = Array.apply(null, Array(M.length)).map(Boolean.prototype.valueOf, false);
    var count = 0;
    
    // while there is any person in visit_list
    while(pickPerson(record)!==null) {
        var index = pickPerson(record);
        var visit_list = [index];
        record[index] = true;  
        count++;
        while(visit_list.length>0) {
            // - pick one person, and use BFS
            var current = visit_list.pop();
            // console.log(current);
            for(var i=0;i<M.length;i++) {
                if(M[current][i]===1 && record[i]===false) {
                    visit_list.push(i);
                    record[i] = true;
                }
            }
        }
    }
    return count;
};

var pickPerson = function(record) {
    for(var i=0;i<record.length;i++) {
        if(record[i]===false) return i;
    }
    return null;
}