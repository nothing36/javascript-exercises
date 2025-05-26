const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanWord = word
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    backwords = cleanWord.split("").reverse().join("")
    if (backwords == cleanWord) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
