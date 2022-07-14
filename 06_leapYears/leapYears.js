const leapYears = function(testYear) {
    if (testYear%400 == 0) {
        return true
    }
    else if (testYear % 100 == 0) {
        return false
    }
    else if (testYear % 4 == 0) {
        return true
    }
    else return false

};

// Do not edit below this line
module.exports = leapYears;
