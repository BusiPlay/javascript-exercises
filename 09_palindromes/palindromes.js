const palindromes = function (maybePalindrome) {
    maybePalindrome = maybePalindrome.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_ `~()]/g,"").split('')
    reversed = [...maybePalindrome]
    reversed.reverse()
    console.log(reversed)
    console.log(maybePalindrome)
    return JSON.stringify(maybePalindrome.filter(n=>n)) == JSON.stringify(reversed.filter(n=>n))
};

// Do not edit below this line
module.exports = palindromes;
