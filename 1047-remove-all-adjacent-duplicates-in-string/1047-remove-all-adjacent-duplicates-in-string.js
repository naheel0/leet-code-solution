/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let result=[];
let letters=s.split("")
for(let i=0;i<=letters.length;i++){
  if (result[result.length - 1] === letters[i]) result.pop();
  else(result.push(letters[i]));
}
return result.join("")
};