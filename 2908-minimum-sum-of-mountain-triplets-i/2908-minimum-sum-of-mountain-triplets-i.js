/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let sum=Infinity;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                let currentsum=0;
                if(nums[i]<nums[j] && nums[k]<nums[j]){
                   currentsum=nums[i]+nums[j]+nums[k]
                   if(currentsum <sum) sum=currentsum;
                }
            }
        }
    }
    return sum === Infinity ? -1 : sum;
};