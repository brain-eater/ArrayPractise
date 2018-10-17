let reverseList = require("./arrayLib").reverseList;
let assert = require("assert");
assert.deepEqual(reverseList([1,2,3]),[3,2,1]);
assert.deepEqual(reverseList([10,-2,3,31,23]),[23,31,3,-2,10]);
