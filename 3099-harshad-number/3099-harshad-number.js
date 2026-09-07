/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let nums = x.toString().split("").map(Number);
    let sum = nums.reduce((a, b) => a + b, 0);
    if(x%sum===0)return sum;
    else return -1;
};