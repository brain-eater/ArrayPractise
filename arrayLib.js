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

const max = function(numbers){
  let max = numbers[0];
  for( let number of numbers){
    if(max < number){
      max = number
    }
  }
  return max;
}

const average = function(numbers){
  let total = sum(numbers);
  return total/numbers.length;
}

exports.average = average;
exports.max = max ;
exports.fibReverse = fibReverse;
exports.generateFibSeries =generateFibSeries;
exports.reverseList = reverseList;
exports.selectOddNumbers = selectOddNumbers;
exports.isOdd = isOdd;
exports.selectEvenNumbers = selectEvenNumbers;
exports.isEven = isEven;
exports.sum= sum;
exports.selectAlternateNum = selectAlternateNum;
