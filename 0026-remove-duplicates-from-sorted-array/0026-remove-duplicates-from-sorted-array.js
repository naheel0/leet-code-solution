/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let unique =  [...new Set(nums)]
  for(let i=0;i<unique.length;i++){
    nums[i]=unique[i]
  }
  return unique.length
};