const getTheTitles = function(lib) {
    titleArr = []
    for (i=0; i < lib.length; i++) {
        titleArr[i] = lib[i]["title"]
        console.log(lib[i])
        console.log(typeof(lib[i]))
    }
    return titleArr

};

// Do not edit below this line
module.exports = getTheTitles;
