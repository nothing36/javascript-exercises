const repeatString = function(message, count) {
    let returnMsg = ""

    // check boundaries
    if (count < 0) {
        return "ERROR"
    }

    // repeat message
    for (i = 0; i < count; i ++) {
        returnMsg = returnMsg + message
    }

    return returnMsg
};

// Do not edit below this line
module.exports = repeatString;
