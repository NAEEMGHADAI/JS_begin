function Emp(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    var print = function () {
        console.log(this.name + " " + this.id);
    };
}
var result = Emp(1, "aiman");
var naeem = new Emp(1, "Naeem Ghadai", 18);
var salik = new Emp(2, "Salik Mulla", 18);
console.log(naeem);
console.log(salik);
new Emp.naeem.print();
