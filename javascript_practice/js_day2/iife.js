//immediatly invoked function expression
//do not want global variable to be polluted
//initializtion of code - should be called only once


/*var counter = 10
counter++
console.log(counter);
*/
(function () {
    var counter = 10
    counter++
    console.log(counter);
})()// <--invoke immediately


function somefunction() {
    var counter = 1
    counter++
    console.log(counter);

}

somefunction()

