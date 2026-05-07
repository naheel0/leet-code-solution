/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let sum=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                let currentSum=(nums[i]-nums[j])*nums[k];
                if(currentSum>sum)sum=currentSum;
            }
        }
    }
    return sum;
};