let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//logs [1, 4, 3] 
//changed the same value stored in memory