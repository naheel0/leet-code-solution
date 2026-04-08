/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    smallString=s.slice(0,k)
    revString=smallString.split('').reverse().join('');
    bigString=s.slice(k)
    result=revString+bigString;
    return result
};