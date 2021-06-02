//hoisting
var var1 = 'stringValue';
var var2 = 'anotherValue';

strcatFunc(var1, var2, var3);

function strcatFunc(str1, str2, str3) {
  console.log(str1 + str2 + str3);
}

{
  var scopeString = 'scopedString';
  console.log(var3);
}
console.log(scopeString);
var var3 = 'thirdvalue';
