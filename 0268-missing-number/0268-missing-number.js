/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    n=nums.length;
    arraySum=0;
    NnumTotal=n*(n+1)/2;
    for(let i=0;i<nums.length;i++){
        arraySum+=nums[i];
    }
    return NnumTotal-arraySum;
};