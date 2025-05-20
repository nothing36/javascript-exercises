const sumAll = function(lowNum, highNum) {
    // swap numbers into correct position
    if (lowNum > highNum) [lowNum, highNum] = [highNum, lowNum];
    let sumTotal = 0

    // error checking
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    // add numbers using for loop increment
    for (i = lowNum; i < highNum + 1; i++) {
        sumTotal += i;
    }

    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
