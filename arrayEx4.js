let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// Desired result:
//  [
//    'odd', 'odd', 'even', 'odd',
//    'even', 'even', 'even', 'odd',
//    'odd', 'even', 'even',
//  ]

let newArray = myArray.map(number => {
  if (number % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(newArray);