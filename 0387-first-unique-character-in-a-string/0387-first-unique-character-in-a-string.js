/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let unique = s.split("").filter((item)=>s.indexOf(item) === s.lastIndexOf(item));
   if(unique.length==0){
    return -1
   }else{
    let char = unique.at(0)
    return s.indexOf(char)
   }
};