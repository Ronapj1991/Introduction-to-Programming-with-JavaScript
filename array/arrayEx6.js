let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  return array.map(letters => {
    let numbers = letters.length;
    return numbers;
  }).filter(number => {
    if (number % 2 !== 0) {
      return number;
    }
  });
}