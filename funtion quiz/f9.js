function liftf(binary) {
    return function (n2) {
        return function (n1) {
            return binary(n1, n2)
        }
    }
}

var add2 = liftf(add)
console.log(add2(1)(2));

function add(n1, n2) {
    return n1 + n2
}


