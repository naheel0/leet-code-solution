/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   let arr ="";
   for(let i=0;i<haystack.length;i++){
       arr+=haystack[i]
     if(arr==needle){
        return 0
     }
   }
   return -1 
};