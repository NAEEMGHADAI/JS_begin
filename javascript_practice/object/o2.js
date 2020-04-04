var amithab = new Object()

amithab.name = 'amitabh'
amithab.familyname = 'bachhan'

console.log(amithab.toString);

//3rd way to create object
var abhishek = Object.create(amithab)

abhishek.name = 'bunty'

console.log(abhishek.familyname);

amithab.bankbalance = 1000000

console.log(abhishek.bankbalance);

console.log(abhishek.hasOwnProperty('bankbalance'));

for (const i in abhishek) {
    console.log(i);

}


