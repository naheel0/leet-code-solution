/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let longest =0
    for(let i=0;i<sentences.length;i++){
        let numberofwords = sentences[i].split(" ").length
        if(numberofwords>longest){
            longest =numberofwords;
        }
    }
    return longest 
};