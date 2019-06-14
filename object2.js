var amitabh = new Object()
console.log(amitabh)
amitabh.name = "Amitabh";
amitabh.family = "bacchan";
console.log(amitabh)
console.log(amitabh.name)
console.log(amitabh.family)
var abhishek = Object.create(amitabh);
abhishek.name = "Bunty";
console.log(abhishek);
console.log(abhishek.family);
console.log(abhishek.__proto__);
abhishek.__proto__.family = "patel";
console.log(amitabh.family);
console.log(abhishek.family);
var aradhna = Object.create(abhishek)
console.log(aradhna.family);
aradhna.__proto__.__proto__.family = "ghadai";
console.log(aradhna.family);
console.log(amitabh.family);