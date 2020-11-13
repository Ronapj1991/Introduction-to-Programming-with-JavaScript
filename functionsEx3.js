function multiply(number1, number2) {
  return number1 * number2;
}

function askNumber(prompt) {
  let readlineSync = require('readline-sync');
  let number =  readlineSync.question(prompt);
  number = parseInt(number);
  return number;
}

let number1 = askNumber('Enter a number: ');
let number2 = askNumber('Enter a 2nd number: ');
console.log(`${number1} times ${number2} equals to ${multiply(number1, number2)}`);