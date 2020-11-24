function askName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let name1 = askName('What is your first name? ');
let name2 = askName('Input last name please: ');
console.log(`Hello, ${name1 + ' ' + name2}!`);