const caesar = function(str, shift) {
    return str.split('').map((char)=>
         shiftIfAlpha(char,shift)).map((a)=>String.fromCharCode(a)).join('')
};

const shiftIfAlpha = function(strChar, shift) {
    let charCode = strChar.charCodeAt(0)
    if (shift < 0) {
        shift = shift % 26 + 26
    }
    if (charCode >=65 && charCode < 91) {
        return ((charCode - 65 + shift) % 26 + 65) 
    }
    else if (charCode >= 97 && charCode < 123) {
        return ((charCode - 97 + shift) % 26 + 97)
    }
    else return charCode

}
// Do not edit below this line
module.exports = caesar;
