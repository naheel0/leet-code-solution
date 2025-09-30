/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currentvalue =0;
    let maxvalue =0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            currentvalue++
            maxvalue =Math.max(currentvalue,maxvalue)
        }else{
            currentvalue=0
        }
    }
    return maxvalue
};