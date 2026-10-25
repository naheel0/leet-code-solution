/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let nums = BigInt(num.join(""));
    let result = nums + BigInt(k);
   return result.toString().split("").map(Number);;
};