function findResultNum(target) {
  var record = {};
  for(var currentNum=1;currentNum<target;currentNum++) {
    // 遍历数组中每一个数字
    var updates = [];
    for(var item in record) {
      // 新的数字来了，用新的数字先升级下我们的hashmap
      // 比如说原来的hashmap{1:1, 2:1, 3:1}, 新的数字是3
      // 升级后我们又可以有了新的和 4,5,6, 所以新的hashmap{1:1, 2:1, 3:1,4:1,5:1,6:1}
      var sumNum = Number(item) + currentNum;
      // // newNum<=target 为了节约空间，大于target的结果对我们没有意义
      if(sumNum<=target) {
        // 记录下来
        updates[sumNum] = record[item];
      }
    }
    // 根据记录升级hashmap
    for(var update in updates) {
      record[update] = record[update] + updates[update] || updates[update];
    }

    // 再看看这个新的数字hashmap里有没有
    // 有 3，那么新的hashmap就是{1:1, 2:1, 3:2,4:1,5:1,6:1}
    record[currentNum] = record[currentNum]+1 || 1;

    //console.log(record);
  }
  return record[target] || 0;
}

// 时间复杂度n^2, 空间复杂度target。如果target太大会很不爽

console.log(findResultNum(200));
