let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  return array.reduce((accumulator, element) => {
    let numbers = element.length;
    if (numbers % 2 !== 0) {
      accumulator.push(numbers);
    }
    return accumulator;
  }, []);
}