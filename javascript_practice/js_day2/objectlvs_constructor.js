//object literal

var person = {
    id: 1,
    name: 'zaki'
}

//const arsh = new person();
var arsh = new Object()
console.log(arsh);


//contructor function

function Employee(id, name) {
    this.emp_id = id
    this.emp_name = name

    this.display = function () {
        return this.emp_name
    }
}

var aiman = new Employee(1, 'naeem');
console.log(aiman);

console.log(aiman.display());