function conditionalSum (number, condition) {
  var sum = 0;
  number.forEach( function(number) {
    if(condition === "even" && number % 2 === 0) {
      sum += number;
    } else if (condition === 'odd' && number % 2 !== 0) {
      sum +=number;
    }
  });
  return sum;

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));