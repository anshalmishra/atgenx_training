//closures

function OuterFunction() {
  var outerVariable = 1;
  function InnerFunction() {
    console.log(outerVariable);
  }
  return InnerFunction();
}
var innerFunc = OuterFunction();
innerFunc();

function makeAdder(valueToAdd) {
  function add(parameter) {
    return valueToAdd + parameter;
  }
  return add;
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(10));
console.log(add10(10));
