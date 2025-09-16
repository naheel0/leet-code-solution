/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr= nums.filter((num,_,nums)=>nums.indexOf(num)==nums.lastIndexOf(num))
    return +arr.join("")
};