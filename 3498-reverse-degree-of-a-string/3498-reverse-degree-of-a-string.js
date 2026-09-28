/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum=0;
    for(let i=0;i<s.length;i++){
        let value='z'.charCodeAt(0)-s.charCodeAt(i)+1;
        sum+=value*(i+1)
    }
    return sum;
};