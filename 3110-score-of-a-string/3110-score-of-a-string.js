/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let result=0;
    for(let i=0;i<s.length-1;i++){
        let current=s[i].charCodeAt(0);
        let next=s[i+1].charCodeAt(0);
        result+=Math.abs(current-next)
    }
    return result;
};