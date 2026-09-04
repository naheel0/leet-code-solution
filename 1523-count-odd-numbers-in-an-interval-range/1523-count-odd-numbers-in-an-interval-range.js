/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let result=0;
    for(let i =low;i<=high;i++){
        if(i%2!=0)result++;
    }
    return result;
};