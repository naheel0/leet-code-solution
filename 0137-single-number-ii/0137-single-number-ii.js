/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result;
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i])==nums.lastIndexOf(nums[i])) result=(nums[i]); 
    }
    return result; 
};