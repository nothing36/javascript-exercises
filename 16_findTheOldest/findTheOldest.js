const findTheOldest = function(peopleArr) {
    let oldestPerson = null
    let oldestAge = null

    peopleArr.forEach(person => {
        let age;
        if (!person.yearOfDeath) {
            age = new Date().getFullYear() - person.yearOfBirth
        } else {
            age = person.yearOfDeath - person.yearOfBirth
        }

        if (age > oldestAge || oldestPerson == null) {
            oldestPerson = person
            oldestAge = age
        }
    });

    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
