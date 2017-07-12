/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    //console.log(matrix);
    var ans = 0;
    for(var i=0;i<matrix.length;i++) {
        for(var j=0;j<matrix[0].length;j++) {
            if(matrix[i][j]==='1') ans = Math.max(ans, helper(matrix, i, j, 2));
        }
    }
    return ans;
};

var helper = function(matrix, x, y, size) {
    for(var i=0;i<size;i++) {
        if(y+i>=matrix[0].length || x+i>=matrix.length) return (size-1)*(size-1);
        if(x+size-1>=matrix.length || y+size-1>=matrix[0].length) return (size-1)*(size-1);
        if(matrix[x+size-1][y+i]!=='1') return (size-1)*(size-1);
        if(matrix[x+i][y+size-1]!=='1') return (size-1)*(size-1);
    }
    return helper(matrix, x, y, size+1);
}
