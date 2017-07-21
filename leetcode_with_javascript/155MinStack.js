/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = 0;
    this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.arr.length===0) {
        this.min = x;
        this.arr.push(0);
    }
    else {
        this.arr.push(x-this.min);
        if(x<this.min) this.min=x;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.arr.length===0) return;
    var current = this.arr.pop();
    var res = current+this.min;
    if(current<0) {
        res = this.min;
        this.min = this.min-current;
    }
    return res;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.arr.length===0) return null;
    if(this.arr[this.arr.length-1]<0) return this.min;
    return this.arr[this.arr.length-1]+this.min;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */