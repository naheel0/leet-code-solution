/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let NewSentence=[...new Set(sentence)].sort().join("");
    return NewSentence.includes(alphabet);
};