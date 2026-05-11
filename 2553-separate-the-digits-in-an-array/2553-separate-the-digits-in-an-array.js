/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let num=nums.join("");
    let answer=num.split("");
    return answer.map(Number);
};