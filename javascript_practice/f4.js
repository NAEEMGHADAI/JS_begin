//call back functions
//there are two tpyes of call back functions
//syncronous and asyncronous call back function
//javascript works on asyncronous 

const amount = (a, b, callback) => {
    //function body
    console.log(callback);
    c = a + b
    console.log(c);
    console.log('Your bill amount is ', c)
    callback();


}


const paymentDone = () => {
    console.log('your payment is done')
}
/*add(10, 20, () => {
    console.log('hello world')

});*/

const paymentDecline = () => {
    console.log('your payment is decline')
}

var payment = true;
if (payment) {
    amount(10, 20, paymentDone)
}
else {
    amount(10, 20, paymentDecline)
}