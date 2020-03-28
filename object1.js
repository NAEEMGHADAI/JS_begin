//type 1 of object
//object literal
var person = {
  id: 1,
  name: "naeem",
  graduated: false
};

/*const saboo = {
  name: "saboo",
  fees: "100000"
};
console.log(saboo);

saboo = "naeem";
console.log(saboo);
*/
console.log(person);

person.age = 13;
console.log(person);

console.log(person.name, person.id, person.graduated);

delete person.id;

console.log(person);

person = "naeem";

console.log(person);
