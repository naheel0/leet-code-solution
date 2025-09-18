/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let unique =[...new Set(nums)].join("")
   let num =nums.join("")
   if(num==unique){
    return false
   } else{
    return true
   }
};