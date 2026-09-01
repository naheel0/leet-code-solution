/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
        let revWord=words[i].split("").reverse().join("");
        if(words[i]==revWord) return words[i];
    }
    return ""
};