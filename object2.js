//type 2 of creating object

var Employee = new Object();
console.log(Employee);

Employee.id = 1;
Employee.name = "naeem";
console.log(Employee);

delete Employee.id;
console.log(Employee);
