// spread syntax
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8];

function sumFunc(firstNumber, secondNumber, ...numbers) {
  total = firstNumber + secondNumber;
  numbers.forEach((number) => {
    total = total + number;
  });
  console.log(total);
}

sumFunc(1, 2, 1, 1, 1, 1);

let numberStore = [0, 1, 2];
let newNumber = [12, 17, 19];

numberStore = [...numberStore, ...newNumber];
console.log(numberStore);
