const fibonacci = function(seq) {
    //calculates n'th number if fibonacci sequence
    if (seq < 0 ) {
        return "OOPS"
    }
    arr = [0,1]
    for (i=2;  i <= seq; i++) {
        arr[i]=arr[i-2] + arr[i-1]
    }
    console.log(arr)
    return arr[seq]
};

// Do not edit below this line
module.exports = fibonacci;
