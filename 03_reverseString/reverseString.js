const reverseString = function(str) {
    let revStr = ''
    for (i=str.length; i>=0; i--){
        revStr = revStr.concat(str.charAt(i))
    }
    return revStr
};

// Do not edit below this line
module.exports = reverseString;
