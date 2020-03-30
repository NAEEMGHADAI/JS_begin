//runs in the context of the caller

this.context = 'global'
console.log(this.context);

//here value of context is not reached in method two
/*function methodTwo() {
    console.log(this.context)
}*/

//arrow function will take the global context
var methodTwo = () => {
    console.log(this.context)
}

function methodOne() {
    this.context = 'local'
    console.log(this.context);
    //
    var methodTwo = () => {
        console.log(this.context)
    }
    methodTwo()
}


methodOne()
methodTwo()