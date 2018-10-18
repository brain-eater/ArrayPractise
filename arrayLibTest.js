let assert= require("assert");
let lib = require("./arrayLib");
let {selectAlternateNum} = lib;
let {generateFibSeries} = lib;
let {fibReverse} = lib;
let {max} = lib;
let {min} = lib;
let {countEven} = lib;
let {countOdd} = lib;
let {average} = lib;
let {mapLengths} = lib;
let {countAboveThreshold} = lib;
let {countBelowThreshold} = lib;
let {printReverseList} = lib;
let {reverseList} = lib;
let {getIndex} = lib;

//to test reverseList(list)
assert.deepEqual(reverseList([2,4,2,4,6,1]),[1,6,4,2,4,2]);
assert.deepEqual(reverseList(["Tilak","Puli"]),["Puli","Tilak"]);

//to test getIndex(element)
assert.deepEqual(getIndex([2,4],4),2);

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
assert.deepEqual(max([6,2,3]),6);
assert.deepEqual(max([6,2,3,62]),62);
assert.deepEqual(max([6,2,3,61,535]),535);

//to test min(numbers)
assert.deepEqual(min([6,2,3]),2);
assert.deepEqual(min([6,1,3,62]),1);
assert.deepEqual(min([6,2,3,-1,535]),-1);


// to test average(numbers)
assert.deepEqual(average([2,4]),3);
assert.deepEqual(average([34,43,5,2,4]),17.6);
assert.deepEqual(average([2,43,43,44]),33);

//to test MapLength(array)
assert.deepEqual(mapLengths(["Tilak"]),[5]);
assert.deepEqual(mapLengths(["Tilak","Puli"]),[5,4]);
assert.deepEqual(mapLengths(["Tilak","Puli","Venkat"]),[5,4,6]);

//to test countEven(numbers)
assert.deepEqual(countEven([2,3]),1);
assert.deepEqual(countEven([2,4,34,43,2,3]),4);

//to test countOdd(numbers)
assert.deepEqual(countOdd([2,3]),1);
assert.deepEqual(countOdd([2,4,34,43,2,3]),2);

//to test countAboveThreshold(numbers)
assert.deepEqual(countAboveThreshold([2,3,5],3),1);
assert.deepEqual(countAboveThreshold([2,3,5,1,53],3),2);

//to test countBelowThreshold(numbers)
assert.deepEqual(countBelowThreshold([2,3,5],3),1);
assert.deepEqual(countBelowThreshold([2,3,5,1,53],3),2);


