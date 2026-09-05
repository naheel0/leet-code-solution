/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let binaryNum=n.toString(2);
    let nums=binaryNum.split("");
    return nums.filter(num => num == 1).length;

};