/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numstr = x.toString()
   let str =numstr.split("").reverse().join("")
   return x == str
};

