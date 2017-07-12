/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.memory = new Array();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.memory.includes(val)) return false;
    return Boolean(this.memory.push(val));
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    var index = this.memory.indexOf(val);
    if(index<0) return false;
    else {
        this.memory.splice(index, 1);
        return true;
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    var index = Math.round(Math.random()*(this.memory.length-1));
    return this.memory[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
