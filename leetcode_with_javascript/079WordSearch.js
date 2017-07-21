/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var record = new Array();
    while(record.push(Array.apply(null, Array(board[0].length)).map(Number.prototype.valueOf, 0))<board.length) {}
    for(var i=0;i<board.length;i++) {
        for(var j=0;j<board[0].length;j++) {
            if(board[i][j] === word.charAt(0)) {
                record[i][j] = 1;
                if(searchWord(i, j, record, board, word, 1)) return true;
                else record[i][j] = 0;
            }
        }
    }
    return false;
};
var resetRecord = function(record) {
    for(var i=0;i<board.length;i++) {
        for(var j=0;j<board[0].length;j++) {
            board[i][j] = 0;
        }
    }
}
var searchWord = function(x, y, record, board, word, index) {
    if(index === word.length) return true;
    // check x+1, y
    if(x+1<record.length && record[x+1][y]===0 && board[x+1][y]===word.charAt(index)) {
        record[x+1][y] = 1;
        if(searchWord(x+1, y, record, board, word, index+1)) return true;
        else record[x+1][y] = 0;
    }
    // check x-1, y
    if(x-1>=0 && record[x-1][y]===0 && board[x-1][y]===word.charAt(index)) {
        record[x-1][y] = 1;
        if(searchWord(x-1, y, record, board, word, index+1)) return true;
        else record[x-1][y] = 0;
    }
    // check x, y+1
    if(y+1<record[0].length && record[x][y+1]===0 && board[x][y+1]===word.charAt(index)) {
        record[x][y+1] = 1;
        if(searchWord(x, y+1, record, board, word, index+1)) return true;
        else record[x][y+1] = 0;
    }
    // check x, y-1
    if(y-1>=0 && record[x][y-1]===0 && board[x][y-1]===word.charAt(index)) {
        record[x][y-1] = 1;
        if(searchWord(x, y-1, record, board, word, index+1)) return true;
        else record[x][y-1] = 0;
    }  
};