let number = 4936;

let thousands = number % 10;
number = (number - thousands) / 10;
console.log(thousands);

let hundreds = number % 10;
number = (number - hundreds) / 10;
console.log(hundreds);

let tens = number % 10;
number = (number - tens) / 10;
console.log(tens);

let ones = number;
console.log(ones);
