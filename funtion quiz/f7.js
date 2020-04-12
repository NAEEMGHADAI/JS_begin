const sums = (a) => {
    function dup(b) {
        return a + b
    }
    return dup
}

var res = sums(3)(4)
console.log(res);

