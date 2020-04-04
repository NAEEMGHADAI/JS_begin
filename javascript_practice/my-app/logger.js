function log(message) {
    console.log(message);
}

function saySomething() {
    console.log("BLA BLA BLA....")
}

//module.exports.logfunction = log
//module.exports.saySomethingfunction = saySomething

module.exports = {
    logfunction: log,
    saySomethingfunction: saySomething
}