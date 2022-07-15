const caesar = function(str, shift) {
    return str.split('').map((char)=>
         shiftIfAlpha(char,shift)).map((a)=>String.fromCharCode(a)).join('')
};

const shiftIfAlpha = function(strChar, shift) {
    let re = new RegExp("^([a-zA-Z])");
    if (re.test(strChar)) {
        console.log(strChar) 
        return strChar.charCodeAt(0) + shift
    } else return strChar.charCodeAt(0) 
}
// Do not edit below this line
module.exports = caesar;
