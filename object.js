var person = { id: 1, name: "naeem" };
console.log(person);
var person = {
    id: 1,
    name: "naeem",
    print: function () {
        console.log(this.id + " " + this.name);
    }
};
console.log(person.name);
console.log(person.id);
console.log(person.id);
person.fees = 10000
console.log(person)
console.log(person.print());