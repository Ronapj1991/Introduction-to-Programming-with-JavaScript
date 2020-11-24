let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// this causes an infinite loop because on line 3 counter keeps getting assigned the value 1
//line 5 is useless