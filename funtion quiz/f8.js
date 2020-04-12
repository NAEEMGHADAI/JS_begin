function curry(add, n1) {
    return function (n2) {
        return add(n1, n2)
    }
}

function mul(n1, n2) {
    return n1 * n2
}

var add3 = curry(mul, 3)
console.log(add3(4));

