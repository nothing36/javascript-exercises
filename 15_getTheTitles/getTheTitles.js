const getTheTitles = function(bookArr) {
    let bookTitles = []
    bookArr.forEach(book => {
        bookTitles.push(book.title)
    })
    return bookTitles
};

// Do not edit below this line
module.exports = getTheTitles;
