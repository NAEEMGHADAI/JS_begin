function arg(name) {
    const names = () => {
        return name
    }
    return names
}

var n = arg('naeem')
console.log(n());
