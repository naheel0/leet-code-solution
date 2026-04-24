/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let value=num.toString().split("");
    let result=0;
    for(let i=0;i<=value.length;i++){
        if(num%value[i]==0) result++
    }
    return result;
};