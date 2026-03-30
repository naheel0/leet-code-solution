/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let regex = new RegExp(`^[${allowed}]+$`);
    let result=0;
    for(let i=0;i<words.length;i++){
        if(regex.test(words[i])){
            result++
        }
    }
    return result;
};