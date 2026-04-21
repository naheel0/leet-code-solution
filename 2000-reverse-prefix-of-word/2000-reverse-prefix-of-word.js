/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let index=word.indexOf(ch);
    let firstWord = word.slice(0, index+1).split("").reverse().join("");
    let secondWord=word.slice(index+1);
    let result =firstWord+secondWord;
    return result;
};