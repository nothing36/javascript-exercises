const leapYears = function(year) {
const isDivFour = year % 4 == 0;
const isCentury = year % 100 == 0;
const isDivFourHundred = year % 400 == 0;

if (isDivFour && (!isCentury || isDivFourHundred)) {
    return true
} else {
    return false
}
};

// Do not edit below this line
module.exports = leapYears;
