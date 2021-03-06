const isOdd = function(number){
  return number%2;
}

const isEven = function(number){
  return !(number%2);
}

const sum = function(numbers){
  let sum = 0;
  for(let number of numbers){
    sum = sum + number ;
  }
  return sum;
}

const selectEvenNumbers = function(numbers){
  let evenNumbers = [];
  let index = 0;
  for(let number of numbers){
    if(isEven(number)){
      evenNumbers[index++] = number;
    }
  }
  return evenNumbers;
}


const selectOddNumbers = function(numbers){
  let oddNumbers = [];
  let index = 0;
  for(let number of numbers){
    if(isOdd(number)){
      oddNumbers[index++] = number;
    }
  }
  return oddNumbers;
}

const selectAlternateNum = function(numbers){
  alternateNumbers = [];
  let index = 0;
  for(altIndex = 0 ; altIndex < numbers.length ; altIndex=altIndex+2){
    alternateNumbers[index++] = numbers[altIndex];
  }
  return alternateNumbers;
}
const reverseList = function(numbers){
  let reversedList = [];
  let length = numbers.length;
  for(let index = length-1 ; index >= 0 ; index--){
    reversedList[length - index - 1] = numbers[index];
  }
  return reversedList;
}

const printReverseList = function(list){
  console.log(reverseList(list));
}


const generateFibSeries = function(length){
  previousNum = 1;
  secondPrevNum = 0;
  fibSeries = [secondPrevNum,previousNum];
  for(let sno = 2; sno < length ; sno++){
    fibSeries[sno] = previousNum + secondPrevNum;
    previousNum = secondPrevNum + (secondPrevNum = previousNum) ;
  }
  return fibSeries;
}

const fibReverse = function(length){
  return reverseList(generateFibSeries(length));
}

const countEven = function(numbers){
  oddNumbers = selectEvenNumbers(numbers);
  return oddNumbers.length;
}

const countOdd = function(numbers){
  oddNumbers = selectOddNumbers(numbers);
  return oddNumbers.length;
}

const max = function(numbers){
  let max = numbers[0];
  for( let number of numbers){
    if(max < number){
      max = number
    }
  }
  return max;
}

const min = function(numbers){
  let min = numbers[0];
  for( let number of numbers){
    if(min > number){
      min = number
    }
  }
  return min;
}


const mapLengths = function(list){
  let lengths = [];
  for(let element of list){
    lengths.push(element.length);
  }
  return lengths;
}

const average = function(numbers){
  let total = sum(numbers);
  return total/numbers.length;
}

const countBelowThreshold =function(numbers,threshold){
  let count = 0;
  for(number of numbers){
    if(number > threshold){
      count++;
    }
  }
  return count;
}

const getIndex = function(list,element){
  for(index in list){
    if(list[index] == element){
      return index;
    }
  }
  return -1;
}



const countAboveThreshold =function(numbers,threshold){
  let count = 0;
  for(number of numbers){
    if(number > threshold){
      count++;
    }
  }
  return count;
}

const isInAscending = function(numbers){ 
  for(index = 0 ;index < numbers.length-1; index++){
    if(numbers[index] > numbers[index+1]){
      return false;
    }
  }
  return true;
}

const isInDescending = function(numbers){ 
  for( let index = 0 ;index < numbers.length-1; index++){
    if(numbers[index] < numbers[index+1]){
      return false;
    }
  }
  return true;
}


const extract = function(number){
  let digits = [];
  while(number != 0){
    digits.push(number%10);
    number = number/10;
    number = Math.floor(number)
  }
  digits = reverseList(digits);
  return digits;
}

const unique = function(numbers){
  let uniqueNumbers = [];
  for(number of numbers){
    if(getIndex(uniqueNumbers,number) == -1){
      uniqueNumbers.push(number);
    }
  }
  return uniqueNumbers;
}

const intersection = function(set1,set2){
  set1 = unique(set1);
  set2 = unique(set2);
  let intersectionSet = [];
  for(let element of set1){
    if(getIndex(set2,element) != -1 ){
      intersectionSet.push(element);
    }
  }
  return intersectionSet;
}

const difference = function(set1,set2){
  set1 = unique(set1);
  set2 = unique(set2);
  let differenceSet = [];
  set1Dif = differenceFrom(set1,set2);
  differenceSet = differenceSet.concat(set1Dif);
  set2Dif = differenceFrom(set2,set1);
  differenceSet = differenceSet.concat(set2Dif);
  return differenceSet;
}

const differenceFrom = function(set1,set2){
  let differenceSet = [];
 for(let element of set1){
    if(getIndex(set2,element) == -1 ){
      differenceSet.push(element);
    }
  }
  return differenceSet;
}


const union = function(set1,set2){
  let unionSet = [];
  unionSet = unionSet.concat(set1);
  unionSet = unionSet.concat(set2);
  return unique(unionSet);
}

const isSubSet = function(powerSet,set){
  for(element of set){
    if(getIndex(powerSet,element) == -1){
      return false;
    }
  }
  return true;
}

const findSmaller = function(list1,list2){
  if(list1.length <= list2.length){
    return list1;
  }
  return list2;
}

const findLarger = function(list1,list2){
  if(list1.length > list2.length){
    return list1;
  }
  return list2;
}


const zip = function(list1,list2){
  zippedList = [];
  smallerSet = findSmaller(list1,list2);
  largerSet = findLarger(list1,list2);
  for(index in smallerSet){
    zippedList.push([smallerSet[index],largerSet[index]]);
  }
  return zippedList;
}

const rotate = function(list,limitIndex){
  for(let index = 0;index < limitIndex ; index++){
    list.push(list.shift());
  }
  return list;
}

const partitioner = function(numbers,threshold){
  let partitionedNumbers = [[],[]];
  for(number of numbers){
    let isGreater = 1;
    if(number <= threshold){
      isGreater = 0;
    }
    partitionedNumbers[isGreater].push(number);
  }
  return partitionedNumbers;
}



exports.partitioner = partitioner;
exports.isSubSet = isSubSet;
exports.union = union;
exports.intersection = intersection;
exports.countEven = countEven;
exports.mapLengths = mapLengths;
exports.average = average;
exports.max = max ;
exports.min  = min ;
exports.fibReverse = fibReverse;
exports.generateFibSeries =generateFibSeries;
exports.reverseList = reverseList;
exports.selectOddNumbers = selectOddNumbers;
exports.isOdd = isOdd;
exports.selectEvenNumbers = selectEvenNumbers;
exports.isEven = isEven;
exports.sum = sum;
exports.selectAlternateNum = selectAlternateNum;
exports.countOdd = countOdd ;
exports.countAboveThreshold = countAboveThreshold; 
exports.countBelowThreshold = countBelowThreshold; 
exports.printReverseList = printReverseList;
exports.getIndex = getIndex;
exports.isInAscending = isInAscending;
exports.extract = extract;
exports.isInDescending = isInDescending;
exports.unique = unique;
exports.difference = difference;
exports.zip = zip;
exports.rotate = rotate;
