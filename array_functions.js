//forEach
let strengths = [];
mock_data.forEach((person) => {
  // console.log(person.first_name) //displays all the first name from the array
  first_names.push(person.first_name);
});
console.log(first_names.length);

//map
let mock_data_mapped = mock_data.map((person) => {
  return {
    full_name: `${person.first_name} ${person.last_name}`,
    country: person.country,
  };
});
//console.log(mock_data_mapped.length);
//console.log(mock_data_mapped[56]);

//filter
let mock_data_filtered = mock_data.filter((person) => {
  if (person.last_name) {
    return false;
  } else {
    return true;
  }
});
// console.log(mock_data_filtered.length);
// console.log(mock_data_filtered[24].first_name);
// console.log(mock_data_filtered[24].last_name);

//reduce
// let strengths = [];
// mock_data.forEach((person) =>{
//   strengths.push(person.strengths);
// })
// function reducerSum ( total, currentValue){
//   return total + currentValue
// }
// console.log(strengths.length);
// console.log(strengths);
// totalStrength = strengths.reduce(reducerSum);
// console.log("Total Strength: ",totalStrength);

//reduce
let mock_data_reduced = mock_data.reduce((total, currentValue, index) => {
  console.log(index);
  console.log(total.strength);
  return { strength: total.strength + currentValue.strength };
});

console.log('Total strength: ');
console.log(JSON.stringify(mock_data_reduced.strength));
