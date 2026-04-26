/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   let words=s.split(" ");
   let result=[];
   for(let i=0;i<words.length;i++){
    revWord=words[i].split("").reverse().join("");
    result.push(revWord);
   }
   return result.join(" ");
};