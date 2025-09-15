/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num =digits.join("");
    let newnum =BigInt(num);
    newnum ++;
    let numArr =newnum.toString().split("").map(Number);
    return numArr;
};