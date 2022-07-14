const removeFromArray = function() {
    let srcArray = arguments[0];
    let trgArray = [];
    for (let i=1; i<arguments.length; i++){
        while (srcArray.indexOf(arguments[i]) != -1) {
            srcArray[srcArray.indexOf(arguments[i])]='';
        } 
    }
    trgArray = srcArray.filter(n=>n);
    return trgArray;

};

// Do not edit below this line
module.exports = removeFromArray;
