let assert= require("assert");
let lib = require("./arrayLib");
let {selectAlternateNum} = lib;
let {generateFibSeries} = lib;
let {fibReverse} = lib;

//to test selectAlternateNum()
assert.deepEqual(selectAlternateNum([1,2]),[1]);
assert.deepEqual(selectAlternateNum([1,2,3]),[1,3]);
assert.deepEqual(selectAlternateNum([1,2,3,5,7]),[1,3,7]);

//to test generateFibSeries(length)
assert.deepEqual(generateFibSeries(3),[0,1,1]);
assert.deepEqual(generateFibSeries(4),[0,1,1,2]);
assert.deepEqual(generateFibSeries(5),[0,1,1,2,3]);
assert.deepEqual(generateFibSeries(6),[0,1,1,2,3,5]);
//to test fibReverse(length)
assert.deepEqual(fibReverse(3),[1,1,0]);
assert.deepEqual(fibReverse(4),[2,1,1,0]);
assert.deepEqual(fibReverse(5),[3,2,1,1,0]);
assert.deepEqual(fibReverse(6),[5,3,2,1,1,0]);

//to test max(numbers)
assert.deepEqual(max([6,2,3,61,535]),535);
