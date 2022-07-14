const sumAll = function(start,end) {
    if ( start < 0 || end < 0 ) {
        return "ERROR"
    }
    else if (typeof(start) != 'number' || typeof(end) != 'number') {
        return "ERROR"
    }
    else {
        let sum = 0
        //allow starting with larger number first and swap
        if (start > end) {
            [start, end] = [end, start]
        }
        for (let i = start; i <= end; i++) {
            sum += i
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
