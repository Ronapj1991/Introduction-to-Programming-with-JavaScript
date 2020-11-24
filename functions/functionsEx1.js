let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

//logs 1 the value of bar declared globally was called on line 7;