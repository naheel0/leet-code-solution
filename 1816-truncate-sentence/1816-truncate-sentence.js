/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let words=s.split(" ");
    return words.slice(0,k).join(" ")
};