function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// the function takes a string as an argument
// .split splits the string with a delimiter of space and returns it in an array
//reverses the order of the string
//map the length of the reversed arrays