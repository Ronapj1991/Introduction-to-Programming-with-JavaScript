
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

//this won't throw an error because FOO is defined at a global level