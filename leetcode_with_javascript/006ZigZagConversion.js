/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var record = [];
    for(var i=0;i<numRows;i++) {
        record.push("");
    }
    var count = 0;
    while(count<s.length) {
        
        for(var i=0;i<numRows;i++) {
            //console.log("first loop"+i);
            record[i]+=s.charAt(count);
            count++;
            if(count>=s.length) break;
        }
        if(count>=s.length) break;
        for(var i=numRows-2;i>0;i--) {
            //console.log("second loop"+i);
            record[i]+=s.charAt(count);
            count++;
            if(count>=s.length) break;
        }
        
    }
    var ans = '';
    for(var i=0;i<record.length;i++) {
        ans += record[i];
    }
    return ans;

};