let readlineSync = require("readline-sync");
let name1 = readlineSync.question('Enter first name: ');
let name2 = readlineSync.question('Enter last name: ');

console.log(`Hello, ${name1 + ' ' + name2}!`);
