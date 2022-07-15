const findTheOldest = function(people) {
    let maxAge=0
    let oldestPerson = {}
    for (i=0; i<people.length; i++) {
        person = people[i]
        if (!person.yearOfDeath) {
            today = new Date()
            person.yearOfDeath = today.getFullYear()
        }
        if (person.yearOfDeath - person.yearOfBirth > maxAge) {
            oldestPerson = person
            maxAge = person.yearOfDeath - person.yearOfBirth
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
