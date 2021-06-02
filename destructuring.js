// destructuring

let person = { firstName: 'ansh', age: 40, email: 'ansh@atgenx.com' };
let { firstName: x, age: y } = person;

console.log(x);
console.log(y);

function logNameAndAge({ firstName, age }) {
  console.log(`my name is ${firstName} and i am ${age} years old`);
}

logNameAndAge(person);
