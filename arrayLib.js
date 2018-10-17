const isOdd = function(number){
  return number%2;
}

const selectOddNumbers = function(numbers){
  let oddNumbers = [];
  let index = 0;
  for(number of numbers){
    if(isOdd(number)){
      oddNumbers[index++] = number;
    }
  }
  return oddNumbers;
}

exports.selectOddNumbers = selectOddNumbers;
exports.isOdd = isOdd;
