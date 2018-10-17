selectedOddNumbers = require("./arrayLib").selectOddNumbers;
assert = require("assert");
assert.deepEqual([1,3,7],selectedOddNumbers([2,54,1,3,66,2,7]));
