function evenOrOdd(number) {
  if (Number.isInteger(number) === false) {
    console.log(`Not a number`);
    return;
  } 
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}