const repeatString = function(string, count) {
    if (count < 0) {
        return "ERROR";
    }
    else return string.repeat(count);
};

// Do not edit below this line
module.exports = repeatString;
