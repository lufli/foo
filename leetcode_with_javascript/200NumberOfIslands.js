/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var ans = 0;
    var record = new Array(grid.length);
    for(var i=0;i<record.length;i++) {
        record[i] = new Array(grid[0].length);
    }
    
    for(var i=0;i<record.length;i++) {
        for(var j=0;j<record[0].length;j++) {
            if(record[i][j]!==0 && grid[i][j]==='1') {
                check(i, j, record, grid);
                ans++;
            }
        }
    } 
    return ans;
};

var check = function(x, y, record, grid) {
    record[x][y] = 0;
    if(x+1<record.length && record[x+1][y]!==0 && grid[x+1][y]==='1') check(x+1, y, record, grid);
    if(x-1>=0 && record[x-1][y]!==0 && grid[x-1][y]==='1') check(x-1, y, record, grid);
    if(y+1<record[0].length && record[x][y+1]!==0 && grid[x][y+1]==='1') check(x, y+1, record, grid);
    if(y-1>=0 && record[x][y-1]!==0 && grid[x][y-1]==='1') check(x, y-1, record, grid);
}