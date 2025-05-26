const fibonacci = function(num) {
    if (num == 0) {return 0}
    if (num < 0) {return "OOPS"}
    let fibArr = [0, 1]

    for (let i = 2; i <= num; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    
    return fibArr.pop()
};

// Do not edit below this line
module.exports = fibonacci;
