function allUpperCase(string) {
  if (string.length > 10) {
    string = string.toUpperCase();
    console.log(string);
  } else {
    console.log(string);
  }
}

allUpperCase('hello world');
allUpperCase('goodbye');