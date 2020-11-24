let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj['qux'] = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

//forEach does not iterate over prototypes

for (let key in myObj) {
  console.log(key);
}

//for let in iterates over prototypes
//we can use hasOwnproperty if (myObj.hasOwnProperty(key));