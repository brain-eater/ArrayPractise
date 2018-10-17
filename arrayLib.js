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

exports.selectOddNumbers = selectOddNumbers;
exports.isOdd = isOdd;
exports.selectEvenNumbers = selectEvenNumbers;
exports.isEven = isEven;
exports.sum= sum;
