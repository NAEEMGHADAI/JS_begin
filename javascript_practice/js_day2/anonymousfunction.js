//function does not have name is called anonymous function


var sample = function () {
    console.log('binding function to variable')
}


const amount = (a, b, callback) => {
    //function body
    console.log(callback);
    c = a + b
    console.log(c);
    console.log('Your bill amount is ', c)
    callback();
}

amount(10, 20, sample)