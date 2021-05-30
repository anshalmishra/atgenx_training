var name = "Sima"

{
  let name = " Rima";
  let marks = 80;
  marks = marks + 10;
  const average = 78;
  console.log(" inside block");
  console.log("Scoped name",name);
  console.log("scoped marks", marks);
  console.log( "scoped avg", average);
}
console.log("global name",name);

function printName(){
  console.log("inside function", name);
}
printName();