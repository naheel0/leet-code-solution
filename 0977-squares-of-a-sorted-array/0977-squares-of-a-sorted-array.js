/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
     let square =nums.map((a)=>a*a)
    return square.sort((a,b)=>a-b)
};